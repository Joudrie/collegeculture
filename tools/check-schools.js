#!/usr/bin/env node
/* Checks every school file in site/schools/ against the content and color rules.
   Usage: node tools/check-schools.js            (all schools)
          node tools/check-schools.js uvm bu     (only these)
   Exits with code 1 if any school has an error. */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'site', 'schools');
const METERS = ['party', 'campus', 'spirit', 'pressure', 'career', 'greek', 'religion'];
const SECTIONS = ['vibe', 'social', 'living', 'gettingIn', 'who', 'knownFor', 'stereotypes', 'mythsAndKnow', 'fit', 'people'];
const VERDICTS = ['true', 'half', 'myth', 'outdated'];

function luminance(hex) {
  const c = [0, 2, 4].map(i => parseInt(hex.slice(1).slice(i, i + 2), 16) / 255)
    .map(x => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}
const isHex = v => typeof v === 'string' && /^#[0-9A-Fa-f]{6}$/.test(v);

function load(file) {
  let data = null;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { registerSchool: d => { data = d; } });
  return data;
}

function listIds() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(dir, 'index.js'), 'utf8'), ctx);
  return ctx.window.SCHOOL_LIST || [];
}

function check(id, listed) {
  const errors = [];
  const warn = [];
  const file = path.join(dir, id + '.js');
  const raw = fs.readFileSync(file, 'utf8');
  let s;
  try { s = load(file); } catch (e) { return { errors: ['does not run: ' + e.message], warn }; }
  if (!s) return { errors: ['never calls registerSchool'], warn };

  if (s.id !== id) errors.push(`id "${s.id}" does not match file name`);
  ['name', 'state', 'location', 'vibe'].forEach(k => { if (!s[k]) errors.push(`missing ${k}`); });
  if (/—/.test(raw)) errors.push('contains an em-dash');

  const c = s.colors || {};
  ['band', 'onBand', 'onBandMuted', 'stripe', 'accent', 'accentOnDark'].forEach(k => { if (!isHex(c[k])) errors.push(`colors.${k} is not a 6-digit hex`); });
  if (!errors.some(e => e.startsWith('colors.'))) {
    [['onBand', c.onBand, c.band, 4.5], ['onBandMuted', c.onBandMuted, c.band, 4.5],
     ['accent', c.accent, '#FFFFFF', 4.5], ['accentOnDark', c.accentOnDark, '#121212', 4.5],
     ['stripe', c.stripe, c.band, 1.8]].forEach(([k, fg, bg, min]) => {
      const r = contrast(fg, bg);
      if (r < min) errors.push(`${k} contrast ${r.toFixed(2)} < ${min}`);
    });
  }
  if (!Array.isArray(c.swatches) || !c.swatches.every(isHex)) errors.push('colors.swatches must be hex values');

  if (!Array.isArray(s.flags) || s.flags.length !== 4) warn.push(`flags: ${s.flags ? s.flags.length : 0} (expected 4)`);
  if (!Array.isArray(s.facts) || s.facts.length !== 6) errors.push(`facts: ${s.facts ? s.facts.length : 0} (expected 6)`);
  (s.facts || []).forEach(f => { if (String(f.value).length > 15) warn.push(`fact "${f.label}" value is long: "${f.value}"`); });

  const sec = s.sections || {};
  SECTIONS.forEach(k => {
    if (!sec[k]) { warn.push(`no ${k} section`); return; }
    if (!sec[k].preview) errors.push(`${k} has no preview`);
  });
  if (sec.vibe) METERS.forEach(m => {
    const v = sec.vibe.meters && sec.vibe.meters[m];
    if (!v) errors.push(`meter ${m} missing`);
    else if (!(v.value >= 0 && v.value <= 10)) errors.push(`meter ${m} value out of range`);
  });
  if (sec.stereotypes) sec.stereotypes.items.forEach(i => { if (!VERDICTS.includes(i.verdict)) errors.push(`unknown verdict "${i.verdict}"`); });

  const entry = listed.find(l => l.id === id);
  if (!entry) errors.push('not in schools/index.js');
  else {
    if (entry.band.toLowerCase() !== c.band.toLowerCase()) errors.push('index.js band does not match');
    if (entry.stripe.toLowerCase() !== c.stripe.toLowerCase()) errors.push('index.js stripe does not match');
  }
  return { errors, warn };
}

const listed = listIds();
const ids = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js' && f !== 'logos.js' && f !== 'quiz-data.js' && f !== 'stats.js' && !f.startsWith('_')).map(f => f.slice(0, -3)).sort();

listed.forEach(l => { if (!fs.existsSync(path.join(dir, l.id + '.js'))) console.log(`index.js lists "${l.id}" but there is no file`); });

const looks = {};
let failed = 0;
ids.forEach(id => {
  const { errors, warn } = check(id, listed);
  const entry = listed.find(l => l.id === id);
  if (entry) {
    const key = entry.band.toLowerCase() + '/' + entry.stripe.toLowerCase();
    (looks[key] = looks[key] || []).push(id);
  }
  if (errors.length) failed++;
  const status = errors.length ? 'FAIL' : 'ok  ';
  console.log(`${status} ${id}${warn.length ? '  (' + warn.join('; ') + ')' : ''}`);
  errors.forEach(e => console.log('     - ' + e));
});
Object.values(looks).filter(v => v.length > 1).forEach(v => console.log('same colors: ' + v.join(', ')));
console.log(`\n${ids.length - failed}/${ids.length} schools pass`);
process.exit(failed ? 1 : 0);
