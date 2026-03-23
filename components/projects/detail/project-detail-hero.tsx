import Image from "next/image";
import type { ProjectListItem } from "@/lib/projects";
import { ProjectIconGlyph } from "@/components/projects/project-icon";
import { SharedTransition } from "@/components/transitions";

type ProjectDetailHeroProps = {
  meta: ProjectListItem;
};

export function ProjectDetailHero({ meta }: ProjectDetailHeroProps) {
  return (
    <SharedTransition name={`project-image-${meta.slug}`}>

    <section className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 px-6 pb-8 pt-8 text-zinc-50 shadow-sm sm:px-10 sm:pb-10 sm:pt-10">
      <div className="flex items-center gap-3 text-sm font-medium text-zinc-400">
        <ProjectIconGlyph name={meta.icon} className="size-5 text-zinc-300" />
        <span>{meta.title}</span>
      </div>
      <h1 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.5rem]">
        {meta.subtitle}
      </h1>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
        {meta.excerpt}
      </p>
        <div className="relative mt-10 aspect-16/10 w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 sm:aspect-2/1 md:mt-12">
          <Image
            src={meta.image}
            alt={`${meta.title} preview`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />
        </div>
      </section>
    </SharedTransition>
  );
}
