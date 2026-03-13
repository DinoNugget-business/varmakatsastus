import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const REFERENCE_CATEGORIES = [
  { key: "boats", image: "/images/references/boat-1.jpeg" },
  { key: "refrigerationUnits", image: "/images/services/carousel-1.jpg" },
  { key: "bioRefrigeration", image: "/images/products/product-l7.png" },
  { key: "tractors", image: "/images/services/carousel-3.jpg" },
  { key: "vehicles", image: "/images/vehicles/service-sprinter.jpg" },
] as const;

export default function ReferencesPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("references.title")}
        subtitle={t("references.subtitle")}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {REFERENCE_CATEGORIES.map(({ key, image }) => (
              <ScrollReveal key={key} direction="scale">
                <div className="light-card rounded-xl overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={t(`references.${key}.title`)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg mb-2 text-text-primary">
                      {t(`references.${key}.title`)}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`references.${key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Boat gallery */}
          <div className="mt-12">
            <ScrollReveal>
              <h2 className="font-display font-bold text-xl mb-6 text-text-primary text-center">
                {t("references.boats.title")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
              {["/images/references/boat-1.jpeg", "/images/references/boat-2.jpeg", "/images/references/boat-whatsapp.jpeg"].map(
                (src) => (
                  <ScrollReveal key={src} direction="scale">
                    <div className="relative h-60 rounded-xl overflow-hidden group">
                      <Image
                        src={src}
                        alt="Venelämmitin asennus"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
