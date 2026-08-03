import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TooltipProps = {
  children: ReactNode;
  content: string;
  align?: "start" | "center" | "end";
  className?: string;
};

const alignmentClasses = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

export function Tooltip({
  children,
  content,
  align = "center",
  className,
}: TooltipProps) {
  return (
    <span className={cn("group/tooltip relative inline-flex", className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-full z-20 mb-2.5 w-max max-w-48 rounded-sm border border-border bg-foreground px-2.5 py-1.5 text-center text-xs font-medium leading-4 text-background opacity-0 shadow-soft transition duration-150 group-hover/tooltip:-translate-y-0.5 group-hover/tooltip:opacity-100 group-focus-within/tooltip:-translate-y-0.5 group-focus-within/tooltip:opacity-100",
          alignmentClasses[align],
        )}
      >
        {content}
      </span>
    </span>
  );
}
