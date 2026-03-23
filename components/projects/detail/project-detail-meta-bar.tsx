import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import type { ProjectListItem } from "@/lib/projects";

type ProjectDetailMetaBarProps = {
  meta: ProjectListItem;
};

function MetaCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="font-mono text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="text-sm font-medium text-foreground">{children}</div>
    </div>
  );
}

export function ProjectDetailMetaBar({ meta }: ProjectDetailMetaBarProps) {
  const platforms = meta.platforms ?? "—";
  const deliverables = meta.deliverables ?? "—";

  return (
    <section className="rounded-[2rem] border border-border bg-muted/60 px-5 py-6 sm:px-8 sm:py-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        <MetaCell label="Category">{meta.category}</MetaCell>
        <MetaCell label="Platforms">{platforms}</MetaCell>
        <MetaCell label="Deliverables">{deliverables}</MetaCell>
        <MetaCell label="Website">
          {meta.website ? (
            <a
              href={meta.website}
              className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              View website
              <ExternalLink className="size-3.5 shrink-0 opacity-70" />
            </a>
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </MetaCell>
      </div>
    </section>
  );
}
