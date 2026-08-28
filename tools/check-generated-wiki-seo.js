#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const outputRoot = path.resolve(root, process.argv[2] || '_site');
const config = fs.readFileSync(path.join(root, '_config.yml'), 'utf8');

function configValue(name) {
  const match = config.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'));
  return match ? match[1].replace(/^['"]|['"]$/g, '') : '';
}

function filesBelow(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(target) : [target];
  });
}

function singleValue(html, expression, label, relativePath, errors) {
  const values = [...html.matchAll(expression)].map(match => match[1]);
  if (values.length !== 1) {
    errors.push(`${relativePath}: oczekiwano dokładnie jednego pola ${label}, znaleziono ${values.length}.`);
  }
  return values[0];
}

if (!fs.existsSync(outputRoot)) {
  throw new Error(`[PsyHub][wiki-seo] Brak katalogu wynikowego: ${outputRoot}. Najpierw uruchom Jekylla.`);
}

const publicRoot = `${configValue('url').replace(/\/$/, '')}/${configValue('baseurl').replace(/^\//, '').replace(/\/$/, '')}`.replace(/\/$/, '');
const wikiRoot = path.join(outputRoot, 'wiki');
const errors = [];
let checked = 0;

for (const file of filesBelow(wikiRoot).filter(file => file.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('class="wiki-article"')) continue;

  const relativePath = path.relative(outputRoot, file).split(path.sep).join('/');
  const expected = `${publicRoot}/${relativePath}`;
  const canonical = singleValue(html, /<link\s+rel="canonical"\s+href="([^"]+)"\s*>/gi, 'rel="canonical"', relativePath, errors);
  const openGraphUrl = singleValue(html, /<meta\s+property="og:url"\s+content="([^"]+)"\s*>/gi, 'og:url', relativePath, errors);

  if (canonical && canonical !== expected) errors.push(`${relativePath}: canonical ma wartość ${canonical}, oczekiwano ${expected}.`);
  if (openGraphUrl && openGraphUrl !== expected) errors.push(`${relativePath}: og:url ma wartość ${openGraphUrl}, oczekiwano ${expected}.`);
  if (canonical && canonical.includes('#')) errors.push(`${relativePath}: canonical nie może zawierać fragmentu.`);
  if (canonical && openGraphUrl && canonical !== openGraphUrl) errors.push(`${relativePath}: canonical i og:url nie są zgodne.`);
  checked += 1;
}

if (checked === 0) errors.push('Nie znaleziono wygenerowanych reprezentacji artykułów wiki.');
if (errors.length) {
  console.error(`[PsyHub][wiki-seo] BŁĄD:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`[PsyHub][wiki-seo] OK: ${checked} stron artykułów ma zgodne canonical i og:url.`);
