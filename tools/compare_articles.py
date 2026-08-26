#!/usr/bin/env python3
"""Porównuje kanoniczne pliki wiki z publiczną nawigacją."""
from pathlib import Path
from check_config import ROOT, load_site_config, markdown_metadata, rel

config = load_site_config()
nav_entries = [item for section in config.get("nav", []) if isinstance(section, dict)
               for item in section.get("items", []) if isinstance(item, dict) and item.get("file")]
nav_files = [str(item["file"]) for item in nav_entries]
canonical = []
internal = []
redirects = []
for article in sorted((ROOT / "wiki").rglob("*.md")):
    metadata = markdown_metadata(article)
    if metadata.get("layout") == "redirect" or "redirect_to" in metadata:
        redirects.append(rel(article))
    elif metadata.get("public_navigation", "").lower() == "false":
        internal.append(rel(article))
    else:
        canonical.append(rel(article))
missing = sorted(set(canonical) - set(nav_files))
unknown = sorted(set(nav_files) - set(canonical))
duplicates = sorted({path for path in nav_files if nav_files.count(path) > 1})
print(f"Artykuły kanoniczne publiczne: {len(canonical)}")
print(f"Materiały wewnętrzne: {len(internal)}")
print(f"Przekierowania historyczne: {len(redirects)}")
for label, values in (("brak w nawigacji", missing), ("niekanoniczny wpis nawigacji", unknown), ("duplikat", duplicates)):
    for value in values:
        print(f"[ERROR] {label}: {value}")
raise SystemExit(1 if missing or unknown or duplicates else 0)
