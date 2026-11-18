"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SrfLogo } from "@/components/brand/SrfLogo";
import { SPRING_SNAPPY } from "@/components/motion/MotionPrimitives";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory-light/85 backdrop-blur-xl border-b border-ivory-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="focus:outline-none flex items-center gap-3"
          aria-label="Smart Relief Facilitators Home"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_SNAPPY}
          >
            <SrfLogo size="sm" />
          </motion.div>
        </Link>

        {/* Desktop Pill Navigation with Gliding Spring Indicator */}
        <nav
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-ivory-warm/80 border border-ivory-border/80"
          aria-label="Main Navigation"
          onMouseLeave={() => setHoveredHref(null)}
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            const isHighlighted =
              hoveredHref !== null ? hoveredHref === item.href : isActive;

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredHref(item.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors z-10 ${
                  isActive
                    ? "text-ink font-semibold"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {isHighlighted && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full bg-white shadow-subtle border border-ivory-border/70 -z-10"
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {item.label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-evergreen" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Primary CTA */}
        <div className="hidden md:flex items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-evergreen text-ivory text-xs font-medium hover:bg-evergreen-deep transition-colors shadow-subtle"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze-light" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white border border-ivory-border text-ink shadow-subtle"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Smooth Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-ivory-border bg-ivory-light px-4 pt-3 pb-6 space-y-2"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-evergreen text-ivory"
                      : "bg-white text-ink border border-ivory-border"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-bronze-light" />
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-evergreen text-ivory text-xs font-medium"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 text-bronze-light" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
