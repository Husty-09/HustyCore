import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import axe from "axe-core";
import { AuroraBackground } from "../aurora-background";

describe("AuroraBackground — Structure", () => {
  it("renders children", () => {
    render(<AuroraBackground><p>Hello</p></AuroraBackground>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies custom className to the root div", () => {
    const { container } = render(
      <AuroraBackground className="test-cls"><p>x</p></AuroraBackground>
    );
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("includes base layout classes", () => {
    const { container } = render(
      <AuroraBackground><p>x</p></AuroraBackground>
    );
    expect(container.firstChild).toHaveClass("relative");
    expect(container.firstChild).toHaveClass("flex");
  });
});

describe("AuroraBackground — showRadialGradient", () => {
  it("applies radial gradient mask class by default", () => {
    const { container } = render(
      <AuroraBackground><p>x</p></AuroraBackground>
    );
    const gradientLayer = container.querySelector(
      "[class*='mask-image']"
    );
    expect(gradientLayer).toBeInTheDocument();
  });

  it("omits radial gradient mask when showRadialGradient=false", () => {
    const { container } = render(
      <AuroraBackground showRadialGradient={false}><p>x</p></AuroraBackground>
    );
    const gradientLayer = container.querySelector(
      "[class*='mask-image']"
    );
    expect(gradientLayer).not.toBeInTheDocument();
  });
});

describe("AuroraBackground — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(
      <AuroraBackground><main><h1>Page</h1></main></AuroraBackground>
    );
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
