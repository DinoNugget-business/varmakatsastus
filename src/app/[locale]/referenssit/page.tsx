import Image from "next/image";
import { useTranslations } from "next-intl";

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
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("references.title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("references.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERENCE_CATEGORIES.map(({ key, image }) => (
              <div key={key} className="light-card rounded-xl overflow-hidden group">
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
            ))}
          </div>

          {/* Extra boat gallery */}
          <div className="mt-12">
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary text-center">
              {t("references.boats.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/references/boat-1.jpeg"
                  alt="Venelämmitin asennus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/references/boat-2.jpeg"
                  alt="Venelämmitin huolto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/references/boat-whatsapp.jpeg"
                  alt="Venelämmitin asennettu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
