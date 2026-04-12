import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn (Tailwind Merge + Clsx)", () => {
  it("Teste 1 (Caminho Feliz): deve unir classes simples com sucesso", () => {
    const result = cn("text-red-500", "bg-black");
    expect(result).toBe("text-red-500 bg-black");
  });

  it("Teste 2 (Entrada Inválida): deve ignorar valores nulos, undefined ou booleanos", () => {
    const result = cn("text-white", null, false, undefined, true && "font-bold");
    expect(result).toBe("text-white font-bold");
  });

  it("Teste 3 (Caso Limite): deve resolver conflitos de classes do Tailwind puramente", () => {
    // A classe 'p-4' deve sobrescrever a 'p-2' pois vêm depois na hierarquia.
    const result = cn("p-2 text-center", "p-4");
    expect(result).toBe("text-center p-4");

    // Conflito de background color
    const bgResult = cn("bg-red-500", "bg-blue-600");
    expect(bgResult).toBe("bg-blue-600");
  });
});
