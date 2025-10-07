import React, { useEffect } from "react";
import s from "./ResourcesLinksPage.module.css";
import conditionnero from "../../assets/conditionero.avif"
import reasourceimg from "../../assets/reasourceimg.avif"
import reasourceimg2 from "../../assets/reasourceimg2.avif"

const CRISIS_LINES = [
  {
    name: "New Mexico Crisis Line",
    phone: "1-855-662-7474",
    text: "Free, 24/7 support from trained mental health professionals.",
    url: "https://nmcrisisline.com",
  },
  {
    name: "Agora Crisis Center",
    phone: "505-277-3013 or Toll-Free 1-855-505-4505",
    text: "A place to talk — no judgment, just someone to listen. Open to anyone.",
    url: "https://agoracares.org",
  },
  {
    name: "Veterans Crisis Line",
    phone: "1-800-273-8255 (press 1) or text 838255",
    text: "Confidential support for veterans, service members & families.",
    url: "https://www.veteranscrisisline.net",
  },
  {
    name: "Peer Support Warmline",
    phone: "1-855-466-7100 (call or text)",
    text: "Talk to someone who’s been there. Staffed by trained peers.",
  },
  {
    name: "Healthcare Worker & First Responder Support",
    phone: "1-855-507-5509",
    text: "Free support for those working in healthcare or emergency response.",
  },
  {
    name: "National Suicide & Crisis Lifeline",
    phone: "988",
    text: "Call or text 988 — immediate help 24/7.",
  },
];

const HOSPITALS = [
  {
    name: "UNM Psychiatric Center",
    details: "Comprehensive psychiatric care, including walk-in evaluations.",
    phone: "505-272-2800",
  },
  {
    name: "Presbyterian Kaseman Hospital – Behavioral Health",
    details: "Inpatient services and medication management.",
    phone: "505-291-2000",
  },
  {
    name: "Haven Behavioral Hospital",
    details: "Adult psychiatric and substance use care (inpatient).",
    phone: "505-254-4500",
  },
];

const HOUSING = [
  {
    name: "Albuquerque Homeless Assistance Helpline",
    phone: "505-768-HELP (4357)",
    url: "https://www.cabq.gov/family/services/homeless-services",
  },
  {
    name: "Domestic Violence Hotline",
    phone: "1-800-799-SAFE",
  },
  {
    name: "Albuquerque Rape Crisis Center",
    phone: "505-266-7711 (24/7)",
  },
  {
    name: "Child Abuse Reporting (CYFD)",
    phone: "855-333-7233",
  },
  {
    name: "APD Non-Emergency Line",
    phone: "505-242-COPS (2677)",
  },
];

const RECOVERY = [
  {
    name: "Alcoholics Anonymous (AA) – Albuquerque",
    phone: "505-266-1900",
    url: "https://www.albuquerqueaa.org/",
  },
  {
    name: "Al-Anon Family Groups",
    url: "https://al-anon.org/",
  },
];

const HELPFUL_LINKS = [
  {
    label: "Mindfulness exercises",
    url: "https://www.mindful.org/category/meditation/",
  },
  {
    label: "Self-Compassion (Kristin Neff)",
    url: "https://self-compassion.org/",
  },
  {
    label: "Virgin Pulse Desk Stretches",
    url: "https://community.virginpulse.com/",
  },
  {
    label: "NMConnect App (free for NM residents)",
    url: "https://nmcrisisline.com/nmconnect/",
  },
];

export default function ResourcesLinksPage() {
  // reveal on scroll (once)
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
        aria-label="Resources header"
        style={{ "--hero-bg": `url(${conditionnero})` }}
      >
        <div className={s.heroInner}>
          <h1 className={s.title} data-reveal>
            Mental Health Resources
          </h1>
        </div>
      </section>

      {/* ===== Guide intro & crisis block ===== */}
      <section className={s.guide} aria-labelledby="guide-title">
        <div className={s.container}>
          <h2 id="guide-title" className={s.h2} data-reveal>
            New Mexico Mental Health & Wellness Resource Guide
          </h2>
          <p className={s.lead} data-reveal>
            Whether you’re in a crisis, supporting someone who is, or just
            looking for local mental health services—this guide can help you
            find the support you need.
          </p>

          <div className={s.crisisWrap}>
            <div className={s.crisisList} data-reveal>
              <h3 className={s.h3}>
                <span aria-hidden>❗</span> Immediate Help (24/7 Crisis Lines)
              </h3>
              <ul className={s.list}>
                {CRISIS_LINES.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}</strong>
                    {c.phone ? (
                      <>
                        {" "}
                        —{" "}
                        <a
                          className={s.link}
                          href={`tel:${c.phone.replace(/[^\d]/g, "")}`}
                        >
                          {c.phone}
                        </a>
                      </>
                    ) : null}
                    <div className={s.sub}>{c.text}</div>
                    {c.url ? (
                      <div className={s.sub}>
                        <a
                          className={s.link}
                          href={c.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {new URL(c.url).host}
                        </a>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <figure className={s.crisisImg} data-reveal>
              <img
                src={reasourceimg}
                alt="Person on the phone receiving help"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ===== Hospitals ===== */}
      <section className={s.hospBand} aria-labelledby="hosp-title">
        <div className={s.bandInner}>
          <div className={s.hospGrid}>
            <figure className={s.hospImg} data-reveal>
              <img
                src={reasourceimg2}
                alt="Hospital corridor"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className={s.hospText} data-reveal>
              <h3 id="hosp-title" className={s.h3}>
                <span aria-hidden>🏥</span> Mental Health Hospitals
              </h3>
              <ul className={s.list}>
                {HOSPITALS.map((h) => (
                  <li key={h.name}>
                    <strong>{h.name}</strong>
                    <div className={s.sub}>{h.details}</div>
                    <div className={s.sub}>
                      <a
                        className={s.link}
                        href={`tel:${h.phone.replace(/[^\d]/g, "")}`}
                      >
                        {h.phone}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Housing & Recovery ===== */}
      <section className={s.resourcesCols} aria-label="Housing & recovery">
        <div className={s.container}>
          <div className={s.col} data-reveal>
            <h3 className={s.h3}>
              <span aria-hidden>🏠</span> Housing, Safety & Emergency Resources
            </h3>
            <ul className={s.list}>
              {HOUSING.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong>
                  {r.phone && (
                    <>
                      {" "}
                      —{" "}
                      <a
                        className={s.link}
                        href={`tel:${r.phone.replace(/[^\d]/g, "")}`}
                      >
                        {r.phone}
                      </a>
                    </>
                  )}
                  {r.url && (
                    <div className={s.sub}>
                      <a
                        className={s.link}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {new URL(r.url).host}
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.col} data-reveal>
            <h3 className={s.h3}>
              <span aria-hidden>💬</span> Recovery Support
            </h3>
            <ul className={s.list}>
              {RECOVERY.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong>
                  {r.phone && (
                    <>
                      {" "}
                      —{" "}
                      <a
                        className={s.link}
                        href={`tel:${r.phone.replace(/[^\d]/g, "")}`}
                      >
                        {r.phone}
                      </a>
                    </>
                  )}
                  {r.url && (
                    <div className={s.sub}>
                      <a
                        className={s.link}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {new URL(r.url).host}
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Helpful links & encouragement ===== */}
      <section className={s.links} aria-labelledby="links-title">
        <div className={s.container}>
          <h3 id="links-title" className={s.h3} data-reveal>
            Helpful Links
          </h3>
          <ul className={s.linkList} data-reveal>
            {HELPFUL_LINKS.map((l) => (
              <li key={l.url}>
                <a
                  className={s.link}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={s.note} data-reveal>
            <h4 className={s.h4}>
              <span aria-hidden>❤️</span> You Are Not Alone
            </h4>
            <p className={s.body}>
              New Mexico offers many paths to healing—therapy, safe spaces,
              medication support, and peer support. If you’re not sure where to
              start, dial <strong>988</strong>; help is just a conversation
              away.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
