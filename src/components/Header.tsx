"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Splash", href: "#swim" },
  { label: "Cottages", href: "#cottages" },
  { label: "Stay", href: "#villa" },
  { label: "Postcards", href: "#gallery" },
  { label: "Find us", href: "#visit" },
];

const letters = [
  ["k", "#f34f8d", -3],
  ["a", "#25bdd3", 2],
  ["v", "#8f64ce", -2],
  ["a", "#ff704d", 3],
  ["n", "#f4b832", -2],
  ["a", "#ffd75b", 2],
  ["g", "#86bd45", -3],
  ["h", "#3c78dd", 2],
] as const;

export function KavanaghWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`} aria-label="Kavanagh Resort">
      <span className="brand-letters" aria-hidden="true">
        {letters.map(([letter, color, rotate], index) => (
          <span
            key={`${letter}-${index}`}
            style={{ color, transform: `rotate(${rotate}deg) translateY(${index % 2 ? 1 : -1}px)` }}
          >
            {letter}
          </span>
        ))}
      </span>
      <span className="brand-resort">RESORT</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [open]);

  return (
    <header className={`site-header ${solid ? "site-header-solid" : ""}`}>
      <div className="site-nav">
        <a href="#top" className="site-logo" aria-label="Kavanagh Resort home">
          <KavanaghWordmark compact />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="https://www.facebook.com/kavanaghresort/"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Ask Kavanagh <span>↗</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top">
          <KavanaghWordmark />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">×</button>
        </div>
        <nav>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
        <a
          className="mobile-cta"
          href="https://www.facebook.com/kavanaghresort/"
          target="_blank"
          rel="noreferrer"
        >
          Message on Facebook ↗
        </a>
      </div>
    </header>
  );
}
