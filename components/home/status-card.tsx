import { cn } from "@/lib/utils";

export function StatusCard({ className }: { className?: string }) {
  return (
    <section className={cn("minimal-card p-6", className)}>
      <p className="text-sm font-medium text-muted-foreground">Current status</p>
      <h2 className="mt-3 text-2xl font-semibold text-foreground">
        Available for select freelance and full-time opportunities
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Open to teams that value simplicity, quality, and thoughtful product
        execution.
      </p>
    </section>
  );
}
