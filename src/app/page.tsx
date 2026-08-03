import { Footer } from "@/components/Footer";
import { Certifications } from "@/components/Certifications";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { HomeProjects } from "@/components/HomeProjects";
import { HomeSkills } from "@/components/HomeSkills";
import { ResumeSnapshot } from "@/components/ResumeSnapshot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <HomeSkills />
        <HomeProjects />
        <ResumeSnapshot />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
