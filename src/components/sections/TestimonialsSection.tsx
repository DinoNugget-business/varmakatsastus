import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TestimonialsSection() {
  const t = useTranslations();

  const testimonials = [
    { key: "1", rating: 5 },
    { key: "2", rating: 5 },
    { key: "3", rating: 5 },
    { key: "4", rating: 4 },
    { key: "5", rating: 5 },
    { key: "6", rating: 5 },
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-surface relative section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <SectionHeading title={t("home.testimonialsTitle")} />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ key, rating }, index) => (
            <AnimateOnScroll key={key} delay={index * 100} animation="scaleIn">
              <TestimonialCard
                quote={t(`testimonials.${key}.quote`)}
                author={t(`testimonials.${key}.author`)}
                rating={rating}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
