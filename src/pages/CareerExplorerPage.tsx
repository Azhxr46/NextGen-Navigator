import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Career, RIASECType } from '../types';
import {
  Search,
  Filter,
  Layers,
  Bookmark,
  Sparkles,
  ArrowRight,
  IndianRupee,
  Clock,
  BookOpen,
  Calendar,
  X,
  TrendingUp,
  Award
} from 'lucide-react';

export const CareerExplorerPage: React.FC = () => {
  const {
    allCareers,
    studentProfile,
    toggleSaveCareer,
    addToCompare,
    compareCareerIds,
    setActiveCareerDetail,
    setDayInLifeCareer,
    t,
    language,
    translateCategory,
    translateRiasec
  } = useApp();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRiasec, setSelectedRiasec] = useState<string>('All');
  const [selectedBudgetTier, setSelectedBudgetTier] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(allCareers.map(c => c.category)))];
  const riasecTypes: ('All' | RIASECType)[] = ['All', 'R', 'I', 'A', 'S', 'E', 'C'];

  // Filter Logic
  const filteredCareers = allCareers.filter(career => {
    // Keyword search
    const matchesSearch =
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.coreSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      career.sector.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;

    // RIASEC filter
    const matchesRiasec = selectedRiasec === 'All' || career.primaryRiasec.includes(selectedRiasec as RIASECType);

    // Budget Tier filter
    let matchesBudget = true;
    if (selectedBudgetTier === 'Low') {
      matchesBudget = career.vocationalLowCostPathway?.available || career.diplomaPathway?.available;
    }

    return matchesSearch && matchesCategory && matchesRiasec && matchesBudget;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-fade-up">
      {/* Header */}
      <div className="space-y-2 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{allCareers.length}+ {t.explorer.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.explorer.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t.explorer.subtitle}
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-soft space-y-4">
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.explorer.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-slate-800 text-xs sm:text-sm rounded-2xl pl-12 pr-10 py-3.5 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Multi-Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Sector Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">{t.explorer.filterSector}</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? t.common.all : translateCategory(cat)}
                </option>
              ))}
            </select>
          </div>

          {/* RIASEC Dimension Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">{t.explorer.filterRiasec}</label>
            <select
              value={selectedRiasec}
              onChange={(e) => setSelectedRiasec(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="All">{t.common.all} {t.explorer.filterRiasec}</option>
              <option value="R">R - {translateRiasec('Realistic').name}</option>
              <option value="I">I - {translateRiasec('Investigative').name}</option>
              <option value="A">A - {translateRiasec('Artistic').name}</option>
              <option value="S">S - {translateRiasec('Social').name}</option>
              <option value="E">E - {translateRiasec('Enterprising').name}</option>
              <option value="C">C - {translateRiasec('Conventional').name}</option>
            </select>
          </div>

          {/* Affordability Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">{t.explorer.filterBudget}</label>
            <select
              value={selectedBudgetTier}
              onChange={(e) => setSelectedBudgetTier(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="All">{t.common.all}</option>
              <option value="Low">{t.explorer.alternativeLowCost}</option>
            </select>
          </div>
        </div>

        {/* Comparison Dock Indicator if items added */}
        {compareCareerIds.length > 0 && (
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-between text-xs text-indigo-900">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>
                <strong>{compareCareerIds.length}</strong> {t.recommendations.compareTrayText}
              </span>
            </div>
            <span className="text-[11px] font-bold text-indigo-700">{t.actions.compare}</span>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-2">
        <span>{t.explorer.showingResults} {filteredCareers.length} {t.explorer.ofCareers} {allCareers.length}</span>
        {(searchQuery || selectedCategory !== 'All' || selectedRiasec !== 'All' || selectedBudgetTier !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedRiasec('All');
              setSelectedBudgetTier('All');
            }}
            className="text-indigo-600 hover:underline"
          >
            {t.explorer.resetFilters}
          </button>
        )}
      </div>

      {/* Careers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => {
          const isSaved = studentProfile.savedCareers.includes(career.id);
          const isComparing = compareCareerIds.includes(career.id);

          return (
            <div
              key={career.id}
              className="interactive-card rounded-3xl border border-[#E5E5E7] bg-white p-6 shadow-soft hover:shadow-card hover:border-[#9B314B]/40 flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <div className="space-y-3">
                {/* Category & Demand Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F9EBEF] text-[#7A1C33] border border-[#F2D3DC]">
                    {translateCategory(career.category)}
                  </span>
                  {career.demandTrend && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {career.demandTrend}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3
                    onClick={() => setActiveCareerDetail(career)}
                    className="text-lg font-bold text-[#4A0817] group-hover:text-[#7A1C33] transition cursor-pointer"
                  >
                    {career.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {career.tagline}
                </p>

                {/* Core Attributes */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span className="text-[11px] font-semibold text-slate-400">{t.explorer.studyDuration}:</span>
                    <span className="font-bold text-slate-800">{career.studyDuration}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-[11px] font-semibold text-slate-400">{t.explorer.entrySalary}:</span>
                    <span className="font-extrabold text-[#7A1C33]">
                      {career.salary?.entryLevel || career.indicativeSalary?.entry || '—'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-[11px] font-semibold text-slate-400">{t.recommendations.riasecAlignment}:</span>
                    <span className="font-bold text-[#9B314B]">{career.primaryRiasec.map(r => translateRiasec(r === 'R' ? 'Realistic' : r === 'I' ? 'Investigative' : r === 'A' ? 'Artistic' : r === 'S' ? 'Social' : r === 'E' ? 'Enterprising' : 'Conventional')).join(', ')}</span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {career.coreSkills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                      {skill}
                    </span>
                  ))}
                  {career.coreSkills.length > 3 && (
                    <span className="text-[10px] text-slate-400 font-medium">+{career.coreSkills.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <button
                  onClick={() => setActiveCareerDetail(career)}
                  className="w-full py-2.5 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white font-bold transition flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>{t.recommendations.viewDossierBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleSaveCareer(career.id)}
                    className={`flex-1 py-1.5 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1 ${
                      isSaved
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-600 text-amber-600' : ''}`} />
                    <span>{isSaved ? t.actions.saved : t.actions.saveCareer}</span>
                  </button>

                  <button
                    onClick={() => addToCompare(career.id)}
                    className={`flex-1 py-1.5 rounded-xl border text-xs font-semibold transition flex items-center justify-center gap-1 ${
                      isComparing
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-300 font-bold'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.actions.compare}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-sm font-bold text-slate-700">{t.explorer.noResultsTitle}</p>
          <p className="text-xs text-slate-500">{t.explorer.noResultsDesc}</p>
        </div>
      )}
    </div>
  );
};

