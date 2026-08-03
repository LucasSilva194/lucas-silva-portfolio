"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.utils.toArray<HTMLElement>("[data-project-media]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) return;

      media.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 8%",
              scrub: 0.8,
            },
          })
          .fromTo(element, { scale: 0.84, opacity: 0.55 }, { scale: 1, opacity: 1, duration: 0.58 })
          .to(element, { scale: 0.97, opacity: 0.25, duration: 0.42 });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="projects" className="section-spacing">
      <div className="container-shell">
        <div className="mb-16 border-t border-border pt-7 lg:mb-24 lg:grid lg:grid-cols-[0.34fr_1fr] lg:gap-12">
          <span aria-hidden="true" className="hidden h-2 w-2 rounded-full bg-primary lg:mt-4 lg:block" />
          <div>
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
              Selected work, built for
              <span className="mx-2 inline-block h-[0.72em] w-[1.65em] overflow-hidden rounded-full align-baseline sm:mx-3">
                <Image
                  src="/images/projects/portugal-solucoes.png"
                  alt=""
                  width={240}
                  height={120}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-110"
                />
              </span>
              actual use.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Support automation, internal systems, and public Shopify work. Each one is shaped around a concrete operational need.
            </p>
          </div>
        </div>

        <div className="grid grid-flow-dense gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-12 lg:grid-rows-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={cn(
                "group relative flex min-h-[28rem] flex-col overflow-hidden bg-card p-7 sm:p-9",
                index === 0
                  ? "lg:col-span-8 lg:row-span-2 lg:min-h-[46rem]"
                  : "lg:col-span-4 lg:row-span-1 lg:min-h-0",
              )}
            >
              <div
                data-project-media
                className={cn(
                  "absolute inset-0 origin-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105",
                  index === 0
                    ? "bg-[radial-gradient(circle_at_75%_20%,color-mix(in_srgb,var(--primary)_34%,transparent),transparent_35%),linear-gradient(145deg,#211d24,#37264f)]"
                    : index === 1
                      ? "bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--primary)_28%,transparent),transparent_42%),linear-gradient(145deg,#29232e,#1d1921)]"
                      : "bg-muted",
                )}
              >
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt ?? "Project website preview"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover object-top opacity-55 grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : null}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/88 to-card/10" />

              {index === 0 ? (
                <div className="relative ml-auto hidden w-full max-w-md rounded-md border border-white/10 bg-[#17131b]/72 p-5 font-mono text-xs text-white/70 shadow-2xl backdrop-blur-md sm:block">
                  <div className="mb-5 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <p><span className="text-primary">POST</span> /api/v1/conversations</p>
                  <p className="mt-3 pl-4 text-white/45">intent: &quot;human_support&quot;</p>
                  <p className="mt-1 pl-4 text-white/45">guardrail: true</p>
                  <p className="mt-1 pl-4 text-white/45">state: &quot;escalated&quot;</p>
                </div>
              ) : null}

              <div className="relative mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <Badge key={category} tone="accent">{category}</Badge>
                  ))}
                </div>
                <h3 className={cn("max-w-xl font-medium leading-[0.95] tracking-[-0.05em] text-card-foreground", index === 0 ? "text-4xl sm:text-6xl" : "text-3xl")}>
                  {project.name}
                </h3>
                <p className={cn("mt-5 max-w-xl leading-7 text-muted-foreground", index === 0 ? "text-base" : "line-clamp-3 text-sm")}>
                  {project.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={`/projects/${project.slug}`} size="sm">
                    Case study <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  {project.githubUrl ? (
                    <Button href={project.githubUrl} variant="secondary" size="sm" external>
                      <Code2 className="h-4 w-4" /> Code
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
