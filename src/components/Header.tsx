"use client";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#countries", label: "Countries" },
  { href: "#contact", label: "Contact" },
  { href: "#download", label: "Download" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-nav/80 backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo-v5-icon.svg" alt="Piga Home" className="w-10 h-10 rounded-lg" />
          <span className="text-lg font-bold text-white tracking-tight">
            Assis<span className="text-accent-blue">Connect</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-white transition-colors"
          >
            Get the App
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-bg-nav border-t border-border-subtle px-6 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="block mt-2 text-center font-semibold px-5 py-2.5 rounded-lg bg-accent-blue text-white"
            onClick={() => setOpen(false)}
          >
            Get the App
          </a>
        </nav>
      )}
    </header>
  );
}
