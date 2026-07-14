import { ArrowRight, Code2, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects across support automation and Shopify websites."
          description="A focused selection of public and private work, from a customer support chatbot to live Shopify websites with custom Liquid, CSS, JavaScript, and GraphQL implementation."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/45">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={`/projects/${project.slug}`}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  {project.githubUrl ? (
                    <Button
                      href={project.githubUrl}
                      variant="secondary"
                      external
                      className="w-full sm:w-auto"
                    >
                      <Code2 className="h-4 w-4" />
                      GitHub
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="secondary"
                      disabled
                      className="w-full sm:w-auto"
                    >
                      <Code2 className="h-4 w-4" />
                      Private Code
                    </Button>
                  )}
                  {project.demoUrl ? (
                    <Button
                      href={project.demoUrl}
                      variant="secondary"
                      external
                      className="w-full sm:w-auto"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-8 max-w-3xl rounded-md border border-primary/20 bg-primary/10 px-5 py-4 text-center text-sm leading-6 text-muted-foreground">
            My current professional work is mainly in private GitLab
            repositories, with public GitHub used mostly for selected personal
            and portfolio projects.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
