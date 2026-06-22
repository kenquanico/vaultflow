"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  axis?: "x" | "y";
  offset?: number;
}

export function Reveal({
  className,
  delay = 0,
  axis = "y",
  offset = 28,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -18% 0px",
  });
  const hiddenPosition = shouldReduceMotion
    ? {}
    : axis === "x"
      ? { x: offset }
      : { y: offset };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...hiddenPosition }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...hiddenPosition }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.01, delay: 0 }
          : { duration: 0.46, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
