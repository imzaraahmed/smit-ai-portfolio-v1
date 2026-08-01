import { ArrowUpRight, Bot, ExternalLink, Github, Zap } from "lucide-react";
import { aiProjects, featuredProjects } from "@/data/portfolio";
import { Reveal, Section } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Selected work"
      description="Placeholder projects — replace titles, descriptions and links with your own."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="glass-card gradient-ring group flex h-full flex-col rounded-3xl p-6">
              <div className="grid h-34 place-items-center rounded-lg bg-gradient-soft overflow-hidden">
                <span className="font-display text-sm text-muted-foreground">
                <img
    src={project.image}
    alt={project.title}
    className=" object-cover transition-transform duration-300 group-hover:scale-105"
  />
                </span>
              </div>
              <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold">
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                {/*<a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 text-gradient font-medium"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>*/}
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AiProjects() {
  return (
    <Section
      id="ai-automation"
      eyebrow="AI automation"
      title="Workflows that run themselves"
      description="Placeholder automations — describe the agents, pipelines and integrations you've built."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {aiProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="glass-card gradient-ring flex h-full flex-col rounded-3xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-soft px-3 py-1.5 text-xs font-medium">
                <Zap className="h-3.5 w-3.5" /> {project.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
