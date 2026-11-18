"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO, SERVICE_PILLARS } from "@/data/srfData";
import { BlurFade } from "@/components/motion/MotionPrimitives";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orgType, setOrgType] = useState("Government Ministry / Public Agency");
  const [selectedPillar, setSelectedPillar] = useState(
    SERVICE_PILLARS[0].title
  );
  const [diagnosticNeeds, setDiagnosticNeeds] = useState<string[]>([
    "OCAT / PCAT Capacity Assessment",
  ]);
  const [briefSummary, setBriefSummary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleNeed = (need: string) => {
    setDiagnosticNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="soft-ivory-gradient space-y-16 lg:space-y-20 pb-16 pt-10 lg:pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-3xl bg-evergreen text-ivory p-8 sm:p-12 lg:p-14 shadow-elevated">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold tracking-tightest text-ivory leading-[1.08] max-w-3xl">
              Let’s build{" "}
              <span className="font-serif italic font-normal text-bronze-light">
                strategy that takes hold.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl">
              Reach out to our Abuja team for project inquiries, Expressions of
              Interest (EOIs), institutional capacity assessments, or workforce
              training across Nigeria.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 5 Cols */}
          <BlurFade delay={0.05} className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-ivory-border shadow-subtle p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-evergreen/8 text-evergreen text-xs font-medium">
                  Get in Touch
                </span>
                <h2 className="mt-3 text-2xl font-display font-semibold text-ink">
                  Abuja Office
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Our advisory team responds to inquiries from government
                  agencies, development partners, and organizations within one
                  business day.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="p-4 rounded-2xl bg-ivory-light border border-ivory-border flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-evergreen shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-ink">
                        Address
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-ink-muted">
                        {COMPANY_INFO.contact.address}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-ivory-light border border-ivory-border flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-evergreen shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-ink">
                        Email
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="mt-1 block text-sm font-medium text-evergreen hover:underline"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-ivory-light border border-ivory-border flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-evergreen shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-ink">
                        Phone
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.contact.phone}`}
                        className="mt-1 block text-sm font-medium text-ink hover:text-evergreen"
                      >
                        {COMPANY_INFO.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-evergreen text-ivory">
                <div className="text-xs font-semibold text-bronze-light">
                  Partner & Donor Compliance
                </div>
                <p className="mt-1 text-xs text-ivory/85 leading-relaxed">
                  SRF maintains full statutory compliance and fiduciary
                  readiness for Federal/State ministries, World Bank projects,
                  and bilateral agencies (GIZ, UN, INGOs).
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right 7 Cols */}
          <BlurFade delay={0.12} className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-ivory-border shadow-elevated p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    className="p-6 sm:p-8 rounded-2xl bg-evergreen/5 border border-evergreen/20 space-y-5"
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-evergreen">
                      <CheckCircle2 className="w-4 h-4 text-bronze" />
                      Inquiry Prepared
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-ink">
                      Thank you, {name || "Partner"}.
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      Your inquiry for{" "}
                      <strong>{organization || "your organization"}</strong>{" "}
                      under <strong>{selectedPillar}</strong> is ready to send.
                    </p>

                    <div className="p-4 rounded-2xl bg-white border border-ivory-border text-xs space-y-1.5 text-ink-muted">
                      <div>
                        <strong className="text-ink">Organization:</strong>{" "}
                        {organization} ({orgType})
                      </div>
                      <div>
                        <strong className="text-ink">Service Area:</strong>{" "}
                        {selectedPillar}
                      </div>
                      <div>
                        <strong className="text-ink">Focus Areas:</strong>{" "}
                        {diagnosticNeeds.join(", ")}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
                          `Partnership Inquiry: ${organization || name}`
                        )}&body=${encodeURIComponent(
                          `Organization: ${organization}\nType: ${orgType}\nService Area: ${selectedPillar}\nFocus Areas: ${diagnosticNeeds.join(
                            ", "
                          )}\n\nSummary:\n${briefSummary}`
                        )}`}
                        className="px-5 py-3 rounded-full bg-evergreen text-ivory text-xs font-medium"
                      >
                        Send via Email
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-3 rounded-full border border-ivory-border text-xs font-medium text-ink"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-display font-semibold text-ink">
                        Start a Conversation
                      </h3>
                      <p className="text-xs text-ink-muted mt-1">
                        Tell us about your organization and how we can help.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">
                          Full Name & Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dr. Amina Bello"
                          className="w-full px-4 py-3 rounded-xl bg-ivory-light border border-ivory-border text-sm text-ink focus:outline-none focus:border-evergreen transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@organization.org"
                          className="w-full px-4 py-3 rounded-xl bg-ivory-light border border-ivory-border text-sm text-ink focus:outline-none focus:border-evergreen transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">
                          Organization / Ministry *
                        </label>
                        <input
                          type="text"
                          required
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Organization name"
                          className="w-full px-4 py-3 rounded-xl bg-ivory-light border border-ivory-border text-sm text-ink focus:outline-none focus:border-evergreen transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink mb-1.5">
                          Organization Type
                        </label>
                        <select
                          value={orgType}
                          onChange={(e) => setOrgType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-ivory-light border border-ivory-border text-sm text-ink focus:outline-none focus:border-evergreen transition-colors"
                        >
                          <option>Government Ministry / Public Agency</option>
                          <option>
                            Development Partner (World Bank, GIZ, UN)
                          </option>
                          <option>Implementing NGO / Foundation</option>
                          <option>Private Sector Organization</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink mb-2">
                        How can we support you?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {SERVICE_PILLARS.map((p) => {
                          const isSelected = selectedPillar === p.title;
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setSelectedPillar(p.title)}
                              className={`p-3.5 rounded-2xl text-left border transition-colors ${
                                isSelected
                                  ? "bg-evergreen text-ivory border-evergreen"
                                  : "bg-ivory-light text-ink border-ivory-border hover:border-evergreen/40"
                              }`}
                            >
                              <div className="text-xs font-semibold">
                                {p.title}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink mb-2">
                        Specific Services of Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "OCAT / PCAT Capacity Assessment",
                          "5-Year Strategic Planning",
                          "Embedded Implementation Support",
                          "Monitoring, Evaluation & Learning (MEL)",
                          "Workforce Training & 3D Digital Modules",
                          "Supply Chain & Fiduciary Compliance",
                        ].map((need) => {
                          const active = diagnosticNeeds.includes(need);
                          return (
                            <motion.button
                              key={need}
                              type="button"
                              whileTap={{ scale: 0.96 }}
                              onClick={() => toggleNeed(need)}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-colors ${
                                active
                                  ? "bg-evergreen text-ivory border-evergreen"
                                  : "bg-ivory-light border-ivory-border text-ink-muted hover:text-ink"
                              }`}
                            >
                              {active ? "✓ " : "+ "}
                              {need}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink mb-1.5">
                        Project Overview
                      </label>
                      <textarea
                        rows={4}
                        value={briefSummary}
                        onChange={(e) => setBriefSummary(e.target.value)}
                        placeholder="Share a brief overview of your goals, timeline, or upcoming project..."
                        className="w-full px-4 py-3 rounded-xl bg-ivory-light border border-ivory-border text-sm text-ink focus:outline-none focus:border-evergreen transition-colors"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-evergreen text-ivory text-sm font-medium hover:bg-evergreen-deep transition-colors shadow-elevated"
                    >
                      <Send className="w-4 h-4 text-bronze-light" />
                      <span>Send Inquiry</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
