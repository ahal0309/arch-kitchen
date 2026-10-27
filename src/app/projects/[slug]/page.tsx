import React, { Suspense } from "react";
import { notFound } from "next/navigation";
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

async function ProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const project = ARCH_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-transparent flex items-center justify-center p-12">
          <div className="w-8 h-8 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
