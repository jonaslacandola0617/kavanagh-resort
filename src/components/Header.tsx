"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Swim", href: "#swim" },
  { label: "Cottages", href: "#cottages" },
  { label: "Villa", href: "#villa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

function Wordmark() {
  const letters = [
    ["K", "#ff4f95"],
    ["a", "#22c8da"],
    ["v", "#7f5bd6"],
    ["a", "#ff6d4a"],
    ["n", "#ffbe36"],
    ["a", "#ffcd57"],
    ["g", "#8bc34a"],
    ["h", "#3972d9"],
  ] as const;

  return (
    <span className="inline-flex items-end leading-none" aria-label="Kavanagh Resort">
      <span className="text-[25px] font-black tracking-[-0.08em]">
        {letters.map(([letter, color], index) => (
          <span key={`${letter}-${index}`} style={{ color }}>
            {letter}
          </span>
        ))}
      </span>
      <span className="ml-2 mb-[1px] text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#0b3341]">
        Resort
      </span>
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
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#fff9ed]/94 shadow-[0_1px_0_rgba(11,51,65,.1)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Kavanagh Resort home">
          <span className="grid size-10 place-items-center rounded-full bg-[#e8fbff] ring-1 ring-[#0b3341]/10">
            <span className="text-lg font-black text-[#0b3341]">K</span>
          </span>
          <span className="hidden sm:block"><Wordmark /></span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#214c59] transition hover:text-[#f24f84]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/kavanaghresort/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#0b3341] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#154f60] sm:inline-flex"
          >
            Message to inquire ↗
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#0b3341]/15 text-[#0b3341] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <span className="grid gap-1">
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-[#0b3341] text-white transition duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 py-6 sm:px-10">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-white/20 text-2xl"
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>

          <nav className="my-auto grid divide-y divide-white/12" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-5 text-4xl font-black tracking-[-0.04em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.facebook.com/kavanaghresort/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-[#0b3341]"
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </header>
  );
}
