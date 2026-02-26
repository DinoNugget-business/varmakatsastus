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
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-gold/15 flex items-center justify-center mt-1">
          <Bot className="w-4 h-4 text-brand-gold" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "bg-brand-gray/80 text-text-primary rounded-tl-sm"
            : "bg-brand-blue/80 text-white rounded-tr-sm"
        }`}
      >
        <div
          className="whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-brand-gold"
          dangerouslySetInnerHTML={{
            __html: message.text
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\n/g, "<br />"),
          }}
        />
        {message.link && (
          <a
            href={message.link.url}
            target={message.link.url.startsWith("http") ? "_blank" : undefined}
            rel={message.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block mt-2 text-brand-gold hover:text-brand-gold-light font-semibold text-xs underline underline-offset-2 transition-colors"
          >
            {message.link.label} →
          </a>
        )}
      </div>
      {!isBot && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
          <User className="w-4 h-4 text-brand-blue" />
        </div>
      )}
    </div>
  );
}
