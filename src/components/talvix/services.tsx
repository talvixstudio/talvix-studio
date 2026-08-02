import { Reveal } from "./reveal";
import {
  Layers,
  MousePointerClick,
  PenTool,
  Sparkles,
  SquareTerminal,
  Workflow,
} from "lucide-react";

const services = [
  {
    id: "01",
    gain: "Você deixa de explicar o que a empresa faz — a página explica.",
    icon: Layers,
    title: "Websites Premium",
    body: "Sites institucionais construídos como produto: arquitetura de conteúdo, sistema de design próprio e performance medida a cada deploy.",
    meta: ["Design system", "SSR", "CMS"],
  },
  {
    id: "02",
    gain: "Cada real de mídia chega numa página que sabe o que pedir.",
    icon: MousePointerClick,
    title: "Landing Pages",
    body: "Páginas de alta conversão com narrativa própria, provas de valor bem posicionadas e testes de mensagem desde a primeira semana.",
    meta: ["Copy", "A/B", "Analytics"],
  },
  {
    id: "03",
    gain: "Menos abandono no meio do fluxo, menos chamado no suporte.",
    icon: PenTool,
    title: "UI/UX Design",
    body: "Fluxos, protótipos e interfaces desenhadas em detalhe — do espaçamento à microinteração — antes de uma linha de código existir.",
    meta: ["Research", "Protótipo", "Handoff"],
  },
  {
    id: "04",
    gain: "A marca continua reconhecível quando outra pessoa aplica.",
    icon: Sparkles,
    title: "Identidade Visual",
    body: "Marcas com sistema completo: símbolo, tipografia, paleta, aplicações e regras claras para escalar sem perder consistência.",
    meta: ["Marca", "Guidelines", "Assets"],
  },
  {
    id: "05",
    gain: "Sua operação para de viver dentro de planilhas compartilhadas.",
    icon: SquareTerminal,
    title: "Aplicações Web",
    body: "Dashboards, portais e plataformas com autenticação, dados em tempo real e uma camada de interface que dá gosto de usar.",
    meta: ["React", "API", "Auth"],
  },
  {
    id: "06",
    gain: "Horas repetitivas saem da agenda do time e não voltam.",
    icon: Workflow,
    title: "Soluções Digitais",
    body: "Automação, integrações e ferramentas internas desenhadas para eliminar trabalho repetitivo da sua operação.",
    meta: ["Integrações", "Automação", "Infra"],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="section-y relative border-t border-border"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">O que fazemos</p>
            <h2 id="servicos-titulo" className="text-balance-tight mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
              Seis disciplinas, uma única obsessão: acabamento.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-lg text-[15.5px] leading-relaxed text-muted-foreground lg:pt-16">
              Não trabalhamos com pacotes fechados. Cada projeto começa por entender o
              negócio, definir o que precisa ser verdade na tela e só então construir — com
              a mesma equipe do início ao fim.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 110}
              className="group relative border-b border-border p-8 transition-colors duration-700 ease-out hover:bg-surface/70 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(even)]:border-r"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-transparent transition-transform duration-[900ms] ease-out group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 transition-all duration-700 ease-out group-hover:-translate-y-0.5 group-hover:border-brand/35 group-hover:bg-brand/10">
                  <s.icon
                    className="h-[17px] w-[17px] text-muted-foreground transition-colors duration-700 ease-out group-hover:text-brand-soft"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="ds-label transition-colors duration-700 group-hover:text-foreground/60">
                  {s.id}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-medium tracking-[-0.02em] transition-transform duration-700 ease-out group-hover:translate-x-0.5">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <p className="mt-4 flex items-start gap-2 text-[13.5px] leading-relaxed text-foreground/70">
                <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-brand/70" />
                {s.gain}
              </p>
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {s.meta.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-border px-2.5 py-1 ds-label transition-colors duration-700 ease-out group-hover:border-brand/30 group-hover:text-foreground/80"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
