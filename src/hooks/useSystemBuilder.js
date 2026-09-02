import { useState, useMemo } from 'react';

export const SYSTEM_MODULES = [
  { id: 'website', label: 'Business Website', category: 'Digital Touchpoint', tier: 'core' },
  { id: 'mobile_app', label: 'Mobile App', category: 'Digital Touchpoint', tier: 'core' },
  { id: 'crm', label: 'CRM System', category: 'Business Core', tier: 'core' },
  { id: 'erp', label: 'ERP System', category: 'Business Core', tier: 'ops' },
  { id: 'whatsapp', label: 'WhatsApp Automation', category: 'Autonomous Workflow', tier: 'automation' },
  { id: 'ai_agent', label: 'AI Agent (RAG)', category: 'Autonomous Workflow', tier: 'automation' },
  { id: 'gmail_automation', label: 'Gmail Automation', category: 'Autonomous Workflow', tier: 'automation' },
  { id: 'mcp', label: 'MCP Protocol Layer', category: 'Autonomous Workflow', tier: 'automation' },
  { id: 'seo', label: 'Technical SEO', category: 'Acquisition', tier: 'growth' },
  { id: 'google_ads', label: 'Google Ads', category: 'Acquisition', tier: 'growth' },
  { id: 'meta_ads', label: 'Meta Ads', category: 'Acquisition', tier: 'growth' },
  { id: 'social_media', label: 'Social Content Engine', category: 'Acquisition', tier: 'growth' },
  { id: 'analytics', label: 'Executive Analytics / BI', category: 'Intelligence', tier: 'intelligence' }
];

export function useSystemBuilder() {
  // Default sensible starting stack
  const [selectedModules, setSelectedModules] = useState([
    'website',
    'crm',
    'whatsapp',
    'ai_agent',
    'google_ads',
    'analytics'
  ]);

  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectPreset = (presetName) => {
    if (presetName === 'growth') {
      setSelectedModules(['website', 'crm', 'whatsapp', 'google_ads', 'meta_ads', 'analytics']);
    } else if (presetName === 'automation') {
      setSelectedModules(['crm', 'whatsapp', 'ai_agent', 'gmail_automation', 'mcp', 'analytics']);
    } else if (presetName === 'full') {
      setSelectedModules(SYSTEM_MODULES.map((m) => m.id));
    } else {
      setSelectedModules(['website', 'crm', 'whatsapp', 'ai_agent']);
    }
  };

  const architecture = useMemo(() => {
    const has = (id) => selectedModules.includes(id);

    const capabilities = [];
    if (has('website') || has('google_ads') || has('meta_ads') || has('seo')) {
      capabilities.push({
        title: 'Lead Generation & Capture',
        desc: 'Automated inbound acquisition pipelines converting cold search and social traffic into verified contacts.',
        status: 'Active'
      });
    }

    if (has('crm') || has('erp')) {
      capabilities.push({
        title: 'Customer & Pipeline Management',
        desc: 'Centralized database tracking deal stages, contact histories, orders, and team responsibilities.',
        status: 'Active'
      });
    }

    if (has('whatsapp') || has('ai_agent')) {
      capabilities.push({
        title: 'Automated 24/7 Follow-Up & Qualification',
        desc: 'Instant conversational qualification and calendar scheduling without human lag or after-hours drops.',
        status: 'Active'
      });
    }

    if (has('gmail_automation') || has('mcp')) {
      capabilities.push({
        title: 'Unified Operational Triage Layer',
        desc: 'Model Context Protocol linking multi-inbox Gmail, internal documentation, and task delegation.',
        status: 'Active'
      });
    }

    if (has('google_ads') || has('meta_ads') || has('social_media') || has('seo')) {
      capabilities.push({
        title: 'Multi-Channel Acquisition & Content Engine',
        desc: 'Coordinated brand visibility, scheduled post distribution, and server-side tracking algorithms.',
        status: 'Active'
      });
    }

    if (has('analytics')) {
      capabilities.push({
        title: 'Executive Intelligence & Unit Economics',
        desc: 'Live telemetry combining CAC, LTV, revenue realization, and automated weekly AI digests.',
        status: 'Active'
      });
    }

    return {
      selectedCount: selectedModules.length,
      capabilities: capabilities.length > 0 ? capabilities : [
        {
          title: 'Custom Modular Architecture',
          desc: 'Select at least one module above to calculate your interconnected system blueprint.',
          status: 'Pending Selection'
        }
      ],
      interconnectionsCount: Math.max(0, (selectedModules.length * (selectedModules.length - 1)) / 2),
      estimatedWeeklyTimeSaved: `${Math.min(35, selectedModules.length * 2.5 + 4)}h / week`
    };
  }, [selectedModules]);

  return {
    modules: SYSTEM_MODULES,
    selectedModules,
    toggleModule,
    selectPreset,
    architecture
  };
}
