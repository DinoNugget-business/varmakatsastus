import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  CircleDot,
  Wrench,
  Car,
  Warehouse,
  ShoppingBag,
  Coffee,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SERVICE_LINKS } from "@/lib/constants";

const SERVICE_ICONS = [
  ClipboardCheck,
  CircleDot,
  Wrench,
  Car,
  Warehouse,
  ShoppingBag,
  Coffee,
];

export default function ServicesOverview() {
  const t = useTranslations();

  const services = [
    { key: "inspection", icon: SERVICE_ICONS[0] },
    { key: "tires", icon: SERVICE_ICONS[1] },
    { key: "repair", icon: SERVICE_ICONS[2] },
    { key: "carwash", icon: SERVICE_ICONS[3] },
    { key: "tirehotel", icon: SERVICE_ICONS[4] },
    { key: "parts", icon: SERVICE_ICONS[5] },
    { key: "cafe", icon: SERVICE_ICONS[6] },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 relative dark-section-divider bg-brand-darker overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <SectionHeading
            title={t("home.servicesTitle")}
            subtitle={t("home.servicesSubtitle")}
            dark
          />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ key, icon: Icon }, index) => (
            <AnimateOnScroll key={key} delay={index * 80}>
              <Card
                icon={<Icon className="w-8 h-8" />}
                title={t(`services.${key}.title`)}
                description={t(`services.${key}.description`)}
                href={SERVICE_LINKS[key] ?? undefined}
                linkLabel={SERVICE_LINKS[key] ? t("common.readMore") : undefined}
                dark
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
