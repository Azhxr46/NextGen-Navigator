import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calendar,
  Clock,
  Pin,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  ShieldCheck,
  Building,
  AlertCircle
} from 'lucide-react';

export const ExamRadarPage: React.FC = () => {
  const { studentProfile, togglePinExam, allExams, t, language } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = allExams.filter(exam =>
    exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.conductedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header */}
      <div className="space-y-3 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.exams.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.exams.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t.exams.subtitle}
        </p>
      </div>

      {/* Pinned Personal Exams */}
      {studentProfile.pinnedExams && studentProfile.pinnedExams.length > 0 && (
        <div className="p-5 rounded-3xl bg-[#FAF6F0] border border-[#E5E5E7] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-1.5">
              <Pin className="w-4 h-4 text-[#7A1C33] fill-[#7A1C33]" />
              {t.exams.pinnedExams} ({studentProfile.pinnedExams.length})
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {studentProfile.pinnedExams.map((examName) => (
              <span
                key={examName}
                className="px-3 py-1.5 rounded-xl bg-white border border-[#E5E5E7] text-xs font-bold text-slate-800 shadow-2xs flex items-center gap-2"
              >
                <span>{examName}</span>
                <button
                  onClick={() => togglePinExam(examName)}
                  className="text-slate-400 hover:text-rose-500 font-bold ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={t.exams.searchExams}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white text-slate-800 text-xs sm:text-sm rounded-2xl pl-11 pr-4 py-3 border border-[#E5E5E7] focus:outline-none focus:ring-2 focus:ring-[#7A1C33] font-medium shadow-soft"
        />
      </div>

      {/* Exams Cards */}
      <div className="space-y-6">
        {filteredExams.map((exam) => {
          const isPinned = studentProfile.pinnedExams.includes(exam.name);

          return (
            <div
              key={exam.id}
              className={`interactive-card rounded-3xl border bg-white p-6 sm:p-8 shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col lg:flex-row gap-6 justify-between ${
                isPinned ? 'border-[#7A1C33] ring-2 ring-[#7A1C33]/10' : 'border-[#E5E5E7]'
              }`}
            >
              {/* Left Details */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-[#4A0817]">{exam.name}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F9EBEF] text-[#7A1C33] border border-[#F2D3DC]">
                        {exam.eligibleLevel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {exam.fullName} • {t.exams.conductedBy}: {exam.conductedBy}
                    </p>
                  </div>

                  <button
                    onClick={() => togglePinExam(exam.name)}
                    className={`p-2 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
                      isPinned
                        ? 'bg-[#7A1C33] text-white border-[#580C1F]'
                        : 'bg-[#FAF6F0] text-slate-700 hover:bg-[#F9EBEF] hover:text-[#7A1C33] border-[#E5E5E7]'
                    }`}
                  >
                    <Pin className={`w-3.5 h-3.5 ${isPinned ? 'fill-white' : ''}`} />
                    <span className="hidden sm:inline">{isPinned ? t.exams.unpinExam : t.exams.pinExam}</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-[#4A0817] block mb-0.5">{language === 'kn' ? 'ಪರೀಕ್ಷೆಯ ಉದ್ದೇಶ:' : language === 'hi' ? 'परीक्षा का उद्देश्य:' : 'Exam Purpose:'}</span>
                  {exam.purpose}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-800">{t.exams.eligibilityCriteria}:</span>
                    <p className="text-slate-600 leading-relaxed">{exam.eligibility}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-slate-800">{t.exams.examPattern}:</span>
                    <p className="text-slate-600 leading-relaxed">{exam.examPattern}</p>
                  </div>
                </div>

                {/* Free Preparation Resources */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#7A1C33]" />
                    <span>{t.exams.freeResources}:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exam.freePrepResources.map((res, idx) => (
                      <a
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-white border border-[#E5E5E7] text-[11px] font-semibold text-[#7A1C33] hover:bg-[#F9EBEF] transition flex items-center gap-1.5"
                      >
                        <span>{res.title}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Timelines & Official Link */}
              <div className="lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-[#E5E5E7] pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">{t.exams.registrationWindow}:</span>
                      <span className="font-bold text-[#4A0817]">{exam.typicalRegistrationWindow}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">{t.exams.examWindow}:</span>
                      <span className="font-bold text-[#7A1C33]">{exam.examMonth}</span>
                    </div>
                    <div className="pt-1 border-t border-slate-200">
                      <span className="text-[10px] text-emerald-700 font-bold block">
                        ✓ {t.common.verified} ({exam.lastVerifiedDate})
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={exam.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-2.5 text-xs text-center justify-center"
                >
                  <span>{t.exams.officialPortal}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
