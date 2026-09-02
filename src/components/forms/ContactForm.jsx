import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { apiClient } from '../../services/api';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    companySize: '1-10 employees',
    services: [],
    budget: '$5k - $15k',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const availableServices = [
    'Digital Web & App Platform',
    'Custom CRM / ERP Backbone',
    'AI Agents & WhatsApp Automation',
    'Model Context Protocol (MCP) Workflows',
    'Google & Meta Growth Ads',
    'Executive BI Telemetry'
  ];

  const handleCheckbox = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a brief description of your project.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await apiClient.submitInquiry(formData);
      setSubmittedStatus(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedStatus(null);
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      companySize: '1-10 employees',
      services: [],
      budget: '$5k - $15k',
      message: ''
    });
  };

  return (
    <div className="rounded-2xl bg-[#0E1422] border border-white/15 p-6 sm:p-10 shadow-2xl relative">
      
      {!submittedStatus ? (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Your Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className={`w-full px-4 py-3 rounded-xl bg-[#151D2F] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-body">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="contact-biz" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Business / Organization Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-biz"
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Meridian Holdings"
                className={`w-full px-4 py-3 rounded-xl bg-[#151D2F] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.businessName ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                }`}
              />
              {errors.businessName && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-body">
                  <AlertCircle className="w-3 h-3" /> {errors.businessName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Work Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@meridian.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#151D2F] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                  errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-body">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 019-4829"
                className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Company Size */}
            <div>
              <label htmlFor="contact-size" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Company Size
              </label>
              <select
                id="contact-size"
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-xs sm:text-sm text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="1-10 employees">1 - 10 employees (Founder-led)</option>
                <option value="11-50 employees">11 - 50 employees (Growth Stage)</option>
                <option value="51-200 employees">51 - 200 employees (Mid-Market)</option>
                <option value="200+ employees">200+ employees (Enterprise)</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="contact-budget" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
                Anticipated Budget Range
              </label>
              <select
                id="contact-budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#151D2F] border border-white/10 text-xs sm:text-sm text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="$3k - $8k">$3k - $8k (Focused Automation / Feature)</option>
                <option value="$8k - $20k">$8k - $20k (Core System Build / CRM)</option>
                <option value="$20k - $50k">$20k - $50k (Complete End-to-End BOS)</option>
                <option value="$50k+">$50k+ (Enterprise Infrastructure)</option>
              </select>
            </div>
          </div>

          {/* What Do You Need? Checkboxes */}
          <div>
            <label className="block text-xs font-display font-semibold text-slate-200 mb-2">
              What systems do you need engineered? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {availableServices.map((srv, idx) => {
                const checked = formData.services.includes(srv);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCheckbox(srv)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 ${
                      checked
                        ? 'bg-blue-950/60 border-blue-500 text-white shadow-sm'
                        : 'bg-[#151D2F]/60 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      checked ? 'bg-blue-600 border-blue-400 text-white' : 'border-slate-500'
                    }`}>
                      {checked && <span className="w-1.5 h-1.5 rounded-sm bg-white" />}
                    </div>
                    <span className="font-body truncate">{srv}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-msg" className="block text-xs font-display font-semibold text-slate-200 mb-1.5">
              Project Context & Current Operational Bottlenecks <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="contact-msg"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe what your business does, which tools are currently disconnected, and what workflow you want to automate..."
              className={`w-full px-4 py-3 rounded-xl bg-[#151D2F] border text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-blue-500'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-body">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-body">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>We never share client data or spam your inbox.</span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={isSubmitting ? Sparkles : Send}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Formatting Request...' : 'Submit Architecture Request'}
            </Button>
          </div>

        </form>
      ) : (
        /* Honest Handoff Confirmation View */
        <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Inquiry Prepared
          </h3>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-lg mx-auto text-left font-mono text-xs space-y-2 text-slate-300">
            <div className="text-blue-400 font-display font-semibold pb-1 border-b border-white/5">
              Client Payload Status: {submittedStatus.status}
            </div>
            <div><span className="text-slate-500">Contact:</span> {submittedStatus.data.name} ({submittedStatus.data.email})</div>
            <div><span className="text-slate-500">Business:</span> {submittedStatus.data.businessName}</div>
            <div><span className="text-slate-500">Budget Bracket:</span> {submittedStatus.data.budgetRange}</div>
          </div>

          <p className="font-body text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            {submittedStatus.message}
          </p>

          <div className="pt-4">
            <Button variant="secondary" size="md" onClick={handleReset}>
              Submit Another Request
            </Button>
          </div>
        </div>
      )}

    </div>
  );
}
