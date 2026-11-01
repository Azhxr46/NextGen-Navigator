import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { AppRoute } from '../context/AppContext';
import {
  Search,
  Compass,
  Sparkles,
  Layers,
  Calculator,
  ShieldCheck,
  Calendar,
  FileText,
  Mail,
  Lock,
  X,
  ArrowRight
} from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    setCurrentRoute,
    allCareers,
    setActiveCareerDetail,
    t,
    translateCategory
  } = useApp();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  // Filter careers
  const filteredCareers = allCareers
    .filter(c =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase()) ||
      c.coreSkills.some(s => s.toLowerCase().includes(query.toLowerCase()))
    )
    .slice(0, 5);

  // Quick action shortcuts
  const allActions: Array<{ label: string; route: AppRoute; icon: any; category: string }> = [
    { label: t.nav.assessment, route: 'assessment', icon: Sparkles, category: t.nav.assessment },
    { label: t.nav.explorer, route: 'explorer', icon: Compass, category: t.nav.explorer },
    { label: t.nav.simulator, route: 'simulator', icon: Layers, category: t.nav.simulator },
    { label: t.nav.roi, route: 'roi', icon: Calculator, category: t.nav.roi },
    { label: t.nav.scholarships, route: 'scholarships', icon: ShieldCheck, category: t.nav.scholarships },
    { label: t.nav.exams, route: 'exams', icon: Calendar, category: t.nav.exams },
    { label: t.nav.resume, route: 'resume', icon: FileText, category: t.nav.resume },
    { label: t.nav.dashboard, route: 'student-dashboard', icon: Compass, category: t.nav.dashboard },
    { label: t.nav.contact, route: 'contact', icon: Mail, category: t.nav.contact },
    { label: t.nav.adminLogin, route: 'admin-login', icon: Lock, category: t.nav.admin }
  ];

  const coreActions = allActions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectRoute = (route: AppRoute) => {
    setCurrentRoute(route);
    setIsCommandPaletteOpen(false);
  };

  const handleSelectCareer = (career: any) => {
    setActiveCareerDetail(career);
    setIsCommandPaletteOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-[#FAF6F0]">
          <Search className="w-5 h-5 text-[#7A1C33] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={t.nav.quickSearch}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-800 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Careers Matching */}
          {filteredCareers.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1.5">
                {t.nav.explorer} ({filteredCareers.length})
              </span>
              <div className="space-y-1">
                {filteredCareers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectCareer(c)}
                    className="w-full px-3 py-2 rounded-lg hover:bg-[#FAF6F0] text-left transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#7A1C33]">{c.title}</p>
                      <p className="text-[10px] text-slate-500">
                        {translateCategory(c.category)} • {c.studyDuration} • {c.salary?.entryLevel || c.indicativeSalary?.entry || 'Salary data unavailable'}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#7A1C33] transition group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Views Matching */}
          {coreActions.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-1.5">
                {t.nav.allTools}
              </span>
              <div className="space-y-1">
                {coreActions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectRoute(item.route)}
                      className="w-full px-3 py-2 rounded-lg hover:bg-[#FAF6F0] text-left transition flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-md bg-slate-100 group-hover:bg-[#F9EBEF] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#7A1C33]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-[#7A1C33] truncate">{item.label}</p>
                        <span className="text-[10px] text-slate-400">{item.category}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">Jump</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {filteredCareers.length === 0 && coreActions.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching careers or tools found for "{query}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#FAF6F0] border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>NextGen Navigators Command Palette</span>
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded shadow-2xs font-mono text-[10px]">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
