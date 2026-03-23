import type { LanguageItem } from "./resume-content";
import { ResumeSection } from "./resume-section";

type ResumeLanguagesProps = {
  items: LanguageItem[];
};

export function ResumeLanguages({ items }: ResumeLanguagesProps) {
  return (
    <ResumeSection title="Languages">
      <ul className="mt-8 flex flex-col gap-6">
        {items.map((lang) => (
          <li key={lang.name}>
            <p className="font-medium">{lang.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{lang.level}</p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
