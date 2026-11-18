"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SPRING_SNAPPY, EASE_OUT_EXPO } from "@/components/motion/MotionPrimitives";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface DiagnosticScenario {
  id: string;
  shortTab: string;
  sectorLabel: string;
  challengeTitle: string;
  recommendedPillar: string;
  primaryTools: string[];
  timelineEstimate: string;
  summary: string;
  metrics: {
    dimension: string;
    baseline: number;
    projected: number;
  }[];
}

const SCENARIOS: DiagnosticScenario[] = [
  {
    id: "gov-agency",
    shortTab: "Government Ministry / Agency",
    sectorLabel: "Federal / State Ministry or Public Agency",
    challengeTitle: "Systemic Bottlenecks & Modernized Strategic Planning",
    recommendedPillar: "Institutional Development",
    primaryTools: [
      "PCAT (Public Capacity Assessment Tool)",
      "Participatory Sectoral Analysis",
      "5-Year Strategic Roadmap",
      "Power BI MEL Dashboard",
    ],
    timelineEstimate: "12–24 Weeks Diagnostic-to-Adoption",
    summary:
      "Tailored for ministries, state agencies (such as NPHCDA counterparts), and local government authorities seeking empirical capacity baselines and fundable operational plans.",
    metrics: [
      { dimension: "Governance & Strategic Clarity", baseline: 38, projected: 91 },
      { dimension: "Inter-Tier Coordination", baseline: 41, projected: 87 },
      { dimension: "Real-Time MEL Tracking", baseline: 29, projected: 92 },
      { dimension: "Donor & Budget Readiness", baseline: 46, projected: 94 },
    ],
  },
  {
    id: "donor-programme",
    shortTab: "Development Partner / Donor",
    sectorLabel: "Multilateral / Bilateral Development Programme",
    challengeTitle: "Field Implementation Velocity, Fiduciary & Supply Chain Rigor",
    recommendedPillar: "Program Management & Technical Assistance",
    primaryTools: [
      "World Bank Fiduciary & Operational Controls",
      "Embedded Technical Specialist Deployment",
      "Supply Chain & Cold-Chain Optimization",
      "Theory of Change (ToC) Verification",
    ],
    timelineEstimate: "Embedded Cycle · 6–18 Months",
    summary:
      "Designed for bilateral partners (like GIZ), multilateral agencies, and international implementing organizations requiring hands-on field oversight and strict fiduciary compliance.",
    metrics: [
      { dimension: "Fiduciary & Audit Compliance", baseline: 54, projected: 98 },
      { dimension: "Last-Mile Supply Reliability", baseline: 42, projected: 89 },
      { dimension: "Milestone Execution Rate", baseline: 49, projected: 93 },
      { dimension: "Local Partner Ownership", baseline: 37, projected: 90 },
    ],
  },
  {
    id: "workforce-transformation",
    shortTab: "Healthcare & Workforce Initiative",
    sectorLabel: "Healthcare Network / Workforce & Youth Initiative",
    challengeTitle: "Frontline Skills Gaps, Protocol Adoption & Employment Retention",
    recommendedPillar: "Human Capital Development",
    primaryTools: [
      "Human-Centered Design (HCD) Sprints",
      "Technical Skills Gap Audit",
      "Low-Bandwidth 3D Digital Training Suite",
      "Post-Training Tooling & Mentorship",
    ],
    timelineEstimate: "8–16 Weeks Co-Design & Rollout",
    summary:
      "Built for national frontline workforces and large-scale vocational or leadership programmes where training must translate into verified adoption and employment.",
    metrics: [
      { dimension: "Frontline Protocol Standardization", baseline: 40, projected: 92 },
      { dimension: "Low-Bandwidth Reach & Completion", baseline: 32, projected: 95 },
      { dimension: "6-Month Post-Training Placement", baseline: 34, projected: 78 },
      { dimension: "Internal Coaching Autonomy", baseline: 39, projected: 88 },
    ],
  },
];

export function InstitutionalDiagnosticScoper() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const scenario =
    SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="rounded-3xl border border-ivory-border bg-white shadow-elevated overflow-hidden">
      {/* Top Pill Switcher Header */}
      <div className="p-6 sm:px-8 border-b border-ivory-border bg-ivory-light/60 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-evergreen">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            Interactive Engagement Scoper
          </span>
          <h3 className="text-lg font-display font-semibold text-ink mt-0.5">
            Select your organization profile to preview SRF’s approach
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-ivory-warm/80 border border-ivory-border">
          {SCENARIOS.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-colors z-10 ${
                  isSelected
                    ? "text-ivory font-semibold"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="scoper-profile-pill"
                    transition={SPRING_SNAPPY}
                    className="absolute inset-0 rounded-xl bg-evergreen shadow-subtle -z-10"
                  />
                )}
                <span>{item.shortTab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scenario.id}
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left 7 Cols */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-ivory-border flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                Recommended Pillar: {scenario.recommendedPillar}
              </span>
              <h4 className="mt-3 text-2xl font-display font-semibold text-ink tracking-tight">
                {scenario.challengeTitle}
              </h4>
              <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                {scenario.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-ivory-border">
                <div className="text-xs font-medium text-ink-muted mb-3">
                  Methodological Instruments Deployed
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {scenario.primaryTools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-ivory-light border border-ivory-border text-xs font-medium text-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0" />
                      <span>{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-ivory-border flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-ink-subtle">
                  Typical Engagement Horizon
                </div>
                <div className="text-sm font-semibold text-evergreen mt-0.5">
                  {scenario.timelineEstimate}
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={`/contact?scope=${encodeURIComponent(
                    scenario.sectorLabel
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-evergreen text-ivory text-xs font-medium hover:bg-evergreen-deep transition-colors shadow-subtle"
                >
                  <span>Discuss This Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-bronze-light" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right 5 Cols: Animated Capacity Lift Bars */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-ivory-light/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-ink-muted pb-3 border-b border-ivory-border">
                <span>OCAT / PCAT Capability Projection</span>
                <span className="text-evergreen font-semibold">
                  Baseline → Post-SRF
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {scenario.metrics.map((m, idx) => (
                  <div key={m.dimension}>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-ink">{m.dimension}</span>
                      <span className="tabular-nums text-xs">
                        <span className="text-ink-subtle">{m.baseline}%</span>
                        <span className="mx-1.5 text-bronze">→</span>
                        <span className="text-evergreen font-semibold">
                          {m.projected}%
                        </span>
                      </span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-ivory-warm overflow-hidden relative">
                      <motion.div
                        initial={{ width: `${m.baseline}%` }}
                        animate={{ width: `${m.projected}%` }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 22,
                          delay: idx * 0.06,
                        }}
                        className="h-full rounded-full bg-evergreen"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white border border-ivory-border text-xs text-ink-muted leading-relaxed">
              Projections are modeled on SRF’s verified institutional
              strengthening outcomes across Nigerian federal, state, and
              development partner engagements.
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
