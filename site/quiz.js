/* College Culture quiz: UI, saving and matching. Questions live in quiz-questions.js,
   school data in schools/quiz-data.js. Answers are saved only on this device (localStorage). */
(function () {
  'use strict';

  var SECTIONS = window.QUIZ_SECTIONS;
  var SCHOOLS = window.QUIZ_DATA || {};
  var CITIES = window.QUIZ_CITIES;
  var STATES = window.QUIZ_STATES;
  var NE = { MA: 'Massachusetts', NH: 'New Hampshire', RI: 'Rhode Island', CT: 'Connecticut', VT: 'Vermont', ME: 'Maine' };
  var KEY = 'cc-quiz-v1';
  var IMP_WEIGHT = [0, 0.25, 0.6, 1, 1.8, 3];
  var IMP_NAMES = ['Barely', 'Slight', 'Matters', 'Big deal', 'Dealbreaker'];
  // Built-in weight per question: some things (study area, cost, distance) count more than others (traditions, vibe words)
  var BASE = {};
  SECTIONS.forEach(function (s) { s.questions.forEach(function (q) { BASE[q.id] = q.weight || 1; }); });

  // ---------- saving ----------
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; }
  }
  var state = load() || { mode: null, a: {}, prefs: { wantStates: [] } };
  if (!state.prefs) state.prefs = { wantStates: [] };
  if (!state.prefs.wantStates) state.prefs.wantStates = [];
  var saveTimer = null;
  function save() {
    state.updated = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode: answers just won't persist */ }
    var flag = document.getElementById('saved');
    if (flag) {
      flag.textContent = 'Saved';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { flag.textContent = ''; }, 1500);
    }
  }

  // ---------- helpers ----------
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      [].concat(c).forEach(function (x) { if (x != null && x !== false) el.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); });
    }
    return el;
  }
  function allQuestions() {
    var out = [];
    SECTIONS.forEach(function (s) { s.questions.forEach(function (q) { out.push(q); }); });
    return out;
  }
  function activeQuestions() {
    return allQuestions().filter(function (q) { return state.mode === 'deep' || q.quick; });
  }
  function answered(q) {
    var a = state.a[q.id];
    if (!a || a.v == null) return false;
    return Array.isArray(a.v) ? a.v.length > 0 : true;
  }
  function miles(lat1, lon1, lat2, lon2) {
    var r = Math.PI / 180, R = 3959;
    var dLat = (lat2 - lat1) * r, dLon = (lon2 - lon1) * r;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  var zipCache = null;
  function zipLocation(zip) {
    if (!/^\d{5}$/.test(zip || '')) return null;
    if (!zipCache) {
      zipCache = { five: {}, three: {} };
      (window.ZIP5 || '').split(';').forEach(function (p) { var i = p.indexOf(':'); zipCache.five[p.slice(0, i)] = p.slice(i + 1); });
      (window.ZIP3 || '').split(';').forEach(function (p) { var i = p.indexOf(':'); zipCache.three[p.slice(0, i)] = p.slice(i + 1); });
    }
    var hit = zipCache.five[zip] || zipCache.three[zip.slice(0, 3)];
    if (!hit) return null;
    var ll = hit.split(',');
    return { lat: +ll[0], lon: +ll[1] };
  }

  // ---------- controls ----------
  // A 1-5 slider you can drag or tap. Starts "unset" until touched.
  // A 1-5 slider you can drag or tap. Starts "unset" until touched. names: optional label for each step.
  function scale(value, low, high, label, onChange, names) {
    var input = h('input', { type: 'range', min: '1', max: '5', step: '1', value: value || 3, 'aria-label': label });
    var wrap = h('div', { class: 'scale' + (value ? '' : ' unset') });
    var readout = h('span', { class: 'scale-value' });
    var ticks = h('div', { class: 'ticks' });
    function paint(v) {
      wrap.style.setProperty('--fill', ((v - 1) / 4 * 100) + '%');
      readout.textContent = wrap.classList.contains('unset') ? 'Slide or tap a number' : v + (names ? ' · ' + names[v - 1] : ' of 5');
      [].forEach.call(ticks.children, function (t, i) { t.classList.toggle('on', !wrap.classList.contains('unset') && i + 1 === +v); });
    }
    function set(v) { input.value = v; wrap.classList.remove('unset'); paint(+v); onChange(+v); }
    input.addEventListener('input', function () { set(input.value); });
    input.addEventListener('pointerdown', function () { if (wrap.classList.contains('unset')) set(input.value); });
    for (var i = 1; i <= 5; i++) (function (n) {
      ticks.appendChild(h('button', { type: 'button', class: 'tick', 'aria-label': label + ': ' + n + (names ? ' ' + names[n - 1] : '') }, String(n)));
      ticks.lastChild.addEventListener('click', function () { set(n); });
    })(i);
    wrap.append(readout, input, ticks, h('div', { class: 'scale-ends small muted' }, h('span', { text: names ? names[0] : low }), h('span', { text: names ? names[4] : high })));
    paint(+input.value);
    return wrap;
  }

  function questionCard(q) {
    var a = state.a[q.id] || {};
    function setV(v) { state.a[q.id] = Object.assign(state.a[q.id] || {}, { v: v }); card.classList.add('done'); save(); updateProgress(); }
    var body;
    if (q.type === 'scale') {
      body = scale(a.v, q.low, q.high, q.text, setV);
    } else {
      var multi = q.type !== 'choice';
      body = h('div', { class: 'chips', role: multi ? 'group' : 'radiogroup', 'aria-label': q.text });
      q.options.forEach(function (o) {
        var on = multi ? (a.v || []).indexOf(o[0]) !== -1 : a.v === o[0];
        var b = h('button', { type: 'button', class: 'chip-btn' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false' }, o[1]);
        b.addEventListener('click', function () {
          if (!multi) {
            body.querySelectorAll('.chip-btn').forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
            b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
            setV(o[0]);
          } else {
            var cur = ((state.a[q.id] || {}).v || []).slice();
            var i = cur.indexOf(o[0]);
            if (i !== -1) cur.splice(i, 1);
            else {
              if (q.type === 'pick3' && cur.length >= 3) return;
              cur.push(o[0]);
            }
            b.classList.toggle('on', i === -1);
            b.setAttribute('aria-pressed', i === -1 ? 'true' : 'false');
            setV(cur);
          }
        });
        body.appendChild(b);
      });
    }
    var card = h('div', { class: 'q' + (answered(q) ? ' done' : ''), id: 'q-' + q.id },
      h('p', { class: 'q-text', text: q.text }),
      q.help ? h('p', { class: 'small muted', text: q.help }) : null,
      q.needsZip ? h('p', { class: 'small muted', text: 'Uses your ZIP code above.' }) : null,
      body,
      q.imp ? h('div', { class: 'imp' },
        h('p', { class: 'small muted', text: 'How much does this matter to you?' }),
        scale(a.imp, 'Barely', 'Dealbreaker', 'How much it matters', function (v) {
          state.a[q.id] = Object.assign(state.a[q.id] || {}, { imp: v }); save();
        }, IMP_NAMES)) : null);
    return card;
  }

  function prefsCard() {
    var p = state.prefs;
    function setP(k, v) { p[k] = v; save(); }
    var zip = h('input', { type: 'text', inputmode: 'numeric', maxlength: '5', pattern: '[0-9]*', id: 'zip', placeholder: 'e.g. 03824', value: p.zip || '', autocomplete: 'postal-code' });
    var zipNote = h('p', { class: 'small muted' });
    function zipCheck() {
      var v = zip.value.replace(/\D/g, '').slice(0, 5);
      zip.value = v;
      setP('zip', v);
      zipNote.textContent = v.length === 5 ? (zipLocation(v) ? 'Got it. Distances will use this ZIP.' : "We don't know that ZIP, so distance won't be used.") : 'Only used on this phone to measure distance.';
    }
    zip.addEventListener('input', zipCheck);
    zipCheck();

    var home = h('select', { id: 'home-state' }, h('option', { value: '', text: 'Pick a state' }));
    STATES.forEach(function (s) { home.appendChild(h('option', { value: s[0], text: s[1], selected: p.homeState === s[0] })); });
    home.addEventListener('change', function () { setP('homeState', home.value); });

    var stateList = h('div', { class: 'state-picks' });
    function drawStates() {
      stateList.textContent = '';
      p.wantStates.forEach(function (code, idx) {
        var sel = h('select', { 'aria-label': 'State you would go to' }, h('option', { value: '', text: 'Pick a state' }));
        Object.keys(NE).forEach(function (c) { sel.appendChild(h('option', { value: c, text: NE[c], selected: code === c })); });
        sel.addEventListener('change', function () { p.wantStates[idx] = sel.value; save(); });
        var rm = h('button', { type: 'button', class: 'link-btn', text: 'Remove', onclick: function () { p.wantStates.splice(idx, 1); save(); drawStates(); } });
        stateList.appendChild(h('div', { class: 'state-pick' }, sel, rm));
      });
      if (p.wantStates.length < 6) stateList.appendChild(h('button', { type: 'button', class: 'link-btn', text: '+ Add a state', onclick: function () { p.wantStates.push(''); save(); drawStates(); } }));
    }
    drawStates();

    var city = h('select', { id: 'near-city' }, h('option', { value: '', text: 'No preference' }));
    CITIES.forEach(function (c) { city.appendChild(h('option', { value: c[0], text: c[1], selected: p.city === c[0] })); });
    var radius = h('select', { id: 'radius', 'aria-label': 'Within how many miles' });
    [10, 25, 50, 100].forEach(function (r) { radius.appendChild(h('option', { value: String(r), text: 'Within ' + r + ' miles', selected: String(p.radius || 25) === String(r) })); });
    city.addEventListener('change', function () { setP('city', city.value); });
    radius.addEventListener('change', function () { setP('radius', +radius.value); });

    return h('section', { class: 'q-section', id: 'prefs' },
      h('h2', { class: 'sec-title', text: 'Your preferences' }),
      h('p', { class: 'small muted', text: 'All optional. Skip anything you want.' }),
      h('div', { class: 'q' },
        h('label', { class: 'q-text', for: 'zip', text: 'Your ZIP code' }), zip, zipNote),
      h('div', { class: 'q' },
        h('label', { class: 'q-text', for: 'home-state', text: 'Your home state' }), home,
        h('p', { class: 'small muted', text: 'Used for in-state tuition.' })),
      h('div', { class: 'q' },
        h('p', { class: 'q-text', text: 'States you want to go to school in' }),
        h('p', { class: 'small muted', text: 'Leave empty for any New England state.' }), stateList),
      h('div', { class: 'q' },
        h('label', { class: 'q-text', for: 'near-city', text: 'Want to be near a city?' }), h('div', { class: 'row-2' }, city, radius)));
  }

  // ---------- views ----------
  var app;
  function show(view) {
    app.textContent = '';
    window.scrollTo(0, 0);
    if (view === 'start') renderStart();
    else if (view === 'quiz') renderQuiz();
    else renderResults();
  }

  function renderStart() {
    var has = state.mode && Object.keys(state.a).length;
    var count = allQuestions().filter(answered).length;
    app.append(h('main', { class: 'wrap start' },
      h('p', { text: 'Answer what you want, skip what you want. We match you with New England schools based on the vibe you are after. Your answers stay on this phone.' }),
      has ? h('div', { class: 'saved-box' },
        h('p', { class: 'q-text', text: 'You have saved answers (' + count + ' answered).' }),
        h('div', { class: 'btn-row' },
          h('button', { type: 'button', class: 'btn-main', text: 'See my matches', onclick: function () { location.hash = 'results'; } }),
          h('button', { type: 'button', class: 'btn-ghost', text: 'Change my answers', onclick: function () { location.hash = 'quiz'; } }),
          h('button', { type: 'button', class: 'link-btn', text: 'Start over', onclick: function () {
            var row = this.parentNode;
            row.textContent = '';
            row.append(h('span', { class: 'small', text: 'Erase all answers?' }),
              h('button', { type: 'button', class: 'btn-ghost', text: 'Yes, erase', onclick: function () { state = { mode: null, a: {}, prefs: { wantStates: [] } }; save(); show('start'); } }),
              h('button', { type: 'button', class: 'link-btn', text: 'Cancel', onclick: function () { show('start'); } }));
          } }))) : null,
      h('div', { class: 'modes' },
        modeCard('quick', 'Quick', '25 questions, about 5 minutes'),
        modeCard('deep', 'Deep', 'All ' + allQuestions().length + ' questions, about 12 minutes. Best matches.'))));
  }
  function modeCard(mode, title, sub) {
    return h('button', { type: 'button', class: 'mode' + (state.mode === mode ? ' on' : ''), onclick: function () { state.mode = mode; save(); location.hash = 'quiz'; } },
      h('span', { class: 'sum-title', text: title }), h('span', { class: 'small muted', text: sub }));
  }

  var progressEl;
  function updateProgress() {
    if (!progressEl) return;
    var qs = activeQuestions();
    var done = qs.filter(answered).length;
    progressEl.querySelector('.count').textContent = done + ' of ' + qs.length + ' answered';
    progressEl.querySelector('.bar-fill').style.width = (qs.length ? done / qs.length * 100 : 0) + '%';
  }

  function renderQuiz() {
    if (!state.mode) { state.mode = 'quick'; save(); }
    progressEl = h('div', { class: 'progress' },
      h('div', { class: 'progress-top' },
        h('span', { class: 'small count' }),
        h('span', { class: 'small muted', id: 'saved', 'aria-live': 'polite' }),
        h('button', { type: 'button', class: 'link-btn small', text: state.mode === 'quick' ? 'Switch to Deep' : 'Switch to Quick',
          onclick: function () { state.mode = state.mode === 'quick' ? 'deep' : 'quick'; save(); show('quiz'); } })),
      h('div', { class: 'bar' }, h('div', { class: 'bar-fill' })));
    var main = h('main', { class: 'wrap quiz' }, progressEl, prefsCard());
    SECTIONS.forEach(function (sec) {
      var qs = sec.questions.filter(function (q) { return state.mode === 'deep' || q.quick; });
      if (!qs.length) return;
      main.appendChild(h('section', { class: 'q-section' }, h('h2', { class: 'sec-title', text: sec.title }), qs.map(questionCard)));
    });
    var notice = h('div', { class: 'notice', hidden: true });
    main.append(notice, h('div', { class: 'submit-row' },
      h('button', { type: 'button', class: 'btn-main', text: 'See my matches', onclick: function () {
        var missed = activeQuestions().filter(function (q) { return !answered(q); });
        if (!missed.length || notice.dataset.shown) { location.hash = 'results'; return; }
        notice.dataset.shown = '1';
        notice.hidden = false;
        notice.textContent = '';
        notice.append(h('p', { class: 'q-text', text: 'Quick heads up: you skipped ' + missed.length + ' question' + (missed.length === 1 ? '' : 's') + '.' }),
          h('ul', { class: 'missed' }, missed.map(function (q) {
            return h('li', null, h('a', { href: '#q-' + q.id, text: q.text, onclick: function (e) {
              e.preventDefault(); document.getElementById('q-' + q.id).scrollIntoView({ block: 'center' });
            } }));
          })),
          h('p', { class: 'small muted', text: "That's fine. Tap See my matches again to skip them." }));
        notice.scrollIntoView({ block: 'start' });
      } })));
    app.appendChild(main);
    updateProgress();
  }

  // ---------- matching ----------
  var DIM_LABEL = { party: 'Party scene', campus: 'Campus feel', spirit: 'School spirit', pressure: 'Academic pressure', career: 'Career focus', greek: 'Greek life', religion: 'Religion', size: 'Size', classSize: 'Small classes' };

  function v(id) { var a = state.a[id]; return a ? a.v : null; }
  function imp(id) { var a = state.a[id]; return a && a.imp ? a.imp : 3; }
  function scaleTarget(id) { var x = v(id); return x == null ? null : (x - 1) * 2.5; }
  function sizeScore(n) { return n < 2000 ? 0 : n < 5000 ? 1 : n < 15000 ? 2 : 3; }

  // Your targets on the same 0-10 meter scales, for the compare view
  function targets() {
    var t = {};
    ['party', 'campus', 'spirit', 'pressure', 'career'].forEach(function (k) { var x = scaleTarget(k); if (x != null) t[k] = x; });
    var g = v('greek'); if (g === 'want') t.greek = 7; else if (g === 'no') t.greek = 1;
    var r = v('religion'); if (r === 'want') t.religion = 7; else if (r === 'secular') t.religion = 0;
    var s = v('size'); if (s) t.size = { tiny: 1, small: 3.5, medium: 6.5, big: 9 }[s];
    var kn = v('knowName'); if (kn != null) t.classSize = (kn - 1) * 2.5;
    return t;
  }
  function schoolDims(s) {
    var d = Object.assign({}, s.meters);
    d.size = [1, 3.5, 6.5, 9][sizeScore(s.undergrad)];
    d.classSize = (s.classSize - 1) * 2.5;
    return d;
  }

  function score(s, ctx) {
    var parts = [], filters = [];
    function add(id, fit, label, w) {
      var weight = (w || 1) * IMP_WEIGHT[imp(id)] * (BASE[id] || 1);
      parts.push({ id: id, fit: Math.max(0, Math.min(1, fit)), w: weight, label: label });
    }
    function hard(id) { return imp(id) === 5; }
    var d = schoolDims(s);

    // meters
    [['party', 'party'], ['campus', 'campus'], ['spirit', 'spirit'], ['pressure', 'pressure'], ['career', 'career']].forEach(function (p) {
      var t = scaleTarget(p[0]); if (t != null) add(p[0], 1 - Math.abs(t - d[p[1]]) / 10, DIM_LABEL[p[1]]);
    });
    var tr = scaleTarget('traditions'); if (tr != null) add('traditions', 1 - Math.abs(tr - d.spirit) / 10, 'Traditions', 0.6);
    var t = targets();
    if (t.greek != null) add('greek', 1 - Math.abs(t.greek - d.greek) / 10, 'Greek life');
    if (t.religion != null) add('religion', 1 - Math.abs(t.religion - d.religion) / 10, 'Religion');

    // size and feel
    var sz = v('size');
    if (sz) { var want = { tiny: 0, small: 1, medium: 2, big: 3 }[sz]; add('size', 1 - Math.abs(want - sizeScore(s.undergrad)) / 2, 'Size'); }
    var kn = v('knowName'); if (kn != null) add('knowName', 1 - Math.abs((kn - 1) - (s.classSize - 1)) / 4, 'Small classes');
    var lec = v('lectures'); if (lec) add('lectures', lec === 'fine' ? 1 : lec === 'some' ? (s.classSize >= 2 ? 1 : 0.5) : (s.classSize >= 4 ? 1 : s.classSize === 3 ? 0.5 : 0), 'Class size');
    var SET = { 'big-city': 0, 'small-city': 1, suburb: 1.5, 'college-town': 2, rural: 3 };
    var st = v('setting'); if (st) add('setting', 1 - Math.abs(SET[st] - SET[s.setting]) / 3, 'Setting');
    var ga = v('getAround'); if (ga) add('getAround', ga === 'car' ? 1 : (s.transit ? 1 : 0.2), 'Getting around');
    var na = v('nature'); if (na && na !== 'none') add('nature', na === 'both' ? ((s.ocean ? 0.5 : 0) + (s.mountains ? 0.5 : 0)) : (s[na] ? 1 : 0), 'Nature nearby');

    // distance
    var dist = ctx.home ? miles(ctx.home.lat, ctx.home.lon, s.lat, s.lon) : null;
    var dv = v('distance');
    if (dist != null && dv && dv !== 'any') {
      var ok = { home: dist <= 30, hour: dist <= 60, three: dist > 25 && dist <= 200, far: dist > 150 }[dv];
      var near = { home: dist <= 45, hour: dist <= 80, three: dist > 15 && dist <= 240, far: dist > 110 }[dv];
      add('distance', ok ? 1 : near ? 0.5 : 0, 'Distance from home');
      if (!ok && (hard('distance') || ctx.deal.distance)) filters.push(Math.round(dist) + ' miles from home');
    }
    var live = v('live');
    if (live === 'campus') add('live', s.residential / 100 + 0.2, 'Living on campus');
    if (live === 'commute') add('live', dist != null ? (dist <= 30 ? 1 : dist <= 45 ? 0.5 : 0) : 1 - s.residential / 150, 'Commuting');
    var ho = v('homeOften');
    if (ho === 'weekends' && dist != null) add('homeOften', dist <= 90 ? 1 : dist <= 150 ? 0.5 : 0, 'Getting home');
    if (ho === 'rarely' && dist != null) add('homeOften', dist >= 60 ? 1 : 0.6, 'Getting away', 0.5);

    // states and city
    var want = ctx.wantStates;
    if (want.length) {
      var inState = want.indexOf(s.state) !== -1;
      parts.push({ id: 'states', fit: inState ? 1 : 0, w: 1.8, label: 'Your states' });
      if (!inState && ctx.deal.states) filters.push('in ' + s.state);
    }
    if (ctx.city) {
      var cd = miles(ctx.city[2], ctx.city[3], s.lat, s.lon);
      var r = ctx.radius;
      parts.push({ id: 'city', fit: cd <= r ? 1 : cd <= r * 1.6 ? 0.5 : 0, w: 1.8, label: 'Near ' + ctx.city[1] });
      if (cd > r) filters.push(Math.round(cd) + ' miles from ' + ctx.city[1]);
    }

    // academics
    var areas = (v('areas') || []).filter(function (x) { return x !== 'undecided'; });
    if (areas.length) {
      var hit = areas.filter(function (x) { return s.areas.indexOf(x) !== -1; }).length;
      parts.push({ id: 'areas', fit: hit ? 0.6 + 0.4 * hit / areas.length : 0.15, w: 2, label: 'Your study areas' });
      if (!hit && ctx.deal.major) filters.push('not known for your study areas');
    }
    var cur = v('curriculum'); if (cur && cur !== 'either') add('curriculum', cur === 'open' ? (s.openCurriculum ? 1 : 0.4) : (s.openCurriculum ? 0.4 : 1), 'Curriculum');
    var it = scaleTarget('internships'); if (it != null) add('internships', 1 - Math.abs(it - (s.coop ? 10 : d.career)) / 10, 'Internships');
    var fy = v('fiveYears'); if (fy === 'yes') add('fiveYears', s.coop ? 1 : 0.5, 'Co-op'); if (fy === 'no') add('fiveYears', s.coop ? 0.3 : 1, '4-year path');
    var ab = scaleTarget('abroad'); if (ab != null) add('abroad', 1 - Math.max(0, ab - (s.studyAbroad - 1) * 2.5) / 10, 'Study abroad');

    // social
    var wk = v('weekends'); if (wk === 'busy') add('weekends', (s.residential / 100) * 0.6 + d.party / 25, 'Busy weekends');
    var sw = v('socialWhere');
    if (sw === 'campus') add('socialWhere', s.residential / 100, 'Campus social life');
    if (sw === 'city') add('socialWhere', SET[s.setting] <= 1 ? 1 : 0.3, 'City social life');

    // sports
    var pl = v('play');
    if (pl === 'varsity') add('play', s.division !== 'none' ? 1 : 0, 'Varsity sports');
    if (pl === 'club') add('play', s.undergrad > 1500 ? 1 : 0.5, 'Club sports', 0.5);
    if (v('d1') === 'yes') add('d1', s.division === 'D1' ? 1 : 0, 'Division I');

    // values
    if (v('womens') === 'no' && s.womens) filters.push("a women's college");
    var ac = scaleTarget('activism'); if (ac != null) add('activism', 1 - Math.abs(ac - (s.tags.indexOf('activist') !== -1 ? 9 : 4)) / 10, 'Activism');

    // money
    var cost = v('cost');
    if (cost && cost !== 'none') {
      var home = state.prefs.homeState;
      var c = s.public ? (home === s.state ? 1 : 0.65) : (v('aid') === 'yes' && s.admit >= 4 ? 0.7 : 0.3);
      add('cost', c, 'Cost', cost === 'cheapest' ? 1.6 : cost === 'lot' ? 1.2 : 0.7);
    }

    // school type
    var spec = v('specialty') || [];
    var specialtyTypes = ['art', 'music', 'maritime-military', 'engineering', 'business', 'health', 'online-adult'];
    if (specialtyTypes.indexOf(s.type) !== -1 && spec.indexOf(s.type) === -1) {
      var areaMatch = areas.some(function (x) { return s.areas.indexOf(x) !== -1; });
      if (!areaMatch) filters.push('a specialty school you did not pick');
    }
    var stc = v('structure');
    if (stc === 'structured') add('structure', s.type === 'maritime-military' ? 1 : 0.3, 'Structure');
    if (stc === 'freedom') add('structure', s.type === 'maritime-military' ? 0 : 1, 'Freedom');
    var known = scaleTarget('known'); if (known != null) add('known', 1 - Math.max(0, known - (10 - s.rank / 12.7)) / 10, 'Name recognition');

    // vibe
    var tags = v('tags') || [];
    if (tags.length) parts.push({ id: 'tags', fit: tags.filter(function (x) { return s.tags.indexOf(x) !== -1; }).length / tags.length, w: 0.9, label: 'Your vibe words' });
    var od = scaleTarget('outdoors'); if (od != null) add('outdoors', 1 - Math.max(0, od - ((s.mountains ? 6 : 0) + (s.tags.indexOf('outdoorsy') !== -1 ? 4 : 0))) / 10, 'Outdoors');
    (v('miserable') || []).forEach(function (m) {
      var bad = { 'tiny-town': s.setting === 'rural' || (s.setting === 'college-town' && s.undergrad < 3000), 'no-parties': d.party <= 2, 'huge-classes': s.classSize <= 2,
        'long-commute': live === 'commute' && dist != null && dist > 45, 'religious-rules': s.religious, 'greek-heavy': d.greek >= 7, 'big-city': s.setting === 'big-city' }[m];
      parts.push({ id: 'miserable', fit: bad ? 0 : 1, w: 1, label: 'Avoids what you hate' });
    });

    // going deeper
    var wi = v('winter');
    if (wi != null) {
      var north = Math.max(0, Math.min(1, (s.lat - 41.2) / 3.8)); // 0 = southern CT, 1 = northern Maine
      add('winter', wi >= 3 ? 1 - north * (wi - 2) / 3 : 0.6 + 0.4 * (s.mountains ? 1 : north), 'Winters');
    }
    var ca = scaleTarget('cityAccess');
    if (ca != null) {
      var near = Math.min.apply(null, [['boston'], ['providence'], ['hartford'], ['new-haven'], ['nyc']].map(function (k) {
        var c = CITIES.filter(function (x) { return x[0] === k[0]; })[0];
        return miles(c[2], c[3], s.lat, s.lon);
      }));
      var access = near <= 12 ? 10 : near <= 30 ? 7 : near <= 60 ? 4 : 1;
      add('cityAccess', 1 - Math.max(0, ca - access) / 10, 'Big city nearby');
    }
    var rs = scaleTarget('research');
    if (rs != null) {
      var rlevel = (s.type === 'university' ? 2 : s.type === 'liberal-arts' ? 1 : 0) + Math.max(0, s.admit - 2) * 2; // 0-8
      add('research', 1 - Math.max(0, rs - rlevel * 1.25) / 10, 'Research');
    }
    var bz = v('business');
    if (bz && bz !== 'no') add('business', (s.areas.indexOf('business') !== -1 ? 0.6 : 0.2) + (s.tags.indexOf('career-focused') !== -1 || s.tags.indexOf('ambitious') !== -1 ? 0.4 : 0), 'Business path', bz === 'yes' ? 1 : 0.5);
    var wj = v('workJob');
    if (wj && wj !== 'no') add('workJob', SET[s.setting] <= 1.5 || s.transit ? 1 : 0.4, 'Jobs nearby', wj === 'yes' ? 1 : 0.5);
    var dv2 = scaleTarget('diversity');
    if (dv2 != null) add('diversity', 1 - Math.max(0, dv2 - (s.tags.indexOf('diverse') !== -1 ? 9 : SET[s.setting] <= 1 ? 6 : 3)) / 10, 'Diversity');
    var sk = v('schoolKind');
    if (sk && sk !== 'either') add('schoolKind', sk === 'liberal-arts' ? (s.type === 'liberal-arts' ? 1 : s.undergrad < 3000 ? 0.5 : 0) : (s.type === 'university' ? 1 : 0.3), sk === 'liberal-arts' ? 'Liberal arts' : 'University');

    // dealbreakers
    if (ctx.deal.dorms && s.residential < 20) filters.push('barely any dorms');
    if (ctx.deal['no-greek'] && d.greek >= 3) filters.push('has Greek life');
    if (ctx.deal['not-religious'] && s.religious) filters.push('religious');
    if (ctx.deal.d1 && s.division !== 'D1') filters.push('not Division I');

    // importance-5 answers act as dealbreakers too
    parts.forEach(function (p) { if (imp(p.id) === 5 && p.fit < 0.5 && ['distance', 'states', 'city', 'areas'].indexOf(p.id) === -1) filters.push(p.label.toLowerCase() + ' is off'); });

    var tw = parts.reduce(function (a, p) { return a + p.w; }, 0);
    var fit = tw ? parts.reduce(function (a, p) { return a + p.w * p.fit; }, 0) / tw : 0.5;
    return { s: s, fit: fit, parts: parts, filters: filters, dist: dist };
  }

  function chance(s) {
    var g = v('grades');
    if (!g) return null;
    var me = { top: 4.6, above: 3.6, average: 2.6, working: 1.6 }[g];
    if (s.admit >= 5) return 'Reach';
    var diff = s.admit - me;
    return diff > 0.6 ? 'Reach' : diff > -0.6 ? 'Match' : 'Likely';
  }

  function runMatch() {
    var cityRow = null;
    CITIES.forEach(function (c) { if (c[0] === state.prefs.city) cityRow = c; });
    var deal = {};
    (v('dealbreakers') || []).forEach(function (x) { deal[x] = true; });
    var ctx = {
      home: zipLocation(state.prefs.zip),
      wantStates: (state.prefs.wantStates || []).filter(Boolean),
      city: cityRow, radius: state.prefs.radius || 25, deal: deal
    };
    var all = Object.keys(SCHOOLS).map(function (id) { var r = score(SCHOOLS[id], ctx); r.id = id; return r; });
    all.sort(function (a, b) { return b.fit - a.fit || a.s.rank - b.s.rank; });
    return {
      fits: all.filter(function (r) { return !r.filters.length; }),
      outside: all.filter(function (r) { return r.filters.length; }),
      all: all, ctx: ctx
    };
  }

  // ---------- results ----------
  function summary() {
    var bits = [];
    var sz = v('size'); if (sz) bits.push('a ' + { tiny: 'tiny', small: 'small', medium: 'mid-size', big: 'big' }[sz] + ' school');
    var st = v('setting'); if (st) bits.push({ 'big-city': 'in a big city', 'small-city': 'in a small city', 'college-town': 'in a college town', rural: 'out in the country' }[st]);
    var p = v('party'); if (p) bits.push(['a quiet social life', 'a pretty low-key social life', 'some parties but not every night', 'a busy social life', 'a big party scene'][p - 1]);
    var pr = v('pressure'); if (pr) bits.push(['easygoing classes', 'classes on the easier side', 'medium-hard classes', 'hard classes', 'really intense classes'][pr - 1]);
    var c = v('career'); if (c && c >= 4) bits.push('a clear path to a job');
    var sp = v('spirit'); if (sp && sp >= 4) bits.push('real school spirit');
    if (!bits.length) return 'Answer a few more questions and we can describe the vibe you want.';
    var last = bits.pop();
    return 'You want ' + (bits.length ? bits.join(', ') + ' and ' + last : last) + '.';
  }

  function chip(text, cls) { return h('span', { class: 'tag ' + (cls || ''), text: text }); }

  var CMP_DIMS = ['party', 'campus', 'spirit', 'pressure', 'career', 'greek', 'religion', 'size', 'classSize'];

  // You-vs-school bars for one school
  function compareChart(s) {
    var t = targets(), d = schoolDims(s), notes = [];
    var box = h('div', { class: 'compare-body' },
      h('div', { class: 'legend small muted' },
        h('span', null, h('span', { class: 'key key-school' }), s.short), h('span', null, h('span', { class: 'key key-you' }), 'You')));
    CMP_DIMS.forEach(function (k) {
      var you = t[k];
      box.appendChild(h('div', { class: 'cmp-row' },
        h('span', { class: 'small', text: DIM_LABEL[k] }),
        h('span', { class: 'cmp-track' },
          h('span', { class: 'cmp-fill', style: 'width:' + d[k] * 10 + '%' }),
          you != null ? h('span', { class: 'cmp-you', style: 'left:calc(' + you * 10 + '% - 2px)' }) : null)));
      if (you != null && Math.abs(you - d[k]) >= 3.5) notes.push(DIM_LABEL[k] + ': ' + (d[k] > you ? 'more' : 'less') + ' than you want');
    });
    box.appendChild(h('p', { class: 'small', text: notes.length ? notes.join('. ') + '.' : 'Close to what you want on everything you answered.' }));
    return box;
  }

  function reasons(r) {
    var good = r.parts.filter(function (p) { return p.fit >= 0.8 && p.w >= 0.6; }).sort(function (a, b) { return b.w - a.w; }).slice(0, 3);
    var bad = r.parts.filter(function (p) { return p.fit < 0.45 && p.w >= 0.6; }).sort(function (a, b) { return b.w - a.w; }).slice(0, 2);
    return good.length || bad.length ? h('span', { class: 'tags' },
      good.map(function (p) { return chip(p.label, 'good'); }), bad.map(function (p) { return chip(p.label, 'bad'); })) : null;
  }

  function whyLine(r) {
    var good = r.parts.filter(function (p) { return p.fit >= 0.8 && p.w >= 0.6; }).sort(function (a, b) { return b.w - a.w; }).slice(0, 3)
      .map(function (p) { return p.label.toLowerCase(); });
    if (!good.length) return null;
    var last = good.pop();
    return h('p', { class: 'small', text: 'Why it fits: ' + (good.length ? good.join(', ') + ' and ' + last : last) + ' line up with what you want.' });
  }

  function metaLine(r) {
    var ch = chance(r.s);
    return r.s.town + ', ' + r.s.state + (r.dist != null ? ' · ' + Math.round(r.dist) + ' mi from home' : '') + (ch ? ' · ' + ch : '');
  }

  // One card in the swipe row: rank, name, reasons and the full chart
  function slide(r, i, total) {
    return h('li', { class: 'slide', id: 'match-' + (i + 1), 'aria-label': 'Match ' + (i + 1) + ' of ' + total },
      h('div', { class: 'slide-head', style: 'background:' + r.s.band + ';color:' + (r.s.onBand || '#FFFFFF') },
        h('span', { class: 'slide-rank', text: '#' + (i + 1) }),
        h('span', { class: 'slide-pct', text: Math.round(r.fit * 100) + '% fit' })),
      h('div', { class: 'slide-body' },
        h('p', { class: 'school-name', text: r.s.name }),
        h('p', { class: 'small muted', text: metaLine(r) }),
        whyLine(r),
        reasons(r),
        r.filters.length ? h('p', { class: 'small miss', text: 'Misses your filters: ' + r.filters.join(', ') }) : null,
        compareChart(r.s),
        h('a', { class: 'link-btn', href: 'school.html#' + r.id, text: 'Read the full ' + r.s.short + ' page' })));
  }

  function carousel(list, onChange) {
    var track = h('ol', { class: 'slides' }, list.map(function (r, i) { return slide(r, i, list.length); }));
    var counter = h('span', { class: 'small', 'aria-live': 'polite', text: '1 of ' + list.length });
    var prev = h('button', { type: 'button', class: 'nav-btn', 'aria-label': 'Previous match', text: '‹' });
    var next = h('button', { type: 'button', class: 'nav-btn', 'aria-label': 'Next match', text: '›' });
    function current() { return Math.round(track.scrollLeft / track.clientWidth); }
    function go(i) { track.scrollTo({ left: Math.max(0, Math.min(list.length - 1, i)) * track.clientWidth, behavior: 'smooth' }); }
    prev.addEventListener('click', function () { go(current() - 1); });
    next.addEventListener('click', function () { go(current() + 1); });
    var last = -1;
    track.addEventListener('scroll', function () {
      var i = current();
      if (i === last) return;
      last = i;
      counter.textContent = (i + 1) + ' of ' + list.length;
      prev.disabled = i === 0;
      next.disabled = i === list.length - 1;
      if (onChange) onChange(i);
    }, { passive: true });
    prev.disabled = true;
    carousel.go = go;
    return h('div', { class: 'carousel' },
      h('div', { class: 'carousel-bar' }, prev, counter, next),
      track,
      h('p', { class: 'small muted', text: 'Swipe to see your next match.' }));
  }

  function anyCompare(res, pickId) {
    var select = h('select', { id: 'compare-pick', 'aria-label': 'School to compare' });
    res.all.slice().sort(function (a, b) { return a.s.name.localeCompare(b.s.name); }).forEach(function (r) {
      select.appendChild(h('option', { value: r.id, text: r.s.name, selected: r.id === pickId }));
    });
    var holder = h('div');
    function draw() { holder.textContent = ''; holder.appendChild(compareChart(SCHOOLS[select.value])); }
    select.addEventListener('change', draw);
    draw();
    return h('section', { class: 'q-section' },
      h('h2', { class: 'sec-title', text: 'Compare with any school' }),
      h('p', { class: 'small muted', text: 'Bars are the school. The dark line is what you said you want.' }),
      select, holder);
  }

  function renderResults() {
    var res = runMatch();
    // Always show 10: fits first, then the closest near-misses
    var list = res.fits.slice(0, 10);
    if (list.length < 10) list = list.concat(res.outside.slice(0, 10 - list.length));
    var rows = [];
    function highlight(i) {
      rows.forEach(function (row, j) { row.classList.toggle('on', i === j); row.setAttribute('aria-current', i === j ? 'true' : 'false'); });
    }
    var slides = carousel(list, highlight);
    var rankList = h('ol', { class: 'rank-list' }, list.map(function (r, i) {
      var row = h('button', { type: 'button', class: 'rank-row' + (i === 0 ? ' on' : ''), onclick: function () {
        carousel.go(i);
        slides.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } },
        h('span', { class: 'rank-n', text: String(i + 1) }),
        h('span', { class: 'rank-dot', style: 'background:' + r.s.band }),
        h('span', { class: 'rank-name', text: r.s.name }),
        h('span', { class: 'rank-pct', text: Math.round(r.fit * 100) + '%' }));
      rows.push(row);
      return h('li', null, row);
    }));
    var main = h('main', { class: 'wrap results' },
      h('section', { class: 'q-section' },
        h('h2', { class: 'sec-title', text: 'Your results' }),
        h('p', { class: 'vibe-sum', text: summary() }),
        slides),
      h('section', { class: 'q-section' },
        h('h2', { class: 'sec-title', text: 'Your top 10 in order' }),
        h('p', { class: 'small muted', text: 'Tap one to see it above.' }),
        rankList),
      anyCompare(res, list[0] ? list[0].id : 'harvard'),
      h('div', { class: 'btn-row' },
        h('button', { type: 'button', class: 'btn-ghost', text: 'Change my answers', onclick: function () { location.hash = 'quiz'; } })),
      h('p', { class: 'small muted', text: 'Matches are a starting point, not advice. Visit, talk to students, and check the school sites for real numbers.' }));
    app.appendChild(main);
  }

  // ---------- routing ----------
  function route() {
    var r = location.hash.slice(1);
    if (r === 'results') show('results');
    else if (r === 'quiz') show('quiz');
    else if (r.indexOf('q-') === 0) return;
    else show('start');
  }
  document.addEventListener('DOMContentLoaded', function () {
    app = document.getElementById('app');
    window.addEventListener('hashchange', route);
    route();
  });
})();
