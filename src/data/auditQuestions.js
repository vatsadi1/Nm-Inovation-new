export const AUDIT_QUESTIONS = [
  {
    id: 'lead-capture',
    category: 'Lead Automation',
    question: 'How does your business currently capture and organize inbound leads?',
    options: [
      { text: 'Manually copied from emails/spreadsheets with delayed follow-up', points: 10, dimension: 'lead' },
      { text: 'Standard website contact forms routed to a shared team inbox', points: 25, dimension: 'lead' },
      { text: 'Integrated landing pages connected to basic email auto-responders', points: 35, dimension: 'lead' },
      { text: 'Real-time multi-channel webhooks instantly populating CRM pipelines', points: 50, dimension: 'lead' }
    ]
  },
  {
    id: 'crm-status',
    category: 'CRM',
    question: 'How are customer interactions, deal stages, and sales pipelines tracked?',
    options: [
      { text: 'Static Excel / Google Sheets spreadsheets updated sporadically', points: 10, dimension: 'crm' },
      { text: 'Basic CRM used primarily as an address book without automation', points: 25, dimension: 'crm' },
      { text: 'Customized CRM with manual deal stage movements and task reminders', points: 38, dimension: 'crm' },
      { text: 'Fully automated CRM with stage-triggered webhooks and timeline logging', points: 50, dimension: 'crm' }
    ]
  },
  {
    id: 'whatsapp-handling',
    category: 'Customer Communication',
    question: 'How do you handle customer messaging and inquiries over WhatsApp / SMS?',
    options: [
      { text: 'Single staff smartphone with manual replies during office hours only', points: 10, dimension: 'communication' },
      { text: 'WhatsApp Business App with basic greeting message and quick replies', points: 25, dimension: 'communication' },
      { text: 'Shared team inbox platform with multiple human operators', points: 35, dimension: 'communication' },
      { text: '24/7 AI-powered WhatsApp Cloud API agent with CRM qualification and booking', points: 50, dimension: 'communication' }
    ]
  },
  {
    id: 'social-content',
    category: 'Content Automation',
    question: 'How does your team produce and distribute marketing and social content?',
    options: [
      { text: 'Irregular, ad-hoc posting when someone has free time', points: 10, dimension: 'content' },
      { text: 'Manual graphic creation and one-by-one posting across social apps', points: 25, dimension: 'content' },
      { text: 'Monthly scheduled calendar using standard social scheduling tools', points: 35, dimension: 'content' },
      { text: 'Structured AI content engine generating multi-channel posts with review queues', points: 50, dimension: 'content' }
    ]
  },
  {
    id: 'follow-up-cadence',
    category: 'Lead Automation',
    question: 'How do you ensure unanswered proposals and cold leads are followed up?',
    options: [
      { text: 'Rely on team members remembering to check old emails or notes', points: 10, dimension: 'lead' },
      { text: 'Manual reminder alerts set on personal calendars', points: 25, dimension: 'lead' },
      { text: 'Automated generic email drip sequences', points: 35, dimension: 'lead' },
      { text: 'Intelligent multi-channel follow-up sequences via WhatsApp, SMS, and Email', points: 50, dimension: 'lead' }
    ]
  },
  {
    id: 'google-workspace',
    category: 'Customer Communication',
    question: 'How are multiple Gmail accounts, Drive files, and calendars coordinated?',
    options: [
      { text: 'Completely siloed individual inboxes with manual forwarded emails', points: 10, dimension: 'communication' },
      { text: 'Shared Google Drive folders but disjointed email triage', points: 25, dimension: 'communication' },
      { text: 'Basic Google Workspace rules and automated label filters', points: 35, dimension: 'communication' },
      { text: 'Unified MCP / API layer aggregating inboxes, files, and calendar availability', points: 50, dimension: 'communication' }
    ]
  },
  {
    id: 'reporting-intelligence',
    category: 'Reporting',
    question: 'How are business KPIs, customer acquisition costs, and revenue reported?',
    options: [
      { text: 'Manual monthly spreadsheets assembled by spending hours copying numbers', points: 10, dimension: 'reporting' },
      { text: 'Checking separate dashboards individually (Google Ads, Stripe, Analytics)', points: 25, dimension: 'reporting' },
      { text: 'Periodic manual executive presentations compiled weekly', points: 35, dimension: 'reporting' },
      { text: 'Real-time unified BI dashboard with automated weekly executive AI briefings', points: 50, dimension: 'reporting' }
    ]
  },
  {
    id: 'repetitive-tasks',
    category: 'CRM',
    question: 'Approximately how much time does your team spend on repetitive admin tasks?',
    options: [
      { text: 'More than 20+ hours per week per employee on manual copy-pasting', points: 10, dimension: 'crm' },
      { text: '10 to 20 hours per week handling routine data entry and scheduling', points: 25, dimension: 'crm' },
      { text: '5 to 10 hours per week on recurring administrative workflows', points: 35, dimension: 'crm' },
      { text: 'Less than 3 hours per week—nearly all routine workflows are automated', points: 50, dimension: 'crm' }
    ]
  }
];
