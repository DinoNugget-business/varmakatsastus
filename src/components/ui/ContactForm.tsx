"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Button from "./Button";

export default function ContactForm() {
  const t = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <path d="M6 14l6 6L22 8" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl mb-2">{t("thankYou")}</h3>
        <p className="text-text-muted">{t("thankYouDesc")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-text-primary">{t("name")} *</span>
          <input
            type="text"
            required
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
              focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
              transition-colors text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-text-primary">{t("emailField")} *</span>
          <input
            type="email"
            required
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
              focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
              transition-colors text-sm"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-text-primary">{t("businessId")}</span>
        <input
          type="text"
          className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
            focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
            transition-colors text-sm"
        />
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-text-primary">{t("streetAddress")}</span>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
              focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
              transition-colors text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-text-primary">{t("postalCodeCity")}</span>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
              focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
              transition-colors text-sm"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-text-primary">{t("message")} *</span>
        <textarea
          required
          rows={5}
          className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border-light bg-white
            focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
            transition-colors text-sm resize-y"
        />
      </label>
      <Button type="submit" variant="primary">
        {t("send")}
      </Button>
    </form>
  );
}
