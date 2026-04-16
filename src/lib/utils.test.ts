import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn (Tailwind Merge + Clsx)", () => {
  it("Test 1 (Happy Path): should merge simple class names", () => {
    const result = cn("text-red-500", "bg-black");
    expect(result).toBe("text-red-500 bg-black");
  });

  it("Test 2 (Invalid Input): should ignore null, undefined and boolean values", () => {
    const result = cn("text-white", null, false, undefined, true && "font-bold");
    expect(result).toBe("text-white font-bold");
  });

  it("Test 3 (Edge Case): should resolve Tailwind class conflicts correctly", () => {
    // 'p-4' should override 'p-2' since it appears later in the chain
    const result = cn("p-2 text-center", "p-4");
    expect(result).toBe("text-center p-4");

    // Background color conflict
    const bgResult = cn("bg-red-500", "bg-blue-600");
    expect(bgResult).toBe("bg-blue-600");
  });
});
