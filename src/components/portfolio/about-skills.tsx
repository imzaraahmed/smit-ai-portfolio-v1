import { Cloud, Code2, Server, Sparkles } from "lucide-react";
import { about, skillGroups } from "@/data/portfolio";
import { Reveal, Section } from "./section";

const icons = {
  code: Code2,
  server: Server,
  sparkles: Sparkles,
  cloud: Cloud,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A short introduction"
      description="Replace this section with your own story — placeholders are ready for your details."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Reveal className="glass-card gradient-ring rounded-3xl p-8">
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="glass-card gradient-ring h-full rounded-3xl p-6">
                <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="Technologies and tools I use to build full-stack web applications, AI-powered workflows, and modern software solutions.."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={i * 80}>
              <div className="glass-card gradient-ring h-full rounded-3xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
