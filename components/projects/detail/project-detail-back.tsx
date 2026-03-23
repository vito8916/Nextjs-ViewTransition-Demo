import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProjectDetailBack() {
  return (
    <Link
      href="/projects"
      transitionTypes={["navigation-back"]}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="size-4" strokeWidth={2} />
      All projects
    </Link>
  );
}
