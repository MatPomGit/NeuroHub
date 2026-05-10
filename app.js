/*
 * app.js â€” gĹ‚Ăłwne ĹşrĂłdĹ‚o logiki SPA w projekcie PsyHub.
 * Plik odpowiada za routing, renderowanie widokĂłw i obsĹ‚ugÄ™ interakcji UI.
 */

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MINI MARKDOWN PARSER
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function md2html(src, currentFilePath = '') {
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  /* Escapuje wartoĹ›ci atrybutĂłw HTML, aby bezpiecznie wstawiaÄ‡ href. */
  const escAttr = s => String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  const footnoteDefs = new Map();
  const footnoteOrder = [];
  const footnoteIndex = new Map();

  /* WyodrÄ™bnia definicje przypisĂłw z koĹ„ca/Ĺ›rodka dokumentu i usuwa je z treĹ›ci gĹ‚Ăłwnej. */
  src = src.replace(/^\[\^([^\]\s]+)\]:\s*(.+)$/gm, (_, id, content) => {
    footnoteDefs.set(id, content.trim());
    return '';
  });

  /* Rejestruje pierwsze uĹĽycie identyfikatora przypisu i zwraca jego numer porzÄ…dkowy. */
  const getFootnoteNumber = id => {
    if (!footnoteIndex.has(id)) {
      footnoteOrder.push(id);
      footnoteIndex.set(id, footnoteOrder.length);
    }
    return footnoteIndex.get(id);
  };

  /* Renderuje inline markdown; opcjonalnie zamienia odwoĹ‚ania [^id] na superskrypty z kotwicami. */
  const inl = (s, opts = { parseFootnotes: true }) => {
    s = esc(s);
    s = s
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,'<em>$1</em>')
      .replace(/`(.+?)`/g,'<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
        const resolvedHref = resolveArticleLinkHref(href, currentFilePath);
        return `<a href="${escAttr(resolvedHref)}">${label}</a>`;
      });
    if (opts.parseFootnotes !== false) {
      s = s.replace(/\[\^([^\]\s]+)\]/g, (_, id) => {
        const no = getFootnoteNumber(id);
        return `<sup class="fn-ref" id="fnref-${id}"><a href="#fn-${id}" aria-label="Przypis ${no}">${no}</a></sup>`;
      });
    }
    return s;
  };

  // tables
  src = src.replace(/((?:\|.+\|\n){2,})/g, blk => {
    const rows = blk.trim().split('\n').filter(r => !/^[\s|:-]+$/.test(r));
    if (rows.length < 2) return blk;
    const hd = rows[0].split('|').slice(1,-1).map(c=>`<th>${inl(c.trim())}</th>`).join('');
    const bd = rows.slice(1).map(r=>'<tr>'+r.split('|').slice(1,-1).map(c=>`<td>${inl(c.trim())}</td>`).join('')+'</tr>').join('');
    return `<div style="overflow-x:auto;margin:1.4rem 0"><table><thead><tr>${hd}</tr></thead><tbody>${bd}</tbody></table></div>`;
  });
  src = src.replace(/^---+$/gm,'<hr>');
  src = src.replace(/^#{4}\s+(.+)$/gm,(_,t)=>`<h4>${inl(t)}</h4>`);
  src = src.replace(/^#{3}\s+(.+)$/gm,(_,t)=>`<h3>${inl(t)}</h3>`);
  src = src.replace(/^#{2}\s+(.+)$/gm,(_,t)=>`<h2>${inl(t)}</h2>`);
  src = src.replace(/^#{1}\s+(.+)$/gm,(_,t)=>`<h1>${inl(t)}</h1>`);
  src = src.replace(/((?:^>.*\n?)+)/gm, blk => {
    return `<blockquote><p>${inl(blk.replace(/^>\s?/gm,'').trim())}</p></blockquote>\n`;
  });
  /* Renderuje listy wielopoziomowe (UL/OL) na podstawie wciÄ™Ä‡ i typu markerĂłw. */
  const renderNestedListBlock = (block) => {
    const lines = block
      .split('\n')
      .map(line => line.replace(/\t/g, '  '))
      .filter(line => line.trim().length > 0);
    if (!lines.length) return block;

    const stack = [];
    let html = '';
    const getTag = type => (type === 'ol' ? 'ol' : 'ul');
    const closeCurrentItem = () => {
      const top = stack[stack.length - 1];
      if (top && top.itemOpen) {
        html += '</li>';
        top.itemOpen = false;
      }
    };
    const closeCurrentList = () => {
      const top = stack[stack.length - 1];
      if (!top) return;
      closeCurrentItem();
      html += `</${getTag(top.type)}>`;
      stack.pop();
    };
    const openList = (type, indent) => {
      html += `<${getTag(type)}>`;
      stack.push({ type, indent, itemOpen: false });
    };

    for (const line of lines) {
      const match = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)$/);
      if (!match) continue;
      const indent = match[1].length;
      const marker = match[2];
      const content = match[3];
      const type = /\d+\./.test(marker) ? 'ol' : 'ul';

      while (stack.length && indent < stack[stack.length - 1].indent) closeCurrentList();
      while (
        stack.length &&
        indent === stack[stack.length - 1].indent &&
        stack[stack.length - 1].type !== type
      ) {
        closeCurrentList();
      }

      if (!stack.length) {
        openList(type, indent);
      } else if (indent > stack[stack.length - 1].indent) {
        openList(type, indent);
      }

      closeCurrentItem();
      html += `<li>${inl(content)}`;
      stack[stack.length - 1].itemOpen = true;
    }

    while (stack.length) closeCurrentList();
    return html + '\n';
  };

  /* Przetwarza kolejne bloki list i zachowuje pozostaĹ‚e linie bez zmian. */
  const renderNestedLists = (markdown) => {
    const lines = markdown.split('\n');
    const out = [];
    const isListLine = line => /^(\s*)([-*+]|\d+\.)\s+.+$/.test(line);
    let i = 0;
    while (i < lines.length) {
      if (!isListLine(lines[i])) {
        out.push(lines[i]);
        i += 1;
        continue;
      }
      const block = [lines[i]];
      i += 1;
      while (i < lines.length && (isListLine(lines[i]) || lines[i].trim() === '')) {
        block.push(lines[i]);
        i += 1;
      }
      out.push(renderNestedListBlock(block.join('\n')).trimEnd());
    }
    return out.join('\n');
  };
  src = renderNestedLists(src);
  /* Normalizuje granice blokĂłw HTML, ĹĽeby parser akapitĂłw nie wyĹ›wietlaĹ‚ tagĂłw jako tekstu. */
  src = src
    .replace(/([^\n])\n(<(?:h[1-4]|blockquote|ul|ol|pre|div|hr)\b[^>]*>)/g, '$1\n\n$2')
    .replace(/(<\/(?:h[1-4]|blockquote|ul|ol|pre|div)>|<hr>)\n?(?=\S)/g, '$1\n\n');
  src = src.split('\n\n').map(blk => {
    blk = blk.trim();
    if (!blk) return '';
    if (/^<[a-z]/.test(blk)) return blk;
    return `<p>${inl(blk.replace(/\n/g,' '))}</p>`;
  }).join('\n');

  /* Dodaje koĹ„cowÄ… sekcjÄ™ przypisĂłw w kolejnoĹ›ci pierwszego cytowania wraz z linkiem powrotnym. */
  if (footnoteOrder.length) {
    const footnotesHtml = footnoteOrder.map(id => {
      const no = footnoteIndex.get(id);
      const rawContent = footnoteDefs.get(id) || 'Brak opisu ĹşrĂłdĹ‚a.';
      const renderedContent = inl(rawContent, { parseFootnotes: false });
      return `<li id="fn-${id}">${renderedContent} <a class="fn-back" href="#fnref-${id}" aria-label="PowrĂłt do cytowania ${no}">â†©</a></li>`;
    }).join('');
    src += `\n<section class="footnotes"><h2>Przypisy</h2><ol>${footnotesHtml}</ol></section>`;
  }

  return src;
}

/* Buduje mapÄ™ Ĺ›cieĹĽka-pliku -> id strony dla artykuĹ‚Ăłw znajdujÄ…cych siÄ™ w nawigacji. */
function buildArticleFileToIdMap() {
  if (articleFileToIdMapCache) return articleFileToIdMapCache;
  const map = new Map();
  pageMap.forEach((entry, id) => {
    if (!entry?.file) return;
    map.set(normalizePathForArticleLookup(entry.file), id);
  });
  articleFileToIdMapCache = map;
  return articleFileToIdMapCache;
}

/* Normalizuje Ĺ›cieĹĽki do wspĂłlnego formatu porĂłwnawczego (slash, brak prefiksu "./"). */
function normalizePathForArticleLookup(rawPath) {
  return String(rawPath || '')
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/\/{2,}/g, '/');
}

/* Upraszcza segmenty "." oraz ".." w Ĺ›cieĹĽce wzglÄ™dnej bez dostÄ™pu do API Node. */
function normalizeRelativePath(baseDir, rawTarget) {
  const baseSegments = normalizePathForArticleLookup(baseDir).split('/').filter(Boolean);
  const targetSegments = normalizePathForArticleLookup(rawTarget).split('/').filter(Boolean);
  const output = [...baseSegments];
  targetSegments.forEach(segment => {
    if (segment === '.') return;
    if (segment === '..') {
      output.pop();
      return;
    }
    output.push(segment);
  });
  return output.join('/');
}

/* TĹ‚umaczy odnoĹ›niki markdown do formy hash-route, jeĹ›li wskazujÄ… istniejÄ…ce artykuĹ‚y PsyHub. */
function resolveArticleLinkHref(rawHref, currentFilePath) {
  const href = String(rawHref || '').trim();
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(href)) return href;

  const [pathPart, fragmentPart] = href.split('#');
  const pageIdFromHash = pathPart ? '' : (fragmentPart || '').split('::')[0];
  if (!pathPart && pageIdFromHash && pageMap.has(pageIdFromHash)) {
    return `#${fragmentPart || ''}`;
  }

  const fileToId = buildArticleFileToIdMap();
  const rawPathPart = String(pathPart || '');
  const normalizedPathPart = normalizePathForArticleLookup(rawPathPart);

  const directById = normalizedPathPart.replace(/^#/, '');
  if (directById && pageMap.has(directById)) {
    return `#${directById}${fragmentPart ? `::${fragmentPart}` : ''}`;
  }

  let resolvedFilePath = normalizedPathPart;
  if (rawPathPart.startsWith('./') || rawPathPart.startsWith('../')) {
    const baseDir = normalizePathForArticleLookup(currentFilePath).split('/').slice(0, -1).join('/');
    resolvedFilePath = normalizeRelativePath(baseDir, rawPathPart);
  }

  const normalizedFile = normalizePathForArticleLookup(resolvedFilePath);
  if (normalizedFile.endsWith('.md') && fileToId.has(normalizedFile)) {
    const pageId = fileToId.get(normalizedFile);
    return `#${pageId}${fragmentPart ? `::${fragmentPart}` : ''}`;
  }

  return href;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PAGE MAP & ROUTING
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
var pageMap = new Map();
var articleFileToIdMapCache = null;
var mdCache = new Map();

/* Pobiera treĹ›Ä‡ artykuĹ‚u, stosujÄ…c kilka wariantĂłw Ĺ›cieĹĽki dla zgodnoĹ›ci z rĂłĹĽnymi Ĺ›rodowiskami hostingu. */
async function fetchArticleMarkdown(filePath) {
  const normalized = String(filePath || '').trim();
  const candidates = [
    normalized,
    normalized.startsWith('./') ? normalized : `./${normalized}`,
    encodeURI(normalized),
    normalized.startsWith('./') ? encodeURI(normalized) : `./${encodeURI(normalized)}`,
  ].filter(Boolean);

  let lastError = null;
  for (const candidate of [...new Set(candidates)]) {
    try {
      const response = await fetch(candidate, { cache: 'no-cache' });
      if (response.ok) {
        return { text: await response.text(), resolvedPath: candidate };
      }
      lastError = new Error(`HTTP ${response.status} for ${candidate}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`Nie udaĹ‚o siÄ™ pobraÄ‡ pliku: ${normalized}`);
}

var emptyArticles = new Set();   /* IDs of articles whose files sÄ… puste lub niedostÄ™pne. */
var testAnswers = [];
var testCurrentIndex = 0;
var testAttemptState = { started: false, completed: false };
var theoreticalTestState = null;
var current = null;
var articleTocObserver = null;
var articleTocHeadings = [];
var articleTocCurrentPageId = null;
const MOBILE_BREAKPOINT = 900; /* matches CSS @media(max-width:900px) */
const SPECIALIZATION_TEST_COUNTER_KEY = 'psyhub-specialization-test-counter';
const RECENT_PAGES_KEY = 'psyhub-recent-pages';
const RECENT_PAGES_LIMIT = 5;

/* Zwraca klucz daty (YYYY-MM-DD) w lokalnej strefie uĹĽytkownika do licznika dziennego. */
function getTodayDateKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/* Odczytuje licznik z localStorage i zwraca bezpieczny obiekt z wartoĹ›ciami domyĹ›lnymi. */
function readSpecializationTestCounter() {
  try {
    const raw = localStorage.getItem(SPECIALIZATION_TEST_COUNTER_KEY);
    if (!raw) return { totalCompleted: 0, byDate: {} };
    const parsed = JSON.parse(raw);
    const totalCompleted = Number.isFinite(parsed?.totalCompleted) ? parsed.totalCompleted : 0;
    const byDate = (parsed && typeof parsed.byDate === 'object' && parsed.byDate) ? parsed.byDate : {};
    return { totalCompleted, byDate };
  } catch (_) {
    return { totalCompleted: 0, byDate: {} };
  }
}

/* Zapisuje zaktualizowany licznik wszystkich i dziennych ukoĹ„czeĹ„ testu specjalizacji. */
function writeSpecializationTestCounter(counter) {
  localStorage.setItem(SPECIALIZATION_TEST_COUNTER_KEY, JSON.stringify(counter));
}

/* Rejestruje zakoĹ„czone podejĹ›cie dokĹ‚adnie raz na jedno przejĹ›cie testu. */
function registerCompletedSpecializationAttempt() {
  if (testAttemptState.completed) return;
  const counter = readSpecializationTestCounter();
  const todayKey = getTodayDateKey();
  counter.totalCompleted += 1;
  counter.byDate[todayKey] = (counter.byDate[todayKey] || 0) + 1;
  writeSpecializationTestCounter(counter);
  testAttemptState.completed = true;
}

/* Odczytuje listÄ™ ostatnio odwiedzonych stron i filtruje niepoprawne wpisy. */
function readRecentPages() {
  try {
    const raw = localStorage.getItem(RECENT_PAGES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(id => typeof id === 'string' && pageMap.has(id))
      .slice(0, RECENT_PAGES_LIMIT);
  } catch (_) {
    return [];
  }
}

/* Zapisuje listÄ™ ostatnio odwiedzonych stron w localStorage. */
function writeRecentPages(ids) {
  localStorage.setItem(RECENT_PAGES_KEY, JSON.stringify(ids.slice(0, RECENT_PAGES_LIMIT)));
}

/* Dodaje stronÄ™ do historii ostatnich wizyt, przenoszÄ…c jÄ… na poczÄ…tek listy. */
function addRecentPage(id) {
  if (!id || !pageMap.has(id)) return;
  const deduped = [id, ...readRecentPages().filter(existingId => existingId !== id)];
  writeRecentPages(deduped);
}

/* Zwraca kolejnÄ… stronÄ™ w tym samym dziale jako proponowany â€žnastÄ™pny krokâ€ť. */
function getNextStepItem(id) {
  const activeId = id || SITE_CONFIG.defaultPage;
  const activeItem = pageMap.get(activeId);
  if (!activeItem) return null;
  const section = SITE_CONFIG.nav.find(sec => sec.section === activeItem.section);
  if (!section) return null;
  const idx = section.items.findIndex(item => item.id === activeId);
  if (idx < 0) return section.items[0] || null;
  return section.items[idx + 1] || null;
}

/* Aktualizuje skrĂłt â€žnastÄ™pny krokâ€ť w topbarze zaleĹĽnie od bieĹĽÄ…cej strony. */
function updateTopbarNextStep(id) {
  const host = document.getElementById('topbarNextStep');
  if (!host) return;
  const nextItem = getNextStepItem(id);
  if (!nextItem) {
    host.innerHTML = `<button type="button" class="next-step-btn" onclick="navigate('dla_studentow/testy_teoretyczne')">
      <span class="next-step-label">NastÄ™pny krok</span>
      <span class="next-step-title">SprawdĹş siÄ™ testem</span>
    </button>`;
    return;
  }
  host.innerHTML = `<button type="button" class="next-step-btn" onclick="navigate('${q(nextItem.id)}')">
    <span class="next-step-label">NastÄ™pny krok</span>
    <span class="next-step-title">${q(nextItem.label)}</span>
  </button>`;
}

function buildPageMap() {
  articleFileToIdMapCache = null;
  for (const sec of SITE_CONFIG.nav)
    for (const item of sec.items)
      pageMap.set(item.id, {
        ...item,
        section: sec.section,
        /* Jawny domainKey z konfiguracji ma pierwszeĹ„stwo; fallback utrzymuje kompatybilnoĹ›Ä‡ starszych wpisĂłw. */
        domainKey: item.domainKey || sec.domainKey || inferDomainKeyFromId(item.id),
      });
}

/* Wyznacza klucz dziedziny z identyfikatora strony jako mechanizm zgodnoĹ›ci wstecznej. */
function inferDomainKeyFromId(id) {
  return typeof id === 'string' ? (id.split('/')[0] || '') : '';
}

/* Zwraca klucz dziedziny wpisu z preferencjÄ… dla jawnego domainKey. */
function getDomainKeyForItem(id, item) {
  return item?.domainKey || pageMap.get(id)?.domainKey || inferDomainKeyFromId(id);
}

/* Parsuje prosty frontmatter YAML (key: value) i zwraca metadane oraz treĹ›Ä‡ bez nagĹ‚Ăłwka. */
function parseArticleFrontmatter(rawText) {
  if (typeof rawText !== 'string' || !rawText.startsWith('---\n')) {
    return { metadata: {}, body: rawText };
  }

  const closingMarkerIndex = rawText.indexOf('\n---\n', 4);
  if (closingMarkerIndex < 0) {
    return { metadata: {}, body: rawText };
  }

  const header = rawText.slice(4, closingMarkerIndex);
  const body = rawText.slice(closingMarkerIndex + 5);
  const metadata = {};

  header.split('\n').forEach(line => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex < 0) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (!key) return;
    metadata[key] = value;
  });

  return { metadata, body };
}

/* Formatuje datÄ™ do postaci MM.RRRR; dla bĹ‚Ä™dnych wartoĹ›ci zwraca null. */
function formatMonthYear(value) {
  if (!value) return null;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  const month = String(parsed.getUTCMonth() + 1).padStart(2, '0');
  const year = parsed.getUTCFullYear();
  return `${month}.${year}`;
}

/* WyciÄ…ga rok z peĹ‚nej daty ISO albo liczby zapisanej jako tekst. */
function extractYear(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return String(Math.trunc(value));
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^\d{4}$/.test(trimmed)) return trimmed;
  const parsed = new Date(`${trimmed}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  return String(parsed.getUTCFullYear());
}

/* Oblicza liczbÄ™ peĹ‚nych miesiÄ™cy miÄ™dzy datÄ… referencyjnÄ… a podanÄ… datÄ…. */
function monthsSince(value, referenceDate = new Date()) {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  const yearsDiff = referenceDate.getUTCFullYear() - parsed.getUTCFullYear();
  const monthsDiff = referenceDate.getUTCMonth() - parsed.getUTCMonth();
  return (yearsDiff * 12) + monthsDiff;
}

/* Buduje badge metadanych artykuĹ‚u oraz neutralny komunikat o potrzebie przeglÄ…du. */
function renderArticleReviewMetaBadges(metadata) {
  const lastReviewed = formatMonthYear(metadata?.lastReviewed);
  const cutoffYear = extractYear(metadata?.evidenceCutoffDate);
  const reviewCycleMonths = Number(metadata?.reviewCycleMonths) || 24;
  const ageInMonths = monthsSince(metadata?.lastReviewed);
  const isStale = ageInMonths !== null && ageInMonths > reviewCycleMonths;

  if (!lastReviewed && !cutoffYear && !isStale) return '';

  const badges = [];
  if (lastReviewed) badges.push(`<span class="review-meta-badge">Zweryfikowano: ${q(lastReviewed)}</span>`);
  if (cutoffYear) badges.push(`<span class="review-meta-badge">PrzeglÄ…d ĹşrĂłdeĹ‚ do: ${q(cutoffYear)}</span>`);
  if (isStale) badges.push('<span class="review-meta-badge is-stale">Wymaga przeglÄ…du literatury</span>');

  return `<div class="review-meta-badges">${badges.join('')}</div>`;
}

/* Buduje badge metadanych karty narzÄ™dzia pomiarowego wraz z flagÄ… przeterminowania. */
function renderToolReviewMetaBadges(tool) {
  const lastReviewed = formatMonthYear(tool?.lastReviewed);
  const sourceYear = extractYear(tool?.primarySourceYear);
  const ageInMonths = monthsSince(tool?.lastReviewed);
  const isStale = ageInMonths !== null && ageInMonths > 24;

  if (!lastReviewed && !sourceYear && !isStale) return '';

  const badges = [];
  if (lastReviewed) badges.push(`<span class="review-meta-badge">Zweryfikowano: ${q(lastReviewed)}</span>`);
  if (sourceYear) badges.push(`<span class="review-meta-badge">PrzeglÄ…d ĹşrĂłdeĹ‚ do: ${q(sourceYear)}</span>`);
  if (isStale) badges.push('<span class="review-meta-badge is-stale">Wymaga przeglÄ…du literatury</span>');

  return `<div class="review-meta-badges">${badges.join('')}</div>`;
}

/* Weryfikuje konfiguracjÄ™ nav i ostrzega o sekcjach bez jawnego domainKey. */
function warnAboutMissingDomainKeys() {
  if (!Array.isArray(SITE_CONFIG?.nav)) return;
  SITE_CONFIG.nav.forEach(section => {
    if (!section?.domainKey) {
      console.warn(`[PsyHub] Sekcja "${section?.section || 'bez nazwy'}" nie ma przypisanego domainKey.`);
    }
  });
}

/* Waliduje konfiguracjÄ™ narzÄ™dzi pomiarowych i raportuje problemy z poziomem error/warn. */
function runMeasurementToolsConfigValidation(options = {}) {
  const validator = window.MeasurementToolsConfigValidator?.validateMeasurementToolsConfig;
  if (typeof validator !== 'function') {
    console.warn('[PsyHub][measurement-tools][warn] validator/unavailable | Nie znaleziono moduĹ‚u walidatora.');
    return { allIssues: [], errors: [], warnings: [], isValid: true };
  }

  const report = validator(SITE_CONFIG, options);
  report.allIssues.forEach(issue => {
    const logMessage = `[PsyHub][measurement-tools][${issue.level}] ${issue.path} | ${issue.field} | ${issue.message}`;
    if (issue.level === 'error') {
      console.error(logMessage);
    } else {
      console.warn(logMessage);
    }
  });

  if (report.errors.length === 0 && report.warnings.length === 0) {
    console.info('[PsyHub][measurement-tools][ok] Walidacja konfiguracji zakoĹ„czona bez uwag.');
  }

  return report;
}

/* â”€â”€ Empty article indicator refresh â”€â”€â”€â”€â”€â”€â”€â”€ */
const EMPTY_BANNER_HTML = `<div class="empty-banner"><span class="empty-banner-icon">âš </span><div class="empty-banner-text">ArtykuĹ‚ jeszcze nie zawiera treĹ›ci â€” zostanie uzupeĹ‚niony wkrĂłtce.</div></div>`;

function isBodyEmpty(text) {
  const h1m = text.match(/^#\s+(.+)$/m);
  const body = h1m ? text.slice(text.indexOf(h1m[0]) + h1m[0].length) : text;
  return !body.trim();
}

function updateEmptyIndicators() {
  emptyArticles.forEach(id => {
    document.querySelectorAll(`.art-card[data-artid="${id}"]`).forEach(el => {
      if (el.classList.contains('is-empty')) return;
      el.classList.remove('live','xlink','wiki','planned');
      el.classList.add('is-empty');
      const dot = el.querySelector('.art-dot');
      if (dot) dot.className = 'art-dot is-empty';
      const badge = el.querySelector('.art-badge');
      if (badge) { badge.className = 'art-badge is-empty'; badge.textContent = 'pusty'; }
    });
    document.querySelectorAll(`.plan-item[data-artid="${id}"]`).forEach(el => {
      if (el.classList.contains('is-empty')) return;
      el.classList.remove('live','planned');
      el.classList.add('is-empty');
      const dot = el.querySelector('.plan-dot');
      if (dot) dot.className = 'plan-dot is-empty';
      const badge = el.querySelector('.plan-badge');
      if (badge) { badge.className = 'plan-badge is-empty'; badge.textContent = 'pusty'; }
    });
  });
}


/* Mapa topikĂłw porzÄ…dkujÄ…ca sekcje w bardziej czytelnÄ…, hierarchicznÄ… nawigacjÄ™ bocznÄ…. */
const SIDEBAR_TOPIC_GROUPS = [
  {
    id: 'fundamenty',
    label: 'Fundamenty psychologii',
    colorClass: 'topic-fundamenty',
    sections: ['Wprowadzenie', 'Filozofia', 'Dla studentĂłw', 'Seminarium dyplomowe', 'Eksperyment psychologiczny']
  },
  {
    id: 'procesy',
    label: 'Procesy psychiczne i rĂłĹĽnice indywidualne',
    colorClass: 'topic-procesy',
    sections: ['Funkcje poznawcze', 'Emocje i motywacje', 'Temperament', 'RĂłĹĽnice indywidualne', 'Psychologia pozytywna']
  },
  {
    id: 'rozwoj-spoleczenstwo',
    label: 'RozwĂłj, relacje i spoĹ‚eczeĹ„stwo',
    colorClass: 'topic-rozwoj',
    sections: ['Psychologia Rozwojowa', 'Psychologia SpoĹ‚eczna', 'Psychologia Kulturowa', 'Relacje i zwiÄ…zki', 'Psychologia szkolna i edukacyjna', 'Psychologia osĂłb z niepeĹ‚nosprawnoĹ›ciÄ…', 'Psychologia osĂłb w podeszĹ‚ym wieku']
  },
  {
    id: 'klinika',
    label: 'Klinika, zdrowie i pomoc',
    colorClass: 'topic-klinika',
    sections: ['Psychopatologia', 'Zaburzenia kliniczne', 'Przypadki kliniczne', 'Diagnoza psychologiczna (proces)', 'Diagnoza psychologiczna', 'Psychometria', 'Psychoterapia', 'Psychologia zdrowia', 'Psychosomatyka', 'Podstawy pomocy psychologicznej', 'Suicydologia', 'WstÄ™p do psychologii klinicznej dziecka']
  },
  {
    id: 'neuro',
    label: 'Neuro i biologiczne podstawy',
    colorClass: 'topic-neuro',
    sections: ['Biologiczne podstawy zachowania', 'Neurobiologia', 'Farmakologia', 'NeurorĂłĹĽnorodnoĹ›Ä‡']
  },
  {
    id: 'specjalizacje',
    label: 'Specjalizacje i konteksty stosowane',
    colorClass: 'topic-specjalizacje',
    sections: ['Psychologia UzaleĹĽnieĹ„', 'Etyka zawodowa', 'Psychologia sÄ…dowa i opiniowanie', 'Seksuologia', 'Resocjalizacja', 'Instytucje pomocy dziecku i rodzinie', 'Reagowanie na krytykÄ™', 'Psychologia nadmiernego jedzenia']
  },
  {
    id: 'technologia',
    label: 'Technologia, media i nowe obszary',
    colorClass: 'topic-technologia',
    sections: ['Psychologia gier wideo', 'Psychologia Sztucznej Inteligencji', 'Psychologia technologii i dobrostan cyfrowy', 'Robotyka afektywna i kognitywistyka', 'E-terapia', 'Ekrany, ksiÄ…ĹĽki,, a natura', 'Porozumiewanie siÄ™ bez przemocy (NVC)', 'Arteterapia', 'Animaloterapia']
  },
  {
    id: 'zasoby',
    label: 'Zasoby i sĹ‚owniki',
    colorClass: 'topic-zasoby',
    sections: ['Encyklopedie', 'Referencje']
  }
];

/* Grupuje sekcje konfiguracji nawigacji do topikĂłw; sekcje nieprzypisane trafiajÄ… do grupy â€žPozostaĹ‚eâ€ť. */
function buildSidebarTopicGroups() {
  const sectionMap = new Map(SITE_CONFIG.nav.map(section => [section.section, section]));
  const consumed = new Set();
  const groups = [];

  SIDEBAR_TOPIC_GROUPS.forEach(topic => {
    const topicSections = topic.sections
      .map(sectionName => sectionMap.get(sectionName))
      .filter(Boolean);

    topicSections.forEach(section => consumed.add(section.section));
    if (topicSections.length > 0) {
      groups.push({ ...topic, sections: topicSections });
    }
  });

  const leftoverSections = SITE_CONFIG.nav.filter(section => !consumed.has(section.section));
  if (leftoverSections.length > 0) {
    groups.push({
      id: 'pozostale',
      label: 'PozostaĹ‚e',
      colorClass: 'topic-pozostale',
      sections: leftoverSections
    });
  }

  return groups;
}

/* â”€â”€ Sidebar rendering â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  const active = current || SITE_CONFIG.defaultPage;
  const activeItem = pageMap.get(active);
  const activeSec  = activeItem ? activeItem.section : null;
  let html = '';
  /* Buduje dwupoziomowÄ… strukturÄ™: topik (kolor) â†’ sekcja (zwijana lista artykuĹ‚Ăłw). */
  const topicGroups = buildSidebarTopicGroups();
  topicGroups.forEach((topic, topicIndex) => {
    html += `<section class="sidebar-topic ${topic.colorClass}" data-topic="${q(topic.id)}">`;
    html += `<header class="sidebar-topic-header"><span class="sidebar-topic-label">${q(topic.label)}</span></header>`;

    topic.sections.forEach((sec, secIndex) => {
      const open = sec.section === activeSec;
      const panelId = `nav-group-panel-${topicIndex}-${secIndex}`;
      const triggerId = `nav-group-trigger-${topicIndex}-${secIndex}`;
      html += `<div class="nav-group${open?' open':''}" data-sec="${q(sec.section)}">`;
      html += `<button type="button" id="${triggerId}" class="nav-group-hdr" data-action="toggle-group" aria-expanded="${open ? 'true' : 'false'}" aria-controls="${panelId}">`;
      html += `<span class="ng-label">${sec.section}</span>`;
      html += `<svg class="ng-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
      html += `</button><div class="nav-items" id="${panelId}" role="group" aria-labelledby="${triggerId}">`;
      for (const item of sec.items) {
        if (item.href) {
          html += `<a class="nav-item nav-item-external" href="${q(item.href)}" target="_blank" rel="noopener noreferrer">${item.label} â†—</a>`;
        } else {
          const cls = ['nav-item', item.wiki?'is-wiki':'', item.kind === 'test' ? 'nav-item-test' : '', item.id===active?'is-active':''].filter(Boolean).join(' ');
          html += `<button type="button" class="${cls} nav-item-btn" data-action="navigate" data-id="${item.id}">${item.label}</button>`;
        }
      }
      html += `</div></div>`;
    });

    html += `</section>`;
  });
  nav.innerHTML = html;
}
/* Bezpiecznie escapuje tekst do atrybutĂłw HTML; akceptuje takĹĽe wartoĹ›ci niebÄ™dÄ…ce stringiem. */
function q(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/"/g,'&quot;');
}

function toggleGroup(group) {
  /* PrzeĹ‚Ä…cza jednÄ… grupÄ™ i synchronizuje stan aria-expanded wszystkich nagĹ‚ĂłwkĂłw. */
  if (!group) return;
  const isOpen = group.classList.contains('open');
  document.querySelectorAll('.nav-group').forEach(g => {
    g.classList.remove('open');
    const btn = g.querySelector('.nav-group-hdr');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    group.classList.add('open');
    const btn = group.querySelector('.nav-group-hdr');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

function setActive(id) {
  document.querySelectorAll('.nav-item').forEach(el =>
    el.classList.toggle('is-active', el.dataset.id === id)
  );
  const el = document.querySelector(`.nav-item[data-id="${id}"]`);
  if (el) {
    const group = el.closest('.nav-group');
    document.querySelectorAll('.nav-group').forEach(g => {
      g.classList.remove('open');
      const btn = g.querySelector('.nav-group-hdr');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
    group?.classList.add('open');
    const btn = group?.querySelector('.nav-group-hdr');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    el.scrollIntoView({ block:'nearest', behavior:'smooth' });
  }
}

/* ObsĹ‚uguje klikniÄ™cia i skrĂłty klawiaturowe dla elementĂłw sidebaru przez delegacjÄ™ zdarzeĹ„. */
function setupSidebarInteractions() {
  const nav = document.getElementById('sidebarNav');
  if (!nav) return;

  nav.addEventListener('click', (event) => {
    const control = event.target.closest('[data-action]');
    if (!control || !nav.contains(control)) return;

    if (control.dataset.action === 'toggle-group') {
      const group = control.closest('.nav-group');
      toggleGroup(group);
      return;
    }

    if (control.dataset.action === 'navigate') {
      navigate(control.dataset.id);
    }
  });

  nav.addEventListener('keydown', (event) => {
    const control = event.target.closest('[data-action], .nav-item-external');
    if (!control || !nav.contains(control)) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    if (control.dataset.action === 'toggle-group') {
      toggleGroup(control.closest('.nav-group'));
      return;
    }
    if (control.dataset.action === 'navigate') {
      navigate(control.dataset.id);
      return;
    }
    if (control.matches('.nav-item-external')) {
      control.click();
    }
  });
}

/* â”€â”€ Navigate â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function navigate(id, replaceHistory) {
  const normalizedId = normalizePageId(id);
  if (!normalizedId) return;
  const item = pageMap.get(normalizedId);
  if (!item) return;
  /* Dla kaĹĽdej zmiany podstrony wymuszamy start od gĂłry, aby UX byĹ‚o przewidywalne. */
  window.scrollTo(0, 0);
  cleanupArticleTocObserver();
  current = normalizedId;
  addRecentPage(normalizedId);
  if (replaceHistory) history.replaceState({id: normalizedId},'',buildRouteHash(normalizedId, ''));
  else                history.pushState({id: normalizedId},'',buildRouteHash(normalizedId, ''));
  setActive(normalizedId);
  updateTopbarNextStep(normalizedId);
  closeSidebar();
  if (item.file)       loadMd(normalizedId, item);
  else if (item.custom === 'specialization_test') renderSpecializationTest(normalizedId, item);
  else if (item.custom === 'daily_psychology')    renderDailyPsychology(normalizedId, item);
  else if (item.custom === 'theoretical_test')    renderTheoreticalTest(normalizedId, item);
  else if (item.wiki)  renderWiki(normalizedId, item.wiki);
  else                 renderHome();
}

/* â”€â”€ Load markdown â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
async function loadMd(id, item) {
  const area = document.getElementById('content');
  area.innerHTML = '<div class="loading"><div class="spinner"></div>Ĺadowanieâ€¦</div>';
  setBreadcrumb(item);
  if (mdCache.has(item.file)) {
    try {
      renderMd(mdCache.get(item.file), id, item);
      prefetch(id);
    } catch (e) {
      console.error('[PsyHub] BĹ‚Ä…d renderowania artykuĹ‚u z cache:', item.file, e);
      area.innerHTML = '<div class="error-box"><h2>BĹ‚Ä…d renderowania treĹ›ci</h2><p>ArtykuĹ‚ istnieje, ale wystÄ…piĹ‚ bĹ‚Ä…d podczas wyĹ›wietlania. SprawdĹş konsolÄ™ deweloperskÄ….</p></div>';
    }
    return;
  }

  let markdownText = null;
  try {
    /* Pobieramy markdown przez helper z fallbackami Ĺ›cieĹĽek, aby zwiÄ™kszyÄ‡ niezawodnoĹ›Ä‡ na hostingu statycznym. */
    const fetched = await fetchArticleMarkdown(item.file);
    markdownText = fetched.text;
    mdCache.set(item.file, markdownText);
    const parsed = parseArticleFrontmatter(markdownText);
    if (isBodyEmpty(parsed.body)) { emptyArticles.add(id); updateEmptyIndicators(); }
  } catch (e) {
    /* Brak pliku/HTTP bĹ‚Ä…d â€” traktujemy jako artykuĹ‚ w przygotowaniu. */
    emptyArticles.add(id);
    updateEmptyIndicators();
    const title = item.label;
    const {prev,next} = prevNext(id);
    const prevB = prev ? `<button class="pnav-btn" onclick="navigate('${prev.id}')"><span>â† ${prev.label}</span></button>`
                       : `<button class="pnav-btn" disabled><span>â†</span></button>`;
    const nextB = next ? `<button class="pnav-btn" onclick="navigate('${next.id}')"><span>${next.label} â†’</span></button>`
                       : `<button class="pnav-btn" disabled><span>â†’</span></button>`;
    const domainKey = getDomainKeyForItem(id, item);
    const planItems = (SITE_CONFIG.plans || {})[domainKey] || [];
    const plansHtml = planItems.length ? renderPlans(planItems, id) : '';
    const measurementToolsHtml = renderMeasurementTools(domainKey, id);
    area.innerHTML = `<div class="rendered">
      <div class="page-hero">
        <span class="chapter-lbl">${item.section||''}</span>
        <h1>${title}</h1>
      </div>
      ${EMPTY_BANNER_HTML}
      ${plansHtml}
      ${measurementToolsHtml}
      <div class="page-nav">${prevB}${nextB}</div>
    </div>`;
    window.scrollTo(0,0);
      setupMeasurementToolsSection(area);
    animateContentIn();
    return;
  }

  try {
    renderMd(markdownText, id, item);
    prefetch(id);
  } catch (e) {
    /* Awaria renderowania nie oznacza braku pliku â€” pokazujemy precyzyjny komunikat. */
    console.error('[PsyHub] BĹ‚Ä…d renderowania artykuĹ‚u:', item.file, e);
    area.innerHTML = '<div class="error-box"><h2>BĹ‚Ä…d renderowania treĹ›ci</h2><p>ArtykuĹ‚ zostaĹ‚ wczytany, ale nie udaĹ‚o siÄ™ go wyrenderowaÄ‡. SprawdĹş konsolÄ™ deweloperskÄ….</p></div>';
  }
}

function renderMd(text, id, item) {
  const area = document.getElementById('content');
  const parsedArticle = parseArticleFrontmatter(text);
  const metadata = parsedArticle.metadata || {};
  const articleText = parsedArticle.body || '';
  // pull h1 out to hero
  const h1m   = articleText.match(/^#\s+(.+)$/m);
  const title = h1m ? h1m[1] : item.label;
  const body  = h1m ? articleText.slice(articleText.indexOf(h1m[0])+h1m[0].length) : articleText;
  const {prev,next} = prevNext(id);
  const prevB = prev ? `<button class="pnav-btn" onclick="navigate('${prev.id}')"><span>â† ${prev.label}</span></button>`
                     : `<button class="pnav-btn" disabled><span>â†</span></button>`;
  const nextB = next ? `<button class="pnav-btn" onclick="navigate('${next.id}')"><span>${next.label} â†’</span></button>`
                     : `<button class="pnav-btn" disabled><span>â†’</span></button>`;

  // domain plans block
  const domainKey = getDomainKeyForItem(id, item);
  const planItems = (SITE_CONFIG.plans || {})[domainKey] || [];
  const plansHtml = planItems.length ? renderPlans(planItems, id) : '';
  const measurementToolsHtml = renderMeasurementTools(domainKey, id);

  // empty content detection
  const isEmpty = isBodyEmpty(articleText);
  if (isEmpty) emptyArticles.add(id);
  const emptyBanner = isEmpty ? EMPTY_BANNER_HTML : '';
  const articleReviewMetaHtml = renderArticleReviewMetaBadges(metadata);
  /* Nadajemy klasÄ™ animacji tylko tytuĹ‚owi artykuĹ‚u, aby styl byĹ‚ kontrolowany centralnie w CSS. */

  area.innerHTML = `<div class="rendered">
    <div class="page-hero">
      <span class="chapter-lbl">${item.section||''}</span>
      <h1 class="article-title-animated">${title}</h1>
      <div class="article-hero-actions">
        <button type="button" class="btn-copy-link" id="copyArticleLinkButton" data-page-id="${q(id)}">Kopiuj link</button>
      </div>
      ${articleReviewMetaHtml}
    </div>
    ${emptyBanner}
    <div class="article-layout">
      <aside class="article-toc" id="articleToc"></aside>
      <div class="md">${md2html(body, item.file || '')}</div>
    </div>
    ${plansHtml}
    ${measurementToolsHtml}
    <div class="page-nav">${prevB}${nextB}</div>
  </div>`;
  window.scrollTo(0,0);
  document.getElementById('progFill').style.width='0%';
  if (isEmpty) updateEmptyIndicators();
  addKeywordLinksToRenderedArticle(area.querySelector('.md'), id);
  setupArticleToc(area, id);
  setupCopyLinkButton(area, id);
  setupMeasurementToolsSection(area);
  animateContentIn();
}

/* CzyĹ›ci obserwatora TOC, aby uniknÄ…Ä‡ wyciekĂłw i konfliktĂłw miÄ™dzy podstronami. */
function cleanupArticleTocObserver() {
  if (articleTocObserver) {
    articleTocObserver.disconnect();
    articleTocObserver = null;
  }
  articleTocHeadings = [];
  articleTocCurrentPageId = null;
}

/* Normalizuje tekst nagĹ‚Ăłwka do postaci bezpiecznego identyfikatora HTML. */
function slugifyHeading(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* Rozdziela hash na identyfikator strony i opcjonalny identyfikator sekcji. */
function parseRouteHash(rawHash) {
  const cleanHash = (rawHash || '').replace(/^#/, '');
  /* Dekodujemy hash defensywnie (np. %2F), aby dziaĹ‚aĹ‚y takĹĽe linki kopiowane z rĂłĹĽnych ĹşrĂłdeĹ‚. */
  let decodedHash = cleanHash;
  try {
    decodedHash = decodeURIComponent(cleanHash);
  } catch (_) {
    /* Gdy hash ma niepoprawne kodowanie, zachowujemy wartoĹ›Ä‡ surowÄ… zamiast przerywaÄ‡ routing. */
    decodedHash = cleanHash;
  }
  const [pageId, sectionId] = decodedHash.split('::');
  return { pageId: normalizePageId(pageId), sectionId: sectionId || '' };
}

/* SkĹ‚ada hash routingu strony z opcjonalnym identyfikatorem sekcji artykuĹ‚u. */
function buildRouteHash(pageId, sectionId) {
  return `#${pageId}${sectionId ? `::${sectionId}` : ''}`;
}

/* Normalizuje identyfikator strony z URL (obsĹ‚uguje m.in. #/id/, #id.md i nadmiarowe spacje). */
function normalizePageId(rawPageId) {
  if (typeof rawPageId !== 'string') return '';
  const trimmed = rawPageId.trim();
  if (!trimmed) return '';
  return trimmed
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\.md$/i, '');
}

/* Ustawia klasÄ™ aktywnego elementu TOC na podstawie aktualnej sekcji artykuĹ‚u. */
function setActiveTocItem(sectionId) {
  document.querySelectorAll('.article-toc-link').forEach(link => {
    const isActive = link.dataset.sectionId === sectionId;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

/* Przewija do wskazanego nagĹ‚Ăłwka artykuĹ‚u i synchronizuje zaznaczenie TOC. */
function scrollToArticleSection(sectionId) {
  if (!sectionId) return;
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveTocItem(sectionId);
}

/* Konfiguruje przycisk kopiowania bezpoĹ›redniego linku do aktualnie otwartego artykuĹ‚u. */
function setupCopyLinkButton(area, pageId) {
  const copyBtn = area.querySelector('#copyArticleLinkButton');
  if (!copyBtn) return;
  copyBtn.addEventListener('click', async () => {
    const { pageId: hashPageId, sectionId } = parseRouteHash(window.location.hash);
    const safeSectionId = hashPageId === pageId ? sectionId : '';
    const articleUrl = new URL(window.location.href);
    articleUrl.hash = buildRouteHash(pageId, safeSectionId);
    try {
      await navigator.clipboard.writeText(articleUrl.toString());
      trackCopyLinkUsage();
      const originalLabel = copyBtn.textContent;
      copyBtn.textContent = 'Skopiowano';
      copyBtn.classList.add('is-copied');
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        copyBtn.classList.remove('is-copied');
      }, 1200);
    } catch (_) {
      /* Gdy Clipboard API zawiedzie, robimy fallback przez prompt dla kompatybilnoĹ›ci. */
      window.prompt('Skopiuj link rÄ™cznie:', articleUrl.toString());
    }
  });
}

/* Buduje TOC z nagĹ‚ĂłwkĂłw H2/H3 i aktywuje podĹ›wietlanie sekcji podczas przewijania. */
function setupArticleToc(area, pageId) {
  cleanupArticleTocObserver();
  const tocHost = area.querySelector('#articleToc');
  const mdRoot = area.querySelector('.md');
  if (!tocHost || !mdRoot) return;

  const headings = [...mdRoot.querySelectorAll('h2, h3')];
  if (!headings.length) {
    tocHost.remove();
    return;
  }

  const slugCounters = new Map();
  headings.forEach((heading, index) => {
    const baseSlug = slugifyHeading(heading.textContent) || `sekcja-${index + 1}`;
    const count = slugCounters.get(baseSlug) || 0;
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
    slugCounters.set(baseSlug, count + 1);
    heading.id = slug;
  });

  const tocItems = headings.map(heading => {
    const level = heading.tagName.toLowerCase();
    const href = buildRouteHash(pageId, heading.id);
    return `<li class="article-toc-item ${level === 'h3' ? 'is-sub' : ''}">
      <a href="${href}" class="article-toc-link" data-section-id="${heading.id}">${q(heading.textContent)}</a>
    </li>`;
  }).join('');

  const isMobileViewport = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  /* Na urzÄ…dzeniach mobilnych umieszczamy TOC w rozwijanym panelu, aby byĹ‚ widoczny i nie zajmowaĹ‚ stale miejsca. */
  tocHost.innerHTML = isMobileViewport
    ? `<details class="article-toc-mobile">
        <summary class="article-toc-mobile-summary">Spis treĹ›ci</summary>
        <ul class="article-toc-list">${tocItems}</ul>
      </details>`
    : `
        <h2 class="article-toc-title">Spis treĹ›ci</h2>
        <ul class="article-toc-list">${tocItems}</ul>
      `;

  tocHost.addEventListener('click', event => {
    const link = event.target.closest('.article-toc-link');
    if (!link) return;
    event.preventDefault();
    const sectionId = link.dataset.sectionId || '';
    history.replaceState({ id: pageId }, '', buildRouteHash(pageId, sectionId));
    scrollToArticleSection(sectionId);
  });

  articleTocHeadings = headings;
  articleTocCurrentPageId = pageId;

  /* Na mobile pomijamy IntersectionObserver, aby zmniejszyÄ‡ koszt renderowania na dĹ‚ugich artykuĹ‚ach. */
  if (!isMobileViewport) {
    articleTocObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const activeHeading = visible[0].target;
      setActiveTocItem(activeHeading.id);
    }, { rootMargin: '-10% 0px -70% 0px', threshold: [0, 1] });

    headings.forEach(heading => articleTocObserver.observe(heading));
  }

  const { sectionId } = parseRouteHash(window.location.hash);
  if (sectionId) {
    setTimeout(() => scrollToArticleSection(sectionId), 0);
  } else {
    setActiveTocItem(headings[0].id);
  }
}

const testsUI = window.PsyHubTestsUI || null;

function renderSpecializationTest(id, item) {
  if (!testsUI || typeof testsUI.renderSpecializationTest !== 'function') {
    const area = document.getElementById('content');
    area.innerHTML = '<div class="error-box"><h2>BĹ‚Ä…d Ĺ‚adowania moduĹ‚u</h2><p>Nie udaĹ‚o siÄ™ wczytaÄ‡ interfejsu testĂłw.</p></div>';
    return;
  }
  return testsUI.renderSpecializationTest(id, item);
}

/* â”€â”€ Daily Psychology renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let dailySelectedDay = null; /* null = today */
let dailyPsychologyFactsCache = null;

/* Pobiera i buforuje listÄ™ ciekawostek do sekcji Daily Psychology. */
async function loadDailyPsychologyFacts() {
  if (dailyPsychologyFactsCache) return dailyPsychologyFactsCache;
  const response = await fetch(REMINDER_FACTS_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error('Nie udaĹ‚o siÄ™ pobraÄ‡ ciekawostek Daily Psychology.');
  const payload = await response.json();
  const facts = Array.isArray(payload?.facts) ? payload.facts : [];
  dailyPsychologyFactsCache = facts
    .filter(item => item?.title && (item?.message || item?.lead || item?.body))
    .map(item => ({
      /* Ujednolicamy schemat danych: JSON moĹĽe zawieraÄ‡ lead/body zamiast message. */
      title: item.title,
      message: item.message || item.lead || '',
      body: item.body || '',
      source: item.source || ''
    }));
  return dailyPsychologyFactsCache;
}

/* Zwraca lokalny poniedziaĹ‚ek 00:00 dla tygodnia wskazanej daty. */
function getWeekStartMonday(date = new Date()) {
  const weekStart = new Date(date);
  weekStart.setHours(0, 0, 0, 0);
  const day = weekStart.getDay();
  const diffToMonday = day === 0 ? 6 : day - 1;
  weekStart.setDate(weekStart.getDate() - diffToMonday);
  return weekStart;
}

/* Buduje deterministyczny zestaw 7 ciekawostek aktualny od poniedziaĹ‚ku 00:00. */
function getWeeklyFactsMap(facts, weekStart = getWeekStartMonday()) {
  if (!Array.isArray(facts) || facts.length === 0) return new Map();
  const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
  const weekSeed = Math.floor(weekStart.getTime() / MILLISECONDS_IN_A_DAY);
  const orderedDays = [1, 2, 3, 4, 5, 6, 0];
  const map = new Map();

  orderedDays.forEach((dayNumber, offset) => {
    const index = (weekSeed + offset) % facts.length;
    map.set(dayNumber, facts[index]);
  });

  return map;
}

function renderDailyPsychology(id, item) {
  const area = document.getElementById('content');
  setBreadcrumb(item);
  const data = window.DAILY_PSYCHOLOGY;
  if (!data) {
    area.innerHTML = '<div class="error-box"><h2>BĹ‚Ä…d Ĺ‚adowania moduĹ‚u</h2><p>Nie udaĹ‚o siÄ™ wczytaÄ‡ danych psychologii codziennej.</p></div>';
    return;
  }
  /* PorzÄ…dek tygodnia w UI zaczynamy od poniedziaĹ‚ku niezaleĹĽnie od lokalizacji. */
  const WEEK_ORDER_MONDAY_FIRST = [1, 2, 3, 4, 5, 6, 0];
  const sortByMondayFirst = (entries) =>
    [...entries].sort((a, b) => WEEK_ORDER_MONDAY_FIRST.indexOf(a.day) - WEEK_ORDER_MONDAY_FIRST.indexOf(b.day));
  /* Stabilny wybĂłr wariantu na podstawie aktualnej daty i numeru dnia. */
  const pickDailyVariant = (variants, dayNumber) => {
    if (!Array.isArray(variants) || variants.length === 0) return null;
    const dateKey = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const seed = Number(dateKey) + (dayNumber * 37);
    return variants[Math.abs(seed) % variants.length];
  };

  const today = new Date().getDay(); /* 0=niedziela â€¦ 6=sobota */
  const orderedData = sortByMondayFirst(data);
  const displayDay = (dailySelectedDay !== null) ? dailySelectedDay : today;
  const entry = orderedData.find(e => e.day === displayDay) || orderedData[0];
  const curiosity = pickDailyVariant(entry.curiosityVariants, entry.day) || entry.curiosity;
  const exercise = pickDailyVariant(entry.exerciseVariants, entry.day) || entry.exercise;

  /* DomyĹ›lnie renderujemy treĹ›Ä‡ lokalnÄ…; po pobraniu danych podmieniamy ciekawostkÄ™ na wariant tygodniowy. */
  const weeklyFactFallback = null;

  const typeLabels = {
    reflection: 'Refleksja', challenge: 'Wyzwanie', bodyscan: 'Skan ciaĹ‚a',
    writing: 'Pisanie', mindfulness: 'UwaĹĽnoĹ›Ä‡', social: 'Wyzwanie spoĹ‚eczne', creative: 'KreatywnoĹ›Ä‡'
  };

  const navBtns = orderedData.map(e => {
    const isToday = e.day === today;
    const isActive = e.day === displayDay;
    const todayMark = isToday ? `<span class="daily-today-label">dziĹ›</span>` : '';
    return `<button class="daily-day-btn${isActive ? ' is-active' : ''}" onclick="selectDailyDay(${e.day})">${e.emoji} ${e.dayName}${todayMark}</button>`;
  }).join('');

  const stepsHtml = exercise.steps.map((step, i) =>
    `<li><span class="daily-step-num">${i + 1}</span><span>${step}</span></li>`
  ).join('');

  const bodyParas = curiosity.body.map(p => `<p>${p}</p>`).join('');

  area.innerHTML = `<div class="rendered daily-wrap">
    <div class="page-hero">
      <span class="chapter-lbl">${item.section || ''}</span>
      <h1>Psychologia Codzienna</h1>
      <p class="lead">Codzienna dawka wiedzy psychologicznej i pracy nad sobÄ… â€” zaleĹĽnie od dnia tygodnia.</p>
    </div>
    <div class="daily-nav">${navBtns}</div>
    <div class="daily-day-badge">${entry.emoji} ${entry.dayName}</div>
    <div class="daily-theme">Temat dnia: <strong>${entry.theme}</strong></div>

    <div class="daily-card">
      <div class="daily-card-hdr">
        <span class="daily-card-icon">đź§ </span>
        <span class="daily-card-label curiosity">Ciekawostka psychologiczna</span>
      </div>
      <div class="daily-card-title">${(weeklyFactFallback?.title || curiosity.title)}</div>
      <div class="daily-card-lead">${(weeklyFactFallback?.message || curiosity.lead)}</div>
      <div class="daily-card-body">${weeklyFactFallback?.body ? `<p>${weeklyFactFallback.body}</p>` : bodyParas}${weeklyFactFallback?.source ? `<p><strong>ĹąrĂłdĹ‚o:</strong> ${weeklyFactFallback.source}</p>` : ''}</div>
    </div>

    <div class="daily-card">
      <div class="daily-card-hdr">
        <span class="daily-card-icon">âśŹď¸Ź</span>
        <span class="daily-card-label exercise">Praca nad sobÄ…</span>
      </div>
      <div class="daily-card-title">${exercise.title}</div>
      <span class="daily-exercise-type ${exercise.type}">${typeLabels[exercise.type] || exercise.type}</span>
      <div class="daily-card-lead">${exercise.intro}</div>
      <ol class="daily-steps">${stepsHtml}</ol>
    </div>
  </div>`;
  window.scrollTo(0, 0);
  animateContentIn();

  /* Asynchroniczna aktualizacja: odĹ›wieĹĽa ciekawostkÄ™ raz na tydzieĹ„ (poniedziaĹ‚ek, 00:00 czasu lokalnego). */
  loadDailyPsychologyFacts()
    .then(facts => {
      const weeklyFacts = getWeeklyFactsMap(facts, getWeekStartMonday(new Date()));
      const fact = weeklyFacts.get(entry.day);
      if (!fact) return;
      const titleNode = area.querySelector('.daily-card:first-of-type .daily-card-title');
      const leadNode = area.querySelector('.daily-card:first-of-type .daily-card-lead');
      const bodyNode = area.querySelector('.daily-card:first-of-type .daily-card-body');
      if (!titleNode || !leadNode || !bodyNode) return;
      titleNode.textContent = fact.title;
      leadNode.textContent = fact.message;
      bodyNode.innerHTML = `${fact.body ? `<p>${fact.body}</p>` : ''}${fact.source ? `<p><strong>ĹąrĂłdĹ‚o:</strong> ${fact.source}</p>` : ''}`;
    })
    .catch(() => {
      /* Cichy fallback: gdy JSON nie jest dostÄ™pny, pozostaje treĹ›Ä‡ lokalna z daily-psychology.js. */
    });
}

window.selectDailyDay = function(day) {
  dailySelectedDay = day;
  if (current === 'dla_studentow/psychologia_codziennej') {
    renderDailyPsychology(current, pageMap.get(current));
  }
};

/* â”€â”€ Theoretical Test renderer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function renderTheoreticalTest(id, item) {
  if (!testsUI || typeof testsUI.renderTheoreticalTest !== 'function') {
    const area = document.getElementById('content');
    area.innerHTML = '<div class="error-box"><h2>BĹ‚Ä…d Ĺ‚adowania moduĹ‚u</h2><p>Nie udaĹ‚o siÄ™ wczytaÄ‡ interfejsu testĂłw.</p></div>';
    return;
  }
  return testsUI.renderTheoreticalTest(id, item);
}

/* plan list for a domain */
function renderPlans(items, currentId) {
  const rows = items.map(it => {
    const fileId = it.file ? it.file.replace('wiki/','').replace('.md','') : null;
    const isEmpty = fileId && emptyArticles.has(fileId);
    const effectiveStatus = isEmpty ? 'is-empty' : (it.status === 'planned' ? 'is-disabled' : it.status);
    const cls    = ['plan-item', effectiveStatus].join(' ');
    const navTo  = fileId ? `onclick="navigate('${fileId}')"` : '';
    const artid  = fileId ? `data-artid="${fileId}"` : '';
    const badge  = isEmpty ? 'pusty' : (it.status==='live' ? 'dostÄ™pny' : 'planowany');
    return `<div class="${cls}" ${artid} ${effectiveStatus==='live'||effectiveStatus==='is-empty' ? navTo : ''}>
      <div class="plan-dot ${effectiveStatus}"></div>
      <span class="plan-label">${it.label}</span>
      <span class="plan-badge ${effectiveStatus}">${badge}</span>
    </div>`;
  }).join('');
  return `<div class="plans-section">
    <h2>ArtykuĹ‚y w tym dziale</h2>
    <div class="plans-grid">${rows}</div>
  </div>`;
}

/* Zwraca znormalizowanÄ… etykietÄ™ tekstowÄ… dla pĂłl, ktĂłre mogÄ… nie mieÄ‡ danych. */
function renderToolField(value, missingLabel) {
  const cleanedValue = typeof value === 'string' ? value.trim() : value;
  if (!cleanedValue) return `<span class="tool-missing">${q(missingLabel)}</span>`;
  return q(cleanedValue);
}

/* Renderuje listÄ™ pozycji ĹşrĂłdĹ‚owych dla danych metodologicznych narzÄ™dzia. */
function renderToolListField(values, missingLabel) {
  if (!Array.isArray(values) || values.length === 0) {
    return `<span class="tool-missing">${q(missingLabel)}</span>`;
  }

  return `<ul class="measurement-tool-source-list">${values.map(value => `<li>${q(value)}</li>`).join('')}</ul>`;
}

/* Normalizuje token filtrĂłw, aby porĂłwnania byĹ‚y stabilne i odporne na wielkoĹ›Ä‡ liter. */
function normalizeToolFilterToken(value) {
  return String(value || '').trim().toLowerCase();
}

/* Zwraca unikalne wartoĹ›ci pola narzÄ™dzi posortowane alfabetycznie. */
function getUniqueToolFieldValues(tools, fieldName) {
  const values = Array.from(new Set(
    (Array.isArray(tools) ? tools : [])
      .map(tool => normalizeToolFilterToken(tool?.[fieldName]))
      .filter(Boolean)
  ));
  return values.sort((a, b) => a.localeCompare(b, 'pl'));
}

/* Buduje UI filtrĂłw i eksportu dla katalogu narzÄ™dzi pomiarowych. */
function renderMeasurementToolsControls(tools, domainKey) {
  const typeOptions = getUniqueToolFieldValues(tools, 'type');
  const licenseOptions = getUniqueToolFieldValues(tools, 'license');
  const evidenceOptions = getUniqueToolFieldValues(tools, 'evidenceLevel');

  const makeOptionsHtml = values => values
    .map(value => `<option value="${q(value)}">${q(value)}</option>`)
    .join('');

  return `<div class="measurement-tools-controls">
    <div class="measurement-tools-filters">
      <label class="measurement-tools-filter">
        <span>Typ</span>
        <select class="measurement-tools-filter-select" data-filter="type" onchange="applyMeasurementToolFilters(this.closest('.measurement-tools-section'))">
          <option value="">Wszystkie</option>
          ${makeOptionsHtml(typeOptions)}
        </select>
      </label>
      <label class="measurement-tools-filter">
        <span>Licencja</span>
        <select class="measurement-tools-filter-select" data-filter="license" onchange="applyMeasurementToolFilters(this.closest('.measurement-tools-section'))">
          <option value="">Wszystkie</option>
          ${makeOptionsHtml(licenseOptions)}
        </select>
      </label>
      <label class="measurement-tools-filter">
        <span>Evidence level</span>
        <select class="measurement-tools-filter-select" data-filter="evidence" onchange="applyMeasurementToolFilters(this.closest('.measurement-tools-section'))">
          <option value="">Wszystkie</option>
          ${makeOptionsHtml(evidenceOptions)}
        </select>
      </label>
    </div>
    <div class="measurement-tools-actions">
      <button type="button" class="measurement-tools-export-btn" onclick="exportMeasurementTools('csv', this)">Eksport CSV</button>
      <button type="button" class="measurement-tools-export-btn" onclick="exportMeasurementTools('json', this)">Eksport JSON</button>
    </div>
  </div>`;
}

/* NakĹ‚ada filtry na karty narzÄ™dzi i aktualizuje licznik widocznych wynikĂłw. */
function applyMeasurementToolFilters(sectionElement) {
  const section = sectionElement || document.querySelector('.measurement-tools-section');
  if (!section) return;

  const filterType = normalizeToolFilterToken(section.querySelector('[data-filter="type"]')?.value);
  const filterLicense = normalizeToolFilterToken(section.querySelector('[data-filter="license"]')?.value);
  const filterEvidence = normalizeToolFilterToken(section.querySelector('[data-filter="evidence"]')?.value);

  const cards = Array.from(section.querySelectorAll('.measurement-tool-card[data-tool-index]'));
  let visibleCount = 0;

  cards.forEach(card => {
    const typeToken = normalizeToolFilterToken(card.dataset.toolType);
    const licenseToken = normalizeToolFilterToken(card.dataset.toolLicense);
    const evidenceToken = normalizeToolFilterToken(card.dataset.toolEvidence);

    const isVisible = (!filterType || typeToken === filterType)
      && (!filterLicense || licenseToken === filterLicense)
      && (!filterEvidence || evidenceToken === filterEvidence);

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  const countElement = section.querySelector('.measurement-tools-count');
  if (countElement) {
    countElement.textContent = `Widoczne narzÄ™dzia: ${visibleCount} / ${cards.length}`;
  }
}

/* Przygotowuje dane aktualnie widocznych narzÄ™dzi do eksportu. */
function getVisibleMeasurementToolsForExport(section) {
  const domainKey = section?.dataset?.domainKey;
  const allTools = (SITE_CONFIG.measurementToolsByDomain || {})[domainKey] || [];
  const visibleIndexes = Array.from(section.querySelectorAll('.measurement-tool-card[data-tool-index]'))
    .filter(card => !card.hidden)
    .map(card => Number(card.dataset.toolIndex))
    .filter(index => Number.isInteger(index) && index >= 0);

  return visibleIndexes.map(index => allTools[index]).filter(Boolean);
}

/* Tworzy i pobiera plik eksportu dla narzÄ™dzi (CSV/JSON). */
function exportMeasurementTools(format, triggerElement) {
  const section = triggerElement?.closest('.measurement-tools-section') || document.querySelector('.measurement-tools-section');
  if (!section) return;

  const tools = getVisibleMeasurementToolsForExport(section);
  if (!tools.length) return;

  const domainKey = section.dataset.domainKey || 'tools';
  const stamp = new Date().toISOString().slice(0, 10);

  let content = '';
  let mimeType = '';
  let fileExtension = '';

  if (format === 'json') {
    content = JSON.stringify(tools, null, 2);
    mimeType = 'application/json;charset=utf-8';
    fileExtension = 'json';
  } else {
    const headers = ['id', 'name', 'type', 'evidenceLevel', 'license', 'population', 'ageRange', 'administrationTime'];
    const escapeCsv = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
    const rows = tools.map(tool => headers.map(header => escapeCsv(tool?.[header])).join(','));
    content = [headers.join(','), ...rows].join('\n');
    mimeType = 'text/csv;charset=utf-8';
    fileExtension = 'csv';
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `measurement_tools_${domainKey}_${stamp}.${fileExtension}`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

/* Buduje zwijalny blok z rozszerzonymi informacjami metodologicznymi. */
function renderMethodologyDetails(tool) {
  return `<details class="measurement-methodology-details">
    <summary class="measurement-methodology-summary">PokaĹĽ metodologiÄ™</summary>
    <div class="measurement-methodology-content">
      <h4 class="measurement-methodology-title">SzczegĂłĹ‚y metodologiczne</h4>
      <div class="measurement-tool-meta"><strong>Typ dowodu:</strong> ${renderToolField(tool.evidenceType, 'brak danych o typie dowodu')}</div>
      <div class="measurement-tool-meta"><strong>Informacje o prĂłbie:</strong> ${renderToolField(tool.sampleInfo, 'brak danych o prĂłbie')}</div>
      <div class="measurement-tool-meta"><strong>Kraj norm:</strong> ${renderToolField(tool.normCountry, 'brak danych o kraju norm')}</div>
      <div class="measurement-tool-meta"><strong>Rok norm:</strong> ${renderToolField(tool.normYear, 'brak danych o roku norm')}</div>
      <div class="measurement-tool-meta"><strong>Informacja o wielkoĹ›ci efektu:</strong> ${renderToolField(tool.effectSizeInfo, 'brak danych o wielkoĹ›ci efektu')}</div>
      <div class="measurement-tool-meta"><strong>Kluczowe publikacje:</strong> ${renderToolListField(tool.sourceRefs, 'brak wskazanych publikacji')}</div>
      <div class="measurement-tool-meta"><strong>RzetelnoĹ›Ä‡:</strong> ${renderToolField(tool.reliability, 'brak danych o rzetelnoĹ›ci')}</div>
      <div class="measurement-tool-meta"><strong>TrafnoĹ›Ä‡:</strong> ${renderToolField(tool.validity, 'brak danych o trafnoĹ›ci')}</div>
      <div class="measurement-tool-meta"><strong>Normy:</strong> ${renderToolField(tool.normsInfo, 'brak danych o normach')}</div>
      <div class="measurement-tool-meta"><strong>Ograniczenia:</strong> ${renderToolField(tool.limitations, 'brak danych o ograniczeniach')}</div>
      <div class="measurement-tool-meta"><strong>Uwagi etyczne:</strong> ${renderToolField(tool.ethicalNotes, 'brak danych etycznych')}</div>
      <div class="measurement-tool-meta"><strong>Przeciwwskazania:</strong> ${renderToolField(tool.contraindications, 'brak danych o przeciwwskazaniach')}</div>
    </div>
  </details>`;
}

/* Buduje zestaw ostrzeĹĽeĹ„ dla narzÄ™dzia, jeĹ›li wymaga licencji lub uprawnieĹ„. */
function renderToolWarnings(tool) {
  const warnings = [];
  const license = (tool.license || '').trim();
  const requiresPermissions = Boolean(tool.requiresPermissions);

  if (!license || license === 'do_ustalenia') {
    warnings.push('Licencja nieokreĹ›lona');
  } else if (license === 'komercyjna' || license === 'instytucjonalna') {
    warnings.push('Wymaga licencji');
  }

  if (requiresPermissions) {
    warnings.push('Wymaga uprawnieĹ„');
  }

  if (warnings.length === 0) return '';
  return `<div class="measurement-tool-alerts">${warnings.map(text => `<span class="tool-alert-badge">${q(text)}</span>`).join('')}</div>`;
}

/* Renderuje sekcjÄ™ narzÄ™dzi pomiarowych dla aktualnej dziedziny wraz ze stanem pustym. */
function renderMeasurementTools(domainKey, currentId) {
  const tools = (SITE_CONFIG.measurementToolsByDomain || {})[domainKey];
  const domainUpdateMeta = (SITE_CONFIG.measurementToolsDomainUpdates || {})[domainKey] || {};

  // Formatuje datÄ™ ISO do czytelnej postaci PL dla sekcji aktualizacji.
  const formattedUpdatedAt = (() => {
    if (!domainUpdateMeta.updatedAt) return null;
    const parsed = new Date(`${domainUpdateMeta.updatedAt}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
  })();

  const lastUpdatedHtml = `<p class="measurement-tools-updated"><strong>Ostatnia aktualizacja (dziedzina):</strong> ${q(formattedUpdatedAt || 'brak daty')}</p>`;

  if (!Array.isArray(tools) || tools.length === 0) {
    return `<div class="plans-section measurement-tools-section">
      <h2>NarzÄ™dzia pomiarowe</h2>
      ${lastUpdatedHtml}
      <div class="plans-empty-state">Spis narzÄ™dzi w przygotowaniu</div>
    </div>`;
  }

  const controlsHtml = renderMeasurementToolsControls(tools, domainKey);

  const rows = tools.map((tool, toolIndex) => {
    const relatedLinks = Array.isArray(tool.articleLinks)
      ? tool.articleLinks.map(articleId => {
          const article = pageMap.get(articleId);
          const label = article?.label || articleId;
          const isCurrent = articleId === currentId;
          if (isCurrent) return `<span class="tool-link is-current">${q(label)}</span>`;
          if (!article) return `<span class="tool-link is-missing">${q(label)}</span>`;
          return `<button type="button" class="tool-link" onclick="navigate('${articleId}')">${q(label)}</button>`;
        }).join('')
      : '<span class="tool-link is-missing">Brak</span>';

    const methodologyLinks = Array.isArray(tool.methodologyLinks)
      ? tool.methodologyLinks.map(articleId => {
          const article = pageMap.get(articleId);
          const label = article?.label || articleId;
          const isCurrent = articleId === currentId;
          if (isCurrent) return `<span class="tool-link is-current">${q(label)}</span>`;
          if (!article) return `<span class="tool-link is-missing">${q(label)}</span>`;
          return `<button type="button" class="tool-link" onclick="navigate('${articleId}')">${q(label)}</button>`;
        }).join('')
      : '<span class="tool-link is-missing">Brak</span>';

    const warningsHtml = renderToolWarnings(tool);
    const toolReviewMetaHtml = renderToolReviewMetaBadges(tool);

    return `<article class="plan-item live measurement-tool-card" data-tool-index="${toolIndex}" data-tool-type="${q(normalizeToolFilterToken(tool.type))}" data-tool-license="${q(normalizeToolFilterToken(tool.license))}" data-tool-evidence="${q(normalizeToolFilterToken(tool.evidenceLevel))}">
      <div class="plan-dot live"></div>
      <div class="measurement-tool-body">
        <h3 class="measurement-tool-name">${q(tool.name || 'NarzÄ™dzie bez nazwy')}</h3>
        ${toolReviewMetaHtml}
        ${warningsHtml}
        <div class="measurement-tool-meta"><strong>Typ:</strong> ${q(tool.type || 'â€”')}</div>
        <div class="measurement-tool-meta"><strong>Mierzone konstrukty:</strong> ${q((tool.constructs || []).join(', ') || 'â€”')}</div>
        <div class="measurement-tool-meta"><strong>Czas badania:</strong> ${q(tool.administrationTime || 'â€”')}</div>
        <div class="measurement-tool-meta"><strong>Grupa docelowa:</strong> ${q(tool.population || 'â€”')}</div>
        <div class="measurement-tool-meta"><strong>Status licencji:</strong> ${renderToolField(tool.license === 'do_ustalenia' ? '' : tool.license, 'licencja nieokreĹ›lona')}</div>
        <div class="measurement-tool-links"><strong>PowiÄ…zane artykuĹ‚y:</strong> ${relatedLinks}</div>
        <div class="measurement-tool-links"><strong>ArtykuĹ‚y metodologiczne:</strong> ${methodologyLinks}</div>
        ${renderMethodologyDetails(tool)}
      </div>
    </article>`;
  }).join('');

  return `<div class="plans-section measurement-tools-section" data-domain-key="${q(domainKey)}">
    <h2>NarzÄ™dzia pomiarowe</h2>
    ${lastUpdatedHtml}
    ${controlsHtml}
    <p class="measurement-tools-count" aria-live="polite"></p>
    <div class="plans-grid measurement-tools-grid">${rows}</div>
    <p class="measurement-tools-footer">MateriaĹ‚ edukacyjny, nie instrukcja samodzielnej diagnozy.</p>
  </div>`;
}

/* Inicjalizuje stan filtrĂłw narzÄ™dzi po wyrenderowaniu strony artykuĹ‚u. */
function setupMeasurementToolsSection(area) {
  const section = area?.querySelector('.measurement-tools-section');
  if (!section) return;
  applyMeasurementToolFilters(section);
}

function prevNext(id) {
  const all = SITE_CONFIG.nav.flatMap(s => s.items.filter(i => i.file));
  const idx = all.findIndex(i => i.id === id);
  return { prev: idx>0?all[idx-1]:null, next: idx<all.length-1?all[idx+1]:null };
}

function prefetch(id) {
  const {prev,next} = prevNext(id);
  for (const it of [prev,next]) {
    if (it?.file && !mdCache.has(it.file))
      fetch(it.file).then(r=>r.ok?r.text():Promise.reject()).then(t=>{
        mdCache.set(it.file,t);
        const parsed = parseArticleFrontmatter(t);
        if (isBodyEmpty(parsed.body)) { emptyArticles.add(it.id); updateEmptyIndicators(); }
      }).catch(()=>{ emptyArticles.add(it.id); updateEmptyIndicators(); });
  }
}

/* â”€â”€ Wiki index â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderWiki(id, wikiKey) {
  const cfg  = SITE_CONFIG.wikis[wikiKey];
  const area = document.getElementById('content');
  if (!cfg) { area.innerHTML=`<div class="error-box"><h2>WIKI nieznana: ${wikiKey}</h2></div>`; return; }
  const item = pageMap.get(id);
  setBreadcrumb({...item, section:'Encyklopedie', label:cfg.title});

  const isGloss = cfg.sections.length===1 && cfg.sections[0].isGlossary;
  const hasPdfLabBrowser = cfg.sections.some(sec => sec.type === 'pdfLabBrowser');
  let body = isGloss ? renderGlossHTML(cfg.sections[0].entries) : cfg.sections.map(sec => {
    if (sec.type === 'pdfLabBrowser') {
      return renderPdfLabBrowser(sec);
    }
    return `
    <div class="wiki-sec">
      <div class="wiki-sec-title">${sec.title}</div>
      <div class="art-grid">${sec.articles.map(artCard).join('')}</div>
    </div>`;
  }).join('');

  area.innerHTML = `<div class="rendered">
    <div class="wiki-hdr">
      <span class="chapter-lbl">Encyklopedia</span>
      <h1>${cfg.title}</h1>
      <p class="intro">${cfg.intro}</p>
    </div>
    ${body}
  </div>`;
  window.scrollTo(0,0);
  updateEmptyIndicators();
  if (hasPdfLabBrowser) setupPdfLabBrowserInteractions();
  animateWikiIn();
}

/* Renderuje moduĹ‚ wyboru i podglÄ…du instrukcji PDF z katalogu labs. */
function renderPdfLabBrowser(section) {
  const files = Array.isArray(section.files) ? section.files : [];
  if (!files.length) {
    return `<div class="wiki-sec"><div class="wiki-sec-title">${section.title || 'Instrukcje laboratoryjne'}</div><p>Brak dostÄ™pnych plikĂłw PDF.</p></div>`;
  }
  const optionsHtml = files.map((file, index) =>
    `<option value="${q(file.href)}" ${index === 0 ? 'selected' : ''}>${q(file.label)}</option>`
  ).join('');
  const firstHref = files[0].href;
  return `<div class="wiki-sec pdf-lab-browser">
    <div class="wiki-sec-title">${q(section.title || 'Instrukcje laboratoryjne')}</div>
    <div class="pdf-lab-controls">
      <label for="pdfLabSelect">Wybierz plik PDF:</label>
      <select id="pdfLabSelect">${optionsHtml}</select>
      <a id="pdfLabOpenNewTab" href="${q(firstHref)}" target="_blank" rel="noopener noreferrer">OtwĂłrz w nowej karcie</a>
    </div>
    <div class="pdf-lab-viewer-wrap">
      <iframe id="pdfLabViewer" src="${q(firstHref)}#view=FitH" title="PodglÄ…d instrukcji laboratoryjnej PDF"></iframe>
      <p class="pdf-lab-mobile-hint">Na urzÄ…dzeniach mobilnych podglÄ…d osadzony moĹĽe byÄ‡ ograniczony â€” uĹĽyj przycisku â€žOtwĂłrz w nowej karcieâ€ť.</p>
    </div>
  </div>`;
}

/* Synchronizuje wybĂłr pliku PDF pomiÄ™dzy listÄ…, osadzonym podglÄ…dem i linkiem nowej karty. */
function setupPdfLabBrowserInteractions() {
  const select = document.getElementById('pdfLabSelect');
  const viewer = document.getElementById('pdfLabViewer');
  const openNewTabLink = document.getElementById('pdfLabOpenNewTab');
  if (!select || !viewer || !openNewTabLink) return;

  const updatePdfSelection = () => {
    const selectedPdf = select.value;
    viewer.src = `${selectedPdf}#view=FitH`;
    openNewTabLink.href = selectedPdf;
  };

  select.addEventListener('change', updatePdfSelection);
}

function artCard(art) {
  const isEmpty = art.id && emptyArticles.has(art.id);
  const effectiveStatus = isEmpty ? 'is-empty' : (art.status === 'planned' ? 'is-disabled' : art.status);
  const lbl = {live:'dostÄ™pny','is-disabled':'planowany',wiki:'wiki',xlink:'wspĂłlny â†—','is-empty':'pusty'};
  // ObsĹ‚uga dwĂłch typĂłw kart: nawigacja wewnÄ™trzna (id) i odnoĹ›niki do stron HTML (href).
  const clickableById = (isEmpty || art.status==='live'||art.status==='wiki'||art.status==='xlink') && art.id;
  const clickableByHref = art.status === 'xlink' && art.href;
  const click = clickableById ? `onclick="navigate('${art.id}')"` : '';
  const artid = art.id ? `data-artid="${art.id}"` : '';
  const desc = art.desc ? `<div class="art-desc">${art.desc}</div>` : '';

  if (clickableByHref && !clickableById) {
    return `<a class="art-card ${effectiveStatus}" href="${q(art.href)}" target="_blank" rel="noopener noreferrer">
      <div class="art-dot ${effectiveStatus}"></div>
      <div class="art-body"><div class="art-lbl">${art.label}</div>${desc}</div>
      <span class="art-badge ${effectiveStatus}">${lbl[effectiveStatus]||effectiveStatus}</span>
    </a>`;
  }

  return `<div class="art-card ${effectiveStatus}" ${artid} ${click}>
    <div class="art-dot ${effectiveStatus}"></div>
    <div class="art-body"><div class="art-lbl">${art.label}</div>${desc}</div>
    <span class="art-badge ${effectiveStatus}">${lbl[effectiveStatus]||effectiveStatus}</span>
  </div>`;
}

/* â”€â”€ Glossary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderGlossHTML(entries) {
  const groups = {};
  for (const e of entries) { const l=e.term[0].toUpperCase(); (groups[l]=groups[l]||[]).push(e); }
  const letters = Object.keys(groups).sort();
  const btns = ['Wszystkie',...letters].map(l=>
    `<button class="gloss-btn${l==='Wszystkie'?' is-active':''}" onclick="filterGloss('${l}')">${l}</button>`
  ).join('');
  const content = letters.map(l=>`
    <div class="gloss-group" data-letter="${l}">
      <div class="gloss-letter">${l}</div>
      ${groups[l].map(e=>`
        <div class="gloss-entry">
          <div class="gloss-term">${e.term}${e.link?`<span class="gloss-go" onclick="navigate('${e.link}')">â†’ artykuĹ‚</span>`:''}</div>
          <div class="gloss-def">${e.def}</div>
        </div>`).join('')}
    </div>`).join('');
  return `<div class="gloss-filter">${btns}</div><div id="glossGroups">${content}</div>`;
}
window.filterGloss = function(l){
  document.querySelectorAll('.gloss-btn').forEach(b=>b.classList.toggle('is-active',b.textContent===l));
  document.querySelectorAll('.gloss-group').forEach(g=>{ g.style.display=(l==='Wszystkie'||g.dataset.letter===l)?'':'none'; });
};

/* â”€â”€ Home â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderHome() {
  const area = document.getElementById('content');
  setBreadcrumb(null);
  const totalMd   = SITE_CONFIG.nav.flatMap(s=>s.items).filter(i=>i.file).length;
  const totalWiki = Object.keys(SITE_CONFIG.wikis).length;
  const excludedSections = new Set(SITE_CONFIG.catalogExcludedSections || ['Encyklopedie', 'Referencje', 'Wprowadzenie']);
  const domains   = SITE_CONFIG.nav.filter(s => !excludedSections.has(s.section));
  const totalPlan = Object.values(SITE_CONFIG.plans||{}).flat().filter(p=>p.status==='planned').length;

  const icons = {'Neurobiologia':'đź§¬','Funkcje Poznawcze':'đź§©','Zaburzenia Kliniczne':'âš•ď¸Ź',
    'Dla StudentĂłw':'đźŽ“',
    'Przypadki Kliniczne':'đź“‹','Diagnostyka':'đź“Š','Psychometria':'đź“Ź','Farmakologia':'đź’Š',
    'RĂłĹĽnice Indywidualne':'đź‘¤','Temperament':'đźŚˇď¸Ź','Emocje i Motywacja':'âť¤ď¸Ź',
    'Biologiczne Podstawy':'đź”¬','Psychoterapia':'đź›‹ď¸Ź','Psychopatologia':'đź”Ť',
    'Suicydologia':'đź†','Seksuologia':'đź’ś','Arteterapia':'đźŽ¨','Animaloterapia':'đźľ'};
  const cards = domains.map(sec=>{
    const cnt = sec.items.filter(i=>i.file).length;
    const navId = sec.items[0]?.id||'';
    return `<div class="domain-card" onclick="navigate('${navId}')">
      <div class="d-icon">${icons[sec.section]||'đź“–'}</div>
      <div class="d-name">${sec.section}</div>
      <span class="d-count">${cnt} art.</span>
    </div>`;
  }).join('');

  /* Karty scenariuszy kierujÄ…ce od razu do konkretnych moduĹ‚Ăłw z SITE_CONFIG.nav. */
  const startScenarios = [
    {
      title: 'Nauka od podstaw',
      id: 'wstep_do_psychologii/definicja',
      emoji: 'đź“',
      goal: 'Zacznij od fundamentĂłw psychologii.',
      benefit: 'W 10 minut zbudujesz kontekst do dalszej nauki.'
    },
    {
      title: 'SprawdĹş siÄ™ testem',
      id: 'dla_studentow/testy_teoretyczne',
      emoji: 'đź§Ş',
      goal: 'Zweryfikuj, co juĹĽ pamiÄ™tasz.',
      benefit: 'Szybko zobaczysz luki i priorytety nauki.'
    },
    {
      title: 'Szybka powtĂłrka',
      id: 'dla_studentow/psychologia_codziennej',
      emoji: 'âšˇ',
      goal: 'PowtĂłrz jednÄ… maĹ‚Ä… porcjÄ™ wiedzy.',
      benefit: 'Utrzymasz regularnoĹ›Ä‡ bez dĹ‚ugiej sesji.'
    },
    {
      title: 'Przejrzyj Wiki',
      id: 'wiki-index/slownik',
      emoji: 'đź§­',
      goal: 'ZnajdĹş temat lub termin w kilka sekund.',
      benefit: 'SkrĂłcisz czas szukania potrzebnej informacji.'
    }
  ];
  const startCardsHtml = startScenarios
    .filter(scenario => pageMap.has(scenario.id))
    .map(scenario => `<button type="button" class="start-card" onclick="navigate('${scenario.id}')">
      <span class="start-card-icon">${scenario.emoji}</span>
      <span class="start-card-title">${scenario.title}</span>
      <span class="start-card-goal">${scenario.goal}</span>
      <span class="start-card-benefit">${scenario.benefit}</span>
    </button>`)
    .join('');

  /* Renderuje komponent â€žOstatnio odwiedzaneâ€ť na podstawie localStorage. */
  const recentItems = readRecentPages()
    .filter(id => id !== '__home__')
    .slice(0, RECENT_PAGES_LIMIT)
    .map(id => pageMap.get(id))
    .filter(Boolean);
  const recentHtml = recentItems.length
    ? `<div class="recent-list">${recentItems.map(item => `<button type="button" class="recent-link" onclick="navigate('${item.id}')">
        <span class="recent-section">${item.section || 'PsyHub'}</span>
        <span class="recent-title">${item.label}</span>
      </button>`).join('')}</div>`
    : `<p class="recent-empty">Tu pojawią się ostatnio otwierane strony. Zacznij od jednej karty „Start tutaj”.</p>`;

  area.innerHTML = `<div class="rendered">
    <div class="home-hero">
      <div class="home-eyebrow">Portal Wiedzy Psychologicznej</div>
      <h1>Witaj w <span>PsyHub</span></h1>
      <p>Wybierz ścieżkę i zacznij od razu. Krótkie kroki pomogą Ci uczyć się szybciej i z mniejszym stresem.</p>
      <div class="home-stats">
        <div><div class="stat-val">${totalMd}</div><div class="stat-lbl">Artykułów</div></div>
        <div><div class="stat-val">${totalPlan}</div><div class="stat-lbl">Zaplanowanych</div></div>
        <div><div class="stat-val">${totalWiki}</div><div class="stat-lbl">Encyklopedii</div></div>
        <div><div class="stat-val">${domains.length}</div><div class="stat-lbl">Działów</div></div>
      </div>
    </div>
    <section class="home-block">
      <div class="home-block-head">
        <h2>Start tutaj</h2>
        <p>Wybierz scenariusz dopasowany do celu na teraz.</p>
      </div>
      <div class="start-grid">${startCardsHtml}</div>
    </section>
    <section class="home-block">
      <div class="home-block-head">
        <h2>Ostatnio odwiedzane</h2>
        <p>WrĂłÄ‡ do materiaĹ‚Ăłw, ktĂłre juĹĽ przeglÄ…daĹ‚eĹ›.</p>
      </div>
      ${recentHtml}
    </section>
    <div><div class="domains-h2">DziaĹ‚y tematyczne</div><div class="domain-grid">${cards}</div></div>
  </div>`;
  window.scrollTo(0,0);
  animateHomeCards();
}

/* â”€â”€ Breadcrumb â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function setBreadcrumb(item) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  if (!item) {
    bc.innerHTML = `<a href="#" data-nav-id="${q(SITE_CONFIG.defaultPage)}">PsyHub</a>`;
    updateTopbarNextStep(SITE_CONFIG.defaultPage);
    return;
  }
  const s  = item?.section||'';
  const l  = item?.label||'';
  let sHtml = '';
  if (s) {
    const sec = SITE_CONFIG.nav.find(n => n.section === s);
    const firstId = sec?.items?.[0]?.id;
    sHtml = firstId
      ? `<span class="bsep">/</span><a href="#" data-nav-id="${q(firstId)}">${s}</a>`
      : `<span class="bsep">/</span><span>${s}</span>`;
  }
  bc.innerHTML = `<a href="#" data-nav-id="${q(SITE_CONFIG.defaultPage)}">PsyHub</a>`
    + sHtml
    +(l?`<span class="bsep">/</span><span class="bcur">${l}</span>`:'');
  updateTopbarNextStep(item.id);
}

/* â”€â”€ Search â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SEARCH_UI_STATE_KEY = 'psyhub-search-ui-state';
const SEARCH_METRICS_KEY = 'psyhub-search-metrics-v1';
let searchIndex = [];
let keywordLinkIndex = new Map();
let searchFullTextIndex = new Map();
let searchFullTextLoadPromise = null;
let searchSessionState = null;
let lastMeasuredSearchQuery = '';
const searchUiState = { query: '', filters: { tests: false, wiki: false, beginner: false } };

/* Standaryzuje tokeny tekstowe, ĹĽeby ranking dziaĹ‚aĹ‚ stabilnie dla polskich znakĂłw i wielkoĹ›ci liter. */
function normalizeSearchText(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* Konwertuje markdown na "surowy" tekst, aby indeks peĹ‚notekstowy nie zawieraĹ‚ znacznikĂłw. */
function markdownToPlainText(markdown) {
  return (markdown || '')
    .replace(/^---[\s\S]*?---/m, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+\]\(([^)]+)\)/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, ' ')
    .replace(/^\s{0,3}>\s?/gm, ' ')
    .replace(/^\s*[-*+]\s+/gm, ' ')
    .replace(/^\s*\d+\.\s+/gm, ' ')
    .replace(/\[\^([^\]\s]+)\]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/[*_~>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* Zwraca krĂłtki fragment treĹ›ci z pierwszym wystÄ…pieniem zapytania (snippet do listy wynikĂłw). */
function getFullTextSnippet(entry, queryTokens) {
  if (!entry?.plainText) return '';
  const normalizedText = entry.normalizedText || '';
  if (!normalizedText) return '';
  let firstToken = '';
  let firstIdx = -1;
  queryTokens.forEach(token => {
    if (!token) return;
    const idx = normalizedText.indexOf(token);
    if (idx === -1) return;
    if (firstIdx === -1 || idx < firstIdx) {
      firstIdx = idx;
      firstToken = token;
    }
  });
  if (firstIdx === -1) return '';
  const snippetRadius = 90;
  const start = Math.max(0, firstIdx - snippetRadius);
  const end = Math.min(entry.plainText.length, firstIdx + firstToken.length + snippetRadius);
  const raw = entry.plainText.slice(start, end).trim();
  return `${start > 0 ? 'â€¦' : ''}${q(raw)}${end < entry.plainText.length ? 'â€¦' : ''}`;
}

/* Buduje indeks wyszukiwania oparty o metadane sekcji i elementu nawigacji. */
function rebuildSearchIndex() {
  searchIndex = SITE_CONFIG.nav.flatMap(sec => sec.items)
    .filter(item => !item.href)
    .map(item => ({
      ...item,
      section: item.section || pageMap.get(item.id)?.section || '',
      normalizedLabel: normalizeSearchText(item.label),
      normalizedSection: normalizeSearchText(item.section || pageMap.get(item.id)?.section || ''),
      normalizedKeywords: (item.keywords || []).map(normalizeSearchText),
      normalizedType: normalizeSearchText(item.type || ''),
      normalizedLevel: normalizeSearchText(item.level || ''),
    }));

  /* Tworzy indeks sĹ‚Ăłw kluczowych -> ID artykuĹ‚u dla szybkiego linkowania wewnÄ…trz treĹ›ci. */
  keywordLinkIndex = new Map();
  searchIndex.forEach(entry => {
    const phrases = [entry.label, ...(entry.keywords || [])]
      .map(value => String(value || '').trim())
      .filter(value => value.length >= 4);
    phrases.forEach(phrase => {
      const normalized = normalizeSearchText(phrase);
      if (!normalized || keywordLinkIndex.has(normalized)) return;
      keywordLinkIndex.set(normalized, entry.id);
    });
  });
  /* Po przebudowie podstawowego indeksu zerujemy indeks peĹ‚notekstowy i Ĺ‚adujemy go ponownie. */
  searchFullTextIndex = new Map();
  searchFullTextLoadPromise = null;
}

/* Ĺaduje treĹ›Ä‡ plikĂłw MD i buduje indeks peĹ‚notekstowy uĹĽywany przez wyszukiwarkÄ™. */
async function ensureFullTextSearchIndex() {
  if (searchFullTextLoadPromise) return searchFullTextLoadPromise;
  const markdownEntries = searchIndex.filter(entry => {
    const item = pageMap.get(entry.id);
    return Boolean(item?.file);
  });
  searchFullTextLoadPromise = (async () => {
    await Promise.all(markdownEntries.map(async entry => {
      const item = pageMap.get(entry.id);
      if (!item?.file) return;
      try {
        let markdownText = mdCache.get(item.file);
        if (!markdownText) {
          /* UĹĽywamy tej samej logiki fallbackĂłw, aby indeks peĹ‚notekstowy nie gubiĹ‚ pojedynczych artykuĹ‚Ăłw. */
          const fetched = await fetchArticleMarkdown(item.file);
          markdownText = fetched.text;
          mdCache.set(item.file, markdownText);
        }
        const parsed = parseArticleFrontmatter(markdownText);
        const plainText = markdownToPlainText(parsed.body || '');
        searchFullTextIndex.set(entry.id, {
          plainText,
          normalizedText: normalizeSearchText(plainText),
        });
      } catch (_) {
        /* Pomijamy bĹ‚Ä™dne pliki, aby wyszukiwarka nadal dziaĹ‚aĹ‚a na pozostaĹ‚ych treĹ›ciach. */
      }
    }));
  })();
  return searchFullTextLoadPromise;
}

/* Ocenia wynik na podstawie dopasowaĹ„ tytuĹ‚u, sekcji i tagĂłw sĹ‚Ăłw kluczowych. */
function scoreSearchItem(entry, queryTokens) {
  let score = 0;
  const fullText = searchFullTextIndex.get(entry.id);
  queryTokens.forEach(token => {
    if (!token) return;
    if (entry.normalizedLabel === token) score += 16;
    else if (entry.normalizedLabel.startsWith(token)) score += 11;
    else if (entry.normalizedLabel.includes(token)) score += 8;

    if (entry.normalizedSection.includes(token)) score += 4;
    if (entry.normalizedType.includes(token)) score += 3;
    if (entry.normalizedKeywords.some(keyword => keyword.includes(token))) score += 7;
    if (fullText?.normalizedText.includes(token)) score += 2;
  });
  return score;
}

/* Filtruje wyniki wedĹ‚ug aktywnych skrĂłtĂłw, zachowujÄ…c stan UI miÄ™dzy odĹ›wieĹĽeniami. */
function matchesActiveFilters(entry) {
  if (searchUiState.filters.tests && entry.type !== 'test') return false;
  if (searchUiState.filters.wiki && entry.type !== 'wiki') return false;
  if (searchUiState.filters.beginner && entry.level !== 'beginner') return false;
  return true;
}

/* Renderuje etykiety kontekstowe przy wynikach, ĹĽeby uĹĽytkownik szybciej rozpoznaĹ‚ kontekst. */
function renderSearchMetaTags(entry) {
  const typeLabelMap = { article: 'artykuĹ‚', wiki: 'wiki', test: 'test' };
  const safeSection = q(entry.section || 'Inne');
  const safeType = q(typeLabelMap[entry.type] || entry.type || 'materiaĹ‚');
  const typeCls = entry.type ? `type-${entry.type}` : '';
  return `<span class="s-search-item-meta">
    <span class="s-search-tag">${safeSection}</span>
    <span class="s-search-tag ${typeCls}">${safeType}</span>
  </span>`;
}

/* Podpowiada tematy powiÄ…zane, gdy nie znaleziono dopasowaĹ„ do zapytania. */
function getRelatedSearchSuggestions(queryTokens) {
  if (!queryTokens.length) return [];
  const suggestions = searchIndex
    .map(entry => ({ entry, score: scoreSearchItem(entry, queryTokens) }))
    .filter(row => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(row => row.entry);
  return suggestions;
}

/* Odtwarza i zapisuje stan wyszukiwania w localStorage. */
function loadSearchUiState() {
  try {
    const raw = localStorage.getItem(SEARCH_UI_STATE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    searchUiState.query = typeof parsed.query === 'string' ? parsed.query : '';
    searchUiState.filters.tests = Boolean(parsed.filters?.tests);
    searchUiState.filters.wiki = Boolean(parsed.filters?.wiki);
    searchUiState.filters.beginner = Boolean(parsed.filters?.beginner);
  } catch (_) {}
}
function saveSearchUiState() {
  localStorage.setItem(SEARCH_UI_STATE_KEY, JSON.stringify(searchUiState));
}

/* Odczytuje licznik metryk wyszukiwarki i copy-link z localStorage. */
function readSearchMetrics() {
  try {
    const raw = localStorage.getItem(SEARCH_METRICS_KEY);
    if (!raw) {
      return {
        searchStarts: 0,
        searchResultImpressions: 0,
        searchResultClicks: 0,
        firstClickTimesMs: [],
        copyLinkUses: 0,
      };
    }
    const parsed = JSON.parse(raw);
    return {
      searchStarts: Number.isFinite(parsed?.searchStarts) ? parsed.searchStarts : 0,
      searchResultImpressions: Number.isFinite(parsed?.searchResultImpressions) ? parsed.searchResultImpressions : 0,
      searchResultClicks: Number.isFinite(parsed?.searchResultClicks) ? parsed.searchResultClicks : 0,
      firstClickTimesMs: Array.isArray(parsed?.firstClickTimesMs) ? parsed.firstClickTimesMs.filter(Number.isFinite).slice(-200) : [],
      copyLinkUses: Number.isFinite(parsed?.copyLinkUses) ? parsed.copyLinkUses : 0,
    };
  } catch (_) {
    return {
      searchStarts: 0,
      searchResultImpressions: 0,
      searchResultClicks: 0,
      firstClickTimesMs: [],
      copyLinkUses: 0,
    };
  }
}

/* Zapisuje metryki sukcesu funkcji wyszukiwarki oraz kopiowania linku. */
function writeSearchMetrics(metrics) {
  localStorage.setItem(SEARCH_METRICS_KEY, JSON.stringify(metrics));
}

/* Rejestruje nowe "podejĹ›cie" uĹĽytkownika do znalezienia treĹ›ci. */
function startSearchSessionIfNeeded(query) {
  if (!query || query === lastMeasuredSearchQuery) return;
  const metrics = readSearchMetrics();
  metrics.searchStarts += 1;
  writeSearchMetrics(metrics);
  searchSessionState = {
    query,
    startedAt: Date.now(),
    resolved: false,
  };
  lastMeasuredSearchQuery = query;
}

/* Rejestruje ekspozycjÄ™ wynikĂłw, aby moĹĽna byĹ‚o policzyÄ‡ CTR listy wynikĂłw. */
function trackSearchResultImpressions(resultCount) {
  if (!resultCount) return;
  const metrics = readSearchMetrics();
  metrics.searchResultImpressions += resultCount;
  writeSearchMetrics(metrics);
}

/* Rejestruje klikniÄ™cie wyniku i czas do pierwszego sukcesu od rozpoczÄ™cia wyszukiwania. */
function trackSearchResultClick() {
  const metrics = readSearchMetrics();
  metrics.searchResultClicks += 1;
  if (searchSessionState && !searchSessionState.resolved) {
    metrics.firstClickTimesMs.push(Math.max(0, Date.now() - searchSessionState.startedAt));
    metrics.firstClickTimesMs = metrics.firstClickTimesMs.slice(-200);
    searchSessionState.resolved = true;
  }
  writeSearchMetrics(metrics);
}

/* Rejestruje uĹĽycie akcji "kopiuj link" jako osobny wskaĹşnik adopcji funkcji. */
function trackCopyLinkUsage() {
  const metrics = readSearchMetrics();
  metrics.copyLinkUses += 1;
  writeSearchMetrics(metrics);
}

/* Aktualizuje listÄ™ wynikĂłw i fallback "Nie znaleziono" wraz z podpowiedziami. */
async function applySearchUi() {
  const input = document.getElementById('searchInput');
  const nav = document.getElementById('sidebarNav');
  const results = document.getElementById('searchResults');
  if (!nav || !results) return;
  const query = normalizeSearchText(searchUiState.query);
  const queryTokens = query.split(' ').filter(Boolean);
  const hasActiveFilters = Object.values(searchUiState.filters).some(Boolean);
  const hasSearchContext = Boolean(queryTokens.length || hasActiveFilters);

  document.querySelectorAll('.s-filter-btn').forEach(btn => {
    btn.classList.toggle('is-active', searchUiState.filters[btn.dataset.filter]);
  });
  if (input && input.value !== searchUiState.query) input.value = searchUiState.query;

  if (!hasSearchContext) {
    searchSessionState = null;
    lastMeasuredSearchQuery = '';
    results.classList.remove('is-visible');
    results.innerHTML = '';
    nav.style.display = '';
    renderSidebar();
    return;
  }

  startSearchSessionIfNeeded(query);
  await ensureFullTextSearchIndex();
  if (query !== normalizeSearchText(searchUiState.query)) return;
  nav.style.display = 'none';
  const ranked = searchIndex
    .filter(matchesActiveFilters)
    .map(entry => ({ entry, score: scoreSearchItem(entry, queryTokens) }))
    .filter(row => queryTokens.length ? row.score > 0 : true)
    .sort((a, b) => b.score - a.score || a.entry.label.localeCompare(b.entry.label, 'pl'));

  if (!ranked.length) {
    const suggestions = getRelatedSearchSuggestions(queryTokens);
    const suggestionHtml = suggestions.length
      ? `<div class="s-empty-suggestions">${suggestions.map(s => `<button type="button" data-id="${q(s.id)}">${q(s.label)}</button>`).join('')}</div>`
      : '';
    results.innerHTML = `<div class="s-search-empty">
      <strong>Nie znaleziono wynikĂłw.</strong>
      <div>SprĂłbuj innej frazy lub skorzystaj z tematĂłw powiÄ…zanych:</div>
      ${suggestionHtml}
    </div>`;
    results.classList.add('is-visible');
    return;
  }

  const topResults = ranked.slice(0, 25);
  trackSearchResultImpressions(topResults.length);
  results.innerHTML = topResults.map(({ entry }) => {
    const snippetEntry = searchFullTextIndex.get(entry.id);
    const snippet = getFullTextSnippet(snippetEntry, queryTokens);
    return `
    <button type="button" class="nav-item nav-item-btn" data-id="${q(entry.id)}">
      <span class="s-search-item-main">
        <span>${q(entry.label)}</span>
        ${snippet ? `<small class="s-search-snippet">${snippet}</small>` : ''}
      </span>
      ${renderSearchMetaTags(entry)}
    </button>
  `;
  }).join('');
  results.classList.add('is-visible');
}

/* Podmienia sĹ‚owa kluczowe na odnoĹ›niki do powiÄ…zanych artykuĹ‚Ăłw w treĹ›ci aktualnej strony. */
function addKeywordLinksToRenderedArticle(container, currentId) {
  const currentItem = pageMap.get(currentId);
  if (!currentItem || !container) return;
  const keywords = (currentItem.keywords || []).map(value => String(value || '').trim()).filter(Boolean);
  if (!keywords.length) return;

  const linkTargets = keywords
    .map(keyword => {
      const normalizedKeyword = normalizeSearchText(keyword);
      const targetId = keywordLinkIndex.get(normalizedKeyword);
      if (!targetId || targetId === currentId) return null;
      return { keyword, targetId };
    })
    .filter(Boolean)
    .sort((a, b) => b.keyword.length - a.keyword.length)
    .slice(0, 6);
  if (!linkTargets.length) return;

  /* Escapuje literaĹ‚y RegExp, aby bezpiecznie tworzyÄ‡ wzorce dla fraz wielowyrazowych. */
  const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parentTag = node.parentElement?.tagName;
      if (['A', 'CODE', 'PRE', 'H1', 'H2', 'H3', 'H4'].includes(parentTag)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  let linksLeft = 6;
  textNodes.forEach(textNode => {
    if (linksLeft <= 0) return;
    const original = textNode.nodeValue;
    let replaced = false;
    const fragment = document.createDocumentFragment();
    let remaining = original;

    linkTargets.forEach(({ keyword, targetId }) => {
      if (!remaining || linksLeft <= 0) return;
      const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${escapeRegExp(keyword)})(?=$|[^\\p{L}\\p{N}])`, 'iu');
      const match = remaining.match(pattern);
      if (!match) return;
      replaced = true;
      const idx = match.index || 0;
      const prefix = match[1] || '';
      const phrase = match[2] || '';
      fragment.appendChild(document.createTextNode(remaining.slice(0, idx) + prefix));
      const link = document.createElement('a');
      link.href = `#${targetId}`;
      link.textContent = phrase;
      fragment.appendChild(link);
      remaining = remaining.slice(idx + match[0].length);
      linksLeft -= 1;
    });
    if (replaced) {
      fragment.appendChild(document.createTextNode(remaining));
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  });
}


/* â”€â”€ DostÄ™pnoĹ›Ä‡: czytanie treĹ›ci na gĹ‚os (Web Speech API) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const speechState = {
  synth: window.speechSynthesis || null,
  utterance: null,
  isSpeaking: false,
  autoNext: localStorage.getItem('psyhub-speech-auto-next') === '1',
  voiceMode: localStorage.getItem('psyhub-speech-voice-mode') || 'natural',
  optionsCollapsed: localStorage.getItem('psyhub-speech-options-collapsed') === '1',
};

const SPEECH_VOICE_PRESETS = {
  natural: { label: 'Naturalny', rate: 1.0, pitch: 1.0, boostNatural: 34, boostAlt: 0, boostDefault: 18, preferredNames: ['natural', 'premium', 'neural', 'online'] },
  alt: { label: 'Alternatywny', rate: 0.93, pitch: 1.12, boostNatural: 0, boostAlt: 36, boostDefault: 8, preferredNames: ['alt', 'alternative', 'anna', 'ewa', 'paulina', 'zofia'] },
  calm: { label: 'Spokojny', rate: 0.84, pitch: 0.9, boostNatural: 12, boostAlt: 12, boostDefault: 16, preferredNames: ['calm', 'soft', 'female', 'sandra', 'magda'] },
  dynamic: { label: 'Dynamiczny', rate: 1.18, pitch: 1.12, boostNatural: 26, boostAlt: 10, boostDefault: 12, preferredNames: ['dynamic', 'fast', 'expressive', 'neural', 'online'] },
  deep: { label: 'Niski', rate: 0.8, pitch: 0.74, boostNatural: 10, boostAlt: 8, boostDefault: 14, preferredNames: ['deep', 'male', 'low', 'marek', 'grzegorz', 'jan'] },
};

/* Zwraca aktywny preset gĹ‚osu albo bezpiecznÄ… wartoĹ›Ä‡ domyĹ›lnÄ…, gdy stan jest niepoprawny. */
function getVoicePreset(mode) {
  return SPEECH_VOICE_PRESETS[mode] || SPEECH_VOICE_PRESETS.natural;
}

/* Wybiera najlepszy gĹ‚os dla jÄ™zyka polskiego, preferujÄ…c naturalniejsze gĹ‚osy systemowe. */
function choosePreferredVoice(mode) {
  const preset = getVoicePreset(mode);
  if (!speechState.synth?.getVoices) return null;
  const allVoices = speechState.synth.getVoices();
  const polishVoices = allVoices.filter(v => (v.lang || '').toLowerCase().startsWith('pl'));
  const voices = polishVoices.length ? polishVoices : allVoices;
  if (!voices.length) return null;

  const scored = voices.map((voice, index) => {
    const name = (voice.name || '').toLowerCase();
    const lang = (voice.lang || '').toLowerCase();
    let score = 0;

    if (lang.startsWith('pl')) score += 90;
    if (voice.localService) score += 25;
    if (voice.default) score += 20;

    if (/natural|premium|enhanced|neural|online/.test(name)) score += preset.boostNatural;
    if (/alt|alternative|anna|ewa|marek|paulina|zofia/.test(name)) score += preset.boostAlt;
    if (/default|standard|system/.test(name)) score += preset.boostDefault || 0;
    if (Array.isArray(preset.preferredNames)) {
      preset.preferredNames.forEach(token => {
        if (name.includes(token)) score += 14;
      });
    }
    if (/google|microsoft|apple/.test(name)) score += 10;
    score -= index;

    return { voice, score };
  }).sort((a, b) => b.score - a.score);

  return scored[0]?.voice || null;
}

/* Aktualizuje etykietÄ™ przeĹ‚Ä…cznika stylu gĹ‚osu i stan ARIA. */
function updateVoiceModeButtonState() {
  const voiceModeSelect = document.getElementById('speechVoiceMode');
  if (!voiceModeSelect) return;
  const selectedPreset = getVoicePreset(speechState.voiceMode);
  voiceModeSelect.value = speechState.voiceMode in SPEECH_VOICE_PRESETS ? speechState.voiceMode : 'natural';
  voiceModeSelect.setAttribute('aria-label', `Wybrany styl gĹ‚osu: ${selectedPreset.label}`);
}

/* Zbiera czytelny tekst z gĹ‚Ăłwnego kontenera treĹ›ci, pomijajÄ…c elementy nawigacyjne i dekoracyjne. */
function getReadableContentText() {
  const content = document.getElementById('content');
  if (!content) return '';
  const clone = content.cloneNode(true);
  clone.querySelectorAll('script, style, nav, .article-nav, .pnav, .toc').forEach(node => node.remove());
  return (clone.textContent || '').replace(/\s+/g, ' ').trim();
}

/* Synchronizuje stan wizualny i ARIA przyciskĂłw czytania, aby poprawnie komunikowaÄ‡ aktywnoĹ›Ä‡. */
function updateSpeechButtonState(isSpeaking) {
  const toggleBtn = document.getElementById('speechToggle');
  if (!toggleBtn) return;
  toggleBtn.classList.toggle('is-active', isSpeaking);
  toggleBtn.setAttribute('aria-pressed', isSpeaking ? 'true' : 'false');
  toggleBtn.setAttribute('aria-label', isSpeaking ? 'Wstrzymaj czytanie bieĹĽÄ…cego artykuĹ‚u' : 'Rozpocznij czytanie bieĹĽÄ…cego artykuĹ‚u');
  toggleBtn.textContent = isSpeaking ? 'âŹ¸ Pauza czytania' : 'â–¶ Czytaj artykuĹ‚';
}

/* Aktualizuje przycisk automatycznego przejĹ›cia do kolejnego artykuĹ‚u po zakoĹ„czeniu odczytu. */
function updateAutoNextButtonState() {
  const autoNextBtn = document.getElementById('speechAutoNext');
  if (!autoNextBtn) return;
  autoNextBtn.classList.toggle('is-active', speechState.autoNext);
  autoNextBtn.setAttribute('aria-pressed', speechState.autoNext ? 'true' : 'false');
  autoNextBtn.setAttribute('aria-label', speechState.autoNext
    ? 'Automatyczne przejĹ›cie do kolejnego artykuĹ‚u wĹ‚Ä…czone'
    : 'Automatyczne przejĹ›cie do kolejnego artykuĹ‚u wyĹ‚Ä…czone');
  autoNextBtn.textContent = speechState.autoNext ? 'Auto-next: ON' : 'Auto-next: OFF';
}

/* Steruje widocznoĹ›ciÄ… panelu opcji czytania i aktualizuje semantykÄ™ ARIA przycisku zwijania. */
function updateSpeechOptionsPanelState() {
  const optionsPanel = document.getElementById('speechOptionsPanel');
  const optionsToggleBtn = document.getElementById('speechOptionsToggle');
  if (!optionsPanel || !optionsToggleBtn) return;

  const isCollapsed = speechState.optionsCollapsed;
  optionsPanel.classList.toggle('is-collapsed', isCollapsed);
  optionsToggleBtn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
  optionsToggleBtn.setAttribute('aria-label', isCollapsed
    ? 'RozwiĹ„ panel opcji czytania na gĹ‚os'
    : 'ZwiĹ„ panel opcji czytania na gĹ‚os');
  optionsToggleBtn.textContent = isCollapsed ? 'Opcje â–Ľ' : 'Opcje â–˛';
}

/* Zatrzymuje syntezÄ™ mowy i resetuje lokalny stan czytania. */
function stopReadingContent() {
  if (!speechState.synth) return;
  speechState.isSpeaking = false;
  speechState.synth.cancel();
  speechState.utterance = null;
  updateSpeechButtonState(false);
}

/* Inicjalizuje obsĹ‚ugÄ™ syntezy mowy dla bieĹĽÄ…cej treĹ›ci artykuĹ‚u. */
function setupSpeechControls() {
  const toggleBtn = document.getElementById('speechToggle');
  const stopBtn = document.getElementById('speechStop');
  const autoNextBtn = document.getElementById('speechAutoNext');
  const voiceModeSelect = document.getElementById('speechVoiceMode');
  const optionsToggleBtn = document.getElementById('speechOptionsToggle');
  if (!toggleBtn || !stopBtn || !autoNextBtn || !voiceModeSelect || !optionsToggleBtn) return;

  if (!speechState.synth || typeof SpeechSynthesisUtterance === 'undefined') {
    toggleBtn.disabled = true;
    optionsToggleBtn.disabled = true;
    stopBtn.disabled = true;
    autoNextBtn.disabled = true;
    voiceModeSelect.disabled = true;
    toggleBtn.title = 'PrzeglÄ…darka nie wspiera syntezy mowy';
    return;
  }

  updateAutoNextButtonState();
  updateVoiceModeButtonState();
  updateSpeechOptionsPanelState();

  toggleBtn.addEventListener('click', () => {
    if (speechState.isSpeaking) {
      speechState.synth.pause();
      speechState.isSpeaking = false;
      updateSpeechButtonState(false);
      return;
    }

    if (speechState.synth.paused) {
      speechState.synth.resume();
      speechState.isSpeaking = true;
      updateSpeechButtonState(true);
      return;
    }

    const text = getReadableContentText();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.documentElement.lang || 'pl-PL';
    const selectedVoice = choosePreferredVoice(speechState.voiceMode);
    if (selectedVoice) utterance.voice = selectedVoice;
    const voicePreset = getVoicePreset(speechState.voiceMode);
    utterance.rate = voicePreset.rate;
    utterance.pitch = voicePreset.pitch;

    utterance.onstart = () => {
      speechState.isSpeaking = true;
      updateSpeechButtonState(true);
    };
    utterance.onend = () => {
      speechState.isSpeaking = false;
      speechState.utterance = null;
      updateSpeechButtonState(false);

      /* Po zakoĹ„czeniu odczytu opcjonalnie przechodzimy dalej, jeĹ›li istnieje kolejny artykuĹ‚. */
      if (speechState.autoNext && current) {
        const { next } = prevNext(current);
        if (next?.id) window.setTimeout(() => navigate(next.id), 550);
      }
    };
    utterance.onerror = () => {
      speechState.isSpeaking = false;
      speechState.utterance = null;
      updateSpeechButtonState(false);
    };

    speechState.utterance = utterance;
    speechState.synth.cancel();
    speechState.synth.speak(utterance);
  });

  stopBtn.addEventListener('click', stopReadingContent);
  autoNextBtn.addEventListener('click', () => {
    speechState.autoNext = !speechState.autoNext;
    localStorage.setItem('psyhub-speech-auto-next', speechState.autoNext ? '1' : '0');
    updateAutoNextButtonState();
  });

  voiceModeSelect.addEventListener('change', () => {
    speechState.voiceMode = voiceModeSelect.value;
    localStorage.setItem('psyhub-speech-voice-mode', speechState.voiceMode);
    updateVoiceModeButtonState();

    /* JeĹ›li czytanie trwa, restartujemy je z nowymi parametrami gĹ‚osu. */
    if (speechState.isSpeaking) {
      stopReadingContent();
      toggleBtn.click();
    }
  });

  optionsToggleBtn.addEventListener('click', () => {
    speechState.optionsCollapsed = !speechState.optionsCollapsed;
    localStorage.setItem('psyhub-speech-options-collapsed', speechState.optionsCollapsed ? '1' : '0');
    updateSpeechOptionsPanelState();
  });

  window.addEventListener('hashchange', stopReadingContent);
}

/* â”€â”€ Sidebar mobile â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function openSidebar()  { document.getElementById('sidebar').classList.add('open');  document.getElementById('overlay').classList.add('open'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }

/* Rejestruje globalne akcje UI bez inline handlerĂłw, w tym skrĂłty klawiaturowe. */
function setupGlobalInteractions() {
  const logo = document.getElementById('sidebarLogo');
  const overlay = document.getElementById('overlay');
  const menuBtn = document.getElementById('mobileMenuButton');
  const breadcrumb = document.getElementById('breadcrumb');

  logo?.addEventListener('click', () => navigate(SITE_CONFIG.defaultPage));
  menuBtn?.addEventListener('click', openSidebar);
  overlay?.addEventListener('click', closeSidebar);
  breadcrumb?.addEventListener('click', (event) => {
    const target = event.target.closest('[data-nav-id]');
    if (!target) return;
    event.preventDefault();
    navigate(target.dataset.navId);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSidebar();
  });
}

/* Rejestruje obsĹ‚ugÄ™ wyszukiwania i skrĂłtĂłw filtrĂłw, utrzymujÄ…c stan w pamiÄ™ci i localStorage. */
function setupSearchInteractions() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', (event) => {
    searchUiState.query = event.target.value || '';
    saveSearchUiState();
    void applySearchUi();
  });

  document.getElementById('searchFilterShortcuts')?.addEventListener('click', (event) => {
    const btn = event.target.closest('.s-filter-btn');
    if (!btn) return;
    const key = btn.dataset.filter;
    searchUiState.filters[key] = !searchUiState.filters[key];
    saveSearchUiState();
    void applySearchUi();
  });

  results.addEventListener('click', (event) => {
    const target = event.target.closest('[data-id]');
    if (!target) return;
    trackSearchResultClick();
    navigate(target.dataset.id);
  });
}

/* â”€â”€ Progress bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
window.addEventListener('scroll',()=>{
  const h=document.body.scrollHeight-window.innerHeight;
  document.getElementById('progFill').style.width=(h>0?Math.min(100,window.scrollY/h*100):0)+'%';
});

/* â”€â”€ Anime.js Animations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function animateContentIn() {
  anime({
    targets: '#content .rendered',
    opacity: [0, 1],
    translateY: [18, 0],
    duration: 380,
    easing: 'easeOutQuart'
  });
}

function animateHomeCards() {
  anime({
    targets: '.domain-card',
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(60, { start: 120 }),
    duration: 420,
    easing: 'easeOutQuart'
  });
  anime({
    targets: '.home-hero',
    opacity: [0, 1],
    translateY: [14, 0],
    duration: 480,
    easing: 'easeOutQuart'
  });
  const statEls = document.querySelectorAll('.stat-val');
  statEls.forEach(el => {
    const target = parseInt(el.textContent, 10) || 0;
    el.textContent = '0';
    anime({
      targets: el,
      innerHTML: [0, target],
      round: 1,
      duration: 900,
      delay: 180,
      easing: 'easeOutQuart',
      update() { el.textContent = Math.round(parseFloat(el.textContent)); }
    });
  });
}

function animateWikiIn() {
  anime({
    targets: '.wiki-sec',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(80, { start: 80 }),
    duration: 400,
    easing: 'easeOutQuart'
  });
  anime({
    targets: '.wiki-hdr',
    opacity: [0, 1],
    translateY: [14, 0],
    duration: 420,
    easing: 'easeOutQuart'
  });
}

function animateSidebar() {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    anime({
      targets: '.sidebar',
      translateX: [-20, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutQuart'
    });
  }
  anime({
    targets: '.s-logo',
    opacity: [0, 1],
    translateY: [-8, 0],
    duration: 400,
    delay: 100,
    easing: 'easeOutBack'
  });
  anime({
    targets: '.nav-group',
    opacity: [0, 1],
    translateX: [-12, 0],
    delay: anime.stagger(30, { start: 200 }),
    duration: 350,
    easing: 'easeOutQuart'
  });
}


/* â”€â”€ Mobilne przypomnienia o ciekawostkach psychologicznych â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const REMINDER_FACTS_URL = 'data_psychology_reminders.json';
let reminderFactsCache = null;
let reminderTimerId = null;

/* Pobiera listÄ™ ciekawostek naukowych z pliku JSON i buforuje wynik. */
async function loadReminderFacts() {
  if (reminderFactsCache) return reminderFactsCache;
  const response = await fetch(REMINDER_FACTS_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error('Nie udaĹ‚o siÄ™ pobraÄ‡ listy ciekawostek.');
  const payload = await response.json();
  const facts = Array.isArray(payload?.facts) ? payload.facts : [];
  reminderFactsCache = facts.filter(item => item?.title && item?.message);
  return reminderFactsCache;
}

const REMINDER_LAST_SENT_KEY = 'psyhub-last-reminder-date';
const REMINDER_PERMISSION_PROMPT_KEY = 'psyhub-reminder-permission-prompt-shown';

/* Zwraca datÄ™ lokalnÄ… w formacie YYYY-MM-DD (bez ryzyka przesuniÄ™cia przez UTC). */
function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/* Losuje ciekawostkÄ™ dnia na podstawie bieĹĽÄ…cej puli. */
function pickRandomReminderFact(facts) {
  if (!Array.isArray(facts) || facts.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex] || facts[0];
}

/* Oblicza czas do kolejnego uruchomienia przypomnienia (nastÄ™pna 08:00 czasu lokalnego). */
function getDelayUntilNextReminder(now = new Date()) {
  const next = new Date(now);
  const hasReachedMorningReminder = now.getHours() >= 8;

  if (hasReachedMorningReminder) {
    next.setDate(next.getDate() + 1);
  }

  next.setHours(8, 0, 0, 0);
  return Math.max(0, next.getTime() - now.getTime());
}

/* WyĹ›wietla mobilne powiadomienie z naukowÄ… ciekawostkÄ… psychologicznÄ…. */
async function showPsychologyReminderNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const todayKey = getLocalDateKey(new Date());
  const lastSentDate = localStorage.getItem(REMINDER_LAST_SENT_KEY);

  /* Blokada wielokrotnej wysyĹ‚ki tego samego dnia (np. po odĹ›wieĹĽeniach karty). */
  if (lastSentDate === todayKey) return;

  const facts = await loadReminderFacts();
  const fact = pickRandomReminderFact(facts);
  if (!fact) return;

  const sourceSuffix = fact.source ? `
ĹąrĂłdĹ‚o: ${fact.source}` : '';
  new Notification(`đź§  ${fact.title}`, {
    body: `${fact.message}${sourceSuffix}`,
    tag: `psyhub-fact-${todayKey}`,
    renotify: false
  });

  /* Zapis daty wykonujemy dopiero po utworzeniu powiadomienia. */
  localStorage.setItem(REMINDER_LAST_SENT_KEY, todayKey);
}

/* Planuje kolejne przypomnienie; po wysĹ‚aniu ustawia harmonogram na nastÄ™pny dzieĹ„. */
function scheduleNextPsychologyReminder() {
  window.clearTimeout(reminderTimerId);
  const delay = getDelayUntilNextReminder(new Date());
  reminderTimerId = window.setTimeout(async () => {
    await showPsychologyReminderNotification();
    scheduleNextPsychologyReminder();
  }, delay);
}


/*
 * Buduje przyjazny komunikat wyjaĹ›niajÄ…cy korzyĹ›ci z wĹ‚Ä…czenia powiadomieĹ„.
 * Zwraca wartoĹ›Ä‡ true, gdy uĹĽytkownik chce przejĹ›Ä‡ do systemowego okna zgody.
 */
function shouldAskForReminderPermission() {
  const promptAlreadyShown = localStorage.getItem(REMINDER_PERMISSION_PROMPT_KEY) === '1';
  if (promptAlreadyShown) return false;

  const userAcceptedPrompt = window.confirm(
    'Czy chcesz wĹ‚Ä…czyÄ‡ codzienne powiadomienia PsyHub?\n\n' +
    'BÄ™dziesz otrzymywaÄ‡ jednÄ…, losowÄ… ciekawostkÄ™ psychologicznÄ… kaĹĽdego dnia o 08:00.'
  );

  localStorage.setItem(REMINDER_PERMISSION_PROMPT_KEY, '1');
  return userAcceptedPrompt;
}

/* Inicjalizuje przypomnienia wyĹ‚Ä…cznie na urzÄ…dzeniach mobilnych. */
async function initMobilePsychologyReminders() {
  const isMobileViewport = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  if (!isMobileViewport || !('Notification' in window)) return;

  if (Notification.permission === 'default') {
    if (!shouldAskForReminderPermission()) return;

    try {
      await Notification.requestPermission();
    } catch (_) {
      return;
    }
  }

  if (Notification.permission !== 'granted') return;
  scheduleNextPsychologyReminder();
}

/* â”€â”€ Boot â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
window.addEventListener('DOMContentLoaded', ()=>{
  /* Wczesna walidacja konfiguracji uĹ‚atwia wychwycenie brakĂłw podczas uruchomienia aplikacji. */
  warnAboutMissingDomainKeys();
  runMeasurementToolsConfigValidation({ strict: false });
  buildPageMap();
  pageMap.set('__home__',{id:'__home__',label:'Strona gĹ‚Ăłwna',section:''});
  loadSearchUiState();
  rebuildSearchIndex();
  renderSidebar();
  setupSidebarInteractions();
  setupSearchInteractions();
  void applySearchUi();
  void ensureFullTextSearchIndex();
  setupGlobalInteractions();
  setupSpeechControls();
  void initMobilePsychologyReminders();
  animateSidebar();
  const { pageId } = parseRouteHash(window.location.hash);
  navigate(pageId && pageMap.has(pageId) ? pageId : SITE_CONFIG.defaultPage, true);
});

/* â”€â”€ Theme switcher â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
(function() {
  const DEFAULT_THEME = 'dark';
  const THEMES = [DEFAULT_THEME, 'light', 'sepia', 'ocean', 'forest', 'sunset'];
  const stored = localStorage.getItem('psyhub-theme') || DEFAULT_THEME;
  const active  = THEMES.includes(stored) ? stored : DEFAULT_THEME;
  const DEFAULT_FONT_SCALE = 'normal';
  const FONT_SCALES = [DEFAULT_FONT_SCALE, 'large', 'xlarge'];
  const storedFontScale = localStorage.getItem('psyhub-font-scale') || DEFAULT_FONT_SCALE;
  const activeFontScale = FONT_SCALES.includes(storedFontScale) ? storedFontScale : DEFAULT_FONT_SCALE;

  function themeAttr(theme) { return theme === DEFAULT_THEME ? '' : theme; }
  /* Ustawia atrybut skali czcionki i zapamiÄ™tuje wybĂłr uĹĽytkownika w localStorage. */
  function applyFontScale(scale) {
    if (scale === DEFAULT_FONT_SCALE) {
      delete document.documentElement.dataset.fontScale;
    } else {
      document.documentElement.dataset.fontScale = scale;
    }
    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.fontScale === scale);
    });
    localStorage.setItem('psyhub-font-scale', scale);
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = themeAttr(theme);
    /* Synchronizuje stan aktywnoĹ›ci motywĂłw dla stylowania i czytnikĂłw ekranu. */
    document.querySelectorAll('.theme-btn').forEach(btn => {
      const isActive = btn.dataset.theme === theme;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    localStorage.setItem('psyhub-theme', theme);
  }

  // Apply immediately (before DOMContentLoaded to avoid flash)
  document.documentElement.dataset.theme = themeAttr(active);
  if (activeFontScale !== DEFAULT_FONT_SCALE) {
    document.documentElement.dataset.fontScale = activeFontScale;
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Sync button states
    document.querySelectorAll('.theme-btn').forEach(btn => {
      const isActive = btn.dataset.theme === active;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
    });
    /* Rejestruje zmianÄ™ wielkoĹ›ci czcionki i odtwarza aktywny stan przyciskĂłw. */
    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.fontScale === activeFontScale);
      btn.addEventListener('click', () => applyFontScale(btn.dataset.fontScale));
    });
  });
})();

window.addEventListener('popstate', e => {
  const { pageId } = parseRouteHash(window.location.hash);
  const id = e.state?.id || pageId || SITE_CONFIG.defaultPage;
  navigate(pageMap.has(id) ? id : SITE_CONFIG.defaultPage, true);
});

window.addEventListener('hashchange', () => {
  const { pageId, sectionId } = parseRouteHash(window.location.hash);
  const id = pageId || SITE_CONFIG.defaultPage;
  if (id !== current && pageMap.has(id)) {
    navigate(id, true);
    return;
  }
  if (id === current && sectionId && articleTocCurrentPageId === current) {
    scrollToArticleSection(sectionId);
  }
});


