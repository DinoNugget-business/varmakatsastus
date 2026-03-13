"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const NAV_KEYS = [
  { key: "home", href: "/" },
  { key: "company", href: "/yritys" },
  { key: "services", href: "/palvelut" },
  { key: "products", href: "/tuotteet" },
  { key: "references", href: "/referenssit" },
  { key: "news", href: "/uutisia" },
  { key: "contact", href: "/yhteydenotto" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with phone + emergency */}
      <div className="bg-brand-darker text-text-muted-dark text-xs py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <a href={CONTACT.phoneHref} className="hover:text-text-light transition-colors">
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.emergencyHref}
            className="text-brand-accent font-semibold hover:text-brand-accent-light transition-colors"
          >
            24/7: {CONTACT.emergency}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-brand-dark border-b border-brand-border shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logos/thermohuolto-logo.png"
              alt="Thermohuolto"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_KEYS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="px-3 py-2 text-sm font-medium text-text-muted-dark hover:text-text-light
                  transition-colors rounded hover:bg-brand-surface"
              >
                {t(key)}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-text-muted-dark hover:text-text-light transition-colors"
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
