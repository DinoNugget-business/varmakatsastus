import { useTranslations } from "next-intl";
import { Building2, Phone, Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { CONTACT, BOOKING_URL } from "@/lib/constants";

export default function YrityksilePage() {
  const t = useTranslations("corporate");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="light-card rounded-xl p-8 mb-10">
          <div className="flex items-start gap-4 mb-6">
            <Building2 className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-3">
                {t("servicesTitle")}
              </h2>
              <p className="text-text-muted-light leading-relaxed mb-4">
                {t("servicesP1")}
              </p>
              <p className="text-text-muted-light leading-relaxed">
                {t("servicesP2")}
              </p>
            </div>
          </div>
        </div>

        <div className="light-card rounded-xl p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("flexTitle")}
          </h2>
          <p className="text-text-muted-light leading-relaxed">
            {t("flexP1")}
          </p>
        </div>

        <div className="light-card rounded-xl p-8 mb-10">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("contactTitle")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 text-text-muted-light">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              {CONTACT.email}
            </a>
          </div>
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
