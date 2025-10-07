import React, { useEffect, useState } from "react";
import s from "./FAQPage.module.css";
import faq from "../../assets/faq.avif"

// swap with your hero image (WebP preferred)
const HERO = "/faq-hero.jpg";
// optional QR/scan image used in the first answer block
const SCAN = "/scan-qr.png";

const faqs = [
  {
    q: "What types of mental health conditions do you treat?",
    a: (
      <>
        <p>
          We provide treatment for a wide range of mental health concerns.
          Common conditions include:
        </p>
        <ul className={s.bullets}>
          <li>Anxiety disorders (GAD, panic disorder, social anxiety)</li>
          <li>Depression and mood disorders</li>
          <li>Bipolar disorder</li>
          <li>ADHD (Attention-Deficit/Hyperactivity Disorder)</li>
          <li>PTSD (Post-Traumatic Stress Disorder)</li>
          <li>OCD (Obsessive-Compulsive Disorder)</li>
          <li>Stress and burnout</li>
          <li>Grief and loss</li>
          <li>Substance use and addiction concerns</li>
        </ul>

        <aside className={s.scan}>
          <img
            src={SCAN}
            alt="Scan here to book an appointment"
            loading="lazy"
          />
        </aside>
      </>
    ),
    defaultOpen: true,
  },
  {
    q: "Do I need a referral to schedule an appointment?",
    a: "No. You can contact us directly to schedule. If a referral is required by your insurance plan, we’ll let you know during intake.",
  },
  {
    q: "What should I expect during my first appointment?",
    a: "Your first visit includes an in-depth psychiatric evaluation: history, current stressors, symptoms, medications, and goals. Together, we’ll outline a clear next-step plan.",
  },
  {
    q: "How do I schedule an appointment?",
    a: (
      <>
        The fastest way is to click <a href="/book">Book Online</a> and select
        your preferred time. You can also call{" "}
        <a href="tel:5055951200">505-595-1200</a>.
      </>
    ),
  },
  {
    q: "Do you offer telehealth appointments?",
    a: "Yes. Secure video visits are available for most services. In-person options are also offered when clinically appropriate.",
  },
  {
    q: "What if I need to reschedule or cancel my appointment?",
    a: "Please notify us at least 24 business hours in advance to avoid a late/cancel fee and to open the slot for other patients.",
  },
  {
    q: "Do you accept insurance?",
    a: "We’re in-network with many plans (Carelon, BCBS, Humana, UHG/Optum, Aetna, Presbyterian, Medicaid/Centennial, CMS and others). Coverage varies—our team will verify benefits.",
  },
  {
    q: "What payment options do you offer?",
    a: "We accept most major credit/debit cards and HSA/FSA. Co-pays and fees are due at the time of service.",
  },
  {
    q: "Can your providers (MD/NP) prescribe medication?",
    a: "Yes. Our psychiatric clinicians are licensed to evaluate, diagnose, and prescribe when appropriate.",
  },
  {
    q: "How do I request a prescription refill?",
    a: "Use the patient portal or call the office during business hours. Please request refills 2–3 business days before you run out.",
  },
  {
    q: "What types of therapy do you offer?",
    a: "We incorporate evidence-based approaches including CBT, DBT-informed skills, behavioral activation, solution-focused tools, and supportive psychotherapy.",
  },
];

export default function FAQPage() {
  // which items are open? default from data
  const [open, setOpen] = useState(() => faqs.map((f) => !!f.defaultOpen));

  // small reveal animation on scroll
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
      { threshold: 0.18 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggle = (i) =>
    setOpen((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });

  return (
    <main id="main" className={s.page}>
      {/* ===== Hero ===== */}
      <section
        className={s.hero}
        aria-label="FAQ header"
        style={{ "--hero-bg": `url(${faq})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            FAQs
          </h1>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className={s.wrap} aria-labelledby="faq-title">
        <div className={s.container}>
          <h2 id="faq-title" className={s.h2} data-reveal>
            Frequently asked questions
          </h2>

          {/* simple category tab (matches screenshot showing “General”) */}
          <div className={s.tabs} data-reveal>
            <button
              className={`${s.tab} ${s.active}`}
              type="button"
              aria-current="page"
            >
              General
            </button>
          </div>

          <ul className={s.list} role="list">
            {faqs.map((item, i) => {
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-trigger-${i}`;
              return (
                <li key={i} className={s.item} data-reveal>
                  <h3 className={s.q}>
                    <button
                      id={btnId}
                      type="button"
                      className={s.trigger}
                      aria-controls={panelId}
                      aria-expanded={open[i]}
                      onClick={() => toggle(i)}
                    >
                      <span>{item.q}</span>
                      <svg
                        className={`${s.chev} ${open[i] ? s.rot : ""}`}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`${s.panel} ${open[i] ? s.show : ""}`}
                  >
                    <div className={s.a}>{item.a}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
