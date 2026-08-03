import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    q: "Quanto custa um projeto e como o orçamento é fechado?",
    a: "Preço fechado por escopo, nunca por hora. Landing page a partir de R$ 9 mil; site institucional com design system entre R$ 18 mil e R$ 45 mil; plataformas web após a imersão. Tudo por escrito antes do contrato.",
  },
  {
    q: "Em quanto tempo o site fica no ar?",
    a: "De 3 a 6 semanas a partir da imersão. O que costuma atrasar não é o design, é o conteúdo — por isso definimos na semana 1 quem entrega o quê e quando.",
  },
  {
    q: "Vocês escrevem os textos ou eu preciso enviar?",
    a: "Escrevemos. Definimos o argumento de cada seção, entregamos uma primeira versão e ajustamos com você. Se já existe time de conteúdo, entramos como revisão editorial.",
  },
  {
    q: "Depois da entrega, consigo editar sozinho?",
    a: "Sim. Textos, imagens e páginas ficam num painel simples, com treinamento gravado e documentação. Mudanças estruturais passam por nós para o sistema seguir consistente.",
  },
  {
    q: "O que acontece nos 30 dias seguintes ao lançamento?",
    a: "Acompanhamos: correção de defeitos sem custo, monitoramento de performance real e ajuste dos atritos que só aparecem com tráfego. Depois, você segue sozinho ou contrata manutenção.",
  },
  {
    q: "Vocês trabalham com empresas fora do Brasil?",
    a: "Sim — em português, inglês ou espanhol, com reuniões assíncronas quando o fuso não ajuda. Contratos internacionais em dólar ou euro.",
  },
  {
    q: "Meu site atual é ruim, mas tem tráfego. Perco posicionamento?",
    a: "Não. A migração faz parte do escopo: mapeamento de URLs, redirecionamentos 301, preservação do que já ranqueia e comparação dos números 30 dias depois.",
  },
];


export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="cv-auto section-y relative border-t border-border"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">Antes de falar com a gente</p>
              <h2
                id="duvidas-titulo"
                className="text-balance-tight mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.06]"
              >
                As perguntas que todo cliente faz na primeira reunião.
              </h2>
              <p className="mt-6 max-w-sm ds-body-sm">
                Respondidas aqui para você não precisar perguntar. Ficou algo de fora?
                Escreva — respondemos no mesmo nível de detalhe.
              </p>

            </Reveal>
          </div>

          <Reveal delay={120}>
            <ul className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span
                          className={cn(
                            "text-[15.5px] font-medium leading-snug transition-colors duration-500 ease-out",
                            isOpen ? "text-foreground" : "text-foreground/85 group-hover:text-foreground",
                          )}
                        >
                          {f.q}
                        </span>
                        <span
                          aria-hidden
                          className={cn(
                            "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out",
                            isOpen
                              ? "border-brand/40 bg-brand/10 text-brand-soft"
                              : "border-border text-muted-foreground group-hover:border-foreground/25",
                          )}
                        >
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.75} />
                          ) : (
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
                          )}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[62ch] pb-7 pr-12 ds-body-sm">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
