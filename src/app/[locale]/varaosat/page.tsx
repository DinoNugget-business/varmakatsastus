import { useTranslations } from "next-intl";
import { Phone, Mail, Package, Truck, Tag } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import { CONTACT } from "@/lib/constants";

export default function VaraosatPage() {
  const t = useTranslations("spareParts");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            icon={<Package className="w-8 h-8" />}
            title={t("cat1Title")}
            description={t("cat1Desc")}
          />
          <Card
            icon={<Truck className="w-8 h-8" />}
            title={t("cat2Title")}
            description={t("cat2Desc")}
          />
          <Card
            icon={<Tag className="w-8 h-8" />}
            title={t("cat3Title")}
            description={t("cat3Desc")}
          />
        </div>

        <div className="light-card rounded-xl p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("deliveryTitle")}
          </h2>
          <p className="text-text-muted-light leading-relaxed">
            {t("deliveryP1")}
          </p>
        </div>

        <div className="light-card rounded-xl p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("savingsTitle")}
          </h2>
          <p className="text-text-muted-light leading-relaxed">
            {t("savingsP1")}
          </p>
        </div>

        <div className="light-card rounded-xl p-8">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("contactTitle")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 text-text-muted-light">
            <a
              href={CONTACT.partsPhoneHref}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.partsPhone}
            </a>
            <a
              href={`mailto:${CONTACT.partsEmail}`}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              {CONTACT.partsEmail}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
