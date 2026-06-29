# Wymagania dla artykułów i strony PsyHub

Dokument porządkuje wymagania redakcyjne i techniczne, które powinny być spełnione przy każdej zmianie treści lub konfiguracji portalu.

## 1) Wymagania dla artykułów

1. Artykuł powinien mieć strukturę: wprowadzenie, definicje, analiza, wytyczne, praktyczne przykłady (obejmujące dobrą i złą praktykę), perspektywa nieoczywista, podsumowanie, bibliografia.
2. Sekcja `## Bibliografia` jest obowiązkowa i musi być ostatnim rozdziałem artykułu.
3. Bibliografia powinna zawierać źródła naukowe wysokiej jakości, adekwatne do tematu (bez pozycji generycznych).
4. Nie usuwamy wartościowej treści istniejącej; aktualizacje wykonujemy przez integrację istniejącej treści, porządkowanie sekcji i wpisanie starych rozdziałów do nowego układu.
5. Nie dodajemy treści generycznych. Opisy powinny odnosić się do artykułu.
6. Wnioski i dane liczbowe muszą mieć ślad źródłowy w treści.

## 2) Wymagania dla plików wiki

1. Nazwy plików i folderów w `wiki/` muszą być zgodne z `snake_case` i małymi literami.
2. Artykuł powinien być umieszczony w folderze tematycznie odpowiadającym zakresowi treści.
3. Po zmianie nazwy lub lokalizacji pliku należy zaktualizować wszystkie referencje:
   - linki w plikach `.md`,
   - mapowania w `site-config.js`,
   - dokumenty referencyjne i raportowe.

## 3) Wymagania dla strony (spójność i walidacja)

1. Wpisy `status: "live"` muszą wskazywać istniejące i niepuste pliki.
2. Linki wewnętrzne nie mogą wskazywać nieistniejących ścieżek po rename/refaktorze.
3. Każda zmiana w treści lub konfiguracji powinna kończyć się uruchomieniem walidacji:
   - `node tools/run-node-tests.js`
   - `node tools/check_content.js`

## 4) Wymagania procesowe

1. Plik `docs/todo.md` jest główną listą prac i decyzji do weryfikacji.
2. Opisy zmian w PR powinny zawierać: zakres, wyniki walidacji, ryzyka i ograniczenia.
