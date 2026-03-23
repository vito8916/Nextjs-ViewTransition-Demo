import { evaluate } from "@mdx-js/mdx";
import matter from "gray-matter";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { ComponentType } from "react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { getProjectMdxComponents } from "@/components/mdx/project-mdx-components";

const PROJECTS_DIR = join(process.cwd(), "content/projects");

export type ProjectIcon = "layout" | "sparkles" | "code" | "users";

export type ProjectFrontmatter = {
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  accent: string;
  icon?: ProjectIcon;
  order?: number;
  /** Shown in the metadata bar (e.g. "Web & Mobile"). */
  platforms?: string;
  /** Shown in the metadata bar (e.g. "Figma screens, API"). */
  deliverables?: string;
  /** External case-study or live product link. */
  website?: string;
  /** Up to four images for the showcase grid (first = tall left, 2–3 = top-right pair, 4 = bottom wide). */
  gallery?: string[];
  /** Override CTA email for this project only. */
  contactEmail?: string;
  /** Override CTA phone for this project only. */
  contactPhone?: string;
};

export type ProjectListItem = ProjectFrontmatter & { slug: string };

function isProjectFrontmatter(data: unknown): data is ProjectFrontmatter {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.title === "string" &&
    typeof d.subtitle === "string" &&
    typeof d.excerpt === "string" &&
    typeof d.category === "string" &&
    typeof d.date === "string" &&
    typeof d.image === "string" &&
    typeof d.accent === "string"
  );
}

export async function getProjectSlugs(): Promise<string[]> {
  const names = await readdir(PROJECTS_DIR);
  return names
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllProjects(): Promise<ProjectListItem[]> {
  const slugs = await getProjectSlugs();
  const items: ProjectListItem[] = [];

  for (const slug of slugs) {
    const raw = await readFile(join(PROJECTS_DIR, `${slug}.mdx`), "utf8");
    const { data } = matter(raw);
    if (!isProjectFrontmatter(data)) continue;
    items.push({ slug, ...data });
  }

  return items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getProjectBySlug(
  slug: string
): Promise<{
  meta: ProjectListItem;
  Content: ComponentType<Record<string, unknown>> | null;
} | null> {
  const raw = await readFile(join(PROJECTS_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  if (!isProjectFrontmatter(data)) return null;

  const meta: ProjectListItem = { slug, ...data };
  const path = join(PROJECTS_DIR, `${slug}.mdx`);
  const baseUrl = pathToFileURL(path).href;

  const mod = await evaluate(content, {
    ...runtime,
    baseUrl,
    development: process.env.NODE_ENV === "development",
    remarkPlugins: [remarkGfm],
    useMDXComponents: getProjectMdxComponents,
  });

  return {
    meta,
    Content: mod.default ?? null,
  };
}
