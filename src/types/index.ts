// NextGen Navigators - Professional Enterprise Type Definitions

export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  passwordHash: string;
  salt: string;
  createdAt: string;
  lastLogin?: string;
}

export interface AuthSession {
  token: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: UserRole;
  };
  expiresAt: number;
}

export interface AdminAuditLog {
  id: string;
  adminEmail: string;
  action: string;
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export type EducationLevel = 'Class 8-10' | 'Class 11-12' | 'Diploma / ITI' | 'Undergraduate' | 'Vocational';

export type BudgetTier = 'low' | 'medium' | 'high' | 'scholarship_needed';

export interface RIASECScore {
  R: number; // Realistic
  I: number; // Investigative
  A: number; // Artistic
  S: number; // Social
  E: number; // Enterprising
  C: number; // Conventional
}

export type RIASECType = keyof RIASECScore;

export type AssessmentCategory = 
  | 'comprehensive'
  | 'logical'
  | 'technical'
  | 'creative'
  | 'social'
  | 'numerical';

export interface AssessmentQuestion {
  id: number;
  question: string;
  hindiQuestion?: string;
  kannadaQuestion?: string;
  category: AssessmentCategory;
  dimension: 'Interests' | 'Aptitude' | 'Subject Preferences' | 'Work-Style' | 'Values & Motivations' | 'Environment';
  riasecTarget: RIASECType;
  options: {
    text: string;
    hindiText?: string;
    kannadaText?: string;
    score: number; // 1 to 5 scale
  }[];
}

export interface DayInLifeScenario {
  id: string;
  title: string;
  context: string;
  challenge: string;
  options: {
    label: string;
    explanation: string;
    isOptimal: boolean;
  }[];
}

export interface CareerSalaryData {
  entryLevel: string; // e.g. "₹4.5 - ₹8.0 LPA" (0-2 Years)
  midLevel: string;   // e.g. "₹10.0 - ₹22.0 LPA" (3-7 Years)
  experienced: string;// e.g. "₹25.0+ LPA" (8+ Years)
  source: string;     // e.g. "National Career Service (NCS) & AmbitionBox Benchmark 2026"
  lastUpdated: string;// e.g. "October 2026"
  factorsAffectingPay: string[]; // e.g. ["Metro vs Tier-2 City", "Core AI vs Support Services", "Product vs Agency"]
  isOfficialData: boolean;
}

export interface Career {
  id: string;
  title: string;
  hindiTitle?: string;
  kannadaTitle?: string;
  category: string; // 14 Sectors
  sector: string;
  tagline: string;
  description: string;
  dailyResponsibilities: string[];
  riasecWeights: RIASECScore;
  primaryRiasec: RIASECType[];
  requiredSchoolSubjects: string[];
  recommended11_12Streams: string[];
  coreSkills: string[];
  softSkills: string[];
  
  // Pathways
  ugPathway: {
    degrees: string[];
    durationYears: string;
    steps: string[];
  };
  diplomaPathway: {
    available: boolean;
    name: string;
    duration: string;
    details: string;
  };
  vocationalLowCostPathway: {
    available: boolean;
    name: string;
    institutes: string;
    costPerYear: string;
    details: string;
  };
  
  // Exams & Admissions
  entranceExams: {
    name: string;
    body: string;
    eligibility: string;
    officialWebsite: string;
    timeline: string;
  }[];
  
  // Financial & Salary
  studyDuration: string;
  estimatedCost: {
    govtColleges: string;
    privateTier2: string;
    privateTier1: string;
    openLearningGovt: string;
  };
  salary: CareerSalaryData;
  indicativeSalary?: {
    entry: string;
    midLevel: string;
    experienced: string;
    sourceNote: string;
  };
  
  futureSkillTrends: string[];
  officialPortalLinks: {
    name: string;
    url: string;
    type: 'NCS' | 'AICTE' | 'UGC' | 'Skill India' | 'SWAYAM' | 'NCERT' | 'Govt Portal';
  }[];
  
  dayInTheLifeScenarios: DayInLifeScenario[];
  demandTrend: 'High Growth' | 'Stable' | 'Emerging' | 'Rapidly Evolving';
  isVerifiedByAdmin: boolean;
  futureOpportunities?: string;
}

export interface StudentProfile {
  id: string;
  userId?: string;
  fullName: string;
  age: number;
  gender?: string;
  classLevel: EducationLevel;
  guardianConsent: boolean;
  schoolName?: string;
  city?: string;
  state?: string;
  preferredLanguage: string;
  
  // Academics
  preferredSubjects: string[];
  challengingSubjects: string[];
  academicScoreRange: string;
  selectedStreamNEP?: string[];
  
  // Strengths & Work Style
  interests: string[];
  hobbies: string[];
  selfReportedStrengths: string[];
  preferredWorkActivities: string[];
  learningStyle: 'Visual' | 'Practical/Hands-on' | 'Theoretical' | 'Mixed';
  
  // Practical & Financial
  budgetTier: BudgetTier;
  maxFamilyAnnualContribution: number;
  studyLocationPreference: string;
  willingnessToRelocate: boolean;
  longTermAspirations: string;
  
  // Dynamic Assessment State
  riasecScores: RIASECScore;
  categoryAptitudeScores?: Record<AssessmentCategory, number>;
  activeAssessmentCategory?: AssessmentCategory;
  assessmentCompleted: boolean;
  assessmentDate?: string;
  
  savedCareers: string[]; // Career IDs
  completedRoadmapTasks: Record<string, string[]>; // careerId -> taskIds[]
  customRoadmapNotes: Record<string, string>; // careerId -> notes
  pinnedExams: string[]; // exam names
  scenarioFeedback: Record<string, 'loved' | 'neutral' | 'disliked'>;
  
  // Skills & Resume Portfolio
  skillsInventory: {
    skillName: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    source: string;
    verified: boolean;
  }[];
  softSkillsInventory?: string[];
  educationHistory?: {
    schoolOrCollege: string;
    qualification: string;
    yearOfPassing: string;
    gradePercentage: string;
  }[];
  achievements?: string[];
  certifications?: {
    name: string;
    issuer: string;
    year: string;
  }[];
  languagesKnown?: string[];
  experienceLogged?: {
    roleTitle: string;
    organization: string;
    duration: string;
    description: string;
  }[];
  projectsLogged: {
    id: string;
    title: string;
    description: string;
    skillsUsed: string[];
    linkOrProof?: string;
  }[];
}

export interface MentorshipSession {
  id: string;
  studentId: string;
  studentName: string;
  mentorId: string;
  mentorName: string;
  mentorRole: string;
  mentorOrg: string;
  topic: string;
  requestedDate: string;
  preferredTime: string;
  status: 'Requested' | 'Confirmed' | 'Completed' | 'Rescheduled';
  meetingLink?: string;
  studentQuestion: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  organization: string;
  sector: string;
  qualifications: string;
  experienceYears: number;
  avatar: string;
  bio: string;
  expertiseTags: string[];
  languagesSpoken: string[];
  availability: string;
  bookingUrl?: string;
  isVerified: boolean;
  addedByAdminDate: string;
}

export interface Scholarship {
  id: string;
  name: string;
  hindiName?: string;
  kannadaName?: string;
  provider: string;
  educationLevel: string;
  targetGroup: string;
  benefits: string;
  amountDetails: string;
  eligibilityCriteria: string[];
  applicationWindow: string; // e.g. "August - November annually" or "Date to be announced"
  requiredDocuments: string[];
  officialPortal: string;
  category: 'Central Govt' | 'State Govt' | 'AICTE / Technical' | 'Merit-cum-Means' | 'Girl Child' | 'Vocational';
  lastVerifiedDate: string; // e.g. "October 2026"
  isVerified: boolean;
}

export interface EntranceExamTimeline {
  id: string;
  name: string;
  fullName: string;
  purpose: string;
  eligibleLevel: string;
  conductedBy: string;
  applicableCareers: string[];
  typicalRegistrationWindow: string;
  examMonth: string;
  isAnnounced: boolean;
  unannouncedNotice?: string;
  eligibility: string;
  examPattern: string;
  officialLink: string;
  lastVerifiedDate: string;
  freePrepResources: {
    title: string;
    url: string;
    type: 'NCERT Exemplar' | 'NTA Abhyas' | 'SWAYAM Prabha' | 'DIKSHA' | 'Open Source';
  }[];
  keyMilestones: {
    label: string;
    targetMonth: string;
    done: boolean;
  }[];
}

export interface CareerRecommendationMatch {
  career: Career;
  overallScore: number; // 0 - 100%
  breakdown: {
    assessmentMatch: number;
    subjectMatch: number;
    skillFit: number;
    pathwayFit: number;
  };
  scoringMethodExplained: string;
  matchReasons: string[];
  requiredEducation: string;
  requiredSkills: string[];
  relevantSubjects: string[];
  possibleDegrees: string[];
  entranceExams: string[];
  alternativePathways: string[];
  futureOpportunities: string;
  potentialChallenges: string[];
  lowCostAlternativeAdvice: string;
  scholarshipOpportunities: string[];
}
