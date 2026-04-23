import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { GlowButton } from "../glow-button";

describe("GlowButton — Structure", () => {
  it("renders children", () => {
    render(<GlowButton>Click me</GlowButton>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("forwards ref to the button element", () => {
    const ref = vi.fn();
    render(<GlowButton ref={ref}>x</GlowButton>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it("applies custom className", () => {
    render(<GlowButton className="test-cls">x</GlowButton>);
    expect(screen.getByRole("button")).toHaveClass("test-cls");
  });
});

describe("GlowButton — Variants", () => {
  it("applies primary classes by default", () => {
    render(<GlowButton>x</GlowButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");
  });

  it("applies secondary classes when variant=secondary", () => {
    render(<GlowButton variant="secondary">x</GlowButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");
  });

  it("applies destructive classes when variant=destructive", () => {
    render(<GlowButton variant="destructive">x</GlowButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-destructive");
  });

  it("applies muted classes when variant=default", () => {
    render(<GlowButton variant="default">x</GlowButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-muted");
  });
});

describe("GlowButton — Behavior", () => {
  it("fires onClick handler", () => {
    const onClick = vi.fn();
    render(<GlowButton onClick={onClick}>x</GlowButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", () => {
    const onClick = vi.fn();
    render(<GlowButton disabled onClick={onClick}>x</GlowButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe("GlowButton — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<GlowButton>Submit</GlowButton>);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
