import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skillGroups, technologyJourney } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A full stack toolkit for modern product teams."
          description="A practical overview of the technologies I use across frontend delivery, backend systems, data, tooling, methods, and design productivity."
        />

        <div className="rounded-lg border-y border-border/70">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <div className="grid gap-4 border-b border-border/70 py-5 last:border-b-0 md:grid-cols-[13rem_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} tone="muted">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {technologyJourney.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={0.18 + index * 0.06}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} tone="muted">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
