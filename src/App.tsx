import React, { useEffect } from 'react';
import { useApp } from './context/AppContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { CommandPalette } from './components/CommandPalette';
import { CareerDetailModal } from './components/CareerDetailModal';
import { CareerCompareModal } from './components/CareerCompareModal';
import { DayInLifeModal } from './components/DayInLifeModal';
import { AIChatbot } from './components/AIChatbot';

// Pages
import { LandingPage } from './pages/LandingPage';
import { OnboardingWizard } from './pages/OnboardingWizard';
import { AssessmentPage } from './pages/AssessmentPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { RoadmapTrackerPage } from './pages/RoadmapTrackerPage';
import { CareerExplorerPage } from './pages/CareerExplorerPage';
import { SubjectSimulatorPage } from './pages/SubjectSimulatorPage';
import { FinancialROIPage } from './pages/FinancialROIPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { MentorshipPage } from './pages/MentorshipPage';
import { ExamRadarPage } from './pages/ExamRadarPage';
import { PortfolioResumePage } from './pages/PortfolioResumePage';
import { StudentDashboard } from './pages/StudentDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export const App: React.FC = () => {
  const {
    currentRoute,
    authMode,
    dayInLifeCareer,
    setDayInLifeCareer,
    toasts,
    removeToast
  } = useApp();

  // Automatic Scroll Position Reset on Route Change
  useEffect(() => {
    // Instantly reset vertical and horizontal scroll to 0
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Scroll-triggered viewport animations observer
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08
        }
      );

      // Give micro-tick for components in new page to mount in DOM
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-reveal:not(.is-revealed)');
        elements.forEach(el => observer.observe(el));
      }, 50);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, [currentRoute]);

  const renderActiveRoute = () => {
    switch (currentRoute) {
      case 'landing':
        return <LandingPage />;
      case 'onboarding':
        return <OnboardingWizard />;
      case 'assessment':
        return <AssessmentPage />;
      case 'recommendations':
        return <RecommendationsPage />;
      case 'roadmap':
        return <RoadmapTrackerPage />;
      case 'explorer':
        return <CareerExplorerPage />;
      case 'simulator':
        return <SubjectSimulatorPage />;
      case 'roi':
        return <FinancialROIPage />;
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'mentorship':
        return <MentorshipPage />;
      case 'exams':
        return <ExamRadarPage />;
      case 'resume':
        return <PortfolioResumePage />;
      case 'student-dashboard':
        return <StudentDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'admin-login':
        return <AuthPage key="admin-auth" initialMode="admin" />;
      case 'contact':
        return <ContactPage />;
      case 'auth':
        return <AuthPage key={`auth-${authMode}`} initialMode={authMode} />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col bg-[#FAF6F0] text-slate-900 selection:bg-[#7A1C33] selection:text-white w-full">
      {/* Premium Opening Preloader Animation */}
      <Preloader />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page View with Smooth Slide-In Route Transitions */}
      <main className="flex-1 w-full">
        <PageTransition routeKey={currentRoute}>
          {renderActiveRoute()}
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Floating Assistants */}
      <CommandPalette />
      <CareerDetailModal />
      <CareerCompareModal />
      {dayInLifeCareer && (
        <DayInLifeModal
          career={dayInLifeCareer}
          onClose={() => setDayInLifeCareer(null)}
        />
      )}
      <AIChatbot />

      {/* Toast Notification Stack */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none no-print">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-3.5 rounded-2xl shadow-card border flex items-start gap-3 text-xs transition-all animate-fade-in ${
              toast.type === 'success'
                ? 'bg-emerald-950 text-emerald-100 border-emerald-800'
                : toast.type === 'warning'
                ? 'bg-amber-950 text-amber-100 border-amber-800'
                : toast.type === 'error'
                ? 'bg-rose-950 text-rose-100 border-rose-800'
                : 'bg-navy-900 text-slate-100 border-navy-700'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
              {toast.type === 'warning' && <AlertCircle className="w-4 h-4 text-amber-400" />}
              {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400" />}
              {toast.type === 'info' && <Info className="w-4 h-4 text-indigo-400" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold">{toast.title}</p>
              {toast.message && <p className="text-[11px] opacity-80 mt-0.5">{toast.message}</p>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

