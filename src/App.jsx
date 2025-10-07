import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./components/_routing/ScrollManager";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import BookOnlinePage from "./pages/BookOnlinePage/BookOnlinePage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import SpecializedPage from "./pages/SpecializedPage/SpecializedPage";
import ResourcesLinksPage from "./pages/ResourcesLinksPage/ResourcesLinksPage";
import BlogIndex from "./pages/BlogIndex/BlogIndex";
import FAQPage from "./pages/FAQPage/FAQPage";
import FormsPage from "./pages/FormsPage/FormsPage";
import s from "./App.module.css";

export default function App() {
  return (
    <>
      <NavBar bookHref="/book" theme="light" />
      <ScrollManager />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/bookOnlinePage" element={<BookOnlinePage />} />
        <Route path="/conditionsPage" element={<ConditionsPage />} />
        <Route path="/specializedPage" element={<SpecializedPage />} />
        <Route path="/resourcesLinksPage" element={<ResourcesLinksPage />} />
        <Route path="/blogIndex" element={<BlogIndex />} />
        <Route path="/fAQPage" element={<FAQPage />} />
        <Route path="/formsPage" element={<FormsPage />} />
        {/* <Route path="/specializedPage" element={<SpecializedPage />} /> */}
        {/* <Route path="/specializedPage" element={<SpecializedPage />} /> */}
      </Routes>

      <section className={s.Footer}>
        <Footer />
      </section>
    </>
  );
}
