import type { EducationItem } from "./resume-content";
import { ResumeSection } from "./resume-section";

type ResumeEducationProps = {
  items: EducationItem[];
};

export function ResumeEducation({ items }: ResumeEducationProps) {
  return (
    <ResumeSection title="Education">
      <ul className="mt-8 flex flex-col gap-10">
        {items.map((entry) => (
          <li
            key={`${entry.school}-${entry.period}`}
            className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-8"
          >
            <div>
              <p className="font-medium">{entry.degree}</p>
              <p className="text-sm text-muted-foreground">{entry.school}</p>
              {entry.detail ? (
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                  {entry.detail}
                </p>
              ) : null}
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground sm:mt-0 sm:text-right">
              {entry.period}
            </p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
