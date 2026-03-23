import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function getProjectMdxComponents(): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={href}
            className="font-medium text-foreground underline underline-offset-4"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className="font-medium text-foreground underline underline-offset-4"
          rel="noopener noreferrer"
          target="_blank"
          {...props}
        >
          {children}
        </a>
      );
    },
    code: ({ children, className, ...props }) => (
      <code
        className={cn(
          "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </code>
    ),
    h1: ({ children, ...props }) => (
      <h1 className="mt-10 text-2xl font-semibold tracking-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 text-xl font-bold tracking-tight text-foreground first:mt-0"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="mt-6 text-lg font-medium text-foreground" {...props}>
        {children}
      </h3>
    ),
    li: ({ children, ...props }) => (
      <li className="text-sm leading-relaxed text-muted-foreground" {...props}>
        {children}
      </li>
    ),
    ol: ({ children, ...props }) => (
      <ol className="mt-3 list-decimal space-y-2 pl-5" {...props}>
        {children}
      </ol>
    ),
    p: ({ children, ...props }) => (
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground" {...props}>
        {children}
      </p>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="mt-4 overflow-x-auto rounded-2xl border border-border bg-muted/50 p-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    ul: ({ children, ...props }) => (
      <ul className="mt-3 list-disc space-y-2 pl-5" {...props}>
        {children}
      </ul>
    ),
  };
}
