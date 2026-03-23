const focusAreas = [
  {
    title: "Full-stack development",
    description: "Modern web products with scalable frontend and backend foundations.",
  },
  {
    title: "Frontend systems",
    description: "Reusable UI patterns, consistency, and implementation quality.",
  },
  {
    title: "Product collaboration",
    description: "Working closely with teams to turn requirements into clean experiences.",
  },
  {
    title: "Performance and polish",
    description: "Fast, reliable interfaces with attention to usability and detail.",
  },
];

export function AboutCard({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="minimal-card h-full p-6 sm:p-7">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            What I focus on
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            A simple approach to building good software
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item.title} className="space-y-2 rounded-2xl bg-muted/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
