"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-brand-darker border-t border-brand-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Contact info */}
          <div>
            <Image
              src="/images/varma-katsastus-dark.png"
              alt="Varmakatsastus"
              width={140}
              height={44}
              className="h-10 w-auto opacity-80 mb-4"
            />
            <div className="flex flex-col gap-3 text-sm text-text-muted">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {CONTACT.address}
                  <br />
                  {CONTACT.city}
                </span>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-brand-gold font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {t("footer.openingHours")}
            </h3>
            <div className="text-sm text-text-muted space-y-2">
              <p>{t("common.weekdays")}</p>
              <p>{t("common.saturday")}</p>
              <p>{t("common.sunday")}</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-brand-gold font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-brand-gold transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-brand-gold font-semibold mb-4">
              {t("footer.certifications")}
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Image
                src="/images/iso-9001-2015.png"
                alt="ISO 9001:2015"
                width={80}
                height={80}
                className="h-14 w-auto rounded-lg p-1.5 bg-white/[0.07] border border-brand-border/30 brightness-90 hover:brightness-100 hover:border-brand-gold/30 transition-all duration-300"
              />
              <Image
                src="/images/akl-finas-iso.png"
                alt="AKL FINAS ISO"
                width={80}
                height={80}
                className="h-14 w-auto rounded-lg p-1.5 bg-white/[0.07] border border-brand-border/30 brightness-90 hover:brightness-100 hover:border-brand-gold/30 transition-all duration-300"
              />
              <Image
                src="/images/sv-logo.jpg"
                alt="SV Sertifiointi"
                width={60}
                height={80}
                className="h-14 w-auto rounded-lg p-1.5 bg-white/[0.07] border border-brand-border/30 brightness-90 hover:brightness-100 hover:border-brand-gold/30 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-brand-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-text-muted text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
