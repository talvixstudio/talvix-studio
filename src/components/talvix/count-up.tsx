import { useEffect, useRef, useState } from "react";

/**
 * Anima o valor numérico de um contador apenas quando ele entra na tela.
 * Preserva o texto original (prefixos/sufixos como "98+", "3–6", "24h")
 * animando somente o primeiro número encontrado.
 */
export function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const match = value.match(/\d+/);
  const target = match ? Number(match[0]) : null;
  const [display, setDisplay] = useState(value);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || target === null) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Start with 0 for the animation
    if (!hasStarted) {
      setDisplay(value.replace(/\d+/, "0"));
    }

    let raf = 0;
    const run = () => {
      setHasStarted(true);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(value.replace(/\d+/, String(Math.round(target * eased))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, target, duration]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
