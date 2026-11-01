import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_CATEGORIES } from '../data/assessmentQuestions';
import { RIASECScore, RIASECType, AssessmentCategory } from '../types';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
  RotateCcw,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';
import confetti from 'canvas-confetti';

export const AssessmentPage: React.FC = () => {
  const { studentProfile, updateStudentProfile, setCurrentRoute, language, showToast, t, translateRiasec } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<AssessmentCategory>('comprehensive');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);

  // Filter questions by active category
  const activeQuestions = ASSESSMENT_QUESTIONS.filter(q => q.category === selectedCategory);
  const totalQuestions = activeQuestions.length;
  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  // Dynamic RIASEC calculator from current answers
  const computeLiveScores = (): RIASECScore => {
    const counts: Record<RIASECType, { total: number; max: number }> = {
      R: { total: 0, max: 0 },
      I: { total: 0, max: 0 },
      A: { total: 0, max: 0 },
      S: { total: 0, max: 0 },
      E: { total: 0, max: 0 },
      C: { total: 0, max: 0 }
    };

    activeQuestions.forEach(q => {
      counts[q.riasecTarget].max += 5;
      if (answers[q.id]) {
        counts[q.riasecTarget].total += answers[q.id];
      } else {
        counts[q.riasecTarget].total += 3;
      }
    });

    return {
      R: counts.R.max > 0 ? Math.round((counts.R.total / counts.R.max) * 100) : 50,
      I: counts.I.max > 0 ? Math.round((counts.I.total / counts.I.max) * 100) : 50,
      A: counts.A.max > 0 ? Math.round((counts.A.total / counts.A.max) * 100) : 50,
      S: counts.S.max > 0 ? Math.round((counts.S.total / counts.S.max) * 100) : 50,
      E: counts.E.max > 0 ? Math.round((counts.E.total / counts.E.max) * 100) : 50,
      C: counts.C.max > 0 ? Math.round((counts.C.total / counts.C.max) * 100) : 50
    };
  };

  const liveScores = computeLiveScores();

  const radarData = [
    { subject: `R - ${translateRiasec('Realistic').name}`, score: liveScores.R, fullMark: 100 },
    { subject: `I - ${translateRiasec('Investigative').name}`, score: liveScores.I, fullMark: 100 },
    { subject: `A - ${translateRiasec('Artistic').name}`, score: liveScores.A, fullMark: 100 },
    { subject: `S - ${translateRiasec('Social').name}`, score: liveScores.S, fullMark: 100 },
    { subject: `E - ${translateRiasec('Enterprising').name}`, score: liveScores.E, fullMark: 100 },
    { subject: `C - ${translateRiasec('Conventional').name}`, score: liveScores.C, fullMark: 100 }
  ];

  const handleSelectOption = (score: number) => {
    if (!currentQuestion) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: score }));

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSwitchCategory = (catId: AssessmentCategory) => {
    setSelectedCategory(catId);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  const handleCompleteAssessment = () => {
    const finalScores = computeLiveScores();

    updateStudentProfile({
      riasecScores: finalScores,
      activeAssessmentCategory: selectedCategory,
      assessmentCompleted: true,
      assessmentDate: new Date().toISOString()
    });

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    showToast({
      type: 'success',
      title: 'Assessment Finished',
      message: 'Your category profile and career recommendations have been updated.'
    });

    setCurrentRoute('recommendations');
  };

  const progressPercentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  // Question localized text
  const getQuestionText = () => {
    if (language === 'hi' && currentQuestion?.hindiQuestion) return currentQuestion.hindiQuestion;
    if (language === 'kn' && currentQuestion?.kannadaQuestion) return currentQuestion.kannadaQuestion;
    return currentQuestion?.question;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header */}
      <div className="space-y-3 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.assessment.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.assessment.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          {t.assessment.subtitle}
        </p>

        {/* Ethical Notice */}
        <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7] text-xs text-slate-700 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-[#7A1C33] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{t.common.official}:</strong> {t.disclaimers.assessmentNotice}
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          {language === 'kn' ? 'ಪರೀಕ್ಷಾ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ:' : language === 'hi' ? 'मूल्यांकन मोड चुनें:' : 'Select Assessment Mode:'}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {ASSESSMENT_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSwitchCategory(cat.id)}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-[#7A1C33] text-white border-[#580C1F] shadow-sm'
                    : 'bg-white text-slate-800 border-[#E5E5E7] hover:border-[#9B314B] hover:bg-[#FAF6F0]'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold leading-snug">
                    {language === 'hi' ? cat.hindiTitle : language === 'kn' ? cat.kannadaTitle : cat.title}
                  </h4>
                  <p className={`text-[10px] mt-1 line-clamp-2 ${isSelected ? 'text-[#FAF6F0]/80' : 'text-slate-500'}`}>
                    {cat.targetRole}
                  </p>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#D8D8DA]' : 'text-[#7A1C33]'}`}>
                  {cat.questionCount} {language === 'kn' ? 'ಪ್ರಶ್ನೆಗಳು' : language === 'hi' ? 'प्रश्न' : 'Questions'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Assessment Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Active Question Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
            {/* Question Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="text-[#7A1C33]">
                  {language === 'kn' ? `ಪ್ರಶ್ನೆ ${currentQuestionIndex + 1} / ${totalQuestions}` : language === 'hi' ? `प्रश्न ${currentQuestionIndex + 1} / ${totalQuestions}` : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
                </span>
                <span>{progressPercentage}% {t.assessment.completed}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#FAF6F0] overflow-hidden border border-[#E5E5E7]">
                <div
                  className="h-full bg-[#7A1C33] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Question Statement */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B314B]">
                {t.assessment.dimension}: {translateRiasec(currentQuestion?.dimension as any || 'Realistic').name} ({currentQuestion?.riasecTarget})
              </span>
              <h2 className="text-base sm:text-xl font-extrabold text-[#4A0817] leading-relaxed">
                {getQuestionText()}
              </h2>
            </div>

            {/* Likert Scale Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion?.options.map((opt, idx) => {
                const isSelected = answers[currentQuestion.id] === opt.score;
                const optionText = language === 'hi' && opt.hindiText
                  ? opt.hindiText
                  : language === 'kn' && opt.kannadaText
                  ? opt.kannadaText
                  : opt.text;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-start gap-3.5 group ${
                      isSelected
                        ? 'border-[#7A1C33] bg-[#F9EBEF] text-[#4A0817] shadow-sm'
                        : 'border-[#E5E5E7] bg-white hover:border-[#9B314B] hover:bg-[#FAF6F0] text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                        isSelected
                          ? 'border-[#7A1C33] bg-[#7A1C33] text-white'
                          : 'border-slate-300 group-hover:border-[#9B314B]'
                      }`}
                    >
                      {isSelected ? '✓' : idx + 1}
                    </div>
                    <span className="leading-snug">{optionText}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="btn-ghost disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.assessment.prevBtn}</span>
              </button>

              {currentQuestionIndex + 1 < totalQuestions ? (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  disabled={!answers[currentQuestion?.id]}
                  className="btn-primary disabled:opacity-40"
                >
                  <span>{t.assessment.nextBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleCompleteAssessment}
                  className="btn-primary"
                >
                  <span>{t.assessment.finishBtn}</span>
                  <Award className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Dynamic RIASEC Radar Profile */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#4A0817]">{t.assessment.liveScores}</h3>
                <p className="text-[11px] text-slate-500">
                  {language === 'kn' ? 'ನೀವು ಉತ್ತರಿಸಿದಂತೆ ಲೈವ್ ನವೀಕರಣಗೊಳ್ಳುತ್ತದೆ' : language === 'hi' ? 'उत्तर देते समय लाइव अपडेट होता है' : 'Updates dynamically as you answer'}
                </p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#F9EBEF] text-[#7A1C33] font-bold">
                {language === 'kn' ? 'ಲೈವ್ ಪ್ರೊಫೈಲ್' : language === 'hi' ? 'लाइव प्रोफ़ाइल' : 'Dynamic Profile'}
              </span>
            </div>

            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#E5E5E7" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A0817', fontSize: 10, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} stroke="#E5E5E7" />
                  <Radar
                    name="Student Profile"
                    dataKey="score"
                    stroke="#7A1C33"
                    fill="#7A1C33"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Trait Descriptions */}
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-[#E5E5E7]">
              <div className="p-2 rounded-lg bg-[#FAF6F0]">
                <span className="font-bold text-[#7A1C33] block">R - {translateRiasec('Realistic').name}</span>
                <span className="text-slate-600">{t.assessment.realisticLabel}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#FAF6F0]">
                <span className="font-bold text-[#7A1C33] block">I - {translateRiasec('Investigative').name}</span>
                <span className="text-slate-600">{t.assessment.investigativeLabel}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#FAF6F0]">
                <span className="font-bold text-[#7A1C33] block">A - {translateRiasec('Artistic').name}</span>
                <span className="text-slate-600">{t.assessment.artisticLabel}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#FAF6F0]">
                <span className="font-bold text-[#7A1C33] block">S - {translateRiasec('Social').name}</span>
                <span className="text-slate-600">{t.assessment.socialLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
