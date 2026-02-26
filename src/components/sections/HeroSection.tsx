import Image from "next/image";
import { useTranslations } from "next-intl";
import { BOOKING_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
      <Image
        src="/images/varmakatsastus-herttoniemi.jpg"
        alt="Varmakatsastus Herttoniemi"
        fill
        priority
        className="object-cover object-[center_60%]"
      />

      {/* Gradient overlay - lets more image through */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/70 via-brand-dark/40 to-transparent" />

      {/* Fade to light at bottom for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F7FA] to-transparent" />

      {/* Decorative gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-xl" style={{ animation: "fadeInLeft 0.8s ease-out" }}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            {t("heroTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-text-primary mb-3 leading-relaxed drop-shadow-md">
            {t("heroSubtitle")}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-brand-gold mb-8 drop-shadow-[0_2px_8px_rgba(59,157,230,0.2)]">
            {t("heroPrice")}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
          >
            <Button href={BOOKING_URL} size="lg" external>
              {t("heroCta")}
            </Button>
            <Button href="#services" variant="outline" size="lg">
              {t("servicesTitle")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
