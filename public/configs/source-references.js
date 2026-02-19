/**
 * Canonical content references for lesson and informational material.
 * These are merged into lesson configs at runtime so individual lesson
 * files do not need repetitive boilerplate blocks.
 */

export const CANONICAL_SOURCE_REFERENCES = [
  {
    key: 'aes',
    name: 'AES (Audio Engineering Society)',
    url: 'https://www.aes.org/',
    usage: 'Audio engineering standards, terminology, and critical-listening practices'
  },
  {
    key: 'ableton',
    name: 'Ableton Live Documentation',
    url: 'https://www.ableton.com/en/manual/',
    usage: 'DAW workflows, practical production steps, and implementation guidance'
  },
  {
    key: 'wikipedia',
    name: 'Wikipedia',
    url: 'https://www.wikipedia.org/',
    usage: 'Neutral historical context and foundational theory summaries'
  }
];

export function mergeSourceReferences(configReferences = []) {
  const normalized = Array.isArray(configReferences) ? configReferences : [];

  const hasByKeyOrUrl = (candidate) =>
    normalized.some((ref) => ref?.key === candidate.key || ref?.url === candidate.url);

  const merged = [...normalized];
  for (const canonicalRef of CANONICAL_SOURCE_REFERENCES) {
    if (!hasByKeyOrUrl(canonicalRef)) {
      merged.push(canonicalRef);
    }
  }

  return merged;
}
