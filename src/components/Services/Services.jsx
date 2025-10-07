import React, { useEffect, useRef, useState } from "react";
import s from "./Services.module.css";
import imgConditions from "../../assets/servicesimg1.jpg";
import imgServices from "../../assets/servicesimg2.jpg";
import imgExtras from "../../assets/servicesimg3.jpeg";

export default function Services({
  kicker = "Our Services",
  title = "Your Path to Healing Begins\nwith the Right Support",
  conditions = [
    "Depression",
    "Anxiety",
    "Bipolar Disorder",
    "Schizophrenia",
    "ADHD",
    "PTSD",
    "Insomnia",
    "Substance Use",
    "Obsessive Compulsive Disorder (OCD)",
    "Complex Mental Illness",
  ],
  core = [
    "Comprehensive Psychiatric Evaluation",
    "Psychiatric Medication Management",
    "Psychotherapy",
  ],
  extras = [
    "ADHD Testing",
    "Genetics Testing",
    "Forms & Letters",
    "Second Opinion Consultation",
    "Online Medication Refill",
    "Referrals",
  ],
  onLearnConditions = () => {},
  onLearnCore = () => {},
  onLearnExtras = () => {},
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={s.section} aria-labelledby="services-title">
      <div className={s.header}>
        <p className={s.kicker}>{kicker}</p>
        <h2 id="services-title" className={s.title}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br aria-hidden="true" />}
            </span>
          ))}
        </h2>
      </div>

      <div className={s.grid}>
        {/* Card 1 */}
        <article
          className={`${s.card} ${inView ? s.in1 : ""}`}
          aria-labelledby="svc-conditions-h"
        >
          <figure className={s.figure}>
            <img
              className={s.image}
              src={imgConditions}
              alt="Clinician with patient in exam room"
              loading="lazy"
            />
          </figure>
          <h3 id="svc-conditions-h" className={s.cardTitle}>
            Conditions We Treat
          </h3>
          <ul className={s.list} role="list">
            {conditions.map((item) => (
              <li key={item} className={s.item}>
                <span className={s.tick} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={s.cta}
            onClick={onLearnConditions}
            aria-label="Learn more about conditions we treat"
          >
            LEARN MORE{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </article>

        {/* Card 2 */}
        <article
          className={`${s.card} ${inView ? s.in2 : ""}`}
          aria-labelledby="svc-core-h"
        >
          <figure className={s.figure}>
            <img
              className={s.image}
              src={imgServices}
              alt="Patient receiving supportive consultation"
              loading="lazy"
            />
          </figure>
          <h3 id="svc-core-h" className={s.cardTitle}>
            Services
          </h3>
          <ul className={s.list} role="list">
            {core.map((item) => (
              <li key={item} className={s.item}>
                <span className={s.tick} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={s.cta}
            onClick={onLearnCore}
            aria-label="Learn more about our core services"
          >
            LEARN MORE{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </article>

        {/* Card 3 */}
        <article
          className={`${s.card} ${inView ? s.in3 : ""}`}
          aria-labelledby="svc-extras-h"
        >
          <figure className={s.figure}>
            <img
              className={s.image}
              src={imgExtras}
              alt="Doctor reviewing results and forms with a patient"
              loading="lazy"
            />
          </figure>
          <h3 id="svc-extras-h" className={s.cardTitle}>
            Additional Services
          </h3>
          <ul className={s.list} role="list">
            {extras.map((item) => (
              <li key={item} className={s.item}>
                <span className={s.tick} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={s.cta}
            onClick={onLearnExtras}
            aria-label="Learn more about additional services"
          >
            LEARN MORE{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </article>
      </div>
    </section>
  );
}
