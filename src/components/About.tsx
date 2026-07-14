import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

const highlights = [
  "Internal APIs and enterprise web applications",
  "Workflow automation and process improvement",
  "Agile teamwork, communication, and collaboration",
  "Continuous learning across frontend and backend systems",
];

const stats = [
  { value: "2024", label: "Bachelor's degree completed" },
  { value: "3+", label: "Professional roles across web and software" },
  { value: "Full Stack", label: "Frontend, backend, and automation focus" },
];

export function About() {
  return (
    <section id="about" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A pragmatic developer focused on useful software."
          description="Lucas combines web development, internal tooling, and workflow automation experience with a clear communication style and a steady appetite for learning."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-7 shadow-soft">
              <p className="text-lg leading-8 text-muted-foreground">
                {profile.about}
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-card-foreground">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
