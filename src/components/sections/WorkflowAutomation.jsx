import { useState, useEffect } from 'react';
import { 
  Instagram, 
  Database, 
  Bot, 
  MessageSquare, 
  Calendar, 
  Users, 
  Clock, 
  CreditCard, 
  Star,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export function WorkflowAutomation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'ingress',
      title: 'Inbound Lead',
      source: 'Instagram Ad / Website Click',
      icon: Instagram,
      detail: 'Webhook triggers immediately with UTM tracking parameters and contact identifiers.',
      payload: '{ channel: "instagram_lead_gen", campaign_id: "retargeting_q3" }'
    },
    {
      id: 'crm_record',
      title: 'CRM Ingestion',
      source: 'Central Database Pipeline',
      icon: Database,
      detail: 'Contact record created; duplicates merged, deal stage set to "Inbound Triage".',
      payload: '{ deal_id: "DL-9082", status: "stage_0_ingested" }'
    },
    {
      id: 'ai_eval',
      title: 'AI Lead Qualification',
      source: 'Context RAG Model',
      icon: Bot,
      detail: 'Evaluates account industry, budget fit, and inquiry urgency against qualification heuristics.',
      payload: '{ score: 88, priority: "tier_1_high_intent" }'
    },
    {
      id: 'whatsapp_dispatch',
      title: 'WhatsApp Automation',
      source: 'WhatsApp Cloud API',
      icon: MessageSquare,
      detail: 'Automated conversational greeting sent within 25 seconds offering personalized booking slots.',
      payload: '{ message_sent: true, response_time_sec: 24 }'
    },
    {
      id: 'appointment',
      title: 'Calendar Booking',
      source: 'Google / Outlook Sync',
      icon: Calendar,
      detail: 'Prospect chooses meeting time; Zoom link and calendar invite generated instantly.',
      payload: '{ event_booked: "2026-09-03T14:00:00Z", calendar: "synced" }'
    },
    {
      id: 'sales_team',
      title: 'Sales Team Briefing',
      source: 'Internal Slack / CRM Alert',
      icon: Users,
      detail: 'Account rep receives structured AI briefing with prospect history and key talking points.',
      payload: '{ rep_assigned: "Director_East", brief_generated: true }'
    },
    {
      id: 'follow_up',
      title: 'Autonomous Follow-Up',
      source: 'n8n Logic Trigger',
      icon: Clock,
      detail: 'If proposal remains unsigned for 48h, automated WhatsApp check-in sequence engages.',
      payload: '{ reminder_cadence: "48h_sms_whatsapp" }'
    },
    {
      id: 'payment',
      title: 'Payment & Invoice',
      source: 'Stripe / Bank Gateway',
      icon: CreditCard,
      detail: 'Invoice settled; webhook triggers onboarding vault creation and client welcome pack.',
      payload: '{ invoice_status: "settled", amount: "$4,500" }'
    },
    {
      id: 'review',
      title: 'Review Request',
      source: 'Reputation Engine',
      icon: Star,
      detail: 'Milestone 1 reached; automated satisfaction survey prompts 5-star public testimonial.',
      payload: '{ review_prompt_delivered: true }'
    }
  ];

  // Auto-step flow cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [steps.length]);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Autonomous Operations"
          title="Turn Repetitive Work into Automated Workflows"
          description="A visual walkthrough of an end-to-end customer acquisition and fulfillment cycle running 24/7 without manual administrative intervention."
        />

        {/* Step Progression Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-[760px] justify-between relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isPast = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isCurrent
                        ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-110 shadow-lg'
                        : isPast
                        ? 'bg-[#151D2F] text-blue-400 border border-blue-500/40'
                        : 'bg-[#0E1422] text-slate-500 border border-white/10 group-hover:text-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[11px] font-display font-medium mt-2 max-w-[70px] text-center truncate ${
                      isCurrent ? 'text-blue-400 font-bold' : 'text-slate-400'
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep Dive Showcase Card */}
        <div className="rounded-2xl bg-[#0E1422] border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-blue-400 font-bold uppercase">
                  Step 0{activeStep + 1} of 0{steps.length}
                </span>
                <Badge variant="accent" size="sm">
                  Autonomous Webhook Stage
                </Badge>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Source: {current.source}
                  </span>
                </div>
              </div>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-6 mt-4">
                {current.detail}
              </p>

              <div className="flex items-center gap-2 text-xs text-blue-400 font-display font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero human copy-pasting required at this junction</span>
              </div>
            </div>

            {/* Right: Technical Event Payload Terminal */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-black/70 border border-white/10 p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3 text-slate-500 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Event Execution Log
                  </span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {current.payload}
                </pre>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Latency: ~34ms</span>
                  <span>Protocol: HTTPS / Webhook</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
