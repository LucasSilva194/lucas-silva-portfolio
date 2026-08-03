"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

type GlowCardStyle = CSSProperties & Record<`--${string}`, string | number>;

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "h-64 w-48",
  md: "h-80 w-64",
  lg: "h-96 w-80",
};

const beforeAfterStyles = `
  [data-glow-card]::before,
  [data-glow-card]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: inherit;
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow-card]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
      transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow-card]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }

  [data-glow-card] > [data-glow-layer] {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce), (pointer: coarse) {
    [data-glow-card] {
      background-image: none !important;
    }

    [data-glow-card]::before,
    [data-glow-card]::after {
      display: none;
    }
  }
`;

function GlowCard({
  children,
  className,
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      const card = cardRef.current;

      if (!card) return;

      card.style.setProperty("--x", event.clientX.toFixed(2));
      card.style.setProperty("--xp", (event.clientX / window.innerWidth).toFixed(2));
      card.style.setProperty("--y", event.clientY.toFixed(2));
      card.style.setProperty("--yp", (event.clientY / window.innerHeight).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer, { passive: true });
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];
  const styles: GlowCardStyle = {
    "--base": base,
    "--spread": spread,
    "--border-size": "2px",
    "--spotlight-size": "220px",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) 100% 70% / 0.1),
      transparent
    )`,
    backgroundColor: "var(--card)",
    backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--border)",
    position: "relative",
    touchAction: "pan-y",
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow-card
        style={styles}
        className={cn(
          !customSize && sizeMap[size],
          !customSize && "aspect-[3/4]",
          "relative grid grid-rows-[1fr_auto] gap-4 rounded-2xl p-4 shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px]",
          className,
        )}
      >
        <div data-glow-layer aria-hidden="true" />
        {children}
      </div>
    </>
  );
}

export { GlowCard };
export type { GlowCardProps };
