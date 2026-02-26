"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NAV_LINKS, CONTACT, BOOKING_URL } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-40 bg-brand-darker/90 backdrop-blur-xl border-b border-brand-border/50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar with phone and language */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 text-sm border-b border-brand-border/30">
          <span className="text-brand-gold font-semibold text-xs bg-brand-gold/10 px-2.5 py-0.5 rounded-full">
            {t("common.inspectionFrom")}
          </span>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-1.5 text-text-muted hover:text-brand-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {CONTACT.phone}
          </a>
          <span className="text-text-muted">
            {t("common.weekdays")} | {t("common.saturday")}
          </span>
          <LanguageSwitcher />
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/varma-katsastus-dark.png"
              alt="Varmakatsastus"
              width={200}
              height={60}
              priority
              className="h-14 lg:h-18 w-auto opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-text-muted hover:text-brand-gold transition-all duration-200 rounded-md group"
              >
                {t(link.labelKey)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-brand-gold text-white font-bold px-6 py-2.5 rounded-lg hover:bg-brand-gold-dark transition-all duration-200 text-sm shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 btn-shimmer"
          >
            {t("common.bookTime")}
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
