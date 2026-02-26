"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";
};

const ANIMATION_CLASSES: Record<string, string> = {
  fadeUp: "",
  fadeLeft: "anim-fadeLeft",
  fadeRight: "anim-fadeRight",
  scaleIn: "anim-scaleIn",
};

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  once = true,
  animation = "fadeUp",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          if (once) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const animClass = ANIMATION_CLASSES[animation] || "";

  return (
    <div ref={ref} className={`animate-on-scroll ${animClass} ${className}`}>
      {children}
    </div>
  );
}
