'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Trans, useTranslation } from 'react-i18next';
import type { ReactNode } from 'react';
import FrameImage from '../common/FrameImage';
import SocialContact from '../SocialContact';
import ScrollProgress from '../ScrollProgress';
import AmbientCorner from '../AmbientCorner';
import ShelfBackdrop from '../ShelfBackdrop';
import LanguageBootstrap from '../LanguageBootstrap';
import {
  IconArrowUp,
  IconBriefcase,
  IconFolder,
  IconMic,
  IconSpark,
} from '../Icons';

const profileImage = {
  src: 'https://ines-sys.github.io/portafolio/img/ines_profile_photo.jpg',
  alt: 'Inés María Montero Concepción',
  height: 120,
  width: 120,
};

const NAV = [
  { href: '/', key: 'experience', Icon: IconBriefcase },
  { href: '/projects', key: 'projects', Icon: IconFolder },
  { href: '/skills', key: 'skills', Icon: IconSpark },
  { href: '/talks', key: 'talks', Icon: IconMic },
] as const;

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname?.startsWith(href);
  };

  return (
    <>
      <div className="site-atmosphere" aria-hidden />
      <div className="site-grain" aria-hidden />
      <LanguageBootstrap />
      <ShelfBackdrop />
      <AmbientCorner />
      <ScrollProgress />

      <div
        id="top"
        className="site-content relative z-10 mx-auto min-h-screen max-w-5xl px-5 pb-24 pt-6 md:px-8 lg:pb-28 lg:pt-8"
      >
        <div className="site-nav-bar mb-8 md:pr-36 lg:pr-48">
          <nav className="site-nav-pills font-ui" aria-label="Portfolio">
            {NAV.map(({ href, key, Icon }) => (
              <Link
                key={href}
                href={href}
                className={`site-nav-item ${isActive(href) ? 'is-active' : ''}`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="site-nav-label">{t(`nav.${key}`)}</span>
              </Link>
            ))}
          </nav>
        </div>

        <header
          id="profile-intro"
          className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <FrameImage
            {...profileImage}
            className="profile-glow shrink-0 rounded-full object-cover"
          />
          <div className="site-text-panel site-text-panel--block min-w-0 flex-1">
            <p className="font-ui mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {t('profile_welcome')}
            </p>
            <h1 className="font-display text-[clamp(2rem,5vw,2.85rem)] font-extrabold leading-[1] tracking-tight text-plum">
              {t('profile_name')}
            </h1>
            <div className="mt-3 space-y-0.5 font-ui text-sm text-muted">
              <p>{t('profile_role_1')}</p>
              <p>{t('profile_role_4')}</p>
              <p className="text-accent">{t('profile_role_2')}</p>
              <p className="text-accent">{t('profile_role_3')}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t('hero_supporting')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <Trans
                i18nKey="profile_description"
                values={{ book: t('book_lover') }}
                components={{
                  highlight: <span className="highlight-wavy" />,
                }}
              />
            </p>
            <div className="mt-5">
              <SocialContact />
            </div>
          </div>
        </header>

        <main id="main" className="site-main">{children}</main>

        <footer className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-8 text-center">
          <div className="site-text-panel text-center">
            <p className="text-sm italic text-muted">{t('footer_quote')}</p>
            <p className="font-ui mt-2 text-[10px] uppercase tracking-wider text-muted">
              © {new Date().getFullYear()} {t('profile_full_name')}
            </p>
          </div>
          <a
            href="#top"
            className="go-up-btn font-ui inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-plum transition hover:border-accent hover:text-accent"
          >
            <IconArrowUp className="h-3.5 w-3.5" />
            {t('back_to_top')}
          </a>
        </footer>
      </div>
    </>
  );
}
