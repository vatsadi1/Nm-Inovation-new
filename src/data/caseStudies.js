export const CASE_STUDIES = [
  {
    id: 'meridian-realty',
    slug: 'real-estate-automation-hub',
    badge: 'Concept Project',
    title: 'Integrated Property Sales & WhatsApp AI Qualification Engine',
    clientType: 'Mid-Market Property Development Firm',
    industry: 'Real Estate',
    summary: 'A complete digital overhaul connecting an interactive property listing platform with 24/7 WhatsApp AI qualification and automated site visit scheduling.',
    challenge: 'The brokerage received hundreds of inquiries weekly across portals and paid campaigns. Inquiries were sitting in unmonitored inboxes overnight, resulting in an average response lag of 6 hours and low appointment booking rates.',
    solution: 'Engineered a high-speed React property showcase connected via webhooks to an intelligent WhatsApp AI conversational agent. The agent instantly responds to buyer questions, checks mortgage pre-approval, and books site visits on the sales team calendar.',
    technologies: ['React', 'Node.js API Layer', 'WhatsApp Cloud API', 'Claude 3.5 Sonnet', 'PostgreSQL', 'Tailwind CSS'],
    architectureHighlights: [
      'Bespoke headless listing frontend with sub-second property filtering',
      'RAG knowledge base containing exact unit blueprints, pricing tiers, and amenities',
      'Two-way calendar sync preventing double bookings across 12 sales agents',
      'Automated fallback to human sales directors when high-value cash buyers are detected'
    ],
    outcomes: [
      'Inbound inquiry response time reduced from 6 hours to under 30 seconds',
      'Automated qualification of over 65% of repetitive buyer FAQ inquiries',
      'Zero double-booked client viewings through synchronized calendar orchestration',
      'Clean CRM pipeline with complete WhatsApp conversation transcripts recorded automatically'
    ]
  },
  {
    id: 'apex-logistics',
    slug: 'b2b-rfq-portal-erp',
    badge: 'Sample Project',
    title: 'Custom B2B RFQ Quoting Engine & Inventory Telemetry Dashboard',
    clientType: 'Industrial Components & Logistics Supplier',
    industry: 'Manufacturing',
    summary: 'Replacing manual spreadsheet-based quote calculations with a self-service B2B portal, real-time inventory checks, and automated pricing tier workflows.',
    challenge: 'Custom industrial quote requests took 3 to 5 business days to calculate manually. Sales engineers were bogged down in repetitive arithmetic and inventory verification rather than closing high-value commercial accounts.',
    solution: 'Designed and deployed a responsive B2B digital portal with parametric product configurators, automated pricing algorithms, and a direct link to existing warehouse databases.',
    technologies: ['React', 'Express Architecture', 'PostgreSQL', 'n8n Automation', 'Docker', 'Tailwind CSS'],
    architectureHighlights: [
      'Parametric calculation engine evaluating volume breaks, material tolerances, and freight rules',
      'Automated PDF quotation generator with cryptographic digital signature verification',
      'Real-time warehouse stock checks alerting buyers when items are ready for same-day dispatch',
      'Multi-tier role management for enterprise buyers with purchasing approval thresholds'
    ],
    outcomes: [
      'Quote generation turnaround accelerated from 4 days to instant self-service estimation',
      'Over 40 hours of weekly engineering estimator time returned to custom engineering projects',
      'Standardized RFQ documentation eliminating miscommunication in technical tolerances',
      'Automated follow-up emails sent at 48-hour intervals on open pending quotes'
    ]
  },
  {
    id: 'omni-care-health',
    slug: 'clinical-intake-automation',
    badge: 'Concept Project',
    title: 'Multi-Clinic Patient Intake Portal & Automated Attendance Workflow',
    clientType: 'Multi-Location Specialty Dental Group',
    industry: 'Healthcare',
    summary: 'A unified digital intake and multi-channel patient reminder system reducing clinic appointment no-shows and streamlining reception workflows.',
    challenge: 'High appointment no-show rates across 4 clinic locations resulted in lost practitioner revenue. Front-desk personnel were inundated with confirmation phone calls and paper intake form processing.',
    solution: 'Built a mobile-first digital patient scheduling and intake application with automated multi-touchpoint WhatsApp/SMS confirmation sequences and digital medical history collection.',
    technologies: ['React', 'Modern CSS', 'Twilio & WhatsApp API', 'n8n Workflows', 'MongoDB Schema', 'Tailwind CSS'],
    architectureHighlights: [
      'Accessible, mobile-optimized digital intake forms with signature capture',
      'Automated countdown reminder sequences (72h, 24h, 2h prior to appointment)',
      'Instant cancellation and automated re-booking queue routing to standby waitlist patients',
      'Encrypted transit and storage adhering to standard healthcare security practices'
    ],
    outcomes: [
      'Documented decline in clinic appointment no-show rates across all 4 locations',
      'Reception check-in time per patient reduced from 8 minutes to under 90 seconds',
      'Elimination of physical paper storage through secure cloud document indexing',
      'Automated post-procedure care guides sent directly to patient phones upon check-out'
    ]
  },
  {
    id: 'strata-consulting',
    slug: 'mcp-multi-gmail-ai-workspace',
    badge: 'Concept Project',
    title: 'Model Context Protocol (MCP) Multi-Inbox Triage & Knowledge Hub',
    clientType: 'Boutique Management Consulting Firm',
    industry: 'Professional Services',
    summary: 'Connecting 5 partner Google Workspace accounts and Google Drive repositories into an AI-assisted operational workspace using Model Context Protocol (MCP).',
    challenge: 'Partners managed communications across multiple client Gmail accounts, losing critical action items and spending hours manually summarizing proposal discussions for team handoffs.',
    solution: 'Deployed a custom internal dashboard integrated with MCP servers connected to Google Workspace, Slack, and the firm CRM, allowing partners to run natural-language operational queries.',
    technologies: ['React', 'Model Context Protocol (MCP)', 'Node.js Services', 'Claude 3.5 API', 'Vector Embeddings'],
    architectureHighlights: [
      'Standardized MCP tool layer exposing safe email search, calendar aggregation, and CRM updates',
      'Unified natural language query terminal: "Find all pending client proposals from this week"',
      'Automated daily morning briefing summarizing urgent emails across all 5 partner accounts',
      'Strict client isolation and permission safeguards preventing cross-account data leakage'
    ],
    outcomes: [
      'Partners saved an estimated 1.5 hours each morning on email triage and status checks',
      'Zero missed follow-up deadlines through automated action item extraction',
      'Instant search and synthesis across thousands of historical engagement deliverables',
      'Standardized client engagement onboarding executed with a single prompt'
    ]
  }
];
