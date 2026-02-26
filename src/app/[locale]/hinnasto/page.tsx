import { useTranslations } from "next-intl";
import PageHeader from "@/components/ui/PageHeader";
import PriceTable from "@/components/ui/PriceTable";
import Button from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

export default function HinnastoPage() {
  const t = useTranslations("pricing");

  const periodic = [
    { service: t("periodic.row1"), price: "39,00 €" },
    { service: t("periodic.row2"), price: "60,00 €" },
    { service: t("periodic.row3"), price: "60,00 €" },
    { service: t("periodic.row4"), price: "55,00 €" },
    { service: t("periodic.row5"), price: "78,00 €" },
    { service: t("periodic.row6"), price: "98,00 €" },
    { service: t("periodic.row7"), price: "50,00 €" },
    { service: t("periodic.row8"), price: "68,00 €" },
  ];

  const additional = [
    { service: t("additional.row1"), price: "10,00 €" },
    { service: t("additional.row2"), price: "21,00 €" },
    { service: t("additional.row3"), price: "30,00 €" },
    { service: t("additional.row4"), price: "33,00 €" },
    { service: t("additional.row5"), price: "37,00 €" },
    { service: t("additional.row6"), price: "33,00 €" },
    { service: t("additional.row7"), price: "78,00 €" },
    { service: t("additional.row8"), price: "49,00 €" },
    { service: t("additional.row9"), price: "90,00 €" },
  ];

  const registration = [
    { service: t("registration.row1"), price: "150,00 €" },
    { service: t("registration.row2"), price: "180,00 €" },
    { service: t("registration.row3"), price: "440,00 €" },
  ];

  const modification = [
    { service: t("modification.row1"), price: "60,00 €" },
    { service: t("modification.row2"), price: "90,00 €" },
    { service: t("modification.row3"), price: "150,00 €" },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <PriceTable title={t("periodicTitle")} rows={periodic} />
        <PriceTable title={t("additionalTitle")} rows={additional} />
        <PriceTable title={t("registrationTitle")} rows={registration} />
        <PriceTable title={t("modificationTitle")} rows={modification} />

        <div className="glass-card rounded-xl p-6 mb-10 text-sm text-text-muted space-y-2">
          <p>{t("note1")}</p>
          <p>{t("note2")}</p>
          <p>{t("note3")}</p>
        </div>

        <div className="text-center">
          <Button href={BOOKING_URL} size="lg" external>
            {t("cta")}
          </Button>
        </div>
      </div>
    </>
  );
}
