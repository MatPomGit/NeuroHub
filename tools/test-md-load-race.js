#!/usr/bin/env node
'use strict';

/* Test regresji: starsza odpowiedź Markdown nie może zastąpić nowszego widoku. */
(async function testMarkdownLoadRace() {
  const fs = require('fs');
  const path = require('path');
  const vm = require('vm');

  const appCode = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  const functionStart = appCode.indexOf('async function loadMd(');
  const functionEnd = appCode.indexOf('\nfunction renderMd(', functionStart);
  if (functionStart < 0 || functionEnd < 0) {
    throw new Error('Nie znaleziono funkcji loadMd w app.js.');
  }

  const pending = new Map();
  const content = { innerHTML: '' };
  const context = {
    current: 'a',
    loadMdRequestNumber: 0,
    document: { getElementById: () => content },
    mdCache: new Map(),
    emptyArticles: new Set(),
    fetchArticleMarkdown(file) {
      return new Promise((resolve, reject) => pending.set(file, { resolve, reject }));
    },
    parseArticleFrontmatter: text => ({ body: text }),
    isBodyEmpty: () => false,
    renderMd: text => { content.innerHTML = text; },
    setBreadcrumb() {},
    prefetch() {},
    updateEmptyIndicators() {},
    prevNext: () => ({}),
    getDomainKeyForItem: () => '',
    SITE_CONFIG: { plans: {} },
    renderPlans: () => '',
    renderMeasurementTools: () => '',
    setupMeasurementToolsSection() {},
    animateContentIn() {},
    EMPTY_BANNER_HTML: '',
    window: { scrollTo() {} },
    console,
  };

  vm.createContext(context);
  vm.runInContext(appCode.slice(functionStart, functionEnd), context);

  const loadA = context.loadMd('a', { file: 'a.md', label: 'A' });
  context.current = 'b';
  const loadB = context.loadMd('b', { file: 'b.md', label: 'B' });

  pending.get('b.md').resolve({ text: 'Treść B' });
  await loadB;
  pending.get('a.md').resolve({ text: 'Treść A' });
  await loadA;

  if (content.innerHTML !== 'Treść B') {
    throw new Error(`Spóźniona odpowiedź A zastąpiła widok B: ${content.innerHTML}`);
  }
  if (context.mdCache.get('a.md') !== 'Treść A') {
    throw new Error('Spóźniona odpowiedź A nie została zachowana w cache.');
  }

  console.log('[PsyHub][md-load-race] OK: odpowiedź A nie zastępuje treści B.');
})().catch(error => { console.error(error); process.exit(1); });
