import React, { useEffect, useRef, useState } from "react";
import s from "./Contact.module.css";

export default function Contact({
  kicker = "Get in Touch",
  title = "Take the First Step Toward Healing",
  blurb = `Your mental health matters, and we’re here to support you every step of the way. Reach out today to schedule an appointment and start your journey to wellness.`,
  phone = "505-595-1200",
  email = "info@noblepsychs.com",
  reasons = [
    "New Patient Inquiry",
    "Follow-up Appointment",
    "Medication Refill",
    "Billing / Insurance",
    "Other",
  ],
  submitUrl = "/api/contact", // replace with your endpoint
}) {
  const root = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  // form state
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    // basic front-end validation
    if (!data.firstName.trim() || !data.email.trim()) {
      setStatus({ state: "error", msg: "Please fill the required fields." });
      return;
    }
    try {
      setStatus({ state: "sending", msg: "Sending…" });
      // send JSON – replace with your backend
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus({
        state: "success",
        msg: "Thank you! We'll be in touch shortly.",
      });
      setData({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section ref={root} className={s.section} aria-labelledby="contact-title">
      <div className={s.container}>
        {/* LEFT: Intro + quick contacts */}
        <div className={`${s.left} ${inView ? s.in : ""}`}>
          <p className={s.kicker}>{kicker}</p>
          <h2 id="contact-title" className={s.title}>
            {title}
          </h2>
          <p className={s.blurb}>{blurb}</p>

          <ul className={s.quick} role="list">
            <li className={s.qItem}>
              <span className={s.qIcon} aria-hidden="true">
                📞
              </span>
              <a
                className={s.qLink}
                href={`tel:${phone.replace(/\D/g, "")}`}
                aria-label={`Call ${phone}`}
              >
                {phone}
              </a>
            </li>
            <li className={s.qItem}>
              <span className={s.qIcon} aria-hidden="true">
                ✉️
              </span>
              <a className={s.qLink} href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: Form card */}
        <div className={`${s.right} ${inView ? s.in : ""}`}>
          <form className={s.card} onSubmit={onSubmit} noValidate>
            <div className={s.row}>
              <label className={s.label}>
                First name{" "}
                <span className={s.req} aria-hidden="true">
                  *
                </span>
                <input
                  className={s.input}
                  name="firstName"
                  value={data.firstName}
                  onChange={onChange}
                  required
                  autoComplete="given-name"
                />
              </label>
              <label className={s.label}>
                Last name
                <input
                  className={s.input}
                  name="lastName"
                  value={data.lastName}
                  onChange={onChange}
                  autoComplete="family-name"
                />
              </label>
            </div>

            <label className={s.label}>
              Email{" "}
              <span className={s.req} aria-hidden="true">
                *
              </span>
              <input
                className={s.input}
                name="email"
                type="email"
                value={data.email}
                onChange={onChange}
                required
                autoComplete="email"
              />
            </label>

            <label className={s.label}>
              Reason
              <select
                className={s.select}
                name="reason"
                value={data.reason}
                onChange={onChange}
                aria-label="Reason for contacting us"
              >
                <option value="">Select…</option>
                {reasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <label className={s.label}>
              Phone
              <input
                className={s.input}
                name="phone"
                inputMode="tel"
                value={data.phone}
                onChange={onChange}
                autoComplete="tel"
                placeholder=""
              />
            </label>

            <label className={s.label}>
              Write a message
              <textarea
                className={s.textarea}
                name="message"
                rows="4"
                value={data.message}
                onChange={onChange}
                placeholder=""
              />
            </label>

            <label className={`${s.check} ${data.consent ? s.checked : ""}`}>
              <input
                type="checkbox"
                name="consent"
                checked={data.consent}
                onChange={onChange}
                className={s.checkInput}
              />
              <span className={s.checkBox} aria-hidden="true" />
              <span className={s.checkText}>
                I consent to receive service-related text messages from Noble
                Psychiatric Services LLC. Message & data rates may apply. Reply
                STOP to opt out, HELP for help.
              </span>
            </label>

            <div className={s.actions}>
              <button
                type="submit"
                className={s.submit}
                disabled={status.state === "sending"}
                aria-disabled={status.state === "sending"}
              >
                {status.state === "sending" ? "Sending…" : "Submit"}
              </button>
              <span
                role="status"
                aria-live="polite"
                className={`${s.status} ${
                  status.state !== "idle" ? s.show : ""
                } ${status.state}`}
              >
                {status.msg}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
