#!/usr/bin/env python3
import re

with open('site-config.js', 'r', encoding='utf-8') as f:
    config_content = f.read()

# Szukaj sekcji 'resocjalizacja' i 'systemy_rodzinne'
if 'resocjalizacja' in config_content.lower():
    print('✓ Sekcja resocjalizacja znaleziona w nav')
    
if 'systemy_rodzinne' in config_content.lower():
    print('✓ Sekcja systemy_rodzinne znaleziona w nav')

# Przeszukaj pliki do tych sekcji
resocjalizacja_files = []
systemy_files = []

for match in re.finditer(r"id:\s*['\"]([^'\"]*resocjalizacja[^'\"]*)['\"]", config_content):
    resocjalizacja_files.append(match.group(1))
    
for match in re.finditer(r"id:\s*['\"]([^'\"]*systemy_rodzinne[^'\"]*)['\"]", config_content):
    systemy_files.append(match.group(1))

print(f'Artykuły resocjalizacji w konfigu: {len(resocjalizacja_files)}')
print(f'Artykuły systemów rodzinnych w konfigu: {len(systemy_files)}')

# Szukaj psychofarmakologii w nav - czy jest w nav ale nie w zmiennej plans?
print('\nSzukanie psychofarmakologii w konfigu...')
pharmaco_count = config_content.lower().count('psychofarmakologia')
print(f'Wzmianki psychofarmakologii: {pharmaco_count}')

# Szukaj czy są wpisy dla psychofarmakologi w nav
if 'psychofarmakologia' in config_content:
    print('✓ Psychofarmakologia jest w site-config.js')
else:
    print('✗ Psychofarmakologia nie jest w site-config.js')
