import Image from "next/image";
import { DayJourney } from "@/components/DayJourney";
import { Header, KavanaghWordmark } from "@/components/Header";

const facebook = "https://www.facebook.com/kavanaghresort/";
const mapUrl = "https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Santa%20Maria,%20Mabalacat,%20Philippines,%202010&FORM=FBKPL1&mkt=en-US";

const cottages = [
  {
    title: "Kavanagh Hut",
    note: "A compact poolside base for a smaller group.",
    image: "/images/kavanagh-hut.jpg",
  },
  {
    title: "Family Cottage",
    note: "More room to settle in, eat together, and stay between swims.",
    image: "/images/family-cottage.jpg",
  },
  {
    title: "Grand Cottage",
    note: "The larger cottage option when more people are coming along.",
    image: "/images/grand-cottage.jpg",
  },
] as const;

const stream = [
  ["/images/family-pool.jpg", "Pool day"],
  ["/images/water-play.jpg", "Water play"],
  ["/images/group.jpg", "Good company"],
  ["/images/pool-deck.jpg", "By the water"],
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
    sameAs: [
      facebook,
      "https://www.instagram.com/kavanaghresort",
      "https://tiktok.com/@kavanaghresort",
    ],
  };

  return (
    <main id="top" className="zero-site">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <aside className="chapter-rail" aria-label="Page chapters">
        <a href="#top"><span>01</span><i />Opening</a>
        <a href="#day"><span>02</span><i />The day</a>
        <a href="#cottages"><span>03</span><i />Cottages</a>
        <a href="#stay"><span>04</span><i />Stay</a>
        <a href="#visit"><span>05</span><i />Visit</a>
      </aside>

      <section className="zero-hero" aria-labelledby="hero-title">
        <div className="zero-hero-copy">
          <p className="zero-kicker">Kavanagh Resort · Mabalacat City, Pampanga</p>
          <h1 id="hero-title">
            A slower<br />
            kind of <em>fun.</em>
          </h1>
          <p className="zero-hero-lede">
            Swim when you want. Sit by the water. Bring your people. Stay until the day feels finished—not until the clock says so.
          </p>
          <div className="zero-hero-actions">
            <a className="zero-button zero-button-dark" href={facebook} target="_blank" rel="noreferrer">Plan your visit <span>↗</span></a>
            <a className="zero-text-link" href="#day">Drift through the day <span>↓</span></a>
          </div>
          <div className="zero-hero-meta" aria-label="Resort highlights">
            <span><b>01</b> Swim</span>
            <span><b>02</b> Unwind</span>
            <span><b>03</b> Stay</span>
          </div>
        </div>

        <figure className="zero-hero-window">
          <Image
            src="/images/kavanagh-hero-calm.webp"
            alt="Kavanagh Resort water play pool with mountain view"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 64vw"
            className="zero-hero-image"
          />
          <div className="zero-hero-image-wash" />
          <figcaption>
            <span>Today&apos;s mood</span>
            <strong>Blue sky. Cool water. No rush.</strong>
          </figcaption>
        </figure>

        <div className="zero-sun" aria-hidden="true"><span>☀</span></div>
        <div className="zero-hero-side-note" aria-hidden="true">SWIM · REST · STAY · REPEAT</div>
        <svg className="zero-waterline" viewBox="0 0 1440 250" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 140 C160 35 290 215 485 112 C665 18 828 197 1002 95 C1172 -4 1302 119 1470 48" />
        </svg>
      </section>

      <section className="breathing-line" aria-label="Kavanagh mood">
        <p>Come to play <i /> stay to unwind <i /> let the day stretch out</p>
      </section>

      <DayJourney />

      <section id="cottages" className="cottage-landscape" aria-labelledby="cottages-title">
        <div className="cottage-heading">
          <p className="zero-kicker">Your place between swims</p>
          <h2 id="cottages-title">Choose your<br /><em>shade.</em></h2>
          <p>
            Three cottage types appear in Kavanagh’s published material. Pick the space that fits your group, then ask the resort for current availability and rates.
          </p>
        </div>

        <div className="cottage-panels">
          {cottages.map((cottage, index) => (
            <article className="cottage-panel" key={cottage.title} tabIndex={0}>
              <Image src={cottage.image} alt={`${cottage.title} at Kavanagh Resort`} fill sizes="(max-width: 800px) 88vw, 33vw" className="object-cover" />
              <div className="cottage-panel-shade" />
              <div className="cottage-panel-number">0{index + 1}</div>
              <div className="cottage-panel-copy">
                <h3>{cottage.title}</h3>
                <p>{cottage.note}</p>
                <span>Poolside base</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quiet-interlude" aria-label="A calm moment">
        <div className="ripple-field" aria-hidden="true"><i /><i /><i /><i /></div>
        <p className="zero-kicker">A useful reminder</p>
        <blockquote>
          The best resort days<br />
          <em>do not need a schedule.</em>
        </blockquote>
        <p className="quiet-interlude-copy">
          Somewhere between the next swim and the next meal, you stop checking the time.
        </p>
      </section>

      <section id="stay" className="dusk-scene" aria-labelledby="stay-title">
        <div className="dusk-giant-word" aria-hidden="true">EVENING</div>
        <div className="dusk-heading">
          <p className="zero-kicker zero-kicker-light">When nobody wants to leave yet</p>
          <h2 id="stay-title">Let the light change.<br /><em>Stay a little longer.</em></h2>
        </div>

        <figure className="dusk-main-image">
          <Image src="/images/villa-exterior.jpg" alt="Kavanagh Resort villa exterior" fill sizes="(max-width: 900px) 100vw, 72vw" className="object-cover" />
          <div className="dusk-main-shade" />
          <figcaption>Overnight villa · Kavanagh Resort</figcaption>
        </figure>

        <div className="dusk-copy">
          <p>
            Kavanagh promotes the villa for overnight stays and larger groups, with living and dining space plus a kitchen shown in the resort’s source media.
          </p>
          <a href={facebook} target="_blank" rel="noreferrer">Ask about the villa <span>↗</span></a>
        </div>

        <figure className="dusk-detail dusk-detail-a">
          <Image src="/images/villa-living.jpg" alt="Living and dining area inside Kavanagh Resort villa" fill sizes="(max-width: 900px) 44vw, 20vw" className="object-cover" />
          <figcaption>Living / dining</figcaption>
        </figure>
        <figure className="dusk-detail dusk-detail-b">
          <Image src="/images/villa-kitchen.jpg" alt="Kitchen inside Kavanagh Resort villa" fill sizes="(max-width: 900px) 44vw, 20vw" className="object-cover" />
          <figcaption>Kitchen</figcaption>
        </figure>
      </section>

      <section className="photo-current" aria-labelledby="current-title">
        <div className="photo-current-heading">
          <p className="zero-kicker">Between the big moments</p>
          <h2 id="current-title">This is what<br /><em>the day looks like.</em></h2>
          <p>Not a checklist. Just pieces of the resort moving past at their own pace.</p>
        </div>
        <div className="photo-current-track">
          {stream.map(([src, label], index) => (
            <figure className={`current-frame current-frame-${index + 1}`} key={src}>
              <Image src={src} alt={`${label} at Kavanagh Resort`} fill sizes="(max-width: 800px) 76vw, 30vw" className="object-cover" />
              <figcaption><span>0{index + 1}</span>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-field" aria-labelledby="visit-title">
        <div className="visit-background-word" aria-hidden="true">MABALACAT</div>
        <div className="visit-topline"><span>Kavanagh Resort</span><span>Santa Maria · Pampanga · Philippines</span></div>

        <div className="visit-main">
          <p className="zero-kicker">When you are ready</p>
          <h2 id="visit-title">Bring your people.<br /><em>We&apos;ll see you by the water.</em></h2>
          <p className="visit-address">Sitio Libutad, Santa Maria, Mabalacat City, Pampanga 2010</p>
          <div className="visit-actions">
            <a className="visit-orb" href={facebook} target="_blank" rel="noreferrer"><span>Message<br />Kavanagh</span><b>↗</b></a>
            <div className="visit-links">
              <a href={mapUrl} target="_blank" rel="noreferrer"><span>Location</span>Open map ↗</a>
              <a href="tel:+639453848008"><span>Call / text</span>0945 384 8008</a>
              <a href="tel:+639496761383"><span>Call / text</span>0949 676 1383</a>
              <a href="mailto:kavanaghresortph@gmail.com"><span>Email</span>kavanaghresortph@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="zero-footer">
        <KavanaghWordmark />
        <p>Swimming · cottages · overnight villa · Mabalacat City, Pampanga</p>
        <div>
          <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/kavanaghresort" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@kavanaghresort" target="_blank" rel="noreferrer">TikTok</a>
        </div>
        <span>© 2026 Kavanagh Resort</span>
      </footer>
    </main>
  );
}
