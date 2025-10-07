import React, { useEffect } from "react";
import s from "./SpecializedPage.module.css";
import conditionero from "../../assets/conditionero.avif"
import apecializedimg from "../../assets/apecializedimg.avif"
import apecializedimg2 from "../../assets/apecializedimg2.avif"
import specializedimg3 from "../../assets/specializedimg3.avif"
import specializedimg4 from "../../assets/specializedimg4.avif"
import specializedimg5 from "../../assets/specializedimg5.avif"
import { Link } from "react-router-dom";
  
export default function SpecializedPage() {
  // one-time reveal-on-scroll
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
        aria-label="Specialized services header"
        style={{ "--hero-bg": `url(${conditionero})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            Specialized
          </h1>
        </div>
      </section>

      {/* ===== Top cards ===== */}
      <section className={s.cards} aria-labelledby="spec-cards-title">
        <div className={s.containerCenter}>
          <p className={s.lead} data-reveal>
            Explore specialized services designed to provide deeper insights,
            personalized care, and practical support.
          </p>
        </div>

        <div className={s.cardGrid}>
          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                🧭
              </div>
              <h3 className={s.cardTitle}>ADHD Testing</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#adhd"
              aria-label="Learn more about ADHD Testing"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                🧬
              </div>
              <h3 className={s.cardTitle}>Genetics Testing</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#genetics"
              aria-label="Learn more about Genetics Testing"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                📄
              </div>
              <h3 className={s.cardTitle}>Forms & Letters</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#forms"
              aria-label="Learn more about Forms and Letters"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                🔎
              </div>
              <h3 className={s.cardTitle}>Second Opinion Consultation</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#second"
              aria-label="Learn more about Second Opinion Consultation"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>

          <article className={s.card} data-reveal>
            <header>
              <div className={s.cardIcon} aria-hidden>
                💊
              </div>
              <h3 className={s.cardTitle}>Online Medication Refill</h3>
            </header>
            <a
              className={s.cardBtn}
              href="#refill"
              aria-label="Learn more about Online Medication Refill"
            >
              Learn More <span aria-hidden>›</span>
            </a>
          </article>
        </div>
      </section>

      {/* ===== Detailed sections (alternating) ===== */}
      <section id="adhd" className={s.split} aria-labelledby="adhd-title">
        <div className={s.containerGrid}>
          <div className={s.splitText}>
            <h2 id="adhd-title" className={s.h2} data-reveal>
              ADHD Testing
            </h2>
            <p className={s.body} data-reveal>
              Our comprehensive ADHD evaluations help determine whether
              attention-deficit/hyperactivity disorder is affecting daily life.
              Using evidence-based tools and clinical interviews, we assess
              symptoms, functioning, and rule out other potential causes.
              Whether for adults or adolescents, we’ll guide you toward the
              right treatment and supports.
            </p>
          </div>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={apecializedimg}
              alt="Illustration of ADHD assessment concept"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        id="genetics"
        className={`${s.split} ${s.alt}`}
        aria-labelledby="gen-title"
      >
        <div className={s.containerGrid}>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={apecializedimg2}
              alt="Microscope or lab setting for genetic testing"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={s.splitText}>
            <h2 id="gen-title" className={s.h2} data-reveal>
              Genetics Testing
            </h2>
            <p className={s.body} data-reveal>
              Through advanced genetic testing, we offer insights into how your
              body may respond to certain psychiatric medications. This can
              reduce trial-and-error, support more informed decisions, and help
              personalize treatment planning. Your genetics are unique—your care
              should be too.
            </p>
          </div>
        </div>
      </section>

      <section id="forms" className={s.split} aria-labelledby="forms-title">
        <div className={s.containerGrid}>
          <div className={s.splitText}>
            <h2 id="forms-title" className={s.h2} data-reveal>
              Forms & Letters
            </h2>
            <p className={s.body} data-reveal>
              After evaluation, we can provide documentation to support care,
              legal processes, academic needs, or occupational requirements—such
              as psychiatric evaluations, clearance letters, fitness-for-duty,
              return-to-work/school notes, accommodation letters, treatment
              compliance confirmations, and summaries for continuity of care.
              (Timing and appropriateness determined by the treating clinician.)
            </p>
          </div>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={specializedimg3}
              alt="Close-up of clinician completing forms"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        id="second"
        className={`${s.split} ${s.alt}`}
        aria-labelledby="second-title"
      >
        <div className={s.containerGrid}>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={specializedimg4}
              alt="Consultation conversation for second opinion"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={s.splitText}>
            <h2 id="second-title" className={s.h2} data-reveal>
              Second Opinion Consultation
            </h2>
            <p className={s.body} data-reveal>
              If you’re uncertain about a diagnosis or treatment plan, a second
              opinion consultation offers a fresh perspective. We’ll review your
              care, provide feedback, discuss alternatives, and collaborate with
              you to confirm the best path forward.
            </p>
          </div>
        </div>
      </section>

      <section id="refill" className={s.split} aria-labelledby="refill-title">
        <div className={s.containerGrid}>
          <div className={s.splitText}>
            <h2 id="refill-title" className={s.h2} data-reveal>
              Online Medication Refill
            </h2>
            <p className={s.body} data-reveal>
              We make ongoing care simple with a convenient online medication
              refill process for established patients—no waiting rooms. Timely
              access to prescriptions helps maintain consistent support for your
              mental health journey.
            </p>
            <p className={s.body} data-reveal>
              Need a refill?{" "}
              <Link className={s.link} to="/bookOnlinePage">
                Complete the Contact Form
              </Link>{" "}
              to get started.
            </p>
          </div>
          <div className={s.splitImgWrap} data-reveal>
            <img
              className={s.splitImg}
              src={specializedimg5}
              alt="Pharmacist handing patient a medication bottle"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
