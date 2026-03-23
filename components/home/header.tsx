import Link from "next/link";
import { Grip } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 pt-6 sm:px-6">
      <nav
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-medium text-foreground"
        >
          <Grip className="size-3.5 text-muted-foreground" />
          Victorfolio
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}