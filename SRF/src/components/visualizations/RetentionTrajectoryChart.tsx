"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPRING_SNAPPY, EASE_OUT_EXPO } from "@/components/motion/MotionPrimitives";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface MilestonePoint {
  id: string;
  month: string;
  phaseCode: string;
  title: string;
  x: number;
  srfY: number;
  tradY: number;
  srfScore: string;
  tradScore: string;
  srfNote: string;
  tradNote: string;
}

const MILESTONES: MilestonePoint[] = [
  {
    id: "m1",
    month: "Month 2",
    phaseCode: "01 Diagnose",
    title: "OCAT / PCAT Baseline",
    x: 90,
    srfY: 185,
    tradY: 192,
    srfScore: "42% Baseline",
    tradScore: "40% Desk Review",
    srfNote:
      "Deep-dive organizational and public capacity assessment (OCAT/PCAT) maps real bottlenecks across state and frontline tiers.",
    tradNote:
      "Surface-level desk interviews without frontline diagnostic validation.",
  },
  {
    id: "m2",
    month: "Month 5",
    phaseCode: "02 Co-Create",
    title: "HCD & Strategy Blueprint",
    x: 245,
    srfY: 135,
    tradY: 120,
    srfScore: "68% Co-Owned",
    tradScore: "72% Report Peak",
    srfNote:
      "Design sprints with civil servants and frontline workers produce intuitive workflows aligned with World Bank standards.",
    tradNote:
      "Consultants present a 200-page strategy PDF and prepare to exit.",
  },
  {
    id: "m3",
    month: "Month 10",
    phaseCode: "03 Implement",
    title: "Embedded Specialists",
    x: 415,
    srfY: 78,
    tradY: 175,
    srfScore: "86% Adopted",
    tradScore: "46% Post-Exit Drop",
    srfNote:
      "SRF specialists work side-by-side inside the organization—coaching leaders, optimizing supply chains, and guiding adoption.",
    tradNote:
      "Without embedded implementation support, the report sits on a shelf and old habits return.",
  },
  {
    id: "m4",
    month: "Month 18+",
    phaseCode: "04 Sustain",
    title: "Full Institutional Ownership",
    x: 585,
    srfY: 38,
    tradY: 205,
    srfScore: "94% Enduring",
    tradScore: "31% Dependency",
    srfNote:
      "Live Power BI MEL dashboards and transferred capability remain in-house. Your team continues growing independently.",
    tradNote:
      "Institutional memory is lost; organization must hire another external consultancy.",
  },
];

export function RetentionTrajectoryChart() {
  const [selectedIdx, setSelectedIdx] = useState<number>(2);
  const active = MILESTONES[selectedIdx];

  return (
    <div className="rounded-3xl border border-ivory-border bg-white shadow-subtle p-6 sm:p-8 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-ivory-border/80">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-evergreen/8 text-evergreen">
            Beyond the Report
          </span>
          <h3 className="text-xl font-display font-semibold text-ink mt-2">
            Why “Strategy That Takes Hold” Endures
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-2 text-evergreen font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-evergreen inline-block" />
            SRF Embedded Delivery
          </span>
          <span className="flex items-center gap-2 text-ink-subtle">
            <span className="w-2.5 h-2.5 rounded-full border border-ink-subtle inline-block" />
            Report-Only Consultancy
          </span>
        </div>
      </div>

      {/* Interactive SVG Curve */}
      <div className="my-4 relative">
        <svg
          viewBox="0 0 660 235"
          className="w-full h-auto overflow-visible select-none"
          role="img"
          aria-label="Capability retention curve over time"
        >
          <defs>
            <linearGradient id="srfAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#163F38" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#163F38" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {[45, 95, 145, 195].map((y, idx) => (
            <g key={y}>
              <line
                x1="45"
                y1={y}
                x2="635"
                y2={y}
                stroke="#EFECE4"
                strokeWidth="1"
              />
              <text x="8" y={y + 3} fontSize="10" fill="#7A8784">
                {100 - idx * 25}%
              </text>
            </g>
          ))}

          {/* Area Fill */}
          <path
            d="M 90 185 C 155 168, 190 150, 245 135 C 315 115, 355 92, 415 78 C 485 60, 530 46, 585 38 L 585 210 L 90 210 Z"
            fill="url(#srfAreaGrad)"
          />

          {/* Traditional Curve */}
          <path
            d="M 90 192 C 155 160, 200 120, 245 120 C 295 120, 355 155, 415 175 C 485 195, 535 202, 585 205"
            fill="none"
            stroke="#7A8784"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity="0.65"
          />

          {/* SRF Curve */}
          <motion.path
            d="M 90 185 C 155 168, 190 150, 245 135 C 315 115, 355 92, 415 78 C 485 60, 530 46, 585 38"
            fill="none"
            stroke="#163F38"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE_OUT_EXPO }}
          />

          {/* Milestone Nodes */}
          {MILESTONES.map((m, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <g
                key={m.id}
                className="cursor-pointer"
                onClick={() => setSelectedIdx(idx)}
                onMouseEnter={() => setSelectedIdx(idx)}
              >
                <line
                  x1={m.x}
                  y1={m.srfY}
                  x2={m.x}
                  y2={210}
                  stroke={isSelected ? "#B38A56" : "#E6E1D5"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                  strokeDasharray={isSelected ? "none" : "3 3"}
                />

                <circle
                  cx={m.x}
                  cy={m.tradY}
                  r={isSelected ? 4.5 : 3.5}
                  fill="#FFFFFF"
                  stroke="#7A8784"
                  strokeWidth="1.5"
                />

                <motion.circle
                  cx={m.x}
                  cy={m.srfY}
                  animate={{
                    r: isSelected ? 8.5 : 5.5,
                    fill: isSelected ? "#B38A56" : "#163F38",
                  }}
                  transition={SPRING_SNAPPY}
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                />

                <text
                  x={m.x}
                  y="228"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight={isSelected ? "600" : "400"}
                  fill={isSelected ? "#163F38" : "#52605D"}
                >
                  {m.phaseCode}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Pill Timeline Switcher with layoutId */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-ivory-light border border-ivory-border mt-3">
          {MILESTONES.map((m, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative px-3 py-2 rounded-xl text-left transition-colors z-10 ${
                  isSelected ? "text-ivory" : "text-ink hover:text-evergreen"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="retention-timeline-pill"
                    transition={SPRING_SNAPPY}
                    className="absolute inset-0 rounded-xl bg-evergreen -z-10"
                  />
                )}
                <div
                  className={`text-[10px] font-medium ${
                    isSelected ? "text-bronze-light" : "text-ink-subtle"
                  }`}
                >
                  {m.month}
                </div>
                <div className="text-xs font-semibold truncate">{m.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Detail Comparison */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
        >
          <div className="p-4 rounded-2xl bg-evergreen/6 border border-evergreen/15">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-evergreen">
                <CheckCircle2 className="w-3.5 h-3.5 text-bronze" />
                SRF Embedded ({active.srfScore})
              </span>
              <span className="text-[11px] font-medium text-bronze">
                {active.month}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
              {active.srfNote}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-ivory-light border border-ivory-border">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                <AlertCircle className="w-3.5 h-3.5 text-ink-subtle" />
                Report-Only ({active.tradScore})
              </span>
              <span className="text-[11px] text-ink-subtle">Traditional</span>
            </div>
            <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
              {active.tradNote}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
