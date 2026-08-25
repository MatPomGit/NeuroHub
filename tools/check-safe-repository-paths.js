#!/usr/bin/env node
'use strict';

const { execFileSync } = require('child_process');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const output = execFileSync('git', ['ls-files', '-z'], {
  cwd: repoRoot,
  encoding: 'utf8'
});

const unsafePaths = output
  .split('\0')
  .filter(Boolean)
  .filter(filePath => /[\r\n\0]/u.test(filePath));

if (unsafePaths.length) {
  console.error('[PsyHub][paths] Niedozwolone znaki sterujące w ścieżkach:');
  unsafePaths.forEach(filePath => console.error(`- ${JSON.stringify(filePath)}`));
  process.exit(1);
}

console.log('[PsyHub][paths] OK: ścieżki nie zawierają znaków nowej linii.');
