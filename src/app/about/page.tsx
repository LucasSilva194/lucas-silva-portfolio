import type { Metadata } from "next";

import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About | Lucas Silva",
  description:
    "Learn more about Lucas Silva, a Full Stack Software Developer based in Vila Nova de Gaia, Portugal.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <About />
        <Education />
      </main>
      <Footer />
    </>
  );
}
