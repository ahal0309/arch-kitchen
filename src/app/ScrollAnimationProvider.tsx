"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Only observe elements explicitly marked with scroll-reveal, reveal-card, or reveal-init
    // Do NOT mutate classes on raw section, main, or footer elements to prevent React hydration mismatch!
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const targets = document.querySelectorAll(
      ".scroll-reveal, .reveal-item, .reveal-card, .reveal-init, .reveal-scale-init"
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
