import { cn } from "@/lib/utils";

const work = [
  {
    title: "Enterprise products",
    role: "Senior Software Engineer",
    period: "Recent years",
    description:
      "Building maintainable product experiences for large-scale teams and internal platforms.",
  },
  {
    title: "Banking and fintech",
    role: "Frontend and UX systems",
    period: "Product work",
    description:
      "Creating interfaces that balance reliability, clarity, and implementation quality.",
  },
  {
    title: "CRM and operations",
    role: "Full-stack delivery",
    period: "Cross-functional",
    description:
      "Shipping tools that support business workflows, reporting, and day-to-day operations.",
  },
  {
    title: "Design systems",
    role: "Consistency and scale",
    period: "Ongoing",
    description:
      "Improving reuse, visual consistency, and developer experience across growing products.",
  },
];

export function ResumeCard({ className }: { className?: string }) {
  return (
    <section className={cn("minimal-card p-6 sm:p-7", className)}>
      <p className="text-sm font-medium text-muted-foreground">Selected work</p>
      <div className="mt-6 space-y-5">
        {work.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "space-y-2 pb-5",
              index !== work.length - 1 && "border-b border-border"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
