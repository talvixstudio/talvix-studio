import { cn } from "@/lib/utils";

/** Talvix Studio mark — geometric "T/V" chevron cut from a rounded square. */
export function TalvixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        rx="11"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <path d="M10 12.5h20" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M20 12.5v7.4M20 19.9 13.6 28.4M20 19.9l6.4 8.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TalvixLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <TalvixMark className="h-7 w-7 text-foreground" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-[15px] font-semibold tracking-[-0.03em]">Talvix</span>
        <span className="ds-label">
          Studio
        </span>
      </span>
    </span>
  );
}
