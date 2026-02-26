"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, X } from "lucide-react";
import { useChatbot } from "./ChatbotProvider";

export default function ChatbotTrigger() {
  const { isOpen, toggle } = useChatbot();
  const t = useTranslations("chatbot");

  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? t("closeLabel") : t("openLabel")}
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-brand-darker/90 backdrop-blur-md border-2 border-brand-gold/60 shadow-lg shadow-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/30 hover:border-brand-gold hover:-translate-y-0.5 transition-all duration-300 group gold-glow"
    >
      {isOpen ? (
        <X className="w-6 h-6 text-brand-gold transition-transform duration-200" />
      ) : (
        <MessageCircle className="w-6 h-6 text-brand-gold transition-transform duration-200 group-hover:scale-110" />
      )}
    </button>
  );
}
