import React from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from '../components/NextGenEmblem';
import { Mail, Phone, MapPin, Compass, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { setCurrentRoute, t } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 animate-fade-up">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-2">
          <NextGenEmblem size={56} />
        </div>
        <span className="text-xs font-bold text-[#7A1C33] uppercase tracking-wider bg-[#F9EBEF] px-3.5 py-1 rounded-full border border-[#F2D3DC]">
          {t.contact.subtitle}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4A0817] tracking-tight">
          {t.contact.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
          {t.contact.purpose}
        </p>
      </div>

      {/* Primary Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="interactive-card bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4A0817]">{t.contact.email}</h3>
              <p className="text-xs text-slate-500 mt-1">azharahmedshariff26cs@rnsit.ac.in</p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <a
              href="mailto:azharahmedshariff26cs@rnsit.ac.in"
              className="text-sm sm:text-base font-bold text-[#7A1C33] hover:text-[#580C1F] hover:underline break-all transition flex items-center gap-2"
            >
              <span>azharahmedshariff26cs@rnsit.ac.in</span>
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="interactive-card bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4A0817]">{t.contact.phone}</h3>
              <p className="text-xs text-slate-500 mt-1">+91 9180496092</p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <a
              href="tel:9180496092"
              className="text-lg font-bold text-[#7A1C33] hover:text-[#580C1F] hover:underline transition flex items-center gap-2"
            >
              <span>+91 9180496092</span>
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="interactive-card bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4A0817]">{t.contact.location}</h3>
              <p className="text-xs text-slate-500 mt-1">RNSIT Bengaluru, Karnataka</p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <span className="text-sm font-bold text-[#4A0817] block">
              RNSIT Bangalore
            </span>
            <span className="text-xs text-slate-600 block mt-0.5">
              RNS Institute of Technology, Channasandra, Dr. Vishnuvardhan Road, Bengaluru, Karnataka 560098
            </span>
          </div>
        </div>
      </div>

      {/* Organization Info Box */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E5E7] shadow-soft space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#7A1C33]" />
          <h2 className="text-xl font-extrabold text-[#4A0817]">{t.contact.institutionalIdentity}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h4 className="font-bold text-[#4A0817]">{t.contact.aboutPlatformTitle}</h4>
            <p>
              {t.contact.aboutPlatformDesc}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#4A0817]">{t.contact.commitmentTitle}</h4>
            <p>
              {t.contact.commitmentDesc}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <HeartHandshake className="w-4 h-4 text-[#7A1C33]" />
            <span>{t.contact.coDeveloped}</span>
          </div>
          <button
            onClick={() => setCurrentRoute('explorer')}
            className="btn-primary"
          >
            <span>{t.contact.exploreCareersBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

