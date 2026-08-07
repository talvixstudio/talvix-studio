import { useEffect, useRef } from "react";
import { CountUp } from "./count-up";
import { CONTACT } from "@/lib/contact";

const nbAvif980 = "/media/hero-notebook-980.avif";
const nbAvif1600 = "/media/hero-notebook-1600.avif";
const nbWebp980 = "/media/hero-notebook-980.webp";
const nbWebp1600 = "/media/hero-notebook-1600.webp";

/** Entrance choreography — Logo → Title → Subtitle → Buttons → Benefits → Notebook → Stats. */
const seq = {
  badge: 100,
  line1: 220,
  line2: 320,
  sub: 480,
  cta: 600,
  benefits: 700,
  notebook: 820,
  scroll: 1020,
  stats: 1260,
};

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const deviceRef = useRef<HTMLDivElement | null>(null);

  /**
   * Desktop:
   * - mantém parallax do glow
   * - mantém tilt 3D do notebook
   * - usa requestAnimationFrame
   *
   * Mobile/tablet:
   * - não registra listeners de scroll/mouse
   * - não executa parallax por JavaScript
   * - preserva as animações CSS de entrada
   *
   * Isso reduz significativamente o trabalho durante o scroll
   * em navegadores móveis e WebViews como o Instagram.
   */
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mobile e usuários que preferem movimento reduzido não precisam
    // dos efeitos interativos de parallax/tilt.
    if (isMobile || reducedMotion) {
      if (glowRef.current) {
        glowRef.current.style.transform = "translate(-50%, 0px)";
      }

      if (deviceRef.current) {
        deviceRef.current.style.transform = "";
      }

      return;
    }

    let scrollFrame = 0;
    let mouseFrame = 0;
    let lastScrollY = -1;

    // Mouse tracking for 3D tilt — desktop only.
    let mouseX = 0;
    let mouseY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;

    const applyScroll = () => {
      scrollFrame = 0;

      const offset = Math.min(window.scrollY, 700);

      if (offset === lastScrollY) return;
      lastScrollY = offset;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(-50%, ${offset * -0.12}px)`;
      }
    };

    const applyMouse = () => {
      mouseFrame = 0;

      if (!deviceRef.current) return;

      // Smooth interpolation (lerp) for the tilt.
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;

      const scrollOffset = Math.min(window.scrollY, 700) * -0.05;

      deviceRef.current.style.transform =
        `perspective(1000px) ` +
        `rotateX(${currentRotateX}deg) ` +
        `rotateY(${currentRotateY}deg) ` +
        `translate3d(0, ${scrollOffset}px, 0)`;

      // Glow follows the mouse subtly on desktop.
      if (glowRef.current) {
        const glowTargetX = mouseX * 40;
        const glowTargetY =
          mouseY * 40 + Math.min(window.scrollY, 700) * -0.12;

        glowRef.current.style.transform =
          `translate(calc(-50% + ${glowTargetX}px), ${glowTargetY}px)`;
      }

      const stillMoving =
        Math.abs(targetRotateX - currentRotateX) > 0.01 ||
        Math.abs(targetRotateY - currentRotateY) > 0.01;

      if (stillMoving) {
        mouseFrame = requestAnimationFrame(applyMouse);
      }
    };

    const onScroll = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(applyScroll);
      }

      // Atualiza o tilt porque a posição relativa muda durante o scroll.
      if (!mouseFrame) {
        mouseFrame = requestAnimationFrame(applyMouse);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      mouseX = e.clientX / innerWidth - 0.5;
      mouseY = e.clientY / innerHeight - 0.5;

      // Máximo de aproximadamente 4 graus em cada direção.
      targetRotateY = mouseX * 8;
      targetRotateX = mouseY * -8;

      if (!mouseFrame) {
        mouseFrame = requestAnimationFrame(applyMouse);
      }
    };

    const onMouseLeave = () => {
      targetRotateX = 0;
      targetRotateY = 0;

      if (!mouseFrame) {
        mouseFrame = requestAnimationFrame(applyMouse);
      }
    };

    applyScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);

      if (scrollFrame) {
        cancelAnimationFrame(scrollFrame);
      }

      if (mouseFrame) {
        cancelAnimationFrame(mouseFrame);
      }
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-titulo"
      className="relative min-h-[900px] overflow-hidden pt-[124px] pb-10 sm:min-h-0 lg:min-h-[1621px] lg:pt-[148px] lg:pb-16 flex flex-col items-center justify-start lg:justify-between"
    >
      {/* Background architecture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="hairline-grid intro absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(70%_55%_at_50%_20%,#000,transparent)] [animation-duration:2.4s]" />

        <div
          ref={glowRef}
          className="brand-glow intro absolute left-1/2 top-[-14%] h-[620px] w-[1100px] -translate-x-1/2 opacity-40 blur-[2px] [animation-delay:200ms] [animation-duration:2.6s] lg:top-[-10%]"
          style={{ transform: "translate(-50%, 0px)" }}
        />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="shell relative flex-1 flex flex-col items-center justify-start lg:justify-between">
        <div className="mx-auto max-w-[60rem] text-center">
          <div
            className="intro-soft lg:h-[38px]"
            style={{ animationDelay: `${seq.badge}ms` }}
          >
            <div className="min-h-[38px] lg:min-h-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 ds-label backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Agenda aberta · 2 vagas
              </span>
            </div>
          </div>

          <h1
            id="hero-titulo"
            className="text-balance-tight mx-auto mt-10 max-w-[15ch] text-[clamp(2.1rem,5.8vw,4.5rem)] font-semibold leading-[0.98] sm:max-w-none lg:max-w-none"
          >
            <span className="block overflow-hidden lg:h-[1.1em] lg:min-h-[1.1em]">
              <span
                className="block intro-lcp"
                style={{ animationDelay: `${seq.line1}ms` }}
              >
                Sites que fazem sua empresa
              </span>
            </span>

            <span className="block overflow-hidden lg:h-[1.1em] lg:min-h-[1.1em]">
              <span
                className="block intro-lcp"
                style={{ animationDelay: `${seq.line2}ms` }}
              >
                parecer do tamanho que{" "}
                <span className="relative inline-block text-brand-soft">
                  ela é
                  <span
                    className="absolute inset-x-0 bottom-[0.1em] h-px origin-left scale-x-0 bg-brand/60 intro"
                    style={{
                      animationDelay: `${seq.line2 + 400}ms`,
                    }}
                  />
                </span>
              </span>
            </span>
          </h1>

          <p
            className="intro mx-auto mt-8 max-w-[46ch] ds-lead min-h-[56px] lg:min-h-0 lg:h-[56px]"
            style={{ animationDelay: `${seq.sub}ms` }}
          >
            Design, estratégia e desenvolvimento para transformar presença
            digital em negócio.
          </p>

          <div
            className="intro mt-12 flex flex-col items-center justify-center gap-3 min-h-[108px] sm:flex-row sm:min-h-[48px] lg:min-h-0 lg:h-[48px]"
            style={{ animationDelay: `${seq.cta}ms` }}
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-premium hover-sheen group ds-btn ds-btn-primary w-full sm:w-auto"
            >
              Solicitar Orçamento
              <span
                aria-hidden
                className="font-mono text-xs opacity-70 transition-transform duration-500 ease-out group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>

            <a
              href="#trabalhos"
              className="btn-premium group ds-btn ds-btn-ghost w-full sm:w-auto"
            >
              Ver Projetos
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground transition-transform duration-500 ease-out group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>

          <p
            className="intro mx-auto mt-8 max-w-[50ch] text-[11px] font-medium uppercase leading-loose tracking-[0.1em] text-muted-foreground/65 min-h-[44px] lg:max-w-[80ch] lg:[white-space:nowrap] lg:min-h-0 lg:h-[44px]"
            style={{ animationDelay: `${seq.benefits}ms` }}
          >
            Atendimento personalizado · Projeto exclusivo · Sem templates
          </p>
        </div>

        {/* Scroll indicator */}
        <a
          href="#servicos"
          aria-label="Rolar para baixo"
          className="intro mx-auto mt-12 flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors duration-500 hover:text-brand-soft/80"
          style={{ animationDelay: `${seq.scroll}ms` }}
        >
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border/60 p-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-brand/70 animate-bounce" />
          </span>
        </a>

        {/* Notebook */}
        <div className="relative pt-16 lg:pt-20 lg:h-[653px]">
          {/* Soft ambient blue glow */}
          <div
            aria-hidden
            className="intro absolute inset-x-0 bottom-[0%] h-[95%] rounded-[40%] bg-[radial-gradient(closest-side,rgba(59,130,246,0.14),transparent_70%)] opacity-80 blur-[60px] [animation-delay:900ms] [animation-duration:2.2s]"
          />

          <div
            aria-hidden
            className="intro absolute inset-x-[10%] bottom-[8%] h-[72%] rounded-[45%] bg-[radial-gradient(closest-side,rgba(59,130,246,0.10),transparent_65%)] opacity-70 blur-[42px] [animation-delay:900ms] [animation-duration:2.2s]"
          />

          <div
            aria-hidden
            className="intro absolute inset-x-[6%] bottom-[2%] h-[70%] opacity-70 blur-[6px] [animation-delay:900ms] [animation-duration:2.2s]"
          />

          <div
            aria-hidden
            className="intro absolute inset-x-[18%] bottom-[10%] h-[55%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)] blur-2xl [animation-delay:900ms] [animation-duration:2.2s]"
          />

          <div
            className="intro-lcp"
            style={{ animationDelay: `${seq.notebook}ms` }}
          >
            <div
              ref={deviceRef}
              className="float-slow relative mx-auto max-w-[980px] aspect-[1600/1067]"
            >
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${nbAvif980} 980w, ${nbAvif1600} 1600w`}
                  sizes="(max-width: 1024px) 92vw, 980px"
                />

                <source
                  type="image/webp"
                  srcSet={`${nbWebp980} 980w, ${nbWebp1600} 1600w`}
                  sizes="(max-width: 1024px) 92vw, 980px"
                />

                <img
                  src={nbWebp1600}
                  width={1600}
                  height={1067}
                  alt="Notebook exibindo uma interface criada pela Talvix Studio"
                  className="w-full h-auto select-none brightness-[1.10] contrast-[1.10] drop-shadow-[0_55px_75px_-12px_rgba(0,0,0,0.42)]"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </picture>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
          />
        </div>

        <dl className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-y-9 border-t border-border pt-10 min-h-[220px] sm:grid-cols-4 lg:min-h-[140px] lg:h-[140px]">
          {[
            ["3–6", "Semanas por projeto"],
            ["98+", "Lighthouse na entrega"],
            ["3", "Projetos por vez"],
            ["24h", "Para te responder"],
          ].map(([value, label], i) => (
            <div
              key={label}
              className="intro relative px-4 text-center sm:not-first:before:absolute sm:not-first:before:inset-y-1 sm:not-first:before:left-0 sm:not-first:before:w-px sm:not-first:before:bg-border"
              style={{
                animationDelay: `${seq.stats + i * 90}ms`,
              }}
            >
              <dt className="text-[28px] font-semibold leading-none tracking-[-0.035em]">
                <CountUp value={value ?? ""} />
              </dt>

              <dd className="mx-auto mt-3 max-w-[20ch] ds-label [letter-spacing:0.14em]">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
