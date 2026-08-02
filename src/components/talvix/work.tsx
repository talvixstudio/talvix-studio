import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type CaseStudy = {
  client: string;
  sector: string;
  scope: string;
  year: string;
  headline: string;
  goal: string;
  problem: string;
  solution: string;
  outcome: { value: string; label: string }[];
  stack: string[];
  tone: string;
};

const cases: CaseStudy[] = [
  {
    client: "Meridian Capital",
    stack: ["Next.js", "Sanity CMS", "Vercel", "Cal.com API"],
    sector: "Gestora de patrimônio",
    scope: "Website · Identidade",
    year: "2025",
    headline: "Um site que faz o trabalho do primeiro café.",
    goal:
      "Atrair investidores de ticket alto sem depender de indicação — e qualificar antes da reunião.",
    problem:
      "O site antigo abria com um formulário genérico e três parágrafos sobre a história da empresa. Quem chegava não entendia a tese de investimento nem o valor mínimo de entrada, e o time comercial gastava a primeira reunião explicando o básico.",
    solution:
      "Reescrevemos a página em torno da tese, não da empresa: números auditados acima da dobra, critérios de entrada explícitos e um agendamento que pergunta faixa de patrimônio antes de confirmar o horário.",
    outcome: [
      { value: "+38%", label: "Reuniões qualificadas" },
      { value: "−52%", label: "Contatos fora do perfil" },
    ],
    tone: "from-[oklch(0.28_0.06_258)] to-[oklch(0.17_0.02_260)]",
  },
  {
    client: "Órbita Logística",
    stack: ["React", "TypeScript", "PostgreSQL", "WebSockets", "Storybook"],
    sector: "Transporte rodoviário",
    scope: "Plataforma web · Design system",
    year: "2025",
    headline: "Seis horas por semana devolvidas à operação.",
    goal:
      "Substituir a planilha compartilhada que controlava 340 rotas semanais por uma ferramenta que o time usasse sem treinamento.",
    problem:
      "Cada despachante mantinha a própria versão da planilha. Divergências só apareciam quando o caminhão já estava na estrada, e todo fechamento de mês exigia dois dias de conciliação manual.",
    solution:
      "Desenhamos um painel de rotas em tempo real com estados visuais claros, histórico de alteração por usuário e uma tela de fechamento que reconcilia sozinha. O design system foi entregue para o time interno continuar evoluindo.",
    outcome: [
      { value: "6h", label: "Poupadas por semana" },
      { value: "2 dias → 3h", label: "Fechamento mensal" },
    ],
    tone: "from-[oklch(0.24_0.03_250)] to-[oklch(0.16_0.01_260)]",
  },
  {
    client: "Nuvia Health",
    stack: ["React", "Design tokens", "Figma", "Vitest"],
    sector: "Saúde digital",
    scope: "UI/UX · Design system",
    year: "2024",
    headline: "Onboarding que para de perder gente no meio.",
    goal:
      "Levar mais pacientes do cadastro até a primeira consulta agendada, sem aumentar o time de suporte.",
    problem:
      "O cadastro tinha 14 campos numa única tela, incluindo dados que só faziam sentido depois da consulta. Metade dos usuários abandonava antes de terminar e ligava para o suporte no dia seguinte.",
    solution:
      "Dividimos o fluxo em três passos com progresso visível, adiamos tudo que não era obrigatório para depois do agendamento e reescrevemos cada rótulo em linguagem de paciente, não de prontuário.",
    outcome: [
      { value: "2,4×", label: "Mais rápido até a consulta" },
      { value: "−41%", label: "Chamados de suporte" },
    ],
    tone: "from-[oklch(0.26_0.05_262)] to-[oklch(0.16_0.015_260)]",
  },
  {
    client: "Fero Coffee",
    stack: ["Astro", "Stripe Checkout", "Cloudflare", "Plausible"],
    sector: "Torrefação artesanal",
    scope: "Landing page · Copy",
    year: "2024",
    headline: "Uma página, um produto, nenhuma distração.",
    goal: "Lançar a assinatura mensal de grãos com verba de mídia limitada.",
    problem:
      "A loja completa oferecia 60 SKUs. Quem vinha do anúncio da assinatura caía no catálogo, se perdia entre origens e torras, e saía sem assinar nada.",
    solution:
      "Construímos uma página dedicada que compara apenas três planos, mostra o grão do mês com data de torra real e conclui a assinatura em dois cliques — com checkout na própria página.",
    outcome: [
      { value: "7,1%", label: "Conversão média" },
      { value: "R$ 0", label: "Aumento de verba" },
    ],
    tone: "from-[oklch(0.23_0.02_255)] to-[oklch(0.155_0.01_260)]",
  },
];

/**
 * Each case gets its own abstract read of the interface we shipped —
 * a wealth report, a route board, a three-step onboarding, a plan picker.
 * Drawn with layout primitives so they stay crisp at any size and cost no bytes.
 */
function Motif({ index }: { index: number }) {
  const shell =
    "pointer-events-none absolute inset-x-7 top-7 bottom-[42%] transition-transform duration-[1.4s] ease-out group-hover:-translate-y-1";

  if (index === 0) {
    // Meridian — performance report
    return (
      <div aria-hidden className={shell}>
        <div className="flex h-full items-end gap-1.5">
          {[34, 46, 40, 58, 52, 72, 66, 88].map((h, k) => (
            <span
              key={k}
              style={{ height: `${h * 0.8}%`, transitionDelay: `${k * 45}ms` }}
              className="w-2 origin-bottom rounded-[2px] bg-foreground/20 transition-transform duration-700 ease-out last:bg-brand/70 group-hover:scale-y-105"
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
    // Órbita — live route board
    return (
      <div aria-hidden className={shell}>
        <div className="space-y-2.5">
          {[
            ["68%", "bg-brand/60"],
            ["42%", "bg-foreground/22"],
            ["86%", "bg-foreground/22"],
            ["30%", "bg-foreground/16"],
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

  if (index === 2) {
    // Nuvia — three-step onboarding
    return (
      <div aria-hidden className={shell}>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((k) => (
            <div key={k} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "h-5 w-5 shrink-0 rounded-full border",
                  k === 0
                    ? "border-brand/70 bg-brand/25"
                    : "border-foreground/15 bg-foreground/[0.04]",
                )}
              />
              {k < 2 && <span className="h-px flex-1 bg-foreground/12" />}
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-1.5 w-2/5 rounded-full bg-foreground/12" />
          <div className="h-8 rounded-md border border-foreground/10 bg-foreground/[0.03] transition-colors duration-700 group-hover:border-brand/25" />
        </div>
      </div>
    );
  }

  // Fero — plan picker
  return (
    <div aria-hidden className={shell}>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className={cn(
              "rounded-md border p-2.5 transition-transform duration-700 ease-out",
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
          </div>
        ))}
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
      className="section-y relative border-t border-border"
    >
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">Estudos de caso</p>
            <h2
              id="trabalhos-titulo"
              className="text-balance-tight mt-5 max-w-xl text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]"
            >
              Quatro problemas reais e o que mudou depois.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-[14.5px] leading-relaxed text-muted-foreground">
              Abra qualquer um para ver objetivo, problema, solução e resultado. Números
              informados pelos próprios clientes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cases.map((p, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={p.client} delay={i * 120}>
                <article
                  className={cn(
                    "lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/25",
                    isOpen && "border-brand/30 bg-surface/45",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-gradient-to-br transition-[aspect-ratio] duration-700",
                      p.tone,
                      isOpen ? "aspect-[16/4.5]" : "aspect-[16/7.2]",
                    )}
                  >
                    <div className="hairline-grid absolute inset-0 opacity-60 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.05]" />
                    <div className="brand-glow absolute -right-16 -top-16 h-64 w-64 opacity-0 transition-opacity duration-[1.1s] ease-out group-hover:opacity-55" />

                    {/* abstract interface motif — one per case */}
                    <Motif index={i} />


                    <div className="absolute inset-x-7 bottom-6 flex items-end justify-between gap-6">
                      <p className="text-balance-tight max-w-[22ch] text-[17px] font-medium leading-snug text-foreground/95">
                        {p.headline}
                      </p>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                        {p.year}
                      </span>
                    </div>
                  </div>


                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-5">
                      <div>
                        <h3 className="text-[16px] font-medium tracking-[-0.02em]">
                          {p.client}
                        </h3>
                        <p className="mt-1 max-w-[28ch] text-[13px] leading-relaxed text-muted-foreground">
                          {p.sector} · {p.scope}
                        </p>
                      </div>
                      <ul className="flex shrink-0 gap-7">
                        {p.outcome.map((o) => (
                          <li key={o.label}>
                            <p className="text-[16px] font-semibold tracking-[-0.02em] text-brand-soft">
                              {o.value}
                            </p>
                            <p className="mt-1.5 max-w-[13ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                              {o.label}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>


                    <div
                      id={`caso-${i}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <dl className="space-y-5 border-t border-border pt-6">
                          {[
                            ["Contexto", p.goal],
                            ["Problema", p.problem],
                            ["Solução", p.solution],
                            [
                              "Resultado",
                              p.outcome.map((o) => `${o.value} · ${o.label.toLowerCase()}`).join("  ·  "),
                            ],
                          ].map(([label, body]) => (
                            <div key={label} className="grid gap-1.5 sm:grid-cols-[86px_1fr] sm:gap-4">
                              <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-brand-soft sm:pt-1">
                                {label}
                              </dt>
                              <dd className="max-w-[58ch] text-[14px] leading-[1.65] text-muted-foreground">
                                {body}
                              </dd>
                            </div>
                          ))}
                          <div className="grid gap-2 sm:grid-cols-[86px_1fr] sm:gap-4">
                            <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-brand-soft sm:pt-1.5">
                              Stack
                            </dt>
                            <dd className="flex flex-wrap gap-1.5">
                              {p.stack.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-foreground/60"
                                >
                                  {t}
                                </span>
                              ))}
                            </dd>
                          </div>
                        </dl>
                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`caso-${i}`}
                      className="mt-auto pt-7 inline-flex items-center gap-2 self-start text-[13px] font-medium text-foreground/80 transition-colors duration-500 ease-out hover:text-brand-soft"
                    >
                      {isOpen ? "Fechar caso" : "Ler o caso completo"}
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-500 ease-out",
                          isOpen ? "-rotate-90" : "group-hover:translate-x-1",
                        )}
                        strokeWidth={1.75}
                      />
                    </button>
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
