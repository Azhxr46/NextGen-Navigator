import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PrintableDossier } from '../components/PrintableDossier';
import { NextGenEmblem } from '../components/NextGenEmblem';
import {
  Compass,
  Sparkles,
  Award,
  Bookmark,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Printer,
  CheckCircle2,
  Clock,
  BookOpen,
  FileText,
  User,
  Plus
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export const StudentDashboard: React.FC = () => {
  const {
    session,
    currentUser,
    studentProfile,
    allCareers,
    topRecommendations,
    setCurrentRoute,
    setActiveCareerDetail,
    t,
    language,
    translateCategory,
    translateRiasec
  } = useApp();

  const [showDossierModal, setShowDossierModal] = useState(false);

  // Saved careers objects
  const savedCareerObjects = allCareers.filter(c => studentProfile.savedCareers.includes(c.id));

  // Radar Data
  const radarData = [
    { subject: `R - ${translateRiasec('Realistic').name}`, score: studentProfile.riasecScores.R, fullMark: 100 },
    { subject: `I - ${translateRiasec('Investigative').name}`, score: studentProfile.riasecScores.I, fullMark: 100 },
    { subject: `A - ${translateRiasec('Artistic').name}`, score: studentProfile.riasecScores.A, fullMark: 100 },
    { subject: `S - ${translateRiasec('Social').name}`, score: studentProfile.riasecScores.S, fullMark: 100 },
    { subject: `E - ${translateRiasec('Enterprising').name}`, score: studentProfile.riasecScores.E, fullMark: 100 },
    { subject: `C - ${translateRiasec('Conventional').name}`, score: studentProfile.riasecScores.C, fullMark: 100 }
  ];

  // Top Matches Bar Chart Data
  const barData = topRecommendations.slice(0, 5).map(r => ({
    name: r.career.title.length > 15 ? r.career.title.substring(0, 15) + '...' : r.career.title,
    Match: r.overallScore,
    fullTitle: r.career.title
  }));

  // Check if student profile is empty/new
  const isNewStudent = !studentProfile.assessmentCompleted && studentProfile.savedCareers.length === 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Printable Dossier Modal */}
      {showDossierModal && (
        <PrintableDossier onClose={() => setShowDossierModal(false)} />
      )}

      {/* Personalized Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white p-6 sm:p-10 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#580C1F]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#330510] text-[#D8D8DA] text-xs font-bold uppercase tracking-wider border border-[#580C1F]">
              {studentProfile.classLevel}
            </span>
            <span className="text-xs text-[#D8D8DA] font-semibold flex items-center gap-1">
              • NextGen Navigators
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.dashboard.welcomeUser}, {currentUser?.fullName || studentProfile.fullName || 'Student'}!
          </h1>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/90 max-w-xl leading-relaxed">
            {isNewStudent
              ? t.dashboard.welcomeNewUser
              : t.dashboard.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowDossierModal(true)}
            className="px-4 py-2.5 rounded-xl bg-white text-[#7A1C33] hover:bg-[#FAF6F0] font-bold text-xs transition flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4 text-[#7A1C33]" />
            <span>{t.resume.printPreview}</span>
          </button>
          <button
            onClick={() => setCurrentRoute('resume')}
            className="px-4 py-2.5 rounded-xl bg-[#330510] hover:bg-[#1F0208] text-white font-bold text-xs transition flex items-center gap-2 border border-[#580C1F]"
          >
            <FileText className="w-4 h-4 text-[#D8D8DA]" />
            <span>{t.nav.resume}</span>
          </button>
        </div>
      </div>

      {/* Mandatory Clean Empty State for New Users (Section 6 Requirement) */}
      {isNewStudent ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 border border-[#E5E5E7] shadow-soft text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <NextGenEmblem size={64} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A0817]">
              NextGen Navigators
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {t.dashboard.completeProfilePrompt}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setCurrentRoute('assessment')}
              className="btn-primary w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.dashboard.takeTestBtn}</span>
            </button>
            <button
              onClick={() => setCurrentRoute('onboarding')}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>{t.dashboard.profileLevel}</span>
            </button>
            <button
              onClick={() => setCurrentRoute('explorer')}
              className="btn-ghost w-full sm:w-auto"
            >
              <span>{t.dashboard.browseCareersBtn}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Real Registered User Analytics & Charts */
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: RIASEC Radar Chart */}
            <div className="interactive-card lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E5E5E7] shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#4A0817]">{t.dashboard.riasecScoresTitle}</h3>
                  <p className="text-[11px] text-slate-500">{t.assessment.liveScores}</p>
                </div>
                <button
                  onClick={() => setCurrentRoute('assessment')}
                  className="text-xs text-[#7A1C33] font-bold hover:underline"
                >
                  {t.dashboard.retakeAssessment}
                </button>
              </div>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#E5E5E7" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A0817', fontSize: 10, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#E5E5E7" tick={false} />
                    <Radar
                      name="My Profile"
                      dataKey="score"
                      stroke="#7A1C33"
                      fill="#7A1C33"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right: Top Career Matches Bar Chart */}
            <div className="interactive-card lg:col-span-7 bg-white p-6 rounded-3xl border border-[#E5E5E7] shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#4A0817]">{t.dashboard.topMatch}</h3>
                  <p className="text-[11px] text-slate-500">{t.recommendations.subtitle}</p>
                </div>
                <button
                  onClick={() => setCurrentRoute('recommendations')}
                  className="text-xs text-[#7A1C33] font-bold hover:underline"
                >
                  {t.actions.viewDetails}
                </button>
              </div>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E5E7" />
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: '#7A1C33' }} />
                    <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 10, fill: '#4A0817', fontWeight: 600 }} />
                    <Tooltip
                      formatter={(val: any) => [`${val}% ${t.recommendations.matchScore}`, 'Score']}
                      labelFormatter={(label, payload) => payload?.[0]?.payload?.fullTitle || label}
                      contentStyle={{ borderRadius: '0.75rem', borderColor: '#E5E5E7', fontSize: '12px' }}
                    />
                    <Bar dataKey="Match" fill="#7A1C33" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Saved Careers Shortlist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#4A0817] flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-[#7A1C33]" />
                  <span>{t.dashboard.mySavedCareers} ({savedCareerObjects.length})</span>
                </h3>
                <p className="text-xs text-slate-500">{t.dashboard.myRoadmap}</p>
              </div>
              <button
                onClick={() => setCurrentRoute('explorer')}
                className="btn-secondary"
              >
                <Plus className="w-4 h-4" />
                <span>{t.actions.exploreCareers}</span>
              </button>
            </div>

            {savedCareerObjects.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] text-center space-y-3">
                <Bookmark className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {t.dashboard.noSavedCareers}
                </p>
                <button
                  onClick={() => setCurrentRoute('explorer')}
                  className="btn-primary"
                >
                  <span>{t.dashboard.browseCareersBtn}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedCareerObjects.map(c => (
                  <div
                    key={c.id}
                    className="interactive-card p-5 rounded-2xl border border-[#E5E5E7] bg-[#FAF6F0] hover:border-[#9B314B] hover:shadow-soft transition space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B314B]">
                        {translateCategory(c.category)}
                      </span>
                      <h4 className="text-base font-bold text-[#4A0817] leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {c.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E7] flex items-center justify-between">
                      <button
                        onClick={() => setActiveCareerDetail(c)}
                        className="text-xs font-bold text-[#7A1C33] hover:underline"
                      >
                        {t.actions.viewDetails}
                      </button>
                      <button
                        onClick={() => setCurrentRoute('roadmap')}
                        className="btn-primary py-1.5 px-3 text-xs"
                      >
                        <span>{t.nav.roadmap}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
