import { Compass, Palette, PenSquare, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Imersão",
    time: "Semana 1",
    body: "Entendemos o negócio, o público e o que a concorrência ainda não resolveu. Saímos com escopo, arquitetura e critérios de sucesso escritos.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Direção",
    time: "Semana 1–2",
    body: "Definimos a linguagem visual: tipografia, paleta, grid, movimento. Uma direção aprovada antes de qualquer tela final.",
  },
  {
    n: "03",
    icon: PenSquare,
    title: "Design",
    time: "Semana 2–4",
    body: "Telas em alta fidelidade, sistema de componentes e protótipo navegável. Revisões em ciclos curtos, sempre com você dentro.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Construção",
    time: "Semana 4–6",
    body: "Código limpo, acessível e rápido. Entrega com documentação, treinamento e acompanhamento nos primeiros 30 dias.",
  },
];

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);

  return (
    <section
      id="metodo"
      aria-labelledby="metodo-titulo"
      className="section-y relative border-t border-border"
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Método</p>
          <h2 id="metodo-titulo" className="text-balance-tight mt-5 max-w-2xl text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]">
            Um processo curto o suficiente para manter o ritmo. Longo o suficiente para
            ficar impecável.
          </h2>
        </Reveal>

        <div ref={ref} className="mt-16">
          {/* progress line */}
          <div
            aria-hidden
            className="relative mb-px hidden h-px w-full overflow-hidden bg-border md:block min-h-[1px]"
          >
            <span
              className={cn(
                "absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-brand/20 via-brand to-brand/20 transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                "w-full scale-x-0",
                visible && "scale-x-100",
              )}
            />
          </div>

          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border min-h-[220px] md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                style={{ transitionDelay: `${i * 180}ms` }}
                className={cn(
                  "reveal group relative bg-background p-8 transition-colors",
                  visible && "is-visible",
                  "hover:bg-surface",
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-[1200ms] ease-out",
                      visible
                        ? "border-brand/35 bg-brand/10"
                        : "border-border bg-surface/50",
                    )}
                    style={{ transitionDelay: `${400 + i * 220}ms` }}
                  >
                    <s.icon
                      className={cn(
                        "h-[18px] w-[18px] transition-colors duration-[1200ms] ease-out",
                        visible ? "text-brand-soft" : "text-muted-foreground",
                      )}
                      strokeWidth={1.5}
                      style={{ transitionDelay: `${400 + i * 220}ms` }}
                    />
                  </span>
                  <span className="ds-label">
                    {s.time}
                  </span>
                </div>
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="ds-label text-brand">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-medium tracking-[-0.02em]">{s.title}</h3>
                </div>
                <p className="mt-3 ds-body-sm">
                  {s.body}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand/60 transition-transform duration-[900ms] ease-out group-hover:scale-x-100"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
