/* College Culture: builds a school page from a data file in schools/.
   school.html?s=<id> loads schools/<id>.js, which calls registerSchool({...}).
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
    { key: 'gettingIn',   title: 'Getting in',               render: renderPoints },
    { key: 'who',         title: 'Who goes here',            render: renderParagraphs },
    { key: 'knownFor',    title: 'Known for',                render: renderPoints },
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

  function renderFit(data) {
    return twoLists("You'll probably love it if", data.love, 'You might struggle if', data.struggle);
  }

  function renderPeople(data) {
    return [
      twoLists('Comes up as a plus', data.plus, 'Comes up as a minus', data.minus),
      h('p', { class: 'small muted' }, 'No student reviews yet. On the real site, verified students and alumni add their take here and this summary updates.')
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

  function applyColors(c) {
    var root = document.documentElement.style;
    var map = {
      '--school': c.band, '--on-school': c.onBand, '--on-school-muted': c.onBandMuted,
      '--school-stripe': c.stripe, '--accent-light': c.accent, '--accent-dark': c.accentOnDark
    };
    Object.keys(map).forEach(function (k) { if (map[k]) root.setProperty(k, map[k]); });
  }

  function renderSchool(s) {
    document.title = (s.title || s.name) + ' Culture Snapshot';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'What ' + s.name + ' ' + (s.nameSub || '') + ' is actually like: the vibe, the social life, the stereotypes, and the things nobody tells you.');
    applyColors(s.colors);

    var band = h('header', { class: 'band' }, h('div', { class: 'wrap' },
      h('div', { class: 'bar' },
        h('a', { class: 'wordmark', href: 'index.html' }, 'College Culture'),
        h('span', { class: 'small on-muted' }, s.state)),
      h('p', { class: 'small on-muted where' }, s.location),
      h('h1', null, s.name, s.nameSub ? h('span', { class: 'sub' }, s.nameSub) : null),
      h('p', { class: 'vibe-line' }, s.vibe),
      h('ul', { class: 'flags small', 'aria-label': 'Heads-up' }, s.flags.map(function (f) { return h('li', null, f); })),
      h('dl', { class: 'facts' }, s.facts.map(function (f) { return h('div', null, h('dt', null, f.label), h('dd', null, f.value)); })),
      h('p', { class: 'colors small' },
        s.colors.swatches.map(function (hex) { return h('span', { class: 'sw', style: 'background:' + hex, 'aria-hidden': 'true' }); }),
        s.colors.name)
    ));

    var defs = SECTIONS.filter(function (d) { return s.sections[d.key]; });
    var toggle = h('button', { class: 'btn', id: 'toggle-all', type: 'button' }, 'Open all');
    var list = h('div', { class: 'sections' }, defs.map(function (d) { return section(d, s.sections[d.key]); }));

    var main = h('main', { class: 'wrap' },
      h('div', { class: 'controls' }, h('span', { class: 'small muted' }, defs.length + ' sections'), toggle),
      list);

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
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') target.open = true;
    sync();
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

  var id = new URLSearchParams(location.search).get('s') || '';
  if (!/^[a-z0-9-]+$/.test(id) || id === '_template') { notFound(id); return; }
  var script = document.createElement('script');
  script.src = 'schools/' + id + '.js';
  script.onerror = function () { notFound(id); };
  document.body.appendChild(script);
})();
