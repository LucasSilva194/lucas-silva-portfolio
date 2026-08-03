import type { Metadata } from "next";
import { Download } from "lucide-react";

import { DownloadCvRedirect } from "@/app/download-cv/DownloadCvRedirect";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Downloading CV | Lucas Silva",
  description: "Download Lucas Silva's CV.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadCvPage() {
  return (
    <main id="main-content" className="container-shell flex min-h-[calc(100dvh-4rem)] items-center justify-center py-20">
      <section className="max-w-xl border-y border-border py-10 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
          <Download className="h-5 w-5" />
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-card-foreground">
          Preparing CV download
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Your download should start automatically. If it does not, open the CV
          manually.
        </p>
        <div className="mt-7">
          <DownloadCvRedirect href={profile.links.cvFile} />
        </div>
      </section>
    </main>
  );
}
