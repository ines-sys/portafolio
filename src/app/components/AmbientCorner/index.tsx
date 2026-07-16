'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18next';
import { resolveAppLanguage } from '../../i18n/resolveAppLanguage';
import { useTheme } from '../ThemeProvider';

/**
 * Room corner: geometric hanging lamp (theme) + olive sofa with books (language).
 * On mobile, hides when scrolling down past the profile intro; returns on scroll up.
 */
export default function AmbientCorner() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isOn = theme === 'light';
  const [lang, setLang] = useState<'es' | 'en'>('en');
  const [scrollHidden, setScrollHidden] = useState(false);

  useEffect(() => {
    const initial = resolveAppLanguage();
    i18n.changeLanguage(initial);
    setLang(initial);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    let lastY = window.scrollY;

    const update = () => {
      if (!mq.matches) {
        setScrollHidden(false);
        return;
      }

      const intro = document.getElementById('profile-intro');
      const introEnd = intro
        ? intro.offsetTop + intro.offsetHeight - 48
        : 420;
      const y = window.scrollY;
      const pastIntro = y > introEnd;

      if (!pastIntro) {
        setScrollHidden(false);
      } else if (y > lastY + 6) {
        setScrollHidden(true);
      } else if (y < lastY - 6) {
        setScrollHidden(false);
      }

      lastY = y;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    mq.addEventListener('change', update);
    return () => {
      window.removeEventListener('scroll', update);
      mq.removeEventListener('change', update);
    };
  }, []);

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem('immc-lang', lng);
  };

  return (
    <div
      className={`ambient-corner ${isOn ? 'is-on' : 'is-off'}${
        scrollHidden ? ' is-scroll-hidden' : ''
      }`}
    >
      <div className="lamp-wash" aria-hidden />

      <div className="ambient-stack">
        <button
          type="button"
          className="lamp-hitbox"
          onClick={toggleTheme}
          aria-pressed={isOn}
          aria-label={isOn ? t('theme_dark') : t('theme_light')}
          title={isOn ? t('lamp_turn_off') : t('lamp_turn_on')}
        >
          {/* Geometric wireframe pendant (diamond cage) */}
          <svg
            className="lamp-drawing"
            viewBox="0 0 100 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {/* Cord */}
            <line x1="50" y1="0" x2="50" y2="28" className="lamp-cord" strokeWidth="1.6" strokeLinecap="round" />
            {/* Cap */}
            <path d="M44 28 H56 V32 H44 Z" className="lamp-metal" />
            <ellipse cx="50" cy="28" rx="5" ry="2" className="lamp-metal" />

            {/* Soft pastel geometry (reference accents) */}
            <rect x="14" y="40" width="7" height="22" rx="1" className="lamp-pastel-salmon" />
            <circle cx="82" cy="44" r="5" className="lamp-pastel-blue" />
            <rect x="76" y="90" width="12" height="8" rx="1" className="lamp-pastel-yellow" />
            <circle cx="50" cy="70" r="28" className="lamp-accent" />

            {/* Diamond/wire cage */}
            <g className="lamp-cage">
              <path
                d="M50 34 L72 62 L50 110 L28 62 Z"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M28 62 H72" strokeWidth="1.4" />
              <path d="M50 34 L50 62" strokeWidth="1.3" />
              <path d="M50 34 L40 62" strokeWidth="1.2" />
              <path d="M50 34 L60 62" strokeWidth="1.2" />
              <path d="M50 62 L50 110" strokeWidth="1.3" />
              <path d="M40 62 L50 110" strokeWidth="1.2" />
              <path d="M60 62 L50 110" strokeWidth="1.2" />
              <path d="M28 62 L50 87" strokeWidth="1.1" />
              <path d="M72 62 L50 87" strokeWidth="1.1" />
              <path
                d="M50 47 L62 62 L50 87 L38 62 Z"
                strokeWidth="1.2"
                strokeLinejoin="round"
                opacity="0.85"
              />
            </g>

            {/* Edison bulb */}
            <g className="lamp-bulb-group">
              <rect x="46.5" y="50" width="7" height="5" rx="0.8" className="lamp-metal" />
              <path
                d="M47 55 Q47 60 50 64 Q53 60 53 55 Z"
                className="lamp-bulb"
              />
              <ellipse cx="50" cy="58" rx="4.2" ry="5.5" className="lamp-bulb" />
              <path d="M48 58 Q50 61 52 58" className="lamp-filament" strokeWidth="0.9" fill="none" />
            </g>

            {/* Short light cone — sits closer to the sofa */}
            <path d="M40 110 L28 146 H72 L60 110 Z" className="lamp-cone" />
          </svg>
        </button>

        <div className="sofa-scene" role="group" aria-label={t('settings_language')}>
          {/* Chesterfield con más relieve */}
          <svg
            className="sofa-drawing"
            viewBox="0 0 220 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="sofaBodyGrad" x1="110" y1="16" x2="110" y2="108" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7a8650" />
                <stop offset="55%" stopColor="#616c40" />
                <stop offset="100%" stopColor="#4a5430" />
              </linearGradient>
              <linearGradient id="sofaArmGradL" x1="30" y1="45" x2="58" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8a965c" />
                <stop offset="45%" stopColor="#657044" />
                <stop offset="100%" stopColor="#3f4828" />
              </linearGradient>
              <linearGradient id="sofaArmGradR" x1="190" y1="45" x2="162" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8a965c" />
                <stop offset="45%" stopColor="#657044" />
                <stop offset="100%" stopColor="#3f4828" />
              </linearGradient>
              <linearGradient id="sofaCushGrad" x1="0" y1="82" x2="0" y2="101" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8e9a62" />
                <stop offset="40%" stopColor="#748250" />
                <stop offset="100%" stopColor="#4e5832" />
              </linearGradient>
              <radialGradient id="sofaQuiltShade" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,220,0.18)" />
                <stop offset="55%" stopColor="rgba(40,48,20,0.08)" />
                <stop offset="100%" stopColor="rgba(20,26,10,0.35)" />
              </radialGradient>
            </defs>

            <ellipse cx="110" cy="122" rx="90" ry="4.5" className="sofa-shadow" />

            {/* Cuerpo único */}
            <path
              className="sofa-body"
              fill="url(#sofaBodyGrad)"
              d="M34 102
                 C34 105, 40 108, 48 108
                 H172
                 C180 108, 186 105, 186 102
                 V82
                 C190 76, 192 66, 188 56
                 C182 42, 168 36, 156 40
                 C150 24, 132 16, 110 16
                 C88 16, 70 24, 64 40
                 C52 36, 38 42, 32 56
                 C28 66, 30 76, 34 82
                 Z"
            />

            {/* Hueco / cojines del respaldo — más presentes */}
            <path
              className="sofa-back-cushion"
              d="M58 82
                 C60 48, 78 30, 110 30
                 C142 30, 160 48, 162 82
                 Z"
            />
            <path
              fill="url(#sofaQuiltShade)"
              d="M58 82
                 C60 48, 78 30, 110 30
                 C142 30, 160 48, 162 82
                 Z"
              opacity="0.7"
            />
            {/* División de los dos cojines traseros */}
            <path className="sofa-back-seam" d="M110 32 V82" strokeWidth="2.2" />
            {/* Contorno del respaldo para separarlo de los brazos */}
            <path
              className="sofa-back-outline"
              d="M58 82
                 C60 48, 78 30, 110 30
                 C142 30, 160 48, 162 82"
              strokeWidth="2"
            />

            {/* Brazos enrollados — silueta completa y clara */}
            <path
              className="sofa-arm-fill"
              fill="url(#sofaArmGradL)"
              d="M34 102
                 V82
                 C28 70, 27 56, 34 46
                 C42 34, 56 34, 64 44
                 C60 54, 58 68, 58 82
                 V102
                 C50 102, 40 102, 34 102 Z"
            />
            <path
              className="sofa-arm-fill"
              fill="url(#sofaArmGradR)"
              d="M186 102
                 V82
                 C192 70, 193 56, 186 46
                 C178 34, 164 34, 156 44
                 C160 54, 162 68, 162 82
                 V102
                 C170 102, 180 102, 186 102 Z"
            />
            {/* Línea continua del brazo (roll completo) */}
            <path
              className="sofa-arm-line"
              d="M58 102
                 V82
                 C58 68, 60 54, 64 44
                 C56 34, 42 34, 34 46
                 C27 56, 28 70, 34 82
                 V102"
              strokeWidth="2.4"
            />
            <path
              className="sofa-arm-line"
              d="M162 102
                 V82
                 C162 68, 160 54, 156 44
                 C164 34, 178 34, 186 46
                 C193 56, 192 70, 186 82
                 V102"
              strokeWidth="2.4"
            />
            {/* Brillo del roll */}
            <ellipse cx="42" cy="50" rx="8" ry="10" className="sofa-arm-hi" />
            <ellipse cx="178" cy="50" rx="8" ry="10" className="sofa-arm-hi" />
            {/* Línea interior que separa brazo del espaldar */}
            <path className="sofa-arm-divider" d="M58 42 C56 55, 56 70, 58 102" strokeWidth="2.6" />
            <path className="sofa-arm-divider" d="M162 42 C164 55, 164 70, 162 102" strokeWidth="2.6" />

            {/* Capitoné en los cojines traseros */}
            <g className="sofa-quilt" strokeWidth="1.1">
              <path d="M72 44 L86 56 L72 68 L58 56 Z" />
              <path d="M96 40 L110 52 L96 64 L82 52 Z" />
              <path d="M124 40 L138 52 L124 64 L110 52 Z" />
              <path d="M148 44 L162 56 L148 68 L134 56 Z" />
              <path d="M84 62 L98 74 L84 82 L70 74 Z" />
              <path d="M110 58 L124 70 L110 80 L96 70 Z" />
              <path d="M136 62 L150 74 L136 82 L122 74 Z" />
            </g>
            <g className="sofa-quilt-hi">
              <ellipse cx="72" cy="56" rx="4.5" ry="3.5" />
              <ellipse cx="96" cy="52" rx="4.5" ry="3.5" />
              <ellipse cx="124" cy="52" rx="4.5" ry="3.5" />
              <ellipse cx="148" cy="56" rx="4.5" ry="3.5" />
              <ellipse cx="110" cy="70" rx="5" ry="4" />
            </g>
            <g className="sofa-button">
              <circle cx="72" cy="44" r="2.1" />
              <circle cx="96" cy="40" r="2.1" />
              <circle cx="124" cy="40" r="2.1" />
              <circle cx="148" cy="44" r="2.1" />
              <circle cx="58" cy="56" r="1.9" />
              <circle cx="86" cy="56" r="1.9" />
              <circle cx="110" cy="52" r="2.2" />
              <circle cx="134" cy="56" r="1.9" />
              <circle cx="162" cy="56" r="1.9" />
              <circle cx="72" cy="68" r="1.9" />
              <circle cx="98" cy="74" r="1.9" />
              <circle cx="124" cy="74" r="1.9" />
              <circle cx="148" cy="68" r="1.9" />
            </g>
            <g className="sofa-button-hi">
              <circle cx="71.2" cy="43.2" r="0.75" />
              <circle cx="95.2" cy="39.2" r="0.75" />
              <circle cx="123.2" cy="39.2" r="0.75" />
              <circle cx="147.2" cy="43.2" r="0.75" />
              <circle cx="109.2" cy="51.2" r="0.8" />
            </g>

            {/* Cojines con grosor */}
            <path
              className="sofa-cushion-side"
              d="M56 90 H106 V100 C106 102, 104 103, 102 103 H58 C56 103, 56 102, 56 100 Z"
            />
            <path
              className="sofa-cushion-side"
              d="M114 90 H164 V100 C164 102, 162 103, 160 103 H116 C114 103, 114 102, 114 100 Z"
            />
            <path
              fill="url(#sofaCushGrad)"
              d="M56 80 H106 V96 C106 98, 104 99, 102 99 H58 C56 99, 56 98, 56 96 Z"
            />
            <path
              fill="url(#sofaCushGrad)"
              d="M114 80 H164 V96 C164 98, 162 99, 160 99 H116 C114 99, 114 98, 114 96 Z"
            />
            <path className="sofa-cushion-top" d="M58 80 H104 V88 H58 Z" />
            <path className="sofa-cushion-top" d="M116 80 H162 V88 H116 Z" />
            {/* Costura central */}
            <rect x="106" y="80" width="8" height="23" className="sofa-seam" rx="1.5" />
            <path className="sofa-crease" d="M110 82 V100" strokeWidth="1.2" />

            {/* Riel con relieve */}
            <path className="sofa-rail" d="M48 103 H172 V110 H48 Z" />
            <path className="sofa-rail-hi" d="M48 103 H172 V105.5 H48 Z" />
            <g className="sofa-button">
              <circle cx="64" cy="106.5" r="1.4" />
              <circle cx="84" cy="106.5" r="1.4" />
              <circle cx="104" cy="106.5" r="1.4" />
              <circle cx="124" cy="106.5" r="1.4" />
              <circle cx="144" cy="106.5" r="1.4" />
              <circle cx="158" cy="106.5" r="1.4" />
            </g>

            <path d="M54 110 L52 124 H60 L58 110 Z" className="sofa-leg" />
            <path d="M76 110 L75 124 H83 L82 110 Z" className="sofa-leg" />
            <path d="M138 110 L137 124 H145 L144 110 Z" className="sofa-leg" />
            <path d="M160 110 L158 124 H166 L164 110 Z" className="sofa-leg" />
          </svg>

          <div className="sofa-books">
            <button
              type="button"
              className={`book-btn book-es ${lang === 'es' ? 'is-active' : ''}`}
              onClick={() => changeLanguage('es')}
              aria-pressed={lang === 'es'}
              aria-label={t('lang_es')}
              title={t('lang_es')}
            >
              <svg viewBox="0 0 44 62" className="book-svg" aria-hidden>
                <defs>
                  <linearGradient id="esCover" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9f1239" />
                    <stop offset="45%" stopColor="#be123c" />
                    <stop offset="100%" stopColor="#881337" />
                  </linearGradient>
                  <linearGradient id="esSpine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4c0519" />
                    <stop offset="40%" stopColor="#9f1239" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                  <linearGradient id="pagesGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f5f0e6" />
                    <stop offset="100%" stopColor="#e7dfd0" />
                  </linearGradient>
                </defs>
                <path d="M10 4 H40 Q42 4 42 6 V56 Q42 58 40 58 H10 Z" fill="url(#pagesGrad)" />
                <path d="M38 6 V56" stroke="#d6cbb8" strokeWidth="0.6" opacity="0.7" />
                <path d="M8 3 H36 Q38 3 38 5 V55 Q38 57 36 57 H8 Z" fill="url(#esCover)" />
                <path d="M2 5 Q2 3 5 3 H10 V57 H5 Q2 57 2 55 Z" fill="url(#esSpine)" />
                <path d="M5 3 V57" stroke="#fbbf24" strokeWidth="0.55" opacity="0.55" />
                <rect x="13" y="10" width="20" height="0.7" rx="0.3" fill="#fcd34d" opacity="0.85" />
                <rect x="13" y="46" width="20" height="0.7" rx="0.3" fill="#fcd34d" opacity="0.85" />
                <circle cx="23" cy="28" r="5.5" fill="none" stroke="#fcd34d" strokeWidth="0.7" opacity="0.75" />
                <text x="23" y="30.5" textAnchor="middle" className="book-svg-code" fill="#fef3c7">
                  ES
                </text>
                <text x="23" y="41" textAnchor="middle" className="book-svg-label" fill="#fecdd3">
                  Español
                </text>
              </svg>
            </button>

            <button
              type="button"
              className={`book-btn book-en ${lang === 'en' ? 'is-active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-pressed={lang === 'en'}
              aria-label={t('lang_en')}
              title={t('lang_en')}
            >
              <svg viewBox="0 0 44 62" className="book-svg" aria-hidden>
                <defs>
                  <linearGradient id="enCover" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="50%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#172554" />
                  </linearGradient>
                  <linearGradient id="enSpine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0c1929" />
                    <stop offset="40%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                  <linearGradient id="pagesGrad2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f8f4eb" />
                    <stop offset="100%" stopColor="#e8dfd0" />
                  </linearGradient>
                </defs>
                <path d="M10 4 H40 Q42 4 42 6 V56 Q42 58 40 58 H10 Z" fill="url(#pagesGrad2)" />
                <path d="M38 6 V56" stroke="#d6cbb8" strokeWidth="0.6" opacity="0.7" />
                <path d="M8 3 H36 Q38 3 38 5 V55 Q38 57 36 57 H8 Z" fill="url(#enCover)" />
                <path d="M2 5 Q2 3 5 3 H10 V57 H5 Q2 57 2 55 Z" fill="url(#enSpine)" />
                <path d="M5 3 V57" stroke="#93c5fd" strokeWidth="0.55" opacity="0.55" />
                <rect x="13" y="10" width="20" height="0.7" rx="0.3" fill="#bfdbfe" opacity="0.9" />
                <rect x="13" y="46" width="20" height="0.7" rx="0.3" fill="#bfdbfe" opacity="0.9" />
                <text x="23" y="30.5" textAnchor="middle" className="book-svg-code" fill="#eff6ff">
                  EN
                </text>
                <text x="23" y="41" textAnchor="middle" className="book-svg-label" fill="#bfdbfe">
                  English
                </text>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
