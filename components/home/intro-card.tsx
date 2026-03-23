import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SharedTransition } from "@/components/transitions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book } from "lucide-react";

export function IntroCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "minimal-card justify-between py-0",
        className
      )}
    >
      <CardContent className="flex h-full flex-col justify-between px-6 py-6 sm:px-7 sm:py-7">
        <div className="flex flex-col gap-5">
          <Badge
            variant="secondary"
            className="w-fit rounded-full px-3 py-1 text-[0.72rem] font-medium text-foreground"
          >
            👋 Hello
          </Badge>
          <div className="space-y-4">
            <SharedTransition name="vic-name">
              <h1 className="text-3xl leading-tight font-semibold text-balance text-foreground sm:text-4xl">
                Hi, I&apos;m Victor Alvarado
              </h1>
            </SharedTransition>
            <SharedTransition name="vic-title">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Senior Software Engineer focused on modern web applications,
                frontend systems, and product quality.
              </p>
            </SharedTransition>
            <SharedTransition name="vic-summary">
              <div className="space-y-3 border-t border-border pt-5">
                <h2 className="text-xl font-semibold text-foreground">
                  About me
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  I build simple, maintainable interfaces with an emphasis on
                  clarity, consistency, and user experience. I enjoy working
                  across product thinking, frontend architecture, and polished
                  implementation details.
                </p>
              </div>
            </SharedTransition>
            <Button
              nativeButton={false}
              variant="secondary"
              size="lg"
              className="h-11 rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 hover:bg-zinc-700"
              render={
                <Link href="/resume">
                  <Book className="size-4" strokeWidth={2.2} />
                  View my resume
                </Link>
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
