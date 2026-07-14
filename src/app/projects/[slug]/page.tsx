import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Lucas Silva",
    };
  }

  return {
    title: `${project.name} | Lucas Silva`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Lucas Silva`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section-spacing">
          <div className="container-shell">
            <Button href="/#projects" variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
              <article className="rounded-lg border border-border bg-card p-7 shadow-soft">
                <Badge className="mb-5">Project Case Study</Badge>
                <h1 className="text-balance text-4xl font-bold tracking-normal text-card-foreground sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-lg leading-8 text-primary">
                  {project.tagline}
                </p>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {project.imageUrl ? (
                  <div className="mt-8 overflow-hidden rounded-md border border-border bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt ?? "Project screenshot"}
                      width={1440}
                      height={1000}
                      className="aspect-[16/9] w-full object-cover object-top"
                      priority
                    />
                  </div>
                ) : null}

                <div className="mt-8 grid gap-5">
                  <section>
                    <h2 className="text-xl font-bold text-card-foreground">
                      Problem
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.problem}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-card-foreground">
                      What I Built
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.solution}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-card-foreground">
                      Outcome
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.outcome}
                    </p>
                  </section>
                </div>
              </article>

              <aside className="grid gap-5">
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-lg font-bold text-card-foreground">
                    Stack
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-lg font-bold text-card-foreground">
                    Highlights
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-lg font-bold text-card-foreground">
                    Links
                  </h2>
                  <div className="mt-4 flex flex-col gap-3">
                    {project.githubUrl ? (
                      <Button href={project.githubUrl} variant="secondary" external>
                        <Code2 className="h-4 w-4" />
                        GitHub
                      </Button>
                    ) : (
                      <Button type="button" variant="secondary" disabled>
                        <Code2 className="h-4 w-4" />
                        Private Code
                      </Button>
                    )}
                    {project.demoUrl ? (
                      <Button href={project.demoUrl} external>
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    ) : null}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
