"use client";

import { CHAT_CATEGORIES } from "@/lib/chatbot-data";

type Props = {
  faqIds?: string[];
  onSelect: (faqId: string) => void;
};

export default function ChatQuickReplies({ faqIds, onSelect }: Props) {
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
          className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
          style={{
            border: "1px solid rgba(232,117,26,0.4)",
            color: "#E8751A",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(232,117,26,0.1)";
            e.currentTarget.style.borderColor = "rgba(232,117,26,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "rgba(232,117,26,0.4)";
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
