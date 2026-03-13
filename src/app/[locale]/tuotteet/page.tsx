import Image from "next/image";
import { useTranslations } from "next-intl";
import { BRANDS, CONTACT } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import CtaBanner from "@/components/sections/CtaBanner";

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Refrigeration */}
          <ScrollReveal>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary flex items-center gap-2">
              <Icon name="snowflake" size={22} className="text-brand-primary" />
              {t("refrigerationTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
              {BRANDS.refrigeration.map((brand) => (
                <ScrollReveal key={brand.name} direction="scale">
                  <BrandCard brand={brand} visitLabel={t("visitWebsite")} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Heating & AC */}
          <ScrollReveal>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary flex items-center gap-2">
              <Icon name="flame" size={22} className="text-brand-accent" />
              {t("heatingTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
              {BRANDS.heating.map((brand) => (
                <ScrollReveal key={brand.name} direction="scale">
                  <BrandCard brand={brand} visitLabel={t("visitWebsite")} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Other */}
          <ScrollReveal>
            <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
              {t("otherTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRANDS.other.map((brand) => (
                <BrandCard key={brand.name} brand={brand} visitLabel={t("visitWebsite")} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Used equipment + pipe repair */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="light-card rounded-xl p-6 sm:p-8 h-full">
                <h2 className="font-display font-bold text-xl mb-4 text-text-primary">
                  {t("usedEquipmentTitle")}
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">{t("usedEquipmentDesc")}</p>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                >
                  <Icon name="phone" size={16} />
                  {t("askAvailability")}
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="light-card rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-[200px_1fr] h-full">
                <div className="relative h-48 sm:h-auto">
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
            </ScrollReveal>
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
    <div className="light-card rounded-lg p-4 text-center h-full flex flex-col items-center justify-center gap-2">
      <span className="font-display font-semibold text-sm text-text-primary">{brand.name}</span>
      {brand.url && (
        <span className="inline-flex items-center gap-1 text-xs text-brand-accent">
          {visitLabel}
          <Icon name="external-link" size={12} />
        </span>
      )}
    </div>
  );

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return inner;
}
