import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Lucas Silva",
  description:
    "Selected projects by Lucas Silva, including the CDI Chatbot and Shopify websites with Liquid, CSS, JavaScript, and GraphQL.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
