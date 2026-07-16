'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';
import {
  IconUser,
  IconBriefcase,
  IconSpark,
  IconFolder,
  IconMail,
} from '../Icons';

const SECTIONS = [
  { id: 'about', Icon: IconUser },
  { id: 'experience', Icon: IconBriefcase },
  { id: 'skills', Icon: IconSpark },
  { id: 'projects', Icon: IconFolder },
  { id: 'contact', Icon: IconMail },
] as const;

export default function SiteNav() {
  const { t } = useTranslation();
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const positions = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });

      positions.sort((a, b) => a.top - b.top);
      if (positions[0]) setActive(positions[0].id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`site-nav fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-display group flex items-center gap-2 text-lg font-extrabold tracking-tight text-plum transition hover:text-accent"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-deep to-[#e879f9] text-sm text-white shadow-glow transition group-hover:rotate-6">
            IM
          </span>
          <span className="hidden sm:inline">Inés</span>
        </a>

        <nav className="hidden items-center gap-6 font-ui text-sm lg:flex" aria-label="Principal">
          {SECTIONS.map(({ id, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'is-active' : ''}`}
            >
              <Icon className="h-3.5 w-3.5 opacity-70" />
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            className="font-ui flex h-10 w-10 items-center justify-center rounded-xl border border-line text-plum lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t('nav.close') : t('nav.open')}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t('nav.close') : t('nav.open')}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-surface-strong px-5 py-4 font-ui lg:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-2">
            {SECTIONS.map(({ id, Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-base ${
                    active === id
                      ? 'bg-accent-soft font-semibold text-plum'
                      : 'text-muted hover:bg-surface'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
