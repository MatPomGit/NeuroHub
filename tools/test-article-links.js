#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const {
  buildCanonicalTopicIndex,
  findFirstMatch,
  normalizeTerm,
} = require('../modules/article-links.js');

const entries = [
  {
    id: 'poznawcza/pamiec_robocza',
    label: 'Pamięć robocza',
    aliases: ['working memory'],
    file: 'wiki/psychologia_poznawcza/pamiec_robocza.md',
  },
  {
    id: 'psychometria/rzetelnosc',
    label: 'Rzetelność',
    aliases: ['reliability'],
    file: 'wiki/psychometria/rzetelnosc.md',
  },
  {
    id: 'inne/pamiec',
    label: 'Pamięć',
    aliases: ['working memory'],
    file: 'wiki/inne/pamiec.md',
  },
];

const index = buildCanonicalTopicIndex(entries);

assert.equal(normalizeTerm('  PAMIĘĆ   robocza '), 'pamiec robocza');
assert.ok(index.some(topic => topic.term === 'Pamięć robocza'));
assert.ok(!index.some(topic => normalizeTerm(topic.term) === 'working memory'),
  'Niejednoznaczny alias nie powinien prowadzić do przypadkowego artykułu.');

const first = findFirstMatch(
  'W badaniach pamięć robocza wiąże się z pojęciem rzetelność.',
  index,
  new Set()
);
assert.equal(first.id, 'poznawcza/pamiec_robocza');
assert.equal(first.text, 'pamięć robocza');

const next = findFirstMatch(
  ' wiąże się z pojęciem rzetelność.',
  index,
  new Set(['poznawcza/pamiec_robocza'])
);
assert.equal(next.id, 'psychometria/rzetelnosc');

const boundary = findFirstMatch('Zapamięć wynik.', index, new Set());
assert.equal(boundary, null, 'Nazwa tematu nie może być dopasowana wewnątrz innego wyrazu.');

console.log('[PsyHub][article-links] OK: indeks i dopasowanie tematów kanonicznych działają poprawnie.');
