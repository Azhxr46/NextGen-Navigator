import { StudentProfile, UserRole, User, AuthSession, MentorshipSession } from '../types';

const STORAGE_KEYS = {
  ACTIVE_SESSION: 'nextgen_active_session',
  REGISTERED_USERS: 'nextgen_registered_users',
  STUDENT_PROFILE_PREFIX: 'nextgen_student_profile_',
  SAVED_CAREERS_PREFIX: 'nextgen_saved_careers_',
  MENTORSHIP_SESSIONS: 'nextgen_mentorship_sessions',
  LANGUAGE: 'nextgen_language'
};

export const EMPTY_STUDENT_PROFILE: StudentProfile = {
  id: 'guest-profile',
  fullName: 'New Student',
  age: 16,
  classLevel: 'Class 11-12',
  guardianConsent: true,
  preferredLanguage: 'en',
  preferredSubjects: [],
  challengingSubjects: [],
  academicScoreRange: '70-85%',
  interests: [],
  hobbies: [],
  selfReportedStrengths: [],
  preferredWorkActivities: [],
  learningStyle: 'Mixed',
  budgetTier: 'medium',
  maxFamilyAnnualContribution: 50000,
  studyLocationPreference: 'Karnataka / Home State',
  willingnessToRelocate: false,
  longTermAspirations: '',
  riasecScores: { R: 20, I: 20, A: 20, S: 20, E: 20, C: 20 },
  assessmentCompleted: false,
  savedCareers: [],
  completedRoadmapTasks: {},
  customRoadmapNotes: {},
  pinnedExams: ['exam-kcet-kea'],
  scenarioFeedback: {},
  skillsInventory: [],
  projectsLogged: []
};

export function loadActiveSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
    if (!raw) return null;
    const session: AuthSession = JSON.parse(raw);
    if (session.expiresAt && session.expiresAt > Date.now()) {
      return session;
    }
    // Expired
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  } catch {}
  return null;
}

export function saveActiveSession(session: AuthSession | null): void {
  try {
    if (!session) {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    } else {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
    }
  } catch {}
}

export function loadStudentProfile(userId: string): StudentProfile {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.STUDENT_PROFILE_PREFIX}${userId}`);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    ...EMPTY_STUDENT_PROFILE,
    id: `profile-${userId}`,
    userId
  };
}

export function saveStudentProfile(profile: StudentProfile, userId: string): void {
  try {
    localStorage.setItem(`${STORAGE_KEYS.STUDENT_PROFILE_PREFIX}${userId}`, JSON.stringify(profile));
  } catch {}
}

export function loadMentorshipSessions(): MentorshipSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MENTORSHIP_SESSIONS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

export function saveMentorshipSessions(sessions: MentorshipSession[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.MENTORSHIP_SESSIONS, JSON.stringify(sessions));
  } catch {}
}

export function loadStoredLanguage(): 'en' | 'hi' | 'kn' {
  try {
    const lang = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (lang === 'en' || lang === 'hi' || lang === 'kn') return lang;
  } catch {}
  return 'en';
}

export function saveStoredLanguage(lang: 'en' | 'hi' | 'kn'): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch {}
}

export function loadStoredTranslationOverrides(): Record<string, any> {
  try {
    const raw = localStorage.getItem('nextgen_translation_overrides');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredTranslationOverrides(overrides: Record<string, any>): void {
  try {
    localStorage.setItem('nextgen_translation_overrides', JSON.stringify(overrides));
  } catch {}
}
