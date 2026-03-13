import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/ui/StaffCard";
import Icon from "@/components/ui/Icon";
import { STAFF } from "@/lib/constants";

const MILESTONES = [
  { yearKey: "milestone1Year", labelKey: "milestone1", image: "/images/facility/10th-anniversary.jpg" },
  { yearKey: "milestone2Year", labelKey: "milestone2", image: "/images/facility/hall-opening-2010.png" },
  { yearKey: "milestone3Year", labelKey: "milestone3", image: "/images/facility/fleet-2024.jpg" },
] as const;

export default function CompanyPage() {
  const t = useTranslations("company");
  const tc = useTranslations("contact");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {/* History */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display font-bold text-2xl mb-6 text-text-primary">
                {t("historyTitle")}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>{t("historyP1")}</p>
                <p>{t("historyP2")}</p>
                <p>{t("historyP3")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("missionTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon name="snowflake" size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Erikoistuminen</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("missionP1")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <Icon name="shield" size={24} className="text-brand-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Viranomaisvaltuutus</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("missionP2")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon name="award" size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{t("qualityTitle")}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("qualityP1")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("staffTitle")} accent />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-muted leading-relaxed max-w-2xl mx-auto text-center mb-10">
              {t("staffP1")}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
            {STAFF.map((person) => (
              <ScrollReveal key={person.name}>
                <StaffCard
                  name={person.name}
                  position={tc(person.positionKey)}
                  phone={person.phone}
                  phoneHref={person.phoneHref}
                  email={person.email}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("milestonesTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-children">
            {MILESTONES.map(({ yearKey, labelKey, image }) => (
              <ScrollReveal key={yearKey} direction="scale">
                <div className="light-card rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={image}
                      alt={t(labelKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-display font-bold text-3xl text-brand-accent mb-1">
                      {t(yearKey)}
                    </div>
                    <p className="text-sm text-text-muted">{t(labelKey)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
