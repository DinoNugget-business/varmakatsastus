"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "company", href: "/yritys" },
  { key: "services", href: "/palvelut" },
  { key: "products", href: "/tuotteet" },
  { key: "references", href: "/referenssit" },
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
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <nav className="absolute top-0 right-0 w-72 h-full bg-brand-dark shadow-xl flex flex-col">
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
          {NAV_KEYS.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                onClick={onClose}
                className="block px-6 py-3 text-text-light hover:bg-brand-surface transition-colors font-medium"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t border-brand-border">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
