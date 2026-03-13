import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { key: "services", href: "/palvelut" },
  { key: "products", href: "/tuotteet" },
  { key: "references", href: "/referenssit" },
  { key: "contact", href: "/yhteydenotto" },
] as const;

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-text-light">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logos/thermohuolto-logo-white.png"
              alt="Thermohuolto"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-text-muted-dark text-sm leading-relaxed">
              {t("metadata.description")}
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-text-muted-dark">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-text-light transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emergencyHref}
                  className="text-brand-accent font-semibold hover:text-brand-accent-light transition-colors"
                >
                  {t("footer.emergencyLabel")}: {CONTACT.emergency}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-text-light transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.fullAddress}</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-text-muted-dark hover:text-text-light transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Facebook */}
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-text-muted-dark hover:text-text-light transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-brand-border text-center text-xs text-text-muted-dark">
          {t("footer.copyright", { year: String(year) })}
        </div>
      </div>
    </footer>
  );
}
