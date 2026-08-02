import { useEffect, useRef, useState } from "react";
import notebook from "@/assets/hero-notebook.png";

/** Entrance choreography — every element lands after the one before it. */
const seq = {
  badge: 120,
  line1: 260,
  line2: 380,
  sub: 560,
  cta: 720,
  notebook: 820,
  stats: 1150,
};

export function Hero() {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY, 700));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden pt-[128px] pb-24 lg:pt-[152px] lg:pb-32"
    >
      {/* background architecture */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid intro absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(70%_55%_at_50%_20%,#000,transparent)] [animation-duration:2.4s]" />
        <div
          className="brand-glow intro absolute left-1/2 top-[-14%] h-[620px] w-[1100px] -translate-x-1/2 opacity-40 blur-[2px] [animation-delay:200ms] [animation-duration:2.6s]"
          style={{ transform: `translate(-50%, ${offset * -0.12}px)` }}
        />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="intro-soft" style={{ animationDelay: `${seq.badge}ms` }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Agenda aberta · 2 projetos
            </span>
          </div>

          <h1
            id="hero-titulo"
            className="text-balance-tight mt-8 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.98]"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="intro block" style={{ animationDelay: `${seq.line1}ms` }}>
                Sites e produtos digitais
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="intro block" style={{ animationDelay: `${seq.line2}ms` }}>
                que fecham{" "}
                <span className="relative whitespace-nowrap text-brand-soft">
                  negócio
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
                </span>
              </span>
            </span>
          </h1>

          <p
            className="intro mx-auto mt-7 max-w-[46ch] text-[17px] leading-[1.65] text-muted-foreground"
            style={{ animationDelay: `${seq.sub}ms` }}
          >
            Estúdio de design e engenharia. Desenhamos, escrevemos e programamos — do
            primeiro rascunho ao deploy — em 3 a 6 semanas.
          </p>

          <div
            className="intro mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: `${seq.cta}ms` }}
          >
            <a
              href="#contato"
              className="btn-premium hover-sheen group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-[14.5px] font-medium text-primary-foreground hover:shadow-[0_18px_50px_-18px_var(--brand)] sm:w-auto"
            >
              Receber uma proposta
              <span
                aria-hidden
                className="font-mono text-xs opacity-70 transition-transform duration-500 ease-out group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#trabalhos"
              className="btn-premium group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border px-7 text-[14.5px] font-medium text-foreground/90 hover:border-foreground/25 hover:bg-surface sm:w-auto"
            >
              Ver estudos de caso
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground transition-transform duration-500 ease-out group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>

          <p
            className="intro mt-6 text-[12.5px] text-muted-foreground/80"
            style={{ animationDelay: `${seq.cta + 120}ms` }}
          >
            Escopo e preço fechados por escrito antes de qualquer contrato.
          </p>
        </div>


        {/* Notebook */}
        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden
            className="brand-glow intro absolute inset-x-[6%] bottom-[2%] h-[70%] opacity-70 blur-[6px] [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div
            aria-hidden
            className="intro absolute inset-x-[18%] bottom-[10%] h-[55%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)] blur-2xl [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div className="intro-rise" style={{ animationDelay: `${seq.notebook}ms` }}>
            <div
              className="float-slow relative mx-auto max-w-[980px]"
              style={{ transform: `translate3d(0, ${offset * -0.05}px, 0)` }}
            >
              <img
                src={notebook}
                width={1600}
                height={1104}
                alt="Notebook exibindo uma interface desenhada pela Talvix Studio"
                className="w-full select-none brightness-[1.35] contrast-[1.05] drop-shadow-[0_50px_70px_rgba(0,0,0,0.7)]"
                fetchPriority="high"
              />
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
          />
        </div>

        <dl className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-y-9 border-t border-border pt-10 sm:grid-cols-4">
          {[
            ["3–6", "Semanas por projeto"],
            ["98+", "Lighthouse na entrega"],
            ["3", "Projetos por vez, no máx."],
            ["24h", "Para responder você"],
          ].map(([value, label], i) => (
            <div
              key={label}
              className="intro text-center"
              style={{ animationDelay: `${seq.stats + i * 90}ms` }}
            >
              <dt className="text-[26px] font-semibold tracking-[-0.03em]">{value}</dt>
              <dd className="mx-auto mt-1.5 max-w-[16ch] font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
