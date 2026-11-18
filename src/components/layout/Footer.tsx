import React from "react";
import Link from "next/link";
import { SrfLogo } from "@/components/brand/SrfLogo";
import { COMPANY_INFO, SERVICE_PILLARS } from "@/data/srfData";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-evergreen text-ivory mt-16 rounded-t-[2.5rem] overflow-hidden">
      {/* Top CTA Banner */}
      <div className="border-b border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory/10 text-bronze-light text-xs font-medium">
              Work With SRF
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-ivory leading-[1.15]">
              Ready to build stronger systems and capable teams?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ivory/80 max-w-2xl leading-relaxed">
              Whether you need an institutional capacity assessment, a 5-year
              strategic plan, workforce training, or embedded project delivery,
              our team in Abuja is ready to partner with you.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-ivory text-ink text-sm font-medium hover:bg-bronze-light transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-evergreen" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-ivory/10 text-ivory text-sm font-medium hover:bg-ivory/15 transition-colors"
            >
              <span>See Our Impact</span>
              <ArrowUpRight className="w-4 h-4 text-bronze-light" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-ivory/10">
        <div className="lg:col-span-4 space-y-4">
          <SrfLogo variant="reversed" size="md" showTagline />
          <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed max-w-sm">
            {COMPANY_INFO.heroSubheadline}
          </p>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="text-xs font-semibold text-bronze-light">
            Company
          </div>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            <li>
              <Link href="/" className="hover:text-ivory transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-ivory transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-ivory transition-colors"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-ivory transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-ivory transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-semibold text-bronze-light">
            Core Services
          </div>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            {SERVICE_PILLARS.map((pillar) => (
              <li key={pillar.id}>
                <Link
                  href={`/services#${pillar.id}`}
                  className="hover:text-ivory transition-colors"
                >
                  {pillar.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-semibold text-bronze-light">
            Abuja Office
          </div>
          <div className="space-y-3 text-sm text-ivory/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-bronze-light shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.contact.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-bronze-light shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="hover:text-ivory transition-colors"
              >
                {COMPANY_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-bronze-light shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="hover:text-ivory transition-colors"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory/60">
        <div>
          © {new Date().getFullYear()} Smart Relief Facilitators Ltd (SRF). All
          rights reserved.
        </div>
        <div>Management Consulting & Institutional Development · Nigeria</div>
      </div>
    </footer>
  );
}
