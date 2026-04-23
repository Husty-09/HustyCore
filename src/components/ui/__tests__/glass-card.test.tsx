import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { GlassCard } from "../glass-card";

describe("GlassCard — Structure", () => {
  it("renders children", () => {
    render(<GlassCard>Hello</GlassCard>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<GlassCard ref={ref}>x</GlassCard>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<GlassCard className="test-cls">x</GlassCard>);
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("includes base glassmorphism classes", () => {
    const { container } = render(<GlassCard>x</GlassCard>);
    expect(container.firstChild).toHaveClass("rounded-2xl");
    expect(container.firstChild).toHaveClass("backdrop-blur-md");
    expect(container.firstChild).toHaveClass("overflow-hidden");
  });
});

describe("GlassCard — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<GlassCard>Content</GlassCard>);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
