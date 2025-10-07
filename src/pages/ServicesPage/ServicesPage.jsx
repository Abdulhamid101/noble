import React, { useEffect } from "react";
import s from "./ServicesPage.module.css";
import serviceshero from "../../assets/serviceshero.avif"
import servicespageimg from "../../assets/servicespageimg.avif"
import servicespageimg2 from "../../assets/servicespageimg.avif"
import servicespageimg3 from "../../assets/servicespageimg3.avif"
import servicespageimg4 from "../../assets/servicespageimg4.avif"

export default function ServicesPage() {
  // reveal-on-scroll once
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
        aria-label="Services header"
        style={{ "--hero-bg": `url(${serviceshero})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            Services
          </h1>
          <p className={s.subtitle} data-reveal>
            (Telehealth Option Available)
          </p>
        </div>
      </section>

      {/* ===== Intro cards ===== */}
      <section className={s.cards} aria-labelledby="svc-cards-title">
        <div className={s.containerCenter}>
          <h2 id="svc-cards-title" className={s.h2} data-reveal>
            Care That Meets You Where You Are
          </h2>
          <p className={s.lead} data-reveal>
            Explore our personalized psychiatric services designed to support
            your mental wellness journey.
          </p>
        </div>

        <div className={s.cardGrid}>
          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                🧠
              </div>
              <h3 className={s.cardTitle}>
                Comprehensive Psychiatric Evaluation
              </h3>
            </header>
            <a
              className={s.cardBtn}
              href="#evaluation"
              aria-label="Learn more about Comprehensive Psychiatric Evaluation"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                💊
              </div>
              <h3 className={s.cardTitle}>Psychiatric Medication Management</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#medication"
              aria-label="Learn more about Psychiatric Medication Management"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                🪴
              </div>
              <h3 className={s.cardTitle}>Specialized Services</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#specialized"
              aria-label="Learn more about Specialized Services"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                💬
              </div>
              <h3 className={s.cardTitle}>Psychotherapy</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#psychotherapy"
              aria-label="Learn more about Psychotherapy"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>
        </div>
      </section>

      {/* ===== Detailed sections (alternating) ===== */}
      <section id="evaluation" className={s.split} aria-labelledby="eval-title">
        <div className={s.containerGrid}>
          <div className={s.splitText}>
            <h2 id="eval-title" className={s.h2} data-reveal>
              Comprehensive Psychiatric Evaluation
            </h2>
            <p className={s.body} data-reveal>
              Our comprehensive evaluations are the foundation of effective
              care. We take time to understand your history, current concerns,
              medical background, lifestyle, and goals. This in-depth assessment
              allows us to gain a holistic understanding of your needs and
              tailor a personalized treatment plan. Whether you’re new to
              psychiatric care or seeking a second opinion, we provide clarity,
              compassion, and clinical insight.
            </p>
          </div>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={servicespageimg}
              alt="Evaluation discussion during appointment"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        id="medication"
        className={`${s.split} ${s.alt}`}
        aria-labelledby="med-title"
      >
        <div className={s.containerGrid}>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={servicespageimg2}
              alt="Provider discussing medication options"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={s.splitText}>
            <h2 id="med-title" className={s.h2} data-reveal>
              Psychiatric Medication Management
            </h2>
            <p className={s.body} data-reveal>
              Medication can be powerful when thoughtfully integrated into your
              plan. We closely monitor effectiveness and tolerability, making
              adjustments as needed to optimize results and minimize side
              effects. You’ll be involved in collaborative decision-making, and
              we’ll provide clear education so you feel confident in your
              options every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section
        id="psychotherapy"
        className={s.split}
        aria-labelledby="psy-title"
      >
        <div className={s.containerGrid}>
          <div className={s.splitText}>
            <h2 id="psy-title" className={s.h2} data-reveal>
              Psychotherapy
            </h2>
            <p className={s.body} data-reveal>
              Also known as talk therapy, psychotherapy provides a safe,
              supportive space to explore thoughts, feelings, and behaviors.
              Sessions are tailored to your needs—helping you process trauma,
              manage stress, build coping strategies, and improve overall
              well-being. Our providers are trained in multiple evidence-based
              modalities and collaborate with licensed therapists when needed.
            </p>
          </div>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={servicespageimg3}
              alt="Counseling conversation in a calm setting"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        id="specialized"
        className={`${s.split} ${s.alt}`}
        aria-labelledby="spec-title"
      >
        <div className={s.containerGrid}>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={servicespageimg4}
              alt="Group discussion during specialized care program"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={s.splitText}>
            <h2 id="spec-title" className={s.h2} data-reveal>
              Specialized Services
            </h2>
            <p className={s.body} data-reveal>
              We provide specialized care for a variety of mental health
              concerns, including neurodevelopmental disorders (ADHD and Autism)
              and co-occurring conditions. We also support individuals
              navigating life transitions or complex needs with plans that
              reflect unique experiences and goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
