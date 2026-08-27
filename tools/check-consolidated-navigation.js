#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const siteConfigPath = path.join(root, 'site-config.js');
const appPath = path.join(root, 'app.js');
const batchesPath = path.join(root, 'wiki', 'reference', 'consolidation_batches.json');

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return Object.fromEntries(match[1].split(/\r?\n/).map(line => {
    const colon = line.indexOf(':');
    if (colon < 0) return null;
    return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
  }).filter(Boolean));
}

function loadSiteConfig() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(siteConfigPath, 'utf8'), sandbox);
  return sandbox.window.SITE_CONFIG;
}

function loadRuntimeTopicGroups() {
  const appJs = fs.readFileSync(appPath, 'utf8');
  const start = appJs.indexOf('const SIDEBAR_TOPIC_GROUPS = [');
  const endMarker = '\n];\n\nfunction isDevelopmentEnvironment';
  const end = appJs.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error('Nie udało się odczytać SIDEBAR_TOPIC_GROUPS z app.js.');
  }

  const arrayStart = appJs.indexOf('[', start);
  const arraySource = appJs.slice(arrayStart, end + 2);
  return vm.runInNewContext(`(${arraySource})`);
}

function normalizeWikiPath(value) {
  return String(value || '')
    .replace(/\\/g, '/')
    .replace(/^\//, '')
    .replace(/\.html(?:#.*)?$/, '.md')
    .split('#')[0];
}

function main() {
  const errors = [];
  const config = loadSiteConfig();
  const topicGroups = loadRuntimeTopicGroups();
  const batches = JSON.parse(fs.readFileSync(batchesPath, 'utf8'));

  assert(Array.isArray(config?.nav), 'SITE_CONFIG.nav nie jest tablicą.', errors);
  assert(Array.isArray(topicGroups) && topicGroups.length > 0, 'Brak głównych kategorii nawigacji.', errors);

  const navSections = new Map((config.nav || []).map(section => [section.section, section]));
  const navFiles = new Map();
  const navIds = new Set();

  for (const section of config.nav || []) {
    assert(Boolean(section.section), 'Sekcja nawigacji bez nazwy.', errors);
    assert(Boolean(section.domainKey), `Sekcja „${section.section || '?'}” nie ma domainKey.`, errors);
    for (const item of section.items || []) {
      if (!item.id || item.href) continue;
      assert(!navIds.has(item.id), `Duplikat id w nawigacji: ${item.id}.`, errors);
      navIds.add(item.id);
      if (item.file) navFiles.set(normalizeWikiPath(item.file), { item, section: section.section });
    }
  }

  const assignedSections = new Map();
  for (const group of topicGroups) {
    assert(Boolean(group.id && group.label), 'Główna kategoria bez id lub etykiety.', errors);
    for (const sectionName of group.sections || []) {
      assert(navSections.has(sectionName), `Kategoria „${group.label}” wskazuje nieistniejącą sekcję „${sectionName}”.`, errors);
      if (assignedSections.has(sectionName)) {
        errors.push(`Sekcja „${sectionName}” jest przypisana do więcej niż jednej głównej kategorii: „${assignedSections.get(sectionName)}” i „${group.label}”.`);
      } else {
        assignedSections.set(sectionName, group.label);
      }
    }
  }

  for (const sectionName of navSections.keys()) {
    assert(assignedSections.has(sectionName), `Sekcja „${sectionName}” nie trafi do nazwanej głównej kategorii i w UI wpadnie do „Pozostałe”.`, errors);
  }

  const canonicalFiles = new Set(
    batches
      .filter(batch => !batch.cross_wiki)
      .flatMap(batch => batch.canonical_articles || [])
      .map(normalizeWikiPath)
  );

  for (const canonical of canonicalFiles) {
    const absolute = path.join(root, canonical);
    assert(fs.existsSync(absolute), `Brak kanonicznego artykułu: ${canonical}.`, errors);
    if (!fs.existsSync(absolute)) continue;

    const metadata = parseFrontmatter(fs.readFileSync(absolute, 'utf8'));
    if (metadata.layout === 'redirect') {
      const target = normalizeWikiPath(metadata.redirect_to);
      assert(Boolean(target), `Przekierowanie ${canonical} nie ma celu.`, errors);
      assert(navFiles.has(target), `Kanoniczny wpis ${canonical} przekierowuje do ${target}, ale cel nie jest dostępny w głównym spisie treści.`, errors);
      continue;
    }

    assert(navFiles.has(canonical), `Kanoniczny artykuł ${canonical} nie jest dostępny w głównym spisie treści.`, errors);
  }

  const appJs = fs.readFileSync(appPath, 'utf8');
  const homeStart = appJs.indexOf('function renderHome()');
  const homeEnd = appJs.indexOf('\n/*  Breadcrumb  */', homeStart);
  const homeSource = homeStart >= 0 && homeEnd > homeStart ? appJs.slice(homeStart, homeEnd) : '';
  assert(homeSource.includes('buildSidebarTopicGroups()'), 'Główny spis treści nie korzysta z tej samej hierarchii kategorii co panel boczny.', errors);
  assert(homeSource.includes('site-toc'), 'Nie znaleziono renderowania głównego spisu treści.', errors);

  if (errors.length) {
    errors.forEach(error => console.error(`[ERROR] ${error}`));
    console.error(`[PsyHub][consolidated-navigation] Wynik: ${errors.length} błędów.`);
    process.exitCode = 1;
    return;
  }

  console.log(`[PsyHub][consolidated-navigation] OK: ${canonicalFiles.size} wpisów kanonicznych, ${navSections.size} sekcji, ${topicGroups.length} głównych kategorii.`);
}

main();
