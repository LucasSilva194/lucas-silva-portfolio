import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "muted";
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        tone === "default" &&
          "border-primary/20 bg-primary/10 text-primary dark:border-primary/30",
        tone === "accent" &&
          "border-accent/20 bg-accent/15 text-accent-foreground dark:text-accent",
        tone === "muted" &&
          "border-border bg-muted text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
