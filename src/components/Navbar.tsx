"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  activePage?: "home" | "about" | "services" | "projects" | "blog" | "contact";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar - Clean and compact on mobile */}
      <div className="bg-transparent text-[#6b6863] text-xs py-2 px-4 sm:px-6 lg:px-16 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="tel:+14164749094"
              className="flex items-center space-x-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a059]" />
              <span className="font-medium tracking-wide">+1 416-474-9094</span>
            </a>
            <div className="hidden md:flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>08:00AM – 18:00PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs truncate">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a059] shrink-0" />
            <span className="truncate">Greater Toronto Area</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation - Floating pill box only, completely transparent outer area */}
      <header className="sticky top-0 z-50 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
          <div className="w-full pointer-events-auto bg-[#ebe7e0]/98 backdrop-blur-md rounded-full px-4 sm:px-8 lg:px-10 h-14 sm:h-20 flex items-center justify-between border border-[#ded8cd] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            {/* Brand Logo / Architectural Wordmark */}
            <Link href="/" className="flex items-center shrink-0 py-1 group">
              <div className="relative w-24 sm:w-36 h-9 sm:h-12 flex items-center">
                <Image
                  src="/logo_cropped.png"
                  alt="Arch Kitchens Logo"
                  fill
                  sizes="(max-width: 640px) 96px, 144px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Items - Architectural uppercase typography in champagne gold */}
            <nav className="hidden lg:flex items-center space-x-9 xl:space-x-12 text-[13px] tracking-[0.25em] uppercase text-[#3a3834] font-normal font-sans">
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
                      ? "text-[#c5a059] font-semibold border-b-2 border-[#c5a059] pb-0.5"
                      : "hover:text-[#c5a059]"
                  }`}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#78756e] group-hover/svc:text-[#c5a059] transition-transform duration-200 group-hover/svc:rotate-180" />
                </Link>

                {/* Dropdown Menu - matching navbar pill color & gold accents */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover/svc:opacity-100 group-hover/svc:visible transition-all duration-200 z-[999] pointer-events-none group-hover/svc:pointer-events-auto">
                  <div className="bg-[#ebe7e0]/98 backdrop-blur-xl rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#ded8cd] py-3 px-1.5 overflow-hidden">
                    <div className="px-3.5 py-1 mb-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[#c5a059] font-semibold border-b border-[#ded8cd]/80">
                      All Services
                    </div>
                    <Link
                      href="/services/kitchen-renovation"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Kitchen Renovation</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">01</span>
                    </Link>
                    <Link
                      href="/services/cabinet-installation"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Cabinet Installation</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">02</span>
                    </Link>
                    <Link
                      href="/services/cabinet-refacing"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Cabinet Refacing</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">03</span>
                    </Link>
                    <Link
                      href="/services/countertop-installation"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Countertop Installation</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">04</span>
                    </Link>
                    <Link
                      href="/services/backsplash-installation"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Backsplash Installation</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">05</span>
                    </Link>
                    <Link
                      href="/services/flooring-installation"
                      className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#2c2b29] hover:text-[#c5a059] hover:bg-black/[0.04] rounded-xl transition-colors font-sans tracking-normal normal-case font-medium"
                    >
                      <span>Flooring Installation</span>
                      <span className="text-[10px] font-mono text-[#c5a059]">06</span>
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

            {/* Action Button: Get A Quote in Gold */}
            <div className="hidden sm:flex items-center shrink-0">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-normal text-[11px] tracking-[0.2em] uppercase rounded-full shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#78756e] hover:text-[#c5a059] transition-colors ml-2"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pointer-events-auto bg-[#ebe7e0] border border-[#ded8cd] rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] mt-2 mx-3 px-5 py-4 space-y-2 z-[9999]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                activePage === "home"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>HOME</span>
              <span className="text-[10px] text-[#c5a059] font-mono">01</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                activePage === "about"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>ABOUT</span>
              <span className="text-[10px] text-[#c5a059] font-mono">02</span>
            </Link>

            <Link
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03] transition-colors"
            >
              <span>PROJECTS</span>
              <span className="text-[10px] text-[#c5a059] font-mono">03</span>
            </Link>

            {/* Services with Expandable Accordion on Mobile */}
            <div className="rounded-xl overflow-hidden">
              <div className="flex items-center justify-between py-1 px-3">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                    activePage === "services"
                      ? "text-[#c5a059] font-semibold"
                      : "text-[#3a3834] hover:text-[#c5a059]"
                  }`}
                >
                  SERVICES
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                  className="p-1.5 text-[#78756e] hover:text-[#c5a059] transition-colors"
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
                <Link
                  href="/services/kitchen-renovation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Kitchen Renovation
                </Link>
                <Link
                  href="/services/cabinet-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Cabinet Installation
                </Link>
                <Link
                  href="/services/cabinet-refacing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Cabinet Refacing
                </Link>
                <Link
                  href="/services/countertop-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Countertop Installation
                </Link>
                <Link
                  href="/services/backsplash-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Backsplash Installation
                </Link>
                <Link
                  href="/services/flooring-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 text-xs text-[#55524d] hover:text-[#c5a059] rounded-lg hover:bg-black/[0.03] transition-colors font-sans"
                >
                  Flooring Installation
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-mono tracking-[0.2em] uppercase transition-colors ${
                activePage === "contact"
                  ? "text-[#c5a059] bg-black/[0.04] font-semibold"
                  : "text-[#3a3834] hover:text-[#c5a059] hover:bg-black/[0.03]"
              }`}
            >
              <span>CONTACTS</span>
              <span className="text-[10px] text-[#c5a059] font-mono">04</span>
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full px-6 py-3 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full shadow-sm transition-all"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
