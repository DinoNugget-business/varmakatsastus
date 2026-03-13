import Image from "next/image";
import { useTranslations } from "next-intl";
import { BRANDS } from "@/lib/constants";
import CtaBanner from "@/components/sections/CtaBanner";

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Brands by category */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Refrigeration */}
          <div>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
              {t("refrigerationTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRANDS.refrigeration.map((brand) => (
                <BrandCard key={brand.name} brand={brand} visitLabel={t("visitWebsite")} />
              ))}
            </div>
          </div>

          {/* Heating & AC */}
          <div>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
              {t("heatingTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRANDS.heating.map((brand) => (
                <BrandCard key={brand.name} brand={brand} visitLabel={t("visitWebsite")} />
              ))}
            </div>
          </div>

          {/* Other */}
          <div>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
              {t("otherTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRANDS.other.map((brand) => (
                <BrandCard key={brand.name} brand={brand} visitLabel={t("visitWebsite")} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Used equipment */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="light-card rounded-xl p-6 sm:p-8">
              <h2 className="font-display font-bold text-xl mb-4 text-text-primary">
                {t("usedEquipmentTitle")}
              </h2>
              <p className="text-text-muted leading-relaxed">{t("usedEquipmentDesc")}</p>
            </div>
            <div className="light-card rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[200px_1fr]">
              <div className="relative h-48 md:h-auto">
                <Image
                  src="/images/services/pipe-repair.jpg"
                  alt={t("pipeRepairTitle")}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display font-bold text-xl mb-3 text-text-primary">
                  {t("pipeRepairTitle")}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">{t("pipeRepairDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function BrandCard({
  brand,
  visitLabel,
}: {
  brand: { name: string; url: string | null };
  visitLabel: string;
}) {
  const inner = (
    <div className="light-card rounded-lg p-4 text-center h-full flex flex-col items-center justify-center gap-2 hover:-translate-y-0.5">
      <span className="font-display font-semibold text-sm text-text-primary">{brand.name}</span>
      {brand.url && (
        <span className="text-xs text-brand-accent">{visitLabel}</span>
      )}
    </div>
  );

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
