import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NextGenEmblem } from './NextGenEmblem';
import {
  Compass,
  Sparkles,
  BookOpen,
  Calculator,
  ShieldCheck,
  Users,
  Calendar,
  FileText,
  Layers,
  Menu,
  X,
  Languages,
  User,
  LogOut,
  Shield,
  PhoneCall,
  Search,
  ChevronDown,
  LogIn,
  UserPlus,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Language } from '../utils/translations';

export const Navbar: React.FC = () => {
  const {
    session,
    currentUser,
    userRole,
    logout,
    authMode,
    openAuth,
    language,
    setLanguage,
    t,
    currentRoute,
    setCurrentRoute,
    setIsCommandPaletteOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProfileDropdownOpen(false);
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Main 8 desktop navigation links for the Home navigation bar:
  // Home, Assessment, Matches, Roadmap, Scholarships, Mentors, Exams, Resume
  const mainDesktopLinks = [
    { id: 'landing', label: t.nav.home, icon: Compass },
    { id: 'assessment', label: t.nav.assessment, icon: Sparkles },
    { id: 'recommendations', label: t.nav.recommendations, icon: Sparkles },
    { id: 'roadmap', label: t.nav.roadmap, icon: BookOpen },
    { id: 'scholarships', label: t.nav.scholarships, icon: ShieldCheck },
    { id: 'mentorship', label: t.nav.mentorship, icon: Users },
    { id: 'exams', label: t.nav.exams, icon: Calendar },
    { id: 'resume', label: t.nav.resume, icon: FileText }
  ];

  // Additional navigation & tools recovered from old Search Bar menu
  // (strictly excluding items already in the Home navigation bar above)
  const additionalNavTools = [
    {
      id: 'search',
      label: t.nav.quickSearch,
      subtitle: t.common.searchPlaceholder,
      icon: Search,
      action: () => {
        setIsCommandPaletteOpen(true);
        setProfileDropdownOpen(false);
      },
      hasKbd: true
    },
    {
      id: 'explorer',
      label: t.nav.explorer,
      subtitle: t.explorer.title,
      icon: Compass,
      route: 'explorer'
    },
    {
      id: 'roi',
      label: t.nav.roi,
      subtitle: t.roi.title,
      icon: Calculator,
      route: 'roi'
    },
    {
      id: 'simulator',
      label: t.nav.simulator,
      subtitle: t.simulator.title,
      icon: Layers,
      route: 'simulator'
    },
    {
      id: 'contact',
      label: t.nav.contact,
      subtitle: t.contact.title,
      icon: PhoneCall,
      route: 'contact'
    }
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  const navigateTo = (route: any) => {
    setCurrentRoute(route);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleAuthNavigation = (mode: 'login' | 'register' | 'admin') => {
    openAuth(mode);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#4A0817] text-white border-b border-[#580C1F] shadow-md w-full">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-1.5 sm:gap-2">
          {/* Brand Logo & Emblem */}
          <div
            onClick={() => navigateTo('landing')}
            className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none group shrink-0"
          >
            <NextGenEmblem size={28} className="sm:w-[36px] sm:h-[36px]" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xs min-[380px]:text-sm sm:text-base min-[1300px]:text-lg tracking-tight text-white font-sans flex items-center gap-1 sm:gap-1.5 leading-none">
                NextGen <span className="text-[#D8D8DA] font-medium">Navigators</span>
              </span>
              <span className="hidden 2xl:inline-block text-[10px] text-[#D8D8DA]/80 tracking-wider uppercase font-semibold mt-0.5">
                Educational & Career Navigation
              </span>
            </div>
          </div>

          {/* Main Desktop Navigation Links (8 options for ≥1200px) */}
          <nav className="hidden min-[1200px]:flex items-center gap-0.5 min-[1380px]:gap-1 flex-nowrap shrink-0">
            {mainDesktopLinks.map(link => {
              const Icon = link.icon;
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`flex items-center gap-1 min-[1380px]:gap-1.5 px-1.5 min-[1280px]:px-2 min-[1400px]:px-2.5 py-1.5 rounded-xl text-[11px] min-[1400px]:text-xs font-bold transition whitespace-nowrap min-h-[36px] ${
                    isActive
                      ? 'bg-[#7A1C33] text-white shadow-sm'
                      : 'text-[#FAF6F0]/85 hover:bg-[#580C1F] hover:text-white'
                  }`}
                >
                  <Icon className="w-3 h-3 min-[1400px]:w-3.5 min-[1400px]:h-3.5 shrink-0" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector, Profile Icon, Hamburger Toggle */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-1.5 sm:px-2.5 py-1.5 rounded-lg bg-[#330510] hover:bg-[#580C1F] text-xs font-semibold text-[#FAF6F0] transition border border-[#580C1F] min-h-[36px] sm:min-h-[40px]"
                aria-label="Change Language"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
              >
                <Languages className="w-3.5 h-3.5 text-[#D8D8DA] shrink-0" />
                <span className="uppercase text-[11px] font-bold tracking-wider">{language}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white text-slate-800 rounded-xl shadow-card border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-[#F9EBEF] transition ${
                      language === 'en' ? 'font-bold text-[#7A1C33]' : 'text-slate-700'
                    }`}
                  >
                    <span>English</span>
                    {language === 'en' && <span className="text-[#7A1C33]">✓</span>}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('hi')}
                    className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-[#F9EBEF] transition ${
                      language === 'hi' ? 'font-bold text-[#7A1C33]' : 'text-slate-700'
                    }`}
                  >
                    <span>हिन्दी (Hindi)</span>
                    {language === 'hi' && <span className="text-[#7A1C33]">✓</span>}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('kn')}
                    className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-[#F9EBEF] transition ${
                      language === 'kn' ? 'font-bold text-[#7A1C33]' : 'text-slate-700'
                    }`}
                  >
                    <span>ಕನ್ನಡ (Kannada)</span>
                    {language === 'kn' && <span className="text-[#7A1C33]">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Profile Menu Trigger & Complete Navigation Dropdown (Always visible on all breakpoints) */}
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 min-[1536px]:px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm border border-[#9B314B] min-h-[36px] sm:min-h-[40px] shrink-0 ${
                  profileDropdownOpen
                    ? 'bg-[#580C1F] text-white border-[#D8D8DA]/40 ring-2 ring-[#7A1C33]/50'
                    : 'bg-[#7A1C33] hover:bg-[#580C1F] text-white'
                }`}
                aria-label="User Profile and Extended Navigation Menu"
                aria-expanded={profileDropdownOpen}
                aria-haspopup="menu"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="hidden 2xl:inline">
                  {session
                    ? (userRole === 'admin' ? 'Admin' : (currentUser?.fullName?.split(' ')[0] || 'Profile'))
                    : 'Profile'}
                </span>
                <ChevronDown className={`hidden sm:inline w-3.5 h-3.5 text-[#D8D8DA] transition-transform duration-200 shrink-0 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Complete Restored Profile Dropdown Panel */}
              {profileDropdownOpen && (
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="profile-menu-button"
                  className="absolute right-0 mt-2 w-72 sm:w-80 md:w-88 max-w-[calc(100vw-24px)] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150 divide-y divide-slate-100 max-h-[85vh] overflow-y-auto"
                >
                  {/* Account / User Header */}
                  <div className="px-4 py-3 bg-[#FAF6F0] rounded-t-2xl">
                    {session ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#4A0817] truncate">
                            {currentUser?.fullName || 'Active User'}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            userRole === 'admin'
                              ? 'bg-purple-100 text-purple-800 border border-purple-200'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}>
                            {userRole === 'admin' ? 'Administrator' : 'Student'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {currentUser?.email || 'Logged in'}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-bold text-[#4A0817]">NextGen Navigation Portal</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Sign in or explore specialized tools and career calculators.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* SECTION 1: ACCOUNT (Restored Login, Registration, Admin, My Profile) */}
                  <div className="py-2 px-2 space-y-1">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#7A1C33] block">
                      {t.nav.studentAccount}
                    </span>

                    {!session ? (
                      <>
                        {/* 1. Login */}
                        <button
                          role="menuitem"
                          onClick={() => handleAuthNavigation('login')}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                            currentRoute === 'auth' && authMode === 'login'
                              ? 'bg-[#F9EBEF] text-[#7A1C33] font-bold border-l-4 border-[#7A1C33]'
                              : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-[#4A0817]'
                          }`}
                        >
                          <LogIn className="w-4 h-4 text-[#7A1C33] shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block leading-none font-bold">{t.nav.login}</span>
                            <span className="text-[10px] text-slate-500">{t.auth.studentLoginSubtitle}</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                        </button>

                        {/* 2. Registration / Sign Up */}
                        <button
                          role="menuitem"
                          onClick={() => handleAuthNavigation('register')}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                            currentRoute === 'auth' && authMode === 'register'
                              ? 'bg-[#F9EBEF] text-[#7A1C33] font-bold border-l-4 border-[#7A1C33]'
                              : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-[#4A0817]'
                          }`}
                        >
                          <UserPlus className="w-4 h-4 text-[#7A1C33] shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block leading-none font-bold">{t.nav.register}</span>
                            <span className="text-[10px] text-slate-500">{t.auth.studentRegisterSubtitle}</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                        </button>

                        {/* 3. Admin Login */}
                        <button
                          role="menuitem"
                          onClick={() => handleAuthNavigation('admin')}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                            currentRoute === 'admin-login'
                              ? 'bg-purple-50 text-purple-900 font-bold border-l-4 border-purple-800'
                              : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-purple-900'
                          }`}
                        >
                          <Lock className="w-4 h-4 text-purple-700 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block leading-none font-bold">{t.nav.adminLogin}</span>
                            <span className="text-[10px] text-slate-500">{t.auth.adminLoginSubtitle}</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                        </button>
                      </>
                    ) : (
                      <>
                        {/* Student Logged In: My Profile */}
                        {userRole !== 'admin' && (
                          <button
                            role="menuitem"
                            onClick={() => navigateTo('student-dashboard')}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                              currentRoute === 'student-dashboard'
                                ? 'bg-[#F9EBEF] text-[#7A1C33] font-bold border-l-4 border-[#7A1C33]'
                                : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-[#4A0817]'
                            }`}
                          >
                            <User className="w-4 h-4 text-[#7A1C33] shrink-0" />
                            <div className="flex-1 min-w-0">
                              <span className="block leading-none font-bold">{t.nav.dashboard}</span>
                              <span className="text-[10px] text-slate-500">{t.dashboard.subtitle}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                          </button>
                        )}

                        {/* Administrator Logged In: Admin Dashboard */}
                        {userRole === 'admin' && (
                          <button
                            role="menuitem"
                            onClick={() => navigateTo('admin-dashboard')}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                              currentRoute === 'admin-dashboard'
                                ? 'bg-purple-50 text-purple-900 font-bold border-l-4 border-purple-800'
                                : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-purple-900'
                            }`}
                          >
                            <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <span className="block leading-none font-bold">{t.nav.admin}</span>
                              <span className="text-[10px] text-slate-500">{t.admin.portalTitle}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                          </button>
                        )}

                        {/* Secure Logout Action */}
                        <button
                          role="menuitem"
                          onClick={() => {
                            logout();
                            setProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left text-rose-700 hover:bg-rose-50 transition"
                        >
                          <LogOut className="w-4 h-4 text-rose-600 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block leading-none font-bold">{t.nav.logout}</span>
                            <span className="text-[10px] text-rose-500">{t.auth.logoutSuccess}</span>
                          </div>
                        </button>
                      </>
                    )}
                  </div>

                  {/* SECTION 2: ADDITIONAL NAVIGATION & TOOLS */}
                  <div className="py-2 px-2 space-y-1">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#7A1C33] block">
                      {t.nav.allTools}
                    </span>

                    {additionalNavTools.map(tool => {
                      const Icon = tool.icon;
                      const isActive = tool.route && currentRoute === tool.route;

                      return (
                        <button
                          key={tool.id}
                          role="menuitem"
                          onClick={() => {
                            if (tool.action) {
                              tool.action();
                            } else if (tool.route) {
                              navigateTo(tool.route);
                            }
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-left transition ${
                            isActive
                              ? 'bg-[#F9EBEF] text-[#7A1C33] font-bold border-l-4 border-[#7A1C33]'
                              : 'text-slate-700 hover:bg-[#FAF6F0] hover:text-[#4A0817]'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#7A1C33] shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="block leading-none font-bold">{tool.label}</span>
                            <span className="text-[10px] text-slate-500 truncate block mt-0.5">{tool.subtitle}</span>
                          </div>
                          {tool.hasKbd ? (
                            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded text-slate-500 shrink-0">
                              Ctrl K
                            </kbd>
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile/Tablet Hamburger Toggle (Visible on <1200px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-[1200px]:hidden p-1.5 sm:p-2 rounded-lg hover:bg-[#580C1F] text-slate-200 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (<1200px) */}
      {mobileMenuOpen && (
        <div className="min-[1200px]:hidden border-t border-[#580C1F] bg-[#330510] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Main Navigation Links */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8D8DA]/70 px-2 block mb-1.5">
              {t.nav.mainNav || 'Main Navigation'}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {mainDesktopLinks.map(link => {
                const Icon = link.icon;
                const isActive = currentRoute === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold text-left transition ${
                      isActive
                        ? 'bg-[#7A1C33] text-white shadow-sm'
                        : 'text-slate-300 hover:bg-[#4A0817]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-[#D8D8DA]" />
                    <span className="truncate">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Navigation & Tools */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8D8DA]/70 px-2 block mb-1.5">
              {t.nav.additionalTools || 'Additional Tools'}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {additionalNavTools.map(tool => {
                const Icon = tool.icon;
                const isActive = tool.route && currentRoute === tool.route;
                return (
                  <button
                    key={tool.id}
                    onClick={() => {
                      if (tool.action) {
                        tool.action();
                        setMobileMenuOpen(false);
                      } else if (tool.route) {
                        navigateTo(tool.route);
                      }
                    }}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold text-left transition ${
                      isActive
                        ? 'bg-[#7A1C33] text-white shadow-sm'
                        : 'text-slate-300 hover:bg-[#4A0817]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-[#D8D8DA]" />
                    <span className="truncate">{tool.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-3 border-t border-[#580C1F] space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8D8DA]/70 px-2 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-[#D8D8DA]" />
              {t.nav.selectLanguage || 'Language / ಭಾಷೆ / भाषा'}
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { code: 'en' as const, label: 'English', native: 'English' },
                { code: 'hi' as const, label: 'Hindi', native: 'हिन्दी' },
                { code: 'kn' as const, label: 'Kannada', native: 'ಕನ್ನಡ' }
              ].map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-2 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center ${
                    language === lang.code
                      ? 'bg-[#7A1C33] text-white ring-1 ring-white/30 shadow'
                      : 'bg-[#4A0817] text-slate-300 hover:text-white hover:bg-[#580C1F]'
                  }`}
                >
                  <span>{lang.native}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Account Controls */}
          <div className="pt-3 border-t border-[#580C1F] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8D8DA]/70 px-2 block">
              {t.nav.account || 'Account'}
            </span>
            {!session ? (
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAuthNavigation('login')}
                  className="p-2 rounded-xl text-xs font-bold bg-[#FAF6F0] text-[#4A0817] hover:bg-white text-center"
                >
                  {t.nav.login}
                </button>
                <button
                  onClick={() => handleAuthNavigation('register')}
                  className="p-2 rounded-xl text-xs font-bold bg-[#7A1C33] text-white hover:bg-[#9B314B] text-center"
                >
                  {t.nav.register}
                </button>
                <button
                  onClick={() => handleAuthNavigation('admin')}
                  className="p-2 rounded-xl text-xs font-bold bg-[#4A0817] text-[#D8D8DA] hover:text-white border border-[#580C1F] text-center"
                >
                  {t.nav.admin}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateTo(userRole === 'admin' ? 'admin-dashboard' : 'student-dashboard')}
                  className="text-xs text-[#D8D8DA] hover:text-white flex items-center gap-1.5 font-bold"
                >
                  <User className="w-3.5 h-3.5 text-[#D8D8DA]" />
                  <span>{userRole === 'admin' ? t.nav.admin : t.nav.dashboard}</span>
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5 font-bold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.nav.logout}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
