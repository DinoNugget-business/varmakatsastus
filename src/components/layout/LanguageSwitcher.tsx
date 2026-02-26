"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale() {
    const next = locale === "fi" ? "en" : "fi";
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors disabled:opacity-50"
      aria-label="Switch language"
    >
      <Globe className={`w-4 h-4 ${isPending ? "animate-spin" : ""}`} />
      <span className="uppercase font-medium">
        {locale === "fi" ? "EN" : "FI"}
      </span>
    </button>
  );
}
