# Referencja TOC: dł‚ugi artykuł‚ i nawigacja hash

## Wprowadzenie
To jest artykuł‚ testowy dla spisu treł›ci (TOC). Zawiera wiele nagł‚owkow drugiego i trzeciego poziomu, aby zweryfikować aktywną sekcje podczas przewijania oraz zachowanie hash navigation.

## Mechanika TOC w artykule
TOC powinien automatycznie wykrywać nagł‚owki `##` i `###`, a nastepnie budować z nich mape nawigacyjną po dokumencie.

### Generowanie identyfikatorow sekcji
Każdy nagł‚owek wymaga stabilnego identyfikatora URL. Najczeł›ciej stosuje sie â€žslugâ€ť oparty na tekł›cie nagł‚owka.

### Dedupikacja identycznych nagł‚owkow
Jeżeli dwa nagł‚owki mają taki sam tekst, identyfikatory muszą być rozrożnione sufiksami liczbowymi.

## Zachowanie podczas przewijania
Aktywna sekcja TOC powinna aktualizować sie zgodnie z tym, ktory nagł‚owek jest aktualnie widoczny w oknie.

### Dobra praktyka
Wykorzystanie `IntersectionObserver` zwykle obniża koszt obliczeniowy wzgledem recznego nasł‚uchiwania scrolla dla każdego piksela.

### Czesty bł‚ąd
Ustawienie zbyt agresywnego `rootMargin` może powodować â€žmigotanieâ€ť aktywnej sekcji.

## Integracja z hash navigation
Klikniecie elementu TOC powinno aktualizować hash URL i przewijać użytkownika do wł‚ał›ciwej sekcji.

### Stabilnoł›ć linkow bezpoł›rednich
Użytkownik wchodzący na adres z hashem sekcji powinien od razu trafić do wł‚ał›ciwego miejsca w tekł›cie.

### Niezależnoł›ć od routingu strony
Hash sekcji nie może rozbijać mechanizmu przeł‚ączania artykuł‚ow. Routing strony i routing sekcji muszą wspoł‚istnieć.

## Dodatkowe przypadki graniczne
Testuj także dł‚uższe treł›ci, aby upewnić sie, że podł›wietlenie aktywnej sekcji dział‚a w ł›rodkowej i koł„cowej czeł›ci dokumentu.

### Fragment A
Rozbudowany akapit testowy 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar, lorem eu ullamcorper consequat, nisl magna convallis nisi, vitae vulputate sem purus vel lorem.

### Fragment B
Rozbudowany akapit testowy 2: Integer id erat et sem dignissim fermentum. Curabitur aliquam mi eu odio feugiat, non malesuada lectus varius. Aenean quis finibus nibh.

### Fragment C
Rozbudowany akapit testowy 3: Proin convallis ante nec ligula varius, vitae posuere sem luctus. Morbi luctus volutpat mauris, non convallis est interdum at.

## Perspektywa nieoczywista
TOC jest nie tylko narzedziem UX. W praktyce badawczej może sł‚użyć jako â€žmodel poznawczyâ€ť dokumentu: ujawnia strukture argumentu, wskazuje luki logiczne i uł‚atwia krytyczną ocene narracji.


Kluczowe kryteria akceptacyjne:
- TOC tworzy sie automatycznie z `##` i `###`.
- Aktywna sekcja podł›wietla sie podczas przewijania.
- Linkowanie sekcji nie psuje routingu artykuł‚ow.

## Bibliografia
1. Mozilla Developer Network. (2025). *Intersection Observer API*.
2. WHATWG. (2025). *URL Standard*.
3. Nielsen, J. (2020). *Web usability heuristics*.
