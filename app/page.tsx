import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-5 py-14 sm:px-8">
        {/* Notion-like surface */}
        <section className="rounded-2xl bg-white/70 p-7 ring-1 ring-inset ring-zinc-200/70 shadow-sm backdrop-blur dark:bg-zinc-900/30 dark:ring-zinc-800/70">
          <header className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight">
              Hello World <span className="text-zinc-500 dark:text-zinc-400">👋</span>
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Welcome to{" "}
              <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                Next.js 16.2.0
              </span>
              .<br className="sm:hidden" />
              Experience fast, modern UI development without the noise.
            </p>
          </header>

          <div className="mt-6 flex items-center gap-3">
            <button
              className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-zinc-800 transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/40 dark:bg-zinc-50 dark:text-zinc-900 dark:ring-zinc-200/70 dark:hover:bg-white"
              type="button"
            >
              Get Started
            </button>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Minimal, Notion-like layout
            </span>
          </div>
        </section>

        <section className="flex items-start gap-6 rounded-2xl bg-white/60 p-7 ring-1 ring-inset ring-zinc-200/60 shadow-sm backdrop-blur dark:bg-zinc-900/25 dark:ring-zinc-800/60">
          <div className="relative h-44 w-44 overflow-hidden rounded-xl ring-1 ring-zinc-200/80 dark:ring-zinc-800/80">
            <Image
              className="h-full w-full object-cover"
              src="/images/vic-photo.jpg"
              alt="Victor's photo"
              width={500}
              height={500}
              priority
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-zinc-800 ring-1 ring-inset ring-zinc-200/70 backdrop-blur dark:bg-zinc-950/50 dark:text-zinc-100 dark:ring-zinc-700/70">
              Victor
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">About</h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              A quiet, readable landing page with subtle contrast, plenty of whitespace, and restrained UI
              accents.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Tip: keep interactions simple and typography consistent.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
