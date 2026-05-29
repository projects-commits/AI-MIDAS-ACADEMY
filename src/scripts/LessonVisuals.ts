import { animate, inView, stagger } from "motion";

let visualsStarted = false;

function showDiagramError(target: HTMLElement) {
  target.dataset.state = "error";
  target.innerHTML = "<p>Diagrama indisponível.</p>";
}

export function initLessonVisuals() {
  if (visualsStarted || typeof window === "undefined") return;
  visualsStarted = true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const diagrams = document.querySelectorAll<HTMLElement>("[data-mermaid-container]");
  if (diagrams.length > 0) {
    import("mermaid")
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "dark",
          flowchart: {
            useMaxWidth: true,
            htmlLabels: false,
            curve: "basis"
          },
          themeVariables: {
            background: "#121212",
            primaryColor: "#1b1b1b",
            primaryTextColor: "#f5f5f5",
            primaryBorderColor: "#ffd700",
            lineColor: "#ffd700",
            secondaryColor: "#ff4500",
            tertiaryColor: "#202020",
            fontFamily: "Arial"
          }
        });

        const nodes = Array.from(document.querySelectorAll<HTMLElement>(".mermaid"));

        try {
          await mermaid.run({ nodes });
        } catch (error) {
          diagrams.forEach((container) => {
            const target = container.querySelector<HTMLElement>(".mermaid-diagram");
            if (target) {
              showDiagramError(target);
            }
          });
          console.error("Mermaid diagram failed to render", error);
          return;
        }

        for (const [index, container] of diagrams.entries()) {
          const target = container.querySelector<HTMLElement>(".mermaid-diagram");
          const svg = target?.querySelector("svg");

          if (!target) continue;

          if (svg) {
            target.dataset.state = "ready";
            svg.setAttribute("aria-label", `mermaid-render-${index}`);
          } else {
            showDiagramError(target);
          }
        }
      })
      .catch((error) => {
        diagrams.forEach((container) => {
          const target = container.querySelector<HTMLElement>(".mermaid-diagram");
          if (target) {
            showDiagramError(target);
          }
        });
        console.error("Mermaid failed to load", error);
      });
  }

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
