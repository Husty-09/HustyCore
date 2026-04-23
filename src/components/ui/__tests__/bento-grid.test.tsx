import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { BentoGrid, BentoItem } from "../bento-grid";

// ─── BentoGrid ────────────────────────────────────────────────────────────────
describe("BentoGrid — Structure", () => {
  it("renders children", () => {
    render(<BentoGrid><div>child</div></BentoGrid>);
    expect(screen.getByText("child")).toBeInTheDocument();
  });

  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<BentoGrid ref={ref}><div /></BentoGrid>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<BentoGrid className="test-cls"><div /></BentoGrid>);
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("uses CSS grid layout", () => {
    const { container } = render(<BentoGrid><div /></BentoGrid>);
    expect(container.firstChild).toHaveClass("grid");
  });
});

// ─── BentoItem ────────────────────────────────────────────────────────────────
describe("BentoItem — Structure", () => {
  it("forwards ref to the root div", () => {
    const ref = vi.fn();
    render(<BentoItem ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("applies custom className", () => {
    const { container } = render(<BentoItem className="item-cls" />);
    expect(container.firstChild).toHaveClass("item-cls");
  });

  it("renders string title", () => {
    render(<BentoItem title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders ReactNode title", () => {
    render(<BentoItem title={<span data-testid="rich-title">Rich</span>} />);
    expect(screen.getByTestId("rich-title")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<BentoItem description="Some description" />);
    expect(screen.getByText("Some description")).toBeInTheDocument();
  });

  it("renders icon slot", () => {
    render(<BentoItem icon={<svg data-testid="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders header slot", () => {
    render(<BentoItem header={<img data-testid="header" alt="" />} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("omits icon slot when not provided", () => {
    const { container } = render(<BentoItem title="x" />);
    expect(container.querySelector("[data-testid='icon']")).not.toBeInTheDocument();
  });
});

// ─── A11y ─────────────────────────────────────────────────────────────────────
describe("BentoGrid — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(
      <BentoGrid>
        <BentoItem title="Card" description="Desc" />
      </BentoGrid>
    );
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
