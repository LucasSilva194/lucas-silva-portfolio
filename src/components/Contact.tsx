"use client";

import { FormEvent, useState } from "react";
import { BriefcaseBusiness, Code2, Mail, Send } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email client should open with the message prepared.");
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to Full Stack Developer opportunities."
          description="Available for roles in Portugal, hybrid or remote positions, and international teams looking for a developer comfortable across frontend, backend, APIs, and workflow automation."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h3 className="text-xl font-bold text-card-foreground">
                Contact details
              </h3>
              <div className="mt-5 rounded-md border border-primary/20 bg-primary/10 px-4 py-3">
                <p className="text-sm font-semibold text-primary">
                  Opportunity fit
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Full Stack Developer roles, internal tools, web applications,
                  APIs, workflow automation, and Shopify/custom web work.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-card-foreground">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-card-foreground">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-medium text-card-foreground">
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role, project, or idea..."
                  className="resize-none rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground transition placeholder:text-muted-foreground focus:border-primary"
                />
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                {status ? (
                  <p className="text-sm text-muted-foreground" role="status">
                    {status}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
