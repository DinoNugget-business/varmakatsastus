import { useTranslations } from "next-intl";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function ToihinPage() {
  const t = useTranslations("careers");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-10">
          <p className="text-text-muted-light leading-relaxed mb-4">
            {t("intro")}
          </p>
          <p className="text-text-muted-light leading-relaxed">
            {t("apply")}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="font-display text-xl font-bold text-brand-gold tracking-tight mb-4">
            {t("formTitle")}
          </h2>
          <p className="text-text-muted-light text-sm mb-2">
            {t("orEmail")}{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-brand-gold hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>

        <ContactForm fields={["name", "email", "phone", "message"]} />
      </div>
    </>
  );
}
