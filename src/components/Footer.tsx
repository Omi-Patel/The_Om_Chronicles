export const Footer = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="font-mono text-2xl font-bold tracking-tight">
          om<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Om Patel. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Also building{" "}
          <a
            href="https://www.basecase.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            base<span className="text-primary">Case</span>
          </a>
        </p>
      </div>
    </footer>
  );
};
