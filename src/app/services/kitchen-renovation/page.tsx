"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  LayoutGrid,
  PenTool,
  Gem,
  Lightbulb,
  FileText,
  Hammer,
  ClipboardCheck,
} from "lucide-react";

export default function KitchenRenovationPage() {
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

  // 3 Complete Remodeling Services from screenshot 1
  const completeServices = [
    {
      title: "Custom Cabinetry And Countertops",
      image: "/project1.png",
      description:
        "We specialize in custom cabinetry and countertops that are designed to fit your kitchen's layout and your personal style. Our range of high-quality materials ensures durability and aesthetic appeal, making your kitchen both functional and beautiful.",
    },
    {
      title: "High-Quality Kitchen Flooring And Backsplashes",
      image: "/project3.png",
      description:
        "Choose from a variety of premium flooring and backsplash options that enhance the look and feel of your kitchen. Our selection includes durable materials that are easy to maintain and add a touch of elegance to your space.",
    },
    {
      title: "Innovative Lighting Solutions",
      image: "/project4.png",
      description:
        "Illuminate your kitchen with cutting-edge lighting solutions that enhance both functionality and ambiance. From under-cabinet lighting to statement fixtures, we design lighting plans that create a welcoming and efficient environment.",
    },
  ];

  // 5 Why Choose Bullet Points from screenshot 2
  const whyChoosePoints = [
    {
      title: "Customized Kitchen Designs",
      description:
        "Tailored layouts that match your style while maximizing functionality and aesthetics.",
    },
    {
      title: "High-Quality Materials",
      description:
        "Premium cabinetry, durable countertops, and stylish flooring for lasting beauty",
    },
    {
      title: "Expert Installation",
      description:
        "Professional renovation services from demolition to final installation.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Smart features, optimized storage, and energy-efficient upgrades.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear estimates with no hidden costs, ensuring a stress-free renovation within budget.",
    },
  ];

  // 4 Steps from screenshot 2
  const processSteps = [
    {
      num: "1",
      title: "Initial Consultation",
      icon: <Phone className="w-8 h-8 text-[#c5a059]" />,
      description:
        "We discuss your vision, requirements, and design preferences while taking measurements and providing expert recommendations.",
    },
    {
      num: "2",
      title: "Design & Planning",
      icon: <FileText className="w-8 h-8 text-[#c5a059]" />,
      description:
        "Our team creates detailed designs and 3D renderings, refining them based on your feedback.",
    },
    {
      num: "3",
      title: "Installation",
      icon: <Hammer className="w-8 h-8 text-[#c5a059]" />,
      description:
        "We handle the entire renovation process, from demolition and cabinetry installation to countertops and finishing touches.",
    },
    {
      num: "4",
      title: "Final Review",
      icon: <ClipboardCheck className="w-8 h-8 text-[#c5a059]" />,
      description:
        "We inspect the completed project, address any concerns, and ensure your new kitchen is ready to enjoy.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b] animate-page-enter">
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
            <Link href="/" className="hover:text-[#c5a059] transition-colors py-1">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap">
              About Us
            </Link>

            {/* Our Services - Active Item with Dropdown */}
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
                  className="block px-5 py-2.5 text-sm text-[#c5a059] hover:text-white hover:bg-white/5 transition-colors font-medium"
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

            <Link href="/#portfolio" className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap">
              Our Projects
            </Link>
            <Link href="/#reviews" className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#c5a059] transition-colors py-1 whitespace-nowrap">
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
                  className="block text-xs text-[#c5a059] font-semibold hover:underline"
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
                  className="block text-xs text-[#c5a059] hover:underline"
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
                01 / SERVICES / TURNKEY LIVING
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                KITCHEN RENOVATION <span className="text-[#c5a059]">TORONTO</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ COMPLETE RESIDENTIAL OVERHAUL & PROJECT DELIVERY ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Transforming kitchens with quality craftsmanship, functional designs, and customized solutions across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Section 1: Our Complete Kitchen Remodeling Services Include (Exact text from Screenshot 1) */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 architectural-bg contour-lines relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 scroll-reveal reveal-init">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
              02 / COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b] leading-tight">
              OUR COMPLETE KITCHEN REMODELING <span className="text-[#c5a059]">SERVICES INCLUDE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863] leading-relaxed">
              At Arch Kitchen Cabinets, we provide expert kitchen renovation services in Toronto, transforming kitchens with quality craftsmanship, functional designs, and customized solutions.
            </p>
          </div>

          {/* 3 Featured Service Cards - Exact text from screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completeServices.map((card, idx) => (
              <div
                key={idx}
                className={`arch-card overflow-hidden flex flex-col group transform hover:-translate-y-1 scroll-reveal reveal-init ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
                }`}
              >
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-arch uppercase font-bold text-[#1e1d1b] mb-3 group-hover:text-[#c5a059] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#6b6863] leading-relaxed text-left sm:text-center">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#c5a059] hover:text-[#b38e45] group-hover:translate-x-1 transition-all"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Arch Kitchen Cabinets (Exact Text & Layout from Screenshot 2) */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 architectural-bg contour-lines border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Showcase with Rounded Arch Frame */}
            <div className="lg:col-span-6 relative scroll-reveal reveal-init">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#ede8df] bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1] z-10 group">
                <Image
                  src="/hero_main.png"
                  alt="Arch Kitchen Cabinets Renovation Toronto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Text Column - Exact text matching screenshot 2 */}
            <div className="lg:col-span-6 space-y-6 scroll-reveal reveal-init delay-150">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
                  03 / ATELIER EXCELLENCE
                </span>
                <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b] leading-tight">
                  WHY CHOOSE <span className="text-[#c5a059]">ARCH KITCHENS</span>
                </h2>
                <p className="text-sm sm:text-base text-[#6b6863] leading-relaxed mt-4">
                  At Arch Kitchen Cabinets, we create beautiful and functional kitchens that enhance your home. Our full kitchen renovation services in Toronto cover everything from layout and cabinetry to countertops and flooring, delivering quality craftsmanship and lasting results.
                </p>
              </div>

              {/* 5 Bullet Points with Checkmark Icons */}
              <div className="space-y-4 pt-2">
                {whyChoosePoints.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5 group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-sm leading-snug">
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

              {/* Consultation Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-full shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Schedule A Free In-Home Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Kitchen Renovation Process (Exact 4 Cards from Screenshot 2) */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 architectural-bg contour-lines border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header with decorative center accent line */}
          <div className="text-center max-w-2xl mx-auto space-y-3 scroll-reveal reveal-init">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
              04 / EXECUTION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b]">
              KITCHEN RENOVATION <span className="text-[#c5a059]">PROCESS</span>
            </h2>
          </div>

          {/* 4 Process Cards - Minimal arch-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, sIdx) => (
              <div
                key={step.num}
                className={`arch-card p-7 pt-10 relative group flex flex-col justify-between text-center scroll-reveal reveal-init ${
                  sIdx === 0
                    ? "delay-100"
                    : sIdx === 1
                    ? "delay-200"
                    : sIdx === 2
                    ? "delay-300"
                    : "delay-400"
                }`}
              >
                {/* Yellow / Gold Tab Badge with number in top-left */}
                <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-mono font-bold text-xs w-8 h-8 flex items-center justify-center rounded-tl-2xl rounded-br-lg shadow-sm">
                  {step.num}
                </div>

                <div>
                  {/* Clean Icon */}
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] transition-colors">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-arch uppercase font-bold text-[#1e1d1b] mb-3 group-hover:text-[#c5a059] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6b6863] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-stone-800 scroll-reveal reveal-init">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                Ready to Begin Your Kitchen Transformation?
              </span>
              <h3 className="text-2xl sm:text-3xl font-arch uppercase text-white">
                Book Your Design Session with Arch Kitchen Cabinets
              </h3>
              <p className="text-xs sm:text-sm text-[#ded8cb] max-w-xl">
                Call our workshop directly or schedule an in-home measurement with our master joiners in Toronto.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get A Free Quote
              </Link>
              <a
                href="tel:+14164749094"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all whitespace-nowrap"
              >
                +1 416-474-9094
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

            {/* Column 4: Schedule CTA Button */}
            <div className="lg:col-span-3 flex items-start lg:justify-end pt-2">
              <Link
                href="/contact"
                className="inline-block px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-xs sm:text-sm rounded-md transition-all shadow hover:shadow-lg transform hover:-translate-y-0.5 text-center"
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
