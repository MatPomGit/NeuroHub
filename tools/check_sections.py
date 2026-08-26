#!/usr/bin/env python3
"""Kontrola przypisania publicznych sekcji nawigacji do kategorii."""
from check_config import load_site_config

config = load_site_config()
errors = []
sections = config.get("nav", [])
for index, section in enumerate(sections):
    if not isinstance(section, dict):
        errors.append(f"nav[{index}]: sekcja nie jest obiektem")
        continue
    if not section.get("domainKey"):
        errors.append(f"nav[{index}] ({section.get('section', 'bez nazwy')}): brak kategorii domainKey")
    if not isinstance(section.get("items"), list) or not section["items"]:
        errors.append(f"nav[{index}] ({section.get('section', 'bez nazwy')}): brak pozycji")

print(f"Sekcje publiczne: {len(sections)}")
print(f"Sekcje bez kategorii: {sum('domainKey' in error for error in errors)}")
for error in errors:
    print(f"[ERROR] {error}")
raise SystemExit(1 if errors else 0)
