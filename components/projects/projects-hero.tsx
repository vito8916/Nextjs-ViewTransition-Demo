import Link from "next/link";
import { SharedTransition } from "@/components/transitions";
import { VicProfilePhoto } from "@/components/vic-profile-photo";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function ProjectsHero() {
  return (
    <header className="mx-auto flex max-w-2xl flex-col items-center gap-6 pb-12 text-center sm:pb-16">
      <SharedTransition name="vic-photo">
        <div className="size-20 overflow-hidden rounded-full border border-border shadow-sm ring-4 ring-background sm:size-24">
          <VicProfilePhoto className="h-full w-full shrink-0 rounded-none ring-0" />
        </div>
      </SharedTransition>
      <div className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Browse my latest work
        </h1>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
          Case studies and shipped product surfaces—architecture notes, UI
          systems, and outcomes. Written in MDX so each project stays easy to
          update.
        </p>
      </div>
      <Button
        nativeButton={false}
        variant="secondary"
        size="lg"
        className="h-11 rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 hover:bg-zinc-700"
        render={
          <Link href="/resume">
            <User className="size-4" strokeWidth={2.2} />
            More about me
          </Link>
        }
      />
    </header>
  );
}
