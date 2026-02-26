"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Clock, Tag, MapPin, Calendar } from "lucide-react";
import { CONTACT, BOOKING_URL } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function useCountUp(target: number, duration = 1000) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref: elRef };
}

export default function InfoStrip() {
  const t = useTranslations();
  const { count: priceCount, ref: priceRef } = useCountUp(39, 1200);

  return (
    <section className="relative bg-brand-darker overflow-hidden">
      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark/50 to-brand-darker pointer-events-none" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Opening Hours */}
          <AnimateOnScroll animation="fadeUp" delay={0}>
            <div className="dark-card rounded-xl p-6 group cursor-default h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-gold icon-hover-lift" />
                </div>
                <div>
                  <h3 className="text-text-muted-dark font-semibold text-xs uppercase tracking-wider mb-2">
                    {t("home.infoOpenTitle")}
                  </h3>
                  <p className="text-text-light text-sm">{t("common.weekdays")}</p>
                  <p className="text-text-light text-sm">{t("common.saturday")}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Price */}
          <AnimateOnScroll animation="fadeUp" delay={0.12}>
            <div className="dark-card rounded-xl p-6 group cursor-default h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Tag className="w-6 h-6 text-brand-gold icon-hover-lift" />
                </div>
                <div>
                  <h3 className="text-text-muted-dark font-semibold text-xs uppercase tracking-wider mb-2">
                    {t("home.infoPriceTitle")}
                  </h3>
                  <p className="text-brand-gold text-3xl font-bold font-display leading-none whitespace-nowrap">
                    <span ref={priceRef}>{priceCount}</span>&nbsp;€
                  </p>
                  <p className="text-text-muted-dark text-xs mt-1">{t("home.infoPriceNote")}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Location */}
          <AnimateOnScroll animation="fadeUp" delay={0.24}>
            <div className="dark-card rounded-xl p-6 group cursor-default h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-gold icon-hover-lift" />
                </div>
                <div>
                  <h3 className="text-text-muted-dark font-semibold text-xs uppercase tracking-wider mb-2">
                    {t("home.infoLocationTitle")}
                  </h3>
                  <p className="text-text-light text-sm">{CONTACT.address}</p>
                  <p className="text-text-light text-sm">{CONTACT.city}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Booking CTA */}
          <AnimateOnScroll animation="fadeUp" delay={0.36}>
            <div className="dark-card rounded-xl p-6 group h-full pulse-glow border-brand-gold/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-gold icon-hover-lift" />
                </div>
                <div>
                  <h3 className="text-text-muted-dark font-semibold text-xs uppercase tracking-wider mb-3">
                    {t("infoStrip.bookingTitle")}
                  </h3>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-gold text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-brand-gold-dark transition-all duration-200 shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 btn-shimmer"
                  >
                    {t("infoStrip.bookingCta")}
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
