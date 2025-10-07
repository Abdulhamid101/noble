import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./Testimonials.module.css";

import bg1 from "../../assets/pic1.jpeg";
import bg2 from "../../assets/pic2.webp";
import bg3 from "../../assets/pic3.jpg";
import p1 from "../../assets/pic1.jpeg";
import p2 from "../../assets/pic2.webp";
import p3 from "../../assets/pic3.jpg";

const DEFAULT = [
  {
    id: "sarah",
    name: "Sarah M.",
    title: "“Life-Changing Support”",
    quote:
      "I struggled with anxiety for years and felt like I had no control over my thoughts. The team at Noble Psychiatric Services not only provided therapy but also helped me develop practical coping strategies. I finally feel like myself again!",
    rating: 5,
    avatar: p1,
    bg: bg1,
  },
  {
    id: "peter",
    name: "Peter K.",
    title: "“Highly Recommend”",
    quote:
      "If you're looking for mental health professionals who genuinely care, this is the place. The entire team makes you feel supported every step of the way.",
    rating: 5,
    avatar: p2,
    bg: bg2,
  },
  {
    id: "nancy",
    name: "Nancy A.",
    title: "“Compassionate & Professional Care”",
    quote:
      "Before seeing Dr. Ondieki, I felt lost in my depression and anxiety. From my first appointment, I felt heard, understood, and supported. With the right treatment plan, I've regained control of my life.",
    rating: 5,
    avatar: p3,
    bg: bg3,
  },
];

export default function Testimonials({
  heading = "More Testimonials",
  slides = DEFAULT,
  intervalMs = 7000,
  onCta = () => (window.location.href = "/testimonials"),
}) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef(null);
  const wrap = useRef(null);
  const total = slides.length;

  const go = (n) => setIdx((p) => (p + n + total) % total);
  const goto = (i) => setIdx(((i % total) + total) % total);

  // autoplay
  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => go(1), intervalMs);
    return () => clearInterval(timer.current);
  }, [playing, intervalMs]);

  // pause on hover/focus
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const enter = () => setPlaying(false);
    const leave = () => setPlaying(true);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("focusin", enter);
    el.addEventListener("focusout", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("focusin", enter);
      el.removeEventListener("focusout", leave);
    };
  }, []);

  // swipe (simple)
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let x0 = null;
    const onTouchStart = (e) => (x0 = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      x0 = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // keyboard
  const onKey = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  // for dots
  const dots = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total]
  );

  return (
    <section
      className={s.section}
      aria-labelledby="t-heading"
      onKeyDown={onKey}
      ref={wrap}
    >
      {/* Cross-fade background layers */}
      {slides.map((sl, i) => (
        <div
          key={sl.id}
          className={`${s.bg} ${i === idx ? s.bgActive : ""}`}
          style={{ backgroundImage: `url(${sl.bg})` }}
          aria-hidden="true"
        />
      ))}

      {/* tint + vignette + grain */}
      <div className={s.scrim} aria-hidden="true" />

      <div className={s.inner}>
        <div className={s.card} role="group" aria-roledescription="carousel">
          {/* avatar */}
          <img
            src={slides[idx].avatar}
            alt={`Photo of ${slides[idx].name}`}
            className={s.avatar}
          />

          {/* stars + title */}
          <div className={s.head}>
            <span className={s.stars} aria-hidden="true">
              {"★★★★★".slice(0, slides[idx].rating)}
            </span>
            <h3 id="t-heading" className={s.title}>
              {slides[idx].title}
            </h3>
          </div>

          {/* quote */}
          <blockquote className={s.quote}>
            <p>“{slides[idx].quote}”</p>
            <footer className={s.author}>— {slides[idx].name}</footer>
          </blockquote>

          {/* controls */}
          <div className={s.controls}>
            <button
              type="button"
              className={s.nav}
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
            >
              ‹
            </button>
            <div className={s.dots} role="tablist" aria-label="Testimonials">
              {dots.map((i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  aria-controls={`slide-${i}`}
                  className={`${s.dot} ${i === idx ? s.dotActive : ""}`}
                  onClick={() => goto(i)}
                  tabIndex={i === idx ? 0 : -1}
                />
              ))}
            </div>
            <button
              type="button"
              className={s.nav}
              aria-label="Next testimonial"
              onClick={() => go(1)}
            >
              ›
            </button>
          </div>

          <button
            type="button"
            className={s.cta}
            onClick={onCta}
            aria-label="Read more patient testimonials"
          >
            {heading}{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
