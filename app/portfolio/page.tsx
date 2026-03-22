import { SharedTransition } from "@/components/transitions";
import { VicProfilePhoto } from "@/components/vic-profile-photo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Victor Alvarado — Senior Software Engineer",
  description:
    "Senior software engineer focused on reliable systems, clear interfaces, and thoughtful product engineering.",
};

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Product company",
    period: "2022 — Present",
    summary:
      "Lead feature delivery across web and APIs, mentor engineers, and improve reliability, observability, and release cadence.",
  },
  {
    role: "Software Engineer",
    company: "Growth-stage startup",
    period: "2018 — 2022",
    summary:
      "Shipped customer-facing experiences end-to-end: design systems, performance work, and pragmatic architecture.",
  },
];

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "System design",
  "APIs & integrations",
  "Testing & CI",
  "Cloud & infra basics",
];

const projects = [
  {
    title: "Platform modernization",
    description:
      "Incremental migration to a modular architecture with zero-downtime releases.",
  },
  {
    title: "Design system & docs",
    description:
      "Reusable components, accessibility checks, and living documentation for product teams.",
  },
  {
    title: "Observability uplift",
    description:
      "Tracing, structured logging, and SLOs that made incidents shorter and rarer.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        <header className="mb-14 flex items-center justify-between gap-4 border-b border-border pb-6">
          <Link
            href="/"
            transitionTypes={["navigation-back"]}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <a
            href="mailto:hello@example.com"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            hello@example.com
          </a>
        </header>

        <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <SharedTransition name="vic-photo">
            <VicProfilePhoto />
          </SharedTransition>
          <div className="flex min-w-0 flex-col gap-3">
            <SharedTransition name="vic-name">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Victor Alvarado
              </p>
            </SharedTransition>
            <SharedTransition name="vic-title">
              <p className="text-lg text-muted-foreground">
                Senior Software Engineer
              </p>
            </SharedTransition>
            <SharedTransition name="vic-summary">
              <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                Full-stack engineer with over 9 years of experience developing
                web and mobile applications for multinational companies.
                Experienced in building user-friendly and resilient platforms
                using Next.js, React, Astro, Node.js, and relational databases
                such as PostgreSQL and MySQL. Successfully created and
                maintained SaaS products with back-office systems, AI
                integrations, and automation scripts, impacting more than 6,000
                real users. Improved team efficiency by up to 40% through
                AI-driven workflows, reusable templates, and technical
                leadership across the full product lifecycle.
              </p>
            </SharedTransition>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
              <a
                className="text-foreground underline-offset-4 hover:underline"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-foreground underline-offset-4 hover:underline"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground">Remote-friendly</span>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-14">
          <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <ul className="mt-8 flex flex-col gap-10">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-8"
              >
                <div>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.company}
                  </p>
                  <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground sm:mt-0 sm:text-right">
                  {job.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-14">
          <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Focus
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-14">
          <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Selected work
          </h2>
          <ul className="mt-8 flex flex-col gap-8">
            {projects.map((project) => (
              <li key={project.title} className="group">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-base font-medium">{project.title}</h3>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    —
                  </span>
                </div>
                <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-20 border-t border-border pt-10 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Victor Alvarado</p>
        </footer>
      </div>
    </div>
  );
}
