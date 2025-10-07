import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Hero.module.css";

export default function Hero({
  eyebrow = "Compassionate & Professional Psychiatric Care for Your Well-Being",
  title = "Personalized Mental Health Solutions",
  ctaText = "Start Your Healing Journey",
  phone = "505-595-1200",
  bg = "/hero.jpg",
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className={s.hero}
      aria-labelledby="hero-title"
      style={{ "--hero-bg": `url(${bg})` }}
    >
      <div className={s.scrim} aria-hidden="true" />
      <div className={s.inner}>
        <p className={`${s.eyebrow} ${inView ? s.in : ""}`}>{eyebrow}</p>
        <h1 id="hero-title" className={`${s.title} ${inView ? s.in : ""}`}>
          {title}
        </h1>

        <div className={s.ctaRow}>
          <Link
            to = "/bookOnlinePage"
            className={`${s.cta} ${inView ? s.in : ""}`}
            aria-label={`${ctaText} — begin intake`}
          >
            {ctaText}
          </Link>

          <a
            className={`${s.phone} ${inView ? s.in : ""}`}
            href={`tel:${phone.replace(/\D/g, "")}`}
            aria-label={`Call us at ${phone}`}
          >
            <span className={s.phoneIcon} aria-hidden="true">
              📞
            </span>
            <span className={s.phoneText}>{phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
