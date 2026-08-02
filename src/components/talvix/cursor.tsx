import { useEffect, useRef, useState } from "react";

/**
 * Premium pointer: a small brand dot that follows exactly, plus a soft ring
 * that eases behind it and widens discreetly over interactive elements.
 * Desktop / fine-pointer only. Never shown on touch or reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let scale = 1;
    let target = 1;
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const el = e.target as HTMLElement | null;
      target = el?.closest("a,button,[data-cursor]") ? 2.1 : 1;
      idleFrames = 0;
      start();
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    let idleFrames = 0;

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      scale += (target - scale) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0) scale(${scale.toFixed(3)})`;
        ringRef.current.style.opacity = visible ? String(0.55 - (scale - 1) * 0.16) : "0";
      }
      // Stop the loop once the ring has settled; pointermove wakes it again.
      const settled =
        Math.abs(x - rx) < 0.1 && Math.abs(y - ry) < 0.1 && Math.abs(target - scale) < 0.002;
      idleFrames = settled ? idleFrames + 1 : 0;
      if (idleFrames > 6) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none">
      <div
        ref={ringRef}
        className="talvix-cursor-dot h-8 w-8 border border-foreground/35 opacity-0"
      />
      <div ref={dotRef} className="talvix-cursor-dot h-1.5 w-1.5 bg-brand opacity-0" />
    </div>
  );
}
