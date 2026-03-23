import type { CertificationItem } from "./resume-content";
import { ResumeSection } from "./resume-section";

type ResumeCertificationsProps = {
  items: CertificationItem[];
};

export function ResumeCertifications({ items }: ResumeCertificationsProps) {
  if (items.length === 0) return null;

  return (
    <ResumeSection title="Certifications">
      <ul className="mt-8 flex flex-col gap-8">
        {items.map((cert) => (
          <li key={`${cert.name}-${cert.year}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-base font-medium">{cert.name}</h3>
              <p className="font-mono text-xs text-muted-foreground sm:text-right">
                {cert.year}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
