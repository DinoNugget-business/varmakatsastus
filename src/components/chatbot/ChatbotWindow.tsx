"use client";

import { useEffect, useRef, useCallback } from "react";
import { X, Bot } from "lucide-react";
import { useChatbot, generateMsgId } from "./ChatbotProvider";
import type { ChatMessageData } from "./ChatbotProvider";
import { findBestMatch, FAQ_DATA, CHAT_CATEGORIES } from "@/lib/chatbot-data";
import { CONTACT } from "@/lib/constants";
import ChatMessage from "./ChatMessage";
import ChatQuickReplies from "./ChatQuickReplies";
import ChatInput from "./ChatInput";

const WELCOME_MSG =
  "Hei! Olen Tekno-Renkaan chatbot-avustaja. Miten voin auttaa? Valitse aihe alta tai kirjoita kysymyksesi.";
const FALLBACK_MSG =
  "Valitettavasti en ymmärtänyt kysymystäsi. Voit valita aiheen alta tai soittaa meille numeroon " +
  CONTACT.phone +
  ".";

export default function ChatbotWindow() {
  const { isOpen, messages, close, addMessage, clearMessages } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const hasWelcomed = useRef(false);

  // Send welcome message on first open
  useEffect(() => {
    if (isOpen && !hasWelcomed.current) {
      hasWelcomed.current = true;
      addMessage({
        id: generateMsgId(),
        role: "bot",
        text: WELCOME_MSG,
      });
    }
  }, [isOpen, addMessage]);

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

      addMessage({
        id: generateMsgId(),
        role: "user",
        text: faq.question,
      });

      setTimeout(() => {
        const botMsg: ChatMessageData = {
          id: generateMsgId(),
          role: "bot",
          text: faq.answer,
          quickReplies: faq.quickReplies,
        };
        if (faq.link) {
          botMsg.link = {
            url: faq.link.url,
            label: faq.link.label,
          };
        }
        addMessage(botMsg);
      }, 300);
    },
    [addMessage]
  );

  const handleUserInput = useCallback(
    (text: string) => {
      addMessage({
        id: generateMsgId(),
        role: "user",
        text,
      });

      setTimeout(() => {
        const match = findBestMatch(text);
        if (match) {
          const botMsg: ChatMessageData = {
            id: generateMsgId(),
            role: "bot",
            text: match.answer,
            quickReplies: match.quickReplies,
          };
          if (match.link) {
            botMsg.link = {
              url: match.link.url,
              label: match.link.label,
            };
          }
          addMessage(botMsg);
        } else {
          addMessage({
            id: generateMsgId(),
            role: "bot",
            text: FALLBACK_MSG,
          });
        }
      }, 400);
    },
    [addMessage]
  );

  const lastBotMsg = [...messages].reverse().find((m) => m.role === "bot");
  const showAllTopics =
    messages.length <= 1 ||
    (lastBotMsg && !lastBotMsg.quickReplies && lastBotMsg.text === FALLBACK_MSG);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-label="Tekno-Rengas Chat"
      className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[70vh] sm:h-[540px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
      style={{
        animation: "scaleIn 0.25s ease-out",
        backgroundColor: "#1A1A1A",
        border: "1px solid #3A3A3A",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "linear-gradient(to right, rgba(232,117,26,0.2), rgba(232,117,26,0.05))",
          borderBottom: "1px solid rgba(232,117,26,0.3)",
        }}
      >
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" style={{ color: "#E8751A" }} />
          <span
            className="font-semibold text-sm"
            style={{ color: "#E8751A", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Tekno-Rengas Apu
          </span>
        </div>
        <button
          onClick={close}
          aria-label="Sulje chat"
          className="p-1.5 rounded-lg transition-colors"
          style={{ color: "#999" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

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
