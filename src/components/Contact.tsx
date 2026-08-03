"use client";

import { FormEvent, useState } from "react";
import { BriefcaseBusiness, Code2, Mail, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState("");
  const [statusTone, setStatusTone] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message.");
      }

      setStatusTone("success");
      setStatus(result.message ?? "Message sent successfully.");
      form.reset();
    } catch (error) {
      setStatusTone("error");
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h2 className="mt-3 text-balance text-4xl font-bold tracking-normal text-foreground sm:text-5xl">
                Let&apos;s build useful software.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              Available for Full Stack Developer roles in Portugal, hybrid or
              remote positions, and international teams looking for someone
              comfortable across frontend, backend, APIs, and workflow
              automation.
            </p>
          </div>
        </Reveal>

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
              <label className="sr-only" aria-hidden="true">
                Company
                <input
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
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
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  <span className="grid min-w-[6.5rem] place-items-center">
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.span
                        key={isSubmitting ? "sending" : "ready"}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, y: 4 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, y: -4 }
                        }
                        transition={
                          prefersReducedMotion
                            ? { duration: 0.1 }
                            : { type: "spring", bounce: 0, duration: 0.22 }
                        }
                        className="col-start-1 row-start-1"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </Button>
                <AnimatePresence initial={false}>
                  {status ? (
                    <motion.p
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: 6 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: -4 }
                      }
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.12 }
                          : { type: "spring", bounce: 0, duration: 0.28 }
                      }
                      className={
                        statusTone === "success"
                          ? "text-sm text-muted-foreground"
                          : "text-sm text-red-500"
                      }
                      role="status"
                    >
                      {status}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
