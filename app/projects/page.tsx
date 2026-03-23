import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectImagePanel } from "@/components/projects/project-image-panel";
import { ProjectTextCard } from "@/components/projects/project-text-card";
import { getAllProjects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Victor Alvarado",
  description:
    "Selected product and engineering work—case studies authored in MDX.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="page-shell min-h-screen">
      <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-4 md:pt-16 sm:px-6">
        <ProjectsHero />

        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
            >
              <ProjectImagePanel
                project={project}
                className={
                  i % 2 === 0
                    ? "order-1 md:col-start-2 md:row-start-1"
                    : "order-1 md:col-start-1 md:row-start-1"
                }
              />
              <ProjectTextCard
                project={project}
                className={
                  i % 2 === 0
                    ? "order-2 md:col-start-1 md:row-start-1"
                    : "order-2 md:col-start-2 md:row-start-1"
                }
              />
            </article>
          ))}
        </div>

        <footer className="mx-auto mt-20 max-w-2xl border-t border-border pt-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Victor Alvarado</p>
        </footer>
      </main>
    </div>
  );
}
