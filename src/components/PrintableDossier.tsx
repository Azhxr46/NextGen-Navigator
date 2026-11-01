import React from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from './NextGenEmblem';
import {
  GraduationCap,
  Printer,
  X,
  ShieldCheck,
  Award,
  BookOpen,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

export const PrintableDossier: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { studentProfile, topRecommendations, allCareers, t, translateRiasec } = useApp();

  const handlePrint = () => {
    window.print();
  };

  const radarData = [
    { subject: `R - ${translateRiasec('Realistic').name}`, score: studentProfile.riasecScores.R, fullMark: 100 },
    { subject: `I - ${translateRiasec('Investigative').name}`, score: studentProfile.riasecScores.I, fullMark: 100 },
    { subject: `A - ${translateRiasec('Artistic').name}`, score: studentProfile.riasecScores.A, fullMark: 100 },
    { subject: `S - ${translateRiasec('Social').name}`, score: studentProfile.riasecScores.S, fullMark: 100 },
    { subject: `E - ${translateRiasec('Enterprising').name}`, score: studentProfile.riasecScores.E, fullMark: 100 },
    { subject: `C - ${translateRiasec('Conventional').name}`, score: studentProfile.riasecScores.C, fullMark: 100 }
  ];

  const primaryCareerId = studentProfile.savedCareers[0] || topRecommendations[0]?.career.id;
  const primaryCareer = allCareers.find(c => c.id === primaryCareerId) || topRecommendations[0]?.career;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 flex justify-center">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-200">
        {/* Floating Print Action Header (Hidden in Print) */}
        <div className="no-print bg-[#4A0817] text-white px-6 py-4 flex items-center justify-between border-b border-[#580C1F]">
          <div>
            <h3 className="text-base font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-300" />
              {t.dossier.headerTitle}
            </h3>
            <p className="text-xs text-rose-200">{t.dossier.headerSubtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white text-xs font-bold transition flex items-center gap-2 shadow-soft border border-white/20"
            >
              <Printer className="w-4 h-4" />
              {t.dossier.printBtn}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-rose-200 hover:text-white hover:bg-black/20 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 text-slate-800 print-page space-y-8">
          {/* Official Letterhead */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <NextGenEmblem size={40} />
                <span className="text-2xl font-extrabold tracking-tight text-[#4A0817]">NextGen Navigators</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A1C33]">
                {t.dossier.letterheadTitle}
              </p>
              <p className="text-[11px] text-slate-500">
                {t.dossier.generatedDate}: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | Ref ID: NN-{studentProfile.id.toUpperCase()}
              </p>
            </div>
            <div className="text-right text-xs space-y-1">
              <span className="inline-block px-2.5 py-1 rounded bg-[#F9EBEF] text-[#7A1C33] font-bold border border-[#F2D3DC]">
                {t.dossier.verifiedBadge}
              </span>
              <p className="text-slate-500 text-[11px]">{t.dossier.privacyNote}</p>
            </div>
          </div>

          {/* Student Profile Snapshot Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">{t.dossier.nameLabel}</span>
              <span className="font-bold text-slate-900 text-sm">{studentProfile.fullName || 'Registered Student'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">{t.dossier.classLabel}</span>
              <span className="font-bold text-slate-900">{studentProfile.classLevel} ({studentProfile.age || 16} Yrs)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">{t.dossier.cityLabel}</span>
              <span className="font-bold text-slate-900">{studentProfile.city || 'Bangalore'}, {studentProfile.state || 'Karnataka'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">{t.dossier.budgetLabel}</span>
              <span className="font-bold text-[#7A1C33]">{studentProfile.learningStyle}</span>
            </div>
          </div>

          {/* Section 1: RIASEC Psychometric & Holistic Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#7A1C33]" />
                1. {t.dossier.riasecRadarTitle}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Evaluated across 24 educational guidance dimensions aligned with Holland's occupational codes.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Realistic (Hands-on / Technical):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.R}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Investigative (Analytical / Scientific):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.I}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Artistic (Creative / Expressive):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.A}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Social (Helping / Mentoring):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.S}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Enterprising (Leadership / Business):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.E}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-600">Conventional (Structured / Organizing):</span>
                  <span className="font-bold text-slate-900">{studentProfile.riasecScores.C}%</span>
                </div>
              </div>
            </div>

            {/* Radar Visualizer */}
            <div className="h-64 w-full flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#cbd5e1" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 10, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Student" dataKey="score" stroke="#7A1C33" fill="#7A1C33" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Section 2: Top 3 Compatible Career Pathways */}
          <div>
            <h4 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-[#7A1C33]" />
              2. {t.dossier.topMatchesTitle}
            </h4>
            <div className="space-y-3">
              {topRecommendations.slice(0, 3).map((rec, i) => (
                <div key={rec.career.id} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-slate-900 mr-2">{i + 1}. {rec.career.title}</span>
                      <span className="text-[11px] font-semibold text-[#7A1C33] bg-[#F9EBEF] px-2 py-0.5 rounded border border-[#F2D3DC]">
                        {rec.career.category}
                      </span>
                    </div>
                    <span className="font-extrabold text-sm text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {rec.overallScore}% Fit
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{rec.career.tagline}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-[10px]">
                    <div>
                      <span className="text-slate-400 block font-semibold">Standard UG Route:</span>
                      <span className="font-medium text-slate-800">{rec.career.ugPathway.degrees[0]} ({rec.career.studyDuration})</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Low-Cost / Diploma Route:</span>
                      <span className="font-medium text-emerald-800">{rec.career.diplomaPathway?.name || rec.career.vocationalLowCostPathway?.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Verified Salary Band:</span>
                      <span className="font-medium text-slate-800">
                        {rec.career.salary?.entryLevel || rec.career.indicativeSalary?.entry || 'Salary data unavailable'} (Entry)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Selected Subject Matrix */}
          <div>
            <h4 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#7A1C33]" />
              3. Selected Multidisciplinary Subject Combination
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap gap-2 text-xs">
              {studentProfile.selectedStreamNEP && studentProfile.selectedStreamNEP.length > 0 ? (
                studentProfile.selectedStreamNEP.map((subj, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white font-semibold text-slate-800 rounded-lg border border-slate-300 shadow-2xs">
                    {subj}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic">Core STEM, Language, and Vocational subjects selected.</span>
              )}
            </div>
          </div>

          {/* Section 4: 12-Month Academic & Skill Action Plan */}
          <div>
            <h4 className="text-sm font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-[#7A1C33]" />
              4. 12-Month Academic Action Plan ({primaryCareer?.title || 'Target Career'})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <span className="text-[10px] font-bold text-[#7A1C33] block uppercase mb-1">Months 1–4: Foundation</span>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Focus on core board subjects ({primaryCareer?.requiredSchoolSubjects?.join(', ') || 'Core Subjects'}). Target {studentProfile.academicScoreRange || '60%+'} score.
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <span className="text-[10px] font-bold text-[#7A1C33] block uppercase mb-1">Months 5–8: Skill & Projects</span>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Build 1 portfolio project; complete free certified NPTEL / SWAYAM / Skill India foundation modules.
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <span className="text-[10px] font-bold text-[#7A1C33] block uppercase mb-1">Months 9–12: Exam Prep</span>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Register for relevant entrance tests ({primaryCareer?.entranceExams?.map(e => e.name).join(', ') || 'Board Merit'}). Apply for NSP scholarships.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Financial Affordability & Zero-Debt Sign-off */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <h5 className="font-bold flex items-center gap-1.5 text-emerald-950">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Financial Affordability & Zero-Debt Pathway Summary
            </h5>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Family Annual Budget: ₹{(studentProfile.maxFamilyAnnualContribution || 50000).toLocaleString('en-IN')}/year. Recommended financing involves National Scholarship Portal (NSP) Central Sector Scheme and public-sector bank facilities. High-return government polytechnic and central university pathways ensure no predatory commercial loans are required.
            </p>
          </div>

          {/* Signatures & School Endorsement */}
          <div className="pt-8 border-t border-slate-300 grid grid-cols-3 gap-8 text-center text-xs">
            <div>
              <div className="h-10 border-b border-dashed border-slate-400 mb-1"></div>
              <span className="text-slate-600 font-medium">Student Signature</span>
            </div>
            <div>
              <div className="h-10 border-b border-dashed border-slate-400 mb-1"></div>
              <span className="text-slate-600 font-medium">Parent / Guardian Signature</span>
            </div>
            <div>
              <div className="h-10 border-b border-dashed border-slate-400 mb-1"></div>
              <span className="text-slate-600 font-medium">Career Counsellor / Institution Seal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
