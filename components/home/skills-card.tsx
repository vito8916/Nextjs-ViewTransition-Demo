import { cn } from "@/lib/utils";

const skills = [
  "Product development",
  "UI/UX design collaboration",
  "Frontend architecture",
  "Performance optimization",
];

export function SkillsCard({ className }: { className?: string }) {
  return (
    <section className={cn("minimal-card p-6", className)}>
      <p className="text-sm font-medium text-muted-foreground">My skills</p>
      <div className="mt-5 space-y-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={cn(
              "flex items-center justify-between gap-3 pb-3 text-sm text-foreground",
              index !== skills.length - 1 && "border-b border-border"
            )}
          >
            <span>{skill}</span>
            <span className="text-muted-foreground">●</span>
          </div>
        ))}
      </div>
    </section>
  );
}
