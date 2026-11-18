"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Layers, Sparkles, BarChart3, CheckCircle2, ChevronRight } from "lucide-react";

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
export const SPRING_SNAPPY = {
  type: "spring" as const,
  stiffness: 340,
  damping: 30,
  mass: 0.8,
};
export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 240,
  damping: 26,
  mass: 1,
};

/**
 * Emil Kowalski–style blur + vertical translation entrance
 */
export function BlurFade({
  children,
  delay = 0,
  className = "",
  yOffset = 14,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: "blur(6px)" }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Smooth spring-driven number counter
 */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const springValue = useSpring(0, {
    stiffness: 75,
    damping: 20,
    mass: 1,
  });
  const display = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/**
 * Emil Kowalski (Sonner-inspired) Interactive Stacked Cards
 * Cards rest in a 3D depth stack and smoothly fan out on hover or toggle
 */
const STACK_ITEMS = [
  {
    id: "ocat",
    badge: "Diagnostic Baseline",
    title: "OCAT & PCAT Capacity Assessment",
    subtitle: "Empirical scoring across governance, finance & delivery",
    metric: "+49% Lift",
    color: "bg-evergreen text-ivory",
    details: [
      "Organizational & Public Capacity Assessment Tool audits",
      "Systemic bottleneck & skills gap mapping before intervention",
    ],
  },
  {
    id: "hcd",
    badge: "Co-Creation Sprint",
    title: "Human-Centered Design & Theory of Change",
    subtitle: "Built alongside civil servants and frontline health workers",
    metric: "100% Co-Owned",
    color: "bg-white text-ink border border-ivory-border",
    details: [
      "Intuitive workflows designed for real Nigerian operating conditions",
      "World Bank & bilateral donor framework alignment",
    ],
  },
  {
    id: "mel",
    badge: "Digital & Analytical Edge",
    title: "Power BI, Geospatial MEL & 3D Learning",
    subtitle: "Real-time decision dashboards & low-bandwidth training",
    metric: "5,000+ Trained",
    color: "bg-ivory-warm text-ink border border-ivory-border",
    details: [
      "Live Python & Power BI outcome tracking dashboards",
      "3D animated clinical & vocational modules for low-bandwidth zones",
    ],
  },
];

export function SonnerCardStack() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate front card gently when collapsed
  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STACK_ITEMS.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isExpanded]);

  // Reorder items so activeIndex is at index 0 when collapsed
  const orderedItems = isExpanded
    ? STACK_ITEMS
    : [
        STACK_ITEMS[activeIndex],
        STACK_ITEMS[(activeIndex + 1) % STACK_ITEMS.length],
        STACK_ITEMS[(activeIndex + 2) % STACK_ITEMS.length],
      ];

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-ink-muted">
          {isExpanded
            ? "Interactive Toolkit — Click any card"
            : "Hover to fan out methodological stack"}
        </span>
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className="text-xs font-medium text-evergreen hover:text-bronze transition-colors"
        >
          {isExpanded ? "Collapse stack" : "Expand all (3)"}
        </button>
      </div>

      <motion.div
        layout
        transition={SPRING_SNAPPY}
        className={`relative ${
          isExpanded ? "space-y-3" : "h-[190px]"
        } transition-all`}
      >
        {orderedItems.map((item, idx) => {
          const isFront = idx === 0;
          return (
            <motion.div
              key={item.id}
              layout
              initial={false}
              animate={
                isExpanded
                  ? {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      zIndex: 10 - idx,
                    }
                  : {
                      scale: 1 - idx * 0.045,
                      y: idx * 14,
                      opacity: 1 - idx * 0.18,
                      zIndex: 10 - idx,
                    }
              }
              transition={SPRING_SNAPPY}
              onClick={() => {
                if (!isExpanded) {
                  setIsExpanded(true);
                } else {
                  const origIdx = STACK_ITEMS.findIndex((s) => s.id === item.id);
                  setActiveIndex(origIdx);
                }
              }}
              className={`${
                isExpanded ? "relative" : "absolute inset-x-0 top-0"
              } rounded-2xl p-5 shadow-elevated cursor-pointer ${
                idx === 0 && !isExpanded
                  ? "bg-evergreen text-ivory"
                  : item.id === "ocat"
                  ? "bg-evergreen text-ivory"
                  : "bg-white text-ink border border-ivory-border"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                    item.id === "ocat" || (idx === 0 && !isExpanded)
                      ? "bg-ivory/15 text-bronze-light"
                      : "bg-evergreen/8 text-evergreen"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  {item.badge}
                </span>
                <span
                  className={`text-xs font-semibold tabular-nums ${
                    item.id === "ocat" || (idx === 0 && !isExpanded)
                      ? "text-bronze-light"
                      : "text-evergreen"
                  }`}
                >
                  {item.metric}
                </span>
              </div>

              <h4 className="mt-2.5 font-display font-semibold text-base leading-snug">
                {item.title}
              </h4>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  item.id === "ocat" || (idx === 0 && !isExpanded)
                    ? "text-ivory/80"
                    : "text-ink-muted"
                }`}
              >
                {item.subtitle}
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <ul
                      className={`mt-3 pt-3 border-t space-y-1.5 text-xs ${
                        item.id === "ocat"
                          ? "border-ivory/15 text-ivory/85"
                          : "border-ivory-border text-ink-muted"
                      }`}
                    >
                      {item.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
