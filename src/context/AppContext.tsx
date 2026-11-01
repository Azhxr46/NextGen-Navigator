import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  UserRole,
  StudentProfile,
  Career,
  Mentor,
  Scholarship,
  EntranceExamTimeline,
  MentorshipSession,
  CareerRecommendationMatch,
  RIASECScore,
  AuthSession,
  User,
  AssessmentCategory
} from '../types';
import { CAREERS_DATA } from '../data/careersData';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData';
import { ENTRANCE_EXAMS_DATA } from '../data/examTimelinesData';
import { MENTORS_DATA } from '../data/mentorsData';
import {
  loadActiveSession,
  saveActiveSession,
  loadStudentProfile,
  saveStudentProfile,
  loadMentorshipSessions,
  saveMentorshipSessions,
  loadStoredLanguage,
  saveStoredLanguage,
  loadStoredTranslationOverrides,
  saveStoredTranslationOverrides,
  EMPTY_STUDENT_PROFILE
} from '../utils/storage';
import {
  hashPassword,
  verifyPassword,
  getRegisteredUsers,
  saveRegisteredUsers,
  checkRateLimit,
  recordFailedAttempt,
  resetRateLimit,
  logAdminAction
} from '../utils/auth';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import {
  supabaseSignUp,
  supabaseSignIn,
  supabaseSignOut,
  fetchSupabaseStudentProfile,
  upsertSupabaseStudentProfile,
  fetchSupabaseCareers,
  upsertSupabaseCareer,
  deleteSupabaseCareer,
  fetchSupabaseScholarships,
  upsertSupabaseScholarship,
  deleteSupabaseScholarship,
  fetchSupabaseMentors,
  upsertSupabaseMentor,
  deleteSupabaseMentor,
  fetchSupabaseMentorshipSessions,
  insertSupabaseMentorshipSession,
  updateSupabaseMentorshipStatus,
  insertSupabaseAuditLog,
  seedSupabaseDatabase
} from '../services/supabaseService';
import { generateCareerRecommendations } from '../utils/recommendationEngine';
import {
  TRANSLATIONS,
  TranslationDictionary,
  Language,
  translateCategory,
  translateSector,
  translateRiasec,
  translateStream,
  translateStreamPool,
  translateBudgetTier,
  translateScholarshipCategory,
  translateSubject,
  translateStrength,
  translateEducationLevel,
  getMergedTranslations
} from '../utils/translations';

export type AppRoute =
  | 'landing'
  | 'onboarding'
  | 'assessment'
  | 'recommendations'
  | 'roadmap'
  | 'explorer'
  | 'simulator'
  | 'roi'
  | 'scholarships'
  | 'mentorship'
  | 'exams'
  | 'resume'
  | 'student-dashboard'
  | 'admin-dashboard'
  | 'admin-login'
  | 'contact'
  | 'auth';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
}

interface AppContextType {
  // Session & Authentication
  session: AuthSession | null;
  currentUser: AuthSession['user'] | null;
  userRole: UserRole;
  loginStudent: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  registerStudent: (fullName: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  loginAdmin: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  authMode: 'login' | 'register' | 'admin';
  setAuthMode: (mode: 'login' | 'register' | 'admin') => void;
  openAuth: (mode: 'login' | 'register' | 'admin') => void;

  // Language & Localization
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  translateCategory: (cat: string) => string;
  translateSector: (sector: string) => string;
  translateRiasec: (dim: string) => { name: string; desc: string };
  translateStream: (stream: string) => string;
  translateStreamPool: (pool: string) => string;
  translateBudgetTier: (tier: string) => string;
  translateScholarshipCategory: (cat: string) => string;
  translateSubject: (subject: string) => string;
  translateStrength: (strength: string) => string;
  translateEducationLevel: (level: string) => string;
  translationOverrides: Record<string, any>;
  setTranslationOverrides: (overrides: Record<string, any>) => void;

  // Student Profile
  studentProfile: StudentProfile;
  updateStudentProfile: (updater: Partial<StudentProfile> | ((prev: StudentProfile) => StudentProfile)) => void;
  resetProfile: () => void;

  // Navigation
  currentRoute: AppRoute;
  setCurrentRoute: (route: AppRoute) => void;

  // Data Stores
  allCareers: Career[];
  recommendations: CareerRecommendationMatch[];
  topRecommendations: CareerRecommendationMatch[];
  updateCareer: (updated: Career) => void;
  addCareer: (newCareer: Career) => void;
  deleteCareer: (careerId: string) => void;

  // Scholarships
  allScholarships: Scholarship[];
  updateScholarship: (scholarship: Scholarship) => void;
  addScholarship: (scholarship: Scholarship) => void;
  deleteScholarship: (id: string) => void;

  // Mentors (starts empty per Section 13)
  allMentors: Mentor[];
  addMentor: (mentor: Mentor) => void;
  updateMentor: (mentor: Mentor) => void;
  deleteMentor: (id: string) => void;

  // Exams
  allExams: EntranceExamTimeline[];
  updateExam: (exam: EntranceExamTimeline) => void;

  // Modals & Active Selections
  activeCareerDetail: Career | null;
  setActiveCareerDetail: (career: Career | null) => void;
  compareCareerIds: string[];
  addToCompare: (careerId: string) => void;
  removeFromCompare: (careerId: string) => void;
  clearCompare: () => void;
  dayInLifeCareer: Career | null;
  setDayInLifeCareer: (career: Career | null) => void;
  roiCareer: Career | null;
  setRoiCareer: (career: Career | null) => void;
  activeRoadmapCareerId: string | null;
  setActiveRoadmapCareerId: (careerId: string | null) => void;
  openCareerRoadmap: (careerId: string) => void;

  // Actions
  toggleSaveCareer: (careerId: string) => void;
  toggleRoadmapTask: (careerId: string, taskId: string) => void;
  saveRoadmapNotes: (careerId: string, notes: string) => void;
  togglePinExam: (examName: string) => void;

  // Mentorship Requests
  mentorshipSessions: MentorshipSession[];
  requestSession: (req: Omit<MentorshipSession, 'id' | 'status'>) => void;
  updateSessionStatus: (sessionId: string, status: MentorshipSession['status']) => void;

  // Supabase Database Status & Tools
  isDatabaseConfigured: boolean;
  seedDatabaseToSupabase: () => Promise<{ success: boolean; count: number; message: string }>;
  refreshFromSupabase: () => Promise<void>;

  // UI state
  isChatbotOpen: boolean;
  setIsChatbotOpen: (open: boolean) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;

  // Toasts
  toasts: ToastMessage[];
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Session
  const [session, setSession] = useState<AuthSession | null>(() => loadActiveSession());
  const currentUser = session?.user || null;
  const userRole: UserRole = session?.user?.role || 'student';

  // Language & Translation Overrides
  const [language, setLanguageState] = useState<Language>(() => loadStoredLanguage());
  const [translationOverrides, setTranslationOverridesState] = useState<Record<string, any>>(() => loadStoredTranslationOverrides());
  const t = getMergedTranslations(language, translationOverrides);

  const setTranslationOverrides = (overrides: Record<string, any>) => {
    setTranslationOverridesState(overrides);
    saveStoredTranslationOverrides(overrides);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveStoredLanguage(lang);
    setStudentProfile(prev => {
      const updated = { ...prev, preferredLanguage: lang };
      const activeUserId = session?.user?.id || 'guest';
      saveStudentProfile(updated, activeUserId);
      if (isSupabaseConfigured() && session?.user?.id) {
        upsertSupabaseStudentProfile(updated, session.user.id).catch(() => {});
      }
      return updated;
    });
  };

  // Student Profile (isolated to user id)
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    const activeUserId = session?.user?.id || 'guest';
    return loadStudentProfile(activeUserId);
  });

  // Re-sync student profile when session user changes
  useEffect(() => {
    const activeUserId = session?.user?.id || 'guest';
    const profile = loadStudentProfile(activeUserId);
    setStudentProfile(profile);
    if (profile.preferredLanguage && (profile.preferredLanguage === 'en' || profile.preferredLanguage === 'hi' || profile.preferredLanguage === 'kn')) {
      setLanguageState(profile.preferredLanguage);
      saveStoredLanguage(profile.preferredLanguage);
    }
  }, [session?.user?.id]);

  // Valid Route Manifest
  const VALID_ROUTES: AppRoute[] = [
    'landing', 'onboarding', 'assessment', 'recommendations', 'roadmap',
    'explorer', 'simulator', 'roi', 'scholarships', 'mentorship',
    'exams', 'resume', 'student-dashboard', 'admin-dashboard',
    'admin-login', 'contact', 'auth'
  ];

  const getInitialRoute = (): AppRoute => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as AppRoute;
      if (VALID_ROUTES.includes(hash)) {
        return hash;
      }
    }
    return 'landing';
  };

  // Current Route with Browser History & Scroll Position Reset
  const [currentRoute, setCurrentRouteState] = useState<AppRoute>(getInitialRoute);

  const setCurrentRoute = (route: AppRoute, addToHistory: boolean = true) => {
    if (route === currentRoute) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    // Reset scroll position immediately to top (0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // Push into browser history for seamless back/forward navigation
    if (addToHistory && typeof window !== 'undefined') {
      try {
        window.history.pushState({ route }, '', `#${route}`);
      } catch {}
    }

    setCurrentRouteState(route);
  };

  // Sync browser back/forward buttons (popstate)
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.history.state?.route) {
      const initial = getInitialRoute();
      try {
        window.history.replaceState({ route: initial }, '', `#${initial}`);
      } catch {}
    }

    const handlePopState = (event: PopStateEvent) => {
      let targetRoute: AppRoute = 'landing';
      if (event.state && event.state.route && VALID_ROUTES.includes(event.state.route)) {
        targetRoute = event.state.route;
      } else if (window.location.hash) {
        const hash = window.location.hash.replace('#', '') as AppRoute;
        if (VALID_ROUTES.includes(hash)) {
          targetRoute = hash;
        }
      }

      // Reset scroll position to top on browser back/forward navigation
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;

      setCurrentRouteState(targetRoute);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Careers state (with local admin override persistence)
  const [allCareers, setAllCareers] = useState<Career[]>(() => {
    try {
      const stored = localStorage.getItem('nextgen_custom_careers');
      if (stored) return JSON.parse(stored);
    } catch {}
    return CAREERS_DATA;
  });

  // Scholarships state
  const [allScholarships, setAllScholarships] = useState<Scholarship[]>(() => {
    try {
      const stored = localStorage.getItem('nextgen_custom_scholarships');
      if (stored) return JSON.parse(stored);
    } catch {}
    return SCHOLARSHIPS_DATA;
  });

  // Mentors state (Starts empty per Section 13)
  const [allMentors, setAllMentors] = useState<Mentor[]>(() => {
    try {
      const stored = localStorage.getItem('nextgen_verified_mentors');
      if (stored) return JSON.parse(stored);
    } catch {}
    return MENTORS_DATA; // starts empty []
  });

  // Exams state
  const [allExams, setAllExams] = useState<EntranceExamTimeline[]>(() => {
    try {
      const stored = localStorage.getItem('nextgen_exams_data');
      if (stored) return JSON.parse(stored);
    } catch {}
    return ENTRANCE_EXAMS_DATA;
  });

  // Modals & Active selections
  const [activeCareerDetail, setActiveCareerDetail] = useState<Career | null>(null);
  const [compareCareerIds, setCompareCareerIds] = useState<string[]>([]);
  const [dayInLifeCareer, setDayInLifeCareer] = useState<Career | null>(null);
  const [roiCareer, setRoiCareer] = useState<Career | null>(null);
  const [activeRoadmapCareerId, setActiveRoadmapCareerId] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'admin'>('login');

  const openAuth = (mode: 'login' | 'register' | 'admin') => {
    setAuthMode(mode);
    if (mode === 'admin') {
      setCurrentRoute('admin-login');
    } else {
      setCurrentRoute('auth');
    }
  };

  const openCareerRoadmap = (careerId: string) => {
    setActiveRoadmapCareerId(careerId);
    setCurrentRoute('roadmap');
  };

  // Mentorship sessions
  const [mentorshipSessions, setMentorshipSessions] = useState<MentorshipSession[]>(() => loadMentorshipSessions());

  // UI State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast System
  const showToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Recommendations calculation
  const recommendations = generateCareerRecommendations(allCareers, studentProfile);
  const topRecommendations = recommendations.slice(0, 5);

  // Supabase Hydration & Real-time Synchronization
  const isDatabaseConfigured = isSupabaseConfigured();

  const refreshFromSupabase = async (): Promise<void> => {
    if (!isDatabaseConfigured) return;
    try {
      const [careers, schs, mentors, sess] = await Promise.all([
        fetchSupabaseCareers(),
        fetchSupabaseScholarships(),
        fetchSupabaseMentors(),
        fetchSupabaseMentorshipSessions(session?.user?.id, session?.user?.role)
      ]);
      if (careers && careers.length > 0) setAllCareers(careers);
      if (schs && schs.length > 0) setAllScholarships(schs);
      if (mentors) setAllMentors(mentors);
      if (sess) setMentorshipSessions(sess);
    } catch {}
  };

  useEffect(() => {
    if (!isDatabaseConfigured) return;

    // 1. Check existing Supabase session
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        const u = data.session.user;
        const role: UserRole = (u.user_metadata?.role as UserRole) || 'student';
        const fullName = u.user_metadata?.full_name || u.email?.split('@')[0] || 'User';
        const newSession: AuthSession = {
          token: data.session.access_token,
          user: { id: u.id, email: u.email || '', fullName, role },
          expiresAt: data.session.expires_at ? data.session.expires_at * 1000 : Date.now() + 7 * 86400000
        };
        setSession(newSession);
        saveActiveSession(newSession);

        if (role === 'student') {
          fetchSupabaseStudentProfile(u.id).then(prof => {
            if (prof) setStudentProfile(prof);
          });
        }
      }
    });

    // 2. Listen to Supabase Auth State changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (event === 'SIGNED_IN' && newSession?.user) {
        const u = newSession.user;
        const role: UserRole = (u.user_metadata?.role as UserRole) || 'student';
        const fullName = u.user_metadata?.full_name || u.email?.split('@')[0] || 'User';
        const active: AuthSession = {
          token: newSession.access_token,
          user: { id: u.id, email: u.email || '', fullName, role },
          expiresAt: newSession.expires_at ? newSession.expires_at * 1000 : Date.now() + 7 * 86400000
        };
        setSession(active);
        saveActiveSession(active);
        if (role === 'student') {
          const prof = await fetchSupabaseStudentProfile(u.id);
          if (prof) setStudentProfile(prof);
        }
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
        saveActiveSession(null);
      }
    });

    // 3. Initial table hydration
    refreshFromSupabase();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [isDatabaseConfigured]);

  const seedDatabaseToSupabase = async () => {
    return seedSupabaseDatabase(allCareers, allScholarships, allExams);
  };

  // Profile Updates
  const updateStudentProfile = (updater: Partial<StudentProfile> | ((prev: StudentProfile) => StudentProfile)) => {
    setStudentProfile(prev => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      const activeUserId = session?.user?.id || 'guest';
      saveStudentProfile(next, activeUserId);

      // Synchronize with Supabase if connected and authenticated
      if (isDatabaseConfigured && session?.user?.id && session.user.role === 'student') {
        upsertSupabaseStudentProfile(next, session.user.id).catch(() => {});
      }
      return next;
    });
  };

  const resetProfile = () => {
    const activeUserId = session?.user?.id || 'guest';
    const cleanProfile: StudentProfile = {
      ...EMPTY_STUDENT_PROFILE,
      id: `profile-${activeUserId}`,
      userId: activeUserId,
      fullName: session?.user?.fullName || 'Student'
    };
    setStudentProfile(cleanProfile);
    saveStudentProfile(cleanProfile, activeUserId);
    showToast({ type: 'info', title: 'Profile Reset', message: 'Profile data cleared.' });
  };

  // Auth: Student Registration
  const registerStudent = async (fullName: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const trimmedEmail = email.trim().toLowerCase();
    const rateCheck = checkRateLimit(`reg_${trimmedEmail}`);
    if (!rateCheck.allowed) {
      return { success: false, message: `Too many attempts. Please try again in ${rateCheck.remainingSeconds} seconds.` };
    }

    if (!fullName.trim() || !trimmedEmail || password.length < 6) {
      return { success: false, message: 'Please provide full name, valid email, and password (min 6 chars).' };
    }

    // Handle registration state gracefully
    if (!isDatabaseConfigured) {
      return {
        success: false,
        message: 'Registration service is currently unavailable. Please try again shortly.'
      };
    }

    // Real Supabase Authentication & Profile Initialization
    const supaRes = await supabaseSignUp(fullName, trimmedEmail, password, 'student');
    if (!supaRes.success) {
      return { success: false, message: supaRes.message };
    }

    if (supaRes.session) {
      saveActiveSession(supaRes.session);
      setSession(supaRes.session);

      const initialProfile: StudentProfile = {
        ...EMPTY_STUDENT_PROFILE,
        id: `profile-${supaRes.session.user.id}`,
        userId: supaRes.session.user.id,
        fullName: fullName.trim()
      };
      await upsertSupabaseStudentProfile(initialProfile, supaRes.session.user.id);
      saveStudentProfile(initialProfile, supaRes.session.user.id);
      setStudentProfile(initialProfile);

      showToast({
        type: 'success',
        title: 'Registration Successful',
        message: `Welcome to NextGen Navigators, ${fullName.trim()}!`
      });
      setCurrentRouteState('student-dashboard');
      return { success: true, message: 'Account successfully registered.' };
    }

    return { success: true, message: 'Registration submitted. Please check your email for confirmation.' };
  };

  // Auth: Student Login
  const loginStudent = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const trimmedEmail = email.trim().toLowerCase();
    const rateCheck = checkRateLimit(`login_${trimmedEmail}`);
    if (!rateCheck.allowed) {
      return { success: false, message: `Account locked due to multiple failed attempts. Try again in ${rateCheck.remainingSeconds}s.` };
    }

    if (!isDatabaseConfigured) {
      return {
        success: false,
        message: 'Authentication service is currently unavailable. Please try again shortly.'
      };
    }

    // Real Supabase Authentication
    const supaRes = await supabaseSignIn(trimmedEmail, password);
    if (!supaRes.success) {
      recordFailedAttempt(`login_${trimmedEmail}`);
      return { success: false, message: supaRes.message };
    }

    if (supaRes.session) {
      resetRateLimit(`login_${trimmedEmail}`);
      saveActiveSession(supaRes.session);
      setSession(supaRes.session);

      // Hydrate student profile from Supabase
      const fetched = await fetchSupabaseStudentProfile(supaRes.session.user.id);
      if (fetched) {
        setStudentProfile(fetched);
        saveStudentProfile(fetched, supaRes.session.user.id);
      } else {
        const fallback: StudentProfile = {
          ...EMPTY_STUDENT_PROFILE,
          id: `profile-${supaRes.session.user.id}`,
          userId: supaRes.session.user.id,
          fullName: supaRes.session.user.fullName
        };
        setStudentProfile(fallback);
      }

      showToast({ type: 'success', title: 'Welcome Back', message: `Signed in as ${supaRes.session.user.fullName}.` });
      setCurrentRouteState('student-dashboard');
      return { success: true, message: 'Login successful.' };
    }

    return { success: false, message: 'Authentication failed.' };
  };

  // Auth: Admin Login
  const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
    const trimmedUser = username.trim().toLowerCase();
    const rateCheck = checkRateLimit(`admin_${trimmedUser}`);
    if (!rateCheck.allowed) {
      return { success: false, message: `Admin authentication locked. Please wait ${rateCheck.remainingSeconds}s.` };
    }

    // If Supabase is configured, attempt Supabase Auth first
    if (isDatabaseConfigured) {
      const supaRes = await supabaseSignIn(trimmedUser, password);
      if (supaRes.success && supaRes.session?.user.role === 'admin') {
        resetRateLimit(`admin_${trimmedUser}`);
        saveActiveSession(supaRes.session);
        setSession(supaRes.session);
        insertSupabaseAuditLog(trimmedUser, 'LOGIN', 'Admin authenticated into control center');
        showToast({ type: 'success', title: 'Admin Authorized', message: 'Signed into Administrative Control Center.' });
        setCurrentRouteState('admin-dashboard');
        return { success: true, message: 'Admin login successful.' };
      }
    }

    // Administrative Portal fallback credentials (allows setting up & seeding database)
    const adminUser = 'admin@nextgennavigators.in';
    const adminPass = 'NextGenAdmin2026!';

    if (trimmedUser === adminUser && password === adminPass) {
      resetRateLimit(`admin_${trimmedUser}`);
      const adminSession: AuthSession = {
        token: `admin-sess-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`,
        user: {
          id: 'admin-master-id',
          email: adminUser,
          fullName: 'NextGen Administrator',
          role: 'admin'
        },
        expiresAt: Date.now() + 4 * 60 * 60 * 1000 // 4 hours
      };

      saveActiveSession(adminSession);
      setSession(adminSession);
      logAdminAction(adminUser, 'LOGIN', 'Admin authenticated into administrative control center');
      if (isDatabaseConfigured) {
        insertSupabaseAuditLog(adminUser, 'LOGIN', 'Admin authenticated into control center');
      }

      showToast({ type: 'success', title: 'Admin Authorized', message: 'Signed into Administrative Control Center.' });
      setCurrentRouteState('admin-dashboard');
      return { success: true, message: 'Admin login successful.' };
    }

    recordFailedAttempt(`admin_${trimmedUser}`);
    return { success: false, message: 'Invalid administrative credentials.' };
  };

  // Logout
  const logout = () => {
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'LOGOUT', 'Admin session terminated');
      if (isDatabaseConfigured) {
        insertSupabaseAuditLog(session.user.email, 'LOGOUT', 'Admin session terminated');
      }
    }
    supabaseSignOut();
    saveActiveSession(null);
    setSession(null);
    showToast({ type: 'info', title: 'Signed Out', message: 'You have been safely signed out.' });
    setCurrentRouteState('landing');
  };

  // Careers CRUD
  const updateCareer = (updated: Career) => {
    setAllCareers(prev => {
      const next = prev.map(c => c.id === updated.id ? updated : c);
      localStorage.setItem('nextgen_custom_careers', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseCareer(updated).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'UPDATE_CAREER', `Updated career: ${updated.title}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'UPDATE_CAREER', `Updated career profile: ${updated.title}`);
    }
    showToast({ type: 'success', title: 'Career Updated', message: updated.title });
  };

  const addCareer = (newCareer: Career) => {
    setAllCareers(prev => {
      const next = [newCareer, ...prev];
      localStorage.setItem('nextgen_custom_careers', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseCareer(newCareer).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'ADD_CAREER', `Created career: ${newCareer.title}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'ADD_CAREER', `Created new career profile: ${newCareer.title}`);
    }
    showToast({ type: 'success', title: 'Career Added', message: newCareer.title });
  };

  const deleteCareer = (careerId: string) => {
    setAllCareers(prev => {
      const next = prev.filter(c => c.id !== careerId);
      localStorage.setItem('nextgen_custom_careers', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      deleteSupabaseCareer(careerId).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'DELETE_CAREER', `Removed career ID: ${careerId}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'DELETE_CAREER', `Removed career ID: ${careerId}`);
    }
    showToast({ type: 'info', title: 'Career Deleted', message: careerId });
  };

  // Scholarships CRUD
  const updateScholarship = (updated: Scholarship) => {
    setAllScholarships(prev => {
      const next = prev.map(s => s.id === updated.id ? updated : s);
      localStorage.setItem('nextgen_custom_scholarships', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseScholarship(updated).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'UPDATE_SCHOLARSHIP', `Updated scholarship: ${updated.name}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'UPDATE_SCHOLARSHIP', `Updated scholarship: ${updated.name}`);
    }
    showToast({ type: 'success', title: 'Scholarship Updated', message: updated.name });
  };

  const addScholarship = (newSch: Scholarship) => {
    setAllScholarships(prev => {
      const next = [newSch, ...prev];
      localStorage.setItem('nextgen_custom_scholarships', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseScholarship(newSch).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'ADD_SCHOLARSHIP', `Added scholarship: ${newSch.name}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'ADD_SCHOLARSHIP', `Created scholarship: ${newSch.name}`);
    }
    showToast({ type: 'success', title: 'Scholarship Added', message: newSch.name });
  };

  const deleteScholarship = (id: string) => {
    setAllScholarships(prev => {
      const next = prev.filter(s => s.id !== id);
      localStorage.setItem('nextgen_custom_scholarships', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      deleteSupabaseScholarship(id).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'DELETE_SCHOLARSHIP', `Removed scholarship: ${id}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'DELETE_SCHOLARSHIP', `Removed scholarship: ${id}`);
    }
    showToast({ type: 'info', title: 'Scholarship Removed', message: id });
  };

  // Mentors CRUD (Admin controls)
  const addMentor = (newMentor: Mentor) => {
    setAllMentors(prev => {
      const next = [newMentor, ...prev];
      localStorage.setItem('nextgen_verified_mentors', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseMentor(newMentor).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'ADD_MENTOR', `Verified mentor: ${newMentor.name}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'ADD_MENTOR', `Verified and added mentor: ${newMentor.name}`);
    }
    showToast({ type: 'success', title: 'Mentor Profile Added', message: `${newMentor.name} is now published.` });
  };

  const updateMentor = (updated: Mentor) => {
    setAllMentors(prev => {
      const next = prev.map(m => m.id === updated.id ? updated : m);
      localStorage.setItem('nextgen_verified_mentors', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      upsertSupabaseMentor(updated).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'UPDATE_MENTOR', `Updated mentor: ${updated.name}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'UPDATE_MENTOR', `Updated mentor: ${updated.name}`);
    }
    showToast({ type: 'success', title: 'Mentor Updated', message: updated.name });
  };

  const deleteMentor = (id: string) => {
    setAllMentors(prev => {
      const next = prev.filter(m => m.id !== id);
      localStorage.setItem('nextgen_verified_mentors', JSON.stringify(next));
      return next;
    });
    if (isDatabaseConfigured) {
      deleteSupabaseMentor(id).catch(() => {});
      insertSupabaseAuditLog(session?.user?.email || 'admin', 'DELETE_MENTOR', `Removed mentor: ${id}`);
    }
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'DELETE_MENTOR', `Removed mentor: ${id}`);
    }
    showToast({ type: 'info', title: 'Mentor Removed', message: id });
  };

  // Exams CRUD
  const updateExam = (updated: EntranceExamTimeline) => {
    setAllExams(prev => {
      const next = prev.map(e => e.id === updated.id ? updated : e);
      localStorage.setItem('nextgen_exams_data', JSON.stringify(next));
      return next;
    });
    if (session?.user?.role === 'admin') {
      logAdminAction(session.user.email, 'UPDATE_EXAM', `Updated exam schedule: ${updated.name}`);
    }
    showToast({ type: 'success', title: 'Exam Updated', message: updated.name });
  };

  // Student Actions
  const toggleSaveCareer = (careerId: string) => {
    updateStudentProfile(prev => {
      const isSaved = prev.savedCareers.includes(careerId);
      const nextSaved = isSaved
        ? prev.savedCareers.filter(id => id !== careerId)
        : [...prev.savedCareers, careerId];

      showToast({
        type: isSaved ? 'info' : 'success',
        title: isSaved ? 'Removed from Dashboard' : 'Saved to Dashboard',
        message: isSaved ? 'Career removed from your shortlist.' : 'Career added to your personal dashboard.'
      });

      return { ...prev, savedCareers: nextSaved };
    });
  };

  const toggleRoadmapTask = (careerId: string, taskId: string) => {
    updateStudentProfile(prev => {
      const currentTasks = prev.completedRoadmapTasks[careerId] || [];
      const isDone = currentTasks.includes(taskId);
      const nextTasks = isDone
        ? currentTasks.filter(id => id !== taskId)
        : [...currentTasks, taskId];

      return {
        ...prev,
        completedRoadmapTasks: {
          ...prev.completedRoadmapTasks,
          [careerId]: nextTasks
        }
      };
    });
  };

  const saveRoadmapNotes = (careerId: string, notes: string) => {
    updateStudentProfile(prev => ({
      ...prev,
      customRoadmapNotes: {
        ...prev.customRoadmapNotes,
        [careerId]: notes
      }
    }));
    showToast({ type: 'success', title: 'Notes Saved', message: 'Personal roadmap notes updated.' });
  };

  const togglePinExam = (examName: string) => {
    updateStudentProfile(prev => {
      const isPinned = prev.pinnedExams.includes(examName);
      const nextPinned = isPinned
        ? prev.pinnedExams.filter(n => n !== examName)
        : [...prev.pinnedExams, examName];

      showToast({
        type: 'info',
        title: isPinned ? 'Unpinned' : 'Exam Pinned',
        message: `${examName} ${isPinned ? 'removed from' : 'pinned to'} your dashboard.`
      });

      return { ...prev, pinnedExams: nextPinned };
    });
  };

  // Comparisons
  const addToCompare = (careerId: string) => {
    if (compareCareerIds.includes(careerId)) return;
    if (compareCareerIds.length >= 3) {
      showToast({ type: 'warning', title: 'Comparison Limit', message: 'You can compare up to 3 careers at once.' });
      return;
    }
    setCompareCareerIds(prev => [...prev, careerId]);
    showToast({ type: 'success', title: 'Added to Comparison', message: 'Open Compare dock to view side by side.' });
  };

  const removeFromCompare = (careerId: string) => {
    setCompareCareerIds(prev => prev.filter(id => id !== careerId));
  };

  const clearCompare = () => setCompareCareerIds([]);

  // Mentorship Session Request
  const requestSession = (req: Omit<MentorshipSession, 'id' | 'status'>) => {
    const newSession: MentorshipSession = {
      ...req,
      id: `session-${Date.now()}`,
      status: 'Requested'
    };
    const nextSessions = [newSession, ...mentorshipSessions];
    setMentorshipSessions(nextSessions);
    saveMentorshipSessions(nextSessions);
    if (isDatabaseConfigured) {
      insertSupabaseMentorshipSession(newSession).catch(() => {});
    }
    showToast({
      type: 'success',
      title: 'Mentorship Session Requested',
      message: `Your guidance request has been submitted to ${req.mentorName}.`
    });
  };

  const updateSessionStatus = (sessionId: string, status: MentorshipSession['status']) => {
    const nextSessions = mentorshipSessions.map(s => s.id === sessionId ? { ...s, status } : s);
    setMentorshipSessions(nextSessions);
    saveMentorshipSessions(nextSessions);
    if (isDatabaseConfigured) {
      updateSupabaseMentorshipStatus(sessionId, status).catch(() => {});
    }
    showToast({ type: 'info', title: 'Session Updated', message: `Status changed to ${status}.` });
  };

  return (
    <AppContext.Provider
      value={{
        session,
        currentUser,
        userRole,
        loginStudent,
        registerStudent,
        loginAdmin,
        logout,
        authMode,
        setAuthMode,
        openAuth,
        language,
        setLanguage,
        t,
        translateCategory: (cat: string) => translateCategory(cat, language),
        translateSector: (sector: string) => translateSector(sector, language),
        translateRiasec: (dim: string) => translateRiasec(dim, language),
        translateStream: (stream: string) => translateStream(stream, language),
        translateStreamPool: (pool: string) => translateStreamPool(pool, language),
        translateBudgetTier: (tier: string) => translateBudgetTier(tier, language),
        translateScholarshipCategory: (cat: string) => translateScholarshipCategory(cat, language),
        translateSubject: (subj: string) => translateSubject(subj, language),
        translateStrength: (str: string) => translateStrength(str, language),
        translateEducationLevel: (lvl: string) => translateEducationLevel(lvl, language),
        translationOverrides,
        setTranslationOverrides,
        studentProfile,
        updateStudentProfile,
        resetProfile,
        currentRoute,
        setCurrentRoute,
        allCareers,
        recommendations,
        topRecommendations,
        updateCareer,
        addCareer,
        deleteCareer,
        allScholarships,
        updateScholarship,
        addScholarship,
        deleteScholarship,
        allMentors,
        addMentor,
        updateMentor,
        deleteMentor,
        allExams,
        updateExam,
        activeCareerDetail,
        setActiveCareerDetail,
        compareCareerIds,
        addToCompare,
        removeFromCompare,
        clearCompare,
        dayInLifeCareer,
        setDayInLifeCareer,
        roiCareer,
        setRoiCareer,
        activeRoadmapCareerId,
        setActiveRoadmapCareerId,
        openCareerRoadmap,
        toggleSaveCareer,
        toggleRoadmapTask,
        saveRoadmapNotes,
        togglePinExam,
        mentorshipSessions,
        requestSession,
        updateSessionStatus,
        isDatabaseConfigured,
        seedDatabaseToSupabase,
        refreshFromSupabase,
        isChatbotOpen,
        setIsChatbotOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
