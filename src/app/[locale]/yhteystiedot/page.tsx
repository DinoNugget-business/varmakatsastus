import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { CONTACT } from "@/lib/constants";

export default function YhteystiedotPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {t("contact.phoneTitle")}
              </h2>
              <div className="space-y-3 text-text-muted-light">
                <a
                  href={CONTACT.phoneHref}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.mainPhone")}: {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.servicePhoneHref}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.servicePhone")}: {CONTACT.servicePhone}
                </a>
                <a
                  href={CONTACT.partsPhoneHref}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.partsPhone")}: {CONTACT.partsPhone}
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {t("contact.emailTitle")}
              </h2>
              <div className="space-y-3 text-text-muted-light">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.mainEmail")}: {CONTACT.email}
                </a>
                <a
                  href={`mailto:${CONTACT.serviceEmail}`}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.serviceEmail")}: {CONTACT.serviceEmail}
                </a>
                <a
                  href={`mailto:${CONTACT.partsEmail}`}
                  className="block hover:text-brand-gold transition-colors"
                >
                  {t("contact.partsEmail")}: {CONTACT.partsEmail}
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {t("contact.addressTitle")}
              </h2>
              <p className="text-text-muted-light">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t("footer.openingHours")}
              </h2>
              <div className="text-text-muted-light space-y-1">
                <p>{t("common.weekdays")}</p>
                <p>{t("common.saturday")}</p>
                <p>{t("common.sunday")}</p>
                <p className="text-sm mt-2 italic">{t("contact.holidays")}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.5!2d25.0271!3d60.2039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469209e8e8e8e8e8%3A0x0!2sMekaanikonkatu+23%2C+00880+Helsinki!5e0!3m2!1sfi!2sfi!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Varmakatsastus sijainti"
            />
          </div>
        </div>
      </div>
    </>
  );
}
