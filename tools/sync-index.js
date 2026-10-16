#!/usr/bin/env node
/* Copies each school's band and stripe colors from site/schools/<id>.js into site/schools/index.js,
   so the school list chips always match the school pages. Usage: node tools/sync-index.js */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'site', 'schools');
const indexFile = path.join(dir, 'index.js');
let src = fs.readFileSync(indexFile, 'utf8');
let changed = 0;

src = src.replace(/\{ id: '([a-z0-9-]+)',([^\n]*?)band: '#[0-9A-Fa-f]{6}', stripe: '#[0-9A-Fa-f]{6}' \}/g, (line, id, middle) => {
  const file = path.join(dir, id + '.js');
  if (!fs.existsSync(file)) return line;
  let data = null;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { registerSchool: d => { data = d; } });
  const next = `{ id: '${id}',${middle}band: '${data.colors.band}', stripe: '${data.colors.stripe}' }`;
  if (next !== line) changed++;
  return next;
});

fs.writeFileSync(indexFile, src);
console.log(`${changed} school${changed === 1 ? '' : 's'} updated in index.js`);
