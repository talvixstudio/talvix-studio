import { cn } from "@/lib/utils";
import markUrl from "@/assets/talvix-mark.png";

/** Marca oficial da Talvix Studio — aplicada exatamente como fornecida. */
export function TalvixMark({ className }: { className?: string }) {
  return (
    <img
      src={markUrl}
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      draggable={false}
      decoding="async"
      className={cn("h-8 w-8 select-none object-contain", className)}
    />
  );
}

export function TalvixLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <TalvixMark className="h-7 w-7" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-[15px] font-semibold tracking-[-0.03em]">Talvix</span>
        <span className="ds-label tracking-[0.28em]">Studio</span>
      </span>
    </span>
  );
}
