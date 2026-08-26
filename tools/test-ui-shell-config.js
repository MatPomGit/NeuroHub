#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'site-config.js'), 'utf8'), sandbox);
const redirectIds = Object.keys(sandbox.window.SITE_CONFIG.articleRedirects || {});

function assert(condition, message) {
  if (!condition) throw new Error(`[PsyHub][ui-shell] ${message}`);
}

assert(indexHtml.includes('data-theme="light"'), 'Dokument powinien startować w jasnym motywie.');
assert(indexHtml.includes('href="typography.css"'), 'Brak kanonicznego arkusza typografii.');
assert(!indexHtml.includes('PsyHub v'), 'Numer wersji nie powinien być widoczny w interfejsie.');
assert(!indexHtml.includes('bulbulgator'), 'Nazwa wydania nie powinna być widoczna w interfejsie.');
assert(!appJs.includes('copyArticleLinkButton'), 'Przycisk kopiowania linku nadal jest generowany.');
assert(appJs.includes("const DEFAULT_THEME = 'light';"), 'Domyślny motyw aplikacji nie jest jasny.');
assert(!appJs.includes("navigate('wiki-index/"), 'Interfejs nie powinien prowadzić do wycofanych stron katalogowych.');
const scenariosSource = appJs.slice(appJs.indexOf('const startScenarios = ['), appJs.indexOf('const startCardsHtml'));
assert(
  redirectIds.every(id => !scenariosSource.includes(`id: '${id}'`) && !scenariosSource.includes(`id: "${id}"`)),
  'Scenariusze startowe nie mogą prowadzić przez dawne identyfikatory.'
);
assert(scenariosSource.includes("id: 'psychologia_poznawcza/percepcja'"), 'Scenariusz Wiki powinien prowadzić do artykułu kanonicznego.');
assert(
  appJs.includes("extraPagesBtn?.addEventListener('click', () => navigate('wstep_do_psychologii/definicja'))"),
  'Przycisk dodatkowych stron powinien prowadzić bezpośrednio do artykułu kanonicznego.'
);

const settingsStart = indexHtml.indexOf('<details class="interface-settings">');
const settingsEnd = indexHtml.indexOf('</details>', settingsStart);
const settingsHtml = indexHtml.slice(settingsStart, settingsEnd);
assert(settingsHtml.includes('theme-btns'), 'Przyciski motywów powinny być w panelu ustawień.');
assert(settingsHtml.includes('font-size-controls'), 'Przyciski wielkości tekstu powinny być w panelu ustawień.');

console.log('[PsyHub][ui-shell] OK: konfiguracja powłoki interfejsu jest spójna.');
