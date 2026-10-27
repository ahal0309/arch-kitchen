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
  Sparkles,
  Calendar,
  Layers,
  Wrench,
  Clock3,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CabinetRefacingPage() {
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
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-3">
                01 / SERVICES / PRECISION REFACING
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                CABINET REFACING <span className="text-[#c5a059]">TORONTO</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ MODERN ELEVATION WITH MINIMAL DISRUPTION ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Revitalize your kitchen with premium doors, veneers, and modern hardware at a fraction of the cost and time of full replacement.
          </p>
        </div>
      </section>

      {/* ──────────────── EXPERT CABINET REFACING SERVICES IN TORONTO (Screenshot 1) ──────────────── */}
      <section className="pt-6 pb-20 px-6 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Numbered Points 1 to 5 */}
          <div className="lg:col-span-7 scroll-reveal reveal-init">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
              02 / MODERN LIVING
            </span>
            <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#1e1d1b] leading-tight mb-8">
              EXPERT CABINET REFACING <br />
              <span className="text-[#c5a059]">SERVICES IN TORONTO</span>
            </h2>

            <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
              {/* 1. Cost-Effective */}
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#181715] shrink-0">1.</span>
                <p>
                  <strong className="text-[#181715]">Cost-Effective:</strong>{" "}
                  Refacing is a more budget-friendly option compared to a full
                  cabinet replacement. It focuses on updating the exterior of
                  your cabinets, such as doors and veneers, allowing you to keep
                  your existing cabinets, which saves you money on materials and
                  labor.
                </p>
              </div>

              {/* 2. Minimal Disruption */}
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#181715] shrink-0">2.</span>
                <p>
                  <strong className="text-[#181715]">Minimal Disruption:</strong>{" "}
                  Cabinet refacing involves replacing just the outer components of
                  your cabinets, such as doors and veneers, allowing you to keep
                  your existing cabinet boxes. This means less mess and faster
                  project completion.
                </p>
              </div>

              {/* 3. Eco-Friendly */}
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#181715] shrink-0">3.</span>
                <p>
                  <strong className="text-[#181715]">Eco-Friendly:</strong> By
                  reusing the existing cabinet frames, you reduce waste and
                  contribute to a more sustainable renovation process. Refacing
                  is an environmentally friendly choice that minimizes the impact
                  on landfills.
                </p>
              </div>

              {/* 4. Wide Range of Options */}
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#181715] shrink-0">4.</span>
                <p>
                  <strong className="text-[#181715]">
                    Wide Range of Options:
                  </strong>{" "}
                  With cabinet refacing, you have access to a variety of styles,
                  finishes, and materials. Whether you prefer a classic wood veneer
                  or a sleek modern laminate, we offer options that fit your
                  aesthetic preferences.
                </p>
              </div>

              {/* 5. Increased Home Value */}
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#181715] shrink-0">5.</span>
                <p>
                  <strong className="text-[#181715]">
                    Increased Home Value:
                  </strong>{" "}
                  Updating your cabinets with a fresh look enhances the overall
                  appeal of your home. Refaced cabinets can significantly boost
                  your property&apos;s value and attractiveness to potential buyers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Image with Yellow/Gold Accent Corner (Screenshot 1) */}
          <div className="lg:col-span-5 relative scroll-reveal reveal-init" style={{ transitionDelay: "150ms" }}>
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#c5a059] rounded-tr-2xl -z-0" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-[#c5a059] rounded-bl-2xl -z-0" />

            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop"
                alt="Expert Cabinet Refacing in Toronto kitchen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE ARCH KITCHEN CABINETS (Screenshot 2) ──────────────── */}
      <section className="py-20 border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Framed Image with Arch Card Border */}
            <div className="lg:col-span-5 relative scroll-reveal reveal-init">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#ede8df] aspect-[4/3] group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern kitchen why choose arch kitchen cabinets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Exact Content & Verbatim Bullet Points */}
            <div className="lg:col-span-7 scroll-reveal reveal-init space-y-4" style={{ transitionDelay: "150ms" }}>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
                  03 / ATELIER STANDARDS
                </span>
                <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#181715] tracking-tight">
                  WHY CHOOSE <span className="text-[#c5a059]">ARCH KITCHENS</span>
                </h2>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Over time, cabinets can show signs of wear and tear, losing their
                original charm and functionality. Refacing is a cost-effective
                alternative to replacing cabinets entirely. It allows you to
                update the appearance of your cabinets while retaining their
                original structure. This approach is ideal if you’re looking to
                refresh your space with minimal disruption and expense.
              </p>

              {/* 5 Bullet Points with Checkmark Icons */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Customized Kitchen Designs :
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Tailored layouts that match your style while maximizing
                      functionality and aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      High-Quality Materials:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Premium cabinetry, durable countertops, and stylish
                      flooring for lasting beauty
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
                      Professional renovation services from demolition to final
                      installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#181715]">
                      Innovative Solutions:
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Smart features, optimized storage, and energy-efficient
                      upgrades.
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
                      Clear estimates with no hidden costs, ensuring a stress-free
                      renovation within budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── WHAT WE OFFER (Screenshot 2) ──────────────── */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        <div className="text-center mb-16 scroll-reveal reveal-init">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
            04 / REFACING SCOPE & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#181715] tracking-tight">
            WHAT WE <span className="text-[#c5a059]">OFFER</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            At Arch Kitchen Cabinets, we provide comprehensive cabinet refacing
            services tailored to meet your needs. Our offerings include:
          </p>
        </div>

        {/* 4 Offering Cards in arch-card pill styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Card 1: Custom Design Consultation */}
          <div
            className="arch-card p-7 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Custom Design Consultation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We work with you to select the perfect style, finish, and materials
              for your cabinet refacing project. Our team helps you visualize the
              result and ensures that the design aligns with your overall decor.
            </p>
          </div>

          {/* Card 2: High-Quality Materials */}
          <div
            className="arch-card p-7 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              High-Quality Materials
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We use premium materials for refacing, including high-grade veneers,
              durable laminates, and stylish hardware. Our selections are
              designed to enhance both the durability and aesthetic appeal of
              your cabinets.
            </p>
          </div>

          {/* Card 3: Expert Craftsmanship */}
          <div
            className="arch-card p-7 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Expert Craftsmanship
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our skilled professionals handle every aspect of the refacing
              process with precision. From removing old veneers to installing new
              ones, we ensure a flawless finish that rejuvenates your cabinets.
            </p>
          </div>

          {/* Card 4: Efficient Process */}
          <div
            className="arch-card p-7 flex flex-col items-center text-center scroll-reveal reveal-init"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
              <Clock3 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-arch uppercase font-bold text-[#181715] mb-3">
              Efficient Process
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We strive to complete your cabinet refacing project efficiently,
              minimizing disruption to your daily routine. Our team works
              diligently to deliver high-quality results on time.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── WHAT SETS US APART (Screenshot 3) ──────────────── */}
      <section className="py-20 border-t border-[#ede8df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Framed Image with Yellow/Gold Accent Corner (Screenshot 3) */}
            <div className="lg:col-span-5 relative scroll-reveal reveal-init">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#c5a059] rounded-tl-2xl -z-0" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#c5a059] rounded-br-2xl -z-0" />

              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <Image
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
                  alt="What sets Arch Kitchen Cabinets apart in Toronto"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Exact Content from Screenshot 3 + Get A Quote button */}
            <div className="lg:col-span-7 scroll-reveal reveal-init space-y-4" style={{ transitionDelay: "150ms" }}>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
                  05 / ATELIER DISTINCTION
                </span>
                <h2 className="text-3xl sm:text-5xl font-arch uppercase text-[#181715] tracking-tight">
                  WHAT SETS <span className="text-[#c5a059]">US APART</span>
                </h2>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                At Arch Kitchen Cabinets, we distinguish ourselves through our
                commitment to personalized service, transparent pricing,
                exceptional quality, and extensive experience. We tailor our
                solutions to match your unique style and preferences, ensuring
                that your refaced cabinets enhance your home&apos;s décor. Our
                clear, upfront pricing eliminates hidden fees, providing detailed
                estimates to help you manage your budget effectively.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We use only high-quality materials and pay meticulous attention to
                detail to deliver superior finishes on every project. Our
                experienced team, with years of industry expertise, is dedicated
                to providing professional service and ensuring your complete
                satisfaction.
              </p>

              {/* Exact Button "Get A Quote" */}
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TRANSFORM YOUR CABINETS TODAY! BANNER (Screenshot 3) ──────────────── */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden bg-black text-center">
        {/* Background Kitchen Image with Dark Luxury Texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
            alt="Transform Your Cabinets Today"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Exact Verbatim Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c5a059] tracking-tight">
            Transform Your Cabinets Today!
          </h2>

          {/* Verbatim Paragraph */}
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Ready to give your cabinets a fresh new look? Contact Arch Kitchen
            Cabinets in Toronto for expert cabinet refacing services that breathe
            new life into your space. Our team is here to help you achieve a
            beautiful, updated look with minimal hassle.
          </p>

          {/* Verbatim Subtitle */}
          <h3 className="text-lg sm:text-2xl font-bold text-[#c5a059] tracking-wide pt-2">
            Call Us Today For A Free Consultation.
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
