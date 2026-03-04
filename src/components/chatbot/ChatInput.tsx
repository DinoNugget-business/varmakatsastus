"use client";

import { useState, type KeyboardEvent } from "react";
import { Send } from "lucide-react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");

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
    <div
      className="flex items-center gap-2 p-3"
      style={{ borderTop: "1px solid #3A3A3A" }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Kirjoita kysymyksesi..."
        className="flex-1 rounded-full px-4 py-2.5 text-sm transition-all"
        style={{
          backgroundColor: "#2A2A2A",
          border: "1px solid #3A3A3A",
          color: "#F5F5F5",
          outline: "none",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(232,117,26,0.5)";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(232,117,26,0.2)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#3A3A3A";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <button
        onClick={handleSend}
        disabled={!value.trim()}
        aria-label="Lähetä"
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#E8751A", color: "#FFFFFF" }}
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
