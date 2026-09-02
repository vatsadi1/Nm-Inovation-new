import { useState } from 'react';
import { 
  Share2, 
  FileText, 
  Sparkles, 
  Lightbulb, 
  AlignLeft, 
  Image as ImageIcon, 
  Hash, 
  CheckSquare, 
  Calendar, 
  Send, 
  BarChart2,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export function SocialMediaEngine() {
  const [activeStage, setActiveStage] = useState(3); // default Caption view

  const pipelineStages = [
    { id: 'biz_info', title: 'Business Data', desc: 'Case study logs, product releases, customer wins.', icon: FileText },
    { id: 'strategy', title: 'Content Strategy', desc: 'Tone matching & audience positioning matrix.', icon: Sparkles },
    { id: 'post_idea', title: 'Concept Ideation', desc: '3 tailored thematic hooks generated.', icon: Lightbulb },
    { id: 'caption', title: 'Structured Caption', desc: 'Engineered copywriting with clear call-to-action.', icon: AlignLeft },
    { id: 'creative', title: 'Graphic Formatting', desc: 'Template canvas rendering in exact brand specs.', icon: ImageIcon },
    { id: 'hashtags', title: 'Topic Indexing', desc: 'High-intent industry topic tags curated.', icon: Hash },
    { id: 'approval', title: 'Human Review', desc: 'One-click executive sign-off queue.', icon: CheckSquare },
    { id: 'schedule', title: 'Calendar Queue', desc: 'Scheduled for optimal timezone engagement.', icon: Calendar },
    { id: 'publish', title: 'API Dispatch', desc: 'Dispatched to LinkedIn, X & Meta channels.', icon: Send },
    { id: 'analytics', title: 'Telemetry Loop', desc: 'Post metrics recorded into BI dashboard.', icon: BarChart2 }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Content Automation Engine"
          title="From Raw Business Updates to Scheduled Authority"
          description="A semi-automated publishing workflow that maintains rigorous brand standards while saving 15+ hours weekly on content drafting, image formatting, and scheduling."
        />

        {/* 10-Stage Pipeline Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-xl border text-center flex flex-col items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg scale-105 z-10'
                    : 'bg-[#0E1422] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <div className="text-[9px] font-mono opacity-70 mb-1">
                  0{idx + 1}
                </div>
                <Icon className="w-4 h-4 my-1" />
                <span className="text-[10px] font-display font-bold leading-tight truncate w-full">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card of Selected Stage */}
        <div className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent" size="sm">
                  Stage 0{activeStage + 1} of 10
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  {pipelineStages[activeStage].title}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white tracking-tight mb-3">
                {pipelineStages[activeStage].title} Stage Details
              </h3>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {pipelineStages[activeStage].desc}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-body text-slate-300">
                <div className="font-display font-semibold text-blue-400 uppercase tracking-wider text-[11px]">
                  Operational Guardrails:
                </div>
                <div>• Strict tone-of-voice adherence from company knowledge base</div>
                <div>• Zero automated publishing without prior human sign-off</div>
                <div>• Automated resize matrix for desktop and mobile feeds</div>
              </div>
            </div>

            {/* Right: Realistic Content Preview Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#151D2F] border border-white/10 p-5 font-sans shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
                      K
                    </div>
                    <span className="font-display font-semibold text-white">
                     nm inovation Technical Feed // Draft Preview
                    </span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                    Ready for Approval
                  </span>
                </div>

                <div className="text-xs text-slate-200 font-body leading-relaxed space-y-2">
                  <p className="font-semibold text-white">
                    Why isolated AI tools don't solve business operations:
                  </p>
                  <p className="text-slate-300 text-[11px]">
                    Putting a chatbot on a website is novelty. Wiring an event pipeline from your lead ads directly into WhatsApp and your CRM with automated qualification is leverage.
                  </p>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5 text-[10px] font-mono text-blue-300">
                    [Infographic: The 12-Tool Disconnection vs. Unified OS]
                  </div>
                  <div className="text-[10px] text-blue-400 font-mono">
                    #BusinessSystems #Automation #SoftwareEngineering #CRM
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Platform: Multi-Channel</span>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded bg-blue-600 text-white font-display text-[11px] font-semibold cursor-default">
                      One-Click Approve
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
