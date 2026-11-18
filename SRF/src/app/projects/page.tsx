"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES, CaseStudy } from "@/data/srfData";
import { BlurFade, SPRING_SNAPPY } from "@/components/motion/MotionPrimitives";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  X,
} from "lucide-react";

const SECTORS = [
  "All Engagements",
  "Health Systems",
  "Crisis Response & Digital",
  "Human Capital & Youth",
  "Public Sector Reform",
] as const;

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] =
    useState<string>("All Engagements");
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(
    null
  );

  const filteredCases =
    selectedSector === "All Engagements"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.sector === selectedSector);

  return (
    <div className="soft-ivory-gradient space-y-16 lg:space-y-20 pb-16 pt-10 lg:pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-3xl bg-evergreen text-ivory p-8 sm:p-12 lg:p-14 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
                Proven Track Record
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold tracking-tightest text-ivory leading-[1.08]">
                Our Impact in Action:{" "}
                <span className="font-serif italic font-normal text-bronze-light">
                  Evidence-based transformation.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl">
                From strengthening national immunization systems across 21
                Nigerian states with NPHCDA to grassroots vocational tooling and
                evidence-based local government reform with GIZ.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-5 rounded-2xl bg-evergreen-deep/80 border border-ivory/15">
                <div className="text-2xl sm:text-3xl font-display font-bold text-bronze-light">
                  21 States
                </div>
                <div className="text-xs text-ivory/80 mt-1">
                  National Health System Capacity Footprint
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-evergreen-deep/80 border border-ivory/15">
                <div className="text-2xl sm:text-3xl font-display font-bold text-bronze-light">
                  78%
                </div>
                <div className="text-xs text-ivory/80 mt-1">
                  Verified 6-Month Youth Employment Rate
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Filter Bar with Shared layoutId Pill */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-ivory-warm/80 border border-ivory-border">
            {SECTORS.map((sec) => {
              const isSelected = selectedSector === sec;
              return (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setSelectedSector(sec)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-colors z-10 ${
                    isSelected
                      ? "text-ivory font-semibold"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="projects-sector-pill"
                      transition={SPRING_SNAPPY}
                      className="absolute inset-0 rounded-xl bg-evergreen shadow-subtle -z-10"
                    />
                  )}
                  <span>{sec}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-ink-muted">
            Showing {filteredCases.length} verified{" "}
            {filteredCases.length === 1 ? "engagement" : "engagements"}
          </span>
        </div>
      </section>

      {/* Animated Case Study Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs) => (
              <motion.article
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                transition={SPRING_SNAPPY}
                id={cs.id}
                className="rounded-3xl bg-white border border-ivory-border shadow-subtle hover:shadow-elevated transition-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left 5 Cols */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-ivory-light/60 border-b lg:border-b-0 lg:border-r border-ivory-border p-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <motion.img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-ink text-xs font-medium inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-evergreen" />
                        {cs.location}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-ivory">
                      <div className="text-[11px] text-bronze-light font-medium">
                        Client / Partner
                      </div>
                      <div className="font-display font-semibold text-sm">
                        {cs.client}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 pt-4">
                    {cs.secondaryMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-2xl bg-white border border-ivory-border"
                      >
                        <div className="text-lg sm:text-xl font-display font-bold text-evergreen">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-ink-muted mt-0.5 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 7 Cols */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                      {cs.pillar}
                    </span>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-display font-semibold text-ink">
                      {cs.title}
                    </h2>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-ivory-light border border-ivory-border/80">
                        <div className="text-xs font-semibold text-ink">
                          The Challenge
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-evergreen/5 border border-evergreen/15">
                        <div className="text-xs font-semibold text-evergreen">
                          The SRF Solution
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-ivory-border">
                      <div className="text-xs font-semibold text-ink mb-2.5">
                        Verified Impact
                      </div>
                      <ul className="space-y-2">
                        {cs.impact.map((imp) => (
                          <li
                            key={imp}
                            className="flex items-start gap-2 text-xs sm:text-sm text-ink-muted"
                          >
                            <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ivory-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-ivory-light border border-ivory-border text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModalCase(cs)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-evergreen hover:text-bronze"
                    >
                      <span>Quick Summary</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Smooth Spring Modal */}
      <AnimatePresence>
        {activeModalCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalCase(null)}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(6px)" }}
              transition={SPRING_SNAPPY}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-ivory-border rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-floating space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                    {activeModalCase.sector}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-ink mt-2">
                    {activeModalCase.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="p-2 rounded-full bg-ivory-light text-ink-muted hover:text-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {activeModalCase.secondaryMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-2xl bg-ivory-light border border-ivory-border"
                  >
                    <div className="text-lg font-display font-bold text-evergreen">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-ink-muted">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {activeModalCase.solution}
              </p>

              <div className="pt-3 border-t border-ivory-border flex items-center justify-between">
                <Link
                  href={`/contact?case=${encodeURIComponent(
                    activeModalCase.title
                  )}`}
                  className="px-5 py-2.5 rounded-full bg-evergreen text-ivory text-xs font-medium"
                >
                  Commission Similar Work
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="text-xs text-ink-muted hover:text-ink"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
