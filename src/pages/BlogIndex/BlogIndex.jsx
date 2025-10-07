import React, { useMemo, useState, useEffect } from "react";
import s from "./BlogIndex.module.css";

// swap these with your images (WebP recommended; can live in /public)
const HERO = "/blog-hero.jpg";

const POSTS = [
  {
    id: "breaking-the-silence",
    title:
      "Breaking the Silence: Understanding Depression Beyond the Stereotypes",
    date: "2025-02-03",
    author: "Noble Psych",
    readMins: 6,
    cover: "/blog/depression-chair.jpg",
    excerpt:
      "Depression is more than sadness. We explore symptoms, myths, and practical ways to start getting help and hope.",
    tags: ["depression", "myths", "coping"],
  },
  {
    id: "eating-disorders-finding-hope",
    title: "Understanding Eating Disorders: Breaking the Silence, Finding Hope",
    date: "2025-01-29",
    author: "Noble Psych",
    readMins: 5,
    cover: "/blog/eating-disorders-bowls.jpg",
    excerpt:
      "A practical overview of signs, risks, and recovery supports for eating disorders, including where to begin.",
    tags: ["eating-disorders", "recovery"],
  },
  {
    id: "panic-attacks-what-why-how",
    title:
      "Understanding Panic Attacks: What They Are and How to Take Back Control",
    date: "2025-01-24",
    author: "Noble Psych",
    readMins: 5,
    cover: "/blog/panic-hands.jpg",
    excerpt:
      "What happens during a panic attack, why it’s not dangerous, and step-by-step techniques to ride out the wave.",
    tags: ["anxiety", "panic"],
  },
  {
    id: "substance-use-disorder-path-forward",
    title: "Understanding Substance Use Disorder: A Path Toward Recovery",
    date: "2025-01-19",
    author: "Noble Psych",
    readMins: 6,
    cover: "/blog/sud-caps.jpg",
    excerpt:
      "SUD is common and treatable. We outline causes, options, and how to build a sustainable recovery plan.",
    tags: ["sud", "recovery"],
  },
  {
    id: "personality-who-you-are",
    title: "Understanding Personality: Who You Are and Why It Matters",
    date: "2025-01-14",
    author: "Noble Psych",
    readMins: 7,
    cover: "/blog/personality-group.jpg",
    excerpt:
      "Personality traits shape motivation and relationships. Learn how traits interact with mental health.",
    tags: ["personality"],
  },
  {
    id: "adhd-not-just-focus",
    title: "Understanding ADHD: It’s Not Just About Focus",
    date: "2025-01-09",
    author: "Noble Psych",
    readMins: 5,
    cover: "/blog/adhd-kid.jpg",
    excerpt:
      "ADHD impacts time, emotions, and executive skills. Here’s how to recognize it and what helps.",
    tags: ["adhd"],
  },
  {
    id: "bipolar-finding-balance",
    title:
      "Understanding Bipolar Disorder: Finding Balance in a World of Highs and Lows",
    date: "2025-01-04",
    author: "Noble Psych",
    readMins: 6,
    cover: "/blog/bipolar-portrait.jpg",
    excerpt:
      "Bipolar is treatable. We cover mood episodes, stabilization, and living well.",
    tags: ["bipolar"],
  },
  {
    id: "schizophrenia-stigma-hope",
    title: "Understanding Schizophrenia: Breaking the Stigma, Building Hope",
    date: "2024-12-28",
    author: "Noble Psych",
    readMins: 7,
    cover: "/blog/schizo-window.jpg",
    excerpt:
      "Symptoms, treatment options, and how recovery is possible with the right supports.",
    tags: ["schizophrenia", "stigma"],
  },
  {
    id: "ptsd-when-past-stays",
    title: "Understanding PTSD: When the Past Doesn’t Stay in the Past",
    date: "2024-12-22",
    author: "Noble Psych",
    readMins: 6,
    cover: "/blog/ptsd-hands.jpg",
    excerpt:
      "How trauma changes the brain and body, and which trauma-informed therapies help.",
    tags: ["ptsd", "trauma"],
  },
  {
    id: "anxiety-when-worry-takes-over",
    title: "Understanding Anxiety: When Worry Takes Over",
    date: "2024-12-16",
    author: "Noble Psych",
    readMins: 5,
    cover: "/blog/anxiety-sofa.jpg",
    excerpt:
      "The anxiety cycle, common triggers, and practical tools to calm the nervous system.",
    tags: ["anxiety"],
  },
];

export default function BlogIndex() {
  const [query, setQuery] = useState("");

  // basic filter (title, excerpt, tags)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return POSTS;
    return POSTS.filter((p) => {
      const hay = (
        p.title +
        " " +
        p.excerpt +
        " " +
        (p.tags || []).join(" ")
      ).toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  // scroll-reveal for each card
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
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered.length]);

  return (
    <main id="main" className={s.page}>
      {/* hero */}
      <section
        className={s.hero}
        style={{ "--hero-bg": `url(${HERO})` }}
        aria-label="Blog hero"
      >
        <div className={s.heroInner}>
          <h1 className={s.title}>Blog</h1>
        </div>
      </section>

      {/* toolbar */}
      <section className={s.toolbar} aria-label="Blog controls">
        <div className={s.container}>
          <div className={s.toolbarRow}>
            <div className={s.breadcrumb}>All Posts</div>

            <label className={s.searchWrap}>
              <span className={s.sr}>Search posts</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                className={s.search}
                placeholder="Search…"
              />
              <svg
                className={s.searchIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 14h-.79l-.28-.27a6 6 0 10-.71.71l.27.28v.79L20 20.5 21.5 19 15.5 14zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z" />
              </svg>
            </label>
          </div>
        </div>
      </section>

      {/* list */}
      <section className={s.listSec} aria-labelledby="list-title">
        <div className={s.container}>
          <h2 id="list-title" className={s.sr}>
            Posts
          </h2>

          <ul className={s.list} role="list">
            {filtered.map((p) => (
              <li key={p.id} className={s.item} data-reveal>
                <article className={s.card}>
                  <a
                    className={s.thumbLink}
                    href={`/blog/${p.id}`}
                    aria-label={p.title}
                  >
                    <img
                      className={s.thumb}
                      src={p.cover}
                      alt=""
                      role="presentation"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>

                  <div className={s.content}>
                    <div className={s.meta}>
                      <span className={s.by}>{p.author}</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime={p.date}>
                        {new Date(p.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span aria-hidden="true">•</span>
                      <span>{p.readMins} min read</span>
                    </div>

                    <h3 className={s.postTitle}>
                      <a className={s.postLink} href={`/blog/${p.id}`}>
                        {p.title}
                      </a>
                    </h3>

                    <p className={s.excerpt}>{p.excerpt}</p>

                    {p.tags?.length ? (
                      <ul className={s.tags} role="list">
                        {p.tags.map((t) => (
                          <li key={t} className={s.tag}>
                            #{t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {!filtered.length && (
            <p className={s.empty}>
              No posts match “{query}”. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* CTA strip (consistent with the rest of the site) */}
      <section className={s.ctaStrip} aria-label="Get started">
        <div className={s.stripInner}>
          <div>
            <p className={s.kicker}>Your Mental Health Matters</p>
            <h3 className={s.stripTitle}>Let’s Begin the Journey Together</h3>
          </div>
          <a className={s.stripBtn} href="/book">
            Schedule a Free Consultation <span aria-hidden>›</span>
          </a>
        </div>
      </section>
    </main>
  );
}
