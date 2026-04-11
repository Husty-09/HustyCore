import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedGrid } from './animated-grid';

describe('AnimatedGrid', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<AnimatedGrid />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders correctly with custom dimensions', () => {
    const { container } = render(<AnimatedGrid width={50} height={50} />);
    const pattern = container.querySelector('pattern');
    expect(pattern).toHaveAttribute('width', '50');
    expect(pattern).toHaveAttribute('height', '50');

    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', 'M.5 50V.5H50');
  });

  it('renders the correct number of initial squares', async () => {
    // numSquares defaults to 200, let's use a smaller number for clarity in test
    const { container } = render(<AnimatedGrid numSquares={10} />);
    
    // The squares are rendered inside a nested SVG
    // We can count the rect elements inside that svg
    const innerSvg = container.querySelector('svg svg');
    expect(innerSvg).toBeInTheDocument();

    const squares = innerSvg?.querySelectorAll('rect');
    expect(squares).toHaveLength(10);
  });

  it('applies custom className to the SVG', () => {
    const { container } = render(<AnimatedGrid className="custom-grid" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-grid');
  });

  it('squares have correct dimensions based on width and height', () => {
    const width = 30;
    const height = 30;
    const { container } = render(<AnimatedGrid width={width} height={height} numSquares={5} />);
    
    const innerSvg = container.querySelector('svg svg');
    const squares = innerSvg?.querySelectorAll('rect');
    
    squares?.forEach(rect => {
      expect(rect).toHaveAttribute('width', (width - 1).toString());
      expect(rect).toHaveAttribute('height', (height - 1).toString());
    });
  });
});
