import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { TextReveal } from "../text-reveal";

describe("TextReveal — Structure", () => {
  it("renders all words from the text prop", () => {
    render(<TextReveal text="Hello World" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });

  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<TextReveal ref={ref} text="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<TextReveal text="Hi" className="test-cls" />);
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("renders one span per word", () => {
    const { container } = render(<TextReveal text="one two three" />);
    expect(container.querySelectorAll("span")).toHaveLength(3);
  });

  it("handles a single word without crashing", () => {
    render(<TextReveal text="Solo" />);
    expect(screen.getByText("Solo")).toBeInTheDocument();
  });
});

describe("TextReveal — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<TextReveal text="Accessible content" />);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
