"use client";

import { useLocale } from "next-intl";
import { CHAT_CATEGORIES } from "@/lib/chatbot-data";

type Props = {
  faqIds?: string[];
  onSelect: (faqId: string) => void;
};

export default function ChatQuickReplies({ faqIds, onSelect }: Props) {
  const locale = useLocale();
  const lang = locale === "fi" ? "fi" : "en";

  // If specific faqIds provided, show those. Otherwise show all categories.
  const items = faqIds
    ? CHAT_CATEGORIES.filter((c) => faqIds.includes(c.faqId))
    : CHAT_CATEGORIES;

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 pl-9">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.faqId)}
          className="px-3 py-1.5 text-xs font-medium rounded-full border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/60 transition-all duration-200"
        >
          {item.label[lang]}
        </button>
      ))}
    </div>
  );
}
