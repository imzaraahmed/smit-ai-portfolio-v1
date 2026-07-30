import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={cn(visible ? "animate-rise-in" : "opacity-0", className)}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-shell scroll-mt-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gradient">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
