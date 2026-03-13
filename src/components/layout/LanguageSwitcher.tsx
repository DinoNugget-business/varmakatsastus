"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "fi" ? "en" : "fi";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="px-2.5 py-1 text-sm font-medium rounded border transition-colors cursor-pointer
        border-brand-border text-text-muted-dark hover:text-text-light hover:border-brand-accent"
      aria-label={`Switch to ${otherLocale === "fi" ? "Finnish" : "English"}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
