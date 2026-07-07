"use client";

import { useLanguage } from "@/lib/i18n";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          kicker={t.sections.projectsKicker}
          title={t.sections.projectsTitle}
          lede={t.sections.projectsLede}
        />

        <div className="mt-14 flex flex-col gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
