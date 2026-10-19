"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Wrench,
  Sparkles,
  Layers,
  ShieldCheck,
  Calendar,
  Compass,
  Hammer,
  ClipboardCheck,
} from "lucide-react";

export default function CabinetInstallationPage() {
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
          {/* Brand Logo - Pure cropped emblem with generous right margin */}
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

              {/* Exact Dark Dropdown Menu Matching User Screenshot */}
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

        {/* Mobile Dropdown Menu (Exact Home Page Style) */}
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
                  className="block text-xs text-[#c5a059] hover:underline font-semibold"
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
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full px-5 py-3 bg-[#c5a059] text-white font-medium text-xs tracking-wider uppercase rounded-sm shadow-sm"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ──────────────── HERO SECTION (Exact Title from Screenshot 1) ──────────────── */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Kitchen Image with Dark Luxury Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
            alt="Cabinet Installation Toronto"
            fill
            priority
            className="object-cover object-center opacity-45 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          {/* Exact Verbatim Header */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Cabinet Installation Toronto
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl mx-auto font-light">
            Expert cabinet installation, repair, and refinishing services designed
            to elevate your kitchen’s elegance, durability, and daily efficiency.
          </p>
        </div>
      </section>

      {/* ──────────────── INTRO + WHAT WE OFFER SECTION (Screenshot 1) ──────────────── */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Exact Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal reveal-init">
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            Is your kitchen or any other room in need of a fresh update? Arch Kitchen
            Cabinets offers expert cabinet installation services in Toronto to enhance
            the functionality and aesthetics of your home. Whether you need new
            cabinets to complement your décor or repairs to existing ones, our
            skilled team is here to deliver outstanding results.
          </p>
        </div>

        {/* Section Heading with Warm Gold Border Frame (Matching Screenshot 1) */}
        <div className="border border-[#c5a059]/30 rounded-2xl p-6 sm:p-10 lg:p-12 bg-white shadow-xl scroll-reveal reveal-init">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181715] tracking-tight">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 rounded-full" />
          </div>

          {/* 3 Offer Cards (Cabinet Installation, Cabinet Repair [Yellow/Gold highlight card], Cabinet Refinishing) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Cabinet Installation Services */}
            <div className="bg-[#fbf9f5] border border-stone-200 rounded-xl p-7 sm:p-8 flex flex-col justify-start shadow-sm hover:shadow-xl transition-all duration-300 scroll-reveal reveal-init hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#181715] mb-4">
                Cabinet Installation Services
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Ready to upgrade your space with new cabinets? Arch Kitchen Cabinets
                handles the entire installation process with precision. We ensure
                that your cabinets are perfectly aligned, securely installed, and
                seamlessly integrated into your space. Our team also offers the
                option to rearrange existing cabinets for a fresh look.
              </p>
            </div>

            {/* Card 2: Cabinet Repair Services (Highlighted with Warm Gold Accent Matching Screenshot 1) */}
            <div
              className="bg-[#c5a059] text-white rounded-xl p-7 sm:p-8 flex flex-col justify-start shadow-xl relative transform md:-translate-y-2 hover:shadow-2xl transition-all duration-300 scroll-reveal reveal-init"
              style={{ transitionDelay: "150ms" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Cabinet Repair Services
              </h3>
              <p className="text-stone-100 text-sm leading-relaxed mb-4">
                If your current cabinets need repair, our experts can address a
                variety of issues, including:
              </p>
              <ul className="space-y-2 text-sm text-stone-100">
                <li className="flex items-start gap-2">
                  <span className="text-white text-base leading-none mt-1">•</span>
                  <span>Slumping or broken shelves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-base leading-none mt-1">•</span>
                  <span>Drawers that don’t slide smoothly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-base leading-none mt-1">•</span>
                  <span>
                    Drawers with damaged bottoms or malfunctioning guides
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-base leading-none mt-1">•</span>
                  <span>Broken drawer fronts or warped doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white text-base leading-none mt-1">•</span>
                  <span>Flaking laminate or broken hinges</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-stone-100 leading-relaxed pt-4 border-t border-white/20">
                Our repair services restore your cabinets to their original condition,
                extending their lifespan and maintaining their functionality.
              </p>
            </div>

            {/* Card 3: Cabinet Refinishing Services */}
            <div
              className="bg-[#fbf9f5] border border-stone-200 rounded-xl p-7 sm:p-8 flex flex-col justify-start shadow-sm hover:shadow-xl transition-all duration-300 scroll-reveal reveal-init hover:-translate-y-1"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-xl font-bold text-[#181715] mb-4">
                Cabinet Refinishing Services
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Refresh your kitchen without the need for new cabinets by choosing
                our refinishing services. We provide:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                  <span>Thorough cleaning to remove grease and dirt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                  <span>
                    Application of moisture, heat, scratch, and impact-resistant
                    finishes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                  <span>Installation of new doors, pulls, or knobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                  <span>
                    Custom color and finish changes to match your new look
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE ARCH KITCHEN CABINETS (Screenshot 2) ──────────────── */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Framed Image with Yellow/Gold Accent Blocks (matching image 2) */}
            <div className="lg:col-span-5 relative scroll-reveal reveal-init">
              {/* Top Accent Box */}
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#c5a059] rounded-tl-xl -z-0" />
              {/* Bottom Accent Box */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#c5a059] rounded-br-xl -z-0" />

              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Why Choose Arch Kitchen Cabinets for Cabinet Installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Exact Content & Verbatim Bullet Points */}
            <div className="lg:col-span-7 scroll-reveal reveal-init" style={{ transitionDelay: "150ms" }}>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181715] tracking-tight">
                Why Choose Arch Kitchen Cabinets
              </h2>

              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                At Arch Kitchen Cabinets, we provide professional cabinet installation
                services in Toronto, enhancing your space with expertly fitted,
                high-quality cabinetry. From kitchens and bathrooms to custom storage
                solutions, we deliver precision craftsmanship, functionality, and
                lasting value.
              </p>

              {/* 5 Bullet Points with Checkmark Icons */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Tailored Solutions:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Custom cabinet designs that match your style and functional
                      needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Quality Materials:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Premium cabinetry built for durability, beauty, and everyday use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Expert Installation:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Skilled professionals ensure a precise fit and flawless finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Comprehensive Services:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Cabinet installation, repair, and refinishing solutions under
                      one roof.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Transparent Pricing:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Clear, upfront estimates with no hidden costs and excellent
                      value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── CABINET INSTALLATION PROCESS (Screenshot 3) ──────────────── */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal reveal-init">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181715] tracking-tight">
            Cabinet Installation Process
          </h2>
          {/* Subtle Decorative Line Under Title */}
          <div className="w-20 h-1 bg-[#c5a059] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Process Cards with Top-Left Yellow/Gold Badge Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Step 1 */}
          <div
            className="relative bg-white border border-stone-200 rounded-xl p-7 pt-9 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center scroll-reveal reveal-init hover:-translate-y-1.5"
            style={{ transitionDelay: "100ms" }}
          >
            {/* Number Tab Badge Top-Left */}
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-bold text-sm w-9 h-9 rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-sm">
              1
            </div>

            {/* Line Art Icon in Gold */}
            <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-5 text-[#c5a059]">
              <Calendar className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#181715] mb-3">
              Initial Consultation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We discuss your vision, requirements, and design preferences while
              taking measurements and providing expert recommendations.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="relative bg-white border border-stone-200 rounded-xl p-7 pt-9 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center scroll-reveal reveal-init hover:-translate-y-1.5"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-bold text-sm w-9 h-9 rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-sm">
              2
            </div>

            <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-5 text-[#c5a059]">
              <Compass className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#181715] mb-3">
              Design & Planning
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our team creates detailed designs and 3D renderings, refining them
              based on your feedback.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="relative bg-white border border-stone-200 rounded-xl p-7 pt-9 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center scroll-reveal reveal-init hover:-translate-y-1.5"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-bold text-sm w-9 h-9 rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-sm">
              3
            </div>

            <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-5 text-[#c5a059]">
              <Hammer className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#181715] mb-3">
              Installation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We handle the entire renovation process, from demolition and
              cabinetry installation to countertops and finishing touches.
            </p>
          </div>

          {/* Step 4 */}
          <div
            className="relative bg-white border border-stone-200 rounded-xl p-7 pt-9 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center scroll-reveal reveal-init hover:-translate-y-1.5"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-bold text-sm w-9 h-9 rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-sm">
              4
            </div>

            <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 flex items-center justify-center mb-5 text-[#c5a059]">
              <ClipboardCheck className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#181715] mb-3">
              Final Review
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We inspect the completed project, address any concerns, and ensure
              your new kitchen is ready to enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── GET STARTED TODAY BANNER (Screenshot 3) ──────────────── */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden bg-black text-center">
        {/* Background Kitchen Image with Dark Luxury Texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop"
            alt="Cabinet installation contact backdrop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Exact Verbatim Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c5a059] tracking-tight">
            Get Started Today!
          </h2>

          {/* Verbatim Paragraph */}
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Looking to install new cabinets or refresh your existing ones? Contact
            Arch Kitchen Cabinets for professional cabinet installation and repair
            services in Toronto. Our dedicated team is ready to help you transform
            your home with expert craftsmanship and personalized service.
          </p>

          {/* Verbatim Subtitle */}
          <h3 className="text-lg sm:text-2xl font-bold text-[#c5a059] tracking-wide pt-2">
            Call Us Today To Get Started On Your Cabinet Project!
          </h3>

          {/* Yellow/Gold Direct Phone CTA Button */}
          <div className="pt-4">
            <a
              href="tel:4164749094"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#c5a059] hover:bg-[#b38e45] text-stone-950 font-bold text-sm sm:text-base tracking-wider uppercase rounded-md shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-stone-950" />
              <span>+1 416-474-9094</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Exact Design Matching Home Page */}
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
