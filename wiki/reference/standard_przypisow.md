---
content_type: formatting_example
article_requirements: false
sitemap: false
public_navigation: false
published: false

lastReviewed: 2026-04-01
reviewCycleMonths: 24
evidenceCutoffDate: 2025-12-31
---

# Standard redakcyjny przypisów i bibliografii (v1)

Ten dokument definiuje minimalny standard cytowania dla treści w `wiki/**/*.md`.

## Zakres stosowania

- Priorytet wdrożenia (iteracja 1): `wiki/testy`, `wiki/psychometria`, `wiki/psychologia_sadowa`.

## Zasady obowiązkowe

1. Każde twierdzenie faktograficzne, kliniczne, prawne lub statystyczne, które może być kwestionowane, musi mieć odwołanie przypisowe w tekście: `[^id]`.
2. Definicje przypisów umieszczamy na końcu artykułu po nagłówku `## Bibliografia`.
3. Każda pozycja bibliograficzna ma format APA 7.
4. Gdy publikacja ma DOI, podaj go na końcu wpisu jako aktywny odnośnik w kanonicznym formacie HTTPS: `[https://doi.org/10.xxxx/xxxxx](https://doi.org/10.xxxx/xxxxx)`. Odnośnik powinien prowadzić przez resolver DOI do strony oryginalnej publikacji.
5. Nie poprzedzaj identyfikatora etykietą `DOI:` ani `doi:`. Nie podawaj zamiast DOI adresu wyszukiwarki, rekordu bibliograficznego lub nieautoryzowanej kopii tekstu.
6. Jeżeli źródło nie ma DOI, dodaj stabilny URL tylko wtedy, gdy przewiduje go APA 7 dla danego rodzaju materiału. Nie dodawaj adresu katalogu bibliotecznego do opisu książki drukowanej.
7. Identyfikatory przypisów powinny być krótkie i jednoznaczne, np. `[^nasreddine2005]`, `[^kpk]`.

## Minimalny szablon

```md
Treść twierdzenia wymagającego źródła.[^kowalski2024]

## Bibliografia

[^kowalski2024]: Nazwisko, I. I., & Nazwisko, I. I. (2024). Tytuł artykułu. *Tytuł Czasopisma, 12*(3), 45–60. [https://doi.org/10.xxxx/xxxxx](https://doi.org/10.xxxx/xxxxx)
```

## Plan iteracyjny

- Iteracja 1 (zrealizowana częściowo): wdrożenie wzorca w wybranych artykułach działów wysokiego ryzyka.
- Iteracja 2: rozszerzenie na pozostałe pliki w wymienionych działach.
- Iteracja 3: rozszerzenie na resztę `wiki/**`.
