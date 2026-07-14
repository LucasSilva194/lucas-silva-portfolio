import { CalendarDays } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Formal training across web systems and technical problem solving."
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.degree} delay={index * 0.08}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-card-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.institution}
                  </p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                    <CalendarDays className="h-4 w-4" />
                    {item.period}
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
