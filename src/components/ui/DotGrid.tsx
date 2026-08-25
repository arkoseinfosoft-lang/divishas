"use client";

import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import "./DotGrid.css";

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

interface PointerState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  lastTime: number;
  lastX: number;
  lastY: number;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function throttle(
  func: (e: MouseEvent) => void,
  limit: number
): (e: MouseEvent) => void {
  let lastCall = 0;
  return function (this: unknown, e: MouseEvent) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.call(this, e);
    }
  };
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 255, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

export const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 5,
  gap = 22,
  baseColor = "#FF0000",
  activeColor = "#00FF00",
  proximity = 140,
  speedTrigger = 80,
  shockRadius = 220,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.2,
  className = "",
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const hasInertiaRef = useRef<boolean>(false);
  const pointerRef = useRef<PointerState>({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: -9999,
    lastY: -9999,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);
  const radius = dotSize / 2;

  // Safe plugin registration on client mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && InertiaPlugin) {
        gsap.registerPlugin(InertiaPlugin);
        hasInertiaRef.current = true;
      }
    } catch {
      hasInertiaRef.current = false;
    }
  }, []);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect = wrap.getBoundingClientRect();
    const width = rect.width || wrap.clientWidth || canvas.clientWidth || 800;
    const height = rect.height || wrap.clientHeight || canvas.clientHeight || 600;
    if (width <= 0 || height <= 0) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  // Main Drawing Loop
  useEffect(() => {
    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      if (dotsRef.current.length === 0) {
        buildGrid();
      }

      const { x: px, y: py } = pointerRef.current;
      const dots = dotsRef.current;
      const totalDots = dots.length;

      for (let i = 0; i < totalDots; i++) {
        const dot = dots[i];
        const ox = (dot.cx + dot.xOffset) * dpr;
        const oy = (dot.cy + dot.yOffset) * dpr;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let dotStyle = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          dotStyle = `rgb(${r},${g},${b})`;
        }

        ctx.beginPath();
        ctx.arc(ox, oy, radius * dpr, 0, Math.PI * 2);
        ctx.fillStyle = dotStyle;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    buildGrid();
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, radius, buildGrid]);

  // Handle Resize
  useEffect(() => {
    buildGrid();
    let ro: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window && wrapperRef.current) {
      ro = new ResizeObserver(() => {
        buildGrid();
      });
      ro.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  // Mouse & Click Interaction with Fallback Physics
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = pr.lastX !== -9999 ? e.clientX - pr.lastX : 0;
      const dy = pr.lastY !== -9999 ? e.clientY - pr.lastY : 0;
      let vx = (dx / (dt || 16)) * 1000;
      let vy = (dy / (dt || 16)) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = (dot.cx - pr.x) * 0.5 + vx * 0.005;
          const pushY = (dot.cy - pr.y) * 0.5 + vy * 0.005;

          if (hasInertiaRef.current) {
            try {
              gsap.to(dot, {
                inertia: { xOffset: pushX, yOffset: pushY, resistance },
                onComplete: () => {
                  gsap.to(dot, {
                    xOffset: 0,
                    yOffset: 0,
                    duration: returnDuration,
                    ease: "elastic.out(1,0.75)",
                  });
                  dot._inertiaApplied = false;
                },
              });
            } catch {
              gsap.to(dot, {
                xOffset: pushX * 0.5,
                yOffset: pushY * 0.5,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                  gsap.to(dot, {
                    xOffset: 0,
                    yOffset: 0,
                    duration: returnDuration,
                    ease: "elastic.out(1,0.75)",
                  });
                  dot._inertiaApplied = false;
                },
              });
            }
          } else {
            gsap.to(dot, {
              xOffset: pushX * 0.5,
              yOffset: pushY * 0.5,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(dot, {
                  xOffset: 0,
                  yOffset: 0,
                  duration: returnDuration,
                  ease: "elastic.out(1,0.75)",
                });
                dot._inertiaApplied = false;
              },
            });
          }
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;

          gsap.to(dot, {
            xOffset: pushX,
            yOffset: pushY,
            duration: 0.35,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 25);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

  return (
    <div className={`dot-grid ${className}`} style={style}>
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </div>
  );
};

export default DotGrid;
