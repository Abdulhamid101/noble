import React, { useEffect } from "react";
import s from "./AboutPage.module.css";
import Insurance from "../../components/Insurance/Insurance";
import Testimonials from "../../components/Testimonials/Testimonials";
import mainabout from "../../assets/mainabout.avif"
import aboutpageimg2 from "../../assets/aboutpageimg2.webp"
import aboutpagehero from "../../assets/aboutpagehero.avif"
// import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

// OPTIONAL: swap these with your own assets in /public or /assets
const HERO = "/about-hero.jpg";
const PROVIDER_IMG = "/provider.webp";
const QR_IMG = "/qr.png";

export default function AboutPage() {
  // tiny reveal-on-scroll (runs once)
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
    document.querySelectorAll(`[data-reveal]`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main id="main" className={s.page}>
      {/* ===== Hero ===== */}
      <section
        className={s.hero}
        aria-label="About Header"
        style={{ "--bg": `url(${aboutpagehero})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            About
          </h1>
        </div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className={s.who} aria-labelledby="who-title">
        <div className={s.container}>
          <h2 id="who-title" className={s.h2} data-reveal>
            Who We Are
          </h2>
          <p className={s.lead} data-reveal>
            At Noble Psychiatric Services, we deliver compassionate, expert
            mental health care that’s as unique as you are. We combine
            evidence-based treatment with warm, patient-centered support—helping
            you build a path toward lasting well-being.
          </p>

          <ul className={s.bullets} role="list">
            <li className={s.bullet} data-reveal>
              <span className={s.icon} aria-hidden>
                🌿
              </span>
              <div>
                <h3>Holistic Healing</h3>
                <p>
                  We consider your mind, body, and environment—not just
                  symptoms.
                </p>
              </div>
            </li>
            <li className={s.bullet} data-reveal>
              <span className={s.icon} aria-hidden>
                🧭
              </span>
              <div>
                <h3>Personalized Treatment Plans</h3>
                <p>
                  Care is tailored to your goals, values, and day-to-day life.
                </p>
              </div>
            </li>
            <li className={s.bullet} data-reveal>
              <span className={s.icon} aria-hidden>
                🎓
              </span>
              <div>
                <h3>Experienced Professionals</h3>
                <p>Evidence-based methods with a compassionate, human touch.</p>
              </div>
            </li>
            <li className={s.bullet} data-reveal>
              <span className={s.icon} aria-hidden>
                🔒
              </span>
              <div>
                <h3>Safe & Confidential</h3>
                <p>A respectful space where you’re heard and understood.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className={s.split} aria-labelledby="mission-title">
        <div className={s.containerGrid}>
          <div className={s.splitImgWrap} data-reveal>
            <img
              src={mainabout}
              alt="A supportive therapy session"
              className={s.splitImg}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={s.splitText}>
            <h2 id="mission-title" className={s.h2} data-reveal>
              Our Mission
            </h2>
            <p className={s.body} data-reveal>
              We provide comprehensive psychiatric care in a safe, supportive
              environment. From evaluation and medication management to
              psychotherapy and collaborative planning, we partner with you to
              navigate challenges and build resilience.
            </p>
            <ul className={s.checks} role="list">
              <li data-reveal>Compassionate, patient-centered approach</li>
              <li data-reveal>
                Evidence-based treatments tailored to your needs
              </li>
              <li data-reveal>Clear, collaborative goal setting</li>
              <li data-reveal>Respect for your privacy and dignity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Vision ===== */}
      <section className={s.vision} aria-labelledby="vision-title">
        <div className={s.container}>
          <h2 id="vision-title" className={s.h2Light} data-reveal>
            Our Vision
          </h2>
          <p className={s.visionText} data-reveal>
            To be a trusted leader in modern mental health care—integrating
            research, technology, and compassionate care—so individuals and
            families can access the support they need with dignity and ease.
          </p>
        </div>
      </section>

      {/* ===== Why Choose Us (radial) ===== */}
      <section className={s.why} aria-labelledby="why-title">
        <div className={s.container}>
          <h2 id="why-title" className={s.h2Center} data-reveal>
            Expert Care Rooted in Compassion,
            <br />
            Built Around You
          </h2>

          <div className={s.radial}>
            <div className={s.spoke} data-reveal>
              <h3>
                Compassionate &<br />
                Experienced Providers
              </h3>
              <p>A team dedicated to your well-being.</p>
            </div>
            <div className={s.spoke} data-reveal>
              <h3>
                Confidential &<br />
                Supportive Environment
              </h3>
              <p>Your privacy and comfort are our priority.</p>
            </div>
            <div className={s.spoke} data-reveal>
              <h3>
                Personalized
                <br />
                Treatment Plans
              </h3>
              <p>Every journey is unique—so is our care.</p>
            </div>
            <div className={s.spoke} data-reveal>
              <h3>
                Convenient & Flexible
                <br />
                Appointments
              </h3>
              <p>In-person or virtual options with expert guidance.</p>
            </div>

            {/* <figure className={s.qr} data-reveal>
              <img src={QR_IMG} alt="" role="presentation" loading="lazy" />
              <figcaption className={s.qrCap}>Scan to Book an Appointment</figcaption>
            </figure> */}
          </div>
        </div>
      </section>

      {/* ===== Provider Profile ===== */}
      <section className={s.provider} aria-labelledby="provider-title">
        <div className={s.container}>
          <h2 id="provider-title" className={s.h2} data-reveal>
            Meet Your Provider
          </h2>

          <div className={s.card} data-reveal>
            <img
              src={aboutpageimg2}
              alt="Elvis Ondieki, DNP PMHNP-BC"
              className={s.headshot}
              loading="lazy"
              decoding="async"
            />
            <div className={s.cardBody}>
              <h3 className={s.providerName}>Elvis Ondieki</h3>
              <p className={s.providerCreds}>DNP, PMHNP-BC, MBA, NEA-BC</p>
              <p className={s.body}>
                Elvis Ondieki is a psychiatric-mental health nurse practitioner
                dedicated to delivering thoughtful, evidence-based care with
                empathy and respect. His approach blends science, compassion,
                and strong commitment to understanding the human mind.
              </p>

              <div className={s.cols}>
                <div>
                  <h4>Philosophy</h4>
                  <p>
                    Care that’s collaborative, goal-oriented, and tailored to
                    your life— empowering you to heal, grow, and thrive.
                  </p>
                </div>
                <div>
                  <h4>Special Interests</h4>
                  <ul className={s.ul} role="list">
                    <li>Anxiety & mood disorders</li>
                    <li>Trauma-informed care</li>
                    <li>Medication management</li>
                    <li>Holistic & lifestyle support</li>
                  </ul>
                </div>
              </div>

              <a
                className={s.cta}
                href="/book"
                aria-label="Book an appointment"
              >
                Book an Appointment <span aria-hidden>›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Insurance />
      <Testimonials />
    </main>
  );
}
