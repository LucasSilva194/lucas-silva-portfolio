import type { Metadata } from "next";

import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Experience | Lucas Silva",
  description:
    "Professional experience of Lucas Silva across Full Stack development, internal APIs, workflow automation, and Shopify websites.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
