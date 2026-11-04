import React, { useEffect } from "react";

// Safe client-side effect to activate animations once React hydration is 100% complete
export default function AnimationTrigger() {
  useEffect(() => {
    // Add class to <html> so CSS transitions activate without modifying DOM nodes during hydration
    document.documentElement.classList.add("animations-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
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
  }, []);

  return null;
}
