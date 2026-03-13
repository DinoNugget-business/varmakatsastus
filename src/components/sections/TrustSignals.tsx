"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedValue({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse numeric part: "20+" → target=20, suffix="+"
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return; // non-numeric like "24/7" or "ATP" — keep static

    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1600;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(target * easeOutQuart(progress));
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  // Initialize countable values to "0+" etc
  const match = value.match(/^(\d+)(.*)$/);
  const initialDisplay = match ? `0${match[2]}` : value;

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-3xl sm:text-4xl text-brand-accent mb-1">
        {animated.current || !match ? display : initialDisplay}
      </div>
      <div className="text-text-muted-dark text-sm">{label}</div>
    </div>
  );
}

export default function TrustSignals() {
  const t = useTranslations("home");

  const stats = [
    { value: t("trustYears"), label: t("trustYearsLabel") },
    { value: t("trustStaff"), label: t("trustStaffLabel") },
    { value: t("trustEmergency"), label: t("trustEmergencyLabel") },
    { value: t("trustAtp"), label: t("trustAtpLabel") },
  ];

  return (
    <section className="bg-brand-dark py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-light text-center mb-10">
            {t("trustTitle")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <AnimatedValue key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
