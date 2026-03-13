"use client";

import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";

export default function EmergencyBanner() {
  const t = useTranslations("home");

  return (
    <section className="bg-brand-accent">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href={CONTACT.emergencyHref}
          className="flex items-center justify-center gap-3 py-3.5 text-white font-semibold text-sm sm:text-base
            hover:bg-brand-accent-dark transition-colors"
        >
          <Icon name="phone" size={18} />
          <span>{t("emergencyBannerText")}</span>
          <span className="font-display font-bold text-lg">{CONTACT.emergency}</span>
        </a>
      </div>
    </section>
  );
}
