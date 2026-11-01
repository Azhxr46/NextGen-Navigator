import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Career } from '../types';
import {
  Compass,
  CheckCircle2,
  Circle,
  BookOpen,
  Calendar,
  Layers,
  Wrench,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Save,
  Award,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const RoadmapTrackerPage: React.FC = () => {
  const {
    studentProfile,
    allCareers,
    topRecommendations,
    activeRoadmapCareerId,
    setActiveRoadmapCareerId,
    toggleRoadmapTask,
    saveRoadmapNotes,
    setActiveCareerDetail,
    setDayInLifeCareer,
    t,
    language,
    translateCategory
  } = useApp();

  // Active roadmap career selection (prioritizes activeRoadmapCareerId from navigation)
  const defaultCareerId =
    activeRoadmapCareerId ||
    studentProfile.savedCareers[0] ||
    topRecommendations[0]?.career.id ||
    allCareers[0].id;

  const [selectedCareerId, setSelectedCareerId] = useState<string>(defaultCareerId);

  // Synchronize when activeRoadmapCareerId changes from outside navigation
  React.useEffect(() => {
    if (activeRoadmapCareerId && activeRoadmapCareerId !== selectedCareerId) {
      setSelectedCareerId(activeRoadmapCareerId);
    }
  }, [activeRoadmapCareerId]);

  const activeCareer = allCareers.find(c => c.id === selectedCareerId) || allCareers[0];
  const completedTaskIds = studentProfile.completedRoadmapTasks[activeCareer.id] || [];

  const [notesText, setNotesText] = useState<string>(studentProfile.customRoadmapNotes[activeCareer.id] || '');

  // Keep notes synchronized with active career
  React.useEffect(() => {
    setNotesText(studentProfile.customRoadmapNotes[activeCareer.id] || '');
  }, [activeCareer.id]);

  // 6 Structured Stages
  const stages = [
    {
      stageNumber: 1,
      title: 'Current Academic Focus & Required Subjects',
      desc: `Focus on mastering ${activeCareer.requiredSchoolSubjects.join(', ')}. Target your benchmark score range to meet university eligibility.`,
      tasks: [
        { id: `${activeCareer.id}-s1-t1`, label: `Complete core NCERT chapters for ${activeCareer.requiredSchoolSubjects.slice(0, 2).join(' & ')}.` },
        { id: `${activeCareer.id}-s1-t2`, label: 'Solve textbook exemplar questions and identify weak conceptual topics.' },
        { id: `${activeCareer.id}-s1-t3`, label: 'Maintain minimum 75% school attendance to comply with CBSE/State board criteria.' }
      ]
    },
    {
      stageNumber: 2,
      title: 'Recommended Next Academic Step & Entrance Exams',
      desc: `Target entrance tests: ${activeCareer.entranceExams.map(e => e.name).join(', ') || 'Direct State / College Merit List'}.`,
      tasks: [
        { id: `${activeCareer.id}-s2-t1`, label: `Verify registration timeline and syllabus on official portals (${activeCareer.entranceExams[0]?.body || 'State Board'}).` },
        { id: `${activeCareer.id}-s2-t2`, label: 'Solve past 3 years actual entrance examination question papers under timed conditions.' },
        { id: `${activeCareer.id}-s2-t3`, label: 'Apply for National Scholarship Portal (NSP) or fee waiver category certificates in advance.' }
      ]
    },
    {
      stageNumber: 3,
      title: 'Technical & Transferable Skills to Build',
      desc: `Master core skills: ${activeCareer.coreSkills.join(', ')}.`,
      tasks: [
        { id: `${activeCareer.id}-s3-t1`, label: `Complete fundamental tutorial in ${activeCareer.coreSkills[0]} using free open documentation.` },
        { id: `${activeCareer.id}-s3-t2`, label: `Practice hands-on mini-exercises in ${activeCareer.coreSkills[1] || 'Problem Solving'}.` },
        { id: `${activeCareer.id}-s3-t3`, label: `Develop communication and teamwork skills: ${activeCareer.softSkills.slice(0, 2).join(' & ')}.` }
      ]
    },
    {
      stageNumber: 4,
      title: 'Beginner Practical Projects & Portfolio Ideas',
      desc: 'Build proof-of-work to showcase during college admissions or job interviews.',
      tasks: [
        { id: `${activeCareer.id}-s4-t1`, label: `Plan and outline your first independent capstone project in ${activeCareer.category}.` },
        { id: `${activeCareer.id}-s4-t2`, label: 'Create a clean digital portfolio (GitHub repository, Behance, or PDF project report).' },
        { id: `${activeCareer.id}-s4-t3`, label: 'Present your project to a teacher, mentor, or school science/art exhibition.' }
      ]
    },
    {
      stageNumber: 5,
      title: 'Free / Affordable Learning Resources & Certifications',
      desc: 'Leverage Government of India portals for verified college credit and certificates.',
      tasks: [
        { id: `${activeCareer.id}-s5-t1`, label: 'Enroll in a relevant free course on SWAYAM / NPTEL (IIT & Central University lectures).' },
        { id: `${activeCareer.id}-s5-t2`, label: 'Complete micro-credentials on Skill India Digital Hub or FutureSkills Prime.' },
        { id: `${activeCareer.id}-s5-t3`, label: 'Transfer verified course credits to your Academic Bank of Credits (ABC) ID.' }
      ]
    },
    {
      stageNumber: 6,
      title: 'Backup Options & Alternative Low-Cost Pathways',
      desc: 'Never risk your career on a single entrance exam. Have resilient fallback routes ready.',
      tasks: [
        { id: `${activeCareer.id}-s6-t1`, label: `Explore alternative pathway: ${activeCareer.diplomaPathway?.name || activeCareer.vocationalLowCostPathway?.name || 'Central University B.Sc/B.Com'}.` },
        { id: `${activeCareer.id}-s6-t2`, label: 'Review state government polytechnic lateral entry rules for second-year engineering mobility.' },
        { id: `${activeCareer.id}-s6-t3`, label: 'Consult with school counsellor or mentor on backup admission counseling dates.' }
      ]
    }
  ];

  const totalTasksCount = stages.reduce((acc, s) => acc + s.tasks.length, 0);
  const completedCount = stages.reduce(
    (acc, s) => acc + s.tasks.filter(t => completedTaskIds.includes(t.id)).length,
    0
  );
  const completionPercentage = Math.round((completedCount / totalTasksCount) * 100);

  const handleTaskToggle = (taskId: string) => {
    toggleRoadmapTask(activeCareer.id, taskId);
    if (!completedTaskIds.includes(taskId) && completedCount + 1 === totalTasksCount) {
      try {
        confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
      } catch {}
    }
  };

  const handleSaveNotes = () => {
    saveRoadmapNotes(activeCareer.id, notesText);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-fade-up">
      {/* Top Banner & Career Selector */}
      <div className="bg-white rounded-3xl border border-[#E5E5E7] shadow-soft p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E5E7] pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.roadmap.title}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
              {activeCareer.title} — {t.roadmap.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.roadmap.subtitle}
            </p>
          </div>

          {/* Career Switcher Dropdown */}
          <div className="w-full sm:w-auto min-w-0 flex items-center gap-2 bg-[#FAF6F0] p-2 rounded-xl border border-[#E5E5E7] text-xs font-semibold">
            <span className="text-slate-500 shrink-0">{t.roadmap.switchCareer}:</span>
            <select
              value={selectedCareerId}
              onChange={(e) => {
                const newId = e.target.value;
                setSelectedCareerId(newId);
                setActiveRoadmapCareerId(newId);
                setNotesText(studentProfile.customRoadmapNotes[newId] || '');
              }}
              className="w-full min-w-0 max-w-full bg-white text-slate-900 border border-[#E5E5E7] rounded-lg px-3 py-1.5 font-bold focus:outline-none focus:ring-2 focus:ring-[#7A1C33] truncate"
            >
              {allCareers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({translateCategory(c.category)})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Progress Bar & Stat Meter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>{t.roadmap.overallProgress}</span>
            <span className="text-[#7A1C33] font-extrabold">{completedCount} / {totalTasksCount} {t.roadmap.completedMilestones} ({completionPercentage}%)</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
            <div
              className="bg-gradient-to-r from-[#7A1C33] to-emerald-500 h-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 6 Stages Vertical Timeline */}
      <div className="space-y-6">
        {stages.map((stage) => {
          const stageCompletedTasks = stage.tasks.filter(t => completedTaskIds.includes(t.id));
          const isStageFinished = stageCompletedTasks.length === stage.tasks.length;

          return (
            <div
              key={stage.stageNumber}
              className={`rounded-3xl border bg-white p-6 sm:p-8 transition shadow-soft space-y-4 ${
                isStageFinished ? 'border-emerald-300 bg-emerald-50/20' : 'border-[#E5E5E7]'
              }`}
            >
              {/* Stage Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition ${
                    isStageFinished
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#4A0817] text-white'
                  }`}>
                    {isStageFinished ? <CheckCircle2 className="w-5 h-5" /> : stage.stageNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#4A0817]">{stage.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                  isStageFinished
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {stageCompletedTasks.length}/{stage.tasks.length} {t.common.completed}
                </span>
              </div>

              {/* Tasks Checklist */}
              <div className="space-y-2.5 pt-1">
                {stage.tasks.map((task) => {
                  const isDone = completedTaskIds.includes(task.id);
                  return (
                    <label
                      key={task.id}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border text-xs cursor-pointer transition ${
                        isDone
                          ? 'border-emerald-200 bg-emerald-50/60 text-slate-800'
                          : 'border-slate-200 hover:border-[#7A1C33]/40 hover:bg-[#FAF6F0] text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => handleTaskToggle(task.id)}
                        className="mt-0.5 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-400"
                      />
                      <span className={`flex-1 leading-relaxed ${isDone ? 'line-through text-slate-400 font-medium' : 'font-medium'}`}>
                        {task.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Personal Notes & Reflections Box */}
      <div className="rounded-3xl border border-[#E5E5E7] bg-white p-6 sm:p-8 space-y-4 shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#7A1C33]" />
            <h3 className="text-base font-bold text-[#4A0817]">{t.roadmap.customNotes}</h3>
          </div>
          <button
            onClick={handleSaveNotes}
            className="px-4 py-2 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white font-bold text-xs transition flex items-center gap-1.5 shadow-2xs"
          >
            <Save className="w-4 h-4" />
            <span>{t.roadmap.saveNotes}</span>
          </button>
        </div>

        <textarea
          rows={4}
          value={notesText}
          onChange={(e) => setNotesText(e.target.value)}
          placeholder={`${t.roadmap.notesPlaceholder} (${activeCareer.title})`}
          className="w-full p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7A1C33] font-medium leading-relaxed bg-[#FAF6F0]"
        />
        <p className="text-[11px] text-slate-400">
          {t.roadmap.notesSaved}
        </p>
      </div>
    </div>
  );
};

