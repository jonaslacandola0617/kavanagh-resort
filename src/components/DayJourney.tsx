"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    time: "10:00",
    label: "Morning / swim",
    title: "Start where the water is.",
    copy: "Arrive, drop the bags, and let the pool set the pace. Kavanagh’s water-play area and open pool deck make the first part of the day easy to understand: just get in.",
    image: "/images/kavanagh-hero-calm.webp",
    alt: "Kavanagh Resort pool and water play area with a mountain view",
  },
  {
    time: "14:00",
    label: "Afternoon / unwind",
    title: "Leave room for nothing.",
    copy: "Take a cottage, settle into the shade, eat, talk, nap, watch the water. The middle of the day is intentionally unplanned—the kind of time that makes a resort day feel longer.",
    image: "/images/grounds.jpg",
    alt: "Green open grounds at Kavanagh Resort",
  },
  {
    time: "18:30",
    label: "Evening / stay",
    title: "Let sunset make the next plan.",
    copy: "When swimming turns into dinner and nobody wants to leave yet, the villa keeps the day going with living, dining, kitchen and overnight space shown in Kavanagh’s published material.",
    image: "/images/villa-exterior.jpg",
    alt: "Kavanagh Resort villa at the end of the day",
  },
] as const;

export function DayJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-28% 0px -48% 0px", threshold: 0.05 },
      );
      observer.observe(node);
      return observer;
    });

    return () => observers.forEach(observer => observer?.disconnect());
  }, []);

  return (
    <section id="day" className="day-journey" aria-labelledby="day-title">
      <div className="day-intro">
        <p className="zero-kicker">A day at Kavanagh</p>
        <h2 id="day-title">The day does not need a schedule.<br /><em>It just needs room.</em></h2>
        <p className="day-intro-copy">
          Instead of listing amenities, follow the feeling of the place from first splash to last light.
        </p>
      </div>

      <div className="journey-grid">
        <div className="journey-visual" aria-live="polite">
          <div className="journey-frame">
            {scenes.map((scene, index) => (
              <Image
                key={scene.image}
                src={scene.image}
                alt={scene.alt}
                fill
                sizes="(max-width: 900px) 100vw, 56vw"
                className={`journey-image ${active === index ? "is-active" : ""}`}
                priority={index === 0}
              />
            ))}
            <div className="journey-image-shade" />
            <div className="journey-clock" aria-hidden="true">
              <span>{scenes[active].time}</span>
              <i />
            </div>
            <div className="journey-caption">
              <span>0{active + 1}</span>
              <p>{scenes[active].label}</p>
            </div>
          </div>
        </div>

        <div className="journey-copy">
          {scenes.map((scene, index) => (
            <article
              key={scene.title}
              ref={node => { stepRefs.current[index] = node; }}
              className={`journey-step ${active === index ? "is-active" : ""}`}
            >
              <div className="journey-mobile-image">
                <Image src={scene.image} alt={scene.alt} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="journey-step-index">0{index + 1}</div>
              <p className="journey-step-time">{scene.time} · {scene.label}</p>
              <h3>{scene.title}</h3>
              <p>{scene.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
