import type { LucideIcon } from "lucide-react";
import { Code2, LayoutDashboard, Sparkles, Users } from "lucide-react";
import type { ProjectIcon } from "@/lib/projects";

const map: Record<ProjectIcon, LucideIcon> = {
  layout: LayoutDashboard,
  sparkles: Sparkles,
  code: Code2,
  users: Users,
};

export function ProjectIconGlyph({
  name,
  className,
}: {
  name?: ProjectIcon;
  className?: string;
}) {
  const Icon = name ? map[name] : LayoutDashboard;
  return <Icon aria-hidden className={className} strokeWidth={2} />;
}
