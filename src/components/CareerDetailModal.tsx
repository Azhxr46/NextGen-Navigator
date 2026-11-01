import React, { useState } from 'react';
import { Career } from '../types';
import { useApp } from '../context/AppContext';
import {
  X,
  Volume2,
  VolumeX,
  Bookmark,
  Sparkles,
  Layers,
  GraduationCap,
  IndianRupee,
  Clock,
  BookOpen,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Calculator,
  Compass
} from 'lucide-react';
import { speakText, isSpeaking, stopSpeaking } from '../utils/speechSynthesis';

export const CareerDetailModal: React.FC = () => {
  const {
    activeCareerDetail,
    setActiveCareerDetail,
    toggleSaveCareer,
    studentProfile,
    addToCompare,
    setDayInLifeCareer,
    setRoiCareer,
    setCurrentRoute,
    t,
    language,
    translateCategory,
    translateRiasec
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'pathways' | 'exams' | 'future'>('overview');
  const [speaking, setSpeaking] = useState(false);

  if (!activeCareerDetail) return null;

  const career: Career = activeCareerDetail;
  const isSaved = studentProfile.savedCareers.includes(career.id);

  const handleToggleSpeak = () => {
    if (isSpeaking()) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      const entrySal = career.salary?.entryLevel || career.indicativeSalary?.entry || 'Salary data unavailable';
      const textToRead = `${career.title}. ${career.tagline}. Overview: ${career.description}. Primary skills required: ${career.coreSkills.join(', ')}. Indicative entry salary: ${entrySal}. Available low-cost pathway: ${career.vocationalLowCostPathway?.name || career.diplomaPathway?.name || 'Direct Merit'}.`;
      speakText(textToRead, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white p-6 border-b border-[#580C1F]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                  {translateCategory(career.category)}
                </span>
                <span className="text-[11px] font-semibold text-slate-200">
                  {career.sector}
                </span>
                {career.demandTrend && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {career.demandTrend}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {career.title}
              </h2>
            </div>

            {/* Top Action Icons */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Text to Speech Button */}
              <button
                onClick={handleToggleSpeak}
                title={speaking ? t.chatbot.stopSpeaking : t.chatbot.readAloud}
                className={`p-2 rounded-xl transition ${
                  speaking ? 'bg-rose-600 text-white animate-pulse' : 'bg-black/30 hover:bg-black/40 text-slate-200'
                }`}
              >
                {speaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              {/* Bookmark Shortlist */}
              <button
                onClick={() => toggleSaveCareer(career.id)}
                title={isSaved ? t.actions.saved : t.actions.saveCareer}
                className={`p-2 rounded-xl transition ${
                  isSaved ? 'bg-amber-500 text-white' : 'bg-black/30 hover:bg-black/40 text-slate-200'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} />
              </button>

              {/* Close */}
              <button
                onClick={() => {
                  stopSpeaking();
                  setActiveCareerDetail(null);
                }}
                className="p-2 rounded-xl bg-black/30 hover:bg-black/40 text-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 mt-3 max-w-3xl leading-relaxed">
            {career.tagline}
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/20 text-xs">
            <div>
              <span className="text-[10px] text-rose-200 font-bold block uppercase">{t.explorer.studyDuration}</span>
              <span className="font-semibold text-white">{career.studyDuration}</span>
            </div>
            <div>
              <span className="text-[10px] text-rose-200 font-bold block uppercase">{t.explorer.entrySalary}</span>
              <span className="font-extrabold text-emerald-300">
                {career.salary?.entryLevel || career.indicativeSalary?.entry || '—'}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-rose-200 font-bold block uppercase">{t.roi.govtCollege}</span>
              <span className="font-semibold text-white truncate">{career.estimatedCost?.govtColleges || 'Affordable'}</span>
            </div>
            <div>
              <span className="text-[10px] text-rose-200 font-bold block uppercase">{t.recommendations.riasecAlignment}</span>
              <span className="font-bold text-rose-100">{career.primaryRiasec?.map(r => translateRiasec(r === 'R' ? 'Realistic' : r === 'I' ? 'Investigative' : r === 'A' ? 'Artistic' : r === 'S' ? 'Social' : r === 'E' ? 'Enterprising' : 'Conventional').name).join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-[#FAF6F0] px-6 gap-2 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#7A1C33] text-[#7A1C33] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.detail.tabOverview}
          </button>
          <button
            onClick={() => setActiveTab('pathways')}
            className={`py-3 px-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'pathways'
                ? 'border-[#7A1C33] text-[#7A1C33] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.detail.tabPathways}
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`py-3 px-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'exams'
                ? 'border-[#7A1C33] text-[#7A1C33] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.detail.tabExams}
          </button>
          <button
            onClick={() => setActiveTab('future')}
            className={`py-3 px-3 border-b-2 transition whitespace-nowrap ${
              activeTab === 'future'
                ? 'border-[#7A1C33] text-[#7A1C33] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.detail.tabFuture}
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900">{t.detail.descTitle}</h4>
                <p className="text-slate-600 leading-relaxed text-xs">{career.description}</p>
              </div>

              {/* Daily Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900">{t.detail.responsibilitiesTitle}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {career.dailyResponsibilities.map((resp, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block">
                    {t.detail.techSkillsTitle}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {career.coreSkills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-white border border-indigo-200 text-indigo-900 font-semibold text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 space-y-2">
                  <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block">
                    {t.detail.softSkillsTitle}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {career.softSkills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-md bg-white border border-purple-200 text-purple-900 font-semibold text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Highlights */}
              <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7] text-slate-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A1C33] block flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#7A1C33]" />
                  {t.detail.highlightsTitle}
                </span>
                <p className="leading-relaxed text-xs">{career.tagline}. {career.futureOpportunities || 'Presents scalable career advancement opportunities across national and international sectors.'}</p>
              </div>
            </div>
          )}

          {activeTab === 'pathways' && (
            <div className="space-y-6">
              {/* Standard Undergraduate Degree */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-indigo" />
                    Standard Undergraduate Route ({career.ugPathway.durationYears})
                  </span>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">Standard Route</span>
                </div>
                <div className="space-y-1 text-xs text-slate-700">
                  <p><span className="font-semibold text-slate-900">Degrees: </span>{career.ugPathway.degrees.join(' / ')}</p>
                  <p><span className="font-semibold text-slate-900">Recommended 11-12 Streams: </span>{career.recommended11_12Streams.join(', ')}</p>
                  <ol className="list-decimal pl-5 space-y-1 pt-1 text-slate-600">
                    {career.ugPathway.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Alternative Diploma Pathway */}
              {career.diplomaPathway?.available && (
                <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-indigo-950 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      Alternative Polytechnic / Diploma Route ({career.diplomaPathway.duration})
                    </span>
                    <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Accessible Route</span>
                  </div>
                  <p className="font-bold text-indigo-900 text-xs">{career.diplomaPathway.name}</p>
                  <p className="text-slate-700 leading-relaxed text-xs">{career.diplomaPathway.details}</p>
                </div>
              )}

              {/* Vocational / Low-Cost Government Route */}
              {career.vocationalLowCostPathway?.available && (
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-emerald-950 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Zero-Debt / Low-Cost Government Route
                    </span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">High Affordability</span>
                  </div>
                  <p className="font-bold text-emerald-900 text-xs">{career.vocationalLowCostPathway.name}</p>
                  <p className="text-slate-700 text-xs"><span className="font-semibold">Institutes: </span>{career.vocationalLowCostPathway.institutes}</p>
                  <p className="text-slate-700 text-xs"><span className="font-semibold">Est. Cost: </span>{career.vocationalLowCostPathway.costPerYear}</p>
                  <p className="text-slate-700 leading-relaxed text-xs">{career.vocationalLowCostPathway.details}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'exams' && (
            <div className="space-y-6">
              {/* Entrance Exams */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-navy-900">National & State Entrance Exams</h4>
                {career.entranceExams.length > 0 ? (
                  <div className="space-y-2">
                    {career.entranceExams.map((exam, i) => (
                      <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-slate-900 text-xs">{exam.name}</span>
                          <span className="text-[11px] text-slate-500 block">Conducted by {exam.body} • {exam.eligibility}</span>
                          <span className="text-[10px] text-indigo-600 font-semibold">Typical Timeline: {exam.timeline}</span>
                        </div>
                        <a
                          href={exam.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-indigo-700 text-[11px] font-bold flex items-center gap-1.5 border border-slate-200 self-start sm:self-center shrink-0"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">Admissions typically based on Class 10/12 board marks merit lists or university direct applications.</p>
                )}
              </div>

              {/* Financial Costs Comparison Across Tiers */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-navy-900">Estimated Total Education Cost (3 to 5 Years)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Public / Government Colleges</span>
                    <span className="font-extrabold text-sm text-navy-900">{career.estimatedCost.govtColleges}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Open Learning / ITI Subsidized</span>
                    <span className="font-extrabold text-sm text-emerald-700">{career.estimatedCost.openLearningGovt}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Private Tier-2 Institutes</span>
                    <span className="font-bold text-slate-800">{career.estimatedCost.privateTier2}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Private Tier-1 Institutes</span>
                    <span className="font-bold text-slate-800">{career.estimatedCost.privateTier1}</span>
                  </div>
                </div>
              </div>

              {/* Verified Salary Progression */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Verified Indian Salary Benchmarks
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    Source: {career.salary?.source || 'National Career Service (NCS)'} (Updated: {career.salary?.lastUpdated || 'October 2026'})
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium block">Entry Level (0–2 Yrs)</span>
                    <span className="font-extrabold text-xs text-emerald-700">
                      {career.salary?.entryLevel || career.indicativeSalary?.entry || 'Salary data unavailable'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium block">Mid-Level (3–7 Yrs)</span>
                    <span className="font-extrabold text-xs text-slate-900">
                      {career.salary?.midLevel || career.indicativeSalary?.midLevel || 'Salary data unavailable'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium block">Experienced (8+ Yrs)</span>
                    <span className="font-extrabold text-xs text-[#7A1C33]">
                      {career.salary?.experienced || career.indicativeSalary?.experienced || 'Salary data unavailable'}
                    </span>
                  </div>
                </div>

                {career.salary?.factorsAffectingPay && career.salary.factorsAffectingPay.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 text-[11px]">
                    <span className="font-bold text-slate-700">Factors Affecting Pay: </span>
                    <span className="text-slate-600">{career.salary.factorsAffectingPay.join(' • ')}</span>
                  </div>
                )}

                <p className="text-[10px] text-slate-500 italic pt-1 border-t border-slate-200">
                  Disclaimer: Salaries are indicative and subject to market variations, geography, and individual skill level.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'future' && (
            <div className="space-y-6">
              {/* Future Skill Trends */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900">{t.detail.futureSkillsTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {career.futureSkillTrends.map((trend, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200">
                      ⚡ {trend}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Indian Portals */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-navy-900">{t.detail.govtPortalsTitle}</h4>
                <div className="space-y-2">
                  {career.officialPortalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 bg-white hover:bg-indigo-50/30 transition flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-navy-800 text-white">{link.type}</span>
                        <span className="font-semibold text-slate-800 text-xs group-hover:text-indigo-700">{link.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => addToCompare(career.id)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 font-semibold text-slate-700 transition flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-slate-500" />
              {t.actions.compare} (Max 3)
            </button>
            <button
              onClick={() => {
                setDayInLifeCareer(career);
                setActiveCareerDetail(null);
              }}
              className="px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold transition flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              {t.dayInLife.badge}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setRoiCareer(career);
                setActiveCareerDetail(null);
                setCurrentRoute('roi');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              {t.nav.roi}
            </button>
            <button
              onClick={() => {
                setActiveCareerDetail(null);
                setCurrentRoute('roadmap');
              }}
              className="px-4 py-2 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white font-bold transition flex items-center gap-1.5 shadow-soft"
            >
              <Compass className="w-4 h-4" />
              {t.actions.viewRoadmap}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

