import Image from "next/image";
import { Header, KavanaghWordmark } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const facebook = "https://www.facebook.com/kavanaghresort/";
const mapUrl = "https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Santa%20Maria,%20Mabalacat,%20Philippines,%202010&FORM=FBKPL1&mkt=en-US";

const experiences = [
  {
    eyebrow: "Swim",
    title: "Start with a splash.",
    copy: "A bright pool day with space for families, friends, and the kind of plans that do not need a schedule.",
    image: "/images/pool-deck.jpg",
  },
  {
    eyebrow: "Unwind",
    title: "Then take it easy.",
    copy: "Open-air spaces and greenery make it easy to slow down between swims, meals, and long conversations.",
    image: "/images/grounds.jpg",
  },
  {
    eyebrow: "Stay",
    title: "Stay a little longer.",
    copy: "Turn the day trip into an overnight stay with Kavanagh's villa and shared living spaces.",
    image: "/images/villa-exterior.jpg",
  },
] as const;

const cottages = [
  { title: "Kavanagh Hut", image: "/images/kavanagh-hut.jpg", note: "A compact cottage option for smaller groups." },
  { title: "Family Cottage", image: "/images/family-cottage.jpg", note: "More room for family days and barkada get-togethers." },
  { title: "Grand Cottage", image: "/images/grand-cottage.jpg", note: "The larger cottage option for bigger groups." },
] as const;

const gallery = [
  ["/images/family-pool.jpg", "Pool day"],
  ["/images/water-play.jpg", "Water play"],
  ["/images/group.jpg", "Time together"],
  ["/images/bonfire.jpg", "After sunset"],
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

      <section className="calm-hero">
        <div className="hero-visual" role="img" aria-label="Kavanagh Resort swimming pool and colorful water play area with a mountain view" />
        <div className="hero-shade" />
        <div className="hero-ripple hero-ripple-one" aria-hidden="true" />
        <div className="hero-ripple hero-ripple-two" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">Mabalacat City, Pampanga</p>
            <h1>Come for the splash.<br /><span>Stay for the slow days.</span></h1>
            <p className="hero-lead">
              Swimming, open-air cottages, and villa stays in one easygoing escape for families and friends.
            </p>
            <div className="hero-actions">
              <a href={facebook} target="_blank" rel="noreferrer" className="button button-sun">Message Kavanagh <span>↗</span></a>
              <a href="#experience" className="button button-quiet">Explore the resort <span>↓</span></a>
            </div>
          </div>

          <div className="hero-note" aria-label="Kavanagh resort experience">
            <span>SWIM</span><i /> <span>UNWIND</span><i /> <span>STAY</span>
          </div>
        </div>
      </section>

      <section id="experience" className="intro-section">
        <div className="section-wrap intro-grid">
          <Reveal>
            <p className="eyebrow">The Kavanagh feeling</p>
            <h2 className="section-title">Fun when you want it.<br /><span>Calm when you need it.</span></h2>
          </Reveal>
          <Reveal delay={70}>
            <div className="intro-copy">
              <p>Kavanagh works best as a day that can change pace naturally: swim, eat, catch up, rest, then jump back in when you feel like it.</p>
              <a href="#cottages" className="text-link">Find your place to settle in <span>↘</span></a>
            </div>
          </Reveal>
        </div>

        <div className="section-wrap experience-grid">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="experience-card">
              <div className="experience-photo">
                <Image src={item.image} alt={`${item.eyebrow} at Kavanagh Resort`} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="experience-copy">
                <span className="card-number">0{index + 1}</span>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="cottages" className="cottages-section">
        <div className="section-wrap cottages-head">
          <Reveal>
            <p className="eyebrow">Poolside spaces</p>
            <h2 className="section-title">Pick a home base<br /><span>for the day.</span></h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="section-sidecopy">Three cottage options appear in Kavanagh's published material. Contact the resort directly for current rates and availability.</p>
          </Reveal>
        </div>

        <div className="section-wrap cottage-list">
          {cottages.map((cottage, index) => (
            <Reveal key={cottage.title} delay={index * 70} className="cottage-card">
              <div className="cottage-photo">
                <Image src={cottage.image} alt={`${cottage.title} at Kavanagh Resort`} fill sizes="(max-width: 820px) 100vw, 35vw" className="object-cover" />
              </div>
              <div className="cottage-info">
                <span className="soft-index">0{index + 1}</span>
                <div>
                  <h3>{cottage.title}</h3>
                  <p>{cottage.note}</p>
                </div>
                <a href={facebook} target="_blank" rel="noreferrer" aria-label={`Ask about ${cottage.title}`}>↗</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="villa" className="villa-section">
        <div className="section-wrap villa-grid">
          <Reveal className="villa-copy">
            <p className="eyebrow eyebrow-light">When the day feels too short</p>
            <h2>Stay past<br /><span>sunset.</span></h2>
            <p>Kavanagh's villa is promoted for overnight stays and larger groups, with living and dining space, a kitchen, and room to keep the day going at a slower pace.</p>
            <a href={facebook} target="_blank" rel="noreferrer" className="button button-sun">Ask about villa stays <span>↗</span></a>
          </Reveal>

          <div className="villa-visuals">
            <Reveal className="villa-main-photo">
              <Image src="/images/villa-exterior.jpg" alt="Kavanagh Resort villa exterior" fill sizes="(max-width: 900px) 100vw, 55vw" className="object-cover" />
            </Reveal>
            <Reveal delay={100} className="villa-small-photo">
              <Image src="/images/villa-living.jpg" alt="Living and dining area inside Kavanagh Resort villa" fill sizes="(max-width: 900px) 44vw, 22vw" className="object-cover" />
            </Reveal>
            <div className="villa-moon" aria-hidden="true">☾</div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-wrap gallery-heading">
          <Reveal>
            <p className="eyebrow">A day at Kavanagh</p>
            <h2 className="section-title">The kind of day<br /><span>you do not rush.</span></h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="section-sidecopy">Pool time, open air, good company, and an evening that can stretch a little longer.</p>
          </Reveal>
        </div>

        <div className="section-wrap gallery-grid">
          {gallery.map(([src, label], index) => (
            <Reveal key={src} delay={index * 55} className={`gallery-card gallery-card-${index + 1}`}>
              <Image src={src} alt={`${label} at Kavanagh Resort`} fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" />
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="section-wrap visit-grid">
          <Reveal className="visit-copy">
            <p className="eyebrow">Plan an easy day out</p>
            <h2 className="section-title">See you in<br /><span>Mabalacat.</span></h2>
            <p>Sitio Libutad, Santa Maria, Mabalacat City, Pampanga. Kavanagh says it can be found on Waze, Google Maps, and Apple Maps.</p>
            <div className="contact-row">
              <a href={mapUrl} target="_blank" rel="noreferrer"><small>Location</small><strong>Open map</strong><span>↗</span></a>
              <a href="tel:+639453848008"><small>Call / text</small><strong>0945 384 8008</strong><span>↗</span></a>
              <a href="mailto:kavanaghresortph@gmail.com"><small>Email</small><strong>kavanaghresortph@gmail.com</strong><span>↗</span></a>
            </div>
          </Reveal>

          <Reveal delay={90} className="visit-art">
            <div className="visit-art-photo">
              <Image src="/images/kavanagh-cover.png" alt="Official Kavanagh Resort cover artwork" fill sizes="(max-width: 900px) 100vw, 46vw" className="object-cover" />
            </div>
            <p><span>Swim.</span> <span>Slow down.</span> <span>Stay awhile.</span></p>
          </Reveal>
        </div>
      </section>

      <section className="final-section">
        <div className="final-water-ring" aria-hidden="true" />
        <Reveal className="final-inner">
          <KavanaghWordmark />
          <h2>Your next easygoing<br />resort day is waiting.</h2>
          <p>Contact Kavanagh Resort directly for current rates, reservations, and availability.</p>
          <a href={facebook} target="_blank" rel="noreferrer" className="button button-dark">Message Kavanagh Resort <span>↗</span></a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <KavanaghWordmark />
          <p>Sitio Libutad, Santa Maria<br />Mabalacat City, Pampanga</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kavanagh Resort</span>
          <div>
            <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/kavanaghresort" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com/@kavanaghresort" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
