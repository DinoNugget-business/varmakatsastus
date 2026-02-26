import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

export default function KatsastukseenPage() {
  const t = useTranslations("inspection");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-12">
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-brand-gold mb-4 tracking-tight">
              {t("whenTitle")}
            </h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>{t("whenP1")}</p>
              <p>{t("whenP2")}</p>
              <p>{t("whenP3")}</p>
              <p>{t("whenP4")}</p>
            </div>
          </div>
          <div className="lg:w-80 flex-shrink-0">
            <Image
              src="/images/milloin-katsastukseen.png"
              alt={t("whenTitle")}
              width={320}
              height={400}
              className="rounded-xl w-full"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-brand-gold mb-4 tracking-tight">
            {t("whatTitle")}
          </h2>
          <p className="text-text-muted mb-4 leading-relaxed">
            {t("whatP1")}
          </p>
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            {t("checksTitle")}
          </h3>
          <ul className="list-disc list-inside text-text-muted space-y-2">
            <li>{t("check1")}</li>
            <li>{t("check2")}</li>
            <li>{t("check3")}</li>
            <li>{t("check4")}</li>
          </ul>
          <p className="text-text-muted mt-4 leading-relaxed">
            {t("checksExtra")}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-brand-gold mb-4 tracking-tight">
            {t("failTitle")}
          </h2>
          <div className="text-text-muted space-y-4 leading-relaxed">
            <p>{t("failP1")}</p>
            <p>{t("failP2")}</p>
            <p>{t("failP3")}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-brand-gold mb-4 tracking-tight">
            {t("deregisteredTitle")}
          </h2>
          <p className="text-text-muted leading-relaxed">
            {t("deregisteredP1")}
          </p>
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
