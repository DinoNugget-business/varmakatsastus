"use client";

import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-primary py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-light mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-text-muted-dark mb-8 text-base">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="btn-sweep inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                bg-brand-accent text-white hover:bg-brand-accent-dark
                shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {t("ctaCta")}: {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emergencyHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                border-2 border-white/30 text-text-light hover:bg-white/10 transition-all duration-300"
            >
              24/7: {CONTACT.emergency}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
