"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Menu, X, Phone, Calendar,
  CheckCircle, Tag, Building2, Wrench,
  Package, Briefcase, MapPin,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NAV_LINKS, CONTACT, BOOKING_URL } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ICONS: Record<string, typeof CheckCircle> = {
  "/katsastukseen": CheckCircle,
  "/hinnasto": Tag,
  "/yrityksille": Building2,
  "/pikahuolto": Wrench,
  "/varaosat": Package,
  "/toihin": Briefcase,
  "/yhteystiedot": MapPin,
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Toggle button — hamburger / X */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-text-primary"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay container */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Scrim — tap to close */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Dropdown panel */}
        <div
          className={`absolute top-20 left-3 right-3 bg-brand-darker/95 backdrop-blur-xl border border-brand-gold/15 rounded-2xl shadow-2xl shadow-black/40 transition-all duration-200 ease-out origin-top ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-4">
            {/* Price badge */}
            <div className="mb-3 py-2 px-3 rounded-lg bg-brand-gold/10 border border-brand-gold/25 text-center">
              <p className="text-brand-gold text-sm font-bold">
                {t("common.inspectionFrom")}
              </p>
            </div>

            {/* Navigation grid */}
            <nav className="grid grid-cols-2 gap-x-2 gap-y-0.5 mb-3">
              {NAV_LINKS.map((link) => {
                const Icon = NAV_ICONS[link.href];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-text-primary hover:text-brand-gold transition-colors py-2 px-2.5 rounded-lg hover:bg-brand-gold/5"
                  >
                    {Icon && <Icon className="w-4 h-4 text-text-muted flex-shrink-0" />}
                    {t(link.labelKey)}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="border-t border-brand-border/40 mb-3" />

            {/* Bottom actions */}
            <div className="flex items-center gap-2 mb-2">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 flex-1 text-sm text-text-muted hover:text-text-primary transition-colors py-2.5 px-3 rounded-lg border border-brand-border/30 hover:border-brand-border/50"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 bg-brand-gold text-brand-darker font-bold text-sm py-2.5 px-3 rounded-lg hover:bg-brand-gold-dark transition-all duration-200 shadow-md shadow-brand-gold/20"
              >
                <Calendar className="w-4 h-4" />
                {t("common.bookTime")}
              </a>
            </div>

            {/* Language switcher */}
            <div className="flex justify-center pt-1">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
