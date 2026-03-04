"use client";

import { Bot, User } from "lucide-react";
import type { ChatMessageData } from "./ChatbotProvider";

type Props = {
  message: ChatMessageData;
};

export default function ChatMessage({ message }: Props) {
  const isBot = message.role === "bot";

  return (
    <div className={`flex gap-2.5 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1"
          style={{ backgroundColor: "rgba(232,117,26,0.15)" }}
        >
          <Bot className="w-4 h-4" style={{ color: "#E8751A" }} />
        </div>
      )}
      <div
        className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
        style={
          isBot
            ? {
                backgroundColor: "#2A2A2A",
                color: "#F5F5F5",
                borderTopLeftRadius: "4px",
              }
            : {
                backgroundColor: "rgba(232,117,26,0.85)",
                color: "#FFFFFF",
                borderTopRightRadius: "4px",
              }
        }
      >
        <div
          className="whitespace-pre-line"
          style={{ wordBreak: "break-word" }}
          dangerouslySetInnerHTML={{
            __html: message.text
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong style="font-weight:600;color:#E8751A">$1</strong>'
              )
              .replace(/\n/g, "<br />"),
          }}
        />
        {message.link && (
          <a
            href={message.link.url}
            target={message.link.url.startsWith("http") ? "_blank" : undefined}
            rel={message.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block mt-2 font-semibold text-xs underline underline-offset-2 transition-colors"
            style={{ color: "#E8751A" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E4A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#E8751A")}
          >
            {message.link.label} →
          </a>
        )}
      </div>
      {!isBot && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1"
          style={{ backgroundColor: "rgba(232,117,26,0.2)" }}
        >
          <User className="w-4 h-4" style={{ color: "#E8751A" }} />
        </div>
      )}
    </div>
  );
}
