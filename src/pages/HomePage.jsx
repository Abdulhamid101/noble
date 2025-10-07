import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Approach from "../components/Approach/Approach";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Insurance from "../components/Insurance/Insurance";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import bg from "../assets/Healingimg.jpg";

export default function HomePage() {
  return (
    <main id="main">
      <section id="home" aria-label="Home">
        <Hero
          bg={bg}
          eyebrow="Compassionate & Professional Psychiatric Care for Your Well-Being"
          title="Personalized Mental Health Solutions"
          ctaText="Start Your Healing Journey"
          phone="505-595-1200"
          onCTAClick={() => (window.location.href = "/book")}
        />
      </section>

      <section id="about" aria-label="About">
        <About onCTAClick={() => (window.location.href = "/about")} />
      </section>

      <section id="approach">
        <Approach />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="whyChooseUs">
        <WhyChooseUs />
      </section>

      <section id="insurance">
        <Insurance />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      {/* This id is what /#contact will scroll to */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
