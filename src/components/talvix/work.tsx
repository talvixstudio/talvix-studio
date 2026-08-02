import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const projects = [
  {
    client: "Meridian Capital",
    scope: "Website · Identidade",
    year: "2025",
    result: "+38% em reuniões qualificadas",
    tone: "from-[oklch(0.28_0.06_258)] to-[oklch(0.17_0.02_260)]",
  },
  {
    client: "Órbita Logística",
    scope: "Plataforma Web",
    year: "2025",
    result: "6h/semana devolvidas à operação",
    tone: "from-[oklch(0.24_0.03_250)] to-[oklch(0.16_0.01_260)]",
  },
  {
    client: "Nuvia Health",
    scope: "UI/UX · Design System",
    year: "2024",
    result: "Onboarding 2,4× mais rápido",
    tone: "from-[oklch(0.26_0.05_262)] to-[oklch(0.16_0.015_260)]",
  },
  {
    client: "Fero Studio Coffee",
    scope: "Landing Page",
    year: "2024",
    result: "7,1% de conversão média",
    tone: "from-[oklch(0.23_0.02_255)] to-[oklch(0.155_0.01_260)]",
  },
];

export function Work() {
  return (
    <section id="trabalhos" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-brand-soft">
              Seleção
            </p>
            <h2 className="text-balance-tight mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
              Trabalhos recentes
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-[14.5px] leading-relaxed text-muted-foreground">
              Quatro projetos que resumem bem como pensamos. Portfólio completo sob
              solicitação.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={i * 130}>
              <article className="lift group relative overflow-hidden rounded-2xl border border-border">
                <div
                  className={`relative aspect-[16/10] bg-gradient-to-br ${p.tone} overflow-hidden`}
                >
                  <div className="hairline-grid absolute inset-0 opacity-60 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.06]" />
                  <div className="brand-glow absolute -right-16 -top-16 h-64 w-64 opacity-0 transition-opacity duration-[1.1s] ease-out group-hover:opacity-60" />
                  <div className="absolute inset-x-8 bottom-8 space-y-3 transition-transform duration-[1.1s] ease-out group-hover:-translate-y-1.5">
                    <div className="h-1.5 w-16 rounded-full bg-brand/70" />
                    <div className="h-2 w-2/3 rounded-full bg-foreground/12" />
                    <div className="h-2 w-1/3 rounded-full bg-foreground/8" />
                  </div>

                  {/* elegant overlay */}
                  <div className="absolute inset-0 bg-background/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-[900ms] ease-out group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="btn-premium inline-flex translate-y-2 items-center gap-2 rounded-full border border-brand/40 bg-background/70 px-5 py-2 text-[13px] font-medium opacity-0 transition-all duration-[900ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      Ver projeto
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand-soft" strokeWidth={1.75} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 p-6">
                  <div>
                    <h3 className="text-[15.5px] font-medium tracking-[-0.02em]">
                      {p.client}
                    </h3>
                    <p className="mt-1 text-[13px] text-muted-foreground">{p.scope}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] text-foreground/85">{p.result}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.year}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
