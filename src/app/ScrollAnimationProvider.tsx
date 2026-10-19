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
    // Select elements to reveal: both explicitly marked and automatic section blocks
    const updateObserver = () => {
      const candidates = document.querySelectorAll(
        "section, .scroll-reveal, .reveal-item, .reveal-card, footer"
      );

      candidates.forEach((el) => {
        // Skip header/navbar and hero main wrappers if desired
        if (el.closest("header") || el.hasAttribute("data-no-reveal")) {
          return;
        }

        // If it doesn't already have a reveal class
        if (
          !el.classList.contains("scroll-reveal") &&
          !el.classList.contains("reveal-item") &&
          !el.classList.contains("reveal-card")
        ) {
          el.classList.add("scroll-reveal");
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      const targets = document.querySelectorAll(
        ".scroll-reveal, .reveal-item, .reveal-card"
      );

      targets.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Run initially and after DOM settles
    const timeout = setTimeout(updateObserver, 80);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return <>{children}</>;
}
