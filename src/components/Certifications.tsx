"use client";

import { useEffect, useState, type FocusEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { certificationGroups } from "@/data/portfolio";

const credentials = certificationGroups.flatMap((group) =>
  group.certifications.map((certification) => ({
    ...certification,
    issuer: group.issuer,
  })),
);

const issuerLogos: Record<string, { src: string; alt: string }> = {
  Anthropic: {
    src: "/images/certifications/anthropic.svg",
    alt: "Anthropic logo",
  },
  OpenAI: {
    src: "/images/certifications/openai.svg",
    alt: "OpenAI logo",
  },
  HackerRank: {
    src: "/images/certifications/hackerrank.svg",
    alt: "HackerRank logo",
  },
};

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const active = credentials[activeIndex];

  const move = (direction: number) => {
    setDirection(direction);
    setActiveIndex((current) =>
      (current + direction + credentials.length) % credentials.length,
    );
  };

  useEffect(() => {
    if (prefersReducedMotion || isAutoplayPaused || isInteracting) return;

    const intervalId = window.setInterval(() => {
      if (document.hidden) return;

      setDirection(1);
      setActiveIndex((current) => (current + 1) % credentials.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [isAutoplayPaused, isInteracting, prefersReducedMotion]);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsInteracting(false);
    }
  };

  return (
    <section id="certifications" className="section-spacing">
      <div className="container-shell">
        <div className="max-w-5xl">
          <h2 className="text-balance text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
            Continuous Improvement, Certified Delivery.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Verified learning across AI-assisted development, software tooling, and data fundamentals.
          </p>
        </div>

        <div className="mt-14 grid gap-14 overflow-hidden rounded-lg border border-border/70 bg-card/55 p-7 shadow-[0_32px_90px_-68px_var(--foreground)] sm:p-10 lg:mt-20 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-24 lg:p-14">
          <div>
            <div className="flex -space-x-3" aria-hidden="true">
              {certificationGroups.map((group) => (
                <span
                  key={group.issuer}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-[#f9f8f3] p-3 shadow-[0_10px_28px_-18px_var(--foreground)]"
                >
                  <Image
                    src={issuerLogos[group.issuer].src}
                    alt={issuerLogos[group.issuer].alt}
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </span>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Verified credentials
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Independent proof of the tools and practices behind the work.
            </p>
          </div>

          <div
            aria-live={
              prefersReducedMotion || isAutoplayPaused || isInteracting
                ? "polite"
                : "off"
            }
            className="overflow-hidden"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onFocusCapture={() => setIsInteracting(true)}
            onBlurCapture={handleBlur}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={`${active.issuer}-${active.name}`}
                custom={direction}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * 14 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * -14 }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0.14 }
                    : { type: "spring", bounce: 0, duration: 0.32 }
                }
              >
                <p className="font-mono text-xs text-primary">
                  Credential {activeIndex + 1} of {credentials.length}
                </p>
                <blockquote className="mt-6 min-h-[8rem] max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-foreground sm:text-5xl">
                  {active.name}
                </blockquote>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.p
                  key={active.issuer}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.1 : 0.18 }}
                  className="text-sm font-semibold text-muted-foreground"
                >
                  Verified by {active.issuer}
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center gap-2">
                {!prefersReducedMotion ? (
                  <motion.button
                    type="button"
                    onClick={() => setIsAutoplayPaused((paused) => !paused)}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary active:scale-95"
                    aria-label={
                      isAutoplayPaused
                        ? "Resume credential autoplay"
                        : "Pause credential autoplay"
                    }
                    title={isAutoplayPaused ? "Resume autoplay" : "Pause autoplay"}
                  >
                    {isAutoplayPaused ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <Pause className="h-4 w-4" />
                    )}
                  </motion.button>
                ) : null}
                <motion.button
                  type="button"
                  onClick={() => move(-1)}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary active:scale-95"
                  aria-label="Previous credential"
                >
                  <ArrowLeft className="h-4 w-4" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => move(1)}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary active:scale-95"
                  aria-label="Next credential"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
                <Button href={active.verificationUrl} size="sm" external className="ml-2">
                  Verify <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
