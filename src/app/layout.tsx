import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinese Mahjong Rules — Learn How to Play",
  description:
    "A complete beginner's guide to Chinese Mahjong. Learn tiles, combinations, scoring, and how to play in minutes.",
  verification: {
    google: "j3MhYDujUB_BMvBYX0JTB69IL6cKUvp5jkM68ISMgsE",
  },
  openGraph: {
    title: "Chinese Mahjong Rules — Learn How to Play",
    description: "Master the tiles, melds, and scoring. The #1 guide for beginners.",
    type: "website",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tiles", label: "Tiles" },
  { href: "/basics", label: "Combinations" },
  { href: "/game", label: "Game Setup" },
  { href: "/operations", label: "Play" },
  { href: "/winning", label: "Winning" },
  { href: "/scoring-chart.html", label: "Scoring" },
  { href: "/glossary", label: "Glossary" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="/" className="text-lg font-bold text-red-500">
              🀄 Mahjong Guide
            </a>
            <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
            {/* Mobile menu toggle */}
            <details className="md:hidden">
              <summary className="cursor-pointer text-zinc-400">Menu</summary>
              <div className="absolute right-4 top-full flex flex-col gap-2 rounded-lg border border-zinc-800 bg-[#0a0a0a] p-4 shadow-xl">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </nav>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
          <p>Chinese Mahjong Guide — For beginners around the world 🀄</p>
        </footer>
      </body>
    </html>
  );
}
