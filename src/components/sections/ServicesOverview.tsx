"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICE_ICONS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICE_KEYS = [
  "refrigeration",
  "heating",
  "ac",
  "atp",
  "boatsMotorhomes",
  "electrical",
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
            accent
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICE_KEYS.map((key) => (
            <ScrollReveal key={key}>
              <Link
                href="/palvelut"
                className="group block light-card rounded-xl p-6 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-accent/15 transition-colors">
                  <Icon
                    name={SERVICE_ICONS[key] as IconName}
                    size={28}
                    className="text-brand-primary group-hover:text-brand-accent transition-colors"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-text-primary group-hover:text-brand-accent transition-colors">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                  {t(`services.${key}.description`)}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                  {t("common.learnMore")}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
