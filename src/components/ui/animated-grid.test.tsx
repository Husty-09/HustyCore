import { render, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AnimatedGrid } from "./animated-grid";

// Mocks Math.random to produce deterministic values, preventing flakiness in position assertions
beforeEach(() => {
  let callCount = 0;
  vi.spyOn(Math, "random").mockImplementation(() => (callCount++ % 10) / 10);
  return () => vi.restoreAllMocks();
});

// ─── Suite: Structure ─────────────────────────────────────────────────────────
describe("AnimatedGrid — Structure", () => {
  it("renders an SVG with aria-hidden to flag it as decorative", () => {
    const { container } = render(<AnimatedGrid />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("applies a custom className to the root SVG element", () => {
    const { container } = render(<AnimatedGrid className="test-override" />);
    expect(container.querySelector("svg")).toHaveClass("test-override");
  });

  it("pattern dimensions reflect the width and height props", () => {
    const { container } = render(<AnimatedGrid width={50} height={50} />);
    const pattern = container.querySelector("pattern");
    expect(pattern).toHaveAttribute("width", "50");
    expect(pattern).toHaveAttribute("height", "50");
  });

  it("pattern path uses the correct dimensions in the d attribute", () => {
    const { container } = render(<AnimatedGrid width={50} height={50} />);
    expect(container.querySelector("path")).toHaveAttribute("d", "M.5 50V.5H50");
  });
});

// ─── Suite: Dynamic Behavior (useEffect) ─────────────────────────────────────
// Squares are generated asynchronously inside useEffect.
// Without `waitFor`, tests would pass even if the effect never ran (false positive).
describe("AnimatedGrid — Dynamic Behavior", () => {
  it("generates exactly `numSquares` rect elements after mount", async () => {
    const { container } = render(<AnimatedGrid numSquares={7} />);

    await waitFor(() => {
      expect(container.querySelectorAll("svg svg rect")).toHaveLength(7);
    });
  });

  it("re-generates squares when numSquares changes via rerender", async () => {
    const { container, rerender } = render(<AnimatedGrid numSquares={3} />);

    await waitFor(() => {
      expect(container.querySelectorAll("svg svg rect")).toHaveLength(3);
    });

    rerender(<AnimatedGrid numSquares={8} />);

    await waitFor(() => {
      expect(container.querySelectorAll("svg svg rect")).toHaveLength(8);
    });
  });

  it("squares have dimensions of `width - 1` and `height - 1` (cell gap)", async () => {
    const { container } = render(<AnimatedGrid width={30} height={30} numSquares={4} />);

    await waitFor(() => {
      const rects = container.querySelectorAll("svg svg rect");
      expect(rects.length).toBeGreaterThan(0);
      rects.forEach((rect) => {
        expect(rect).toHaveAttribute("width", "29");
        expect(rect).toHaveAttribute("height", "29");
      });
    });
  });

  it("each square has the `animate-pulse` class for CSS animation", async () => {
    const { container } = render(<AnimatedGrid numSquares={2} />);

    await waitFor(() => {
      const rects = container.querySelectorAll("svg svg rect");
      rects.forEach((rect) => {
        expect(rect).toHaveClass("animate-pulse");
      });
    });
  });
});

// ─── Suite: Styles and Classes ────────────────────────────────────────────────
describe("AnimatedGrid — Styles and Classes", () => {
  it("includes base positioning and fill classes on the root SVG", () => {
    const { container } = render(<AnimatedGrid />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("pointer-events-none");
    expect(svg).toHaveClass("absolute");
    expect(svg).toHaveClass("inset-0");
  });

  it("individual squares have stroke-width=\"0\" (no visible border)", async () => {
    const { container } = render(<AnimatedGrid numSquares={1} />);

    await waitFor(() => {
      const rect = container.querySelector("svg svg rect");
      // JSDOM serializes the JSX prop `strokeWidth` as the SVG attribute `stroke-width` (lowercase)
      expect(rect).toHaveAttribute("stroke-width", "0");
    });
  });

  it("inner SVG uses `overflow-visible` so edge squares are not clipped", async () => {
    const { container } = render(<AnimatedGrid numSquares={1} />);

    await waitFor(() => {
      const innerSvg = container.querySelector("svg svg");
      expect(innerSvg).toHaveClass("overflow-visible");
    });
  });
});
