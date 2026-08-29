#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const outputRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'psyhub-wiki-seo-'));

try {
  const checker = path.join(__dirname, 'check-generated-wiki-seo.js');
  const result = spawnSync(process.execPath, [checker, outputRoot], {
    encoding: 'utf8'
  });
  const expected = '[PsyHub][wiki-seo] BŁĄD: build nie wygenerował _site/wiki.';

  if (result.status !== 1) {
    throw new Error(`Oczekiwano kodu zakończenia 1, otrzymano ${result.status}.`);
  }
  if (result.stderr.trim() !== expected) {
    throw new Error(`Oczekiwano pojedynczego kontrolowanego komunikatu, otrzymano:\n${result.stderr}`);
  }
  if (result.stdout) {
    throw new Error(`Nie oczekiwano danych na standardowym wyjściu, otrzymano:\n${result.stdout}`);
  }

  console.log('[PsyHub][wiki-seo-test] OK: brak katalogu wiki kończy sprawdzanie kontrolowanym błędem.');
} finally {
  fs.rmSync(outputRoot, { recursive: true, force: true });
}
