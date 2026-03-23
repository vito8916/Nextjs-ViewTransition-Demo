
export function Footer() {
  return (
    <footer className="w-full mx-auto flex justify-between items-center mt-20 max-w-4xl px-4 pb-16 pt-6 sm:px-6 border-t border-border">
      <p>© {new Date().getFullYear()} Victor Alvarado</p>
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <a target="_blank" href="https://github.com/victoralvarado">
          GitHub
        </a>
        <a target="_blank" href="https://linkedin.com/in/victoralvarado">
          LinkedIn
        </a>
        <a target="_blank" href="https://twitter.com/victoralvarado">
          Twitter
        </a>
      </div>
    </footer>
  );
}
