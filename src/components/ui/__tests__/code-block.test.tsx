import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import axe from "axe-core";
import { CodeBlock } from "../code-block";

beforeEach(() => {
  Object.defineProperty(navigator, "clipboard", {
    writable: true,
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CodeBlock — Structure", () => {
  it("renders the code content", () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("applies custom className to the root div", () => {
    const { container } = render(
      <CodeBlock code="x" className="test-cls" />
    );
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("renders the language label (default: tsx)", () => {
    render(<CodeBlock code="x" />);
    expect(screen.getByText("tsx")).toBeInTheDocument();
  });

  it("renders a custom language label", () => {
    render(<CodeBlock code="x" language="bash" />);
    expect(screen.getByText("bash")).toBeInTheDocument();
  });

  it("renders a copy button", () => {
    render(<CodeBlock code="x" />);
    expect(screen.getByRole("button", { name: "Copy code" })).toBeInTheDocument();
  });
});

describe("CodeBlock — Copy Behavior", () => {
  it("calls clipboard.writeText with the code on click", async () => {
    render(<CodeBlock code="const y = 2;" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("const y = 2;");
  });

  it("shows the checkmark icon after copying", async () => {
    vi.useFakeTimers();
    render(<CodeBlock code="x" />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
      // Flush the clipboard promise microtask
      await Promise.resolve();
    });

    // The checkmark SVG has a polyline; the copy SVG has a rect
    expect(screen.getByRole("button").querySelector("polyline")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("resets to the copy icon after 2 seconds", async () => {
    vi.useFakeTimers();
    render(<CodeBlock code="x" />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
      await Promise.resolve();
    });

    expect(screen.getByRole("button").querySelector("polyline")).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(2100); });

    expect(screen.getByRole("button").querySelector("polyline")).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});

describe("CodeBlock — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(<CodeBlock code="const x = 1;" />);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
