import Link from "next/link";

type ResumePageHeaderProps = {
  email: string;
};

export function ResumePageHeader({ email }: ResumePageHeaderProps) {
  return (
    <header className="mb-14 flex items-center justify-between gap-4 border-b border-border pb-6">
      <Link
        href="/"
        transitionTypes={["navigation-back"]}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Home
      </Link>
      <a
        href={`mailto:${email}`}
        className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
      >
        {email}
      </a>
    </header>
  );
}
