"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  SERVICE_PILLARS,
  TECHNICAL_COMPETENCIES,
  SECTORS,
} from "@/data/srfData";
import { InteractiveArchitectEmblem } from "@/components/brand/InteractiveArchitectEmblem";
import { InstitutionalDiagnosticScoper } from "@/components/visualizations/InstitutionalDiagnosticScoper";
import {
  BlurFade,
  SPRING_SNAPPY,
} from "@/components/motion/MotionPrimitives";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function ServicesPage() {
  const [expandedOffering, setExpandedOffering] = useState<string | null>(
    "ID-01"
  );

  return (
    <div className="soft-ivory-gradient space-y-24 lg:space-y-28 pb-16 pt-10 lg:pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-3xl bg-evergreen text-ivory p-8 sm:p-12 lg:p-14 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
                Services & Consulting Approach
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold tracking-tightest text-ivory leading-[1.08]">
                Integrated solutions for{" "}
                <span className="font-serif italic font-normal text-bronze-light">
                  sustainable institutional growth.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl">
                We provide the strategic architecture, empirical diagnostics
                (OCAT/PCAT), and embedded technical specialists required to
                strengthen institutions, empower workforces, and optimize
                delivery systems across Nigeria.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-2xl bg-evergreen-deep/80 border border-ivory/15 p-6 space-y-3">
              <div className="text-xs font-medium text-bronze-light">
                Core Capabilities
              </div>
              <ul className="space-y-2.5 text-sm text-ivory/90">
                {[
                  "Institutional Development",
                  "Human Capital Strengthening",
                  "Program Management & Technical Assistance",
                  "Digital & Geospatial MEL Analytics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* 3 Service Pillars with Smooth Spring Accordion Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <BlurFade>
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
              Our Three Pillars
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
              End-to-end capability across strategy, people, and delivery.
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-8">
          {SERVICE_PILLARS.map((pillar, idx) => (
            <BlurFade key={pillar.id} delay={idx * 0.08}>
              <div
                id={pillar.id}
                className="rounded-3xl bg-white border border-ivory-border shadow-subtle p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory-light border border-ivory-border text-xs font-medium text-evergreen">
                      {pillar.subtitle}
                    </span>
                    <h3 className="mt-3 text-2xl sm:text-3xl font-display font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-ivory-border">
                      <div className="text-xs font-semibold text-ink mb-2.5">
                        Verified Outcomes
                      </div>
                      <ul className="space-y-2">
                        {pillar.outcomes.map((out) => (
                          <li
                            key={out}
                            className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ivory-border">
                    <Link
                      href={`/contact?pillar=${encodeURIComponent(
                        pillar.title
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-evergreen hover:text-bronze transition-colors"
                    >
                      <span>Inquire about {pillar.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Spring Expandable Offerings */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                  <div className="text-xs font-medium text-ink-muted mb-1">
                    Core Offerings — Click to expand details
                  </div>
                  {pillar.offerings.map((off) => {
                    const isOpen = expandedOffering === off.code;
                    return (
                      <motion.div
                        key={off.code}
                        layout
                        transition={SPRING_SNAPPY}
                        onClick={() =>
                          setExpandedOffering(isOpen ? null : off.code)
                        }
                        className={`cursor-pointer rounded-2xl border p-5 transition-colors ${
                          isOpen
                            ? "bg-ivory-light border-evergreen/30 shadow-subtle"
                            : "bg-ivory-light/50 border-ivory-border hover:bg-ivory-light"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="font-display font-semibold text-base text-ink">
                            {off.title}
                          </h4>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={SPRING_SNAPPY}
                            className="p-1.5 rounded-full bg-white border border-ivory-border text-ink-muted"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </motion.div>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.24 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 pt-3 border-t border-ivory-border text-xs sm:text-sm text-ink-muted leading-relaxed">
                                {off.detail}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  <div className="pt-2 flex flex-wrap gap-2">
                    {pillar.frameworks.map((fw) => (
                      <span
                        key={fw}
                        className="px-3 py-1 rounded-full text-xs bg-evergreen/8 text-evergreen font-medium"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Interactive 4-Phase Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
              The SRF Methodology
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
              We don’t deliver a report and walk away.
            </h2>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <InteractiveArchitectEmblem />
        </BlurFade>
      </section>

      {/* Technical Toolkit & Sectoral Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TECHNICAL_COMPETENCIES.map((comp, idx) => (
            <BlurFade key={comp.code} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={SPRING_SNAPPY}
                className="rounded-3xl bg-white border border-ivory-border shadow-subtle p-6 sm:p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-ivory-light border border-ivory-border text-xs font-medium text-bronze">
                    Technical Toolkit
                  </span>
                  <h3 className="mt-4 text-xl font-display font-semibold text-ink">
                    {comp.category}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {comp.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Sectoral Expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS.map((sec, idx) => (
            <BlurFade key={sec.code} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={SPRING_SNAPPY}
                className="rounded-3xl bg-white border border-ivory-border p-6 shadow-subtle h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-semibold text-base text-ink">
                    {sec.title}
                  </h4>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    {sec.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-border text-xs font-medium text-evergreen">
                  {sec.metric}
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Diagnostic Scoper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <InstitutionalDiagnosticScoper />
        </BlurFade>
      </section>
    </div>
  );
}
