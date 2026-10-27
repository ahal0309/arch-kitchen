import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { ARCH_PROJECTS, ProjectItem } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return ARCH_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = ARCH_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
