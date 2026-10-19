"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#fbf9f5] text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b]">
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
            <Link href="/" className="hover:text-[#c5a059] transition-colors py-1">
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#c5a059] font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#c5a059]"
            >
              About Us
            </Link>

            {/* Our Services with Dropdown Indicator */}
            <div className="relative group/svc py-2">
              <Link
                href="/services"
                className="flex items-center space-x-1 hover:text-[#c5a059] transition-colors whitespace-nowrap"
              >
                <span>Our Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#78756e] group-hover/svc:text-[#c5a059] transition-transform group-hover/svc:rotate-180" />
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
              className="block text-[#c5a059] font-medium py-1"
            >
              About Us
            </Link>
            <div className="py-1">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#4a4742] hover:text-[#c5a059] font-medium py-1"
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

      {/* Hero Header Banner for About Us */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-16 bg-[#1f1e1c] text-white overflow-hidden border-b border-[#33312f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero_main.png"
            alt="Arch Kitchens Workshop Craftsmanship"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] block">
            Atelier Heritage & Craftsmanship
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight">
            About <span className="text-[#c5a059]">Arch Kitchens</span>
          </h1>
          <p className="text-sm sm:text-base text-[#cfcbc4] max-w-2xl mx-auto leading-relaxed">
            Transforming spaces across the Greater Toronto Area with uncompromising precision, in-house joinery, and architectural elegance.
          </p>
        </div>
      </section>

      {/* Main Know More About Us Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-[#fbf9f5]">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Main Story & Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column with Exact Requested Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                  Atelier Heritage
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal leading-tight">
                  Know More <span className="text-[#c5a059]">About Us</span>
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
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-sm shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-white border border-[#ded8cb] hover:border-[#c5a059] text-[#2c2b29] font-medium text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm"
                >
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>

            {/* Right Media Column with Inset Testimonial Card */}
            <div className="lg:col-span-6 relative">
              {/* Champagne Brass Architectural Backing Frame */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-4/5 h-4/5 bg-[#e8d5a8]/60 rounded-2xl -z-0" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1] z-10 group">
                <Image
                  src="/image_from_https_www.archkitchencabinets.com_wp_content_uploads_2024_05_home.png"
                  alt="Arch Kitchen Cabinets Master Interior Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Verified Client Quote Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-5 border border-[#ede8df] shadow-xl z-20">
                  <div className="flex items-center justify-between mb-2">
                    <Quote className="w-6 h-6 text-[#c5a059]" />
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

          {/* 4 Attractive Achievements Metric Cards */}
          <div className="pt-4">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-1">
                Milestones & Proven Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1e1d1b]">
                Our Proud <span className="text-[#c5a059]">Achievements</span>
              </h3>
            </div>

            {/* 4 Metrics Cards - Sideways on mobile, Grid on desktop */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pb-2 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0">
              {/* Stat 1: Satisfied Clients */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center bg-gradient-to-br from-[#c5a059] to-[#b38e45] text-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 sm:mb-6 border border-white/20">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                  500 +
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/95 font-semibold mt-1">
                  Satisfied Clients
                </div>
                <p className="text-[11px] text-white/80 mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Homeowners across GTA who trust our joinery.
                </p>
              </div>

              {/* Stat 2: Employees */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-[#ede8df] shadow-sm hover:border-[#c5a059] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#fbf9f5] border border-[#ede8df] group-hover:bg-[#f7f1e5] flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6 transition-colors">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1e1d1b] tracking-tight">
                  15 +
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Employees
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Dedicated in-house craftsmen, designers & joiners.
                </p>
              </div>

              {/* Stat 3: Project Done */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center bg-gradient-to-br from-[#c5a059] to-[#b38e45] text-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group shrink-0 sm:shrink">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 sm:mb-6 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                  500 +
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/95 font-semibold mt-1">
                  Project Done
                </div>
                <p className="text-[11px] text-white/80 mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Master residential transformations completed.
                </p>
              </div>

              {/* Stat 4: Work Hours */}
              <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-[#ede8df] shadow-sm hover:border-[#c5a059] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group shrink-0 sm:shrink">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#fbf9f5] border border-[#ede8df] group-hover:bg-[#f7f1e5] flex items-center justify-center text-[#c5a059] mb-4 sm:mb-6 transition-colors">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1e1d1b] tracking-tight">
                  15,000 +
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                  Work Hours
                </div>
                <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                  Poured into fine architectural kitchen joinery.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values / Why Homeowners Choose Arch Kitchens */}
          <div className="bg-[#f7f4ee]/70 rounded-3xl p-8 lg:p-14 border border-[#ede8df] space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-1">
                The Arch Kitchens Standard
              </span>
              <h3 className="text-3xl font-serif text-[#1e1d1b]">
                Why Homeowners Choose Our <span className="text-[#c5a059]">Atelier</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <Hammer className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1e1d1b]">100% In-House Built</h4>
                <p className="text-xs text-[#66635e] leading-relaxed">
                  Every cabinet box, dovetail drawer, and lacquer door is precision crafted in our private Toronto millwork studio without third-party outsourcing.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <Gem className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1e1d1b]">Premium Materials</h4>
                <p className="text-xs text-[#66635e] leading-relaxed">
                  Solid Canadian hardwoods, imported European white oak, luxury quartzite and marble slabs, and Blum concealed soft-close mechanics.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#ede8df] space-y-3 shadow-sm hover:border-[#c5a059] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fbf9f5] text-[#c5a059] flex items-center justify-center border border-[#ede8df]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1e1d1b]">Comprehensive Warranty</h4>
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
