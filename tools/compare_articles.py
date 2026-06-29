#!/usr/bin/env python3
import re
import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# Wczytaj site-config.js
with (REPO_ROOT / 'site-config.js').open('r', encoding='utf-8') as f:
    config_content = f.read()

# Wyszukaj wszystkie wpisy file: w konfigu
referenced_files = set()
for match in re.finditer(r"file:\s*['\"]([^'\"]+)['\"]", config_content):
    file_path = match.group(1)
    referenced_files.add(file_path)

print(f'Artykuły wymienione w site-config.js: {len(referenced_files)}')

# Wygeneruj listę artykułów z wiki
wiki_articles = set()
for root, dirs, files in os.walk(REPO_ROOT / 'wiki'):
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            relative_path = Path(path).relative_to(REPO_ROOT).as_posix()
            wiki_articles.add(relative_path)

print(f'Artykuły w wiki: {len(wiki_articles)}')
print()

# Znajdź artykuły nie wymienione w konfigu
missing = []
for article in sorted(wiki_articles):
    if article not in referenced_files:
        missing.append(article)

print(f'Artykuły nie wymienione w konfigu: {len(missing)}')
print()
print('Lista artykułów do kategoryzacji:')
print('-' * 100)
for article in sorted(missing):
    parts = article.split('/')
    folder = parts[1]
    filename = parts[-1].replace('.md', '')
    print(f'Ścieżka: {article:<60} | Temat: {filename:<40} | Folder: {folder}')

print()
print('-' * 100)
print(f'Razem brakujących artykułów: {len(missing)}')

# Poszukaj sekcji "remaining" lub "pozostale" w konfigu
print()
print('Szukanie sekcji "remaining" lub "pozostale" w site-config.js...')
if 'remaining' in config_content.lower() or 'pozostale' in config_content.lower():
    print('✓ Znaleziono sekcję o nazwie "remaining" lub "pozostale"')
    # Wyznacz pozycję
    if 'remaining' in config_content.lower():
        pos = config_content.lower().find('remaining')
        snippet = config_content[max(0, pos-200):min(len(config_content), pos+500)]
        print(f'\nSnippet:\n{snippet}')
else:
    print('✗ Sekcja "remaining" lub "pozostale" nie znaleziona')
