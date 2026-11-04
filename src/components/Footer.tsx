import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/archkitchencabinets?mdxt=MTBmM3J5c2kxZGR2aQ%3D%3D&utm_source=qr",
    icon: (className?: string) => (
      <svg
        className={className || "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@archkitchencabinets",
    icon: (className?: string) => (
      <svg
        className={className || "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .592.046.87.136V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.5V8.55a8.28 8.28 0 0 0 4.85 1.57v-3.43a4.85 4.85 0 0 1-.94 0z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1KaJf7cny8/?mibextid=wwXIfr",
    icon: (className?: string) => (
      <svg
        className={className || "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://ca.pinterest.com/0137tr8m7g8tujzrro2w6yst2v1hcc/",
    icon: (className?: string) => (
      <svg
        className={className || "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-[#9e9e9e] border-t border-[#1f1f1f] pt-16 pb-8 px-6 lg:px-16 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Gold Framed AK Logo, Payment text & Social Media */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="w-[110px] h-[110px] relative">
                <Image
                  src="/brand_footer_logo.webp"
                  alt="Arch Kitchen Cabinets Logo"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-[#a0a0a0] leading-relaxed max-w-sm">
              We accept payment through cash, bank transfers. Choose the option that suits you best for a secure and convenient transaction.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-3">
                Connect With Us
              </div>
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Arch Kitchen Cabinets on ${item.name}`}
                    className="w-9 h-9 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-[#c5a059] hover:text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-300 shadow-sm hover:scale-110"
                  >
                    {item.icon("w-4 h-4")}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Information Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a0a0a0]">
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Terms & Condition</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a0a0a0]">
              <li>
                <Link
                  href="/about"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Our Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Recent Transformations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Client Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#areas"
                  className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                >
                  <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                  <span>Areas We Serve</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Schedule CTA Button */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between space-y-6 pt-2">
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-xs sm:text-sm rounded-md transition-all shadow hover:shadow-lg transform hover:-translate-y-0.5 text-center"
            >
              Schedule A Free Consultation
            </Link>

            {/* Social Media handles summary */}
            <div className="text-left lg:text-right space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] block">
                Official Channels
              </span>
              <span className="text-xs text-[#c5a059] font-medium block">
                @archkitchencabinets
              </span>
            </div>
          </div>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="border-t border-[#1f1f1f] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#808080]">
          <div>
            © Copyright 2026 Arch Kitchen Cabinets. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a059] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
