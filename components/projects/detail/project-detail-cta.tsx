import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { VicProfilePhoto } from "@/components/vic-profile-photo";
import { portfolioContact } from "@/lib/contact";
import type { ProjectListItem } from "@/lib/projects";

type ProjectDetailCtaProps = {
  meta: ProjectListItem;
};

export function ProjectDetailCta({ meta }: ProjectDetailCtaProps) {
  const email = meta.contactEmail ?? portfolioContact.email;
  const phone = meta.contactPhone ?? portfolioContact.phone;

  return (
    <section className="flex flex-col gap-8 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 px-6 py-8 text-zinc-50 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-10">
      <div className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="size-16 shrink-0 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 sm:size-[4.5rem]">
          <VicProfilePhoto className="h-full w-full shrink-0 rounded-none ring-0" />
        </div>
        <div className="min-w-0 space-y-4">
          <p className="max-w-md text-lg font-medium leading-snug tracking-tight text-zinc-50">
            Let&apos;s get in touch today and get started with your project!
          </p>
          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 transition-colors hover:text-zinc-200"
            >
              <Mail className="size-4 shrink-0 text-zinc-500" strokeWidth={2} />
              {email}
            </a>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2.5 transition-colors hover:text-zinc-200"
            >
              <Phone className="size-4 shrink-0 text-zinc-500" strokeWidth={2} />
              {phone}
            </a>
          </div>
        </div>
      </div>
      <Link
        href={`mailto:${email}`}
        className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-zinc-950 shadow-sm transition-[transform,box-shadow] hover:shadow-md active:scale-[0.98] sm:size-16"
        aria-label="Email to start a project"
      >
        <ArrowUpRight className="size-6" strokeWidth={2.2} />
      </Link>
    </section>
  );
}
