"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Cottages", href: "#cottages" },
  { label: "Villa", href: "#villa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

const letters = [
  ["k", "#ef6a8a"], ["a", "#44a9c1"], ["v", "#8c75bd"], ["a", "#f08b62"],
  ["n", "#e8b94d"], ["a", "#e7c85f"], ["g", "#75a868"], ["h", "#4c79b7"],
] as const;

export function KavanaghWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`} aria-label="Kavanagh Resort">
      <span className="brand-letters" aria-hidden="true">
        {letters.map(([letter, color], index) => <span key={`${letter}-${index}`} style={{ color }}>{letter}</span>)}
      </span>
      <span className="brand-resort">RESORT</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return (
    <header className={`site-header ${solid ? "site-header-solid" : ""}`}>
      <div className="site-nav">
        <a href="#top" className="site-logo" aria-label="Kavanagh Resort home"><KavanaghWordmark compact /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="https://www.facebook.com/kavanaghresort/" target="_blank" rel="noreferrer" className="nav-cta">Plan your visit <span>↗</span></a>
          <button type="button" className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open}><span /><span /></button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top"><KavanaghWordmark /><button type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">×</button></div>
        <nav>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
        <a className="mobile-cta" href="https://www.facebook.com/kavanaghresort/" target="_blank" rel="noreferrer">Message Kavanagh <span>↗</span></a>
      </div>
    </header>
  );
}
