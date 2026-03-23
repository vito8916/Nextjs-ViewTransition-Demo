import { cn } from "@/lib/utils";

/**
 * Identical DOM + classes on / and /portfolio so View Transitions can morph
 * the photo (same snapshot geometry, no Next/Image wrapper differences).
 */
export function VicProfilePhoto({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/pp.webp"
        alt="Jonathan Doe profile picture"
        width={224}
        height={224}
        className="h-full w-full object-cover filter grayscale"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
