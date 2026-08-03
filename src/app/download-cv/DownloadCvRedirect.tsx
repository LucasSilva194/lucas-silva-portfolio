"use client";

import { useEffect } from "react";

type DownloadCvRedirectProps = {
  href: string;
};

export function DownloadCvRedirect({ href }: DownloadCvRedirectProps) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.href = href;
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [href]);

  return (
    <a
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-px"
    >
      Open CV now
    </a>
  );
}
