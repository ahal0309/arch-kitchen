"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ProjectItem } from "@/data/projects";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectDetailClientProps {
  project: ProjectItem;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = project.images && project.images.length > 0 ? project.images : [project.coverImage];
  const activeImage = images[selectedImageIndex] || project.coverImage;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#2c2b29] font-sans selection:bg-[#c5a059]/20 selection:text-[#1e1d1b] animate-page-enter">
      {/* Unified Navbar */}
      <Navbar activePage="projects" />

      <main className="pt-4 sm:pt-6 pb-16 lg:pb-24 px-4 sm:px-8 lg:px-12 max-w-[1560px] mx-auto">
        {/* Back Link matching reference design */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8a3324] hover:text-[#c5a059] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO PROJECTS</span>
          </Link>
        </div>

        {/* 2-Column Architectural Layout matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Big Feature Image & Thumbnails Strip (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f0eae1] border border-[#ede8df] shadow-[0_4px_30px_rgba(0,0,0,0.06)] group">
              <Image
                src={activeImage}
                alt={`${project.title} photograph ${selectedImageIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-500"
              />

              {/* Prev / Next controls permanently visible on both sides */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous photograph"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#1e1d1b] flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 backdrop-blur-md z-20 border border-white/60 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1d1b]" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next photograph"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#1e1d1b] flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 backdrop-blur-md z-20 border border-white/60 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1d1b]" />
                  </button>
                </>
              )}

              {/* Counter Pill */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-widest">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Horizontal Thumbnails Carousel matching reference */}
            {images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-0.5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative shrink-0 w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-[#8a3324] shadow-md scale-105"
                        : "border-transparent opacity-60 hover:opacity-100 hover:border-[#c5a059]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Architectural Metadata & Description matching reference (5 cols) */}
          <div className="lg:col-span-5 space-y-8 pt-2">
            {/* Title matching Urbantrop red/burgundy styling */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-arch uppercase font-bold text-[#8a3324] tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Architectural Specs Table with subtle border separators matching reference */}
            <div className="space-y-3.5 text-xs sm:text-sm border-t border-b border-[#ede8df] py-6">
              <div className="grid grid-cols-12 gap-2 py-1">
                <span className="col-span-5 font-mono uppercase tracking-widest text-[#78756e]">
                  PROJECT TYPE
                </span>
                <span className="col-span-7 text-[#2c2b29] font-medium">
                  : &nbsp;{project.category}
                </span>
              </div>

              <div className="grid grid-cols-12 gap-2 py-1">
                <span className="col-span-5 font-mono uppercase tracking-widest text-[#78756e]">
                  STATUS
                </span>
                <span className="col-span-7 text-[#2c2b29] font-medium">
                  : &nbsp;{project.status}
                </span>
              </div>

              <div className="grid grid-cols-12 gap-2 py-1">
                <span className="col-span-5 font-mono uppercase tracking-widest text-[#78756e]">
                  LOCATION
                </span>
                <span className="col-span-7 text-[#2c2b29] font-medium">
                  : &nbsp;{project.location}
                </span>
              </div>

              <div className="grid grid-cols-12 gap-2 py-1">
                <span className="col-span-5 font-mono uppercase tracking-widest text-[#78756e]">
                  AREA
                </span>
                <span className="col-span-7 text-[#2c2b29] font-medium">
                  : &nbsp;{project.area}
                </span>
              </div>

              <div className="grid grid-cols-12 gap-2 py-1">
                <span className="col-span-5 font-mono uppercase tracking-widest text-[#78756e]">
                  YEAR
                </span>
                <span className="col-span-7 text-[#2c2b29] font-medium">
                  : &nbsp;{project.year}
                </span>
              </div>
            </div>

            {/* Architectural Narrative Description */}
            <div className="space-y-4 text-xs sm:text-sm text-[#5a5750] leading-relaxed">
              <p>{project.description}</p>
              <p>{project.details}</p>
            </div>

            {/* Action Consultation Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-[#c5a059] hover:bg-[#b38e45] text-white font-mono text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Inquire About Similar Build
              </Link>
              <Link
                href="/projects"
                className="inline-flex justify-center items-center px-6 py-3.5 bg-white hover:bg-[#fbf9f5] border border-[#ede8df] text-[#2c2b29] font-mono text-xs uppercase tracking-wider rounded-full transition-all"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
