import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Tooltip } from "@/components/ui/Tooltip";
import { projects } from "@/data/portfolio";

export function HomeProjects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-shell">
        <div className="max-w-5xl">
          <h2 className="text-balance text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
            Selected work with a clear reason to exist.
          </h2>
          <p className="mt-7 max-w-[62ch] text-base leading-7 text-muted-foreground sm:text-lg">
            Three projects across support automation and public websites, presented around the problem, implementation, and result.
          </p>
        </div>

        <div className="mt-16 border-t border-border lg:mt-24">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group grid gap-8 border-b border-border py-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr_0.75fr_auto] lg:items-start lg:gap-10 lg:py-16">
                <div>
                  <div className="mb-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">
                    {project.categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <h3 className="max-w-sm text-3xl font-medium leading-[0.98] tracking-[-0.045em] text-card-foreground sm:text-4xl">
                    {project.name}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[58ch] text-base leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground lg:block lg:space-y-2">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <p key={technology}>{technology}</p>
                  ))}
                </div>

                <div className="flex items-center gap-2 lg:justify-end">
                  <Tooltip content="View case study" align="end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary active:translate-y-px"
                      aria-label={`View ${project.name} case study`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Tooltip>
                  {project.githubUrl ? (
                    <Tooltip content="View source code" align="end">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary active:translate-y-px"
                        aria-label={`View ${project.name} source code`}
                      >
                        <Code2 className="h-4 w-4" />
                      </a>
                    </Tooltip>
                  ) : project.demoUrl ? (
                    <Tooltip content="Open live website" align="end">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary active:translate-y-px"
                        aria-label={`Open ${project.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Tooltip>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          Browse all project details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
