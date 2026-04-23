import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import axe from "axe-core";
import { InfiniteMarquee } from "../infinite-marquee";

describe("InfiniteMarquee — Structure", () => {
  it("renders children", () => {
    render(<InfiniteMarquee><span>Item</span></InfiniteMarquee>);
    expect(screen.getAllByText("Item").length).toBeGreaterThan(0);
  });

  it("applies custom className to the root div", () => {
    const { container } = render(
      <InfiniteMarquee className="test-cls"><span>x</span></InfiniteMarquee>
    );
    expect(container.firstChild).toHaveClass("test-cls");
  });

  it("repeats children `repeat` times (default 4)", () => {
    const { container } = render(
      <InfiniteMarquee><span>Item</span></InfiniteMarquee>
    );
    // repeat=4 means 4 inner track divs
    expect(container.querySelectorAll(":scope > div > div")).toHaveLength(4);
  });

  it("repeats children the specified number of times", () => {
    const { container } = render(
      <InfiniteMarquee repeat={2}><span>x</span></InfiniteMarquee>
    );
    expect(container.querySelectorAll(":scope > div > div")).toHaveLength(2);
  });
});

describe("InfiniteMarquee — Direction and Orientation", () => {
  it("applies horizontal marquee animation class by default", () => {
    const { container } = render(
      <InfiniteMarquee><span>x</span></InfiniteMarquee>
    );
    const track = container.querySelector(":scope > div > div") as HTMLElement;
    expect(track).toHaveClass("animate-marquee");
  });

  it("applies vertical marquee animation class when vertical=true", () => {
    const { container } = render(
      <InfiniteMarquee vertical><span>x</span></InfiniteMarquee>
    );
    const track = container.querySelector(":scope > div > div") as HTMLElement;
    expect(track).toHaveClass("animate-marquee-vertical");
  });

  it("applies reverse animation direction when reverse=true", () => {
    const { container } = render(
      <InfiniteMarquee reverse><span>x</span></InfiniteMarquee>
    );
    const track = container.querySelector(":scope > div > div") as HTMLElement;
    expect(track).toHaveClass("[animation-direction:reverse]");
  });

  it("applies pause-on-hover class when pauseOnHover=true", () => {
    const { container } = render(
      <InfiniteMarquee pauseOnHover><span>x</span></InfiniteMarquee>
    );
    const track = container.querySelector(":scope > div > div") as HTMLElement;
    expect(track).toHaveClass("group-hover:[animation-play-state:paused]");
  });
});

describe("InfiniteMarquee — A11y", () => {
  it("has no violations", async () => {
    const { container } = render(
      <InfiniteMarquee><span>Brand</span></InfiniteMarquee>
    );
    const results = await axe.run(container);
    expect(results.violations).toHaveLength(0);
  });
});
