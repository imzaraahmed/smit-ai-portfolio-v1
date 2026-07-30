import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal, Section } from "./section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I studied"
      description="Placeholder entries — add your degrees, schools and dates."
    >
      <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-brand before:opacity-40 sm:before:left-6">
        {education.map((item, i) => (
          <Reveal key={item.degree + i} delay={i * 90}>
            <div className="relative flex gap-5 pl-0">
              <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground sm:h-12 sm:w-12">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="glass-card gradient-ring min-w-0 flex-1 rounded-3xl p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="min-w-0 text-lg font-semibold">{item.degree}</h3>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-gradient">{item.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials & courses"
      description="Placeholder certifications — link them to your verification pages."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name + i} delay={i * 70}>
            <a
              href={cert.url}
              className="glass-card gradient-ring group flex h-full flex-col rounded-3xl p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-soft">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gradient">
                {cert.year}
                <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
