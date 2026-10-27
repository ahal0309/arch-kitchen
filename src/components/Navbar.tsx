"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Phone, Clock, MapPin, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  activePage?: "home" | "about" | "services" | "projects" | "blog" | "contact";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigateTo = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header / Navigation - Transparent, minimal architectural layout matching Urbantrop reference */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-[#fbf9f5]/90 backdrop-blur-sm sm:bg-transparent">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-2 sm:pt-4 sm:pb-3 lg:pt-5 lg:pb-3 flex items-center justify-between">
          {/* Brand Logo / Arch Kitchens Logo (Crisp logo.webp, enhanced readability and prominent sizing) */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-14 sm:h-18 md:h-20 lg:h-22 xl:h-24 flex items-center">
              <Image
                src="/logo.webp"
                alt="Arch Kitchens Logo"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items - Minimal, large uppercase architectural typography matching Urbantrop */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-14 text-base xl:text-lg tracking-[0.24em] uppercase font-normal font-sans text-[#2c2b29]">
            <Link
              href="/"
              className={`py-1 transition-colors ${
                activePage === "home"
                  ? "text-[#c5a059] font-medium"
                  : "hover:text-[#c5a059]"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`py-1 whitespace-nowrap transition-colors ${
                activePage === "about"
                  ? "text-[#c5a059] font-medium"
                  : "hover:text-[#c5a059]"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/#portfolio"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              PROJECTS
            </Link>

            {/* Services with Dropdown */}
            <div className="relative group/svc py-2">
              <Link
                href="/services"
                className={`flex items-center space-x-1.5 py-1 whitespace-nowrap transition-colors ${
                  activePage === "services"
                    ? "text-[#c5a059] font-medium"
                    : "hover:text-[#c5a059]"
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#78756e] group-hover/svc:text-[#c5a059] transition-transform duration-200 group-hover/svc:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 opacity-0 invisible group-hover/svc:opacity-100 group-hover/svc:visible transition-all duration-200 z-[999] pointer-events-none group-hover/svc:pointer-events-auto">
                <div className="bg-[#fbf9f5] rounded-xl shadow-xl border border-[#ede8df] py-4 px-2 overflow-hidden">
                  <div className="px-3.5 py-1.5 mb-2 text-xs font-sans tracking-[0.24em] uppercase text-[#c5a059] font-medium border-b border-[#ede8df]">
                    All Services
                  </div>
                  <Link
                    href="/services/kitchen-renovation"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Kitchen Renovation</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">01</span>
                  </Link>
                  <Link
                    href="/services/cabinet-installation"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Cabinet Installation</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">02</span>
                  </Link>
                  <Link
                    href="/services/cabinet-refacing"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Cabinet Refacing</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">03</span>
                  </Link>
                  <Link
                    href="/services/countertop-installation"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Countertop Installation</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">04</span>
                  </Link>
                  <Link
                    href="/services/backsplash-installation"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Backsplash Installation</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">05</span>
                  </Link>
                  <Link
                    href="/services/flooring-installation"
                    className="flex items-center justify-between px-3.5 py-2.5 text-[13px] text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.03] rounded-lg transition-colors font-sans tracking-[0.16em] uppercase font-normal"
                  >
                    <span>Flooring Installation</span>
                    <span className="text-[11px] font-sans text-[#c5a059] font-medium tracking-widest">06</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`py-1 whitespace-nowrap transition-colors ${
                activePage === "contact"
                  ? "text-[#c5a059] font-medium"
                  : "hover:text-[#c5a059]"
              }`}
            >
              CONTACTS
            </Link>
          </nav>

          {/* Minimal Hamburger (Two crisp horizontal lines matching reference image with identical thickness) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e1d1b] hover:text-[#c5a059] transition-colors -mr-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <svg
                width="28"
                height="14"
                viewBox="0 0 28 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current transition-colors"
              >
                <line x1="0" y1="2" x2="28" y2="2" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1="12" x2="28" y2="12" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pointer-events-auto bg-[#fbf9f5] border-b border-[#ede8df] shadow-lg px-6 py-5 space-y-3 z-[9999]">
            <button
              type="button"
              onClick={() => navigateTo("/")}
              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors text-left ${
                activePage === "home"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>HOME</span>
              <span className="text-[10px] text-[#c5a059] font-mono">01</span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo("/about")}
              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors text-left ${
                activePage === "about"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>ABOUT</span>
              <span className="text-[10px] text-[#c5a059] font-mono">02</span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo("/#portfolio")}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03] transition-colors text-left"
            >
              <span>PROJECTS</span>
              <span className="text-[10px] text-[#c5a059] font-mono">03</span>
            </button>

            {/* Services with Expandable Accordion on Mobile */}
            <div className="rounded-xl overflow-hidden">
              <div
                className={`flex items-center justify-between py-1.5 px-3 rounded-xl transition-colors ${
                  activePage === "services"
                    ? "bg-black/[0.04]"
                    : "hover:bg-black/[0.03]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => navigateTo("/services")}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors flex-1 py-1.5 text-left ${
                    activePage === "services"
                      ? "text-[#c5a059] font-semibold"
                      : "text-[#3a3834] hover:text-[#c5a059]"
                  }`}
                >
                  SERVICES
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                  className="p-2 text-[#78756e] hover:text-[#c5a059] transition-colors rounded-lg hover:bg-black/[0.05]"
                  aria-label="Toggle Services List"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-[#c5a059]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Sub-services list (always visible or expanded) */}
              <div className={`pl-4 pt-1 pb-2 space-y-1 border-l-2 border-[#c5a059]/40 ml-3 ${mobileServicesOpen ? "block" : "hidden sm:block"}`}>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/kitchen-renovation")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Kitchen Renovation
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/cabinet-installation")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Cabinet Installation
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/cabinet-refacing")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Cabinet Refacing
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/countertop-installation")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Countertop Installation
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/backsplash-installation")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Backsplash Installation
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo("/services/flooring-installation")}
                  className="w-full text-left block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Flooring Installation
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigateTo("/contact")}
              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors text-left ${
                activePage === "contact"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>CONTACTS</span>
              <span className="text-[10px] text-[#c5a059] font-mono">04</span>
            </button>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigateTo("/contact")}
                className="block text-center w-full px-6 py-3 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full shadow-sm transition-all"
              >
                Get A Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
