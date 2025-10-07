import React, { useEffect, useRef, useState } from "react";
import s from "./WhyChooseUs.module.css";
// import qr from "../../assets/qr.png";

export default function WhyChooseUs({
  kicker = "Why Choose Us?",
  title = "Expert Care Rooted in\nCompassion, Built Around You",
  points = [
    {
      heading: "Compassionate &\nExperienced Providers",
      body: "A team dedicated to your mental well-being.",
    },
    {
      heading: "Confidential &\nSupportive Environment",
      body: "Your privacy and comfort are our priority.",
    },
    {
      heading: "Personalized Treatment\nPlans",
      body: "Every patient is unique, and so is our approach.",
    },
    {
      heading: "Convenient & Flexible\nAppointments",
      body: "A supportive space to explore, heal, and grow.",
    },
  ],
  qrAlt = "Scan to book an appointment",
  onQrClick = () => {},
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={s.section} aria-labelledby="why-title">
      <div className={s.header}>
        <p className={s.kicker}>{kicker}</p>
        <h2 id="why-title" className={s.title}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br aria-hidden="true" />}
            </span>
          ))}
        </h2>
      </div>

      <div className={s.layout}>
        {/* Left column points */}
        <ul
          className={`${s.points} ${s.left} ${inView ? s.in : ""}`}
          role="list"
        >
          {[points[0], points[2]].map((p, idx) => (
            <li key={idx} className={s.point}>
              <h3 className={s.pointH}>
                {p.heading.split("\n").map((l, i) => (
                  <span key={i}>
                    {l}
                    {i < p.heading.split("\n").length - 1 && (
                      <br aria-hidden="true" />
                    )}
                  </span>
                ))}
              </h3>
              <p className={s.pointP}>{p.body}</p>
              {/* arrow to center */}
              <svg
                className={`${s.arrow} ${s[`aL${idx + 1}`]}`}
                viewBox="0 0 200 90"
                aria-hidden="true"
              >
                <path d="M198 44c-52-42-110-42-192-32" className={s.path} />
                <polyline points="192,38 198,44 192,50" className={s.tip} />
              </svg>
            </li>
          ))}
        </ul>

        {/* Center QR card */}
        <button
          type="button"
          className={`${s.qrCard} ${inView ? s.in : ""}`}
          onClick={onQrClick}
          aria-label="Open booking page"
        >
          <div className={s.qrFrame}>
            <span className={s.scan}>SCAN HERE</span>
            <span className={s.sub}>BOOK AN APPOINTMENT</span>
            {/* <img className={s.qrImg} src={qr} alt={qrAlt} /> */}
            <span className={s.url}>www.noblepsychs.com</span>
          </div>
        </button>

        {/* Right column points */}
        <ul
          className={`${s.points} ${s.right} ${inView ? s.in : ""}`}
          role="list"
        >
          {[points[1], points[3]].map((p, idx) => (
            <li key={idx} className={s.point}>
              <h3 className={s.pointH}>
                {p.heading.split("\n").map((l, i) => (
                  <span key={i}>
                    {l}
                    {i < p.heading.split("\n").length - 1 && (
                      <br aria-hidden="true" />
                    )}
                  </span>
                ))}
              </h3>
              <p className={s.pointP}>{p.body}</p>
              {/* arrow to center */}
              <svg
                className={`${s.arrow} ${s[`aR${idx + 1}`]}`}
                viewBox="0 0 200 90"
                aria-hidden="true"
              >
                <path d="M2 44c52-42 110-42 192-32" className={s.path} />
                <polyline points="8,38 2,44 8,50" className={s.tip} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
