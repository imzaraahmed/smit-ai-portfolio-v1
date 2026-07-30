import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      },
      done ? 1600 : deleting ? 45 : 90,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(profile.typingRoles);

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-[120px] animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-gradient-brand opacity-15 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="animate-rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Available for new opportunities
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-4 min-h-[2.5rem] font-display text-xl text-muted-foreground sm:text-2xl">
              <span className="text-foreground">{typed}</span>
              <span className="ml-0.5 inline-block animate-caret text-gradient">|</span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gradient" size="lg">
                <a href={profile.resumeUrl} download>
                  <Download /> Download Resume
                </a>
              </Button>
              <Button asChild variant="subtle" size="lg">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild variant="subtle" size="lg">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {profile.location}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise-in [animation-delay:150ms]">
            <div className="gradient-ring glass-card rounded-4xl p-8">
              <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-brand text-5xl font-bold text-primary-foreground shadow-glow">
                {profile.initials}
              </div>
              <p className="mt-6 text-center font-display text-lg font-semibold">{profile.role}</p>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Photo placeholder — add your portrait later.
              </p>
              <a
                href="#projects"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-gradient-soft px-4 py-3 text-sm font-medium transition-transform hover:translate-x-1"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
