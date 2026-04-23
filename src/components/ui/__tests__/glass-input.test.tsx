import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { GlassInput } from "../glass-input";

describe("GlassInput — Structure", () => {
  it("renders an input element", () => {
    render(<GlassInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("forwards ref to the input element", () => {
    const ref = vi.fn();
    render(<GlassInput ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("applies custom className to the input", () => {
    render(<GlassInput className="test-cls" />);
    expect(screen.getByRole("textbox")).toHaveClass("test-cls");
  });

  it("passes type prop to the input", () => {
    render(<GlassInput type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
  });
});

describe("GlassInput — Label", () => {
  it("renders label when label prop is provided", () => {
    render(<GlassInput id="email" label="Email address" />);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("binds label to input via htmlFor/id", () => {
    render(<GlassInput id="email" label="Email address" />);
    const label = screen.getByText("Email address") as HTMLLabelElement;
    expect(label.htmlFor).toBe("email");
  });

  it("omits label element when label prop is not provided", () => {
    const { container } = render(<GlassInput />);
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });
});

describe("GlassInput — Icon", () => {
  it("renders icon slot when icon prop is provided", () => {
    render(<GlassInput icon={<svg data-testid="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("adds left padding class when icon is present", () => {
    render(<GlassInput icon={<svg />} />);
    expect(screen.getByRole("textbox")).toHaveClass("pl-10");
  });

  it("omits left padding class when icon is absent", () => {
    render(<GlassInput />);
    expect(screen.getByRole("textbox")).not.toHaveClass("pl-10");
  });
});

describe("GlassInput — A11y", () => {
  it("has no violations without label", async () => {
    const { container } = render(<GlassInput aria-label="Search" />);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });

  it("has no violations with label", async () => {
    const { container } = render(<GlassInput id="q" label="Search" />);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
