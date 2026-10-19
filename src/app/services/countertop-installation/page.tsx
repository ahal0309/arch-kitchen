"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Clock3,
} from "lucide-react";

export default function CountertopInstallationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 5 Countertop Types from Screenshot 1
  const countertopTypes = [
    {
      title: "Granite Countertops",
      image: "/project1.png",
      description:
        "Known for its durability and unique patterns, granite is perfect for high-traffic areas due to its resistance to scratches and heat.",
    },
    {
      title: "Quartz Countertops",
      image: "/project3.png",
      description:
        "Engineered from crushed quartz and resin, quartz offers a stylish, low-maintenance option that's resistant to stains and bacteria.",
    },
    {
      title: "Marble Countertops",
      image: "/project2.png",
      description:
        "With its luxurious appearance and unique veining, marble adds a classic touch, though it requires more care due to its porosity.",
    },
    {
      title: "Laminate Countertops",
      image: "/kitchen_real_1.jpg",
      description:
        "Affordable and versatile, laminate mimics more expensive materials and is easy to clean and maintain.",
    },
    {
      title: "Butcher Block Countertops",
      image: "/project4.png",
      description:
        "Made from wooden planks, butcher block adds warmth and is ideal for food preparation, easily refinished to maintain its look.",
    },
  ];

  // 3 Ways Countertops Enhance The Beauty from Screenshot 2
  const enhancementPoints = [
    {
      title: "Aesthetic Appeal",
      description:
        "Countertops contribute significantly to the overall style of your space. Whether you're aiming for a sleek modern look or a classic traditional feel, the right countertop can complement your décor and elevate the visual appeal of your room.",
    },
    {
      title: "Functionality",
      description:
        "Durable and well-chosen countertops enhance the functionality of your kitchen or bathroom. They provide a practical workspace that can withstand daily use while adding an element of style.",
    },
    {
      title: "Value Addition",
      description:
        "High-quality countertops can increase the value of your home. They are a focal point that potential buyers notice, and investing in beautiful and durable surfaces can lead to a higher return on investment.",
    },
  ];

  // 4 Steps / Pillars of "How Arch Kitchen Cabinets Can Help" from Screenshot 2 & 3
  const howWeHelpSteps = [
    {
      num: "1",
      title: "Personalized Consultation",
      description:
        "Expert guidance to select the right countertop material that matches your style, needs, and budget.",
      icon: (
        <svg
          className="w-8 h-8 text-[#c5a059]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M8 11h2" />
        </svg>
      ),
    },
    {
      num: "2",
      title: "Professional Installation",
      description:
        "Precise measuring, cutting, fitting, and finishing to ensure a seamless countertop installation.",
      icon: (
        <svg
          className="w-8 h-8 text-[#c5a059]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      num: "3",
      title: "Durable Materials",
      description:
        "Premium-quality countertop materials chosen for lasting beauty, strength, and everyday performance.",
      icon: (
        <svg
          className="w-8 h-8 text-[#c5a059]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z" />
          <path d="M12 22V12" />
          <path d="M20 6.5l-8 5.5-8-5.5" />
        </svg>
      ),
    },
    {
      num: "4",
      title: "Exceptional Service",
      description:
        "Dedicated support throughout the project to ensure a smooth and satisfying experience.",
      icon: (
        <svg
          className="w-8 h-8 text-[#c5a059]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#2c2a29] font-sans selection:bg-[#c5a059] selection:text-white animate-page-enter">
      {/* ──────────────── Top Utility Bar (Exact Home Page Style) ──────────────── */}
      <div className="border-b border-[#ede8df] bg-[#f7f4ee]/80 text-[#6b6863] text-xs py-2 px-6 lg:px-16 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+14164749094"
              className="flex items-center space-x-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-medium tracking-wide">+1 416-474-9094</span>
            </a>
            <div className="hidden sm:flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>08:00AM – 18:00PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Greater Toronto Area & Surrounding Cities</span>
          </div>
        </div>
      </div>

      {/* ──────────────── Main Header / Navigation (Exact Home Page Style) ──────────────── */}
      <header className="sticky top-0 z-50 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#ede8df]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-24 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 py-2 mr-6 lg:mr-10">
            <div className="relative w-36 sm:w-44 h-14 sm:h-16 flex items-center">
              <Image
                src="/logo_cropped.png"
                alt="Arch Kitchens Logo"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[14px] font-medium text-[#3a3834] mx-auto">
            <Link
              href="/"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              About Us
            </Link>

            {/* Our Services - Active with Dropdown */}
            <div className="relative group/svc py-1">
              <Link
                href="/services"
                className="flex items-center space-x-1 text-[#c5a059] font-semibold transition-colors whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#c5a059]"
              >
                <span>Our Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#c5a059] transition-transform group-hover/svc:rotate-180" />
              </Link>

              {/* Exact Dark Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-64 bg-black/95 backdrop-blur-md rounded-md shadow-2xl border border-stone-800 py-3 opacity-0 invisible group-hover/svc:opacity-100 group-hover/svc:visible transition-all duration-200 z-50">
                <Link
                  href="/services/kitchen-renovation"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Kitchen Renovation
                </Link>
                <Link
                  href="/services/cabinet-installation"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Cabinet Installation
                </Link>
                <Link
                  href="/services/cabinet-refacing"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Cabinet Refacing
                </Link>
                <Link
                  href="/services/countertop-installation"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-semibold"
                >
                  Countertop Installation
                </Link>
                <Link
                  href="/services/backsplash-installation"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Backsplash Installation
                </Link>
                <Link
                  href="/services/flooring-installation"
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  Flooring Installation
                </Link>
              </div>
            </div>

            <Link
              href="/#portfolio"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              Our Projects
            </Link>
            <Link
              href="/#reviews"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button: Get A Quote */}
          <div className="hidden sm:flex items-center shrink-0 ml-6 lg:ml-8">
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs tracking-wider uppercase rounded-sm shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4a4742] hover:text-[#c5a059] transition-colors ml-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f5] border-b border-[#ede8df] px-6 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4a4742] hover:text-[#c5a059] py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4a4742] hover:text-[#c5a059] py-1"
            >
              About Us
            </Link>
            <div className="py-1">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#c5a059] font-medium py-1"
              >
                Our Services
              </Link>
              <div className="pl-4 pt-1 pb-2 space-y-1.5 border-l-2 border-[#c5a059]/40 ml-1">
                <Link
                  href="/services/kitchen-renovation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline"
                >
                  Kitchen Renovation
                </Link>
                <Link
                  href="/services/cabinet-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline"
                >
                  Cabinet Installation
                </Link>
                <Link
                  href="/services/cabinet-refacing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline"
                >
                  Cabinet Refacing
                </Link>
                <Link
                  href="/services/countertop-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline font-semibold"
                >
                  Countertop Installation
                </Link>
                <Link
                  href="/services/backsplash-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline"
                >
                  Backsplash Installation
                </Link>
                <Link
                  href="/services/flooring-installation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#c5a059] hover:underline"
                >
                  Flooring Installation
                </Link>
              </div>
            </div>
            <Link
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4a4742] hover:text-[#c5a059] py-1"
            >
              Our Projects
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4a4742] hover:text-[#c5a059] py-1"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4a4742] hover:text-[#c5a059] py-1"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Architectural Hero Header Section (Urbantrop Style) */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 px-6 lg:px-16 architectural-bg contour-lines border-b border-[#ede8df] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#ede8df]/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-3">
                01 / SERVICES / STONE FABRICATION
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                COUNTERTOPS INSTALLATION <span className="text-[#c5a059]">TORONTO</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ TAJ MAHAL QUARTZITE, CALACATTA & SOLID QUARTZ ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Direct stone slab sourcing, precision laser templating, and mitred waterfall fabrication across Toronto and the GTA.
          </p>
        </div>
      </section>

      {/* ──────────────── Section 1: Transform Your Space With Premium Countertops (Exact Text from Screenshot 1) ──────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 architectural-bg contour-lines relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 scroll-reveal reveal-init">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
              02 / CURATED STONE SLABS
            </span>
            <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b] leading-tight">
              TRANSFORM YOUR SPACE WITH <span className="text-[#c5a059]">PREMIUM COUNTERTOPS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863] leading-relaxed">
              At Arch Kitchen Cabinets, we provide professional countertop installation services in Toronto, offering stylish, durable, and high-quality surfaces that enhance the beauty and functionality of your kitchen or bathroom.
            </p>
          </div>

          {/* 5 Countertop Cards with Circular Images matching Screenshot 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {countertopTypes.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 sm:p-7 border border-[#ede8df] shadow-sm hover:shadow-xl hover:border-[#c5a059] transition-all duration-300 flex flex-col items-center text-center group transform hover:-translate-y-1 scroll-reveal reveal-init ${
                  idx === 0
                    ? "delay-100"
                    : idx === 1
                    ? "delay-150"
                    : idx === 2
                    ? "delay-200"
                    : idx === 3
                    ? "delay-250"
                    : "delay-300"
                }`}
              >
                {/* Circular Inset Image matching Screenshot 1 */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#ede8df] shadow-inner mb-6 bg-stone-100 group-hover:scale-105 group-hover:border-[#c5a059] transition-all duration-300">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="96px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e1d1b] mb-3 group-hover:text-[#c5a059] transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#6b6863] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Section 2: How Countertops Can Enhance The Beauty Of Your Space (Exact Text & Layout from Screenshot 2) ──────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-[#f7f4ee]/70 border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Showcase with Luxury Yellow/Gold Background Block matching Screenshot 2 */}
            <div className="lg:col-span-6 relative scroll-reveal reveal-init">
              {/* Yellow / Gold Graphic Accent Block behind top-left matching screenshot */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-3/4 h-3/4 bg-[#e8c75e] rounded-xl -z-0" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3] sm:aspect-[1.2/1] z-10 group">
                <Image
                  src="/project3.png"
                  alt="How Countertops Can Enhance The Beauty Of Your Space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Text Column - Exact text matching Screenshot 2 */}
            <div className="lg:col-span-6 space-y-6 scroll-reveal reveal-init delay-150">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1e1d1b] leading-tight">
                How Countertops Can Enhance The Beauty Of Your Space
              </h2>

              {/* 3 Enhancement Checkmark Points matching Screenshot 2 */}
              <div className="space-y-5 pt-2">
                {enhancementPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5 group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-sm leading-relaxed">
                      <strong className="text-[#1e1d1b] font-bold">
                        {item.title}:
                      </strong>{" "}
                      <span className="text-[#4a4742] font-normal">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Section 3: How Arch Kitchen Cabinets Can Help (Exact 4 Cards from Screenshot 2 & 3) ──────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-[#fbf9f5] border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header with decorative center accent line */}
          <div className="text-center max-w-2xl mx-auto space-y-3 scroll-reveal reveal-init">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1e1d1b]">
              How Arch Kitchen Cabinets Can Help
            </h2>
            <div className="w-20 h-0.5 bg-[#c5a059] mx-auto mt-2" />
          </div>

          {/* 4 Process Cards with top-left yellow badge tab - exact from screenshot 2 & 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelpSteps.map((step, sIdx) => (
              <div
                key={step.num}
                className={`bg-white rounded-xl p-7 pt-12 border border-[#ede8df] shadow-sm hover:shadow-xl hover:border-[#c5a059] transition-all duration-300 relative group flex flex-col justify-between text-center scroll-reveal reveal-init ${
                  sIdx === 0
                    ? "delay-100"
                    : sIdx === 1
                    ? "delay-200"
                    : sIdx === 2
                    ? "delay-300"
                    : "delay-400"
                }`}
              >
                {/* Yellow Tab Badge with number in top-left matching screenshot */}
                <div className="absolute top-0 left-0 bg-[#e8c75e] text-[#1e1d1b] font-bold text-sm w-9 h-9 flex items-center justify-center rounded-tl-xl rounded-br-lg shadow-sm">
                  {step.num}
                </div>

                <div>
                  {/* Clean Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#fbf9f5] border border-[#ede8df] flex items-center justify-center group-hover:bg-[#f7f1e5] transition-colors">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#1e1d1b] mb-3 group-hover:text-[#c5a059] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6b6863] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Section 4: Get Started Today! CTA Banner (Exact text from Screenshot 3) ──────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#181715] text-white px-6 lg:px-16 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/hero_main.png"
            alt="Get Started Today"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6 scroll-reveal reveal-init">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#e8c75e] tracking-tight">
            Get Started Today!
          </h2>
          <p className="text-sm sm:text-base text-[#ded8cb] max-w-2xl mx-auto leading-relaxed">
            Transform your space with beautiful countertops. Contact Arch Kitchen Cabinets for expert countertop installation in Toronto. Call us or fill out our online form to schedule a free consultation!
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href="tel:+14164749094"
              className="inline-flex items-center space-x-2.5 px-8 py-4 bg-[#e8c75e] hover:bg-[#d8b64c] text-[#1e1d1b] font-bold text-sm tracking-wide rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-[#1e1d1b]" />
              <span>+1 416-474-9094</span>
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────── Footer (Exact Home Page Style) ──────────────── */}
      <footer className="bg-black text-[#9e9e9e] border-t border-[#1f1f1f] pt-16 pb-8 px-6 lg:px-16 text-sm">
        <div className="max-w-7xl mx-auto">
          {/* Main 4-Column Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
            {/* Column 1: Gold Framed AK Logo & Payment text */}
            <div className="lg:col-span-4 space-y-5">
              <div className="w-[110px] h-[110px] relative">
                <Image
                  src="/brand_footer_logo.png"
                  alt="Arch Kitchen Cabinets Logo"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-[#a0a0a0] leading-relaxed max-w-sm">
                We accept payment through cash, bank transfers. Choose the option that suits you best for a secure and convenient transaction.
              </p>
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
                    <span>Costumer Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>FAQ's</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Link */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-base tracking-wide">
                Quick Link
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
                    href="/services"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Our Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
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

            {/* Column 4: Schedule CTA Button matching Screenshot 3 */}
            <div className="lg:col-span-3 flex items-start lg:justify-end pt-2">
              <Link
                href="/contact"
                className="inline-block px-7 py-3.5 bg-[#e8c75e] hover:bg-[#d8b64c] text-[#1e1d1b] font-bold text-xs sm:text-sm rounded-md transition-all shadow hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Schedule A Free Consultation
              </Link>
            </div>
          </div>

          {/* Thin Horizontal Divider */}
          <div className="border-t border-[#1f1f1f] pt-6 flex flex-col sm:flex-row items-center justify-center text-center text-xs text-[#808080]">
            <div>
              © Copyright 2026 Arch Kitchen Cabinets. All Rights Reserved. | Website Design By
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
