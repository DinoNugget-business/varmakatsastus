import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "blue" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
};

const variants = {
  gold: "bg-brand-gold text-brand-darker hover:bg-brand-gold-dark shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 btn-shimmer",
  blue: "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 btn-shimmer",
  outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-darker shadow-md shadow-brand-gold/10 hover:shadow-lg hover:shadow-brand-gold/20",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "gold",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
