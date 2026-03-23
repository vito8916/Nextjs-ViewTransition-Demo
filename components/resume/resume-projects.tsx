import type { ProjectItem } from "./resume-content";
import { ResumeSection } from "./resume-section";

type ResumeProjectsProps = {
  items: ProjectItem[];
};

export function ResumeProjects({ items }: ResumeProjectsProps) {
  return (
    <ResumeSection title="Selected work">
      <ul className="mt-8 flex flex-col gap-8">
        {items.map((project) => (
          <li key={project.title} className="group">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-base font-medium">{project.title}</h3>
              <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                —
              </span>
            </div>
            <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
