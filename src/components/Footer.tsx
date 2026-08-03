import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/55 text-foreground">
      <div className="container-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 border-b border-border pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-4xl text-balance text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Good software starts with a clear conversation.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">
              Available for full stack roles, internal products, APIs, workflow automation, and focused web projects.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={`mailto:${profile.email}`}
              className="block text-lg font-medium tracking-[-0.02em] text-foreground transition hover:text-primary sm:text-xl"
            >
              {profile.email}
            </a>
            <a
              href="/contact"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-px"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-7 pt-8 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-end">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a className="transition hover:text-primary" href={`mailto:${profile.email}`}>Email</a>
            <a className="transition hover:text-primary" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="transition hover:text-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="transition hover:text-primary" href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
