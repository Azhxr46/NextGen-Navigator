import React from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from './NextGenEmblem';
import {
  ExternalLink,
  ShieldCheck,
  Heart,
  Compass,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentRoute, t } = useApp();

  const officialPortals = [
    { name: 'National Career Service (NCS)', url: 'https://www.ncs.gov.in' },
    { name: 'Karnataka Examinations Authority (KEA)', url: 'https://cetonline.karnataka.gov.in/kea/' },
    { name: 'National Testing Agency (NTA)', url: 'https://www.nta.ac.in' },
    { name: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in' },
    { name: 'SWAYAM & NPTEL Portal', url: 'https://swayam.gov.in' },
    { name: 'AICTE Approved Institutions Directory', url: 'https://www.aicte-india.org' }
  ];

  return (
    <footer className="bg-[#330510] text-slate-300 border-t border-[#4A0817] pt-14 pb-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <div
              onClick={() => setCurrentRoute('landing')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <NextGenEmblem size={38} />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white font-sans">
                  NextGen <span className="text-[#D8D8DA] font-semibold">Navigators</span>
                </span>
                <span className="text-[10px] text-[#D8D8DA]/70 uppercase tracking-wider font-semibold">
                  Guiding Student Ambitions
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">RNSIT Bangalore</span>
              <span className="block text-[11px] text-slate-400">Department of Computer Science & Engineering</span>
            </div>
          </div>

          {/* Col 2: Direct Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-[#4A0817] pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D8D8DA] shrink-0 mt-0.5" />
                <a
                  href="mailto:azharahmedshariff26cs@rnsit.ac.in"
                  className="hover:text-white transition break-all font-medium text-slate-300 hover:underline"
                >
                  azharahmedshariff26cs@rnsit.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8D8DA] shrink-0" />
                <a
                  href="tel:9180496092"
                  className="hover:text-white transition font-medium text-slate-300 hover:underline"
                >
                  +91 9180496092
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8D8DA] shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  RNSIT Campus, Channasandra, Bengaluru, Karnataka 560098
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="text-xs font-bold text-[#D8D8DA] hover:text-white hover:underline flex items-center gap-1"
                >
                  <span>{t.nav.contact} →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Platform Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-[#4A0817] pb-2">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentRoute('assessment')} className="hover:text-white transition">
                  {t.nav.assessment}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('explorer')} className="hover:text-white transition">
                  {t.nav.explorer}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('roi')} className="hover:text-white transition">
                  {t.nav.roi}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('scholarships')} className="hover:text-white transition">
                  {t.nav.scholarships}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('exams')} className="hover:text-white transition">
                  {t.nav.exams}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentRoute('resume')} className="hover:text-white transition">
                  {t.nav.resume}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Government Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-[#4A0817] pb-2">
              Verified Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {officialPortals.map((p, idx) => (
                <li key={idx}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1.5 text-slate-300 group"
                  >
                    <span className="truncate">{p.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ethical Notice & Disclaimers */}
        <div className="border-t border-[#4A0817] pt-8 space-y-4 text-[11px] text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-[#4A0817]/60 border border-[#580C1F] space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#D8D8DA]" />
              <span>{t.common.disclaimer}</span>
            </div>
            <p>
              {t.footer.legalText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 pt-2">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-4 text-[11px]">
              <button onClick={() => setCurrentRoute('contact')} className="hover:text-slate-300">
                {t.nav.contact}
              </button>
              <span>•</span>
              <button onClick={() => setCurrentRoute('auth')} className="hover:text-slate-300">
                {t.nav.adminLogin}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
