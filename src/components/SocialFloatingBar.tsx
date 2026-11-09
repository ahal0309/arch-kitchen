"use client";

import React from "react";
import { SOCIAL_LINKS } from "./Footer";

export default function SocialFloatingBar() {
  return (
    <aside
      aria-label="Social media channels"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[990] flex flex-col items-center gap-2.5 p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-md border border-[#ede8df] shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Arch Kitchen Cabinets on ${item.name}`}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/[0.03] hover:bg-[#c5a059] text-[#78756e] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
        >
          {item.icon("w-3.5 h-3.5 sm:w-4 sm:h-4")}
        </a>
      ))}
    </aside>
  );
}
