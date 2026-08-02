import { Reveal } from "./reveal";

const services = [
  {
    id: "01",
    title: "Websites Premium",
    body: "Sites institucionais construídos como produto: arquitetura de conteúdo, sistema de design próprio e performance medida a cada deploy.",
    meta: ["Design system", "SSR", "CMS"],
  },
  {
    id: "02",
    title: "Landing Pages",
    body: "Páginas de alta conversão com narrativa própria, provas de valor bem posicionadas e testes de mensagem desde a primeira semana.",
    meta: ["Copy", "A/B", "Analytics"],
  },
  {
    id: "03",
    title: "UI/UX Design",
    body: "Fluxos, protótipos e interfaces desenhadas em detalhe — do espaçamento à microinteração — antes de uma linha de código existir.",
    meta: ["Research", "Protótipo", "Handoff"],
  },
  {
    id: "04",
    title: "Identidade Visual",
    body: "Marcas com sistema completo: símbolo, tipografia, paleta, aplicações e regras claras para escalar sem perder consistência.",
    meta: ["Marca", "Guidelines", "Assets"],
  },
  {
    id: "05",
    title: "Aplicações Web",
    body: "Dashboards, portais e plataformas com autenticação, dados em tempo real e uma camada de interface que dá gosto de usar.",
    meta: ["React", "API", "Auth"],
  },
  {
    id: "06",
    title: "Soluções Digitais",
    body: "Automação, integrações e ferramentas internas desenhadas para eliminar trabalho repetitivo da sua operação.",
    meta: ["Integrações", "Automação", "Infra"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-brand-soft">
              O que fazemos
            </p>
            <h2 className="text-balance-tight mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
              Seis disciplinas, uma única obsessão: acabamento.
            </h2>
          </Reveal>
          <Reveal delay={100}>
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
              delay={(i % 3) * 90}
              className="group relative border-b border-border p-8 transition-colors duration-500 hover:bg-surface/70 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(even)]:border-r"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />
              <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted-foreground">
                {s.id}
              </span>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-0.5">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {s.meta.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover:border-brand/30 group-hover:text-foreground/80"
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
