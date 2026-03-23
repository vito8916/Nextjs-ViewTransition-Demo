import type { ExperienceItem } from "./resume-content";
import { ResumeSection } from "./resume-section";

type ResumeExperienceProps = {
  items: ExperienceItem[];
};

export function ResumeExperience({ items }: ResumeExperienceProps) {
  return (
    <ResumeSection title="Experience">
      <ul className="mt-8 flex flex-col gap-10">
        {items.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-8"
          >
            <div>
              <p className="font-medium">{job.role}</p>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                {job.summary}
              </p>
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground sm:mt-0 sm:text-right">
              {job.period}
            </p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
