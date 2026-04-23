import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { GlowBorder } from "../glow-border";

describe("GlowBorder — Structure", () => {
  it("renders children", () => {
    render(<GlowBorder>Content</GlowBorder>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("forwards ref to the outer container div", () => {
    const ref = vi.fn();
    render(<GlowBorder ref={ref}>x</GlowBorder>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies containerClassName to the outer div", () => {
    const { container } = render(
      <GlowBorder containerClassName="outer-cls">x</GlowBorder>
    );
    expect(container.firstChild).toHaveClass("outer-cls");
  });

  it("applies className to the inner clipping div", () => {
    const { container } = render(
      <GlowBorder className="inner-cls">x</GlowBorder>
    );
    const inner = container.querySelector(".inner-cls");
    expect(inner).toBeInTheDocument();
  });
});

describe("GlowBorder — Props", () => {
  it("sets padding equal to borderWidth on the outer div", () => {
    const { container } = render(<GlowBorder borderWidth={4}>x</GlowBorder>);
    expect((container.firstChild as HTMLElement).style.padding).toBe("4px");
  });

  it("uses glowColors in the conic-gradient background", () => {
    const colors = ["#ff0000", "#00ff00"];
    const { container } = render(
      <GlowBorder glowColors={colors}>x</GlowBorder>
    );
    // jsdom normalizes hex to rgb(); assert the gradient type is present
    const divs = container.querySelectorAll("div");
    const gradientDiv = Array.from(divs).find((d) =>
      d.style.background.includes("conic-gradient")
    ) as HTMLElement | undefined;
    expect(gradientDiv).toBeDefined();
    expect(gradientDiv!.style.background).toContain("conic-gradient");
  });
});

describe("GlowBorder — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<GlowBorder>Content</GlowBorder>);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
