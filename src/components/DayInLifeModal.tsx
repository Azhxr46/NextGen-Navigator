import React, { useState } from 'react';
import { Career, DayInLifeScenario } from '../types';
import { useApp } from '../context/AppContext';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Meh,
  ChevronRight,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DayInLifeModalProps {
  career: Career;
  onClose: () => void;
}

export const DayInLifeModal: React.FC<DayInLifeModalProps> = ({ career, onClose }) => {
  const { updateStudentProfile, studentProfile, t } = useApp();

  const scenarios = career.dayInTheLifeScenarios && career.dayInTheLifeScenarios.length > 0
    ? career.dayInTheLifeScenarios
    : [
        {
          id: `${career.id}-default`,
          title: `Workplace Decision in ${career.title}`,
          context: `You are on the job as a professional in ${career.sector}. A critical project deadline arrives with unexpected client specifications.`,
          challenge: 'What is your primary action protocol?',
          options: [
            { label: 'Consult team experts, document requirements, and systematically re-plan the milestones', explanation: 'Correct. Structured collaboration and requirement validation produce dependable results.', isOptimal: true },
            { label: 'Panic and ignore the client emails', explanation: 'Unprofessional avoidance that harms organizational trust.', isOptimal: false },
            { label: 'Deliver incomplete work without testing', explanation: 'Submitting unverified work causes downstream failures.', isOptimal: false }
          ]
        }
      ];

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [simulationCompleted, setSimulationCompleted] = useState(false);

  const scenario: DayInLifeScenario = scenarios[currentScenarioIndex] || scenarios[0];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOptionIndex(idx);
    setHasAnswered(true);

    if (scenario.options[idx]?.isOptimal) {
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex + 1 < scenarios.length) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setHasAnswered(false);
    } else {
      setSimulationCompleted(true);
    }
  };

  const handleFeedback = (feedback: 'loved' | 'neutral' | 'disliked') => {
    updateStudentProfile({
      scenarioFeedback: {
        ...(studentProfile.scenarioFeedback || {}),
        [career.id]: feedback
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white p-6 flex items-start justify-between border-b border-[#580C1F]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-white/20 text-white border border-white/20">
                <Briefcase className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                {t.dayInLife.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{career.title}</h3>
            <p className="text-xs text-rose-100">{t.dayInLife.subheading}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-rose-200 hover:text-white hover:bg-black/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!simulationCompleted ? (
            <>
              {/* Scenario Progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                <span className="font-semibold text-slate-700">Scenario {currentScenarioIndex + 1} of {scenarios.length}</span>
                <span className="text-indigo-600 font-semibold">{scenario.title}</span>
              </div>

              {/* Context Description */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Workplace Context:</span>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">{scenario.context}</p>
                <div className="pt-2 text-xs font-bold text-navy-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Challenge: {scenario.challenge}</span>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {t.dayInLife.actionProtocol}
                </span>
                {scenario.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  let btnStyle = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-slate-800';

                  if (hasAnswered) {
                    if (opt.isOptimal) {
                      btnStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-2 ring-emerald-400/40';
                    } else if (isSelected && !opt.isOptimal) {
                      btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold ring-2 ring-rose-400/30';
                    } else {
                      btnStyle = 'border-slate-200 opacity-50 bg-slate-50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasAnswered}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs transition flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1">
                        <p>{opt.label}</p>
                        {hasAnswered && (isSelected || opt.isOptimal) && (
                          <div className={`mt-2 pt-2 border-t text-[11px] leading-relaxed flex items-start gap-1.5 ${
                            opt.isOptimal ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-700'
                          }`}>
                            {opt.isOptimal ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            )}
                            <div>
                              <span className="font-bold mr-1">{t.dayInLife.explanationTitle}</span>
                              <span>{opt.explanation}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              {hasAnswered && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextScenario}
                    className="px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-indigo-600 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-soft"
                  >
                    <span>{currentScenarioIndex + 1 < scenarios.length ? t.dayInLife.nextScenario : t.dayInLife.finishSimulation}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Post-Simulation Feedback & Real-Time Match Refinement */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mx-auto flex items-center justify-center shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-navy-900">{t.dayInLife.finishSimulation}</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  You just worked through real daily problem-solving scenarios for <span className="font-bold text-slate-900">{career.title}</span>.
                </p>
                <p className="text-sm font-extrabold text-indigo-700 pt-2">
                  {t.dayInLife.feedbackQuestion}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto pt-2">
                <button
                  onClick={() => handleFeedback('loved')}
                  className="p-3 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition flex flex-col items-center gap-1.5 group"
                >
                  <ThumbsUp className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition" />
                  <span className="text-xs font-bold">{t.dayInLife.lovedIt}</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">+4% Match</span>
                </button>

                <button
                  onClick={() => handleFeedback('neutral')}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition flex flex-col items-center gap-1.5 group"
                >
                  <Meh className="w-5 h-5 text-slate-500 group-hover:scale-110 transition" />
                  <span className="text-xs font-bold">{t.dayInLife.neutral}</span>
                  <span className="text-[10px] text-slate-500">Neutral</span>
                </button>

                <button
                  onClick={() => handleFeedback('disliked')}
                  className="p-3 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 transition flex flex-col items-center gap-1.5 group"
                >
                  <ThumbsDown className="w-5 h-5 text-rose-600 group-hover:scale-110 transition" />
                  <span className="text-xs font-bold">{t.dayInLife.disliked}</span>
                  <span className="text-[10px] text-rose-600 font-semibold">-4% Match</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                Your feedback dynamically tunes your overall recommendation compatibility score!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

