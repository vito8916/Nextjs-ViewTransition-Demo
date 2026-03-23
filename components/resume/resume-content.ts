export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "Jonathan Doe",
  title: "Senior Software Engineer",
  summary:
    "Full-stack engineer with over 9 years of experience developing web and mobile applications for multinational companies. Experienced in building user-friendly and resilient platforms using Next.js, React, Astro, Node.js, and relational databases such as PostgreSQL and MySQL. Successfully created and maintained SaaS products with back-office systems, AI integrations, and automation scripts, impacting more than 6,000 real users. Improved team efficiency by up to 40% through AI-driven workflows, reusable templates, and technical leadership across the full product lifecycle.",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ] as const,
  note: "Remote-friendly",
};

export const experience: ExperienceItem[] = [
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

export const education: EducationItem[] = [
  {
    degree: "B.S. Computer Science (or equivalent)",
    school: "University name",
    period: "2012 — 2016",
    detail: "Focus: software engineering, systems, and databases.",
  },
];

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "System design",
  "APIs & integrations",
  "Testing & CI",
  "Cloud & infra basics",
] as const;

export const projects: ProjectItem[] = [
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

export const languages: LanguageItem[] = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Spanish", level: "Native" },
];

export const certifications: CertificationItem[] = [
  {
    name: "Cloud or platform certification (example)",
    issuer: "Issuer",
    year: "2023",
  },
];
