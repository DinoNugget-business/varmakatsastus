"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

type ContactFormProps = {
  fields?: ("name" | "email" | "phone" | "company" | "message")[];
};

export default function ContactForm({
  fields = ["name", "email", "phone", "message"],
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("common");

  if (submitted) {
    return (
      <div className="light-card rounded-xl p-5 sm:p-8 text-center">
        <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" />
        <h3 className="text-xl font-bold text-brand-gold mb-2">
          {t("thankYou")}
        </h3>
        <p className="text-text-muted-light">{t("thankYouDesc")}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white border border-border-light rounded-lg px-4 py-2.5 text-text-dark placeholder-text-muted-light/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(59,157,230,0.1)] transition-all duration-200";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="light-card rounded-xl p-5 sm:p-8 space-y-5"
    >
      {fields.includes("name") && (
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-1.5">
            {t("name")}
          </label>
          <input type="text" required className={inputClasses} />
        </div>
      )}
      {fields.includes("company") && (
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-1.5">
            {t("company")}
          </label>
          <input type="text" className={inputClasses} />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-1.5">
            {t("emailField")}
          </label>
          <input type="email" required className={inputClasses} />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-1.5">
            {t("phoneField")}
          </label>
          <input type="tel" className={inputClasses} />
        </div>
      )}
      {fields.includes("message") && (
        <div>
          <label className="block text-sm font-medium text-text-muted-light mb-1.5">
            {t("message")}
          </label>
          <textarea
            required
            rows={4}
            className={`${inputClasses} resize-none`}
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-brand-gold text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-gold-dark transition-all duration-200 w-full sm:w-auto shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 btn-shimmer"
      >
        {t("send")}
      </button>
    </form>
  );
}
