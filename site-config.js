/**
 * site-config.js - PsyHub v3.2 "bulbulgator"
 * Jedyne l_rodlo prawdy: nawigacja, mapowanie plikow MD, definicje WIKI.
 *
 * Konwencja statusow artykulu:
 *   live    - plik MD istnieje, artykul dostepny
 *   planned - artykul zaplanowany, plik jeszcze nie istnieje
 *   xlink   - artykul wspoldzielony z innym dzialem (jeden plik MD)
 *   wiki    - odnosnik do strony indeksu WIKI
 */

window.SITE_CONFIG = {

  defaultPage: '__home__',

  // Sekcje pomijane przy budowie katalogu dziedzin na stronie glownej.
  catalogExcludedSections: ['Encyklopedie', 'Referencje', 'Wprowadzenie', 'Dla studentow'],



  // 
  //  NARZĘDZIA POMIAROWE WG DZIEDZIN
  //  Struktura sluzy do katalogowania testow/skal/kwestionariuszy i ma byc
  //  aktualizowana wylacznie przez dopisywanie nowych obiektow zgodnych ze
  //  slownikiem wartosci kontrolowanych ponizej.
  //  Zasady aktualizacji:
  //  1) Kazdy wpis narzedzia musi zawierac kompletny minimalny schemat pol,
  //     w tym: reliability, validity, normsInfo, limitations, ethicalNotes,
  //     contraindications, requiresPermissions, methodologyLinks oraz pola
  //     metodologiczne: evidenceType, sampleInfo, normCountry, normYear,
  //     effectSizeInfo, sourceRefs.
  //  2) Wartosci pol type/evidenceLevel/license/evidenceType musza pochodzic
  //     ze slownika.
  //  3) Dla domen bez opracowanych wpisow uzywamy listy TODO w `docs/todo.md` oraz listy todoDomains.
  //  4) Pole primarySourceYear zapisujemy jako rok (YYYY) pierwszej publikacji
  //     wersji bazowej narzedzia; jesli w projekcie narzedzie jest definiowane
  //     przez oficjalna rewizje (np. ADOS-2, DIVA-5), wpisujemy rok tej rewizji.
  // 

  // Katalog narzedzi ladowany z plikow JSON (1 narzedzie = 1 plik),
  // zorganizowanych w folderze `narzedzia_psychometryczne`.
  measurementToolsByDomain: {
    diagnostyczne: [],
    psychometryczne: [],
    zaburzenia: [],
    neuropsychologiczne: [],
    spoleczne: [],
  },
  // Źródło plikowe katalogu narzędzi.
  measurementToolsDataPath: 'data/narzedzia_psychometryczne/',
  measurementToolsControlledVocabulary: {
    type: ['test', 'kwestionariusz', 'skala', 'protokol', 'obserwacja'],
    evidenceLevel: ['wysoki', 'umiarkowany', 'wstepny', 'niewystarczajacy'],
    license: ['komercyjna', 'otwarta', 'instytucjonalna', 'do_ustalenia'],
    evidenceType: ['meta_analiza', 'rct', 'walidacja_lokalna', 'przeglad'],
    normCountry: ['PL', 'USA', 'UK', 'EU', 'miedzynarodowe', 'brak_danych'],
    effectSizeInfo: ['male', 'umiarkowane', 'duze', 'mieszane', 'nie_dotyczy', 'brak_danych'],
  },

  // Data ostatniej aktualizacji katalogu narzedzi per domena (ISO YYYY-MM-DD).
  // Pole updatedAt jest uzywane przez UI do komunikatu "Ostatnia aktualizacja".
  measurementToolsDomainUpdates: {
    diagnostyczne: { updatedAt: '2026-05-15' },
    psychometryczne: { updatedAt: '2026-05-15' },
    zaburzenia: { updatedAt: '2026-04-15' },
    neuropsychologiczne: { updatedAt: '2026-04-15' },
    spoleczne: { updatedAt: '2026-04-15' },
  },

  // Domeny obecne w serwisie, dla ktorych wpisy narzedzi pomiarowych sa jeszcze nieuzupelnione.
  measurementToolsTodoDomains: [
    'robotyka_afektywna', 'psychologia_ai', 'animaloterapia', 'arteterapia', 'biologia', 'przypadki_kliniczne',
    'psychologia_poznawcza', 'diagnoza', 'psychologia_niepelnosprawnosci', 'e_terapia', 'eksperyment_psychologiczny',
    'emocje', 'etyka', 'psychologia_sadowa', 'psychologia_gier', 'geropsychologia', 'psychologia_zdrowia',
    'roznice_indywidualne', 'wstep_do_psychologii', 'kulturowa', 'ekrany_ksiazki_i_natura', 'neuroroznorodnosc',
    'porozumiewanie_sie_bez_przemocy', 'farmakologia', 'filozofia', 'podstawy_pomocy', 'psychologia_religii',
    'psychologia_pozytywna', 'seminarium_dyplomowe', 'psychopatologia', 'psychosomatyka', 'psychoterapia',
    'reference', 'relacje', 'rezyliencja_i_mobbing', 'psychologia_rozwojowa', 'psychologia_szkolna', 'seksuologia',
    'dla_studentow', 'suicydologia', 'psychologia_technologii', 'temperament', 'uzaleznienia', 'wiki-index'
  ],

  //
  //  NAWIGACJA BOCZNA
  //  Kazda sekcja to zwijany blok w sidebarze.
  //  Klucz "file" -> ladowanie MD; "wiki" -> strona indeksu WIKI.
  //
  nav: [
    {
      section: 'Wprowadzenie',
      domainKey: 'wstep_do_psychologii',
      items: [
        { id: 'wstep_do_psychologii/definicja', label: 'Definicja i zakres',  file: 'wiki/wstep_do_psychologii/definicja.md' },
        { id: 'wstep_do_psychologii/historia',  label: 'Historia dyscypliny', file: 'wiki/wstep_do_psychologii/historia.md'  },
        { id: 'wstep_do_psychologii/nurty_psychologii', label: 'Główne nurty psychologii', file: 'wiki/wstep_do_psychologii/nurty_psychologii.md'  },
        { id: 'wstep_do_psychologii/etyka_badan_psychologicznych', label: 'Etyka badań psychologicznych', file: 'wiki/wstep_do_psychologii/etyka_badan_psychologicznych.md'  },
      ]
    },
    {
      section: 'Dla studentow',
      domainKey: 'dla_studentow',
      items: [
        { id: 'dla_studentow/etyka_studenta',     label: 'Etyka studenta psychologii', file: 'wiki/dla_studentow/etyka_studenta.md' },
        { id: 'dla_studentow/wybor_specjalnosci', label: 'Wybór specjalnosci', file: 'wiki/dla_studentow/wybor_specjalnosci.md' },
        { id: 'dla_studentow/sciezki_kariery', label: 'Ścieżki kariery po psychologii', file: 'wiki/dla_studentow/sciezki_kariery.md' },
        { id: 'dla_studentow/psychologia_codziennej', label: 'Psychologia codzienna',    custom: 'daily_psychology' },
        /**{ id: 'dla_studentow/monopoly_psychologiczne', href: 'https://matpomgit.github.io/Psychopoly/', label: 'Monopoly Psychologiczne' },*/
        { id: 'dla_studentow/wspolna_gra_kahoot',    label: 'Wspólna gra testowa (Kahoot)', custom: 'kahoot_game', kind: 'test' },
        { id: 'dla_studentow/test_specjalnosci',  label: 'Test wyboru specjalnosci', custom: 'specialization_test', kind: 'test' },
        { id: 'dla_studentow/testy_teoretyczne',      label: 'Testy teoretyczne',         custom: 'theoretical_test', kind: 'test' },
        { id: 'dla_studentow/winietki_kliniczne',     label: 'Winietki kliniczne',        custom: 'theoretical_test', presetTopic: 'winiety_kliniczne', kind: 'test' },
        { id: 'dla_studentow/testy_dyplomowe',        label: 'Testy dyplomowe',           custom: 'theoretical_test', presetTopic: 'egzamin_dyplomowy', kind: 'test' },
        ]
    },
    { /** Filozofia */
      section: 'Filozofia',
      domainKey: 'filozofia',
      items: [
        { id: 'filozofia/wprowadzenie',                 label: 'Filozofia',                                  file: 'wiki/filozofia/wprowadzenie.md'        },
        { id: 'filozofia/ontologia',                    label: 'Ontologia i metafizyka',                     file: 'wiki/filozofia/ontologia.md'           },
        { id: 'filozofia/epistemologia',                label: 'Epistemologia i teoria poznania',            file: 'wiki/filozofia/epistemologia.md'       },
        { id: 'filozofia/egocentryczny_dylemat',        label: 'Egocentryczny dylemat poznania',             file: 'wiki/filozofia/egocentryczny_dylemat.md' },
        { id: 'filozofia/odpowiedzialnosc_epistemiczna',label: 'Odpowiedzialnosc epistemiczna',              file: 'wiki/filozofia/odpowiedzialnosc_epistemiczna.md' },
        { id: 'filozofia/etyka',                        label: 'Etyka i filozofia moralna',                  file: 'wiki/filozofia/etyka.md'               },
        { id: 'filozofia/filozofia_umyslu',             label: 'Filozofia umyslu',                           file: 'wiki/filozofia/filozofia_umyslu.md'    },
        { id: 'filozofia/filozofia_nauki',              label: 'Filozofia nauki',                            file: 'wiki/filozofia/filozofia_nauki.md'     },
        { id: 'filozofia/egzystencjalizm',              label: 'Egzystencjalizm',                            file: 'wiki/filozofia/egzystencjalizm.md'     },
        { id: 'filozofia/fenomenologia',                label: 'Fenomenologia',                              file: 'wiki/filozofia/fenomenologia.md'       },
        { id: 'filozofia/hermeneutyka',                 label: 'Hermeneutyka i interpretacja',               file: 'wiki/filozofia/hermeneutyka.md'        },
        { id: 'filozofia/logika',                       label: 'Logika i argumentacja',                      file: 'wiki/filozofia/logika.md'              },
        { id: 'filozofia/filozofia_jezyka',             label: 'Filozofia jezyka',                           file: 'wiki/filozofia/filozofia_jezyka.md'    },
        { id: 'filozofia/filozofia_czlowieka',          label: 'Filozofia czlowieka',                        file: 'wiki/filozofia/filozofia_czlowieka.md'         },
        { id: 'filozofia/cien_antropiczny',             label: 'Ciel antropiczny',                           file: 'wiki/filozofia/cien_antropiczny.md'            },
        { id: 'filozofia/mozg_boltzmanna',              label: 'Mozg Boltzmanna',                            file: 'wiki/filozofia/mozg_boltzmanna.md'             },
        { id: 'filozofia/horror_panpsychizmu',          label: 'Horror panpsychizmu',                        file: 'wiki/filozofia/horror_panpsychizmu.md'         },
        { id: 'filozofia/filozoficzne_zombie',          label: 'Filozoficzne zombie',                        file: 'wiki/filozofia/filozoficzne_zombie.md'         },
        { id: 'filozofia/pusty_indywidualizm',          label: 'Pusty indywidualizm',                        file: 'wiki/filozofia/pusty_indywidualizm.md'         },
        { id: 'filozofia/asymetria_dobra_i_bolu',       label: 'Asymetria dobra i bolu',                     file: 'wiki/filozofia/asymetria_dobra_i_bolu.md'      },
        { id: 'filozofia/niemoralnosc_braku_zgody',     label: 'Niemoralnosc braku zgody na narodziny',      file: 'wiki/filozofia/niemoralnosc_braku_zgody.md'    },
        { id: 'filozofia/redukcjonizm_tozsamosci',      label: 'Redukcjonizm tozsamosci osobowej',           file: 'wiki/filozofia/redukcjonizm_tozsamosci.md'     },
        { id: 'filozofia/eliminatywizm_materialny',     label: 'Eliminatywizm materialny',                   file: 'wiki/filozofia/eliminatywizm_materialny.md'    },
        { id: 'filozofia/efilizm',                      label: 'Efilizm',                                    file: 'wiki/filozofia/efilizm.md'                     },
        { id: 'filozofia/pesymizm_biologiczny',         label: 'Pesymizm biologiczny',                       file: 'wiki/filozofia/pesymizm_biologiczny.md'        },
        { id: 'filozofia/podswiadomy_nihilizm',         label: 'Podswiadomy nihilizm',                       file: 'wiki/filozofia/podswiadomy_nihilizm.md'        },
        { id: 'filozofia/paradoksalny_determinizm',     label: 'Paradoksalny determinizm',                   file: 'wiki/filozofia/paradoksalny_determinizm.md'    },
        { id: 'filozofia/realizm_modalny',              label: 'Realizm modalny',                            file: 'wiki/filozofia/realizm_modalny.md'             },
      ]
    },
    { /* Biologiczne podstawy zachowania */
      section: 'Biologiczne podstawy zachowania',
      domainKey: 'biology',
      items: [
        { id: 'biology/biologiczne_podstawy', label: 'Biologiczne podstawy - wprow.',  file: 'wiki/biologia/biologiczne_podstawy.md'  },
        { id: 'biology/genetyka_beh',         label: 'Genetyka behawioralna',          file: 'wiki/biologia/genetyka_beh.md'          },
        { id: 'biology/transmisja_genetyczna_zaburzen', label: 'Transmisja genetyczna zaburzen', file: 'wiki/biologia/transmisja_genetyczna_zaburzen_psychicznych.md' },
        { id: 'biology/epigenetyka',          label: 'Epigenetyka',                    file: 'wiki/biologia/epigenetyka.md'           },
        { id: 'biology/hormony',              label: 'Hormony i zachowanie',           file: 'wiki/biologia/hormony.md'               },
        { id: 'biology/ewolucja',             label: 'Ewolucja i psychologia ewol.',   file: 'wiki/biologia/ewolucja.md'              },
        { id: 'biology/psychofizjologia',     label: 'Psychofizjologia',               file: 'wiki/biologia/psychofizjologia.md'      },
        { id: 'biology/chronobiologia',       label: 'Chronobiologia i sen',           file: 'wiki/biologia/chronobiologia.md'        },
        { id: 'biology/chronopsychologia',    label: 'Chronopsychologia',              file: 'wiki/biologia/chronopsychologia.md'     },
        { id: 'biology/mikrobiom',            label: 'Os jelitadz mozg',               file: 'wiki/biologia/mikrobiom.md'             },
      ]
    },
    { /* Psychologia rozwojowa */
      section: 'Psychologia rozwojowa',
      domainKey: 'rozwojowa',
      items: [
        { id: 'rozwojowa/teorie_rozwoju',     label: 'Glowne teorie rozwoju',                    file: 'wiki/psychologia_rozwojowa/teorie_rozwoju.md'     },
        { id: 'rozwojowa/metody_podluzne',    label: 'Metody badal podluznych',                  file: 'wiki/psychologia_rozwojowa/metody_podluzne.md'    },
        { id: 'rozwojowa/niemowlectwo',       label: 'Niemowlectwo i wczesne dziecilstwo',       file: 'wiki/psychologia_rozwojowa/niemowlectwo.md'       },
        { id: 'rozwojowa/wiek_szkolny',       label: 'Wiek szkolny',                             file: 'wiki/psychologia_rozwojowa/wiek_szkolny.md'       },
        { id: 'rozwojowa/adolescencja',       label: 'Adolescencja',                             file: 'wiki/psychologia_rozwojowa/adolescencja.md'       },
        { id: 'rozwojowa/doroslosc',          label: 'Doroslosc i starzenie sie',                file: 'wiki/psychologia_rozwojowa/doroslosc.md'          },
        { id: 'rozwojowa/plastycznosc_mozgu', label: 'Plastycznosc mozgu, a okresy krytyczne',   file: 'wiki/psychologia_rozwojowa/plastycznosc_mozgu.md' },
        { id: 'rozwojowa/przywiazanie',       label: 'Teoria przywiazania',                      file: 'wiki/psychologia_rozwojowa/przywiazanie.md'       },
        { id: 'rozwojowa/rozwoj_jezyka',      label: 'Rozwoj jezyka i komunikacji',              file: 'wiki/psychologia_rozwojowa/rozwoj_jezyka.md'      },
        { id: 'rozwojowa/rodzicielstwo',      label: 'Style rodzicielskie',                      file: 'wiki/psychologia_rozwojowa/rodzicielstwo.md'      },
        { id: 'rozwojowa/trauma_rozwojowa',   label: 'Trauma rozwojowa',                         file: 'wiki/psychologia_rozwojowa/trauma_rozwojowa.md'   },
        { id: 'rozwojowa/tozsamosc',          label: 'Ksztaltowanie tozsamosci',                 file: 'wiki/psychologia_rozwojowa/tozsamosc.md'          },
      ]
    },
    { /* Psychologia spoleczna */
      section: 'Psychologia spoleczna',
      domainKey: 'spoleczna',
      items: [
        { id: 'spoleczna/percepcja_spoleczna', label: 'Percepcja Spoleczna i atrybucje', file: 'wiki/psychologia_spoleczna/percepcja_spoleczna.md' },
        { id: 'spoleczna/eksperyment_wiezienny', label: 'Stanfordzki Eksperyment Wiezienny', file: 'wiki/psychologia_spoleczna/eksperyment_wiezienny.md' },
        { id: 'spoleczna/manipulacja', label: 'Manipulacja - mechanizmy i metody wplywu', file: 'wiki/psychologia_spoleczna/manipulacja.md' },
        { id: 'spoleczna/stereotypy', label: 'Stereotypy i uprzedzenia', file: 'wiki/psychologia_spoleczna/stereotypy.md' },
        { id: 'spoleczna/manosfera_feminizm', label: 'Manosfera i feminizm - ujecie psychologiczne', file: 'wiki/psychologia_spoleczna/manosfera_feminizm.md' },
        { id: 'spoleczna/ja_i_samoocena', label: 'Ja i samoocena', file: 'wiki/psychologia_spoleczna/ja_i_samoocena.md' },
        { id: 'spoleczna/postawy', label: 'Postawy i zmiana postaw', file: 'wiki/psychologia_spoleczna/postawy.md' },
        { id: 'spoleczna/konformizm', label: 'Konformizm i posluszelstwo', file: 'wiki/psychologia_spoleczna/konformizm.md' },
        { id: 'spoleczna/perswazja', label: 'Perswazja i propaganda', file: 'wiki/psychologia_spoleczna/perswazja.md' },
        { id: 'spoleczna/dynamika_grupowa', label: 'Dynamika grupowa', file: 'wiki/psychologia_spoleczna/dynamika_grupowa.md' },
        { id: 'spoleczna/atrakcyjnosc', label: 'Atrakcyjnosc interpersonalna', file: 'wiki/psychologia_spoleczna/atrakcyjnosc.md' },
        { id: 'spoleczna/agresja', label: 'Agresja', file: 'wiki/psychologia_spoleczna/agresja.md' },
        { id: 'spoleczna/hejt_w_sieci', label: 'Hejt w sieci', file: 'wiki/psychologia_spoleczna/hejt_w_sieci.md' },
        { id: 'spoleczna/zachowania_prospoleczne', label: 'Zachowania prospoleczne', file: 'wiki/psychologia_spoleczna/zachowania_prospoleczne.md' },
        { id: 'spoleczna/zdrowe_poczucie_wlasnej_wartosci', label: 'Zdrowe poczucie wlasnej wartosci', file: 'wiki/psychologia_spoleczna/zdrowe_poczucie_wlasnej_wartosci.md' },
      ]
    },
    { /* Psychologia kulturowa */
      section: 'Psychologia kulturowa',
      domainKey: 'kulturowa',
      items: [
        { id: 'kulturowa/wprowadzenie', label: 'Czym jest psychologia kulturowa?', file: 'wiki/kulturowa/wprowadzenie.md' },
        { id: 'kulturowa/metody', label: 'Metody: emic vs. etic', file: 'wiki/kulturowa/metody.md' },
        { id: 'kulturowa/indywidualizm_kolektywizm', label: 'Wymiar indywidualizmdz kolektywizm', file: 'wiki/kulturowa/indywidualizm_kolektywizm.md' },
        { id: 'kulturowa/kultura_percepcja', label: 'Kultura, a percepcja i uwaga', file: 'wiki/kulturowa/kultura_percepcja.md' },
        { id: 'kulturowa/kulturowe_modele_ja', label: 'Kulturowe modele Ja', file: 'wiki/kulturowa/kulturowe_modele_ja.md' },
        { id: 'kulturowa/kultura_zdrowie', label: 'Kultura, a zdrowie psychiczne', file: 'wiki/kulturowa/kultura_zdrowie.md' },
        { id: 'kulturowa/kultura_emocje',    label: 'Kultura, a emocje',                   file: 'wiki/kulturowa/kultura_emocje.md'    },
        { id: 'kulturowa/akulturacja',       label: 'Akulturacja i adaptacja kulturowa',   file: 'wiki/kulturowa/akulturacja.md'       },
        { id: 'kulturowa/kultura_jezyk',     label: 'Kultura, a jezyk (Sapir-Whorf)',        file: 'wiki/kulturowa/kultura_jezyk.md'     },
        { id: 'kulturowa/kultura_osobowosc', label: 'Kultura, a osobowosc',                 file: 'wiki/kulturowa/kultura_osobowosc.md' },
        { id: 'kulturowa/wschodnia_zachodnia',label: 'Psychologia Wschodu i Zachodu',      file: 'wiki/kulturowa/wschodnia_zachodnia.md'},
        { id: 'kulturowa/kultura_relacje',   label: 'Kultura, a relacje interpersonalne',   file: 'wiki/kulturowa/kultura_relacje.md'   },
      ]
    },
    { /* Psychologia religii */
      section: 'Psychologia religii',
      domainKey: 'psychologia_religii',
      items: [
        { id: 'psychologia_religii/wprowadzenie',            label: 'Psychologia religii dz wprowadzenie',       file: 'wiki/psychologia_religii/wprowadzenie.md'            },
        { id: 'psychologia_religii/religijnosc_i_duchowosc', label: 'Religijnosc a duchowosc',                   file: 'wiki/psychologia_religii/religijnosc_i_duchowosc.md' },
        { id: 'psychologia_religii/rozwoj_religijnosci',     label: 'Rozwoj religijnosci w cyklu zycia',        file: 'wiki/psychologia_religii/rozwoj_religijnosci.md'     },
        { id: 'psychologia_religii/konwersja_religijna',     label: 'Konwersja religijna',                       file: 'wiki/psychologia_religii/konwersja_religijna.md'     },
        { id: 'psychologia_religii/coping_religijny',        label: 'Religijne strategie radzenia sobie',       file: 'wiki/psychologia_religii/coping_religijny.md'        },
        { id: 'psychologia_religii/doswiadczenia_mistyczne', label: 'Doswiadczenia mistyczne',                   file: 'wiki/psychologia_religii/doswiadczenia_mistyczne.md' },
        { id: 'psychologia_religii/obrazy_boga',             label: 'Obrazy Boga i style przywiazania',         file: 'wiki/psychologia_religii/obrazy_boga.md'             },
        { id: 'psychologia_religii/wspolnota_i_tozsamosc',   label: 'Wspolnota religijna a tozsamosc',          file: 'wiki/psychologia_religii/wspolnota_i_tozsamosc.md'   },
        { id: 'psychologia_religii/rytualy_i_zdrowie',       label: 'Rytualy religijne a dobrostan psychiczny', file: 'wiki/psychologia_religii/rytualy_i_zdrowie.md'       },
        { id: 'psychologia_religii/skrupulatyzm',            label: 'Skrupulatyzm i objawy OCD',                file: 'wiki/psychologia_religii/skrupulatyzm.md'            },
        { id: 'psychologia_religii/religia_w_psychoterapii', label: 'Religia i duchowosc w psychoterapii',      file: 'wiki/psychologia_religii/religia_w_psychoterapii.md' },
        { id: 'psychologia_religii/metodologia_badan',       label: 'Metodologia badal psychologii religii',    file: 'wiki/psychologia_religii/metodologia_badan.md'       },
          { id: 'psychologia_religii/negatywny_wplyw_religii', label: 'Negatywny wpływ religii na życie, rozwój i moralność', file: 'wiki/psychologia_religii/negatywny_wplyw_religii_na_zycie_rozwoj_i_moralnosc.md' },
          { id: 'psychologia_religii/pozytywny_wplyw_religii', label: 'Pozytywny wpływ religii na psychikę', file: 'wiki/psychologia_religii/pozytywny_wplyw_religii_na_psychike.md' },
          { id: 'psychologia_religii/religia_moralnosc_etyka', label: 'Religia a moralność i etyka postępowania', file: 'wiki/psychologia_religii/religia_a_moralnosc_i_etyka_postepowania.md' },
        ]
    },
    { /* Psychologia uzaleznien */
      section: 'Psychologia uzaleznien',
      domainKey: 'uzaleznienia',
      items: [
        { id: 'uzaleznienia/kryteria_diagnostyczne', label: 'Kryteria diagnostyczne', file: 'wiki/uzaleznienia/kryteria_diagnostyczne.md' },
        { id: 'uzaleznienia/dialog_motywujacy', label: 'Dialog motywujacy', file: 'wiki/uzaleznienia/dialog_motywujacy.md' },
        { id: 'uzaleznienia/zapobieganie_nawrotom', label: 'Zapobieganie nawrotom', file: 'wiki/uzaleznienia/zapobieganie_nawrotom.md' },
        { id: 'uzaleznienia/uzaleznienia_mlodziezy', label: 'Uzaleznienia u mlodziezy', file: 'wiki/uzaleznienia/uzaleznienia_mlodziezy.md' },
        { id: 'uzaleznienia/wspoluzaleznienie', label: 'Wspoluzaleznienie', file: 'wiki/uzaleznienia/wspoluzaleznienie.md' },
        { id: 'uzaleznienia/profilaktyka', label: 'Profilaktyka', file: 'wiki/uzaleznienia/profilaktyka.md' },
        { id: 'uzaleznienia/uzaleznienia_behawioralne', label: 'Uzaleznienia behawioralne',              file: 'wiki/uzaleznienia/uzaleznienia_behawioralne.md' },
        { id: 'uzaleznienia/neurobiologia_uzaleznien',  label: 'Neurobiologia uzalezniel',               file: 'wiki/uzaleznienia/neurobiologia_uzaleznien.md'  },
        { id: 'uzaleznienia/rodzina_w_uzaleznieniach',  label: 'Rodzina w systemie uzaleznienia',        file: 'wiki/uzaleznienia/rodzina_w_uzaleznieniach.md'  },
        { id: 'uzaleznienia/internet_uzaleznienie',     label: 'Uzaleznienie od internetu i technologii',file: 'wiki/uzaleznienia/internet_uzaleznienie.md'     },
        { id: 'uzaleznienia/terapia_grupowa',           label: 'Terapia grupowa w uzaleznieniach',       file: 'wiki/uzaleznienia/terapia_grupowa.md'           },
        { id: 'uzaleznienia/recovery',                  label: 'Recovery - droga do zdrowia',            file: 'wiki/uzaleznienia/recovery.md'                  },
      ]
    },
    { /* Relacje i zwiazki */
      section: 'Relacje i zwiazki',
      domainKey: 'relacje',
      items: [
        { id: 'relacje/przywiezanie_doroslych', label: 'Style przywiazania u doroslych', file: 'wiki/relacje/przywiezanie_doroslych.md' },
        { id: 'relacje/trojkatna_teoria_milosci', label: 'Triangularna teoria milosci', file: 'wiki/relacje/trojkatna_teoria_milosci.md' },
        { id: 'relacje/dobor_partnera', label: 'Dobor partnera', file: 'wiki/relacje/dobor_partnera.md' },
        { id: 'relacje/komunikacja_para', label: 'Komunikacja w parze', file: 'wiki/relacje/komunikacja_para.md' },
        { id: 'relacje/glebia_relacji_a_traumy', label: 'Glebia relacji, a dzielenie sie trauma', file: 'wiki/relacje/glebia_relacji_a_traumy.md' },
        { id: 'relacje/konflikty', label: 'Konflikty i ich rozwiazywanie', file: 'wiki/relacje/konflikty.md' },
        { id: 'relacje/zdrada', label: 'Zdrada i odbudowa zaufania', file: 'wiki/relacje/zdrada.md' },
        { id: 'relacje/terapia_par', label: 'Terapia par', file: 'wiki/relacje/terapia_par.md' },
        { id: 'relacje/przemoc_zwiazki',  label: 'Przemoc w zwiazkach',             file: 'wiki/relacje/przemoc_zwiazki.md'  },
        { id: 'relacje/samotnosc',        label: 'Samotnosc i izolacja spoleczna',  file: 'wiki/relacje/samotnosc.md'        },
        { id: 'relacje/przyjaznie',       label: 'Przyjal_l',                        file: 'wiki/relacje/przyjaznie.md'       },
        { id: 'relacje/rozstanie',        label: 'Rozpad zwiazku i zaloba',         file: 'wiki/relacje/rozstanie.md'        },
        { id: 'relacje/relacje_rodzinne', label: 'Relacje rodzinne - dynamika',     file: 'wiki/relacje/relacje_rodzinne.md' },
      ]
    },
    { /* Etyka zawodowa */
      section: 'Etyka zawodowa',
      domainKey: 'etyka',
      items: [
        { id: 'etyka/kodeksy_etyczne', label: 'Kodeksy etyczne - przeglad', file: 'wiki/etyka/kodeksy_etyczne.md' },
        { id: 'etyka/zasady_apa_ptp', label: 'Zasady APA i PTP', file: 'wiki/etyka/zasady_apa_ptp.md' },
        { id: 'etyka/dobro_nieszkodzenie', label: 'Dobro i nieszkodzenie', file: 'wiki/etyka/dobro_nieszkodzenie.md' },
        { id: 'etyka/tajemnica_zawodowa_granice', label: 'Tajemnica zawodowa i jej granice', file: 'wiki/etyka/tajemnica_zawodowa_granice.md' },
        { id: 'etyka/swiadoma_zgoda', label: 'lawiadoma zgoda', file: 'wiki/etyka/swiadoma_zgoda.md' },
        { id: 'etyka/granice_relacji', label: 'Granice relacji terapeutycznej', file: 'wiki/etyka/granice_relacji.md' },
        { id: 'etyka/superwizja_odpowiedzialnosc', label: 'Superwizja i odpowiedzialnosc', file: 'wiki/etyka/superwizja_odpowiedzialnosc.md' },
        { id: 'etyka/dylematy_etyczne',          label: 'Dylematy etyczne w praktyce',           file: 'wiki/etyka/dylematy_etyczne.md'          },
        { id: 'etyka/kompetencje_kulturowe',     label: 'Kompetencje kulturowe',                 file: 'wiki/etyka/kompetencje_kulturowe.md'     },
        { id: 'etyka/etyka_badan',               label: 'Etyka badal naukowych',                 file: 'wiki/etyka/etyka_badan.md'               },
        { id: 'etyka/etyka_cyfrowa',             label: 'Etyka w psychologii cyfrowej',          file: 'wiki/etyka/etyka_cyfrowa.md'             },
        { id: 'etyka/odpowiedzialnosc_zawodowa', label: 'Odpowiedzialnosc zawodowa',             file: 'wiki/etyka/odpowiedzialnosc_zawodowa.md' },
          { id: 'etyka/polska_adaptacja_3d_ws', label: 'Polska adaptacja 3D-WS', file: 'wiki/etyka/polska_adaptacja_3d_ws.md' },
        ]
    },
    { /* Diagnoza psychologiczna */
      section: 'Diagnoza psychologiczna',
      domainKey: 'diagnoza',
      items: [
        { id: 'diagnoza/etapy_diagnozy', label: 'Etapy i cele diagnozy', file: 'wiki/diagnoza/etapy_diagnozy.md' },
        { id: 'diagnoza/wywiad_psychologiczny', label: 'Wywiad psychologiczny', file: 'wiki/diagnoza/wywiad_psychologiczny.md' },
        { id: 'diagnoza/wywiad_kognitywny_poznawczy', label: 'Wywiad kognitywny (poznawczy)', file: 'wiki/diagnoza/wywiad_kognitywny_poznawczy.md' },
        { id: 'diagnoza/diagnoza_techniki_rozmowy_psychologicznej', label: 'Techniki rozmowy psychologicznej', file: 'wiki/diagnoza/diagnoza_techniki_rozmowy_psychologicznej.md' },
        { id: 'diagnoza/obserwacja_kliniczna', label: 'Obserwacja kliniczna', file: 'wiki/diagnoza/obserwacja_kliniczna.md' },
        { id: 'diagnoza/formulowanie_przypadku', label: 'Formulowanie przypadku', file: 'wiki/diagnoza/formulowanie_przypadku.md' },
        { id: 'diagnoza/techniki_projekcyjne', label: 'Techniki projekcyjne', file: 'wiki/diagnoza/techniki_projekcyjne.md' },
        { id: 'diagnoza/opinia_psychologiczna', label: 'Opinia psychologiczna', file: 'wiki/diagnoza/opinia_psychologiczna.md' },
        { id: 'diagnoza/tajemnica_zawodowa', label: 'Tajemnica zawodowa', file: 'wiki/diagnoza/tajemnica_zawodowa.md' },
        { id: 'diagnoza/diagnoza_stygmatyzacja', label: 'Diagnoza, a stygmatyzacja', file: 'wiki/diagnoza/diagnoza_stygmatyzacja.md' },
      ]
    },
    { /* Emocje i motywacje */
      section: 'Emocje i motywacje',
      domainKey: 'emocje',
      items: [
        { id: 'emocje/emocje_wprowadzenie', label: 'Emocje',   file: 'wiki/emocje/emocje_wprowadzenie.md'  },
        { id: 'emocje/teorie',              label: 'Teorie emocji',            file: 'wiki/emocje/teorie.md'              },
        { id: 'emocje/regulacja',           label: 'Regulacja emocjonalna',    file: 'wiki/emocje/regulacja.md'           },
        { id: 'emocje/motywacja',           label: 'Motywacja',                file: 'wiki/emocje/motywacja.md'           },
        { id: 'emocje/neurobiologia',       label: 'Neurobiologia emocji',     file: 'wiki/emocje/neurobiologia.md'       },
        { id: 'emocje/wspolczucie',         label: 'Empatia i wspolczucie',    file: 'wiki/emocje/wspolczucie.md'         },
        { id: 'emocje/aleksytymia',         label: 'Aleksytymia',              file: 'wiki/emocje/aleksytymia.md'         },
        { id: 'emocje/inteligencja_emocjonalna', label: 'Inteligencja emocjonalna',          file: 'wiki/emocje/inteligencja_emocjonalna.md' },
        { id: 'emocje/stres_emocje',             label: 'Stres i emocje',                    file: 'wiki/emocje/stres_emocje.md'             },
        { id: 'emocje/pozytywne_emocje',         label: 'Pozytywne emocje i broaden-build',  file: 'wiki/emocje/pozytywne_emocje.md'         },
        { id: 'emocje/wstyd_wina',               label: 'Wstyd i wina',                      file: 'wiki/emocje/wstyd_wina.md'               },
        { id: 'emocje/emocje_spoleczne',         label: 'Emocje spoleczne i moralne',        file: 'wiki/emocje/emocje_spoleczne.md'         },
      ]
    },
    { /* Podstawy pomocy psychologicznej */
      section: 'Podstawy pomocy psychologicznej',
      domainKey: 'podstawy_pomocy',
      items: [
        { id: 'podstawy_pomocy/wprowadzenie',                   label: 'Pomoc psychologiczna',  file: 'wiki/podstawy_pomocy/wprowadzenie.md'                   },
        { id: 'podstawy_pomocy/relacja_pomocowa',               label: 'Relacja pomocowa',                     file: 'wiki/podstawy_pomocy/relacja_pomocowa.md'               },
        { id: 'podstawy_pomocy/aktywne_sluchanie',              label: 'Aktywne sluchanie',                    file: 'wiki/podstawy_pomocy/aktywne_sluchanie.md'              },
        { id: 'podstawy_pomocy/empatia_w_pomocy',               label: 'Empatia w pomocy psychologicznej',     file: 'wiki/podstawy_pomocy/empatia_w_pomocy.md'               },
        { id: 'podstawy_pomocy/granice_w_pomocy',               label: 'Granice w relacji pomocowej',          file: 'wiki/podstawy_pomocy/granice_w_pomocy.md'               },
        { id: 'podstawy_pomocy/kryzys_psychologiczny',          label: 'Kryzys psychologiczny i interwencja',  file: 'wiki/podstawy_pomocy/kryzys_psychologiczny.md'          },
        { id: 'podstawy_pomocy/pierwsza_pomoc_psychologiczna',  label: 'Pierwsza pomoc psychologiczna',        file: 'wiki/podstawy_pomocy/pierwsza_pomoc_psychologiczna.md'  },
        { id: 'podstawy_pomocy/modele_pomocy',                  label: 'Modele pomocy psychologicznej',        file: 'wiki/podstawy_pomocy/modele_pomocy.md'                  },
        { id: 'podstawy_pomocy/komunikacja_wspierajaca',        label: 'Komunikacja wspierajaca',              file: 'wiki/podstawy_pomocy/komunikacja_wspierajaca.md'        },
        { id: 'podstawy_pomocy/wsparcie_spoleczne',             label: 'Wsparcie spoleczne',                   file: 'wiki/podstawy_pomocy/wsparcie_spoleczne.md'             },
        { id: 'podstawy_pomocy/empatia_kontra_sympatia_brene_brown', label: 'Empatia kontra sympatia (Brene Brown)', file: 'wiki/podstawy_pomocy/empatia_kontra_sympatia_brene_brown.md' },
        { id: 'podstawy_pomocy/facylitacja',                    label: 'Facylitacja w pracy pomocowej',        file: 'wiki/podstawy_pomocy/facylitacja.md'                    },
        { id: 'podstawy_pomocy/samoopieka_pomagajacego',        label: 'Samoopieka pomagajacego',              file: 'wiki/podstawy_pomocy/samoopieka_pomagajacego.md'        },
        { id: 'podstawy_pomocy/etyka_pomocy',                   label: 'Etyka pomocy psychologicznej',         file: 'wiki/podstawy_pomocy/etyka_pomocy.md'                   },
      ]
    },
    { /* Temperament */
      section: 'Temperament',
      domainKey: 'temperament',
      items: [
        { id: 'temperament/temperament_wprowadzenie', label: 'Temperament', file: 'wiki/temperament/temperament_wprowadzenie.md' },
        { id: 'temperament/modele',   label: 'Modele temperamentu',  file: 'wiki/temperament/modele.md'   },
        { id: 'temperament/pomiar',   label: 'Pomiar temperamentu',  file: 'wiki/temperament/pomiar.md'   },
        { id: 'temperament/kliniczne',label: 'Wymiar kliniczny',     file: 'wiki/temperament/kliniczne.md'},
        { id: 'temperament/rozwoj',                  label: 'Temperament, a Rozwoj',                file: 'wiki/temperament/rozwoj.md'                   },
        { id: 'temperament/strelau',                 label: 'RTT - teoria Strelaua',               file: 'wiki/temperament/strelau.md'                  },
        { id: 'temperament/eysenck',                 label: 'Model Eysencka (PEN)',                file: 'wiki/temperament/eysenck.md'                  },
        { id: 'temperament/gray',                    label: 'Teoria BIS/BAS Graya',                file: 'wiki/temperament/gray.md'                     },
        { id: 'temperament/kagan',                   label: 'Zahamowanie behawioralne (Kagan)',    file: 'wiki/temperament/kagan.md'                    },
        { id: 'temperament/temperament_a_psychopat', label: 'Temperament, a psychopatologia',       file: 'wiki/temperament/temperament_a_psychopat.md'  },
        { id: 'temperament/biologia_temperamentu',   label: 'Biologiczne podloze temperamentu',    file: 'wiki/temperament/biologia_temperamentu.md'    },
        { id: 'temperament/temperament_a_kariera',   label: 'Temperament, a kariera i praca',       file: 'wiki/temperament/temperament_a_kariera.md'    },
      ]
    },
    { /* Roznice indywidualne */
      section: 'Roznice indywidualne',
      domainKey: 'roznice_indywidualne',
      items: [
        { id: 'roznice_indywidualne/roznice_wprowadzenie', label: 'Różnice ind.',                file: 'wiki/roznice_indywidualne/roznice_wprowadzenie.md' },
        { id: 'roznice_indywidualne/inteligencja',         label: 'Inteligencja',                file: 'wiki/roznice_indywidualne/inteligencja.md'          },
        { id: 'roznice_indywidualne/osobowosc',            label: 'Osobowosc',                   file: 'wiki/roznice_indywidualne/osobowosc.md'             },
        { id: 'roznice_indywidualne/kreatywnosc',          label: 'Kreatywnosc',                 file: 'wiki/roznice_indywidualne/kreatywnosc.md'           },
        { id: 'roznice_indywidualne/genetyka',             label: 'Uwarunkowania genetyczne',    file: 'wiki/roznice_indywidualne/genetyka.md'              },
        { id: 'roznice_indywidualne/style_poznawcze',      label: 'Style poznawcze',             file: 'wiki/roznice_indywidualne/style_poznawcze.md'       },
        { id: 'roznice_indywidualne/reiss_motivation_profile', label: 'Reiss Motivation Profile', file: 'wiki/roznice_indywidualne/reiss_motivation_profile.md' },
        { id: 'roznice_indywidualne/plec_psychologia',     label: 'Psychologia plci',            file: 'wiki/roznice_indywidualne/plec_psychologia.md'      },
        { id: 'roznice_indywidualne/ciemna_triada',        label: 'Ciemna Triada',               file: 'wiki/roznice_indywidualne/ciemna_triada.md'          },
      ]
    },
    { /* Psychometria */
      section: 'Psychometria',
      domainKey: 'psychometria',
      items: [
        { id: 'psychometria/psychometria_wprowadzenie', label: 'Psychometria', file: 'wiki/psychometria/psychometria_wprowadzenie.md' },
        { id: 'psychometria/rzetelnosc',   label: 'Rzetelnosc pomiaru',    file: 'wiki/psychometria/rzetelnosc.md'   },
        { id: 'psychometria/trafnosc',     label: 'Trafnosc pomiaru',      file: 'wiki/psychometria/trafnosc.md'     },
        { id: 'psychometria/normalizacja', label: 'Normalizacja i normy',  file: 'wiki/psychometria/normalizacja.md' },
        { id: 'psychometria/teoria_ct',    label: 'Klasyczna teoria testu',file: 'wiki/psychometria/teoria_ct.md'    },
        { id: 'psychometria/irt',          label: 'IRT i Rasch',           file: 'wiki/psychometria/irt.md'          },
        { id: 'psychometria/cfa_efa',      label: 'Analiza czynnikowa',    file: 'wiki/psychometria/cfa_efa.md'      },
        { id: 'psychometria/invariancja',  label: 'Inwariancja pomiarowa', file: 'wiki/psychometria/invariancja.md'  },
        { id: 'psychometria/test_matryc_ravena', label: 'Test Matryc Ravena', file: 'wiki/psychometria/test_matryc_ravena.md' },
        { id: 'psychometria/mmpi',         label: 'MMPI',                  file: 'wiki/psychometria/mmpi.md'         },
        { id: 'psychometria/bdi_2',        label: 'BDI-II (Inwentarz Depresji Becka)', file: 'wiki/psychometria/bdi_2.md' },
        { id: 'psychometria/ados',         label: 'ADOS-2',                file: 'wiki/psychometria/ados.md'         },
        { id: 'psychometria/diva',         label: 'DIVA-5 (diagnoza ADHD)',file: 'wiki/psychometria/diva.md'         },
      ]
    },
    { /* Neurobiologia i neuropsychologia */
      section: 'Neurobiologia',
      domainKey: 'neuro',
      items: [
        { id: 'neuro/anatomia',                          label: 'Anatomia mozgu',                          file: 'wiki/neuropsychologia/anatomia.md'              },
        { id: 'neuro/neuron',                            label: 'Neuron i synapsa',                        file: 'wiki/neuropsychologia/neuron.md'                },
        { id: 'neuro/systemy',                           label: 'Uklady i sieci',                          file: 'wiki/neuropsychologia/systemy.md'               },
        { id: 'neuro/agregaty_neuronalne',               label: 'Agregaty neuronalne',                    file: 'wiki/neuropsychologia/agregaty_neuronalne.md'   },
        { id: 'neuro/myelinizacja',                      label: 'Mielinizacja i istota biala',             file: 'wiki/neuropsychologia/myelinizacja.md'          },
        { id: 'neuro/plastycznosc',                      label: 'Neuroplastycznosc',                       file: 'wiki/neuropsychologia/plastycznosc.md'          },
        { id: 'neuro/neuroobrazowanie',                  label: 'Neuroobrazowanie (fMRI, DTI)',             file: 'wiki/neuropsychologia/neuroobrazowanie.md'     },
        { id: 'neuro/lateralizacja',                     label: 'Lateralizacja funkcji',                   file: 'wiki/neuropsychologia/lateralizacja.md'         },
        { id: 'neuro/zachowanie_i_dwie_polkule_mozgu',     label: 'Zachowanie i dwie polkule mozgu',         file: 'wiki/neuropsychologia/zachowanie_i_dwie_polkule_mozgu.md' },
        { id: 'neuro/kora_prefrontalna',                 label: 'Kora przedczolowa',                       file: 'wiki/neuropsychologia/kora_prefrontalna.md'     },
        { id: 'neuro/uklad_limbiczny',                   label: 'Uklad limbiczny',                         file: 'wiki/neuropsychologia/uklad_limbiczny.md'       },
        { id: 'neuro/przesilenie_wiosenne',              label: 'Neurobiologia przesilenia wiosennego',    file: 'wiki/neuropsychologia/przesilenie_wiosenne.md'  },
        { id: 'neuro/cykl_miesiaczkowy',                 label: 'Neuropsychologia cyklu miesiaczkowego', file: 'wiki/neuropsychologia/cykl_miesiaczkowy.md'                 },
        { id: 'neuro/rehabilitacja_neuropsychologiczna', label: 'Rehabilitacja neuropsychologiczna',      file: 'wiki/neuropsychologia/rehabilitacja_neuropsychologiczna.md' },
        { id: 'neuro/neuronauka_poznawcza',              label: 'Neuronauka poznawcza',                   file: 'wiki/neuropsychologia/neuronauka_poznawcza.md'              },
        { id: 'neuro/podstawy_neurologii',               label: 'Podstawy neurologii',                    file: 'wiki/neuropsychologia/podstawy_neurologii.md'               },
        { id: 'neuro/pien_mozgu',                        label: 'Piel mozgu i mBzdzek',                   file: 'wiki/neuropsychologia/pien_mozgu.md'                        },
        { id: 'neuro/eye_tracking',                      label: 'Eye tracking - sledzenie wzroku',        file: 'wiki/neuropsychologia/eye_tracking.md'                      },
        { id: 'neuro/muse',                              label: 'Muse S - neurofeedback i EEG',           file: 'wiki/neuropsychologia/muse.md'                              },
      ]
    },
    { /* Zaburzenia kliniczne */
      section: 'Zaburzenia kliniczne',
      domainKey: 'zaburzenia',
      items: [
        { id: 'zaburzenia/afazje',    label: 'Afazje',                file: 'wiki/zaburzenia/afazje.md'    },
        { id: 'zaburzenia/amnezje',   label: 'Amnezje',               file: 'wiki/zaburzenia/amnezje.md'   },
        { id: 'zaburzenia/otepienia', label: 'Otepienia',             file: 'wiki/zaburzenia/otepienia.md' },
        { id: 'zaburzenia/tbi',       label: 'Urazy glowy (TBI)',     file: 'wiki/zaburzenia/tbi.md'       },
        { id: 'zaburzenia/apraksja',  label: 'Apraksja',              file: 'wiki/zaburzenia/apraksja.md'  },
        { id: 'zaburzenia/agnozja',   label: 'Agnozja wzrokowa',      file: 'wiki/zaburzenia/agnozja.md'   },
        { id: 'zaburzenia/neglect',   label: 'Neglect przestrzenny',  file: 'wiki/zaburzenia/neglect.md'   },
        { id: 'zaburzenia/adhd',      label: 'ADHD',                  file: 'wiki/zaburzenia/adhd.md'      },
        { id: 'zaburzenia/asd',       label: 'Spektrum autyzmu (ASD)',file: 'wiki/zaburzenia/asd.md'       },
      ]
    },
    { /* Przypadki kliniczne */
      section: 'Przypadki kliniczne',
      domainKey: 'przypadki_kliniczne',
      items: [
        { id: 'przypadki_kliniczne/hm',            label: 'H.M. - amnezja',              file: 'wiki/przypadki_kliniczne/hm.md'            },
        { id: 'przypadki_kliniczne/gage',          label: 'Phineas Gage',                file: 'wiki/przypadki_kliniczne/gage.md'          },
        { id: 'przypadki_kliniczne/tan',           label: 'dz ~Tan" - afazja',           file: 'wiki/przypadki_kliniczne/tan.md'           },
        { id: 'przypadki_kliniczne/split_brain',   label: 'Rozdzielony mozg',            file: 'wiki/przypadki_kliniczne/split_brain.md'   },
        { id: 'przypadki_kliniczne/clive_wearing', label: 'Clive Wearing',               file: 'wiki/przypadki_kliniczne/clive_wearing.md' },
        { id: 'przypadki_kliniczne/elliot',        label: 'Elliot',                      file: 'wiki/przypadki_kliniczne/elliot.md'        },
        { id: 'przypadki_kliniczne/df',            label: 'Pacjentka D.F.',              file: 'wiki/przypadki_kliniczne/df.md'            },
        { id: 'przypadki_kliniczne/kc',            label: 'Pacjent K.C.',                file: 'wiki/przypadki_kliniczne/kc.md'            },
        { id: 'przypadki_kliniczne/na',            label: 'Pacjent N.A.',                file: 'wiki/przypadki_kliniczne/na.md'            },
        { id: 'przypadki_kliniczne/patient_kn',    label: 'Pacjent K.N.',                file: 'wiki/przypadki_kliniczne/patient_kn.md'    },
        { id: 'przypadki_kliniczne/patient_rb',    label: 'Pacjent R.B.',                file: 'wiki/przypadki_kliniczne/patient_rb.md'    },
        { id: 'przypadki_kliniczne/ps',            label: 'Pacjent P.S.',                file: 'wiki/przypadki_kliniczne/ps.md'            },
        { id: 'przypadki_kliniczne/sm',            label: 'Pacjentka S.M. (uszkodzenie ciala migdalowatego)', file: 'wiki/przypadki_kliniczne/sm.md' },
      ]
    },
    { /* Psychopatologia */
      section: 'Psychopatologia',
      domainKey: 'psychopatologia',
      items: [
        { id: 'psychopatologia/psychopatologia_wprowadzenie', label: 'Psychopatologia - wprow.',       file: 'wiki/psychopatologia/psychopatologia_wprowadzenie.md' },
        { id: 'psychopatologia/objawy_ogolne',                label: 'Objawy ogBlne',                  file: 'wiki/psychopatologia/objawy_ogolne.md'                },
        { id: 'psychopatologia/zaburzenia_lekowe',            label: 'Zaburzenia lekowe',              file: 'wiki/psychopatologia/zaburzenia_lekowe.md'            },
        { id: 'psychopatologia/zaburzenia_nastroju',          label: 'Zaburzenia nastroju',            file: 'wiki/psychopatologia/zaburzenia_nastroju.md'          },
        { id: 'psychopatologia/psychozy',                     label: 'Psychozy i schizofrenia',        file: 'wiki/psychopatologia/psychozy.md'                     },
        { id: 'psychopatologia/zaburzenia_osobowosci',        label: 'Zaburzenia osobowosci',          file: 'wiki/psychopatologia/zaburzenia_osobowosci.md'        },
        { id: 'psychopatologia/trauma_ptsd',                  label: 'Trauma i PTSD',                  file: 'wiki/psychopatologia/trauma_ptsd.md'                  },
        { id: 'psychopatologia/zaburzenia_odzywiania',        label: 'Zaburzenia odzywiania',          file: 'wiki/psychopatologia/zaburzenia_odzywiania.md'        },
        { id: 'psychopatologia/neurorozwojowe',               label: 'Zaburzenia neurorozwojowe',      file: 'wiki/psychopatologia/neurorozwojowe.md'               },
        { id: 'psychopatologia/ocd',                          label: 'OCD i pokrewne',                  file: 'wiki/psychopatologia/ocd.md'                          },
        { id: 'psychopatologia/uzaleznienia_psych',           label: 'Uzaleznienia - aspekt psych.',   file: 'wiki/psychopatologia/uzaleznienia_psych.md'           },
        { id: 'psychopatologia/depresja_poporodowa',          label: 'Depresja poporodowa',             file: 'wiki/psychopatologia/depresja_poporodowa.md'          },
        { id: 'psychopatologia/przymus_powtarzania',          label: 'Przymus powtarzania',             file: 'wiki/psychopatologia/przymus_powtarzania.md'          },
        { id: 'psychopatologia/wiktymizacja',                 label: 'Wiktymizacja',                    file: 'wiki/psychopatologia/wiktymizacja.md'                  },
        { id: 'psychopatologia/wyuczona_bezradnosc',          label: 'Wyuczona bezradnosc',             file: 'wiki/psychopatologia/wyuczona_bezradnosc.md'           },
        { id: 'psychopatologia/intelektualizacja',            label: 'Intelektualizacja emocji',        file: 'wiki/psychopatologia/intelektualizacja.md'             },
        { id: 'psychopatologia/dezintegracja_pozytywna',      label: 'Dezintegracja pozytywna',         file: 'wiki/psychopatologia/dezintegracja_pozytywna.md'       },
        { id: 'psychopatologia/klasyfikacje',                 label: 'Klasyfikacje ICD-11 i DSM-5-TR',  file: 'wiki/psychopatologia/klasyfikacje.md'                  },
          { id: 'psychopatologia/psychopatia',                  label: 'Psychopatia',                    file: 'wiki/psychopatologia/psychopatia.md'                  },
          { id: 'psychopatologia/socjopatia',                   label: 'Socjopatia',                     file: 'wiki/psychopatologia/socjopatia.md'                   },
        ]
    },
    { /* Testy psychologiczne */
      section: 'Testy psychologiczne',
      domainKey: 'tests',
      items: [
        { id: 'testy/testy_przeglad',    label: 'Testy - przeglad',           file: 'wiki/testy/testy_przeglad.md'    },
        { id: 'testy/mmse_moca',         label: 'Testy przesiewowe',          file: 'wiki/testy/mmse_moca.md'         },
        { id: 'testy/testy_wykonawcze',  label: 'Testy wyk. - przeglad',      file: 'wiki/testy/testy_wykonawcze.md'  },
        { id: 'testy/testy_pamieci',     label: 'Testy pamieci',              file: 'wiki/testy/testy_pamieci.md'     },
        { id: 'testy/testy_uwagi',       label: 'Testy uwagi',                file: 'wiki/testy/testy_uwagi.md'       },
        { id: 'testy/testy_jezyka',      label: 'Testy jezykowe',             file: 'wiki/testy/testy_jezyka.md'      },
        { id: 'testy/wais',              label: 'Skale Wechslera (WAIS/WISC)',file: 'wiki/testy/wais.md'              },
        { id: 'testy/wisc_v',            label: 'WISC-V - opis testu',        file: 'wiki/testy/wisc_v.md'            },
        { id: 'testy/neuropsych_battery',label: 'Baterie neuropsychologiczne',file: 'wiki/testy/neuropsych_battery.md'},
        { id: 'testy/rdoc',              label: 'Model RDoC',                  file: 'wiki/testy/rdoc.md'              },
        { id: 'testy/scid_v',            label: 'SCID-5 / SCID-V',             file: 'wiki/testy/scid_v.md'            },
        { id: 'testy/apis_zr',           label: 'APIS-ZR - zastosowanie w diagnozie', file: 'wiki/testy/apis_zr.md' },
      ]
    },
    { /* Funkcje poznawcze */
      section: 'Funkcje poznawcze',
      domainKey: 'poznawcza',
      items: [
        { id: 'poznawcza/pamiec',                 label: 'Pamiec',                          file: 'wiki/psychologia_poznawcza/pamiec.md'                 },
        { id: 'poznawcza/pamiec_dlugotrwala',     label: 'Pamiec dlugotrwala',              file: 'wiki/psychologia_poznawcza/pamiec_dlugotrwala.md'     },
        { id: 'poznawcza/uwaga',                  label: 'Uwaga',                           file: 'wiki/psychologia_poznawcza/uwaga.md'                  },
        { id: 'poznawcza/uwaga_mimowolna',        label: 'Uwaga mimowolna',                 file: 'wiki/psychologia_poznawcza/uwaga_mimowolna.md'        },
        { id: 'poznawcza/jezyk',                  label: 'Jezyk',                           file: 'wiki/psychologia_poznawcza/jezyk.md'                  },
        { id: 'poznawcza/funkcje_wykonawcze',     label: 'Funkcje wykonawcze',              file: 'wiki/psychologia_poznawcza/funkcje_wykonawcze.md'     },
        { id: 'poznawcza/percepcja',              label: 'Percepcja i gnozja',              file: 'wiki/psychologia_poznawcza/percepcja.md'              },
        { id: 'poznawcza/zmeczenie_poznawcze',    label: 'Zmeczenie poznawcze',             file: 'wiki/psychologia_poznawcza/zmeczenie_poznawcze.md'    },
        { id: 'poznawcza/myslenie',               label: 'Myslenie i rozumowanie',          file: 'wiki/psychologia_poznawcza/myslenie.md'               },
        { id: 'poznawcza/uczenie',                label: 'Uczenie sie',                     file: 'wiki/psychologia_poznawcza/uczenie.md'                },
        { id: 'poznawcza/wyobraznia',             label: 'Wyobral_nia i reprezentacje',      file: 'wiki/psychologia_poznawcza/wyobraznia.md'             },
        { id: 'poznawcza/swiadomosc',             label: 'lawiadomosc i metapoznanie',       file: 'wiki/psychologia_poznawcza/swiadomosc.md'             },
        { id: 'poznawcza/podejmowanie_decyzji',   label: 'Podejmowanie decyzji',            file: 'wiki/psychologia_poznawcza/podejmowanie_decyzji.md'   },
        { id: 'poznawcza/exploration_exploitation_dilemma', label: 'Dylemat eksploracjadz eksploatacja', file: 'wiki/psychologia_poznawcza/exploration_exploitation_dilemma.md' },
        { id: 'poznawcza/teoria_perspektywy',     label: 'Teoria perspektywy',              file: 'wiki/psychologia_poznawcza/teoria_perspektywy.md'     },
        { id: 'poznawcza/efekt_ramowania',        label: 'Efekt ramowania',                 file: 'wiki/psychologia_poznawcza/efekt_ramowania.md'        },
        { id: 'poznawcza/nasa_tlx',               label: 'NASA Task Load Index (TLX)',      file: 'wiki/psychologia_poznawcza/nasa_tlx.md'               },
        { id: 'poznawcza/iluzje',                 label: 'Iluzje i bledy poznawcze',        file: 'wiki/psychologia_poznawcza/iluzje.md'                 },
        { id: 'poznawcza/test_stroopa',           label: 'Test Stroopa',                    file: 'wiki/psychologia_poznawcza/test_stroopa.md'           },
        { id: 'poznawcza/przyklad_testu_stroopa', label: 'Przyklad testu Stroopa',          file: 'wiki/psychologia_poznawcza/przyklad_testu_stroopa.md' },
        { id: 'poznawcza/eksperyment_posnera',    label: 'Eksperyment Posnera',             file: 'wiki/psychologia_poznawcza/eksperyment_posnera.md'    },
        { id: 'poznawcza/maly_albert',            label: 'Eksperyment Malego Alberta',      file: 'wiki/psychologia_poznawcza/maly_albert.md'            },
        { id: 'poznawcza/uklad_siatkowaty',       label: 'Uklad siatkowaty (ARAS)',         file: 'wiki/psychologia_poznawcza/uklad_siatkowaty.md'       },
        { id: 'poznawcza/nauki_kognitywne',       label: 'Nauki kognitywne',                file: 'wiki/psychologia_poznawcza/nauki_kognitywne.md'       },
        { id: 'poznawcza/architektury_kognitywne',label: 'Architektury kognitywne',         file: 'wiki/psychologia_poznawcza/architektury_kognitywne.md'},
        { id: 'poznawcza/hda',                    label: 'Human Decision Accuracy (HDA)',   file: 'wiki/psychologia_poznawcza/hda.md'                    },
        { id: 'poznawcza/system1_system2',        label: 'System 1 i System 2 (Kahneman)',  file: 'wiki/psychologia_poznawcza/system1_system2.md'        },
        { id: 'poznawcza/przetwarzanie_predyktywne', label: 'Predictive processing',        file: 'wiki/psychologia_poznawcza/przetwarzanie_predyktywne.md' },
        { id: 'poznawcza/narracje_i_psychika',    label: 'Rola opowieści w psychice',          file: 'wiki/psychologia_poznawcza/narracje_i_psychika.md'      },
      ]
    },
    { /* Psychologia zdrowia */
      section: 'Psychologia zdrowia',
      domainKey: 'psychologia_zdrowia',
      items: [
        { id: 'psychologia_zdrowia/zdrowie_wprowadzenie',    label: 'Psychologia zdrowia - wprow.',    file: 'wiki/psychologia_zdrowia/zdrowie_wprowadzenie.md'    },
        { id: 'psychologia_zdrowia/model_biopsychospoleczny',label: 'Model biopsychospoleczny',        file: 'wiki/psychologia_zdrowia/model_biopsychospoleczny.md'},
        { id: 'psychologia_zdrowia/stres',                   label: 'Stres i zdrowie',                 file: 'wiki/psychologia_zdrowia/stres.md'                   },
        { id: 'psychologia_zdrowia/radzenie_sobie',          label: 'Radzenie sobie ze stresem',       file: 'wiki/psychologia_zdrowia/radzenie_sobie.md'          },
        { id: 'psychologia_zdrowia/zachowania_zdrowotne',    label: 'Zachowania zdrowotne',            file: 'wiki/psychologia_zdrowia/zachowania_zdrowotne.md'    },
        { id: 'psychologia_zdrowia/styl_zycia',              label: 'Styl zycia, a zdrowie',            file: 'wiki/psychologia_zdrowia/styl_zycia.md'              },
        { id: 'psychologia_zdrowia/sen_zdrowie',             label: 'Sen i zdrowie psychiczne',        file: 'wiki/psychologia_zdrowia/sen_zdrowie.md'             },
        { id: 'psychologia_zdrowia/aktywnosc_fizyczna',      label: 'Aktywnosc fizyczna, a zdrowie psychiczne',    file: 'wiki/psychologia_zdrowia/aktywnosc_fizyczna.md'      },
        { id: 'psychologia_zdrowia/dieta_zdrowie',           label: 'Dieta, a zdrowie psychiczne',      file: 'wiki/psychologia_zdrowia/dieta_zdrowie.md'           },
        { id: 'psychologia_zdrowia/bol',                     label: 'Psychologia bBlu',                file: 'wiki/psychologia_zdrowia/bol.md'                     },
        { id: 'psychologia_zdrowia/bol_chroniczny',          label: 'BBl przewlekly - zarzadzanie',    file: 'wiki/psychologia_zdrowia/bol_chroniczny.md'          },
        { id: 'psychologia_zdrowia/choroby_przewlekle',      label: 'Psychologia chorBb przewleklych', file: 'wiki/psychologia_zdrowia/choroby_przewlekle.md'      },
        { id: 'psychologia_zdrowia/psychoonkologia',         label: 'Psychoonkologia',                 file: 'wiki/psychologia_zdrowia/psychoonkologia.md'         },
        { id: 'psychologia_zdrowia/choroby_ukladu_krazenia', label: 'Choroby ukladu krazenia',         file: 'wiki/psychologia_zdrowia/choroby_ukladu_krazenia.md' },
        { id: 'psychologia_zdrowia/cukrzyca',                label: 'Psychologia cukrzycy',            file: 'wiki/psychologia_zdrowia/cukrzyca.md'                },
        { id: 'psychologia_zdrowia/jakosc_zycia',            label: 'Jakosc zycia, a choroba',          file: 'wiki/psychologia_zdrowia/jakosc_zycia.md'            },
        { id: 'psychologia_zdrowia/promocja_zdrowia',        label: 'Promocja zdrowia i profilaktyka', file: 'wiki/psychologia_zdrowia/promocja_zdrowia.md'        },
        { id: 'psychologia_zdrowia/psychoneuroimmunologia',  label: 'Psychoneuroimmunologia',          file: 'wiki/psychologia_zdrowia/psychoneuroimmunologia.md'  },
        { id: 'psychologia_zdrowia/placebo',                 label: 'Efekt placebo i nocebo',          file: 'wiki/psychologia_zdrowia/placebo.md'                 },
        { id: 'psychologia_zdrowia/wsparcie_spoleczne',      label: 'Wsparcie spoleczne, a zdrowie',    file: 'wiki/psychologia_zdrowia/wsparcie_spoleczne.md'      },
        { id: 'psychologia_zdrowia/adherencja',              label: 'Adherencja terapeutyczna',        file: 'wiki/psychologia_zdrowia/adherencja.md'              },
        { id: 'psychologia_zdrowia/komunikacja_medyczna',    label: 'Komunikacja lekarzdz pacjent',      file: 'wiki/psychologia_zdrowia/komunikacja_medyczna.md'    },
        { id: 'psychologia_zdrowia/interwencje_zdrowotne',   label: 'Interwencje psychologiczne w medycynie',      file: 'wiki/psychologia_zdrowia/interwencje_zdrowotne.md'   },
        { id: 'psychologia_zdrowia/rehabilitacja',           label: 'Rehabilitacja psychologiczna',    file: 'wiki/psychologia_zdrowia/rehabilitacja.md'           },
        { id: 'psychologia_zdrowia/wypalenie_zawodowe',      label: 'Wypalenie zawodowe',              file: 'wiki/psychologia_zdrowia/wypalenie_zawodowe.md'      },
      ]
    },
    
    { /* Psychosomatyka */
      section: 'Psychosomatyka',
      domainKey: 'psychosomatyka',
      items: [
        { id: 'psychosomatyka/wprowadzenie',               label: 'Psychosomatyka',    file: 'wiki/psychosomatyka/wprowadzenie.md'               },
        { id: 'psychosomatyka/historia',                   label: 'Historia psychosomatyki',           file: 'wiki/psychosomatyka/historia.md'                  },
        { id: 'psychosomatyka/modele_psychosomatyczne',    label: 'Modele psychosomatyczne',           file: 'wiki/psychosomatyka/modele_psychosomatyczne.md'   },
        { id: 'psychosomatyka/os_hpa',                     label: 'Os HPA i mechanizmy stresu',        file: 'wiki/psychosomatyka/os_hpa.md'                    },
        { id: 'psychosomatyka/aleksytymia',                label: 'Aleksytymia',                       file: 'wiki/psychosomatyka/aleksytymia.md'               },
        { id: 'psychosomatyka/somatyzacja',                label: 'Somatyzacja i zaburzenia somatyczne', file: 'wiki/psychosomatyka/somatyzacja.md'             },
        { id: 'psychosomatyka/bol_psychosomatyczny',       label: 'BBl psychosomatyczny',              file: 'wiki/psychosomatyka/bol_psychosomatyczny.md'      },
        { id: 'psychosomatyka/psychodermatologia',         label: 'Psychodermatologia',                file: 'wiki/psychosomatyka/psychodermatologia.md'        },
        { id: 'psychosomatyka/psychogastroenterologia',    label: 'Psychogastroenterologia',           file: 'wiki/psychosomatyka/psychogastroenterologia.md'   },
        { id: 'psychosomatyka/psychokardiologia',          label: 'Psychokardiologia',                 file: 'wiki/psychosomatyka/psychokardiologia.md'         },
        { id: 'psychosomatyka/uklad_oddechowy',            label: 'Psychosomatyka ukladu oddechowego', file: 'wiki/psychosomatyka/uklad_oddechowy.md'           },
        { id: 'psychosomatyka/choroby_autoimmunologiczne', label: 'Choroby autoimmunologiczne',        file: 'wiki/psychosomatyka/choroby_autoimmunologiczne.md'},
        { id: 'psychosomatyka/diagnoza_psychosomatyczna',  label: 'Diagnoza psychosomatyczna',         file: 'wiki/psychosomatyka/diagnoza_psychosomatyczna.md' },
        { id: 'psychosomatyka/terapia_psychosomatyczna',   label: 'Terapia psychosomatyczna',          file: 'wiki/psychosomatyka/terapia_psychosomatyczna.md'  },
      ]
    },
    
    { /* Porozumiewanie sie bez przemocy (NVC) */
      section: 'Porozumiewanie sie bez przemocy (NVC)',
      domainKey: 'porozumiewanie_sie_bez_przemocy',
      items: [
        { id: 'porozumiewanie_sie_bez_przemocy/wprowadzenie',              label: 'NVC',                    file: 'wiki/porozumiewanie_sie_bez_przemocy/wprowadzenie.md'              },
        { id: 'porozumiewanie_sie_bez_przemocy/cztery_komponenty',         label: 'Cztery komponenty NVC',                 file: 'wiki/porozumiewanie_sie_bez_przemocy/cztery_komponenty.md'         },
        { id: 'porozumiewanie_sie_bez_przemocy/obserwacja',                label: 'Obserwacja bez oceniania',              file: 'wiki/porozumiewanie_sie_bez_przemocy/obserwacja.md'                },
        { id: 'porozumiewanie_sie_bez_przemocy/uczucia',                   label: 'Uczucia w NVC',                         file: 'wiki/porozumiewanie_sie_bez_przemocy/uczucia.md'                   },
        { id: 'porozumiewanie_sie_bez_przemocy/potrzeby',                  label: 'Katalog potrzeb',                       file: 'wiki/porozumiewanie_sie_bez_przemocy/potrzeby.md'                  },
        { id: 'porozumiewanie_sie_bez_przemocy/prosba_i_zadanie',          label: 'Prosba, a zadanie',                      file: 'wiki/porozumiewanie_sie_bez_przemocy/prosba_i_zadanie.md'          },
        { id: 'porozumiewanie_sie_bez_przemocy/empatia_nvc',               label: 'Empatia w NVC',                         file: 'wiki/porozumiewanie_sie_bez_przemocy/empatia_nvc.md'               },
        { id: 'porozumiewanie_sie_bez_przemocy/jezyk_szakala_i_zyrafy',    label: 'Jezyk szakala i zyrafy',                file: 'wiki/porozumiewanie_sie_bez_przemocy/jezyk_szakala_i_zyrafy.md'    },
        { id: 'porozumiewanie_sie_bez_przemocy/autoempatia',               label: 'Autoempatia i samowspBlczucie',         file: 'wiki/porozumiewanie_sie_bez_przemocy/autoempatia.md'               },
        { id: 'porozumiewanie_sie_bez_przemocy/nvc_w_konfliktach',         label: 'NVC w rozwiazywaniu konfliktBw',        file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_konfliktach.md'         },
        { id: 'porozumiewanie_sie_bez_przemocy/nvc_w_wychowaniu',          label: 'NVC w wychowaniu i edukacji',           file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_wychowaniu.md'          },
        { id: 'porozumiewanie_sie_bez_przemocy/praktyka_nvc',              label: 'Praktyka NVC w codziennym zyciu',       file: 'wiki/porozumiewanie_sie_bez_przemocy/praktyka_nvc.md'              },
      ]
    },
    { /* Arteterapia */
      section: 'Arteterapia',
      domainKey: 'arteterapia',
      items: [
        { id: 'arteterapia/arteterapia_wprowadzenie', label: 'Arteterapia', file: 'wiki/arteterapia/arteterapia_wprowadzenie.md' },
        { id: 'arteterapia/art_therapy',   label: 'Arteterapia plastyczna',    file: 'wiki/arteterapia/art_therapy.md'   },
        { id: 'arteterapia/muzykoterapia', label: 'Muzykoterapia',             file: 'wiki/arteterapia/muzykoterapia.md' },
        { id: 'arteterapia/dmt',           label: 'Choreoterapia (DMT)',       file: 'wiki/arteterapia/dmt.md'           },
        { id: 'arteterapia/drameterapia',  label: 'Drameterapia',              file: 'wiki/arteterapia/drameterapia.md'  },
        { id: 'arteterapia/biblioterapia', label: 'Biblioterapia',             file: 'wiki/arteterapia/biblioterapia.md' },
        { id: 'arteterapia/mechanizmy',    label: 'Mechanizmy dzialania',      file: 'wiki/arteterapia/mechanizmy.md'    },
        { id: 'arteterapia/zastosowania',  label: 'Zastosowania kliniczne',    file: 'wiki/arteterapia/zastosowania.md'  },
      ]
    },
    { /* Animaloterapia */
      section: 'Animaloterapia',
      domainKey: 'animaloterapia',
      items: [
        { id: 'animaloterapia/animaloterapia_wprowadzenie', label: 'Animaloterapia', file: 'wiki/animaloterapia/animaloterapia_wprowadzenie.md' },
        { id: 'animaloterapia/dogoterapia',     label: 'Dogoterapia',            file: 'wiki/animaloterapia/dogoterapia.md'     },
        { id: 'animaloterapia/hipoterapia',     label: 'Hipoterapia',            file: 'wiki/animaloterapia/hipoterapia.md'     },
        { id: 'animaloterapia/felinoterapia',   label: 'Felinoterapia',          file: 'wiki/animaloterapia/felinoterapia.md'   },
        { id: 'animaloterapia/aat_zastosowania',label: 'AAT - zastosowania',     file: 'wiki/animaloterapia/aat_zastosowania.md'},
        { id: 'animaloterapia/etyka_aat',       label: 'Etyka i dobrostan',      file: 'wiki/animaloterapia/etyka_aat.md'       },
        { id: 'animaloterapia/mechanizmy_aat',  label: 'Mechanizmy AAT',         file: 'wiki/animaloterapia/mechanizmy_aat.md'  },
      ]
    },
    { /* Odpornosc psychiczna i mobbing */
      section: 'Odpornosc psychiczna',
      domainKey: 'rezyliencja_i_mobbing',
      items: [
        { id: 'rezyliencja_i_mobbing/odpornosc_wprowadzenie',   label: 'Odpornosc psychiczna - wprow.',        file: 'wiki/rezyliencja_i_mobbing/odpornosc_wprowadzenie.md'   },
        { id: 'rezyliencja_i_mobbing/modele_odpornosci',        label: 'Modele i teorie odpornosci',           file: 'wiki/rezyliencja_i_mobbing/modele_odpornosci.md'        },
        { id: 'rezyliencja_i_mobbing/budowanie_odpornosci',     label: 'Budowanie odpornosci psychicznej',     file: 'wiki/rezyliencja_i_mobbing/budowanie_odpornosci.md'     },
        { id: 'rezyliencja_i_mobbing/przemoc_psychiczna',       label: 'Przemoc psychiczna - definicja',       file: 'wiki/rezyliencja_i_mobbing/przemoc_psychiczna.md'       },
        { id: 'rezyliencja_i_mobbing/mobbing_definicja',        label: 'Mobbing - definicja, rodzaje, fazy',   file: 'wiki/rezyliencja_i_mobbing/mobbing_definicja.md'        },
        { id: 'rezyliencja_i_mobbing/mobbing_skutki',           label: 'Skutki psychologiczne mobbingu',       file: 'wiki/rezyliencja_i_mobbing/mobbing_skutki.md'           },
        { id: 'rezyliencja_i_mobbing/mobbing_interwencja',      label: 'Interwencja i zapobieganie mobbingowi',file: 'wiki/rezyliencja_i_mobbing/mobbing_interwencja.md'      },
        { id: 'rezyliencja_i_mobbing/wypalenie_zawodowe',       label: 'Wypalenie zawodowe - definicja',       file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md'       },
        { id: 'rezyliencja_i_mobbing/fazy_wypalenia',           label: 'Fazy i wymiary wypalenia',             file: 'wiki/rezyliencja_i_mobbing/fazy_wypalenia.md'           },
        { id: 'rezyliencja_i_mobbing/wypalenie_zawody',         label: 'Wypalenie w wybranych zawodach',       file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawody.md'         },
        { id: 'rezyliencja_i_mobbing/profilaktyka_wypalenia',   label: 'Profilaktyka wypalenia zawodowego',    file: 'wiki/rezyliencja_i_mobbing/profilaktyka_wypalenia.md'   },
        { id: 'rezyliencja_i_mobbing/wsparcie_psychologiczne',  label: 'Wsparcie psychologiczne ofiar',        file: 'wiki/rezyliencja_i_mobbing/wsparcie_psychologiczne.md'  },
      ]
    },
    { /* Psychologia szkolna i edukacyjna */
      section: 'Psychologia szkolna i edukacyjna',
      domainKey: 'psychologia_szkolna',
      items: [
        { id: 'psychologia_szkolna/wprowadzenie',                  label: 'Psych. szkolna',            file: 'wiki/psychologia_szkolna/wprowadzenie.md'                  },
        { id: 'psychologia_szkolna/neurodydaktyka',                label: 'Neurodydaktyka',                           file: 'wiki/psychologia_szkolna/neurodydaktyka.md'                },
        { id: 'psychologia_szkolna/teorie_uczenia_sie',            label: 'Teorie uczenia sie',                       file: 'wiki/psychologia_szkolna/teorie_uczenia_sie.md'            },
        { id: 'psychologia_szkolna/strefa_najblizszego_rozwoju',   label: 'Strefa najblizszego rozwoju (ZPD)',        file: 'wiki/psychologia_szkolna/strefa_najblizszego_rozwoju.md'   },
        { id: 'psychologia_szkolna/motywacja_szkolna',             label: 'Motywacja szkolna',                        file: 'wiki/psychologia_szkolna/motywacja_szkolna.md'             },
        { id: 'psychologia_szkolna/inteligencja_wieloraka',        label: 'Inteligencje wielorakie (Gardner)',        file: 'wiki/psychologia_szkolna/inteligencja_wieloraka.md'        },
        { id: 'psychologia_szkolna/trudnosci_w_uczeniu_sie',       label: 'Trudnosci w uczeniu sie',                 file: 'wiki/psychologia_szkolna/trudnosci_w_uczeniu_sie.md'       },
        { id: 'psychologia_szkolna/adhd_w_szkole',                 label: 'ADHD w szkole',                            file: 'wiki/psychologia_szkolna/adhd_w_szkole.md'                 },
        { id: 'psychologia_szkolna/relacje_nauczyciel_uczen',      label: 'Relacje nauczycieldz uczel',                file: 'wiki/psychologia_szkolna/relacje_nauczyciel_uczen.md'      },
        { id: 'psychologia_szkolna/klimat_szkolny',                label: 'Klimat szkolny',                           file: 'wiki/psychologia_szkolna/klimat_szkolny.md'                },
        { id: 'psychologia_szkolna/bullying',                      label: 'Bullying w szkole',                        file: 'wiki/psychologia_szkolna/bullying.md'                      },
        { id: 'psychologia_szkolna/ocenianie_i_feedback',          label: 'Ocenianie i informacja zwrotna',           file: 'wiki/psychologia_szkolna/ocenianie_i_feedback.md'          },
        { id: 'psychologia_szkolna/stres_szkolny',                 label: 'Stres szkolny i lek egzaminacyjny',       file: 'wiki/psychologia_szkolna/stres_szkolny.md'                 },
        { id: 'psychologia_szkolna/interwencje_szkolne',           label: 'Interwencje psychologiczne w szkole',      file: 'wiki/psychologia_szkolna/interwencje_szkolne.md'           },
      ]
    },
    { /* Psychologia osob z niepelnosprawnoscia */
      section: 'Psychologia osob z niepelnosprawnoscia',
      domainKey: 'psychologia_niepelnosprawnosci',
      items: [
        { id: 'psychologia_niepelnosprawnosci/wprowadzenie',                  label: 'Psychologia niepelnosprawnosci - wprow.', file: 'wiki/psychologia_niepelnosprawnosci/wprowadzenie.md'                  },
        { id: 'psychologia_niepelnosprawnosci/modele_niepelnosprawnosci',     label: 'Modele niepelnosprawnosci',              file: 'wiki/psychologia_niepelnosprawnosci/modele_niepelnosprawnosci.md'     },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna', label: 'Niepelnosprawnosc intelektualna',      file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna.md' },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa',     label: 'Niepelnosprawnosc ruchowa',              file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa.md'     },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa',    label: 'Niepelnosprawnosc wzrokowa',             file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa.md'    },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa',    label: 'Niepelnosprawnosc sluchowa',             file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa.md'    },
        { id: 'psychologia_niepelnosprawnosci/autyzm_niepelnosprawnosc',      label: 'Spektrum autyzmu i niepelnosprawnosc',   file: 'wiki/psychologia_niepelnosprawnosci/autyzm_niepelnosprawnosc.md'      },
        { id: 'psychologia_niepelnosprawnosci/jakosc_zycia',                  label: 'Jakosc zycia osob z niepelnosprawnoscia',file: 'wiki/psychologia_niepelnosprawnosci/jakosc_zycia.md'                  },
        { id: 'psychologia_niepelnosprawnosci/stres_i_adaptacja',             label: 'Stres, adaptacja i radzenie sobie',      file: 'wiki/psychologia_niepelnosprawnosci/stres_i_adaptacja.md'             },
        { id: 'psychologia_niepelnosprawnosci/rodzina_i_opiekunowie',         label: 'Rodzina i opiekunowie',                  file: 'wiki/psychologia_niepelnosprawnosci/rodzina_i_opiekunowie.md'         },
        { id: 'psychologia_niepelnosprawnosci/rehabilitacja_psychologiczna',  label: 'Rehabilitacja psychologiczna',           file: 'wiki/psychologia_niepelnosprawnosci/rehabilitacja_psychologiczna.md'  },
        { id: 'psychologia_niepelnosprawnosci/inkluzja_spoleczna',            label: 'Inkluzja spoleczna i prawa',             file: 'wiki/psychologia_niepelnosprawnosci/inkluzja_spoleczna.md'            },
      ]
    },
    { /* Psychologia osob w podeszlym wieku */
      section: 'Psychologia osob w podeszlym wieku',
      domainKey: 'geropsychologia',
      items: [
        { id: 'geropsychologia/wprowadzenie',               label: 'Psychologia starosci - wprow.',       file: 'wiki/geropsychologia/wprowadzenie.md'               },
        { id: 'geropsychologia/starzenie_poznawcze',        label: 'Starzenie sie poznawcze',             file: 'wiki/geropsychologia/starzenie_poznawcze.md'        },
        { id: 'geropsychologia/demencja',                   label: 'Demencja i ch. neurodegeneracyjne',   file: 'wiki/geropsychologia/demencja.md'                   },
        { id: 'geropsychologia/depresja_starszych',         label: 'Depresja u osob starszych',           file: 'wiki/geropsychologia/depresja_starszych.md'         },
        { id: 'geropsychologia/samotnosc',                  label: 'Samotnosc i izolacja spoleczna',      file: 'wiki/geropsychologia/samotnosc.md'                  },
        { id: 'geropsychologia/jakosc_zycia_starszych',     label: 'Jakosc zycia w starosci',             file: 'wiki/geropsychologia/jakosc_zycia_starszych.md'     },
        { id: 'geropsychologia/aktywnosc_poznawcza',        label: 'Aktywnosc poznawcza i trening umyslu',file: 'wiki/geropsychologia/aktywnosc_poznawcza.md'        },
        { id: 'geropsychologia/umieranie_smierc',           label: 'Psychologia umierania i smierci',     file: 'wiki/geropsychologia/umieranie_smierc.md'           },
        { id: 'geropsychologia/relacje_spoleczne_starszych',label: 'Relacje spoleczne i wsparcie rodziny',file: 'wiki/geropsychologia/relacje_spoleczne_starszych.md'},
        { id: 'geropsychologia/adaptacja_do_starosci',      label: 'Adaptacja do starosci i rezyliencja', file: 'wiki/geropsychologia/adaptacja_do_starosci.md'      },
        { id: 'geropsychologia/interwencje_terapeutyczne',  label: 'Interwencje terapeutyczne',           file: 'wiki/geropsychologia/interwencje_terapeutyczne.md'  },
        { id: 'geropsychologia/opieka_nad_opiekunami',      label: 'Wypalenie i wsparcie opiekunBw',      file: 'wiki/geropsychologia/opieka_nad_opiekunami.md'      },
      ]
    },
    { /* Neuroroznorodnosc i neurodiversity */
      section: 'Neuroroznorodnosc',
      domainKey: 'neuroroznorodnosc',
      items: [
        { id: 'neuroroznorodnosc/wprowadzenie',               label: 'Neuroroznorodnosc',                    file: 'wiki/neuroroznorodnosc/wprowadzenie.md'               },
        { id: 'neuroroznorodnosc/adhd',                       label: 'ADHD jako wariant neuroroznorodnosci', file: 'wiki/neuroroznorodnosc/adhd.md'                       },
        { id: 'neuroroznorodnosc/spektrum_autyzmu',           label: 'Spektrum autyzmu (ASD)',               file: 'wiki/neuroroznorodnosc/spektrum_autyzmu.md'           },
        { id: 'neuroroznorodnosc/dysleksja',                  label: 'Dysleksja',                            file: 'wiki/neuroroznorodnosc/dysleksja.md'                  },
        { id: 'neuroroznorodnosc/dyskalkulia',                label: 'Dyskalkulia',                          file: 'wiki/neuroroznorodnosc/dyskalkulia.md'                },
        { id: 'neuroroznorodnosc/dyspraksja',                 label: 'Dyspraksja i DCD',                     file: 'wiki/neuroroznorodnosc/dyspraksja.md'                 },
        { id: 'neuroroznorodnosc/profil_sensoryczny',         label: 'Profil sensoryczny',                   file: 'wiki/neuroroznorodnosc/profil_sensoryczny.md'         },
        { id: 'neuroroznorodnosc/tourette',                   label: 'ZespBl Tourette\'a i tiki',            file: 'wiki/neuroroznorodnosc/tourette.md'                   },
        { id: 'neuroroznorodnosc/hiperleksja',                label: 'Hiperleksja i wyjatkowe zdolnosci',    file: 'wiki/neuroroznorodnosc/hiperleksja.md'                },
        { id: 'neuroroznorodnosc/model_mocnych_stron',        label: 'Model mocnych stron',                  file: 'wiki/neuroroznorodnosc/model_mocnych_stron.md'        },
        { id: 'neuroroznorodnosc/wsparcie_interwencje',       label: 'Wsparcie i interwencje',               file: 'wiki/neuroroznorodnosc/wsparcie_interwencje.md'       },
        { id: 'neuroroznorodnosc/neurozroznorodnosc_w_pracy', label: 'NeurorBznorodnosc w miejscu pracy',   file: 'wiki/neuroroznorodnosc/neurozroznorodnosc_w_pracy.md' },
        { id: 'neuroroznorodnosc/identyfikacja_i_diagnoza',   label: 'Identyfikacja i diagnoza',             file: 'wiki/neuroroznorodnosc/identyfikacja_i_diagnoza.md'   },
      ]
    },
    { /* Psychoterapia */
      section: 'Psychoterapia',
      domainKey: 'psychoterapia',
      items: [
        { id: 'psychoterapia/psychoterapia_wprowadzenie', label: 'Psychoterapia', file: 'wiki/psychoterapia/psychoterapia_wprowadzenie.md' },
        { id: 'psychoterapia/cbt',        label: 'Terapia poznawczo-beh. (CBT)', file: 'wiki/psychoterapia/cbt.md'        },
        { id: 'psychoterapia/dbt',        label: 'Terapia dialektyczna (DBT)',    file: 'wiki/psychoterapia/dbt.md'        },
        { id: 'psychoterapia/psychodyn',  label: 'Terapia psychodynamiczna',     file: 'wiki/psychoterapia/psychodyn.md'  },
        { id: 'psychoterapia/humanist',   label: 'Podejscie humanistyczne',      file: 'wiki/psychoterapia/humanist.md'   },
        { id: 'psychoterapia/systemowa',  label: 'Terapia systemowa i rodzin.',  file: 'wiki/psychoterapia/systemowa.md'  },
        { id: 'psychoterapia/systemy_rodzinne', label: 'Systemy rodzinne', file: 'wiki/psychoterapia/systemy_rodzinne.md' },
        { id: 'psychoterapia/skutecznosc',label: 'Skutecznosc psychoterapii',    file: 'wiki/psychoterapia/skutecznosc.md'},
        { id: 'psychoterapia/sojusz',     label: 'Sojusz terapeutyczny',         file: 'wiki/psychoterapia/sojusz.md'    },
        { id: 'psychoterapia/emdr',       label: 'EMDR',                         file: 'wiki/psychoterapia/emdr.md'      },
        { id: 'psychoterapia/act',        label: 'Terapia akceptacji (ACT)',      file: 'wiki/psychoterapia/act.md'       },
        { id: 'psychoterapia/trening_umiejetnosci_spolecznych', label: 'Trening Umiejetnosci Spolecznych (SST)', file: 'wiki/psychoterapia/trening_umiejetnosci_spolecznych.md' },
        { id: 'psychoterapia/gestalt',    label: 'Plodna pustka (Gestalt)',       file: 'wiki/psychoterapia/gestalt.md'    },
        { id: 'psychoterapia/logoterapia_frankl',      label: 'Logoterapia (Frankl)',          file: 'wiki/psychoterapia/logoterapia_frankl.md'      },
        { id: 'psychoterapia/psychoanaliza_fromma',    label: 'Psychoanaliza humanistyczna (Fromm)', file: 'wiki/psychoterapia/psychoanaliza_fromma.md' },
        { id: 'psychoterapia/psychologia_zimbardo',    label: 'Psychologia spoleczna (Zimbardo)',    file: 'wiki/psychoterapia/psychologia_zimbardo.md' },
        { id: 'psychoterapia/aktywacja_behawioralna', label: 'Aktywacja behawioralna',               file: 'wiki/psychoterapia/aktywacja_behawioralna.md' },
        { id: 'psychoterapia/rebt',                    label: 'REBT - racjonalna terapia',            file: 'wiki/psychoterapia/rebt.md'                     },
        { id: 'psychoterapia/terapia_prowokatywna', label: 'Terapia prowokatywna', file: 'wiki/psychoterapia/terapia_prowokatywna.md' },
        { id: 'psychoterapia/psychologiczne_mechanizmy_przebaczenia', label: 'Mechanizmy przebaczenia po przemocy emocjonalnej', file: 'wiki/psychoterapia/psychologiczne_mechanizmy_przebaczenia.md' },
        { id: 'psychoterapia/superwizja',              label: 'Superwizja w psychoterapii',           file: 'wiki/psychoterapia/superwizja.md'           },
        { id: 'psychoterapia/kontenerowanie_emocji',   label: 'Kontenerowanie emocji w terapii',      file: 'wiki/psychoterapia/kontenerowanie_emocji.md'           },
          { id: 'psychoterapia/systemy_rodzinne_genogram', label: 'Systemy rodzinne - genogram i hipotezy kliniczne', file: 'wiki/psychoterapia/systemy_rodzinne_genogram_i_hipotezy_kliniczne.md' },
          { id: 'psychoterapia/heksafleks_act', label: 'Heksafleks - model ACT', file: 'wiki/psychoterapia/heksafleks_act.md' },
        ]
    },
    { /* Farmakologia i psychofarmakologia */
      section: 'Farmakologia',
      domainKey: 'farmakologia',
      items: [
        { id: 'farmakologia/neurofarmakologia',           label: 'Neurofarmakologia',                file: 'wiki/farmakologia/neurofarmakologia.md'           },
        { id: 'farmakologia/neurofarmakologia_behawioralna', label: 'Neurofarmakologia behawioralna', file: 'wiki/farmakologia/neurofarmakologia_behawioralna.md' },
        { id: 'farmakologia/przeciwdepresyjne',           label: 'Leki przeciwdepresyjne',           file: 'wiki/farmakologia/przeciwdepresyjne.md'           },
        { id: 'farmakologia/przeciwpsychotyczne',         label: 'Leki przeciwpsychotyczne',         file: 'wiki/farmakologia/przeciwpsychotyczne.md'         },
        { id: 'farmakologia/anxiolityki',                 label: 'Anksjolityki i nasenne',           file: 'wiki/farmakologia/anxiolityki.md'                 },
        { id: 'farmakologia/stabilizatory',               label: 'Stabilizatory nastroju',           file: 'wiki/farmakologia/stabilizatory.md'               },
        { id: 'farmakologia/uzaleznienia_farm',           label: 'Farmakoterapia uzalezniel',        file: 'wiki/farmakologia/uzaleznienia_farm.md'           },
        { id: 'farmakologia/ketamina',                    label: 'Ketamina w psychiatrii',           file: 'wiki/farmakologia/ketamina.md'                    },
        { id: 'farmakologia/psychodeliki',                label: 'Psychodeliki w terapii',           file: 'wiki/farmakologia/psychodeliki.md'                },
        { id: 'farmakologia/nootropiki',                  label: 'Nootropiki i kognitywne',          file: 'wiki/farmakologia/nootropiki.md'                  },
          // PSYCHOFARMAKOLOGIA - podstawy teoretyczne
          { id: 'psychofarmakologia/spis_tresci',                            label: 'Psychofarmakologia - spis treści',                         file: 'wiki/psychofarmakologia/spis_tresci.md'                            },
          { id: 'psychofarmakologia/01_rys_historyczny_psychofarmakologii_klinicznej', label: '01. Rys historyczny psychofarmakologii klinicznej', file: 'wiki/psychofarmakologia/01_rys_historyczny_psychofarmakologii_klinicznej.md' },
          { id: 'psychofarmakologia/02_anatomia_funkcjonalna_mozgu', label: '02. Anatomia funkcjonalna mózgu', file: 'wiki/psychofarmakologia/02_anatomia_funkcjonalna_mozgu.md' },
          { id: 'psychofarmakologia/03_podstawy_neurochemii_oun', label: '03. Podstawy neurochemii OUN', file: 'wiki/psychofarmakologia/03_podstawy_neurochemii_oun.md' },
          { id: 'psychofarmakologia/04_aktualna_nomenklatura_lekow_psychotropowych', label: '04. Aktualna nomenklatura leków psychotropowych', file: 'wiki/psychofarmakologia/04_aktualna_nomenklatura_lekow_psychotropowych.md' },
          // PSYCHOFARMAKOLOGIA - klasy leków
          { id: 'psychofarmakologia/05_leki_przeciwpsychotyczne', label: '05. Leki przeciwpsychotyczne', file: 'wiki/psychofarmakologia/05_leki_przeciwpsychotyczne.md' },
          { id: 'psychofarmakologia/06_leki_przeciwdepresyjne', label: '06. Leki przeciwdepresyjne', file: 'wiki/psychofarmakologia/06_leki_przeciwdepresyjne.md' },
          { id: 'psychofarmakologia/07_leki_normotymiczne', label: '07. Leki normotymiczne', file: 'wiki/psychofarmakologia/07_leki_normotymiczne.md' },
          { id: 'psychofarmakologia/08_leki_prokognitywne', label: '08. Leki prokognitywne', file: 'wiki/psychofarmakologia/08_leki_prokognitywne.md' },
          { id: 'psychofarmakologia/09_leki_anksjolityczne_i_nasenne', label: '09. Leki anksjolityczne i nasenne', file: 'wiki/psychofarmakologia/09_leki_anksjolityczne_i_nasenne.md' },
          { id: 'psychofarmakologia/10_leki_stymulujace', label: '10. Leki stymulujące', file: 'wiki/psychofarmakologia/10_leki_stymulujace.md' },
          { id: 'psychofarmakologia/11_leki_w_terapii_uzaleznien', label: '11. Leki w terapii uzaleznień', file: 'wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md' },
          { id: 'psychofarmakologia/12_inne_leki_psychotropowe_lub_stosowane_w_psychiatrii', label: '12. Inne leki psychotropowe lub stosowane w psychiatrii', file: 'wiki/psychofarmakologia/12_inne_leki_psychotropowe_lub_stosowane_w_psychiatrii.md' },
          { id: 'psychofarmakologia/13_badania_kliniczne_lekow_psychotropowych', label: '13. Badania kliniczne leków psychotropowych', file: 'wiki/psychofarmakologia/13_badania_kliniczne_lekow_psychotropowych.md' },
          // PSYCHOFARMAKOLOGIA - stosowanie kliniczne
          { id: 'psychofarmakologia/14_farmakoterapia_schizofrenii', label: '14. Farmakoterapia schizofrenii', file: 'wiki/psychofarmakologia/14_farmakoterapia_schizofrenii.md' },
          { id: 'psychofarmakologia/15_farmakoterapia_chad', label: '15. Farmakoterapia CHĄD', file: 'wiki/psychofarmakologia/15_farmakoterapia_chad.md' },
          { id: 'psychofarmakologia/16_farmakoterapia_depresji', label: '16. Farmakoterapia depresji', file: 'wiki/psychofarmakologia/16_farmakoterapia_depresji.md' },
          { id: 'psychofarmakologia/17_farmakoterapia_asd', label: '17. Farmakoterapia ASD', file: 'wiki/psychofarmakologia/17_farmakoterapia_asd.md' },
          { id: 'psychofarmakologia/18_farmakoterapia_ocd', label: '18. Farmakoterapia OCD', file: 'wiki/psychofarmakologia/18_farmakoterapia_ocd.md' },
          { id: 'psychofarmakologia/19_farmakoterapia_zespolow_lekowych', label: '19. Farmakoterapia zespołów lękowych', file: 'wiki/psychofarmakologia/19_farmakoterapia_zespolow_lekowych.md' },
          { id: 'psychofarmakologia/20_farmakoterapia_zespolow_stresowych', label: '20. Farmakoterapia zespołów stresowych', file: 'wiki/psychofarmakologia/20_farmakoterapia_zespolow_stresowych.md' },
          { id: 'psychofarmakologia/21_farmakoterapia_adhd_dzieci_dorosli', label: '21. Farmakoterapia ADHD dzieci i dorosłych', file: 'wiki/psychofarmakologia/21_farmakoterapia_adhd_dzieci_dorosli.md' },
          { id: 'psychofarmakologia/22_farmakoterapia_zespolow_otepiennych', label: '22. Farmakoterapia zespołów otępiennych', file: 'wiki/psychofarmakologia/22_farmakoterapia_zespolow_otepiennych.md' },
          { id: 'psychofarmakologia/23_farmakoterapia_uzaleznienia_od_alkoholu', label: '23. Farmakoterapia uzaleznienia od alkoholu', file: 'wiki/psychofarmakologia/23_farmakoterapia_uzaleznienia_od_alkoholu.md' },
          { id: 'psychofarmakologia/24_farmakoterapia_uzaleznien_inne_substancje', label: '24. Farmakoterapia uzaleznień inne substancje', file: 'wiki/psychofarmakologia/24_farmakoterapia_uzaleznien_inne_substancje.md' },
          { id: 'psychofarmakologia/26_farmakoterapia_zaburzen_odzywiania', label: '26. Farmakoterapia zaburzen odzywiania', file: 'wiki/psychofarmakologia/26_farmakoterapia_zaburzen_odzywiania.md' },
          { id: 'psychofarmakologia/27_farmakologiczne_leczenie_zaburzen_seksualnych', label: '27. Farmakologiczne leczenie zaburzen seksualnych', file: 'wiki/psychofarmakologia/27_farmakologiczne_leczenie_zaburzen_seksualnych.md' },
          { id: 'psychofarmakologia/28_farmakoterapia_zaburzen_snu', label: '28. Farmakoterapia zaburzen snu', file: 'wiki/psychofarmakologia/28_farmakoterapia_zaburzen_snu.md' },
          { id: 'psychofarmakologia/29_farmakologiczne_proby_leczenia_zaburzen_osobowosci', label: '29. Farmakologiczne proby leczenia zaburzen osobowosci', file: 'wiki/psychofarmakologia/29_farmakologiczne_proby_leczenia_zaburzen_osobowosci.md' },
          // PSYCHOFARMAKOLOGIA - populacje specjalne
          { id: 'psychofarmakologia/30_farmakogenetyka_lekow_psychotropowych', label: '30. Farmakogenetyka leków psychotropowych', file: 'wiki/psychofarmakologia/30_farmakogenetyka_lekow_psychotropowych.md' },
          { id: 'psychofarmakologia/31_psychofarmakoterapia_wieku_dziecieco_mlodziezowego', label: '31. Psychofarmakoterapia wieku dziecięco-młodziezowego', file: 'wiki/psychofarmakologia/31_psychofarmakoterapia_wieku_dziecieco_mlodziezowego.md' },
          { id: 'psychofarmakologia/32_psychofarmakoterapia_wieku_podeszlego', label: '32. Psychofarmakoterapia wieku podeszłego', file: 'wiki/psychofarmakologia/32_psychofarmakoterapia_wieku_podeszlego.md' },
          { id: 'psychofarmakologia/33_psychofarmakoterapia_ciazy_i_okresu_okoloporodowego', label: '33. Psychofarmakoterapia ciazy i okresu okoloporodowego', file: 'wiki/psychofarmakologia/33_psychofarmakoterapia_ciazy_i_okresu_okoloporodowego.md' },
          { id: 'psychofarmakologia/34_leczenie_zaburzen_psychicznych_w_chorobach_somatycznych', label: '34. Leczenie zaburzen psychicznych w chorobach somatycznych', file: 'wiki/psychofarmakologia/34_leczenie_zaburzen_psychicznych_w_chorobach_somatycznych.md' },
          { id: 'psychofarmakologia/35_leczenie_skojarzone_lekami_psychotropowymi', label: '35. Leczenie skojarzone lekami psychotropowymi', file: 'wiki/psychofarmakologia/35_leczenie_skojarzone_lekami_psychotropowymi.md' },
          { id: 'psychofarmakologia/36_psychofarmakoterapia_zgodna_z_zaleceniami', label: '36. Psychofarmakoterapia zgodna z zaleceniami', file: 'wiki/psychofarmakologia/36_psychofarmakoterapia_zgodna_z_zaleceniami.md' },
          { id: 'psychofarmakologia/37_farmakologiczne_aspekty_terapii_elektrowstrzasowej', label: '37. Farmakologiczne aspekty terapii elektrowstrzasowej', file: 'wiki/psychofarmakologia/37_farmakologiczne_aspekty_terapii_elektrowstrzasowej.md' },
        ]
    },
    { /* Psychologia pozytywna */
      section: 'Psychologia pozytywna',
      domainKey: 'psychologia_pozytywna',
      items: [
        { id: 'psychologia_pozytywna/wprowadzenie',          label: 'Psychologia pozytywna - wprow.',   file: 'wiki/psychologia_pozytywna/wprowadzenie.md'          },
        { id: 'psychologia_pozytywna/model_perma',           label: 'Model PERMA',                      file: 'wiki/psychologia_pozytywna/model_perma.md'           },
        { id: 'psychologia_pozytywna/szczescie_dobrostan',   label: 'Szczescie i dobrostan',            file: 'wiki/psychologia_pozytywna/szczescie_dobrostan.md'   },
        { id: 'psychologia_pozytywna/optymizm_nadzieja',     label: 'Optymizm i nadzieja',              file: 'wiki/psychologia_pozytywna/optymizm_nadzieja.md'     },
        { id: 'psychologia_pozytywna/3p_optymizmu_seligmana', label: '3P optymizmu Seligmana',         file: 'wiki/psychologia_pozytywna/3p_optymizmu_seligmana.md' },
        { id: 'psychologia_pozytywna/przeplyw_flow',         label: 'Przeplyw (flow)',                  file: 'wiki/psychologia_pozytywna/przeplyw_flow.md'         },
        { id: 'psychologia_pozytywna/sily_charakteru',       label: 'Sily charakteru (VIA)',            file: 'wiki/psychologia_pozytywna/sily_charakteru.md'       },
        { id: 'psychologia_pozytywna/wdziecznosc',           label: 'Wdziecznosc',                      file: 'wiki/psychologia_pozytywna/wdziecznosc.md'           },
        { id: 'psychologia_pozytywna/mindfulness',           label: 'Mindfulness i uwaznosc',           file: 'wiki/psychologia_pozytywna/mindfulness.md'           },
        { id: 'psychologia_pozytywna/wspolczucie_dla_siebie',label: 'WspBlczucie dla siebie',           file: 'wiki/psychologia_pozytywna/wspolczucie_dla_siebie.md'},
        { id: 'psychologia_pozytywna/sens_i_cel',            label: 'Sens zycia i poczucie celu',       file: 'wiki/psychologia_pozytywna/sens_i_cel.md'            },
        { id: 'psychologia_pozytywna/relacje_pozytywne',     label: 'Pozytywne relacje i milosc',       file: 'wiki/psychologia_pozytywna/relacje_pozytywne.md'     },
        { id: 'psychologia_pozytywna/interwencje_pozytywne', label: 'Interwencje pozytywne',            file: 'wiki/psychologia_pozytywna/interwencje_pozytywne.md' },
      ]
    },
    { /* Suicydologia */
      section: 'Suicydologia',
      domainKey: 'suicydologia',
      items: [
        { id: 'suicydologia/suicydologia_wprowadzenie', label: 'Suicydologia', file: 'wiki/suicydologia/suicydologia_wprowadzenie.md' },
        { id: 'suicydologia/epidemiologia',             label: 'Epidemiologia',                file: 'wiki/suicydologia/epidemiologia.md'             },
        { id: 'suicydologia/teorie',                    label: 'Teorie i modele',              file: 'wiki/suicydologia/teorie.md'                    },
        { id: 'suicydologia/ocena_ryzyka',              label: 'Ocena ryzyka',                 file: 'wiki/suicydologia/ocena_ryzyka.md'              },
        { id: 'suicydologia/interwencja',               label: 'Interwencja kryzysowa',        file: 'wiki/suicydologia/interwencja.md'               },
        { id: 'suicydologia/profilaktyka',              label: 'Profilaktyka',                 file: 'wiki/suicydologia/profilaktyka.md'              },
        { id: 'suicydologia/nssi',                      label: 'Samookaleczenia (NSSI)',        file: 'wiki/suicydologia/nssi.md'                      },
        { id: 'suicydologia/postvention',               label: 'Postvention',                  file: 'wiki/suicydologia/postvention.md'               },
        { id: 'suicydologia/media',                     label: 'Efekt Wertera i Papageno',     file: 'wiki/suicydologia/media.md'                     },
        { id: 'suicydologia/biologiczne_neurobiologiczne_podstawy', label: 'Biologiczne i neurobiologiczne podstawy', file: 'wiki/suicydologia/biologiczne_neurobiologiczne_podstawy_zachowan_suicydalnych.md' },
        { id: 'suicydologia/genetyczne_i_epigenetyczne_uwarunkowania', label: 'Genetyczne i epigenetyczne uwarunkowania', file: 'wiki/suicydologia/genetyczne_i_epigenetyczne_uwarunkowania_suicydalnosci.md' },
        { id: 'suicydologia/psychopatologia_a_ryzyko',  label: 'Psychopatologia, a ryzyko samobBjstwa', file: 'wiki/suicydologia/psychopatologia_a_ryzyko_samobojstwa.md' },
        { id: 'suicydologia/trauma_ace_i_stres_chroniczny', label: 'Trauma ACE i stres chroniczny', file: 'wiki/suicydologia/trauma_ace_i_stres_chroniczny_a_ryzyko_samobojstwa.md' },
      ]
    },
    { /* Seksuologia */
      section: 'Seksuologia',
      domainKey: 'seksuologia',
      items: [
        { id: 'seksuologia/seksuologia_wprowadzenie', label: 'Seksuologia', file: 'wiki/seksuologia/seksuologia_wprowadzenie.md' },
        { id: 'seksuologia/psychologia_seksu',         label: 'Psychologia seksu',           file: 'wiki/seksuologia/psychologia_seksu.md'         },
        { id: 'seksuologia/emocjonalne_zaangazowanie_w_seksie', label: 'Emocjonalne zaangazowanie, a seks', file: 'wiki/seksuologia/emocjonalne_zaangazowanie_w_seksie.md' },
        { id: 'seksuologia/wstyd_ciala_a_pozycje',      label: 'Wstyd ciala, a pozycje seksualne', file: 'wiki/seksuologia/wstyd_ciala_a_pozycje.md'      },
        { id: 'seksuologia/orientacja',               label: 'Orientacja seksualna',        file: 'wiki/seksuologia/orientacja.md'               },
        { id: 'seksuologia/tozsamosc_plciowa',        label: 'Tozsamosc plciowa',           file: 'wiki/seksuologia/tozsamosc_plciowa.md'        },
        { id: 'seksuologia/dysfunkcje',               label: 'Dysfunkcje seksualne',        file: 'wiki/seksuologia/dysfunkcje.md'               },
        { id: 'seksuologia/hiperseksualnosc_mechanizm', label: 'Hiperseksualnosc jako mechanizm', file: 'wiki/seksuologia/hiperseksualnosc_mechanizm.md' },
        { id: 'seksuologia/terapia_seksualna',        label: 'Terapia seksualna',           file: 'wiki/seksuologia/terapia_seksualna.md'        },
        { id: 'seksuologia/trauma_seksualna',         label: 'Trauma seksualna',            file: 'wiki/seksuologia/trauma_seksualna.md'         },
        { id: 'seksuologia/przemoc_w_dziecinstwie_a_seksualnosc', label: 'Przemoc w dziecilstwie, a seksualnosc doroslych', file: 'wiki/seksuologia/przemoc_w_dziecinstwie_a_seksualnosc.md' },
        { id: 'seksuologia/dda_a_seksualnosc',         label: 'DDA, a seksualnosc doroslych', file: 'wiki/seksuologia/dda_a_seksualnosc.md'         },
        { id: 'seksuologia/rozw_seksualny',           label: 'Rozwoj seksualny',            file: 'wiki/seksuologia/rozw_seksualny.md'           },
        { id: 'seksuologia/modele_odpowiedzi',        label: 'Modele odpowiedzi seksualnej',file: 'wiki/seksuologia/modele_odpowiedzi.md'        },
      ]
    },
    { /* Psychologia sadowa i opiniowanie */
      section: 'Psychologia sadowa i opiniowanie',
      domainKey: 'psychologia_sadowa',
      items: [
        { id: 'psychologia_sadowa/wprowadzenie',            label: 'Biegly psycholog',       file: 'wiki/psychologia_sadowa/wprowadzenie.md'            },
        { id: 'psychologia_sadowa/rola_bieglego',           label: 'Rola i status bieglego',                file: 'wiki/psychologia_sadowa/rola_bieglego.md'           },
        { id: 'psychologia_sadowa/podstawy_prawne',         label: 'Podstawy prawne opiniowania',           file: 'wiki/psychologia_sadowa/podstawy_prawne.md'         },
        { id: 'psychologia_sadowa/metodologia_opinii',      label: 'Metodologia sporzadzania opinii',       file: 'wiki/psychologia_sadowa/metodologia_opinii.md'      },
        { id: 'psychologia_sadowa/ocena_wiarygodnosci',     label: 'Ocena wiarygodnosci zeznal',            file: 'wiki/psychologia_sadowa/ocena_wiarygodnosci.md'     },
        { id: 'psychologia_sadowa/opinia_karna',            label: 'Opiniowanie w sprawach karnych',        file: 'wiki/psychologia_sadowa/opinia_karna.md'            },
        { id: 'psychologia_sadowa/opinia_cywilna',          label: 'Opiniowanie w sprawach cywilnych',      file: 'wiki/psychologia_sadowa/opinia_cywilna.md'          },
        { id: 'psychologia_sadowa/opinia_rodzinna',         label: 'Opiniowanie w sprawach rodzinnych',     file: 'wiki/psychologia_sadowa/opinia_rodzinna.md'         },
        { id: 'psychologia_sadowa/narzedzia_diagnostyczne', label: 'Narzedzia diagnostyczne (sadowe)',      file: 'wiki/psychologia_sadowa/narzedzia_diagnostyczne.md' },
        { id: 'psychologia_sadowa/etyka_opiniowania',       label: 'Etyka opiniowania sadowego',            file: 'wiki/psychologia_sadowa/etyka_opiniowania.md'       },
        { id: 'psychologia_sadowa/opiniowanie_nieletnich',  label: 'Opiniowanie nieletnich i dzieci',       file: 'wiki/psychologia_sadowa/opiniowanie_nieletnich.md'  },
        { id: 'psychologia_sadowa/biegly_a_sad',            label: 'Biegly, a sad - komunikacja',            file: 'wiki/psychologia_sadowa/biegly_a_sad.md'            },
      ]
    },
    { /* Ekrany, ksiazki, a natura */
      section: 'Ekrany, ksiazki, a natura',
      domainKey: 'ekrany_ksiazki_i_natura',
      items: [
        { id: 'ekrany_ksiazki_i_natura/wprowadzenie',             label: 'Ekrany, ksiazki i natura - wprow.',   file: 'wiki/ekrany_ksiazki_i_natura/wprowadzenie.md'              },
        { id: 'ekrany_ksiazki_i_natura/ekrany_funkcje_poznawcze', label: 'Ekrany, a funkcje poznawcze',          file: 'wiki/ekrany_ksiazki_i_natura/ekrany_funkcje_poznawcze.md'  },
        { id: 'ekrany_ksiazki_i_natura/smartfony_psychologia',    label: 'Smartfony, a psychologia',             file: 'wiki/ekrany_ksiazki_i_natura/smartfony_psychologia.md'     },
        { id: 'ekrany_ksiazki_i_natura/tablety_dzieci',           label: 'Tablety, a Rozwoj poznawczy dzieci',   file: 'wiki/ekrany_ksiazki_i_natura/tablety_dzieci.md'            },
        { id: 'ekrany_ksiazki_i_natura/telewizja_psychologia',    label: 'Telewizja, a funkcje psychiczne',      file: 'wiki/ekrany_ksiazki_i_natura/telewizja_psychologia.md'     },
        { id: 'ekrany_ksiazki_i_natura/czas_ekranowy',            label: 'Czas ekranowy, a zdrowie psychiczne',  file: 'wiki/ekrany_ksiazki_i_natura/czas_ekranowy.md'             },
        { id: 'ekrany_ksiazki_i_natura/czytanie_ksiazek',         label: 'Czytanie ksiazek, a funkcje psych.',   file: 'wiki/ekrany_ksiazki_i_natura/czytanie_ksiazek.md'          },
        { id: 'ekrany_ksiazki_i_natura/gleboke_czytanie',         label: 'Glebokie czytanie',                   file: 'wiki/ekrany_ksiazki_i_natura/gleboke_czytanie.md'          },
        { id: 'ekrany_ksiazki_i_natura/czytanie_fikcja_empatia',  label: 'Czytanie fikcji, a empatia',           file: 'wiki/ekrany_ksiazki_i_natura/czytanie_fikcja_empatia.md'   },
        { id: 'ekrany_ksiazki_i_natura/natura_psychologia',       label: 'Natura, a psychologia',                file: 'wiki/ekrany_ksiazki_i_natura/natura_psychologia.md'        },
        { id: 'ekrany_ksiazki_i_natura/las_shinrin_yoku',         label: 'Kapiel lesna (shinrin-yoku)',         file: 'wiki/ekrany_ksiazki_i_natura/las_shinrin_yoku.md'          },
        { id: 'ekrany_ksiazki_i_natura/gory_psychologia',         label: 'GBry i wedrBwki gBrskie',             file: 'wiki/ekrany_ksiazki_i_natura/gory_psychologia.md'          },
      ]
    },
    { /* Psychologia gier wideo */
      section: 'Psychologia gier wideo',
      domainKey: 'psychologia_gier',
      items: [
        { id: 'psychologia_gier/wprowadzenie',         label: 'Psychologia gier wideo - wprow.', file: 'wiki/psychologia_gier/wprowadzenie.md'          },
        { id: 'psychologia_gier/uzaleznienie_od_gier', label: 'Uzaleznienie od gier (IGD)',      file: 'wiki/psychologia_gier/uzaleznienie_od_gier.md'  },
        { id: 'psychologia_gier/agresja_a_gry',        label: 'Agresja, a gry wideo',             file: 'wiki/psychologia_gier/agresja_a_gry.md'         },
        { id: 'psychologia_gier/efekty_poznawcze',     label: 'Efekty poznawcze grania',         file: 'wiki/psychologia_gier/efekty_poznawcze.md'      },
        { id: 'psychologia_gier/motywacja_gracza',     label: 'Motywacja gracza',                file: 'wiki/psychologia_gier/motywacja_gracza.md'      },
        { id: 'psychologia_gier/flow_i_immersja',      label: 'Przeplyw (flow) i immersja',      file: 'wiki/psychologia_gier/flow_i_immersja.md'       },
        { id: 'psychologia_gier/gry_spolecznosciowe',  label: 'Gry wieloosobowe i aspekty spol.',file: 'wiki/psychologia_gier/gry_spolecznosciowe.md'   },
        { id: 'psychologia_gier/esport',               label: 'Esport i psychologia zawodnika',  file: 'wiki/psychologia_gier/esport.md'                },
        { id: 'psychologia_gier/gry_a_dzieci',         label: 'Gry wideo, a dzieci i nastolatki', file: 'wiki/psychologia_gier/gry_a_dzieci.md'          },
        { id: 'psychologia_gier/gender_w_grach',       label: 'Plec i tozsamosc w grach',        file: 'wiki/psychologia_gier/gender_w_grach.md'        },
        { id: 'psychologia_gier/gry_terapeutyczne',    label: 'Gry w terapii i rehabilitacji',   file: 'wiki/psychologia_gier/gry_terapeutyczne.md'     },
        { id: 'psychologia_gier/klasyfikacja_gier',    label: 'Klasyfikacja gier (PEGI, ESRB)',  file: 'wiki/psychologia_gier/klasyfikacja_gier.md'     },
      ]
    },
    { /* E-terapia */
      section: 'E-terapia',
      domainKey: 'e_terapia',
      items: [
        { id: 'e_terapia/wprowadzenie',                  label: 'E-terapia',              file: 'wiki/e_terapia/wprowadzenie.md'                  },
        { id: 'e_terapia/historia_e_terapii',            label: 'Historia e-terapii',                    file: 'wiki/e_terapia/historia_e_terapii.md'            },
        { id: 'e_terapia/terapia_online',                label: 'Terapia online (wideo, telefon, czat)',  file: 'wiki/e_terapia/terapia_online.md'                },
        { id: 'e_terapia/platformy_e_terapii',           label: 'Platformy i narzedzia e-terapii',       file: 'wiki/e_terapia/platformy_e_terapii.md'           },
        { id: 'e_terapia/skutecznosc_e_terapii',         label: 'Skutecznosc e-terapii',                 file: 'wiki/e_terapia/skutecznosc_e_terapii.md'         },
        { id: 'e_terapia/etyka_e_terapii',               label: 'Etyka e-terapii',                       file: 'wiki/e_terapia/etyka_e_terapii.md'               },
        { id: 'e_terapia/chatboty_terapeutyczne',        label: 'Chatboty terapeutyczne i AI',           file: 'wiki/e_terapia/chatboty_terapeutyczne.md'        },
        { id: 'e_terapia/aplikacje_zdrowia_psychicznego',label: 'Aplikacje zdrowia psychicznego (mHealth)', file: 'wiki/e_terapia/aplikacje_zdrowia_psychicznego.md' },
        { id: 'e_terapia/vr_terapia',                    label: 'Wirtualna rzeczywistosc (VR) w terapii',file: 'wiki/e_terapia/vr_terapia.md'                    },
        { id: 'e_terapia/e_terapia_dzieci',              label: 'E-terapia dzieci i mlodziezy',          file: 'wiki/e_terapia/e_terapia_dzieci.md'              },
        { id: 'e_terapia/dostepnosc_cyfrowa',            label: 'Dostepnosc i wykluczenie cyfrowe',      file: 'wiki/e_terapia/dostepnosc_cyfrowa.md'            },
        { id: 'e_terapia/przyszlosc_e_terapii',          label: 'Przyszlosc e-terapii',                  file: 'wiki/e_terapia/przyszlosc_e_terapii.md'          },
      ]
    },
    { /* Psychologia sztucznej inteligencji */
      section: 'Psychologia sztucznej inteligencji',
      domainKey: 'psychologia_ai',
      items: [
        { id: 'psychologia_ai/wprowadzenie',         label: 'Psychologia AI',             file: 'wiki/psychologia_ai/wprowadzenie.md'           },
        { id: 'psychologia_ai/historia_ai',          label: 'Historia AI i psychologia',                 file: 'wiki/psychologia_ai/historia_ai.md'            },
        { id: 'psychologia_ai/czlowiek_a_ai',        label: 'Interakcja czlowiek-AI',                    file: 'wiki/psychologia_ai/czlowiek_a_ai.md'          },
        { id: 'psychologia_ai/zaufanie_do_ai',       label: 'Zaufanie do sztucznej inteligencji',        file: 'wiki/psychologia_ai/zaufanie_do_ai.md'         },
        { id: 'psychologia_ai/uprzedzenia_ai',       label: 'Uprzedzenia i bledy poznawcze w AI',        file: 'wiki/psychologia_ai/uprzedzenia_ai.md'         },
        { id: 'psychologia_ai/etyka_ai',             label: 'Etyka AI z perspektywy psychologicznej',    file: 'wiki/psychologia_ai/etyka_ai.md'               },
        { id: 'psychologia_ai/ai_emocje',            label: 'AI, a emocje i rozumienie emocji',           file: 'wiki/psychologia_ai/ai_emocje.md'              },
        { id: 'psychologia_ai/decyzje_ai',           label: 'AI, a podejmowanie decyzji',                 file: 'wiki/psychologia_ai/decyzje_ai.md'             },
        { id: 'psychologia_ai/ai_w_terapii',         label: 'AI w psychoterapii i diagnostyce',          file: 'wiki/psychologia_ai/ai_w_terapii.md'           },
        { id: 'psychologia_ai/ai_poznawcze',         label: 'Poznawcze aspekty dzialania AI',            file: 'wiki/psychologia_ai/ai_poznawcze.md'           },
        { id: 'psychologia_ai/antropomorfizacja_ai', label: 'Antropomorfizacja AI',                      file: 'wiki/psychologia_ai/antropomorfizacja_ai.md'   },
        { id: 'psychologia_ai/przyszlosc_ai',        label: 'Przyszlosc relacji czlowiek-AI',            file: 'wiki/psychologia_ai/przyszlosc_ai.md'          },
      ]
    },
    { /* Psychologia technologii i dobrostan cyfrowy */
      section: 'Psychologia technologii i dobrostan cyfrowy',
      domainKey: 'psychologia_technologii',
      items: [
        { id: 'psychologia_technologii/technostres', label: 'Technostres - artykul naukowy', file: 'wiki/psychologia_technologii/technostres.md' },
        { id: 'psychologia_technologii/zmeczenie_cyfrowe', label: 'Zmeczenie cyfrowe i przeciazenie informacyjne', file: 'wiki/psychologia_technologii/zmeczenie_cyfrowe.md' },
        { id: 'psychologia_technologii/fomo_i_nomofobia', label: 'FOMO i nomofobia', file: 'wiki/psychologia_technologii/fomo_i_nomofobia.md' },
        { id: 'psychologia_technologii/algorytmy_a_samoocena', label: 'Algorytmy personalizacji, a samoocena', file: 'wiki/psychologia_technologii/algorytmy_a_samoocena.md' },
        { id: 'psychologia_technologii/higiena_cyfrowa', label: 'Higiena cyfrowa i profilaktyka przeciazenia', file: 'wiki/psychologia_technologii/higiena_cyfrowa.md' },
        { id: 'psychologia_technologii/technologia_w_pracy', label: 'Technologia w pracy: granice, kontrola i autonomia', file: 'wiki/psychologia_technologii/technologia_w_pracy.md' },
        { id: 'psychologia_technologii/technologia_a_sen', label: 'Technologia, a sen i regeneracja psychiczna', file: 'wiki/psychologia_technologii/technologia_a_sen.md' },
        { id: 'psychologia_technologii/psychoedukacja_rodzinna', label: 'Psychoedukacja rodzinna w erze ekranBw', file: 'wiki/psychologia_technologii/psychoedukacja_rodzinna.md' },
        { id: 'psychologia_technologii/zdrada_technologii', label: 'Zdrada technologii', file: 'wiki/psychologia_technologii/zdrada_technologii.md' },
        { id: 'dla_studentow/psycholog_w_it', label: 'Psycholog w IT', file: 'wiki/dla_studentow/psycholog_w_it.md' },
        { id: 'dla_studentow/psycholog_w_it_kompetencje_mierniki_i_portfolio', label: 'Psycholog w IT - kompetencje, mierniki i portfolio', file: 'wiki/dla_studentow/psycholog_w_it_kompetencje_mierniki_i_portfolio.md' },
      ]
    },
    { /* Robotyka afektywna i kognitywistyka */
      section: 'Robotyka afektywna i kognitywistyka',
      domainKey: 'robotyka_afektywna',
      items: [
        { id: 'robotyka_afektywna/wprowadzenie',                   label: 'Robotyka afektywna',         file: 'wiki/robotyka_afektywna/wprowadzenie.md'                    },
        { id: 'robotyka_afektywna/historia_robotyki_afektywnej',   label: 'Historia robotyki afektywnej',              file: 'wiki/robotyka_afektywna/historia_robotyki_afektywnej.md'    },
        { id: 'robotyka_afektywna/emocje_robotow',                 label: 'Emocje w robotach',                         file: 'wiki/robotyka_afektywna/emocje_robotow.md'                  },
        { id: 'robotyka_afektywna/dolina_niesamowitosci',          label: 'Dolina niesamowitosci',                     file: 'wiki/robotyka_afektywna/dolina_niesamowitosci.md'           },
        { id: 'robotyka_afektywna/roboty_spoleczne',               label: 'Roboty spoleczne i HRI',                    file: 'wiki/robotyka_afektywna/roboty_spoleczne.md'                },
        { id: 'robotyka_afektywna/kognitywistyka_obliczeniowa',    label: 'Kognitywistyka obliczeniowa',               file: 'wiki/robotyka_afektywna/kognitywistyka_obliczeniowa.md'     },
        { id: 'robotyka_afektywna/percepcja_robotow',              label: 'Percepcja i ocena robotBw przez ludzi',     file: 'wiki/robotyka_afektywna/percepcja_robotow.md'               },
        { id: 'robotyka_afektywna/roboty_w_opiece',                label: 'Roboty w opiece i terapii',                 file: 'wiki/robotyka_afektywna/roboty_w_opiece.md'                 },
        { id: 'robotyka_afektywna/swiadomosc_maszyn',              label: 'lawiadomosc i podmiotowosc maszyn',          file: 'wiki/robotyka_afektywna/swiadomosc_maszyn.md'               },
        { id: 'robotyka_afektywna/wspolpraca_czlowiek_robot',      label: 'WspBlpraca czlowiekdz robot (HRC)',            file: 'wiki/robotyka_afektywna/wspolpraca_czlowiek_robot.md'       },
        { id: 'robotyka_afektywna/interfejsy_mozg_maszyna',        label: 'Interfejsy mozgdz maszyna (BCI)',              file: 'wiki/robotyka_afektywna/interfejsy_mozg_maszyna.md'         },
        { id: 'robotyka_afektywna/przyszlosc_robotyki_afektywnej', label: 'Przyszlosc robotyki afektywnej',            file: 'wiki/robotyka_afektywna/przyszlosc_robotyki_afektywnej.md'  },
      ]
    },
    { /* Seminarium dyplomowe */
      section: 'Seminarium dyplomowe',
      domainKey: 'seminarium_dyplomowe',
      items: [
        { id: 'seminarium_dyplomowe/wprowadzenie',             label: 'Seminarium dyplomowe',    file: 'wiki/seminarium_dyplomowe/wprowadzenie.md'             },
        { id: 'seminarium_dyplomowe/struktura_pracy',          label: 'Struktura pracy magisterskiej',          file: 'wiki/seminarium_dyplomowe/struktura_pracy.md'          },
        { id: 'seminarium_dyplomowe/przeglad_literatury',      label: 'Przeglad literatury naukowej',           file: 'wiki/seminarium_dyplomowe/przeglad_literatury.md'      },
        { id: 'seminarium_dyplomowe/metodologia_badan',        label: 'Metodologia badal psychologicznych',     file: 'wiki/seminarium_dyplomowe/metodologia_badan.md'        },
        { id: 'seminarium_dyplomowe/pomiary_psychologiczne',   label: 'Zasady prowadzenia pomiarBw',            file: 'wiki/seminarium_dyplomowe/pomiary_psychologiczne.md'   },
        { id: 'seminarium_dyplomowe/narzedzia_badawcze',       label: 'Narzedzia badawcze i kwestionariusze',  file: 'wiki/seminarium_dyplomowe/narzedzia_badawcze.md'       },
        { id: 'seminarium_dyplomowe/analizy_statystyczne',     label: 'Analizy statystyczne',                  file: 'wiki/seminarium_dyplomowe/analizy_statystyczne.md'     },
        { id: 'seminarium_dyplomowe/etyka_badan',              label: 'Etyka badal naukowych',                 file: 'wiki/seminarium_dyplomowe/etyka_badan.md'              },
        { id: 'seminarium_dyplomowe/bledy_badawcze',           label: 'Bledy badawcze - czego unikac',         file: 'wiki/seminarium_dyplomowe/bledy_badawcze.md'           },
        { id: 'seminarium_dyplomowe/opis_wynikow',             label: 'Pisanie i interpretacja wynikBw',       file: 'wiki/seminarium_dyplomowe/opis_wynikow.md'             },
        { id: 'seminarium_dyplomowe/obrona_pracy',             label: 'Obrona pracy magisterskiej',            file: 'wiki/seminarium_dyplomowe/obrona_pracy.md'             },
        { id: 'seminarium_dyplomowe/dobre_praktyki',           label: 'Dobre praktyki w pisaniu pracy',        file: 'wiki/seminarium_dyplomowe/dobre_praktyki.md'           },
        { id: 'dla_studentow/wystapienia_publiczne_autoprezentacja', label: 'Wystapienia publiczne i autoprezentacja', file: 'wiki/dla_studentow/wystapienia_publiczne_autoprezentacja.md' },
        { id: 'dla_studentow/wystapienia_publiczne_trudne_pytania_i_q_a', label: 'Wystapienia publiczne - trudne pytania i Q&A', file: 'wiki/dla_studentow/wystapienia_publiczne_trudne_pytania_i_q_a.md' },
      ]
    },
    { /* Eksperyment psychologiczny */
      section: 'Eksperyment psychologiczny',
      domainKey: 'eksperyment_psychologiczny',
      items: [
        { id: 'eksperyment_psychologiczny/wprowadzenie',              label: 'Wprowadzenie do metod eksperymentalnych',   file: 'wiki/eksperyment_psychologiczny/wprowadzenie.md'              },
        { id: 'eksperyment_psychologiczny/problemy_i_hipotezy',       label: 'Problem badawczy i hipotezy',                file: 'wiki/eksperyment_psychologiczny/problemy_i_hipotezy.md'       },
        { id: 'eksperyment_psychologiczny/operacjonalizacja',         label: 'Operacjonalizacja zmiennych',                file: 'wiki/eksperyment_psychologiczny/operacjonalizacja.md'         },
        { id: 'eksperyment_psychologiczny/proby_i_rekrutacja',        label: 'DobBr prBby i rekrutacja',                   file: 'wiki/eksperyment_psychologiczny/proby_i_rekrutacja.md'        },
        { id: 'eksperyment_psychologiczny/etyka_i_zgoda',             label: 'Etyka badania i swiadoma zgoda',             file: 'wiki/eksperyment_psychologiczny/etyka_i_zgoda.md'             },
        { id: 'eksperyment_psychologiczny/obserwacja_psychologiczna', label: 'Obserwacja psychologiczna w praktyce',       file: 'wiki/eksperyment_psychologiczny/obserwacja_psychologiczna.md' },
        { id: 'eksperyment_psychologiczny/protokol_i_pilotaz',        label: 'ProtokBl badania i pilotaz',                 file: 'wiki/eksperyment_psychologiczny/protokol_i_pilotaz.md'        },
        { id: 'eksperyment_psychologiczny/prowadzenie_eksperymentu',  label: 'Prowadzenie sesji eksperymentalnej',         file: 'wiki/eksperyment_psychologiczny/prowadzenie_eksperymentu.md'  },
        { id: 'eksperyment_psychologiczny/jakosc_danych',             label: 'Kontrola jakosci i zarzadzanie danymi',      file: 'wiki/eksperyment_psychologiczny/jakosc_danych.md'             },
        { id: 'eksperyment_psychologiczny/analiza_i_wnioskowanie',    label: 'Analiza danych i wnioskowanie',              file: 'wiki/eksperyment_psychologiczny/analiza_i_wnioskowanie.md'    },
        { id: 'eksperyment_psychologiczny/replikacja_i_otwarta_nauka',label: 'Replikacja i otwarta nauka',                 file: 'wiki/eksperyment_psychologiczny/replikacja_i_otwarta_nauka.md'},
        { id: 'eksperyment_psychologiczny/raportowanie_wynikow',      label: 'Raportowanie wynikBw i ograniczel',          file: 'wiki/eksperyment_psychologiczny/raportowanie_wynikow.md'      },
      ]
    },
    { /* Psychologia kliniczna dziecka */
      section: 'Wstep do psychologii klinicznej dziecka',
      domainKey: 'psychologia_kliniczna_dziecka',
      items: [
        { id: 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka', label: 'Czym jest psychologia kliniczna dziecka?', file: 'wiki/psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka.md' },
        { id: 'psychologia_kliniczna_dziecka/norma_rozwojowa_a_objaw', label: 'Norma rozwojowa, a objaw kliniczny', file: 'wiki/psychologia_kliniczna_dziecka/norma_rozwojowa_a_objaw.md' },
        { id: 'psychologia_kliniczna_dziecka/wywiad_kliniczny_z_dzieckiem_i_rodzina', label: 'Wywiad kliniczny z dzieckiem i rodzina', file: 'wiki/psychologia_kliniczna_dziecka/wywiad_kliniczny_z_dzieckiem_i_rodzina.md' },
        { id: 'psychologia_kliniczna_dziecka/czynniki_ryzyka_i_ochronne', label: 'Czynniki ryzyka i ochronne', file: 'wiki/psychologia_kliniczna_dziecka/czynniki_ryzyka_i_ochronne.md' },
        { id: 'psychologia_kliniczna_dziecka/regulacja_emocji_i_samokontrola', label: 'Regulacja emocji i samokontrola', file: 'wiki/psychologia_kliniczna_dziecka/regulacja_emocji_i_samokontrola.md' },
        { id: 'psychologia_kliniczna_dziecka/przywiazanie_i_relacje_opiekuncze', label: 'Przywiazanie i relacje opiekulcze', file: 'wiki/psychologia_kliniczna_dziecka/przywiazanie_i_relacje_opiekuncze.md' },
        { id: 'psychologia_kliniczna_dziecka/diagnoza_roznicowa_neurorozwojowa', label: 'Diagnoza rBznicowa: emocje vs neurorozwoj', file: 'wiki/psychologia_kliniczna_dziecka/diagnoza_roznicowa_neurorozwojowa.md' },
        { id: 'psychologia_kliniczna_dziecka/formulowanie_przypadku_4p', label: 'Formulowanie przypadku (4P)', file: 'wiki/psychologia_kliniczna_dziecka/formulowanie_przypadku_4p.md' },
        { id: 'psychologia_kliniczna_dziecka/interwencje_rodzicielskie_pmt', label: 'Interwencje rodzicielskie (PMT)', file: 'wiki/psychologia_kliniczna_dziecka/interwencje_rodzicielskie_pmt.md' },
        { id: 'psychologia_kliniczna_dziecka/cbt_dzieci_i_mlodziez', label: 'CoT dla dzieci i mlodziezy', file: 'wiki/psychologia_kliniczna_dziecka/cbt_dzieci_i_mlodziez.md' },
        { id: 'psychologia_kliniczna_dziecka/wspolpraca_rodzina_szkola_system', label: 'Wspolpraca rodzinadz szkoladz system', file: 'wiki/psychologia_kliniczna_dziecka/wspolpraca_rodzina_szkola_system.md' },
        { id: 'psychologia_kliniczna_dziecka/bledy_diagnostyczne_i_iatrogenia', label: 'Bledy diagnostyczne i jatrogenia', file: 'wiki/psychologia_kliniczna_dziecka/bledy_diagnostyczne_i_iatrogenia.md' },
      ]
    },
    { /* Reagowanie na krytyke */
      section: 'Reagowanie na krytyke',
      domainKey: 'reagowanie_na_krytyke',
      items: [
        { id: 'reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna', label: 'Krytyka, a informacja zwrotna - rozroznienie', file: 'wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md' },
        { id: 'reagowanie_na_krytyke/style_reagowania_na_krytyke', label: 'Style reagowania na krytyke', file: 'wiki/reagowanie_na_krytyke/style_reagowania_na_krytyke.md' },
        { id: 'reagowanie_na_krytyke/neurobiologia_stresu_oceny', label: 'Neurobiologia stresu oceny', file: 'wiki/reagowanie_na_krytyke/neurobiologia_stresu_oceny.md' },
        { id: 'reagowanie_na_krytyke/schematy_poznawcze_i_znieksztalcenia', label: 'Schematy poznawcze i znieksztalcenia', file: 'wiki/reagowanie_na_krytyke/schematy_poznawcze_i_znieksztalcenia.md' },
        { id: 'reagowanie_na_krytyke/mentalizacja_i_intencje_nadawcy', label: 'Mentalizacja i intencje nadawcy', file: 'wiki/reagowanie_na_krytyke/mentalizacja_i_intencje_nadawcy.md' },
        { id: 'reagowanie_na_krytyke/granice_i_asertywnosc', label: 'Granice i asertywnosc', file: 'wiki/reagowanie_na_krytyke/granice_i_asertywnosc.md' },
        { id: 'reagowanie_na_krytyke/model_sbi_nvc_w_praktyce', label: 'Model SBI i NVC w praktyce', file: 'wiki/reagowanie_na_krytyke/model_sbi_nvc_w_praktyce.md' },
        { id: 'reagowanie_na_krytyke/samowspolczucie_i_act', label: 'Samowspolczucie i ACT', file: 'wiki/reagowanie_na_krytyke/samowspolczucie_i_act.md' },
        { id: 'reagowanie_na_krytyke/mikrointerwencje_w_czasie_rzeczywistym', label: 'Mikrointerwencje w czasie rzeczywistym', file: 'wiki/reagowanie_na_krytyke/mikrointerwencje_w_czasie_rzeczywistym.md' },
        { id: 'reagowanie_na_krytyke/trudne_rozmowy_w_pracy', label: 'Trudne rozmowy w pracy', file: 'wiki/reagowanie_na_krytyke/trudne_rozmowy_w_pracy.md' },
        { id: 'reagowanie_na_krytyke/najczestsze_bledy_po_krytyce', label: 'Najczestsze bledy po krytyce', file: 'wiki/reagowanie_na_krytyke/najczestsze_bledy_po_krytyce.md' },
        { id: 'reagowanie_na_krytyke/plan_30_dni_trening_odpornosci', label: 'Plan 30 dni treningu odpornosci', file: 'wiki/reagowanie_na_krytyke/plan_30_dni_trening_odpornosci.md' },
        { id: 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych', label: 'Jak nie brac do siebie opinii innych', file: 'wiki/reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych.md' },
      ]
    },
    { /* Psychologia nadmiernego jedzenia */
      section: 'Psychologia nadmiernego jedzenia',
      domainKey: 'psychologia_nadmiernego_jedzenia',
      items: [
        { id: 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie', label: 'Czym jest nadmierne jedzenie?', file: 'wiki/psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie.md' },
        { id: 'psychologia_nadmiernego_jedzenia/neurobiologia_nagrody_i_glodu', label: 'Neurobiologia nagrody i glodu', file: 'wiki/psychologia_nadmiernego_jedzenia/neurobiologia_nagrody_i_glodu.md' },
        { id: 'psychologia_nadmiernego_jedzenia/regulacja_emocji_i_jedzenie', label: 'Regulacja emocji, a jedzenie', file: 'wiki/psychologia_nadmiernego_jedzenia/regulacja_emocji_i_jedzenie.md' },
        { id: 'psychologia_nadmiernego_jedzenia/stres_i_jedzenie_kompulsywne', label: 'Stres i jedzenie kompulsywne', file: 'wiki/psychologia_nadmiernego_jedzenia/stres_i_jedzenie_kompulsywne.md' },
        { id: 'psychologia_nadmiernego_jedzenia/srodowisko_zywieniowe_i_nawyki', label: 'larodowisko zywieniowe i nawyki', file: 'wiki/psychologia_nadmiernego_jedzenia/srodowisko_zywieniowe_i_nawyki.md' },
        { id: 'psychologia_nadmiernego_jedzenia/obraz_ciala_i_samokrytycyzm', label: 'Obraz ciala i samokrytycyzm', file: 'wiki/psychologia_nadmiernego_jedzenia/obraz_ciala_i_samokrytycyzm.md' },
        { id: 'psychologia_nadmiernego_jedzenia/rodzinne_wzorce_jedzenia', label: 'Rodzinne wzorce jedzenia', file: 'wiki/psychologia_nadmiernego_jedzenia/rodzinne_wzorce_jedzenia.md' },
        { id: 'psychologia_nadmiernego_jedzenia/diagnoza_roznicowa_bed_bulimia', label: 'Diagnoza roznicowa: BED i bulimia', file: 'wiki/psychologia_nadmiernego_jedzenia/diagnoza_roznicowa_bed_bulimia.md' },
        { id: 'psychologia_nadmiernego_jedzenia/interwencje_poznawczo_behawioralne', label: 'Interwencje poznawczo-behawioralne', file: 'wiki/psychologia_nadmiernego_jedzenia/interwencje_poznawczo_behawioralne.md' },
        { id: 'psychologia_nadmiernego_jedzenia/mindfulness_i_regulacja_apetytu', label: 'Mindfulness i regulacja apetytu', file: 'wiki/psychologia_nadmiernego_jedzenia/mindfulness_i_regulacja_apetytu.md' },
        { id: 'psychologia_nadmiernego_jedzenia/farmakoterapia_i_wskazania', label: 'Farmakoterapia i wskazania', file: 'wiki/psychologia_nadmiernego_jedzenia/farmakoterapia_i_wskazania.md' },
        { id: 'psychologia_nadmiernego_jedzenia/profilaktyka_nawrotow', label: 'Profilaktyka nawrotow', file: 'wiki/psychologia_nadmiernego_jedzenia/profilaktyka_nawrotow.md' },
      ]
    },
    { /* Instytucje pomocy dziecku i rodzinie */
      section: 'Instytucje pomocy dziecku i rodzinie',
      domainKey: 'instytucje_wsparcia_dziecka_i_rodziny',
      items: [
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/mapa_systemu_wsparcia', label: 'Mapa systemu wsparcia', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/mapa_systemu_wsparcia.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/osrodek_pomocy_spolecznej_i_praca_socjalna', label: 'OPS i praca socjalna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/osrodek_pomocy_spolecznej_i_praca_socjalna.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/poradnia_psychologiczno_pedagogiczna', label: 'Poradnia psychologiczno-pedagogiczna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/poradnia_psychologiczno_pedagogiczna.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/piecza_zastepcza_i_asysta_rodziny', label: 'Piecza zastepcza i asysta rodziny', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/piecza_zastepcza_i_asysta_rodziny.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/interwencja_kryzysowa_i_niebieska_karta', label: 'Interwencja kryzysowa i dz ~Niebieska Kartadz e', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/interwencja_kryzysowa_i_niebieska_karta.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/sad_rodzinny_i_kurator', label: 'Sad rodzinny i kurator', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/sad_rodzinny_i_kurator.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/ochrona_zdrowia_psychicznego_dzieci', label: 'Ochrona zdrowia psychicznego dzieci', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/ochrona_zdrowia_psychicznego_dzieci.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/szkola_jako_instytucja_wsparcia', label: 'Szkola jako instytucja wsparcia', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/szkola_jako_instytucja_wsparcia.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/ngo_i_programy_srodowiskowe', label: 'NGO i programy srodowiskowe', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/ngo_i_programy_srodowiskowe.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/koordynacja_miedzyinstytucjonalna', label: 'Koordynacja miedzyinstytucjonalna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/koordynacja_miedzyinstytucjonalna.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/prawa_dziecka_i_standardy_ochrony', label: 'Prawa dziecka i standardy ochrony', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/prawa_dziecka_i_standardy_ochrony.md' },
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/bledy_systemowe_i_dobre_praktyki', label: 'Bledy systemowe i dobre praktyki', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/bledy_systemowe_i_dobre_praktyki.md' },
      ]
    },
    { /* Resocjalizacja */
      section: 'Resocjalizacja',
      domainKey: 'resocjalizacja',
      items: [
        { id: 'resocjalizacja/podstawy_resocjalizacji', label: 'Podstawy resocjalizacji', file: 'wiki/resocjalizacja/podstawy_resocjalizacji.md' },
        { id: 'resocjalizacja/diagnoza_ryzyka_i_potrzeb', label: 'Diagnoza ryzyka i potrzeb', file: 'wiki/resocjalizacja/diagnoza_ryzyka_i_potrzeb.md' },
        { id: 'resocjalizacja/model_rnr_w_praktyce', label: 'Model RNR w praktyce', file: 'wiki/resocjalizacja/model_rnr_w_praktyce.md' },
        { id: 'resocjalizacja/desistance_i_zmiana_tozsamosci', label: 'Desistance i zmiana tozsamosci', file: 'wiki/resocjalizacja/desistance_i_zmiana_tozsamosci.md' },
        { id: 'resocjalizacja/resocjalizacja_nieletnich', label: 'Resocjalizacja nieletnich', file: 'wiki/resocjalizacja/resocjalizacja_nieletnich.md' },
        { id: 'resocjalizacja/praca_z_uzaleznieniami_w_resocjalizacji', label: 'Praca z uzaleznieniami', file: 'wiki/resocjalizacja/praca_z_uzaleznieniami_w_resocjalizacji.md' },
        { id: 'resocjalizacja/edukacja_i_aktywizacja_zawodowa', label: 'Edukacja i aktywizacja zawodowa', file: 'wiki/resocjalizacja/edukacja_i_aktywizacja_zawodowa.md' },
        { id: 'resocjalizacja/trening_umiejetnosci_spolecznych_i_samokontroli', label: 'Trening umiejetnosci spolecznych i samokontroli', file: 'wiki/resocjalizacja/trening_umiejetnosci_spolecznych_i_samokontroli.md' },
        { id: 'resocjalizacja/sprawiedliwosc_naprawcza_mediacje', label: 'Sprawiedliwosc naprawcza i mediacje', file: 'wiki/resocjalizacja/sprawiedliwosc_naprawcza_mediacje.md' },
        { id: 'resocjalizacja/readaptacja_postpenitencjarna', label: 'Readaptacja postpenitencjarna', file: 'wiki/resocjalizacja/readaptacja_postpenitencjarna.md' },
        { id: 'resocjalizacja/etyka_i_prawa_czlowieka', label: 'Etyka i prawa czlowieka', file: 'wiki/resocjalizacja/etyka_i_prawa_czlowieka.md' },
        { id: 'resocjalizacja/ewaluacja_skutecznosci_programow', label: 'Ewaluacja skutecznosci programow', file: 'wiki/resocjalizacja/ewaluacja_skutecznosci_programow.md' },
      ]
    },
    { /* Somatic Experiencing */
      section: 'Somatic Experiencing',
      domainKey: 'somatic_experiencing',
      items: [
        { id: 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego', label: 'Wprowadzenie do Somatic Experiencing', file: 'wiki/doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego.md' },
        { id: 'somatic_experiencing/neurofizjologia_traumy_i_autonomiczny_uklad_nerwowy', label: 'Neurofizjologia traumy i autonomiczny uklad nerwowy', file: 'wiki/doswiadczenie_somatyczne/neurofizjologia_traumy_i_autonomiczny_uklad_nerwowy.md' },
        { id: 'somatic_experiencing/titracja_i_pendulacja', label: 'Titracja i pendulacja', file: 'wiki/doswiadczenie_somatyczne/titracja_i_pendulacja.md' },
        { id: 'somatic_experiencing/zasoby_i_poczucie_bezpieczenstwa', label: 'Zasoby i poczucie bezpieczelstwa', file: 'wiki/doswiadczenie_somatyczne/zasoby_i_poczucie_bezpieczenstwa.md' },
        { id: 'somatic_experiencing/orientacja_i_uziemienie_w_somatic_experiencing', label: 'Orientacja i uziemienie w Somatic Experiencing', file: 'wiki/doswiadczenie_somatyczne/orientacja_i_uziemienie_w_somatic_experiencing.md' },
        { id: 'somatic_experiencing/dysocjacja_i_zawazenie_okna_tolerancji', label: 'Dysocjacja i zawezenie okna tolerancji', file: 'wiki/doswiadczenie_somatyczne/dysocjacja_i_zawazenie_okna_tolerancji.md' },
        { id: 'somatic_experiencing/reakcja_obronna_i_dokonczenie_ruchu', label: 'Reakcja obronna i dokolczenie ruchu', file: 'wiki/doswiadczenie_somatyczne/reakcja_obronna_i_dokonczenie_ruchu.md' },
        { id: 'somatic_experiencing/trauma_zlozona_i_relacja_terapeutyczna', label: 'Trauma zlozona i relacja terapeutyczna', file: 'wiki/doswiadczenie_somatyczne/trauma_zlozona_i_relacja_terapeutyczna.md' },
        { id: 'somatic_experiencing/interocepcja_i_propriocepcja_w_somatic_experiencing', label: 'Interocepcja i propriocepcja w Somatic Experiencing', file: 'wiki/doswiadczenie_somatyczne/interocepcja_i_propriocepcja_w_somatic_experiencing.md' },
        { id: 'somatic_experiencing/granice_zgoda_i_tempo_pracy', label: 'Granice, zgoda i tempo pracy', file: 'wiki/doswiadczenie_somatyczne/granice_zgoda_i_tempo_pracy.md' },
        { id: 'somatic_experiencing/przewlekly_bol_i_objawy_somatyczne', label: 'Przewlekly bol i objawy somatyczne', file: 'wiki/doswiadczenie_somatyczne/przewlekly_bol_i_objawy_somatyczne.md' },
        { id: 'somatic_experiencing/integracja_z_innymi_terapiami_traumy', label: 'Integracja Somatic Experiencing z innymi terapiami traumy', file: 'wiki/doswiadczenie_somatyczne/integracja_z_innymi_terapiami_traumy.md' },
          { id: 'somatic_experiencing/stabilizacja_i_sekwencjonowanie', label: 'Stabilizacja i sekwencjonowanie w Somatic Experiencing', file: 'wiki/doswiadczenie_somatyczne/stabilizacja_i_sekwencjonowanie.md' },
        ]
    },
    { /* Systemy rodzinne */
      section: 'Systemy rodzinne',
      domainKey: 'systemy_rodzinne',
      items: [
        { id: 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej', label: 'Wprowadzenie do terapii systemowej', file: 'wiki/systemy_rodzinne/wprowadzenie_do_terapii_systemowej.md' },
        { id: 'systemy_rodzinne/model_bowena', label: 'Model Bowena', file: 'wiki/systemy_rodzinne/model_bowena.md' },
        { id: 'systemy_rodzinne/terapia_strukturalna_minuchin', label: 'Terapia strukturalna Minuchin', file: 'wiki/systemy_rodzinne/terapia_strukturalna_minuchin.md' },
        { id: 'systemy_rodzinne/internal_family_systems_ifs', label: 'Internal Family Systems (IFS)', file: 'wiki/systemy_rodzinne/internal_family_systems_ifs.md' },
        { id: 'systemy_rodzinne/koalicje_i_trojkaty', label: 'Koalicje i trojkaty', file: 'wiki/systemy_rodzinne/koalicje_i_trojkaty.md' },
        { id: 'systemy_rodzinne/granice_subsystemow', label: 'Granice subsystemow', file: 'wiki/systemy_rodzinne/granice_subsystemow.md' },
        { id: 'systemy_rodzinne/genogram_i_przekaz_miedzygeneracyjny', label: 'Genogram i przekaz miedzygeneracyjny', file: 'wiki/systemy_rodzinne/genogram_i_przekaz_miedzygeneracyjny.md' },
        { id: 'systemy_rodzinne/lojalnosci_rodzinne', label: 'Lojalnosci rodzinne', file: 'wiki/systemy_rodzinne/lojalnosci_rodzinne.md' },
        { id: 'systemy_rodzinne/role_w_systemie_rodzinnym', label: 'Role w systemie rodzinnym', file: 'wiki/systemy_rodzinne/role_w_systemie_rodzinnym.md' },
        { id: 'systemy_rodzinne/rodzina_z_uzaleznieniem', label: 'Rodzina z uzaleznieniem', file: 'wiki/systemy_rodzinne/rodzina_z_uzaleznieniem.md' },
        { id: 'systemy_rodzinne/trauma_relacyjna_i_system', label: 'Trauma relacyjna i system', file: 'wiki/systemy_rodzinne/trauma_relacyjna_i_system.md' },
        { id: 'systemy_rodzinne/terapia_narracyjna', label: 'Terapia narracyjna', file: 'wiki/systemy_rodzinne/terapia_narracyjna.md' },
        { id: 'systemy_rodzinne/cykl_zycia_rodziny', label: 'Cykl zycia rodziny', file: 'wiki/systemy_rodzinne/cykl_zycia_rodziny.md' },
        { id: 'systemy_rodzinne/zastosowania_kliniczne', label: 'Zastosowania kliniczne', file: 'wiki/systemy_rodzinne/zastosowania_kliniczne.md' },
      ]
    },
    
    { /* Encyklopedie */
      section: 'Encyklopedie',
      domainKey: 'wiki-index',
      items: [
        { id: 'wiki-index/neuropsychologia',     label: 'WIKI - Neuropsychologia',                   wiki: 'neuropsychologia'     },
        { id: 'wiki-index/kliniczna',            label: 'WIKI - Psych. kliniczna',                   wiki: 'kliniczna'            },
        { id: 'wiki-index/poznawcza',            label: 'WIKI - Psych. poznawcza',                   wiki: 'poznawcza'            },
        { id: 'wiki-index/spoleczna',            label: 'WIKI - Psych. spoleczna',                   wiki: 'spoleczna'            },
        { id: 'wiki-index/kulturowa',            label: 'WIKI - Psych. kulturowa',                   wiki: 'kulturowa'            },
        { id: 'wiki-index/rozwojowa',            label: 'WIKI - Psych. rozwojowa',                   wiki: 'rozwojowa'            },
        { id: 'wiki-index/uzaleznienia',         label: 'WIKI - Uzaleznienia',                       wiki: 'uzaleznienia'         },
        { id: 'wiki-index/relacje',              label: 'WIKI - Relacje i zwiazki',                  wiki: 'relacje'              },
        { id: 'wiki-index/diagnoza',             label: 'WIKI - Diagnoza psychologiczna',            wiki: 'diagnoza'             },
        { id: 'wiki-index/biologia',             label: 'WIKI - Biologia zachowania',                wiki: 'biologia'             },
        { id: 'wiki-index/roznice_ind',          label: 'WIKI - Roznice indywidualne',               wiki: 'roznice_ind'          },
        { id: 'wiki-index/terapie_artystyczne',  label: 'WIKI - Terapie artystyczne',                wiki: 'terapie_artystyczne'  },
        { id: 'wiki-index/etyka',                label: 'WIKI - Etyka zawodowa',                     wiki: 'etyka'                },
        { id: 'wiki-index/slownik',              label: 'WIKI - Slownik terminow',                   wiki: 'slownik'              },
        { id: 'wiki-index/zdrowie',              label: 'WIKI - Psych. zdrowia',                     wiki: 'zdrowie'              },
        { id: 'wiki-index/psychosomatics',       label: 'WIKI - Psychosomatyka',                     wiki: 'psychosomatyka'       },
        { id: 'wiki-index/niepelnosprawnosc',    label: 'WIKI - Psych. niepelnosprawnosci',          wiki: 'niepelnosprawnosc'    },
        { id: 'wiki-index/geropsychology',       label: 'WIKI - Psych. osob starszych',              wiki: 'geropsychologia'       },
        { id: 'wiki-index/gry_wideo',            label: 'WIKI - Psych. gier wideo',                  wiki: 'gry_wideo'            },
        { id: 'wiki-index/odpornosc_mobbing',    label: 'WIKI - Odpornosc, mobbing, wypalenie',      wiki: 'odpornosc_mobbing'    },
        { id: 'wiki-index/media_natura',         label: 'WIKI - Ekrany, ksiazki i natura',           wiki: 'media_natura'         },
        { id: 'wiki-index/psych_pozytywna',      label: 'WIKI - Psychologia pozytywna',              wiki: 'psych_pozytywna'      },
        { id: 'wiki-index/psych_ai',             label: 'WIKI - Psychologia AI',                     wiki: 'psych_ai'             },
        { id: 'wiki-index/psychologia_technologii', label: 'WIKI - Psychologia technologii',         wiki: 'psychologia_technologii' },
        { id: 'wiki-index/robotyka_afektywna',   label: 'WIKI - Robotyka afektywna',                 wiki: 'robotyka_afektywna'   },
        { id: 'wiki-index/psych_szkolna',        label: 'WIKI - Psych. szkolna i edukacyjna',        wiki: 'psych_szkolna'        },
        { id: 'wiki-index/neurozroznorodnosc',   label: 'WIKI - Neuroroznorodnosc',                  wiki: 'neurozroznorodnosc'   },
        { id: 'wiki-index/psych_sadowa',         label: 'WIKI - Psychologia sadowa',                 wiki: 'psych_sadowa'         },
        { id: 'wiki-index/e_terapia',            label: 'WIKI - E-terapia',                          wiki: 'e_terapia'            },
        { id: 'wiki-index/filozofia',            label: 'WIKI - Filozofia',                          wiki: 'filozofia'            },
        { id: 'wiki-index/nvc',                  label: 'WIKI - Porozumiewanie sie bez przemocy',    wiki: 'porozumiewanie_sie_bez_przemocy'                  },
        { id: 'wiki-index/seminarium_dyplomowe', label: 'WIKI - Seminarium dyplomowe',               wiki: 'seminarium_dyplomowe' },
        { id: 'wiki-index/podstawy_pomocy',      label: 'WIKI - Podstawy pomocy psychologicznej',    wiki: 'podstawy_pomocy'      },
        { id: 'wiki-index/dodatkowe_strony',     label: 'WIKI - Dodatkowe strony',                   wiki: 'dodatkowe_strony'     },
        { id: 'wiki-index/instrukcje_lab_pdf',   label: 'WIKI - Instrukcje laboratoryjne PDF',       wiki: 'instrukcje_lab_pdf'   },
      ]
    },
    { /* Referencje */
      section: 'Referencje',
      domainKey: 'reference',
      // Pliki stricte developerskie (np. testy parsera/TOC i standardy redakcyjne)
      // celowo pozostaja poza menu publicznym:
      // - wiki/reference/standard_przypisow.md
      // - wiki/reference/listy_wielopoziomowe.md
      // - wiki/reference/katalog_narzedzi_zasady.md
      // - wiki/reference/toc_dlugi_artykul.md
      items: [
        { id: 'reference/zakres',             label: 'Zakres wiedzy',                      file: 'wiki/reference/zakres.md'             },
        { id: 'reference/literatura',         label: 'Literatura',                         file: 'wiki/reference/literatura.md'         },
        { id: 'reference/bibliografia_portalu', label: 'Bibliografia portalu',             file: 'wiki/reference/bibliografia_portalu.md' },
        { id: 'reference/skale_i_akronimy',   label: 'Skale i akronimy diagnostyczne',    file: 'wiki/reference/skale_i_akronimy.md'   },
        { id: 'reference/przepisy_zawod',     label: 'Przepisy i zasady pracy psychologa', file: 'wiki/reference/przepisy_zawod.md'     },
        { id: 'reference/etyka_psychologa',   label: 'Etyka zawodowa psychologa i psychoterapeuty', file: 'wiki/reference/etyka_psychologa.md' },
        { id: 'reference/mapa_powiazan_nowe_artykuly', label: 'Mapa powiazal nowych artykulow', file: 'wiki/reference/mapa_powiazan_nowe_artykuly.md' },
      ]
    },
  ],

  // 
  //  PLANY ARTYKUŁÓW PER DZIAŁ
  //  Uzywane przez strony dzialu jako lista zaplanowanych prac.
  //  Klucz = id dzialu z nav (pierwsza czesc przed "/")
  // 
  plans: {
    // Domeny ponizej sa aktualnie sekcjami nawigacji bez szczegolowych planow.
    // Zachowujemy puste tablice, aby walidator konfiguracji byl spojny z nav.
    students: [
      { id: 'dla_studentow/wybor_specjalnosci', label: 'Wybor specjalnosci', file: 'wiki/dla_studentow/wybor_specjalnosci.md', status: 'live' },
      { id: 'dla_studentow/sciezki_kariery', label: 'laciezki kariery po psychologii', file: 'wiki/dla_studentow/sciezki_kariery.md', status: 'live' },
      { id: 'dla_studentow/wystapienia_publiczne_autoprezentacja', label: 'Wystapienia publiczne i autoprezentacja', file: 'wiki/dla_studentow/wystapienia_publiczne_autoprezentacja.md', status: 'live' },
      { id: 'dla_studentow/psycholog_w_it', label: 'Psycholog w IT', file: 'wiki/dla_studentow/psycholog_w_it.md', status: 'live' },
      { id: 'dla_studentow/test_specjalnosci', label: 'Test wyboru specjalnosci' },
      { id: 'dla_studentow/etyka_studenta', label: 'Etyka studenta psychologii', file: 'wiki/dla_studentow/etyka_studenta.md', status: 'live' },
      { id: 'dla_studentow/psychologia_codziennej', label: 'Psychologia codzienna' },
      { id: 'dla_studentow/testy_teoretyczne', label: 'Testy teoretyczne' },
      { id: 'dla_studentow/winietki_kliniczne', label: 'Winietki kliniczne' },
      { id: 'dla_studentow/testy_dyplomowe', label: 'Testy dyplomowe' },
    ],
    psychologia_religii: [
      { id: 'psychologia_religii/wprowadzenie', label: 'Psychologia religii dz wprowadzenie', file: 'wiki/psychologia_religii/wprowadzenie.md', status: 'live' },
      { id: 'psychologia_religii/religijnosc_i_duchowosc', label: 'Religijnosc a duchowosc', file: 'wiki/psychologia_religii/religijnosc_i_duchowosc.md', status: 'live' },
      { id: 'psychologia_religii/rozwoj_religijnosci', label: 'Rozwoj religijnosci w cyklu zycia', file: 'wiki/psychologia_religii/rozwoj_religijnosci.md', status: 'live' },
      { id: 'psychologia_religii/konwersja_religijna', label: 'Konwersja religijna', file: 'wiki/psychologia_religii/konwersja_religijna.md', status: 'live' },
      { id: 'psychologia_religii/coping_religijny', label: 'Religijne strategie radzenia sobie', file: 'wiki/psychologia_religii/coping_religijny.md', status: 'live' },
      { id: 'psychologia_religii/doswiadczenia_mistyczne', label: 'Doswiadczenia mistyczne', file: 'wiki/psychologia_religii/doswiadczenia_mistyczne.md', status: 'live' },
      { id: 'psychologia_religii/obrazy_boga', label: 'Obrazy Boga i style przywiazania', file: 'wiki/psychologia_religii/obrazy_boga.md', status: 'live' },
      { id: 'psychologia_religii/wspolnota_i_tozsamosc', label: 'Wspolnota religijna a tozsamosc', file: 'wiki/psychologia_religii/wspolnota_i_tozsamosc.md', status: 'live' },
      { id: 'psychologia_religii/rytualy_i_zdrowie', label: 'Rytualy religijne a dobrostan psychiczny', file: 'wiki/psychologia_religii/rytualy_i_zdrowie.md', status: 'live' },
      { id: 'psychologia_religii/skrupulatyzm', label: 'Skrupulatyzm i objawy OCD', file: 'wiki/psychologia_religii/skrupulatyzm.md', status: 'live' },
      { id: 'psychologia_religii/religia_w_psychoterapii', label: 'Religia i duchowosc w psychoterapii', file: 'wiki/psychologia_religii/religia_w_psychoterapii.md', status: 'live' },
      { id: 'psychologia_religii/metodologia_badan', label: 'Metodologia badal psychologii religii', file: 'wiki/psychologia_religii/metodologia_badan.md', status: 'live' },
    ],
    child_clinical_intro: [
      { id: 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka', label: 'Czym jest psychologia kliniczna dziecka?', file: 'wiki/psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/norma_rozwojowa_a_objaw', label: 'Norma rozwojowa, a objaw kliniczny', file: 'wiki/psychologia_kliniczna_dziecka/norma_rozwojowa_a_objaw.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/wywiad_kliniczny_z_dzieckiem_i_rodzina', label: 'Wywiad kliniczny z dzieckiem i rodzina', file: 'wiki/psychologia_kliniczna_dziecka/wywiad_kliniczny_z_dzieckiem_i_rodzina.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/czynniki_ryzyka_i_ochronne', label: 'Czynniki ryzyka i ochronne', file: 'wiki/psychologia_kliniczna_dziecka/czynniki_ryzyka_i_ochronne.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/regulacja_emocji_i_samokontrola', label: 'Regulacja emocji i samokontrola', file: 'wiki/psychologia_kliniczna_dziecka/regulacja_emocji_i_samokontrola.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/przywiazanie_i_relacje_opiekuncze', label: 'Przywiazanie i relacje opiekulcze', file: 'wiki/psychologia_kliniczna_dziecka/przywiazanie_i_relacje_opiekuncze.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/diagnoza_roznicowa_neurorozwojowa', label: 'Diagnoza roznicowa: emocje vs neuroRozwoj', file: 'wiki/psychologia_kliniczna_dziecka/diagnoza_roznicowa_neurorozwojowa.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/formulowanie_przypadku_4p', label: 'Formulowanie przypadku (4P)', file: 'wiki/psychologia_kliniczna_dziecka/formulowanie_przypadku_4p.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/interwencje_rodzicielskie_pmt', label: 'Interwencje rodzicielskie (PMT)', file: 'wiki/psychologia_kliniczna_dziecka/interwencje_rodzicielskie_pmt.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/cbt_dzieci_i_mlodziez', label: 'CBT dla dzieci i mlodziezy', file: 'wiki/psychologia_kliniczna_dziecka/cbt_dzieci_i_mlodziez.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/wspolpraca_rodzina_szkola_system', label: 'Wspolpraca rodzinadz szkoladz system', file: 'wiki/psychologia_kliniczna_dziecka/wspolpraca_rodzina_szkola_system.md', status: 'live' },
      { id: 'psychologia_kliniczna_dziecka/bledy_diagnostyczne_i_iatrogenia', label: 'Bledy diagnostyczne i jatrogenia', file: 'wiki/psychologia_kliniczna_dziecka/bledy_diagnostyczne_i_iatrogenia.md', status: 'live' },
    ],
    reacting_to_criticism: [
      { id: 'reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna', label: 'Krytyka, a informacja zwrotna - rozroznienie', file: 'wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/style_reagowania_na_krytyke', label: 'Style reagowania na krytyke', file: 'wiki/reagowanie_na_krytyke/style_reagowania_na_krytyke.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/neurobiologia_stresu_oceny', label: 'Neurobiologia stresu oceny', file: 'wiki/reagowanie_na_krytyke/neurobiologia_stresu_oceny.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/schematy_poznawcze_i_znieksztalcenia', label: 'Schematy poznawcze i znieksztalcenia', file: 'wiki/reagowanie_na_krytyke/schematy_poznawcze_i_znieksztalcenia.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/mentalizacja_i_intencje_nadawcy', label: 'Mentalizacja i intencje nadawcy', file: 'wiki/reagowanie_na_krytyke/mentalizacja_i_intencje_nadawcy.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/granice_i_asertywnosc', label: 'Granice i asertywnosc', file: 'wiki/reagowanie_na_krytyke/granice_i_asertywnosc.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/model_sbi_nvc_w_praktyce', label: 'Model SBI i NVC w praktyce', file: 'wiki/reagowanie_na_krytyke/model_sbi_nvc_w_praktyce.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/samowspolczucie_i_act', label: 'Samowspolczucie i ACT', file: 'wiki/reagowanie_na_krytyke/samowspolczucie_i_act.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/mikrointerwencje_w_czasie_rzeczywistym', label: 'Mikrointerwencje w czasie rzeczywistym', file: 'wiki/reagowanie_na_krytyke/mikrointerwencje_w_czasie_rzeczywistym.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/trudne_rozmowy_w_pracy', label: 'Trudne rozmowy w pracy', file: 'wiki/reagowanie_na_krytyke/trudne_rozmowy_w_pracy.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/najczestsze_bledy_po_krytyce', label: 'Najczestsze bledy po krytyce', file: 'wiki/reagowanie_na_krytyke/najczestsze_bledy_po_krytyce.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/plan_30_dni_trening_odpornosci', label: 'Plan 30 dni treningu odpornosci', file: 'wiki/reagowanie_na_krytyke/plan_30_dni_trening_odpornosci.md', status: 'live' },
      { id: 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych', label: 'Jak nie brac do siebie opinii innych', file: 'wiki/reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych.md', status: 'live' },
    ],
    overeating_psychology: [
      { id: 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie', label: 'Czym jest nadmierne jedzenie?', file: 'wiki/psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/neurobiologia_nagrody_i_glodu', label: 'Neurobiologia nagrody i glodu', file: 'wiki/psychologia_nadmiernego_jedzenia/neurobiologia_nagrody_i_glodu.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/regulacja_emocji_i_jedzenie', label: 'Regulacja emocji, a jedzenie', file: 'wiki/psychologia_nadmiernego_jedzenia/regulacja_emocji_i_jedzenie.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/stres_i_jedzenie_kompulsywne', label: 'Stres i jedzenie kompulsywne', file: 'wiki/psychologia_nadmiernego_jedzenia/stres_i_jedzenie_kompulsywne.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/srodowisko_zywieniowe_i_nawyki', label: 'larodowisko zywieniowe i nawyki', file: 'wiki/psychologia_nadmiernego_jedzenia/srodowisko_zywieniowe_i_nawyki.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/obraz_ciala_i_samokrytycyzm', label: 'Obraz ciala i samokrytycyzm', file: 'wiki/psychologia_nadmiernego_jedzenia/obraz_ciala_i_samokrytycyzm.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/rodzinne_wzorce_jedzenia', label: 'Rodzinne wzorce jedzenia', file: 'wiki/psychologia_nadmiernego_jedzenia/rodzinne_wzorce_jedzenia.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/diagnoza_roznicowa_bed_bulimia', label: 'Diagnoza roznicowa: BED i bulimia', file: 'wiki/psychologia_nadmiernego_jedzenia/diagnoza_roznicowa_bed_bulimia.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/interwencje_poznawczo_behawioralne', label: 'Interwencje poznawczo-behawioralne', file: 'wiki/psychologia_nadmiernego_jedzenia/interwencje_poznawczo_behawioralne.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/mindfulness_i_regulacja_apetytu', label: 'Mindfulness i regulacja apetytu', file: 'wiki/psychologia_nadmiernego_jedzenia/mindfulness_i_regulacja_apetytu.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/farmakoterapia_i_wskazania', label: 'Farmakoterapia i wskazania', file: 'wiki/psychologia_nadmiernego_jedzenia/farmakoterapia_i_wskazania.md', status: 'live' },
      { id: 'psychologia_nadmiernego_jedzenia/profilaktyka_nawrotow', label: 'Profilaktyka nawrotow', file: 'wiki/psychologia_nadmiernego_jedzenia/profilaktyka_nawrotow.md', status: 'live' },
    ],
    child_family_support_institutions: [
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/mapa_systemu_wsparcia', label: 'Mapa systemu wsparcia', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/mapa_systemu_wsparcia.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/osrodek_pomocy_spolecznej_i_praca_socjalna', label: 'OPS i praca socjalna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/osrodek_pomocy_spolecznej_i_praca_socjalna.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/poradnia_psychologiczno_pedagogiczna', label: 'Poradnia psychologiczno-pedagogiczna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/poradnia_psychologiczno_pedagogiczna.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/piecza_zastepcza_i_asysta_rodziny', label: 'Piecza zastepcza i asysta rodziny', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/piecza_zastepcza_i_asysta_rodziny.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/interwencja_kryzysowa_i_niebieska_karta', label: 'Interwencja kryzysowa i dz ~Niebieska Kartadz e', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/interwencja_kryzysowa_i_niebieska_karta.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/sad_rodzinny_i_kurator', label: 'Sad rodzinny i kurator', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/sad_rodzinny_i_kurator.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/ochrona_zdrowia_psychicznego_dzieci', label: 'Ochrona zdrowia psychicznego dzieci', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/ochrona_zdrowia_psychicznego_dzieci.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/szkola_jako_instytucja_wsparcia', label: 'Szkola jako instytucja wsparcia', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/szkola_jako_instytucja_wsparcia.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/ngo_i_programy_srodowiskowe', label: 'NGO i programy srodowiskowe', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/ngo_i_programy_srodowiskowe.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/koordynacja_miedzyinstytucjonalna', label: 'Koordynacja miedzyinstytucjonalna', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/koordynacja_miedzyinstytucjonalna.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/prawa_dziecka_i_standardy_ochrony', label: 'Prawa dziecka i standardy ochrony', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/prawa_dziecka_i_standardy_ochrony.md', status: 'live' },
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/bledy_systemowe_i_dobre_praktyki', label: 'Bledy systemowe i dobre praktyki', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/bledy_systemowe_i_dobre_praktyki.md', status: 'live' },
    ],
    resocialization: [
      { id: 'resocjalizacja/podstawy_resocjalizacji', label: 'Podstawy resocjalizacji', file: 'wiki/resocjalizacja/podstawy_resocjalizacji.md', status: 'live' },
      { id: 'resocjalizacja/diagnoza_ryzyka_i_potrzeb', label: 'Diagnoza ryzyka i potrzeb', file: 'wiki/resocjalizacja/diagnoza_ryzyka_i_potrzeb.md', status: 'live' },
      { id: 'resocjalizacja/model_rnr_w_praktyce', label: 'Model RNR w praktyce', file: 'wiki/resocjalizacja/model_rnr_w_praktyce.md', status: 'live' },
      { id: 'resocjalizacja/desistance_i_zmiana_tozsamosci', label: 'Desistance i zmiana tozsamosci', file: 'wiki/resocjalizacja/desistance_i_zmiana_tozsamosci.md', status: 'live' },
      { id: 'resocjalizacja/resocjalizacja_nieletnich', label: 'Resocjalizacja nieletnich', file: 'wiki/resocjalizacja/resocjalizacja_nieletnich.md', status: 'live' },
      { id: 'resocjalizacja/praca_z_uzaleznieniami_w_resocjalizacji', label: 'Praca z uzaleznieniami', file: 'wiki/resocjalizacja/praca_z_uzaleznieniami_w_resocjalizacji.md', status: 'live' },
      { id: 'resocjalizacja/edukacja_i_aktywizacja_zawodowa', label: 'Edukacja i aktywizacja zawodowa', file: 'wiki/resocjalizacja/edukacja_i_aktywizacja_zawodowa.md', status: 'live' },
      { id: 'resocjalizacja/trening_umiejetnosci_spolecznych_i_samokontroli', label: 'Trening umiejetnosci spolecznych i samokontroli', file: 'wiki/resocjalizacja/trening_umiejetnosci_spolecznych_i_samokontroli.md', status: 'live' },
      { id: 'resocjalizacja/sprawiedliwosc_naprawcza_mediacje', label: 'Sprawiedliwosc naprawcza i mediacje', file: 'wiki/resocjalizacja/sprawiedliwosc_naprawcza_mediacje.md', status: 'live' },
      { id: 'resocjalizacja/readaptacja_postpenitencjarna', label: 'Readaptacja postpenitencjarna', file: 'wiki/resocjalizacja/readaptacja_postpenitencjarna.md', status: 'live' },
      { id: 'resocjalizacja/etyka_i_prawa_czlowieka', label: 'Etyka i prawa czlowieka', file: 'wiki/resocjalizacja/etyka_i_prawa_czlowieka.md', status: 'live' },
      { id: 'resocjalizacja/ewaluacja_skutecznosci_programow', label: 'Ewaluacja skutecznosci programow', file: 'wiki/resocjalizacja/ewaluacja_skutecznosci_programow.md', status: 'live' },
    ],
    'wiki-index': [],
    neuro: [
      { file: 'wiki/neuropsychologia/anatomia.md',    label: 'Anatomia mozgu',             status: 'live' },
      { file: 'wiki/neuropsychologia/neuron.md',      label: 'Neuron i synapsa',           status: 'live' },
      { file: 'wiki/neuropsychologia/systemy.md',     label: 'Uklady i sieci mozgowe',     status: 'live' },
      { file: 'wiki/neuropsychologia/agregaty_neuronalne.md', label: 'Agregaty neuronalne', status: 'live' },
      { file: 'wiki/neuropsychologia/myelinizacja.md',label: 'Mielinizacja i istota biala',status: 'live' },
      { file: 'wiki/neuropsychologia/plastycznosc.md',label: 'Neuroplastycznosc',          status: 'live' },
      { file: 'wiki/neuropsychologia/neuroobrazowanie.md', label: 'Neuroobrazowanie (fMRI, DTI)', status: 'live' },
      { file: 'wiki/neuropsychologia/lateralizacja.md',label: 'Lateralizacja funkcji',    status: 'live' },
      { file: 'wiki/neuropsychologia/zachowanie_i_dwie_polkule_mozgu.md', label: 'Zachowanie i dwie polkule mozgu', status: 'live' },
      { file: 'wiki/neuropsychologia/kora_prefrontalna.md', label: 'Kora przedczolowa',   status: 'live' },
      { file: 'wiki/neuropsychologia/uklad_limbiczny.md', label: 'Uklad limbiczny',       status: 'live' },
      { file: 'wiki/neuropsychologia/przesilenie_wiosenne.md', label: 'Neurobiologia przesilenia wiosennego', status: 'live' },
      { file: 'wiki/neuropsychologia/cykl_miesiaczkowy.md', label: 'Neuropsychologia cyklu miesiaczkowego', status: 'live' },
      { file: 'wiki/neuropsychologia/eye_tracking.md',        label: 'Eye tracking - sledzenie wzroku',         status: 'live' },
      { file: 'wiki/neuropsychologia/muse.md',                label: 'Muse S - neurofeedback i EEG',            status: 'live' },
      { file: 'wiki/neuropsychologia/rehabilitacja_neuropsychologiczna.md', label: 'Rehabilitacja neuropsychologiczna', status: 'live' },
      { file: 'wiki/neuropsychologia/neuronauka_poznawcza.md', label: 'Neuronauka poznawcza', status: 'live' },
      { file: 'wiki/neuropsychologia/podstawy_neurologii.md', label: 'Podstawy neurologii',                 status: 'live' },
      { file: 'wiki/neuropsychologia/pien_mozgu.md',          label: 'Piel mozgu i mozdzek',               status: 'live' },
    ],
    cognitive: [
      { file: 'wiki/psychologia_poznawcza/pamiec.md',              label: 'Pamiec',               status: 'live' },
      { file: 'wiki/psychologia_poznawcza/pamiec_dlugotrwala.md',  label: 'Pamiec dlugotrwala',   status: 'live' },
      { file: 'wiki/psychologia_poznawcza/uwaga.md',               label: 'Uwaga',                status: 'live' },
      { file: 'wiki/psychologia_poznawcza/jezyk.md',               label: 'Jezyk',                status: 'live' },
      { file: 'wiki/psychologia_poznawcza/funkcje_wykonawcze.md',  label: 'Funkcje wykonawcze',   status: 'live' },
      { file: 'wiki/psychologia_poznawcza/percepcja.md',           label: 'Percepcja i gnozja',   status: 'live' },
      { file: 'wiki/psychologia_poznawcza/zmeczenie_poznawcze.md', label: 'Zmeczenie poznawcze',  status: 'live' },
      { file: 'wiki/psychologia_poznawcza/myslenie.md',            label: 'Myslenie i rozumowanie', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/uczenie.md',             label: 'Uczenie sie',          status: 'live' },
      { file: 'wiki/psychologia_poznawcza/wyobraznia.md',          label: 'Wyobral_nia i reprezentacje', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/swiadomosc.md',          label: 'lawiadomosc i metapoznanie', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/podejmowanie_decyzji.md',label: 'Podejmowanie decyzji', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/exploration_exploitation_dilemma.md', label: 'Dylemat eksploracjadz eksploatacja', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/teoria_perspektywy.md', label: 'Teoria perspektywy',    status: 'live' },
      { file: 'wiki/psychologia_poznawcza/efekt_ramowania.md',    label: 'Efekt ramowania',       status: 'live' },
      { file: 'wiki/psychologia_poznawcza/nasa_tlx.md',           label: 'NASA Task Load Index (TLX)', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/iluzje.md',             label: 'Iluzje i bledy poznawcze',   status: 'live' },
      { file: 'wiki/psychologia_poznawcza/test_stroopa.md',       label: 'Test Stroopa',               status: 'live' },
      { file: 'wiki/psychologia_poznawcza/przyklad_testu_stroopa.md', label: 'Przyklad testu Stroopa', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/eksperyment_posnera.md',    label: 'Eksperyment Posnera',          status: 'live' },
      { file: 'wiki/psychologia_poznawcza/maly_albert.md',            label: 'Eksperyment Malego Alberta',   status: 'live' },
      { file: 'wiki/psychologia_poznawcza/uklad_siatkowaty.md',       label: 'Uklad siatkowaty (ARAS)',      status: 'live' },
      { file: 'wiki/psychologia_poznawcza/uwaga_mimowolna.md',         label: 'Uwaga mimowolna',              status: 'live' },
      { file: 'wiki/psychologia_poznawcza/nauki_kognitywne.md',        label: 'Nauki kognitywne',             status: 'live' },
      { file: 'wiki/psychologia_poznawcza/architektury_kognitywne.md', label: 'Architektury kognitywne',      status: 'live' },
      { file: 'wiki/psychologia_poznawcza/hda.md',                     label: 'Human Decision Accuracy (HDA)',status: 'live' },
      { file: 'wiki/psychologia_poznawcza/system1_system2.md',        label: 'System 1 i System 2 (Kahneman)', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/przetwarzanie_predyktywne.md',  label: 'Predictive processing',        status: 'live' },
      { file: 'wiki/psychologia_poznawcza/ucielesnienie.md',              label: 'Ucielesnione poznanie',        status: 'live' },
      { file: 'wiki/psychologia_poznawcza/narracje_i_psychika.md',       label: 'Rola opowieści w psychice',     status: 'live' },
    ],
    spoleczna: [
      { file: 'wiki/psychologia_spoleczna/percepcja_spoleczna.md',   label: 'Percepcja spoleczna i atrybucje', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/eksperyment_wiezienny.md', label: 'Stanfordzki Eksperyment Wiezienny', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/manipulacja.md', label: 'Manipulacja - mechanizmy i metody wplywu', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/stereotypy.md', label: 'Stereotypy i uprzedzenia', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/manosfera_feminizm.md', label: 'Manosfera i feminizm - ujecie psychologiczne', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/ja_i_samoocena.md', label: 'Ja i samoocena', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/postawy.md', label: 'Postawy i zmiana postaw', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/konformizm.md', label: 'Konformizm i posluszelstwo', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/perswazja.md', label: 'Perswazja i propaganda', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/dynamika_grupowa.md', label: 'Dynamika grupowa', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/atrakcyjnosc.md', label: 'Atrakcyjnosc interpersonalna', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/agresja.md', label: 'Agresja', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/hejt_w_sieci.md', label: 'Hejt w sieci', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/zachowania_prospoleczne.md', label: 'Zachowania prospoleczne', status: 'live' },
    ],
    disorders: [
      { file: 'wiki/zaburzenia/afazje.md',    label: 'Afazje',                 status: 'live' },
      { file: 'wiki/zaburzenia/amnezje.md',   label: 'Amnezje',                status: 'live' },
      { file: 'wiki/zaburzenia/otepienia.md', label: 'Otepienia',              status: 'live' },
      { file: 'wiki/zaburzenia/tbi.md',       label: 'Urazy glowy (TBI)',      status: 'live' },
      { file: 'wiki/zaburzenia/apraksja.md',  label: 'Apraksja',               status: 'live' },
      { file: 'wiki/zaburzenia/agnozja.md',   label: 'Agnozja wzrokowa',       status: 'live' },
      { file: 'wiki/zaburzenia/neglect.md',   label: 'Neglect przestrzenny',   status: 'live' },
      { file: 'wiki/zaburzenia/adhd.md',      label: 'ADHD',                   status: 'live' },
      { file: 'wiki/zaburzenia/asd.md',       label: 'Spektrum autyzmu (ASD)', status: 'live' },
    ],
    tests: [
      { file: 'wiki/testy/testy_przeglad.md',   label: 'Testy - przeglad',      status: 'live' },
      { file: 'wiki/testy/mmse_moca.md',        label: 'MMSE i MoCA',           status: 'live' },
      { file: 'wiki/testy/testy_wykonawcze.md', label: 'Testy funkcji wyk.',    status: 'live' },
      { file: 'wiki/testy/testy_pamieci.md',    label: 'Testy pamieci',         status: 'live' },
      { file: 'wiki/testy/testy_uwagi.md',      label: 'Testy uwagi',           status: 'live' },
      { file: 'wiki/testy/testy_jezyka.md',     label: 'Testy jezykowe',        status: 'live' },
      { file: 'wiki/testy/wais.md',             label: 'Skale Wechslera (WAIS/WISC)', status: 'live' },
      { file: 'wiki/testy/wisc_v.md',           label: 'WISC-V - opis testu',         status: 'live' },
      { file: 'wiki/testy/neuropsych_battery.md',label: 'Baterie neuropsychologiczne', status: 'live' },
      { file: 'wiki/testy/rdoc.md',              label: 'Model RDoC',                  status: 'live' },
      { file: 'wiki/testy/scid_v.md',            label: 'SCID-5 / SCID-V',             status: 'live' },
    ],
    psychometrics: [
      { file: 'wiki/psychometria/psychometria_wprowadzenie.md', label: 'Psychometria',        status: 'live' },
      { file: 'wiki/psychometria/rzetelnosc.md',   label: 'Rzetelnosc pomiaru',               status: 'live' },
      { file: 'wiki/psychometria/trafnosc.md',     label: 'Trafnosc pomiaru',                 status: 'live' },
      { file: 'wiki/psychometria/normalizacja.md', label: 'Normalizacja i normy',             status: 'live' },
      { file: 'wiki/psychometria/teoria_ct.md',    label: 'Klasyczna teoria testu',           status: 'live' },
      { file: 'wiki/psychometria/irt.md',          label: 'IRT i model Rascha',               status: 'live' },
      { file: 'wiki/psychometria/cfa_efa.md',      label: 'Analiza czynnikowa',               status: 'live' },
      { file: 'wiki/psychometria/invariancja.md',  label: 'Inwariancja pomiarowa',            status: 'live' },
      { file: 'wiki/psychometria/test_matryc_ravena.md', label: 'Test Matryc Ravena',         status: 'live' },
      { file: 'wiki/psychometria/mmpi.md',         label: 'MMPI',                             status: 'live' },
      { file: 'wiki/psychometria/bdi_2.md',        label: 'BDI-II (Inwentarz Depresji Becka)',status: 'live' },
      { file: 'wiki/psychometria/ados.md',         label: 'ADOS-2',                           status: 'live' },
      { file: 'wiki/psychometria/diva.md',         label: 'DIVA-5 (diagnoza ADHD)',           status: 'live' },
      { file: 'wiki/psychometria/narzedzia_kliniczne.md', label: 'Narzedzia kliniczne (PHQ-l, GAD-7, PCL-5)', status: 'live' },
    ],
    pharmacology: [
      { file: 'wiki/farmakologia/neurofarmakologia.md',   label: 'Neurofarmakologia',           status: 'live' },
      { file: 'wiki/farmakologia/przeciwdepresyjne.md',   label: 'Leki przeciwdepresyjne',      status: 'live' },
      { file: 'wiki/farmakologia/przeciwpsychotyczne.md', label: 'Leki przeciwpsychotyczne',    status: 'live' },
      { file: 'wiki/farmakologia/anxiolityki.md',         label: 'Anksjolityki i nasenne',      status: 'live' },
      { file: 'wiki/farmakologia/stabilizatory.md',       label: 'Stabilizatory nastroju',      status: 'live' },
      { file: 'wiki/farmakologia/uzaleznienia_farm.md',   label: 'Farmakoterapia uzalezniel',   status: 'live' },
      { file: 'wiki/farmakologia/psychodeliki.md',        label: 'Psychodeliki w terapii',      status: 'live' },
      { file: 'wiki/farmakologia/nootropiki.md',          label: 'Nootropiki i kognitywne',     status: 'live' },
    ],
    individual_diffs: [
      { file: 'wiki/roznice_indywidualne/roznice_wprowadzenie.md', label: 'Roznice ind.',       status: 'live' },
      { file: 'wiki/roznice_indywidualne/inteligencja.md',  label: 'Inteligencja',              status: 'live' },
      { file: 'wiki/roznice_indywidualne/osobowosc.md',     label: 'Osobowosc (Wielka Piatka)', status: 'live' },
      { file: 'wiki/roznice_indywidualne/kreatywnosc.md',   label: 'Kreatywnosc',               status: 'live' },
      { file: 'wiki/roznice_indywidualne/genetyka.md',      label: 'Uwarunkowania genetyczne',  status: 'live' },
      { file: 'wiki/roznice_indywidualne/style_poznawcze.md',label: 'Style poznawcze',          status: 'live' },
      { file: 'wiki/roznice_indywidualne/reiss_motivation_profile.md', label: 'Reiss Motivation Profile', status: 'live' },
      { file: 'wiki/roznice_indywidualne/plec_psychologia.md', label: 'Psychologia plci',       status: 'live' },
      { file: 'wiki/roznice_indywidualne/ciemna_triada.md',   label: 'Ciemna Triada',           status: 'live' },
    ],
    podstawy_pomocy: [
      { file: 'wiki/podstawy_pomocy/wprowadzenie.md',                  label: 'Pomoc psychologiczna',                status: 'live' },
      { file: 'wiki/podstawy_pomocy/relacja_pomocowa.md',              label: 'Relacja pomocowa',                    status: 'live' },
      { file: 'wiki/podstawy_pomocy/aktywne_sluchanie.md',             label: 'Aktywne sluchanie',                   status: 'live' },
      { file: 'wiki/podstawy_pomocy/empatia_w_pomocy.md',              label: 'Empatia w pomocy psychologicznej',    status: 'live' },
      { file: 'wiki/podstawy_pomocy/granice_w_pomocy.md',              label: 'Granice w relacji pomocowej',         status: 'live' },
      { file: 'wiki/podstawy_pomocy/kryzys_psychologiczny.md',         label: 'Kryzys psychologiczny i interwencja', status: 'live' },
      { file: 'wiki/podstawy_pomocy/pierwsza_pomoc_psychologiczna.md', label: 'Pierwsza pomoc psychologiczna',       status: 'live' },
      { file: 'wiki/podstawy_pomocy/modele_pomocy.md',                 label: 'Modele pomocy psychologicznej',       status: 'live' },
      { file: 'wiki/podstawy_pomocy/komunikacja_wspierajaca.md',       label: 'Komunikacja wspierajaca',             status: 'live' },
      { file: 'wiki/podstawy_pomocy/wsparcie_spoleczne.md',            label: 'Wsparcie spoleczne',                  status: 'live' },
      { file: 'wiki/podstawy_pomocy/samoopieka_pomagajacego.md',       label: 'Samoopieka pomagajacego',             status: 'live' },
      { file: 'wiki/podstawy_pomocy/etyka_pomocy.md',                  label: 'Etyka pomocy psychologicznej',        status: 'live' },
    ],
    temperament: [
      { file: 'wiki/temperament/temperament_wprowadzenie.md', label: 'Temperament',                          status: 'live' },
      { file: 'wiki/temperament/modele.md',                   label: 'Modele temperamentu',                  status: 'live' },
      { file: 'wiki/temperament/pomiar.md',                   label: 'Pomiar temperamentu',                  status: 'live' },
      { file: 'wiki/temperament/kliniczne.md',                label: 'Temperament w klinice',                status: 'live' },
      { file: 'wiki/temperament/rozwoj.md',                   label: 'Temperament, a Rozwoj',                status: 'live' },
      { file: 'wiki/temperament/strelau.md',                  label: 'RTT - teoria Strelaua',                status: 'live' },
      { file: 'wiki/temperament/eysenck.md',                  label: 'Model Eysencka (PEN)',                 status: 'live' },
      { file: 'wiki/temperament/gray.md',                     label: 'Teoria BIS/BAS Graya',                 status: 'live' },
      { file: 'wiki/temperament/kagan.md',                    label: 'Zahamowanie behawioralne (Kagan)',     status: 'live' },
      { file: 'wiki/temperament/temperament_a_psychopat.md',  label: 'Temperament, a psychopatologia',       status: 'live' },
      { file: 'wiki/temperament/biologia_temperamentu.md',    label: 'Biologiczne podloze temperamentu',     status: 'live' },
      { file: 'wiki/temperament/temperament_a_kariera.md',    label: 'Temperament, a kariera i praca',       status: 'live' },
    ],
    emotions: [
      { file: 'wiki/emocje/emocje_wprowadzenie.md', label: 'Emocje',           status: 'live' },
      { file: 'wiki/emocje/teorie.md',       label: 'Teorie emocji',           status: 'live' },
      { file: 'wiki/emocje/regulacja.md',    label: 'Regulacja emocjonalna',   status: 'live' },
      { file: 'wiki/emocje/motywacja.md',    label: 'Motywacja',               status: 'live' },
      { file: 'wiki/emocje/neurobiologia.md',label: 'Neurobiologia emocji',    status: 'live' },
      { file: 'wiki/emocje/wspolczucie.md',  label: 'Empatia i wspolczucie',   status: 'live' },
      { file: 'wiki/emocje/aleksytymia.md',  label: 'Aleksytymia',             status: 'live' },
      { file: 'wiki/emocje/inteligencja_emocjonalna.md', label: 'Inteligencja emocjonalna',         status: 'live' },
      { file: 'wiki/emocje/stres_emocje.md',             label: 'Stres i emocje',                   status: 'live' },
      { file: 'wiki/emocje/pozytywne_emocje.md',         label: 'Pozytywne emocje i broaden-build', status: 'live' },
      { file: 'wiki/emocje/wstyd_wina.md',               label: 'Wstyd i wina',                     status: 'live' },
      { file: 'wiki/emocje/emocje_spoleczne.md',         label: 'Emocje spoleczne i moralne',       status: 'live' },
    ],
    biology: [
      { file: 'wiki/biologia/biologiczne_podstawy.md', label: 'Biologiczne podstawy - wprow.', status: 'live' },
      { file: 'wiki/biologia/genetyka_beh.md',    label: 'Genetyka behawioralna',      status: 'live' },
      { file: 'wiki/biologia/transmisja_genetyczna_zaburzen_psychicznych.md', label: 'Transmisja genetyczna zaburzeń psychicznych', status: 'live' },
      { file: 'wiki/biologia/epigenetyka.md',    label: 'Epigenetyka',                status: 'live' },
      { file: 'wiki/biologia/hormony.md',          label: 'Hormony i zachowanie',       status: 'live' },
      { file: 'wiki/biologia/ewolucja.md',         label: 'Ewolucja i psychologia ewol.',status: 'live' },
      { file: 'wiki/biologia/psychofizjologia.md', label: 'Psychofizjologia',           status: 'live' },
      { file: 'wiki/biologia/chronobiologia.md',   label: 'Chronobiologia i sen',       status: 'live' },
      { file: 'wiki/biologia/chronopsychologia.md', label: 'Chronopsychologia',          status: 'live' },
      { file: 'wiki/biologia/mikrobiom.md',        label: 'Os jelitadz mozg',            status: 'live' },
    ],
    psychotherapy: [
      { file: 'wiki/psychoterapia/psychoterapia_wprowadzenie.md', label: 'Psychoterapia', status: 'live' },
      { file: 'wiki/psychoterapia/cbt.md',         label: 'Terapia poznawczo-beh. (CBT)', status: 'live' },
      { file: 'wiki/psychoterapia/dbt.md',         label: 'Terapia dialektyczna (DBT)',    status: 'live' },
      { file: 'wiki/psychoterapia/psychodyn.md',   label: 'Terapia psychodynamiczna',     status: 'live' },
      { file: 'wiki/psychoterapia/humanist.md',    label: 'Podejscie humanistyczne',      status: 'live' },
      { file: 'wiki/psychoterapia/systemowa.md',   label: 'Terapia systemowa',            status: 'live' },
      { file: 'wiki/psychoterapia/systemy_rodzinne.md', label: 'Systemy rodzinne', status: 'live' },
      { file: 'wiki/psychoterapia/skutecznosc.md', label: 'Skutecznosc psychoterapii',    status: 'live' },
      { file: 'wiki/psychoterapia/sojusz.md',      label: 'Sojusz terapeutyczny',         status: 'live' },
      { file: 'wiki/psychoterapia/emdr.md',        label: 'EMDR',                         status: 'live' },
      { file: 'wiki/psychoterapia/act.md',         label: 'Terapia akceptacji (ACT)',      status: 'live' },
      { file: 'wiki/psychoterapia/heksafleks_act.md', label: 'Heksafleks ACT',             status: 'live' },
      { file: 'wiki/psychoterapia/trening_umiejetnosci_spolecznych.md', label: 'Trening Umiejetnosci Spolecznych (SST)', status: 'live' },
      { file: 'wiki/psychoterapia/gestalt.md',     label: 'Plodna pustka (fertile void) - Gestalt', status: 'live' },
      { file: 'wiki/psychoterapia/logoterapia_frankl.md',   label: 'Logoterapia (Frankl)',                  status: 'live' },
      { file: 'wiki/psychoterapia/psychoanaliza_fromma.md', label: 'Psychoanaliza humanistyczna (Fromm)',   status: 'live' },
      { file: 'wiki/psychoterapia/psychologia_zimbardo.md', label: 'Psychologia spoleczna (Zimbardo)',      status: 'live' },
      { file: 'wiki/psychoterapia/aktywacja_behawioralna.md', label: 'Aktywacja behawioralna',             status: 'live' },
      { file: 'wiki/psychoterapia/rebt.md',                 label: 'REBT - racjonalna terapia',              status: 'live' },
      { file: 'wiki/psychoterapia/psychologiczne_mechanizmy_przebaczenia.md', label: 'Mechanizmy przebaczenia po przemocy emocjonalnej', status: 'live' },
      { file: 'wiki/psychoterapia/superwizja.md',           label: 'Superwizja w psychoterapii',            status: 'live' },
    ],
    psychopathology: [
      { file: 'wiki/psychopatologia/psychopatologia_wprowadzenie.md', label: 'Psychopatologia', status: 'live' },
      { file: 'wiki/psychopatologia/objawy_ogolne.md',             label: 'Objawy ogolne (MSE)',         status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_lekowe.md',         label: 'Zaburzenia lekowe',           status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_nastroju.md',       label: 'Zaburzenia nastroju',         status: 'live' },
      { file: 'wiki/psychopatologia/psychozy.md',                  label: 'Psychozy i schizofrenia',     status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_osobowosci.md',     label: 'Zaburzenia osobowosci',       status: 'live' },
      { file: 'wiki/psychopatologia/trauma_ptsd.md',               label: 'Trauma i PTSD',               status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_odzywiania.md',     label: 'Zaburzenia odzywiania',       status: 'live' },
      { file: 'wiki/psychopatologia/neurorozwojowe.md',            label: 'Zaburzenia neurorozwojowe',   status: 'live' },
      { file: 'wiki/psychopatologia/ocd.md',                       label: 'OCD i pokrewne',              status: 'live' },
      { file: 'wiki/psychopatologia/uzaleznienia_psych.md',        label: 'Uzaleznienia - aspekt psych.',status: 'live' },
      { file: 'wiki/psychopatologia/depresja_poporodowa.md',       label: 'Depresja poporodowa',         status: 'live' },
      { file: 'wiki/psychopatologia/przymus_powtarzania.md',       label: 'Przymus powtarzania',         status: 'live' },
      { file: 'wiki/psychopatologia/wiktymizacja.md',               label: 'Wiktymizacja',                status: 'live' },
      { file: 'wiki/psychopatologia/wyuczona_bezradnosc.md',        label: 'Wyuczona bezradnosc',         status: 'live' },
      { file: 'wiki/psychopatologia/intelektualizacja.md',          label: 'Intelektualizacja emocji',    status: 'live' },
      { file: 'wiki/psychopatologia/dezintegracja_pozytywna.md',    label: 'Dezintegracja pozytywna',     status: 'live' },
      { file: 'wiki/psychopatologia/klasyfikacje.md',               label: 'Klasyfikacje ICD-11 i DSM-5-TR', status: 'live' },
      { file: 'wiki/psychopatologia/formulowanie_przypadku.md',     label: 'Formulowanie przypadku',        status: 'live' },
    ],
    suicidology: [
      { file: 'wiki/suicydologia/suicydologia_wprowadzenie.md', label: 'Suicydologia', status: 'live' },
      { file: 'wiki/suicydologia/epidemiologia.md',  label: 'Epidemiologia',              status: 'live' },
      { file: 'wiki/suicydologia/teorie.md',         label: 'Teorie (Joiner, IMV)',       status: 'live' },
      { file: 'wiki/suicydologia/ocena_ryzyka.md',   label: 'Ocena ryzyka (C-SSRS)',      status: 'live' },
      { file: 'wiki/suicydologia/interwencja.md',    label: 'Interwencja kryzysowa',      status: 'live' },
      { file: 'wiki/suicydologia/profilaktyka.md',   label: 'Profilaktyka (3 poziomy)',   status: 'live' },
      { file: 'wiki/suicydologia/nssi.md',           label: 'Samookaleczenia (NSSI)',     status: 'live' },
      { file: 'wiki/suicydologia/postvention.md',    label: 'Postvention',                status: 'live' },
      { file: 'wiki/suicydologia/media.md',          label: 'Efekt Wertera i Papageno',   status: 'live' },
    ],
    sexology: [
      { file: 'wiki/seksuologia/seksuologia_wprowadzenie.md', label: 'Seksuologia', status: 'live' },
      { file: 'wiki/seksuologia/psychologia_seksu.md',      label: 'Psychologia seksu',         status: 'live' },
      { file: 'wiki/seksuologia/emocjonalne_zaangazowanie_w_seksie.md', label: 'Emocjonalne zaangazowanie, a seks', status: 'live' },
      { file: 'wiki/seksuologia/wstyd_ciala_a_pozycje.md',   label: 'Wstyd ciala,, a pozycje seksualne', status: 'live' },
      { file: 'wiki/seksuologia/orientacja.md',         label: 'Orientacja seksualna',      status: 'live' },
      { file: 'wiki/seksuologia/tozsamosc_plciowa.md',  label: 'Tozsamosc plciowa',         status: 'live' },
      { file: 'wiki/seksuologia/dysfunkcje.md',         label: 'Dysfunkcje seksualne',      status: 'live' },
      { file: 'wiki/seksuologia/hiperseksualnosc_mechanizm.md', label: 'Hiperseksualnosc jako mechanizm', status: 'live' },
      { file: 'wiki/seksuologia/terapia_seksualna.md',  label: 'Terapia seksualna',         status: 'live' },
      { file: 'wiki/seksuologia/trauma_seksualna.md',   label: 'Trauma seksualna',          status: 'live' },
      { file: 'wiki/seksuologia/przemoc_w_dziecinstwie_a_seksualnosc.md', label: 'Przemoc w dziecilstwie, a seksualnosc doroslych', status: 'live' },
      { file: 'wiki/seksuologia/dda_a_seksualnosc.md',    label: 'DDA,, a seksualnosc doroslych', status: 'live' },
      { file: 'wiki/seksuologia/rozw_seksualny.md',     label: 'Rozwoj seksualny',          status: 'live' },
      { file: 'wiki/seksuologia/modele_odpowiedzi.md',  label: 'Modele odpowiedzi seksualnej', status: 'live' },
    ],
    artetherapy: [
      { file: 'wiki/arteterapia/arteterapia_wprowadzenie.md', label: 'Arteterapia', status: 'live' },
      { file: 'wiki/arteterapia/art_therapy.md',   label: 'Arteterapia plastyczna', status: 'live' },
      { file: 'wiki/arteterapia/muzykoterapia.md', label: 'Muzykoterapia',          status: 'live' },
      { file: 'wiki/arteterapia/dmt.md',           label: 'Choreoterapia (DMT)',    status: 'live' },
      { file: 'wiki/arteterapia/drameterapia.md',  label: 'Drameterapia',           status: 'live' },
      { file: 'wiki/arteterapia/biblioterapia.md', label: 'Biblioterapia',          status: 'live' },
      { file: 'wiki/arteterapia/mechanizmy.md',    label: 'Mechanizmy dzialania',   status: 'live' },
      { file: 'wiki/arteterapia/zastosowania.md',  label: 'Zastosowania kliniczne', status: 'live' },
    ],
    animaltherapy: [
      { file: 'wiki/animaloterapia/animaloterapia_wprowadzenie.md', label: 'Animaloterapia', status: 'live' },
      { file: 'wiki/animaloterapia/dogoterapia.md',     label: 'Dogoterapia',          status: 'live' },
      { file: 'wiki/animaloterapia/hipoterapia.md',     label: 'Hipoterapia',          status: 'live' },
      { file: 'wiki/animaloterapia/felinoterapia.md',   label: 'Felinoterapia',        status: 'live' },
      { file: 'wiki/animaloterapia/aat_zastosowania.md',label: 'AAT - zastosowania',  status: 'live' },
      { file: 'wiki/animaloterapia/etyka_aat.md',       label: 'Etyka i dobrostan',   status: 'live' },
      { file: 'wiki/animaloterapia/mechanizmy_aat.md',  label: 'Mechanizmy AAT',      status: 'live' },
    ],
    health_psychology: [
      { file: 'wiki/psychologia_zdrowia/zdrowie_wprowadzenie.md',    label: 'Psychologia zdrowia',                status: 'live' },
      { file: 'wiki/psychologia_zdrowia/model_biopsychospoleczny.md',label: 'Model biopsychospoleczny',           status: 'live' },
      { file: 'wiki/psychologia_zdrowia/stres.md',                   label: 'Stres i zdrowie',                    status: 'live' },
      { file: 'wiki/psychologia_zdrowia/radzenie_sobie.md',          label: 'Radzenie sobie ze stresem',          status: 'live' },
      { file: 'wiki/psychologia_zdrowia/zachowania_zdrowotne.md',    label: 'Zachowania zdrowotne',               status: 'live' },
      { file: 'wiki/psychologia_zdrowia/styl_zycia.md',              label: 'Styl zycia, a zdrowie',              status: 'live' },
      { file: 'wiki/psychologia_zdrowia/sen_zdrowie.md',             label: 'Sen i zdrowie psychiczne',           status: 'live' },
      { file: 'wiki/psychologia_zdrowia/aktywnosc_fizyczna.md',      label: 'Aktywnosc fizyczna, a zdrowie psychiczne',       status: 'live' },
      { file: 'wiki/psychologia_zdrowia/dieta_zdrowie.md',           label: 'Dieta, a zdrowie psychiczne',         status: 'live' },
      { file: 'wiki/psychologia_zdrowia/bol.md',                     label: 'Psychologia bolu',                   status: 'live' },
      { file: 'wiki/psychologia_zdrowia/bol_chroniczny.md',          label: 'Przewlekly BBl',                     status: 'live' },
      { file: 'wiki/psychologia_zdrowia/choroby_przewlekle.md',      label: 'Psychologia chorob przewleklych',    status: 'live' },
      { file: 'wiki/psychologia_zdrowia/psychoonkologia.md',         label: 'Psychoonkologia',                    status: 'live' },
      { file: 'wiki/psychologia_zdrowia/choroby_ukladu_krazenia.md', label: 'Choroby ukladu krazenia',            status: 'live' },
      { file: 'wiki/psychologia_zdrowia/cukrzyca.md',                label: 'Psychologia cukrzycy',               status: 'live' },
      { file: 'wiki/psychologia_zdrowia/jakosc_zycia.md',            label: 'Jakosc zycia, a choroba',            status: 'live' },
      { file: 'wiki/psychologia_zdrowia/promocja_zdrowia.md',        label: 'Promocja zdrowia i profilaktyka',    status: 'live' },
      { file: 'wiki/psychologia_zdrowia/psychoneuroimmunologia.md',  label: 'Psychoneuroimmunologia',             status: 'live' },
      { file: 'wiki/psychologia_zdrowia/placebo.md',                 label: 'Efekt placebo i nocebo',             status: 'live' },
      { file: 'wiki/psychologia_zdrowia/wsparcie_spoleczne.md',      label: 'Wsparcie spoleczne, a zdrowie',       status: 'live' },
      { file: 'wiki/psychologia_zdrowia/adherencja.md',              label: 'Adherencja terapeutyczna',           status: 'live' },
      { file: 'wiki/psychologia_zdrowia/komunikacja_medyczna.md',    label: 'Komunikacja lekarzdz pacjent',         status: 'live' },
      { file: 'wiki/psychologia_zdrowia/interwencje_zdrowotne.md',   label: 'Interwencje psychologiczne w medycynie',         status: 'live' },
      { file: 'wiki/psychologia_zdrowia/rehabilitacja.md',           label: 'Rehabilitacja psychologiczna',       status: 'live' },
      { file: 'wiki/psychologia_zdrowia/wypalenie_zawodowe.md',      label: 'Wypalenie zawodowe',                 status: 'live' },
    ],
    psychosomatics: [
      { file: 'wiki/psychosomatyka/wprowadzenie.md',               label: 'Psychosomatyka',                      status: 'live' },
      { file: 'wiki/psychosomatyka/historia.md',                   label: 'Historia psychosomatyki',             status: 'live' },
      { file: 'wiki/psychosomatyka/modele_psychosomatyczne.md',    label: 'Modele psychosomatyczne',             status: 'live' },
      { file: 'wiki/psychosomatyka/os_hpa.md',                     label: 'Os HPA i mechanizmy stresu',          status: 'live' },
      { file: 'wiki/psychosomatyka/aleksytymia.md',                label: 'Aleksytymia',                         status: 'live' },
      { file: 'wiki/psychosomatyka/somatyzacja.md',                label: 'Somatyzacja i zaburzenia somatyczne', status: 'live' },
      { file: 'wiki/psychosomatyka/bol_psychosomatyczny.md',       label: 'BBl psychosomatyczny',                status: 'live' },
      { file: 'wiki/psychosomatyka/psychodermatologia.md',         label: 'Psychodermatologia',                  status: 'live' },
      { file: 'wiki/psychosomatyka/psychogastroenterologia.md',    label: 'Psychogastroenterologia',             status: 'live' },
      { file: 'wiki/psychosomatyka/psychokardiologia.md',          label: 'Psychokardiologia',                   status: 'live' },
      { file: 'wiki/psychosomatyka/uklad_oddechowy.md',            label: 'Psychosomatyka ukladu oddechowego',   status: 'live' },
      { file: 'wiki/psychosomatyka/choroby_autoimmunologiczne.md', label: 'Choroby autoimmunologiczne',          status: 'live' },
      { file: 'wiki/psychosomatyka/diagnoza_psychosomatyczna.md',  label: 'Diagnoza psychosomatyczna',           status: 'live' },
      { file: 'wiki/psychosomatyka/terapia_psychosomatyczna.md',   label: 'Terapia psychosomatyczna',            status: 'live' },
    ],
    disability_psychology: [
      { file: 'wiki/psychologia_niepelnosprawnosci/wprowadzenie.md',                  label: 'Psychologia niepelnosprawnosci - wprow.',       status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/modele_niepelnosprawnosci.md',     label: 'Modele niepelnosprawnosci',                     status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna.md', label: 'Niepelnosprawnosc intelektualna',             status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa.md',     label: 'Niepelnosprawnosc ruchowa',                     status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa.md',    label: 'Niepelnosprawnosc wzrokowa',                    status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa.md',    label: 'Niepelnosprawnosc sluchowa',                    status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/autyzm_niepelnosprawnosc.md',      label: 'Spektrum autyzmu i niepelnosprawnosc',          status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/jakosc_zycia.md',                  label: 'Jakosc zycia osob z niepelnosprawnoscia',       status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/stres_i_adaptacja.md',             label: 'Stres, adaptacja i radzenie sobie',             status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/rodzina_i_opiekunowie.md',         label: 'Rodzina i opiekunowie',                        status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/rehabilitacja_psychologiczna.md',  label: 'Rehabilitacja psychologiczna',                 status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/inkluzja_spoleczna.md',            label: 'Inkluzja spoleczna i prawa',                   status: 'live' },
    ],
    intro: [
      { file: 'wiki/wstep_do_psychologii/definicja.md', label: 'Definicja i zakres',  status: 'live' },
      { file: 'wiki/wstep_do_psychologii/historia.md',  label: 'Historia dyscypliny', status: 'live' },
      { file: 'wiki/wstep_do_psychologii/nurty_psychologii.md',  label: 'Glowne nurty psychologii', status: 'live' },
      { file: 'wiki/wstep_do_psychologii/etyka_badan_psychologicznych.md',  label: 'Etyka badal psychologicznych', status: 'live' },
    ],
    cases: [
      { file: 'wiki/przypadki_kliniczne/hm.md',            label: 'H.M. - amnezja',  status: 'live' },
      { file: 'wiki/przypadki_kliniczne/gage.md',          label: 'Phineas Gage', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/tan.md',           label: 'dz ~Tan" - afazja', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/split_brain.md',   label: 'Rozdzielony mozg', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/clive_wearing.md', label: 'Clive Wearing', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/elliot.md',        label: 'Elliot', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/df.md',            label: 'Pacjentka D.F.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/kc.md',            label: 'Pacjent K.C.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/na.md',            label: 'Pacjent N.A.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/patient_kn.md',    label: 'Pacjent K.N.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/patient_rb.md',    label: 'Pacjent R.B.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/ps.md',            label: 'Pacjent P.S.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/sm.md',            label: 'Pacjentka S.M. (uszkodzenie ciala migdalowatego)', status: 'live' },
    ],
    reference: [
      { file: 'wiki/reference/zakres.md',               label: 'Zakres wiedzy',                               status: 'live' },
      { file: 'wiki/reference/literatura.md',           label: 'Literatura',                                  status: 'live' },
      { file: 'wiki/reference/bibliografia_portalu.md', label: 'Bibliografia portalu',                        status: 'live' },
      { file: 'wiki/reference/skale_i_akronimy.md',     label: 'Skale i akronimy diagnostyczne',              status: 'live' },
      { file: 'wiki/reference/przepisy_zawod.md',       label: 'Przepisy i zasady pracy psychologa',          status: 'live' },
      { file: 'wiki/reference/etyka_psychologa.md',     label: 'Etyka zawodowa psychologa i psychoterapeuty', status: 'live' },
      { file: 'wiki/reference/mapa_powiazan_nowe_artykuly.md', label: 'Mapa powiazal nowych artykulow', status: 'live' },
    ],
    geropsychology: [
      { file: 'wiki/geropsychologia/wprowadzenie.md',               label: 'Psychologia starosci',  status: 'live' },
      { file: 'wiki/geropsychologia/starzenie_poznawcze.md',        label: 'Starzenie sie poznawcze',              status: 'live' },
      { file: 'wiki/geropsychologia/demencja.md',                   label: 'Demencja i choroby neurodegeneracyjne',status: 'live' },
      { file: 'wiki/geropsychologia/depresja_starszych.md',         label: 'Depresja u osob starszych',            status: 'live' },
      { file: 'wiki/geropsychologia/samotnosc.md',                  label: 'Samotnosc i izolacja spoleczna',       status: 'live' },
      { file: 'wiki/geropsychologia/jakosc_zycia_starszych.md',     label: 'Jakosc zycia w starosci',              status: 'live' },
      { file: 'wiki/geropsychologia/aktywnosc_poznawcza.md',        label: 'Aktywnosc poznawcza i trening umyslu', status: 'live' },
      { file: 'wiki/geropsychologia/umieranie_smierc.md',           label: 'Psychologia umierania i smierci',      status: 'live' },
      { file: 'wiki/geropsychologia/relacje_spoleczne_starszych.md',label: 'Relacje spoleczne i wsparcie rodziny', status: 'live' },
      { file: 'wiki/geropsychologia/adaptacja_do_starosci.md',      label: 'Adaptacja do starosci i rezyliencja',  status: 'live' },
      { file: 'wiki/geropsychologia/interwencje_terapeutyczne.md',  label: 'Interwencje terapeutyczne',            status: 'live' },
      { file: 'wiki/geropsychologia/opieka_nad_opiekunami.md',      label: 'Wypalenie i wsparcie opiekunow',       status: 'live' },
    ],
    game_psychology: [
      { file: 'wiki/psychologia_gier/wprowadzenie.md',         label: 'Psychologia gier wideo', status: 'live' },
      { file: 'wiki/psychologia_gier/uzaleznienie_od_gier.md', label: 'Uzaleznienie od gier (IGD)',            status: 'live' },
      { file: 'wiki/psychologia_gier/agresja_a_gry.md',        label: 'Agresja, a gry wideo',                  status: 'live' },
      { file: 'wiki/psychologia_gier/efekty_poznawcze.md',     label: 'Efekty poznawcze grania',               status: 'live' },
      { file: 'wiki/psychologia_gier/motywacja_gracza.md',     label: 'Motywacja gracza',                      status: 'live' },
      { file: 'wiki/psychologia_gier/flow_i_immersja.md',      label: 'Przeplyw (flow) i immersja',            status: 'live' },
      { file: 'wiki/psychologia_gier/gry_spolecznosciowe.md',  label: 'Gry wieloosobowe i aspekty spoleczne',  status: 'live' },
      { file: 'wiki/psychologia_gier/esport.md',               label: 'Esport i psychologia zawodnika',        status: 'live' },
      { file: 'wiki/psychologia_gier/gry_a_dzieci.md',         label: 'Gry wideo, a dzieci i nastolatki',      status: 'live' },
      { file: 'wiki/psychologia_gier/gender_w_grach.md',       label: 'Plec i tozsamosc w grach',              status: 'live' },
      { file: 'wiki/psychologia_gier/gry_terapeutyczne.md',    label: 'Gry w terapii i rehabilitacji',         status: 'live' },
      { file: 'wiki/psychologia_gier/klasyfikacja_gier.md',    label: 'Klasyfikacja gier (PEGI, ESRB)',        status: 'live' },
    ],
    resilience_mobbing: [
      { file: 'wiki/rezyliencja_i_mobbing/odpornosc_wprowadzenie.md',  label: 'Odpornosc psychiczna',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/modele_odpornosci.md',       label: 'Modele i teorie odpornosci',               status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/budowanie_odpornosci.md',    label: 'Budowanie odpornosci psychicznej',         status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/przemoc_psychiczna.md',      label: 'Przemoc psychiczna - definicja i formy',   status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_definicja.md',       label: 'Mobbing - definicja, rodzaje i fazy',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_skutki.md',          label: 'Skutki psychologiczne mobbingu',           status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_interwencja.md',     label: 'Interwencja i zapobieganie mobbingowi',    status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md',      label: 'Wypalenie zawodowe - definicja i modele',  status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/fazy_wypalenia.md',          label: 'Fazy i wymiary wypalenia zawodowego',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawody.md',        label: 'Wypalenie w wybranych zawodach',           status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/profilaktyka_wypalenia.md',  label: 'Profilaktyka wypalenia zawodowego',        status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wsparcie_psychologiczne.md', label: 'Wsparcie psychologiczne ofiar',            status: 'live' },
    ],

    media_nature: [
      { file: 'wiki/ekrany_ksiazki_i_natura/wprowadzenie.md',             label: 'Ekrany, ksiazki i natura',                    status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/ekrany_funkcje_poznawcze.md', label: 'Ekrany, a funkcje poznawcze',                 status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/smartfony_psychologia.md',    label: 'Smartfony, a psychologia',                    status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/tablety_dzieci.md',           label: 'Tablety, a Rozwoj poznawczy dzieci',          status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/telewizja_psychologia.md',    label: 'Telewizja, a funkcje psychiczne',             status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/czas_ekranowy.md',            label: 'Czas ekranowy, a zdrowie psychiczne',         status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/czytanie_ksiazek.md',         label: 'Czytanie ksiazek, a funkcje psychiczne',      status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/gleboke_czytanie.md',         label: 'Glebokie czytanie',                           status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/czytanie_fikcja_empatia.md',  label: 'Czytanie fikcji, a empatia i ToM',            status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/natura_psychologia.md',       label: 'Natura, a psychologia',                       status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/las_shinrin_yoku.md',         label: 'Kapiel lesna - shinrin-yoku',                 status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/gory_psychologia.md',         label: 'Gory i wedrowki gorskie, a psychologia',      status: 'live' },
    ],

    positive_psychology: [
      { file: 'wiki/psychologia_pozytywna/wprowadzenie.md',           label: 'Psychologia pozytywna',                  status: 'live' },
      { file: 'wiki/psychologia_pozytywna/model_perma.md',            label: 'Model PERMA',                            status: 'live' },
      { file: 'wiki/psychologia_pozytywna/szczescie_dobrostan.md',    label: 'Szczescie i dobrostan psychiczny',       status: 'live' },
      { file: 'wiki/psychologia_pozytywna/optymizm_nadzieja.md',      label: 'Optymizm i nadzieja',                    status: 'live' },
      { file: 'wiki/psychologia_pozytywna/3p_optymizmu_seligmana.md', label: '3P optymizmu Seligmana',                 status: 'live' },
      { file: 'wiki/psychologia_pozytywna/przeplyw_flow.md',          label: 'Przeplyw (flow)',                        status: 'live' },
      { file: 'wiki/psychologia_pozytywna/sily_charakteru.md',        label: 'Sily charakteru (VIA)',                  status: 'live' },
      { file: 'wiki/psychologia_pozytywna/wdziecznosc.md',            label: 'Wdziecznosc',                            status: 'live' },
      { file: 'wiki/psychologia_pozytywna/mindfulness.md',            label: 'Mindfulness i uwaznosc',                 status: 'live' },
      { file: 'wiki/psychologia_pozytywna/wspolczucie_dla_siebie.md', label: 'Wspolczucie dla siebie',                 status: 'live' },
      { file: 'wiki/psychologia_pozytywna/sens_i_cel.md',             label: 'Sens zycia i poczucie celu',             status: 'live' },
      { file: 'wiki/psychologia_pozytywna/relacje_pozytywne.md',      label: 'Pozytywne relacje i milosc',             status: 'live' },
      { file: 'wiki/psychologia_pozytywna/interwencje_pozytywne.md',  label: 'Interwencje psychologii pozytywnej',     status: 'live' },
    ],
    ai_psychology: [
      { file: 'wiki/psychologia_ai/wprowadzenie.md',          label: 'Psychologia AI',                            status: 'live' },
      { file: 'wiki/psychologia_ai/historia_ai.md',           label: 'Historia AI i psychologia',                 status: 'live' },
      { file: 'wiki/psychologia_ai/czlowiek_a_ai.md',         label: 'Interakcja czlowiek-AI',                    status: 'live' },
      { file: 'wiki/psychologia_ai/zaufanie_do_ai.md',        label: 'Zaufanie do sztucznej inteligencji',        status: 'live' },
      { file: 'wiki/psychologia_ai/uprzedzenia_ai.md',        label: 'Uprzedzenia i bledy poznawcze w AI',        status: 'live' },
      { file: 'wiki/psychologia_ai/etyka_ai.md',              label: 'Etyka AI z perspektywy psychologicznej',    status: 'live' },
      { file: 'wiki/psychologia_ai/ai_emocje.md',             label: 'AI, a emocje i rozumienie emocji',          status: 'live' },
      { file: 'wiki/psychologia_ai/decyzje_ai.md',            label: 'AI, a podejmowanie decyzji',                status: 'live' },
      { file: 'wiki/psychologia_ai/ai_w_terapii.md',          label: 'AI w psychoterapii i diagnostyce',          status: 'live' },
      { file: 'wiki/psychologia_ai/ai_poznawcze.md',          label: 'Poznawcze aspekty dzialania AI',            status: 'live' },
      { file: 'wiki/psychologia_ai/antropomorfizacja_ai.md',  label: 'Antropomorfizacja AI',                      status: 'live' },
      { file: 'wiki/psychologia_ai/przyszlosc_ai.md',         label: 'Przyszlosc relacji czlowiek-AI',            status: 'live' },
    ],
    technology_psychology: [
      { file: 'wiki/psychologia_technologii/technostres.md',            label: 'Technostres - artykul naukowy',                      status: 'live' },
      { file: 'wiki/psychologia_technologii/zmeczenie_cyfrowe.md',      label: 'Zmeczenie cyfrowe i przeciazenie informacyjne',      status: 'live' },
      { file: 'wiki/psychologia_technologii/fomo_i_nomofobia.md',       label: 'FOMO i nomofobia',                                   status: 'live' },
      { file: 'wiki/psychologia_technologii/algorytmy_a_samoocena.md',  label: 'Algorytmy personalizacji, a samoocena',              status: 'live' },
      { file: 'wiki/psychologia_technologii/higiena_cyfrowa.md',        label: 'Higiena cyfrowa i profilaktyka przeciazenia',        status: 'live' },
      { file: 'wiki/psychologia_technologii/technologia_w_pracy.md',    label: 'Technologia w pracy: granice, kontrola i autonomia', status: 'live' },
      { file: 'wiki/psychologia_technologii/technologia_a_sen.md',      label: 'Technologia, a sen i regeneracja psychiczna',        status: 'live' },
      { file: 'wiki/psychologia_technologii/psychoedukacja_rodzinna.md',label: 'Psychoedukacja rodzinna w erze ekranow',             status: 'live' },
    ],
    affective_robotics: [
      { file: 'wiki/robotyka_afektywna/wprowadzenie.md',                    label: 'Robotyka afektywna',                        status: 'live' },
      { file: 'wiki/robotyka_afektywna/historia_robotyki_afektywnej.md',    label: 'Historia robotyki afektywnej',              status: 'live' },
      { file: 'wiki/robotyka_afektywna/emocje_robotow.md',                  label: 'Emocje w robotach',                         status: 'live' },
      { file: 'wiki/robotyka_afektywna/dolina_niesamowitosci.md',           label: 'Dolina niesamowitosci',                     status: 'live' },
      { file: 'wiki/robotyka_afektywna/roboty_spoleczne.md',                label: 'Roboty spoleczne i HRI',                    status: 'live' },
      { file: 'wiki/robotyka_afektywna/kognitywistyka_obliczeniowa.md',     label: 'Kognitywistyka obliczeniowa',               status: 'live' },
      { file: 'wiki/robotyka_afektywna/percepcja_robotow.md',               label: 'Percepcja i ocena robotow przez ludzi',     status: 'live' },
      { file: 'wiki/robotyka_afektywna/roboty_w_opiece.md',                 label: 'Roboty w opiece i terapii',                 status: 'live' },
      { file: 'wiki/robotyka_afektywna/swiadomosc_maszyn.md',               label: 'lawiadomosc i podmiotowosc maszyn',         status: 'live' },
      { file: 'wiki/robotyka_afektywna/wspolpraca_czlowiek_robot.md',       label: 'Wspolpraca czlowiekdz robot (HRC)',         status: 'live' },
      { file: 'wiki/robotyka_afektywna/interfejsy_mozg_maszyna.md',         label: 'Interfejsy mozgdz maszyna (BCI)',           status: 'live' },
      { file: 'wiki/robotyka_afektywna/przyszlosc_robotyki_afektywnej.md',  label: 'Przyszlosc robotyki afektywnej',            status: 'live' },
    ],
    school_psychology: [
      { file: 'wiki/psychologia_szkolna/wprowadzenie.md',                 label: 'Psychologia szkolna',                       status: 'live' },
      { file: 'wiki/psychologia_szkolna/neurodydaktyka.md',               label: 'Neurodydaktyka',                            status: 'live' },
      { file: 'wiki/psychologia_szkolna/teorie_uczenia_sie.md',           label: 'Teorie uczenia sie',                        status: 'live' },
      { file: 'wiki/psychologia_szkolna/strefa_najblizszego_rozwoju.md',  label: 'Strefa najblizszego rozwoju (ZPD)',         status: 'live' },
      { file: 'wiki/psychologia_szkolna/motywacja_szkolna.md',            label: 'Motywacja szkolna',                         status: 'live' },
      { file: 'wiki/psychologia_szkolna/inteligencja_wieloraka.md',       label: 'Inteligencje wielorakie (Gardner)',         status: 'live' },
      { file: 'wiki/psychologia_szkolna/trudnosci_w_uczeniu_sie.md',      label: 'Trudnosci w uczeniu sie',                   status: 'live' },
      { file: 'wiki/psychologia_szkolna/adhd_w_szkole.md',                label: 'ADHD w srodowisku szkolnym',                status: 'live' },
      { file: 'wiki/psychologia_szkolna/relacje_nauczyciel_uczen.md',     label: 'Relacje nauczycieldz uczel',                status: 'live' },
      { file: 'wiki/psychologia_szkolna/klimat_szkolny.md',               label: 'Klimat szkolny',                            status: 'live' },
      { file: 'wiki/psychologia_szkolna/bullying.md',                     label: 'Bullying w szkole',                         status: 'live' },
      { file: 'wiki/psychologia_szkolna/ocenianie_i_feedback.md',         label: 'Ocenianie i informacja zwrotna',            status: 'live' },
      { file: 'wiki/psychologia_szkolna/stres_szkolny.md',                label: 'Stres szkolny i lek egzaminacyjny',         status: 'live' },
      { file: 'wiki/psychologia_szkolna/interwencje_szkolne.md',          label: 'Interwencje psychologiczne w szkole',       status: 'live' },
    ],
    neurodiversity: [
      { file: 'wiki/neuroroznorodnosc/wprowadzenie.md',               label: 'Neuroroznorodnosc',                    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/adhd.md',                       label: 'ADHD jako wariant neuroroznorodnosci', status: 'live' },
      { file: 'wiki/neuroroznorodnosc/spektrum_autyzmu.md',           label: 'Spektrum autyzmu (ASD)',               status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dysleksja.md',                  label: 'Dysleksja',                            status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dyskalkulia.md',                label: 'Dyskalkulia',                          status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dyspraksja.md',                 label: 'Dyspraksja i DCD',                     status: 'live' },
      { file: 'wiki/neuroroznorodnosc/profil_sensoryczny.md',         label: 'Profil sensoryczny',                   status: 'live' },
      { file: 'wiki/neuroroznorodnosc/tourette.md',                   label: "Zespol Tourette'a i tiki",             status: 'live' },
      { file: 'wiki/neuroroznorodnosc/hiperleksja.md',                label: 'Hiperleksja i wyjatkowe zdolnosci',    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/model_mocnych_stron.md',        label: 'Model mocnych stron',                  status: 'live' },
      { file: 'wiki/neuroroznorodnosc/wsparcie_interwencje.md',       label: 'Wsparcie i interwencje',               status: 'live' },
      { file: 'wiki/neuroroznorodnosc/neurozroznorodnosc_w_pracy.md', label: 'Neuroroznorodnosc w miejscu pracy',    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/identyfikacja_i_diagnoza.md',   label: 'Identyfikacja i diagnoza',             status: 'live' },
    ],
    forensic_psychology: [
      { file: 'wiki/psychologia_sadowa/wprowadzenie.md',            label: 'Biegly psycholog',                      status: 'live' },
      { file: 'wiki/psychologia_sadowa/rola_bieglego.md',           label: 'Rola i status bieglego',                status: 'live' },
      { file: 'wiki/psychologia_sadowa/podstawy_prawne.md',         label: 'Podstawy prawne opiniowania',           status: 'live' },
      { file: 'wiki/psychologia_sadowa/metodologia_opinii.md',      label: 'Metodologia sporzadzania opinii',       status: 'live' },
      { file: 'wiki/psychologia_sadowa/ocena_wiarygodnosci.md',     label: 'Ocena wiarygodnosci zeznal',            status: 'live' },
      { file: 'wiki/psychologia_sadowa/opinia_karna.md',            label: 'Opiniowanie w sprawach karnych',        status: 'live' },
      { file: 'wiki/psychologia_sadowa/opinia_cywilna.md',          label: 'Opiniowanie w sprawach cywilnych',      status: 'live' },
      { file: 'wiki/psychologia_sadowa/opinia_rodzinna.md',         label: 'Opiniowanie w sprawach rodzinnych',     status: 'live' },
      { file: 'wiki/psychologia_sadowa/narzedzia_diagnostyczne.md', label: 'Narzedzia diagnostyczne (sadowe)',      status: 'live' },
      { file: 'wiki/psychologia_sadowa/etyka_opiniowania.md',       label: 'Etyka opiniowania sadowego',            status: 'live' },
      { file: 'wiki/psychologia_sadowa/opiniowanie_nieletnich.md',  label: 'Opiniowanie nieletnich i dzieci',       status: 'live' },
      { file: 'wiki/psychologia_sadowa/biegly_a_sad.md',            label: 'Biegly, a sad - komunikacja',           status: 'live' },
    ],
    e_therapy: [
      { file: 'wiki/e_terapia/wprowadzenie.md',                   label: 'E-terapia',                              status: 'live' },
      { file: 'wiki/e_terapia/historia_e_terapii.md',             label: 'Historia e-terapii',                     status: 'live' },
      { file: 'wiki/e_terapia/terapia_online.md',                 label: 'Terapia online (wideo, telefon, czat)',  status: 'live' },
      { file: 'wiki/e_terapia/platformy_e_terapii.md',            label: 'Platformy i narzedzia e-terapii',        status: 'live' },
      { file: 'wiki/e_terapia/skutecznosc_e_terapii.md',          label: 'Skutecznosc e-terapii',                  status: 'live' },
      { file: 'wiki/e_terapia/etyka_e_terapii.md',                label: 'Etyka e-terapii',                        status: 'live' },
      { file: 'wiki/e_terapia/chatboty_terapeutyczne.md',         label: 'Chatboty terapeutyczne i AI',            status: 'live' },
      { file: 'wiki/e_terapia/aplikacje_zdrowia_psychicznego.md', label: 'Aplikacje zdrowia psychicznego (mHealth)',status: 'live' },
      { file: 'wiki/e_terapia/vr_terapia.md',                     label: 'Wirtualna rzeczywistosc w terapii',      status: 'live' },
      { file: 'wiki/e_terapia/e_terapia_dzieci.md',               label: 'E-terapia dzieci i mlodziezy',           status: 'live' },
      { file: 'wiki/e_terapia/dostepnosc_cyfrowa.md',             label: 'Dostepnosc i wykluczenie cyfrowe',       status: 'live' },
      { file: 'wiki/e_terapia/przyszlosc_e_terapii.md',           label: 'Przyszlosc e-terapii',                   status: 'live' },
    ],
    philosophy: [
      { file: 'wiki/filozofia/wprowadzenie.md',        label: 'Filozofia',                       status: 'live' },
      { file: 'wiki/filozofia/ontologia.md',           label: 'Ontologia i metafizyka',          status: 'live' },
      { file: 'wiki/filozofia/epistemologia.md',       label: 'Epistemologia i teoria poznania', status: 'live' },
      { file: 'wiki/filozofia/egocentryczny_dylemat.md',label: 'Egocentryczny dylemat poznania', status: 'live' },
      { file: 'wiki/filozofia/etyka.md',               label: 'Etyka i filozofia moralna',       status: 'live' },
      { file: 'wiki/filozofia/filozofia_umyslu.md',    label: 'Filozofia umyslu',                status: 'live' },
      { file: 'wiki/filozofia/filozofia_nauki.md',     label: 'Filozofia nauki',                 status: 'live' },
      { file: 'wiki/filozofia/egzystencjalizm.md',     label: 'Egzystencjalizm',                 status: 'live' },
      { file: 'wiki/filozofia/fenomenologia.md',       label: 'Fenomenologia',                   status: 'live' },
      { file: 'wiki/filozofia/hermeneutyka.md',        label: 'Hermeneutyka i interpretacja',    status: 'live' },
      { file: 'wiki/filozofia/logika.md',              label: 'Logika i argumentacja',           status: 'live' },
      { file: 'wiki/filozofia/filozofia_jezyka.md',    label: 'Filozofia jezyka',                status: 'live' },
      { file: 'wiki/filozofia/filozofia_czlowieka.md',       label: 'Filozofia czlowieka',                        status: 'live' },
      { file: 'wiki/filozofia/cien_antropiczny.md',          label: 'Ciel antropiczny',                           status: 'live' },
      { file: 'wiki/filozofia/mozg_boltzmanna.md',           label: 'Mozg Boltzmanna',                            status: 'live' },
      { file: 'wiki/filozofia/horror_panpsychizmu.md',       label: 'Horror panpsychizmu',                        status: 'live' },
      { file: 'wiki/filozofia/filozoficzne_zombie.md',       label: 'Filozoficzne zombie',                        status: 'live' },
      { file: 'wiki/filozofia/pusty_indywidualizm.md',       label: 'Pusty indywidualizm',                        status: 'live' },
      { file: 'wiki/filozofia/asymetria_dobra_i_bolu.md',    label: 'Asymetria dobra i bolu',                     status: 'live' },
      { file: 'wiki/filozofia/niemoralnosc_braku_zgody.md',  label: 'Niemoralnosc braku zgody na narodziny',      status: 'live' },
      { file: 'wiki/filozofia/redukcjonizm_tozsamosci.md',   label: 'Redukcjonizm tozsamosci osobowej',           status: 'live' },
      { file: 'wiki/filozofia/eliminatywizm_materialny.md',  label: 'Eliminatywizm materialny',                   status: 'live' },
      { file: 'wiki/filozofia/efilizm.md',                   label: 'Efilizm',                                    status: 'live' },
      { file: 'wiki/filozofia/pesymizm_biologiczny.md',      label: 'Pesymizm biologiczny',                       status: 'live' },
      { file: 'wiki/filozofia/podswiadomy_nihilizm.md',      label: 'Podswiadomy nihilizm',                       status: 'live' },
      { file: 'wiki/filozofia/paradoksalny_determinizm.md',  label: 'Paradoksalny determinizm',                   status: 'live' },
      { file: 'wiki/filozofia/realizm_modalny.md',           label: 'Realizm modalny',                            status: 'live' },
    ],
    nvc: [
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/wprowadzenie.md',            label: 'NVC',                                   status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/cztery_komponenty.md',       label: 'Cztery komponenty NVC',                 status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/obserwacja.md',              label: 'Obserwacja bez oceniania',              status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/uczucia.md',                 label: 'Uczucia w NVC',                         status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/potrzeby.md',                label: 'Katalog potrzeb',                       status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/prosba_i_zadanie.md',        label: 'Prosba, a zadanie',                     status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/empatia_nvc.md',             label: 'Empatia w NVC',                         status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/jezyk_szakala_i_zyrafy.md',  label: 'Jezyk szakala i zyrafy',                status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/autoempatia.md',             label: 'Autoempatia i samowspolczucie',         status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_konfliktach.md',       label: 'NVC w rozwiazywaniu konfliktow',        status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_wychowaniu.md',        label: 'NVC w wychowaniu i edukacji',           status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/praktyka_nvc.md',            label: 'Praktyka NVC w codziennym zyciu',       status: 'live' },
    ],
    ppd: [
      { file: 'wiki/seminarium_dyplomowe/wprowadzenie.md',           label: 'Seminarium dyplomowe',                  status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/struktura_pracy.md',        label: 'Struktura pracy magisterskiej',         status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/przeglad_literatury.md',    label: 'Przeglad literatury naukowej',          status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/metodologia_badan.md',      label: 'Metodologia badal psychologicznych',    status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/pomiary_psychologiczne.md', label: 'Zasady prowadzenia pomiarow',           status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/narzedzia_badawcze.md',     label: 'Narzedzia badawcze i kwestionariusze',  status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/analizy_statystyczne.md',   label: 'Analizy statystyczne',                 status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/etyka_badan.md',            label: 'Etyka badal naukowych',                status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/bledy_badawcze.md',         label: 'Bledy badawcze - czego unikac',        status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/opis_wynikow.md',           label: 'Pisanie i interpretacja wynikow',      status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/obrona_pracy.md',           label: 'Obrona pracy magisterskiej',           status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/dobre_praktyki.md',         label: 'Dobre praktyki w pisaniu pracy',       status: 'live' },
    ],
    kulturowa: [
      { file: 'wiki/kulturowa/wprowadzenie.md',                  label: 'Czym jest psychologia kulturowa?',     status: 'live' },
      { file: 'wiki/kulturowa/metody.md',                        label: 'Metody: emic vs. etic',                status: 'live' },
      { file: 'wiki/kulturowa/indywidualizm_kolektywizm.md',     label: 'Wymiar indywidualizmdz kolektywizm',     status: 'live' },
      { file: 'wiki/kulturowa/kultura_percepcja.md',             label: 'Kultura, a percepcja i uwaga',         status: 'live' },
      { file: 'wiki/kulturowa/kulturowe_modele_ja.md',           label: 'Kulturowe modele Ja',                  status: 'live' },
      { file: 'wiki/kulturowa/kultura_zdrowie.md',               label: 'Kultura, a zdrowie psychiczne',        status: 'live' },
      { file: 'wiki/kulturowa/kultura_emocje.md',       label: 'Kultura, a emocje',                   status: 'live' },
      { file: 'wiki/kulturowa/akulturacja.md',          label: 'Akulturacja i adaptacja kulturowa',   status: 'live' },
      { file: 'wiki/kulturowa/kultura_jezyk.md',        label: 'Kultura, a jezyk (Sapir-Whorf)',      status: 'live' },
      { file: 'wiki/kulturowa/kultura_osobowosc.md',    label: 'Kultura, a osobowosc',                status: 'live' },
      { file: 'wiki/kulturowa/wschodnia_zachodnia.md',  label: 'Psychologia Wschodu i Zachodu',       status: 'live' },
      { file: 'wiki/kulturowa/kultura_relacje.md',      label: 'Kultura, a relacje interpersonalne',  status: 'live' },
    ],
    uzaleznienia: [
      { file: 'wiki/uzaleznienia/kryteria_diagnostyczne.md',     label: 'Kryteria diagnostyczne',             status: 'live' },
      { file: 'wiki/uzaleznienia/dialog_motywujacy.md',          label: 'Dialog motywujacy',                  status: 'live' },
      { file: 'wiki/uzaleznienia/zapobieganie_nawrotom.md',      label: 'Zapobieganie nawrotom',              status: 'live' },
      { file: 'wiki/uzaleznienia/uzaleznienia_mlodziezy.md',     label: 'Uzaleznienia u mlodziezy',           status: 'live' },
      { file: 'wiki/uzaleznienia/wspoluzaleznienie.md',          label: 'Wspoluzaleznienie',                  status: 'live' },
      { file: 'wiki/uzaleznienia/profilaktyka.md',               label: 'Profilaktyka',                       status: 'live' },
      { file: 'wiki/uzaleznienia/uzaleznienia_behawioralne.md', label: 'Uzaleznienia behawioralne',              status: 'live' },
      { file: 'wiki/uzaleznienia/neurobiologia_uzaleznien.md',  label: 'Neurobiologia uzalezniel',               status: 'live' },
      { file: 'wiki/uzaleznienia/rodzina_w_uzaleznieniach.md',  label: 'Rodzina w systemie uzaleznienia',        status: 'live' },
      { file: 'wiki/uzaleznienia/internet_uzaleznienie.md',     label: 'Uzaleznienie od internetu i technologii',status: 'live' },
      { file: 'wiki/uzaleznienia/terapia_grupowa.md',           label: 'Terapia grupowa w uzaleznieniach',       status: 'live' },
      { file: 'wiki/uzaleznienia/recovery.md',                  label: 'Recovery - droga do zdrowia',            status: 'live' },
    ],
    relacje: [
      { file: 'wiki/relacje/przywiezanie_doroslych.md',          label: 'Style przywiazania u doroslych',     status: 'live' },
      { file: 'wiki/relacje/trojkatna_teoria_milosci.md',        label: 'Triangularna teoria milosci',        status: 'live' },
      { file: 'wiki/relacje/dobor_partnera.md',                  label: 'Dobor partnera',                     status: 'live' },
      { file: 'wiki/relacje/komunikacja_para.md',                label: 'Komunikacja w parze',                status: 'live' },
      { file: 'wiki/relacje/konflikty.md',                       label: 'Konflikty i ich rozwiazywanie',      status: 'live' },
      { file: 'wiki/relacje/zdrada.md',                          label: 'Zdrada i odbudowa zaufania',         status: 'live' },
      { file: 'wiki/relacje/terapia_par.md',                     label: 'Terapia par',                        status: 'live' },
      { file: 'wiki/relacje/przemoc_zwiazki.md',                 label: 'Przemoc w zwiazkach',                status: 'live' },
      { file: 'wiki/relacje/samotnosc.md',                       label: 'Samotnosc i izolacja spoleczna',     status: 'live' },
      { file: 'wiki/relacje/przyjaznie.md',                      label: 'Przyjal_l',                           status: 'live' },
      { file: 'wiki/relacje/rozstanie.md',                       label: 'Rozpad zwiazku i zaloba relacyjna',  status: 'live' },
      { file: 'wiki/relacje/relacje_rodzinne.md',                label: 'Relacje rodzinne - dynamika',        status: 'live' },
    ],
    etyka: [
      { file: 'wiki/etyka/kodeksy_etyczne.md',                   label: 'Kodeksy etyczne - przeglad',         status: 'live' },
      { file: 'wiki/etyka/zasady_apa_ptp.md',                    label: 'Zasady APA i PTP',                   status: 'live' },
      { file: 'wiki/etyka/dobro_nieszkodzenie.md',               label: 'Dobro i nieszkodzenie',              status: 'live' },
      { file: 'wiki/etyka/tajemnica_zawodowa_granice.md',        label: 'Tajemnica zawodowa i jej granice',   status: 'live' },
      { file: 'wiki/etyka/swiadoma_zgoda.md',                    label: 'lawiadoma zgoda',                     status: 'live' },
      { file: 'wiki/etyka/granice_relacji.md',                   label: 'Granice relacji terapeutycznej',     status: 'live' },
      { file: 'wiki/etyka/superwizja_odpowiedzialnosc.md',       label: 'Superwizja i odpowiedzialnosc',      status: 'live' },
      { file: 'wiki/etyka/dylematy_etyczne.md',          label: 'Dylematy etyczne w praktyce',          status: 'live' },
      { file: 'wiki/etyka/kompetencje_kulturowe.md',     label: 'Kompetencje kulturowe',                status: 'live' },
      { file: 'wiki/etyka/etyka_badan.md',               label: 'Etyka badal naukowych',                status: 'live' },
      { file: 'wiki/etyka/etyka_cyfrowa.md',             label: 'Etyka w psychologii cyfrowej',         status: 'live' },
      { file: 'wiki/etyka/odpowiedzialnosc_zawodowa.md', label: 'Odpowiedzialnosc zawodowa',            status: 'live' },
    ],
    diagnoza: [
      { file: 'wiki/diagnoza/etapy_diagnozy.md',                 label: 'Etapy i cele diagnozy',              status: 'live' },
      { file: 'wiki/diagnoza/wywiad_psychologiczny.md',          label: 'Wywiad psychologiczny',              status: 'live' },
      { file: 'wiki/diagnoza/wywiad_kognitywny_poznawczy.md',     label: 'Wywiad kognitywny (poznawczy)',       status: 'live' },
      { file: 'wiki/diagnoza/diagnoza_techniki_rozmowy_psychologicznej.md', label: 'Techniki rozmowy psychologicznej', status: 'live' },
      { file: 'wiki/diagnoza/obserwacja_kliniczna.md',           label: 'Obserwacja kliniczna',               status: 'live' },
      { file: 'wiki/diagnoza/formulowanie_przypadku.md',         label: 'Formulowanie przypadku',             status: 'live' },
      { file: 'wiki/diagnoza/techniki_projekcyjne.md',           label: 'Techniki projekcyjne',               status: 'live' },
      { file: 'wiki/diagnoza/opinia_psychologiczna.md',          label: 'Opinia psychologiczna',              status: 'live' },
      { file: 'wiki/diagnoza/tajemnica_zawodowa.md',             label: 'Tajemnica zawodowa',                 status: 'live' },
      { file: 'wiki/diagnoza/diagnoza_stygmatyzacja.md',         label: 'Diagnoza, a stygmatyzacja',          status: 'live' },
    ],
    rozwojowa: [
      { file: 'wiki/psychologia_rozwojowa/teorie_rozwoju.md',                label: 'Glowne teorie rozwoju',                   status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/metody_podluzne.md',               label: 'Metody badal podluznych',                 status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/niemowlectwo.md',                  label: 'Niemowlectwo i wczesne dziecilstwo',      status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/wiek_szkolny.md',                  label: 'Wiek szkolny',                            status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/adolescencja.md',                  label: 'Adolescencja',                            status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/doroslosc.md',                     label: 'Doroslosc i starzenie sie',               status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/plastycznosc_mozgu.md',            label: 'Plastycznosc mozgu, a okresy krytyczne',  status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/przywiazanie.md',                  label: 'Teoria przywiazania',                     status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/rozwoj_jezyka.md',                 label: 'Rozwoj jezyka i komunikacji',             status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/rodzicielstwo.md',                 label: 'Style rodzicielskie',                     status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/trauma_rozwojowa.md',              label: 'Trauma rozwojowa',                        status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/tozsamosc.md',                     label: 'Ksztaltowanie tozsamosci',                status: 'live' },
    ],
    eksperyment_psychologiczny: [
      { file: 'wiki/eksperyment_psychologiczny/wprowadzenie.md',               label: 'Wprowadzenie do metod eksperymentalnych',  status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/problemy_i_hipotezy.md',        label: 'Problem badawczy i hipotezy',              status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/operacjonalizacja.md',          label: 'Operacjonalizacja zmiennych',              status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/proby_i_rekrutacja.md',         label: 'Dobor proby i rekrutacja',                 status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/etyka_i_zgoda.md',              label: 'Etyka badania i swiadoma zgoda',           status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/obserwacja_psychologiczna.md',  label: 'Obserwacja psychologiczna w praktyce',     status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/protokol_i_pilotaz.md',         label: 'Protokol badania i pilotaz',               status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/prowadzenie_eksperymentu.md',   label: 'Prowadzenie sesji eksperymentalnej',       status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/jakosc_danych.md',              label: 'Kontrola jakosci i zarzadzanie danymi',    status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/analiza_i_wnioskowanie.md',     label: 'Analiza danych i wnioskowanie',            status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/replikacja_i_otwarta_nauka.md', label: 'Replikacja i otwarta nauka',               status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/raportowanie_wynikow.md',       label: 'Raportowanie wynikow i ograniczel',        status: 'live' },
    ],
  },

  // 
  //  WIKI - definicje encyklopedii tematycznych
  // 
  wikis: {
    neuropsychologia: {
      title: 'WIKI - Neuropsychologia kliniczna',
      intro: 'Systematyczny przeglad zagadnieln neuropsychologii klinicznej. Od struktur mozgu przez syndromologie po rehabilitacje.',
      sections: [
        {
          title: 'Podstawy neuroanatomiczne',
          articles: [
            { label: 'Platy kory mozgowej', id: 'neuro/anatomia', status: 'live' },
            { label: 'Uklad limbiczny', id: 'neuro/uklad_limbiczny', status: 'live', desc: 'Hipokamp, cialo migdalowate, zakret obreczy.' },
            { label: 'Neuron i synapsa', id: 'neuro/neuron', status: 'live', desc: 'Budowa neuronu, potencjal czynnosciowy, LTP/LTD.' },
            { label: 'Uklady i sieci mozgowe', id: 'neuro/systemy', status: 'live' },
            { label: 'Mielinizacja i istota biala', id: 'neuro/myelinizacja', status: 'live', desc: 'Peczek lukowaty, cialo modzelowate, szlaki piramidowe.' },
            { label: 'Neuroplastycznosc', id: 'neuro/plastycznosc', status: 'live' },
            { label: 'Neuroobrazowanie (fMRI, DTI)', id: 'neuro/neuroobrazowanie', status: 'live' },
            { label: 'Lateralizacja funkcji', id: 'neuro/lateralizacja', status: 'live' },
            { label: 'Zachowanie i dwie polkule mozgu', id: 'neuro/zachowanie_i_dwie_polkule_mozgu', status: 'live' },
            { label: 'Kora przedczolowa', id: 'neuro/kora_prefrontalna', status: 'live' },
            { label: 'Neurobiologia przesilenia wiosennego', id: 'neuro/przesilenie_wiosenne', status: 'live' },
            { label: 'Neuropsychologia cyklu miesiaczkowego', id: 'neuro/cykl_miesiaczkowy', status: 'live', desc: 'Wplyw estradiolu i progesteronu na poznanie, nastrBj i mozg.' },
            { label: 'Neuronauka poznawcza', id: 'neuro/neuronauka_poznawcza', status: 'live', desc: 'Biologiczne mechanizmy procesow poznawczych - percepcja, pamiec, uwaga, swiadomosc.' },
            { label: 'Podstawy neurologii', id: 'neuro/podstawy_neurologii', status: 'live', desc: 'Organizacja OUN/PNS, neurony, glej, drogi nerwowe, badanie neurologiczne.' },
            { label: 'Piel mozgu i mozdzek', id: 'neuro/pien_mozgu', status: 'live', desc: 'Struktury podkorowe i ich funkcje kliniczne.' },
          ]
        },
        {
          title: 'Syndromologia',
          articles: [
            { label: 'Afazje - klasyfikacja i diagnoza', id: 'zaburzenia/afazje', status: 'live' },
            { label: 'Amnezje - typy i podloze', id: 'zaburzenia/amnezje', status: 'live' },
            { label: 'Agnozja wzrokowa i prozopagnozja', id: 'zaburzenia/agnozja', status: 'live' },
            { label: 'Neglect przestrzenny', id: 'zaburzenia/neglect', status: 'live' },
            { label: 'Apraksja', id: 'zaburzenia/apraksja', status: 'live' },
            { label: 'Urazy glowy (TBI)', id: 'zaburzenia/tbi', status: 'live' },
            { label: 'Otepienia', id: 'zaburzenia/otepienia', status: 'live' },
            { label: 'ADHD', id: 'zaburzenia/adhd', status: 'live' },
            { label: 'Spektrum autyzmu (ASD)', id: 'zaburzenia/asd', status: 'live' },
          ]
        },
        {
          title: 'Ocena neuropsychologiczna',
          articles: [
            { label: 'Testy przesiewowe (MMSE, MoCA)', id: 'testy/mmse_moca', status: 'live' },
            { label: 'Testy funkcji wykonawczych', id: 'testy/testy_wykonawcze', status: 'live' },
            { label: 'Testy pamieci', id: 'testy/testy_pamieci', status: 'live' },
            { label: 'Testy uwagi', id: 'testy/testy_uwagi', status: 'live' },
            { label: 'Testy jezykowe', id: 'testy/testy_jezyka', status: 'live' },
            { label: 'Skale Wechslera (WAIS/WISC)', id: 'testy/wais', status: 'live' },
            { label: 'WISC-V - opis testu', id: 'testy/wisc_v', status: 'live' },
            { label: 'Baterie neuropsychologiczne', id: 'testy/neuropsych_battery', status: 'live', desc: 'LNNB, HRNB, D-KEFS.' },
            { label: 'SCID-5 / SCID-V', id: 'testy/scid_v', status: 'live' },
          ]
        },
        {
          title: 'Przypadki kliniczne',
          articles: [
            { label: 'H.M. - amnezja', id: 'przypadki_kliniczne/hm', status: 'live' },
            { label: 'Phineas Gage', id: 'przypadki_kliniczne/gage', status: 'live' },
            { label: 'dz ~Tan" - afazja Broki', id: 'przypadki_kliniczne/tan', status: 'live' },
            { label: 'Rozdzielony mozg', id: 'przypadki_kliniczne/split_brain', status: 'live' },
            { label: 'Clive Wearing', id: 'przypadki_kliniczne/clive_wearing', status: 'live' },
            { label: 'Elliot', id: 'przypadki_kliniczne/elliot', status: 'live' },
            { label: 'Pacjentka D.F.', id: 'przypadki_kliniczne/df', status: 'live' },
            { label: 'Pacjent K.C.', id: 'przypadki_kliniczne/kc', status: 'live' },
            { label: 'Pacjent N.A.', id: 'przypadki_kliniczne/na', status: 'live' },
            { label: 'Pacjent K.N.', id: 'przypadki_kliniczne/patient_kn', status: 'live' },
            { label: 'Pacjent R.B.', id: 'przypadki_kliniczne/patient_rb', status: 'live' },
            { label: 'Pacjent P.S.', id: 'przypadki_kliniczne/ps', status: 'live' },
            { label: 'Pacjentka S.M.', id: 'przypadki_kliniczne/sm', status: 'live' },
          ]
        },
        {
          title: 'Rehabilitacja neuropsychologiczna',
          articles: [
            { label: 'Rehabilitacja neuropsychologiczna', id: 'neuro/rehabilitacja_neuropsychologiczna', status: 'live', desc: 'Metody, modele i praktyka rehabilitacji po uszkodzeniach mozgu.' },
          ]
        },
        {
          title: 'Wprowadzenie do dyscypliny',
          articles: [
            { label: 'Definicja i zakres', id: 'wstep_do_psychologii/definicja', status: 'live' },
            { label: 'Historia dyscypliny', id: 'wstep_do_psychologii/historia', status: 'live' },
            { label: 'Główne nurtы psychologii', id: 'wstep_do_psychologii/nurty_psychologii', status: 'live' },
            { label: 'Etyka badań psychologicznych', id: 'wstep_do_psychologii/etyka_badan_psychologicznych', status: 'live' },
          ]
        },
      ]
    },

    kliniczna: {
      title: 'WIKI - Psychologia kliniczna',
      intro: 'Diagnoza, terapia i praca kliniczna - od rozumienia zaburzen po praktyke w systemie ochrony zdrowia.',
      sections: [
        {
          title: 'Podstawy diagnostyki',
          articles: [
            { label: 'Psychopatologia ogolna', id: 'psychopatologia/psychopatologia_wprowadzenie', status: 'live' },
            { label: 'Badanie stanu psychicznego (MSE)', id: 'psychopatologia/objawy_ogolne', status: 'live' },
            { label: 'Klasyfikacje ICD-11 i DSM-5-TR', id: 'psychopatologia/klasyfikacje', status: 'live' },
            { label: 'Formulowanie przypadku', id: 'psychopatologia/formulowanie_przypadku', status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia kliniczne',
          articles: [
            { label: 'Zaburzenia lekowe', id: 'psychopatologia/zaburzenia_lekowe', status: 'live' },
            { label: 'Zaburzenia nastroju', id: 'psychopatologia/zaburzenia_nastroju', status: 'live' },
            { label: 'Psychozy', id: 'psychopatologia/psychozy', status: 'live' },
            { label: 'Zaburzenia osobowosci', id: 'psychopatologia/zaburzenia_osobowosci', status: 'live' },
            { label: 'Trauma i PTSD', id: 'psychopatologia/trauma_ptsd', status: 'live' },
            { label: 'OCD i zaburzenia pokrewne', id: 'psychopatologia/ocd', status: 'live' },
            { label: 'Zaburzenia odzywiania', id: 'psychopatologia/zaburzenia_odzywiania', status: 'live' },
            { label: 'Zaburzenia neurorozwojowe', id: 'psychopatologia/neurorozwojowe', status: 'live' },
            { label: 'Uzaleznienia - aspekt psychologiczny', id: 'psychopatologia/uzaleznienia_psych', status: 'live' },
            { label: 'Depresja poporodowa', id: 'psychopatologia/depresja_poporodowa', status: 'live' },
            { label: 'Przymus powtarzania', id: 'psychopatologia/przymus_powtarzania', status: 'live' },
            { label: 'Wiktymizacja', id: 'psychopatologia/wiktymizacja', status: 'live' },
            { label: 'Wyuczona bezradnosc', id: 'psychopatologia/wyuczona_bezradnosc', status: 'live' },
            { label: 'Intelektualizacja emocji', id: 'psychopatologia/intelektualizacja', status: 'live' },
            { label: 'Dezintegracja pozytywna', id: 'psychopatologia/dezintegracja_pozytywna', status: 'live' },
          ]
        },
        {
          title: 'Interwencje i psychoterapia',
          articles: [
            { label: 'Psychoterapia', id: 'psychoterapia/psychoterapia_wprowadzenie', status: 'live' },
            { label: 'CBT - podstawy', id: 'psychoterapia/cbt', status: 'live' },
            { label: 'DBT - terapia dialektyczna', id: 'psychoterapia/dbt', status: 'live' },
            { label: 'Terapia psychodynamiczna', id: 'psychoterapia/psychodyn', status: 'live' },
            { label: 'Podejscie humanistyczne', id: 'psychoterapia/humanist', status: 'live' },
            { label: 'Terapia systemowa', id: 'psychoterapia/systemowa', status: 'live' },
            { label: 'Systemy rodzinne', id: 'psychoterapia/systemy_rodzinne', status: 'live' },
            { label: 'Terapia akceptacji (ACT)', id: 'psychoterapia/act', status: 'live' },
            { label: 'Heksafleks ACT', id: 'psychoterapia/heksafleks_act', status: 'live' },
            { label: 'EMDR', id: 'psychoterapia/emdr', status: 'live' },
            { label: 'Skutecznosc psychoterapii', id: 'psychoterapia/skutecznosc', status: 'live' },
            { label: 'Sojusz terapeutyczny', id: 'psychoterapia/sojusz', status: 'live' },
            { label: 'Trening Umiejetnosci Spolecznych (SST)', id: 'psychoterapia/trening_umiejetnosci_spolecznych', status: 'live' },
            { label: 'Plodna pustka (fertile void) - Gestalt', id: 'psychoterapia/gestalt', status: 'live' },
            { label: 'Logoterapia (Frankl)', id: 'psychoterapia/logoterapia_frankl', status: 'live' },
            { label: 'Psychoanaliza humanistyczna (Fromm)', id: 'psychoterapia/psychoanaliza_fromma', status: 'live' },
            { label: 'Psychologia spoleczna (Zimbardo)', id: 'psychoterapia/psychologia_zimbardo', status: 'live' },
            { label: 'Aktywacja behawioralna', id: 'psychoterapia/aktywacja_behawioralna', status: 'live' },
            { label: 'REBT - racjonalna terapia', id: 'psychoterapia/rebt', status: 'live' },
            { label: 'Mechanizmy przebaczenia po przemocy emocjonalnej', id: 'psychoterapia/psychologiczne_mechanizmy_przebaczenia', status: 'live' },
            { label: 'Superwizja w psychoterapii', id: 'psychoterapia/superwizja', status: 'live' },
            { label: 'Interwencja kryzysowa', id: 'suicydologia/interwencja', status: 'live' },
          ]
        },
        {
          title: 'Suicydologia',
          articles: [
            { label: 'Suicydologia', id: 'suicydologia/suicydologia_wprowadzenie', status: 'live' },
            { label: 'Epidemiologia', id: 'suicydologia/epidemiologia', status: 'live' },
            { label: 'Teorie (Joiner, IMV)', id: 'suicydologia/teorie', status: 'live' },
            { label: 'Ocena ryzyka (C-SSRS)', id: 'suicydologia/ocena_ryzyka', status: 'live' },
            { label: 'Profilaktyka', id: 'suicydologia/profilaktyka', status: 'live' },
            { label: 'Samookaleczenia (NSSI)', id: 'suicydologia/nssi', status: 'live' },
            { label: 'Postvention', id: 'suicydologia/postvention', status: 'live' },
            { label: 'Efekt Wertera i Papageno', id: 'suicydologia/media', status: 'live' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Psychometria', id: 'psychometria/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Narzedzia kliniczne (PHQ-l, GAD-7, PCL-5)', id: 'psychometria/narzedzia_kliniczne', status: 'live' },
          ]
        },
      ]
    },

    poznawcza: {
      title: 'WIKI - Psychologia poznawcza',
      intro: 'Procesy przetwarzania informacji - od percepcji przez pamiec i uwage po myslenie i podejmowanie decyzji.',
      sections: [
        {
          title: 'Procesy podstawowe',
          articles: [
            { label: 'Pamiec', id: 'poznawcza/pamiec', status: 'live' },
            { label: 'Pamiec dlugotrwala', id: 'poznawcza/pamiec_dlugotrwala', status: 'live' },
            { label: 'Uwaga', id: 'poznawcza/uwaga', status: 'live' },
            { label: 'Percepcja i gnozja', id: 'poznawcza/percepcja', status: 'live' },
            { label: 'Jezyk', id: 'poznawcza/jezyk', status: 'live' },
          ]
        },
        {
          title: 'Procesy zlozone',
          articles: [
            { label: 'Funkcje wykonawcze', id: 'poznawcza/funkcje_wykonawcze', status: 'live' },
            { label: 'Myslenie i rozumowanie', id: 'poznawcza/myslenie', status: 'live' },
            { label: 'Podejmowanie decyzji', id: 'poznawcza/podejmowanie_decyzji', status: 'live' },
            { label: 'Dylemat eksploracjadz eksploatacja', id: 'poznawcza/exploration_exploitation_dilemma', status: 'live' },
            { label: 'Teoria perspektywy', id: 'poznawcza/teoria_perspektywy', status: 'live' },
            { label: 'Efekt ramowania', id: 'poznawcza/efekt_ramowania', status: 'live' },
            { label: 'NASA Task Load Index (TLX)', id: 'poznawcza/nasa_tlx', status: 'live' },
            { label: 'lawiadomosc i metapoznanie', id: 'poznawcza/swiadomosc', status: 'live' },
            { label: 'Uczenie sie', id: 'poznawcza/uczenie', status: 'live' },
            { label: 'Wyobral_nia i reprezentacje', id: 'poznawcza/wyobraznia', status: 'live' },
            { label: 'Zmeczenie poznawcze', id: 'poznawcza/zmeczenie_poznawcze', status: 'live' },
            { label: 'Iluzje i bledy poznawcze', id: 'poznawcza/iluzje', status: 'live' },
            { label: 'Test Stroopa', id: 'poznawcza/test_stroopa', status: 'live' },
            { label: 'Przyklad testu Stroopa', id: 'poznawcza/przyklad_testu_stroopa', status: 'live' },
            { label: 'Eksperyment Posnera', id: 'poznawcza/eksperyment_posnera', status: 'live' },
            { label: 'Eksperyment Malego Alberta', id: 'poznawcza/maly_albert', status: 'live' },
            { label: 'Uklad siatkowaty (ARAS)', id: 'poznawcza/uklad_siatkowaty', status: 'live' },
          ]
        },
        {
          title: 'Modele i teorie',
          articles: [
            { label: 'System 1 i System 2 (Kahneman)', id: 'poznawcza/system1_system2', status: 'live' },
            { label: 'Predictive processing', id: 'poznawcza/przetwarzanie_predyktywne', status: 'live' },
            { label: 'Ucielesnione poznanie', id: 'poznawcza/ucielesnienie', status: 'live' },
          ]
        },
      ]
    },

    spoleczna: {
      title: 'WIKI - Psychologia spoleczna',
      intro: 'Jak mysli, emocje i zachowania jednostki ksztaltuja sie pod wplywem obecnosci innych - od percepcji spolecznej po dynamike grupowa.',
      sections: [
        {
          title: 'Poznanie spoleczne',
          articles: [
            { label: 'Percepcja spoleczna i atrybucje', id: 'spoleczna/percepcja_spoleczna', status: 'live' },
            { label: 'Stereotypy i uprzedzenia', id: 'spoleczna/stereotypy', status: 'live' },
            { label: 'Manosfera i feminizm - ujecie psychologiczne', id: 'spoleczna/manosfera_feminizm', status: 'live' },
            { label: 'Ja i samoocena', id: 'spoleczna/ja_i_samoocena', status: 'live' },
            { label: 'Postawy i zmiana postaw', id: 'spoleczna/postawy', status: 'live' },
          ]
        },
        {
          title: 'Wplyw spoleczny',
          articles: [
            { label: 'Stanfordzki Eksperyment Wiezienny', id: 'spoleczna/eksperyment_wiezienny', status: 'live' },
            { label: 'Manipulacja - mechanizmy i metody wplywu', id: 'spoleczna/manipulacja', status: 'live' },
            { label: 'Konformizm i posluszelstwo', id: 'spoleczna/konformizm', status: 'live' },
            { label: 'Perswazja i propaganda', id: 'spoleczna/perswazja', status: 'live' },
            { label: 'Dynamika grupowa', id: 'spoleczna/dynamika_grupowa', status: 'live' },
          ]
        },
        {
          title: 'Relacje i zachowania',
          articles: [
            { label: 'Atrakcyjnosc interpersonalna', id: 'spoleczna/atrakcyjnosc', status: 'live' },
            { label: 'Agresja', id: 'spoleczna/agresja', status: 'live' },
            { label: 'Hejt w sieci', id: 'spoleczna/hejt_w_sieci', status: 'live' },
            { label: 'Zachowania prospoleczne', id: 'spoleczna/zachowania_prospoleczne', status: 'live' },
          ]
        },
      ]
    },

    kulturowa: {
      title: 'WIKI - Psychologia kulturowa',
      intro: 'Jak kultura wspoltworzy poznanie, emocje, Ja i relacje - badania porownawcze i perspektywa emic/etic.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Czym jest psychologia kulturowa?', id: 'kulturowa/wprowadzenie', status: 'live' },
            { label: 'Metody: emic vs. etic', id: 'kulturowa/metody', status: 'live' },
            { label: 'Wymiar indywidualizm kolektywizm', id: 'kulturowa/indywidualizm_kolektywizm', status: 'live' },
          ]
        },
        {
          title: 'Kultura, a procesy psychiczne',
          articles: [
            { label: 'Kultura, a percepcja i uwaga', id: 'kulturowa/kultura_percepcja', status: 'live' },
            { label: 'Kultura, a emocje', id: 'emocje/emocje_wprowadzenie', status: 'xlink' },
            { label: 'Kulturowe modele Ja', id: 'kulturowa/kulturowe_modele_ja', status: 'live' },
            { label: 'Kultura, a zdrowie psychiczne', id: 'kulturowa/kultura_zdrowie', status: 'live' },
          ]
        },
        {
          title: 'Kultura i tozsamosc',
          articles: [
            { label: 'Kultura, a emocje',                  id: 'kulturowa/kultura_emocje',     status: 'live' },
            { label: 'Akulturacja i adaptacja kulturowa', id: 'kulturowa/akulturacja',         status: 'live' },
            { label: 'Kultura, a jezyk (Sapir-Whorf)',     id: 'kulturowa/kultura_jezyk',       status: 'live' },
            { label: 'Kultura, a osobowosc',               id: 'kulturowa/kultura_osobowosc',   status: 'live' },
            { label: 'Psychologia Wschodu i Zachodu',     id: 'kulturowa/wschodnia_zachodnia', status: 'live' },
            { label: 'Kultura, a relacje interpersonalne', id: 'kulturowa/kultura_relacje',     status: 'live' },
          ]
        },
        {
          title: 'Emocje i motywacja',
          articles: [
            { label: 'Emocje', id: 'emocje/emocje_wprowadzenie', status: 'live' },
            { label: 'Teorie emocji', id: 'emocje/teorie', status: 'live' },
            { label: 'Regulacja emocjonalna', id: 'emocje/regulacja', status: 'live' },
            { label: 'Motywacja', id: 'emocje/motywacja', status: 'live' },
            { label: 'Neurobiologia emocji', id: 'emocje/neurobiologia', status: 'live' },
            { label: 'Empatia i wspolczucie', id: 'emocje/wspolczucie', status: 'live' },
            { label: 'Aleksytymia', id: 'emocje/aleksytymia', status: 'live' },
            { label: 'Inteligencja emocjonalna', id: 'emocje/inteligencja_emocjonalna', status: 'live' },
            { label: 'Stres i emocje', id: 'emocje/stres_emocje', status: 'live' },
            { label: 'Pozytywne emocje i broaden-build', id: 'emocje/pozytywne_emocje', status: 'live' },
            { label: 'Wstyd i wina', id: 'emocje/wstyd_wina', status: 'live' },
            { label: 'Emocje spoleczne i moralne', id: 'emocje/emocje_spoleczne', status: 'live' },
          ]
        },
      ]
    },

    rozwojowa: {
      title: 'WIKI - Psychologia rozwojowa',
      intro: 'Zmiany w funkcjonowaniu psychicznym od okresu prenatalnego po pelna doroslosc - normatywne i atypowe sciezki.',
      sections: [
        {
          title: 'Fundamenty',
          articles: [
            { label: 'Główne teorie rozwoju', id: 'rozwojowa/teorie_rozwoju', status: 'live' },
            { label: 'Metody badal podluznych', id: 'rozwojowa/metody_podluzne', status: 'live' },
          ]
        },
        {
          title: 'Etapy zycia',
          articles: [
            { label: 'Niemowlectwo i wczesne dziecilstwo', id: 'rozwojowa/niemowlectwo', status: 'live' },
            { label: 'Wiek szkolny', id: 'rozwojowa/wiek_szkolny', status: 'live' },
            { label: 'Adolescencja', id: 'rozwojowa/adolescencja', status: 'live' },
            { label: 'Doroslosc i starzenie sie', id: 'rozwojowa/doroslosc', status: 'live' },
          ]
        },
        {
          title: 'Neurobiologia rozwoju',
          articles: [
            { label: 'Neurobiologia - podstawy', id: 'neuro/anatomia', status: 'xlink' },
            { label: 'Plastycznosc mozgu, a okresy krytyczne', id: 'rozwojowa/plastycznosc_mozgu', status: 'live' },
          ]
        },
        {
          title: 'Relacje i srodowisko',
          articles: [
            { label: 'Teoria przywiazania', id: 'rozwojowa/przywiazanie', status: 'live' },
            { label: 'Style rodzicielskie', id: 'rozwojowa/rodzicielstwo', status: 'live' },
            { label: 'Trauma rozwojowa', id: 'rozwojowa/trauma_rozwojowa', status: 'live' },
          ]
        },
        {
          title: 'Jezyk, tozsamosc i samoRozwoj',
          articles: [
            { label: 'Rozwoj jezyka i komunikacji', id: 'rozwojowa/rozwoj_jezyka', status: 'live' },
            { label: 'Ksztaltowanie tozsamosci', id: 'rozwojowa/tozsamosc', status: 'live' },
          ]
        },
      ]
    },

    uzaleznienia: {
      title: 'WIKI - Psychologia uzaleznien',
      intro: 'Mechanizmy uzaleznien, diagnoza, terapia i profilaktyka - od neurobiologii nalogu po prace z rodzina.',
      sections: [
        {
          title: 'Mechanizmy i diagnoza',
          articles: [
            { label: 'Neurobiologia uzalezniel', id: 'farmakologia/neurofarmakologia', status: 'xlink' },
            { label: 'Uzaleznienia - aspekt psychologiczny', id: 'psychopatologia/uzaleznienia_psych', status: 'live' },
            { label: 'Kryteria diagnostyczne', id: 'uzaleznienia/kryteria_diagnostyczne', status: 'live' },
          ]
        },
        {
          title: 'Farmakoterapia',
          articles: [
            { label: 'Neurofarmakologia', id: 'farmakologia/neurofarmakologia', status: 'live' },
            { label: 'Leki przeciwdepresyjne', id: 'farmakologia/przeciwdepresyjne', status: 'live' },
            { label: 'Leki przeciwpsychotyczne', id: 'farmakologia/przeciwpsychotyczne', status: 'live' },
            { label: 'Anksjolityki i nasenne', id: 'farmakologia/anxiolityki', status: 'live' },
            { label: 'Stabilizatory nastroju', id: 'farmakologia/stabilizatory', status: 'live' },
            { label: 'Farmakoterapia uzalezniel', id: 'farmakologia/uzaleznienia_farm', status: 'live' },
            { label: 'Psychodeliki w terapii', id: 'farmakologia/psychodeliki', status: 'live' },
            { label: 'Nootropiki i kognitywne', id: 'farmakologia/nootropiki', status: 'live' },
          ]
        },
        {
          title: 'Terapia',
          articles: [
            { label: 'Dialog motywujacy', id: 'uzaleznienia/dialog_motywujacy', status: 'live' },
            { label: 'CBT w uzaleznieniach', id: 'psychoterapia/cbt', status: 'xlink' },
            { label: 'Zapobieganie nawrotom', id: 'uzaleznienia/zapobieganie_nawrotom', status: 'live' },
          ]
        },
        {
          title: 'Konteksty',
          articles: [
            { label: 'Uzaleznienia u mlodziezy', id: 'uzaleznienia/uzaleznienia_mlodziezy', status: 'live' },
            { label: 'Wspoluzaleznienie', id: 'uzaleznienia/wspoluzaleznienie', status: 'live' },
            { label: 'Profilaktyka', id: 'uzaleznienia/profilaktyka', status: 'live' },
          ]
        },
        {
          title: 'Neurobiologia i zaawansowane zagadnienia',
          articles: [
            { label: 'Neurobiologia uzalezniel',               id: 'uzaleznienia/neurobiologia_uzaleznien',   status: 'live' },
            { label: 'Uzaleznienia behawioralne',              id: 'uzaleznienia/uzaleznienia_behawioralne',  status: 'live' },
            { label: 'Uzaleznienie od internetu i technologii',id: 'uzaleznienia/internet_uzaleznienie',      status: 'live' },
            { label: 'Rodzina w systemie uzaleznienia',        id: 'uzaleznienia/rodzina_w_uzaleznieniach',   status: 'live' },
            { label: 'Terapia grupowa w uzaleznieniach',       id: 'uzaleznienia/terapia_grupowa',            status: 'live' },
            { label: 'Recovery - droga do zdrowia',           id: 'uzaleznienia/recovery',                   status: 'live' },
          ]
        },
      ]
    },

    relacje: {
      title: 'WIKI - Relacje i zwiazki',
      intro: 'Psychologia bliskich relacji - przywiazanie, milosc, komunikacja, konflikty i terapia par.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Style przywiazania u doroslych', id: 'relacje/przywiezanie_doroslych', status: 'live' },
            { label: 'Triangularna teoria milosci', id: 'relacje/trojkatna_teoria_milosci', status: 'live' },
            { label: 'Dobor partnera', id: 'relacje/dobor_partnera', status: 'live' },
          ]
        },
        {
          title: 'Dynamika zwiazku',
          articles: [
            { label: 'Komunikacja w parze', id: 'relacje/komunikacja_para', status: 'live' },
            { label: 'Konflikty i ich rozwiazywanie', id: 'relacje/konflikty', status: 'live' },
            { label: 'Zdrada i odbudowa zaufania', id: 'relacje/zdrada', status: 'live' },
          ]
        },
        {
          title: 'Terapia i trudne sytuacje',
          articles: [
            { label: 'Terapia par', id: 'relacje/terapia_par', status: 'live' },
            { label: 'Przemoc w zwiazkach', id: 'relacje/przemoc_zwiazki', status: 'live' },
            { label: 'Psychologia seksu', id: 'seksuologia/psychologia_seksu', status: 'xlink' },
          ]
        },
        {
          title: 'Seksuologia',
          articles: [
            { label: 'Seksuologia', id: 'seksuologia/seksuologia_wprowadzenie', status: 'live' },
            { label: 'Psychologia seksu', id: 'seksuologia/psychologia_seksu', status: 'live' },
            { label: 'Emocjonalne zaangazowanie, a seks', id: 'seksuologia/emocjonalne_zaangazowanie_w_seksie', status: 'live' },
            { label: 'Wstyd ciala, a pozycje seksualne', id: 'seksuologia/wstyd_ciala_a_pozycje', status: 'live' },
            { label: 'Orientacja seksualna', id: 'seksuologia/orientacja', status: 'live' },
            { label: 'Tozsamosc plciowa', id: 'seksuologia/tozsamosc_plciowa', status: 'live' },
            { label: 'Dysfunkcje seksualne', id: 'seksuologia/dysfunkcje', status: 'live' },
            { label: 'Hiperseksualnosc jako mechanizm', id: 'seksuologia/hiperseksualnosc_mechanizm', status: 'live' },
            { label: 'Terapia seksualna', id: 'seksuologia/terapia_seksualna', status: 'live' },
            { label: 'Trauma seksualna', id: 'seksuologia/trauma_seksualna', status: 'live' },
            { label: 'Przemoc w dziecilstwie, a seksualnosc doroslych', id: 'seksuologia/przemoc_w_dziecinstwie_a_seksualnosc', status: 'live' },
            { label: 'DDA, a seksualnosc doroslych', id: 'seksuologia/dda_a_seksualnosc', status: 'live' },
            { label: 'Rozwoj seksualny', id: 'seksuologia/rozw_seksualny', status: 'live' },
            { label: 'Modele odpowiedzi seksualnej', id: 'seksuologia/modele_odpowiedzi', status: 'live' },
          ]
        },
        {
          title: 'Inne relacje i utrata',
          articles: [
            { label: 'Samotnosc i izolacja spoleczna',    id: 'relacje/samotnosc',        status: 'live' },
            { label: 'Przyjal_l',                          id: 'relacje/przyjaznie',        status: 'live' },
            { label: 'Rozpad zwiazku i zaloba relacyjna', id: 'relacje/rozstanie',         status: 'live' },
            { label: 'Relacje rodzinne - dynamika',       id: 'relacje/relacje_rodzinne',  status: 'live' },
          ]
        },
      ]
    },

    diagnoza: {
      title: 'WIKI - Diagnoza psychologiczna',
      intro: 'Metody diagnozy jakosciowej i ilosciowej, wymagania prawne i etyczne, sporzadzanie opinii.',
      sections: [
        {
          title: 'Proces diagnostyczny',
          articles: [
            { label: 'Etapy i cele diagnozy', id: 'diagnoza/etapy_diagnozy', status: 'live' },
            { label: 'Wywiad psychologiczny', id: 'diagnoza/wywiad_psychologiczny', status: 'live' },
            { label: 'Techniki rozmowy psychologicznej', id: 'diagnoza/diagnoza_techniki_rozmowy_psychologicznej', status: 'live' },
            { label: 'Obserwacja kliniczna', id: 'diagnoza/obserwacja_kliniczna', status: 'live' },
            { label: 'Formulowanie przypadku', id: 'diagnoza/formulowanie_przypadku', status: 'live' },
          ]
        },
        {
          title: 'Modele diagnostyczne',
          articles: [
            { label: 'Model RDoC', id: 'testy/rdoc', status: 'live' },
          ]
        },
        {
          title: 'Narzedzia diagnostyczne',
          articles: [
            { label: 'Psychometria - podstawy', id: 'psychometria/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Testy neuropsychologiczne', id: 'testy/testy_przeglad', status: 'xlink' },
            { label: 'Techniki projekcyjne', id: 'diagnoza/techniki_projekcyjne', status: 'live' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Psychometria', id: 'psychometria/psychometria_wprowadzenie', status: 'live' },
            { label: 'Rzetelnosc pomiaru', id: 'psychometria/rzetelnosc', status: 'live' },
            { label: 'Trafnosc pomiaru', id: 'psychometria/trafnosc', status: 'live' },
            { label: 'Normalizacja i normy', id: 'psychometria/normalizacja', status: 'live' },
            { label: 'Klasyczna teoria testu', id: 'psychometria/teoria_ct', status: 'live' },
            { label: 'IRT i model Rascha', id: 'psychometria/irt', status: 'live' },
            { label: 'Analiza czynnikowa', id: 'psychometria/cfa_efa', status: 'live' },
            { label: 'Inwariancja pomiarowa', id: 'psychometria/invariancja', status: 'live' },
            { label: 'Test Matryc Ravena', id: 'psychometria/test_matryc_ravena', status: 'live' },
          ]
        },
        {
          title: 'Etyka i prawo',
          articles: [
            { label: 'Opinia psychologiczna', id: 'diagnoza/opinia_psychologiczna', status: 'live' },
            { label: 'Tajemnica zawodowa', id: 'diagnoza/tajemnica_zawodowa', status: 'live' },
            { label: 'Diagnoza, a stygmatyzacja', id: 'diagnoza/diagnoza_stygmatyzacja', status: 'live' },
          ]
        },
        {
          title: 'Literatura i zasoby',
          articles: [
            { label: 'Zakres wiedzy', id: 'reference/zakres', status: 'live' },
            { label: 'Literatura', id: 'reference/literatura', status: 'live' },
            { label: 'Bibliografia portalu', id: 'reference/bibliografia_portalu', status: 'live' },
            { label: 'Skale i akronimy diagnostyczne', id: 'reference/skale_i_akronimy', status: 'live' },
          ]
        },
      ]
    },

    biologia: {
      title: 'WIKI - Biologiczne podstawy zachowania',
      intro: 'Biologiczne podloze zachowaln i procesow psychicznych - od genetyki przez hormony po chronobiologie i mikrobiom.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Biologiczne podstawy zachowania', id: 'biology/biologiczne_podstawy', status: 'live' },
            { label: 'Genetyka zachowania', id: 'biology/genetyka_beh', status: 'live' },
            { label: 'Transmisja genetyczna zaburzeń', id: 'biology/transmisja_genetyczna_zaburzen', status: 'live' },
            { label: 'Epigenetyka', id: 'biology/epigenetyka', status: 'live' },
            { label: 'Psychofizjologia', id: 'biology/psychofizjologia', status: 'live' },
          ]
        },
        {
          title: 'Regulacja biologiczna',
          articles: [
            { label: 'Hormony, a zachowanie', id: 'biology/hormony', status: 'live' },
            { label: 'Chronobiologia', id: 'biology/chronobiologia', status: 'live' },
            { label: 'Chronopsychologia', id: 'biology/chronopsychologia', status: 'live' },
            { label: 'Mikrobiom, a mozg', id: 'biology/mikrobiom', status: 'live' },
            { label: 'Ewolucja zachowania', id: 'biology/ewolucja', status: 'live' },
          ]
        },
      ]
    },

    roznice_ind: {
      title: 'WIKI - Roznice indywidualne i temperament',
      intro: 'Czynniki wyjasniajace roznorodnosc psychologiczna - inteligencja, osobowosc, temperament i ich biologiczne podloze.',
      sections: [
        {
          title: 'Roznice indywidualne',
          articles: [
            { label: 'Wprowadzenie - roznice indywidualne', id: 'roznice_indywidualne/roznice_wprowadzenie', status: 'live' },
            { label: 'Inteligencja', id: 'roznice_indywidualne/inteligencja', status: 'live' },
            { label: 'Osobowosc - modele', id: 'roznice_indywidualne/osobowosc', status: 'live' },
            { label: 'Kreatywnosc', id: 'roznice_indywidualne/kreatywnosc', status: 'live' },
            { label: 'Genetyka osobowosci', id: 'roznice_indywidualne/genetyka', status: 'live' },
            { label: 'Style poznawcze', id: 'roznice_indywidualne/style_poznawcze', status: 'live' },
            { label: 'Reiss Motivation Profile', id: 'roznice_indywidualne/reiss_motivation_profile', status: 'live' },
            { label: 'Psychologia plci', id: 'roznice_indywidualne/plec_psychologia', status: 'live' },
            { label: 'Ciemna Triada', id: 'roznice_indywidualne/ciemna_triada', status: 'live' },
          ]
        },
        {
          title: 'Temperament',
          articles: [
            { label: 'Temperament',                        id: 'temperament/temperament_wprowadzenie', status: 'live' },
            { label: 'Modele temperamentu',                id: 'temperament/modele',                   status: 'live' },
            { label: 'Pomiar temperamentu',                id: 'temperament/pomiar',                   status: 'live' },
            { label: 'Temperament, a klinika',             id: 'temperament/kliniczne',                status: 'live' },
            { label: 'Rozwoj temperamentu',                id: 'temperament/rozwoj',                   status: 'live' },
            { label: 'RTT - teoria Strelaua',              id: 'temperament/strelau',                  status: 'live' },
            { label: 'Model Eysencka (PEN)',               id: 'temperament/eysenck',                  status: 'live' },
            { label: 'Teoria BIS/BAS Graya',               id: 'temperament/gray',                     status: 'live' },
            { label: 'Zahamowanie behawioralne (Kagan)',   id: 'temperament/kagan',                    status: 'live' },
            { label: 'Temperament, a psychopatologia',     id: 'temperament/temperament_a_psychopat',  status: 'live' },
            { label: 'Biologiczne podloze temperamentu',   id: 'temperament/biologia_temperamentu',    status: 'live' },
            { label: 'Temperament, a kariera i praca',     id: 'temperament/temperament_a_kariera',    status: 'live' },
          ]
        },
      ]
    },

    terapie_artystyczne: {
      title: 'WIKI - Terapie artystyczne i animaloterapia',
      intro: 'Kreatywne i zwierzece metody terapeutyczne - arteterapia, muzykoterapia, dogoterapia i inne interwencje wspomagajace.',
      sections: [
        {
          title: 'Arteterapia',
          articles: [
            { label: 'Arteterapia', id: 'arteterapia/arteterapia_wprowadzenie', status: 'live' },
            { label: 'Art therapy (plastyczna)', id: 'arteterapia/art_therapy', status: 'live' },
            { label: 'Muzykoterapia', id: 'arteterapia/muzykoterapia', status: 'live' },
            { label: 'Drameterapia', id: 'arteterapia/drameterapia', status: 'live' },
            { label: 'Taniec i ruch (DMT)', id: 'arteterapia/dmt', status: 'live' },
            { label: 'Biblioterapia', id: 'arteterapia/biblioterapia', status: 'live' },
            { label: 'Mechanizmy terapeutyczne', id: 'arteterapia/mechanizmy', status: 'live' },
            { label: 'Zastosowania kliniczne', id: 'arteterapia/zastosowania', status: 'live' },
          ]
        },
        {
          title: 'Animaloterapia',
          articles: [
            { label: 'Animaloterapia', id: 'animaloterapia/animaloterapia_wprowadzenie', status: 'live' },
            { label: 'Dogoterapia', id: 'animaloterapia/dogoterapia', status: 'live' },
            { label: 'Hipoterapia', id: 'animaloterapia/hipoterapia', status: 'live' },
            { label: 'Felinoterapia', id: 'animaloterapia/felinoterapia', status: 'live' },
            { label: 'Zastosowania AAT', id: 'animaloterapia/aat_zastosowania', status: 'live' },
            { label: 'Etyka i dobrostan', id: 'animaloterapia/etyka_aat', status: 'live' },
            { label: 'Mechanizmy AAT', id: 'animaloterapia/mechanizmy_aat', status: 'live' },
          ]
        },
      ]
    },

    etyka: {
      title: 'WIKI - Etyka zawodowa',
      intro: 'Zasady etyczne wykonywania zawodu psychologa i psychoterapeuty - od tajemnicy zawodowej po granice relacji.',
      sections: [
        {
          title: 'Fundament etyki',
          articles: [
            { label: 'Kodeksy etyczne - przeglad', id: 'etyka/kodeksy_etyczne', status: 'live' },
            { label: 'Etyka zawodowa psychologa i psychoterapeuty w Polsce', id: 'reference/etyka_psychologa', status: 'live' },
            { label: 'Zasady APA i PTP', id: 'etyka/zasady_apa_ptp', status: 'live' },
            { label: 'Dobro i nieszkodzenie', id: 'etyka/dobro_nieszkodzenie', status: 'live' },
          ]
        },
        {
          title: 'Praktyka',
          articles: [
            { label: 'Przepisy i zasady pracy psychologa w Polsce i NFZ', id: 'reference/przepisy_zawod', status: 'live' },
            { label: 'Tajemnica zawodowa i jej granice', id: 'etyka/tajemnica_zawodowa_granice', status: 'live' },
            { label: 'lawiadoma zgoda', id: 'etyka/swiadoma_zgoda', status: 'live' },
            { label: 'Granice relacji terapeutycznej', id: 'etyka/granice_relacji', status: 'live' },
            { label: 'Superwizja i odpowiedzialnosc', id: 'etyka/superwizja_odpowiedzialnosc', status: 'live' },
          ]
        },
        {
          title: 'Zaawansowane zagadnienia',
          articles: [
            { label: 'Dylematy etyczne w praktyce',        id: 'etyka/dylematy_etyczne',          status: 'live' },
            { label: 'Kompetencje kulturowe',              id: 'etyka/kompetencje_kulturowe',     status: 'live' },
            { label: 'Etyka badal naukowych',              id: 'etyka/etyka_badan',               status: 'live' },
            { label: 'Etyka w psychologii cyfrowej',       id: 'etyka/etyka_cyfrowa',             status: 'live' },
            { label: 'Odpowiedzialnosc zawodowa',          id: 'etyka/odpowiedzialnosc_zawodowa', status: 'live' },
          ]
        },
      ]
    },

    zdrowie: {
      title: 'WIKI - Psychologia zdrowia',
      intro: 'Psychologiczne aspekty zdrowia i choroby - stres, zachowania zdrowotne, bol, choroby przewlekle, promocja zdrowia, psychoneuroimmunologia i rehabilitacja.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Psychologia zdrowia', id: 'psychologia_zdrowia/zdrowie_wprowadzenie',    status: 'live' },
            { label: 'Model biopsychospoleczny',            id: 'psychologia_zdrowia/model_biopsychospoleczny', status: 'live' },
          ]
        },
        {
          title: 'Stres i radzenie sobie',
          articles: [
            { label: 'Stres i zdrowie',              id: 'psychologia_zdrowia/stres',               status: 'live' },
            { label: 'Radzenie sobie ze stresem',    id: 'psychologia_zdrowia/radzenie_sobie',      status: 'live' },
            { label: 'Wsparcie spoleczne, a zdrowie', id: 'psychologia_zdrowia/wsparcie_spoleczne',  status: 'live' },
          ]
        },
        {
          title: 'Zachowania i styl zycia',
          articles: [
            { label: 'Zachowania zdrowotne',            id: 'psychologia_zdrowia/zachowania_zdrowotne', status: 'live' },
            { label: 'Styl zycia, a zdrowie',           id: 'psychologia_zdrowia/styl_zycia',           status: 'live' },
            { label: 'Sen i zdrowie psychiczne',        id: 'psychologia_zdrowia/sen_zdrowie',          status: 'live' },
            { label: 'Aktywnosc fizyczna,, a zdrowie psychiczne',   id: 'psychologia_zdrowia/aktywnosc_fizyczna',   status: 'live' },
            { label: 'Dieta, a zdrowie psychiczne',     id: 'psychologia_zdrowia/dieta_zdrowie',        status: 'live' },
            { label: 'Promocja zdrowia i profilaktyka', id: 'psychologia_zdrowia/promocja_zdrowia',     status: 'live' },
          ]
        },
        {
          title: 'Bol i choroby przewlekle',
          articles: [
            { label: 'Psychologia bolu',                 id: 'psychologia_zdrowia/bol',                      status: 'live' },
            { label: 'Radzenie sobie z przewleklym bolem',     id: 'psychologia_zdrowia/bol_chroniczny',     status: 'live' },
            { label: 'Psychologia chorób przewleklych',  id: 'psychologia_zdrowia/choroby_przewlekle',       status: 'live' },
            { label: 'Psychoonkologia',                  id: 'psychologia_zdrowia/psychoonkologia',          status: 'live' },
            { label: 'Choroby ukladu krazenia',          id: 'psychologia_zdrowia/choroby_ukladu_krazenia',  status: 'live' },
            { label: 'Psychologia cukrzycy',             id: 'psychologia_zdrowia/cukrzyca',                 status: 'live' },
            { label: 'Jakosc zycia, a choroba',          id: 'psychologia_zdrowia/jakosc_zycia',             status: 'live' },
          ]
        },
        {
          title: 'Mechanizmy biologiczne',
          articles: [
            { label: 'Psychoneuroimmunologia', id: 'psychologia_zdrowia/psychoneuroimmunologia', status: 'live' },
            { label: 'Efekt placebo i nocebo', id: 'psychologia_zdrowia/placebo',                status: 'live' },
          ]
        },
        {
          title: 'Praktyka kliniczna',
          articles: [
            { label: 'Adherencja terapeutyczna',      id: 'psychologia_zdrowia/adherencja',            status: 'live' },
            { label: 'Komunikacja lekarzdz pacjent',  id: 'psychologia_zdrowia/komunikacja_medyczna',  status: 'live' },
            { label: 'Interwencje psychologiczne w medycynie',    id: 'psychologia_zdrowia/interwencje_zdrowotne', status: 'live' },
            { label: 'Rehabilitacja psychologiczna',  id: 'psychologia_zdrowia/rehabilitacja',         status: 'live' },
            { label: 'Wypalenie zawodowe',            id: 'psychologia_zdrowia/wypalenie_zawodowe',    status: 'live' },
          ]
        },
      ]
    },

    psychosomatics: {
      title: 'WIKI - Psychosomatyka',
      intro: 'Psychosomatyka bada wzajemne relacje miedzy procesami psychicznymi, a cialem - od osi HPA i aleksytymii po psychodermatologie, psychokardiologie i terapie psychosomatyczna.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Psychosomatyka',                  id: 'psychosomatyka/wprowadzenie',            status: 'live' },
            { label: 'Historia psychosomatyki',         id: 'psychosomatyka/historia',                status: 'live' },
            { label: 'Modele psychosomatyczne',         id: 'psychosomatyka/modele_psychosomatyczne', status: 'live' },
          ]
        },
        {
          title: 'Mechanizmy biologiczne',
          articles: [
            { label: 'Os HPA i mechanizmy stresu',      id: 'psychosomatyka/os_hpa',                  status: 'live' },
            { label: 'Aleksytymia',                     id: 'psychosomatyka/aleksytymia',             status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia i somatyzacja',
          articles: [
            { label: 'Somatyzacja i zaburzenia somatyczne', id: 'psychosomatyka/somatyzacja',         status: 'live' },
            { label: 'Ból psychosomatyczny',            id: 'psychosomatyka/bol_psychosomatyczny',    status: 'live' },
          ]
        },
        {
          title: 'Uklady narzadowe',
          articles: [
            { label: 'Psychodermatologia',              id: 'psychosomatyka/psychodermatologia',      status: 'live' },
            { label: 'Psychogastroenterologia',         id: 'psychosomatyka/psychogastroenterologia', status: 'live' },
            { label: 'Psychokardiologia',               id: 'psychosomatyka/psychokardiologia',       status: 'live' },
            { label: 'Psychosomatyka ukladu oddechowego', id: 'psychosomatyka/uklad_oddechowy',       status: 'live' },
            { label: 'Choroby autoimmunologiczne',      id: 'psychosomatyka/choroby_autoimmunologiczne', status: 'live' },
          ]
        },
        {
          title: 'Praktyka kliniczna',
          articles: [
            { label: 'Diagnoza psychosomatyczna',       id: 'psychosomatyka/diagnoza_psychosomatyczna', status: 'live' },
            { label: 'Terapia psychosomatyczna',        id: 'psychosomatyka/terapia_psychosomatyczna',  status: 'live' },
          ]
        },
      ]
    },

    niepelnosprawnosc: {
      title: 'WIKI - Psychologia osob z niepelnosprawnoscia',
      intro: 'Psychologiczne aspekty zycia z niepelnosprawnoscia. Od modeli i klasyfikacji przez specyfike poszczegolnych rodzajow niepelnosprawnosci po rehabilitacje, jakosc zycia i inkluzje spoleczna.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Psychologia niepelnosprawnosci',     id: 'psychologia_niepelnosprawnosci/wprowadzenie', status: 'live' },
            { label: 'Modele niepelnosprawnosci',          id: 'psychologia_niepelnosprawnosci/modele_niepelnosprawnosci', status: 'live' },
          ]
        },
        {
          title: 'Rodzaje niepelnosprawnosci',
          articles: [
            { label: 'Niepelnosprawnosc intelektualna',  id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna', status: 'live' },
            { label: 'Niepelnosprawnosc ruchowa',        id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa', status: 'live' },
            { label: 'Niepelnosprawnosc wzrokowa',       id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa', status: 'live' },
            { label: 'Niepelnosprawnosc sluchowa',       id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa', status: 'live' },
            { label: 'Spektrum autyzmu i niepelnosprawnosc', id: 'psychologia_niepelnosprawnosci/autyzm_niepelnosprawnosc', status: 'live' },
          ]
        },
        {
          title: 'Funkcjonowanie psychiczne',
          articles: [
            { label: 'Jakosc zycia osob z niepelnosprawnoscia', id: 'psychologia_niepelnosprawnosci/jakosc_zycia',      status: 'live' },
            { label: 'Stres, adaptacja i radzenie sobie',       id: 'psychologia_niepelnosprawnosci/stres_i_adaptacja', status: 'live' },
          ]
        },
        {
          title: 'Srodowisko i wsparcie',
          articles: [
            { label: 'Rodzina i opiekunowie',         id: 'psychologia_niepelnosprawnosci/rodzina_i_opiekunowie', status: 'live' },
            { label: 'Rehabilitacja psychologiczna',  id: 'psychologia_niepelnosprawnosci/rehabilitacja_psychologiczna', status: 'live' },
            { label: 'Inkluzja spoleczna i prawa',    id: 'psychologia_niepelnosprawnosci/inkluzja_spoleczna', status: 'live' },
          ]
        },
      ]
    },

    geropsychology: {
      title: 'WIKI - Psychologia osob w podeszlym wieku',
      intro: 'Psychologia osob w podeszlym wieku bada procesy starzenia sie, zdrowie psychiczne, funkcjonowanie poznawcze i spoleczne seniorBw - od demencji i depresji po adaptacje do starosci i wsparcie opiekunBw.',
      sections: [
        {
          title: 'Podstawy i wprowadzenie',
          articles: [
            { label: 'Psychologia starosci',                  id: 'geropsychologia/wprowadzenie',           status: 'live' },
            { label: 'Starzenie sie poznawcze',               id: 'geropsychologia/starzenie_poznawcze',    status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia i choroby',
          articles: [
            { label: 'Demencja i choroby neurodegeneracyjne', id: 'geropsychologia/demencja',               status: 'live' },
            { label: 'Depresja u osob starszych',             id: 'geropsychologia/depresja_starszych',     status: 'live' },
          ]
        },
        {
          title: 'Funkcjonowanie spoleczne i jakosc zycia',
          articles: [
            { label: 'Samotnosc i izolacja spoleczna',        id: 'geropsychologia/samotnosc',              status: 'live' },
            { label: 'Jakosc zycia w starosci',               id: 'geropsychologia/jakosc_zycia_starszych', status: 'live' },
            { label: 'Relacje spoleczne i wsparcie rodziny',  id: 'geropsychologia/relacje_spoleczne_starszych', status: 'live' },
          ]
        },
        {
          title: 'Aktywnosc i adaptacja',
          articles: [
            { label: 'Aktywnosc poznawcza i trening umyslu',  id: 'geropsychologia/aktywnosc_poznawcza',    status: 'live' },
            { label: 'Adaptacja do starosci i rezyliencja',   id: 'geropsychologia/adaptacja_do_starosci',  status: 'live' },
          ]
        },
        {
          title: 'Interwencje i opieka',
          articles: [
            { label: 'Interwencje terapeutyczne',             id: 'geropsychologia/interwencje_terapeutyczne', status: 'live' },
            { label: 'Psychologia umierania i smierci',       id: 'geropsychologia/umieranie_smierc',       status: 'live' },
            { label: 'Wypalenie i wsparcie opiekunBw',        id: 'geropsychologia/opieka_nad_opiekunami',  status: 'live' },
          ]
        },
      ]
    },

    gry_wideo: {
      title: 'WIKI - Psychologia gier wideo',
      intro: 'Psychologia gier wideo bada wplyw gier komputerowych i elektronicznych na procesy poznawcze, emocjonalne i spoleczne - od uzaleznien i agresji przez motywacje i flow po zastosowania terapeutyczne.',
      sections: [
        {
          title: 'Podstawy i wprowadzenie',
          articles: [
            { label: 'Psychologia gier wideo',          id: 'psychologia_gier/wprowadzenie',         status: 'live' },
            { label: 'Klasyfikacja gier (PEGI, ESRB)',  id: 'psychologia_gier/klasyfikacja_gier',    status: 'live' },
          ]
        },
        {
          title: 'Efekty psychologiczne grania',
          articles: [
            { label: 'Agresja, a gry wideo',            id: 'psychologia_gier/agresja_a_gry',       status: 'live' },
            { label: 'Efekty poznawcze grania',         id: 'psychologia_gier/efekty_poznawcze',    status: 'live' },
            { label: 'Przeplyw (flow) i immersja',      id: 'psychologia_gier/flow_i_immersja',     status: 'live' },
          ]
        },
        {
          title: 'Motywacja i zachowanie gracza',
          articles: [
            { label: 'Motywacja gracza',                    id: 'psychologia_gier/motywacja_gracza',      status: 'live' },
            { label: 'Uzaleznienie od gier (IGD)',           id: 'psychologia_gier/uzaleznienie_od_gier',  status: 'live' },
            { label: 'Plec i tozsamosc w grach',            id: 'psychologia_gier/gender_w_grach',        status: 'live' },
          ]
        },
        {
          title: 'Kontekst spoleczny i wiekowy',
          articles: [
            { label: 'Gry wieloosobowe i aspekty spoleczne', id: 'psychologia_gier/gry_spolecznosciowe',  status: 'live' },
            { label: 'Esport i psychologia zawodnika',        id: 'psychologia_gier/esport',               status: 'live' },
            { label: 'Gry wideo, a dzieci i nastolatki',       id: 'psychologia_gier/gry_a_dzieci',         status: 'live' },
          ]
        },
        {
          title: 'Zastosowania terapeutyczne',
          articles: [
            { label: 'Gry w terapii i rehabilitacji', id: 'psychologia_gier/gry_terapeutyczne', status: 'live' },
          ]
        },
      ]
    },

    odpornosc_mobbing: {
      title: 'WIKI - Odpornosc psychiczna, mobbing i wypalenie zawodowe',
      intro: 'Encyklopedia obejmuje trzy powiazane obszary: odpornosc psychiczna (resilience) jako zasBb chroniacy, psychologiczne aspekty przemocy psychicznej i mobbingu w miejscu pracy oraz wypalenie zawodowe - mechanizmy, skutki i profilaktyke.',
      sections: [
        {
          title: 'Odpornosc psychiczna',
          articles: [
            { label: 'Odpornosc psychiczna',  id: 'rezyliencja_i_mobbing/odpornosc_wprowadzenie', status: 'live' },
            { label: 'Modele i teorie odpornosci',            id: 'rezyliencja_i_mobbing/modele_odpornosci',      status: 'live' },
            { label: 'Budowanie odpornosci psychicznej',      id: 'rezyliencja_i_mobbing/budowanie_odpornosci',   status: 'live' },
          ]
        },
        {
          title: 'Przemoc psychiczna i mobbing',
          articles: [
            { label: 'Przemoc psychiczna - definicja i formy',   id: 'rezyliencja_i_mobbing/przemoc_psychiczna',    status: 'live' },
            { label: 'Mobbing - definicja, rodzaje i fazy',      id: 'rezyliencja_i_mobbing/mobbing_definicja',     status: 'live' },
            { label: 'Skutki psychologiczne mobbingu',           id: 'rezyliencja_i_mobbing/mobbing_skutki',        status: 'live' },
            { label: 'Interwencja i zapobieganie mobbingowi',    id: 'rezyliencja_i_mobbing/mobbing_interwencja',   status: 'live' },
            { label: 'Wsparcie psychologiczne ofiar',            id: 'rezyliencja_i_mobbing/wsparcie_psychologiczne', status: 'live' },
          ]
        },
        {
          title: 'Wypalenie zawodowe',
          articles: [
            { label: 'Wypalenie zawodowe - definicja i modele',  id: 'rezyliencja_i_mobbing/wypalenie_zawodowe',    status: 'live' },
            { label: 'Fazy i wymiary wypalenia zawodowego',      id: 'rezyliencja_i_mobbing/fazy_wypalenia',        status: 'live' },
            { label: 'Wypalenie w wybranych zawodach',           id: 'rezyliencja_i_mobbing/wypalenie_zawody',      status: 'live' },
            { label: 'Profilaktyka wypalenia zawodowego',        id: 'rezyliencja_i_mobbing/profilaktyka_wypalenia', status: 'live' },
          ]
        },
      ]
    },

    media_natura: {
      title: 'WIKI - Ekrany, ksiazki i natura',
      intro: 'Encyklopedia obejmuje trzy powiazane obszary: wplyw ekranBw (telefony, tablety, telewizja) na funkcje poznawcze i zdrowie psychiczne, psychologiczne efekty czytania ksiazek oraz dobroczynne dzialanie kontaktu z natura - od kapieli lesnych po wedrBwki gBrskie.',
      sections: [
        {
          title: 'Ekrany i technologia',
          articles: [
            { label: 'Ekrany, ksiazki i natura',  id: 'ekrany_ksiazki_i_natura/wprowadzenie',             status: 'live' },
            { label: 'Ekrany, a funkcje poznawcze',               id: 'ekrany_ksiazki_i_natura/ekrany_funkcje_poznawcze', status: 'live' },
            { label: 'Smartfony, a psychologia',                  id: 'ekrany_ksiazki_i_natura/smartfony_psychologia',    status: 'live' },
            { label: 'Tablety, a Rozwoj poznawczy dzieci',        id: 'ekrany_ksiazki_i_natura/tablety_dzieci',           status: 'live' },
            { label: 'Telewizja, a funkcje psychiczne',           id: 'ekrany_ksiazki_i_natura/telewizja_psychologia',    status: 'live' },
            { label: 'Czas ekranowy, a zdrowie psychiczne',       id: 'ekrany_ksiazki_i_natura/czas_ekranowy',            status: 'live' },
          ]
        },
        {
          title: 'Czytanie ksiazek',
          articles: [
            { label: 'Czytanie ksiazek, a funkcje psychiczne',    id: 'ekrany_ksiazki_i_natura/czytanie_ksiazek',         status: 'live' },
            { label: 'Glebokie czytanie',                        id: 'ekrany_ksiazki_i_natura/gleboke_czytanie',         status: 'live' },
            { label: 'Czytanie fikcji, a empatia i ToM',          id: 'ekrany_ksiazki_i_natura/czytanie_fikcja_empatia',  status: 'live' },
          ]
        },
        {
          title: 'Natura i srodowisko',
          articles: [
            { label: 'Natura, a psychologia',                     id: 'ekrany_ksiazki_i_natura/natura_psychologia',       status: 'live' },
            { label: 'Kapiel lesna - shinrin-yoku',              id: 'ekrany_ksiazki_i_natura/las_shinrin_yoku',         status: 'live' },
            { label: 'GBry i wedrBwki gBrskie, a psychologia',    id: 'ekrany_ksiazki_i_natura/gory_psychologia',         status: 'live' },
          ]
        },
      ]
    },

    psych_pozytywna: {
      title: 'WIKI - Psychologia pozytywna',
      intro: 'Psychologia pozytywna bada naukowe podstawy dobrostanu, szczescia i rozkwitu czlowieka. Encyklopedia obejmuje kluczowe koncepcje - od modelu PERMA i teorii flow, przez sily charakteru i wdziecznosc, po interwencje oparte na dowodach.',
      sections: [
        {
          title: 'Podstawy i teorie',
          articles: [
            { label: 'Psychologia pozytywna', id: 'psychologia_pozytywna/wprowadzenie',        status: 'live' },
            { label: 'Model PERMA',                          id: 'psychologia_pozytywna/model_perma',         status: 'live' },
            { label: 'Szczescie i dobrostan psychiczny',     id: 'psychologia_pozytywna/szczescie_dobrostan', status: 'live' },
          ]
        },
        {
          title: 'Zasoby i sily psychologiczne',
          articles: [
            { label: 'Optymizm i nadzieja',           id: 'psychologia_pozytywna/optymizm_nadzieja',      status: 'live' },
            { label: '3P optymizmu Seligmana',         id: 'psychologia_pozytywna/3p_optymizmu_seligmana', status: 'live' },
            { label: 'Przeplyw (flow)',                id: 'psychologia_pozytywna/przeplyw_flow',          status: 'live' },
            { label: 'Sily charakteru (VIA)',          id: 'psychologia_pozytywna/sily_charakteru',        status: 'live' },
            { label: 'Wdziecznosc',                    id: 'psychologia_pozytywna/wdziecznosc',            status: 'live' },
          ]
        },
        {
          title: 'Uwaznosc i relacje',
          articles: [
            { label: 'Mindfulness i uwaznosc',        id: 'psychologia_pozytywna/mindfulness',             status: 'live' },
            { label: 'WspBlczucie dla siebie',         id: 'psychologia_pozytywna/wspolczucie_dla_siebie', status: 'live' },
            { label: 'Sens zycia i poczucie celu',     id: 'psychologia_pozytywna/sens_i_cel',             status: 'live' },
            { label: 'Pozytywne relacje i milosc',     id: 'psychologia_pozytywna/relacje_pozytywne',      status: 'live' },
          ]
        },
        {
          title: 'Interwencje',
          articles: [
            { label: 'Interwencje psychologii pozytywnej', id: 'psychologia_pozytywna/interwencje_pozytywne', status: 'live' },
          ]
        },
      ]
    },

    psych_ai: {
      title: 'WIKI - Psychologia sztucznej inteligencji',
      intro: 'Psychologia sztucznej inteligencji bada psychologiczne aspekty systemBw AI - od procesBw poznawczych i antropomorfizacji po etyke, zaufanie i przyszlosc relacji czlowiek-maszyna. Encyklopedia obejmuje zarBwno wplyw AI na czlowieka, jak i psychologiczne mechanizmy projektowania i uzytkowania systemBw inteligentnych.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Psychologia AI',   id: 'psychologia_ai/wprowadzenie',  status: 'live' },
            { label: 'Historia AI i psychologia',       id: 'psychologia_ai/historia_ai',   status: 'live' },
          ]
        },
        {
          title: 'Procesy poznawcze i decyzje',
          articles: [
            { label: 'Poznawcze aspekty dzialania AI',  id: 'psychologia_ai/ai_poznawcze',  status: 'live' },
            { label: 'AI, a podejmowanie decyzji',       id: 'psychologia_ai/decyzje_ai',    status: 'live' },
          ]
        },
        {
          title: 'Relacja czlowiek-AI',
          articles: [
            { label: 'Interakcja czlowiek-AI',                  id: 'psychologia_ai/czlowiek_a_ai',        status: 'live' },
            { label: 'Zaufanie do sztucznej inteligencji',      id: 'psychologia_ai/zaufanie_do_ai',       status: 'live' },
            { label: 'Antropomorfizacja AI',                    id: 'psychologia_ai/antropomorfizacja_ai', status: 'live' },
            { label: 'AI, a emocje i rozumienie emocji',         id: 'psychologia_ai/ai_emocje',            status: 'live' },
          ]
        },
        {
          title: 'Etyka, uprzedzenia i zastosowania',
          articles: [
            { label: 'Uprzedzenia i bledy poznawcze w AI',      id: 'psychologia_ai/uprzedzenia_ai', status: 'live' },
            { label: 'Etyka AI z perspektywy psychologicznej',  id: 'psychologia_ai/etyka_ai',       status: 'live' },
            { label: 'AI w psychoterapii i diagnostyce',        id: 'psychologia_ai/ai_w_terapii',   status: 'live' },
            { label: 'Przyszlosc relacji czlowiek-AI',          id: 'psychologia_ai/przyszlosc_ai',  status: 'live' },
          ]
        },
      ]
    },

    psychologia_technologii: {
      title: 'WIKI - Psychologia technologii i dobrostanu cyfrowego',
      intro: 'Encyklopedia porzadkuje wiedze o wplywie technologii cyfrowych na funkcjonowanie psychiczne czlowieka: stres, uwage, sen, regulacje emocji, relacje, poczucie sprawczosci oraz dobrostan. Łączy perspektywę badawczą z praktyką psychoedukacyjną i profilaktyką zdrowia psychicznego.',
      sections: [
        {
          title: 'Artykuly dostepne',
          articles: [
            { label: 'Technostres - artykul naukowy', id: 'psychologia_technologii/technostres', status: 'live' },
          ]
        },
        {
          title: 'Plan redakcyjny: wplyw technologii na psychologie czlowieka',
          articles: [
            { label: 'Zmeczenie cyfrowe i przeciazenie informacyjne',    id: 'psychologia_technologii/zmeczenie_cyfrowe',     status: 'live' },
            { label: 'FOMO i nomofobia',                                  id: 'psychologia_technologii/fomo_i_nomofobia',      status: 'live' },
            { label: 'Algorytmy personalizacji, a samoocena',              id: 'psychologia_technologii/algorytmy_a_samoocena', status: 'live' },
            { label: 'Higiena cyfrowa i profilaktyka przeciazenia',       id: 'psychologia_technologii/higiena_cyfrowa',       status: 'live' },
            { label: 'Technologia w pracy: granice, kontrola i autonomia',id: 'psychologia_technologii/technologia_w_pracy',   status: 'live' },
            { label: 'Technologia, a sen i regeneracja psychiczna',        id: 'psychologia_technologii/technologia_a_sen',     status: 'live' },
            { label: 'Psychoedukacja rodzinna w erze ekranBw',            id: 'psychologia_technologii/psychoedukacja_rodzinna', status: 'live' },
            { label: 'Psycholog w IT',                                       id: 'dla_studentow/psycholog_w_it', status: 'xlink' },
          ]
        },
      ]
    },

    robotyka_afektywna: {
      title: 'WIKI - Robotyka afektywna i kognitywistyka',
      intro: 'Robotyka afektywna i kognitywistyka badaja emocjonalne i poznawcze aspekty maszyn oraz interakcji czlowiek-robot. Encyklopedia obejmuje zagadnienia od historii robotyki afektywnej, przez doliny niesamowitosci i roboty spoleczne, po interfejsy mozg-maszyna i filozofie swiadomosci maszyn.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Robotyka afektywna',  id: 'robotyka_afektywna/wprowadzenie',                 status: 'live' },
            { label: 'Historia robotyki afektywnej',       id: 'robotyka_afektywna/historia_robotyki_afektywnej', status: 'live' },
            { label: 'Kognitywistyka obliczeniowa',        id: 'robotyka_afektywna/kognitywistyka_obliczeniowa',  status: 'live' },
          ]
        },
        {
          title: 'Emocje i percepcja',
          articles: [
            { label: 'Emocje w robotach',                      id: 'robotyka_afektywna/emocje_robotow',           status: 'live' },
            { label: 'Dolina niesamowitosci',                  id: 'robotyka_afektywna/dolina_niesamowitosci',    status: 'live' },
            { label: 'Percepcja i ocena robotBw przez ludzi',  id: 'robotyka_afektywna/percepcja_robotow',        status: 'live' },
          ]
        },
        {
          title: 'Interakcja i zastosowania',
          articles: [
            { label: 'Roboty spoleczne i HRI',           id: 'robotyka_afektywna/roboty_spoleczne',          status: 'live' },
            { label: 'Roboty w opiece i terapii',        id: 'robotyka_afektywna/roboty_w_opiece',           status: 'live' },
            { label: 'WspBlpraca czlowiekdz robot (HRC)',  id: 'robotyka_afektywna/wspolpraca_czlowiek_robot', status: 'live' },
          ]
        },
        {
          title: 'lawiadomosc, BCI i przyszlosc',
          articles: [
            { label: 'lawiadomosc i podmiotowosc maszyn',  id: 'robotyka_afektywna/swiadomosc_maszyn',              status: 'live' },
            { label: 'Interfejsy mozgdz maszyna (BCI)',     id: 'robotyka_afektywna/interfejsy_mozg_maszyna',         status: 'live' },
            { label: 'Przyszlosc robotyki afektywnej',    id: 'robotyka_afektywna/przyszlosc_robotyki_afektywnej',  status: 'live' },
          ]
        },
      ]
    },

    psych_szkolna: {
      title: 'WIKI - Psychologia szkolna i edukacyjna',
      intro: 'Psychologia szkolna i edukacyjna bada procesy uczenia sie, nauczania i rozwoju w kontekscie instytucji edukacyjnych. Encyklopedia obejmuje teorie uczenia sie, motywacje akademicka, trudnosci szkolne, relacje nauczyciel-uczeln, klimat szkolny oraz interwencje psychologiczne w placBwkach oswiatowych.',
      sections: [
        {
          title: 'Podstawy i teorie',
          articles: [
            { label: 'Psychologia szkolna',  id: 'psychologia_szkolna/wprowadzenie',                status: 'live' },
            { label: 'Neurodydaktyka',                    id: 'psychologia_szkolna/neurodydaktyka',            status: 'live' },
            { label: 'Teorie uczenia sie',                  id: 'psychologia_szkolna/teorie_uczenia_sie',          status: 'live' },
            { label: 'Strefa najblizszego rozwoju (ZPD)',   id: 'psychologia_szkolna/strefa_najblizszego_rozwoju', status: 'live' },
          ]
        },
        {
          title: 'Motywacja i zdolnosci',
          articles: [
            { label: 'Motywacja szkolna',               id: 'psychologia_szkolna/motywacja_szkolna',      status: 'live' },
            { label: 'Inteligencje wielorakie (Gardner)', id: 'psychologia_szkolna/inteligencja_wieloraka', status: 'live' },
          ]
        },
        {
          title: 'Trudnosci i zaburzenia',
          articles: [
            { label: 'Trudnosci w uczeniu sie',  id: 'psychologia_szkolna/trudnosci_w_uczeniu_sie', status: 'live' },
            { label: 'ADHD w srodowisku szkolnym', id: 'psychologia_szkolna/adhd_w_szkole',          status: 'live' },
            { label: 'Stres szkolny i lek egzaminacyjny', id: 'psychologia_szkolna/stres_szkolny',   status: 'live' },
          ]
        },
        {
          title: 'larodowisko szkolne i interwencje',
          articles: [
            { label: 'Relacje nauczycieldz uczel',           id: 'psychologia_szkolna/relacje_nauczyciel_uczen', status: 'live' },
            { label: 'Klimat szkolny',                      id: 'psychologia_szkolna/klimat_szkolny',           status: 'live' },
            { label: 'Bullying w szkole',                 id: 'psychologia_szkolna/bullying',                 status: 'live' },
            { label: 'Ocenianie i informacja zwrotna',      id: 'psychologia_szkolna/ocenianie_i_feedback',     status: 'live' },
            { label: 'Interwencje psychologiczne w szkole', id: 'psychologia_szkolna/interwencje_szkolne',      status: 'live' },
          ]
        },
      ]
    },

    neurozroznorodnosc: {
      title: 'WIKI - NeurorBznorodnosc',
      intro: 'NeurorBznorodnosc to koncepcja uznajaca naturalne rBznice neurologiczne - takie jak autyzm, ADHD, dysleksja, dyskalkulia czy dyspraksja - za warianty ludzkiego mozgu,, a nie zaburzenia wymagajace "naprawy". Encyklopedia obejmuje zagadnienia od podstaw teoretycznych neurorBznorodnosci, przez poszczegBlne profile neurologiczne, po modele mocnych stron, wsparcie, interwencje i inkluzje zawodowa.',
      sections: [
        {
          title: 'Podstawy i profile',
          articles: [
            { label: 'NeurorBznorodnosc',     id: 'neuroroznorodnosc/wprowadzenie',     status: 'live' },
            { label: 'ADHD jako wariant neurorBznorodnosci', id: 'neuroroznorodnosc/adhd',             status: 'live' },
            { label: 'Spektrum autyzmu (ASD)',                id: 'neuroroznorodnosc/spektrum_autyzmu', status: 'live' },
          ]
        },
        {
          title: 'Trudnosci uczenia sie',
          articles: [
            { label: 'Dysleksja',        id: 'neuroroznorodnosc/dysleksja',   status: 'live' },
            { label: 'Dyskalkulia',      id: 'neuroroznorodnosc/dyskalkulia', status: 'live' },
            { label: 'Dyspraksja i DCD', id: 'neuroroznorodnosc/dyspraksja',  status: 'live' },
          ]
        },
        {
          title: 'Inne profile i zdolnosci',
          articles: [
            { label: 'Profil sensoryczny',                 id: 'neuroroznorodnosc/profil_sensoryczny', status: 'live' },
            { label: 'ZespBl Tourette\'a i tiki',         id: 'neuroroznorodnosc/tourette',    status: 'live' },
            { label: 'Hiperleksja i wyjatkowe zdolnosci', id: 'neuroroznorodnosc/hiperleksja', status: 'live' },
          ]
        },
        {
          title: 'Wsparcie i inkluzja',
          articles: [
            { label: 'Model mocnych stron',                id: 'neuroroznorodnosc/model_mocnych_stron',        status: 'live' },
            { label: 'Wsparcie i interwencje',             id: 'neuroroznorodnosc/wsparcie_interwencje',       status: 'live' },
            { label: 'NeurorBznorodnosc w miejscu pracy', id: 'neuroroznorodnosc/neurozroznorodnosc_w_pracy', status: 'live' },
            { label: 'Identyfikacja i diagnoza',           id: 'neuroroznorodnosc/identyfikacja_i_diagnoza',   status: 'live' },
          ]
        },
      ]
    },

    psych_sadowa: {
      title: 'WIKI - Psychologia sadowa i opiniowanie',
      intro: 'Psychologia sadowa zajmuje sie stosowaniem wiedzy i metod psychologicznych w postepowaniach prawnych - karnych, cywilnych i rodzinnych. Encyklopedia obejmuje role bieglego psychologa, podstawy prawne opiniowania, metodologie sporzadzania opinii, ocene wiarygodnosci zeznaln, specjalistyczne narzedzia diagnostyczne oraz etyke zawodowa w pracy sadowej.',
      sections: [
        {
          title: 'Podstawy i rola bieglego',
          articles: [
            { label: 'Biegly psycholog',                 id: 'psychologia_sadowa/wprowadzenie',   status: 'live' },
            { label: 'Rola i status bieglego',           id: 'psychologia_sadowa/rola_bieglego',  status: 'live' },
            { label: 'Podstawy prawne opiniowania',      id: 'psychologia_sadowa/podstawy_prawne', status: 'live' },
            { label: 'Metodologia sporzadzania opinii',  id: 'psychologia_sadowa/metodologia_opinii', status: 'live' },
          ]
        },
        {
          title: 'Ocena i opiniowanie',
          articles: [
            { label: 'Ocena wiarygodnosci zeznal',         id: 'psychologia_sadowa/ocena_wiarygodnosci',    status: 'live' },
            { label: 'Opiniowanie w sprawach karnych',     id: 'psychologia_sadowa/opinia_karna',           status: 'live' },
            { label: 'Opiniowanie w sprawach cywilnych',   id: 'psychologia_sadowa/opinia_cywilna',         status: 'live' },
            { label: 'Opiniowanie w sprawach rodzinnych',  id: 'psychologia_sadowa/opinia_rodzinna',        status: 'live' },
            { label: 'Opiniowanie nieletnich i dzieci',    id: 'psychologia_sadowa/opiniowanie_nieletnich', status: 'live' },
          ]
        },
        {
          title: 'Narzedzia i etyka',
          articles: [
            { label: 'Narzedzia diagnostyczne (sadowe)',  id: 'psychologia_sadowa/narzedzia_diagnostyczne', status: 'live' },
            { label: 'Etyka opiniowania sadowego',        id: 'psychologia_sadowa/etyka_opiniowania',       status: 'live' },
            { label: 'Biegly, a sad - komunikacja',       id: 'psychologia_sadowa/biegly_a_sad',            status: 'live' },
          ]
        },
      ]
    },

    e_terapia: {
      title: 'WIKI - E-terapia',
      intro: 'E-terapia (terapia online, telemedycyna psychologiczna) obejmuje swiadczenie pomocy psychologicznej i terapeutycznej za posrednictwem technologii cyfrowych - wideo, czatu, aplikacji mobilnych oraz rzeczywistosci wirtualnej. Encyklopedia opisuje historie, formy, skutecznosc, etyke oraz przyszlosc zdalnej opieki psychologicznej.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'E-terapia',                         id: 'e_terapia/wprowadzenie',       status: 'live' },
            { label: 'Historia e-terapii',                id: 'e_terapia/historia_e_terapii', status: 'live' },
          ]
        },
        {
          title: 'Formy i narzedzia',
          articles: [
            { label: 'Terapia online (wideo, telefon, czat)',      id: 'e_terapia/terapia_online',                 status: 'live' },
            { label: 'Platformy i narzedzia e-terapii',            id: 'e_terapia/platformy_e_terapii',            status: 'live' },
            { label: 'Chatboty terapeutyczne i AI',                id: 'e_terapia/chatboty_terapeutyczne',         status: 'live' },
            { label: 'Aplikacje zdrowia psychicznego (mHealth)',   id: 'e_terapia/aplikacje_zdrowia_psychicznego', status: 'live' },
            { label: 'Wirtualna rzeczywistosc (VR) w terapii',     id: 'e_terapia/vr_terapia',                     status: 'live' },
          ]
        },
        {
          title: 'Skutecznosc i etyka',
          articles: [
            { label: 'Skutecznosc e-terapii',              id: 'e_terapia/skutecznosc_e_terapii', status: 'live' },
            { label: 'Etyka e-terapii',                    id: 'e_terapia/etyka_e_terapii',       status: 'live' },
            { label: 'Dostepnosc i wykluczenie cyfrowe',   id: 'e_terapia/dostepnosc_cyfrowa',    status: 'live' },
          ]
        },
        {
          title: 'Grupy szczegBlne i przyszlosc',
          articles: [
            { label: 'E-terapia dzieci i mlodziezy', id: 'e_terapia/e_terapia_dzieci',     status: 'live' },
            { label: 'Przyszlosc e-terapii',         id: 'e_terapia/przyszlosc_e_terapii', status: 'live' },
          ]
        },
      ]
    },

    filozofia: {
      title: 'WIKI - Filozofia',
      intro: 'Filozofia jest matka wszystkich nauk - bada fundamentalne pytania o rzeczywistosc, poznanie, wartosci i nature czlowieka. Encyklopedia obejmuje glBwne dzialy filozofii (ontologie, epistemologie, etyke, filozofie umyslu) oraz kierunki szczegBlnie bliskie psychologii: egzystencjalizm, fenomenologie, hermeneutyke i filozofie jezyka.',
      sections: [
        {
          title: 'Podstawy filozofii',
          articles: [
            { label: 'Filozofia',                       id: 'filozofia/wprowadzenie',  status: 'live' },
            { label: 'Ontologia i metafizyka',          id: 'filozofia/ontologia',     status: 'live' },
            { label: 'Epistemologia i teoria poznania', id: 'filozofia/epistemologia', status: 'live' },
            { label: 'Egocentryczny dylemat poznania',  id: 'filozofia/egocentryczny_dylemat', status: 'live' },
            { label: 'Etyka i filozofia moralna',       id: 'filozofia/etyka',         status: 'live' },
          ]
        },
        {
          title: 'Filozofia umyslu i nauki',
          articles: [
            { label: 'Filozofia umyslu',                id: 'filozofia/filozofia_umyslu',    status: 'live' },
            { label: 'Filozofia nauki',                 id: 'filozofia/filozofia_nauki',     status: 'live' },
            { label: 'Logika i argumentacja',           id: 'filozofia/logika',              status: 'live' },
          ]
        },
        {
          title: 'Kierunki bliskie psychologii',
          articles: [
            { label: 'Egzystencjalizm',                 id: 'filozofia/egzystencjalizm',     status: 'live' },
            { label: 'Fenomenologia',                   id: 'filozofia/fenomenologia',       status: 'live' },
            { label: 'Hermeneutyka i interpretacja',    id: 'filozofia/hermeneutyka',        status: 'live' },
            { label: 'Filozofia jezyka',                id: 'filozofia/filozofia_jezyka',    status: 'live' },
            { label: 'Filozofia czlowieka',             id: 'filozofia/filozofia_czlowieka', status: 'live' },
          ]
        },
        {
          title: 'Filozofia ciemna i spekulatywna',
          articles: [
            { label: 'Ciel antropiczny',                       id: 'filozofia/cien_antropiczny',          status: 'live' },
            { label: 'MBzg Boltzmanna',                        id: 'filozofia/mozg_boltzmanna',           status: 'live' },
            { label: 'Horror panpsychizmu',                    id: 'filozofia/horror_panpsychizmu',       status: 'live' },
            { label: 'Filozoficzne zombie',                    id: 'filozofia/filozoficzne_zombie',       status: 'live' },
            { label: 'Pusty indywidualizm',                    id: 'filozofia/pusty_indywidualizm',       status: 'live' },
            { label: 'Asymetria dobra i bBlu',                 id: 'filozofia/asymetria_dobra_i_bolu',    status: 'live' },
            { label: 'Niemoralnosc braku zgody na narodziny',  id: 'filozofia/niemoralnosc_braku_zgody',  status: 'live' },
            { label: 'Redukcjonizm tozsamosci osobowej',       id: 'filozofia/redukcjonizm_tozsamosci',   status: 'live' },
            { label: 'Eliminatywizm materialny',               id: 'filozofia/eliminatywizm_materialny',  status: 'live' },
            { label: 'Efilizm',                                id: 'filozofia/efilizm',                   status: 'live' },
            { label: 'Pesymizm biologiczny',                   id: 'filozofia/pesymizm_biologiczny',      status: 'live' },
            { label: 'Podswiadomy nihilizm',                   id: 'filozofia/podswiadomy_nihilizm',      status: 'live' },
            { label: 'Paradoksalny determinizm',               id: 'filozofia/paradoksalny_determinizm',  status: 'live' },
            { label: 'Realizm modalny',                        id: 'filozofia/realizm_modalny',           status: 'live' },
          ]
        },
      ]
    },

    nvc: {
      title: 'WIKI - Porozumiewanie sie bez przemocy (NVC)',
      intro: 'Nonviolent Communication (NVC) to metoda komunikacji opracowana przez Marshalla Rosenberga, oparta na empatii, obserwacji bez oceniania oraz identyfikacji uczuc i potrzeb. NVC uczy wyrazania siebie z autentycznoscia i sluchania innych z prawdziwa obecnoscia.',
      sections: [
        {
          title: 'Podstawy NVC',
          articles: [
            { label: 'NVC',                         id: 'porozumiewanie_sie_bez_przemocy/wprowadzenie',        status: 'live', desc: 'Geneza, filozofia i zastosowania Porozumiewania sie bez przemocy.' },
            { label: 'Cztery komponenty NVC',       id: 'porozumiewanie_sie_bez_przemocy/cztery_komponenty',   status: 'live', desc: 'Obserwacja, uczucie, potrzeba, prosba - struktura procesu NVC.' },
            { label: 'Jezyk szakala i zyrafy',      id: 'porozumiewanie_sie_bez_przemocy/jezyk_szakala_i_zyrafy', status: 'live', desc: 'Dwa style komunikacji - oceniajacy i empatyczny.' },
          ]
        },
        {
          title: 'Cztery komponenty w praktyce',
          articles: [
            { label: 'Obserwacja bez oceniania',    id: 'porozumiewanie_sie_bez_przemocy/obserwacja',          status: 'live', desc: 'Jak opisywac zdarzenia bez ocen, etykietek i generalizacji.' },
            { label: 'Uczucia w NVC',               id: 'porozumiewanie_sie_bez_przemocy/uczucia',             status: 'live', desc: 'Katalog uczuc, pseudouczucia i odpowiedzialnosc za emocje.' },
            { label: 'Katalog potrzeb',             id: 'porozumiewanie_sie_bez_przemocy/potrzeby',            status: 'live', desc: 'Universalne ludzkie potrzeby i ich rola w NVC.' },
            { label: 'Prosba, a zadanie',           id: 'porozumiewanie_sie_bez_przemocy/prosba_i_zadanie',    status: 'live', desc: 'Jak formulowac prosby i czym rBznia sie od zadaln.' },
          ]
        },
        {
          title: 'Empatia i wewnetrzna praca',
          articles: [
            { label: 'Empatia w NVC',                 id: 'porozumiewanie_sie_bez_przemocy/empatia_nvc',       status: 'live', desc: 'Empatyczne sluchanie, blokady empatii i cztery poziomy slyszenia.' },
            { label: 'Autoempatia i samowspBlczucie', id: 'porozumiewanie_sie_bez_przemocy/autoempatia',       status: 'live', desc: 'Sluchanie wlasnych uczuc i potrzeb z zyczliwoscia.' },
          ]
        },
        {
          title: 'Zastosowania NVC',
          articles: [
            { label: 'NVC w rozwiazywaniu konfliktBw',  id: 'porozumiewanie_sie_bez_przemocy/nvc_w_konfliktach', status: 'live', desc: 'Mediacja NVC, trzy fazy rozwiazywania konfliktu.' },
            { label: 'NVC w wychowaniu i edukacji',     id: 'porozumiewanie_sie_bez_przemocy/nvc_w_wychowaniu',  status: 'live', desc: 'Wychowanie bez kar i nagrBd, NVC w szkole.' },
            { label: 'Praktyka NVC w codziennym zyciu', id: 'porozumiewanie_sie_bez_przemocy/praktyka_nvc',      status: 'live', desc: 'Codzienna praktyka NVC w domu, pracy i relacjach.' },
          ]
        },
      ]
    },

    seminarium_dyplomowe: {
      title: 'WIKI - Seminarium dyplomowe',
      intro: 'Seminarium dyplomowe przygotowuje studentBw psychologii do samodzielnego prowadzenia badaln i pisania pracy magisterskiej. Encyklopedia obejmuje zasady pisania pracy naukowej, metodologie badaln, prowadzenie pomiarBw psychologicznych, analizy statystyczne, etyke naukowa, typowe bledy badawcze oraz dobre praktyki akademickie.',
      sections: [
        {
          title: 'Podstawy pracy naukowej',
          articles: [
            { label: 'Seminarium dyplomowe',                 id: 'seminarium_dyplomowe/wprowadzenie',         status: 'live', desc: 'Cel i struktura seminarium dyplomowego, typy prac magisterskich.' },
            { label: 'Struktura pracy magisterskiej',        id: 'seminarium_dyplomowe/struktura_pracy',      status: 'live', desc: 'Standardowe rozdzialy, formatowanie i objetosc pracy.' },
            { label: 'Przeglad literatury naukowej',         id: 'seminarium_dyplomowe/przeglad_literatury',  status: 'live', desc: 'Bazy danych, strategie wyszukiwania, ocena l_rBdel, cytowanie.' },
          ]
        },
        {
          title: 'Metodologia i pomiar',
          articles: [
            { label: 'Metodologia badal psychologicznych',    id: 'seminarium_dyplomowe/metodologia_badan',       status: 'live', desc: 'Paradygmaty, typy projektBw, dobBr prBby, operacjonalizacja.' },
            { label: 'Zasady prowadzenia pomiarBw',           id: 'seminarium_dyplomowe/pomiary_psychologiczne',  status: 'live', desc: 'Skale, rzetelnosc, trafnosc, standaryzacja, normy.' },
            { label: 'Narzedzia badawcze i kwestionariusze',  id: 'seminarium_dyplomowe/narzedzia_badawcze',      status: 'live', desc: 'WybBr narzedzia, adaptacja, tworzenie wlasnych kwestionariuszy.' },
            { label: 'Analizy statystyczne',                  id: 'seminarium_dyplomowe/analizy_statystyczne',    status: 'live', desc: 'Testy parametryczne i nieparametryczne, efekty, raportowanie APA.' },
          ]
        },
        {
          title: 'Etyka i jakosc badaln',
          articles: [
            { label: 'Etyka badal naukowych',               id: 'seminarium_dyplomowe/etyka_badan',      status: 'live', desc: 'lawiadoma zgoda, poufnosc, komisje etyczne, integralnosc naukowa.' },
            { label: 'Bledy badawcze - czego unikac',       id: 'seminarium_dyplomowe/bledy_badawcze',   status: 'live', desc: 'Bledy projektowania, pomiaru, analizy i interpretacji wynikBw.' },
          ]
        },
        {
          title: 'Pisanie i obrona',
          articles: [
            { label: 'Pisanie i interpretacja wynikBw',  id: 'seminarium_dyplomowe/opis_wynikow',    status: 'live', desc: 'Raportowanie statystyk, tabele, wykresy, dyskusja i ograniczenia.' },
            { label: 'Obrona pracy magisterskiej',       id: 'seminarium_dyplomowe/obrona_pracy',    status: 'live', desc: 'Prezentacja, typowe pytania, strategia odpowiedzi, stres.' },
            { label: 'Dobre praktyki w pisaniu pracy',   id: 'seminarium_dyplomowe/dobre_praktyki',  status: 'live', desc: 'Organizacja czasu, zarzadzanie danymi, relacja z promotorem, dobrostan.' },
          ]
        },
      ]
    },

    dodatkowe_strony: {
      title: 'WIKI - Dodatkowe strony',
      intro: 'Zbior dodatkowych materialow HTML umieszczonych w katalogu /pages. Sekcja ulatwia szybki dostep do stron pomocniczych i raportow.',
      sections: [
        {
          title: 'Strony HTML w katalogu /pages',
          articles: [
            { label: 'Przyjazń', href: 'pages/przyjazn.html', status: 'xlink', desc: 'Dodatkowa strona HTML: przyjazn.html.' },
            { label: 'Raport neuroroznorodnosci', href: 'pages/Raport_neuroroznorodnosci.html', status: 'xlink', desc: 'Dodatkowa strona HTML: Raport_neuroroznorodnosci.html.' },
            { label: 'Diagnoza - prezentacja', href: 'pages/diagnoza_prezentacja.html', status: 'xlink', desc: 'Dodatkowa strona HTML: diagnoza_prezentacja.html.' },
            { label: 'Diagnoza - prezentacja (wersja 2)', href: 'pages/diagnoza_prezentacja_2.html', status: 'xlink', desc: 'Dodatkowa strona HTML: diagnoza_prezentacja_2.html.' },
            { label: 'Eksperyment n-back', href: 'pages/n_back_eksperyment.html', status: 'xlink', desc: 'Interaktywna strona HTML do przeprowadzania eksperymentu zadania n-back.' },
            { label: 'Wstyd i wina', href: 'pages/wstyd_i_wina.html', status: 'xlink', desc: 'Dodatkowa strona HTML: wstyd_i_wina.html.' },
            { label: 'ADHD', href: 'pages/adhd.html', status: 'xlink', desc: 'ADHD', icon: 'mdi-book-open-page-variant' },
            { label: 'Trudne zachowania dziecka', href: 'pages/trudne_zachowania_dziecka.html', status: 'xlink', desc: 'ADHD - rozdział 1', icon: 'mdi-book-open-page-variant' },
            { label: 'Strona P1', href: 'pages/p1.html', status: 'xlink', desc: 'Manipulacja kulturowa' },
            { label: 'Strona P2', href: 'pages/p2.html', status: 'xlink', desc: 'Rozmowa i obserwacja w diagnozie psychologicznej' },
            { label: 'Strona P3', href: 'pages/p3.html', status: 'xlink', desc: 'Czarna obsada w filmie historycznym' },
            { label: 'Strona P4', href: 'pages/p4.html', status: 'xlink', desc: 'Psychiatria obliczeniowa' },
            { label: 'Strona P5', href: 'pages/p5.html', status: 'xlink', desc: 'Humor jako mechanizm obronny' },
            { label: 'Strona P6', href: 'pages/p6.html', status: 'xlink', desc: 'Planowana dodatkowa strona HTML: p6.html' },
            { label: 'Strona P7', href: 'pages/p7.html', status: 'xlink', desc: 'NLP oraz testu Insightful Profiler iP121' },
            { label: 'Strona P8', href: 'pages/p8.html', status: 'xlink', desc: 'Gry psychologiczne' },
            { label: 'Strona P9', href: 'pages/p9.html', status: 'xlink', desc: 'Planowana strona HTML' },
            { label: 'Strona P10', href: 'pages/p10.html', status: 'xlink', desc: 'Planowana strona HTML' },
          ]
        }
      ]
    },

    instrukcje_lab_pdf: {
      title: 'WIKI - Instrukcje laboratoryjne PDF',
      intro: 'Modul zbierajacy instrukcje laboratoryjne w formacie PDF z katalogu /labs. Umozliwia wybor pliku z listy oraz wygodne podgladanie materialu bez opuszczania portalu.',
      sections: [
        {
          type: 'pdfLabBrowser',
          title: 'Wybór instrukcji laboratoryjnej',
          files: [
            { id: 'labs/neuro_lab1', label: 'Neuropsychologia dz lab 1', href: 'labs/neuro_lab1.pdf' },
            { id: 'labs/neuro_lab2', label: 'Neuropsychologia dz lab 2', href: 'labs/neuro_lab2.pdf' },
            { id: 'labs/neuro_lab3', label: 'Neuropsychologia dz lab 3', href: 'labs/neuro_lab3.pdf' },
            { id: 'labs/neuro_lab4', label: 'Neuropsychologia dz lab 4', href: 'labs/neuro_lab4.pdf' },
            { id: 'labs/diagnoza_lab2', label: 'Diagnoza psychologiczna dz lab 2', href: 'labs/diagnoza_lab2.pdf' },
            { id: 'labs/diagnoza_lab3', label: 'Diagnoza psychologiczna dz lab 3', href: 'labs/diagnoza_lab3.pdf' },
            { id: 'labs/diagnoza_lab4', label: 'Diagnoza psychologiczna dz lab 4', href: 'labs/diagnoza_lab4.pdf' },
            { id: 'labs/diagnoza_lab5', label: 'Diagnoza psychologiczna dz lab 5', href: 'labs/diagnoza_lab5.pdf' },
            { id: 'labs/psych_pozn_lab1', label: 'Psychologia poznawcza dz lab 1', href: 'labs/psych_pozn_lab1.pdf' },
            { id: 'labs/psych_pozn_lab2', label: 'Psychologia poznawcza dz lab 2', href: 'labs/psych_pozn_lab2.pdf' },
            { id: 'labs/psych_pozn_lab3', label: 'Psychologia poznawcza dz lab 3', href: 'labs/psych_pozn_lab3.pdf' },
            { id: 'labs/psych_pozn_lab4', label: 'Psychologia poznawcza dz lab 4', href: 'labs/psych_pozn_lab4.pdf' },
            { id: 'labs/psych_pozn_lab5', label: 'Psychologia poznawcza dz lab 5', href: 'labs/psych_pozn_lab5.pdf' },
            { id: 'labs/psych_pozn_lab6', label: 'Psychologia poznawcza dz lab 6', href: 'labs/psych_pozn_lab6.pdf' }
          ]
        }
      ]
    },

    podstawy_pomocy: {
      title: 'WIKI - Podstawy pomocy psychologicznej',
      intro: 'Podstawy pomocy psychologicznej to dziedzina obejmujaca fundamentalne umiejetnosci i wiedze niezbedna kazdemu, kto profesjonalnie lub wolontariacko udziela wsparcia psychologicznego. Od relacji pomocowej i aktywnego sluchania, przez interwencje kryzysowa, po samoopieke pomagajacego i etyke zawodowa.',
      sections: [
        {
          title: 'Istota pomocy psychologicznej',
          articles: [
            { label: 'Pomoc psychologiczna',                id: 'podstawy_pomocy/wprowadzenie',                  status: 'live', desc: 'Rodzaje pomocy psychologicznej, zasady podstawowe i roznice miedzy nimi.' },
            { label: 'Relacja pomocowa',                    id: 'podstawy_pomocy/relacja_pomocowa',              status: 'live', desc: 'Sojusz terapeutyczny, czynniki budujace relacje i zagrozenia dla niej.' },
            { label: 'Modele pomocy psychologicznej',       id: 'podstawy_pomocy/modele_pomocy',                 status: 'live', desc: 'Medyczny, psychodynamiczny, CBT, humanistyczny, systemowy i ekologiczny.' },
          ]
        },
        {
          title: 'Umiejetnosci pomocowe',
          articles: [
            { label: 'Aktywne sluchanie',                   id: 'podstawy_pomocy/aktywne_sluchanie',             status: 'live', desc: 'Parafrazowanie, odzwierciedlanie emocji, klaryfikacja i bariery sluchania.' },
            { label: 'Empatia w pomocy psychologicznej',    id: 'podstawy_pomocy/empatia_w_pomocy',              status: 'live', desc: 'Empatia poznawcza, emocjonalna i wspolczujaca; granica miedzy empatia, a fuzja.' },
            { label: 'Komunikacja wspierajaca',             id: 'podstawy_pomocy/komunikacja_wspierajaca',       status: 'live', desc: 'Walidacja, normalizacja, pytania otwarte i nieskuteczne wzorce komunikacji.' },
          ]
        },
        {
          title: 'Interwencja i wsparcie',
          articles: [
            { label: 'Kryzys psychologiczny i interwencja', id: 'podstawy_pomocy/kryzys_psychologiczny',         status: 'live', desc: 'Fazy kryzysu, rodzaje, zasady ABC interwencji i model FASTER.' },
            { label: 'Pierwsza pomoc psychologiczna',       id: 'podstawy_pomocy/pierwsza_pomoc_psychologiczna', status: 'live', desc: 'Osiem komponentow PFA, co robic i czego unikac, PPP, a debriefing.' },
            { label: 'Wsparcie spoleczne',                  id: 'podstawy_pomocy/wsparcie_spoleczne',            status: 'live', desc: 'Rodzaje wsparcia, modele efektu glownego i buforowego, grupy wsparcia.' },
          ]
        },
        {
          title: 'Profesjonalizm i dobrostan pomagajacego',
          articles: [
            { label: 'Granice w relacji pomocowej',         id: 'podstawy_pomocy/granice_w_pomocy',              status: 'live', desc: 'Granice fizyczne, emocjonalne, roli; naruszenia i asertywne wyznaczanie granic.' },
            { label: 'Samoopieka pomagajacego',             id: 'podstawy_pomocy/samoopieka_pomagajacego',       status: 'live', desc: 'Wypalenie zawodowe, wtorna traumatyzacja i obszary samoopieki.' },
            { label: 'Etyka pomocy psychologicznej',        id: 'podstawy_pomocy/etyka_pomocy',                  status: 'live', desc: 'Cztery zasady bioetyki, tajemnica zawodowa, swiadoma zgoda, dylematy etyczne.' },
          ]
        },
      ]
    },

    slownik: {
      title: 'WIKI - Slownik terminow',
      intro: 'Alfabetyczny slownik kluczowych pojec neuropsychologii i psychologii klinicznej.',
      sections: [
        {
          isGlossary: true,
          entries: [
            { term: 'Afazja',          def: 'Nabyte zaburzenie jezykowe po uszkodzeniu mozgu - moze dotyczyc mowienia, rozumienia, czytania i pisania.', link: 'disorders/afazje' },
            { term: 'Agnozja',         def: 'Niemoznosc rozpoznawania obiektow przy zachowanych zmyslach i inteligencji.', link: 'disorders/agnozja' },
            { term: 'Amnezja',         def: 'Zaburzenie pamieci - anterogradna (nowe wspomnienia) lub retrogradna (dawne wspomnienia).', link: 'disorders/amnezje' },
            { term: 'Apraksja',        def: 'Zaburzenie wykonywania celowych ruchow przy zachowanej sprawnosci motorycznej i rozumieniu polecenia.', link: 'disorders/apraksja' },
            { term: 'ARAS',            def: 'Wstepujacy uklad siatkowaty aktywujacy - reguluje poziom czujnosci i aktywacji kory.' },
            { term: 'Cialo modzelowate', def: 'Najwieksza komisura mozgu laczaca obie polkule - ~200 milionow aksonow mielinowanych.' },
            { term: 'DAI',             def: 'Rozlane uszkodzenie aksonalne - rozerwanie dlugich wlokien wskutek sil przyspieszenia-opol_nienia w TBI.', link: 'disorders/tbi' },
            { term: 'DMN',             def: 'Default Mode Network - siec trybu domyslnego aktywna w spoczynku i autorefleksji; zaburzona w depresji i Alzheimerze.' },
            { term: 'Dopamina',        def: 'Neuroprzekaznik modulacyjny - motywacja, nagroda, kontrola ruchu. Niedobor -> Parkinson; nadmiar -> objawy psychotyczne.', link: 'pharmacology/neurofarmakologia' },
            { term: 'DTI',             def: 'Dyfuzyjna tomografia tensora - technika MRI pozwalajaca wizualizowac szlaki istoty bialej (traktografia).' },
            { term: 'ERP',             def: 'Potencjaly wywolane - usrednione odpowiedzi EEG na powtarzane bodl_ce; N400, P300, MMN.' },
            { term: 'FFA',             def: 'Fusiform Face Area - obszar zakretu wrzecionowatego wyspecjalizowany w rozpoznawaniu twarzy. Uszkodzenie -> prozopagnozja.' },
            { term: 'fMRI',            def: 'Funkcjonalny rezonans magnetyczny - mierzy aktywnosc mozgu przez zmiany przeplywu krwi (sygnal BOLD).' },
            { term: 'GAoA',            def: 'Glowny neuroprzekal_nik inhibicyjny OUN. Cel benzodiazepin i barbituranow.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Glutaminian',     def: 'Glowny neuroprzekal_nik ekscytacyjny. Kluczowy w LTP i ekscytotoksycznosci udarowej.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Hipokamp',        def: 'Struktura ksztaltu konika morskiego - konsolidacja pamieci deklaratywnej i nawigacja przestrzenna.', link: 'neuro/anatomia' },
            { term: 'IRT',             def: 'Item Response Theory - rodzina modeli psychometrycznych opisujacych prawdopodobienstwo odpowiedzi w zaleznosci od trudnosci i zdolnosci.', link: 'psychometrics/irt' },
            { term: 'Lateralizacja',   def: 'Asymetryczna lokalizacja funkcji - jezyk zazwyczaj w lewej polkuli, uwaga przestrzenna w prawej.', link: 'neuro/lateralizacja' },
            { term: 'LTD',             def: 'Long-Term Depression - dlugotrwale oslabienie synapsy przy niskiej aktywnosci. Mechanizm zapominania.' },
            { term: 'LTP',             def: 'Long-Term Potentiation - trwale wzmocnienie synapsy po wysokiej aktywnosci. Podstawa uczenia sie w hipokampie.', link: 'neuro/neuron' },
            { term: 'MoCA',            def: 'Montreal Cognitive Assessment - test przesiewowy zaburzeń poznawczych, bardziej czuly niz MMSE na lagodne deficyty.', link: 'diagnostics/mmse_moca' },
            { term: 'Neglect',         def: 'Zaburzenie uwagi przestrzennej - nieswiadome pomijanie jednej strony przestrzeni po uszkodzeniu prawej polkuli.', link: 'disorders/neglect' },
            { term: 'Neuroplastycznosc', def: 'Zdolnosc mozgu do zmiany struktury i funkcji - od poziomu synaptycznego (LTP/LTD) po reorganizacje kortykalna.', link: 'neuro/plastycznosc' },
            { term: 'NSSI',            def: 'Non-Suicidal Self-Injury - samookaleczenie bez intencji smierci, czesto pelniace funkcje regulacji emocji.', link: 'suicidology/nssi' },
            { term: 'Pola Brodmanna',  def: '52 obszary kory mozgowej wyznaczone przez Brodmanna (1l0l) na podstawie cytoarchitektoniki.', link: 'neuro/anatomia' },
            { term: 'Prozopagnozja',   def: 'Specyficzny deficyt rozpoznawania twarzy - zwiazany z uszkodzeniem FFA w zakrecie wrzecionowatym.', link: 'disorders/agnozja' },
            { term: 'Psychometria',    def: 'Dzial metodologii zajmujacy sie teoria i technika pomiaru psychologicznego - rzetelnosc, trafnosc, normalizacja.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Peczek lukowaty', def: 'Szlak istoty bialej laczacy obszar Wernickego z Broki. Uszkodzenie -> afazja przewodzenia.', link: 'disorders/afazje' },
            { term: 'Rzetelnosc',      def: 'Stopien, w jakim wyniki testu sa stabilne i wolne od bledu pomiarowego (alfa Cronbacha, test-retest).', link: 'psychometrics/rzetelnosc' },
            { term: 'TBI',             def: 'Traumatic Brain Injury - uraz mozgu od lagodnego wstrzasnienia po ciezki uraz z dlugoterminowymi konsekwencjami.', link: 'disorders/tbi' },
            { term: 'Trafnosc',        def: 'Stopien, w jakim test mierzy to, co ma mierzyc˝! - tresciowa, kryterialna, zbiezna, czynnikowa.', link: 'psychometrics/trafnosc' },
            { term: 'Wzgorze',         def: '"Brama swiadomosci" - przekaznik zmyslow do kory, regulacja czujnosci. Uszkodzenie -> amnezja wzgorzowa.', link: 'neuro/anatomia' },
          ]
        }
      ]
    },
  },
};

/* Uzupelnia metadane wyszukiwania (keywords, level, type) dla wszystkich wpisow nawigacji. */
(function enrichNavigationMetadata(config) {
  if (!config || !Array.isArray(config.nav)) return;

  /* Mapuje dzialy na poziom trudnosci domyslnej sciezki nauki. */
  const sectionLevelMap = {
    'Wprowadzenie': 'beginner',
    'Dla studentow': 'beginner',
    'Podstawy pomocy psychologicznej': 'beginner',
    'Filozofia': 'intermediate',
  };

  config.nav.forEach(section => {
    section.items.forEach(item => {
      const inferredType = item.type || (item.kind === 'test' ? 'test' : (item.wiki ? 'wiki' : 'article'));
      const inferredLevel = item.level || sectionLevelMap[section.section] || 'intermediate';
      const baseKeywords = [
        section.section,
        item.label,
        item.id.split('/')[0],
        item.id.split('/')[1],
        inferredType,
      ];

      item.type = inferredType;
      item.level = inferredLevel;
      item.keywords = Array.from(new Set([...(item.keywords || []), ...baseKeywords]
        .filter(Boolean)
        .map(value => String(value).trim())
      ));
    });
  });
})(window.SITE_CONFIG);

/* Uzupelnia metadane recenzji l_rodel dla kazdego narzedzia pomiarowego. */
(function enrichMeasurementToolsReviewMetadata(config) {
  if (!config || typeof config !== 'object') return;
  const byDomain = config.measurementToolsByDomain;
  const domainUpdates = config.measurementToolsDomainUpdates || {};
  if (!byDomain || typeof byDomain !== 'object') return;

  /* Wydobywa najwczesniejszy rok z listy l_rodel narzedzia (np. "Autor (2021)"). */
  const inferPrimarySourceYear = tool => {
    if (Number.isFinite(tool?.primarySourceYear)) return Math.trunc(tool.primarySourceYear);
    if (typeof tool?.primarySourceYear === 'string' && /^\d{4}$/.test(tool.primarySourceYear.trim())) {
      return Number(tool.primarySourceYear.trim());
    }
    const years = (Array.isArray(tool?.sourceRefs) ? tool.sourceRefs : [])
      .map(ref => {
        const match = String(ref).match(/\b(1l|20)\d{2}\b/g);
        if (!match || !match.length) return null;
        return Number(match[match.length - 1]);
      })
      .filter(Number.isFinite);
    if (!years.length) return null;
    return Math.min(...years);
  };

  Object.entries(byDomain).forEach(([domainKey, tools]) => {
    if (!Array.isArray(tools)) return;
    const domainUpdatedAt = domainUpdates?.[domainKey]?.updatedAt;
    tools.forEach(tool => {
      if (!tool || typeof tool !== 'object') return;
      const inferredYear = inferPrimarySourceYear(tool);
      if (!tool.lastReviewed && domainUpdatedAt) {
        tool.lastReviewed = domainUpdatedAt;
      } else if (!tool.lastReviewed) {
        tool.lastReviewed = '2024-01-01';
      }
      if (!tool.primarySourceYear && inferredYear) {
        tool.primarySourceYear = inferredYear;
      } else if (!tool.primarySourceYear) {
        tool.primarySourceYear = 'brak';
      }
    });
  });
})(window.SITE_CONFIG);

/* Uzupelnia brakujace `id` w plans na podstawie sciezki `file` (wiki/<domain>/<slug>.md). */
(function enrichPlansWithIds(config) {
  if (!config || typeof config !== 'object') return;
  if (!config.plans || typeof config.plans !== 'object') return;

  const toIdFromFile = filePath => {
    const normalized = String(filePath || '').trim().replace(/\\/g, '/');
    const match = normalized.match(/^wiki\/(.+)\.md$/);
    return match ? match[1] : null;
  };

  Object.values(config.plans).forEach(planEntries => {
    if (!Array.isArray(planEntries)) return;
    planEntries.forEach(entry => {
      if (!entry || typeof entry !== 'object') return;
      if (entry.id || !entry.file) return;
      const inferredId = toIdFromFile(entry.file);
      if (inferredId) entry.id = inferredId;
    });
  });
})(window.SITE_CONFIG);

/* Dla spojnosci dopisuje brakujace pozycje planu na podstawie wpisow nawigacji. */
(function backfillPlansFromNav(config) {
  if (!config || typeof config !== 'object') return;
  if (!Array.isArray(config.nav)) return;
  if (!config.plans || typeof config.plans !== 'object') return;

  config.nav.forEach(section => {
    if (!section || typeof section !== 'object') return;
    const domainKey = section.domainKey;
    if (!domainKey || !Array.isArray(section.items)) return;

    if (!Array.isArray(config.plans[domainKey])) {
      config.plans[domainKey] = [];
    }

    const planEntries = config.plans[domainKey];
    const existingIds = new Set(
      planEntries
        .map(entry => (entry && typeof entry === 'object' ? entry.id : null))
        .filter(Boolean)
    );

    section.items.forEach(item => {
      if (!item || typeof item !== 'object') return;
      if (!item.id || existingIds.has(item.id)) return;

      const nextEntry = {
        id: item.id,
        label: item.label || item.id,
      };
      if (item.file) nextEntry.file = item.file;
      if (item.file) nextEntry.status = 'live';

      planEntries.push(nextEntry);
      existingIds.add(item.id);
    });
  });
})(window.SITE_CONFIG);





