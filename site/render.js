/* College Culture: builds a school page from a data file in schools/.
   school.html#<id> (or school.html?s=<id>) loads schools/<id>.js, which calls registerSchool({...}).
   See schools/_template.js for the full data shape. */
(function () {
  'use strict';

  // The vibe scales. Same keys and ends on every school so pages line up with the quiz.
  var METERS = [
    { key: 'party',    name: 'Party scene',        low: 'Quiet weekends',    high: 'Always something on' },
    { key: 'campus',   name: 'Campus feel',        low: 'All city',          high: 'Quad and trees' },
    { key: 'spirit',   name: 'School spirit',      low: 'Nobody cares',      high: "Everyone's at the game" },
    { key: 'pressure', name: 'Academic pressure',  low: 'Chill',             high: 'Intense' },
    { key: 'career',   name: 'Career focus',       low: 'Learning for fun',  high: 'Everything points to a job' },
    { key: 'greek',    name: 'Greek life',         low: 'None',              high: 'Runs the social scene' },
    { key: 'religion', name: 'Religion on campus', low: 'Barely noticeable', high: 'Part of daily life' }
  ];

  // Section order and titles. A section is skipped when the school has no data for it.
  var SECTIONS = [
    { key: 'vibe',        title: 'The vibe',                 render: renderVibe },
    { key: 'social',      title: 'Social life',              render: renderParagraphs },
    { key: 'living',      title: 'Dorms and food',           render: renderLiving },
    { key: 'getThere',    title: 'Getting there',            render: renderGetThere },
    { key: 'gettingIn',   title: 'Getting in',               render: renderPoints },
    { key: 'who',         title: 'Who goes here',            render: renderParagraphs },
    { key: 'knownFor',    title: 'Known for',                render: renderPoints },
    { key: 'traditions',  title: 'Traditions',               render: renderTraditions },
    { key: 'stereotypes', title: 'Stereotypes vs. reality',  render: renderStereotypes },
    { key: 'mythsAndKnow',title: 'Myths and things to know', render: renderMythsAndKnow },
    { key: 'fit',         title: 'Is it for you?',           render: renderFit },
    { key: 'people',      title: 'What people say',          render: renderPeople }
  ];

  var VERDICTS = {
    true: 'Mostly true',
    half: 'Half true',
    myth: 'Myth',
    outdated: 'Outdated'
  };

  // Small DOM helper: h('p', {class: 'x'}, 'text', childNode, ...)
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] == null) return;
        if (k === 'class') el.className = attrs[k];
        else if (k === 'style') el.style.cssText = attrs[k];
        else el.setAttribute(k, attrs[k]);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) el.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); });
      else el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return el;
  }

  function point(item) {
    return h('li', null, h('strong', null, item.title), h('span', { class: 'muted' }, item.text));
  }

  function renderVibe(data) {
    var rows = METERS.filter(function (m) { return data.meters && data.meters[m.key]; }).map(function (m) {
      var v = data.meters[m.key];
      var value = Math.max(0, Math.min(10, Number(v.value) || 0));
      return h('li', { class: 'meter' },
        h('div', { class: 'meter-top' }, h('strong', null, m.name), v.note ? h('span', { class: 'small muted' }, v.note) : null),
        h('div', { class: 'track', role: 'meter', 'aria-label': m.name, 'aria-valuemin': '0', 'aria-valuemax': '10', 'aria-valuenow': String(value) },
          h('div', { class: 'fill', style: 'width:' + value * 10 + '%' })),
        h('div', { class: 'ends small muted' }, h('span', null, m.low), h('span', null, m.high))
      );
    });
    return [
      h('p', { class: 'small muted' }, 'Rated on the same scales as the quiz, based on what students and alumni say.'),
      h('ul', { class: 'meters' }, rows)
    ];
  }

  function renderParagraphs(data) {
    return data.paragraphs.map(function (p) { return h('p', null, p); });
  }

  function renderPoints(data) {
    return h('ul', { class: 'list' }, data.points.map(point));
  }

  function renderStereotypes(data) {
    return h('ul', { class: 'stereos' }, data.items.map(function (s) {
      return h('li', null,
        h('p', { class: 'said' }, s.said),
        h('p', { class: 'verdict ' + (s.verdict === 'outdated' ? 'myth' : s.verdict) }, VERDICTS[s.verdict] || s.verdict),
        h('p', { class: 'muted' }, s.text)
      );
    }));
  }

  function renderMythsAndKnow(data) {
    var out = [];
    if (data.myths && data.myths.length) {
      out.push(h('h3', null, 'Myths you might hear'));
      out.push(h('ul', { class: 'list' }, data.myths.map(function (m) {
        return h('li', null, h('s', null, m.title), h('span', { class: 'muted' }, m.text));
      })));
    }
    if (data.know && data.know.length) {
      out.push(h('h3', { class: out.length ? 'sub-h' : null }, 'Things to know before you go'));
      out.push(h('ul', { class: 'list' }, data.know.map(point)));
    }
    return out;
  }

  function twoLists(leftTitle, left, rightTitle, right) {
    return h('div', { class: 'cols' },
      h('div', null, h('h3', null, leftTitle), h('ul', null, left.map(function (x) { return h('li', null, x); }))),
      h('div', null, h('h3', null, rightTitle), h('ul', null, right.map(function (x) { return h('li', null, x); })))
    );
  }

  // Straight-line miles from the school (federal coordinates) to Boston and New York City.
  var current = null;
  function miles(lat1, lon1, lat2, lon2) {
    var r = Math.PI / 180, a = Math.sin((lat2 - lat1) * r / 2), b = Math.sin((lon2 - lon1) * r / 2);
    return 3959 * 2 * Math.asin(Math.sqrt(a * a + Math.cos(lat1 * r) * Math.cos(lat2 * r) * b * b));
  }
  function renderGetThere(data) {
    var st = current && stats(current.id), out = [];
    if (st && st.lat != null) {
      var bos = Math.round(miles(st.lat, st.lon, 42.3601, -71.0589) / 5) * 5;
      var nyc = Math.round(miles(st.lat, st.lon, 40.7128, -74.006) / 5) * 5;
      out.push(h('p', null, bos <= 5 ? 'In or right next to Boston. About ' + nyc + ' miles from New York City in a straight line.'
        : 'About ' + bos + ' miles from Boston and ' + nyc + ' from New York City, in a straight line. Driving is longer.'));
    }
    out.push(h('ul', null, data.points.map(function (x) { return h('li', null, x); })));
    return out;
  }
  function renderTraditions(data) {
    return h('ul', null, data.items.map(function (x) { return h('li', null, x); }));
  }

  function renderLiving(data) {
    return twoLists('Housing', data.housing, 'Food', data.food);
  }

  function renderFit(data) {
    return twoLists("You'll probably love it if", data.love, 'You might struggle if', data.struggle);
  }

  function renderPeople(data) {
    return [
      twoLists('Comes up as a plus', data.plus, 'Comes up as a minus', data.minus),
      h('p', { class: 'small muted' }, 'No student reviews yet. This is a summary of what students and alumni commonly say.')
    ];
  }

  function section(def, data) {
    return h('details', { id: def.key },
      h('summary', null,
        h('span', { class: 'sum-text' },
          h('span', { class: 'sum-title' }, def.title),
          h('span', { class: 'sum-preview small muted' }, data.preview)),
        h('span', { class: 'chev', 'aria-hidden': 'true' })),
      h('div', { class: 'body' }, def.render(data))
    );
  }

  // Numbers from the federal College Scorecard (schools/stats.js). Rounded so they don't look more exact than they are.
  function stats(id) {
    return window.SCHOOL_STATS && window.SCHOOL_STATS.schools[id];
  }
  function money(n) {
    return '$' + (Math.round(n / 100) * 100).toLocaleString('en-US');
  }

  // Swaps the hand-written size and admit facts for the federal numbers.
  // The federal count for mostly-online schools includes online students, so their campus number stays.
  var ONLINE_HEAVY = { snhu: true, post: true };
  function liveFacts(s) {
    var st = stats(s.id);
    if (!st) return s.facts;
    return s.facts.map(function (f) {
      if (f.label === 'Undergrads' && st.undergrad && !ONLINE_HEAVY[s.id]) return { label: f.label, value: '~' + (st.undergrad >= 1000 ? (Math.round(st.undergrad / 100) * 100).toLocaleString('en-US') : st.undergrad) };
      if (f.label === 'Getting in' && st.admitRate != null) return { label: f.label, value: Math.round(st.admitRate * 100) + '% admitted' };
      return f;
    });
  }

  function costSection(s) {
    var st = stats(s.id);
    if (!st) return null;
    var rows = [];
    function row(label, n) { if (n != null) rows.push(h('div', null, h('dt', null, label), h('dd', null, money(n)))); }
    var out = [];
    if (st.sticker == null && st.net == null) {
      out.push(h('p', null, 'The federal data has no price numbers for this school. Check its website.'));
      return { title: 'What it costs', preview: 'No federal price data', body: out };
    }
    row('Sticker price per year', st.sticker);
    row(st.public ? 'Average after aid, in-state' : 'Average after aid', st.net);
    row('Family makes under $30k', st.netLow);
    row('Family makes $48k to $75k', st.netMid);
    row('Family makes over $110k', st.netHigh);
    if (st.public && st.tuitionOut && st.tuitionIn && st.tuitionOut > st.tuitionIn) {
      row('Tuition, in-state', st.tuitionIn);
      row('Tuition, out-of-state', st.tuitionOut);
    }
    out.push(h('dl', { class: 'cost' }, rows));
    out.push(h('p', null, 'Sticker price includes tuition, housing, food and books. Most students on aid pay less. The "after aid" numbers are what first-year students who got aid paid on average, by family income' + (st.public ? ', for in-state students.' : '.')));
    if (st.public) out.push(h('p', null, 'Live in another New England state? The ',
      h('a', { href: 'https://www.nebhe.org/tuitionbreak' }, 'Tuition Break'),
      ' program can cut out-of-state tuition at New England public colleges for some majors.'));
    out.push(h('p', { class: 'small muted' }, 'From the U.S. Department of Education College Scorecard. Your real price depends on your family, so try the net price calculator on the school\'s website.'));
    var preview = st.net != null ? 'Sticker ' + (st.sticker ? money(st.sticker) : 'n/a') + ', about ' + money(st.net) + ' after aid on average' : 'Sticker ' + money(st.sticker);
    return { title: 'What it costs', preview: preview, body: out };
  }

  // Federal field codes (2-digit CIP) in plain words
  var FIELDS = {
    '01': 'Agriculture', '03': 'Environment', '04': 'Architecture', '05': 'Area and ethnic studies', '09': 'Communications',
    '10': 'Media tech', '11': 'Computer science', '12': 'Culinary and personal services', '13': 'Education', '14': 'Engineering',
    '15': 'Engineering tech', '16': 'Languages', '19': 'Family and consumer sciences', '22': 'Law and legal studies', '23': 'English',
    '24': 'Liberal arts and general studies', '25': 'Library science', '26': 'Biology', '27': 'Math and stats', '29': 'Military tech',
    '30': 'Interdisciplinary', '31': 'Recreation and fitness', '38': 'Philosophy and religion', '39': 'Theology', '40': 'Physical sciences',
    '41': 'Science tech', '42': 'Psychology', '43': 'Criminal justice and security', '44': 'Public policy and social work',
    '45': 'Social sciences', '46': 'Construction', '47': 'Mechanics and repair', '48': 'Precision production', '49': 'Transportation',
    '50': 'Arts, music and design', '51': 'Health and nursing', '52': 'Business', '54': 'History'
  };

  function majorsSection(s) {
    var st = stats(s.id);
    if (!st || !st.majors || !st.majors.length) return null;
    function pct(x) { return Math.round(x * 100) + '%'; }
    var max = st.majors[0][1];
    var out = [h('div', { class: 'bars' }, st.majors.map(function (m) {
      return h('div', { class: 'bar-row' },
        h('span', { class: 'small' }, FIELDS[m[0]] || 'Other'),
        h('span', { class: 'cmp-track' }, h('span', { class: 'cmp-fill', style: 'width:' + Math.round(m[1] / max * 100) + '%' })),
        h('span', { class: 'small bar-pct' }, pct(m[1])));
    }))];
    if (st.women != null) out.push(h('dl', { class: 'cost' },
      h('div', null, h('dt', null, 'Undergrads who are women'), h('dd', null, pct(st.women))),
      h('div', null, h('dt', null, 'Undergrads who are men'), h('dd', null, pct(1 - st.women)))));
    out.push(h('p', { class: 'small muted' }, 'Share of degrees given out by field, and the undergrad gender split, from the U.S. Department of Education College Scorecard.' +
      (ONLINE_HEAVY[s.id] ? ' These include online students.' : '')));
    var top = st.majors.slice(0, 2).map(function (m) { return (FIELDS[m[0]] || 'Other') + ' ' + pct(m[1]); }).join(', ');
    return { title: 'What people major in', preview: 'Top fields: ' + top + (st.women != null ? '. ' + pct(st.women) + ' women' : ''), body: out };
  }

  // Outcomes and who goes, from the Scorecard, plus questions worth asking anywhere.
  var TWO_YEAR = { nhti: true };
  function supportSection(s) {
    var st = stats(s.id);
    if (!st) return null;
    function pct(x) { return Math.round(x * 100) + '%'; }
    var rows = [];
    function row(label, val) { if (val != null) rows.push(h('div', null, h('dt', null, label), h('dd', null, val))); }
    row('Come back for year two', st.retention != null ? pct(st.retention) : null);
    row(TWO_YEAR[s.id] ? 'Finish within 3 years' : 'Graduate within 6 years', st.gradRate != null ? pct(st.gradRate) : null);
    row('Median pay 10 years after starting', st.earnings != null ? money(st.earnings) : null);
    row('Get a Pell grant (lower income)', st.pell ? pct(st.pell) : null);
    row('First in family to go to college', st.firstGen != null ? pct(st.firstGen) : null);
    row('Take out federal loans', st.loan ? pct(st.loan) : null);
    var out = [h('dl', { class: 'cost' }, rows)];
    if (ONLINE_HEAVY[s.id]) out.push(h('p', { class: 'small muted' }, 'These numbers include online students, not just the campus.'));
    out.push(h('h3', null, 'Worth asking about'));
    out.push(h('ul', null,
      h('li', null, 'First-gen or low-income: ask if there is a first-gen program, a summer bridge or peer mentors.'),
      h('li', null, 'Mental health: most schools offer free counseling. Ask how long the wait is in the middle of a semester.'),
      h('li', null, 'Disabilities and learning differences: colleges have to give accommodations, but your IEP or 504 plan does not carry over. You register with the disability office yourself.'),
      h('li', null, 'Grades: tutoring and writing centers are usually free. Using them early is normal, not a red flag.')));
    out.push(h('p', { class: 'small muted' }, 'Numbers from the U.S. Department of Education College Scorecard. The questions apply to every school.'));
    var bits = [];
    if (st.retention != null) bits.push(pct(st.retention) + ' come back for year two');
    if (st.gradRate != null) bits.push(pct(st.gradRate) + (TWO_YEAR[s.id] ? ' finish in 3 years' : ' graduate in 6 years'));
    return { title: 'Support and how students do', preview: bits.join(', ') || 'Support to ask about', body: out };
  }

  function applyColors(c) {
    var root = document.documentElement.style;
    var map = {
      '--school': c.band, '--on-school': c.onBand, '--on-school-muted': c.onBandMuted,
      '--school-stripe': c.stripe, '--accent-light': c.accent, '--accent-dark': c.accentOnDark
    };
    Object.keys(map).forEach(function (k) { if (map[k]) root.setProperty(k, map[k]); });
  }

  // School logo or seal from Wikimedia (schools/logos.js). Hidden if missing or if it fails to load.
  function logo(s) {
    var src = window.SCHOOL_LOGOS && window.SCHOOL_LOGOS[s.id];
    if (!src) return null;
    var img = h('img', { class: 'logo', src: src, alt: (s.title || s.name) + ' logo', loading: 'eager', referrerpolicy: 'no-referrer' });
    var tile = h('span', { class: 'logo-tile' }, img);
    img.addEventListener('error', function () { tile.remove(); });
    return tile;
  }

  function renderSchool(s) {
    document.title = (s.title || s.name) + ' Culture Snapshot';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'What ' + s.name + ' ' + (s.nameSub || '') + ' is actually like: the vibe, the social life, the stereotypes, and the things nobody tells you.');
    applyColors(s.colors);
    current = s;

    var band = h('header', { class: 'band' }, h('div', { class: 'wrap' },
      h('div', { class: 'bar' },
        h('a', { class: 'wordmark', href: 'index.html' }, 'College Culture'),
        h('span', { class: 'small on-muted' }, s.state)),
      h('p', { class: 'small on-muted where' }, s.location),
      h('div', { class: 'title-row' },
        h('h1', null, s.name, s.nameSub ? h('span', { class: 'sub' }, s.nameSub) : null),
        logo(s)),
      h('p', { class: 'vibe-line' }, s.vibe),
      h('ul', { class: 'flags small', 'aria-label': 'Heads-up' }, s.flags.map(function (f) { return h('li', null, f); })),
      h('dl', { class: 'facts' }, liveFacts(s).map(function (f) { return h('div', null, h('dt', null, f.label), h('dd', null, f.value)); })),
      h('p', { class: 'colors small' },
        s.colors.swatches.map(function (hex) { return h('span', { class: 'sw', style: 'background:' + hex, 'aria-hidden': 'true' }); }),
        s.colors.name)
    ));

    var defs = SECTIONS.filter(function (d) { return s.sections[d.key]; });
    var toggle = h('button', { class: 'btn', id: 'toggle-all', type: 'button' }, 'Open all');
    var sections = defs.map(function (d) { return section(d, s.sections[d.key]); });
    var cost = costSection(s);
    if (cost) {
      var at = defs.map(function (d) { return d.key; }).indexOf('gettingIn') + 1;
      sections.splice(at, 0, section({ key: 'cost', title: cost.title, render: function () { return cost.body; } }, { preview: cost.preview }));
    }
    var majors = majorsSection(s);
    if (majors) {
      var kf = sections.map(function (el) { return el.id; }).indexOf('knownFor');
      sections.splice(kf === -1 ? sections.length : kf + 1, 0, section({ key: 'majors', title: majors.title, render: function () { return majors.body; } }, { preview: majors.preview }));
    }
    var support = supportSection(s);
    if (support) {
      var after = sections.map(function (el) { return el.id; }).indexOf(cost ? 'cost' : 'gettingIn') + 1;
      sections.splice(after || sections.length, 0, section({ key: 'support', title: support.title, render: function () { return support.body; } }, { preview: support.preview }));
    }
    var list = h('div', { class: 'sections' }, sections);

    var main = h('main', { class: 'wrap' },
      schoolNav(s.id),
      h('div', { class: 'controls' }, h('span', { class: 'small muted' }, sections.length + ' sections'), toggle),
      list,
      h('p', { class: 'small compare-link' }, h('a', { href: 'compare.html#a=' + s.id + '&b=' + compareWith(s.id) }, 'Compare ' + (s.title || s.name) + ' with another school')));

    var app = document.getElementById('app');
    app.textContent = '';
    app.appendChild(band);
    app.appendChild(main);
    if (s.asOf) document.getElementById('as-of').textContent = 'Facts are approximate as of ' + s.asOf + ', so check the school\'s website for current numbers.';

    var all = Array.prototype.slice.call(list.querySelectorAll('details'));
    function allOpen() { return all.every(function (d) { return d.open; }); }
    function sync() { toggle.textContent = allOpen() ? 'Close all' : 'Open all'; }
    toggle.addEventListener('click', function () {
      var open = !allOpen();
      all.forEach(function (d) { d.open = open; });
      sync();
    });
    all.forEach(function (d) { d.addEventListener('toggle', sync); });
    var target = location.hash && location.hash.slice(1) !== s.id && document.getElementById(location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') target.open = true;
    sync();
  }

  // Neighbors in the same state, in the rough popularity order from schools/index.js
  function neighbors(id) {
    var list = window.SCHOOL_LIST || [];
    var order = window.SCHOOL_ORDER || [];
    var me = list.filter(function (x) { return x.id === id; })[0];
    if (!me) return null;
    var state = me.location.split(', ')[1];
    var rank = function (x) { var i = order.indexOf(x.id); return i === -1 ? 9999 : i; };
    var same = list.filter(function (x) { return x.location.split(', ')[1] === state; })
      .sort(function (a, b) { return rank(a) - rank(b) || a.name.localeCompare(b.name); });
    var i = same.indexOf(me);
    return { state: state, index: i, total: same.length, prev: same[i - 1], next: same[i + 1] };
  }

  // Default second school for the compare page: the next one in the same state, else the most popular one.
  function compareWith(id) {
    var n = neighbors(id);
    return (n && (n.next || n.prev) && (n.next || n.prev).id) || (id === 'harvard' ? 'mit' : 'harvard');
  }

  function schoolNav(id) {
    var n = neighbors(id);
    if (!n || n.total < 2) return null;
    var nav = h('nav', { class: 'school-nav', 'aria-label': 'More schools in this state' },
      n.prev ? h('a', { class: 'prev', href: '#' + n.prev.id }, '\u2039 ' + n.prev.name) : h('span'),
      h('span', { class: 'pos small muted' }, (n.index + 1) + ' of ' + n.total + ' in ' + n.state),
      n.next ? h('a', { class: 'next', href: '#' + n.next.id }, n.next.name + ' \u203A') : h('span'));

    // Swipe left for the next school, right for the previous one
    var x0 = null, y0 = null;
    document.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      var target = dx < 0 ? n.next : n.prev;
      if (target) location.hash = target.id;
    }, { passive: true });
    return nav;
  }

  function notFound(id) {
    var app = document.getElementById('app');
    app.textContent = '';
    app.appendChild(h('main', { class: 'wrap empty-state' },
      h('h3', null, id ? 'No page for "' + id + '" yet.' : 'No school picked.'),
      h('p', { class: 'muted' }, 'Pick a school from the list.'),
      h('p', null, h('a', { href: 'index.html' }, 'See all schools'))));
  }

  window.registerSchool = function (data) {
    try { renderSchool(data); }
    catch (e) { console.error(e); notFound(data && data.id); }
  };

  // The school id comes from ?s=<id>, or from #<id> where query strings are not kept (hosted previews)
  var id = new URLSearchParams(location.search).get('s') || location.hash.slice(1) || '';
  window.addEventListener('hashchange', function () {
    var next = location.hash.slice(1);
    if (/^[a-z0-9-]+$/.test(next) && !document.getElementById(next)) { window.scrollTo(0, 0); location.reload(); }
  });
  if (!/^[a-z0-9-]+$/.test(id) || id === '_template') { notFound(id); return; }
  var script = document.createElement('script');
  script.src = 'schools/' + id + '.js';
  script.onerror = function () { notFound(id); };
  document.body.appendChild(script);
})();
