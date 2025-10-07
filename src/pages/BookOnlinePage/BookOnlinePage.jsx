import React, { useMemo, useState } from "react";
import s from "./BookOnlinePage.module.css";

export default function BookOnlinePage() {
  const SERVICES = useMemo(
    () => [
      { id: "adult", label: "Adult Psychiatry (60 min)", price: "₦45,000" },
      { id: "child", label: "Child & Adolescent (60 min)", price: "₦40,000" },
      { id: "follow", label: "Follow-up (30 min)", price: "₦25,000" },
      {
        id: "therapy",
        label: "Therapy / Counseling (50 min)",
        price: "₦35,000",
      },
      {
        id: "assessment",
        label: "Assessment & Care Plan (75 min)",
        price: "₦60,000",
      },
    ],
    []
  );

  const PRACTITIONERS = [
    { id: "fs", name: "Dr. A. Kafidipe (Consultant Psychiatrist)" },
    { id: "om", name: "Dr. O. Musa (Psychiatrist)" },
    { id: "to", name: "Therapist T. Ogun (CBT/Family)" },
  ];

  const [form, setForm] = useState({
    service: "",
    practitioner: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
    mode: "clinic",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.service) e.service = "Select a service";
    if (!form.practitioner) e.practitioner = "Choose a practitioner";
    if (!form.date) e.date = "Pick a date";
    if (!form.time) e.time = "Pick a time";
    if (!form.name.trim()) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^[0-9+\-()\s]{7,}$/.test(form.phone))
      e.phone = "Valid phone required";
    if (!form.consent) e.consent = "Please accept the consent";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className={s.page}>
      <header className={s.hero}>
        <div className={s.heroInner}>
          <h1>Book an Appointment</h1>
          <p>
            Private, compassionate mental health care. Choose a service, pick a
            time, and you’re all set.
          </p>
        </div>
      </header>

      <main className={s.container}>
        {submitted ? (
          <section className={`${s.card} ${s.confirm}`}>
            <h2 className={s.cardTitle}>Booking Received ✅</h2>
            <p>
              Thank you, <strong>{form.name}</strong>. We’ve logged your request
              for
              <strong>
                {" "}
                {SERVICES.find((s) => s.id === form.service)?.label}
              </strong>{" "}
              with
              <strong>
                {" "}
                {PRACTITIONERS.find((p) => p.id === form.practitioner)?.name}
              </strong>{" "}
              on
              <strong> {form.date}</strong> at<strong> {form.time}</strong> (
              {form.mode}).
            </p>
            <p>You’ll get a confirmation email &amp; SMS shortly.</p>
            <button className={s.btn} onClick={() => setSubmitted(false)}>
              Book another
            </button>
          </section>
        ) : (
          <section className={s.grid}>
            <form
              className={`${s.card} ${s.form}`}
              onSubmit={handleSubmit}
              noValidate
            >
              <h2 className={s.cardTitle}>Your Session</h2>

              <div className={s.field}>
                <label>Service</label>
                <div className={s.combo}>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {svc.label} — {svc.price}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className={s.err}>{errors.service}</span>
                  )}
                </div>
              </div>

              <div className={s.field}>
                <label>Practitioner</label>
                <div className={s.combo}>
                  <select
                    value={form.practitioner}
                    onChange={(e) => update("practitioner", e.target.value)}
                    aria-invalid={!!errors.practitioner}
                  >
                    <option value="">Choose…</option>
                    {PRACTITIONERS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  {errors.practitioner && (
                    <span className={s.err}>{errors.practitioner}</span>
                  )}
                </div>
              </div>

              <div className={s.row2}>
                <div className={s.field}>
                  <label>Date</label>
                  <div className={s.combo}>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      aria-invalid={!!errors.date}
                    />
                    {errors.date && (
                      <span className={s.err}>{errors.date}</span>
                    )}
                  </div>
                </div>
                <div className={s.field}>
                  <label>Time</label>
                  <div className={s.combo}>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      aria-invalid={!!errors.time}
                    />
                    {errors.time && (
                      <span className={s.err}>{errors.time}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className={s.seg}>
                <h3 className={s.segTitle}>Contact Details</h3>
                <div className={s.row2}>
                  <div className={s.field}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Taiwo Kafidipe"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span className={s.err}>{errors.name}</span>
                    )}
                  </div>
                  <div className={s.field}>
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="e.g., +234 801 234 5678"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <span className={s.err}>{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className={s.row2}>
                  <div className={s.field}>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span className={s.err}>{errors.email}</span>
                    )}
                  </div>

                  <div className={s.field}>
                    <label>Mode</label>
                    <div className={s.modes}>
                      <label
                        className={`${s.chip} ${
                          form.mode === "clinic" ? s.on : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value="clinic"
                          checked={form.mode === "clinic"}
                          onChange={(e) => update("mode", e.target.value)}
                        />
                        In-clinic
                      </label>
                      <label
                        className={`${s.chip} ${
                          form.mode === "virtual" ? s.on : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value="virtual"
                          checked={form.mode === "virtual"}
                          onChange={(e) => update("mode", e.target.value)}
                        />
                        Virtual (Video)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.field}>
                <label>Additional Notes (optional)</label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your goals or concerns…"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>

              <div className={s.consent}>
                <label className={s.check}>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  I consent to secure processing of my data for appointment
                  scheduling.
                </label>
                {errors.consent && (
                  <span className={s.err}>{errors.consent}</span>
                )}
              </div>

              <button type="submit" className={s.btn}>
                Confirm Booking
              </button>
              <p className={s.tiny}>
                You’ll receive a confirmation email &amp; SMS once submitted.
              </p>
            </form>

            <aside className={`${s.card} ${s.summary}`}>
              <h2 className={s.cardTitle}>Summary</h2>
              <ul className={s.sumList}>
                <li>
                  <span>Service</span>
                  <strong>
                    {form.service
                      ? SERVICES.find((x) => x.id === form.service)?.label
                      : "—"}
                  </strong>
                </li>
                <li>
                  <span>Price</span>
                  <strong>
                    {form.service
                      ? SERVICES.find((x) => x.id === form.service)?.price
                      : "—"}
                  </strong>
                </li>
                <li>
                  <span>Practitioner</span>
                  <strong>
                    {form.practitioner
                      ? PRACTITIONERS.find((p) => p.id === form.practitioner)
                          ?.name
                      : "—"}
                  </strong>
                </li>
                <li>
                  <span>Date</span>
                  <strong>{form.date || "—"}</strong>
                </li>
                <li>
                  <span>Time</span>
                  <strong>{form.time || "—"}</strong>
                </li>
                <li>
                  <span>Mode</span>
                  <strong>
                    {form.mode === "virtual" ? "Virtual" : "In-clinic"}
                  </strong>
                </li>
              </ul>

              <div className={s.info}>
                <h3>Before your visit</h3>
                <ul>
                  <li>
                    Arrive 10–15 mins early (or join 5 mins early online).
                  </li>
                  <li>Bring current medications and prior reports.</li>
                  <li>For virtual: good internet, quiet space, headphones.</li>
                </ul>
              </div>

              <div className={s.policy}>
                <h3>Policies</h3>
                <ul>
                  <li>Reschedules up to 24h before your slot.</li>
                  <li>
                    No-show incurs a fee to keep slots available for others.
                  </li>
                </ul>
              </div>
            </aside>
          </section>
        )}
      </main>
    </div>
  );
}
