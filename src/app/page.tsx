"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Sliders,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Hammer,
  ShieldCheck,
  Layers,
  LayoutGrid,
  Gem,
  Award,
  Star,
  Quote,
  Send,
  Calendar,
  PenTool,
  Menu,
  X,
  Video,
  Play,
  Lightbulb,
  FileText,
  Wrench,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Heart,
  MessageCircle,
  Users,
  Briefcase,
} from "lucide-react";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectScope: "Full Kitchen Renovation (Complete Turnkey)",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        projectScope: "Full Kitchen Renovation (Complete Turnkey)",
        details: "",
      });
    }, 4000);
  };

  const whyChooseUsCards = [
    {
      icon: <Sliders className="w-5 h-5 text-[#c5a059]" />,
      title: "Perfection in Every Inch",
      description:
        "Meticulous attention to detail ensures flawless results in every joint, seam, and reveal. From concealed European hinges to flush backsplashes with zero visual clutter.",
      badge: "TOLERANCE UNDER 0.5MM",
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#c5a059]" />,
      title: "Turnkey Seamless Experience",
      description:
        "A comprehensive end-to-end renovation process: in-house 3D design, custom computerized CNC fabrication, plumbing coordination, and precision installation by Jacob and our artisan team.",
      badge: "ZERO SUBCONTRACTOR STRESS",
    },
    {
      icon: <PenTool className="w-5 h-5 text-[#c5a059]" />,
      title: "Bespoke Architectural Vision",
      description:
        "Custom soft-rounded island curves, solid white oak ribbing, and custom range hoods. No standard catalogue limits — just intentional, high-end Canadian interior living.",
      badge: "100% BESPOKE CAD DESIGNS",
    },
  ];

  const services = [
    {
      num: "01",
      category: "TURNKEY",
      href: "/services/kitchen-renovation",
      icon: <Layers className="w-5 h-5 text-[#c5a059]" />,
      title: "Full Kitchen Renovation",
      description:
        "Transform your kitchen with modern designs for a complete makeover. Wall removal, layout reconfiguration, lighting integration, and turnkey project management.",
    },
    {
      num: "02",
      category: "JOINERY",
      href: "/services/cabinet-installation",
      icon: <LayoutGrid className="w-5 h-5 text-[#c5a059]" />,
      title: "Custom Cabinet Installation",
      description:
        "Tailor-made cabinets built to perfectly fit your style and storage needs. Solid maple boxes, soft-close dovetail drawers, fluted accents, and integrated spice pullouts.",
    },
    {
      num: "03",
      category: "REFACING",
      href: "/services/cabinet-refacing",
      icon: <PenTool className="w-5 h-5 text-[#c5a059]" />,
      title: "Cabinet Refacing",
      description:
        "Restore the functionality and appearance of your existing cabinets. Modernize door profiles, apply flawless factory lacquer, and upgrade to Blum soft-close mechanics.",
    },
    {
      num: "04",
      category: "STONE",
      href: "/services/countertop-installation",
      icon: <Gem className="w-5 h-5 text-[#c5a059]" />,
      title: "Luxury Countertops",
      description:
        "Taj Mahal quartzite, bookmatched Calacatta marble, and heavy-duty quartz. Precision fabricated with mitred waterfall gables and flush undermount sinks.",
    },
    {
      num: "05",
      category: "BACKSPLASH",
      href: "/services/backsplash-installation",
      icon: <LayoutGrid className="w-5 h-5 text-[#c5a059]" />,
      title: "Seamless Backsplashes",
      description:
        "Full-height continuous stone backsplashes with integrated round outlets and no bulky box cuts. Total visual flow that highlights the organic beauty of your stone.",
    },
    {
      num: "06",
      category: "FLOORING",
      href: "/services/flooring-installation",
      icon: <Layers className="w-5 h-5 text-[#c5a059]" />,
      title: "Hardwood & Stone Flooring",
      description:
        "Architecturally selected engineered European white oak, herringbone flooring, and oversized porcelain tiles engineered to endure decades of kitchen life.",
    },
  ];

  const projects = [
    {
      title: "The Yorkville Residence",
      location: "Yorkville, Toronto",
      year: "2024 Project",
      category: "MODERN MINIMALIST",
      image: "/project1.png",
      description:
        "Calacatta marble waterfall island, brushed brass hardware details, flush pantry wall with integrated panel appliances.",
    },
    {
      title: "The Forest Hill Estate",
      location: "Forest Hill, Toronto",
      year: "2024 Project",
      category: "CLASSIC SHAKER",
      image: "/project2.png",
      description:
        "Crisp classic shaker millwork, sun-drenched apron farm sink, and perimeter quartz countertops with bevelled trim.",
    },
    {
      title: "The Oakville Modern",
      location: "Oakville Harbour",
      year: "2024 Project",
      category: "WHITE OAK",
      image: "/project3.png",
      description:
        "Natural white oak island base with curved end radius and seamless engineered quartz surfaces.",
    },
    {
      title: "Warmwood & Softlight",
      location: "Markham Custom",
      year: "2024 Project",
      category: "MODERN MINIMALIST",
      image: "/project4.png",
      description:
        "Warm architectural tones, subtle warm undertones, and cove LED lighting integrated inside open cabinetry.",
    },
    {
      title: "Artisan Range Canopy",
      location: "Vaughan Heights",
      year: "2024 Project",
      category: "CLASSIC SHAKER",
      image: "/hero_main.png",
      description:
        "Custom plaster and fluted woodwork canopy with bookmatched Taj Mahal stone backplate.",
    },
    {
      title: "The Bridle Path Suite",
      location: "Toronto, ON",
      year: "2024 Project",
      category: "WHITE OAK",
      image: "/project1.png",
      description:
        "Sleek architectural lines, hidden spice racks, paneled Sub-Zero refrigeration and custom champagne brass brassware.",
    },
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const steps = [
    {
      num: "01",
      title: "Estimate & In-Home Consultation",
      description:
        "We meet at your home to evaluate your lifestyle, take 3D laser measurements, and discuss functional pain points, appliance selections, and budget goals.",
    },
    {
      num: "02",
      title: "Architectural 3D Plan & Materials",
      description:
        "Review realistic 3D CAD renders of your kitchen. Touch and approve wood grains, lacquer sheens, quartz slabs, and handle finishes in our studio.",
    },
    {
      num: "03",
      title: "In-House Build & Installation",
      description:
        "Fabricated in our private facility, then delivered and installed by our master joiners. Seamless mitres, zero mess, and full post-install walk-through.",
    },
  ];

  const testimonials = [
    {
      quote:
        "“We're so happy with our new kitchen! A big thank you to Jacob, Sayan, Kathy, and Jackie for all their hard work. The whole process was smooth from start to finish, and the kitchen turned out even better than we had hoped!”",
      author: "Debra Gallant",
      service: "Full Kitchen Renovation",
    },
    {
      quote:
        "“We bought our new kitchen and vanities from Arch Kitchen Cabinets, honestly one of the best decisions during our renovation. Pricing was fair and the attention to detail from Adam, Jazz, Jacob, and Sayan was top tier.”",
      author: "Siyad PK",
      service: "Cabinetry & Vanity Suite",
    },
    {
      quote:
        "“I love Arch Kitchens designs! Their focus is making the customer happy by keeping everything crisp and clean with a seamless modern finish. They always bring such rich and luxurious feels to their aesthetics.”",
      author: "Kimberly-Ann Dalcourt",
      service: "Architectural Joinery",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans antialiased selection:bg-[#c5a059] selection:text-white">
      {/* Dynamic Unified Navbar */}
      <Navbar activePage="home" />

      {/* Architectural Hero Presentation (Urbantrop Reference Style) */}
      <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Top 3-Panel Architectural Photography Strip (from Reference Image 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#ede8df] group">
              <Image
                src="/project2.png"
                alt="Toronto Kitchen Architecture"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white tracking-widest uppercase">
                01 / RESIDENTIAL
              </div>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#ede8df] group">
              <Image
                src="/project1.png"
                alt="Custom Joinery & Millwork"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white tracking-widest uppercase">
                02 / JOINERY
              </div>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#ede8df] group">
              <Image
                src="/project3.png"
                alt="Architectural Kitchen Island & Stone"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white tracking-widest uppercase">
                03 / QUARTZITE
              </div>
            </div>
          </div>

          {/* Restored Original Content & Heading with Architectural Styling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
                ARCH KITCHENS — TORONTO ATELIER
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-arch uppercase text-[#1e1d1b] leading-[1.08] tracking-tight">
                Toronto's Best <br className="hidden sm:inline" />
                <span className="text-[#c5a059]">Kitchen Contractor</span>
              </h1>
              <p className="text-base sm:text-lg text-[#615e58] font-normal leading-relaxed max-w-xl">
                Transform your kitchen with Arch Kitchen Cabinets, Toronto's top kitchen remodeler. We offer full kitchen renovations, custom cabinet installations and repairs, countertop solutions, and flooring services. Experience exceptional craftsmanship and outstanding service for your dream kitchen.
              </p>

              {/* Subheading & Value checks */}
              <div className="pt-2 space-y-3">
                <h3 className="text-base sm:text-lg font-arch uppercase text-[#1e1d1b] tracking-wide">
                  We Provide The Best Kitchen For You
                </h3>
                <div className="space-y-2.5 text-sm sm:text-base text-[#4a4742]">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#c5a059] font-bold">✓</span>
                    <span>Unique Solution to fit your style and needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#c5a059] font-bold">✓</span>
                    <span>High Quality Materials and Detailed Work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#c5a059] font-bold">✓</span>
                    <span>Smooth Renovation from start to finish</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-widest rounded-full shadow-md transition-all hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Let's Start</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-[#f6f2e9] text-[#2c2b29] border border-[#ded8cb] font-medium text-xs uppercase tracking-widest rounded-full transition-all"
                >
                  <span>Explore Projects</span>
                </a>
              </div>
            </div>

            {/* Inset Curated Interior Preview Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#ede8df] bg-stone-100 aspect-[4/3] group">
                <Image
                  src="/image_from_https_www.archkitchencabinets.com_wp_content_uploads_2024_05_home.png"
                  alt="Arch Kitchens Architectural Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-stone-700 text-white text-xs font-mono">
                  1940 Ellesmere Rd, Scarborough, ON
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know More About Us - Luxury Architectural Profile & Achievements */}
      <section id="about" className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          {/* Main About Us Split Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column with Exact Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                  Atelier Heritage
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif text-[#1e1d1b] font-normal leading-tight">
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
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-sm shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-white border border-[#ded8cb] hover:border-[#c5a059] text-[#2c2b29] font-medium text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm"
                >
                  <span>View Our Work</span>
                </a>
              </div>
            </div>

            {/* Right Media Column with Inset Testimonial Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#ede8df] bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1] z-10 group">
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

          {/* 4 Attractive Achievements Metric Cards (Champagne Brass & Cream Architecture) - Sideways on mobile, Grid on desktop */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pt-4 pb-2 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0">
            {/* Stat 1: Satisfied Clients */}
            <div className="min-w-[240px] sm:min-w-0 flex-1 snap-center bg-gradient-to-br from-[#c5a059] to-[#b38e45] text-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group shrink-0 sm:shrink">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 sm:mb-6 border border-white/20">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold tracking-tight">
                500 +
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/90 font-semibold mt-1">
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
              <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#1e1d1b] tracking-tight">
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
              <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold tracking-tight">
                500 +
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-white/90 font-semibold mt-1">
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
              <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#1e1d1b] tracking-tight">
                15,000 +
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#78756e] font-semibold mt-1">
                Work Hours
              </div>
              <p className="text-[11px] text-[#8c8880] mt-1.5 sm:mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                Dedicated to precision millwork and fabrication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? - Your Kitchen Specialist Toronto (Luxury Redesign) */}
      <section
        id="why-us"
        className="py-20 lg:py-28 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                  Why Choose Us?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal leading-tight">
                  Your Kitchen Specialist <br />
                  <span className="text-[#c5a059]">Toronto</span>
                </h2>
              </div>

              {/* 3 Core Specialists Pillars */}
              <div className="space-y-6 pt-2">
                {/* Pillar 1 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5 group-hover:bg-[#c5a059] group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#1e1d1b]">
                      Perfection In Every Inch
                    </h3>
                    <p className="text-sm text-[#6b6863] leading-relaxed mt-1">
                      Meticulous attention to detail ensures flawless results in every aspect of your kitchen.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5 group-hover:bg-[#c5a059] group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#1e1d1b]">
                      Simple Idea & Design
                    </h3>
                    <p className="text-sm text-[#6b6863] leading-relaxed mt-1">
                      Elegant and functional designs that simplify your kitchen space.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5 group-hover:bg-[#c5a059] group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#1e1d1b]">
                      Comfortable Support
                    </h3>
                    <p className="text-sm text-[#6b6863] leading-relaxed mt-1">
                      Friendly, professional support to make your renovation experience smooth and stress-free.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-[#c5a059] hover:bg-[#b38e45] text-white font-medium text-xs uppercase tracking-wider rounded-sm shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Get Your Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Media Column with 3 Floating Steps */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#ede8df] bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1] z-10 group">
                <Image
                  src="/hero_main.png"
                  alt="Your Kitchen Specialist Toronto Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* 3 Step Floating Cards: Estimate, Plan, Build */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3 z-20">
                  {/* Step 1: Estimate */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-[#ede8df] shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-all group/card">
                    <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-2 group-hover/card:bg-[#c5a059] group-hover/card:text-white transition-colors">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1e1d1b]">
                      Estimate
                    </span>
                  </div>

                  {/* Step 2: Plan */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-[#ede8df] shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-all group/card">
                    <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-2 group-hover/card:bg-[#c5a059] group-hover/card:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1e1d1b]">
                      Plan
                    </span>
                  </div>

                  {/* Step 3: Build */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-[#ede8df] shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-all group/card">
                    <div className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-2 group-hover/card:bg-[#c5a059] group-hover/card:text-white transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1e1d1b]">
                      Build
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
              Atelier Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal mb-4">
              Best Kitchen Renovation Services Toronto
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863]">
              Discover our full suite of master services, from complete
              residential gut renovations to precision millwork installations
              and slab stone sourcing.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#ede8df] flex flex-col justify-between hover:border-[#c5a059]/60 transition-all hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-[#fbf9f5] border border-[#ede8df] flex items-center justify-center group-hover:bg-[#f7f1e5] transition-colors">
                      {svc.icon}
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-[#9d9990] font-medium">
                      {svc.num} / {svc.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#1e1d1b] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#6b6863] leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <Link
                  href={svc.href}
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#c5a059] hover:text-[#b38e45] group-hover:translate-x-1 transition-all"
                >
                  <span>Learn More & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Latest Transformations */}
      <section
        id="portfolio"
        className="py-20 lg:py-28 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header and Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                Portfolio Atelier
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal leading-tight">
                Our Latest Transformations
              </h2>
              <p className="text-sm sm:text-base text-[#6b6863] mt-2 max-w-xl">
                Explore our curated residential kitchens across the Greater
                Toronto Area. Every space reflects unique architectural
                individuality and artisanal execution.
              </p>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {["ALL", "MODERN MINIMALIST", "CLASSIC SHAKER", "WHITE OAK"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all ${
                      activeCategory === cat
                        ? "bg-[#c5a059] text-white shadow-md"
                        : "bg-white/80 text-[#6b6863] hover:text-[#1e1d1b] border border-[#ede8df]"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
            <span className="text-xs font-mono text-[#c5a059] tracking-widest uppercase hidden md:inline-block">
              [ PANORAMIC ATELIER VIEW ]
            </span>
          </div>

          {/* 3D Curved Flow Ribbon Gallery (Matching User Reference Image) */}
          <div className="relative w-full overflow-hidden py-10 my-4 -mx-6 sm:-mx-8 lg:-mx-16 px-4">
            {/* Subtle Arc Elevation Overlay Line */}
            <svg
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-40 z-0 h-40"
              viewBox="0 0 1600 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M -50 160 C 400 30, 1200 30, 1650 160"
                stroke="#c5a059"
                strokeWidth="1.5"
                strokeDasharray="10 8"
              />
              <path
                d="M -50 190 C 400 60, 1200 60, 1650 190"
                stroke="#c5a059"
                strokeWidth="1"
              />
            </svg>

            {/* Seamless Infinite Curved Track - Cleanly Aligned & Level */}
            <div className="curved-carousel-track relative z-10 space-x-6 sm:space-x-8 py-8 items-center">
              {[...filteredProjects, ...filteredProjects].map((project, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative shrink-0 w-[280px] sm:w-[330px] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.14)] border border-[#ede8df] bg-[#ebe7e0] group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_48px_rgba(197,160,89,0.22)]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 260px, 360px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay & Architecture Card Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-white/20">
                          {project.location}
                        </span>
                        <span className="text-[10px] font-mono text-[#c5a059] tracking-widest">
                          {project.year}
                        </span>
                      </div>

                      <div className="space-y-1.5 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c5a059]">
                          {project.category}
                        </span>
                        <h4 className="text-lg sm:text-xl font-arch uppercase font-bold text-white tracking-tight">
                          {project.title}
                        </h4>
                        <p className="text-xs text-stone-300 line-clamp-2 font-normal leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View Full Portfolio Button */}
          <div className="mt-8 text-center relative z-20">
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#ebe7e0] border border-[#ded8cd] hover:border-[#c5a059] text-[#2c2b29] hover:text-[#c5a059] font-medium text-xs uppercase tracking-wider rounded-full transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span>View Complete Portfolio Gallery (45+ Projects)</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </div>
        </div>
      </section>

      {/* The 3-Step Architectural Journey */}
      <section
        id="process"
        className="py-20 lg:py-28 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal mb-4">
              The 3-Step Architectural Journey
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863]">
              From the first in-home consultation to the final hand-polished
              brass pull, our workflow guarantees absolute clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#ede8df] hover:border-[#c5a059]/60 transition-all hover:shadow-xl relative"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-serif font-light text-[#c5a059]/60">
                    {st.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#fbf9f5] border border-[#ede8df] flex items-center justify-center text-[#c5a059]">
                    {idx === 0 && <Calendar className="w-4 h-4" />}
                    {idx === 1 && <Compass className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-[#1e1d1b] mb-4">
                  {st.title}
                </h3>
                <p className="text-sm text-[#6b6863] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews / Verified Client Acclaim */}
      <section
        id="reviews"
        className="py-20 lg:py-28 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
              Verified Client Acclaim
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal mb-4">
              Real Stories, Stunning Transformations
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863]">
              What our clients share after their homes are transformed by the
              Arch Kitchens atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#ede8df] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-[#c5a059] space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#9d9990] uppercase tracking-wider font-medium">
                      Google Verified
                    </span>
                  </div>

                  <p className="text-sm text-[#4a4742] leading-relaxed italic mb-8">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ede8df] flex items-center justify-between">
                  <div>
                    <h5 className="font-serif font-bold text-[#1e1d1b]">
                      {t.author}
                    </h5>
                    <span className="text-xs text-[#8c8880]">{t.service}</span>
                  </div>
                  <Quote className="w-6 h-6 text-[#c5a059]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Most Question We Had - Frequently Asked Questions */}
      <section id="faq" className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column Content */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                  The Most Question We Had
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal leading-tight">
                  Frequently Asked <br />
                  <span className="text-[#c5a059]">Questions</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#6b6863] leading-relaxed">
                Find answers to common questions about our kitchen remodeling services at Arch Kitchen Cabinets. From project timelines to material choices, our FAQ section provides the information you need to start your renovation with confidence. If you have additional questions, our team is always ready to assist you.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 bg-white border border-[#c5a059] hover:bg-[#c5a059] text-[#1e1d1b] hover:text-white font-medium text-xs uppercase tracking-wider rounded-sm transition-all group"
                >
                  <span>Ask A Custom Question</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column: Unique & Modern Accordion List */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "What is the typical timeline for a full kitchen renovation?",
                  a: "The timeline for a full kitchen renovation varies depending on the scope of the project, but it generally takes 4-8 weeks from design to completion.",
                },
                {
                  q: "Can I customize my kitchen cabinets?",
                  a: "Yes, we offer custom cabinet solutions tailored to fit your specific style and storage needs, ensuring a perfect match for your kitchen.",
                },
                {
                  q: "Do you provide a warranty for your services?",
                  a: "Yes, we provide a comprehensive warranty for our kitchen remodeling services, covering both materials and workmanship.",
                },
                {
                  q: "What types of countertops do you install?",
                  a: "We install a variety of countertops, including granite, quartz, marble, and laminate, each selected for its durability and aesthetic appeal.",
                },
                {
                  q: "How do I maintain my new kitchen flooring?",
                  a: "Maintenance varies by flooring type, but generally, regular sweeping and occasional mopping with a manufacturer-recommended cleaner will keep your floors looking their best. Our team provides detailed care instructions for your specific flooring.",
                },
              ].map((faqItem, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setOpenFaq(idx)}
                    className={`rounded-xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "bg-white border-[#c5a059] shadow-md ring-1 ring-[#c5a059]/20"
                        : "bg-white border-[#ede8df] hover:border-[#c5a059]/60 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors duration-300 ${
                        isOpen ? "bg-[#c5a059] text-white" : "text-[#1e1d1b] hover:text-[#c5a059]"
                      }`}
                    >
                      <span className="font-serif font-semibold text-base sm:text-lg leading-snug">
                        {faqItem.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 transform ${
                          isOpen
                            ? "bg-white/20 text-white rotate-180"
                            : "bg-[#fbf9f5] border border-[#ede8df] text-[#c5a059] rotate-0"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>

                    {/* Smooth expanding grid transition container */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 sm:p-6 text-sm text-[#4a4742] leading-relaxed bg-[#fbf9f5] border-t border-[#ede8df]/60">
                          <p>{faqItem.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch - Have Any Question? We Always Ready For You */}
      <section id="contact" className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Get In Touch, Direct Info & Map Preview */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-bold leading-tight">
                  Have Any <span className="text-[#c5a059]">Question ?</span> We Always Ready For You
                </h2>
                <p className="text-sm sm:text-base text-[#6b6863] mt-3">
                  We are always ready to assist you.
                </p>
              </div>

              {/* Schedule A Free Consultation Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-block px-7 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-xs sm:text-sm rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
            <div className="lg:col-span-7 bg-white rounded-xl p-8 lg:p-12 border border-[#ede8df] shadow-2xl relative">
              {formSubmitted ? (
                <div className="h-full py-16 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#f7f1e5] border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1e1d1b]">
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
                      id="terms"
                      required
                      className="mt-1 w-4 h-4 rounded text-[#c5a059] focus:ring-[#c5a059] border-[#ede8df]"
                    />
                    <label htmlFor="terms" className="text-xs text-[#6b6863] leading-relaxed">
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
                      className="w-full sm:w-auto px-12 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-semibold text-sm rounded-md shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve - High-Featured Luxury Architectural Grid */}
      <section className="py-20 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] block mb-2">
              Regional Coverage & Service Atelier
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1e1d1b] font-normal tracking-tight">
              Areas We <span className="text-[#c5a059]">Serve</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6b6863] mt-3">
              Providing premier architectural millwork, bespoke kitchen design, and turnkey cabinetry craftsmanship across the Greater Toronto Area and Southern Ontario.
            </p>
          </div>

          {/* Interactive Servicing Cities Grid (14 Locations) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {[
              "Toronto",
              "Barrie",
              "Port Perry",
              "New Market",
              "Mississauga",
              "Oakville",
              "Hamilton",
              "Vaughan",
              "Bowmanville",
              "Oshawa",
              "Milton",
              "Scarborough",
              "Aurora",
              "King City",
            ].map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-4.5 border border-[#ede8df] hover:border-[#c5a059] hover:shadow-lg transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer transform hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full bg-[#fbf9f5] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#2c2b29] group-hover:text-[#c5a059] transition-colors whitespace-nowrap">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer - Exact Design Matching User Reference */}
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
                  <a
                    href="#contact"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Terms & Condition</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Costumer Services</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>FAQ's</span>
                  </a>
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
                  <a
                    href="#blog"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Latest News</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Our Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#areas"
                    className="flex items-center space-x-2 hover:text-[#e4be6c] transition-colors group"
                  >
                    <span className="text-[#a0a0a0] group-hover:text-[#e4be6c] transition-colors">→</span>
                    <span>Areas We Serve</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Schedule CTA Button */}
            <div className="lg:col-span-3 flex items-start lg:justify-end pt-2">
              <a
                href="#contact"
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
