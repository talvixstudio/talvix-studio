import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type CaseStudy = {
  client: string;
  sector: string;
  scope: string;
  year: string;
  status: "entregue" | "em-andamento";
  statusLabel: string;
  /** Rótulo do botão principal do card. */
  cta: string;
  headline: string;
  /** Descrição curta exibida no showcase. */
  summary: string;
  context: string;
  goal: string;
  challenge: string;
  solution: string;
  /** Só existe quando o projeto está no ar e o número é verificável. */
  outcome: { value: string; label: string }[];
  /** Substitui a régua de resultado enquanto o projeto não foi entregue. */
  pending?: string;
  stack: string[];
  tone: string;
};

const cases: CaseStudy[] = [
  {
    client: "Talvix Studio",
    sector: "Estúdio de design e engenharia",
    scope: "Marca · Site · Design system",
    year: "2026",
    status: "entregue",
    statusLabel: "Concluído",
    cta: "Ver projeto",
    headline: "O primeiro cliente do estúdio foi o próprio estúdio.",
    summary:
      "Identidade, texto e código feitos do zero. O site é o nosso portfólio e a prova do padrão que entregamos.",
    context:
      "Antes de vender site premium, precisávamos provar o padrão em casa — sem tema comprado, sem biblioteca pronta.",
    goal: "Um site que funcione como portfólio, cartão de visita técnico e demonstração viva do nosso trabalho.",
    challenge:
      "Sem histórico para exibir, cada detalhe de tipografia, motion e performance vira argumento comercial.",
    solution:
      "Design system em tokens OKLCH, imagem principal em AVIF com preload e motion que respeita preferências de acessibilidade.",
    outcome: [
      { value: "AVIF", label: "LCP com preload" },
      { value: "0 dep.", label: "De UI kit externo" },
    ],
    stack: ["TanStack Start", "React 19", "Tailwind v4", "Vite", "Cloudflare"],
    tone: "from-[oklch(0.28_0.06_258)] to-[oklch(0.17_0.02_260)]",
  },
  {
    client: "Saycell",
    sector: "Conectividade móvel",
    scope: "Produto digital · UI/UX",
    year: "2026",
    status: "em-andamento",
    statusLabel: "Em desenvolvimento",
    cta: "Acompanhar evolução",
    headline: "Contratar conectividade em minutos, não em atendimento.",
    summary:
      "Em construção: jornada de autosserviço e design system próprio para o produto crescer sem retrabalho.",
    context: "Projeto em curso. A operação existe; o produto digital está sendo desenhado agora.",
    goal: "Transformar um processo hoje humano em uma jornada que o cliente conclui sozinho.",
    challenge:
      "Planos, cobertura e regras de ativação são difíceis de explicar. A tela precisa responder antes da pergunta.",
    solution:
      "Jornada mapeada ponta a ponta, decisão reduzida a poucas escolhas comparáveis e design system próprio do produto.",
    outcome: [],
    pending: "Resultados entram aqui após o lançamento — com números do cliente, não estimativas.",
    stack: ["React", "TypeScript", "Design tokens", "Figma"],
    tone: "from-[oklch(0.24_0.03_250)] to-[oklch(0.16_0.01_260)]",
  },
];


/**
 * Cada case recebe uma leitura abstrata da interface correspondente —
 * feita com primitivas de layout para ficar nítida em qualquer tamanho
 * e não custar nenhum byte de imagem.
 */
function Motif({ index }: { index: number }) {
  const shell =
    "pointer-events-none absolute inset-x-[8%] top-[14%] bottom-[34%] transition-transform duration-[1.4s] ease-out group-hover:-translate-y-1";

  if (index === 0) {
    // Talvix — sistema de tokens e ritmo tipográfico
    return (
      <div aria-hidden className={shell}>
        <div className="flex h-full items-end gap-1.5 sm:gap-2">
          {[34, 46, 40, 58, 52, 72, 66, 88].map((h, k) => (
            <span
              key={k}
              style={{ height: `${h * 0.8}%`, transitionDelay: `${k * 45}ms` }}
              className="w-2 origin-bottom rounded-[2px] bg-foreground/20 transition-transform duration-700 ease-out last:bg-brand/70 group-hover:scale-y-105 sm:w-2.5"
            />
          ))}
          <div className="ml-auto space-y-1.5 self-start text-right">
            <div className="ml-auto h-1.5 w-16 rounded-full bg-foreground/20" />
            <div className="ml-auto h-1.5 w-9 rounded-full bg-brand/55" />
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    // Saycell — seleção de plano em autosserviço
    return (
      <div aria-hidden className={shell}>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[0, 1, 2].map((k) => (
            <div
              key={k}
              className={cn(
                "rounded-md border p-2.5 transition-transform duration-700 ease-out sm:p-3.5",
                k === 1
                  ? "border-brand/45 bg-brand/[0.07] group-hover:-translate-y-1"
                  : "border-foreground/10 bg-foreground/[0.03]",
              )}
            >
              <div className="h-1.5 w-2/3 rounded-full bg-foreground/14" />
              <div
                className={cn(
                  "mt-2 h-1.5 w-1/3 rounded-full",
                  k === 1 ? "bg-brand/70" : "bg-foreground/10",
                )}
              />
              <div className="mt-4 h-1 w-full rounded-full bg-foreground/8" />
              <div className="mt-2 h-1 w-4/5 rounded-full bg-foreground/8" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Leste — consulta de cobertura
  return (
    <div aria-hidden className={shell}>
      <div className="flex items-center gap-2">
        <div className="h-8 flex-1 rounded-md border border-foreground/10 bg-foreground/[0.03] transition-colors duration-700 group-hover:border-brand/25" />
        <div className="h-8 w-16 rounded-md border border-brand/45 bg-brand/[0.09]" />
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["72%", "bg-brand/60"],
          ["48%", "bg-foreground/22"],
          ["60%", "bg-foreground/16"],
        ].map(([w, tint], k) => (
          <div key={k} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
            <span
              style={{ width: w, transitionDelay: `${k * 70}ms` }}
              className={cn(
                "h-1.5 origin-left rounded-full transition-transform duration-[900ms] ease-out group-hover:scale-x-[1.04]",
                tint,
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Moldura de mockup: janela com barra de título e reflexo suave. */
function Mockup({ index, tone }: { index: number; tone: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/40 shadow-[0_30px_70px_-45px_oklch(0_0_0/0.95)]">
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-gradient-to-br transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]",
          tone,
        )}
      >
        <div className="hairline-grid absolute inset-0 opacity-60" />
        <div className="brand-glow absolute -right-16 -top-16 h-64 w-64 opacity-0 transition-opacity duration-[1.1s] ease-out group-hover:opacity-55" />

        <div className="absolute inset-x-0 top-0 flex h-9 items-center gap-1.5 border-b border-foreground/8 px-4">
          {[0, 1, 2].map((k) => (
            <span key={k} className="h-1.5 w-1.5 rounded-full bg-foreground/18" />
          ))}
          <span className="ml-3 h-1.5 w-24 rounded-full bg-foreground/10" />
        </div>

        <Motif index={index} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/45 to-transparent" />
      </div>
    </div>
  );
}

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="trabalhos"
      aria-labelledby="trabalhos-titulo"
      className="cv-auto section-y relative border-t border-border"
    >
      {/* profundidade sutil apenas nesta seção */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/35 via-transparent to-surface/25"
      />

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">Portfólio</p>
            <h2
              id="trabalhos-titulo"
              className="text-balance-tight mt-5 max-w-2xl text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]"
            >
              Menos promessa. Mais projeto no ar.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs ds-body-sm">
              O processo acima só vale pelo que ele produz. Abaixo, o que já saiu dele — e o
              que está sendo construído agora, sem maquiagem.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6 md:space-y-8">
          {cases.map((p, i) => {
            const isOpen = openIndex === i;
            const inProgress = p.status === "em-andamento";
            return (
              <Reveal key={p.client} delay={i * 120}>
                <article
                  className={cn(
                    "lift group relative overflow-hidden rounded-2xl border border-border bg-surface/25 p-5 sm:p-7 lg:p-9",
                    isOpen && "border-brand/30 bg-surface/45",
                  )}
                >
                  <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
                    <div className={cn(i % 2 === 1 && "lg:order-2")}>
                      <Mockup index={i} tone={p.tone} />
                    </div>

                    <div className={cn("min-w-0", i % 2 === 1 && "lg:order-1")}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="ds-label text-brand-soft">{p.scope}</span>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 ds-pill",
                            inProgress ? "text-foreground/55" : "text-brand-soft",
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              inProgress ? "bg-foreground/35" : "bg-brand",
                            )}
                          />
                          {p.statusLabel}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                        {p.client}
                      </h3>
                      <p className="mt-2 ds-body-sm">
                        {p.sector} · {p.year}
                      </p>

                      <p className="text-balance-tight mt-5 max-w-[46ch] text-[15.5px] leading-relaxed text-foreground/80">
                        {p.summary}
                      </p>

                      {p.outcome.length > 0 && (
                        <ul className="mt-7 flex gap-9 border-t border-border pt-6">
                          {p.outcome.map((o) => (
                            <li key={o.label}>
                              <p className="text-[16px] font-semibold tracking-[-0.02em] text-brand-soft">
                                {o.value}
                              </p>
                              <p className="mt-1.5 max-w-[13ch] ds-label">{o.label}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={`caso-${i}`}
                          className={cn(
                            "ds-btn ds-btn-sm btn-premium",
                            inProgress ? "ds-btn-ghost" : "ds-btn-primary",
                          )}
                        >
                          {isOpen ? "Fechar caso" : p.cta}
                          <ArrowRight
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-500 ease-out",
                              isOpen ? "-rotate-90" : "group-hover:translate-x-1",
                            )}
                            strokeWidth={1.75}
                          />
                        </button>

                        <p className="ds-label">{p.headline}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    id={`caso-${i}`}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "mt-9 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <dl className="space-y-5 border-t border-border pt-7">
                        {[
                          ["Contexto", p.context],
                          ["Objetivo", p.goal],
                          ["Desafio", p.challenge],
                          ["Solução", p.solution],
                          [
                            "Resultado",
                            p.outcome.length
                              ? p.outcome
                                  .map((o) => `${o.value} · ${o.label.toLowerCase()}`)
                                  .join("  ·  ")
                              : (p.pending ?? "Ainda em desenvolvimento."),
                          ],
                        ].map(([label, body]) => (
                          <div
                            key={label}
                            className="grid gap-1.5 sm:grid-cols-[86px_1fr] sm:gap-4"
                          >
                            <dt className="ds-label text-brand-soft sm:pt-1">{label}</dt>
                            <dd className="max-w-[70ch] ds-body-sm">{body}</dd>
                          </div>
                        ))}
                        <div className="grid gap-2 sm:grid-cols-[86px_1fr] sm:gap-4">
                          <dt className="ds-label text-brand-soft sm:pt-1.5">Stack</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {p.stack.map((t) => (
                              <span key={t} className="ds-pill text-foreground/60">
                                {t}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
