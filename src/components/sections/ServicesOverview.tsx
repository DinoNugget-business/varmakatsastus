"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICE_ITEMS = [
  { key: "refrigeration", icon: "M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16l-2 2m4-4l-4 4m6-2l-2 2" },
  { key: "heating", icon: "M12 2v10m0 0l4-4m-4 4l-4-4M5 18a7 7 0 1114 0" },
  { key: "ac", icon: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1013 16H22m-7.59-7.41A2 2 0 1015 12H2" },
  { key: "atp", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { key: "boatsMotorhomes", icon: "M2 20l.955-4.774A1 1 0 013.937 14.5H20a1 1 0 01.962.726L22 20M4 14V8a2 2 0 012-2h12a2 2 0 012 2v6M12 2v4" },
  { key: "electrical", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8" },
] as const;

export default function ServicesOverview() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title={t("home.servicesTitle")}
            subtitle={t("home.servicesSubtitle")}
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICE_ITEMS.map(({ key, icon }) => (
            <ScrollReveal key={key}>
              <Link
              href="/palvelut"
              className="group block light-card rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-primary group-hover:text-brand-accent transition-colors icon-hover-lift"
                >
                  <path d={icon} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-text-primary">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                {t(`services.${key}.description`)}
              </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
