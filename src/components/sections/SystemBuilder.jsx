import { useState } from 'react';
import { 
  Check, 
  Plus, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Clock, 
  Sparkles, 
  Activity,
  Sliders
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useSystemBuilder } from '../../hooks/useSystemBuilder';
import { SystemPlanModal } from '../forms/SystemPlanModal';

export function SystemBuilder() {
  const { modules, selectedModules, toggleModule, selectPreset, architecture } = useSystemBuilder();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="builder" className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Signature Interactive Tool"
            title="Build Your Digital Business System"
            description="Select the components your business needs. Watch how our engineering framework links your customer touchpoints, automated workflows, and data intelligence into a unified architecture."
            className="mb-0"
          />

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-display font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" /> Presets:
            </span>
            <button
              type="button"
              onClick={() => selectPreset('growth')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            >
              Acquisition & Growth
            </button>
            <button
              type="button"
              onClick={() => selectPreset('automation')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            >
              Operations & AI
            </button>
            <button
              type="button"
              onClick={() => selectPreset('full')}
              className="px-3 py-1.5 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 text-blue-300 text-xs font-medium border border-blue-500/30 transition-colors"
            >
              Full Enterprise Stack
            </button>
          </div>
        </div>

        {/* Builder Layout: Left Modules Selector / Right Live Architecture Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Module Selector */}
          <div className="lg:col-span-6 bg-[#0E1422] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Select Operational Modules
              </span>
              <span className="font-mono text-xs text-blue-400">
                {selectedModules.length} of {modules.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modules.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);

                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-150 flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500/60 text-white shadow-sm'
                        : 'bg-[#151D2F]/40 border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="font-display font-semibold text-xs sm:text-sm text-slate-100">
                        {mod.label}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {mod.category}
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-600'
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Dynamic Architecture Calculation */}
          <div className="lg:col-span-6">
            <div className="bg-[#0E1422] border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="font-mono text-xs text-blue-400 font-semibold uppercase">
                    2. Calculated Architecture
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                    Your Interconnected Digital System
                  </h3>
                </div>
                <Badge variant="accent" size="sm">
                  {architecture.interconnectionsCount} Active Links
                </Badge>
              </div>

              {/* Dynamic Connected Modules Formula */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Active Configuration Pipeline:
                </div>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                  {selectedModules.length === 0 ? (
                    <span className="text-slate-500 italic">No modules selected. Pick items on the left.</span>
                  ) : (
                    selectedModules.map((id, index) => {
                      const mod = modules.find((m) => m.id === id);
                      return (
                        <span key={id} className="inline-flex items-center">
                          <span className="px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-500/30">
                            {mod?.label || id}
                          </span>
                          {index < selectedModules.length - 1 && (
                            <span className="text-slate-600 mx-1">+</span>
                          )}
                        </span>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Dynamic Operational Capabilities Output */}
              <div className="space-y-3 mb-6">
                <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-semibold">
                  System Operating Capabilities:
                </div>
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {architecture.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#151D2F] border border-white/5 flex items-start gap-3"
                    >
                      <Activity className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-display font-semibold text-xs text-white">
                          {cap.title}
                        </h4>
                        <p className="font-body text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Leverage & Value Metric */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 mb-6 text-xs">
                <div>
                  <div className="text-slate-400 font-body">Est. Weekly Leverage:</div>
                  <div className="font-display font-bold text-white text-base mt-0.5">
                    {architecture.estimatedWeeklyTimeSaved}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 font-body">Data Sync Speed:</div>
                  <div className="font-display font-bold text-blue-400 text-base mt-0.5">
                    Sub-second Realtime
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-400 font-body text-center sm:text-left">
                  Ready to blueprint your custom stack?
                </span>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setModalOpen(true)}
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Get My System Plan
                </Button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Modal Blueprint Dialog */}
      <SystemPlanModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedModules={selectedModules}
        architecture={architecture}
      />
    </section>
  );
}
