"use client";

import { useTranslations } from "next-intl";
import { TRUST_STATS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustSignals() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-dark py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading title={t("trustTitle")} light accent />
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children">
          {TRUST_STATS.map((stat) => {
            const capKey = stat.key.charAt(0).toUpperCase() + stat.key.slice(1);
            return (
              <ScrollReveal key={stat.key} direction="scale">
                <div className="dark-card rounded-xl p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/15 flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={stat.icon as IconName}
                      size={22}
                      className="text-brand-accent"
                    />
                  </div>
                  <AnimatedCounter
                    value={t(`trust${capKey}Value`)}
                    className="block font-display font-bold text-2xl sm:text-3xl text-brand-accent mb-1"
                  />
                  <div className="text-text-muted-dark text-xs sm:text-sm">
                    {t(`trust${capKey}Label`)}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
