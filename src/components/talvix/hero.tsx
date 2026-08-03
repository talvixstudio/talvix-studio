import { useEffect, useRef } from "react";
const nbAvif980 = "/media/hero-notebook-980.avif";
const nbAvif1600 = "/media/hero-notebook-1600.avif";
const nbWebp980 = "/media/hero-notebook-980.webp";
const nbWebp1600 = "/media/hero-notebook-1600.webp";

/** Entrance choreography — Logo → Title → Subtitle → Buttons → Benefits → Notebook → Stats. */
const seq = {
  badge: 200,
  line1: 360,
  line2: 460,
  sub: 620,
  cta: 760,
  benefits: 860,
  notebook: 980,
  scroll: 1180,
  stats: 1420,
};

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const deviceRef = useRef<HTMLDivElement | null>(null);

  // Parallax written straight to the DOM — no re-renders while scrolling.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let last = -1;
    const apply = () => {
      frame = 0;
      const offset = Math.min(window.scrollY, 700);
      if (offset === last) return;
      last = offset;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(-50%, ${offset * -0.12}px)`;
      }
      if (deviceRef.current) {
        deviceRef.current.style.transform = `translate3d(0, ${offset * -0.05}px, 0)`;
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden pt-[124px] pb-10 lg:pt-[148px] lg:pb-16"
    >
      {/* background architecture */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid intro absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(70%_55%_at_50%_20%,#000,transparent)] [animation-duration:2.4s]" />
        <div
          ref={glowRef}
          className="brand-glow intro absolute left-1/2 top-[-14%] h-[620px] w-[1100px] -translate-x-1/2 opacity-40 blur-[2px] [animation-delay:200ms] [animation-duration:2.6s]"
          style={{ transform: "translate(-50%, 0px)" }}
        />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-[60rem] text-center">
          <div className="intro-soft" style={{ animationDelay: `${seq.badge}ms` }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 ds-label backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Agenda aberta · 2 vagas
            </span>
          </div>

          <h1
            id="hero-titulo"
            className="text-balance-tight mx-auto mt-10 max-w-[15ch] text-[clamp(2.1rem,5.8vw,4.5rem)] font-semibold leading-[0.98] sm:max-w-none lg:max-w-none"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="intro block" style={{ animationDelay: `${seq.line1}ms` }}>
                Transformamos ideias em
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="intro block" style={{ animationDelay: `${seq.line2}ms` }}>
                <span className="relative whitespace-nowrap text-brand-soft">
                  experiências
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
                </span>{" "}
                digitais
              </span>
            </span>
          </h1>

          <p
            className="intro mx-auto mt-8 max-w-[36ch] ds-lead"
            style={{ animationDelay: `${seq.sub}ms` }}
          >
            Sites que vendem. Design que impressiona. Engenharia que sustenta.
          </p>

          <div
            className="intro mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: `${seq.cta}ms` }}
          >
            <a
              href="#contato"
              className="btn-premium hover-sheen group ds-btn ds-btn-primary w-full sm:w-auto"
            >
              Começar projeto
              <span
                aria-hidden
                className="font-mono text-xs opacity-70 transition-transform duration-500 ease-out group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#trabalhos"
              className="btn-premium group ds-btn ds-btn-ghost w-full sm:w-auto"
            >
              Ver cases
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground transition-transform duration-500 ease-out group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>

          <p
            className="intro mx-auto mt-8 max-w-[50ch] text-[11px] font-medium uppercase leading-loose tracking-[0.1em] text-muted-foreground/65 lg:max-w-[80ch] lg:[white-space:nowrap]"
            style={{ animationDelay: `${seq.benefits}ms` }}
          >
            Atendimento personalizado · Projeto exclusivo · Sem templates
          </p>

        </div>


        {/* Scroll indicator */}
        <a
          href="#servicos"
          aria-label="Rolar para baixo"
          className="intro mx-auto mt-12 flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors duration-500 hover:text-brand-soft/80"
          style={{ animationDelay: `${seq.scroll}ms` }}
        >
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border/60 p-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-brand/70 animate-bounce" />
          </span>
        </a>

        {/* Notebook */}
        <div className="relative mt-16 lg:mt-20">
          {/* soft ambient blue glow — lifts the laptop off the dark canvas */}
          <div
            aria-hidden
            className="intro absolute inset-x-0 bottom-[0%] h-[95%] rounded-[40%] bg-[radial-gradient(closest-side,rgba(59,130,246,0.14),transparent_70%)] opacity-80 blur-[60px] [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div
            aria-hidden
            className="intro absolute inset-x-[10%] bottom-[8%] h-[72%] rounded-[45%] bg-[radial-gradient(closest-side,rgba(59,130,246,0.10),transparent_65%)] opacity-70 blur-[42px] [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div
            aria-hidden
            className="intro absolute inset-x-[6%] bottom-[2%] h-[70%] opacity-70 blur-[6px] [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div
            aria-hidden
            className="intro absolute inset-x-[18%] bottom-[10%] h-[55%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)] blur-2xl [animation-delay:900ms] [animation-duration:2.2s]"
          />
          <div className="intro-rise" style={{ animationDelay: `${seq.notebook}ms` }}>
            <div
              ref={deviceRef}
              className="float-slow relative mx-auto max-w-[980px]"
            >

              <picture>
                <source
                  type="image/avif"
                  srcSet={`${nbAvif980} 980w, ${nbAvif1600} 1600w`}
                  sizes="(max-width: 1024px) 92vw, 980px"
                />
                <source
                  type="image/webp"
                  srcSet={`${nbWebp980} 980w, ${nbWebp1600} 1600w`}
                  sizes="(max-width: 1024px) 92vw, 980px"
                />
                <img
                  src={nbWebp1600}
                  width={1600}
                  height={1067}
                  alt="Notebook exibindo uma interface criada pela Talvix Studio"
                  className="w-full select-none brightness-[1.10] contrast-[1.10] drop-shadow-[0_55px_75px_-12px_rgba(0,0,0,0.42)]"
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                />

              </picture>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
          />
        </div>

        <dl className="mx-auto -mt-2 grid max-w-4xl grid-cols-2 gap-y-9 border-t border-border pt-10 sm:grid-cols-4">
          {[
            ["3–6", "Semanas por projeto"],
            ["98+", "Lighthouse na entrega"],
            ["3", "Projetos por vez"],
            ["24h", "Para te responder"],
          ].map(([value, label], i) => (
            <div
              key={label}
              className="intro relative px-4 text-center sm:not-first:before:absolute sm:not-first:before:inset-y-1 sm:not-first:before:left-0 sm:not-first:before:w-px sm:not-first:before:bg-border"
              style={{ animationDelay: `${seq.stats + i * 90}ms` }}
            >
              <dt className="text-[28px] font-semibold leading-none tracking-[-0.035em]">
                {value}
              </dt>
              <dd className="mx-auto mt-3 max-w-[20ch] ds-label [letter-spacing:0.14em]">
                {label}
              </dd>
            </div>
          ))}
        </dl>


      </div>
    </section>
  );
}
