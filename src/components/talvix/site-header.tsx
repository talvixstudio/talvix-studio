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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <a href="#top" aria-label="Talvix Studio — início" className="group">
          <TalvixLogo className="transition-opacity duration-300 group-hover:opacity-80" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13.5px] text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group relative inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-[13px] font-medium transition-all duration-300 hover:border-brand/60 hover:bg-brand/10"
        >
          Iniciar projeto
          <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-300 group-hover:scale-125" />
        </a>
      </div>
    </header>
  );
}
