"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY_INFO, CORE_VALUES, SECTORS } from "@/data/srfData";
import { InteractiveArchitectEmblem } from "@/components/brand/InteractiveArchitectEmblem";
import { BlurFade, SPRING_SNAPPY } from "@/components/motion/MotionPrimitives";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="soft-ivory-gradient space-y-24 lg:space-y-28 pb-16 pt-10 lg:pt-14">
      {/* Clean, Professional About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-3xl bg-white border border-ivory-border shadow-elevated overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                  Who We Are
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold tracking-tightest text-ink leading-[1.08]">
                  Building stronger institutions{" "}
                  <span className="font-serif italic font-normal text-evergreen">
                    and capable teams across Nigeria.
                  </span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-ink leading-relaxed">
                  Smart Relief Facilitators Ltd (SRF) is a Nigerian management
                  consulting firm specializing in institutional development,
                  organizational effectiveness, and human capital strengthening.
                </p>
                <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
                  We work with government agencies, development partners, and
                  implementing organizations to build sustainable systems,
                  enhance workforce capabilities, and improve service delivery
                  outcomes that endure long after our formal engagement ends.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ivory-border flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-evergreen text-ivory text-xs font-medium hover:bg-evergreen-deep transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-bronze-light" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ivory-light border border-ivory-border text-ink text-xs font-medium hover:border-evergreen/40 transition-colors"
                >
                  <span>See Our Impact</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[320px] bg-evergreen">
              <img
                src="/images/capacity-workshop.png"
                alt="SRF strategy and capacity building session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-elevated">
                <div className="text-xs font-semibold text-evergreen">
                  Our Philosophy
                </div>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  Sustainable development is built on strong institutions and
                  empowered people. We don’t just offer advice—we work alongside
                  your team until results take hold.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlurFade delay={0.05}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_SNAPPY}
              className="rounded-3xl bg-white border border-ivory-border p-8 sm:p-10 shadow-subtle h-full"
            >
              <span className="px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                Our Mission
              </span>
              <h2 className="mt-4 text-2xl font-display font-semibold text-ink">
                Strengthening Capacity for Sustainable Impact
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={SPRING_SNAPPY}
              className="rounded-3xl bg-evergreen text-ivory p-8 sm:p-10 shadow-elevated h-full"
            >
              <span className="px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
                Our Vision
              </span>
              <h2 className="mt-4 text-2xl font-display font-semibold text-ivory">
                A Trusted Leader in Institutional Transformation
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ivory/85 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </motion.div>
          </BlurFade>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
              Our Core Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
              Six principles that guide every engagement.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <BlurFade key={val.code} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={SPRING_SNAPPY}
                className="rounded-3xl bg-white border border-ivory-border shadow-subtle p-7 h-full flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-evergreen/8 text-evergreen text-xs font-semibold">
                    {val.code}
                  </span>
                  <h3 className="mt-4 text-xl font-display font-semibold text-ink">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {val.detail}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
              Where We Create Impact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
              Sectoral expertise across national development.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS.map((sec, idx) => (
            <BlurFade key={sec.code} delay={idx * 0.06}>
              <div className="rounded-3xl bg-white border border-ivory-border p-6 shadow-subtle h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-semibold text-base text-ink">
                    {sec.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    {sec.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-border text-xs font-medium text-evergreen flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze" />
                  <span>{sec.metric}</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Our 4-Step Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
              Our Consulting Approach
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ink">
              How we turn strategy into lasting capability.
            </h2>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <InteractiveArchitectEmblem />
        </BlurFade>
      </section>
    </div>
  );
}
