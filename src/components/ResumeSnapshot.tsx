"use client";

import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/Button";
import { experience, profile } from "@/data/portfolio";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const featuredExperience = experience.find(
  (item) =>
    item.company === "Prozis S.A." &&
    item.role === "Full Stack Software Developer",
);

export function ResumeSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const card = sectionRef.current?.querySelector<HTMLElement>(
        "[data-career-card]",
      );

      if (!card) return;

      gsap.fromTo(
        card,
        { y: 72, scale: 0.96, opacity: 0.45 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 42%",
            scrub: 0.8,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="section-spacing border-y border-border/70">
      <div className="container-shell grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div className="self-start lg:sticky lg:top-32">
          <h2 className="max-w-lg text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-foreground sm:text-6xl">
            Full-stack ownership at scale.
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
            At Prozis, I work across interfaces, APIs, automations, and data flows for internal platforms used throughout the organization.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start xl:flex-row">
            <Button href="/experience">
              Full experience <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={profile.links.cv} variant="secondary">
              <Download className="h-4 w-4" /> CV
            </Button>
          </div>
        </div>

        <div>
          {featuredExperience ? (
            <article
              data-career-card
              className="min-h-[28rem] overflow-hidden rounded-lg border border-border bg-card p-7 shadow-[0_35px_100px_-60px_var(--foreground)] sm:p-10"
            >
              <div className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs text-primary">
                    {featuredExperience.period}
                  </p>
                  <h3 className="mt-4 max-w-xl text-3xl font-medium leading-none tracking-[-0.045em] text-card-foreground sm:text-4xl">
                    {featuredExperience.role}
                  </h3>
                </div>
                <div className="sm:text-right">
                  <p className="text-sm font-semibold text-foreground">
                    {featuredExperience.company}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {featuredExperience.location}
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {featuredExperience.responsibilities.map((responsibility) => (
                  <p
                    key={responsibility}
                    className="flex max-w-2xl gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {responsibility}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {featuredExperience.highlights.map((highlight) => (
                  <p key={highlight} className="bg-background p-5 text-sm leading-6 text-foreground">
                    {highlight}
                  </p>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
