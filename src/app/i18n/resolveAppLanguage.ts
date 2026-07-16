export type AppLang = 'es' | 'en';

/**
 * Prefer saved preference; otherwise match the browser/OS language.
 */
export function resolveAppLanguage(): AppLang {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('immc-lang');
  if (stored === 'en' || stored === 'es') return stored;

  const nav = (
    navigator.language ||
    navigator.languages?.[0] ||
    'en'
  ).toLowerCase();

  return nav.startsWith('es') ? 'es' : 'en';
}
