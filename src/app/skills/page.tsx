import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Lucas Silva",
  description:
    "Technical skills, currently learning technologies, and previous experience for Lucas Silva.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
