import { TalvixLogo } from "./logo";
import { Reveal } from "./reveal";

export function ContactCta() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
        <div className="brand-glow drift-slow absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-28 text-center lg:px-10 lg:py-36">
        <Reveal>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-brand-soft">
            Próximo passo
          </p>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="text-balance-tight mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02]">
            Conte o que você quer construir. Respondemos em até um dia útil.
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contato@talvix.studio"
              className="btn-premium group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-full bg-brand px-7 text-sm font-medium text-primary-foreground hover:shadow-[0_18px_50px_-18px_var(--brand)] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full" />
              contato@talvix.studio
            </a>
            <a
              href="#servicos"
              className="btn-premium inline-flex h-11 w-full items-center justify-center rounded-full border border-border px-7 text-sm font-medium hover:border-foreground/25 hover:bg-surface sm:w-auto"
            >
              Ver serviços
            </a>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
            Resposta em até 24h · Agenda aberta para dois projetos
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <TalvixLogo />
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Talvix Studio · Design & Engenharia Digital
        </p>
      </div>
    </footer>
  );
}
