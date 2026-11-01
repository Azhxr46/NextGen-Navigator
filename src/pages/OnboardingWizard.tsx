import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EducationLevel, BudgetTier, StudentProfile } from '../types';
import {
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Compass,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OnboardingWizard: React.FC = () => {
  const {
    studentProfile,
    updateStudentProfile,
    setCurrentRoute,
    showToast,
    t,
    translateSubject,
    translateStrength,
    translateEducationLevel,
    translateBudgetTier
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State initialized from current studentProfile
  const [formData, setFormData] = useState<StudentProfile>(studentProfile);

  const subjectOptions = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
    'Accountancy', 'Economics', 'Business Studies', 'Psychology',
    'Fine Arts', 'Political Science', 'History', 'English', 'Vocational Electronics',
    'Smart Agriculture', 'Applied Mathematics'
  ];

  const strengthOptions = [
    'Logical & Mathematical Reasoning', 'Visual Creativity & Design',
    'Hands-on Mechanical Tinkering', 'Empathetic Active Listening',
    'Public Speaking & Leadership', 'Data & Clerical Organization',
    'Scientific Curiosity', 'Field Stamina & Physical Endurance'
  ];

  const handleToggleSubject = (subject: string, field: 'preferredSubjects' | 'challengingSubjects') => {
    setFormData(prev => {
      const list = prev[field] || [];
      const updated = list.includes(subject)
        ? list.filter(s => s !== subject)
        : [...list, subject];
      return { ...prev, [field]: updated };
    });
  };

  const handleToggleStrength = (strength: string) => {
    setFormData(prev => {
      const list = prev.selfReportedStrengths || [];
      const updated = list.includes(strength)
        ? list.filter(s => s !== strength)
        : [...list, strength];
      return { ...prev, selfReportedStrengths: updated };
    });
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.guardianConsent) {
      showToast({
        type: 'warning',
        title: 'Consent Required',
        message: t.onboarding.consentWarning || 'Please review and confirm guardian consent & privacy acknowledgment to proceed.'
      });
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Save and Complete
      updateStudentProfile(formData);
      try {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      } catch {}
      showToast({
        type: 'success',
        title: t.onboarding.profileUpdatedToast || 'Profile Updated!',
        message: 'Proceeding to your RIASEC career assessment.'
      });
      setCurrentRoute('assessment');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSkipNonEssential = () => {
    updateStudentProfile(formData);
    showToast({ type: 'info', title: t.onboarding.skipToAssessment, message: 'You can update your academic details anytime from your dashboard.' });
    setCurrentRoute('assessment');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-fade-up">
      {/* Progress Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span className="uppercase tracking-wider text-[#7A1C33]">{t.onboarding.stepOf} {currentStep} / 4</span>
          <button
            onClick={handleSkipNonEssential}
            className="text-slate-400 hover:text-[#7A1C33] transition underline underline-offset-2"
          >
            {t.onboarding.skipToAssessment}
          </button>
        </div>
        <div className="w-full bg-[#FAF6F0] border border-[#E5E5E7] h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-[#7A1C33] h-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Wizard Form Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-10 space-y-8">
        {/* STEP 1: CONSENT & PRIVACY-BY-DESIGN */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{t.onboarding.step1Title}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                {t.onboarding.step1Desc}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                NextGen Navigators strictly respects your privacy. We prioritize transparent, ethical guidance and safe exploration for all students.
              </p>
            </div>

            {/* Privacy Guarantee Card */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-950">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>{t.onboarding.privacyGuaranteeTitle}</span>
              </div>
              <ul className="space-y-1 text-emerald-800 list-disc pl-5 leading-relaxed text-[11px]">
                <li>{t.onboarding.privacyPoint1}</li>
                <li>{t.onboarding.privacyPoint2}</li>
                <li>{t.onboarding.privacyPoint3}</li>
                <li>{t.onboarding.privacyPoint4}</li>
              </ul>
            </div>

            {/* Basic Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">{t.onboarding.fullNameLabel}</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.onboarding.fullNamePlaceholder}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">{t.onboarding.ageLabel}</label>
                <input
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                  placeholder={t.onboarding.agePlaceholder}
                  min={12}
                  max={25}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">{t.onboarding.cityLabel}</label>
                <input
                  type="text"
                  value={formData.city || ''}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder={t.onboarding.cityPlaceholder}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">{t.onboarding.schoolLabel}</label>
                <input
                  type="text"
                  value={formData.schoolName || ''}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  placeholder={t.onboarding.schoolPlaceholder}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
                <input
                  type="checkbox"
                  checked={formData.guardianConsent}
                  onChange={(e) => setFormData({ ...formData, guardianConsent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-brand-indigo rounded border-slate-300 focus:ring-indigo-400"
                />
                <span className="text-xs text-slate-700 leading-relaxed">
                  {t.onboarding.consentText}
                </span>
              </label>
            </div>
          </div>
        )}

        {/* STEP 2: ACADEMICS & SUBJECT READINESS */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{t.onboarding.step2Title}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                {t.onboarding.step2Desc}
              </h2>
            </div>

            {/* Education Level Chips */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">{t.onboarding.academicStageLabel}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Class 8-10', 'Class 11-12', 'Diploma / ITI', 'Undergraduate'] as EducationLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({ ...formData, classLevel: level })}
                    className={`p-3 rounded-xl border text-xs font-bold transition ${
                      formData.classLevel === level
                        ? 'border-brand-indigo bg-brand-light text-brand-indigo ring-2 ring-indigo-400/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {translateEducationLevel(level)}
                  </button>
                ))}
              </div>
            </div>

            {/* Academic Score Range */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">{t.onboarding.schoolStreamLabel}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Above 90%', '75% - 90%', '60% - 75%', 'Passing to 60%'].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, academicScoreRange: range })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition ${
                      formData.academicScoreRange === range
                        ? 'border-brand-indigo bg-brand-light text-brand-indigo ring-2 ring-indigo-400/30'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Note: Marks never disqualify you. We use this to surface bridge courses and entrance alternatives.
              </p>
            </div>

            {/* Preferred Subjects */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {t.onboarding.preferredSubjectsLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {subjectOptions.map((subj) => {
                  const isSelected = formData.preferredSubjects?.includes(subj);
                  return (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => handleToggleSubject(subj, 'preferredSubjects')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                        isSelected
                          ? 'bg-brand-indigo text-white border-brand-indigo shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {translateSubject(subj)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Challenging Subjects */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {t.onboarding.challengingSubjectsLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {subjectOptions.map((subj) => {
                  const isSelected = formData.challengingSubjects?.includes(subj);
                  return (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => handleToggleSubject(subj, 'challengingSubjects')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                        isSelected
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {translateSubject(subj)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: STRENGTHS & LEARNING STYLE */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{t.onboarding.step3Title}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                {t.onboarding.step3Desc}
              </h2>
            </div>

            {/* Learning Style */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">How Do You Learn Best? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { style: 'Practical/Hands-on', desc: 'Doing, building, tinkering, making mistakes' },
                  { style: 'Visual', desc: 'Charts, diagrams, Figma, video explainers' },
                  { style: 'Theoretical', desc: 'Books, formal logic, derivations, math proofs' },
                  { style: 'Mixed', desc: 'A balanced blend of theory and execution' }
                ].map((item) => (
                  <button
                    key={item.style}
                    type="button"
                    onClick={() => setFormData({ ...formData, learningStyle: item.style as any })}
                    className={`p-3.5 rounded-xl border text-left text-xs transition ${
                      formData.learningStyle === item.style
                        ? 'border-brand-indigo bg-brand-light text-brand-indigo ring-2 ring-indigo-400/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold">{item.style}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Self-Reported Strengths */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {t.onboarding.strengthsLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {strengthOptions.map((str) => {
                  const isSelected = formData.selfReportedStrengths?.includes(str);
                  return (
                    <button
                      key={str}
                      type="button"
                      onClick={() => handleToggleStrength(str)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-indigo bg-indigo-50/60 text-brand-indigo ring-1 ring-indigo-400'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{translateStrength(str)}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-indigo" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Free-form Long-Term Aspiration */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                What is your biggest personal dream or career aspiration? (In your own words)
              </label>
              <textarea
                rows={3}
                value={formData.longTermAspirations || ''}
                onChange={(e) => setFormData({ ...formData, longTermAspirations: e.target.value })}
                placeholder="e.g. I want to build green energy systems in my home state and make my family financially secure..."
                className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs font-medium text-slate-800"
              />
            </div>
          </div>
        )}

        {/* STEP 4: PRACTICAL PREFERENCES & AFFORDABILITY */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{t.onboarding.step4Title}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                {t.onboarding.step4Desc}
              </h2>
            </div>

            {/* Education Budget Range */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">{t.onboarding.budgetHeading}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { tier: 'scholarship_needed', label: 'Scholarship Needed / Low (< ₹50,000 / yr)', desc: 'Prioritize 100% government fee waivers, ITIs, & NSP scholarships' },
                  { tier: 'medium', label: 'Medium (₹50,000 – ₹2,00,000 / yr)', desc: 'Public universities, state colleges & affordable polytechnics' },
                  { tier: 'high', label: 'Flexible / Above ₹2,00,000 / yr', desc: 'Open to premier private universities and international options' }
                ].map((item) => (
                  <button
                    key={item.tier}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetTier: item.tier as BudgetTier })}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      formData.budgetTier === item.tier
                        ? 'border-brand-indigo bg-brand-light text-brand-indigo ring-2 ring-indigo-400/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="font-bold">{translateBudgetTier(item.tier)}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Location Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Preferred Study Location</label>
                <input
                  type="text"
                  value={formData.studyLocationPreference || ''}
                  onChange={(e) => setFormData({ ...formData, studyLocationPreference: e.target.value })}
                  placeholder="e.g. Nearby District / All India"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700">Preferred Language of Guidance</label>
                <select
                  value={formData.preferredLanguage || 'English'}
                  onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium bg-white"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिन्दी)</option>
                  <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                </select>
              </div>
            </div>

            {/* Relocation Willingness */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
                <input
                  type="checkbox"
                  checked={formData.willingnessToRelocate}
                  onChange={(e) => setFormData({ ...formData, willingnessToRelocate: e.target.checked })}
                  className="w-4 h-4 text-brand-indigo rounded border-slate-300 focus:ring-indigo-400"
                />
                <span className="text-xs font-semibold text-slate-700">
                  I am open to relocating to other Indian states or hostel campuses for higher education if government scholarships are available.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Wizard Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          {currentStep > 1 ? (
            <button
              onClick={handleBack}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.onboarding.prevStepBtn}</span>
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-bold transition shadow-soft flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>{currentStep === 4 ? t.onboarding.finishAndAssessBtn : t.onboarding.nextStepBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

