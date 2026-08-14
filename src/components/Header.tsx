export function KavanaghWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`zero-brand ${compact ? "zero-brand-compact" : ""}`} aria-label="Kavanagh Resort">
      <span className="zero-brand-name">Kavanagh</span>
      <span className="zero-brand-sub">Resort · Mabalacat</span>
    </span>
  );
}

const links = [
  ["The day", "#day"],
  ["Cottages", "#cottages"],
  ["Stay", "#stay"],
  ["Visit", "#visit"],
] as const;

export function Header() {
  return (
    <header className="zero-header">
      <a href="#top" className="zero-header-brand" aria-label="Kavanagh Resort home">
        <KavanaghWordmark compact />
      </a>

      <div className="zero-header-center" aria-hidden="true">
        <span className="zero-header-dot" />
        <span>14.98° N · Pampanga</span>
      </div>

      <nav className="zero-desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <a
        className="zero-header-cta"
        href="https://www.facebook.com/kavanaghresort/"
        target="_blank"
        rel="noreferrer"
      >
        Plan a day <span aria-hidden="true">↗</span>
      </a>

      <details className="zero-mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div className="zero-mobile-panel">
          <KavanaghWordmark />
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="https://www.facebook.com/kavanaghresort/" target="_blank" rel="noreferrer">
            Message Kavanagh ↗
          </a>
        </div>
      </details>
    </header>
  );
}
