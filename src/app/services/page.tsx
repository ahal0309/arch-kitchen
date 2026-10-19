"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Layers,
  LayoutGrid,
  PenTool,
  Gem,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Hammer,
  Sliders,
  Sparkles,
  ShieldCheck,
  Ruler,
  Paintbrush,
  HardHat,
  Award,
} from "lucide-react";

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

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

  const services = [
    {
      id: "full-kitchen-renovation",
      num: "01",
      category: "TURNKEY",
      icon: <Layers className="w-6 h-6 text-[#c5a059]" />,
      title: "Full Kitchen Renovation",
      tagline: "Turnkey Architecture & Complete Living Space Overhaul",
      description:
        "Transform your kitchen with modern designs for a complete makeover. Wall removal, layout reconfiguration, lighting integration, and turnkey project management.",
      features: [
        "Complete structural wall removal & load-bearing beam engineering",
        "Layout reconfiguration for modern open-concept living",
        "Full mechanical, electrical, and plumbing rough-ins & permits",
        "Seamless drywalling, framing, pot lights, and under-cabinet LED strips",
        "Dedicated on-site project superintendent from demolition to handover",
      ],
      idealFor: "Homeowners looking for a complete top-to-bottom transformation.",
      timeline: "4 - 8 Weeks",
      image: "/project1.png",
    },
    {
      id: "custom-cabinet-installation",
      num: "02",
      category: "JOINERY",
      icon: <LayoutGrid className="w-6 h-6 text-[#c5a059]" />,
      title: "Custom Cabinet Installation",
      tagline: "Bespoke Millwork, In-House CNC Precision & Dovetail Woodwork",
      description:
        "Tailor-made cabinets built to perfectly fit your style and storage needs. Solid maple boxes, soft-close dovetail drawers, fluted accents, and integrated spice pullouts.",
      features: [
        "3/4\" premium Canadian solid maple & birch cabinet boxes",
        "Soft-close Blum Legrabox / Tandembox Austrian hardware",
        "Full-height ceiling cabinetry with seamless two-piece crown moulding",
        "Integrated pull-out pantries, tiered spice racks, and corner carousels",
        "Custom fluted wood accents, floating display shelves, and custom panels",
      ],
      idealFor: "Bespoke storage optimization and architectural luxury aesthetics.",
      timeline: "3 - 5 Weeks",
      image: "/project2.png",
    },
    {
      id: "cabinet-refacing",
      num: "03",
      category: "REFACING",
      icon: <PenTool className="w-6 h-6 text-[#c5a059]" />,
      title: "Cabinet Refacing",
      tagline: "Modern Aesthetic Elevation with Minimal Disruption",
      description:
        "Restore the functionality and appearance of your existing cabinets. Modernize door profiles, apply flawless factory lacquer, and upgrade to Blum soft-close mechanics.",
      features: [
        "Brand-new solid wood or MDF doors & drawer fronts in custom profiles",
        "Durable multi-coat factory polyurethane lacquer finish",
        "Matching 1/4\" wood veneer skinning on all exterior cabinet gables",
        "Upgrade to whisper-quiet soft-close hinges and drawer slides",
        "Designer handles, pulls, and brass accents installed",
      ],
      idealFor: "Homeowners with solid cabinet layouts seeking a high-end designer look without full demolition.",
      timeline: "1 - 2 Weeks",
      image: "/kitchen_real_1.jpg",
    },
    {
      id: "countertop-installation",
      num: "04",
      category: "STONE",
      icon: <Gem className="w-6 h-6 text-[#c5a059]" />,
      title: "Luxury Countertops",
      tagline: "Taj Mahal Quartzite, Calacatta Marble & Heavy-Duty Quartz",
      description:
        "Taj Mahal quartzite, bookmatched Calacatta marble, and heavy-duty quartz. Precision fabricated with mitred waterfall gables and flush undermount sinks.",
      features: [
        "Direct stone slab sourcing from premier Italian and Brazilian quarries",
        "Digital laser templating for zero-gap edge alignment",
        "Mitred waterfall island gables with veining continuity across seams",
        "Precision CNC cutouts for undermount sinks and flush cooktops",
        "Factory penetrating sealant applied for maximum stain and heat resistance",
      ],
      idealFor: "Showstopping islands and durable, maintenance-free food prep surfaces.",
      timeline: "1 - 2 Weeks",
      image: "/project3.png",
    },
    {
      id: "backsplash-installation",
      num: "05",
      category: "BACKSPLASH",
      icon: <LayoutGrid className="w-6 h-6 text-[#c5a059]" />,
      title: "Seamless Backsplashes",
      tagline: "Continuous Full-Height Stone Slabs & Architectural Tilework",
      description:
        "Full-height continuous stone backsplashes with integrated round outlets and no bulky box cuts. Total visual flow that highlights the organic beauty of your stone.",
      features: [
        "Full-height continuous stone slab runs matching countertop veining",
        "Handcrafted zellige tiles, herringbone mosaics, and oversized porcelain",
        "Hidden under-cabinet electrical tracks to eliminate wall outlet clutter",
        "Laser-aligned grout lines with stain-resistant epoxy grouting",
        "Custom range hood alcove accents and built-in stone ledges",
      ],
      idealFor: "Creating an expansive, clean, and grease-resistant kitchen focal wall.",
      timeline: "3 - 5 Days",
      image: "/project4.png",
    },
    {
      id: "flooring-installation",
      num: "06",
      category: "FLOORING",
      icon: <Layers className="w-6 h-6 text-[#c5a059]" />,
      title: "Hardwood & Stone Flooring",
      tagline: "Engineered European White Oak, Herringbone & Large-Format Porcelain",
      description:
        "Architecturally selected engineered European white oak, herringbone flooring, and oversized porcelain tiles engineered to endure decades of kitchen life.",
      features: [
        "Wide-plank engineered European white oak with durable matte UV lacquer",
        "Classic Parisian herringbone and chevron precision installation",
        "24\"x48\" and 36\"x36\" rectified porcelain tile with Schluter Ditra-Heat",
        "Complete subfloor leveling, decoupling membranes, and acoustic soundproofing",
        "Seamless flush transitions between kitchen, dining, and living zones",
      ],
      idealFor: "Long-lasting foundation combining acoustic warmth and moisture resilience.",
      timeline: "1 - 2 Weeks",
      image: "/kitchen_real_3.jpg",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & In-Home Consultation",
      description:
        "We meet at your home or our showroom at 1940 Ellesmere Rd to review layout requirements, measure spaces, and understand your lifestyle aesthetics.",
    },
    {
      step: "02",
      title: "3D CAD Architectural Visualization",
      description:
        "Our interior designers produce detailed photorealistic 3D renders, allowing you to review cabinet configurations, finishes, lighting, and countertop slabs.",
    },
    {
      step: "03",
      title: "Precision Factory Fabrication",
      description:
        "Cabinetry is crafted in our Toronto workshop using computer-controlled CNC machinery, solid hardwood, and hand-finished multi-coat lacquering.",
    },
    {
      step: "04",
      title: "Turnkey Installation & White-Glove Handover",
      description:
        "Our full-time master installers handle installation, electrical, plumbing, countertops, and final detailing with complete post-project warranty.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b] animate-page-enter">
      {/* Unified Navbar */}
      <Navbar activePage="services" />

      {/* Architectural Hero Header Banner for Services (Urbantrop Style - Unified Continuous Page) */}
      <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block mb-3">
                01 / ATELIER OFFERINGS & CAPABILITIES
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
                OUR ARCHITECTURAL <span className="text-[#c5a059]">SERVICES</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#78756e] max-w-sm">
              [ COMPLETE RESIDENTIAL RENOVATIONS & BESPOKE JOINERY ]
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#5a5750] max-w-3xl leading-relaxed">
            From complete residential gut renovations and bespoke cabinet joinery to quartzite slab waterfalls, discover our full suite of master services across the Greater Toronto Area.
          </p>
        </div>
      </section>


      {/* Services Architectural Showcase Grid (Unified Continuous Background) */}
      <main className="pt-8 pb-20 lg:pt-10 lg:pb-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Introduction */}
          <div className="max-w-3xl scroll-reveal reveal-init">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
              ARCH KITCHENS — CAPABILITIES & SCOPE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-arch uppercase text-[#1e1d1b] leading-tight">
              WHERE DESIGNS BECOME <span className="text-[#c5a059] italic">LANDMARKS.</span>
            </h2>
          </div>

          {/* 3-Column Pill-Shaped Architectural Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <section
                key={svc.id}
                id={svc.id}
                className="arch-card p-8 sm:p-10 flex flex-col justify-between scroll-reveal reveal-card"
              >
                <div className="space-y-6">
                  {/* Card Number Header */}
                  <div className="flex items-center justify-between border-b border-[#ede8df] pb-4">
                    <span className="text-xs font-mono font-semibold text-[#c5a059]">
                      {svc.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#6b6863] uppercase">
                      {svc.category}
                    </span>
                  </div>

                  {/* Clean Black Heading & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-arch uppercase font-bold text-[#1e1d1b] leading-tight mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b6863] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Architectural Blueprint Specifications */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1e1d1b]">
                      SCOPE & HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2">
                      {svc.features.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-[#4a4742]">
                          <span className="text-[#c5a059] font-mono text-[11px] mt-0.5">•</span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-8 border-t border-[#ede8df]/80 mt-6 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] hover:text-[#b38e45] inline-flex items-center space-x-1.5 transition-colors"
                  >
                    <span>View Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-mono text-[#6b6863] hover:text-[#1e1d1b] transition-colors"
                  >
                    Request Quote →
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Architectural Consultation Statement (Unified Seamless Single Page) */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Large Architectural "LET'S DESIGN." Statement */}
          <div className="py-8 text-center scroll-reveal reveal-scale-init">
            <h3 className="text-5xl sm:text-7xl lg:text-9xl font-arch font-bold tracking-widest outline-heading uppercase select-none">
              LET'S DESIGN.
            </h3>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-9 py-4 bg-[#8a3324] hover:bg-[#72281a] text-white font-medium text-xs uppercase tracking-widest rounded-full shadow-md transition-all hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Schedule A Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
