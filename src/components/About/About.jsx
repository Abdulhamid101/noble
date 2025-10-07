import React, { useEffect, useRef, useState } from "react";
import s from "./About.module.css";
import aboutImg from "../../assets/aboutimg.jpg";

export default function About({
  kicker = "About",
  title = "Guiding You Towards A Brighter Tomorrow",
  copy = `We understand that mental health is just as important as physical health. Our team of compassionate and experienced professionals is dedicated to providing comprehensive psychiatric care in a safe, supportive, and confidential environment. Whether you're facing anxiety, depression, trauma, or other mental health challenges, we are here to help you navigate your journey toward healing and well-being.`,
  bullets = [
    "Holistic Healing",
    "Experienced Professionals",
    "Personalized Treatment Plans",
    "Safe & Confidential Environment",
  ],
  ctaText = "LEARN MORE",
  onCTAClick = () => {},
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const left = bullets.slice(0, 2);
  const right = bullets.slice(2);

  return (
    <section ref={ref} className={s.section} aria-labelledby="about-title">
      <div className={s.container}>
        <div className={`${s.colText} ${inView ? s.in : ""}`}>
          <p className={s.kicker}>{kicker}</p>
          <h2 id="about-title" className={s.title}>
            {title}
          </h2>
          <p className={s.copy}>{copy}</p>

          <div className={s.gridBullets} role="list">
            <ul className={s.bList} role="list">
              {left.map((item) => (
                <li key={item} className={s.bItem}>
                  <span aria-hidden="true" className={s.tick}>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className={s.bList} role="list">
              {right.map((item) => (
                <li key={item} className={s.bItem}>
                  <span aria-hidden="true" className={s.tick}>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className={s.cta}
            onClick={onCTAClick}
            aria-label={`${ctaText} about our services`}
          >
            {ctaText}{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </div>

        <div className={`${s.colMedia} ${inView ? s.in : ""}`}>
          <figure className={s.figure}>
            <img
              src={aboutImg}
              alt="Therapist guiding a small group session in a bright clinic room"
              className={s.image}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
