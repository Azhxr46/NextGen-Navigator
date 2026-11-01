import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LOW_COST_OPEN_LEARNING_RESOURCES } from '../data/scholarshipsData';
import {
  ShieldCheck,
  Search,
  ExternalLink,
  Award,
  BookOpen,
  IndianRupee,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  Filter,
  FileCheck,
  Building
} from 'lucide-react';

export const ScholarshipsPage: React.FC = () => {
  const { allScholarships, t, language, translateScholarshipCategory } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'State Govt', 'Central Govt', 'AICTE / Technical', 'Girl Child', 'Merit-cum-Means'];

  const filteredScholarships = allScholarships.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.hindiName && s.hindiName.includes(searchQuery)) ||
      (s.kannadaName && s.kannadaName.includes(searchQuery)) ||
      s.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.targetGroup.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header */}
      <div className="space-y-3 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <Award className="w-3.5 h-3.5" />
          <span>{t.scholarships.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.scholarships.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t.scholarships.subtitle}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E5E5E7] shadow-soft space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.scholarships.searchScholarships}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAF6F0] text-slate-800 text-xs sm:text-sm rounded-2xl pl-11 pr-4 py-3 border border-[#E5E5E7] focus:outline-none focus:ring-2 focus:ring-[#7A1C33] font-medium"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          <span className="text-slate-500 font-semibold shrink-0">{t.scholarships.categoryFilter}:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-[#7A1C33] text-white shadow-sm'
                  : 'bg-[#FAF6F0] border border-[#E5E5E7] text-slate-600 hover:border-[#9B314B]'
              }`}
            >
              {cat === 'All' ? t.common.all : translateScholarshipCategory(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScholarships.map((scheme) => {
          const displayName = language === 'kn' && scheme.kannadaName
            ? scheme.kannadaName
            : language === 'hi' && scheme.hindiName
            ? scheme.hindiName
            : scheme.name;

          return (
            <div
              key={scheme.id}
              className="interactive-card rounded-3xl border border-[#E5E5E7] bg-white p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-[#9B314B]/30 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F9EBEF] text-[#7A1C33] border border-[#F2D3DC]">
                    {translateScholarshipCategory(scheme.category)}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    ✓ {t.common.verified} ({scheme.lastVerifiedDate})
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#4A0817] leading-snug">
                    {displayName}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    {language === 'kn' ? 'ನೀಡಿಕೆದಾರರು:' : language === 'hi' ? 'प्रदाता:' : 'Provided by:'} {scheme.provider}
                  </span>
                </div>

                {/* Benefit Box */}
                <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] space-y-1">
                  <span className="text-[10px] font-bold text-[#7A1C33] uppercase block">
                    {t.scholarships.benefitAmount}
                  </span>
                  <p className="text-xs font-bold text-[#4A0817]">
                    {scheme.benefits}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {scheme.amountDetails}
                  </p>
                </div>

                {/* Eligibility Criteria */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 block">{t.scholarships.eligibility}:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {scheme.eligibilityCriteria.map((crit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#7A1C33] font-bold">•</span>
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents */}
                {scheme.requiredDocuments && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-[#7A1C33]" />
                      <span>{t.scholarships.requiredDocuments}:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {scheme.requiredDocuments.map((doc, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#FAF6F0] text-slate-700 border border-[#E5E5E7]">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Action */}
              <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-semibold">
                  {t.scholarships.deadline}: {scheme.applicationWindow}
                </span>
                <a
                  href={scheme.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-3 text-xs"
                >
                  <span>{t.scholarships.officialLink}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Open Learning Alternatives */}
      <div className="space-y-6 pt-6 border-t border-[#E5E5E7]">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#4A0817]">
            {language === 'kn' ? 'ಕಡಿಮೆ ವೆಚ್ಚದ ಮುಕ್ತ ಕಲಿಕೆ ಮತ್ತು ಮೈಕ್ರೋ-ಕ್ರೆಡೆನ್ಶಿಯಲ್ ಪರ್ಯಾಯಗಳು' : language === 'hi' ? 'कम लागत वाली मुक्त शिक्षा और माइक्रो-क्रेडेंशियल विकल्प' : 'Low-Cost Open Learning & Micro-Credential Alternatives'}
          </h2>
          <p className="text-xs text-slate-600">
            {language === 'kn' ? 'ಸಬ್ಸಿಡಿ ಪಡೆದ ಪದವಿಗಳು ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ನೀಡುವ ಸರ್ಕಾರಿ ಮಾನ್ಯತೆ ಪಡೆದ ಪೋರ್ಟಲ್‌ಗಳು.' : language === 'hi' ? 'सब्सिडी वाली डिग्री और सत्यापित प्रमाणपत्र प्रदान करने वाले सरकार द्वारा मान्यता प्राप्त पोर्टल।' : 'Government recognized portals offering subsidized degrees, credit transfers, and verified credentials.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOW_COST_OPEN_LEARNING_RESOURCES.map((res, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#E5E5E7] bg-white space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-bold text-sm text-[#4A0817] block">{res.name}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{res.description}</p>
                <div className="text-[11px] font-semibold text-[#7A1C33] bg-[#FAF6F0] p-2 rounded-lg">
                  {res.cost}
                </div>
              </div>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#7A1C33] hover:underline flex items-center gap-1 pt-2"
              >
                <span>{language === 'kn' ? 'ಪೋರ್ಟಲ್ ಭೇಟಿ ನೀಡಿ' : language === 'hi' ? 'पोर्टल पर जाएं' : 'Visit Learning Portal'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsPage;
