import { useEffect, useState } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const principles = [
  ["Uma equipe só", "Quem desenha é quem constrói. Sem repasses, sem ruído."],
  ["Escopo honesto", "Prazo e preço fechados antes de começar. Sem surpresa no meio."],
  ["Detalhe medido", "Cada espaçamento, curva e transição é decisão, não acaso."],
];

const testimonials = [
  {
    quote:
      "Entregaram em cinco semanas algo que duas agências não conseguiram em seis meses. O mais impressionante não é o visual — é o quanto tudo faz sentido quando você usa.",
    name: "Helena Braga",
    role: "Diretora de Marketing · Meridian Capital",
  },
  {
    quote:
      "A plataforma deixou de ser um custo operacional e virou argumento de venda. Nossa equipe abre o painel todo dia sem reclamar uma única vez.",
    name: "Rafael Nunes",
    role: "COO · Órbita Logística",
  },
  {
    quote:
      "Trabalham no nível de detalhe que a gente só via em produto americano. Cada revisão veio com um porquê — nunca com uma opinião solta.",
    name: "Camila Duarte",
    role: "Head de Produto · Nuvia Health",
  },
];

export function Studio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

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
            <Reveal delay={140}>
              <p className="mt-7 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground">
                A Talvix Studio nasceu de uma inconformidade simples: quase toda empresa
                boa tem um site que não faz jus ao que ela entrega. Trabalhamos com poucos
                clientes por vez para que cada projeto receba a atenção de um produto — não
                de uma entrega.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-px overflow-hidden rounded-xl border border-border bg-border">
              {principles.map(([title, body], i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={220 + i * 120}
                  className="group bg-background px-6 py-5 transition-colors duration-700 ease-out hover:bg-surface"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand transition-transform duration-700 ease-out group-hover:scale-[1.9]" />
                    <div>
                      <p className="text-[14.5px] font-medium">{title}</p>
                      <p className="mt-1 text-[13.5px] text-muted-foreground">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={180}>
            <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-9 lg:p-12">
              <div
                aria-hidden
                className="brand-glow absolute -left-10 -top-10 h-52 w-52 opacity-25"
              />
              <span className="font-mono text-4xl leading-none text-brand/60">“</span>

              <div className="relative mt-6 min-h-[190px] flex-1">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    aria-hidden={i !== index}
                    className={cn(
                      "absolute inset-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      i === index
                        ? "translate-y-0 opacity-100 blur-0"
                        : "pointer-events-none translate-y-3 opacity-0 blur-[3px]",
                    )}
                  >
                    <blockquote className="text-[19px] leading-[1.55] tracking-[-0.015em]">
                      {t.quote}
                    </blockquote>
                  </div>
                ))}
              </div>

              <figcaption className="rule-top mt-8 pt-6">
                <div className="relative h-[38px]">
                  {testimonials.map((t, i) => (
                    <div
                      key={t.name}
                      className={cn(
                        "absolute inset-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        i === index
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0",
                      )}
                    >
                      <p className="text-[14px] font-medium">{t.name}</p>
                      <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ver depoimento de ${t.name}`}
                      className="group py-2"
                    >
                      <span
                        className={cn(
                          "block h-px w-9 transition-all duration-700 ease-out",
                          i === index
                            ? "bg-brand"
                            : "bg-border group-hover:bg-foreground/35",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
