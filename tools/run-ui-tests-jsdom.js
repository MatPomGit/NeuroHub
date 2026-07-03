#!/usr/bin/env node
'use strict';

/*
 * Uruchamia moduł UI w środowisku DOM i wykonuje prosty smoke test.
 * Preferuje jsdom, ale w środowiskach bez zainstalowanych zależności
 * używa minimalnego adaptera DOM wystarczającego do walidacji importu.
 */
const { createRequire } = require('node:module');

function createElementStub(tagName) {
  return {
    tagName: String(tagName).toUpperCase(),
    children: [],
    attributes: new Map(),
    style: {},
    innerHTML: '',
    textContent: '',
    appendChild(child) {
      this.children.push(child);
      return child;
    },
    setAttribute(name, value) {
      this.attributes.set(name, String(value));
    },
    getAttribute(name) {
      return this.attributes.get(name) || null;
    },
    addEventListener() {},
    removeEventListener() {}
  };
}

function createMinimalDom() {
  const nodesById = new Map([['content', createElementStub('main')]]);
  const document = {
    body: createElementStub('body'),
    documentElement: createElementStub('html'),
    createElement: createElementStub,
    getElementById(id) {
      return nodesById.get(id) || null;
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    addEventListener() {},
    removeEventListener() {}
  };
  const window = {
    document,
    navigator: { userAgent: 'psyhub-minimal-dom' },
    location: { href: 'http://localhost/', origin: 'http://localhost', pathname: '/' },
    addEventListener() {},
    removeEventListener() {},
    scrollTo() {}
  };
  return { window, document, source: 'minimalny adapter DOM' };
}

async function createDomRuntime() {
  const requireFromHere = createRequire(__filename);
  try {
    const { JSDOM } = requireFromHere('jsdom');
    const dom = new JSDOM('<!doctype html><html><body><main id="content"></main></body></html>', {
      url: 'http://localhost/'
    });
    return { window: dom.window, document: dom.window.document, source: 'jsdom' };
  } catch (error) {
    if (error && error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
    console.warn('[PsyHub][UI] Brakuje opcjonalnej zależności "jsdom".');
    console.warn('[PsyHub][UI] Używam minimalnego adaptera DOM do smoke testu importu.');
    return createMinimalDom();
  }
}

(async function runUiTestsInDom() {
  const runtime = await createDomRuntime();

  /*
   * Eksponujemy minimalny zestaw globali wymaganych przez moduł UI.
   * Dzięki temu import nie kończy się błędem w środowisku Node.
   */
  globalThis.window = runtime.window;
  globalThis.document = runtime.document;
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: runtime.window.navigator
  });
  globalThis.fetch = async () => {
    throw new Error('Mock fetch: runner DOM nie pobiera danych zewnętrznych.');
  };

  await import('../modules/tests-ui.js');

  if (!window.PsyHubTestsUI || typeof window.PsyHubTestsUI.renderTheoreticalTest !== 'function') {
    throw new Error('[PsyHub][UI] Nie udało się zarejestrować API modułu tests-ui.js w środowisku DOM.');
  }

  console.log(`[PsyHub][UI] OK: moduł tests-ui.js załadowany poprawnie (${runtime.source}).`);
})();
