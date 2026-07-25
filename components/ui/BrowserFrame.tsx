import type { ReactNode } from "react";

type BrowserFrameProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared "browser chrome" wrapper used by every product mockup (Hero,
 * Demo). Extracted so the header markup (dots + title bar) exists in
 * exactly one place instead of being duplicated per section.
 */
export function BrowserFrame({ title, children, className = "" }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-card ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border bg-background-alt px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-small font-medium text-ink-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}
