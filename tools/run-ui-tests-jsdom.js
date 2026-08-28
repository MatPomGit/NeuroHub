#!/usr/bin/env node
'use strict';

/*
 * Uruchamia moduł UI w środowisku DOM i wykonuje prosty smoke test.
 * Preferuje jsdom, ale w środowiskach bez zainstalowanych zależności
 * używa minimalnego adaptera DOM wystarczającego do walidacji importu.
 */
const { createRequire } = require('node:module');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

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

async function assertDailyPsychologyEscapesUntrustedText() {
  const source = fs.readFileSync(path.resolve(__dirname, '..', 'app.js'), 'utf8');
  const qSource = source.slice(source.indexOf('function q(value)'), source.indexOf('\nfunction toggleGroup'));
  const renderSource = source.slice(source.indexOf('function renderDailyPsychology'), source.indexOf('\nwindow.selectDailyDay'));
  const injected = `<img src=x onerror="window.__executed=true"> ' „cytat”`;
  const titleNode = { textContent: '' };
  const leadNode = { textContent: '' };
  const bodyNode = {
    children: [],
    replaceChildren() { this.children = []; },
    appendChild(child) { this.children.push(child); }
  };
  const area = {
    innerHTML: '',
    querySelector(selector) {
      if (selector.endsWith('.daily-card-title')) return titleNode;
      if (selector.endsWith('.daily-card-lead')) return leadNode;
      if (selector.endsWith('.daily-card-body')) return bodyNode;
      return null;
    }
  };
  const today = new Date().getDay();
  const context = {
    console,
    Date,
    Map,
    Object,
    Number,
    dailySelectedDay: null,
    setBreadcrumb() {},
    animateContentIn() {},
    getWeekStartMonday: date => date,
    getWeeklyFactsMap: facts => new Map([[today, facts[0]]]),
    loadDailyPsychologyFacts: async () => [{ title: injected, message: injected, body: injected, source: injected }],
    document: {
      getElementById: () => area,
      createElement: tagName => ({ tagName: tagName.toUpperCase(), textContent: '' })
    },
    window: {
      __executed: false,
      scrollTo() {},
      DAILY_PSYCHOLOGY: [{
        day: today,
        emoji: injected,
        dayName: injected,
        theme: injected,
        curiosity: { title: injected, lead: injected, body: [injected] },
        exercise: { title: injected, intro: injected, steps: [injected], type: injected }
      }]
    }
  };
  vm.runInNewContext(`${qSource}\n${renderSource}\nrenderDailyPsychology('test', { section: ${JSON.stringify(injected)} });`, context);
  await new Promise(resolve => setImmediate(resolve));

  if (area.innerHTML.includes('<img')) {
    throw new Error('[PsyHub][UI] Dane Daily Psychology utworzyły wykonywalny HTML.');
  }
  if (!area.innerHTML.includes('&lt;img') || !area.innerHTML.includes('&quot;')) {
    throw new Error('[PsyHub][UI] Dane Daily Psychology nie zostały poprawnie zakodowane.');
  }
  if (!area.innerHTML.includes('daily-exercise-type reflection') || area.innerHTML.includes(`daily-exercise-type ${injected}`)) {
    throw new Error('[PsyHub][UI] Typ ćwiczenia spoza listy dozwolonych trafił do klasy CSS.');
  }
  if (titleNode.textContent !== injected || leadNode.textContent !== injected ||
      bodyNode.children.some(node => node.tagName !== 'P' || node.textContent.includes('<img') === false) ||
      context.window.__executed) {
    throw new Error('[PsyHub][UI] Asynchroniczna ciekawostka nie pozostała zwykłym tekstem.');
  }
  console.log('[PsyHub][UI] OK: Daily Psychology bezpiecznie renderuje tekst i klasy CSS.');
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

  await assertDailyPsychologyEscapesUntrustedText();

  console.log(`[PsyHub][UI] OK: moduł tests-ui.js załadowany poprawnie (${runtime.source}).`);
})();
