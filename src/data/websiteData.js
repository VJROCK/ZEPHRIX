export const COMPANY_INFO = {
  name: "Zephrix Technologies LLC",
  shortName: "Zephrix",
  tagline: "Enterprise technology, built at wind speed.",
  lead: "Zephrix Technologies designs AI products, modernizes ERP systems, and delivers QA automation — engineered natively for AWS and Azure. We help enterprises, startups, and media houses ship next-generation software with confidence.",
  founded: "2024",
  headquarters: "Phoenix, Arizona, USA",
  reach: "Global · Remote-First",
  email: "hello@zephrixtech.com",
  phone: "+1 (480) 555-0198",
  hours: "24/7 Managed Operations & Support Desk",
  socials: {
    linkedin: "https://linkedin.com/company/zephrixtech",
    github: "https://github.com/zephrix",
    twitter: "https://x.com/zephrixtech"
  },
  stats: [
    { value: 120, suffix: "+", label: "Projects Delivered", desc: "Across North America & Global Markets" },
    { value: 45, suffix: "+", label: "Enterprise Clients", desc: "Fortune 500, Scaleups & Media Giants" },
    { value: 60, suffix: "+", label: "Specialized Engineers", desc: "Senior AI, Cloud & QA Architects" },
    { value: 99.9, suffix: "%", label: "Managed Cloud Uptime", desc: "SLA Guaranteed AWS & Azure Ops" }
  ]
};

export const SERVICES = [
  {
    id: "ai-product-dev",
    category: "ai",
    badge: "Most Requested",
    title: "AI Product Development",
    shortDesc: "We design and ship production AI — from LLM copilots and document intelligence to computer vision and predictive analytics.",
    points: [
      "LLM & RAG enterprise applications",
      "Custom model fine-tuning & MLOps pipelines",
      "Autonomous agent workflows & automation",
      "Document AI & multi-modal processing"
    ],
    fullDesc: "We transform generative AI and machine learning from research prototypes into mission-critical, enterprise-grade software. We implement high-accuracy Retrieval-Augmented Generation (RAG), fine-tune open-weights and proprietary models (Bedrock, OpenAI, Claude, Llama 3), and construct resilient guardrails with robust evaluation pipelines.",
    architecture: "Multi-tenant RAG pipeline on AWS/Azure with vector databases (Pinecone/pgvector), semantic caching, latency-optimized streaming, and automated drift monitoring.",
    deliverables: [
      "Production-ready AI microservices & APIs",
      "End-to-end evaluation & benchmarking suites",
      "Secure VPC deployment with zero data retention compliance",
      "Comprehensive MLOps CI/CD pipelines"
    ],
    tech: ["OpenAI", "Amazon Bedrock", "Azure AI", "LangChain", "LlamaIndex", "Pinecone", "PyTorch", "FastAPI"]
  },
  {
    id: "erp-modernization",
    category: "enterprise",
    badge: "Core Enterprise",
    title: "ERP Support & Development",
    shortDesc: "Implementation, customization, and ongoing support for enterprise resource planning across finance, supply chain, and HR.",
    points: [
      "ERP custom module development & extensions",
      "Legacy to cloud zero-downtime migration",
      "Bi-directional data integration & ETL pipelines",
      "24/7 Level 2 & Level 3 managed ERP support"
    ],
    fullDesc: "Modernize fragmented legacy systems with cloud-native ERP solutions. We integrate and extend SAP S/4HANA, Oracle Cloud ERP, and Microsoft Dynamics 365 to harmonize accounting, supply chain logistics, human capital, and real-time executive reporting.",
    architecture: "Event-driven integration broker connecting ERP instances with data lakes, CRM platforms, and automated workflow orchestrators.",
    deliverables: [
      "Custom ERP workflow automations & plugins",
      "Automated financial reconciliation pipelines",
      "Zero-downtime database migration runbooks",
      "Custom reporting dashboards with PowerBI/Snowflake"
    ],
    tech: ["SAP S/4HANA", "Oracle Cloud ERP", "Microsoft Dynamics 365", "Azure Data Factory", "PostgreSQL", "PowerBI"]
  },
  {
    id: "qa-tool-solutions",
    category: "qa",
    badge: "Proprietary Suite",
    title: "QA Tool Solutions & Automation",
    shortDesc: "Our QA automation platform validates content, catches regressions, and accelerates release cycles for large-scale products.",
    points: [
      "Full-stack end-to-end test automation",
      "AI-augmented visual regression & content validation",
      "Continuous testing in CI/CD release pipelines",
      "Performance, load & API contract testing"
    ],
    fullDesc: "Eliminate manual QA bottlenecks and stop defect leakage before it reaches production. Our QA platform utilizes modern frameworks like Playwright and Cypress combined with computer-vision validation to test thousands of user paths and digital assets across devices in minutes.",
    architecture: "Distributed parallel test execution grid integrated with GitHub Actions/GitLab CI, reporting live telemetry into Jira and Slack.",
    deliverables: [
      "Complete automated test coverage matrix (E2E, API, Unit)",
      "Automated visual diff & pixel-perfection checkers",
      "Live release-readiness dashboards",
      "Team training & test suite governance playbooks"
    ],
    tech: ["Playwright", "Cypress", "Selenium Grid", "k6", "Postman", "GitHub Actions", "Docker", "Allure"]
  },
  {
    id: "media-house-support",
    category: "media",
    badge: "High Scale",
    title: "Media House Support & Platforms",
    shortDesc: "Scalable platforms for publishers and media businesses — content workflows, digital asset management, and delivery at scale.",
    points: [
      "High-concurrency CMS & publishing engines",
      "Cloud-native Digital Asset Management (DAM)",
      "Adaptive bitrate video streaming & edge caching",
      "Real-time audience analytics & paywall integration"
    ],
    fullDesc: "Engineered specifically for high-traffic digital publishers and broadcast networks. We build ultra-fast content delivery architectures that handle millions of concurrent page views, viral traffic surges, and complex editorial collaboration workflows.",
    architecture: "Serverless edge architecture with CloudFront/Akamai CDN caching, dynamic image transcoding, and real-time webhook propagation.",
    deliverables: [
      "Custom headless CMS tailored to editorial teams",
      "Automated video transcoding & delivery pipeline",
      "Sub-100ms global latency cache architecture",
      "Granular permissioning & digital rights management"
    ],
    tech: ["Next.js", "Node.js", "AWS CloudFront", "AWS Elemental", "Redis", "Elasticsearch", "GraphQL"]
  },
  {
    id: "cloud-onprem-support",
    category: "cloud",
    badge: "24/7 Managed",
    title: "Cloud & Onprem Support",
    shortDesc: "Fully managed AWS and Azure operations plus onprem support — provisioning, monitoring, security, and 24/7 incident response.",
    points: [
      "AWS & Azure Well-Architected managed services",
      "Infrastructure as Code (Terraform & Pulumi)",
      "Hybrid-cloud & on-premise infrastructure bridging",
      "SOC 2, ISO 27001 & HIPAA compliance readiness"
    ],
    fullDesc: "Gain peace of mind with 24/7/365 infrastructure operations managed by certified cloud architects. We handle everything from automated auto-scaling and cost governance to proactive threat detection, vulnerability patching, and 15-minute SLA incident recovery.",
    architecture: "Multi-region active-active cloud footprint with automated failover, immutable infrastructure pipelines, and centralized Datadog/CloudWatch telemetry.",
    deliverables: [
      "Complete Terraform/OpenTofu infrastructure repository",
      "24/7 NOC monitoring with guaranteed SLA escalation",
      "Cloud cost optimization report (average 30% reduction)",
      "Disaster recovery (DR) strategy with automated backups"
    ],
    tech: ["AWS", "Microsoft Azure", "Kubernetes (EKS/AKS)", "Terraform", "Docker", "Datadog", "Prometheus", "Ansible"]
  },
  {
    id: "technical-guidance",
    category: "advisory",
    badge: "Strategic",
    title: "Technical Guidance & Architecture",
    shortDesc: "Architecture reviews and hands-on guidance to help your teams adopt next-generation technology the right way.",
    points: [
      "Enterprise solution architecture & blueprinting",
      "Legacy system modernization roadmaps",
      "Security posture & scalability audits",
      "Staff augmentation & senior engineer mentorship"
    ],
    fullDesc: "Bridge the gap between executive business strategy and technical execution. Our principal architects evaluate your tech stack, identify hidden technical debt, design forward-compatible systems, and mentor your internal teams on modern engineering best practices.",
    architecture: "Comprehensive architectural blueprints, C4 model diagrams, API specifications, and phased rollout roadmaps.",
    deliverables: [
      "Enterprise Architecture Blueprint & C4 diagrams",
      "Tech Debt & Security Risk Assessment report",
      "Step-by-step 12-month engineering roadmap",
      "Executive presentations for board and stakeholders"
    ],
    tech: ["System Design", "Microservices", "Event-Driven", "OAuth2 / OIDC", "Zero Trust", "C4 Modeling"]
  }
];

export const INDUSTRIES = [
  { id: "finance", name: "Finance & Banking", icon: "Landmark", desc: "Automated fraud analysis, high-security cloud infrastructure, and compliance-ready ERPs." },
  { id: "healthcare", name: "Healthcare & Life Sciences", icon: "Activity", desc: "HIPAA-compliant document intelligence, clinical data pipelines, and telemetry systems." },
  { id: "retail", name: "Retail & E-commerce", icon: "ShoppingBag", desc: "Real-time inventory sync, AI recommendation engines, and high-concurrency checkout." },
  { id: "media", name: "Media & Publishing", icon: "Film", desc: "Global content distribution, automated QA validation for articles, and video streaming." },
  { id: "mfg", name: "Manufacturing", icon: "Factory", desc: "IoT sensor telemetry, predictive maintenance, and SAP/Oracle supply chain modernization." },
  { id: "edu", name: "Education & EdTech", icon: "GraduationCap", desc: "Adaptive learning platforms, student management ERPs, and automated grading systems." },
  { id: "logistics", name: "Logistics & Fleet", icon: "Truck", desc: "Route optimization AI, warehouse management systems, and real-time tracking portals." },
  { id: "energy", name: "Energy & Utilities", icon: "Zap", desc: "Smart grid analytics, regulatory reporting compliance, and cloud migration." },
  { id: "public", name: "Public Sector", icon: "Building2", desc: "Secure citizen portals, legacy modernisation, and sovereign cloud deployments." },
  { id: "telecom", name: "Telecom", icon: "Radio", desc: "Network performance monitoring, billing system integrations, and self-service bots." },
  { id: "realestate", name: "Real Estate & PropTech", icon: "Home", desc: "Document automation for leases, tenant management ERP, and valuation algorithms." },
  { id: "travel", name: "Travel & Hospitality", icon: "Plane", desc: "Dynamic booking systems, customer support AI copilots, and multi-channel sync." }
];

export const CASE_STUDIES = [
  {
    id: "case-qa-platform",
    category: "QA & Testing",
    tag: "QA Automation",
    title: "AI-Augmented Content & Visual Validation Platform",
    client: "Global Digital Publishing Network",
    summary: "Built an intelligent QA pipeline for an enterprise-scale website migration — automating complex visual, functional, and content checks that were previously done manually.",
    metrics: [
      { value: "85%", label: "Faster QA Release Cycle" },
      { value: "500+", label: "Pages Validated / Min" },
      { value: "0", label: "Critical Defects in Prod" }
    ],
    challenge: "The client was migrating 500,000+ editorial articles and media pages to a new CMS. Manual QA was estimated to take 8 months with a high risk of broken links, missing media, and rendering glitches.",
    solution: "Zephrix designed a distributed Playwright test grid paired with computer-vision visual regression algorithms. The engine automatically crawled, diffed, and validated layouts across mobile, tablet, and desktop viewports in parallel.",
    technologies: ["Playwright", "Python", "AWS ECS", "Docker", "OpenCV", "GitHub Actions"],
    quote: "Zephrix rebuilt our QA process from the ground up. Releases that previously took our team a full week now deploy in a single morning with zero defects."
  },
  {
    id: "case-erp-migration",
    category: "ERP Modernization",
    tag: "Enterprise ERP",
    title: "Zero-Downtime Enterprise ERP Cloud Migration",
    client: "Tier-1 Industrial Equipment Manufacturer",
    summary: "Migrated a legacy on-prem ERP to a resilient cloud-native Azure deployment with zero-downtime cutover and real-time analytics dashboards.",
    metrics: [
      { value: "40%", label: "Lower Total Cost (TCO)" },
      { value: "0 sec", label: "Cutover Downtime" },
      { value: "100%", label: "Financial Data Parity" }
    ],
    challenge: "A 20-year-old on-premise ERP had high licensing costs, brittle physical servers, and 12-hour batch processing windows that stalled monthly financial close.",
    solution: "We re-architected the system onto Microsoft Azure, built automated bi-directional data replication with real-time validation, and executed a synchronized weekend cutover without a second of customer-facing downtime.",
    technologies: ["Microsoft Azure", "Azure SQL Managed Instance", "Terraform", "PowerBI", "Azure Data Factory"],
    quote: "Their ERP migration was completely flawless. Not only did we achieve zero downtime, but our monthly financial closing time dropped by 65%."
  },
  {
    id: "case-ai-docs",
    category: "AI & ML",
    tag: "AI Product",
    title: "Enterprise Document Intelligence & RAG Engine",
    client: "National Insurance & Underwriting Corporation",
    summary: "Delivered an LLM-powered document processing product that ingests, classifies, and verifies complex policy records at high volume on AWS.",
    metrics: [
      { value: "10x", label: "Document Ingestion Speed" },
      { value: "98.4%", label: "Extraction Accuracy" },
      { value: "$2.4M", label: "Annual Operational Savings" }
    ],
    challenge: "Underwriters manually inspected hundreds of thousands of multi-page PDF policies, medical records, and claims, resulting in a 2-week turnaround time for claims processing.",
    solution: "Engineered an intelligent document workflow using Amazon Bedrock, Claude 3.5 Sonnet, and custom fine-tuned OCR classifiers. The system extracts tabular data, cross-references policy clauses, and flags anomalies automatically.",
    technologies: ["AWS Bedrock", "Claude 3.5", "FastAPI", "Pinecone", "Terraform", "React"],
    quote: "The AI document intelligence engine delivered by Zephrix handles volumes our team couldn't touch before. Genuinely production-grade from day one."
  },
  {
    id: "case-media-platform",
    category: "Cloud & Media",
    tag: "Media House",
    title: "High-Scale Media Streaming & Publishing Platform",
    client: "Digital Sports & Entertainment Network",
    summary: "Architected a serverless media publishing platform capable of streaming real-time live events to millions of concurrent global viewers.",
    metrics: [
      { value: "1.2M", label: "Concurrent Peak Viewers" },
      { value: "45ms", label: "Global Edge Latency" },
      { value: "99.99%", label: "Streaming Availability" }
    ],
    challenge: "Viral sporting events regularly crashed their legacy monolith server cluster, leading to substantial ad revenue losses and poor viewer retention.",
    solution: "Re-engineered the publishing backbone to an edge-cached headless Next.js architecture on AWS CloudFront with automated adaptive bitrate video distribution and elastic scaling.",
    technologies: ["AWS CloudFront", "Elemental MediaLive", "Next.js", "Redis", "Terraform", "GraphQL"],
    quote: "During our largest championship broadcast of the year, the platform held up flawlessly with zero buffering for 1.2M simultaneous viewers."
  }
];

export const TECH_STACK = {
  cloud: [
    { name: "AWS", level: "Premier Partner", icon: "Cloud" },
    { name: "Microsoft Azure", level: "Certified Solutions", icon: "CloudRain" },
    { name: "Kubernetes (EKS/AKS)", level: "Container Orchestration", icon: "Boxes" },
    { name: "Docker", level: "Containerization", icon: "Box" },
    { name: "Terraform / OpenTofu", level: "Infrastructure as Code", icon: "Cpu" },
    { name: "GitHub Actions", level: "CI / CD Pipelines", icon: "GitBranch" },
    { name: "Datadog / Prometheus", level: "Observability & APM", icon: "Activity" }
  ],
  ai: [
    { name: "OpenAI / GPT-4o", level: "LLM Copilots & Agents", icon: "Bot" },
    { name: "Amazon Bedrock", level: "Enterprise GenAI", icon: "Sparkles" },
    { name: "Azure OpenAI", level: "Private LLM Hosting", icon: "Shield" },
    { name: "PyTorch & HuggingFace", level: "Custom Training", icon: "Flame" },
    { name: "Pinecone & pgvector", level: "Vector Search", icon: "Database" },
    { name: "LangChain / LlamaIndex", level: "RAG Frameworks", icon: "Workflow" },
    { name: "Snowflake", level: "Data Lakehouse", icon: "Layers" }
  ],
  dev: [
    { name: "React & Next.js", level: "Modern Frontend", icon: "Code2" },
    { name: "TypeScript", level: "Type-Safe Architecture", icon: "FileCode" },
    { name: "Node.js & Express", level: "Backend Services", icon: "Server" },
    { name: "Python & FastAPI", level: "AI & Microservices", icon: "Terminal" },
    { name: ".NET / C#", level: "Enterprise APIs", icon: "Layers" },
    { name: "PostgreSQL & DynamoDB", level: "Relational & NoSQL", icon: "Database" },
    { name: "Redis", level: "In-Memory Cache", icon: "Zap" }
  ],
  erp_qa: [
    { name: "SAP S/4HANA", level: "Enterprise ERP", icon: "Briefcase" },
    { name: "Oracle Cloud ERP", level: "Financial Systems", icon: "Layers" },
    { name: "Microsoft Dynamics 365", level: "ERP & CRM", icon: "ShieldCheck" },
    { name: "Playwright", level: "E2E Test Automation", icon: "CheckCircle2" },
    { name: "Selenium & Cypress", level: "Cross-Browser QA", icon: "CheckSquare" },
    { name: "k6 & Postman", level: "Performance & API", icon: "Gauge" }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: "Vishwajeet Singh",
    role: "Founder & Principal Architect",
    avatar: "VS",
    gradient: "linear-gradient(135deg, #2B5CE6, #1E86DB)",
    bio: "Enterprise architect with deep expertise across distributed cloud systems, high-scale data platforms, and applied AI strategy.",
    tags: ["Cloud Architecture", "AI Strategy", "Enterprise ERP", "System Design"]
  },
  {
    name: "AI & Data Practice",
    role: "Machine Learning & MLOps",
    avatar: "AI",
    gradient: "linear-gradient(135deg, #16B5D0, #1E86DB)",
    bio: "Specialized team of ML researchers and data engineers delivering production RAG, custom fine-tuning, and low-latency inference.",
    tags: ["LLMs & RAG", "Computer Vision", "Model Fine-Tuning", "Vector DBs"]
  },
  {
    name: "QA Engineering Practice",
    role: "Test Automation & Tooling",
    avatar: "QA",
    gradient: "linear-gradient(135deg, #1A2340, #2B3A63)",
    bio: "Automation engineers building intelligent regression frameworks, continuous delivery quality gates, and visual test suites.",
    tags: ["Playwright", "Visual Diffs", "CI/CD Gates", "Performance QA"]
  },
  {
    name: "Cloud & DevOps Ops",
    role: "AWS & Azure Infrastructure",
    avatar: "☁️",
    gradient: "linear-gradient(135deg, #2B5CE6, #16B5D0)",
    bio: "24/7 Site Reliability Engineers and DevOps specialists ensuring 99.99% availability, zero-trust security, and cloud cost efficiency.",
    tags: ["AWS / Azure", "Kubernetes", "Terraform", "24/7 Incident Ops"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Zephrix rebuilt our QA process into an automated pipeline. Releases that took a week now take a day, with fewer defects reaching production.",
    author: "Danielle K.",
    role: "Director of Development",
    company: "Global Digital Agency",
    avatar: "DK",
    color: "#2B5CE6",
    rating: 5
  },
  {
    quote: "Their ERP migration was flawless — zero downtime and a cleaner reporting layer. The team understood our business, not just the tech.",
    author: "Felix N.",
    role: "Finance Operations Lead",
    company: "Industrial Manufacturing Group",
    avatar: "FN",
    color: "#16B5D0",
    rating: 5
  },
  {
    quote: "The AI document product they delivered handles volumes we couldn't touch before. Genuinely production-grade from day one.",
    author: "Priya M.",
    role: "Principal Product Manager",
    company: "InsurTech Innovations",
    avatar: "PM",
    color: "#1E86DB",
    rating: 5
  },
  {
    quote: "Their cloud engineers cut our monthly AWS spend by 35% within 60 days while doubling our system throughput. Phenomenal team.",
    author: "Marcus V.",
    role: "VP of Engineering",
    company: "Digital Media Group",
    avatar: "MV",
    color: "#4D7BFF",
    rating: 5
  }
];

export const CAREERS = [
  {
    id: "job-ai-senior",
    title: "Senior AI / ML Engineer",
    department: "AI Practice",
    location: "Remote (US / Global)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$140,000 - $185,000 + Equity",
    desc: "Lead the design and implementation of enterprise LLM applications, RAG pipelines, and agentic workflows on AWS Bedrock and Azure OpenAI.",
    responsibilities: [
      "Architect and scale multi-tenant RAG systems with vector databases",
      "Fine-tune open-weights models and optimize inference latency",
      "Collaborate with enterprise clients to define AI technical requirements",
      "Mentor junior and mid-level machine learning engineers"
    ],
    requirements: [
      "5+ years software engineering with 2+ years production LLM/ML experience",
      "Proficiency in Python, FastAPI, PyTorch, LangChain/LlamaIndex",
      "Hands-on experience with vector stores (Pinecone, pgvector, Qdrant)",
      "Strong background in AWS or Azure cloud deployments"
    ]
  },
  {
    id: "job-devops-lead",
    title: "Cloud DevOps Architect (AWS / Azure)",
    department: "Cloud Ops",
    location: "Remote (US / Global)",
    type: "Full-time",
    experience: "6+ Years",
    salary: "$145,000 - $190,000 + Equity",
    desc: "Build and maintain resilient, multi-region cloud infrastructures, automated CI/CD pipelines, and observability frameworks for enterprise clients.",
    responsibilities: [
      "Write modular, tested Terraform / OpenTofu Infrastructure as Code",
      "Manage production Kubernetes clusters (EKS and AKS)",
      "Implement zero-trust security postures and compliance controls",
      "Lead 24/7 on-call escalation procedures and incident reviews"
    ],
    requirements: [
      "Deep expertise in AWS and Microsoft Azure cloud architecture",
      "Production mastery of Terraform, Docker, Kubernetes, and Helm",
      "Strong knowledge of CI/CD tooling (GitHub Actions, GitLab CI)",
      "AWS Certified Solutions Architect or Azure Solutions Architect Expert"
    ]
  },
  {
    id: "job-qa-automation",
    title: "Senior QA Automation Engineer",
    department: "QA Engineering",
    location: "Remote (US / Global)",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$115,000 - $150,000",
    desc: "Design automated test suites, visual diff tooling, and continuous testing quality gates for high-traffic enterprise applications.",
    responsibilities: [
      "Build maintainable end-to-end testing frameworks in Playwright / TypeScript",
      "Integrate automated testing into client CI/CD build pipelines",
      "Develop custom visual regression and content verification scripts",
      "Conduct load and stress testing using k6 and JMeter"
    ],
    requirements: [
      "4+ years specializing in automated software quality assurance",
      "Proficiency with Playwright, Cypress, Selenium, and JavaScript/TypeScript",
      "Experience with API testing (Postman, REST Assured) and performance testing",
      "Familiarity with containerized test execution in Docker"
    ]
  },
  {
    id: "job-erp-consultant",
    title: "ERP Technical & Functional Consultant",
    department: "ERP Practice",
    location: "Hybrid (Phoenix, AZ or Remote)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$130,000 - $175,000",
    desc: "Guide enterprise clients through ERP modernization, custom module development, data migration, and third-party integrations.",
    responsibilities: [
      "Lead ERP integration and data migration projects (SAP / Dynamics / Oracle)",
      "Develop custom workflows and API connectors for legacy software",
      "Conduct business process mapping with client finance and supply chain teams",
      "Provide Level 3 technical troubleshooting and system maintenance"
    ],
    requirements: [
      "5+ years implementing and extending SAP S/4HANA or Microsoft Dynamics 365",
      "Strong SQL and database architecture background",
      "Proven track record of zero-downtime database cutovers",
      "Excellent communication and executive presentation skills"
    ]
  }
];
