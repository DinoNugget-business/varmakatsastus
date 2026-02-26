import { useTranslations } from "next-intl";
import PageHeader from "@/components/ui/PageHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactForm from "@/components/ui/ContactForm";

export default function PalautePage() {
  const t = useTranslations();

  const testimonials = [
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
  ];

  return (
    <>
      <PageHeader
        title={t("feedback.title")}
        subtitle={t("feedback.subtitle")}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-brand-gold mb-6 tracking-tight">
            {t("home.testimonialsTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ key }) => (
              <TestimonialCard
                key={key}
                quote={t(`testimonials.${key}.quote`)}
                author={t(`testimonials.${key}.author`)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-brand-gold mb-6 tracking-tight">
            {t("feedback.formTitle")}
          </h2>
          <ContactForm fields={["name", "email", "message"]} />
        </div>
      </div>
    </>
  );
}
