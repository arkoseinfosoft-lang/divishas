"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpNumberProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // duration in seconds
  className?: string;
}

export function CountUpNumber({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Easing: easeOutExpo (1 - Math.pow(2, -10 * progress))
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeOutProgress * end;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, duration]);

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
