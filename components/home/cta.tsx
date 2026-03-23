import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Cta({ className }: { className?: string }) {
  return (
    <section className={cn("h-full", className)}>
      <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-zinc-900 p-6 text-zinc-50 sm:p-8">
        <div>
          <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-[0.72rem] font-medium text-foreground">
            Let&apos;s work together
          </Badge>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-balance text-zinc-50 sm:text-4xl">
            Want to work with me? Let&apos;s get in touch.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
            I partner with teams building ambitious digital products, helping
            shape the experience from technical foundation to the final layer of
            polish.
          </p>
          <div className="mt-8">
            <Button
              nativeButton={false}
              variant="secondary"
              size="lg"
              className="h-11 rounded-full bg-zinc-50 px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
              render={
                <Link href="mailto:example@gmail.com">
                  <Mail className="size-4" strokeWidth={2.2} />
                  Send me an email
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
