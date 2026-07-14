import { CalendarDays, MapPin, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional work across software, product, and web design."
          description="A focused timeline covering internal systems, application redesign, digital content, and web maintenance."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
                <article className="relative rounded-lg border border-border bg-card p-6 shadow-soft md:ml-12">
                  <span className="absolute -left-12 top-8 hidden h-7 w-7 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:block" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-semibold text-primary">
                        {item.company}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground sm:text-right">
                      <p className="flex items-center gap-2 sm:justify-end">
                        <CalendarDays className="h-4 w-4" />
                        {item.period}
                      </p>
                      <p className="flex items-center gap-2 sm:justify-end">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-md border border-primary/20 bg-primary/10 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Sparkles className="h-4 w-4" />
                      Impact
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.impact.map((impact) => (
                        <li
                          key={impact}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
