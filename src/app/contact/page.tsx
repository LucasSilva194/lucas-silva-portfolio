import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Lucas Silva",
  description:
    "Contact Lucas Silva for Full Stack Developer opportunities, web applications, APIs, and workflow automation work.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
