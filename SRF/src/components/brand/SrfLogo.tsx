"use client";

import React from "react";

interface SrfLogoProps {
  variant?: "default" | "reversed" | "monochrome";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  activePhase?: number | null; // 0, 1, 2, 3 for interactive highlighting
}

export function SrfEmblem({
  variant = "default",
  className = "w-11 h-9",
  activePhase = null,
}: {
  variant?: "default" | "reversed" | "monochrome";
  className?: string;
  activePhase?: number | null;
}) {
  // Colors from SRF Rebrand Concept Proposal (Page 5):
  // Deep Evergreen: #163F38
  // Mineral Bronze: #B38A56
  // Ink: #1A2725
  // Warm Ivory: #F6F2E9
  const cEvergreen =
    variant === "reversed"
      ? "#F6F2E9"
      : variant === "monochrome"
      ? "#163F38"
      : "#163F38";
  const cBronze =
    variant === "reversed"
      ? "#C9A679"
      : variant === "monochrome"
      ? "#163F38"
      : "#B38A56";
  const cInk =
    variant === "reversed"
      ? "#F6F2E9"
      : variant === "monochrome"
      ? "#163F38"
      : "#1A2725";

  const getOpacity = (index: number) => {
    if (activePhase === null || activePhase === undefined) return 1;
    return activePhase === index ? 1 : 0.28;
  };

  return (
    <svg
      viewBox="0 0 120 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SRF — The Institutional Architect Emblem"
    >
      {/* 01: Upper-Left Facet (Diagnose & Understand) — Deep Evergreen */}
      <path
        d="M21 31.5C21.6 28.2 23.5 25.5 26.4 23.9L53.2 9.1C55.4 7.9 58 9.5 58 12V34.2C58 35.9 56.9 37.4 55.3 38L19.8 50.8C17.6 51.6 15.4 49.6 16 47.3L21 31.5Z"
        fill={cEvergreen}
        style={{
          opacity: getOpacity(0),
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      />

      {/* 02: Upper-Right Facet (Design & Co-Create) — Mineral Bronze */}
      <path
        d="M65 12C65 9.5 67.6 7.9 69.8 9.1L95.8 23.8C98.6 25.4 100.4 28.2 100.8 31.4L103.5 47.4C103.9 49.8 101.5 51.7 99.3 50.8L67.6 38C66 37.4 65 35.9 65 34.2V12Z"
        fill={cBronze}
        style={{
          opacity: getOpacity(1),
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      />

      {/* 03: Lower-Left Foundation Pillar (Implement & Strengthen) — Deep Ink */}
      <path
        d="M11.5 65.2C12.3 61.9 14.8 59.3 18 58.2L49.4 47.4C53.2 46.1 57 49.4 56.2 53.3L50.4 81.4C49.9 83.5 48.1 85 46 85H10.2C7.8 85 6.1 82.7 6.7 80.4L11.5 65.2Z"
        fill={cInk}
        style={{
          opacity: getOpacity(2),
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      />

      {/* 04: Lower-Right Foundation Pillar (Learn & Sustain) — Deep Evergreen */}
      <path
        d="M67.2 52.8C66.5 49.1 70.1 46 73.7 47.3L99.5 56.6C102.6 57.7 104.8 60.5 105.2 63.8L107.4 80.6C107.7 83 105.8 85 103.4 85H76.8C74.7 85 72.9 83.5 72.5 81.4L67.2 52.8Z"
        fill={cEvergreen}
        style={{
          opacity: getOpacity(3),
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      />
    </svg>
  );
}

export function SrfLogo({
  variant = "default",
  showTagline = false,
  size = "md",
  className = "",
  activePhase = null,
}: SrfLogoProps) {
  const isReversed = variant === "reversed";

  const sizeMap = {
    sm: {
      emblem: "w-10 h-8",
      divider: "h-8",
      srf: "text-2xl tracking-[-0.04em]",
      sub: "text-[7.5px] tracking-[0.22em]",
      tagline: "text-xs",
    },
    md: {
      emblem: "w-12 h-10",
      divider: "h-10",
      srf: "text-[28px] tracking-[-0.04em]",
      sub: "text-[8.5px] tracking-[0.23em]",
      tagline: "text-sm",
    },
    lg: {
      emblem: "w-16 h-13",
      divider: "h-14",
      srf: "text-4xl tracking-[-0.045em]",
      sub: "text-[10px] tracking-[0.25em]",
      tagline: "text-base",
    },
  }[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-3.5">
        <SrfEmblem
          variant={variant}
          className={sizeMap.emblem}
          activePhase={activePhase}
        />
        <span
          className={`${sizeMap.divider} w-[1.5px] ${
            isReversed ? "bg-bronze-light/50" : "bg-bronze/70"
          }`}
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-display font-extrabold leading-[0.9] ${
              sizeMap.srf
            } ${isReversed ? "text-ivory" : "text-ink"}`}
          >
            SRF
          </span>
          <span
            className={`mt-1 font-sans font-semibold uppercase leading-[1.25] ${
              sizeMap.sub
            } ${isReversed ? "text-ivory/85" : "text-ink"}`}
          >
            SMART RELIEF
            <br />
            FACILITATORS
          </span>
        </div>
      </div>
      {showTagline && (
        <span
          className={`mt-2 font-serif italic tracking-tight ${sizeMap.tagline} ${
            isReversed ? "text-ivory/90" : "text-evergreen"
          }`}
        >
          Strategy that takes hold.
        </span>
      )}
    </div>
  );
}
