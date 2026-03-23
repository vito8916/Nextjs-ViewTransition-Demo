import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/project-banking.jpg",
    alt: "Banking app dashboard",
    label: "Fintech platform",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/project-code.jpg",
    alt: "Developer-focused product interface",
    label: "Editorial code tools",
    className: "row-span-1",
  },
  {
    src: "/images/project-crm.jpg",
    alt: "CRM system with analytics",
    label: "Sales operations",
    className: "row-span-1",
  },
  {
    src: "/images/project-hr.jpg",
    alt: "Human resources workflow system",
    label: "People systems",
    className: "col-span-2 row-span-1",
  },
];

export function PhotoGrid() {
  return (
    <div className="w-full">
      <div className="grid auto-rows-[8rem] grid-cols-2 gap-3 sm:auto-rows-[9rem]">
        {images.map((image) => (
          <figure
            key={image.src}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-muted",
              image.className
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[0.68rem] text-muted-foreground">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
