import { notFound } from "next/navigation";
import { ProjectDetailBack } from "@/components/projects/detail/project-detail-back";
import { ProjectDetailCta } from "@/components/projects/detail/project-detail-cta";
import { ProjectDetailGallery } from "@/components/projects/detail/project-detail-gallery";
import { ProjectDetailHero } from "@/components/projects/detail/project-detail-hero";
import { ProjectDetailMetaBar } from "@/components/projects/detail/project-detail-meta-bar";
import { ProjectDetailMdxShell } from "@/components/projects/detail/project-detail-mdx-shell";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import type { Metadata } from "next";
import { Cta } from "@/components/home/cta";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  if (!result) return {};
  return {
    title: `${result.meta.title} | Projects`,
    description: result.meta.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  if (!result?.Content) notFound();

  const { meta, Content } = result;
  const gallery = meta.gallery ?? [];

  return (
    <div className="page-shell min-h-screen bg-background">
      <article className="mx-auto w-full max-w-5xl px-4 pb-20 pt-6 sm:px-6 sm:pt-8">
        <ProjectDetailBack />

        <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-10">
          <ProjectDetailHero meta={meta} />
          <ProjectDetailMetaBar meta={meta} />
          <ProjectDetailMdxShell>
            <Content />
          </ProjectDetailMdxShell>
          <ProjectDetailGallery
            images={gallery}
            projectTitle={meta.title}
          />
          <Cta className="mt-8" />
        </div>

        <footer className="mx-auto mt-16 max-w-2xl border-t border-border pt-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Victor Alvarado</p>
        </footer>
      </article>
    </div>
  );
}
