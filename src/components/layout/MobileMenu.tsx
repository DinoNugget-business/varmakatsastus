"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "company", href: "/yritys" },
  { key: "services", href: "/palvelut" },
  { key: "products", href: "/tuotteet" },
  { key: "news", href: "/uutisia" },
  { key: "contact", href: "/yhteydenotto" },
] as const;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const t = useTranslations("nav");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="absolute inset-0 bg-black/50 animate-[fadeIn_0.2s_ease]"
        onClick={onClose}
      />
      <nav className="absolute top-0 right-0 w-72 h-full bg-brand-dark shadow-xl flex flex-col animate-[slideInRight_0.3s_ease-out]">
        <div className="flex items-center justify-between p-4 border-b border-brand-border">
          <span className="text-text-light font-display font-semibold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-text-muted-dark hover:text-text-light transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <ul className="flex-1 py-4">
          {NAV_KEYS.map(({ key, href }, i) => (
            <li
              key={key}
              className="mobile-nav-item"
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <Link
                href={href}
                onClick={onClose}
                className="block px-6 py-3 text-text-light hover:bg-brand-surface hover:text-brand-accent transition-colors font-medium"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
        {/* Emergency + language */}
        <div className="p-4 border-t border-brand-border space-y-4">
          <a
            href={CONTACT.emergencyHref}
            className="flex items-center gap-3 px-2 py-3 rounded-lg bg-brand-accent/10 text-brand-accent font-semibold text-sm"
          >
            <span className="emergency-pulse w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
              <Icon name="phone" size={16} />
            </span>
            <span>
              <span className="block text-xs text-text-muted-dark font-normal">24/7</span>
              {CONTACT.emergency}
            </span>
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
