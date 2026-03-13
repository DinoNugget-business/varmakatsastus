import Image from "next/image";
import { useTranslations } from "next-intl";
import CtaBanner from "@/components/sections/CtaBanner";

const SERVICE_ITEMS = [
  { key: "refrigeration", image: "/images/services/carousel-1.jpg" },
  { key: "heating", image: "/images/services/webasto-product.jpg" },
  { key: "ac", image: "/images/services/ac-service.jpg" },
  { key: "atp", image: "/images/services/carousel-2.jpg" },
  { key: "boatsMotorhomes", image: "/images/services/boat-install.jpg" },
  { key: "tractors", image: "/images/services/carousel-3.jpg" },
  { key: "electrical", image: "/images/vehicles/service-sprinter.jpg" },
] as const;

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("services.title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {SERVICE_ITEMS.map(({ key, image }, i) => (
            <div
              key={key}
              className={`light-card rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className="relative h-56 md:h-auto min-h-[200px]">
                <Image
                  src={image}
                  alt={t(`services.${key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center" style={{ direction: "ltr" }}>
                <h2 className="font-display font-bold text-xl sm:text-2xl mb-3 text-text-primary">
                  {t(`services.${key}.title`)}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {t(`services.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
