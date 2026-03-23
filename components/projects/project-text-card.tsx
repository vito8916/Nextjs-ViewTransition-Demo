import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectListItem } from "@/lib/projects";
import { ProjectIconGlyph } from "./project-icon";

type ProjectTextCardProps = {
  project: ProjectListItem;
  className?: string;
};

export function ProjectTextCard({ project, className }: ProjectTextCardProps) {
  return (
    <Link
      transitionTypes={["navigation-forward"]}
      href={`/projects/${project.slug}`}
      className={cn(
        "group/card relative flex min-h-[280px] flex-col rounded-3xl border border-border bg-muted/35 p-6 shadow-sm transition-[box-shadow,transform] hover:shadow-md sm:min-h-[320px] sm:p-8",
        className
      )}
    >
      <span className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors group-hover/card:text-foreground">
        <ArrowUpRight className="size-4" strokeWidth={2.2} />
      </span>
      <div className="flex flex-1 flex-col gap-4 pr-10">
        <ProjectIconGlyph
          name={project.icon}
          className="size-6 text-foreground/80"
        />
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-foreground/90">
            {project.subtitle}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.excerpt}
          </p>
        </div>
        <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">
          {project.category} — {project.date}
        </p>
      </div>
    </Link>
  );
}
