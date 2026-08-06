import { Reveal } from "./reveal";
import {
  Layers,
  MousePointerClick,
  PenTool,
  Gauge,
  SquareTerminal,
  Search,
  Sparkles,
} from "lucide-react";


const services = [
  {
    id: "01",
    gain: "A página explica o negócio por você.",
    icon: Layers,
    title: "Sites Institucionais",
    body: "Presença digital construída como produto: arquitetura clara, design próprio e acabamento em cada detalhe.",
    meta: ["Design system", "SSR", "CMS"],
  },
  {
    id: "02",
    gain: "Cada visita chega numa página que sabe o que pedir.",
    icon: MousePointerClick,
    title: "Landing Pages",
    body: "Páginas de conversão com narrativa afiada, provas no lugar certo e mensagem testada desde o início.",
    meta: ["Copy", "A/B", "Analytics"],
  },
  {
    id: "03",
    gain: "Menos atrito no fluxo, menos chamado no suporte.",
    icon: PenTool,
    title: "UI/UX Design",
    body: "Fluxos, protótipos e interfaces desenhados no detalhe — antes da primeira linha de código.",
    meta: ["Research", "Protótipo", "Handoff"],
  },
  {
    id: "04",
    gain: "Sua operação sai das planilhas.",
    icon: SquareTerminal,
    title: "Desenvolvimento Web",
    body: "Portais, painéis e aplicações com código limpo, dados em tempo real e interface que dá gosto de usar.",
    meta: ["React", "API", "Auth"],
  },
  {
    id: "05",
    gain: "Site rápido converte mais. Sempre.",
    icon: Gauge,
    title: "Performance",
    body: "Carregamento medido a cada deploy: imagens, fontes e código otimizados para Core Web Vitals no verde.",
    meta: ["Core Web Vitals", "Cache", "Edge"],
  },
  {
    id: "06",
    gain: "Ser encontrado deixa de depender de mídia paga.",
    icon: Search,
    title: "SEO",
    body: "Estrutura técnica, conteúdo e dados estruturados pensados para busca desde o primeiro rascunho.",
    meta: ["Técnico", "Conteúdo", "Schema"],
  },
  {
    id: "07",
    gain: "Sua marca fica reconhecível em qualquer tela.",
    icon: Sparkles,
    title: "Branding Digital",
    body: "Marca aplicada ao digital: tipografia, cor, tom de voz e um sistema que mantém tudo coerente.",
    meta: ["Identidade", "Tom de voz", "Guidelines"],
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
            <p className="max-w-lg ds-body-sm lg:pt-16">
              Nada de pacote pronto. Cada projeto é exclusivo, feito sob medida e
              conduzido pela mesma equipe do início ao fim.
            </p>
          </Reveal>

        </div>

        <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 110}
              className={cn(
                "group relative border-b border-border p-8 transition-colors duration-700 ease-out hover:bg-surface/70 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(even)]:border-r",
                i === services.length - 1 && "sm:col-span-2 sm:border-r-0 lg:col-span-3 lg:border-r-0",
              )}
            >

              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-transparent transition-transform duration-[900ms] ease-out group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 transition-all duration-700 ease-out group-hover:-translate-y-0.5 group-hover:border-brand/35 group-hover:bg-brand/10">
                  <s.icon
                    className="h-[18px] w-[18px] text-muted-foreground transition-colors duration-700 ease-out group-hover:text-brand-soft"
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
              <p className="mt-3 ds-body-sm">
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
                    className="ds-pill transition-colors duration-700 ease-out group-hover:border-brand/30 group-hover:text-foreground/80"
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
