"use client";

import { useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export default function CtaBanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section className="relative bg-brand-darker border-t border-brand-border/30 overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-gold mb-3">
          {t("title")}
        </h2>
        <p className="text-text-muted text-sm sm:text-base mb-8 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-brand-gold text-white font-bold px-8 py-3.5 rounded-lg text-base hover:bg-brand-gold-dark transition-all duration-200 shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/35 hover:-translate-y-0.5 btn-shimmer"
        >
          <Calendar className="w-5 h-5" />
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
