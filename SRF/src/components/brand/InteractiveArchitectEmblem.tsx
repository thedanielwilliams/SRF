"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "@/data/srfData";
import { SPRING_SNAPPY, EASE_OUT_EXPO } from "@/components/motion/MotionPrimitives";
import { Compass, Layers, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

const STEP_ICONS = [Compass, Layers, Cpu, ShieldCheck];

export function InteractiveArchitectEmblem() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeStep = PROCESS_STEPS[activeIdx];
  const ActiveIcon = STEP_ICONS[activeIdx];

  return (
    <div
      className="rounded-3xl bg-white border border-ivory-border shadow-elevated overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Step Selector Pill Bar */}
      <div className="px-6 py-4 bg-ivory-light/70 border-b border-ivory-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-ivory-warm/80 border border-ivory-border">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-colors z-10 ${
                  isSelected
                    ? "text-ivory font-semibold"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="process-step-pill"
                    transition={SPRING_SNAPPY}
                    className="absolute inset-0 rounded-xl bg-evergreen shadow-subtle -z-10"
                  />
                )}
                <span className="flex items-center gap-1.5">
                  <span
                    className={
                      isSelected
                        ? "text-bronze-light"
                        : "text-bronze font-semibold"
                    }
                  >
                    {step.number}
                  </span>
                  <span>{step.shortTitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-xs text-ink-muted hidden sm:inline">
          Select any step to see how we work
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Interactive 4-Step Visual Architecture */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-ivory-light/50 to-white border-b lg:border-b-0 lg:border-r border-ivory-border">
          <div className="grid grid-cols-2 gap-3 my-auto">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isSelected = idx === activeIdx;
              return (
                <motion.button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  animate={{
                    scale: isSelected ? 1.02 : 0.98,
                    y: isSelected ? -2 : 0,
                  }}
                  transition={SPRING_SNAPPY}
                  className={`p-5 rounded-2xl text-left border transition-colors flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? "bg-evergreen text-ivory border-evergreen shadow-elevated"
                      : "bg-ivory-light/70 text-ink border-ivory-border hover:border-evergreen/30"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-semibold ${
                        isSelected ? "text-bronze-light" : "text-bronze"
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? "text-bronze-light" : "text-evergreen"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm leading-snug">
                      {step.shortTitle}
                    </div>
                    <div
                      className={`text-[11px] mt-1 line-clamp-2 ${
                        isSelected ? "text-ivory/80" : "text-ink-muted"
                      }`}
                    >
                      {step.summary}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Progress Indicator Bar */}
          <div className="mt-6 pt-4 border-t border-ivory-border flex items-center justify-between text-xs text-ink-muted">
            <span>Closed-Loop Delivery Cycle</span>
            <span className="font-medium text-evergreen">
              Step {activeIdx + 1} of 4
            </span>
          </div>
        </div>

        {/* Right: Clear, Human-Friendly Explanation of Active Step */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                    Step {activeStep.number} · {activeStep.shortTitle}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-ivory-light border border-ivory-border flex items-center justify-center">
                    <ActiveIcon className="w-4 h-4 text-evergreen" />
                  </div>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-display font-semibold tracking-tight text-ink">
                  {activeStep.fullTitle}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="mt-6">
                  <div className="text-xs font-semibold text-ink mb-3">
                    What happens in this stage:
                  </div>
                  <div className="space-y-2.5">
                    {activeStep.whatWeDo.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-ivory-light border border-ivory-border/80 text-xs sm:text-sm text-ink"
                      >
                        <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-ivory-border">
                <div className="p-4 rounded-2xl bg-evergreen/5 border border-evergreen/15 flex items-start gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-evergreen text-ivory text-[11px] font-medium shrink-0 mt-0.5">
                    Result
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-ink">
                    {activeStep.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
