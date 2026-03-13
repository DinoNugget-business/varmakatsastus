"use client";

import { useTranslations } from "next-intl";
import { BRANDS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ALL_BRANDS = [
  ...BRANDS.refrigeration,
  ...BRANDS.heating,
  ...BRANDS.other,
];

export default function BrandsCarousel() {
  const t = useTranslations("home");

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title={t("brandsTitle")}
            subtitle={t("brandsSubtitle")}
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {ALL_BRANDS.map((brand) => {
              const inner = (
                <div className="light-card rounded-lg px-5 py-3 text-center min-w-[120px]">
                  <span className="font-display font-semibold text-sm text-text-primary">
                    {brand.name}
                  </span>
                </div>
              );

              return brand.url ? (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={brand.name}>{inner}</div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
