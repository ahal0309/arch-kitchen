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
import Navbar from "@/components/Navbar";

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
    <div className="min-h-screen bg-transparent text-[#2c2a29] font-sans selection:bg-[#c5a059] selection:text-white animate-page-enter">
      {/* Unified Navbar */}
      <Navbar activePage="services" />

      {/* Architectural Hero Header Section (Unified Single Page) */}
      <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                CABINET INSTALLATION <span className="text-[#c5a059]">TORONTO</span>
              </h1>
            </div>
            </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Expert cabinet installation, repair, and refinishing services designed to elevate your kitchen's elegance, durability, and daily efficiency.
          </p>
        </div>
      </section>

      {/* ──────────────── INTRO + WHAT WE OFFER SECTION (Screenshot 1) ──────────────── */}
      <section className="pt-6 pb-20 px-6 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        {/* Exact Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal reveal-init">
          <p className="text-[#5a5750] text-base sm:text-lg leading-relaxed font-normal">
            Is your kitchen or any other room in need of a fresh update? Arch Kitchen
            Cabinets offers expert cabinet installation services in Toronto to enhance
            the functionality and aesthetics of your home. Whether you need new
            cabinets to complement your décor or repairs to existing ones, our
            skilled team is here to deliver outstanding results.
          </p>
        </div>

        {/* Section Heading with Minimal Contour styling (Urbantrop Style) */}
        <div className="space-y-12 scroll-reveal reveal-init">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b]">
              WHAT WE <span className="text-[#c5a059]">OFFER</span>
            </h2>
          </div>

          {/* 3 Offer Cards in arch-card pill styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Cabinet Installation Services */}
            <div className="arch-card p-7 sm:p-8 flex flex-col justify-between scroll-reveal reveal-init">
              <div>
                <h3 className="text-xl font-arch uppercase font-bold text-[#1e1d1b] mb-4">
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
            </div>

            {/* Card 2: Cabinet Repair Services */}
            <div className="arch-card p-7 sm:p-8 flex flex-col justify-between scroll-reveal reveal-init border-[#c5a059]/60">
              <div>
                <h3 className="text-xl font-arch uppercase font-bold text-[#1e1d1b] mb-4">
                  Cabinet Repair Services
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  If your current cabinets need repair, our experts can address a
                  variety of issues, including:
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Slumping or broken shelves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Drawers that don't slide smoothly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Drawers with damaged bottoms or malfunctioning guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Broken drawer fronts or warped doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Flaking laminate or broken hinges</span>
                  </li>
                </ul>
              </div>
              <p className="mt-5 text-xs text-stone-500 leading-relaxed pt-4 border-t border-[#ede8df]">
                Our repair services restore your cabinets to their original condition,
                extending their lifespan and maintaining their functionality.
              </p>
            </div>

            {/* Card 3: Cabinet Refinishing Services */}
            <div className="arch-card p-7 sm:p-8 flex flex-col justify-between scroll-reveal reveal-init">
              <div>
                <h3 className="text-xl font-arch uppercase font-bold text-[#1e1d1b] mb-4">
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
                    <span>Application of moisture, heat, scratch, and impact-resistant finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Installation of new doors, pulls, or knobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c5a059] text-base leading-none mt-1">•</span>
                    <span>Custom color and finish changes to match your new look</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE ARCH KITCHEN CABINETS (Screenshot 2) ──────────────── */}
      <section className="py-20 border-t border-[#ede8df]">
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
            <div className="lg:col-span-7 scroll-reveal reveal-init space-y-4" style={{ transitionDelay: "150ms" }}>
              <div>
                <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#181715] tracking-tight">
                  WHY CHOOSE <span className="text-[#c5a059]">ARCH KITCHENS</span>
                </h2>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
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
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        <div className="text-center mb-16 scroll-reveal reveal-init">
          <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#181715] tracking-tight">
            CABINET INSTALLATION <span className="text-[#c5a059]">PROCESS</span>
          </h2>
        </div>

        {/* 4 Process Cards in arch-card pill styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Step 1 */}
          <div
            className="relative arch-card p-7 pt-10 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "100ms" }}
          >
            {/* Number Tab Badge Top-Left */}
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-mono font-bold text-xs w-8 h-8 rounded-tl-2xl rounded-br-lg flex items-center justify-center shadow-sm">
              1
            </div>

            {/* Line Art Icon in Gold */}
            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Calendar className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Initial Consultation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We discuss your vision, requirements, and design preferences while
              taking measurements and providing expert recommendations.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="relative arch-card p-7 pt-10 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-mono font-bold text-xs w-8 h-8 rounded-tl-2xl rounded-br-lg flex items-center justify-center shadow-sm">
              2
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Compass className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Design & Planning
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our team creates detailed designs and 3D renderings, refining them
              based on your feedback.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="relative arch-card p-7 pt-10 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-mono font-bold text-xs w-8 h-8 rounded-tl-2xl rounded-br-lg flex items-center justify-center shadow-sm">
              3
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Hammer className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Installation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We handle the entire renovation process, from demolition and
              cabinetry installation to countertops and finishing touches.
            </p>
          </div>

          {/* Step 4 */}
          <div
            className="relative arch-card p-7 pt-10 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute top-0 left-0 bg-[#c5a059] text-white font-mono font-bold text-xs w-8 h-8 rounded-tl-2xl rounded-br-lg flex items-center justify-center shadow-sm">
              4
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <ClipboardCheck className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
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
                  src="/brand_footer_logo.webp"
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
