/*
 * app-md-loader.js
 *
 * Nadpisuje wyłącznie loader artykułów Markdown, bez monkey-patchowania
 * globalnego window.fetch. Dzięki temu fallback raw.githubusercontent.com dotyczy
 * tylko artykułów .md używanych przez PsyHub.
 */
(function setupArticleMarkdownLoader() {
  const RAW_BASE_URL = 'https://raw.githubusercontent.com/MatPomGit/PsyHub/main/';

  function normalizeArticlePath(rawPath) {
    // Usuwamy query/hash, bo ścieżki z parametrami (np. ?raw=1)
    // psuły wykrywanie rozszerzenia .md i blokowały fallback do RAW.
    const withoutQueryOrHash = String(rawPath || '').split('#')[0].split('?')[0];
    return withoutQueryOrHash
      .trim()
      .replace(/\\/g, '/')
      .replace(/^\.\//, '')
      .replace(/^\/+/, '')
      .replace(/^PsyHub\//i, '')
      .replace(/^blob\/main\//i, '')
      .replace(/^raw\/main\//i, '')
      .replace(/\/{2,}/g, '/');
  }

  function buildLocalCandidates(filePath) {
    const normalized = normalizeArticlePath(filePath);
    return [
      normalized,
      normalized ? `./${normalized}` : '',
      normalized ? encodeURI(normalized) : '',
      normalized ? `./${encodeURI(normalized)}` : '',
    ].filter(Boolean);
  }

  function buildRawCandidate(filePath) {
    const normalized = normalizeArticlePath(filePath);
    if (!normalized || !/\.md$/i.test(normalized)) return null;
    return RAW_BASE_URL + normalized.split('/').map(encodeURIComponent).join('/');
  }

  async function fetchTextCandidate(candidate) {
    const response = await fetch(candidate, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} for ${candidate}`);
    }
    return { text: await response.text(), resolvedPath: candidate };
  }

  window.fetchArticleMarkdown = async function fetchArticleMarkdownWithRawFallback(filePath) {
    const normalized = normalizeArticlePath(filePath);
    const candidates = [...new Set([...buildLocalCandidates(normalized), buildRawCandidate(normalized)].filter(Boolean))];
    let lastError = null;

    for (const candidate of candidates) {
      try {
        return await fetchTextCandidate(candidate);
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error(`Nie udało się pobrać pliku: ${normalized}`);
  };

})();
