import { animate, inView, stagger } from "motion";

let visualsStarted = false;

export function initLessonVisuals() {
  if (visualsStarted || typeof window === "undefined") return;
  visualsStarted = true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  inView("[data-motion-reveal]", (element) => {
    animate(
      element,
      { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
      { duration: 0.55, ease: "easeOut" }
    );

    const rows = element.querySelectorAll(".learning-chart__fill, .code-lens__line, .board-note");
    if (rows.length > 0) {
      animate(rows, { opacity: [0, 1], x: [-10, 0] }, { delay: stagger(0.055), duration: 0.35 });
    }
  }, { margin: "0px 0px -12% 0px" });
}
