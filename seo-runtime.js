/*
 * seo-runtime.js
 *
 * Uzupełnia metadane SPA bez ingerowania w routing app.js. Obserwuje zmianę
 * treści w głównym kontenerze i aktualizuje title, description oraz Open Graph
 * na podstawie aktualnie wyrenderowanego artykułu.
 */
(function setupSeoRuntime() {
  const DEFAULT_TITLE = 'PsyHub - Portal Wiedzy Psychologicznej';
  const DEFAULT_DESCRIPTION = 'PsyHub - portal wiedzy psychologicznej z artykułami, testami i materiałami edukacyjnymi.';

  function ensureMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      document.head.appendChild(element);
    }
    return element;
  }

  function ensureLink(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('link');
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      document.head.appendChild(element);
    }
    return element;
  }

  function buildCanonicalUrl() {
    const url = new URL(window.location.href);
    const articleId = url.hash.slice(1);
    const entries = (window.SITE_CONFIG?.nav || []).flatMap(section => section.items || []);
    const article = entries.find(entry => entry.id === articleId);

    url.hash = '';
    if (!article?.file) return url.href;

    const siteRoot = new URL('.', url);
    return new URL(article.file.replace(/\.md$/i, '.html'), siteRoot).href;
  }

  function cleanText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function buildDescription(root) {
    const lead = cleanText(root.querySelector('.lead')?.textContent);
    if (lead) return lead.slice(0, 160);

    const firstParagraph = cleanText(root.querySelector('.md p')?.textContent || root.querySelector('.daily-card-lead')?.textContent);
    if (firstParagraph) return firstParagraph.slice(0, 160);

    return DEFAULT_DESCRIPTION;
  }

  function updateSeo() {
    const content = document.getElementById('content');
    if (!content) return;

    const titleText = cleanText(
      content.querySelector('.page-hero h1')?.textContent ||
      content.querySelector('h1')?.textContent
    );
    const title = titleText ? `${titleText} - PsyHub` : DEFAULT_TITLE;
    const description = buildDescription(content);
    const canonicalUrl = buildCanonicalUrl();

    document.title = title;
    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', canonicalUrl);
    ensureLink('link[rel="canonical"]', { rel: 'canonical' }).setAttribute('href', canonicalUrl);
  }

  function startObserver() {
    const content = document.getElementById('content');
    if (!content) return;
    updateSeo();
    const observer = new MutationObserver(() => updateSeo());
    observer.observe(content, { childList: true, subtree: true });
    window.addEventListener('popstate', updateSeo);
    window.addEventListener('hashchange', updateSeo);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver, { once: true });
  } else {
    startObserver();
  }
})();
