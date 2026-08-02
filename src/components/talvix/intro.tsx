import { useEffect, useState } from "react";
import { LogoMark, Wordmark } from "./logo";

const KEY = "talvix:intro-seen";

/**
 * Cinematic opening: black plate, logo resolving out of a soft brand glow,
 * then a vertical curtain lift into the hero. Plays once per session and is
 * skipped entirely for reduced-motion users.
 */
export function Intro() {
  const [phase, setPhase] = useState<"idle" | "playing" | "leaving" | "done">("idle");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    if (reduced || seen) {
      setPhase("done");
      return;
    }

    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable — play anyway */
    }

    document.documentElement.dataset.intro = "playing";
    setPhase("playing");

    const leave = window.setTimeout(() => setPhase("leaving"), 1550);
    const end = window.setTimeout(() => {
      delete document.documentElement.dataset.intro;
      setPhase("done");
    }, 2600);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(end);
      delete document.documentElement.dataset.intro;
    };
  }, []);

  if (phase === "done" || phase === "idle") return null;

  return (
    <div
      aria-hidden
      className={
        "fixed inset-0 z-[120] flex items-center justify-center bg-[oklch(0.115_0.006_260)] " +
        (phase === "leaving" ? "intro-curtain-out" : "")
      }
    >
      <div className="intro-glow absolute h-[46vmin] w-[46vmin] rounded-full" />
      <div className="intro-logo relative flex items-center gap-3">
        <LogoMark className="h-9 w-9" />
        <Wordmark />
      </div>
      <span className="intro-hairline absolute bottom-0 left-0 h-px w-full origin-left bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand)_60%,transparent),transparent)]" />
    </div>
  );
}
