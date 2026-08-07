import type React from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "h2";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
