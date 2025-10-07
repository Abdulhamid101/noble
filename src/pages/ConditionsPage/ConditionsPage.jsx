import React, { useEffect } from "react";
import s from "./ConditionsPage.module.css";
import depression from "../../assets/depression.avif"
import Anxiety from "../../assets/Anxiety.avif"
import ADHD from "../../assets/ADHD.avif"
import Schizophrenia from "../../assets/Schizophrenia.avif"
import BipolarDisorder from "../../assets/BipolarDisorder.avif"
import PersonalityDisorder from "../../assets/PersonalityDisorder.avif"
import PTSD from "../../assets/PTSD.avif"
import EatingDisorders from "../../assets/EatingDisorders.avif"
import OCD from "../../assets/OCD.avif"
import Autism from "../../assets/Autism.avif"
import SUD from "../../assets/SUD.avif"
import conditionero from "../../assets/conditionero.avif"

const HERO = "/conditions-hero.jpg";

const CONDITIONS = [
  {
    key: "depression",
    img: depression,
    title: "Depression",
    text: "Depression is a common but serious mood disorder that can affect how you feel, think, and handle daily activities. We offer evidence-based care to reduce symptoms and help you regain energy, purpose, and hope.",
  },
  {
    key: "anxiety",
    img: Anxiety,
    title: "Anxiety",
    text: "Anxiety involves persistent worry, restlessness, and physical symptoms like tension or rapid heartbeat. We provide therapies and, when appropriate, medications that reduce anxiety and build coping strategies.",
  },
  {
    key: "adhd",
    img: ADHD,
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    text: "ADHD can affect attention, organization, and impulse control. We offer careful assessment and individualized plans to support focus, follow-through, and day-to-day success.",
  },
  {
    key: "schizophrenia",
    img: Schizophrenia,
    title: "Schizophrenia",
    text: "A complex mental health condition that may affect perception and thinking. With compassionate, comprehensive treatment and support, many people manage symptoms and lead meaningful lives.",
  },
  {
    key: "bipolar",
    img: BipolarDisorder,
    title: "Bipolar Disorder",
    text: "Bipolar disorder involves shifts in mood, energy, and activity levels. We focus on stabilization, relapse prevention, and recovery-oriented care to help you live well.",
  },
  {
    key: "personality",
    img: PersonalityDisorder,
    title: "Personality Disorder",
    text: "We work collaboratively to address patterns that impact relationships and functioning, using structured, evidence-based approaches in a respectful, validating environment.",
  },
  {
    key: "ptsd",
    img: PTSD,
    title: "Post-Traumatic Stress Disorder (PTSD)",
    text: "PTSD can follow distressing events and may include intrusive memories, avoidance, and hyperarousal. Trauma-informed care helps reduce symptoms and restore safety and connection.",
  },
  {
    key: "eating",
    img: EatingDisorders,
    title: "Eating Disorders",
    text: "Eating disorders impact physical and psychological health. We coordinate care with nutrition and therapy partners, offering monitoring, medication support, and recovery-focused planning.",
  },
  {
    key: "ocd",
    img: OCD,
    title: "Obsessive-Compulsive Disorder (OCD)",
    text: "OCD involves intrusive thoughts and repetitive behaviors. Exposure-based therapies (CBT/ERP) and medication can significantly reduce symptoms and improve quality of life.",
  },
  {
    key: "neurodev",
    img: Autism,
    title: "Neurodevelopmental Disorders (Autism, ADHD)",
    text: "We provide supportive evaluation and care for neurodevelopmental conditions, helping individuals and families access resources and skills for success at home, school, and work.",
  },
  {
    key: "substance",
    img: SUD,
    title: "Substance Use Disorder (SUD)",
    text: "We offer non-judgmental, recovery-focused treatment and coordination with community supports. Early intervention can improve outcomes and safety.",
  },
];

export default function ConditionsPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.in);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main id="main" className={s.page}>
      {/* ===== Hero ===== */}
      <section
        className={s.hero}
        aria-label="Conditions header"
        style={{ "--hero-bg": `url(${conditionero})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            Conditions We Treat
          </h1>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className={s.intro} aria-labelledby="intro-title">
        <div className={s.container}>
          <h2 id="intro-title" className={s.h2Center} data-reveal>
            Comprehensive Care for a Wide Range of Mental Health Conditions
          </h2>
          <p className={s.leadCenter} data-reveal>
            We address the full spectrum of psychiatric conditions with
            compassionate, expert, and personalized care—delivered in many forms
            and tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* ===== Condition grid ===== */}
      <section className={s.gridSec} aria-label="Condition list">
        <div className={s.grid}>
          {CONDITIONS.map((c) => (
            <article className={s.card} key={c.key} data-reveal>
              <div className={s.thumbWrap}>
                <img
                  src={c.img}
                  alt=""
                  role="presentation"
                  className={s.thumb}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className={s.cardTitle}>{c.title}</h3>
              <p className={s.body}>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Diagnosis band ===== */}
      <section className={s.band} aria-labelledby="diag-title">
        <div className={s.bandInner}>
          <h2 id="diag-title" className={s.bandTitle} data-reveal>
            Diagnosis
          </h2>
          <p className={s.bandText} data-reveal>
            Diagnosis involves a thorough evaluation by a licensed mental health
            professional. This typically includes a detailed interview, symptom
            assessment, and, when helpful, standardized screening tools. Early
            diagnosis and treatment can lead to better outcomes and a quicker
            return to wellness.
          </p>
        </div>
      </section>

      {/* ===== Treatment Options & How We Help ===== */}
      <section className={s.colsSec} aria-label="Treatment and support">
        <div className={s.containerCols}>
          <div className={s.col} data-reveal>
            <h2 className={s.h3}>Treatment Options</h2>
            <p className={s.body}>
              The good news is that mental health conditions are manageable and
              treatable. Many people recover fully with proper support.
              Treatment may include:
            </p>
            <ul className={s.ul}>
              <li>
                Psychotherapy (CBT, trauma-informed care, DBT-informed skills)
              </li>
              <li>Medication management when appropriate</li>
              <li>
                Lifestyle strategies (sleep, exercise, nutrition, stress
                reduction)
              </li>
              <li>Supportive services and care coordination</li>
            </ul>
          </div>

          <div className={s.col} data-reveal>
            <h2 className={s.h3}>How We Can Help</h2>
            <p className={s.body}>
              Whether you’re experiencing new symptoms or seeking ongoing
              support, we’re here to help you take the next step toward
              wellness.
            </p>
            <ul className={s.ul}>
              <li>Initial assessment and diagnosis</li>
              <li>Individualized treatment plans</li>
              <li>Ongoing medication management</li>
              <li>Collaboration with therapists and specialists (as needed)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
