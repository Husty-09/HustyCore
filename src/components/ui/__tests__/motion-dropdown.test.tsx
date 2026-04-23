import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { MotionDropdown } from "../motion-dropdown";

const items = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b", onClick: vi.fn() },
];

describe("MotionDropdown — Structure", () => {
  it("renders the trigger button with the label", () => {
    render(<MotionDropdown label="Select" items={items} />);
    expect(screen.getByRole("button", { name: /Select/i })).toBeInTheDocument();
  });

  it("forwards ref to the container div", () => {
    const ref = vi.fn();
    render(<MotionDropdown ref={ref} label="x" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className to the container", () => {
    const { container } = render(
      <MotionDropdown label="x" className="test-cls" />
    );
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("menu is closed on initial render", () => {
    render(<MotionDropdown label="Select" items={items} />);
    expect(screen.queryByText("Option A")).not.toBeInTheDocument();
  });

  it("trigger has aria-expanded=false when closed", () => {
    render(<MotionDropdown label="Select" items={items} />);
    expect(screen.getByRole("button", { name: /Select/i })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});

describe("MotionDropdown — Open/Close", () => {
  it("opens the menu on trigger click", () => {
    render(<MotionDropdown label="Select" items={items} />);
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("sets aria-expanded=true when open", () => {
    render(<MotionDropdown label="Select" items={items} />);
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    expect(screen.getByRole("button", { name: /Select/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("closes the menu on second trigger click", async () => {
    render(<MotionDropdown label="Select" items={items} />);
    const trigger = screen.getByRole("button", { name: /Select/i });
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    // AnimatePresence plays exit animation before unmounting
    await waitFor(() => {
      expect(screen.queryByText("Option A")).not.toBeInTheDocument();
    });
  });

  it("closes on Escape key press", async () => {
    render(<MotionDropdown label="Select" items={items} />);
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByText("Option A")).not.toBeInTheDocument();
    });
  });

  it("closes on outside click", async () => {
    render(
      <div>
        <MotionDropdown label="Select" items={items} />
        <div data-testid="outside">Outside</div>
      </div>
    );
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    expect(screen.getByText("Option A")).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByTestId("outside"));
    await waitFor(() => {
      expect(screen.queryByText("Option A")).not.toBeInTheDocument();
    });
  });
});

describe("MotionDropdown — Items", () => {
  it("renders all items when open", () => {
    render(<MotionDropdown label="Select" items={items} />);
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("calls item.onClick and closes menu on item click", async () => {
    const onClick = vi.fn();
    render(
      <MotionDropdown
        label="Select"
        items={[{ label: "Action", value: "act", onClick }]}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    fireEvent.click(screen.getByText("Action"));
    expect(onClick).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByText("Action")).not.toBeInTheDocument();
    });
  });

  it("renders children slot instead of items when children is provided", () => {
    render(
      <MotionDropdown label="Select">
        <div data-testid="custom-slot">Custom</div>
      </MotionDropdown>
    );
    fireEvent.click(screen.getByRole("button", { name: /Select/i }));
    expect(screen.getByTestId("custom-slot")).toBeInTheDocument();
  });
});

describe("MotionDropdown — A11y", () => {
  it("has no violations when closed", async () => {
    const { container } = render(<MotionDropdown label="Options" items={items} />);
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
