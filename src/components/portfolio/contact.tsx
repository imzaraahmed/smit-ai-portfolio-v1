import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, Section } from "./section";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Send a message and I'll get back to you. Placeholder contact details are ready to be replaced."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <Reveal className="glass-card gradient-ring rounded-3xl p-8">
          <div className="space-y-6">
            {details.map((item) => (
              <div key={item.label} className="flex min-w-0 items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-soft">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="block truncate text-sm font-medium hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild variant="subtle" size="sm">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild variant="subtle" size="sm">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass-card gradient-ring rounded-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="What's this about?" className="rounded-xl" />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="rounded-xl"
              />
            </div>
            <Button type="submit" variant="gradient" size="lg" className="mt-6 w-full">
              <Send /> Send message
            </Button>
            {sent ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gradient">
                <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been captured.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <p className="truncate text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary/60 hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
