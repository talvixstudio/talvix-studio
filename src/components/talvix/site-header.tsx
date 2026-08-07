import { useEffect, useRef, useState } from "react";
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
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const scrolledRef = useRef(false);

  // Reading progress — written straight to the DOM, no re-render per scroll frame.
  useEffect(() => {
    let frame = 0;
    const apply = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      const next = window.scrollY > 12;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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
        "fixed inset-x-0 top-0 z-50 min-h-[72px] border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-700 ease-out lg:min-h-[80px]",
        scrolled || open
          ? "border-border/60 bg-background/60 shadow-[var(--shadow-header)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled && !open ? "h-[60px]" : "h-[72px] lg:h-[80px]",
        )}
      >
        <a
          href="#top"
          aria-label="Talvix Studio — voltar ao início"
          className="intro-soft group [animation-delay:60ms] transition-transform duration-500 ease-out active:scale-[0.97]"
        >
          <TalvixLogo
            className={cn(
              "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-75",
              scrolled && !open ? "scale-[0.94]" : "scale-100",
            )}
          />
        </a>


        <nav aria-label="Navegação principal" className="hidden min-h-[20px] items-center gap-8 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              style={{ animationDelay: `${240 + i * 80}ms` }}
              className={cn(
                "intro-soft group relative text-[13.5px] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                active === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-brand-deep via-brand to-brand-soft transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  active === l.href
                    ? "origin-left scale-x-100"
                    : "origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -bottom-[7px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand blur-[2px] transition-opacity duration-500 ease-out",
                  active === l.href ? "opacity-90" : "opacity-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="btn-premium intro-soft group relative ds-btn ds-btn-sm ds-btn-ghost hidden overflow-hidden [animation-delay:560ms] hover:scale-[1.02] hover:shadow-[var(--shadow-brand-soft)] active:scale-[0.985] sm:inline-flex"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(70% 140% at 50% 120%, color-mix(in oklab, var(--brand) 26%, transparent), transparent 70%)",
              }}
            />
            <span className="relative">Falar com o estúdio</span>
            <span
              aria-hidden
              className="relative font-mono text-xs opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              →
            </span>
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

      {/* Reading progress */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand-deep via-brand to-brand-soft transition-opacity duration-700 ease-out",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        ref={progressRef}
        style={{ transform: "scaleX(0)" }}
      />

      {/* Mobile sheet */}

      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden border-t bg-background/70 backdrop-blur-2xl backdrop-saturate-150 transition-[max-height,opacity,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "max-h-[420px] border-border/60 opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="shell flex flex-col py-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: `${open ? 120 + i * 70 : 0}ms` }}
              className={cn(
                "flex items-center justify-between border-b border-border/70 py-4 text-[15px] transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] last:border-b-0",
                active === l.href ? "text-foreground" : "text-foreground/90",
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
              )}
            >
              <span className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden
                  className={cn(
                    "h-1 w-1 rounded-full bg-brand transition-opacity duration-500",
                    active === l.href ? "opacity-100" : "opacity-0",
                  )}
                />
                {l.label}
              </span>
              <span className="font-mono text-xs text-muted-foreground">↗</span>
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: `${open ? 120 + links.length * 70 : 0}ms` }}
            className={cn(
              "btn-premium my-5 ds-btn ds-btn-primary transition-[opacity,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
            )}
          >
            Falar com o estúdio
          </a>
        </nav>
      </div>
    </header>
  );
}
