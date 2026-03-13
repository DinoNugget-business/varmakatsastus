"use client";

import { useTranslations } from "next-intl";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-dark py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title={t("howTitle")}
            subtitle={t("howSubtitle")}
            light
            accent
          />
        </ScrollReveal>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-brand-border">
            <div className="process-line-fill h-full bg-brand-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <ScrollReveal key={step.key}>
                <div className="relative text-center">
                  {/* Number + icon */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-surface border border-brand-border mb-5">
                    <Icon
                      name={step.icon as IconName}
                      size={32}
                      className="text-brand-accent"
                    />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-light mb-2">
                    {t(`how${step.key}Title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-sm text-text-muted-dark leading-relaxed">
                    {t(`how${step.key}Desc` as Parameters<typeof t>[0])}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
