import type { ReactNode } from "react";

type ProjectDetailMdxShellProps = {
  children: ReactNode;
};

export function ProjectDetailMdxShell({ children }: ProjectDetailMdxShellProps) {
  return (
    <section className="rounded-[2rem] border border-border bg-muted/45 px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14">
      <div className="mdx-project-body max-w-3xl [&_h1:first-of-type]:mt-0 [&_h2:first-of-type]:mt-0">
        {children}
      </div>
    </section>
  );
}
