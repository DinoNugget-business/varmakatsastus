"use client";

import { MessageCircle, X } from "lucide-react";
import { useChatbot } from "./ChatbotProvider";

export default function ChatbotTrigger() {
  const { isOpen, toggle } = useChatbot();

  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Sulje chat" : "Avaa chat"}
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5"
      style={{
        backgroundColor: "rgba(26,26,26,0.95)",
        backdropFilter: "blur(12px)",
        border: "2px solid rgba(232,117,26,0.6)",
        boxShadow: "0 4px 20px rgba(232,117,26,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#E8751A";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(232,117,26,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(232,117,26,0.6)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,117,26,0.2)";
      }}
    >
      {isOpen ? (
        <X className="w-6 h-6 transition-transform duration-200" style={{ color: "#E8751A" }} />
      ) : (
        <MessageCircle
          className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
          style={{ color: "#E8751A" }}
        />
      )}
    </button>
  );
}
