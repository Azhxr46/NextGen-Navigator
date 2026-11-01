import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from '../components/NextGenEmblem';
import {
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Wrench,
  Stethoscope,
  Atom,
  Briefcase,
  DollarSign,
  Scale,
  Palette,
  Film,
  Sprout,
  GraduationCap,
  Shield,
  Lightbulb,
  Hammer,
  CheckCircle2,
  Calendar,
  Calculator
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setCurrentRoute, allCareers, t, language, translateCategory } = useApp();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    { name: 'Technology', count: allCareers.filter(c => c.category === 'Technology').length, icon: Cpu, desc: 'AI, Cybersecurity, Web & Cloud' },
    { name: 'Engineering', count: allCareers.filter(c => c.category === 'Engineering').length, icon: Wrench, desc: 'Renewable, Robotics, Smart Infrastructure' },
    { name: 'Healthcare', count: allCareers.filter(c => c.category === 'Healthcare').length, icon: Stethoscope, desc: 'Clinical Medicine, Biomedical, Psychology' },
    { name: 'Science', count: allCareers.filter(c => c.category === 'Science').length, icon: Atom, desc: 'Data Science, Biotechnology, Environment' },
    { name: 'Commerce', count: allCareers.filter(c => c.category === 'Commerce').length, icon: Briefcase, desc: 'Chartered Accountancy, Supply Chain' },
    { name: 'Finance', count: allCareers.filter(c => c.category === 'Finance').length, icon: DollarSign, desc: 'FinTech, Actuarial, Investment Banking' },
    { name: 'Law', count: allCareers.filter(c => c.category === 'Law').length, icon: Scale, desc: 'Cyber Law, Corporate, Public Advocacy' },
    { name: 'Design', count: allCareers.filter(c => c.category === 'Design').length, icon: Palette, desc: 'UI/UX, Product, Sustainable Fashion' },
    { name: 'Arts', count: allCareers.filter(c => c.category === 'Arts').length, icon: Film, desc: 'Animation & Gaming, Digital Media, Heritage' },
    { name: 'Agriculture', count: allCareers.filter(c => c.category === 'Agriculture').length, icon: Sprout, desc: 'Agritech, Food Processing, Organic Precision' },
    { name: 'Education', count: allCareers.filter(c => c.category === 'Education').length, icon: GraduationCap, desc: 'Curriculum Design, STEM Pedagogy' },
    { name: 'Public Service', count: allCareers.filter(c => c.category === 'Public Service').length, icon: Shield, desc: 'Civil Services (IAS/IPS), Defense (NDA)' },
    { name: 'Entrepreneurship', count: allCareers.filter(c => c.category === 'Entrepreneurship').length, icon: Lightbulb, desc: 'CleanTech Startups, Social Innovation' },
    { name: 'Vocational', count: allCareers.filter(c => c.category === 'Vocational').length, icon: Hammer, desc: 'Solar PV, EV Diagnostic, CNC Tooling' }
  ];

  const steps = language === 'kn' ? [
    {
      step: '01',
      title: 'ನಿಮ್ಮನ್ನು ಅರಿಯಿರಿ',
      desc: 'ಪರೀಕ್ಷಾ ಒತ್ತಡವಿಲ್ಲದೆ ತಾರ್ಕಿಕ, ತಾಂತ್ರಿಕ, ಸೃಜನಶೀಲ, ಸಾಮಾಜಿಕ ಮತ್ತು ಸಾಂಖ್ಯಿಕ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ವರ್ಗ-ನಿರ್ದಿಷ್ಟ ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.'
    },
    {
      step: '02',
      title: 'ಸಾಮರ್ಥ್ಯಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
      desc: 'ವೈಜ್ಞಾನಿಕ ತಾರ್ಕಿಕತೆ, ವಿನ್ಯಾಸ, ನಾಯಕತ್ವ ಮತ್ತು ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಣೆಯಲ್ಲಿ ನಿಮ್ಮ ನೈಜ ಶಕ್ತಿಯನ್ನು ನಕ್ಷೆ ಮಾಡುವ ಬಹು ಆಯಾಮದ RIASEC ಪ್ರೊಫೈಲ್ ಅನ್ನು ಲೈವ್ ಆಗಿ ಪರಿಶೀಲಿಸಿ.'
    },
    {
      step: '03',
      title: 'ಶಿಫಾರಸುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      desc: 'ಪಾರದರ್ಶಕ ಸ್ಕೋರಿಂಗ್ ಸೂತ್ರಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆಯಾಗುವ ವೃತ್ತಿ ಮಾರ್ಗಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ. ಬಜೆಟ್ ಕೊರತೆಯಿಂದ ಯಾವುದೇ ವೃತ್ತಿ ಕಳೆದುಹೋಗುವುದಿಲ್ಲ—ಕಡಿಮೆ ವೆಚ್ಚದ ಸರ್ಕಾರಿ ಮಾರ್ಗಗಳನ್ನು ಸೂಚಿಸಲಾಗುತ್ತದೆ.'
    },
    {
      step: '04',
      title: 'ಕಲಿಕೆಯ ರೋಡ್‌ಮ್ಯಾಪ್ ಅನುಸರಿಸಿ',
      desc: 'ಶಾಲಾ ವಿಷಯಗಳು, ಉಚಿತ SWAYAM ಕೋರ್ಸ್‌ಗಳು, ಆರಂಭಿಕ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನಗಳೊಂದಿಗೆ ಸಂವಾದಾತ್ಮಕ 6-ಹಂತದ ಮೈಲಿಗಲ್ಲುಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ.'
    }
  ] : language === 'hi' ? [
    {
      step: '01',
      title: 'स्वयं को पहचानें',
      desc: 'बिना परीक्षा के तनाव के तार्किक, तकनीकी, रचनात्मक, सामाजिक और संख्यात्मक समस्या-समाधान शैलियों का मूल्यांकन करने वाले श्रेणी-विशिष्ट परीक्षण पूरे करें।'
    },
    {
      step: '02',
      title: 'क्षमताओं का विश्लेषण करें',
      desc: 'वैज्ञानिक तर्क, डिज़ाइन, नेतृत्व और डेटा में अपनी वास्तविक ताकत को मैप करने वाले बहु-आयामी RIASEC प्रोफ़ाइल का लाइव निरीक्षण करें।'
    },
    {
      step: '03',
      title: 'सिफारिशें खोजें',
      desc: 'पारदर्शी स्कोरिंग सूत्रों के साथ अनुकूलित करियर मार्ग खोजें। सीमित बजट कभी बाधा नहीं बनता—किफायती सरकारी विकल्पों को प्राथमिकता दी जाती है।'
    },
    {
      step: '04',
      title: 'लर्निंग रोडमैप का पालन करें',
      desc: 'स्कूल विषयों, मुफ्त SWAYAM पाठ्यक्रमों, शुरुआती प्रोजेक्ट्स और छात्रवृत्तियों के साथ इंटरैक्टिव 6-चरणीय माइलस्टोन्स का पालन करें।'
    }
  ] : [
    {
      step: '01',
      title: 'Discover Yourself',
      desc: 'Complete category-specific aptitude assessments evaluating logical, technical, creative, social, and numerical problem-solving styles without exam stress.'
    },
    {
      step: '02',
      title: 'Analyse Strengths',
      desc: 'Inspect your multi-dimensional RIASEC profile live, mapping your genuine strengths across scientific reasoning, design, leadership, and structured data.'
    },
    {
      step: '03',
      title: 'Explore Recommendations',
      desc: 'Discover tailored career paths with transparent scoring formulas. Tight budgets never disqualify careers—low-cost government pathways are highlighted.'
    },
    {
      step: '04',
      title: 'Follow Your Learning Roadmap',
      desc: 'Execute interactive 6-stage milestone roadmaps—from school subjects and free SWAYAM courses to beginner projects, portfolio building, and scholarships.'
    }
  ];

  const faqs = language === 'kn' ? [
    {
      q: 'NextGen Navigators ಎಂದರೇನು ಮತ್ತು ಇದು ಯಾರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ?',
      a: 'NextGen Navigators ಭಾರತೀಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ (8-12 ನೇ ತರಗತಿ, ಡಿಪ್ಲೊಮಾ, ITI ಮತ್ತು ಪದವಿಪೂರ್ವ) ಮತ್ತು ಅವರ ಪೋಷಕರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾದ ಸ್ವತಂತ್ರ, ವಾಣಿಜ್ಯೇತರ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ವೈಜ್ಞಾನಿಕ RIASEC ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆ, 35+ ಪರಿಶೀಲಿಸಿದ ಭಾರತೀಯ ವೃತ್ತಿ ವಿವರಗಳು, ಕಾಲೇಜು ಶುಲ್ಕ ಹೋಲಿಕೆ ಮತ್ತು ಅಧಿಕೃತ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.'
    },
    {
      q: 'ಶಿಫಾರಸು ಎಂಜಿನ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
      a: 'ಸಾಮಾನ್ಯ ಕ್ವಿಜ್‌ಗಳಂತಲ್ಲದೆ, ನಮ್ಮ ಎಂಜಿನ್ ವರ್ಗ-ನಿರ್ದಿಷ್ಟ ತೂಕವನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ: 40% ನಿರ್ದಿಷ್ಟ ಸಾಮರ್ಥ್ಯ, 30% RIASEC ಆಸಕ್ತಿ ಜೋಡಣೆ, 15% ಆದ್ಯತೆಯ ಶಾಲಾ ವಿಷಯಗಳು ಮತ್ತು 15% ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದ ಸಾಧ್ಯತೆ. ಬಜೆಟ್ ಕಾರಣದಿಂದ ನಾವು ಉನ್ನತ-ಆಸಕ್ತಿಯ ವೃತ್ತಿಗಳನ್ನು ಮರೆಮಾಡುವುದಿಲ್ಲ; ಬದಲಿಗೆ ಕಡಿಮೆ ವೆಚ್ಚದ ಸರ್ಕಾರಿ ಆಯ್ಕೆಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.'
    },
    {
      q: 'ವೇತನ ಮತ್ತು ಶುಲ್ಕದ ಅಂಕಿಅಂಶಗಳು ಎಲ್ಲಿಂದ ಬರುತ್ತವೆ?',
      a: 'ಎಲ್ಲಾ ವೇತನ ಶ್ರೇಣಿಗಳು ನ್ಯಾಷನಲ್ ಕರಿಯರ್ ಸರ್ವಿಸ್ (NCS, ಕಾರ್ಮಿಕ ಮತ್ತು ಉದ್ಯೋಗ ಸಚಿವಾಲಯ), AmbitionBox ಮತ್ತು Glassdoor India ಮಾನದಂಡಗಳಿಂದ ಪಡೆದ ಪರಿಶೀಲಿಸಿದ ಉದ್ಯಮದ ಸರಾಸರಿಯಾಗಿದೆ. ಅಂಕಿಅಂಶಗಳನ್ನು 0-2 ವರ್ಷಗಳು, 3-7 ವರ್ಷಗಳು ಮತ್ತು 8+ ವರ್ಷಗಳ ಅನುಭವದ ಹಂತಗಳಲ್ಲಿ ವಿಂಗಡಿಸಲಾಗಿದೆ.'
    },
    {
      q: 'NextGen Navigators ವಿದ್ಯಾರ್ಥಿಗಳ ಸೂಕ್ಷ್ಮ ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆಯೇ?',
      a: 'ಇಲ್ಲ. ನಾವು ಗೌಪ್ಯತೆ-ಮೂಲಕ-ವಿನ್ಯಾಸ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತೇವೆ. ನಾವು ಆಧಾರ್, ಪ್ಯಾನ್, ಜಾತಿ ಅಥವಾ ಧರ್ಮದಂತಹ ಸೂಕ್ಷ್ಮ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಬಳಕೆದಾರರ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಅನನ್ಯ ಸಾಲ್ಟಿಂಗ್‌ನೊಂದಿಗೆ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ PBKDF2-SHA256 ಬಳಸಿ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗುತ್ತದೆ.'
    }
  ] : language === 'hi' ? [
    {
      q: 'NextGen Navigators क्या है और यह किसके लिए बनाया गया है?',
      a: 'NextGen Navigators भारतीय छात्रों (कक्षा 8-12, डिप्लोमा, आईटीआई और स्नातक) और उनके अभिभावकों का मार्गदर्शन करने के लिए विकसित एक स्वतंत्र, गैर-व्यावसायिक शैक्षिक नेविगेशन मंच है। यह वैज्ञानिक RIASEC योग्यता मूल्यांकन, 35+ सत्यापित भारतीय करियर विवरण, कॉलेज शुल्क तुलना और आधिकारिक छात्रवृत्ति पोर्टल्स को जोड़ता है।'
    },
    {
      q: 'सिफारिश इंजन कैसे काम करता है?',
      a: 'सामान्य करियर क्विज़ के विपरीत, हमारा इंजन श्रेणी-विशिष्ट वेटेज लागू करता है: 40% विशिष्ट योग्यता, 30% RIASEC रुचि संरेखण, 15% पसंदीदा स्कूल विषय और 15% मार्ग व्यवहार्यता। हम बजट की कमी के कारण उच्च-रुचि वाले करियर को कभी नहीं छिपाते; इसके बजाय, हम कम लागत वाले सरकारी विकल्पों को प्राथमिकता देते हैं।'
    },
    {
      q: 'वेतन और शुल्क डेटा कहां से आता है?',
      a: 'सभी वेतन बैंड राष्ट्रीय करियर सेवा (NCS, श्रम एवं रोजगार मंत्रालय), AmbitionBox और Glassdoor India मानकों से प्राप्त सत्यापित उद्योग समुच्चय का प्रतिनिधित्व करते हैं। आंकड़े 0-2 वर्ष, 3-7 वर्ष और 8+ वर्ष के अनुभव बैंड में स्पष्ट रूप से विभाजित हैं।'
    },
    {
      q: 'क्या NextGen Navigators संवेदनशील छात्र रिकॉर्ड संग्रहीत करता है?',
      a: 'नहीं। हम सख्त प्राइवेसी-बाय-डिज़ाइन सिद्धांतों के तहत काम करते हैं। हम कभी भी संवेदनशील सरकारी आईडी (जैसे आधार या पैन), जाति या धर्म एकत्र या संग्रहीत नहीं करते हैं। सभी उपयोगकर्ता पासवर्ड अद्वितीय सॉल्टिंग के साथ क्रिप्टोग्राफ़िक PBKDF2-SHA256 का उपयोग करके एन्क्रिप्ट किए जाते हैं।'
    }
  ] : [
    {
      q: 'What is NextGen Navigators and who is it designed for?',
      a: 'NextGen Navigators is an independent, non-commercial educational navigation platform developed to guide Indian students (Classes 8–12, Diploma, ITI, and Undergraduates) and their parents. It combines scientific RIASEC aptitude assessment, 35+ verified Indian career dossiers, college fee comparisons, and official scholarship portals.'
    },
    {
      q: 'How does the recommendation engine work?',
      a: 'Unlike generic career quizzes that return identical static lists, our engine applies category-specific weighting: 40% specific aptitude fit, 30% RIASEC interest alignment, 15% preferred school subject overlap, and 15% pathway feasibility. We never hide high-interest careers due to budget constraints; instead, we prioritize low-cost government alternatives.'
    },
    {
      q: 'Where does the salary and fee data come from?',
      a: 'All salary bands represent verified industry aggregates sourced from the National Career Service (NCS, Ministry of Labour & Employment), AmbitionBox, and Glassdoor India benchmarks (last updated October 2026). Figures are clearly segmented into 0-2 Years, 3-7 Years, and 8+ Years experience bands.'
    },
    {
      q: 'Does NextGen Navigators store sensitive student records?',
      a: 'No. We operate under strict Privacy-by-Design principles. We never collect or store sensitive government IDs (such as Aadhaar or PAN), caste, or religion. All user passwords are encrypted using cryptographic PBKDF2-SHA256 with unique salting.'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#4A0817] via-[#580C1F] to-[#7A1C33] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8D8DA_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#D8D8DA] text-xs font-semibold">
              <NextGenEmblem size={20} />
              <span>NextGen Navigators • {t.landing.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(1.85rem,5.2vw,3.75rem)] font-extrabold tracking-tight text-white leading-[1.15]">
              {t.landing.heroTitle1} <br className="hidden sm:inline" />
              <span className="text-[#D8D8DA]">{t.landing.heroTitle2}</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-[#FAF6F0]/90 max-w-2xl mx-auto leading-relaxed">
              {t.landing.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4">
              <button
                onClick={() => setCurrentRoute('assessment')}
                className="w-full sm:w-auto min-h-[44px] px-7 py-3 rounded-xl bg-white text-[#7A1C33] font-extrabold text-xs sm:text-sm hover:bg-[#FAF6F0] transition shadow-metallic flex items-center justify-center gap-2"
              >
                <span>{t.landing.ctaAssessment}</span>
                <ArrowRight className="w-4 h-4 text-[#7A1C33]" />
              </button>
              <button
                onClick={() => setCurrentRoute('explorer')}
                className="w-full sm:w-auto min-h-[44px] px-7 py-3 rounded-xl bg-[#330510]/80 hover:bg-[#330510] text-white font-bold text-xs sm:text-sm border border-white/20 transition flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#D8D8DA]" />
                <span>{t.landing.ctaExplorer}</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8D8DA]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.landing.trustZeroFake}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.landing.trustOfficialData}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.landing.trustFree}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Interactive Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#7A1C33] uppercase tracking-wider bg-[#F9EBEF] px-3 py-1 rounded-full border border-[#F2D3DC]">
            {language === 'kn' ? 'ಕಾರ್ಯವಿಧಾನ' : language === 'hi' ? 'कार्यप्रणाली' : 'How It Works'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
            {language === 'kn' ? 'ನಿಮ್ಮ 4-ಹಂತದ ಪಾರದರ್ಶಕ ಮಾರ್ಗದರ್ಶನ ಪಯಣ' : language === 'hi' ? 'आपकी 4-चरणीय पारदर्शी मार्गदर्शन यात्रा' : 'Your 4-Step Transparent Guidance Journey'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'kn' ? 'ವೈಯಕ್ತಿಕ ಸಾಮರ್ಥ್ಯ ಅನ್ವೇಷಣೆಯಿಂದ ನೈಜ ಮೈಲಿಗಲ್ಲು ಅನುಷ್ಠಾನದವರೆಗೆ ರಚನಾತ್ಮಕ ಹಂತಗಳು.' : language === 'hi' ? 'व्यक्तिगत योग्यता खोज से लेकर वास्तविक माइलस्टोन क्रियान्वयन तक की संरचित प्रगति।' : 'A structured progression from personal aptitude discovery to tangible milestone execution.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E5E5E7] shadow-soft hover:shadow-card interactive-card flex flex-col justify-between space-y-4 group relative"
            >
              <div className="space-y-3">
                <span className="text-2xl font-black text-[#9B314B]/30 group-hover:text-[#7A1C33] transition font-mono">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#4A0817]">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-8 h-1 bg-[#F9EBEF] group-hover:bg-[#7A1C33] transition rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 14 Career Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#7A1C33] uppercase tracking-wider bg-[#F9EBEF] px-3 py-1 rounded-full border border-[#F2D3DC]">
              {language === 'kn' ? 'ವೈವಿಧ್ಯಮಯ ಕ್ಷೇತ್ರಗಳು' : language === 'hi' ? 'विविध क्षेत्र' : 'Diverse Horizons'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
              {language === 'kn' ? '14 ಭಾರತೀಯ ವೃತ್ತಿ ಕ್ಷೇತ್ರಗಳು' : language === 'hi' ? '14 भारतीय करियर क्षेत्र' : '14 Indian Career Sectors'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'kn' ? 'ತಂತ್ರಜ್ಞಾನ, ಆರೋಗ್ಯ ರಕ್ಷಣೆ, ಗ್ರಾಮೀಣ ಕೃಷಿ, ವಿನ್ಯಾಸ, ನಾಗರಿಕ ಆಡಳಿತ ಮತ್ತು ವೃತ್ತಿಪರ ಉದ್ಯೋಗಗಳ ಸಮಗ್ರ ವ್ಯಾಪ್ತಿ.' : language === 'hi' ? 'उच्च-विकास सॉफ्टवेयर, स्वास्थ्य सेवा, कृषि तकनीक, डिज़ाइन, सिविल प्रशासन और व्यावसायिक ट्रेडों का विस्तार।' : 'Spanning high-growth software, healthcare, rural agritech, design, civil administration, and vocational trades.'}
            </p>
          </div>
          <button
            onClick={() => setCurrentRoute('explorer')}
            className="btn-secondary"
          >
            <span>{t.landing.ctaExplorer}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => setCurrentRoute('explorer')}
                className="p-4 rounded-xl border border-[#E5E5E7] bg-white hover:border-[#9B314B] hover:shadow-soft interactive-card cursor-pointer flex flex-col items-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] group-hover:bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#7A1C33] transition truncate w-full">
                    {translateCategory(cat.name)}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {cat.count} {language === 'kn' ? 'ವಿಭಾಗಗಳು' : language === 'hi' ? 'प्रोफ़ाइल' : 'Profiles'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Educational Features Showcase */}
      <section className="bg-[#FAF6F0] py-16 border-y border-[#E5E5E7] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#7A1C33] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#E5E5E7]">
              {t.landing.featureHeading}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0817] tracking-tight">
              {t.landing.featureSubheading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E7] space-y-3 shadow-soft interactive-card">
              <div className="w-10 h-10 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#4A0817]">{t.landing.f2Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.landing.f2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E7] space-y-3 shadow-soft interactive-card">
              <div className="w-10 h-10 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#4A0817]">{t.scholarships.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.scholarships.subtitle}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E7] space-y-3 shadow-soft interactive-card">
              <div className="w-10 h-10 rounded-xl bg-[#F9EBEF] text-[#7A1C33] flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#4A0817]">{t.landing.f3Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.landing.f3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold text-[#7A1C33] uppercase tracking-wider bg-[#F9EBEF] px-3 py-1 rounded-full border border-[#F2D3DC]">
            {language === 'kn' ? 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' : language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl font-extrabold text-[#4A0817]">
            {language === 'kn' ? 'ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು, ಗೊಂದಲಗಳಿಲ್ಲ' : language === 'hi' ? 'स्पष्ट उत्तर, कोई भ्रम नहीं' : 'Clear Answers, No Jargon'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E5E5E7] bg-white overflow-hidden transition interactive-card"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-[#7A1C33] transition"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#7A1C33]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="rounded-3xl bg-gradient-to-r from-[#7A1C33] via-[#580C1F] to-[#4A0817] text-white p-8 sm:p-12 text-center space-y-6 shadow-metallic">
          <div className="flex justify-center">
            <NextGenEmblem size={48} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {t.landing.bannerTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6F0]/90 max-w-xl mx-auto leading-relaxed">
            {t.landing.bannerSubtitle}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setCurrentRoute('assessment')}
              className="px-8 py-3.5 rounded-xl bg-white text-[#7A1C33] font-extrabold text-xs sm:text-sm hover:bg-[#FAF6F0] transition shadow-lg inline-flex items-center gap-2"
            >
              <span>{t.landing.bannerBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#7A1C33]" />
            </button>
            <button
              onClick={() => setCurrentRoute('contact')}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-white/40 text-white font-bold text-xs sm:text-sm hover:bg-white/10 transition"
            >
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
