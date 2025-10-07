import React from "react";
import { Link } from "react-router-dom";
import s from "./FormsPage.module.css";
import forms from "../../assets/faq.avif"

const HERO = "/forms-hero.jpg";

export default function FormsPage() {
  return (
    <main id="main" className={s.page}>
      {/* ===== Hero ===== */}
      <section
        className={s.hero}
        aria-label="Forms header"
        style={{ "--hero-bg": `url(${forms})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title}>Forms</h1>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className={s.intro} aria-labelledby="forms-title">
        <div className={s.container}>
          <h2 id="forms-title" className={s.h2}>
            To make your experience seamless
          </h2>
          <p className={s.lead}>
            We’ve gathered important forms and documents in one place. Whether
            you’re a new patient, updating records, or requesting specific
            services, you can find what you need here. Download, print, or
            complete them online.
          </p>

          <div className={s.actions}>
            <Link
              className={s.primary}
              to = "/bookOnlinePage"
              rel="noreferrer"
            >
              Access Forms Here <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
