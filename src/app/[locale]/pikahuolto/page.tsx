import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PriceTable from "@/components/ui/PriceTable";
import { CONTACT } from "@/lib/constants";

export default function PikahuoltoPage() {
  const t = useTranslations("quickRepair");

  const services = [
    { service: t("row1"), price: "89\u00A0€/h" },
    { service: t("row2"), price: "95\u00A0€/h" },
    { service: t("row3"), price: "89\u00A0€/h" },
    { service: t("row4"), price: "90\u00A0€/h" },
    { service: t("row5"), price: "35\u00A0€" },
    { service: t("row6"), price: "25\u00A0€/kpl" },
    { service: t("row7"), price: "65\u00A0€" },
    { service: t("row8"), price: "49\u00A0€" },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <PriceTable title={t("pricesTitle")} rows={services} />

        <div className="light-card rounded-xl p-6 mb-10 text-sm text-text-muted-light space-y-2">
          <p>{t("note1")}</p>
          <p>{t("note2")}</p>
        </div>

        <div className="light-card rounded-xl p-8">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("contactTitle")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 text-text-muted-light">
            <a
              href={CONTACT.servicePhoneHref}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.servicePhone}
            </a>
            <a
              href={`mailto:${CONTACT.serviceEmail}`}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              {CONTACT.serviceEmail}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
