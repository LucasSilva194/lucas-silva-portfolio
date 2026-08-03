import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/ui/spotlight-card";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Frontend systems",
    description: "Interfaces built for daily use, clear maintenance, and responsive delivery.",
    skills: skillGroups[1].skills,
  },
  {
    title: "Backend services",
    description: "APIs and application logic that stay understandable as products grow.",
    skills: skillGroups[2].skills,
  },
  {
    title: "Data and integrations",
    description: "Reliable data flows across databases, external services, and commerce platforms.",
    skills: [...skillGroups[3].skills, ...skillGroups[4].skills],
  },
  {
    title: "Delivery practice",
    description: "Testing, source control, deployment, and the tools that support steady releases.",
    skills: [...skillGroups[5].skills, ...skillGroups[6].skills],
  },
];

export function HomeSkills() {
  return (
    <section id="skills" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <div className="max-w-4xl">
          <h2 className="text-balance text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
            Full stack means seeing the whole system.
          </h2>
          <p className="mt-7 max-w-[60ch] text-base leading-7 text-muted-foreground sm:text-lg">
            My strongest work connects product thinking with implementation across the interface, service, and data layers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-12 lg:mt-24">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 0.05}
              className={cn(
                "bg-card",
                index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5",
              )}
            >
              <GlowCard
                glowColor="purple"
                customSize
                className="h-full min-h-[22rem] overflow-hidden rounded-none p-0 shadow-none"
              >
                <article className="group relative z-10 flex h-full min-h-[22rem] flex-col p-7 transition-colors duration-300 hover:bg-muted/35 sm:p-9 lg:p-11">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="max-w-sm text-3xl font-medium leading-none tracking-[-0.045em] text-card-foreground sm:text-4xl">
                      {capability.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-12">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex rounded-full border border-primary/15 bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Link
          href="/skills"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          View the complete toolkit
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
