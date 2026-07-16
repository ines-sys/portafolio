'use client';

import { useEffect } from 'react';
import i18n from '../../i18n/i18next';
import { resolveAppLanguage } from '../../i18n/resolveAppLanguage';

/**
 * Applies saved or system language after hydration to avoid SSR mismatches.
 */
export default function LanguageBootstrap() {
  useEffect(() => {
    const lang = resolveAppLanguage();
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return null;
}
