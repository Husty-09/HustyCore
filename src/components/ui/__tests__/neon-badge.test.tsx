import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { NeonBadge } from "../neon-badge";

describe("NeonBadge — Structure", () => {
  it("renders children", () => {
    render(<NeonBadge>Beta</NeonBadge>);
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<NeonBadge ref={ref}>x</NeonBadge>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<NeonBadge className="test-cls">x</NeonBadge>);
    expect(container.firstChild).toHaveClass("test-cls");
  });
});

describe("NeonBadge — Variants", () => {
  it("applies primary classes by default", () => {
    const { container } = render(<NeonBadge>x</NeonBadge>);
    expect(container.firstChild).toHaveClass("bg-primary/10");
  });

  it("applies secondary classes when variant=secondary", () => {
    const { container } = render(<NeonBadge variant="secondary">x</NeonBadge>);
    expect(container.firstChild).toHaveClass("bg-secondary/10");
  });
});

describe("NeonBadge — Pulse", () => {
  it("renders pulse dot when pulse=true (default)", () => {
    const { container } = render(<NeonBadge>x</NeonBadge>);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("hides pulse dot when pulse=false", () => {
    const { container } = render(<NeonBadge pulse={false}>x</NeonBadge>);
    expect(container.querySelector("span")).not.toBeInTheDocument();
  });
});

describe("NeonBadge — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<NeonBadge>New</NeonBadge>);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
