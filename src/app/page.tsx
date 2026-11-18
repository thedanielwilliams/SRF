"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  COMPANY_INFO,
  SERVICE_PILLARS,
  CASE_STUDIES,
  CaseStudy,
} from "@/data/srfData";
import { SrfEmblem } from "@/components/brand/SrfLogo";
import { InteractiveArchitectEmblem } from "@/components/brand/InteractiveArchitectEmblem";
import { RetentionTrajectoryChart } from "@/components/visualizations/RetentionTrajectoryChart";
import {
  BlurFade,
  AnimatedCounter,
  SonnerCardStack,
  SPRING_SNAPPY,
  EASE_OUT_EXPO,
} from "@/components/motion/MotionPrimitives";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  X,
  Building2,
  Users,
  Briefcase,
  Globe2,
} from "lucide-react";

const PILLAR_ICONS = [Building2, Users, Briefcase];

export default function HomePage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <div className="soft-ivory-gradient space-y-24 lg:space-y-32 pb-16">
      {/* =====================================================================
          01 // HERO — CLEAR, IMMEDIATE UNDERSTANDING OF WHAT SRF DOES
      ===================================================================== */}
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <BlurFade delay={0.04}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-ivory-border shadow-subtle text-xs font-medium text-evergreen">
                  <span className="w-2 h-2 rounded-full bg-bronze" />
                  <span>Management Consulting & Capacity Building · Nigeria</span>
                </div>
              </BlurFade>

              <BlurFade delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-semibold tracking-tightest text-ink leading-[1.06]">
                  Stronger institutions.{" "}
                  <span className="block font-serif italic font-normal text-evergreen mt-1">
                    Strategy that takes hold.
                  </span>
                </h1>
              </BlurFade>

              <BlurFade delay={0.18}>
                <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
                  {COMPANY_INFO.heroSubheadline}
                </p>
              </BlurFade>

              <BlurFade delay={0.24}>
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING_SNAPPY}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-evergreen text-ivory text-sm font-medium hover:bg-evergreen-deep transition-colors shadow-elevated"
                    >
                      <span>Work With Us</span>
                      <ArrowRight className="w-4 h-4 text-bronze-light" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING_SNAPPY}
                  >
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-ivory-border text-ink text-sm font-medium hover:border-evergreen/40 transition-colors shadow-subtle"
                    >
                      <span>Explore Our Services</span>
                      <ArrowUpRight className="w-4 h-4 text-bronze" />
                    </Link>
                  </motion.div>
                </div>
              </BlurFade>

              {/* Quick 3-Pillar Summary Strip for Instant Clarity */}
              <BlurFade delay={0.32}>
                <div className="pt-6 border-t border-ivory-border/80">
                  <div className="text-xs font-medium text-ink-subtle mb-3">
                    Who we serve: Government Agencies · Development Partners
                    (World Bank, GIZ) · Implementing Organizations
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SERVICE_PILLARS.map((p) => (
                      <Link
                        key={p.id}
                        href={`/services#${p.id}`}
                        className="group p-3.5 rounded-2xl bg-white/85 border border-ivory-border/80 hover:border-evergreen/40 shadow-subtle transition-all flex items-center justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-medium text-bronze">
                            0{p.index}
                          </div>
                          <div className="text-xs font-semibold text-ink group-hover:text-evergreen transition-colors">
                            {p.title}
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-ink-subtle group-hover:text-evergreen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Right 5 Columns: Clean Visual Hero Card */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.16} yOffset={20}>
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-floating border border-ivory-border p-3">
                  <div className="relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden">
                    <motion.img
                      src="/images/hero-boardroom.png"
                      alt="SRF consulting team collaborating with institutional leaders in Abuja"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                    {/* Top Floating Pill */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-ink text-xs font-medium shadow-subtle flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-evergreen" />
                        Abuja, Nigeria
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-evergreen/90 backdrop-blur-md text-ivory text-xs font-medium">
                        21+ States Reached
                      </span>
                    </div>

                    {/* Bottom Floating Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-elevated flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-evergreen">
                          Hands-On Implementation Partner
                        </div>
                        <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                          We don’t just write strategy reports—we work alongside
                          your team until new systems take hold.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-ivory-light border border-ivory-border shrink-0">
                        <SrfEmblem className="w-9 h-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 // WHAT WE DO — 3 CLEAR SERVICE PILLARS (SCANNABLE & DIGESTIBLE)
      ===================================================================== */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                  What We Do
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
                  Three core ways we help organizations succeed.
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                  Whether you are reforming a public agency, training a national
                  workforce, or rolling out a donor-funded programme, our work
                  focuses on three areas:
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-medium text-evergreen hover:text-bronze transition-colors shrink-0"
              >
                <span>View full service details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICE_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <BlurFade key={pillar.id} delay={idx * 0.08}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={SPRING_SNAPPY}
                    className="rounded-3xl bg-white border border-ivory-border shadow-subtle hover:shadow-elevated transition-shadow p-7 sm:p-8 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-evergreen/8 border border-evergreen/15 flex items-center justify-center text-evergreen">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-bronze">
                          0{pillar.index}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-display font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-evergreen">
                        {pillar.subtitle}
                      </p>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                        {pillar.shortSummary}
                      </p>

                      <div className="mt-6 pt-5 border-t border-ivory-border space-y-2.5">
                        {pillar.offerings.map((off) => (
                          <div
                            key={off.code}
                            className="flex items-start gap-2.5 text-xs text-ink"
                          >
                            <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0 mt-0.5" />
                            <span className="font-medium">{off.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-4 border-t border-ivory-border">
                      <Link
                        href={`/services#${pillar.id}`}
                        className="inline-flex items-center justify-between w-full text-xs font-medium text-evergreen hover:text-bronze transition-colors"
                      >
                        <span>Learn how we deliver this</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 // WHY PARTNER WITH SRF — CLEAN BENTO GRID & ANIMATED METRICS
      ===================================================================== */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                Why Partner With SRF
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
                Advisory that stays until the work is done.
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                Many consulting projects fail because recommendations stay on
                paper. We bridge the gap between high-level strategy and
                day-to-day execution.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bento 1 (7 Cols): Retention Trajectory Chart */}
            <BlurFade delay={0.05} className="lg:col-span-7">
              <RetentionTrajectoryChart />
            </BlurFade>

            {/* Bento 2 (5 Cols): Interactive Sonner Stack */}
            <BlurFade delay={0.12} className="lg:col-span-5">
              <div className="rounded-3xl border border-ivory-border bg-white shadow-subtle p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bronze/15 text-bronze-dark">
                    Our Toolkit
                  </span>
                  <h3 className="text-xl font-display font-semibold text-ink mt-2">
                    Evidence-Based & Digitally Enabled
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                    Hover or tap the stack below to see the diagnostic, design,
                    and digital tools we use to deliver measurable results.
                  </p>

                  <SonnerCardStack />
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-border flex items-center justify-between text-xs text-ink-muted">
                  <span>OCAT · PCAT · Power BI · 3D Learning</span>
                  <Link
                    href="/services"
                    className="font-medium text-evergreen hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore toolkit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </BlurFade>

            {/* Bento 3 (5 Cols): Local Expertise, Global Standards */}
            <BlurFade delay={0.16} className="lg:col-span-5">
              <div className="rounded-3xl bg-evergreen text-ivory p-7 sm:p-8 h-full flex flex-col justify-between shadow-elevated">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>Local Expertise, Global Standards</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-display font-semibold text-ivory">
                    Tailored to Nigerian realities. Built to international
                    benchmarks.
                  </h3>
                  <p className="mt-3 text-sm text-ivory/80 leading-relaxed">
                    We combine deep experience working across Nigerian federal,
                    state, and local government levels with strict adherence to
                    World Bank and international donor compliance frameworks.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-ivory/15 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-evergreen-deep/70 border border-ivory/10">
                    <div className="text-xs font-semibold text-bronze-light">
                      Nigerian Context
                    </div>
                    <div className="text-xs text-ivory/80 mt-1">
                      Practical solutions built for local institutions & field
                      terrains.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-evergreen-deep/70 border border-ivory/10">
                    <div className="text-xs font-semibold text-bronze-light">
                      Global Compliance
                    </div>
                    <div className="text-xs text-ivory/80 mt-1">
                      Aligned with World Bank, GIZ & multilateral standards.
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Bento 4 (7 Cols): Proven Track Record Numbers */}
            <BlurFade delay={0.2} className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-ivory-border shadow-subtle p-7 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-evergreen/8 text-evergreen">
                    Proven Track Record
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-display font-semibold text-ink">
                    Measurable impact across health, youth, and public reform
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-muted">
                    Our results are verified through independent monitoring,
                    post-training audits, and lasting institutional adoption.
                  </p>
                </div>

                <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      value: 21,
                      suffix: " States",
                      label: "Immunization capacity scaled with NPHCDA",
                    },
                    {
                      value: 5000,
                      suffix: "+",
                      label: "Frontline health workers trained via 3D tools",
                    },
                    {
                      value: 78,
                      suffix: "%",
                      label: "Verified employment rate within 6 months",
                    },
                    {
                      value: 535,
                      suffix: "",
                      label: "Youth graduates equipped with starter tools",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl bg-ivory-light border border-ivory-border/80"
                    >
                      <div className="text-2xl sm:text-3xl font-display font-bold text-evergreen">
                        <AnimatedCounter
                          value={item.value}
                          suffix={item.suffix}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-ink-muted leading-snug">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-ivory-border flex items-center justify-between text-xs">
                  <span className="text-ink-muted">
                    Partners include NPHCDA, GIZ & state authorities
                  </span>
                  <Link
                    href="/projects"
                    className="font-medium text-evergreen hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read case studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 // HOW WE WORK — 4-STEP CONSULTING PROCESS
      ===================================================================== */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="max-w-2xl mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                How We Work
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
                A clear four-step journey from diagnosis to full ownership.
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                Every engagement follows a structured four-phase cycle so your
                team is supported from initial assessment through to complete
                operational independence.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.08}>
            <InteractiveArchitectEmblem />
          </BlurFade>
        </div>
      </section>

      {/* =====================================================================
          05 // SELECTED CASE STUDIES — SCANNABLE CARDS + SMOOTH MODAL
      ===================================================================== */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                  Our Work in Action
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
                  Recent projects & verified outcomes.
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Click any project below to view the challenge, solution, and
                  results.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-ivory-border text-xs font-medium text-ink hover:border-evergreen transition-colors shadow-subtle"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
              </Link>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <BlurFade key={cs.id} delay={idx * 0.07}>
                <motion.div
                  layoutId={`case-card-${cs.id}`}
                  onClick={() => setSelectedCase(cs)}
                  whileHover={{ y: -4 }}
                  transition={SPRING_SNAPPY}
                  className="cursor-pointer rounded-3xl bg-white border border-ivory-border shadow-subtle hover:shadow-elevated p-6 sm:p-8 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="px-3 py-1 rounded-full bg-ivory-light border border-ivory-border text-xs font-medium text-evergreen">
                        {cs.sector}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {cs.location}
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline justify-between gap-4 pb-5 border-b border-ivory-border">
                      <div>
                        <div className="text-xs text-ink-subtle">
                          Client / Partner
                        </div>
                        <div className="text-sm font-semibold text-ink mt-0.5">
                          {cs.client}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl sm:text-3xl font-display font-bold text-evergreen">
                          {cs.headlineMetric}
                        </div>
                        <div className="text-[11px] text-bronze font-medium">
                          Key Outcome
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-display font-semibold text-ink group-hover:text-evergreen transition-colors">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {cs.shortSummary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ivory-border flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[11px] bg-ivory-light text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-evergreen group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>Read Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>

          {/* Shared layoutId Expanded Case Study Modal */}
          <AnimatePresence>
            {selectedCase && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <motion.div
                  layoutId={`case-card-${selectedCase.id}`}
                  transition={SPRING_SNAPPY}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white border border-ivory-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-floating overflow-hidden max-h-[85vh] overflow-y-auto"
                >
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-ivory-border">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                        {selectedCase.sector} · {selectedCase.location}
                      </span>
                      <h3 className="text-2xl font-display font-semibold text-ink mt-2">
                        {selectedCase.title}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Client / Partner: {selectedCase.client}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(null)}
                      className="p-2 rounded-full bg-ivory-light text-ink-muted hover:text-ink"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-5">
                    {selectedCase.secondaryMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-2xl bg-ivory-light border border-ivory-border"
                      >
                        <div className="text-xl font-display font-bold text-evergreen">
                          {m.value}
                        </div>
                        <div className="text-xs text-ink-muted mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
                    <div className="p-4 rounded-2xl bg-ivory-light/70">
                      <div className="text-xs font-semibold text-ink mb-1">
                        The Challenge
                      </div>
                      <p className="text-xs sm:text-sm">
                        {selectedCase.challenge}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-evergreen/5">
                      <div className="text-xs font-semibold text-evergreen mb-1">
                        The SRF Solution
                      </div>
                      <p className="text-xs sm:text-sm">
                        {selectedCase.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink mb-2">
                        Verified Impact
                      </div>
                      <ul className="space-y-2">
                        {selectedCase.impact.map((imp) => (
                          <li
                            key={imp}
                            className="flex items-start gap-2 text-xs sm:text-sm text-ink"
                          >
                            <CheckCircle2 className="w-4 h-4 text-evergreen shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ivory-border flex items-center justify-between">
                    <Link
                      href={`/contact?case=${encodeURIComponent(
                        selectedCase.title
                      )}`}
                      className="px-5 py-2.5 rounded-full bg-evergreen text-ivory text-xs font-medium hover:bg-evergreen-deep"
                    >
                      Discuss a Similar Project
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(null)}
                      className="text-xs font-medium text-ink-muted hover:text-ink"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
