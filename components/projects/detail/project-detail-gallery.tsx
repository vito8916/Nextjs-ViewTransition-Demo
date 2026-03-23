import Image from "next/image";

type ProjectDetailGalleryProps = {
  images: string[];
  projectTitle: string;
};

function GalleryImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-border bg-muted/30 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}

export function ProjectDetailGallery({
  images,
  projectTitle,
}: ProjectDetailGalleryProps) {
  const list = images.filter(Boolean);
  if (list.length === 0) return null;

  if (list.length === 1) {
    return (
      <section aria-label="Project gallery">
        <GalleryImage
          src={list[0]}
          alt={`${projectTitle} showcase`}
          className="aspect-[16/10] min-h-[220px] w-full"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </section>
    );
  }

  if (list.length === 2) {
    return (
      <section aria-label="Project gallery">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          <GalleryImage
            src={list[0]}
            alt={`${projectTitle} — 1`}
            className="aspect-[4/5] min-h-[240px] w-full sm:min-h-[320px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <GalleryImage
            src={list[1]}
            alt={`${projectTitle} — 2`}
            className="aspect-[4/5] min-h-[240px] w-full sm:min-h-[320px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    );
  }

  if (list.length === 3) {
    const [x, y, z] = list;
    return (
      <section aria-label="Project gallery">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <GalleryImage
            src={x}
            alt={`${projectTitle} — primary`}
            className="min-h-[300px] w-full md:min-h-[460px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="flex flex-col gap-4 md:gap-5">
            <GalleryImage
              src={y}
              alt={`${projectTitle} — detail`}
              className="min-h-[200px] w-full flex-1 md:min-h-[220px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <GalleryImage
              src={z}
              alt={`${projectTitle} — detail`}
              className="min-h-[200px] w-full flex-1 md:min-h-[220px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    );
  }

  const [a, b, c, d] = list.slice(0, 4);

  return (
    <section aria-label="Project gallery">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
        {a ? (
          <GalleryImage
            src={a}
            alt={`${projectTitle} — primary`}
            className="min-h-[280px] w-full md:row-span-2 md:min-h-[420px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
        {b && c ? (
          <div className="grid grid-cols-2 gap-4 md:col-start-2 md:row-start-1 md:gap-5">
            <GalleryImage
              src={b}
              alt={`${projectTitle} — detail`}
              className="aspect-square min-h-[140px] w-full md:aspect-auto md:min-h-[180px]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <GalleryImage
              src={c}
              alt={`${projectTitle} — detail`}
              className="aspect-square min-h-[140px] w-full md:aspect-auto md:min-h-[180px]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ) : null}
        {d ? (
          <GalleryImage
            src={d}
            alt={`${projectTitle} — wide`}
            className="min-h-[200px] w-full md:col-start-2 md:row-start-2 md:min-h-[220px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
      </div>
    </section>
  );
}
