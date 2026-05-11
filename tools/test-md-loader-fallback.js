#!/usr/bin/env node
'use strict';

/*
 * Test regresji dla loadera Markdown:
 * ścieżki z query stringiem muszą poprawnie używać fallbacku RAW.
 */
(async function testMarkdownLoaderFallback() {
  const fs = require('fs');
  const path = require('path');
  const vm = require('vm');

  const loaderCode = fs.readFileSync(path.join(__dirname, '..', 'app-md-loader.js'), 'utf8');

  const fetchCalls = [];
  const context = {
    window: {
      location: { hash: '' },
      fetchArticleMarkdown: null,
      prefetch: null,
    },
    document: {
      readyState: 'complete',
      querySelector: () => null,
      addEventListener: () => {},
    },
    sessionStorage: {
      getItem: () => null,
      setItem: () => {},
    },
    pageMap: new Map(),
    mdCache: new Map(),
    emptyArticles: new Set(),
    updateEmptyIndicators: () => {},
    fetch: async (candidate) => {
      fetchCalls.push(candidate);
      return { ok: candidate.includes('raw.githubusercontent.com'), status: 404, text: async () => '# test' };
    },
    console,
  };

  vm.createContext(context);
  vm.runInContext(loaderCode, context);

  await context.window.fetchArticleMarkdown('wiki/diagnoza/artykul.md?raw=1');

  const rawCall = fetchCalls.find((url) => url.includes('raw.githubusercontent.com'));
  if (!rawCall) {
    throw new Error('Brak wywołania fallbacku RAW dla ścieżki z query stringiem.');
  }

  if (!rawCall.endsWith('/wiki/diagnoza/artykul.md')) {
    throw new Error(`Niepoprawny URL fallbacku RAW: ${rawCall}`);
  }

  console.log('[PsyHub][md-loader] OK: fallback RAW działa dla ścieżek z query stringiem.');
})();
