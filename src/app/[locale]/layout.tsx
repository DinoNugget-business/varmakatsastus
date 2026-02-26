import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Inter, Rajdhani } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ChatbotProvider from "@/components/chatbot/ChatbotProvider";
import ChatbotTrigger from "@/components/chatbot/ChatbotTrigger";
import ChatbotWindow from "@/components/chatbot/ChatbotWindow";
import CtaBanner from "@/components/sections/CtaBanner";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="bg-white text-text-dark font-body antialiased">
        <LocalBusinessSchema />
        <NextIntlClientProvider messages={messages}>
          <ChatbotProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <CtaBanner />
            <Footer />
            <ChatbotWindow />
            <ChatbotTrigger />
          </ChatbotProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
