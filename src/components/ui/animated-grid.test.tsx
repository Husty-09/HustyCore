import { render, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AnimatedGrid } from "./animated-grid";

// ─── Setup ────────────────────────────────────────────────────────────────────
// Garante que Math.random gera valores determinísticos nos testes
// evitando flakiness em assertions de posição dos squares
beforeEach(() => {
  let callCount = 0;
  vi.spyOn(Math, "random").mockImplementation(() => {
    // Sequência pseudo-determinística baseada no índice da chamada
    return (callCount++ % 10) / 10;
  });
  return () => vi.restoreAllMocks();
});

// ─── Suite: Renderização Estrutural ──────────────────────────────────────────
describe("AnimatedGrid — Estrutura", () => {
  it("renderiza um SVG com aria-hidden para indicar elemento decorativo", () => {
    const { container } = render(<AnimatedGrid />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    // CRÍTICO: elemento decorativo — screen readers devem ignorar
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("aplica className customizada ao elemento SVG raiz", () => {
    const { container } = render(<AnimatedGrid className="test-override" />);
    expect(container.querySelector("svg")).toHaveClass("test-override");
  });

  it("dimensões do pattern refletem as props width e height", () => {
    const { container } = render(<AnimatedGrid width={50} height={50} />);
    const pattern = container.querySelector("pattern");
    expect(pattern).toHaveAttribute("width", "50");
    expect(pattern).toHaveAttribute("height", "50");
  });

  it("path do pattern usa as dimensões corretas no atributo d", () => {
    const { container } = render(<AnimatedGrid width={50} height={50} />);
    expect(container.querySelector("path")).toHaveAttribute("d", "M.5 50V.5H50");
  });
});

// ─── Suite: Comportamento Dinâmico (useEffect) ────────────────────────────────
// Os squares são gerados de forma assíncrona no useEffect.
// Sem `waitFor`, os testes passam mesmo que o effect nunca execute (falso positivo).
describe("AnimatedGrid — Comportamento Dinâmico", () => {
  it("gera exatamente `numSquares` elementos rect após a montagem", async () => {
    const { container } = render(<AnimatedGrid numSquares={7} />);

    // CORREÇÃO: aguarda o useEffect executar e o state ser commitado no DOM
    await waitFor(() => {
      const rects = container.querySelectorAll("svg svg rect");
      expect(rects).toHaveLength(7);
    });
  });

  it("regenera os squares quando numSquares muda via rerender", async () => {
    const { container, rerender } = render(<AnimatedGrid numSquares={3} />);

    await waitFor(() => {
      expect(container.querySelectorAll("svg svg rect")).toHaveLength(3);
    });

    // Simula mudança de prop
    rerender(<AnimatedGrid numSquares={8} />);

    await waitFor(() => {
      expect(container.querySelectorAll("svg svg rect")).toHaveLength(8);
    });
  });

  it("squares têm dimensões de `width - 1` e `height - 1` (espaço entre células)", async () => {
    const { container } = render(<AnimatedGrid width={30} height={30} numSquares={4} />);

    await waitFor(() => {
      const rects = container.querySelectorAll("svg svg rect");
      expect(rects.length).toBeGreaterThan(0);
      rects.forEach((rect) => {
        expect(rect).toHaveAttribute("width", "29"); // width - 1
        expect(rect).toHaveAttribute("height", "29"); // height - 1
      });
    });
  });

  it("cada square possui a classe `animate-pulse` para animação CSS", async () => {
    const { container } = render(<AnimatedGrid numSquares={2} />);

    await waitFor(() => {
      const rects = container.querySelectorAll("svg svg rect");
      rects.forEach((rect) => {
        expect(rect).toHaveClass("animate-pulse");
      });
    });
  });
});

// ─── Suite: Comportamento Visual Condicional ─────────────────────────────────
describe("AnimatedGrid — Estilos e Classes", () => {
  it("inclui classes base de posicionamento e fill no SVG raiz", () => {
    const { container } = render(<AnimatedGrid />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("pointer-events-none");
    expect(svg).toHaveClass("absolute");
    expect(svg).toHaveClass("inset-0");
  });

  it("squares individuais não recebem strokeWidth visível", async () => {
    const { container } = render(<AnimatedGrid numSquares={1} />);

    await waitFor(() => {
      const rect = container.querySelector("svg svg rect");
      // NOTA: JSDOM serializa a prop JSX `strokeWidth` como o atributo SVG `stroke-width` (lowercase)
      expect(rect).toHaveAttribute("stroke-width", "0");
    });
  });

  it("o SVG interno usa `overflow-visible` para squares nas bordas não serem cortados", async () => {
    const { container } = render(<AnimatedGrid numSquares={1} />);

    await waitFor(() => {
      const innerSvg = container.querySelector("svg svg");
      expect(innerSvg).toHaveClass("overflow-visible");
    });
  });
});
