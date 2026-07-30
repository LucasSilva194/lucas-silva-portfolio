import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="container-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
    >
      <Reveal className="min-w-0">
        <div className="min-w-0">
          <Badge className="mb-6 gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Full Stack opportunities
          </Badge>

          <h1 className="text-balance text-5xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground sm:text-base">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.shortDescription}
          </p>

          <div className="mt-6 inline-flex max-w-full items-center gap-3 rounded-md border border-border bg-card px-4 py-3 font-mono text-sm text-muted-foreground shadow-soft">
            <TerminalSquare className="h-4 w-4 shrink-0 text-accent" />
            <span className="min-w-0 truncate">
              building internal platforms, APIs, and workflow automations
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact
            </Button>
            <Button href={profile.links.cv} variant="ghost">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-8 flex min-w-0 items-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </a>
            <span className="h-px w-12 bg-border" />
            <span className="min-w-0 text-sm text-muted-foreground">
              Based in Portugal, building for the web.
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="min-w-0">
        <div className="relative mx-auto w-full max-w-[28rem] min-w-0">
          <div className="absolute -right-4 top-10 hidden rounded-md border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold">APIs + Web Apps</p>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-md border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Stack
            </p>
            <p className="mt-1 text-sm font-semibold">TypeScript / Java</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card p-3 shadow-soft">
            <Image
              src="/images/lucas-silva.jpg"
              alt="Portrait of Lucas Silva"
              width={720}
              height={720}
              priority
              className="aspect-square w-full rounded-md object-cover object-[52%_42%]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
