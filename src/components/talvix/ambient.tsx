const particles = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 97}%`,
  top: `${(i * 61) % 92}%`,
  duration: `${16 + ((i * 5) % 14)}s`,
  delay: `${(i * 1.7) % 12}s`,
  size: i % 4 === 0 ? 2 : 1,
}));

/**
 * Fixed ambient layer: two very soft brand lights that drift, a whisper of
 * vertical hairlines and a handful of slow dust particles. Never competes
 * with content — everything sits below 8% luminance contribution.
 */
export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="brand-glow drift-slow absolute -left-[15%] top-[8%] h-[560px] w-[720px] opacity-[0.14] blur-[40px]" />
      <div
        className="brand-glow drift-slow absolute -right-[18%] top-[52%] h-[520px] w-[680px] opacity-[0.1] blur-[50px]"
        style={{ animationDelay: "-9s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--hairline)_1px,transparent_1px)] bg-[length:176px_100%] opacity-[0.35] [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_82%,transparent)]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-foreground/40"
          style={{
            left: p.left,
            top: p.top,
            height: p.size,
            width: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
