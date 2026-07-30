import { Download, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { profile, resumeSnapshot } from "@/data/portfolio";

export function ResumeSnapshot() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-8 rounded-lg border border-border bg-card p-6 shadow-soft lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Resume Snapshot
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-normal text-card-foreground sm:text-4xl">
                Full Stack Software Developer at Prozis S.A.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Part of a 7-engineer team owning 5 internal platforms used by
                around 1,300 employees across UI, API, and data layers.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={profile.links.cv}>
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button href="/experience" variant="secondary">
                  <ExternalLink className="h-4 w-4" />
                  View Experience
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {resumeSnapshot.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-md border border-border bg-background p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                    <p className="mt-4 text-lg font-bold text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
