"use client";

import { useTranslations } from "next-intl";
import { Clock, Tag, MapPin, Calendar } from "lucide-react";
import { CONTACT, BOOKING_URL } from "@/lib/constants";

export default function InfoStrip() {
  const t = useTranslations();

  const items = [
    {
      icon: Clock,
      title: t("home.infoOpenTitle"),
      lines: [t("common.weekdays"), t("common.saturday")],
    },
    {
      icon: Tag,
      title: t("home.infoPriceTitle"),
      highlight: t("home.infoPriceValue"),
      note: t("home.infoPriceNote"),
    },
    {
      icon: MapPin,
      title: t("home.infoLocationTitle"),
      lines: [CONTACT.address, CONTACT.city],
    },
  ];

  return (
    <section className="relative bg-brand-darker border-t-2 border-brand-gold/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 justify-center md:justify-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                {item.highlight ? (
                  <>
                    <p className="text-brand-gold text-3xl font-bold font-display leading-none">
                      {item.highlight}
                    </p>
                    <p className="text-text-muted text-xs mt-1">{item.note}</p>
                  </>
                ) : (
                  item.lines?.map((line) => (
                    <p key={line} className="text-text-muted text-sm">
                      {line}
                    </p>
                  ))
                )}
              </div>
            </div>
          ))}

          {/* Booking CTA - 4th column */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {t("infoStrip.bookingTitle")}
              </h3>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-gold text-brand-darker font-bold px-5 py-2 rounded-lg text-sm hover:bg-brand-gold-dark transition-all duration-200 shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 btn-shimmer"
              >
                {t("infoStrip.bookingCta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
