'use client';

import { useEffect, useState } from 'react';
import i18n from '../../i18n/i18next';
import { resolveAppLanguage } from '../../i18n/resolveAppLanguage';

export default function LanguageSwitcher() {
  const [active, setActive] = useState<'es' | 'en'>('en');

  useEffect(() => {
    const initial = resolveAppLanguage();
    i18n.changeLanguage(initial);
    setActive(initial);
  }, []);

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
    setActive(lng);
    localStorage.setItem('immc-lang', lng);
  };

  return (
    <div
      className="font-ui inline-flex items-center gap-0.5 rounded-full border border-line bg-surface-strong p-1 text-xs"
      role="group"
      aria-label="Language"
    >
      {(['es', 'en'] as const).map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => changeLanguage(lng)}
          className={`rounded-full px-2.5 py-1.5 font-semibold uppercase tracking-wide transition ${
            active === lng
              ? 'bg-plum text-white shadow-soft'
              : 'text-muted hover:text-plum'
          }`}
          aria-pressed={active === lng}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
