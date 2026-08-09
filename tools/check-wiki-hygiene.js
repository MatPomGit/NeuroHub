#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const wikiRoot = path.join(repoRoot, 'wiki');
const protectedArticles = new Set([
  'wiki/biologia/biologiczne_podstawy.md',
  'wiki/reference/bibliografia_portalu.md',
  'wiki/reference/toc_dlugi_artykul.md',
  'wiki/reference/standard_przypisow.md',
  'wiki/reference/literatura.md',
  'wiki/reference/listy_wielopoziomowe.md',
  'wiki/reference/skale_i_akronimy.md',
  'wiki/reference/przepisy_zawod.md',
  'wiki/reference/katalog_narzedzi_zasady.md'
]);
const intentionalFixtures = new Set([
  'wiki/reference/listy_wielopoziomowe.md',
  'wiki/reference/toc_dlugi_artykul.md'
]);

const genericFragments = [
  'jest istotny dla praktyki psychologicznej, ponieważ',
  'jest istotny dla praktyki psychologicznej, poniewa',
  'W tym artykule kluczowe pojecia są rozumiane w sposob operacyjny',
  'Mechanizmy omawianego zjawiska najlepiej wyja',
  'Dobrą praktyką jest rozpoczynanie pracy od jasnego celu, kryteri',
  'Czestym bł',
  'Nieoczywista perspektywa polega na przesuni',
  'Najważniejszy wniosek jest taki, że rzetelne rozumienie omawianego tematu'
];
const mojibakeFragments = ['ł›', 'ł‚', 'â€', 'ďż', 'Bz'];
const invalidControlCharacter = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(target);
    return entry.isFile() && entry.name.endsWith('.md') ? [target] : [];
  });
}

function relative(file) {
  return path.relative(repoRoot, file).split(path.sep).join('/');
}

function occurrences(text, fragment) {
  return text.split(fragment).length - 1;
}

const genericFindings = [];
const encodingReport = { published: [], intentionalTestMaterial: [] };

for (const file of markdownFiles(wikiRoot)) {
  const content = fs.readFileSync(file, 'utf8');
  const fileName = relative(file);

  if (protectedArticles.has(fileName)) {
    for (const fragment of genericFragments) {
      if (content.includes(fragment)) genericFindings.push({ file: fileName, fragment });
    }
  }

  const counts = Object.fromEntries(
    mojibakeFragments.map(fragment => [fragment, occurrences(content, fragment)])
  );
  counts['znaki sterujące'] = (content.match(invalidControlCharacter) || []).length;
  if (Object.values(counts).some(Boolean)) {
    const category = intentionalFixtures.has(fileName) ? 'intentionalTestMaterial' : 'published';
    encodingReport[category].push({ file: fileName, counts });
  }
}

console.log('[PsyHub][wiki-hygiene] Raport sekwencji mojibake i znaków sterujących:');
console.log(JSON.stringify(encodingReport, null, 2));

if (genericFindings.length) {
  console.error('[PsyHub][wiki-hygiene] Wykryto znane generyczne akapity:');
  for (const finding of genericFindings) {
    console.error(`- ${finding.file}: ${finding.fragment}`);
  }
  process.exitCode = 1;
} else {
  console.log('[PsyHub][wiki-hygiene] OK: brak znanych generycznych akapitów.');
}
