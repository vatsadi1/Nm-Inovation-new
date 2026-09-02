import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Layers, 
  RotateCcw,
  Zap,
  Bot
} from 'lucide-react';
import { AUDIT_QUESTIONS } from '../../data/auditQuestions';
import { Button } from '../common/Button';
import { apiClient } from '../../services/api';

export function AuditQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [auditResult, setAuditResult] = useState(null);

  const totalQuestions = AUDIT_QUESTIONS.length;
  const currentQ = AUDIT_QUESTIONS[currentStep];

  const handleSelectOption = (qId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: option
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateFinalScore();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateFinalScore = async () => {
    let totalPoints = 0;
    const dimensionScores = {
      lead: { name: 'Lead Automation', points: 0, max: 100 },
      crm: { name: 'CRM & Pipeline Operations', points: 0, max: 100 },
      communication: { name: 'Customer Communication', points: 0, max: 100 },
      content: { name: 'Content Engine', points: 0, max: 50 },
      reporting: { name: 'Business Reporting', points: 0, max: 50 }
    };

    Object.entries(answers).forEach(([qId, option]) => {
      totalPoints += option.points;
      if (dimensionScores[option.dimension]) {
        dimensionScores[option.dimension].points += option.points;
      }
    });

    // Normalize out of 100
    const normalizedScore = Math.min(99, Math.round((totalPoints / 400) * 100));

    const resultPayload = {
      totalScore: normalizedScore,
      dimensions: dimensionScores,
      tier: normalizedScore >= 75 ? 'Advanced Automator' : normalizedScore >= 50 ? 'Emerging Operational Stack' : 'High Manual Friction'
    };

    setAuditResult(resultPayload);
    setIsCompleted(true);

    try {
      await apiClient.submitAuditResults(resultPayload);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setAuditResult(null);
  };

  const hasAnsweredCurrent = Boolean(answers[currentQ?.id]);

  return (
    <div className="rounded-2xl bg-[#0E1422] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {!isCompleted ? (
        <div>
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs">
            <span className="font-mono text-blue-400 font-semibold">
              QUESTION 0{currentStep + 1} OF 0{totalQuestions}
            </span>
            <span className="font-display text-slate-400 uppercase tracking-wider font-semibold">
              Category: {currentQ.category}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded-full"
              style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Headline */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id]?.text === opt.text;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.id, opt)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-blue-950/60 border-blue-500 text-white shadow-md'
                      : 'bg-[#151D2F]/50 border-white/5 hover:border-white/20 text-slate-300 hover:bg-[#151D2F]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-blue-400 bg-blue-600' : 'border-slate-500'
                  }`}>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="font-body text-xs sm:text-sm leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentStep === 0}
              icon={ArrowLeft}
              iconPosition="left"
            >
              Previous
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
              icon={currentStep === totalQuestions - 1 ? Sparkles : ArrowRight}
            >
              {currentStep === totalQuestions - 1 ? 'Calculate Automation Score' : 'Next Question'}
            </Button>
          </div>
        </div>
      ) : (
        /* Results Report View */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Score Header */}
          <div className="text-center pb-8 border-b border-white/10">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-2">
              AUTOMATION READINESS ASSESSMENT REPORT
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Your Automation Readiness: <span className="text-blue-400">{auditResult.totalScore}/100</span>
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-display text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" /> Stage: {auditResult.tier}
            </div>
          </div>

          {/* Dimension Breakdown */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Operational Dimension Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(auditResult.dimensions).map(([key, dim]) => {
                const percent = Math.min(100, Math.round((dim.points / dim.max) * 100));

                return (
                  <div key={key} className="p-4 rounded-xl bg-[#151D2F] border border-white/5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-display font-semibold text-slate-200">{dim.name}</span>
                      <span className="font-mono text-blue-400">{percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actionable Engineering Recommendation */}
          <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs text-slate-300 space-y-2">
            <div className="font-display font-bold text-white text-sm flex items-center gap-2">
              <Bot className="w-4 h-4 text-blue-400" />
              Prescribed System Interventions:
            </div>
            <p className="font-body text-slate-300 leading-relaxed">
              Based on your responses, your primary leverage opportunities lie in automating inbound lead qualification via WhatsApp Cloud API and consolidating siloed client data into an integrated CRM core.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-display"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Assessment
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Build My Automation Plan
              </Button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
