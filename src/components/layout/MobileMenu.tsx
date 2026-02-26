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
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-primary"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay container */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Scrim — tap to close */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-brand-darker border-l border-brand-gold/20 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-4 sm:p-6 overflow-y-auto">
            {/* Header: logo + close */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-display text-brand-gold text-xl font-bold">
                Varmakatsastus
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-primary"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Price badge */}
            <div className="mb-6 py-2.5 px-4 rounded-lg bg-brand-gold/10 border border-brand-gold/30 text-center">
              <p className="text-brand-gold text-sm font-bold">
                {t("common.inspectionFrom")}
              </p>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link) => {
                const Icon = NAV_ICONS[link.href];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-base text-text-primary hover:text-brand-gold transition-colors py-3 px-2 rounded-lg hover:bg-brand-gold/5 border-b border-brand-border/30"
                  >
                    {Icon && <Icon className="w-4.5 h-4.5 text-text-muted" />}
                    {t(link.labelKey)}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom actions */}
            <div className="flex flex-col gap-3 pt-5 border-t border-brand-border/50">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 text-text-muted hover:text-text-primary transition-colors py-1"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-gold text-brand-darker font-bold text-center py-3.5 rounded-lg hover:bg-brand-gold-dark transition-all duration-200 shadow-lg shadow-brand-gold/25 text-base gold-glow"
              >
                <Calendar className="w-5 h-5" />
                {t("common.bookTime")}
              </a>
              <div className="flex justify-center pt-1">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
