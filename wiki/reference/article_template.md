---
title: Zalecany wzorzec artykułu
description: Elastyczny schemat tworzenia zwartych, rzetelnych i dobrze połączonych artykułów edukacyjnych PsyHub.
---

# Zalecany wzorzec artykułu

Ten wzorzec jest pomocą redakcyjną, a nie obowiązkowym formularzem. Autor wybiera tylko te części, które pomagają rzetelnie wyjaśnić temat. Nazwy i kolejność sekcji można zmieniać. Obowiązują natomiast zasady jakościowe PsyHub: precyzja, oparcie na źródłach, rozdzielenie danych od interpretacji oraz brak treści pozornie zwiększających objętość.

## Najpierw określ zakres

Jeden artykuł powinien wyczerpująco omawiać jedno rozpoznawalne zagadnienie. Przed utworzeniem pliku należy sprawdzić, czy temat nie jest już opisany. Jeśli istnieje, nową treść trzeba włączyć do artykułu kanonicznego.

Osobny artykuł ma sens, gdy zagadnienie:

- odpowiada na inne główne pytanie czytelnika;
- wymaga odrębnej definicji, argumentacji i bibliografii;
- może być zrozumiane bez powtarzania znacznej części innego artykułu.

Nie należy wydzielać tekstu tylko dlatego, że stanowi kolejną teorię, mechanizm, etap, zastosowanie lub grupę przykładów w obrębie tego samego tematu. Takie treści zwykle powinny stać się rozdziałami dłuższego artykułu.

## Proponowany tok wywodu

### Najważniejsze informacje

Na początku warto podać krótką odpowiedź na pytanie, którego dotyczy artykuł. Może to być jeden akapit albo od trzech do pięciu tez. Ta część nie powinna powtarzać późniejszego podsumowania.

### Definicja i granice pojęcia

Należy wyjaśnić, czym jest omawiane zjawisko, a czym nie jest. Jeśli w literaturze występują konkurencyjne definicje, trzeba wskazać ich autorów, zakres zastosowania i konsekwencje przyjęcia każdej z nich.

### Mechanizmy, modele i uwarunkowania

W tej części należy przedstawić procesy wyjaśniające zjawisko oraz zależności między nimi. Opis powinien odróżniać korelację od przyczynowości, wyniki badań od hipotez oraz dobrze potwierdzone mechanizmy od propozycji teoretycznych.

### Stan badań

Wyniki warto porządkować według pytań lub sporów, a nie streszczać publikacja po publikacji. Przy ważnych twierdzeniach należy podać rodzaj dowodu, badaną populację, wielkość i kierunek efektu, jeśli są dostępne, oraz istotne ograniczenia metodologiczne.

### Zastosowania i przykłady

Przykład jest potrzebny wtedy, gdy objaśnia mechanizm, ułatwia odróżnienie podobnych pojęć albo pokazuje konsekwencje praktyczne. Nie każdy temat wymaga osobnych sekcji „dobra praktyka” i „zła praktyka”. W artykule teoretycznym trafniejsza może być analiza badania, porównanie modeli lub studium przypadku.

### Ograniczenia i kwestie sporne

Należy wskazać granice uogólniania wyników, alternatywne interpretacje oraz luki w wiedzy. Kontrowersja zasługuje na opis wtedy, gdy jest obecna w literaturze, a nie tylko dlatego, że uatrakcyjnia narrację.

### Wnioski

Podsumowanie powinno syntetyzować odpowiedź na główne pytanie. Nie powinno ponownie przedstawiać całej treści ani dodawać nowych twierdzeń bez źródeł.

### Bibliografia

Bibliografia kończy artykuł. Powinna zawierać źródła rzeczywiście wykorzystane w tekście, przede wszystkim metaanalizy, przeglądy systematyczne, badania pierwotne, podręczniki akademickie i dokumenty instytucji naukowych. Każdą pozycję należy zapisać zgodnie z APA 7. Dostępny DOI podaje się jako aktywny odnośnik w postaci `[https://doi.org/...](https://doi.org/...)`, prowadzący do oryginalnej publikacji.

## Schemat do skopiowania

Poniższy układ jest punktem wyjścia. Sekcje oznaczone jako opcjonalne można pominąć, połączyć albo nazwać inaczej.

```markdown
---
title: Pełna nazwa zagadnienia
description: Jednozdaniowy opis zakresu artykułu.
---

# Pełna nazwa zagadnienia

Krótka odpowiedź na główne pytanie artykułu.

## Definicja i zakres

## Mechanizmy i modele

## Stan badań

## Zastosowania lub przykłady

## Ograniczenia i kwestie sporne

## Wnioski

## Bibliografia
```

## Linkowanie zagadnień

Każde zagadnienie ma jeden artykuł kanoniczny. Jego tytuł oraz opcjonalne aliasy są nazwami, po których PsyHub rozpoznaje pojęcie. Pierwsze znaczące wystąpienie nazwy innego zagadnienia w treści powinno prowadzić do jego artykułu.

Link należy dodać bezpośrednio do nazwy pojęcia, na przykład `[pamięć](../psychologia_poznawcza/pamiec.md)`. Nie należy tworzyć osobnej listy „zobacz także”, jeśli odnośnik może naturalnie wystąpić w wywodzie. Nie trzeba linkować każdego powtórzenia tego samego pojęcia.

Pole `aliases` w pozycji artykułu w `site-config.js` służy wyłącznie do jednoznacznych, utrwalonych nazw alternatywnych i skrótów. Nie należy umieszczać w nim luźno powiązanych słów kluczowych.

## Kryterium treści użytecznej

Każdy akapit powinien wykonywać co najmniej jedno zadanie:

- definiować pojęcie;
- wyjaśniać mechanizm lub zależność;
- przedstawiać dowód;
- porównywać stanowiska;
- podawać przykład potrzebny do zrozumienia;
- wskazywać ograniczenie;
- wyprowadzać konsekwencję praktyczną.

Akapit, który nie wykonuje żadnego z tych zadań, należy usunąć albo połączyć z fragmentem merytorycznym. Szczególnie należy unikać rozbudowanych zapowiedzi, ogólnych pochwał znaczenia tematu, powtórzeń oraz podsumowań każdej krótkiej sekcji.

## Bibliografia

- American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). American Psychological Association.
- Higgins, J. P. T., Thomas, J., Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. A. (Eds.). (2024). *Cochrane handbook for systematic reviews of interventions* (Version 6.5). Cochrane.
