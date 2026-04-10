"use client";

import { cn } from "@/lib/utils";
import { useId, useEffect, useState } from "react";

export function AnimatedGrid({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 200,
  className,
  ...props
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  [key: string]: any;
}) {
  const id = useId();
  const [squares, setSquares] = useState<Array<[number, number, number, number]>>([]);

  useEffect(() => {
    const generated = Array.from({ length: numSquares }).map(() => [
      Math.floor(Math.random() * 100) * width + 1,
      Math.floor(Math.random() * 100) * height + 1,
      Math.random() * 10,
      Math.random() * 10 + 5,
    ] as [number, number, number, number]);
    
    setSquares(generated);
  }, [numSquares, width, height]);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-primary/10 stroke-border/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(([sqX, sqY, delay, duration], i) => (
          <rect
            strokeWidth="0"
            key={`${i}-${id}`}
            width={width - 1}
            height={height - 1}
            x={sqX}
            y={sqY}
            className="animate-pulse"
            style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
          />
        ))}
      </svg>
    </svg>
  );
}
