#!/usr/bin/env node
/* Statyczna kontrola przekierowań artykułów wiki oraz mapy SPA. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const wikiRoot = path.join(root, 'wiki');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : (/\.md$/i.test(entry.name) ? [full] : []);
  });
}
function frontMatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split(/\r?\n/)) {
    const split = line.indexOf(':');
    if (split < 0) continue;
    data[line.slice(0, split).trim()] = line.slice(split + 1).trim().replace(/^(['"])(.*)\1$/, '$2');
  }
  return data;
}
function loadRedirectMap() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, 'site-config.js'), 'utf8'), sandbox);
  return sandbox.window.SITE_CONFIG.articleRedirects || {};
}
function idFor(file) { return path.relative(wikiRoot, file).replace(/\\/g, '/').replace(/\.md$/i, ''); }
function targetFor(value) {
  if (!value.startsWith('/wiki/') || !value.split('#')[0].endsWith('.html')) return null;
  const [html, anchor = ''] = value.split('#', 2);
  return { file: path.join(root, html.slice(1).replace(/\.html$/, '.md')), id: html.slice(6, -5), anchor };
}
function slug(text) {
  return text.trim().toLowerCase().replace(/[łŁ]/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/<[^>]+>/g, '').replace(/[`*_~]/g, '').replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
function anchors(file) {
  const text = fs.readFileSync(file, 'utf8');
  const result = new Set();
  for (const match of text.matchAll(/^#{1,6}\s+(.+?)\s*#*$/gm)) {
    const explicit = match[1].match(/\s*\{#([^}]+)\}\s*$/);
    if (explicit) result.add(explicit[1]);
    else {
      result.add(slug(match[1]));
      result.add(match[1].trim().toLowerCase().replace(/[^\p{L}\p{N} -]/gu, '').replace(/\s+/g, '-'));
    }
  }
  return result;
}
const requested = process.argv.slice(2).filter(arg => !arg.startsWith('-'));
const allFiles = walk(wikiRoot);
const selected = requested.length ? allFiles.filter(file => requested.includes(path.relative(wikiRoot, file).split(path.sep)[0])) : allFiles;
const redirects = new Map();
const errors = [];
for (const file of selected) {
  const meta = frontMatter(fs.readFileSync(file, 'utf8'));
  if (meta.redirect || meta.layout === 'redirect') redirects.set(idFor(file), { file, meta });
}
const spa = loadRedirectMap();
let missingTargets = 0; let orphaned = 0; let longChains = 0; let indirectLinks = 0;
for (const [id, redirect] of redirects) {
  const { meta, file } = redirect;
  if (meta.redirect || meta.layout !== 'redirect' || !meta.title || !meta.redirect_to || meta.sitemap !== 'false') {
    errors.push(`${id}: front matter nie odpowiada formatowi kanonicznemu.`); continue;
  }
  const target = targetFor(meta.redirect_to);
  if (!target) { missingTargets += 1; errors.push(`${id}: niepoprawna ścieżka HTML ${meta.redirect_to}.`); continue; }
  if (!fs.existsSync(target.file)) { missingTargets += 1; errors.push(`${id}: cel nie istnieje (${target.id}).`); continue; }
  if (target.anchor && !anchors(target.file).has(decodeURIComponent(target.anchor))) errors.push(`${id}: kotwica #${target.anchor} nie istnieje w ${target.id}.`);
  const targetMeta = frontMatter(fs.readFileSync(target.file, 'utf8'));
  if (targetMeta.redirect || targetMeta.layout === 'redirect') { longChains += 1; errors.push(`${id}: cel ${target.id} jest innym przekierowaniem.`); }
  if (!Object.prototype.hasOwnProperty.call(spa, id)) { orphaned += 1; errors.push(`${id}: brak wpisu w SITE_CONFIG.articleRedirects.`); }
  else if (spa[id] !== target.id) errors.push(`${id}: mapa SPA wskazuje ${spa[id]}, a front matter ${target.id}.`);
}
for (const [source, target] of Object.entries(spa)) {
  if (selected.some(file => idFor(file) === source) && !redirects.has(source)) errors.push(`${source}: mapa SPA wskazuje ${target}, ale plik nie jest przekierowaniem.`);
}
for (const file of selected) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/(?<!!)\[[^\]]*\]\(([^\s)]+)(?:\s+['"][^'"]*['"])?\)/g)) {
    const href = decodeURIComponent(match[1]).split(/[?#]/, 1)[0];
    let linkedFile = null;
    if (href.startsWith('/wiki/') && href.endsWith('.html')) linkedFile = path.join(root, href.slice(1).replace(/\.html$/, '.md'));
    else if (href.endsWith('.md')) linkedFile = path.resolve(path.dirname(file), href);
    if (!linkedFile || !linkedFile.startsWith(`${wikiRoot}${path.sep}`)) continue;
    const linkedId = idFor(linkedFile);
    if (redirects.has(linkedId)) {
      indirectLinks += 1;
      errors.push(`${idFor(file)}: link ${match[1]} prowadzi przez przekierowanie ${linkedId}.`);
    }
  }
}
const canonical = selected.length - redirects.size;
console.log('=== RAPORT PRZEKIEROWAŃ WIKI ===');
console.log(`dziedziny: ${requested.length ? requested.join(', ') : 'wszystkie'}`);
console.log(`artykuły kanoniczne: ${canonical}`);
console.log(`przekierowania: ${redirects.size}`);
console.log(`osierocone przekierowania: ${orphaned}`);
console.log(`cele nieistniejące: ${missingTargets}`);
console.log(`łańcuchy dłuższe niż jeden krok: ${longChains}`);
console.log(`linki wewnętrzne przez przekierowanie: ${indirectLinks}`);
errors.forEach(error => console.error(`[ERROR] ${error}`));
process.exitCode = errors.length ? 1 : 0;
