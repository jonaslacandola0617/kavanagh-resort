import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const facebook = "https://www.facebook.com/kavanaghresort/";
const mapUrl =
  "https://www.bing.com/maps/default.aspx?v=2&pc=FACEBK&mid=8100&where1=Santa%20Maria,%20Mabalacat,%20Philippines,%202010&FORM=FBKPL1&mkt=en-US";

const cottageCards = [
  {
    title: "Kavanagh Hut",
    text: "A compact cottage option for smaller groups.",
    image: "/images/kavanagh-hut.jpg",
    alt: "Kavanagh Hut open-air cottage at Kavanagh Resort",
    accent: "#ffcf43",
  },
  {
    title: "Family Cottage",
    text: "More room for family days and barkada get-togethers.",
    image: "/images/family-cottage.jpg",
    alt: "Family Cottage at Kavanagh Resort",
    accent: "#ff6e9e",
  },
  {
    title: "Grand Cottage",
    text: "The larger cottage option for bigger groups.",
    image: "/images/grand-cottage.jpg",
    alt: "Grand Cottage at Kavanagh Resort",
    accent: "#4ac8dc",
  },
];

const gallery = [
  ["/images/family-pool.jpg", "Families enjoying the swimming pool at Kavanagh Resort", "lg:col-span-5 lg:row-span-2"],
  ["/images/water-play.jpg", "Children enjoying the water play area at Kavanagh Resort", "lg:col-span-3"],
  ["/images/group.jpg", "A visiting group at Kavanagh Resort", "lg:col-span-4"],
  ["/images/grounds.jpg", "Open grassy grounds at Kavanagh Resort", "lg:col-span-4"],
  ["/images/bonfire.jpg", "A group gathering around a bonfire on the resort grounds", "lg:col-span-4"],
  ["/images/pool-deck.jpg", "Swimming pool and deck at Kavanagh Resort", "lg:col-span-4"],
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
    <main id="top" className="overflow-x-clip">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero-grid relative min-h-[100svh] overflow-hidden pt-24">
        <div className="bubble bubble-a" />
        <div className="bubble bubble-b" />
        <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1480px] gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-14 lg:px-12">
          <div className="relative z-10 pt-6 lg:pt-0">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0b3341]/10 bg-white/60 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#285a67] backdrop-blur">
                <span className="size-2 rounded-full bg-[#ff5e91]" />
                Sitio Libutad · Santa Maria · Mabalacat
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="max-w-[760px] text-[clamp(4.2rem,9.2vw,9rem)] font-black leading-[0.79] tracking-[-0.075em] text-[#0b3341]">
                Swim.
                <span className="block text-[#f24f84]">Play.</span>
                <span className="block text-[#20a9c4]">Stay.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-[16px] leading-7 text-[#456874] sm:text-[18px] sm:leading-8">
                Kavanagh Resort brings swimming, open-air cottages, and overnight villa stays into one colorful place for family and friends in Mabalacat City.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary"
                >
                  Message to inquire <span>↗</span>
                </a>
                <a href="tel:+639453848008" className="cta-secondary">
                  Call 0945 384 8008
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#0b3341]/10 pt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#52727c]">
                <span>Day swimming</span>
                <span>Group cottages</span>
                <span>Overnight villa</span>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[58vh] lg:min-h-[76vh]">
            <Reveal className="h-full">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#bdeef3] sm:rounded-[3rem]">
                <Image
                  src="/images/hero-pool.jpg"
                  alt="Large swimming pool with a colorful water play area at Kavanagh Resort"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#053442]/30 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={180} className="absolute -bottom-4 left-4 z-10 sm:left-8">
              <div className="max-w-[260px] rounded-[1.7rem] bg-[#fff9ed]/94 p-5 shadow-[0_20px_60px_rgba(11,51,65,.18)] backdrop-blur sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f24f84]">
                  Make it a swim day
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.05] tracking-[-0.04em] text-[#0b3341]">
                  Pool time with room for the whole group.
                </p>
              </div>
            </Reveal>

            <div className="absolute -right-8 top-8 hidden size-28 rotate-12 rounded-[2rem] bg-[#ffcf43] lg:block" />
            <div className="absolute -right-3 top-28 hidden size-16 -rotate-12 rounded-full bg-[#f24f84] lg:block" />
          </div>
        </div>
      </section>

      <section className="marquee-strip overflow-hidden border-y border-[#0b3341]/10 bg-[#0b3341] py-4 text-white">
        <div className="marquee-track text-[11px] font-extrabold uppercase tracking-[0.2em]">
          <span>Pool days</span><i>✦</i><span>Cottages</span><i>✦</i><span>Villa stays</span><i>✦</i><span>Family time</span><i>✦</i><span>Barkada plans</span><i>✦</i><span>Mabalacat</span><i>✦</i>
          <span>Pool days</span><i>✦</i><span>Cottages</span><i>✦</i><span>Villa stays</span><i>✦</i><span>Family time</span><i>✦</i><span>Barkada plans</span><i>✦</i><span>Mabalacat</span><i>✦</i>
        </div>
      </section>

      <section id="swim" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow text-[#f24f84]">Swim & splash</p>
                <h2 className="mt-5 max-w-xl text-[clamp(3.2rem,6vw,6.6rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#0b3341]">
                  The pool is the main event.
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-7 text-[#55747d] sm:text-[17px]">
                  The resort’s posts consistently center the swimming pool and colorful water-play area, with day, night, and full-day swimming options promoted for visitors.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[2.8rem]">
                  <Image
                    src="/images/pool-deck.jpg"
                    alt="Swimming pool and pool deck at Kavanagh Resort"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Reveal delay={80}>
                  <div className="fun-card bg-[#e8fbff]">
                    <span className="fun-number">01</span>
                    <h3>Swimming sessions</h3>
                    <p>Day, night, and full-day swimming are all promoted in the resort’s current source posts.</p>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <div className="fun-card bg-[#fff0f5]">
                    <span className="fun-number">02</span>
                    <h3>Water play</h3>
                    <p>A colorful play structure sits right inside the pool area, giving the resort its playful visual identity.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cottages" className="scroll-mt-20 bg-[#ffcf43] py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow text-[#0b3341]">Pick your cottage</p>
                <h2 className="mt-4 max-w-4xl text-[clamp(3.3rem,6vw,6.5rem)] font-black leading-[0.86] tracking-[-0.06em] text-[#0b3341]">
                  Different group sizes, same pool day.
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-7 text-[#355760]">
                Kavanagh publishes three cottage options: Kavanagh Hut, Family Cottage, and Grand Cottage. Ask the resort directly for the latest rates and availability.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cottageCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <article className="group overflow-hidden rounded-[2rem] bg-[#fff9ed] shadow-[0_14px_35px_rgba(11,51,65,.08)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0b3341]">{card.title}</h3>
                      <span className="size-4 rounded-full" style={{ backgroundColor: card.accent }} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#607981]">{card.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="villa" className="scroll-mt-20 bg-[#0b3341] py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#7ce0eb]">Stay overnight</p>
                <h2 className="mt-5 max-w-4xl text-[clamp(3.4rem,6.5vw,7rem)] font-black leading-[0.85] tracking-[-0.06em]">
                  Bring the group. Keep the night going.
                </h2>
              </div>
              <p className="max-w-lg text-[15px] leading-7 text-[#c0d9df] lg:justify-self-end">
                Kavanagh’s villa is promoted for overnight stays and larger groups, with a living and dining area, kitchen, and separate villa exterior shown in the source media.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:auto-rows-[310px]">
            <Reveal className="relative min-h-[420px] overflow-hidden rounded-[2rem] lg:col-span-7 lg:row-span-2 lg:min-h-0">
              <Image src="/images/villa-exterior.jpg" alt="Exterior of the Kavanagh Resort villa" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </Reveal>
            <Reveal delay={80} className="relative min-h-[300px] overflow-hidden rounded-[2rem] lg:col-span-5 lg:min-h-0">
              <Image src="/images/villa-living.jpg" alt="Living and dining area inside the Kavanagh Resort villa" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </Reveal>
            <Reveal delay={140} className="relative min-h-[300px] overflow-hidden rounded-[2rem] lg:col-span-5 lg:min-h-0">
              <Image src="/images/villa-kitchen.jpg" alt="Kitchen inside the Kavanagh Resort villa" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-5 rounded-[2rem] border border-white/12 bg-white/[0.045] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ffcf43]">Planning an overnight stay?</p>
                <p className="mt-2 max-w-xl text-xl font-bold tracking-[-0.02em]">Ask for the latest villa rates, available dates, and group options.</p>
              </div>
              <a href={facebook} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-[#f24f84] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5">
                Ask on Facebook ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-[#20a9c4]">Around Kavanagh</p>
                <h2 className="mt-4 text-[clamp(3.2rem,6vw,6.4rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#0b3341]">
                  More than one kind of day out.
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-7 text-[#55747d]">
                Pool time, open grounds, family gatherings, and after-sunset moments all show up across the resort’s recent source media.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid auto-rows-[250px] gap-4 lg:grid-cols-12 lg:auto-rows-[300px]">
            {gallery.map(([src, alt, classes], index) => (
              <Reveal key={src} delay={index * 50} className={`relative overflow-hidden rounded-[1.7rem] ${classes}`}>
                <div className="group absolute inset-0 overflow-hidden rounded-[1.7rem]">
                  <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-20 bg-[#e8fbff] py-24 sm:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-12">
          <Reveal>
            <div>
              <p className="eyebrow text-[#f24f84]">Plan your visit</p>
              <h2 className="mt-5 max-w-3xl text-[clamp(3.2rem,6vw,6.3rem)] font-black leading-[0.87] tracking-[-0.06em] text-[#0b3341]">
                Find Kavanagh in Mabalacat.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#55747d] sm:text-[17px]">
                Sitio Libutad, Santa Maria, Mabalacat City, Pampanga. The resort says it can be found on Waze, Google Maps, and Apple Maps.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={mapUrl} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-icon bg-[#ffcf43]">⌖</span>
                  <span>
                    <small>Location</small>
                    <strong>Open map</strong>
                  </span>
                </a>
                <a href="mailto:kavanaghresortph@gmail.com" className="contact-card">
                  <span className="contact-icon bg-[#ff91b4]">✉</span>
                  <span>
                    <small>Email</small>
                    <strong className="break-all">kavanaghresortph@gmail.com</strong>
                  </span>
                </a>
                <a href="tel:+639453848008" className="contact-card">
                  <span className="contact-icon bg-[#7ce0eb]">☎</span>
                  <span>
                    <small>Call / text</small>
                    <strong>0945 384 8008</strong>
                  </span>
                </a>
                <a href="tel:+639496761383" className="contact-card">
                  <span className="contact-icon bg-[#b7e86e]">☎</span>
                  <span>
                    <small>Call / text</small>
                    <strong>0949 676 1383</strong>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.3rem]">
              <Image src="/images/kavanagh-cover.png" alt="Kavanagh Resort swimming pool and official Facebook cover artwork" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f24f84] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/80">Your next pool day can start here</p>
            <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(3.8rem,7vw,7.2rem)] font-black leading-[0.83] tracking-[-0.07em]">
              Message. Pack. Splash.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/85">
              Contact Kavanagh Resort directly for current rates, reservations, and availability.
            </p>
            <a href={facebook} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0b3341] transition hover:-translate-y-0.5">
              Message Kavanagh Resort ↗
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#072a35] text-[#c5dde3]">
        <div className="mx-auto max-w-[1480px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-7 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-2xl font-black tracking-[-0.04em] text-white">Kavanagh Resort</p>
              <p className="mt-2 text-xs">Sitio Libutad, Santa Maria, Mabalacat City, Pampanga</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-extrabold uppercase tracking-[0.15em]">
              <a href={facebook} target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/kavanaghresort" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://tiktok.com/@kavanaghresort" target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-6 text-[10px] uppercase tracking-[0.12em] text-[#7fa3ad] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kavanagh Resort</p>
            <p>Swimming, cottages & villa stays in Mabalacat City</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
