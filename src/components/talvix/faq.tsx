import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    q: "Quanto custa um projeto e como o orçamento é fechado?",
    a: "Trabalhamos com preço fechado por escopo, nunca por hora. Uma landing page bem construída começa em torno de R$ 9 mil; um site institucional com sistema de design fica entre R$ 18 mil e R$ 45 mil; plataformas web são orçadas depois da imersão. O valor sai por escrito antes de qualquer contrato, com entregáveis e datas listados item a item.",
  },
  {
    q: "Em quanto tempo o site fica no ar?",
    a: "Entre 3 e 6 semanas na maioria dos casos, contados a partir da reunião de imersão. O que costuma alongar prazo não é o design: é conteúdo pendente do lado do cliente. Por isso definimos, na semana 1, quem entrega cada texto, foto e acesso — e em que data.",
  },
  {
    q: "Vocês escrevem os textos ou eu preciso enviar?",
    a: "Escrevemos. A estrutura de conteúdo faz parte do projeto: definimos o argumento de cada seção, escrevemos uma primeira versão e ajustamos com você. Se a sua empresa já tem um time de conteúdo, entramos como revisão editorial em vez de autoria.",
  },
  {
    q: "Depois da entrega, consigo editar sozinho?",
    a: "Sim. Textos, imagens, posts e páginas ficam num painel de conteúdo, e você recebe uma gravação de treinamento junto com a documentação. Mudanças estruturais — nova seção, novo tipo de página — passam por nós para o sistema não se desfazer com o tempo.",
  },
  {
    q: "O que acontece nos 30 dias seguintes ao lançamento?",
    a: "Acompanhamos. Corrigimos qualquer defeito sem custo, monitoramos performance real de carregamento e ajustamos pontos de atrito que só aparecem com tráfego de verdade. Depois disso, você pode seguir sozinho ou contratar manutenção mensal.",
  },
  {
    q: "Vocês trabalham com empresas fora do Brasil?",
    a: "Sim, em português, inglês ou espanhol, com reuniões assíncronas quando o fuso não ajuda. Contratos internacionais são faturados em dólar ou euro.",
  },
  {
    q: "Meu site atual é ruim, mas tem tráfego. Perco posicionamento?",
    a: "Não, se a migração for feita direito — e é parte do escopo. Mapeamos as URLs existentes, aplicamos redirecionamentos 301, preservamos títulos e descrições que já ranqueiam e comparamos os números 30 dias depois do lançamento.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="section-y relative border-t border-border"
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
                Respondidas aqui para você não precisar perguntar. Se ficou algo de fora,
                escreva — respondemos com o mesmo nível de detalhe.
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
