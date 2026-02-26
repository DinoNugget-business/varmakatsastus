"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function Card({ icon, title, description, href, linkLabel }: CardProps) {
  const content = (
    <>
      <div className="text-brand-gold mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,191,0,0.4)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      {href && linkLabel && (
        <div className="mt-4 pt-3 border-t border-brand-border/30 flex items-center gap-1.5 text-sm text-brand-gold font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="group-hover:translate-x-1 transition-transform duration-300">{linkLabel}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      )}
    </>
  );

  const classes =
    "glass-card rounded-xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-brand-gold/5 hover:-translate-y-1 block h-full";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
