"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const themeStorageKey = "theme";

function ThemeIcon({
  isDark,
  reduceMotion,
}: {
  isDark: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -28, scale: 0.78 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 28, scale: 0.78 }}
        transition={
          reduceMotion
            ? { duration: 0.12 }
            : { type: "spring", bounce: 0, duration: 0.28 }
        }
        className="flex"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </AnimatePresence>
  );
}

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot() {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot() {
  return "light";
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-theme-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-theme-change", onStoreChange);
  };
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const isDark = theme === "dark";

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    document.documentElement.classList.toggle(
      "dark",
      preferredTheme === "dark",
    );
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(themeStorageKey, nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="pointer-events-none sticky top-3 z-50 px-3">
      <nav className="site-nav-material container-shell pointer-events-auto flex h-[4.25rem] items-center justify-between rounded-lg border border-border/75 bg-background/80 px-3 shadow-[0_18px_60px_-35px_var(--foreground)] backdrop-blur-2xl sm:px-4">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.02em]"
          aria-label="Lucas Silva homepage"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-foreground font-mono text-xs font-bold text-background transition duration-200 group-hover:-rotate-3 group-hover:bg-primary group-hover:text-primary-foreground">
            LS
          </span>
          <span className="hidden text-foreground sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:origin-left after:bg-primary after:transition-transform",
                  active ? "text-foreground after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="inline-flex h-10 items-center gap-2 border-l border-primary pl-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary xl:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to work
          </span>
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", bounce: 0, duration: 0.22 }}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-transparent text-card-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <ThemeIcon isDark={isDark} reduceMotion={prefersReducedMotion} />
          </motion.button>
          <a
            href={profile.links.cv}
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-px"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", bounce: 0, duration: 0.22 }}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-transparent text-card-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <ThemeIcon isDark={isDark} reduceMotion={prefersReducedMotion} />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", bounce: 0, duration: 0.22 }}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-transparent text-card-foreground"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -24, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 24, scale: 0.8 }}
                transition={prefersReducedMotion ? { duration: 0.12 } : { type: "spring", bounce: 0, duration: 0.25 }}
                className="flex"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
            transition={prefersReducedMotion ? { duration: 0.14 } : { type: "spring", bounce: 0, duration: 0.3 }}
            style={{ transformOrigin: "top right" }}
            className="site-nav-material container-shell pointer-events-auto mt-2 overflow-hidden rounded-lg border border-border/75 bg-background/92 p-3 shadow-[0_24px_70px_-38px_var(--foreground)] backdrop-blur-2xl lg:hidden"
          >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  pathname === item.href && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <span className="inline-flex h-10 items-center gap-2 border-l border-primary px-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to work
            </span>
            <a
              href={profile.links.cv}
              onClick={closeMenu}
              className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
