import { useEffect, useState } from "react";
import { TalvixLogo } from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Estúdio", href: "#estudio" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700 ease-out",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          aria-label="Talvix Studio — início"
          className="intro-soft group [animation-delay:60ms]"
        >
          <TalvixLogo className="transition-opacity duration-500 ease-out group-hover:opacity-75" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{ animationDelay: `${240 + i * 80}ms` }}
              className="intro-soft relative text-[13.5px] text-muted-foreground transition-colors duration-500 ease-out hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-[700ms] after:ease-out hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="btn-premium intro-soft group relative inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-[13px] font-medium [animation-delay:560ms] hover:border-brand/60 hover:bg-brand/10 hover:shadow-[0_10px_30px_-16px_var(--brand)]"
        >
          Iniciar projeto
          <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-500 ease-out group-hover:scale-[1.35]" />
        </a>
      </div>
    </header>
  );
}
