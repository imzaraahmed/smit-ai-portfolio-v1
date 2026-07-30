import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About, Skills } from "@/components/portfolio/about-skills";
import { AiProjects, Projects } from "@/components/portfolio/projects";
import { Certifications, Education } from "@/components/portfolio/education";
import { Contact, Footer } from "@/components/portfolio/contact";

const title = "Your Name — Developer & AI Automation Portfolio";
const description =
  "Portfolio of a developer and AI automation engineer: featured projects, automation workflows, skills, education, certifications and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AiProjects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
