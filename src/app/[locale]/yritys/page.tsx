import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

const MILESTONES = [
  { yearKey: "milestone1Year", labelKey: "milestone1", image: "/images/facility/10th-anniversary.jpg" },
  { yearKey: "milestone2Year", labelKey: "milestone2", image: "/images/facility/hall-opening-2010.png" },
  { yearKey: "milestone3Year", labelKey: "milestone3", image: "/images/facility/fleet-2024.jpg" },
] as const;

export default function CompanyPage() {
  const t = useTranslations("company");

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl mb-6 text-text-primary">
                {t("historyTitle")}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>{t("historyP1")}</p>
                <p>{t("historyP2")}</p>
                <p>{t("historyP3")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/facility/facility-exterior.jpg"
                alt="Thermohuolto toimitilat"
                width={500}
                height={333}
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <Image
                src="/images/facility/facility-interior.jpg"
                alt="Thermohuolto halli"
                width={500}
                height={333}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl mb-6 text-text-primary text-center">
            {t("missionTitle")}
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>{t("missionP1")}</p>
            <p>{t("missionP2")}</p>
          </div>
        </div>
      </section>

      {/* Quality & Staff */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="light-card rounded-xl p-6 sm:p-8">
              <h3 className="font-display font-semibold text-xl mb-4">{t("qualityTitle")}</h3>
              <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                <p>{t("qualityP1")}</p>
                <p>{t("qualityP2")}</p>
              </div>
            </div>
            <div className="light-card rounded-xl p-6 sm:p-8">
              <h3 className="font-display font-semibold text-xl mb-4">{t("staffTitle")}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{t("staffP1")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones gallery */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title={t("milestonesTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MILESTONES.map(({ yearKey, labelKey, image }) => (
              <div key={yearKey} className="light-card rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image src={image} alt={t(labelKey)} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="p-4 text-center">
                  <div className="font-display font-bold text-2xl text-brand-accent mb-1">
                    {t(yearKey)}
                  </div>
                  <p className="text-sm text-text-muted">{t(labelKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
