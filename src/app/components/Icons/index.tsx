import type { ReactNode } from 'react';

type IconProps = { className?: string };

function base(props: IconProps & { children: ReactNode; viewBox?: string }) {
  const { className = 'h-5 w-5', children, viewBox = '0 0 24 24' } = props;
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export const IconSun = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  });

export const IconMoon = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />,
  });

export const IconUser = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.8-3.2 4.6-5 8-5s6.2 1.8 8 5" />
      </>
    ),
  });

export const IconBriefcase = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
  });

export const IconSpark = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15zM5 15l.7 1.8L7.5 17.5 5.7 18.2 5 20l-.7-1.8L2.5 17.5l1.8-.7L5 15z" />,
  });

export const IconFolder = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      </>
    ),
  });

export const IconMail = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
  });

export const IconBook = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 0-2 2V5zm0 0v14a2 2 0 0 1 2-2h12" />,
  });

export const IconCoffee = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M4 10h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5z" />
        <path d="M16 11h2a2.5 2.5 0 0 1 0 5h-2M8 3v2M11 2v2M14 3v2" />
      </>
    ),
  });

export const IconCode = (p: IconProps) =>
  base({
    ...p,
    children: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  });

export const IconBank = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M3 10 12 4l9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18" />
      </>
    ),
  });

export const IconShop = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M4 9h16l-1.5 11h-13L4 9z" />
        <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      </>
    ),
  });

export const IconMonitor = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  });

export const IconServer = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
  });

export const IconCloud = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.7 1.5A3.5 3.5 0 0 0 7 18z" />,
  });

export const IconGraduation = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="m22 10-10-5-10 5 10 5 10-5z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </>
    ),
  });

export const IconCertificate = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <rect x="4" y="3" width="16" height="13" rx="2" />
        <path d="M8 8h8M8 11h5" />
        <path d="M10 16v5l2-1.2L14 21v-5" />
      </>
    ),
  });

export const IconMic = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </>
    ),
  });

export const IconArrowUp = (p: IconProps) =>
  base({
    ...p,
    children: <path d="M12 19V5M5 12l7-7 7 7" />,
  });

export const IconExternal = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <path d="M15 3h6v6M10 14 21 3" />
      </>
    ),
  });

export const IconHeart = (p: IconProps) =>
  base({
    ...p,
    children: (
      <path d="M19.5 7.5a4.5 4.5 0 0 0-7.5-3.2A4.5 4.5 0 0 0 4.5 7.5C4.5 13 12 18 12 18s7.5-5 7.5-10.5z" />
    ),
  });

export const IconLayers = (p: IconProps) =>
  base({
    ...p,
    children: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
  });
