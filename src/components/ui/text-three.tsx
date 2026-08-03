"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextThreeProps {
  text?: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

function TextThree({
  text = "Namaste World!",
  className,
  speed = 100,
  startDelay = 0,
}: TextThreeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) return;

    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      setDisplayText("");
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayText(text.slice(0, currentIndex));

        if (currentIndex >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [prefersReducedMotion, speed, startDelay, text]);

  return (
    <motion.span
      className={cn("grid", className)}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: startDelay / 1000 }}
      aria-label={text}
    >
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {text}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {prefersReducedMotion ? text : displayText}
      </span>
    </motion.span>
  );
}

export default TextThree;
export type { TextThreeProps };
