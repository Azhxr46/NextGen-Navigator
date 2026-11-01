import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Layers,
  Sparkles,
  Award,
  IndianRupee,
  Clock,
  BookOpen,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Compass
} from 'lucide-react';
import { calculateRiasecCosineSimilarity } from '../utils/recommendationEngine';

export const CareerCompareModal: React.FC = () => {
  const {
    compareCareerIds,
    removeFromCompare,
    clearCompare,
    allCareers,
    recommendations,
    toggleSaveCareer,
    studentProfile,
    setActiveCareerDetail,
    setDayInLifeCareer,
    openCareerRoadmap,
    t,
    language,
    translateCategory,
    translateRiasec
  } = useApp();

  if (compareCareerIds.length === 0) return null;

  // Strictly enforce maximum 3 careers per Section 6
  const comparedCareers = useMemo(() => {
    return allCareers.filter(c => compareCareerIds.includes(c.id)).slice(0, 3);
  }, [allCareers, compareCareerIds]);

  // Score lookup map
  const scoreMap = useMemo(() => {
    const map = new Map<string, number>();
    recommendations.forEach(r => map.set(r.career.id, r.overallScore));
    return map;
  }, [recommendations]);

  // Grounded Decision Synthesis Algorithm (Section 6 Requirement)
  const synthesis = useMemo(() => {
    if (comparedCareers.length === 0) return null;

    // Calculate suitability fit for each career
    const evaluations = comparedCareers.map(c => {
      const matchScore = scoreMap.get(c.id) || 75;
      const riasecSim = calculateRiasecCosineSimilarity(studentProfile.riasecScores, c.riasecWeights);
      
      // Low cost feasibility score
      let costScore = 70;
      if (studentProfile.budgetTier === 'low' || studentProfile.budgetTier === 'scholarship_needed') {
        costScore = (c.vocationalLowCostPathway.available || c.diplomaPathway.available) ? 95 : 60;
      } else if (studentProfile.budgetTier === 'medium') {
        costScore = 80;
      } else {
        costScore = 90;
      }

      // Holistic balance score (Suitability 50%, Cost Fit 30%, RIASEC 20%)
      const holisticScore = Math.round(matchScore * 0.5 + costScore * 0.3 + riasecSim * 0.2);

      return {
        career: c,
        matchScore,
        riasecSim,
        costScore,
        holisticScore
      };
    });

    // Sort by holistic suitability rather than just nominal pay
    evaluations.sort((a, b) => b.holisticScore - a.holisticScore);

    const bestFit = evaluations[0];
    const highestPayer = [...evaluations].sort((a, b) => {
      const getNum = (s?: string) => parseFloat((s || '0').replace(/[^\d.]/g, '')) || 0;
      return getNum(b.career.salary?.entryLevel) - getNum(a.career.salary?.entryLevel);
    })[0];

    return {
      evaluations,
      bestFit,
      highestPayer,
      isBestSameAsHighest: bestFit.career.id === highestPayer.career.id
    };
  }, [comparedCareers, scoreMap, studentProfile]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#580C1F] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/15 text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {t.actions.compare}
              </h3>
              <p className="text-xs text-[#D8D8DA]">
                {t.recommendations.compareTrayText} ({comparedCareers.length} / 3)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={clearCompare}
              className="text-xs text-[#D8D8DA] hover:text-white transition hidden sm:inline"
            >
              {t.recommendations.clearCompare}
            </button>
            <button
              onClick={clearCompare}
              className="p-1.5 rounded-lg text-[#D8D8DA] hover:text-white hover:bg-black/20 transition"
              aria-label="Close comparison"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Grounded Decision Synthesis Box (Section 6 Requirement) */}
          {synthesis && (
            <div className="rounded-2xl bg-[#FAF6F0] border-2 border-[#F2D3DC] p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7A1C33]" />
                <h4 className="text-sm font-extrabold text-[#4A0817] uppercase tracking-wider">
                  {t.compare.decisionSynthesisTitle}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    {t.compare.optimalMatch}
                  </span>
                  <p className="font-extrabold text-[#4A0817] text-sm">
                    {synthesis.bestFit.career.title}
                  </p>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Matches your RIASEC profile and {studentProfile.budgetTier.toUpperCase()} budget tier with {synthesis.bestFit.matchScore}% aptitude compatibility.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">
                    {t.compare.highestEarning}
                  </span>
                  <p className="font-extrabold text-[#4A0817] text-sm">
                    {synthesis.highestPayer.career.title}
                  </p>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Offers {synthesis.highestPayer.career.salary?.entryLevel || synthesis.highestPayer.career.indicativeSalary?.entry} entry salary, but requires verification of study investment.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1C33] block">
                    {t.compare.advisorRec}
                  </span>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    {synthesis.isBestSameAsHighest
                      ? `"${synthesis.bestFit.career.title}" delivers both top earning power and strongest personal aptitude alignment.`
                      : `While "${synthesis.highestPayer.career.title}" shows higher nominal pay, "${synthesis.bestFit.career.title}" offers superior long-term retention and academic fit based on your preferences.`}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 10-Point Comparison Grid (Up to 3 Careers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparedCareers.map((c) => {
              const isSaved = studentProfile.savedCareers.includes(c.id);
              const score = scoreMap.get(c.id) || 75;

              return (
                <div
                  key={c.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft flex flex-col justify-between space-y-5 hover:border-[#9B314B]/30 transition"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#7A1C33] border border-[#E5E5E7]">
                        {translateCategory(c.category)}
                      </span>
                      <button
                        onClick={() => removeFromCompare(c.id)}
                        className="text-slate-400 hover:text-rose-600 transition p-1"
                        title={t.compare.remove}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <h4 className="text-base font-extrabold text-[#4A0817] leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {c.tagline || c.description}
                    </p>
                  </div>

                  {/* 10 Comprehensive Comparison Points */}
                  <div className="space-y-3.5 text-xs border-t border-slate-100 pt-3.5">
                    {/* Point 1: Aptitude & RIASEC Suitability */}
                    <div className="p-2.5 rounded-xl bg-[#FAF6F0] border border-[#E5E5E7]">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        1. {t.compare.pt1Aptitude}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-[#7A1C33]">{score}% {t.compare.compatibility}</span>
                        <div className="flex gap-1">
                          {c.primaryRiasec.map(dim => (
                            <span key={dim} className="px-1.5 py-0.5 bg-white border border-[#E5E5E7] text-[#4A0817] font-bold rounded text-[10px]" title={translateRiasec(dim).name}>
                              {dim}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Point 2: Salary Potential */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        2. {t.compare.pt2Salary}
                      </span>
                      <p className="font-bold text-emerald-700 text-xs mt-0.5">
                        {t.compare.entryLevel}: {c.salary?.entryLevel || c.indicativeSalary?.entry}
                      </p>
                      <p className="text-slate-500 text-[11px]">
                        Mid-Career: {c.salary?.midLevel || c.indicativeSalary?.midLevel || 'Competitive'}
                      </p>
                    </div>

                    {/* Point 3: Market Demand & Outlook */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        3. {t.compare.pt10Growth}
                      </span>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold text-[11px] border border-emerald-200">
                        {c.demandTrend || 'High Growth'}
                      </span>
                    </div>

                    {/* Point 4: Future Opportunities & Trends */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        4. {t.compare.pt9Skills}
                      </span>
                      <p className="text-slate-700 text-[11px] mt-0.5 leading-snug">
                        {c.futureOpportunities || c.futureSkillTrends?.slice(0, 2).join(', ') || 'Emerging industry adoption, specialized consulting, global remote roles.'}
                      </p>
                    </div>

                    {/* Point 5: Minimum Qualifications */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        5. {t.compare.pt3Eligibility}
                      </span>
                      <p className="text-slate-800 text-[11px] mt-0.5 font-medium">
                        {c.ugPathway?.degrees[0] || 'Bachelor Degree'}
                      </p>
                      <p className="text-slate-500 text-[10px]">
                        School: {c.requiredSchoolSubjects.slice(0, 2).join(', ')}
                      </p>
                    </div>

                    {/* Point 6: Estimated Education Cost & Fees */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        6. {t.compare.pt5Cost}
                      </span>
                      <p className="text-slate-800 text-[11px] mt-0.5">
                        <strong className="text-emerald-700 font-semibold">Govt: </strong>{c.estimatedCost.govtColleges}
                      </p>
                      <p className="text-slate-500 text-[10px]">
                        Private: {c.estimatedCost.privateTier2 || c.estimatedCost.privateTier1}
                      </p>
                    </div>

                    {/* Point 7: Core Technical Skills */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        7. {t.compare.pt9Skills}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {c.coreSkills.slice(0, 3).map(skill => (
                          <span key={skill} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Point 8: Career Growth Trajectory */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        8. {t.compare.pt8Pathways}
                      </span>
                      <p className="text-slate-700 text-[11px] mt-0.5 leading-snug">
                        {c.ugPathway.steps.slice(0, 2).join(' → ') || 'Foundation Degree → Practical Projects → Senior Professional'}
                      </p>
                    </div>

                    {/* Point 9: Job Opportunities & Hiring Sectors */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        9. {t.compare.pt7Exams}
                      </span>
                      <p className="text-slate-700 text-[11px] mt-0.5 leading-snug">
                        {c.sector}, Corporate Enterprises, Public Sector
                      </p>
                    </div>

                    {/* Point 10: Study Duration & Alternative Routes */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        10. {t.compare.pt4Duration}
                      </span>
                      <p className="text-slate-800 text-[11px] mt-0.5">
                        Duration: {c.studyDuration}
                      </p>
                      {c.diplomaPathway?.available && (
                        <p className="text-emerald-700 text-[10px] font-medium">
                          Alternative: {c.diplomaPathway.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCareerDetail(c);
                        clearCompare();
                      }}
                      className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition"
                    >
                      View Complete Dossier
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSaveCareer(c.id)}
                        className={`flex-1 py-1.5 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                          isSaved
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : 'hover:bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-600 text-amber-600' : ''}`} />
                        {isSaved ? 'Shortlisted' : 'Shortlist'}
                      </button>
                      <button
                        onClick={() => {
                          clearCompare();
                          openCareerRoadmap(c.id);
                        }}
                        className="flex-1 py-1.5 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white text-xs font-bold transition flex items-center justify-center gap-1"
                      >
                        <span>Follow Roadmap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
