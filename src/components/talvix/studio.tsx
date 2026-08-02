import { Reveal } from "./reveal";

const principles = [
  ["Uma equipe só", "Quem desenha é quem constrói. Sem repasses, sem ruído."],
  ["Escopo honesto", "Prazo e preço fechados antes de começar. Sem surpresa no meio."],
  ["Detalhe medido", "Cada espaçamento, curva e transição é decisão, não acaso."],
];

export function Studio() {
  return (
    <section id="estudio" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Reveal>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-brand-soft">
                O estúdio
              </p>
              <h2 className="text-balance-tight mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
                Pequenos por escolha. Exigentes por formação.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
                A Talvix Studio nasceu de uma inconformidade simples: quase toda empresa
                boa tem um site que não faz jus ao que ela entrega. Trabalhamos com poucos
                clientes por vez para que cada projeto receba a atenção de um produto — não
                de uma entrega.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <ul className="mt-10 space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {principles.map(([title, body]) => (
                  <li
                    key={title}
                    className="group bg-background px-6 py-5 transition-colors duration-500 hover:bg-surface"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand transition-transform duration-500 group-hover:scale-150" />
                      <div>
                        <p className="text-[14.5px] font-medium">{title}</p>
                        <p className="mt-1 text-[13.5px] text-muted-foreground">{body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <figure className="relative h-full rounded-2xl border border-border bg-surface/40 p-9 lg:p-12">
              <div
                aria-hidden
                className="brand-glow absolute -left-10 -top-10 h-52 w-52 opacity-25"
              />
              <span className="font-mono text-4xl leading-none text-brand/60">“</span>
              <blockquote className="mt-6 text-[19px] leading-[1.55] tracking-[-0.015em]">
                Entregaram em cinco semanas algo que duas agências não conseguiram em seis
                meses. O mais impressionante não é o visual — é o quanto tudo faz sentido
                quando você usa.
              </blockquote>
              <figcaption className="mt-8 rule-top pt-6">
                <p className="text-[14px] font-medium">Helena Braga</p>
                <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                  Diretora de Marketing · Meridian Capital
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
