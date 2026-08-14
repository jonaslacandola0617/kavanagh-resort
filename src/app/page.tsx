import Image from "next/image";
import { Header, KavanaghWordmark } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const facebook = "https://www.facebook.com/kavanaghresort/";
const mapUrl = "https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Santa%20Maria,%20Mabalacat,%20Philippines,%202010&FORM=FBKPL1&mkt=en-US";

const cottages = [
  { title: "Kavanagh Hut", image: "/images/kavanagh-hut.jpg", note: "A compact cottage option for smaller groups.", tone: "pink" },
  { title: "Family Cottage", image: "/images/family-cottage.jpg", note: "More room for family days and barkada get-togethers.", tone: "aqua" },
  { title: "Grand Cottage", image: "/images/grand-cottage.jpg", note: "The larger cottage option for bigger groups.", tone: "yellow" },
] as const;

const postcards = [
  ["/images/family-pool.jpg", "Pool day", "postcard-a"],
  ["/images/water-play.jpg", "Splash zone", "postcard-b"],
  ["/images/group.jpg", "Barkada day", "postcard-c"],
  ["/images/grounds.jpg", "Open air", "postcard-d"],
  ["/images/bonfire.jpg", "After sunset", "postcard-e"],
  ["/images/pool-deck.jpg", "Blue hour", "postcard-f"],
] as const;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kavanagh Resort",
    url: "https://kavanagh-resort.vercel.app",
    email: "kavanaghresortph@gmail.com",
    telephone: ["+639453848008", "+639496761383"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sitio Libutad, Santa Maria",
      addressLocality: "Mabalacat City",
      addressRegion: "Pampanga",
      postalCode: "2010",
      addressCountry: "PH",
    },
    sameAs: [facebook, "https://www.instagram.com/kavanaghresort", "https://tiktok.com/@kavanaghresort"],
  };

  return (
    <main id="top" className="site-shell">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="poster-hero">
        <div className="hero-photo-wrap">
          <Image
            src="/images/hero-pool.jpg"
            alt="Large swimming pool with colorful water play area at Kavanagh Resort"
            fill
            priority
            sizes="100vw"
            className="hero-photo"
          />
          <div className="hero-photo-wash" />
        </div>

        <div className="hero-confetti" aria-hidden="true">
          <i className="confetti c1" /><i className="confetti c2" /><i className="confetti c3" />
          <i className="confetti c4" /><i className="confetti c5" /><i className="confetti c6" />
        </div>

        <div className="hero-content">
          <Reveal>
            <div className="hero-kicker"><span>☀</span> Mabalacat City, Pampanga</div>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="hero-title">
              <span>GOOD DAYS</span>
              <span>START WITH</span>
              <span className="hero-splash-word">A SPLASH.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="hero-bottom">
              <p>
                Swimming, open-air cottages, and overnight villa stays—made for family days, barkada plans, and staying a little longer.
              </p>
              <div className="hero-actions">
                <a href={facebook} target="_blank" rel="noreferrer" className="button button-pink">Message to inquire ↗</a>
                <a href="#swim" className="button button-glass">Dive in ↓</a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hero-sticker hero-sticker-top">
          <strong>SWIM</strong><span>PLAY</span><em>STAY</em>
        </div>
        <div className="hero-sticker hero-sticker-bottom">Pool day energy ✦</div>
      </section>

      <section className="wave-ticker" aria-label="Kavanagh experiences">
        <div className="ticker-row">
          <span>SWIM</span><b>✦</b><span>CHILL</span><b>✦</b><span>SPLASH</span><b>✦</b><span>STAY</span><b>✦</b><span>REPEAT</span><b>✦</b>
          <span>SWIM</span><b>✦</b><span>CHILL</span><b>✦</b><span>SPLASH</span><b>✦</b><span>STAY</span><b>✦</b><span>REPEAT</span><b>✦</b>
        </div>
      </section>

      <section id="swim" className="day-section">
        <div className="section-pad">
          <Reveal>
            <div className="day-heading">
              <p className="mini-label">01 / PICK YOUR KAVANAGH DAY</p>
              <h2>WHAT ARE WE<br />DOING TODAY?</h2>
            </div>
          </Reveal>

          <div className="day-cards">
            <Reveal className="day-card day-card-swim">
              <div className="day-card-image">
                <Image src="/images/pool-deck.jpg" alt="Swimming pool and pool deck at Kavanagh Resort" fill sizes="(max-width: 900px) 100vw, 52vw" className="object-cover" />
              </div>
              <div className="day-card-copy">
                <span>01</span>
                <h3>SPLASH<br />ALL DAY.</h3>
                <p>Day, night, and full-day swimming options are promoted across Kavanagh’s source posts.</p>
              </div>
              <div className="sun-badge">☀</div>
            </Reveal>

            <Reveal delay={90} className="day-card day-card-play">
              <div className="day-card-image">
                <Image src="/images/water-play.jpg" alt="Colorful water play area at Kavanagh Resort" fill sizes="(max-width: 900px) 100vw, 42vw" className="object-cover" />
              </div>
              <div className="day-card-copy">
                <span>02</span>
                <h3>BRING<br />THE CREW.</h3>
                <p>The pool and colorful water-play area give the resort its most playful visual identity.</p>
              </div>
              <div className="squiggle" aria-hidden="true">~~~~</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cottages" className="cottages-section">
        <div className="cottages-orbit" aria-hidden="true">KAVANAGH • KAVANAGH • KAVANAGH •</div>
        <div className="section-pad">
          <Reveal>
            <div className="cottages-heading">
              <p className="mini-label">02 / YOUR POOLSIDE BASE</p>
              <h2>PICK A<br /><span>HANGOUT.</span></h2>
              <p>Three cottage options appear in Kavanagh’s published material. Ask the resort directly for the latest rates and availability.</p>
            </div>
          </Reveal>

          <div className="pass-stack">
            {cottages.map((cottage, index) => (
              <Reveal key={cottage.title} delay={index * 80} className={`cottage-pass cottage-${cottage.tone}`}>
                <div className="pass-number">0{index + 1}</div>
                <div className="pass-image">
                  <Image src={cottage.image} alt={`${cottage.title} at Kavanagh Resort`} fill sizes="(max-width: 900px) 100vw, 36vw" className="object-cover" />
                </div>
                <div className="pass-copy">
                  <p>KAVANAGH RESORT / COTTAGE PASS</p>
                  <h3>{cottage.title}</h3>
                  <span>{cottage.note}</span>
                </div>
                <div className="pass-cut" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="villa" className="night-section">
        <div className="night-word" aria-hidden="true">STAY</div>
        <div className="night-stars" aria-hidden="true"><i>✦</i><i>✧</i><i>✦</i><i>✧</i></div>
        <div className="section-pad night-grid">
          <Reveal className="night-copy">
            <p className="mini-label mini-label-light">03 / WHEN THE POOL DAY TURNS INTO A NIGHT</p>
            <h2>STAY PAST<br /><span>SUNSET.</span></h2>
            <p>Kavanagh’s villa is promoted for overnight stays and larger groups, with living and dining space, a kitchen, and the villa exterior shown in the source media.</p>
            <a href={facebook} target="_blank" rel="noreferrer" className="button button-yellow">Ask about villa stays ↗</a>
          </Reveal>

          <div className="night-collage">
            <Reveal className="night-photo night-photo-main">
              <Image src="/images/villa-exterior.jpg" alt="Exterior of Kavanagh Resort villa" fill sizes="(max-width: 900px) 100vw, 52vw" className="object-cover" />
              <span>THE VILLA</span>
            </Reveal>
            <Reveal delay={90} className="night-photo night-photo-a">
              <Image src="/images/villa-living.jpg" alt="Living and dining area inside the Kavanagh Resort villa" fill sizes="(max-width: 900px) 50vw, 24vw" className="object-cover" />
            </Reveal>
            <Reveal delay={160} className="night-photo night-photo-b">
              <Image src="/images/villa-kitchen.jpg" alt="Kitchen inside the Kavanagh Resort villa" fill sizes="(max-width: 900px) 50vw, 24vw" className="object-cover" />
            </Reveal>
            <div className="moon-badge" aria-hidden="true">☾</div>
          </div>
        </div>
      </section>

      <section id="gallery" className="postcards-section">
        <div className="section-pad">
          <Reveal>
            <div className="postcards-heading">
              <p className="mini-label">04 / POSTCARDS FROM KAVANAGH</p>
              <h2>PROOF THAT<br /><span>FUN LOOKS GOOD.</span></h2>
            </div>
          </Reveal>

          <div className="postcard-wall">
            {postcards.map(([src, label, className], index) => (
              <Reveal key={src} delay={index * 45} className={`postcard ${className}`}>
                <div className="tape" />
                <div className="postcard-photo">
                  <Image src={src} alt={`${label} at Kavanagh Resort`} fill sizes="(max-width: 700px) 100vw, 34vw" className="object-cover" />
                </div>
                <div className="postcard-caption"><span>#{String(index + 1).padStart(2, "0")}</span>{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="visit-blob visit-blob-a" aria-hidden="true" />
        <div className="visit-blob visit-blob-b" aria-hidden="true" />
        <div className="section-pad visit-grid">
          <Reveal className="visit-copy">
            <p className="mini-label">05 / FIND THE FUN</p>
            <h2>SEE YOU IN<br /><span>MABALACAT.</span></h2>
            <p>Sitio Libutad, Santa Maria, Mabalacat City, Pampanga. Kavanagh says it can be found on Waze, Google Maps, and Apple Maps.</p>
            <div className="contact-chips">
              <a href={mapUrl} target="_blank" rel="noreferrer"><b>⌖</b><span><small>LOCATION</small>Open map</span></a>
              <a href="tel:+639453848008"><b>☎</b><span><small>CALL / TEXT</small>0945 384 8008</span></a>
              <a href="tel:+639496761383"><b>☎</b><span><small>CALL / TEXT</small>0949 676 1383</span></a>
              <a href="mailto:kavanaghresortph@gmail.com"><b>✉</b><span><small>EMAIL</small>kavanaghresortph@gmail.com</span></a>
            </div>
          </Reveal>

          <Reveal delay={90} className="cover-card">
            <div className="cover-frame">
              <Image src="/images/kavanagh-cover.png" alt="Kavanagh Resort official Facebook cover artwork" fill sizes="(max-width: 900px) 100vw, 46vw" className="object-cover" />
            </div>
            <div className="cover-caption"><span>OFFICIAL COVER ART</span><strong>KAVANAGH RESORT</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="final-splash">
        <div className="final-bubble final-bubble-a" /><div className="final-bubble final-bubble-b" />
        <Reveal className="final-inner">
          <KavanaghWordmark />
          <h2>MAKE YOUR<br />NEXT DAY OUT<br /><span>A SPLASH.</span></h2>
          <p>Contact Kavanagh Resort directly for current rates, reservations, and availability.</p>
          <a href={facebook} target="_blank" rel="noreferrer" className="button button-dark">Message Kavanagh Resort ↗</a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><KavanaghWordmark /></div>
        <div className="footer-meta">
          <span>Sitio Libutad, Santa Maria, Mabalacat City, Pampanga</span>
          <div><a href={facebook} target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/kavanaghresort" target="_blank" rel="noreferrer">Instagram</a><a href="https://tiktok.com/@kavanaghresort" target="_blank" rel="noreferrer">TikTok</a></div>
          <span>© 2026 Kavanagh Resort</span>
        </div>
      </footer>
    </main>
  );
}
