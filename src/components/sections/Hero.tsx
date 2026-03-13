"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";

const SLIDES = [
  "/images/services/carousel-1.jpg",
  "/images/services/carousel-2.jpg",
  "/images/services/carousel-3.jpg",
];

export default function Hero() {
  const t = useTranslations("home");
  const [current, setCurrent] = useState(0);
  const [scrollHidden, setScrollHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollHidden(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[480px] max-h-[700px] overflow-hidden">
      {/* Background slides */}
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-brand-dark/70 to-brand-dark/50" />

      {/* Floating shapes — ambient motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-shape absolute w-[600px] h-[600px] rounded-full bg-brand-accent opacity-[0.06] -top-[200px] -right-[100px]" />
        <div className="hero-shape-reverse absolute w-[400px] h-[400px] rounded-full bg-brand-primary-light opacity-[0.05] -bottom-[150px] -left-[80px]" />
        <div className="hero-shape-slow absolute w-[200px] h-[200px] rounded-full bg-brand-accent opacity-[0.04] top-[40%] left-[30%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-xl">
            <h1 className="hero-heading font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-light leading-tight mb-4">
              {t("heroTitle")}
            </h1>
            <p className="hero-subtext text-text-muted-dark text-base sm:text-lg mb-8 leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href={CONTACT.phoneHref}
                className="btn-sweep inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                  bg-brand-accent text-white hover:bg-brand-accent-dark
                  shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {t("ctaCta")}
              </a>
              <a
                href={CONTACT.emergencyHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                  border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white
                  transition-all duration-300"
              >
                24/7: {CONTACT.emergency}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce scroll indicator */}
      <div
        className={`scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-text-muted-dark opacity-60 ${
          scrollHidden ? "hidden" : ""
        }`}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Slide indicators */}
      <div className="hero-scroll absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-accent w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
