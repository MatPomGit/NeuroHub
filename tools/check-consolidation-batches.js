#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const wikiRoot = path.join(root, 'wiki');
const batches = require('../wiki/reference/consolidation_batches.json');

function files(dir) {
  const absolute = path.join(wikiRoot, dir);
  return fs.readdirSync(absolute, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => `wiki/${dir}/${entry.name}`);
}

function allMarkdown(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? allMarkdown(target) : (entry.name.endsWith('.md') ? [target] : []);
  });
}

function metadata(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return Object.fromEntries(match[1].split(/\r?\n/).map(line => {
    const colon = line.indexOf(':');
    return colon < 0 ? null : [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
  }).filter(Boolean));
}

function isArticle(text) {
  const meta = metadata(text);
  return meta.layout !== 'redirect' && meta.content_type !== 'report' && meta.article_requirements !== 'false';
}

function checkArticle(file, errors) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  if (!isArticle(text)) return;
  const headers = [...text.matchAll(/^##\s+(.+?)\s*$/gm)];
  const bibliography = headers.findIndex(match => match[1] === 'Bibliografia');
  if (bibliography < 0) errors.push(`${file}: brak sekcji „## Bibliografia”.`);
  else if (bibliography !== headers.length - 1) errors.push(`${file}: bibliografia nie jest ostatnim rozdziałem.`);
  if (/\bdoi\s*:/i.test(text)) errors.push(`${file}: DOI zapisany w przestarzałej postaci.`);
}

function checkBatch(batch, errors) {
  if (batch.cross_wiki) {
    for (const absolute of allMarkdown(wikiRoot)) {
      const file = path.relative(root, absolute).split(path.sep).join('/');
      if (file.startsWith('wiki/reference/')) continue;
      const text = fs.readFileSync(absolute, 'utf8');
      const meta = metadata(text);
      if (meta.layout === 'redirect') {
        if (!meta.redirect_to || meta.sitemap !== 'false') errors.push(`${file}: niepełne przekierowanie.`);
      } else {
        checkArticle(file, errors);
      }
    }
    return;
  }
  const canonicals = new Set(batch.canonical_articles);
  for (const canonical of canonicals) {
    if (!fs.existsSync(path.join(root, canonical))) errors.push(`${canonical}: brak artykułu kanonicznego.`);
  }
  for (const directory of batch.directories) {
    for (const file of files(directory)) {
      const text = fs.readFileSync(path.join(root, file), 'utf8');
      const meta = metadata(text);
      if (meta.layout === 'redirect') {
        if (!meta.redirect_to || meta.sitemap !== 'false') errors.push(`${file}: niepełne przekierowanie.`);
        const target = meta.redirect_to?.split('#')[0].replace(/^\//, '').replace(/\.html$/, '.md');
        if (!target || !fs.existsSync(path.join(root, target))) errors.push(`${file}: cel przekierowania nie istnieje.`);
      } else {
        if (!canonicals.has(file) && !batch.allowed_standalone.includes(file)) {
          errors.push(`${file}: pełny tekst nie został sklasyfikowany jako kanoniczny ani samodzielny.`);
        }
        checkArticle(file, errors);
      }
    }
  }
}

const requested = process.argv[2];
const selected = requested ? batches.filter(batch => batch.id === requested) : batches;
if (!selected.length) {
  console.error(`Nieznana partia: ${requested}`);
  process.exit(2);
}
const errors = [];
selected.forEach(batch => checkBatch(batch, errors));
errors.forEach(error => console.error(`[ERROR] ${error}`));
console.log(`[PsyHub][consolidation] Sprawdzono partie: ${selected.map(batch => batch.id).join(', ')}.`);
console.log(`[PsyHub][consolidation] Wynik: ${errors.length ? `${errors.length} błędów` : 'OK'}.`);
process.exitCode = errors.length ? 1 : 0;
