import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const principles = [
  ["Uma equipe só", "Quem desenha é quem constrói. Sem repasse, sem telefone sem fio."],
  ["Escopo por escrito", "Preço e prazo fechados antes da primeira tela. Sem aditivo no meio."],
  ["Nada por acaso", "Cada espaçamento, curva e transição responde a uma decisão anterior."],
  ["Poucos por vez", "No máximo três projetos simultâneos. É o que cabe sem baixar o nível."],
];

/**
 * Depoimentos: estrutura pronta, sem citações inventadas.
 * Substitua os slots abaixo por depoimentos reais assim que autorizados pelo cliente.
 */
type Testimonial = { quote: string; name: string; role: string };
const testimonials: Testimonial[] = [];

export function Studio() {
  return (
    <section
      id="estudio"
      aria-labelledby="estudio-titulo"
      className="section-y relative border-t border-border"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">O estúdio</p>
              <h2
                id="estudio-titulo"
                className="text-balance-tight mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.04]"
              >
                Pequenos por escolha. Exigentes por formação.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-[52ch] ds-body">
                A Talvix nasceu de uma constatação simples: quase toda empresa boa tem um
                site que não faz jus ao que ela entrega. Somos designers e engenheiros que
                trabalham lado a lado — e recusamos volume para conseguir tratar cada
                projeto como produto.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {principles.map(([title, body], i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={200 + i * 100}
                  className="group bg-background px-6 py-6 transition-colors duration-700 ease-out hover:bg-surface"
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-700 ease-out group-hover:scale-[1.8]" />
                  <p className="mt-4 text-[14.5px] font-medium">{title}</p>
                  <p className="mt-1.5 max-w-[34ch] ds-body-sm">
                    {body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={180}>
            <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface/35 p-9 lg:p-11">
              <div
                aria-hidden
                className="brand-glow absolute -left-10 -top-10 h-52 w-52 opacity-25"
              />

              <div className="relative flex items-center justify-between gap-6">
                <p className="eyebrow">O que dizem</p>
                <span className="ds-label">
                  {testimonials.length > 0 ? `${testimonials.length} depoimentos` : "Em curadoria"}
                </span>
              </div>

              {testimonials.length > 0 ? (
                <ul className="relative mt-8 space-y-8">
                  {testimonials.map((t) => (
                    <li key={t.name}>
                      <blockquote className="text-[18px] leading-[1.6] tracking-[-0.015em]">
                        {t.quote}
                      </blockquote>
                      <p className="mt-4 text-[14px] font-medium">{t.name}</p>
                      <p className="mt-0.5 ds-label">
                        {t.role}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="relative mt-8 flex flex-1 flex-col">
                  <p className="max-w-[46ch] ds-body">
                    Preferimos não publicar frase nenhuma a publicar frase escrita por nós.
                    Os depoimentos entram aqui conforme cada cliente autoriza o uso do nome
                    — e sempre com cargo e empresa verificáveis.
                  </p>

                  <ul className="mt-8 space-y-px overflow-hidden rounded-xl border border-dashed border-border/70">
                    {[0, 1].map((i) => (
                      <li
                        key={i}
                        aria-hidden
                        className="flex items-start gap-4 bg-background/40 px-5 py-5"
                      >
                        <Quote
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40"
                          strokeWidth={1.5}
                        />
                        <div className="w-full space-y-2.5">
                          <div className="h-2 w-full rounded-full bg-foreground/6" />
                          <div className="h-2 w-4/5 rounded-full bg-foreground/6" />
                          <div className="h-2 w-1/3 rounded-full bg-foreground/4" />
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 ds-body-sm">
                    Enquanto isso, os números dos estudos de caso acima foram informados
                    pelos próprios clientes e podem ser confirmados em conversa.
                  </p>

                  <a
                    href="#trabalhos"
                    className="mt-6 ds-link w-fit text-brand-soft"
                  >
                    Ver estudos de caso
                    <span aria-hidden className="font-mono text-xs">
                      ↗
                    </span>
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
