"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ARCH_PROJECTS } from "@/data/projects";
import { ArrowUpRight, ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const categories = [
    "ALL",
    "RESIDENTIAL ARCHITECTURE",
    "CUSTOM CABINETRY",
    "TURNKEY RENOVATION",
    "BESPOKE JOINERY",
  ];

  const filteredProjects =
    selectedFilter === "ALL"
      ? ARCH_PROJECTS
      : ARCH_PROJECTS.filter(
          (p) =>
            p.shortCategory.toLowerCase() === selectedFilter.toLowerCase() ||
            p.category.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b] animate-page-enter">
      {/* Unified Navbar */}
      <Navbar activePage="projects" />

      {/* Main Architectural Projects Showcase Grid matching Urbantrop Reference */}
      <main className="pt-6 sm:pt-8 pb-16 lg:pt-10 lg:pb-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1560px] mx-auto">
          {/* Optional Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-6 sm:pb-8 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all whitespace-nowrap ${
                  selectedFilter === cat
                    ? "bg-[#c5a059] text-white font-semibold shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#6a665f] border border-[#ede8df] hover:border-[#c5a059]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid: Mobile uses full-bleed portrait cards with centered text overlay, Desktop uses 3-column architectural cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-8 lg:gap-y-14">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col cursor-pointer"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block focus:outline-none"
                >
                  {/* Container: on mobile it is a tall portrait card with overlay, on md+ it holds image with title underneath */}
                  <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f0eae1] border border-[#ede8df] shadow-[0_4px_24px_rgba(0,0,0,0.06)] group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Mobile: Centered Dark Gradient Overlay for perfect text contrast matching reference */}
                    <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6 space-y-2">
                      <h2 className="text-xl sm:text-2xl font-arch uppercase font-bold text-white tracking-widest leading-tight drop-shadow-md">
                        {project.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#e5d5b7] max-w-xs leading-relaxed">
                        {project.category}
                      </p>
                    </div>

                    {/* Desktop: Subtle Hover Scrim + Top Corner Arrow */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="hidden md:flex absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#1e1d1b] items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
                    </div>
                  </div>

                  {/* Desktop Only: Clean Title & Subtitle Beneath Card */}
                  <div className="hidden md:block pt-3 space-y-1">
                    <h2 className="text-base sm:text-lg lg:text-xl font-arch uppercase font-bold text-[#c5a059] group-hover:text-[#b38e45] transition-colors leading-tight tracking-wide">
                      {project.title}
                    </h2>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#9c978e]">
                      {project.category}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Minimalist Architectural Footer Section - LET'S DESIGN. matching reference */}
          <div className="mt-24 sm:mt-32 pt-16 border-t border-[#ede8df]/60 text-center">
            <h3 className="text-5xl sm:text-7xl lg:text-9xl font-arch uppercase tracking-tighter text-transparent stroke-text select-none opacity-20 hover:opacity-40 transition-opacity">
              LET&apos;S DESIGN.
            </h3>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#c5a059] hover:bg-[#b38e45] text-white text-xs font-mono uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Initiate Your Atelier Commission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
