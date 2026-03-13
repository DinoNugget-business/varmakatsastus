import { useTranslations } from "next-intl";
import { CONTACT, STAFF } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("contact.title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="light-card rounded-xl p-5 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="font-display font-semibold text-sm mb-1">{t("common.callUs")}</h3>
              <a href={CONTACT.phoneHref} className="text-brand-primary font-medium text-sm hover:text-brand-accent transition-colors">
                {CONTACT.phone}
              </a>
            </div>
            <div className="light-card rounded-xl p-5 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 className="font-display font-semibold text-sm mb-1">{t("contact.emergencyLabel")}</h3>
              <a href={CONTACT.emergencyHref} className="text-brand-accent font-bold text-sm hover:text-brand-accent-dark transition-colors">
                {CONTACT.emergency}
              </a>
            </div>
            <div className="light-card rounded-xl p-5 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <h3 className="font-display font-semibold text-sm mb-1">{t("common.emailField")}</h3>
              <a href={`mailto:${CONTACT.email}`} className="text-brand-primary font-medium text-xs hover:text-brand-accent transition-colors break-all">
                {CONTACT.email}
              </a>
            </div>
            <div className="light-card rounded-xl p-5 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="font-display font-semibold text-sm mb-1">{t("contact.locationTitle")}</h3>
              <a href={CONTACT.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium text-xs hover:text-brand-accent transition-colors">
                {CONTACT.fullAddress}
              </a>
            </div>
          </div>

          {/* Staff directory */}
          <SectionHeading title={t("contact.staffTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {STAFF.map((person) => (
              <div key={person.name} className="light-card rounded-xl p-5">
                <h3 className="font-display font-semibold text-base text-text-primary">
                  {person.name}
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  {t(`contact.${person.positionKey}`)}
                </p>
                <div className="space-y-1 text-sm">
                  {person.phone && (
                    <a href={person.phoneHref!} className="flex items-center gap-2 text-text-muted hover:text-brand-primary transition-colors">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-text-muted hover:text-brand-primary transition-colors break-all">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
                {t("contact.formTitle")}
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl mb-6 text-text-primary">
                {t("contact.locationTitle")}
              </h2>
              <GoogleMap />
              {/* Facebook link */}
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  text-brand-primary hover:bg-brand-primary/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Turun Thermohuolto Oy — Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
