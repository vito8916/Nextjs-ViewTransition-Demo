import Link from "next/link";
import { Grip } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 pt-6 sm:px-6">
      <div className="mx-auto flex max-w-5xl justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <Grip className="size-3.5 text-muted-foreground" />
          Victorfolio
        </Link>
      </div>
    </header>
  );
}