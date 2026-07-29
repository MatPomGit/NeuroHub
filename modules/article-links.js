(function registerArticleLinks(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.PsyHubArticleLinks = api;
  }
})(typeof window !== 'undefined' ? window : globalThis, function createArticleLinksApi() {
  'use strict';

  function normalizeTerm(value) {
    return String(value || '')
      .toLocaleLowerCase('pl')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function buildCanonicalTopicIndex(entries) {
    const byTerm = new Map();
    const ambiguous = new Set();

    (entries || []).forEach(entry => {
      if (!entry || !entry.id || !entry.label) return;
      const terms = [entry.label, ...(Array.isArray(entry.aliases) ? entry.aliases : [])];

      terms.forEach(rawTerm => {
        const term = String(rawTerm || '').trim();
        const normalized = normalizeTerm(term);
        if (normalized.length < 3) return;

        const existing = byTerm.get(normalized);
        if (existing && existing.id !== entry.id) {
          ambiguous.add(normalized);
          return;
        }
        if (!existing) {
          byTerm.set(normalized, { term, id: entry.id, file: entry.file || '' });
        }
      });
    });

    ambiguous.forEach(term => byTerm.delete(term));
    return Array.from(byTerm.values()).sort((left, right) => right.term.length - left.term.length);
  }

  function findFirstMatch(text, topics, excludedIds) {
    let best = null;

    topics.forEach(topic => {
      if (excludedIds.has(topic.id)) return;
      const pattern = new RegExp(
        `(^|[^\\p{L}\\p{N}])(${escapeRegExp(topic.term)})(?=$|[^\\p{L}\\p{N}])`,
        'iu'
      );
      const match = pattern.exec(text);
      if (!match) return;

      const start = match.index + (match[1] || '').length;
      const candidate = {
        ...topic,
        start,
        end: start + match[2].length,
        text: match[2],
      };
      if (!best || candidate.start < best.start
        || (candidate.start === best.start && candidate.text.length > best.text.length)) {
        best = candidate;
      }
    });

    return best;
  }

  function isExcludedNode(node) {
    let element = node.parentElement;
    while (element) {
      if (['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  function linkCanonicalTopics(container, currentId, entries, options = {}) {
    if (!container || typeof document === 'undefined' || typeof NodeFilter === 'undefined') return 0;

    const topics = buildCanonicalTopicIndex(entries);
    const maxLinks = Number.isFinite(options.maxLinks) ? Math.max(0, options.maxLinks) : 12;
    const hrefForId = typeof options.hrefForId === 'function'
      ? options.hrefForId
      : id => `#${id}`;
    const linkedIds = new Set([currentId]);
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim() || isExcludedNode(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    let linkCount = 0;
    textNodes.forEach(textNode => {
      if (linkCount >= maxLinks) return;
      let remaining = textNode.nodeValue;
      let match = findFirstMatch(remaining, topics, linkedIds);
      if (!match) return;

      const fragment = document.createDocumentFragment();
      while (match && linkCount < maxLinks) {
        fragment.appendChild(document.createTextNode(remaining.slice(0, match.start)));
        const link = document.createElement('a');
        link.href = hrefForId(match.id, match);
        link.textContent = match.text;
        fragment.appendChild(link);
        linkedIds.add(match.id);
        linkCount += 1;
        remaining = remaining.slice(match.end);
        match = findFirstMatch(remaining, topics, linkedIds);
      }
      fragment.appendChild(document.createTextNode(remaining));
      textNode.parentNode.replaceChild(fragment, textNode);
    });

    return linkCount;
  }

  return {
    buildCanonicalTopicIndex,
    findFirstMatch,
    linkCanonicalTopics,
    normalizeTerm,
  };
});
