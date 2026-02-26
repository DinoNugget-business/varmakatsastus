"use client";

import { useState, type KeyboardEvent } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");
  const t = useTranslations("chatbot");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 border-t border-brand-border/50">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("placeholder")}
        className="flex-1 bg-brand-gray/60 border border-brand-border/40 rounded-full px-4 py-2.5 text-sm text-text-light placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all"
      />
      <button
        onClick={handleSend}
        disabled={!value.trim()}
        aria-label="Send"
        className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center hover:bg-brand-gold-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
