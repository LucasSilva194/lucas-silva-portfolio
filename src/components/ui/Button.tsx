import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_18px_40px_-22px_var(--primary)] hover:-translate-y-0.5 hover:brightness-105",
        secondary:
          "border border-border bg-card text-card-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
        ghost:
          "text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type SharedButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

type ButtonLinkProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { className, variant, size, children, ...rest } = props;

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorProps } = rest;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal && !external) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size }), className)}
          {...anchorProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
