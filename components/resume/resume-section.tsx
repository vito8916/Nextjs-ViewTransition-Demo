import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mt-16 border-t border-border pt-14">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
