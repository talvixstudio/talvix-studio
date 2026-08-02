import { useEffect, useState } from "react";
import { TalvixLogo } from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Casos", href: "#trabalhos" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — the nav always tells you where you are.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-700 ease-out",
        scrolled || open
          ? "border-b border-border bg-background/72 shadow-[0_1px_0_0_color-mix(in_oklab,var(--brand)_10%,transparent),0_18px_40px_-32px_rgb(0_0_0/0.9)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <a
          href="#top"
          aria-label="Talvix Studio — voltar ao início"
          className="intro-soft group [animation-delay:60ms] transition-transform duration-300 ease-out active:scale-[0.97]"
        >
          <TalvixLogo className="transition-opacity duration-500 ease-out group-hover:opacity-75" />
        </a>


        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              style={{ animationDelay: `${240 + i * 80}ms` }}
              className={cn(
                "intro-soft relative text-[13.5px] transition-colors duration-500 ease-out",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-[700ms] after:ease-out hover:after:origin-left hover:after:scale-x-100",
                active === l.href
                  ? "text-foreground after:origin-left after:scale-x-100"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="btn-premium intro-soft group relative hidden h-9 items-center gap-2 rounded-full border border-border px-4 text-[13px] font-medium [animation-delay:560ms] hover:border-brand/60 hover:bg-brand/10 hover:shadow-[0_10px_30px_-16px_var(--brand)] sm:inline-flex"
          >
            Falar com o estúdio
            <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-500 ease-out group-hover:scale-[1.35]" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-foreground transition-all duration-500 ease-out",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-foreground transition-all duration-500 ease-out",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="shell flex flex-col py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/70 py-4 text-[15px] text-foreground/90 last:border-b-0"
            >
              {l.label}
              <span className="font-mono text-xs text-muted-foreground">↗</span>
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="my-5 inline-flex h-12 items-center justify-center rounded-full bg-brand text-sm font-medium text-primary-foreground"
          >
            Falar com o estúdio
          </a>
        </nav>
      </div>
    </header>
  );
}
