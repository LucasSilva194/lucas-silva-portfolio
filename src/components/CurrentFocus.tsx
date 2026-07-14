import { Bot, Code2, Server, Workflow } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { currentFocus } from "@/data/portfolio";

const icons = [Server, Code2, Workflow, Bot];

export function CurrentFocus() {
  return (
    <section id="focus" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Current Focus"
          title="What I am sharpening right now."
          description="A concise view of the areas Lucas is actively developing across backend systems, frontend delivery, automation, and AI-assisted internal tools."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {currentFocus.map((item, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/45">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
