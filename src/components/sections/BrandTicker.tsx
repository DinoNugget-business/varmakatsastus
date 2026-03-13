"use client";

import { useTranslations } from "next-intl";
import { BRANDS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const REFRIGERATION_BRANDS = BRANDS.refrigeration.map((b) => b.name);
const HEATING_BRANDS = [
  ...BRANDS.heating.map((b) => b.name),
  ...BRANDS.other.map((b) => b.name),
];

function TickerRow({
  brands,
  label,
  reverse,
}: {
  brands: string[];
  label: string;
  reverse?: boolean;
}) {
  // Double the items for seamless loop
  const items = [...brands, ...brands];

  return (
    <div className="mb-4 last:mb-0">
      <div className="text-xs text-text-muted uppercase tracking-wider mb-2 text-center font-semibold">
        {label}
      </div>
      <div className="overflow-hidden">
        <div className={reverse ? "ticker-track-reverse flex gap-4 w-max" : "ticker-track flex gap-4 w-max"}>
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-bg-light border border-border-light
                font-display font-semibold text-sm text-text-primary
                hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandTicker() {
  const t = useTranslations("home");

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title={t("brandsTitle")}
            subtitle={t("brandsSubtitle")}
          />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <TickerRow
          brands={REFRIGERATION_BRANDS}
          label={t("brandsRefrigerationLabel")}
        />
        <TickerRow
          brands={HEATING_BRANDS}
          label={t("brandsHeatingLabel")}
          reverse
        />
      </ScrollReveal>
    </section>
  );
}
