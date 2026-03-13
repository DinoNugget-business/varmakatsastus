"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";

const SLIDES = [
  "/images/services/carousel-1.jpg",
  "/images/services/carousel-2.jpg",
  "/images/services/carousel-3.jpg",
];

export default function Hero() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated gradient mesh base */}
      <div className="absolute inset-0 hero-mesh" />

      {/* Background image slides */}
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 mix-blend-overlay opacity-0 ${
            i === current ? "!opacity-30" : ""
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/40 via-transparent to-brand-darker/60" />

      {/* Floating shapes — ambient motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-shape absolute w-[700px] h-[700px] rounded-full bg-brand-accent opacity-[0.08] -top-[300px] -right-[150px]" />
        <div className="hero-shape-reverse absolute w-[500px] h-[500px] rounded-full bg-brand-primary-light opacity-[0.07] -bottom-[200px] -left-[100px]" />
        <div className="hero-shape-slow absolute w-[300px] h-[300px] rounded-full bg-brand-accent opacity-[0.05] top-[35%] left-[25%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 w-full py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* ATP badge */}
            <div className="hero-heading inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6">
              <Icon name="shield" size={16} className="text-brand-accent" />
              <span className="text-xs font-semibold text-text-light tracking-wide uppercase">
                {t("heroBadge")}
              </span>
            </div>

            <h1 className="hero-heading font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-light leading-[1.1] mb-5">
              {t("heroTitle")}
            </h1>
            <p className="hero-subtext text-text-muted-dark text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
              {t("heroSubtitle")}
            </p>

            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href={CONTACT.phoneHref}
                className="btn-sweep inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                  bg-brand-accent text-white hover:bg-brand-accent-dark
                  shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon name="phone" size={18} />
                {t("heroCta")}
              </a>
              <a
                href={CONTACT.emergencyHref}
                className="emergency-pulse inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg font-semibold text-base
                  border-2 border-brand-accent text-brand-accent-light hover:bg-brand-accent hover:text-white
                  transition-all duration-300"
              >
                <Icon name="clock" size={18} />
                {tc("emergencyService")}: {CONTACT.emergency}
              </a>
            </div>
          </div>
        </div>

        {/* Stat mini-bar at bottom */}
        <div className="hero-scroll w-full border-t border-white/10 bg-brand-darker/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: t("statYears"), label: t("statYearsLabel") },
              { value: t("statStaff"), label: t("statStaffLabel") },
              { value: t("statAtp"), label: t("statAtpLabel") },
              { value: t("statEmergency"), label: t("statEmergencyLabel") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted-dark uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bounce scroll indicator */}
      <div
        className={`scroll-indicator absolute bottom-24 left-1/2 -translate-x-1/2 z-10 text-text-muted-dark ${
          scrollHidden ? "hidden" : ""
        }`}
        aria-hidden="true"
      >
        <Icon name="chevron-down" size={28} />
      </div>
    </section>
  );
}
