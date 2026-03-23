import { ResumeSection } from "./resume-section";

type ResumeSkillsProps = {
  skills: readonly string[];
};

export function ResumeSkills({ skills }: ResumeSkillsProps) {
  return (
    <ResumeSection title="Focus">
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
