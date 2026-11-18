export interface ProcessStep {
  id: string;
  number: string;
  shortTitle: string;
  fullTitle: string;
  colorHex: string;
  summary: string;
  description: string;
  whatWeDo: string[];
  outcome: string;
}

export interface ServicePillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  shortSummary: string;
  description: string;
  offerings: {
    title: string;
    detail: string;
    code: string;
  }[];
  frameworks: string[];
  outcomes: string[];
  diagnosticMetrics: {
    label: string;
    baseline: number;
    postSrf: number;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector:
    | "Health Systems"
    | "Crisis Response & Digital"
    | "Human Capital & Youth"
    | "Public Sector Reform";
  pillar: string;
  location: string;
  headlineMetric: string;
  headlineLabel: string;
  secondaryMetrics: { value: string; label: string }[];
  shortSummary: string;
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  image: string;
}

export const COMPANY_INFO = {
  name: "Smart Relief Facilitators Ltd",
  shortName: "SRF",
  tagline: "Strategy that takes hold.",
  heroHeadline: "Stronger institutions. Lasting impact.",
  heroSubheadline:
    "We partner with government agencies, development organizations, and institutions across Nigeria to build stronger systems, develop capable teams, and turn strategy into real-world results.",
  mission:
    "To strengthen institutional capacity and human capital systems that enable governments and organizations to deliver sustainable, equitable, and high-impact development outcomes.",
  vision:
    "To be a recognized leader in management consulting and capacity development, known for evidence-based solutions, measurable results, and lasting institutional transformation.",
  contact: {
    email: "info@srfconsult.com",
    phone: "+234-803-816-0059",
    address: "14 Biskira, Ibrahim Sani Abacha Estate, Zone 4, Abuja, Nigeria",
    city: "Abuja, Nigeria",
  },
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "diagnose",
    number: "01",
    shortTitle: "Diagnose & Listen",
    fullTitle: "Diagnostic & Needs Assessment",
    colorHex: "#163F38",
    summary: "Understand the real bottlenecks before proposing solutions.",
    description:
      "Before we recommend any changes, we listen to your people and assess how your systems currently work on the ground using proven organizational diagnostic tools (OCAT and PCAT).",
    whatWeDo: [
      "Organizational & Public Capacity Assessments (OCAT / PCAT)",
      "Skills gap analysis across leadership and frontline teams",
      "Operational bottleneck and risk mapping",
    ],
    outcome: "A clear, data-backed baseline of where your institution stands today.",
  },
  {
    id: "design",
    number: "02",
    shortTitle: "Co-Create Strategy",
    fullTitle: "Strategy & Co-Creation",
    colorHex: "#B38A56",
    summary: "Build practical roadmaps with your team, not just for them.",
    description:
      "The most durable strategies are built alongside the people who will run them. We facilitate collaborative design sprints to craft practical roadmaps that fit both local realities and global donor standards.",
    whatWeDo: [
      "5-year strategic & operational planning",
      "Human-Centered Design (HCD) workflow workshops",
      "Theory of Change (ToC) and results framework mapping",
    ],
    outcome: "An actionable roadmap that your leadership and frontline teams genuinely own.",
  },
  {
    id: "implement",
    number: "03",
    shortTitle: "Embed & Execute",
    fullTitle: "Embedded Implementation Support",
    colorHex: "#1A2725",
    summary: "Work side-by-side to put new systems into daily practice.",
    description:
      "Unlike firms that hand over a report and walk away, we embed technical specialists directly within your organization to support rollout, coach managers, and solve field challenges in real time.",
    whatWeDo: [
      "Embedded technical advisors & project oversight",
      "Hands-on workforce training & low-bandwidth 3D learning",
      "Supply chain, logistics & donor fiduciary compliance",
    ],
    outcome: "Smooth adoption of new systems without disrupting daily operations.",
  },
  {
    id: "sustain",
    number: "04",
    shortTitle: "Measure & Hand Over",
    fullTitle: "Evaluation, Learning & Sustainability",
    colorHex: "#163F38",
    summary: "Transfer full capability so results endure after we leave.",
    description:
      "Our ultimate measure of success is your independence. We set up live Monitoring, Evaluation, and Learning (MEL) dashboards and complete structured knowledge transfer so your team can sustain growth on its own.",
    whatWeDo: [
      "Real-time Power BI & geospatial MEL dashboards",
      "Verified outcome & impact evaluation",
      "Structured institutional handover & leadership coaching",
    ],
    outcome: "A self-reliant institution that continues improving long after our exit.",
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "institutional-development",
    index: "01",
    title: "Institutional Development",
    subtitle: "Building the Architecture of Success",
    shortSummary:
      "We help organizations move from surviving to thriving through clear strategy, structural diagnostics, and real-time performance tracking.",
    description:
      "By conducting rigorous organizational assessments (OCAT/PCAT) and designing practical Monitoring, Evaluation, and Learning (MEL) systems, we ensure your institution is built on data-driven strategy and structural clarity.",
    offerings: [
      {
        code: "ID-01",
        title: "Strategic Planning & Organizational Design",
        detail:
          "Crafting 5-year strategic roadmaps, governance structures, and operating models aligned with national priorities and World Bank / international donor standards.",
      },
      {
        code: "ID-02",
        title: "Institutional Capacity Assessments (OCAT / PCAT)",
        detail:
          "Deep-dive structural diagnostics using Organizational and Public Capacity Assessment Tools to pinpoint bottlenecks and prioritize high-impact reforms.",
      },
      {
        code: "ID-03",
        title: "MEL System Design & Implementation",
        detail:
          "End-to-end Monitoring, Evaluation, and Learning systems with live Power BI and geospatial dashboards to track results and guide decisions.",
      },
    ],
    frameworks: [
      "OCAT / PCAT Diagnostics",
      "Theory of Change",
      "5-Year Strategic Roadmaps",
      "Power BI & Geospatial MEL",
    ],
    outcomes: [
      "Modernized Community Development Plans across Adamawa LGAs with GIZ",
      "Strengthened national immunization MEL tracking across 21 Nigerian states",
      "Audit-ready governance structures for public and donor-funded agencies",
    ],
    diagnosticMetrics: [
      { label: "Governance & Strategic Clarity", baseline: 42, postSrf: 91 },
      { label: "MEL Data & Decision Systems", baseline: 35, postSrf: 88 },
      { label: "Process & Structural Alignment", baseline: 48, postSrf: 89 },
    ],
  },
  {
    id: "human-capital",
    index: "02",
    title: "Human Capital Development",
    subtitle: "Empowering Your Greatest Asset",
    shortSummary:
      "We close technical skills gaps and build confident leaders through tailored coaching, practical workforce training, and digital learning.",
    description:
      "Transformation begins with people. We design leadership coaching, technical training, and change management programs tailored to the modern Nigerian professional landscape—including digital modules that work in low-bandwidth areas.",
    offerings: [
      {
        code: "HC-01",
        title: "Leadership Development & Executive Coaching",
        detail:
          "Tailored coaching and management clinics for public sector directors, programme leads, and executives leading organizational change.",
      },
      {
        code: "HC-02",
        title: "Technical Skills Gap Analysis",
        detail:
          "Competency mapping, role alignment, and practical training curricula tied directly to measurable service-delivery improvements.",
      },
      {
        code: "HC-03",
        title: "Change Management & Digital Workforce Training",
        detail:
          "High-adoption training suites—including 3D animated modules for low-bandwidth environments and post-training mentorship and tooling.",
      },
    ],
    frameworks: [
      "Human-Centered Design",
      "Skills Gap Audits",
      "Low-Bandwidth 3D Learning",
      "Post-Training Mentorship",
    ],
    outcomes: [
      "5,000+ frontline health workers trained via low-bandwidth 3D modules",
      "78% verified employment rate within 6 months across 535 trained youth",
      "State-level health administrator training scaled across 21 Nigerian states",
    ],
    diagnosticMetrics: [
      { label: "Workforce Technical Competency", baseline: 44, postSrf: 90 },
      { label: "Protocol Adoption & Retention", baseline: 38, postSrf: 86 },
      { label: "Leadership Autonomy Post-Exit", baseline: 40, postSrf: 92 },
    ],
  },
  {
    id: "program-management",
    index: "03",
    title: "Program Management & Technical Assistance",
    subtitle: "Turning Strategy into Impact",
    shortSummary:
      "We bridge the gap between project design and field execution with embedded specialists, supply chain optimization, and fiduciary oversight.",
    description:
      "Our team works alongside yours to manage complex programmes, ensure strict donor and fiduciary compliance, and optimize supply chains across health, humanitarian, and public sectors.",
    offerings: [
      {
        code: "PM-01",
        title: "Embedded Implementation Support & Project Oversight",
        detail:
          "Deploying experienced technical specialists inside partner agencies and programme units to keep execution on track and resolve field bottlenecks.",
      },
      {
        code: "PM-02",
        title: "Donor Compliance & Fiduciary Management",
        detail:
          "Ensuring programmes meet World Bank, bilateral, and multilateral financial controls, audit standards, and transparent reporting requirements.",
      },
      {
        code: "PM-03",
        title: "Supply Chain & Logistics Optimization",
        detail:
          "Improving last-mile delivery, vaccine cold-chain reliability, and data-driven resource allocation across diverse terrains.",
      },
    ],
    frameworks: [
      "World Bank Frameworks",
      "Fiduciary & Audit Controls",
      "Cold-Chain Logistics",
      "Embedded PMO Delivery",
    ],
    outcomes: [
      "Improved vaccine cold-chain reliability across 21 states with NPHCDA",
      "Full fiduciary alignment with international development partners",
      "End-to-end physical tooling and business mentorship for 535 graduates",
    ],
    diagnosticMetrics: [
      { label: "Fiduciary & Donor Compliance", baseline: 51, postSrf: 96 },
      { label: "Supply Chain Reliability", baseline: 39, postSrf: 87 },
      { label: "On-Schedule Milestone Delivery", baseline: 45, postSrf: 93 },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nphcda-immunization",
    title: "Strengthening National Immunization Systems",
    client: "National Primary Health Care Development Agency (NPHCDA)",
    sector: "Health Systems",
    pillar: "Institutional Development & Supply Chain",
    location: "21 States Across Nigeria",
    headlineMetric: "21 States",
    headlineLabel: "Scaled institutional capacity & vaccine cold-chain reliability",
    secondaryMetrics: [
      { value: "21", label: "Nigerian States Reached" },
      { value: "OCAT / MEL", label: "Diagnostic & Tracking System" },
      { value: "100%", label: "State Administrator Coverage" },
    ],
    shortSummary:
      "Assessed institutional capacity and trained state-level health administrators across 21 states to improve vaccine cold-chain reliability and national immunization tracking.",
    challenge:
      "Addressing systemic gaps in immunization coverage, state-level administrative coordination, and cold-chain efficiency across diverse geographical terrains.",
    solution:
      "Conducted a comprehensive institutional capacity assessment and designed a tailored training and operational framework for state-level health administrators.",
    impact: [
      "Successfully scaled capacity-building initiatives across 21 Nigerian states.",
      "Improved supply chain reliability for life-saving vaccines.",
      "Strengthened the Monitoring, Evaluation, and Learning (MEL) framework for national immunization tracking.",
    ],
    tags: ["Capacity Assessment", "Cold-Chain Logistics", "National MEL"],
    image: "/images/field-health-systems.png",
  },
  {
    id: "digital-crisis-response",
    title: "Digital Innovation in Public Health Crisis Response",
    client: "National Frontline Healthcare Network",
    sector: "Crisis Response & Digital",
    pillar: "Human Capital & Digital Learning",
    location: "Nationwide · Multi-Tier Healthcare",
    headlineMetric: "5,000+",
    headlineLabel: "Frontline health workers trained in low-bandwidth zones",
    secondaryMetrics: [
      { value: "5,000+", label: "Frontline Workers Trained" },
      { value: "3D Suite", label: "Low-Bandwidth Modules" },
      { value: "Multi-Tier", label: "Standardized Safety Protocols" },
    ],
    shortSummary:
      "Built a remote-accessible 3D animated training suite engineered for low-bandwidth environments to rapidly train over 5,000 frontline health workers.",
    challenge:
      "The urgent need to train thousands of frontline health workers on critical safety protocols during restricted physical movement and limited internet connectivity.",
    solution:
      "Developed an innovative, remote-accessible training suite featuring 3D animated modules and interactive learning tools designed specifically for low-bandwidth environments.",
    impact: [
      "Successfully reached and trained over 5,000 frontline health workers.",
      "Standardized clinical safety protocols across multiple healthcare tiers.",
      "Created a reusable digital learning asset for future public health emergencies.",
    ],
    tags: ["3D Digital Learning", "Low-Bandwidth Tech", "Health Workforce"],
    image: "/images/capacity-workshop.png",
  },
  {
    id: "youth-vocational-excellence",
    title: "Empowering Youth through Vocational Excellence",
    client: "Regional Economic Empowerment Programme",
    sector: "Human Capital & Youth",
    pillar: "Human Capital & Program Management",
    location: "Community Economic Hubs · Nigeria",
    headlineMetric: "78%",
    headlineLabel: "Verified employment rate within 6 months of completion",
    secondaryMetrics: [
      { value: "78%", label: "6-Month Employment Rate" },
      { value: "535", label: "Graduated Beneficiaries" },
      { value: "100%", label: "Post-Training Tooling Kits" },
    ],
    shortSummary:
      "Combined market-aligned vocational training with physical starter tools and business mentorship for 535 youth, achieving a 78% employment rate within six months.",
    challenge:
      "Bridging the gap between conventional vocational training and real market demand to measurably reduce youth unemployment.",
    solution:
      "Managed a comprehensive 'tooling and post-training support' program—providing not only technical skills but also the physical tools and business mentorship required for self-employment.",
    impact: [
      "535 beneficiaries successfully completed the program.",
      "Achieved a verified 78% employment/self-employment rate within six months of completion.",
      "Established a sustainable model for community-based economic development.",
    ],
    tags: ["Vocational Tooling", "Youth Employment", "Mentorship"],
    image: "/images/capacity-workshop.png",
  },
  {
    id: "giz-adamawa-reform",
    title: "Evidence-Based Public Sector Reform",
    client: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    sector: "Public Sector Reform",
    pillar: "Institutional Development",
    location: "Adamawa State · Local Government Areas",
    headlineMetric: "LGA-Wide",
    headlineLabel: "Modernized, data-driven Community Development Plans",
    secondaryMetrics: [
      { value: "GIZ", label: "Development Partner" },
      { value: "CDPs", label: "Retooled LGA Plans" },
      { value: "Data-Led", label: "Stakeholder Consultation" },
    ],
    shortSummary:
      "Partnered with GIZ to lead sectoral analysis and stakeholder consultations in Adamawa State, producing modernized Community Development Plans for local authorities.",
    challenge:
      "Outdated Community Development Plans (CDPs) in Adamawa State that no longer reflected current socio-economic realities or community priorities.",
    solution:
      "Led a rigorous sectoral analysis and stakeholder consultation process to retool development plans based on real-time data and community needs.",
    impact: [
      "Produced modernized, evidence-based CDPs for local government areas.",
      "Enhanced the ability of local authorities to attract and allocate development funding.",
      "Promoted community ownership of local infrastructure projects.",
    ],
    tags: ["Public Sector Reform", "GIZ Partnership", "Development Planning"],
    image: "/images/hero-boardroom.png",
  },
];

export const TECHNICAL_COMPETENCIES = [
  {
    category: "Diagnostic & Strategic Tools",
    code: "01",
    items: [
      "OCAT & PCAT Institutional Capacity Assessments",
      "5-Year Strategic Roadmaps (World Bank Aligned)",
      "Monitoring, Evaluation & Learning (MEL) Systems",
      "Fiduciary Oversight & Donor Compliance",
    ],
  },
  {
    category: "Design & Engagement Frameworks",
    code: "02",
    items: [
      "Human-Centered Design (HCD) Workflows",
      "Theory of Change (ToC) Mapping",
      "Participatory Stakeholder Co-Creation",
      "Structured Knowledge Transfer & Handover",
    ],
  },
  {
    category: "Digital & Analytical Innovation",
    code: "03",
    items: [
      "Power BI, Python & Geospatial Analytics",
      "Low-Bandwidth 3D Animated Training Suites",
      "Gamified Remote Capacity Building",
      "AI-Assisted Supply Chain Optimization",
    ],
  },
];

export const SECTORS = [
  {
    title: "Health Systems Strengthening",
    code: "01",
    description:
      "From immunization supply chains across 21 states to frontline health workforce training and national MEL tracking.",
    metric: "21 States · 5,000+ Health Workers",
  },
  {
    title: "Public Sector Reform",
    code: "02",
    description:
      "Modernizing ministries, agencies, and local governments for evidence-based planning, transparency, and donor readiness.",
    metric: "Federal, State & LGA Partnerships",
  },
  {
    title: "Social Protection & Education",
    code: "03",
    description:
      "Building resilient human capital systems, market-linked vocational programs, and economic pathways for youth.",
    metric: "78% Verified Placement Rate",
  },
  {
    title: "Humanitarian & Crisis Response",
    code: "04",
    description:
      "Rapid, scalable technical assistance, supply chain support, and remote capacity building in complex environments.",
    metric: "Rapid Field Deployment",
  },
];

export const CORE_VALUES = [
  {
    code: "01",
    title: "Results-Driven Excellence",
    detail:
      "We measure our work not by the length of our reports, but by verified operational improvements and lasting institutional outcomes.",
  },
  {
    code: "02",
    title: "Stakeholder Collaboration",
    detail:
      "The best solutions are built with you, not just for you. We co-create alongside civil servants, frontline staff, and communities.",
  },
  {
    code: "03",
    title: "Evidence-Based Practice",
    detail:
      "Every engagement is anchored in empirical diagnostics (OCAT/PCAT), real-time data, and a clear Theory of Change.",
  },
  {
    code: "04",
    title: "Integrity & Accountability",
    detail:
      "Uncompromising fiduciary discipline and compliance aligned with World Bank and international development standards.",
  },
  {
    code: "05",
    title: "Innovation & Adaptability",
    detail:
      "Deploying Power BI analytics, geospatial mapping, and low-bandwidth 3D learning tools practical enough to work in any terrain.",
  },
  {
    code: "06",
    title: "Knowledge Transfer",
    detail:
      "Our ultimate benchmark of success is your independence—transferring skills so capability stays permanently within your team.",
  },
];
