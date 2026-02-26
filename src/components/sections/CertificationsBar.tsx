import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const certs = [
  { src: "/images/iso-9001-2015.png", alt: "ISO 9001:2015", label: "ISO 9001:2015", w: 120, h: 120 },
  { src: "/images/akl-finas-iso.png", alt: "AKL FINAS ISO", label: "AKL & FINAS", w: 120, h: 120 },
  { src: "/images/sv-logo.jpg", alt: "SV Sertifiointi", label: "SV Sertifiointi", w: 90, h: 120 },
];

export default function CertificationsBar() {
  const t = useTranslations("home");

  return (
    <section className="py-16 lg:py-20 section-divider bg-gradient-to-t from-brand-dark to-brand-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <SectionHeading title={t("certificationsTitle")} />
        </AnimateOnScroll>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {certs.map((cert, index) => (
            <AnimateOnScroll key={cert.alt} delay={index * 150} animation="fadeRight">
              <div className="flex flex-col items-center gap-3 group">
                <div className="relative p-4 rounded-xl bg-white/[0.07] border border-brand-border/50 transition-all duration-300 group-hover:bg-white/[0.12] group-hover:border-brand-gold/30 group-hover:shadow-lg group-hover:shadow-brand-gold/10">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.w}
                    height={cert.h}
                    className="h-16 sm:h-20 lg:h-24 w-auto brightness-90 contrast-90 grayscale-[20%] transition-all duration-300 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0"
                  />
                </div>
                <span className="text-xs text-text-dim font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-text-muted">
                  {cert.label}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
