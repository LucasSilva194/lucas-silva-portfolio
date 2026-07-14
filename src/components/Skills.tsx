import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A full stack toolkit for modern product teams."
          description="Technologies grouped by the way Lucas uses them: frontend delivery, backend systems, data, tooling, methods, and design productivity."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/45">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-card-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} tone="muted">
                        {skill}
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
