import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Imersão",
    time: "Semana 1",
    body: "Entendemos o negócio, o público e o que a concorrência ainda não resolveu. Saímos com escopo, arquitetura e critérios de sucesso escritos.",
  },
  {
    n: "02",
    title: "Direção",
    time: "Semana 1–2",
    body: "Definimos a linguagem visual: tipografia, paleta, grid, movimento. Uma direção aprovada antes de qualquer tela final.",
  },
  {
    n: "03",
    title: "Design",
    time: "Semana 2–4",
    body: "Telas em alta fidelidade, sistema de componentes e protótipo navegável. Revisões em ciclos curtos, sempre com você dentro.",
  },
  {
    n: "04",
    title: "Construção",
    time: "Semana 4–6",
    body: "Código limpo, acessível e rápido. Entrega com documentação, treinamento e acompanhamento nos primeiros 30 dias.",
  },
];

export function Process() {
  return (
    <section id="metodo" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-brand-soft">
            Método
          </p>
          <h2 className="text-balance-tight mt-5 max-w-2xl text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
            Um processo curto o suficiente para manter o ritmo. Longo o suficiente para
            ficar impecável.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 100}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-brand">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand/60 transition-transform duration-700 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
