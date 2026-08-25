#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(`[PsyHub][ui-shell] ${message}`);
}

assert(indexHtml.includes('data-theme="light"'), 'Dokument powinien startować w jasnym motywie.');
assert(indexHtml.includes('href="typography.css"'), 'Brak kanonicznego arkusza typografii.');
assert(!indexHtml.includes('PsyHub v'), 'Numer wersji nie powinien być widoczny w interfejsie.');
assert(!indexHtml.includes('bulbulgator'), 'Nazwa wydania nie powinna być widoczna w interfejsie.');
assert(!appJs.includes('copyArticleLinkButton'), 'Przycisk kopiowania linku nadal jest generowany.');
assert(appJs.includes("const DEFAULT_THEME = 'light';"), 'Domyślny motyw aplikacji nie jest jasny.');

const settingsStart = indexHtml.indexOf('<details class="interface-settings">');
const settingsEnd = indexHtml.indexOf('</details>', settingsStart);
const settingsHtml = indexHtml.slice(settingsStart, settingsEnd);
assert(settingsHtml.includes('theme-btns'), 'Przyciski motywów powinny być w panelu ustawień.');
assert(settingsHtml.includes('font-size-controls'), 'Przyciski wielkości tekstu powinny być w panelu ustawień.');

console.log('[PsyHub][ui-shell] OK: konfiguracja powłoki interfejsu jest spójna.');
