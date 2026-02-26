"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { X, Bot } from "lucide-react";
import { useChatbot, generateMsgId } from "./ChatbotProvider";
import type { ChatMessageData } from "./ChatbotProvider";
import { findBestMatch, FAQ_DATA, CHAT_CATEGORIES } from "@/lib/chatbot-data";
import { BOOKING_URL } from "@/lib/constants";
import ChatMessage from "./ChatMessage";
import ChatQuickReplies from "./ChatQuickReplies";
import ChatInput from "./ChatInput";

export default function ChatbotWindow() {
  const { isOpen, messages, close, addMessage, clearMessages } = useChatbot();
  const t = useTranslations("chatbot");
  const locale = useLocale();
  const lang = locale === "fi" ? "fi" : "en";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const hasWelcomed = useRef(false);
  const prevLocaleRef = useRef(locale);

  // Reset chat when language changes
  useEffect(() => {
    if (prevLocaleRef.current !== locale) {
      prevLocaleRef.current = locale;
      clearMessages();
      hasWelcomed.current = false;
    }
  }, [locale, clearMessages]);

  // Send welcome message on first open
  useEffect(() => {
    if (isOpen && !hasWelcomed.current) {
      hasWelcomed.current = true;
      addMessage({
        id: generateMsgId(),
        role: "bot",
        text: t("welcome"),
      });
    }
  }, [isOpen, addMessage, t]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  const handleFaqSelect = useCallback(
    (faqId: string) => {
      const faq = FAQ_DATA.find((f) => f.id === faqId);
      if (!faq) return;

      // Add user message showing which topic they picked
      addMessage({
        id: generateMsgId(),
        role: "user",
        text: faq.question[lang],
      });

      // Add bot response
      setTimeout(() => {
        const botMsg: ChatMessageData = {
          id: generateMsgId(),
          role: "bot",
          text: faq.answer[lang],
          quickReplies: faq.quickReplies,
        };
        if (faq.link) {
          const isExternal = faq.link.url.startsWith("http");
          botMsg.link = {
            url: isExternal ? faq.link.url : `/${locale === "fi" ? "" : "en/"}${faq.link.url.replace(/^\//, "")}`,
            label: faq.link.label[lang],
          };
        }
        addMessage(botMsg);

        // Add booking suggestion after answer
        setTimeout(() => {
          if (faq.category !== "booking") {
            addMessage({
              id: generateMsgId(),
              role: "bot",
              text: t("bookingSuggestion"),
              link: {
                url: BOOKING_URL,
                label: lang === "fi" ? "Varaa aika" : "Book now",
              },
            });
          }
        }, 400);
      }, 300);
    },
    [addMessage, lang, locale, t]
  );

  const handleUserInput = useCallback(
    (text: string) => {
      addMessage({
        id: generateMsgId(),
        role: "user",
        text,
      });

      setTimeout(() => {
        const match = findBestMatch(text, locale);
        if (match) {
          const botMsg: ChatMessageData = {
            id: generateMsgId(),
            role: "bot",
            text: match.answer[lang],
            quickReplies: match.quickReplies,
          };
          if (match.link) {
            const isExternal = match.link.url.startsWith("http");
            botMsg.link = {
              url: isExternal ? match.link.url : `/${locale === "fi" ? "" : "en/"}${match.link.url.replace(/^\//, "")}`,
              label: match.link.label[lang],
            };
          }
          addMessage(botMsg);
        } else {
          addMessage({
            id: generateMsgId(),
            role: "bot",
            text: t("fallback"),
          });
        }
      }, 400);
    },
    [addMessage, locale, lang, t]
  );

  // Determine quick replies to show under last bot message
  const lastBotMsg = [...messages].reverse().find((m) => m.role === "bot");
  const showAllTopics = messages.length <= 1 || (lastBotMsg && !lastBotMsg.quickReplies && lastBotMsg.text === t("fallback"));

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label={t("title")}
      className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[70vh] sm:h-[520px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-brand-border/50 bg-brand-darker/95 backdrop-blur-xl"
      style={{ animation: "scaleIn 0.25s ease-out" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 border-b border-brand-gold/30">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-brand-gold" />
          <span className="font-display font-semibold text-brand-gold text-sm">
            {t("title")}
          </span>
        </div>
        <button
          onClick={close}
          aria-label={t("closeLabel")}
          className="p-1.5 rounded-lg hover:bg-brand-gray/50 transition-colors"
        >
          <X className="w-4 h-4 text-text-muted" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Quick replies */}
        {showAllTopics ? (
          <ChatQuickReplies onSelect={handleFaqSelect} />
        ) : lastBotMsg?.quickReplies ? (
          <ChatQuickReplies faqIds={lastBotMsg.quickReplies} onSelect={handleFaqSelect} />
        ) : null}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleUserInput} />
    </div>
  );
}
