import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_BASKET, SubjectOption } from '../data/subjectsData';
import {
  Layers,
  Sparkles,
  Unlock,
  Lock,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export const SubjectSimulatorPage: React.FC = () => {
  const {
    allCareers,
    setActiveCareerDetail,
    studentProfile,
    updateStudentProfile,
    showToast,
    t,
    language,
    translateStreamPool,
    translateCategory
  } = useApp();

  // Student's currently selected subject list in simulator
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>(() => {
    // initialize from profile if available or default multidisciplinary combo
    return ['subj-physics', 'subj-math', 'subj-cs', 'subj-economics'];
  });

  const selectedSubjects = SUBJECT_BASKET.filter(s => selectedSubjectIds.includes(s.id));

  const toggleSubject = (subjectId: string) => {
    if (selectedSubjectIds.includes(subjectId)) {
      if (selectedSubjectIds.length <= 3) {
        showToast({
          type: 'warning',
          title: 'Minimum 3 Subjects',
          message: 'Please maintain a selection of at least 3 to 4 subjects.'
        });
        return;
      }
      setSelectedSubjectIds(prev => prev.filter(id => id !== subjectId));
    } else {
      if (selectedSubjectIds.length >= 6) {
        showToast({
          type: 'warning',
          title: 'Maximum 6 Subjects',
          message: 'Typical CBSE/State board limit is 5 to 6 subjects including languages.'
        });
        return;
      }
      setSelectedSubjectIds(prev => [...prev, subjectId]);
    }
  };

  // Save combination to student profile
  const handleSaveToProfile = () => {
    const names = selectedSubjects.map(s => s.name);
    updateStudentProfile({ selectedStreamNEP: names });
    showToast({
      type: 'success',
      title: 'Combination Saved to Profile',
      message: 'Your custom subject matrix is now reflected in your dossier and recommendations.'
    });
  };

  // Determine which careers are Unlocked, Partially Eligible, or Locked
  const evaluatedCareers = allCareers.map(career => {
    const required = career.requiredSchoolSubjects || [];
    if (required.length === 0 || required.includes('Any stream') || required.includes('Any subjects')) {
      return { career, status: 'Unlocked' as const, missing: [] };
    }

    const selectedNames = selectedSubjects.map(s => s.name.toLowerCase());
    const missingSubjects: string[] = [];

    for (const req of required) {
      const reqLower = req.toLowerCase();
      const hasMatch = selectedNames.some(name =>
        name.includes(reqLower) || reqLower.includes(name) ||
        (reqLower.includes('math') && name.includes('math')) ||
        (reqLower.includes('bio') && name.includes('bio')) ||
        (reqLower.includes('comput') && name.includes('comput'))
      );
      if (!hasMatch) {
        missingSubjects.push(req);
      }
    }

    if (missingSubjects.length === 0) {
      return { career, status: 'Unlocked' as const, missing: [] };
    } else if (missingSubjects.length < required.length) {
      return { career, status: 'Partially Eligible' as const, missing: missingSubjects };
    } else {
      return { career, status: 'Locked' as const, missing: missingSubjects };
    }
  });

  const unlocked = evaluatedCareers.filter(c => c.status === 'Unlocked');
  const partiallyEligible = evaluatedCareers.filter(c => c.status === 'Partially Eligible');
  const locked = evaluatedCareers.filter(c => c.status === 'Locked');

  // Smart Warning Alerts
  const hasMath = selectedSubjectIds.includes('subj-math') || selectedSubjectIds.includes('subj-applied-math');
  const hasBio = selectedSubjectIds.includes('subj-biology');
  const hasCS = selectedSubjectIds.includes('subj-cs') || selectedSubjectIds.includes('subj-voc-ai');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E5E7] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] border border-[#F2D3DC] text-[#7A1C33] text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.simulator.title}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
            {t.simulator.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
            {t.simulator.subtitle}
          </p>
        </div>

        <button
          onClick={handleSaveToProfile}
          className="px-5 py-2.5 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white font-bold text-xs transition flex items-center gap-2 shadow-soft self-start md:self-auto"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{t.actions.saveNotes}</span>
        </button>
      </div>

      {/* Smart Warning Alerts If Dropping Core Enablers */}
      <div className="space-y-2">
        {!hasMath && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-amber-950 block">{t.simulator.mathWarningTitle}</strong>
              <p>
                {t.simulator.mathWarningDesc}
                <span className="font-semibold text-[#7A1C33] ml-1">{t.simulator.lowCostAlternative}: </span>
                {t.simulator.mathAlternative}
              </p>
            </div>
          </div>
        )}

        {!hasBio && (
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-sky-950 block">{t.simulator.bioWarningTitle}</strong>
              <p>
                {t.simulator.bioWarningDesc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Subject Selection Basket by Stream Pools */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-navy-900">{t.simulator.step1}</h3>
            <p className="text-xs text-slate-500">{language === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿದ ವಿಷಯಗಳು:' : language === 'hi' ? 'चयनित विषय:' : 'Currently Selected:'} {selectedSubjectIds.length} {language === 'kn' ? 'ವಿಷಯಗಳು' : language === 'hi' ? 'विषय' : 'Subjects'}</p>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
            {t.simulator.compatibilityRating}
          </span>
        </div>

        {/* 4 Pools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {(['Science', 'Commerce', 'Humanities', 'Vocational'] as const).map((pool) => {
            const poolSubjects = SUBJECT_BASKET.filter(s => s.streamPool === pool);
            return (
              <div key={pool} className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  {translateStreamPool(pool)}
                </span>
                <div className="space-y-2">
                  {poolSubjects.map((subject) => {
                    const isSelected = selectedSubjectIds.includes(subject.id);
                    return (
                      <button
                        key={subject.id}
                        type="button"
                        onClick={() => toggleSubject(subject.id)}
                        className={`w-full p-3 rounded-2xl border text-left text-xs transition flex flex-col justify-between space-y-1 ${
                          isSelected
                            ? 'border-brand-indigo bg-brand-light text-brand-indigo font-bold ring-2 ring-indigo-400/40 shadow-xs'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{subject.name}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-indigo" />}
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal line-clamp-1">
                          {subject.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-Time Career Unlock Status (3 Buckets) */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <span>{t.simulator.realtimeImpact}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. Fully Unlocked */}
          <div className="bg-white rounded-3xl border border-emerald-200 shadow-soft p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Unlock className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-emerald-950">{t.simulator.fullyEligible} ({unlocked.length})</h3>
                </div>
                <span className="text-xs font-black text-emerald-700 font-mono">{t.simulator.unlockedBadge}</span>
              </div>
              <p className="text-[11px] text-slate-500">{t.simulator.fullyEligibleDesc}</p>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {unlocked.map(({ career }) => (
                  <div
                    key={career.id}
                    onClick={() => setActiveCareerDetail(career)}
                    className="p-3 rounded-xl border border-slate-100 bg-emerald-50/30 hover:bg-emerald-50 text-xs cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-emerald-700">{career.title}</p>
                      <p className="text-[10px] text-slate-500">
                        {translateCategory(career.category)} • {career.salary?.entryLevel || career.indicativeSalary?.entry || 'Salary data unavailable'}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Partially Eligible (Bridge Course Recommended) */}
          <div className="bg-white rounded-3xl border border-amber-200 shadow-soft p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-amber-950">{t.simulator.partialMatch} ({partiallyEligible.length})</h3>
                </div>
                <span className="text-xs font-black text-amber-700 font-mono">{t.simulator.bridgeBadge}</span>
              </div>
              <p className="text-[11px] text-slate-500">{t.simulator.partialMatchDesc}</p>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {partiallyEligible.map(({ career, missing }) => (
                  <div
                    key={career.id}
                    onClick={() => setActiveCareerDetail(career)}
                    className="p-3 rounded-xl border border-slate-100 bg-amber-50/30 hover:bg-amber-50 text-xs cursor-pointer transition space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-slate-900 group-hover:text-amber-800">{career.title}</p>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 transition" />
                    </div>
                    <p className="text-[10px] text-amber-800">
                      <strong>{t.simulator.missingPrereq} </strong>{missing.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Locked Out (Clear Alternative Pathways Offered) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{t.simulator.lockedOut} ({locked.length})</h3>
                </div>
                <span className="text-xs font-black text-slate-500 font-mono">{t.simulator.lockedBadge}</span>
              </div>
              <p className="text-[11px] text-slate-500">{t.simulator.lockedOutDesc}</p>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {locked.map(({ career, missing }) => (
                  <div
                    key={career.id}
                    onClick={() => setActiveCareerDetail(career)}
                    className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-xs cursor-pointer transition space-y-1 group opacity-80 hover:opacity-100"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-slate-700 group-hover:text-indigo-600">{career.title}</p>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition" />
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Requires: {missing.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

