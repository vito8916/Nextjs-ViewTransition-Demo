import { ViewTransition } from "react";

/**
 * Shared element transition wrapper.
 *
 * Elements with the same `name` on different routes automatically pair up
 * during navigation for a morph animation. `share="auto"` uses the browser's
 * built-in geometry morph + cross-fade — don't override this with custom
 * classes unless you have a specific reason.
 *
 * @see https://react.dev/reference/react/ViewTransition#animating-a-shared-element
 */
export function SharedTransition({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <ViewTransition name={name} share="auto">
      {children}
    </ViewTransition>
  );
}
