"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type MessageRole = "bot" | "user";

export type ChatMessageData = {
  id: string;
  role: MessageRole;
  text: string;
  quickReplies?: string[];
  link?: { url: string; label: string };
};

type ChatbotContextType = {
  isOpen: boolean;
  messages: ChatMessageData[];
  toggle: () => void;
  close: () => void;
  addMessage: (msg: ChatMessageData) => void;
  clearMessages: () => void;
};

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
}

let msgCounter = 0;
export function generateMsgId(): string {
  return `msg-${++msgCounter}-${Date.now()}`;
}

export default function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const addMessage = useCallback((msg: ChatMessageData) => {
    setMessages((prev) => [...prev, msg]);
  }, []);
  const clearMessages = useCallback(() => setMessages([]), []);

  return (
    <ChatbotContext.Provider value={{ isOpen, messages, toggle, close, addMessage, clearMessages }}>
      {children}
    </ChatbotContext.Provider>
  );
}
