import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import { SERVICE_ICONS, CONTACT } from "@/lib/constants";
import type { IconName } from "@/components/ui/Icon";
import CtaBanner from "@/components/sections/CtaBanner";

const SERVICE_ITEMS: { key: string; image: string; badge?: boolean }[] = [
  { key: "refrigeration", image: "/images/services/carousel-1.jpg" },
  { key: "heating", image: "/images/services/webasto-product.jpg" },
  { key: "ac", image: "/images/services/ac-service.jpg" },
  { key: "atp", image: "/images/services/carousel-2.jpg", badge: true },
  { key: "boatsMotorhomes", image: "/images/services/boat-install.jpg" },
  { key: "tractors", image: "/images/services/carousel-3.jpg" },
  { key: "electrical", image: "/images/vehicles/service-sprinter.jpg" },
];

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      {/* Anchor nav */}
      <section className="bg-bg-white border-b border-border-light sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 min-w-max">
            {SERVICE_ITEMS.map(({ key }) => (
              <a
                key={key}
                href={`#${key}`}
                className="px-3 py-1.5 rounded-md text-xs font-semibold text-text-muted hover:text-brand-accent hover:bg-brand-accent/5 transition-colors whitespace-nowrap"
              >
                {t(`services.${key}.title`)}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {SERVICE_ITEMS.map(({ key, image, badge }, i) => (
            <ScrollReveal key={key} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                id={key}
                className={`light-card rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 scroll-mt-20 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="relative h-56 md:h-auto min-h-[220px]">
                  <Image
                    src={image}
                    alt={t(`services.${key}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center" style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                      <Icon
                        name={(SERVICE_ICONS as Record<string, string>)[key] as IconName}
                        size={22}
                        className="text-brand-primary"
                      />
                    </div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                      {t(`services.${key}.title`)}
                    </h2>
                  </div>
                  {badge && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3 w-fit">
                      <Icon name="shield" size={14} />
                      Viranomaisvaltuutettu
                    </div>
                  )}
                  <p className="text-text-muted leading-relaxed mb-4">
                    {t(`services.${key}.description`)}
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors w-fit"
                  >
                    <Icon name="phone" size={16} />
                    {t("common.contactUs")}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
