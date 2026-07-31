import { ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { certificationGroups } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="section-spacing border-t border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous Improvement, Certified Delivery."
          description="Verified credentials from technical learning paths, grouped by issuer and focused on tools I use to build better software."
        />

        <div className="grid gap-5">
          {certificationGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.issuer} delay={groupIndex * 0.06}>
                <article className="rounded-lg border border-border bg-card p-6 shadow-soft">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Issuer
                        </p>
                        <h3 className="mt-1 text-xl font-bold text-card-foreground">
                          {group.issuer}
                        </h3>
                      </div>
                    </div>
                    <Badge tone="accent">
                      {group.certifications.length}{" "}
                      {group.certifications.length === 1
                        ? "certificate"
                        : "certificates"}
                    </Badge>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {group.certifications.map((certification) => (
                      <div
                        key={certification.name}
                        className="flex flex-col gap-4 rounded-md border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="text-base font-bold text-foreground">
                            {certification.name}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Verified credential
                          </p>
                        </div>
                        <Button
                          href={certification.verificationUrl}
                          variant="secondary"
                          size="sm"
                          external
                          className="w-full sm:w-auto"
                        >
                          Verify
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
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
