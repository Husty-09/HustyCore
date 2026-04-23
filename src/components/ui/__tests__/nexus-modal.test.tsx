import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axe from "axe-core";
import { NexusModal } from "../nexus-modal";

function ModalWrapper({ isOpen = true, onClose = vi.fn(), title = "" }) {
  return (
    <NexusModal isOpen={isOpen} onClose={onClose} title={title || undefined}>
      <p>Modal content</p>
    </NexusModal>
  );
}

describe("NexusModal — Mount", () => {
  it("renders nothing while unmounted (before first useEffect)", () => {
    // NexusModal defers portal rendering until `mounted` state is true.
    // render() runs effects synchronously in testing, so content is visible.
    const { baseElement } = render(<ModalWrapper isOpen={false} />);
    expect(baseElement.querySelector('[role="dialog"]')).not.toBeInTheDocument();
  });

  it("renders dialog when isOpen=true", async () => {
    render(<ModalWrapper />);
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });

  it("renders children inside the dialog", async () => {
    render(<ModalWrapper />);
    await waitFor(() => {
      expect(screen.getByText("Modal content")).toBeInTheDocument();
    });
  });
});

describe("NexusModal — Title", () => {
  it("renders the title when provided", async () => {
    render(<ModalWrapper title="Confirm action" />);
    await waitFor(() => {
      expect(screen.getByText("Confirm action")).toBeInTheDocument();
    });
  });

  it("sets aria-labelledby on the dialog when title is provided", async () => {
    render(<ModalWrapper title="My title" />);
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toHaveAttribute(
        "aria-labelledby",
        "nexus-modal-title"
      );
    });
  });

  it("omits aria-labelledby when no title is provided", async () => {
    render(<ModalWrapper />);
    await waitFor(() => {
      expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-labelledby");
    });
  });
});

describe("NexusModal — Close Behavior", () => {
  it("calls onClose when the × button is clicked", async () => {
    const onClose = vi.fn();
    render(<ModalWrapper onClose={onClose} />);
    await waitFor(() => screen.getByRole("button", { name: "Close modal" }));
    fireEvent.click(screen.getByRole("button", { name: "Close modal" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the backdrop is clicked", async () => {
    const onClose = vi.fn();
    const { baseElement } = render(<ModalWrapper onClose={onClose} />);
    await waitFor(() => screen.getByRole("dialog"));
    // The backdrop is the div with absolute inset-0 outside the dialog panel
    const backdrop = baseElement.querySelector(".absolute.inset-0.bg-black\\/70") as Element;
    fireEvent.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when clicking inside the dialog panel", async () => {
    const onClose = vi.fn();
    render(<ModalWrapper onClose={onClose} />);
    await waitFor(() => screen.getByText("Modal content"));
    fireEvent.click(screen.getByText("Modal content"));
    expect(onClose).not.toHaveBeenCalled();
  });
});

describe("NexusModal — Body Scroll Lock", () => {
  it("sets body overflow to hidden when open", async () => {
    render(<ModalWrapper isOpen={true} />);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("hidden");
    });
  });

  it("restores body overflow when closed", async () => {
    const { rerender } = render(<ModalWrapper isOpen={true} />);
    await waitFor(() => expect(document.body.style.overflow).toBe("hidden"));
    rerender(<ModalWrapper isOpen={false} />);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("");
    });
  });
});

describe("NexusModal — A11y", () => {
  it("has no violations when open", async () => {
    const { baseElement } = render(<ModalWrapper title="Test modal" />);
    await waitFor(() => screen.getByRole("dialog"));
    const results = await axe.run(baseElement);
    expect(results.violations).toHaveLength(0);
  });
});
