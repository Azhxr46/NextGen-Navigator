import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  ShieldCheck,
  IndianRupee,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Award,
  AlertCircle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const FinancialROIPage: React.FC = () => {
  const { allCareers, roiCareer, studentProfile, t, language, translateCategory } = useApp();

  const [selectedCareerId, setSelectedCareerId] = useState<string>(
    roiCareer ? roiCareer.id : (studentProfile.savedCareers[0] || allCareers[0].id)
  );

  const activeCareer = allCareers.find(c => c.id === selectedCareerId) || allCareers[0];

  // Pathways comparison data for the selected career
  const comparisonPathways = [
    {
      name: t.roi.govtCollege,
      tag: language === 'kn' ? 'ಅತ್ಯಂತ ವೆಚ್ಚ-ಪರಿಣಾಮಕಾರಿ' : language === 'hi' ? 'सबसे किफायती डिग्री' : 'Most Cost-Effective Degree',
      tuitionPerYear: 35000,
      livingPerYear: 45000,
      durationYears: 4,
      totalInvestment: 320000,
      scholarshipOpportunity: language === 'kn' ? '₹50,000/ವರ್ಷದವರೆಗೆ (SSP / NSP)' : language === 'hi' ? '₹50,000/वर्ष तक (SSP / NSP)' : 'Up to ₹50,000/yr (Karnataka SSP / NSP Central Sector)',
      netEstimatedCost: 120000,
      entrySalaryAnnual: 600000,
      paybackPeriod: '0.4 - 0.8 ' + t.common.years,
      suitableFor: language === 'kn' ? 'KCET, JEE, ಅಥವಾ CUET ನಲ್ಲಿ ಉತ್ತಮ ರ್ಯಾಂಕ್ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು' : language === 'hi' ? 'KCET, JEE, या CUET में मेरिट रैंक हासिल करने वाले छात्र' : 'Students securing merit ranks in KCET, JEE, or CUET'
    },
    {
      name: t.roi.privateCollege,
      tag: language === 'kn' ? 'ಹೆಚ್ಚಿನ ಬಂಡವಾಳ ಹೂಡಿಕೆ' : language === 'hi' ? 'उच्च शिक्षण निवेश' : 'Higher Tuition Investment',
      tuitionPerYear: 220000,
      livingPerYear: 90000,
      durationYears: 4,
      totalInvestment: 1240000,
      scholarshipOpportunity: language === 'kn' ? 'ಸಂಸ್ಥೆಯ ಮೆರಿಟ್ ವಿನಾಯಿತಿಗಳು (10-25%)' : language === 'hi' ? 'संस्थागत मेरिट छूट (10-25%)' : 'Institutional merit waivers (10-25%)',
      netEstimatedCost: 1050000,
      entrySalaryAnnual: 750000,
      paybackPeriod: '2.5 - 4.0 ' + t.common.years,
      suitableFor: language === 'kn' ? 'ವಾರ್ಷಿಕ ₹2 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಶಿಕ್ಷಣ ಬಜೆಟ್ ಹೊಂದಿರುವ ಕುಟುಂಬಗಳು' : language === 'hi' ? '₹2 लाख/वर्ष से अधिक शिक्षा बजट वाले परिवार' : 'Families with education budget above ₹2 Lakhs/year'
    },
    {
      name: language === 'kn' ? '3-ವರ್ಷದ ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ / ITI' : language === 'hi' ? '3-वर्षीय पॉलिटेक्निक डिप्लोमा / ITI' : '3-Year Polytechnic Diploma / ITI',
      tag: language === 'kn' ? 'ಶೂನ್ಯ ಸಾಲದ ತ್ವರಿತ ಪ್ರವೇಶ' : language === 'hi' ? 'शून्य-ऋण त्वरित प्रवेश' : 'Zero-Debt Fast-Track Entry',
      tuitionPerYear: 12000,
      livingPerYear: 25000,
      durationYears: 3,
      totalInvestment: 111000,
      scholarshipOpportunity: language === 'kn' ? '100% ಶುಲ್ಕ ವಿನಾಯಿತಿ + ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ಸ್ಟೈಪೆಂಡ್' : language === 'hi' ? '100% शुल्क छूट + अप्रेंटिसशिप वजीफा' : '100% Fee Waiver for eligible state categories + Apprenticeship stipend',
      netEstimatedCost: 35000,
      entrySalaryAnnual: 320000,
      paybackPeriod: '0.2 - 0.4 ' + t.common.years,
      suitableFor: language === 'kn' ? 'ಆರಂಭಿಕ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಲ್ಯಾಟರಲ್ ಬಿ.ಟೆಕ್ ಪ್ರವೇಶ ಬಯಸುವ ಕಲಿಯುವವರು' : language === 'hi' ? 'शीघ्र वित्तीय स्वतंत्रता और लेटरल बी.टेक प्रवेश के इच्छुक छात्र' : 'Practical learners aiming for early financial independence & lateral B.Tech entry'
    },
    {
      name: language === 'kn' ? 'ಮುಕ್ತ ವಿಶ್ವವಿದ್ಯಾಲಯ (IGNOU / SWAYAM)' : language === 'hi' ? 'मुक्त विश्वविद्यालय (IGNOU / SWAYAM)' : 'Open University (IGNOU / SWAYAM / NPTEL)',
      tag: language === 'kn' ? 'ಹೊಂದಿಕೊಳ್ಳುವ ಕೆಲಸದ ಮಾರ್ಗ' : language === 'hi' ? 'लचीला कार्य मार्ग' : 'Flexible Working Route',
      tuitionPerYear: 8000,
      livingPerYear: 0,
      durationYears: 3,
      totalInvestment: 24000,
      scholarshipOpportunity: language === 'kn' ? 'ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಪಡೆದ ಉಚಿತ ವೀಡಿಯೊ ಉಪನ್ಯಾಸಗಳು' : language === 'hi' ? 'सरकारी सब्सिडी वाले मुफ्त वीडियो व्याख्यान' : 'Government subsidized free video lectures & e-content',
      netEstimatedCost: 24000,
      entrySalaryAnnual: 350000,
      paybackPeriod: '< 2 ' + t.common.months,
      suitableFor: language === 'kn' ? 'ಕೆಲಸ ಮತ್ತು ಅಧ್ಯಯನವನ್ನು ಸಮತೋಲನಗೊಳಿಸುವ ಸ್ವಯಂ-ಪ್ರೇರಿತ ಕಲಿಯುವವರು' : language === 'hi' ? 'नौकरी और पढ़ाई में संतुलन बनाने वाले स्वावलंबी शिक्षार्थी' : 'Self-motivated learners balancing jobs, family, or remote locations'
    }
  ];

  const chartData = comparisonPathways.map(p => ({
    name: p.name.split(' ')[0] + ' ' + (p.name.split(' ')[1] || ''),
    TotalInvestment: p.totalInvestment,
    EntryAnnualSalary: p.entrySalaryAnnual
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fade-up">
      {/* Header Banner */}
      <div className="space-y-3 border-b border-[#E5E5E7] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EBEF] text-[#7A1C33] text-xs font-bold border border-[#F2D3DC]">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t.roi.title}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4A0817] tracking-tight">
          {t.roi.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t.roi.subtitle}
        </p>

        {/* Mandatory Legal & Guidance Disclaimer */}
        <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E5E5E7] text-xs text-slate-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#7A1C33] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-bold text-[#4A0817]">{t.common.disclaimer}: </strong>
            {t.roi.disclaimer}
          </p>
        </div>
      </div>

      {/* Career Selection Dropdown */}
      <div className="bg-white p-5 rounded-2xl border border-[#E5E5E7] shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="w-full sm:w-auto min-w-0">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {t.roi.selectCareer}:
          </label>
          <select
            value={selectedCareerId}
            onChange={e => setSelectedCareerId(e.target.value)}
            className="w-full min-w-0 max-w-full sm:max-w-md px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#4A0817] focus:outline-none focus:ring-2 focus:ring-[#7A1C33] bg-white truncate"
          >
            {allCareers.map(c => (
              <option key={c.id} value={c.id}>
                {c.title} ({translateCategory(c.category)})
              </option>
            ))}
          </select>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
            {t.roi.benchmarkSalary} (0-2 {t.common.years})
          </span>
          <span className="text-lg font-black text-[#7A1C33]">
            {activeCareer.salary?.entryLevel || activeCareer.indicativeSalary?.entry}
          </span>
          <span className="text-[10px] text-slate-400 block">{t.roi.salarySource}</span>
        </div>
      </div>

      {/* Pathways Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comparisonPathways.map((p, idx) => (
          <div
            key={idx}
            className="interactive-card bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-soft hover:shadow-card hover:border-[#9B314B]/30 transition flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#7A1C33] uppercase bg-[#F9EBEF] px-2.5 py-0.5 rounded-full border border-[#F2D3DC] inline-block">
                {p.tag}
              </span>
              <h3 className="text-base font-extrabold text-[#4A0817] leading-snug">
                {p.name}
              </h3>

              <div className="space-y-2 pt-2 border-t border-[#E5E5E7] text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'kn' ? 'ಅವಧಿ:' : language === 'hi' ? 'अवधि:' : 'Duration:'}</span>
                  <span className="font-bold text-slate-800">{p.durationYears} {t.common.years}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.roi.annualFees}:</span>
                  <span className="font-bold text-slate-800">₹{p.tuitionPerYear.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'kn' ? 'ವಸತಿ ವೆಚ್ಚ:' : language === 'hi' ? 'आवास / छात्रावास:' : 'Living / Hostel:'}</span>
                  <span className="font-bold text-slate-800">₹{p.livingPerYear.toLocaleString()}/{t.common.years}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100">
                  <span className="font-bold text-[#4A0817]">{t.roi.totalDegreeCost}:</span>
                  <span className="font-extrabold text-[#7A1C33]">₹{p.totalInvestment.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] space-y-1 text-[11px]">
                <span className="font-bold text-slate-700 block">{t.scholarships.title}</span>
                <span className="text-slate-600 leading-snug block">{p.scholarshipOpportunity}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5E7] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{t.roi.breakEvenYears}:</span>
                <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {p.paybackPeriod}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                {p.suitableFor}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Investment vs Salary Chart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-soft space-y-4">
        <div>
          <h3 className="text-base font-bold text-[#4A0817]">{t.roi.tuitionEstimates}</h3>
          <p className="text-xs text-slate-500">{t.roi.subtitle}</p>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E7" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#4A0817' }} />
              <YAxis
                tickFormatter={(val: number) => `₹${val / 100000}L`}
                tick={{ fontSize: 10, fill: '#7A1C33' }}
              />
              <Tooltip
                formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, '']}
                contentStyle={{ borderRadius: '0.75rem', borderColor: '#E5E5E7', fontSize: '12px' }}
              />
              <Bar dataKey="TotalInvestment" name={t.roi.totalDegreeCost} fill="#9B314B" radius={[6, 6, 0, 0]} />
              <Bar dataKey="EntryAnnualSalary" name={t.roi.benchmarkSalary} fill="#7A1C33" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
