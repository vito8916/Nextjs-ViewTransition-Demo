import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectListItem } from "@/lib/projects";
import { SharedTransition } from "@/components/transitions";

type ProjectImagePanelProps = {
  project: ProjectListItem;
  className?: string;
};

export function ProjectImagePanel({ project, className }: ProjectImagePanelProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "relative flex min-h-[240px] overflow-hidden rounded-3xl border border-border/60 shadow-sm transition-[transform,box-shadow] hover:shadow-md sm:min-h-[320px]",
        className
      )}
      style={{ backgroundColor: project.accent }}
    >
      <div className="relative flex flex-1 items-center justify-center p-6 sm:p-10">
        <SharedTransition
          name={`project-image-${project.slug}`}
        >
        <div className="relative aspect-4/5 w-full max-w-[220px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 sm:max-w-[260px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 70vw, 320px"
          />
        </div>
        </SharedTransition>
      </div>
    </Link>
  );
}
