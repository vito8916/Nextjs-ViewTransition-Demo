import { SharedTransition } from "@/components/transitions";
import { VicProfilePhoto } from "@/components/vic-profile-photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-5 py-14 sm:px-8">
        <section className="rounded-2xl bg-white/70 p-7 ring-1 ring-inset ring-zinc-200/70 shadow-sm backdrop-blur dark:bg-zinc-900/30 dark:ring-zinc-800/70">
          <header className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight">
              Hello World{" "}
              <span className="text-zinc-500 dark:text-zinc-400">👋</span>
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Welcome to <Badge variant="outline">Next.js 16.2.0</Badge>{" "}
              <br className="sm:hidden" />
              View Transitions Demo
            </p>
          </header>

          <div className="mt-6 flex items-center gap-3">
            <button
              className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-zinc-800 transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/40 dark:bg-zinc-50 dark:text-zinc-900 dark:ring-zinc-200/70 dark:hover:bg-white"
              type="button"
            >
              View Portfolio
            </button>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              View Transitions Demo
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-8 rounded-2xl bg-white/60 p-7 ring-1 ring-inset ring-zinc-200/60 shadow-sm backdrop-blur sm:flex-row sm:items-start sm:gap-10 dark:bg-zinc-900/25 dark:ring-zinc-800/60">
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
                such as PostgreSQL and MySQL.
              </p>
            </SharedTransition>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <Link
                  href="/portfolio"
                  transitionTypes={["navigation-forward"]}
                />
              }
            >
              View my portfolio
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
