import { useEffect, useRef, useState } from "react";
import notebook from "@/assets/hero-notebook.png";
import { Reveal } from "./reveal";

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
    <section id="top" ref={ref} className="relative overflow-hidden pt-[136px] pb-24 lg:pb-32">
      {/* background architecture */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(70%_55%_at_50%_20%,#000,transparent)]" />
        <div
          className="brand-glow absolute left-1/2 top-[-14%] h-[620px] w-[1100px] -translate-x-1/2 opacity-40 blur-[2px]"
          style={{ transform: `translate(-50%, ${offset * -0.12}px)` }}
        />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Duas vagas para novembro
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-balance-tight mt-8 text-[clamp(2.6rem,7.2vw,5.1rem)] font-semibold leading-[0.98]">
              Interfaces que fazem
              <br className="hidden sm:block" /> a sua empresa parecer{" "}
              <span className="relative whitespace-nowrap text-brand-soft">
                inevitável
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
              Somos um estúdio de design e engenharia digital. Desenhamos e construímos
              websites, produtos e identidades com o acabamento que normalmente só existe
              dentro das melhores empresas de software do mundo.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="group relative inline-flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_12px_40px_-12px_var(--brand)] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Iniciar um projeto
              </a>
              <a
                href="#trabalhos"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-foreground/25 hover:bg-surface sm:w-auto"
              >
                Ver trabalhos
                <span className="font-mono text-xs text-muted-foreground">↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Notebook */}
        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden
            className="brand-glow absolute inset-x-[12%] bottom-[6%] h-[45%] opacity-45 blur-2xl"
          />
          <Reveal delay={320}>
            <div
              className="relative mx-auto max-w-[980px] float-slow"
              style={{ transform: `translateY(${offset * -0.05}px)` }}
            >
              <img
                src={notebook}
                width={1600}
                height={1104}
                alt="Notebook exibindo uma interface desenhada pela Talvix Studio"
                className="w-full select-none drop-shadow-[0_60px_80px_rgba(0,0,0,0.65)]"
                fetchPriority="high"
              />
            </div>
          </Reveal>
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
          />
        </div>

        <Reveal delay={120}>
          <dl className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-y-8 sm:grid-cols-4">
            {[
              ["98", "Lighthouse médio"],
              ["3–6", "Semanas por projeto"],
              ["11", "Países atendidos"],
              ["100%", "Feito sob medida"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <dt className="text-2xl font-semibold tracking-[-0.03em]">{value}</dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
