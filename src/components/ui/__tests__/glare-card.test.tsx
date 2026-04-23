import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { GlareCard } from "../3d-glare-card";

describe("GlareCard — Structure", () => {
  it("renders children", () => {
    render(<GlareCard><p>Content</p></GlareCard>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<GlareCard ref={ref}><p>x</p></GlareCard>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<GlareCard className="test-cls"><p>x</p></GlareCard>);
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("includes base layout classes", () => {
    const { container } = render(<GlareCard><p>x</p></GlareCard>);
    expect(container.firstChild).toHaveClass("rounded-2xl");
    expect(container.firstChild).toHaveClass("backdrop-blur-md");
  });
});

describe("GlareCard — Mouse Events", () => {
  it("fires onMouseMove without throwing", () => {
    const { container } = render(<GlareCard><p>x</p></GlareCard>);
    expect(() => {
      fireEvent.mouseMove(container.firstChild as Element, {
        clientX: 100,
        clientY: 100,
      });
    }).not.toThrow();
  });

  it("fires onMouseLeave without throwing", () => {
    const { container } = render(<GlareCard><p>x</p></GlareCard>);
    expect(() => {
      fireEvent.mouseLeave(container.firstChild as Element);
    }).not.toThrow();
  });
});

describe("GlareCard — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<GlareCard><p>Card content</p></GlareCard>);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
