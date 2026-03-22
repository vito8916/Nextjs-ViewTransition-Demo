/**
 * Identical DOM + classes on / and /portfolio so View Transitions can morph
 * the photo (same snapshot geometry, no Next/Image wrapper differences).
 */
export function VicProfilePhoto() {
  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/vic-photo.jpg"
        alt="Victor Alvarado"
        width={224}
        height={224}
        className="h-full w-full object-cover"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
