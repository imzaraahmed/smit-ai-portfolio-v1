import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="truncate font-display text-base font-semibold">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle color theme"
            onClick={toggle}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation menu"
            className="rounded-full lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
