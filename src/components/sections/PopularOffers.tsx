"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { BOOKING_URL, PROMO_CODE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type Offer = {
  nameKey: string;
  items: string[];
  price: string;
  from?: boolean;
  popular?: boolean;
  promoCode?: boolean;
};

const offers: Offer[] = [
  {
    nameKey: "offerBasicName",
    items: ["offerBasicItem1", "offerBasicItem2"],
    price: "39\u00A0€",
    from: true,
  },
  {
    nameKey: "offerWashName",
    items: ["offerWashItem1", "offerWashItem2"],
    price: "75\u00A0€",
    popular: true,
    promoCode: true,
  },
  {
    nameKey: "offerPremiumName",
    items: ["offerPremiumItem1", "offerPremiumItem2", "offerPremiumItem3"],
    price: "99\u00A0€",
    promoCode: true,
  },
];

export default function PopularOffers() {
  const t = useTranslations("home");

  return (
    <section className="py-16 lg:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={t("offersTitle")}
          subtitle={t("offersSubtitle")}
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {offers.map((offer, i) => (
            <AnimateOnScroll
              key={offer.nameKey}
              animation="fadeUp"
              delay={i * 0.15}
            >
              <div
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                  offer.popular
                    ? "bg-bg-white border-2 border-brand-gold shadow-xl shadow-brand-gold/10 lg:scale-105 lg:-my-4 z-10"
                    : "bg-bg-white border border-border-light hover:border-brand-gold/30"
                }`}
              >
                {offer.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {t("offerWashBadge")}
                    </span>
                  </div>
                )}

                <h3 className="text-text-dark font-bold text-lg mb-6">
                  {t(offer.nameKey)}
                </h3>

                <ul className="space-y-3 mb-8">
                  {offer.items.map((itemKey) => (
                    <li
                      key={itemKey}
                      className="flex items-center gap-2.5 text-text-muted-light text-sm"
                    >
                      <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      {t(itemKey)}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  {offer.from && (
                    <span className="text-text-muted-light text-sm mr-1">
                      {t("offerBasicFrom")}
                    </span>
                  )}
                  <span className="text-brand-gold text-3xl sm:text-4xl font-bold font-display whitespace-nowrap">
                    {offer.price}
                  </span>
                </div>

                {offer.promoCode && (
                  <div className="mb-6 border border-dashed border-brand-gold/40 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                    <span className="text-text-muted-light text-xs">
                      {t("offerPromoCode")}:
                    </span>
                    <span className="text-brand-gold font-bold text-sm tracking-wider">
                      {PROMO_CODE}
                    </span>
                  </div>
                )}

                <div>
                  <Button
                    href={BOOKING_URL}
                    variant={offer.popular ? "gold" : "outline"}
                    size="md"
                    external
                    className="w-full"
                  >
                    {t("offerBookNow")}
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
