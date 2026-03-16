// --- Imports ---
// `type` means we only import this for TypeScript type-checking, not at runtime.
// The `type` keyword tells the bundler to strip this out of the final JS — zero runtime cost.
import type { ReactNode } from "react";
import type { Metadata } from "next";

// `next/link` gives us client-side navigation — clicking a Link swaps the page
// without a full browser reload, making navigation feel instant.
import Link from "next/link";

// Fonts are loaded once here and exposed as CSS variables so any component
// in the app can reference --font-geist-sans or --font-geist-mono.
import { Geist, Geist_Mono } from "next/font/google";

// Global styles — Tailwind's base reset and any custom CSS you write.
import "./globals.css";

// --- Font setup ---
// next/font downloads and self-hosts the font files at build time.
// No request goes to Google's servers at runtime — better for privacy and performance.
// `variable` turns the font into a CSS custom property we apply to <body>.
// `subsets` limits which character sets are downloaded (latin keeps the file small).
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// --- Page metadata ---
// Next.js reads this export and automatically injects <title> and <meta> tags
// into the <head>. You never write a <head> tag yourself in the App Router.
// Individual pages can export their own `metadata` to override these defaults.
//
// To update the site title or description → edit the object below.
export const metadata: Metadata = {
    title: "Miguel's Build Log",
    description: "An embedded systems portfolio – projects, notes, and build tutorials.",
};

// --- Root layout ---
// This component wraps every page on the site. Next.js renders your page
// inside `children` automatically — you don't call this component yourself.
//
// Quick reference — where to update things:
//   Site-wide nav / footer    →  here in layout.tsx
//   Page title / description  →  metadata export above (or per-page metadata)
//   Global styles / colors    →  src/app/globals.css
//   Font choices              →  geistSans / geistMono constants above
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        // `lang="en"` tells screen readers and search engines the page language.
        <html lang="en">

        {/*
          Font CSS variables are spread onto the body so every element inside
          can use var(--font-geist-sans) or var(--font-geist-mono) in CSS.
          `antialiased` smooths font rendering on high-DPI / retina screens.
        */}
        <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}>

        <div className="min-h-screen flex flex-col">

            {/* ── Site header ──────────────────────────────────────────────────── */}
            {/* sticky keeps the nav visible as the user scrolls */}
            <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
                <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">

                    {/* Brand wordmark — Link wraps it so clicking returns to home */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        {/* Small colored indicator dot */}
                        <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors" />
                        <span className="text-sm font-semibold tracking-tight text-zinc-100">
                            Miguel&apos;s Build Log
                        </span>
                    </Link>

                    {/*
                      `<Link>` for internal routes — does client-side navigation (no full reload).
                      Use a plain `<a>` only for external URLs (e.g. GitHub, Twitter).
                    */}
                    <nav aria-label="Main navigation" className="flex gap-1 text-sm">
                        <Link href="/" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors">Home</Link>
                        <Link href="/projects" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors">Projects</Link>
                        <Link href="/about" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors">About</Link>
                    </nav>

                </div>
            </header>

            {/* ── Page content ─────────────────────────────────────────────────── */}
            <main className="flex-1">
                <div className="mx-auto max-w-5xl px-6 py-14">
                    {children}
                </div>
            </main>

            {/* ── Footer ───────────────────────────────────────────────────────── */}
            <footer className="border-t border-zinc-800/60 text-xs text-zinc-500">
                <div className="mx-auto max-w-5xl px-6 py-5 flex justify-between items-center">
                    <span>© {new Date().getFullYear()} Miguel&apos;s Build Log</span>
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Embedded systems learning journey
                    </span>
                </div>
            </footer>

        </div>
        </body>
        </html>
    );
}
