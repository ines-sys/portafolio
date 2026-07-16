'use client';

import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeProvider';
import { IconMoon, IconSun } from '../Icons';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle font-ui inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface-strong text-plum transition hover:border-plum-mid/40 hover:shadow-soft"
      aria-label={isDark ? t('theme_light') : t('theme_dark')}
      title={isDark ? t('theme_light') : t('theme_dark')}
    >
      {isDark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
    </button>
  );
}
