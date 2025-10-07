import React, { useEffect, useRef, useState } from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo-dark.png";

export default function Navbar({ bookHref = "/bookOnlinePage", theme = "light" }) {
  const navRef = useRef(null);
  const [deskOpen, setDeskOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mOpen, setMOpen] = useState(null);

  useEffect(() => {
    function onDoc(e) {
      if (!navRef.current || navRef.current.contains(e.target)) return;
      setDeskOpen(null);
    }
    const onScroll = () => setDeskOpen(null);
    document.addEventListener("click", onDoc);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onDoc);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const { body } = document;
    body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMOpen(null);
      }
    }
    function onDoc(e) {
      if (!mobileOpen) return;
      if (!navRef.current?.contains(e.target)) {
        setMobileOpen(false);
        setMOpen(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDoc);
    };
  }, [mobileOpen]);

  const DROPS = {
    services: [
      { label: "Conditions We Treat", to: "/ConditionsPage" },
      { label: "Additional Services", to: "/specializedPage" },
    ],
    resources: [
      { label: "Mental Health Links", to: "/resourcesLinksPage" },
      { label: "Blog", to: "/blogIndex" },
      { label: "FAQ", to: "/fAQPage" },
      { label: "Forms", to: "/formsPage" },
    ],
  };

  return (
    <header
      ref={navRef}
      className={`${s.sticky} ${theme === "teal" ? s.teal : s.light}`}
    >
      <div className={s.bar}>
        {/* Brand */}
        <Link
          className={s.brand}
          to="/"
          aria-label="Noble Psychiatric Services home"
        >
          {/* <img className={s.logo} src={logo} alt="" /> */}
          <span className={s.sr}>Noble Psychiatric Services</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={s.nav} aria-label="Primary">
          <ul className={s.menu} role="menubar">
            <li className={s.item} role="none">
              <Link role="menuitem" to="/" className={s.link}>
                Home
              </Link>
            </li>

            <li className={s.item} role="none">
              <Link role="menuitem" to="/about" className={s.link}>
                About
              </Link>
            </li>

            {/* Services dropdown */}
            <li
              className={`${s.item} ${s.hasMenu} ${
                deskOpen === "services" ? s.open : ""
              }`}
              role="none"
            >
              <button
                type="button"
                className={s.linkBtn}
                aria-haspopup="true"
                aria-expanded={deskOpen === "services"}
                onClick={() =>
                  setDeskOpen(deskOpen === "services" ? null : "services")
                }
              >
                <Link to="/services" className={s.link}>
                  Services
                </Link>
              </button>
              <ul className={s.dropdown} role="menu" aria-label="Services">
                {DROPS.services.map((o) => (
                  <li key={o.to} role="none">
                    <Link role="menuitem" className={s.dropLink} to={o.to}>
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Resources dropdown */}
            <li
              className={`${s.item} ${s.hasMenu} ${
                deskOpen === "resources" ? s.open : ""
              }`}
              role="none"
            >
              <button
                type="button"
                className={s.linkBtn}
                aria-haspopup="true"
                aria-expanded={deskOpen === "resources"}
                onClick={() =>
                  setDeskOpen(deskOpen === "resources" ? null : "resources")
                }
              >
                Resources
              </button>
              <ul className={s.dropdown} role="menu" aria-label="Resources">
                {DROPS.resources.map((o) => (
                  <li key={o.to} role="none">
                    <Link role="menuitem" className={s.dropLink} to={o.to}>
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={s.item} role="none">
              {/* Contact stays on home page section */}
              <Link role="menuitem" to="/#contact" className={s.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Book now (desktop) */}
        <Link className={s.book} to="/bookOnlinePage">
          BOOK NOW <span aria-hidden="true">›</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className={s.burger}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile full-width BOOK NOW bar under header */}
      <Link
        className={`${s.mBookBar} ${mobileOpen ? s.hide : ""}`}
        to={bookHref}
        aria-label="Book now"
      >
        BOOK NOW <span aria-hidden="true">›</span>
      </Link>

      {/* Mobile panel */}
      <div
        className={`${s.panel} ${mobileOpen ? s.open : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <nav className={s.mNav} aria-label="Mobile">
          <Link className={s.mLink} to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <Link
            className={s.mLink}
            to="/about"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          {/* Mobile accordion: Services */}
          <button
            className={s.mSum}
            aria-expanded={mOpen === "services"}
            aria-controls="m-services"
            onClick={() => setMOpen(mOpen === "services" ? null : "services")}
          >
            Services
            <span
              className={`${s.chev} ${mOpen === "services" ? s.rot : ""}`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>
          <div
            id="m-services"
            className={`${s.mGroup} ${mOpen === "services" ? s.show : ""}`}
          >
            {DROPS.services.map((o) => (
              <Link
                key={o.to}
                className={s.mSublink}
                to={o.to}
                onClick={() => setMobileOpen(false)}
              >
                {o.label}
              </Link>
            ))}
          </div>

          {/* Mobile accordion: Resources */}
          <button
            className={s.mSum}
            aria-expanded={mOpen === "resources"}
            aria-controls="m-resources"
            onClick={() => setMOpen(mOpen === "resources" ? null : "resources")}
          >
            Resources
            <span
              className={`${s.chev} ${mOpen === "resources" ? s.rot : ""}`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>
          <div
            id="m-resources"
            className={`${s.mGroup} ${mOpen === "resources" ? s.show : ""}`}
          >
            {DROPS.resources.map((o) => (
              <Link
                key={o.to}
                className={s.mSublink}
                to={o.to}
                onClick={() => setMobileOpen(false)}
              >
                {o.label}
              </Link>
            ))}
          </div>

          {/* Contact (home hash) */}
          <Link
            className={s.mLink}
            to="/#contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <Link
            className={s.mBook}
            to="/bookOnlinePage"
            onClick={() => setMobileOpen(false)}
          >
            BOOK NOW <span aria-hidden="true">›</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
