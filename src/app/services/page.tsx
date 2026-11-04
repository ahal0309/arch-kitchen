"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
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

  const services = [
    {
      id: "kitchen-renovation",
      num: "01",
      icon: <Layers className="w-6 h-6 text-[#c5a059]" />,
      title: "FULL KITCHEN RENOVATION",
      description:
        "Transform your kitchen with modern designs for a complete makeover. Wall removal, layout reconfiguration, lighting integration, and turnkey project management.",
      image: "/arch_kitchen/ACM_5339.webp",
    },
    {
      id: "cabinet-installation",
      num: "02",
      icon: <LayoutGrid className="w-6 h-6 text-[#c5a059]" />,
      title: "CUSTOM CABINET INSTALLATION",
      description:
        "Tailor-made cabinets built to perfectly fit your style and storage needs. Solid maple boxes, soft-close dovetail drawers, fluted accents, and integrated spice pullouts.",
      image: "/arch_kitchen/ACM_5860.webp",
    },
    {
      id: "cabinet-refacing",
      num: "03",
      icon: <PenTool className="w-6 h-6 text-[#c5a059]" />,
      title: "CABINET REFACING",
      description:
        "Restore the functionality and appearance of your existing cabinets. Modernize door profiles, apply flawless factory lacquer, and upgrade to Blum soft-close mechanics.",
      image: "/arch_kitchen/ACM_5878.webp",
    },
    {
      id: "countertop-installation",
      num: "04",
      icon: <Gem className="w-6 h-6 text-[#c5a059]" />,
      title: "LUXURY COUNTERTOPS",
      description:
        "Taj Mahal quartzite, bookmatched Calacatta marble, and heavy-duty quartz. Precision fabricated with mitred waterfall gables and flush undermount sinks.",
      image: "/arch_kitchen/ACM_6105.webp",
    },
    {
      id: "backsplash-installation",
      num: "05",
      icon: <LayoutGrid className="w-6 h-6 text-[#c5a059]" />,
      title: "SEAMLESS BACKSPLASHES",
      description:
        "Full-height continuous stone backsplashes with integrated round outlets and no bulky box cuts. Total visual flow that highlights the organic beauty of your stone.",
      image: "/arch_kitchen/ACM_6199.webp",
    },
    {
      id: "flooring-installation",
      num: "06",
      icon: <Layers className="w-6 h-6 text-[#c5a059]" />,
      title: "HARDWOOD & STONE FLOORING",
      description:
        "Architecturally selected engineered European white oak, herringbone flooring, and oversized porcelain tiles engineered to endure decades of kitchen life.",
      image: "/arch_kitchen/ACM_5342.webp",
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

      {/* Architectural Hero Header Banner for Services (Minimal Urbantrop Heading) */}
      <section className="relative pt-8 pb-4 lg:pt-12 lg:pb-6 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-[1560px] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-arch uppercase tracking-tight text-[#1e1d1b]">
            OUR ARCHITECTURAL <span className="text-[#c5a059]">SERVICES</span>
          </h1>
        </div>
      </section>


      {/* Services Architectural Showcase Grid (Unified Continuous Background - Expanded Width matching Urbantrop Reference) */}
      <main className="pt-2 pb-12 lg:pt-4 lg:pb-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1560px] mx-auto">
          {/* 3-Column Pill-Shaped Architectural Service Cards Grid (Matching Urbantrop Aesthetic) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {services.map((svc) => (
              <section
                key={svc.id}
                id={svc.id}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-[#ede8df] flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#c5a059]/50 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Card Number Header */}
                  <div>
                    <span className="text-xs sm:text-sm font-mono font-medium tracking-widest text-[#c5a059]">
                      {svc.num}
                    </span>
                  </div>

                  {/* Clean Heading matching SERVICES color - Clickable */}
                  <Link href={`/services/${svc.id}`} className="block group/title">
                    <h3 className="text-xl sm:text-2xl font-arch uppercase font-bold text-[#c5a059] group-hover/title:text-[#b38e45] transition-colors leading-tight">
                      {svc.title}
                    </h3>
                  </Link>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm text-[#5a5750] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Card Bottom: High Quality Architecture Showcase Image matching reference */}
                <div className="mt-8 space-y-5">
                  <Link
                    href={`/services/${svc.id}`}
                    className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#fbf9f5] border border-[#ede8df]/80 shadow-sm group/img cursor-pointer"
                  >
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Card Footer Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.id}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] hover:text-[#b38e45] inline-flex items-center space-x-1.5 transition-colors"
                    >
                      <span>View Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-mono text-[#6b6863] hover:text-[#1e1d1b] transition-colors"
                    >
                      Request Quote →
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
