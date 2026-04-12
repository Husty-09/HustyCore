import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('Utilitário de mesclagem de classes (cn)', () => {
  // Teste 1: Caminho Feliz
  it('deve unir classes simples de texto e margem', () => {
    const result = cn('text-red-500', 'mt-4');
    expect(result).toBe('text-red-500 mt-4');
  });

  // Teste 2: Entrada Dinâmica/Inválida
  it('deve ignorar valores booleanos falsos, null e undefined', () => {
    const isFalse = false;
    const isTrue = true;
    const result = cn(
      'base-class',
      isFalse && 'hidden-class',
      isTrue && 'active-class',
      null,
      undefined
    );
    expect(result).toBe('base-class active-class');
  });

  // Teste 3: Caso Limite (Resolução de Conflitos do Tailwind)
  it('deve resolver conflitos de classes substituindo o valor mais antigo', () => {
    // px-2 deve ser sobrescrito por px-4 pelo comportamento do tailwind-merge
    const result = cn('px-2 py-1', 'px-4');
    expect(result).toBe('py-1 px-4');
  });
});
