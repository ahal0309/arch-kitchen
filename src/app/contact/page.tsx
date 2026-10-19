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
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        details: "",
      });
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b]">
      {/* Unified Navbar */}
      <Navbar activePage="contact" />

      {/* Architectural Hero Header Banner for Contact Us (Unified Single Page) */}
      <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-3">
                01 / DIRECT ATELIER INQUIRIES
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                CONTACT <span className="text-[#c5a059]">ARCH KITCHENS</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ 1940 ELLESMERE RD, SCARBOROUGH, ON ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            Connect directly with our master joiners and interior specialists in Toronto. Let's start planning your dream custom kitchen space today.
          </p>
        </div>
      </section>

      {/* Main Enquiry & Contact Page Body */}
      <main className="pt-6 pb-16 lg:pt-8 lg:pb-24 px-6 lg:px-16 relative overflow-hidden" id="contact-form">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Get In Touch, Direct Info & Map Preview */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-2">
                  02 / GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-arch uppercase text-[#1e1d1b] leading-tight">
                  HAVE ANY <span className="text-[#c5a059]">QUESTION?</span> WE ARE ALWAYS READY FOR YOU
                </h2>
                <p className="text-sm sm:text-base text-[#6b6863] mt-3">
                  We are always ready to assist you.
                </p>
              </div>

              {/* Schedule A Free Consultation Button */}
              <div>
                <a
                  href="#contact-form"
                  className="inline-block px-8 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Schedule A Free Consultation
                </a>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+14164749094"
                  className="flex items-center space-x-4 p-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-[#1e1d1b] tracking-tight">
                    +1 416-474-9094
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:Info@Archkitchencabinets.Com"
                  className="flex items-center space-x-4 p-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#1e1d1b] break-all">
                    Info@Archkitchencabinets.Com
                  </span>
                </a>

                {/* Physical Location */}
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-[#ede8df]">
                  <div className="w-12 h-12 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8c8880] uppercase tracking-wider block">Workshop & Showroom</span>
                    <p className="text-sm font-medium text-[#1e1d1b] leading-snug">
                      1940 Ellesmere Rd, Scarborough, ON M1H 2V7, Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Interactive Google Map Preview */}
              <div className="rounded-xl overflow-hidden border border-[#ede8df] shadow-md bg-white">
                <div className="p-3 bg-[#f7f4ee] border-b border-[#ede8df] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1e1d1b] flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Arch Kitchen Cabinets Showroom Map</span>
                  </span>
                  <a
                    href="https://maps.google.com/?q=1940+Ellesmere+Rd,+Scarborough,+ON+M1H+2V7,+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5a059] hover:underline font-medium"
                  >
                    Open in Maps ↗
                  </a>
                </div>
                <div className="relative w-full h-56">
                  <iframe
                    title="Arch Kitchens Location Map"
                    src="https://maps.google.com/maps?q=1940%20Ellesmere%20Rd%2C%20Scarborough%2C%20ON%20M1H%202V7%2C%20Canada&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form matching user layout & fields */}
            <div className="lg:col-span-7 arch-card p-8 lg:p-12 relative">
              {formSubmitted ? (
                <div className="h-full py-16 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#f7f1e5] border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-arch uppercase font-bold text-[#1e1d1b]">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="text-sm text-[#6b6863] max-w-md">
                    We have received your details. Our team at 1940 Ellesmere Rd will reach out shortly to assist you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4742] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter Your First Name"
                        className="w-full px-4 py-3.5 bg-[#fbf9f5] border border-[#ede8df] rounded-sm text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4742] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Your Last Name"
                        className="w-full px-4 py-3.5 bg-[#fbf9f5] border border-[#ede8df] rounded-sm text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4742] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3.5 bg-[#fbf9f5] border border-[#ede8df] rounded-sm text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4742] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3.5 bg-[#fbf9f5] border border-[#ede8df] rounded-sm text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4a4742] mb-2">
                      Comments
                    </label>
                    <textarea
                      rows={5}
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Write your comments or kitchen project requirements here..."
                      className="w-full px-4 py-3.5 bg-[#fbf9f5] border border-[#ede8df] rounded-sm text-sm focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="flex items-start space-x-3 pt-1">
                    <input
                      type="checkbox"
                      id="terms-contact"
                      required
                      className="mt-1 w-4 h-4 rounded text-[#c5a059] focus:ring-[#c5a059] border-[#ede8df]"
                    />
                    <label htmlFor="terms-contact" className="text-xs text-[#6b6863] leading-relaxed">
                      I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                    </label>
                  </div>

                  {/* reCAPTCHA Mockup Box */}
                  <div className="flex items-center justify-between p-3.5 bg-[#f9f9f9] border border-[#d3d3d3] rounded-md shadow-sm w-full sm:w-72 max-w-full">
                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded border-2 border-gray-400 text-[#c5a059] focus:ring-[#c5a059] cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-medium text-[#282828]">
                        I'm not a robot
                      </span>
                    </label>
                    <div className="flex flex-col items-center pl-4 text-center">
                      <svg className="w-7 h-7 text-[#4285f4] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="text-[9px] text-gray-500 font-semibold tracking-tighter uppercase mt-0.5">
                        reCAPTCHA
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-12 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

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
              <a
                href="#contact-form"
                className="inline-block px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-xs sm:text-sm rounded-md transition-all shadow hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Schedule A Free Consultation
              </a>
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
