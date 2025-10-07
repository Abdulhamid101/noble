import React from "react";
import s from "./Footer.module.css";
// import logo from "../../assets/logo-light.png"; 

export default function Footer({
  kicker = "Your Mental Health Matters",
  headline = "Let’s Begin the Journey Together",
  ctaText = "SCHEDULE A FREE CONSULTATION",
  onCta = () => (window.location.href = "/book"),
  phone = "505-595-1200",
  email = "info@noblepsychs.com",
  addressLines = [
    "1330 San Pedro Drive NE",
    "Suite 205F",
    "Albuquerque, New Mexico",
    "87110",
  ],
  hours = [
    ["Monday - Friday", "7a–7p"],
    ["Saturday - Sunday", "7a–5p"],
  ],
  hoursNote = "“Outside Hours Available On Request”",
  year = new Date().getFullYear(),
}) {
  return (
    <footer className={s.wrap}>
      {/* Top CTA banner */}
      <div className={s.ribbon} role="region" aria-label="Call to action">
        <div className={s.ribbonInner}>
          <div className={s.ribbonText}>
            <p className={s.kicker}>{kicker}</p>
            <h2 className={s.headline}>{headline}</h2>
          </div>
          <button
            type="button"
            className={s.cta}
            onClick={onCta}
            aria-label="Schedule a free consultation"
          >
            {ctaText}{" "}
            <span aria-hidden="true" className={s.arrow}>
              ›
            </span>
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className={s.footer}>
        <div className={s.colBrand}>
          {/* <img src={logo} className={s.logo} alt="Noble Psychiatric Services" /> */}
          <a className={s.phone} href={`tel:${phone.replace(/\D/g, "")}`}>
            <span aria-hidden="true" className={s.icCall}>
              📞
            </span>
            {phone}
          </a>

          <ul className={s.social} role="list" aria-label="Social links">
            <li>
              <a href="#" aria-label="Instagram" className={s.soc}>
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className={s.soc}>
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className={s.soc}>
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube" className={s.soc}>
                <YouTube />
              </a>
            </li>
          </ul>

          <p className={s.copy}>
            Copyright © {year} Noble Psychiatric Services. All rights reserved.
          </p>
        </div>

        <nav className={s.col} aria-label="Resources">
          <h3 className={s.h}>Resources</h3>
          <ul className={s.links}>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/forms">Forms</a>
            </li>
          </ul>
        </nav>

        <nav className={s.col} aria-label="Links">
          <h3 className={s.h}>Links</h3>
          <ul className={s.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="/conditions">Conditions We Treat</a>
            </li>
            <li>
              <a href="/additional-services">Additional Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
          </ul>
        </nav>

        <address className={s.col} aria-label="Contact Info">
          <h3 className={s.h}>Contact Info</h3>
          <p className={s.addrRow}>
            <span aria-hidden="true" className={s.ic}>
              ✉️
            </span>
            <a className={s.addrLink} href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className={s.addrRow}>
            <span aria-hidden="true" className={s.ic}>
              📍
            </span>
            <span className={s.addr}>
              {addressLines.map((l, i) => (
                <span key={i} className={s.addrLine}>
                  {l}
                </span>
              ))}
            </span>
          </p>

          <h3 className={`${s.h} ${s.mt}`}>Hours of Operations</h3>
          <ul className={s.hours} role="list">
            {hours.map(([d, t]) => (
              <li key={d} className={s.hrLine}>
                <span>{d}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className={s.note}>{hoursNote}</p>
        </address>
      </div>
    </footer>
  );
}

/* ---- Inline SVGs (no external libs) ---- */
function Instagram(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 4a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      />
    </svg>
  );
}
function Facebook(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.64 9.13 8.4 9.93v-7.02H7.9v-2.9h2.37V9.41c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.58l-.41 2.9h-2.17V22c4.76-.8 8.4-4.94 8.4-9.93z"
      />
    </svg>
  );
}
function LinkedIn(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.6H9.41V9h3.41v1.56h.05c.47-.9 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.38v6.34zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  );
}
function YouTube(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.5 6.2a3.02 3.02 0 00-2.13-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.56A3.02 3.02 0 00.5 6.2 31.2 31.2 0 000 12c0 1.94.07 3.86.5 5.8a3.02 3.02 0 002.13 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.37-.56a3.02 3.02 0 002.13-2.14c.43-1.94.5-3.86.5-5.8 0-1.94-.07-3.86-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
      />
    </svg>
  );
}
