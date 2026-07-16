'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18next';
import { resolveAppLanguage } from '../../i18n/resolveAppLanguage';

function IconGear({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.39 1.26 1 1.51H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function SettingsMenu() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('en');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initial = resolveAppLanguage();
    setLang(initial);
    i18n.changeLanguage(initial);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem('immc-lang', lng);
  };

  return (
    <div className="relative z-50" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="font-ui inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface-strong px-3 text-xs font-semibold uppercase tracking-wide text-plum transition hover:border-accent"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t('settings_title')}
      >
        <IconGear />
        <span className="hidden sm:inline">{t('settings_title')}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-surface-strong p-3 shadow-soft backdrop-blur-md"
        >
          <p className="font-ui mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted">
            {t('settings_language')}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {(['es', 'en'] as const).map((lng) => (
              <button
                key={lng}
                type="button"
                role="menuitemradio"
                aria-checked={lang === lng}
                onClick={() => changeLanguage(lng)}
                className={`font-ui rounded-xl px-2 py-2 text-xs font-bold uppercase transition ${
                  lang === lng
                    ? 'bg-accent-deep text-white'
                    : 'bg-surface text-muted hover:text-plum'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
          <p className="font-ui mt-3 px-1 text-[10px] leading-snug text-muted">
            {t('settings_lamp_hint')}
          </p>
        </div>
      )}
    </div>
  );
}
