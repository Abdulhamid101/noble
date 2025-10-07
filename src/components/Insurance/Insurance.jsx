import React from "react";
import s from "./Insurance.module.css";

/* Swap these with your actual assets (SVG/PNG/WebP). */
import aetna from "../../assets/aetna.png";
import bcbs from "../../assets/bcbsa.jpg";
import carelon from "../../assets/carelon.png";
import cigna from "../../assets/cigna.webp";
import cms from "../../assets/cms.png";
import humana from "../../assets/humana.webp";
import medicaid from "../../assets/medicaid.webp";
import optum from "../../assets/optum.png";
import presbyterian from "../../assets/presbyterian.jpg";
import tricare from "../../assets/TRICARE.svg";
import uhg from "../../assets/uhg.jpeg";
import ana from "../../assets/ana.png";

const DEFAULT_LOGOS = [
  { src: carelon, alt: "Carelon Behavioral Health" },
  { src: bcbs, alt: "BlueCross BlueShield" },
  { src: humana, alt: "Humana" },
  { src: uhg, alt: "UnitedHealth Group" },
  { src: aetna, alt: "Aetna" },
  { src: optum, alt: "Optum" },
  { src: tricare, alt: "TRICARE" },
  { src: medicaid, alt: "Medicaid" },
  { src: cigna, alt: "Cigna" },
  { src: presbyterian, alt: "Presbyterian" },
  { src: cms, alt: "Centers for Medicare & Medicaid Services" },
  { src: ana, alt: "ANA" },
];

export default function Insurance({
  title = "Insurance We Accept",
  logos = DEFAULT_LOGOS,
}) {
  // Duplicate the list to create a seamless loop.
  const loop = [...logos, ...logos];

  return (
    <section className={s.section} aria-labelledby="ins-title">
      <div className={s.header}>
        <h2 id="ins-title" className={s.title}>
          {title}
        </h2>
      </div>

      {/* Auto-scrolling marquee (decorative; screen readers use the grid below) */}
      <div className={s.trackWrap} aria-hidden="true">
        <ul className={s.track}>
          {loop.map((l, i) => (
            <li className={s.item} key={`${l.alt}-${i}`}>
              <img className={s.logo} src={l.src} alt="" />
            </li>
          ))}
        </ul>
      </div>

      {/* Static grid (visible only for prefers-reduced-motion users) */}
      <ul className={s.grid} role="list">
        {logos.map((l) => (
          <li className={s.gridItem} key={l.alt}>
            <img className={s.gridLogo} src={l.src} alt={l.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
