import Image from "next/image";
import { cn } from "@/lib/utils";
import { SharedTransition } from "@/components/transitions";

export function HeroImage({ className }: { className?: string }) {
  return (
    <SharedTransition name="vic-photo">
      <div
        className={cn(
          "minimal-card group overflow-hidden p-0",
          className
        )}
      >
        <Image
          src="/images/vic-photo.jpg"
          alt="Victor Alvarado"
          width={400}
          height={560}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
          className="h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </SharedTransition>
  );
}