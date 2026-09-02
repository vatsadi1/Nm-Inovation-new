import { useState } from 'react';
import { CheckCircle2, Download, Send, Sparkles, Layers } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { apiClient } from '../../services/api';

export function SystemPlanModal({ isOpen, onClose, selectedModules, architecture }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await apiClient.submitSystemPlan({
        ...formData,
        selectedModules
      });
      setSubmissionResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Custom System Architecture Blueprint"
      subtitle="Generated based on your selected operational components"
      maxWidth="max-w-2xl"
    >
      {!submissionResult ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Architecture Summary Box */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
              <span className="font-display font-semibold text-blue-400">
                Selected Modules ({selectedModules.length})
              </span>
              <span className="font-mono text-slate-400">
                Estimated Time Leverage: {architecture.estimatedWeeklyTimeSaved}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selectedModules.map((modId) => (
                <span
                  key={modId}
                  className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs capitalize"
                >
                  {modId.replace('_', ' ')}
                </span>
              ))}
            </div>

            <div className="text-xs text-slate-400">
              Active Capabilities: {architecture.capabilities.map((c) => c.title).join(' • ')}
            </div>
          </div>

          {/* Form Fields for Handoff */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-display font-semibold text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151D2F] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-slate-300 mb-1">
                Business / Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Apex Dynamics Ltd"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151D2F] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-slate-300 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@apexdynamics.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151D2F] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-display font-semibold text-slate-300 mb-1">
                Phone / WhatsApp (Optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 019-2834"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#151D2F] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-slate-300 mb-1">
              Any Specific Integration Requirements? (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Must integrate with our existing QuickBooks or HubSpot database..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#151D2F] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              icon={isSubmitting ? Sparkles : Send}
            >
              {isSubmitting ? 'Compiling Blueprint...' : 'Receive System Architecture Plan'}
            </Button>
          </div>
        </form>
      ) : (
        /* Form Submission Success / Backend-Ready Status View */
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h4 className="font-heading text-xl font-bold text-white">
            System Blueprint Compiled
          </h4>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto text-left font-mono text-xs space-y-1.5 text-slate-300">
            <div><span className="text-slate-500">Blueprint Ref:</span> {submissionResult.blueprintId}</div>
            <div><span className="text-slate-500">Configured Modules:</span> {selectedModules.length} components</div>
            <div><span className="text-slate-500">Status:</span> {submissionResult.status}</div>
          </div>

          <p className="font-body text-xs text-slate-300 max-w-md mx-auto">
            {submissionResult.message}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Button variant="primary" size="md" onClick={handleReset}>
              Done
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
