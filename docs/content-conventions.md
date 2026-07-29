# Standard nazewnictwa treści wiki

## Konwencja globalna

W całym katalogu `wiki/**` stosujemy **jedną konwencję**:

- nazwy katalogów i plików w `snake_case`,
- tylko małe litery `a-z`, cyfry `0-9` i podkreślenie `_`,
- bez polskich znaków,
- język nazw: **polski** (spójny z kontekstem polskiej psychologii).

Przykład poprawny:

- `wiki/temperament/rozwoj.md`
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md`

Przykład niepoprawny:

- `wiki/temperament/razvoj.md` (literówka i niespójność językowa)
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_feedback.md` (mieszanka polskiego i angielskiego)

## Mapa rename (pierwsza fala porządkowania)

- `wiki/temperament/razvoj.md` → `wiki/temperament/rozwoj.md`
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_feedback.md` → `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md`

## Walidacja

Do automatycznej kontroli używamy:

- `node tools/check_content.js`

Skrypt sprawdza m.in. zgodność nazw plików i katalogów `wiki/**` z powyższą konwencją.

## Model treści: jeden temat, jeden artykuł

Każde rozpoznawalne zagadnienie powinno mieć jeden artykuł kanoniczny. Artykuł może być dłuższy i zawierać kilka powiązanych modeli, mechanizmów, zastosowań lub sporów. Nie należy rozdzielać ich na osobne pliki, jeśli odpowiadają na to samo główne pytanie.

Przed utworzeniem artykułu:

1. wyszukaj tytuł, nazwę alternatywną i skróty zagadnienia;
2. sprawdź artykuły w tej samej i pokrewnych domenach;
3. zdecyduj, czy nowa treść rozwija istniejący temat;
4. jeśli tak, włącz ją do artykułu kanonicznego i usuń powtórzenia.

Nowy artykuł jest uzasadniony, gdy ma odrębny zakres pojęciowy, odpowiada na inne główne pytanie i wymaga własnej argumentacji. Sama długość rozdziału nie jest wystarczającym powodem podziału.

Podczas scalania należy:

- wybrać tytuł odpowiadający terminowi najczęściej używanemu w literaturze;
- zachować wartościową treść i bibliografię wszystkich scalanych tekstów;
- uporządkować wywód, zamiast mechanicznie łączyć kolejne pliki;
- usunąć powtórzone definicje, wprowadzenia i podsumowania;
- zaktualizować `site-config.js` oraz linki wewnętrzne.

## Zalecany wzorzec, nie obowiązkowy szablon

Pełną propozycję opisuje [Zalecany wzorzec artykułu](../wiki/reference/article_template.md). Nie wymaga ona określonego zestawu nagłówków. Autor dobiera strukturę do problemu, materiału dowodowego i potrzeb czytelnika.

Każdy akapit powinien definiować, wyjaśniać, dokumentować, porównywać, ilustrować, ograniczać albo wyprowadzać wniosek. Tekst, który nie realizuje żadnej z tych funkcji, należy usunąć lub połączyć z fragmentem merytorycznym.

Objętość jest skutkiem pełnego opracowania tematu, nie celem samym w sobie. Nie wolno jej zwiększać przez:

- powtarzanie tez innymi słowami;
- ogólne stwierdzenia o znaczeniu psychologii lub danego tematu;
- rozbudowane zapowiedzi kolejnych sekcji;
- przykłady bez funkcji wyjaśniającej;
- osobne podsumowanie każdej krótkiej części.

## Nazwy kanoniczne, aliasy i hiperłącza

Pozycja artykułu w `site-config.js` może zawierać pole `aliases`:

```javascript
{
  id: 'poznawcza/pamiec_robocza',
  label: 'Pamięć robocza',
  aliases: ['working memory'],
  file: 'wiki/psychologia_poznawcza/pamiec_robocza.md'
}
```

Alias musi być utrwaloną i jednoznaczną nazwą tego samego zagadnienia. Nie jest tagiem ani ogólnym słowem kluczowym. Powtórzenie aliasu dla różnych artykułów powoduje niejednoznaczność, dlatego mechanizm linkowania pomija taką nazwę.

Interfejs PsyHub automatycznie zamienia pierwsze znaczące wystąpienie tytułu lub aliasu innego zagadnienia w hiperłącze. Pomija istniejące linki, kod i nagłówki. Jawne linki Markdown nadal są zalecane, gdy autor chce wskazać konkretny kontekst albo użyć odmiany nazwy, której automat nie rozpoznaje.

## Reguła opcjonalnej sekcji „Cytat badacza”

W artykułach `wiki/**` można dodać sekcję:

- `## Cytat badacza`

Sekcja jest **opcjonalna** i powinna być umieszczona:

- po sekcji definicji (jeśli występuje), albo
- po części analitycznej.

### Wymagane metadane cytatu

Każdy cytat w sekcji `## Cytat badacza` musi zawierać komplet metadanych:

- **autor**,
- **rok**,
- **źródło pierwotne (publikacja)**,
- **interpretacja**: 1–2 zdania, które łączą cytat z treścią artykułu.

Rekomendowany format listy:

- `- autor: ...`
- `- rok: ...`
- `- źródło: ...`
- `- cytat: „...”`
- `- interpretacja: ...`

### Dozwoleni autorzy per dział

- **emocje**: Ekman, Barrett, Lazarus,
- **temperament**: Strelau, Eysenck, Gray, Kagan,
- **psychoterapia/farmakologia**: Beck, Linehan, Kendler (zależnie od tematu).

Jeśli temat artykułu wykracza poza powyższe działy, autor cytatu powinien być dobrany adekwatnie do literatury danego obszaru.

### Ograniczenia redakcyjne

- maksymalnie **1 cytat na sekcję**,
- cytat dodajemy tylko wtedy, gdy realnie wspiera argument,
- cytat musi mieć pełny wpis w sekcji `## Bibliografia`.

### Walidacja automatyczna

Skrypt `node tools/check_content.js` sprawdza dodatkowo:

- jeśli w pliku istnieje sekcja `## Cytat badacza`,
- to musi istnieć sekcja `## Bibliografia`,
- oraz w bibliografii musi pojawić się wpis odpowiadający metadanym cytatu (kontrola autora i roku).

## Standard językowy dla treści użytkownika końcowego

Dla wszystkich treści widocznych dla użytkownika końcowego (artykuły, opisy, komunikaty interfejsu, śródtytuły, podpisy tekstowe) obowiązują następujące zasady:

- stosuj poprawną polszczyznę (ortografia, interpunkcja, fleksja, składnia),
- zachowuj zasady stylistyczne języka polskiego i unikaj nieuzasadnionych kalk językowych,
- dbaj o spójny rejestr wypowiedzi w obrębie jednego materiału.

### Wyjątki

W przypadku elementów o charakterze technicznym lub skrótowym nie wymagamy pełnej redakcji stylistycznej ciągłego tekstu:

- kod programu,
- tabele,
- rysunki.

### Ograniczenie stosowania długiej pauzy „—”

- ograniczaj użycie znaku „—” do sytuacji, w których jest on niezbędny dla precyzji lub czytelności zdania,
- domyślnie preferuj inne poprawne środki interpunkcyjne (przecinek, nawias, dwukropek),
- nie nadużywaj długiej pauzy jako uniwersalnego separatora myśli.
