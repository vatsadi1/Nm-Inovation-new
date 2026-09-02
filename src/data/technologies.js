export const TECHNOLOGIES_ECOSYSTEM = {
  headline: 'Technologies We Can Work With',
  subheadline: 'Modern, battle-tested software engineering tools, open protocols, and scalable cloud architectures.',
  categories: [
    {
      name: 'Frontend & User Interface',
      tagline: 'Fast, accessible, and responsive user touchpoints',
      items: [
        { name: 'React', type: 'Framework', description: 'Declarative component-driven frontend architecture' },
        { name: 'Next.js', type: 'Meta-Framework', description: 'Server-side rendering, SSG & edge runtime capabilities' },
        { name: 'JavaScript (ES6+)', type: 'Language', description: 'Modern, high-performance web standard' },
        { name: 'Tailwind CSS', type: 'Design System', description: 'Utility-first modular styling and design consistency' },
        { name: 'HTML5 & Semantic Web', type: 'Standard', description: 'Crawlable, accessible DOM structuring for SEO' }
      ]
    },
    {
      name: 'Backend-Ready Architecture',
      tagline: 'Robust, API-driven server environments and databases',
      items: [
        { name: 'Node.js', type: 'Runtime', description: 'Asynchronous event-driven backend service runtime' },
        { name: 'Express.js', type: 'Framework', description: 'Minimalist, scalable REST API and microservice framework' },
        { name: 'PostgreSQL', type: 'Relational DB', description: 'ACID-compliant relational storage for business logic' },
        { name: 'MongoDB', type: 'Document DB', description: 'Flexible schema storage for unstructured events & logs' },
        { name: 'Redis', type: 'In-Memory Cache', description: 'Sub-millisecond data caching and rate-limiting' }
      ]
    },
    {
      name: 'AI Models & Reasoning Engines',
      tagline: 'Advanced foundation models integrated via structured tool calling',
      items: [
        { name: 'Anthropic Claude', type: 'LLM Engine', description: 'Exceptional reasoning, code synthesis, and long context' },
        { name: 'OpenAI GPT-4o', type: 'LLM Engine', description: 'Multimodal vision, voice, and structured output calling' },
        { name: 'Google Gemini', type: 'LLM Engine', description: 'High-throughput multimodal understanding & large context' },
        { name: 'LangChain / LlamaIndex', type: 'RAG Framework', description: 'Vector retrieval and enterprise knowledge indexing' }
      ]
    },
    {
      name: 'Automation & Integration Layer',
      tagline: 'Orchestration engines connecting disparate enterprise tools',
      items: [
        { name: 'Model Context Protocol (MCP)', type: 'Open Protocol', description: 'Standardized context and tool connection protocol' },
        { name: 'n8n Workflow Automation', type: 'Orchestrator', description: 'Self-hosted, secure workflow and webhook pipeline engine' },
        { name: 'WhatsApp Cloud API', type: 'Messaging Gateway', description: 'Direct enterprise conversational messaging pipeline' },
        { name: 'Google Workspace APIs', type: 'Productivity API', description: 'Multi-Gmail, Drive, Calendar, and Sheets automation' },
        { name: 'Webhook Mesh & WebSockets', type: 'Real-time Transport', description: 'Instant event propagation across distributed systems' }
      ]
    },
    {
      name: 'Infrastructure & Observability',
      tagline: 'Resilient cloud deployment, security, and performance telemetry',
      items: [
        { name: 'Docker & Containers', type: 'Virtualization', description: 'Isolated, reproducible production microservices' },
        { name: 'Cloudflare Edge CDN', type: 'Edge & Security', description: 'Global caching, DDoS mitigation, and SSL acceleration' },
        { name: 'AWS & Cloud Compute', type: 'Cloud Provider', description: 'Elastic scaling for databases, queues, and compute' },
        { name: 'Datadog / Sentry', type: 'Telemetry', description: 'Continuous error tracking, uptime, and latency monitoring' }
      ]
    }
  ]
};
