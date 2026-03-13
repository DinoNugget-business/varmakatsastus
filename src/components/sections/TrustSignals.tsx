import { useTranslations } from "next-intl";

export default function TrustSignals() {
  const t = useTranslations("home");

  const stats = [
    { value: t("trustYears"), label: t("trustYearsLabel") },
    { value: t("trustStaff"), label: t("trustStaffLabel") },
    { value: t("trustEmergency"), label: t("trustEmergencyLabel") },
    { value: t("trustAtp"), label: t("trustAtpLabel") },
  ];

  return (
    <section className="bg-brand-dark py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-light text-center mb-10">
          {t("trustTitle")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-brand-accent mb-1">
                {stat.value}
              </div>
              <div className="text-text-muted-dark text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
