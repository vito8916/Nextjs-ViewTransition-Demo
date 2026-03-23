# next-16-2-view-transitions-demo

This is a simple example of how to integrate ViewTransitions in Next.js 16.2.

I have designed an editorial portfolio site (home, resume, and project case studies backed by MDX). It exists partly as a **hands-on exercise** in **React 19’s `<ViewTransition>`** and **Next.js 16.2** navigation integration: page changes feel directional and continuous instead of an abrupt repaint, and repeated UI (photo, name, copy) **morphs** between routes when it makes sense.

**Stack:** Next.js **16.2.0**, React **19.2.4**, Tailwind CSS **4**, TypeScript, MDX (`gray-matter` + `@mdx-js/mdx`), and shadcn/Base UI style.

---

## What View Transitions are (in one breath)

The browser’s [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) captures snapshots of the old and new “views” and runs a coordinated animation between them. In a client-navigated app, that turns route changes into something users can **follow** instead of a hard cut.

React 19 exposes this through `[<ViewTransition>](https://react.dev/reference/react/ViewTransition)`: you wrap subtrees, optionally name regions for **shared-element** behavior, and map **transition types** to CSS so old vs new pseudo-elements get the right animation.

---

## Why we use them here

1. **Continuity** — The same identity blocks (profile photo, name, title, “about” summary) appear on the home page and on `/resume`. Giving those subtrees stable `name`s lets the engine **interpolate geometry** between routes so the layout feels like one surface rearranging, not two unrelated pages.
2. **Project storytelling** — Case study images use per-slug names (e.g. `project-image-{slug}`) so list → detail navigation can carry visual context.
3. **Directional navigation** — Forward moves (deeper into the site) use a **slide in from the right**; back links use the **mirror** animation. That matches how many people mentally model stacks and history, which makes the UI easier to parse without extra chrome.

---

## How we wired it up

### 1. Turn the feature on in Next

`[next.config.ts](next.config.ts)` sets:

```ts
experimental: {
  viewTransition: true,
},
```

That opts the App Router into Next’s view-transition-aware navigations so `<Link>` can participate in the same lifecycle as React’s `<ViewTransition>`.

### 2. One root `<ViewTransition>` around changing content

In `[app/layout.tsx](app/layout.tsx)`, `{children}` is wrapped with `<ViewTransition>` imported from `**react**` (not a third-party package). The `default` prop maps **semantic types** to **CSS class names** used in `::view-transition-old` / `::view-transition-new`:

- `navigation-forward` → `slide-forward`
- `navigation-back` → `slide-back`
- everything else falls back with `default: "auto"`

Because the **root layout does not unmount** on navigation, the transition surface behaves like an **update** of persistent shell + swapped children. Mapping types through `default` keeps those classes applied reliably; see the inline commentary in `[app/globals.css](app/globals.css)` for that detail.

### 3. CSS for page-level slides

`[app/globals.css](app/globals.css)` defines the slide keyframes and pairs them with:

- `::view-transition-old(.slide-forward)` / `::view-transition-new(.slide-forward)`
- `::view-transition-old(.slide-back)` / `::view-transition-new(.slide-back)`

Shared elements using `share="auto"` still get the browser’s morph; the page slide styling targets the **root** transition groups.

### 4. Shared elements: `SharedTransition`

`[components/transitions.tsx](components/transitions.tsx)` exports `SharedTransition`, a thin wrapper around:

```tsx
<ViewTransition name={name} share="auto">
  {children}
</ViewTransition>
```

Use the **same `name`** on both routes for any subtree you want to participate in a shared transition.

### 5. Choosing direction: `transitionTypes` on `<Link>`

Next’s `<Link>` accepts `transitionTypes` so a navigation advertises whether it is “forward” or “back”. Examples in this repo:

- Forward: `[components/home/intro-card.tsx](components/home/intro-card.tsx)`, `[components/home/resume-card.tsx](components/home/resume-card.tsx)`, `[components/projects/project-text-card.tsx](components/projects/project-text-card.tsx)`
- Back: `[components/projects/detail/project-detail-back.tsx](components/projects/detail/project-detail-back.tsx)`, `[components/resume/resume-page-header.tsx](components/resume/resume-page-header.tsx)`

---

## Where to look in the codebase


| Area                       | Files                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable flag                | `[next.config.ts](next.config.ts)`                                                                                                                                                                                                                                                         |
| Root transition + type map | `[app/layout.tsx](app/layout.tsx)`                                                                                                                                                                                                                                                         |
| Slide animations           | `[app/globals.css](app/globals.css)` (see comments ~lines 152–209)                                                                                                                                                                                                                         |
| Shared wrapper             | `[components/transitions.tsx](components/transitions.tsx)`                                                                                                                                                                                                                                 |
| Home ↔ resume shared names | `[components/home/intro-card.tsx](components/home/intro-card.tsx)`, `[components/home/hero-image.tsx](components/home/hero-image.tsx)`, `[components/resume/resume-profile.tsx](components/resume/resume-profile.tsx)`                                                                     |
| Projects                   | `[components/projects/projects-hero.tsx](components/projects/projects-hero.tsx)`, `[components/projects/project-image-panel.tsx](components/projects/project-image-panel.tsx)`, `[components/projects/detail/project-detail-hero.tsx](components/projects/detail/project-detail-hero.tsx)` |


Project copy lives under `[content/projects/](content/projects/)` as MDX.

---

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate between home, resume, and projects to see **directional slides** and **shared** transitions in action.

Other scripts:

```bash
npm run build   # production build
npm run start   # run production server
npm run lint    # eslint
```

---

## Further reading

- [React `<ViewTransition>](https://react.dev/reference/react/ViewTransition)` — names, `share`, and transition types
- [Next.js `next.config.js`: `experimental.viewTransition](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)` — framework integration
- [MDN: View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) — underlying browser behavior

---

