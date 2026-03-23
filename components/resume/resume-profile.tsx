import { SharedTransition } from "@/components/transitions";
import { VicProfilePhoto } from "@/components/vic-profile-photo";

type ProfileLink = { label: string; href: string };

type ResumeProfileProps = {
  name: string;
  title: string;
  summary: string;
  links: readonly ProfileLink[];
  note: string;
};

export function ResumeProfile({
  name,
  title,
  summary,
  links,
  note,
}: ResumeProfileProps) {
  return (
    <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
      <SharedTransition name="vic-photo">
        <VicProfilePhoto />
      </SharedTransition>
      <div className="flex min-w-0 flex-col gap-3">
        <SharedTransition name="vic-name">
          <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {name}
          </p>
        </SharedTransition>
        <SharedTransition name="vic-title">
          <p className="text-lg text-muted-foreground">{title}</p>
        </SharedTransition>
        <SharedTransition name="vic-summary">
          <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
            {summary}
          </p>
        </SharedTransition>
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-foreground underline-offset-4 hover:underline"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
          <span className="text-muted-foreground">{note}</span>
        </div>
      </div>
    </section>
  );
}
