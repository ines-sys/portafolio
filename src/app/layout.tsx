import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../app/i18n/i18next";
import { ThemeProvider } from "./components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inés Montero · Software Engineer",
  description:
    "Ingeniera en Sistemas — Full Stack & e-Commerce. Soluciones escalables para banca digital y comercio electrónico.",
};

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('immc-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    // Dark-first (original vibe). Only force light if user chose it or OS is light and no stored pref.
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (prefersLight ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${syne.variable} ${geistMono.variable} font-body antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
