import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  Sparkles,
  Bookmark,
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  IndianRupee,
  Clock,
  Compass,
  Filter,
  CheckCircle2,
  BookOpen,
  Search,
  RotateCcw,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const RecommendationsPage: React.FC = () => {
  const {
    recommendations,
    topRecommendations,
    allCareers,
    studentProfile,
    toggleSaveCareer,
    addToCompare,
    compareCareerIds,
    setActiveCareerDetail,
    setDayInLifeCareer,
    setRoiCareer,
    setCurrentRoute,
    openCareerRoadmap,
    t,
    language,
    translateCategory,
    translateStream
  } = useApp();

  // Multi-Filter State (Section 3)
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [minSalaryFilter, setMinSalaryFilter] = useState<string>('All');
  const [demandFilter, setDemandFilter] = useState<string>('All');
  const [streamFilter, setStreamFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Career Explorer State (Section 9)
  const [explorerSearch, setExplorerSearch] = useState<string>('');
  const [explorerCategory, setExplorerCategory] = useState<string>('All');

  // Categories list
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(allCareers.map(c => c.category)))];
  }, [allCareers]);

  // Score lookup map for all careers
  const scoreMap = useMemo(() => {
    const map = new Map<string, number>();
    recommendations.forEach(r => map.set(r.career.id, r.overallScore));
    return map;
  }, [recommendations]);

  // Parse salary string to approximate numeric LPA for filtering
  const parseMinSalaryLPA = (salaryStr?: string): number => {
    if (!salaryStr) return 0;
    const match = salaryStr.match(/₹?\s*([\d.]+)/);
    if (!match) return 0;
    return parseFloat(match[1]);
  };

  // Filtered Recommendations for Top Section
  const filteredMatches = useMemo(() => {
    return recommendations.filter(match => {
      const c = match.career;

      // Category filter
      if (selectedCategory !== 'All' && c.category !== selectedCategory) {
        return false;
      }

      // Salary filter
      if (minSalaryFilter !== 'All') {
        const threshold = parseFloat(minSalaryFilter);
        const careerLPA = parseMinSalaryLPA(c.salary?.entryLevel || c.indicativeSalary?.entry);
        if (careerLPA < threshold) return false;
      }

      // Demand filter
      if (demandFilter !== 'All') {
        const trend = (c.demandTrend || '').toLowerCase();
        if (demandFilter === 'High' && !trend.includes('high') && !trend.includes('rapid') && !trend.includes('emerg')) {
          return false;
        }
        if (demandFilter === 'Stable' && !trend.includes('stable')) {
          return false;
        }
      }

      // Stream filter
      if (streamFilter !== 'All') {
        const streamLower = streamFilter.toLowerCase();
        const subjects = c.requiredSchoolSubjects.join(' ').toLowerCase();
        if (streamLower === 'science-pcm' && (!subjects.includes('math') || !subjects.includes('physics'))) return false;
        if (streamLower === 'science-pcb' && (!subjects.includes('bio') || !subjects.includes('chemistry'))) return false;
        if (streamLower === 'commerce' && (!subjects.includes('account') && !subjects.includes('business') && !subjects.includes('econ') && !subjects.includes('math'))) return false;
        if (streamLower === 'arts' && (!subjects.includes('history') && !subjects.includes('political') && !subjects.includes('sociology') && !subjects.includes('english') && !subjects.includes('art'))) return false;
      }

      // Search keyword filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchDesc = c.description.toLowerCase().includes(q);
        const matchSkills = c.coreSkills.some(s => s.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchSkills) return false;
      }

      return true;
    });
  }, [recommendations, selectedCategory, minSalaryFilter, demandFilter, streamFilter, searchQuery]);

  // Filtered Explorer Careers
  const filteredExplorerCareers = useMemo(() => {
    return allCareers.filter(career => {
      if (explorerCategory !== 'All' && career.category !== explorerCategory) {
        return false;
      }
      if (explorerSearch.trim()) {
        const q = explorerSearch.toLowerCase();
        const matchTitle = career.title.toLowerCase().includes(q);
        const matchDesc = career.description.toLowerCase().includes(q);
        const matchSkills = career.coreSkills.some(s => s.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchSkills) return false;
      }
      return true;
    });
  }, [allCareers, explorerCategory, explorerSearch]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setMinSalaryFilter('All');
    setDemandFilter('All');
    setStreamFilter('All');
    setSearchQuery('');
  };

  const isFilterActive =
    selectedCategory !== 'All' ||
    minSalaryFilter !== 'All' ||
    demandFilter !== 'All' ||
    streamFilter !== 'All' ||
    searchQuery.trim() !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-fade-up">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E5E7] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] border border-[#F2D3DC] text-[#7A1C33] text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>
              {language === 'kn' ? 'ಸಾಮರ್ಥ್ಯ ಹೊಂದಾಣಿಕೆ' : language === 'hi' ? 'योग्यता-कैलिब्रेटेड मैच' : 'Aptitude-Calibrated Matches'} ({studentProfile.activeAssessmentCategory?.toUpperCase() || 'COMPREHENSIVE'})
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
            {t.recommendations.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {t.recommendations.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              const targetCareerId = filteredMatches[0]?.career.id || topRecommendations[0]?.career.id || allCareers[0].id;
              openCareerRoadmap(targetCareerId);
            }}
            className="btn-primary"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.recommendations.viewRoadmapBtn}</span>
          </button>
          <button
            onClick={() => setCurrentRoute('roi')}
            className="btn-secondary"
          >
            <span>{t.nav.roi}</span>
          </button>
        </div>
      </div>

      {/* Scoring Explanation Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5E7] text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-soft">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#7A1C33] shrink-0" />
          <span>
            <strong className="font-bold text-[#4A0817]">{language === 'kn' ? 'ಮ್ಯಾಚಿಂಗ್ ಎಂಜಿನ್: ' : language === 'hi' ? 'स्कोरिंग इंजन: ' : 'Scoring Engine: '}</strong>
            {topRecommendations[0]?.scoringMethodExplained || (language === 'kn' ? 'RIASEC ಹೊಂದಾಣಿಕೆ, ಶಾಲಾ ವಿಷಯಗಳು, ಪ್ರಮುಖ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಬಜೆಟ್ ಸಾಧ್ಯತೆಯ ತೂಕದ ವಿಶ್ಲೇಷಣೆ.' : language === 'hi' ? 'RIASEC अनुकूलता, स्कूल विषयों, मुख्य कौशलों और बजट व्यवहार्यता का भारित विश्लेषण।' : 'Weighted matching across RIASEC compatibility, school subjects, core skills, and pathway feasibility.')}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-bold text-[#7A1C33] bg-[#FAF6F0] px-3 py-1 rounded-lg border border-[#E5E5E7]">
            {t.dashboard.profileBudget}: {studentProfile.budgetTier.toUpperCase()}
          </span>
          <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
            {filteredMatches.length} {language === 'kn' ? 'ಹೊಂದಾಣಿಕೆಗಳು' : language === 'hi' ? 'मैच मिले' : 'Matches Found'}
          </span>
        </div>
      </div>

      {/* SECTION 3: ADVANCED MULTI-FILTER CONTROL (ENHANCED DIMENSIONS & READABILITY) */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5E7] shadow-soft space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#7A1C33]" />
            <h2 className="text-sm sm:text-base font-extrabold text-[#4A0817]">
              {language === 'kn' ? 'ಫಿಲ್ಟರ್ ಮತ್ತು ಅನ್ವೇಷಣೆ' : language === 'hi' ? 'फ़िल्टर और खोज' : 'Refine & Filter Career Matches'}
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              ({filteredMatches.length} / {recommendations.length})
            </span>
          </div>

          {isFilterActive && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-[#7A1C33] hover:text-[#580C1F] font-bold self-start sm:self-auto transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.explorer.resetFilters}</span>
            </button>
          )}
        </div>

        {/* Filter Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Sector / Category Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              {t.explorer.filterSector}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-[#FAF6F0] text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7A1C33]/30"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? t.common.all : translateCategory(cat)}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Salary Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              {t.explorer.entrySalary}
            </label>
            <select
              value={minSalaryFilter}
              onChange={(e) => setMinSalaryFilter(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-[#FAF6F0] text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7A1C33]/30"
            >
              <option value="All">{t.common.all}</option>
              <option value="4">Above ₹4.0 LPA</option>
              <option value="6">Above ₹6.0 LPA</option>
              <option value="8">Above ₹8.0 LPA</option>
              <option value="10">Above ₹10.0 LPA</option>
            </select>
          </div>

          {/* Industry Demand Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              {language === 'kn' ? 'ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆ' : language === 'hi' ? 'बाजार मांग' : 'Market Demand'}
            </label>
            <select
              value={demandFilter}
              onChange={(e) => setDemandFilter(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-[#FAF6F0] text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7A1C33]/30"
            >
              <option value="All">{t.common.all}</option>
              <option value="High">{language === 'kn' ? 'ಉನ್ನತ ಬೆಳವಣಿಗೆ' : language === 'hi' ? 'उच्च विकास' : 'High Growth / Emerging'}</option>
              <option value="Stable">{language === 'kn' ? 'ಸ್ಥಿರ ಬೇಡಿಕೆ' : language === 'hi' ? 'स्थिर मांग' : 'Stable / Steady Demand'}</option>
            </select>
          </div>

          {/* Academic Stream Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              {t.exams.filterStream}
            </label>
            <select
              value={streamFilter}
              onChange={(e) => setStreamFilter(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-[#FAF6F0] text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7A1C33]/30"
            >
              <option value="All">{t.common.all}</option>
              <option value="science-pcm">{translateStream('Science (PCM)')}</option>
              <option value="science-pcb">{translateStream('Science (PCB)')}</option>
              <option value="commerce">{translateStream('Commerce')}</option>
              <option value="arts">{translateStream('Arts')}</option>
            </select>
          </div>
        </div>

        {/* Keyword Search Input */}
        <div className="relative pt-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.explorer.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 bg-[#FAF6F0] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A1C33]/30"
          />
        </div>
      </div>

      {/* Filtered Matches List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-[#4A0817] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#7A1C33]" />
            <span>{t.recommendations.title}</span>
          </h2>
          <span className="text-xs text-slate-500">
            {language === 'kn' ? 'ಸಾಮರ್ಥ್ಯ ಹೊಂದಾಣಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ವಿಂಗಡಿಸಲಾಗಿದೆ' : language === 'hi' ? 'योग्यता अनुकूलता स्कोर द्वारा क्रमबद्ध' : 'Sorted by aptitude compatibility score'}
          </span>
        </div>

        {filteredMatches.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-4">
            <AlertCircle className="w-8 h-8 text-[#7A1C33] mx-auto" />
            <h3 className="text-base font-bold text-slate-800">{t.recommendations.noMatchesYet}</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {t.explorer.noResultsDesc}
            </p>
            <button onClick={resetFilters} className="btn-secondary text-xs">
              {t.explorer.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredMatches.map((match, rank) => {
              const {
                career,
                overallScore,
                matchReasons,
                requiredEducation,
                requiredSkills,
                relevantSubjects,
                entranceExams
              } = match;
              const isSaved = studentProfile.savedCareers.includes(career.id);
              const isCompared = compareCareerIds.includes(career.id);

              return (
                <div
                  key={career.id}
                  className="interactive-card bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 space-y-6 relative overflow-hidden"
                >
                  {/* Rank & Match Score Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#FAF6F0] text-[#7A1C33] font-black text-base flex items-center justify-center font-mono border border-[#E5E5E7]">
                        #{rank + 1}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B314B]">
                          {translateCategory(career.category)} • {career.sector}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A0817] leading-tight">
                          {career.title}
                        </h3>
                      </div>
                    </div>

                    {/* Compatibility Score Pill */}
                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <div className="text-right">
                        <span className="text-2xl font-black text-[#7A1C33] leading-none">
                          {overallScore}%
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          {t.recommendations.matchScore}
                        </span>
                      </div>
                      <div className="w-13 h-13 rounded-full bg-[#FAF6F0] border-2 border-[#7A1C33] flex items-center justify-center p-1">
                        <div
                          className="w-full h-full rounded-full bg-[#7A1C33] text-white text-[11px] font-black flex items-center justify-center"
                          style={{ opacity: Math.max(0.4, overallScore / 100) }}
                        >
                          ✓
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {career.description}
                  </p>

                  {/* Why This Matches You */}
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] space-y-2">
                    <h4 className="text-xs font-bold text-[#4A0817] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7A1C33]" />
                      <span>{t.recommendations.primaryReasons}:</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                      {matchReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#7A1C33] font-bold">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Structured Specification Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-1">
                    <div className="p-3.5 rounded-xl border border-[#E5E5E7] bg-[#FAF6F0]">
                      <span className="font-bold text-[#4A0817] block mb-1">{language === 'kn' ? 'ಅಗತ್ಯ ಶಿಕ್ಷಣ' : language === 'hi' ? 'आवश्यक शिक्षा' : 'Required Education'}</span>
                      <span className="text-slate-600 leading-snug">{requiredEducation}</span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[#E5E5E7] bg-[#FAF6F0]">
                      <span className="font-bold text-[#4A0817] block mb-1">{t.recommendations.overlapSubjects}</span>
                      <span className="text-slate-600 leading-snug">{relevantSubjects.slice(0, 3).join(', ')}</span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[#E5E5E7] bg-[#FAF6F0]">
                      <span className="font-bold text-[#4A0817] block mb-1">{t.exams.title}</span>
                      <span className="text-slate-600 leading-snug">{entranceExams.slice(0, 2).join(', ') || 'Direct Merit'}</span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[#E5E5E7] bg-[#FAF6F0]">
                      <span className="font-bold text-[#4A0817] block mb-1">{t.explorer.entrySalary}</span>
                      <span className="text-[#7A1C33] font-bold block">{career.salary?.entryLevel || career.indicativeSalary?.entry}</span>
                      <span className="text-[10px] text-slate-500">NCS / KEA Benchmark</span>
                    </div>
                  </div>

                  {/* Actions & Decision Tools */}
                  <div className="pt-4 border-t border-[#E5E5E7] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => toggleSaveCareer(career.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                          isSaved
                            ? 'bg-[#7A1C33] text-white shadow-sm'
                            : 'bg-[#FAF6F0] text-slate-700 hover:bg-[#F9EBEF] hover:text-[#7A1C33] border border-[#E5E5E7]'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{isSaved ? t.recommendations.savedInDashboard : t.recommendations.saveToDashboard}</span>
                      </button>

                      <button
                        onClick={() => addToCompare(career.id)}
                        disabled={isCompared}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                          isCompared
                            ? 'bg-slate-100 text-slate-400 border-slate-200'
                            : 'bg-white text-slate-700 hover:border-[#9B314B] border-[#E5E5E7]'
                        }`}
                      >
                        <span>{isCompared ? t.recommendations.removeFromCompare : t.recommendations.addToCompare}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveCareerDetail(career)}
                        className="btn-secondary"
                      >
                        <span>{t.recommendations.viewDossierBtn}</span>
                      </button>
                      <button
                        onClick={() => openCareerRoadmap(career.id)}
                        className="btn-primary"
                      >
                        <span>{t.recommendations.viewRoadmapBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 9: INTEGRATED CAREER EXPLORER & DISCOVERY HUB */}
      <div className="pt-10 border-t-2 border-[#E5E5E7] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.explorer.title}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A0817]">
              {t.explorer.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {t.explorer.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={explorerCategory}
              onChange={(e) => setExplorerCategory(e.target.value)}
              className="text-xs font-semibold p-2 rounded-xl border border-slate-200 bg-white text-slate-800"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? t.common.all : translateCategory(cat)}
                </option>
              ))}
            </select>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={explorerSearch}
                onChange={(e) => setExplorerSearch(e.target.value)}
                placeholder={t.explorer.searchPlaceholder}
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#7A1C33]"
              />
            </div>
          </div>
        </div>

        {/* Explorer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExplorerCareers.map(career => {
            const suitScore = scoreMap.get(career.id) || 70;
            const isSaved = studentProfile.savedCareers.includes(career.id);
            const isCompared = compareCareerIds.includes(career.id);

            return (
              <div
                key={career.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#7A1C33] border border-[#E5E5E7]">
                      {translateCategory(career.category)}
                    </span>
                    <div className="flex items-center gap-1.5 bg-[#F9EBEF] text-[#7A1C33] px-2 py-0.5 rounded-full text-[11px] font-extrabold border border-[#F2D3DC]">
                      <span>{suitScore}% Fit</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-[#4A0817] leading-snug">
                    {career.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {career.tagline || career.description}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs border-t border-slate-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">{t.explorer.entrySalary}:</span>
                    <span className="font-bold text-[#7A1C33]">
                      {career.salary?.entryLevel || career.indicativeSalary?.entry}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">{t.explorer.studyDuration}:</span>
                    <span className="font-semibold text-slate-700">{career.studyDuration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-[11px]">{language === 'kn' ? 'ಬೇಡಿಕೆ:' : language === 'hi' ? 'मांग:' : 'Demand Outlook:'}</span>
                    <span className="text-[11px] font-semibold text-emerald-700">
                      {career.demandTrend || 'High Growth'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveCareerDetail(career)}
                      className="flex-1 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                    >
                      {t.actions.viewDetails}
                    </button>
                    <button
                      onClick={() => addToCompare(career.id)}
                      disabled={isCompared}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition ${
                        isCompared
                          ? 'bg-slate-100 text-slate-400 border-slate-200'
                          : 'hover:bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {isCompared ? t.recommendations.removeFromCompare : t.recommendations.addToCompare}
                    </button>
                    <button
                      onClick={() => toggleSaveCareer(career.id)}
                      className={`p-2 rounded-xl border transition ${
                        isSaved
                          ? 'bg-[#7A1C33] text-white border-[#7A1C33]'
                          : 'text-slate-600 hover:bg-[#F9EBEF] border-slate-200'
                      }`}
                      title={isSaved ? t.actions.saved : t.actions.saveCareer}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Career-specific roadmap navigation per Section 7 */}
                  <button
                    onClick={() => openCareerRoadmap(career.id)}
                    className="w-full py-2 rounded-xl bg-[#7A1C33] hover:bg-[#580C1F] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>{t.recommendations.viewRoadmapBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
