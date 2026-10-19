"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Award,
  Users,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight,
  ShieldCheck,
  Hammer,
  Gem,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b]">
      {/* Unified Navbar */}
      <Navbar activePage="about" />

      {/* Architectural Hero Header Banner for About Us (Unified Single Page) */}
      <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-3">
                01 / ATELIER HERITAGE & CRAFTSMANSHIP
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                ABOUT <span className="text-[#c5a059]">ARCH KITCHENS</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ TORONTO BESPOKE JOINERY & ARCHITECTURAL INTERIORS ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Transforming residential living spaces across the Greater Toronto Area with uncompromising millwork precision, in-house joinery, and enduring architectural elegance.
          </p>
        </div>
      </section>

      {/* Main Know More About Us Section (Continuous Seamless Flow) */}
      <section className="pt-6 pb-20 lg:pt-8 lg:pb-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Main Story & Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column with Exact Requested Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
                  02 / OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-arch uppercase text-[#1e1d1b] leading-tight">
                  KNOW MORE <span className="text-[#c5a059]">ABOUT US</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#5a5750] leading-relaxed">
                <p>
                  Welcome to Arch Kitchen Cabinets, your premier destination for
                  kitchen remodeling in Toronto. We specialize in transforming
                  kitchens into functional and stylish spaces that reflect your
                  unique preferences and lifestyle. With a team of experienced
                  professionals, we offer comprehensive services including custom
                  kitchen cabinet installation, cabinet refacing, full kitchen
                  remodeling, countertop installation, sink installation and
                  replacement, and kitchen flooring solutions.
                </p>
                <p>
                  Our commitment to quality craftsmanship and personalized design
                  ensures that every project we undertake is completed to the
                  highest standards. Trust Arch Kitchen Cabinets to elevate the
                  heart of your home and make your kitchen dreams into a reality.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-full shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white border border-[#ded8cb] hover:border-[#c5a059] text-[#2c2b29] font-medium text-xs uppercase tracking-wider rounded-full transition-all shadow-sm"
                >
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>

            {/* Right Media Column with Inset Testimonial Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#ede8df] bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1] z-10 group">
                <Image
                  src="/image_from_https_www.archkitchencabinets.com_wp_content_uploads_2024_05_home.png"
                  alt="Arch Kitchen Cabinets Master Interior Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Verified Client Quote Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#ede8df] shadow-xl z-20">
                  <div className="flex items-center justify-between mb-2">
                    <Quote className="w-5 h-5 text-[#c5a059]" />
                    <div className="flex text-[#c5a059] space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#3e3b36] italic leading-relaxed">
                    “We had our new kitchen installed by Arch kitchen Cabinets. Everything was exceptional from the beginning. Their design team to installers did a great job. Happy to recommend to everyone who is looking for a new kitchen.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Architectural Achievements Metric Cards */}
          <div className="pt-4">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-1">
                03 / MILESTONES & PROVEN EXCELLENCE
              </span>
              <h3 className="text-3xl sm:text-4xl font-arch uppercase text-[#1e1d1b]">
                OUR PROUD <span className="text-[#c5a059]">ACHIEVEMENTS</span>
              </h3>
            </div>

            {/* 4 Metrics Cards - Minimal pill cards */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-2 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0">
              {/* Stat 1: Satisfied Clients */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center arch-card p-6 sm:p-7 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-arch font-bold tracking-tight text-[#1e1d1b]">
                  500 +
                </div>
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Satisfied Clients
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Homeowners across GTA who trust our joinery.
                </p>
              </div>

              {/* Stat 2: Employees */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center arch-card p-6 sm:p-7 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-arch font-bold text-[#1e1d1b] tracking-tight">
                  15 +
                </div>
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Employees
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Dedicated in-house craftsmen, designers & joiners.
                </p>
              </div>

              {/* Stat 3: Project Done */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center arch-card p-6 sm:p-7 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-arch font-bold tracking-tight text-[#1e1d1b]">
                  500 +
                </div>
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Project Done
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Master residential transformations completed.
                </p>
              </div>

              {/* Stat 4: Work Hours */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center arch-card p-6 sm:p-7 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-arch font-bold text-[#1e1d1b] tracking-tight">
                  15,000 +
                </div>
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Work Hours
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Poured into fine architectural kitchen joinery.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values / Why Homeowners Choose Arch Kitchens */}
          <div className="arch-card p-8 lg:p-14 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-1">
                04 / THE ARCH KITCHENS STANDARD
              </span>
              <h3 className="text-3xl font-arch uppercase text-[#1e1d1b]">
                WHY HOMEOWNERS CHOOSE OUR <span className="text-[#c5a059]">ATELIER</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <Hammer className="w-6 h-6" />
                </div>
                <h4 className="font-arch font-bold text-lg text-[#1e1d1b]">100% In-House Built</h4>
                <p className="text-xs text-[#66635e] leading-relaxed">
                  Every cabinet box, dovetail drawer, and lacquer door is precision crafted in our private Toronto millwork studio without third-party outsourcing.
                </p>
              </div>

              <div className="bg-white/80 p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <Gem className="w-6 h-6" />
                </div>
                <h4 className="font-arch font-bold text-lg text-[#1e1d1b]">Premium Materials</h4>
                <p className="text-xs text-[#66635e] leading-relaxed">
                  Solid Canadian hardwoods, imported European white oak, luxury quartzite and marble slabs, and Blum concealed soft-close mechanics.
                </p>
              </div>

              <div className="bg-white/80 p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-arch font-bold text-lg text-[#1e1d1b]">Comprehensive Warranty</h4>
                <p className="text-xs text-[#66635e] leading-relaxed">
                  Full warranty coverage on all custom installations and lifetime manufacturer warranty on all functional concealed hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Matching Footer */}
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
                    href="/#blog"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Latest News</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Our Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#blog"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Blog</span>
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
