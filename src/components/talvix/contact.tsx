import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { TalvixLogo } from "./logo";
import { Reveal } from "./reveal";

const nextSteps = [
  ["01", "Você escreve", "Duas linhas sobre o projeto já bastam."],
  ["02", "Respondemos em 24h", "Com perguntas objetivas ou 30 minutos de conversa."],
  ["03", "Proposta por escrito", "Escopo, datas e preço fechado. Sem pegadinha."],
];

/** Canais do estúdio — prontos para atualização quando os perfis mudarem. */
const socials = [
  { label: "GitHub", href: "https://github.com/talvixstudio", icon: Github },
  { label: "Instagram", href: "https://instagram.com/talvixstudio", icon: Instagram },
  { label: "E-mail", href: "mailto:contato@talvix.studio", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/5500000000000", icon: MessageCircle },
];


export function ContactCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="relative overflow-hidden border-t border-border"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
        <div className="brand-glow drift-slow absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      </div>

      <div className="shell relative section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Próximo passo</p>
          </Reveal>
          <Reveal delay={140}>
            <h2
              id="contato-titulo"
              className="text-balance-tight mx-auto mt-6 max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02]"
            >
              Conte o que você quer construir.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-[48ch] ds-lead">
              Sem formulário de dez campos. Você escreve, uma pessoa do estúdio responde.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:contato@talvix.studio?subject=Projeto%20novo"
                className="btn-premium hover-sheen ds-btn ds-btn-primary w-full sm:w-auto"
              >
                contato@talvix.studio
              </a>
              <a
                href="https://wa.me/5500000000000"
                rel="noreferrer noopener"
                target="_blank"
                className="btn-premium ds-btn ds-btn-ghost w-full sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <ol className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-border bg-border text-left sm:grid-cols-3">
            {nextSteps.map(([n, title, body]) => (
              <li key={n} className="bg-background/80 p-7">
                <span className="ds-label text-brand">{n}</span>
                <p className="mt-4 ds-title-xs">{title}</p>
                <p className="mt-1.5 ds-body-sm">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

const footerNav = [
  {
    title: "Estúdio",
    links: [
      ["Serviços", "#servicos"],
      ["Método", "#metodo"],
      ["Estudos de caso", "#trabalhos"],
      ["O estúdio", "#estudio"],
    ],
  },
  {
    title: "Contato",
    links: [
      ["contato@talvix.studio", "mailto:contato@talvix.studio"],
      ["Dúvidas frequentes", "#duvidas"],
      ["Iniciar um projeto", "#contato"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="shell grid gap-12 py-14 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.6fr))] lg:py-16">
        <div>
          <TalvixLogo />
          <p className="mt-5 max-w-[34ch] ds-body-sm">
            Design e engenharia digital para empresas que precisam parecer tão sérias
            quanto são.
          </p>
          <ul className="mt-7 flex flex-wrap items-center gap-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/40 text-muted-foreground transition-colors duration-500 ease-out hover:border-brand/35 hover:bg-brand/10 hover:text-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <s.icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>


        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="ds-label">
              {group.title}
            </p>
            <ul className="mt-5 space-y-3">
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="ds-link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="shell flex flex-col gap-3 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="ds-label">
          © {new Date().getFullYear()} Talvix Studio
        </p>
        <p className="ds-label">
          Desenhado e programado internamente
        </p>
      </div>
    </footer>
  );
}
