import React, { useEffect, useRef, useState } from "react";
import s from "./Approach.module.css";
import approachImg from "../../assets/ourapproachimg.jpg";

export default function Approach({
  kicker = "Our Approach",
  title = "Tailored Treatment,\nTransformational Results",
  paragraphs = [
    "At Noble Psychiatric Services, we believe mental health care should be as unique as the individuals we serve. That’s why we take a patient-centered approach beyond simply addressing symptoms. We combine the latest in evidence-based treatments with compassionate, personalized care, ensuring that every plan we create is tailored to fit your specific needs, lifestyle, and goals.",
    "Whether you're dealing with anxiety, depression, trauma, or other mental health challenges, we work collaboratively with you to build a path forward that feels supportive and empowering.",
    "From your very first visit, we focus on creating a safe, respectful environment where you feel heard and understood. At Noble Psychiatric Services, you're not just a patient—you’re a partner in your healing journey. Let us help you take the next step toward improved well-being and a better quality of life.",
  ],
  ctaText = "GET HELP NOW",
  onCTAClick = () => {},
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={s.section} aria-labelledby="approach-title">
      <div className={s.container}>
        {/* Media */}
        <div className={`${s.colMedia} ${inView ? s.in : ""}`}>
          <figure className={s.figure}>
            <img
              className={s.image}
              src={approachImg}
              alt="Compassionate clinician listening attentively in a bright clinic room"
              loading="lazy"
            />
          </figure>
        </div>

        {/* Text */}
        <div className={`${s.colText} ${inView ? s.in : ""}`}>
          <p className={s.kicker}>{kicker}</p>
          <h2 id="approach-title" className={s.title}>
            {title.split("\n").map((line, i) => (
              <span key={i} className={s.line}>
                {line}
                {i < title.split("\n").length - 1 && <br aria-hidden="true" />}
              </span>
            ))}
          </h2>

          <div className={s.copy}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <button
            type="button"
            className={s.cta}
            onClick={onCTAClick}
            aria-label={`${ctaText.toLowerCase()} — begin intake`}
          >
            {ctaText}{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
