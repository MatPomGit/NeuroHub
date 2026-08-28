#!/usr/bin/env node
'use strict';

/* Testy regresji fallbacku loadera Markdown oraz prefetchu artykułów. */
(async function testMarkdownLoaderFallback() {
  const fs = require('fs');
  const path = require('path');
  const vm = require('vm');

  const loaderCode = fs.readFileSync(path.join(__dirname, '..', 'app-md-loader.js'), 'utf8');
  const appCode = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  const prefetchCode = appCode.slice(
    appCode.indexOf('function prefetch(id) {'),
    appCode.indexOf('\n/*  Wiki index  */')
  );

  const fetchCalls = [];
  let responseMode = 'success';
  let prefetchedItem = { id: 'artykul', file: 'wiki/diagnoza/artykul.md?raw=1' };
  let indicatorUpdates = 0;
  const originalPrefetch = () => {};
  const context = {
    window: { fetchArticleMarkdown: null, prefetch: originalPrefetch },
    mdCache: new Map(),
    emptyArticles: new Set(),
    prevNext: () => ({ prev: prefetchedItem, next: null }),
    parseArticleFrontmatter: text => ({ body: text.replace(/^---[\s\S]*?---\s*/, '') }),
    isBodyEmpty: body => !body.trim(),
    updateEmptyIndicators: () => { indicatorUpdates += 1; },
    fetch: async candidate => {
      fetchCalls.push(candidate);
      const isRaw = candidate.includes('raw.githubusercontent.com');
      const ok = responseMode !== 'error' && isRaw;
      return { ok, status: ok ? 200 : 404, text: async () => '# Treść' };
    },
    console,
  };

  vm.createContext(context);
  vm.runInContext(loaderCode, context);
  if (context.window.prefetch !== originalPrefetch) {
    throw new Error('Loader nie powinien nadpisywać window.prefetch.');
  }
  context.fetchArticleMarkdown = context.window.fetchArticleMarkdown;
  vm.runInContext(prefetchCode, context);

  const settle = () => new Promise(resolve => setImmediate(resolve));

  context.prefetch('bieżący');
  await settle();
  const rawCall = fetchCalls.find(url => url.includes('raw.githubusercontent.com'));
  if (!rawCall?.endsWith('/wiki/diagnoza/artykul.md')) {
    throw new Error(`Prefetch nie użył poprawnego fallbacku RAW: ${rawCall || 'brak wywołania'}`);
  }
  if (context.mdCache.get(prefetchedItem.file) !== '# Treść') {
    throw new Error('Prefetch nie zapisał result.text w mdCache.');
  }

  responseMode = 'error';
  prefetchedItem = { id: 'blad-http', file: 'wiki/diagnoza/blad_http.md' };
  context.prefetch('bieżący');
  await settle();
  if (context.emptyArticles.has(prefetchedItem.id)) {
    throw new Error('Błąd HTTP nie może oznaczać artykułu jako pustego.');
  }

  responseMode = 'success';
  prefetchedItem = { id: 'nieaktualny', file: 'wiki/diagnoza/nieaktualny.md' };
  context.emptyArticles.add(prefetchedItem.id);
  const updatesBeforeRefresh = indicatorUpdates;
  context.prefetch('bieżący');
  await settle();
  if (context.emptyArticles.has(prefetchedItem.id)) {
    throw new Error('Poprawne pobranie niepustej treści nie usunęło starego oznaczenia.');
  }
  if (indicatorUpdates !== updatesBeforeRefresh + 1) {
    throw new Error('Po usunięciu starego oznaczenia nie odświeżono wskaźników.');
  }

  console.log('[PsyHub][md-loader] OK: fallback prefetchu i stan pustych artykułów działają poprawnie.');
})().catch(err => { console.error(err); process.exit(1); });
