#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const style = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const clarity = fs.readFileSync(path.join(root, 'clarity-ui.css'), 'utf8');
const typography = fs.readFileSync(path.join(root, 'typography.css'), 'utf8');
const wikiLayout = fs.readFileSync(path.join(root, '_layouts', 'wiki.html'), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(`[PsyHub][css-architecture] ${message}`);
}

assert(!style.includes('.btn-copy-link'), 'Pozostały style usuniętego przycisku kopiowania linku.');
assert(!style.includes('Article and subpage redesign'), 'Pozostała sprzeczna, historyczna warstwa wyglądu artykułów.');
assert(clarity.includes('min-height:22px;padding:.12rem .55rem'), 'Nawigacja głównego spisu treści nie jest wystarczająco zwarta.');
assert(clarity.includes('padding:.78rem clamp(1rem,2.5vw,1.65rem)'), 'Panel tytułowy nie ma kanonicznego paddingu.');
assert(typography.includes('.psyhub-app .md>h1'), 'Typografia nagłówka artykułu nie jest utrzymywana centralnie.');
assert(!wikiLayout.includes('wiki-context'), 'Nad tytułem artykułu Jekyll pozostał zbędny blok kontekstowy.');

console.log('[PsyHub][css-architecture] OK: aktywna warstwa wizualna nie zawiera historycznych konfliktów.');
