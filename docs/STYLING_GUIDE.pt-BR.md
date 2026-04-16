# Guia de Estilo: Glass & Neon

> 🌍 [Read this guide in English](./STYLING_GUIDE.md)

O HustyCore é construído na interseção entre **Glassmorphism** e **Brilhos Dinâmicos**.

## 1. O Sistema Glass
Evitamos cores de fundo fixas. Em vez disso, usamos camadas transparentes com desfoque de alta refração.

### Variáveis CSS Principais
- `--glass`: A camada translúcida base (Alvo: 1-3% de opacidade).
- `--glass-border`: Bordas finas de alto contraste (Alvo: 5-8% de opacidade branca).
- `backdrop-blur`: Tipicamente `md` (8px) ou `lg` (16px) para profundidade premium.

### Exemplo de Token
```css
.glass-effect {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
}
```

## 2. Padrões Neon & Brilho
Usamos **Gradientes Cônicos** e **Box Shadows** com valores HSL para criar bordas "vibrantes".

### Animações de Pulso
Muitos componentes, como o `NeonBadge`, usam keyframes para alternar a opacidade:
```css
@keyframes pulse-glow {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
```

## 3. Temas
O HustyCore é "dark-mode first", mas suporta modo claro invertendo a luminosidade dos valores:
- **Dark**: Pretos profundos com 1% de vidro branco.
- **Light**: Brancos nítidos com 10% de vidro branco e sombras mais fortes.
