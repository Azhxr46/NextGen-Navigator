// scripts/buildComprehensiveTranslations.js
import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'src', 'utils', 'translations.ts');

const content = `// NextGen Navigators - Production Multilingual Translation Architecture
// Fully supporting English ('en'), Hindi ('hi'), and Kannada ('kn') across 100% of the platform.

export type Language = 'en' | 'hi' | 'kn';
export type SupportedLanguage = Language;

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  subTagline: string;
  
  nav: {
    home: string;
    assessment: string;
    recommendations: string;
    explorer: string;
    simulator: string;
    roadmap: string;
    roi: string;
    scholarships: string;
    mentorship: string;
    exams: string;
    resume: string;
    dashboard: string;
    admin: string;
    contact: string;
    login: string;
    register: string;
    logout: string;
    adminLogin: string;
    quickSearch: string;
    allTools: string;
    studentAccount: string;
    mainNav: string;
    additionalTools: string;
    account: string;
    selectLanguage: string;
  };

  actions: {
    startAssessment: string;
    exploreCareers: string;
    saveCareer: string;
    saved: string;
    compare: string;
    viewRoadmap: string;
    downloadResume: string;
    submit: string;
    cancel: string;
    filter: string;
    search: string;
    learnMore: string;
    viewDetails: string;
    readMore: string;
    reset: string;
    applyNow: string;
    downloadPdf: string;
    bookSession: string;
    close: string;
    saveNotes: string;
    retake: string;
    confirm: string;
  };

  common: {
    loading: string;
    error: string;
    success: string;
    verified: string;
    official: string;
    disclaimer: string;
    optional: string;
    required: string;
    yes: string;
    no: string;
    all: string;
    completed: string;
    inProgress: string;
    pending: string;
    confirmed: string;
    notStarted: string;
    status: string;
    action: string;
    date: string;
    amount: string;
    role: string;
    sortBy: string;
    searchPlaceholder: string;
    noResults: string;
    viewAll: string;
    back: string;
    next: string;
    previous: string;
    finish: string;
    select: string;
    years: string;
    months: string;
    lakhsPerAnnum: string;
  };

  landing: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    ctaAssessment: string;
    ctaExplorer: string;
    trustZeroFake: string;
    trustOfficialData: string;
    trustNepAligned: string;
    trustFree: string;
    statCareers: string;
    statScholarships: string;
    statExams: string;
    statSalaries: string;
    featureHeading: string;
    featureSubheading: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerBtn: string;
  };

  auth: {
    studentLoginTitle: string;
    studentLoginSubtitle: string;
    studentRegisterTitle: string;
    studentRegisterSubtitle: string;
    adminLoginTitle: string;
    adminLoginSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    signInBtn: string;
    registerBtn: string;
    adminSignInBtn: string;
    noAccount: string;
    haveAccount: string;
    createOne: string;
    loginHere: string;
    adminNotice: string;
    loginSuccess: string;
    registerSuccess: string;
    adminSuccess: string;
    logoutSuccess: string;
    invalidCreds: string;
    fillAllFields: string;
    passwordMismatch: string;
    passwordTooShort: string;
  };

  onboarding: {
    stepOf: string;
    skipToAssessment: string;
    step1Title: string;
    step1Desc: string;
    privacyGuaranteeTitle: string;
    privacyPoint1: string;
    privacyPoint2: string;
    privacyPoint3: string;
    privacyPoint4: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    schoolLabel: string;
    schoolPlaceholder: string;
    consentText: string;
    consentWarning: string;
    step2Title: string;
    step2Desc: string;
    academicStageLabel: string;
    schoolStreamLabel: string;
    step3Title: string;
    step3Desc: string;
    preferredSubjectsLabel: string;
    challengingSubjectsLabel: string;
    strengthsLabel: string;
    step4Title: string;
    step4Desc: string;
    budgetHeading: string;
    careerPreferencesHeading: string;
    profileUpdatedToast: string;
    finishAndAssessBtn: string;
    nextStepBtn: string;
    prevStepBtn: string;
  };

  dashboard: {
    title: string;
    subtitle: string;
    welcomeUser: string;
    welcomeNewUser: string;
    completeProfilePrompt: string;
    mySavedCareers: string;
    assessmentResults: string;
    myRoadmap: string;
    mySkills: string;
    noSavedCareers: string;
    noAssessmentsYet: string;
    activeProfile: string;
    profileLevel: string;
    profileBudget: string;
    assessmentTab: string;
    savedCareersTab: string;
    roadmapTab: string;
    sessionsTab: string;
    takeTestBtn: string;
    browseCareersBtn: string;
    riasecScoresTitle: string;
    topMatch: string;
    retakeAssessment: string;
    milestonesCompleted: string;
  };

  explorer: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterSector: string;
    filterRiasec: string;
    filterBudget: string;
    sortBy: string;
    sortAlphabetical: string;
    sortSalaryHigh: string;
    sortDurationLow: string;
    showingResults: string;
    ofCareers: string;
    noResultsTitle: string;
    noResultsDesc: string;
    resetFilters: string;
    entrySalary: string;
    studyDuration: string;
    recommendedStream: string;
    alternativeLowCost: string;
  };

  recommendations: {
    title: string;
    subtitle: string;
    matchScore: string;
    primaryReasons: string;
    overlapSubjects: string;
    riasecAlignment: string;
    viewRoadmapBtn: string;
    viewDossierBtn: string;
    compareBtn: string;
    addToCompare: string;
    removeFromCompare: string;
    compareTrayText: string;
    openCompareModal: string;
    clearCompare: string;
    saveToDashboard: string;
    savedInDashboard: string;
    retakePrompt: string;
    retakeBtn: string;
    noMatchesYet: string;
  };

  assessment: {
    title: string;
    subtitle: string;
    questionCount: string;
    questionOf: string;
    completed: string;
    dimension: string;
    nextBtn: string;
    prevBtn: string;
    finishBtn: string;
    ethicalNotice: string;
    liveScores: string;
    realisticLabel: string;
    investigativeLabel: string;
    artisticLabel: string;
    socialLabel: string;
    enterprisingLabel: string;
    conventionalLabel: string;
  };

  roadmap: {
    title: string;
    subtitle: string;
    switchCareer: string;
    overallProgress: string;
    completedMilestones: string;
    remainingMilestones: string;
    markComplete: string;
    markIncomplete: string;
    customNotes: string;
    notesPlaceholder: string;
    saveNotes: string;
    notesSaved: string;
    downloadRoadmap: string;
    keyResources: string;
  };

  roi: {
    title: string;
    subtitle: string;
    selectCareer: string;
    benchmarkSalary: string;
    tuitionEstimates: string;
    govtCollege: string;
    privateCollege: string;
    deemedCollege: string;
    annualFees: string;
    totalDegreeCost: string;
    breakEvenYears: string;
    salarySource: string;
    disclaimer: string;
    scholarshipTip: string;
  };

  exams: {
    title: string;
    subtitle: string;
    searchExams: string;
    filterStream: string;
    registrationWindow: string;
    examWindow: string;
    conductedBy: string;
    eligibilityCriteria: string;
    examPattern: string;
    officialPortal: string;
    freeResources: string;
    pinExam: string;
    unpinExam: string;
    pinnedExams: string;
  };

  scholarships: {
    title: string;
    subtitle: string;
    searchScholarships: string;
    categoryFilter: string;
    benefitAmount: string;
    eligibility: string;
    deadline: string;
    officialLink: string;
    applyOnline: string;
    requiredDocuments: string;
    cautionMiddlemen: string;
  };

  mentorship: {
    title: string;
    subtitle: string;
    searchMentors: string;
    requestSessionBtn: string;
    expertise: string;
    education: string;
    experience: string;
    yearsExp: string;
    modalTitle: string;
    mentorName: string;
    selectDate: string;
    selectTime: string;
    sessionPurpose: string;
    purposePlaceholder: string;
    confirmBooking: string;
    bookingSuccess: string;
    mySessions: string;
    noSessions: string;
  };

  resume: {
    title: string;
    subtitle: string;
    personalInfo: string;
    academicSummary: string;
    skillsSection: string;
    projectsSection: string;
    certificationsSection: string;
    experienceSection: string;
    languagesSection: string;
    exportPdf: string;
    printPreview: string;
    addSkill: string;
    addProject: string;
    editorTab: string;
    previewTab: string;
    techSkillsTitle: string;
    softSkillsTitle: string;
    languagesTitle: string;
    educationTitle: string;
    addTechSkillBtn: string;
    addSoftSkillBtn: string;
    addLanguageBtn: string;
    addEducationBtn: string;
    addCertificationBtn: string;
    schoolNamePlaceholder: string;
    degreePlaceholder: string;
    yearPlaceholder: string;
    scorePlaceholder: string;
    projectTitlePlaceholder: string;
    projectDescPlaceholder: string;
    projectSkillsPlaceholder: string;
    certNamePlaceholder: string;
    certIssuerPlaceholder: string;
    atsNotice: string;
    emptySkills: string;
    emptyProjects: string;
    emptyEducation: string;
  };

  simulator: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    compatibilityRating: string;
    lowCostAlternative: string;
    estimatedSavings: string;
    realtimeImpact: string;
    fullyEligible: string;
    fullyEligibleDesc: string;
    partialMatch: string;
    partialMatchDesc: string;
    lockedOut: string;
    lockedOutDesc: string;
    unlockedBadge: string;
    bridgeBadge: string;
    lockedBadge: string;
    missingPrereq: string;
    mathWarningTitle: string;
    mathWarningDesc: string;
    mathAlternative: string;
    bioWarningTitle: string;
    bioWarningDesc: string;
  };

  chatbot: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    verifiedBadge: string;
    onlineBadge: string;
    clearChat: string;
    chatCleared: string;
    copy: string;
    copied: string;
    continuousHint: string;
    modelLabel: string;
    inputPlaceholder: string;
    send: string;
    readAloud: string;
    stopSpeaking: string;
    quickChips: string[];
  };

  footer: {
    aboutTitle: string;
    aboutText: string;
    quickLinksTitle: string;
    legalTitle: string;
    legalText: string;
    contactTitle: string;
    copyright: string;
  };

  contact: {
    title: string;
    subtitle: string;
    name: string;
    field: string;
    purpose: string;
    email: string;
    phone: string;
    location: string;
    institutionalIdentity: string;
    aboutPlatformTitle: string;
    aboutPlatformDesc: string;
    commitmentTitle: string;
    commitmentDesc: string;
    coDeveloped: string;
    exploreCareersBtn: string;
  };

  dayInLife: {
    badge: string;
    subheading: string;
    actionProtocol: string;
    explanationTitle: string;
    nextScenario: string;
    finishSimulation: string;
    feedbackQuestion: string;
    lovedIt: string;
    neutral: string;
    disliked: string;
    close: string;
  };

  dossier: {
    headerTitle: string;
    headerSubtitle: string;
    printBtn: string;
    letterheadTitle: string;
    generatedDate: string;
    verifiedBadge: string;
    privacyNote: string;
    studentSnapshot: string;
    nameLabel: string;
    classLabel: string;
    cityLabel: string;
    budgetLabel: string;
    riasecRadarTitle: string;
    topMatchesTitle: string;
    primaryPathwayTitle: string;
    officialNotice: string;
  };

  compare: {
    decisionSynthesisTitle: string;
    optimalMatch: string;
    highestEarning: string;
    advisorRec: string;
    optimalMatchDesc: string;
    highestEarningDesc: string;
    advisorSameDesc: string;
    advisorDiffDesc: string;
    pt1Aptitude: string;
    pt2Salary: string;
    pt3Eligibility: string;
    pt4Duration: string;
    pt5Cost: string;
    pt6Roi: string;
    pt7Exams: string;
    pt8Pathways: string;
    pt9Skills: string;
    pt10Growth: string;
    compatibility: string;
    entryLevel: string;
    required: string;
    remove: string;
  };

  detail: {
    tabOverview: string;
    tabPathways: string;
    tabExams: string;
    tabFuture: string;
    descTitle: string;
    responsibilitiesTitle: string;
    techSkillsTitle: string;
    softSkillsTitle: string;
    highlightsTitle: string;
    academicRoutesTitle: string;
    entranceExamsTitle: string;
    lowCostRouteTitle: string;
    futureSkillsTitle: string;
    govtPortalsTitle: string;
  };

  disclaimers: {
    assessmentNotice: string;
    salaryNotice: string;
    roiNotice: string;
    emptyDirectoryNotice: string;
  };

  admin: {
    portalTitle: string;
    loginPrompt: string;
    manageCareers: string;
    manageScholarships: string;
    manageMentors: string;
    manageExams: string;
    auditLog: string;
    userDirectory: string;
    tabCatalog: string;
    tabScholarships: string;
    tabMentors: string;
    tabExams: string;
    tabTranslations: string;
    tabUsers: string;
    tabAudit: string;
    tabAnalytics: string;
    tabTests: string;
    transManagerTitle: string;
    transManagerDesc: string;
    selectLangToEdit: string;
    selectSectionToEdit: string;
    searchKeys: string;
    keyHeader: string;
    englishOriginal: string;
    localizedValue: string;
    saveChanges: string;
    resetDefaults: string;
    overridesSaved: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    appName: 'NextGen Navigators',
    tagline: 'Discover Your Strengths. Navigate Your Future.',
    subTagline: 'Empowering students across India with verified career pathways, aptitude discovery, and actionable educational roadmaps.',
    nav: {
      home: 'Home',
      assessment: 'Aptitude Test',
      recommendations: 'Recommendations',
      explorer: 'Career Explorer',
      simulator: 'Subject Simulator',
      roadmap: 'Roadmap Tracker',
      roi: 'ROI & Fees',
      scholarships: 'Scholarships',
      mentorship: 'Mentorship',
      exams: 'Entrance Exams',
      resume: 'Resume Builder',
      dashboard: 'Dashboard',
      admin: 'Admin Portal',
      contact: 'Contact Us',
      login: 'Sign In',
      register: 'Register',
      logout: 'Sign Out',
      adminLogin: 'Admin Sign In',
      quickSearch: 'Quick Search (Ctrl + K)',
      allTools: 'Explore All Navigation Modules',
      studentAccount: 'Student Account',
      mainNav: 'Main Navigation',
      additionalTools: 'Additional Tools',
      account: 'Account',
      selectLanguage: 'Choose Language'
    },
    actions: {
      startAssessment: 'Start Free Aptitude Assessment',
      exploreCareers: 'Explore 35+ Verified Careers',
      saveCareer: 'Save Career',
      saved: 'Saved',
      compare: 'Compare',
      viewRoadmap: 'View Roadmap',
      downloadResume: 'Download Resume',
      submit: 'Submit',
      cancel: 'Cancel',
      filter: 'Filter',
      search: 'Search',
      learnMore: 'Learn More',
      viewDetails: 'View Career Dossier',
      readMore: 'Read More',
      reset: 'Reset',
      applyNow: 'Apply Now',
      downloadPdf: 'Download PDF',
      bookSession: 'Book 1-on-1 Guidance Session',
      close: 'Close',
      saveNotes: 'Save Notes',
      retake: 'Retake Assessment',
      confirm: 'Confirm'
    },
    common: {
      loading: 'Loading verified data...',
      error: 'An error occurred. Please try again.',
      success: 'Operation completed successfully.',
      verified: 'Verified Official Data',
      official: 'Official Notice',
      disclaimer: 'Guidance Disclaimer',
      optional: 'Optional',
      required: 'Required',
      yes: 'Yes',
      no: 'No',
      all: 'All',
      completed: 'Completed',
      inProgress: 'In Progress',
      pending: 'Pending Verification',
      confirmed: 'Confirmed',
      notStarted: 'Not Started',
      status: 'Status',
      action: 'Action',
      date: 'Date',
      amount: 'Amount',
      role: 'Role',
      sortBy: 'Sort By',
      searchPlaceholder: 'Search careers, exams, scholarships...',
      noResults: 'No matching records found. Try adjusting your search or filters.',
      viewAll: 'View All',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish Assessment',
      select: 'Select',
      years: 'Years',
      months: 'Months',
      lakhsPerAnnum: 'Lakhs per Annum (LPA)'
    },
    landing: {
      badge: 'Independent Educational Platform',
      heroTitle1: 'Discover Your Strengths.',
      heroTitle2: 'Navigate Your Future.',
      heroSubtitle: 'Empowering Indian students, parents, and educators with verified career pathways, objective RIASEC psychometrics, fee comparisons, and actionable educational planning.',
      ctaAssessment: 'Take Free Aptitude Test',
      ctaExplorer: 'Explore Careers',
      trustZeroFake: 'Zero Sponsored Bias',
      trustOfficialData: 'Verified Govt Data (NCS / AICTE / KEA)',
      trustNepAligned: 'NEP 2020 Multidisciplinary',
      trustFree: '100% Free & Open Access',
      statCareers: '35+ Verified Careers',
      statScholarships: '₹10Cr+ Public Scholarships',
      statExams: '15+ Entrance Exam Radars',
      statSalaries: 'NCS 2026 Salary Aggregates',
      featureHeading: 'Core Platform Pillars',
      featureSubheading: 'Built to empower informed, debt-free educational choices for Indian learners.',
      f1Title: 'Scientific RIASEC Psychometrics',
      f1Desc: 'Multi-dimensional aptitude testing assessing Realistic, Investigative, Artistic, Social, Enterprising, and Conventional strengths.',
      f2Title: 'Transparent Financial ROI & Fees',
      f2Desc: 'Side-by-side cost and payback period comparisons between Government Colleges, Private Universities, and Polytechnic Diplomas.',
      f3Title: 'Entrance Exam Radar & Timelines',
      f3Desc: 'Verified registration windows, syllabus patterns, and links for KCET, COMEDK, JEE, NEET, CUET, and CLAT.',
      f4Title: 'Zero-Debt Scholarship Directories',
      f4Desc: 'Direct links and eligibility checklists for Karnataka SSP, National Scholarship Portal (NSP), AICTE Pragati, and Vidyalakshmi CSIS.',
      bannerTitle: 'Ready to Map Your Educational Journey?',
      bannerSubtitle: 'Take the scientific 5-minute assessment and unlock tailored career pathways, subject suggestions, and roadmap milestones.',
      bannerBtn: 'Start Assessment Now'
    },
    auth: {
      studentLoginTitle: 'Student Sign In',
      studentLoginSubtitle: 'Access your saved career roadmaps, RIASEC aptitude results, and personalized study milestones.',
      studentRegisterTitle: 'Create Student Account',
      studentRegisterSubtitle: 'Join NextGen Navigators to store your career shortlist, learning progress, and exam radars.',
      adminLoginTitle: 'Administrator Sign In',
      adminLoginSubtitle: 'Authorized portal for reviewing career dossiers, verifying scholarships, and audit management.',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. Priya Sharma',
      emailLabel: 'Email Address',
      emailPlaceholder: 'student@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter secure password',
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter password',
      usernameLabel: 'Administrator Username / Email',
      usernamePlaceholder: 'admin@nextgennavigators.in',
      signInBtn: 'Sign In',
      registerBtn: 'Create Account',
      adminSignInBtn: 'Sign In to Admin Portal',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      createOne: 'Create an account',
      loginHere: 'Sign in here',
      adminNotice: 'Passwords are encrypted using client-side cryptographic PBKDF2 hashing. Zero sensitive government IDs are stored.',
      loginSuccess: 'Successfully signed in! Welcome back.',
      registerSuccess: 'Account created successfully! Welcome to NextGen Navigators.',
      adminSuccess: 'Administrator session authenticated.',
      logoutSuccess: 'You have been signed out safely.',
      invalidCreds: 'Invalid credentials. Please verify your email and password.',
      fillAllFields: 'Please fill in all required fields.',
      passwordMismatch: 'Passwords do not match. Please verify and try again.',
      passwordTooShort: 'Password must be at least 6 characters long.'
    },
    onboarding: {
      stepOf: 'Step',
      skipToAssessment: 'Skip to Assessment',
      step1Title: 'Step 1 • Privacy Guarantee',
      step1Desc: 'Privacy-by-Design & Educational Consent',
      privacyGuaranteeTitle: 'Our Strict Student Privacy Guarantee',
      privacyPoint1: 'We NEVER ask for or collect sensitive government IDs (Aadhaar, PAN, Passport).',
      privacyPoint2: 'We NEVER collect caste, religion, or sensitive demographic identifiers.',
      privacyPoint3: 'Your responses are used solely to calculate educational compatibility scores.',
      privacyPoint4: 'All profile information can be edited or deleted by you at any time.',
      fullNameLabel: 'Full Name / Preferred Alias *',
      fullNamePlaceholder: 'e.g. Priya Sharma',
      ageLabel: 'Age *',
      agePlaceholder: 'e.g. 16',
      cityLabel: 'City / District *',
      cityPlaceholder: 'e.g. Bengaluru, Karnataka',
      schoolLabel: 'School / College Name (Optional)',
      schoolPlaceholder: 'e.g. Govt Model Sr Sec School',
      consentText: 'I confirm that I am exploring educational guidance for myself or my child, and I consent to storing my academic preferences locally.',
      consentWarning: 'Please review and confirm guardian consent & privacy acknowledgment to proceed.',
      step2Title: 'Step 2 • Academic Stage',
      step2Desc: 'Tell us where you currently are in your academic journey.',
      academicStageLabel: 'Current Academic Stage *',
      schoolStreamLabel: 'Current / Planned Stream *',
      step3Title: 'Step 3 • Subjects & Strengths',
      step3Desc: 'Highlight the subjects you enjoy and your natural cognitive strengths.',
      preferredSubjectsLabel: 'Subjects You Enjoy / Strong In',
      challengingSubjectsLabel: 'Subjects You Find Challenging',
      strengthsLabel: 'Self-Reported Strengths & Interests',
      step4Title: 'Step 4 • Feasibility & Budget',
      step4Desc: 'Ensure career pathways highlight realistic government fees and low-cost options.',
      budgetHeading: 'Household Education Budget Comfort',
      careerPreferencesHeading: 'Special Interest Sectors (Select all that apply)',
      profileUpdatedToast: 'Profile updated! Proceeding to RIASEC career assessment.',
      finishAndAssessBtn: 'Save Profile & Begin Assessment',
      nextStepBtn: 'Next Step',
      prevStepBtn: 'Previous Step'
    },
    dashboard: {
      title: 'Student Dashboard',
      subtitle: 'Your personalized academic overview, aptitude radar, saved careers, and milestone tracker.',
      welcomeUser: 'Welcome back',
      welcomeNewUser: 'Welcome to your NextGen Navigators Career Control Center!',
      completeProfilePrompt: 'Complete your 5-minute RIASEC aptitude assessment to unlock tailored career recommendations and learning roadmaps.',
      mySavedCareers: 'Saved Careers Shortlist',
      assessmentResults: 'RIASEC Aptitude Profile',
      myRoadmap: 'Milestone Progress Tracker',
      mySkills: 'Skills & Experience Inventory',
      noSavedCareers: 'You have not saved any careers yet. Browse the Career Explorer to bookmark your top pathways!',
      noAssessmentsYet: 'Take the aptitude assessment to populate your scientific RIASEC radar chart.',
      activeProfile: 'Active Student Profile',
      profileLevel: 'Academic Stage',
      profileBudget: 'Budget Tier',
      assessmentTab: 'Aptitude Scores',
      savedCareersTab: 'Saved Shortlist',
      roadmapTab: 'Roadmap Tracker',
      sessionsTab: 'Mentorship Sessions',
      takeTestBtn: 'Take Free Aptitude Test',
      browseCareersBtn: 'Browse Career Explorer',
      riasecScoresTitle: 'Scientific RIASEC Radar',
      topMatch: 'Top Career Recommendation',
      retakeAssessment: 'Retake Assessment',
      milestonesCompleted: 'Milestones Completed'
    },
    explorer: {
      title: 'Career Explorer',
      subtitle: 'Explore 35+ verified Indian career dossiers with verified salary benchmarks, educational pathways, and entrance exam requirements.',
      searchPlaceholder: 'Search careers by title, skills, or industry (e.g. AI, Cyber, Doctor)...',
      filterSector: 'Sector / Industry',
      filterRiasec: 'RIASEC Interest',
      filterBudget: 'Affordability Tier',
      sortBy: 'Sort Careers',
      sortAlphabetical: 'Alphabetical (A - Z)',
      sortSalaryHigh: 'Highest Starting Salary',
      sortDurationLow: 'Shortest Study Duration',
      showingResults: 'Showing',
      ofCareers: 'Verified Careers',
      noResultsTitle: 'No Matching Careers Found',
      noResultsDesc: 'Try widening your search terms or clearing active filters to see all available career profiles.',
      resetFilters: 'Reset All Filters',
      entrySalary: 'Entry Salary (0-2 Yrs)',
      studyDuration: 'Study Duration',
      recommendedStream: 'Recommended 11-12 Stream',
      alternativeLowCost: 'Low-Cost / Zero-Debt Route'
    },
    recommendations: {
      title: 'Tailored Career Matches',
      subtitle: 'Objective career recommendations calibrated against your RIASEC scores, preferred subjects, and budget tier.',
      matchScore: 'Fit Score',
      primaryReasons: 'Why This Matches You',
      overlapSubjects: 'Subject Overlap',
      riasecAlignment: 'RIASEC Alignment',
      viewRoadmapBtn: 'View Learning Roadmap',
      viewDossierBtn: 'View Complete Dossier',
      compareBtn: 'Compare Careers',
      addToCompare: 'Add to Compare',
      removeFromCompare: 'Remove from Compare',
      compareTrayText: 'careers selected for side-by-side comparison',
      openCompareModal: 'Open Side-by-Side Comparison',
      clearCompare: 'Clear Compare Tray',
      saveToDashboard: 'Save Career',
      savedInDashboard: 'Saved to Dashboard',
      retakePrompt: 'Want updated recommendations? Retake the assessment anytime.',
      retakeBtn: 'Retake Aptitude Assessment',
      noMatchesYet: 'Take the RIASEC aptitude assessment to generate personalized career matches!'
    },
    assessment: {
      title: 'Aptitude Assessment',
      subtitle: 'Answer practical situational questions to map your scientific RIASEC strengths without exam stress.',
      questionCount: 'Questions',
      questionOf: 'Question',
      completed: 'Completed',
      dimension: 'Evaluating Dimension',
      nextBtn: 'Next Question',
      prevBtn: 'Previous Question',
      finishBtn: 'Complete & View Matches',
      ethicalNotice: 'Ethical Testing Guarantee: We evaluate problem-solving styles without time pressure. Your responses are not shared with commercial advertisers.',
      liveScores: 'Real-Time RIASEC Vector Analysis',
      realisticLabel: 'Practical, Hands-on, Machinery & Systems',
      investigativeLabel: 'Scientific Inquiry, Research & Problem-Solving',
      artisticLabel: 'Creativity, Visual Arts, Design & Expression',
      socialLabel: 'Helping People, Healthcare, Teaching & Counseling',
      enterprisingLabel: 'Leadership, Persuasion, Business & Startups',
      conventionalLabel: 'Structured Data, Organization, Accounting & Rules'
    },
    roadmap: {
      title: 'Learning Roadmap Tracker',
      subtitle: 'Structured 6-stage milestone tracker guiding you from Class 10/12 subjects to beginner projects and college admissions.',
      switchCareer: 'Select Career Roadmap:',
      overallProgress: 'Roadmap Milestone Completion',
      completedMilestones: 'Completed Milestones',
      remainingMilestones: 'Remaining Milestones',
      markComplete: 'Mark Completed',
      markIncomplete: 'Mark Incomplete',
      customNotes: 'Personal Action Notes',
      notesPlaceholder: 'Write your personalized study schedule, college targets, or question reminders here...',
      saveNotes: 'Save Action Notes',
      notesSaved: 'Your study notes have been saved locally!',
      downloadRoadmap: 'Print / Save Roadmap PDF',
      keyResources: 'Key Recommended Portals'
    },
    roi: {
      title: 'Financial ROI & Fees Calculator',
      subtitle: 'Compare total tuition and living costs against entry-level salary benchmarks across Government, Private, and Polytechnic pathways.',
      selectCareer: 'Select Career to Analyze',
      benchmarkSalary: 'Entry Salary Benchmark',
      tuitionEstimates: 'Tuition & Living Cost Breakdown',
      govtCollege: 'Government College / University',
      privateCollege: 'Private Tier-1/2 Institution',
      deemedCollege: 'Commercial Deemed University',
      annualFees: 'Annual Tuition Fees',
      totalDegreeCost: 'Total Investment (Degree + Living)',
      breakEvenYears: 'Payback / Break-Even Period',
      salarySource: 'National Career Service (NCS) 2026 aggregates',
      disclaimer: 'Salary bands represent verified industry averages. Individual earnings depend on verified competencies, internships, and portfolio quality.',
      scholarshipTip: 'Tip: Government colleges combined with state scholarships (e.g. Karnataka SSP) reduce tuition costs to near-zero.'
    },
    exams: {
      title: 'Entrance Exam Radar',
      subtitle: 'Timelines, syllabus blueprints, and official links for major Indian competitive and college entrance examinations.',
      searchExams: 'Search exams by name or conducting body (e.g. KCET, JEE, NEET, CUET)...',
      filterStream: 'Filter by Stream',
      registrationWindow: 'Typical Registration Window',
      examWindow: 'Examination Month',
      conductedBy: 'Conducted By',
      eligibilityCriteria: 'Eligibility Prerequisites',
      examPattern: 'Test Blueprint & Pattern',
      officialPortal: 'Visit Official Portal',
      freeResources: 'Free Official Prep Portals',
      pinExam: 'Pin to My Radar',
      unpinExam: 'Unpin Exam',
      pinnedExams: 'My Pinned Exam Radars'
    },
    scholarships: {
      title: 'Verified Scholarships Directory',
      subtitle: 'Official government scholarship schemes and interest subsidies to achieve zero-debt higher education.',
      searchScholarships: 'Search scholarships by name, state, or category...',
      categoryFilter: 'Category Filter',
      benefitAmount: 'Annual Benefit',
      eligibility: 'Key Eligibility Criteria',
      deadline: 'Application Window',
      officialLink: 'Apply on Official Portal',
      applyOnline: 'Online Application Available',
      requiredDocuments: 'Mandatory Verification Documents',
      cautionMiddlemen: 'Caution: Government scholarships never charge application fees. Always apply directly through official portals.'
    },
    mentorship: {
      title: 'Verified Mentor Directory',
      subtitle: 'Connect with verified alumni and industry professionals from IITs, IISc, top state colleges, and technology companies.',
      searchMentors: 'Search mentors by industry, role, or background...',
      requestSessionBtn: 'Request Free Guidance Session',
      expertise: 'Core Domain',
      education: 'Alumni Institution',
      experience: 'Industry Experience',
      yearsExp: 'Years Experience',
      modalTitle: 'Schedule 1-on-1 Guidance Session',
      mentorName: 'Selected Mentor',
      selectDate: 'Preferred Session Date',
      selectTime: 'Preferred Time Slot',
      sessionPurpose: 'Session Topic',
      purposePlaceholder: 'Ask specific questions about college preparation, entrance cutoffs, or skill roadmaps...',
      confirmBooking: 'Confirm & Send Request',
      bookingSuccess: 'Guidance request submitted successfully! Mentor will confirm via email.',
      mySessions: 'My Scheduled Sessions',
      noSessions: 'No active mentorship sessions scheduled.'
    },
    resume: {
      title: 'Portfolio & Resume Builder',
      subtitle: 'Generate a clean, ATS-compliant single-page academic CV showcasing your skills, projects, and educational milestones.',
      personalInfo: 'Personal Information',
      academicSummary: 'Academic Profile',
      skillsSection: 'Skills Inventory',
      projectsSection: 'Academic Projects & Proof-of-Work',
      certificationsSection: 'Certifications & Courses',
      experienceSection: 'Internships & Leadership',
      languagesSection: 'Languages Known',
      exportPdf: 'Print / Save as PDF',
      printPreview: 'View Formatted Dossier',
      addSkill: 'Add Skill',
      addProject: 'Add Project',
      editorTab: 'Resume Editor',
      previewTab: 'Live Formatted Preview',
      techSkillsTitle: 'Technical & Academic Competencies',
      softSkillsTitle: 'Interpersonal & Leadership Strengths',
      languagesTitle: 'Languages Known',
      educationTitle: 'Education History',
      addTechSkillBtn: 'Add Technical Skill',
      addSoftSkillBtn: 'Add Soft Skill',
      addLanguageBtn: 'Add Language',
      addEducationBtn: 'Add Educational Record',
      addCertificationBtn: 'Add Certification',
      schoolNamePlaceholder: 'School / College Name (e.g. RNSIT Bangalore)',
      degreePlaceholder: 'Degree / Qualification (e.g. Class 12 Science PCM)',
      yearPlaceholder: 'Year of Passing (e.g. 2026)',
      scorePlaceholder: 'Score / Percentage (e.g. 88%)',
      projectTitlePlaceholder: 'Project Title (e.g. Smart IoT Weather Monitor)',
      projectDescPlaceholder: 'Describe what you built, problems solved, and outcomes...',
      projectSkillsPlaceholder: 'Tools used (e.g. Python, Arduino, Sensors)',
      certNamePlaceholder: 'Certificate Name (e.g. NPTEL Python Programming)',
      certIssuerPlaceholder: 'Issuing Organization (e.g. IIT Madras / SWAYAM)',
      atsNotice: 'Clean, single-column design formatted for university admissions and internship screenings.',
      emptySkills: 'No skills added yet. Add your technical and soft skills above.',
      emptyProjects: 'No projects added yet. Showcase your hands-on assignments and hobbies.',
      emptyEducation: 'No education records added yet.'
    },
    simulator: {
      title: 'Subject Simulator',
      subtitle: 'Simulate NEP-2020 subject combinations to see real-time eligibility impacts across 35+ careers.',
      step1: '1. Select Your School Subject Combination',
      step2: '2. Check Dropping Warnings & Bridge Courses',
      step3: '3. Real-Time Career Eligibility Impact',
      compatibilityRating: 'NEP 2020 Multidisciplinary',
      lowCostAlternative: 'Low-Cost Alternative',
      estimatedSavings: 'Estimated Fee Savings vs Commercial Private Degree:',
      realtimeImpact: 'Real-Time Career Eligibility Impact',
      fullyEligible: '100% Fully Eligible',
      fullyEligibleDesc: 'Your chosen combination meets all mandatory statutory prerequisites.',
      partialMatch: 'Partial Match (Bridge Needed)',
      partialMatchDesc: 'Accessible with an elective switch, diploma lateral entry, or NIOS exam.',
      lockedOut: 'Locked Out',
      lockedOutDesc: 'Mandatory subjects are missing. Alternative pathways are provided.',
      unlockedBadge: 'UNLOCKED',
      bridgeBadge: 'BRIDGE NEEDED',
      lockedBadge: 'LOCKED',
      missingPrereq: 'Missing prerequisite:',
      mathWarningTitle: 'Mathematics Dropped Notice:',
      mathWarningDesc: 'Dropping Mathematics locks out B.Tech Engineering, Actuarial Science, and premier Data Science degrees.',
      mathAlternative: 'You can opt for Applied Mathematics or take NIOS on-demand Math exam anytime.',
      bioWarningTitle: 'Biology Dropped Notice:',
      bioWarningDesc: 'Dropping Biology restricts NEET-UG medical admissions (MBBS, BDS, Ayush). Allied healthcare roles remain accessible.'
    },
    chatbot: {
      title: 'NextGen AI Career Counsellor',
      subtitle: 'Ask anything about courses, colleges, exams, scholarships, or syllabus.',
      welcomeMessage: 'Welcome! I am your NextGen Navigators Career Assistant powered by Google Gemini. How can I guide your educational planning today?',
      verifiedBadge: 'Verified Govt Data',
      onlineBadge: 'Gemini 3.8 AI Online',
      clearChat: 'Clear History',
      chatCleared: 'Chat history cleared.',
      copy: 'Copy Response',
      copied: 'Copied to clipboard!',
      continuousHint: 'Continuous Context Active',
      modelLabel: 'Powered by Google Gemini AI',
      inputPlaceholder: 'Ask about careers, courses, entrance exams, or fees in your language...',
      send: 'Send',
      readAloud: 'Read Aloud',
      stopSpeaking: 'Stop Voice',
      quickChips: [
        'What can I do after Class 10?',
        'How do I enter AI or Cybersecurity?',
        'Affordable & zero-debt college pathways',
        'Which scholarships match my profile?',
        'KCET, JEE & NEET prep strategy'
      ]
    },
    footer: {
      aboutTitle: 'About NextGen Navigators',
      aboutText: 'An independent, non-commercial educational navigation platform empowering Indian students with verified pathways, transparent data, and actionable roadmaps.',
      quickLinksTitle: 'Guidance Modules',
      legalTitle: 'Compliance & Ethics',
      legalText: 'We operate under strict Privacy-by-Design principles. We never collect or store sensitive government IDs (Aadhaar/PAN), caste, or religion. Data is sourced from official portals including NCS, AICTE, KEA, and NTA.',
      contactTitle: 'Campus Office & Contact',
      copyright: 'NextGen Navigators. Educational & Career Guidance Platform. All rights reserved.'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Campus Contact & Guidance Support',
      name: 'Azhar Ahmed Shariff',
      field: 'Developer & Coordinator',
      purpose: 'Have questions about career roadmaps, college fee comparisons, or mentorship? We are here to help.',
      email: 'Email Contact',
      phone: 'Phone Contact',
      location: 'Campus Location',
      institutionalIdentity: 'Institutional Identity & Purpose',
      aboutPlatformTitle: 'About NextGen Navigators',
      aboutPlatformDesc: 'NextGen Navigators is an independent, non-commercial educational guidance platform designed to demystify Indian career pathways. We bridge the critical information gap between school education and university or vocational opportunities.',
      commitmentTitle: 'Our Commitment to Students',
      commitmentDesc: 'We believe every Indian learner deserves transparent, verified data regarding college admissions, entrance exams, and real-world career earnings—unbiased by commercial coaching marketing or high-cost private university ads.',
      coDeveloped: 'Co-developed at RNSIT Bangalore for student community benefit.',
      exploreCareersBtn: 'Explore 35+ Verified Careers'
    },
    dayInLife: {
      badge: '3-Minute Career Sandbox (Micro-Experience)',
      subheading: 'Experience a realistic workplace challenge before committing to this pathway.',
      actionProtocol: 'What is your primary action protocol?',
      explanationTitle: 'Professional Analysis & Feedback:',
      nextScenario: 'Next Workplace Scenario',
      finishSimulation: 'Complete Simulation',
      feedbackQuestion: 'How did this realistic workplace simulation feel to you?',
      lovedIt: 'Loved It! Fits My Thinking',
      neutral: 'Neutral / Acceptable',
      disliked: 'Did Not Enjoy It',
      close: 'Close Simulation'
    },
    dossier: {
      headerTitle: 'NextGen Navigators Career Exploration Dossier',
      headerSubtitle: 'Official student profile and guidance record for academic planning.',
      printBtn: 'Print / Save as PDF',
      letterheadTitle: 'Comprehensive Student Career & Readiness Dossier',
      generatedDate: 'Generated Date',
      verifiedBadge: 'VERIFIED STUDENT DOSSIER',
      privacyNote: 'Strict Privacy Guarantee (No Government IDs / Caste Collected)',
      studentSnapshot: 'Student Profile Snapshot',
      nameLabel: 'Student Name',
      classLabel: 'Academic Stage',
      cityLabel: 'City / District',
      budgetLabel: 'Budget Comfort',
      riasecRadarTitle: 'Scientific RIASEC Aptitude Profile',
      topMatchesTitle: 'Top Career Recommendation Matrix',
      primaryPathwayTitle: 'Primary Educational Pathway & Milestones',
      officialNotice: 'Official Guidance Disclaimer: This document provides academic orientation based on psychometric self-reporting. Verify institutional notifications for formal admission criteria.'
    },
    compare: {
      decisionSynthesisTitle: 'Grounded Decision Synthesis & Suitability Verdict',
      optimalMatch: '✓ Optimal Holistic Match',
      highestEarning: '★ Highest Initial Earning',
      advisorRec: '💡 Advisor Recommendation',
      optimalMatchDesc: 'Matches your RIASEC profile and budget tier with strong compatibility.',
      highestEarningDesc: 'Offers higher starting pay, but requires careful verification of study investment.',
      advisorSameDesc: 'Delivers both top earning power and strongest personal aptitude alignment.',
      advisorDiffDesc: 'Offers superior long-term retention and academic fit based on your preferences.',
      pt1Aptitude: '1. Aptitude & RIASEC Fit',
      pt2Salary: '2. Verified Salary Potential',
      pt3Eligibility: '3. Core Academic Eligibility',
      pt4Duration: '4. Study Duration',
      pt5Cost: '5. Tuition Cost Breakdown',
      pt6Roi: '6. Payback Period',
      pt7Exams: '7. Entrance Exam Requirements',
      pt8Pathways: '8. Low-Cost Alternative',
      pt9Skills: '9. Core Technical Competencies',
      pt10Growth: '10. Market Demand Trend',
      compatibility: 'Compatibility',
      entryLevel: 'Entry',
      required: 'Required',
      remove: 'Remove from comparison'
    },
    detail: {
      tabOverview: 'Overview & Responsibilities',
      tabPathways: 'Academic & Low-Cost Pathways',
      tabExams: 'Entrance Exams & Costs',
      tabFuture: 'Future Skills & Govt Links',
      descTitle: 'Career Description',
      responsibilitiesTitle: 'Typical Daily Responsibilities',
      techSkillsTitle: 'Core Technical Competencies',
      softSkillsTitle: 'Transferable Soft Skills',
      highlightsTitle: 'Career Highlights & Key Takeaways',
      academicRoutesTitle: 'Higher Education Degrees',
      entranceExamsTitle: 'Major Entrance Examinations',
      lowCostRouteTitle: 'Affordable / Zero-Debt Alternative Route',
      futureSkillsTitle: 'Emerging Skill Trends',
      govtPortalsTitle: 'Official Government Information Portals'
    },
    disclaimers: {
      assessmentNotice: 'This aptitude assessment provides educational orientation based on self-reported interest and problem-solving styles. It does not replace certified professional counselling.',
      salaryNotice: 'Salary estimates are compiled from the National Career Service (NCS, Ministry of Labour & Employment) 2026 aggregates.',
      roiNotice: 'Fee projections and payback periods are indicative benchmarks based on state quota and institutional averages.',
      emptyDirectoryNotice: 'Verified profiles only: We do not display unverified entries. Only validated professionals and schemes are listed.'
    },
    admin: {
      portalTitle: 'NextGen Administrative Control Center',
      loginPrompt: 'Authorized administrator credentials required to manage careers, verify scholarships, and review user records.',
      manageCareers: 'Career Catalog Management',
      manageScholarships: 'Scholarship Verification',
      manageMentors: 'Mentor Directory',
      manageExams: 'Exam Radar Management',
      auditLog: 'Security Audit Logs',
      userDirectory: 'Registered Users',
      tabCatalog: 'Careers Catalog',
      tabScholarships: 'Scholarships',
      tabMentors: 'Mentors',
      tabExams: 'Entrance Exams',
      tabTranslations: 'Translations',
      tabUsers: 'Registered Users',
      tabAudit: 'Audit Logs',
      tabAnalytics: 'Platform Analytics',
      tabTests: 'Automated Test Suite',
      transManagerTitle: 'Central Multilingual Translation Manager',
      transManagerDesc: 'Live inspection, editing, and overrides of all platform strings across English, Hindi, and Kannada.',
      selectLangToEdit: 'Select Language to Edit',
      selectSectionToEdit: 'Select Section',
      searchKeys: 'Search Keys or Values',
      keyHeader: 'Translation Key',
      englishOriginal: 'English Reference',
      localizedValue: 'Active Localized Value',
      saveChanges: 'Save Overrides',
      resetDefaults: 'Reset to System Defaults',
      overridesSaved: 'Custom translations successfully saved and applied to website!'
    }
  },

  hi: {
    appName: 'NextGen Navigators',
    tagline: 'अपनी क्षमता पहचानें। अपना भविष्य संवारें।',
    subTagline: 'सत्यापित करियर मार्गों, वैज्ञानिक योग्यता मूल्यांकन और व्यावहारिक शिक्षा रोडमैप के साथ भारतीय विद्यार्थियों का सशक्तिकरण।',
    nav: {
      home: 'होम',
      assessment: 'योग्यता परीक्षण',
      recommendations: 'करियर सिफारिशें',
      explorer: 'करियर एक्सप्लोरर',
      simulator: 'विषय सिम्युलेटर',
      roadmap: 'रोडमैप ट्रैकर',
      roi: 'आरओआई और फीस',
      scholarships: 'छात्रवृत्तियां',
      mentorship: 'मार्गदर्शन / मेंटर्स',
      exams: 'प्रवेश परीक्षाएं',
      resume: 'बायोडाटा / रेज़्युमे',
      dashboard: 'डैशबोर्ड',
      admin: 'व्यवस्थापक पोर्टल',
      contact: 'संपर्क करें',
      login: 'लॉग इन',
      register: 'पंजीकरण',
      logout: 'लॉग आउट',
      adminLogin: 'व्यवस्थापक लॉगिन',
      quickSearch: 'त्वरित खोज (Ctrl + K)',
      allTools: 'सभी नेविगेशन मॉड्यूल देखें',
      studentAccount: 'विद्यार्थी खाता',
      mainNav: 'मुख्य नेविगेशन',
      additionalTools: 'अतिरिक्त उपकरण',
      account: 'खाता',
      selectLanguage: 'भाषा चुनें'
    },
    actions: {
      startAssessment: 'निःशुल्क योग्यता परीक्षण शुरू करें',
      exploreCareers: '35+ सत्यापित करियर देखें',
      saveCareer: 'करियर सुरक्षित करें',
      saved: 'सुरक्षित किया गया',
      compare: 'तुलना करें',
      viewRoadmap: 'रोडमैप देखें',
      downloadResume: 'रेज़्युमे डाउनलोड करें',
      submit: 'जमा करें',
      cancel: 'रद्द करें',
      filter: 'फ़िल्टर',
      search: 'खोजें',
      learnMore: 'और जानें',
      viewDetails: 'करियर विवरण देखें',
      readMore: 'अधिक पढ़ें',
      reset: 'रीसेट करें',
      applyNow: 'आवेदन करें',
      downloadPdf: 'पीडीएफ डाउनलोड करें',
      bookSession: '1-ऑन-1 सत्र बुक करें',
      close: 'बंद करें',
      saveNotes: 'नोट्स सुरक्षित करें',
      retake: 'पुनः परीक्षा दें',
      confirm: 'पुष्टि करें'
    },
    common: {
      loading: 'डेटा लोड हो रहा है...',
      error: 'त्रुटि हुई। कृपया पुनः प्रयास करें।',
      success: 'कार्य सफलतापूर्वक पूरा हुआ।',
      verified: 'सत्यापित आधिकारिक डेटा',
      official: 'आधिकारिक सूचना',
      disclaimer: 'मार्गदर्शन अस्वीकरण',
      optional: 'वैकल्पिक',
      required: 'आवश्यक',
      yes: 'हाँ',
      no: 'नहीं',
      all: 'सभी',
      completed: 'पूर्ण',
      inProgress: 'प्रगति पर',
      pending: 'सत्यापन लंबित',
      confirmed: 'पुष्टीकृत',
      notStarted: 'प्रारंभ नहीं हुआ',
      status: 'स्थिति',
      action: 'कार्रवाई',
      date: 'दिनांक',
      amount: 'राशि',
      role: 'भूमिका',
      sortBy: 'क्रमबद्ध करें',
      searchPlaceholder: 'करियर, परीक्षाएं, छात्रवृत्तियां खोजें...',
      noResults: 'कोई परिणाम नहीं मिला। फ़िल्टर बदल कर देखें।',
      viewAll: 'सभी देखें',
      back: 'पीछे जाएं',
      next: 'आगे बढ़ें',
      previous: 'पिछला',
      finish: 'मूल्यांकन समाप्त करें',
      select: 'चुनें',
      years: 'वर्ष',
      months: 'महीने',
      lakhsPerAnnum: 'लाख रुपये प्रति वर्ष (LPA)'
    },
    landing: {
      badge: 'स्वतंत्र शैक्षिक मार्गदर्शन मंच',
      heroTitle1: 'अपनी क्षमता पहचानें।',
      heroTitle2: 'अपना भविष्य संवारें।',
      heroSubtitle: 'सत्यापित करियर मार्गों, वस्तुनिष्ठ RIASEC योग्यता मूल्यांकन, फीस तुलना और व्यावहारिक शैक्षिक योजना के साथ भारतीय छात्रों एवं अभिभावकों का मार्गदर्शन।',
      ctaAssessment: 'निःशुल्क मूल्यांकन दें',
      ctaExplorer: 'करियर एक्सप्लोर करें',
      trustZeroFake: 'शून्य प्रायोजित पूर्वाग्रह',
      trustOfficialData: 'सत्यापित सरकारी डेटा (NCS / AICTE / KEA)',
      trustNepAligned: 'NEP 2020 बहु-विषयक अनुकूल',
      trustFree: '100% निःशुल्क एवं खुली पहुंच',
      statCareers: '35+ सत्यापित करियर',
      statScholarships: '₹10Cr+ सार्वजनिक छात्रवृत्तियां',
      statExams: '15+ प्रवेश परीक्षा रडार',
      statSalaries: 'NCS 2026 वेतन आंकड़े',
      featureHeading: 'मंच के मुख्य स्तंभ',
      featureSubheading: 'भारतीय छात्रों के लिए सूचित, ऋण-मुक्त शैक्षिक निर्णयों को सक्षम करने के लिए निर्मित।',
      f1Title: 'वैज्ञानिक RIASEC मूल्यांकन',
      f1Desc: 'यथार्थवादी, खोजी, कलात्मक, सामाजिक, उद्यमशील और पारंपरिक ताकतों का व्यापक मूल्यांकन।',
      f2Title: 'पारदर्शी वित्तीय ROI एवं फीस',
      f2Desc: 'सरकारी कॉलेजों, निजी विश्वविद्यालयों और पॉलिटेक्निक डिप्लोमा के बीच लागत और पेबैक अवधि की तुलना।',
      f3Title: 'प्रवेश परीक्षा रडार एवं समय-सीमा',
      f3Desc: 'KCET, COMEDK, JEE, NEET, CUET और CLAT के लिए सत्यापित तिथियां और पाठ्यक्रम।',
      f4Title: 'शून्य-ऋण छात्रवृत्ति निर्देशिका',
      f4Desc: 'कर्नाटक SSP, नेशनल स्कॉलरशिप पोर्टल (NSP) और AICTE प्रगति योजनाओं के सीधे लिंक।',
      bannerTitle: 'अपनी शैक्षिक यात्रा शुरू करने के लिए तैयार हैं?',
      bannerSubtitle: '5 मिनट का वैज्ञानिक परीक्षण पूरा करें और व्यक्तिगत करियर सिफारिशें एवं रोडमैप अनलॉक करें।',
      bannerBtn: 'अभी मूल्यांकन प्रारंभ करें'
    },
    auth: {
      studentLoginTitle: 'विद्यार्थी लॉगिन',
      studentLoginSubtitle: 'अपने सहेजे गए करियर रोडमैप, RIASEC परिणाम और अध्ययन मील के पत्थरों तक पहुंचें।',
      studentRegisterTitle: 'नया विद्यार्थी खाता बनाएं',
      studentRegisterSubtitle: 'करियर शॉर्टलिस्ट, अध्ययन योजना और परीक्षा रडार को सुरक्षित रखने के लिए जुड़ें।',
      adminLoginTitle: 'व्यवस्थापक लॉगिन',
      adminLoginSubtitle: 'करियर विवरण, छात्रवृत्ति सत्यापन और ऑडिट प्रबंधन के लिए अधिकृत पोर्टल।',
      fullNameLabel: 'पूरा नाम',
      fullNamePlaceholder: 'उदा. प्रिया शर्मा',
      emailLabel: 'ईमेल पता',
      emailPlaceholder: 'student@example.com',
      passwordLabel: 'पासवर्ड',
      passwordPlaceholder: 'सुरक्षित पासवर्ड दर्ज करें',
      confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
      confirmPasswordPlaceholder: 'पुनः पासवर्ड दर्ज करें',
      usernameLabel: 'व्यवस्थापक उपयोगकर्ता नाम / ईमेल',
      usernamePlaceholder: 'admin@nextgennavigators.in',
      signInBtn: 'साइन इन करें',
      registerBtn: 'खाता बनाएं',
      adminSignInBtn: 'व्यवस्थापक के रूप में लॉगिन करें',
      noAccount: 'क्या आपके पास खाता नहीं है?',
      haveAccount: 'क्या आपके पास पहले से खाता है?',
      createOne: 'नया खाता बनाएं',
      loginHere: 'यहाँ लॉगिन करें',
      adminNotice: 'पासवर्ड क्रिप्टोग्राफ़िक PBKDF2 हैशिंग द्वारा सुरक्षित हैं। कोई संवेदनशील सरकारी आईडी संग्रहीत नहीं की जाती।',
      loginSuccess: 'सफलतापूर्वक लॉगिन किया गया! पुनः स्वागत है।',
      registerSuccess: 'खाता सफलतापूर्वक बनाया गया! NextGen Navigators में आपका स्वागत है।',
      adminSuccess: 'व्यवस्थापक सत्र सफलतापूर्वक सत्यापित हुआ।',
      logoutSuccess: 'आप सुरक्षित रूप से लॉग आउट हो गए हैं।',
      invalidCreds: 'गलत विवरण। कृपया अपना ईमेल और पासवर्ड जांचें।',
      fillAllFields: 'कृपया सभी आवश्यक फ़ील्ड भरें।',
      passwordMismatch: 'पासवर्ड मेल नहीं खाते। कृपया पुनः प्रयास करें।',
      passwordTooShort: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।'
    },
    onboarding: {
      stepOf: 'चरण',
      skipToAssessment: 'सीधे मूल्यांकन पर जाएं',
      step1Title: 'चरण 1 • गोपनीयता गारंटी',
      step1Desc: 'प्राइवेसी-बाय-डिज़ाइन एवं शैक्षिक सहमति',
      privacyGuaranteeTitle: 'हमारी सख्त विद्यार्थी गोपनीयता गारंटी',
      privacyPoint1: 'हम कभी भी संवेदनशील सरकारी पहचान पत्र (आधार, पैन, पासपोर्ट) एकत्र नहीं करते हैं।',
      privacyPoint2: 'हम जाति, धर्म या संवेदनशील जनसांख्यिकीय पहचानकर्ता कभी नहीं मांगते।',
      privacyPoint3: 'आपकी प्रतिक्रियाओं का उपयोग केवल शैक्षिक अनुकूलता स्कोर गणना के लिए किया जाता है।',
      privacyPoint4: 'सभी प्रोफ़ाइल जानकारी आपके द्वारा किसी भी समय संपादित या हटाई जा सकती है।',
      fullNameLabel: 'पूरा नाम / पसंदीदा उपनाम *',
      fullNamePlaceholder: 'उदा. प्रिया शर्मा',
      ageLabel: 'आयु *',
      agePlaceholder: 'उदा. 16',
      cityLabel: 'शहर / ज़िला *',
      cityPlaceholder: 'उदा. बेंगलुरु, कर्नाटक',
      schoolLabel: 'स्कूल / कॉलेज का नाम (वैकल्पिक)',
      schoolPlaceholder: 'उदा. राजकीय उच्च माध्यमिक विद्यालय',
      consentText: 'मैं पुष्टि करता/करती हूँ कि मैं अपने या अपने बच्चे के लिए मार्गदर्शन ले रहा/रही हूँ, और अपनी प्राथमिकताओं को सहेजने की सहमति देता/देती हूँ।',
      consentWarning: 'आगे बढ़ने के लिए कृपया अभिभावक सहमति और गोपनीयता की पुष्टि करें।',
      step2Title: 'चरण 2 • शैक्षणिक स्तर',
      step2Desc: 'बताएं कि वर्तमान में आपकी शैक्षणिक स्थिति क्या है।',
      academicStageLabel: 'वर्तमान शैक्षणिक स्तर *',
      schoolStreamLabel: 'वर्तमान / नियोजित स्ट्रीम *',
      step3Title: 'चरण 3 • विषय एवं ताकत',
      step3Desc: 'उन विषयों का चयन करें जिनमें आपकी रुचि है और आपकी प्राकृतिक बौद्धिक क्षमताएं।',
      preferredSubjectsLabel: 'पसंदीदा विषय (जिनमें आपकी रुचि है)',
      challengingSubjectsLabel: 'कठिन विषय (जिनमें अतिरिक्त प्रयास चाहिए)',
      strengthsLabel: 'आपकी मुख्य ताकत एवं कौशल',
      step4Title: 'चरण 4 • बजट एवं व्यवहार्यता',
      step4Desc: 'करियर विकल्पों में कम लागत और सरकारी संस्थानों को प्राथमिकता दें।',
      budgetHeading: 'पारिवारिक शिक्षा बजट सीमा',
      careerPreferencesHeading: 'रुचि के प्रमुख क्षेत्र (लागू होने वाले सभी चुनें)',
      profileUpdatedToast: 'प्रोफ़ाइल सहेजी गई! RIASEC करियर मूल्यांकन शुरू हो रहा है।',
      finishAndAssessBtn: 'प्रोफ़ाइल सहेजें एवं मूल्यांकन प्रारंभ करें',
      nextStepBtn: 'अगला चरण',
      prevStepBtn: 'पिछला चरण'
    },
    dashboard: {
      title: 'विद्यार्थी डैशबोर्ड',
      subtitle: 'आपकी व्यक्तिगत शैक्षणिक रूपरेखा, RIASEC रडार, सहेजे गए करियर और मील का पत्थर ट्रैकर।',
      welcomeUser: 'स्वागत है',
      welcomeNewUser: 'NextGen Navigators करियर नियंत्रण केंद्र में आपका स्वागत है!',
      completeProfilePrompt: 'व्यक्तिगत करियर सिफारिशें और अध्ययन रोडमैप अनलॉक करने के लिए अपना 5 मिनट का RIASEC मूल्यांकन पूरा करें।',
      mySavedCareers: 'सहेजे गए करियर की सूची',
      assessmentResults: 'RIASEC योग्यता रूपरेखा',
      myRoadmap: 'मील का पत्थर प्रगति ट्रैकर',
      mySkills: 'कौशल एवं अनुभव भंडार',
      noSavedCareers: 'आपने अभी तक कोई करियर सहेजा नहीं है। पसंदीदा रास्ते चुनने के लिए करियर एक्सप्लोरर देखें!',
      noAssessmentsYet: 'वैज्ञानिक RIASEC रडार चार्ट देखने के लिए योग्यता परीक्षण पूरा करें।',
      activeProfile: 'सक्रिय विद्यार्थी प्रोफ़ाइल',
      profileLevel: 'शैक्षणिक स्तर',
      profileBudget: 'बजट स्तर',
      assessmentTab: 'योग्यता अंक',
      savedCareersTab: 'सहेजी गई सूची',
      roadmapTab: 'रोडमैप ट्रैकर',
      sessionsTab: 'मार्गदर्शन सत्र',
      takeTestBtn: 'निःशुल्क परीक्षण दें',
      browseCareersBtn: 'करियर एक्सप्लोर करें',
      riasecScoresTitle: 'वैज्ञानिक RIASEC रडार',
      topMatch: 'शीर्ष अनुशंसित करियर',
      retakeAssessment: 'पुनः मूल्यांकन करें',
      milestonesCompleted: 'पूर्ण किए गए माइलस्टोन्स'
    },
    explorer: {
      title: 'करियर एक्सप्लोरर',
      subtitle: 'सत्यापित वेतन, शैक्षणिक मार्गों और आवश्यक प्रवेश परीक्षाओं के साथ 35+ भारतीय करियर विवरण देखें।',
      searchPlaceholder: 'शीर्षक, कौशल या उद्योग द्वारा खोजें (उदा. AI, साइबर, डॉक्टर)...',
      filterSector: 'क्षेत्र / उद्योग',
      filterRiasec: 'RIASEC रुचि',
      filterBudget: 'किफायती बजट स्तर',
      sortBy: 'क्रमबद्ध करें',
      sortAlphabetical: 'वर्णमाला अनुसार (A - Z)',
      sortSalaryHigh: 'उच्चतम शुरुआती वेतन',
      sortDurationLow: 'कम अध्ययन अवधि',
      showingResults: 'प्रदर्शित',
      ofCareers: 'सत्यापित करियर',
      noResultsTitle: 'कोई मेल खाता करियर नहीं मिला',
      noResultsDesc: 'सभी करियर देखने के लिए खोज शब्द बदलें या फ़िल्टर साफ़ करें।',
      resetFilters: 'सभी फ़िल्टर साफ़ करें',
      entrySalary: 'शुरुआती वेतन (0-2 वर्ष)',
      studyDuration: 'अध्ययन अवधि',
      recommendedStream: 'अनुशंसित 11-12वीं स्ट्रीम',
      alternativeLowCost: 'कम लागत / शून्य-ऋण विकल्प'
    },
    recommendations: {
      title: 'अनुकूलित करियर सिफारिशें',
      subtitle: 'आपके RIASEC अंकों, पसंदीदा विषयों और बजट क्षमता के आधार पर कैलिब्रेटेड करियर सिफारिशें।',
      matchScore: 'अनुकूलता अंक',
      primaryReasons: 'यह आपके अनुकूल क्यों है',
      overlapSubjects: 'विषय संरेखण',
      riasecAlignment: 'RIASEC अनुकूलता',
      viewRoadmapBtn: 'लर्निंग रोडमैप देखें',
      viewDossierBtn: 'पूर्ण विवरण देखें',
      compareBtn: 'तुलना करें',
      addToCompare: 'तुलना में जोड़ें',
      removeFromCompare: 'तुलना से हटाएं',
      compareTrayText: 'करियर तुलना के लिए चुने गए',
      openCompareModal: 'विस्तृत तुलना खोलें',
      clearCompare: 'तुलना ट्रे साफ़ करें',
      saveToDashboard: 'करियर सुरक्षित करें',
      savedInDashboard: 'डैशबोर्ड में सुरक्षित',
      retakePrompt: 'अद्यतन सिफारिशें चाहिए? कभी भी दोबारा मूल्यांकन करें।',
      retakeBtn: 'पुनः मूल्यांकन दें',
      noMatchesYet: 'व्यक्तिगत करियर सिफारिशें देखने के लिए RIASEC मूल्यांकन पूरा करें!'
    },
    assessment: {
      title: 'योग्यता मूल्यांकन',
      subtitle: 'बिना परीक्षा तनाव के अपनी व्यावहारिक सोच और समस्या-समाधान शैलियों को मैप करें।',
      questionCount: 'प्रश्न',
      questionOf: 'प्रश्न',
      completed: 'पूर्ण हुआ',
      dimension: 'परीक्षण आयाम',
      nextBtn: 'अगला प्रश्न',
      prevBtn: 'पिछला प्रश्न',
      finishBtn: 'समाप्त करें और परिणाम देखें',
      ethicalNotice: 'नैतिक परीक्षण गारंटी: हम बिना किसी समय दबाव के आपकी समस्या-समाधान शैली का मूल्यांकन करते हैं। आपकी प्रतिक्रियाएं विज्ञापनों के लिए साझा नहीं की जाती हैं।',
      liveScores: 'लाइव RIASEC वेक्टर विश्लेषण',
      realisticLabel: 'व्यावहारिक, यांत्रिक, उपकरण एवं सिस्टम',
      investigativeLabel: 'वैज्ञानिक अनुसंधान, तर्क एवं विश्लेषण',
      artisticLabel: 'रचनात्मकता, दृश्य कला, डिज़ाइन एवं अभिव्यक्ति',
      socialLabel: 'मानवीय सहयोग, स्वास्थ्य सेवा, शिक्षण एवं परामर्श',
      enterprisingLabel: 'नेतृत्व, व्यवसाय प्रबंधन, संचार एवं स्टार्टअप',
      conventionalLabel: 'व्यवस्थित डेटा, नियम, वित्तीय ऑडिट एवं प्रक्रियाएं'
    },
    roadmap: {
      title: 'लर्निंग रोडमैप ट्रैकर',
      subtitle: 'स्कूल विषयों, शुरुआती प्रोजेक्ट्स और कॉलेज प्रवेश तक आपका मार्गदर्शन करने वाला 6-चरणीय माइलस्टोन ट्रैकर।',
      switchCareer: 'करियर रोडमैप चुनें:',
      overallProgress: 'रोडमैप माइलस्टोन पूर्णता',
      completedMilestones: 'पूर्ण माइलस्टोन्स',
      remainingMilestones: 'शेष माइलस्टोन्स',
      markComplete: 'पूर्ण चिह्नित करें',
      markIncomplete: 'अपूर्ण चिह्नित करें',
      customNotes: 'व्यक्तिगत अध्ययन नोट्स',
      notesPlaceholder: 'अपनी अध्ययन योजना, कॉलेज लक्ष्य या अनुस्मारक यहाँ लिखें...',
      saveNotes: 'नोट्स सुरक्षित करें',
      notesSaved: 'आपके नोट्स सुरक्षित कर दिए गए हैं!',
      downloadRoadmap: 'रोडमैप पीडीएफ डाउनलोड करें',
      keyResources: 'अनुशंसित अध्ययन पोर्टल'
    },
    roi: {
      title: 'वित्तीय ROI एवं फीस कैलकुलेटर',
      subtitle: 'सरकारी, निजी और पॉलिटेक्निक संस्थानों के बीच डिग्री लागत और शुरुआती वेतन की व्यावहारिक तुलना।',
      selectCareer: 'विश्लेषण के लिए करियर चुनें',
      benchmarkSalary: 'सत्यापित शुरुआती वेतन',
      tuitionEstimates: 'शिक्षण शुल्क एवं रहने की लागत',
      govtCollege: 'सरकारी कॉलेज / विश्वविद्यालय',
      privateCollege: 'निजी संस्थान (टियर 1/2)',
      deemedCollege: 'व्यावसायिक डीम्ड विश्वविद्यालय',
      annualFees: 'वार्षिक शिक्षण शुल्क',
      totalDegreeCost: 'कुल निवेश (डिग्री + आवास)',
      breakEvenYears: 'लागत वसूली / पेबैक अवधि',
      salarySource: 'राष्ट्रीय करियर सेवा (NCS) 2026 आंकड़े',
      disclaimer: 'वेतन श्रेणियां सत्यापित उद्योग औसत पर आधारित हैं। व्यक्तिगत कमाई कौशल और पोर्टफोलियो पर निर्भर करती है।',
      scholarshipTip: 'सलाह: सरकारी कॉलेजों और राज्य छात्रवृत्तियों (जैसे कर्नाटक SSP) से शिक्षण खर्च लगभग शून्य हो जाता है।'
    },
    exams: {
      title: 'प्रवेश परीक्षा रडार',
      subtitle: 'प्रमुख भारतीय प्रतियोगी और कॉलेज प्रवेश परीक्षाओं की समय-सीमा, पैटर्न और आधिकारिक लिंक।',
      searchExams: 'परीक्षा या संचालन निकाय खोजें (उदा. KCET, JEE, NEET, CUET)...',
      filterStream: 'स्ट्रीम अनुसार फ़िल्टर',
      registrationWindow: 'पंजीकरण अवधि',
      examWindow: 'परीक्षा माह',
      conductedBy: 'संचालन निकाय',
      eligibilityCriteria: 'पात्रता मानदंड',
      examPattern: 'परीक्षा का स्वरूप व पाठ्यक्रम',
      officialPortal: 'आधिकारिक पोर्टल पर जाएं',
      freeResources: 'निःशुल्क तैयारी स्रोत',
      pinExam: 'रडार पर पिन करें',
      unpinExam: 'पिन हटाएं',
      pinnedExams: 'मेरे पिन किए गए रडार'
    },
    scholarships: {
      title: 'सत्यापित छात्रवृत्ति निर्देशिका',
      subtitle: 'ऋण-मुक्त उच्च शिक्षा प्राप्त करने के लिए आधिकारिक सरकारी छात्रवृत्तियां एवं ब्याज सब्सिडी योजनाएं।',
      searchScholarships: 'नाम, राज्य या श्रेणी द्वारा छात्रवृत्ति खोजें...',
      categoryFilter: 'श्रेणी फ़िल्टर',
      benefitAmount: 'वार्षिक लाभ',
      eligibility: 'मुख्य पात्रता शर्तें',
      deadline: 'आवेदन समय-सीमा',
      officialLink: 'आधिकारिक पोर्टल पर आवेदन करें',
      applyOnline: 'ऑनलाइन आवेदन उपलब्ध',
      requiredDocuments: 'आवश्यक सत्यापन दस्तावेज',
      cautionMiddlemen: 'सावधानी: सरकारी छात्रवृत्तियों के लिए कभी आवेदन शुल्क नहीं लगता। हमेशा आधिकारिक पोर्टल से ही आवेदन करें।'
    },
    mentorship: {
      title: 'सत्यापित मेंटर निर्देशिका',
      subtitle: 'आईआईटी, आईआईएससी, शीर्ष राज्य कॉलेजों और प्रौद्योगिकी कंपनियों के अनुभवी पूर्व छात्रों और पेशेवरों से जुड़ें।',
      searchMentors: 'उद्योग, भूमिका या पृष्ठभूमि द्वारा मेंटर्स खोजें...',
      requestSessionBtn: 'निःशुल्क मार्गदर्शन सत्र का अनुरोध करें',
      expertise: 'कार्यक्षेत्र',
      education: 'पूर्व संस्थान',
      experience: 'उद्योग अनुभव',
      yearsExp: 'वर्षों का अनुभव',
      modalTitle: '1-ऑन-1 मार्गदर्शन सत्र निर्धारित करें',
      mentorName: 'चयनित मेंटर',
      selectDate: 'पसंदीदा तिथि',
      selectTime: 'पसंदीदा समय',
      sessionPurpose: 'सत्र का विषय',
      purposePlaceholder: 'कॉलेज की तैयारी, कट-ऑफ अंक, या कौशल रोडमैप के बारे में पूछें...',
      confirmBooking: 'पुष्टि करें और अनुरोध भेजें',
      bookingSuccess: 'मार्गदर्शन अनुरोध सफलतापूर्वक सबमिट हुआ! मेंटर ईमेल द्वारा पुष्टि करेंगे।',
      mySessions: 'मेरे निर्धारित सत्र',
      noSessions: 'कोई सक्रिय मार्गदर्शन सत्र निर्धारित नहीं है।'
    },
    resume: {
      title: 'पोर्टफोलियो एवं रेज़्युमे निर्माता',
      subtitle: 'कॉलेज प्रवेश और इंटर्नशिप के लिए अपने कौशल, प्रोजेक्ट्स और उपलब्धियों को दर्शाने वाला एक साफ एटीएस-अनुकूल सीवी बनाएं।',
      personalInfo: 'व्यक्तिगत जानकारी',
      academicSummary: 'शैक्षणिक प्रोफ़ाइल',
      skillsSection: 'कौशल भंडार',
      projectsSection: 'शैक्षणिक प्रोजेक्ट्स एवं कार्य-प्रमाण',
      certificationsSection: 'प्रमाणपत्र एवं पाठ्यक्रम',
      experienceSection: 'इंटर्नशिप एवं नेतृत्व अनुभव',
      languagesSection: 'ज्ञात भाषाएं',
      exportPdf: 'पीडीएफ के रूप में प्रिंट / सहेजें',
      printPreview: 'फॉर्मेट किया गया दस्तावेज़ देखें',
      addSkill: 'कौशल जोड़ें',
      addProject: 'प्रोजेक्ट जोड़ें',
      editorTab: 'रेज़्युमे संपादक',
      previewTab: 'लाइव फॉर्मेट प्रीव्यू',
      techSkillsTitle: 'तकनीकी एवं शैक्षणिक दक्षताएं',
      softSkillsTitle: 'पारस्परिक एवं नेतृत्व क्षमताएं',
      languagesTitle: 'ज्ञात भाषाएं',
      educationTitle: 'शिक्षा इतिहास',
      addTechSkillBtn: 'तकनीकी कौशल जोड़ें',
      addSoftSkillBtn: 'सॉफ्ट स्किल जोड़ें',
      addLanguageBtn: 'भाषा जोड़ें',
      addEducationBtn: 'शैक्षणिक रिकॉर्ड जोड़ें',
      addCertificationBtn: 'प्रमाणपत्र जोड़ें',
      schoolNamePlaceholder: 'स्कूल / कॉलेज का नाम (उदा. RNSIT बैंगलोर)',
      degreePlaceholder: 'डिग्री / योग्यता (उदा. 12वीं विज्ञान PCM)',
      yearPlaceholder: 'उत्तीर्ण वर्ष (उदा. 2026)',
      scorePlaceholder: 'अंक / प्रतिशत (उदा. 88%)',
      projectTitlePlaceholder: 'प्रोजेक्ट शीर्षक (उदा. स्मार्ट IoT मौसम मॉनिटर)',
      projectDescPlaceholder: 'आपने क्या बनाया, क्या समस्याएं सुलझाईं और परिणाम क्या रहे...',
      projectSkillsPlaceholder: 'उपयोग किए गए उपकरण (उदा. Python, Arduino)',
      certNamePlaceholder: 'प्रमाणपत्र नाम (उदा. NPTEL पायथन प्रोग्रामिंग)',
      certIssuerPlaceholder: 'जारीकर्ता संस्था (उदा. IIT मद्रास / SWAYAM)',
      atsNotice: 'कॉलेज प्रवेश और इंटर्नशिप स्क्रीनिंग के लिए अनुकूलित एकल-कॉलम डिज़ाइन।',
      emptySkills: 'अभी कोई कौशल नहीं जोड़ा गया है। ऊपर अपने कौशल जोड़ें।',
      emptyProjects: 'अभी कोई प्रोजेक्ट नहीं जोड़ा गया है। अपनी असाइनमेंट्स और रुचियां प्रदर्शित करें।',
      emptyEducation: 'अभी कोई शैक्षणिक रिकॉर्ड नहीं जोड़ा गया है।'
    },
    simulator: {
      title: 'विषय सिम्युलेटर',
      subtitle: 'NEP-2020 विषय संयोजनों का परीक्षण करें और 35+ करियर में अपनी पात्रता का रीयल-टाइम प्रभाव देखें।',
      step1: '1. अपने स्कूल विषयों का संयोजन चुनें',
      step2: '2. विषय छोड़ने की चेतावनियां और ब्रिज कोर्स देखें',
      step3: '3. करियर पात्रता पर सीधा प्रभाव',
      compatibilityRating: 'NEP 2020 बहु-विषयक संयोजन',
      lowCostAlternative: 'कम लागत वाला विकल्प',
      estimatedSavings: 'निजी डिग्री की तुलना में अनुमानित बचत:',
      realtimeImpact: 'करियर पात्रता पर वास्तविक समय प्रभाव',
      fullyEligible: '100% पूर्णतः पात्र',
      fullyEligibleDesc: 'आपका चुना हुआ संयोजन सभी अनिवार्य वैधानिक शर्तों को पूरा करता है।',
      partialMatch: 'आंशिक मेल (ब्रिज कोर्स आवश्यक)',
      partialMatchDesc: 'वैकल्पिक विषय बदलने, डिप्लोमा लेटरल एंट्री या NIOS परीक्षा द्वारा सुलभ।',
      lockedOut: 'पात्रता से बाहर',
      lockedOutDesc: 'अनिवार्य विषय अनुपलब्ध हैं। वैकल्पिक मार्ग सुझाए गए हैं।',
      unlockedBadge: 'अनलॉक',
      bridgeBadge: 'ब्रिज आवश्यक',
      lockedBadge: 'लॉक',
      missingPrereq: 'अनुपलब्ध शर्त:',
      mathWarningTitle: 'गणित छोड़ने की सूचना:',
      mathWarningDesc: 'गणित छोड़ने से बी.टेक इंजीनियरिंग, एक्चुएरियल साइंस और डेटा साइंस की डिग्री बंद हो जाती हैं।',
      mathAlternative: 'आप अनुप्रयुक्त गणित चुन सकते हैं या NIOS के माध्यम से ऑन-डिमांड परीक्षा दे सकते हैं।',
      bioWarningTitle: 'जीव विज्ञान छोड़ने की सूचना:',
      bioWarningDesc: 'जीव विज्ञान छोड़ने से NEET-UG मेडिकल प्रवेश प्रतिबंधित हो जाता है। अन्य संबद्ध स्वास्थ्य देखभाल भूमिकाएं खुली रहती हैं।'
    },
    chatbot: {
      title: 'NextGen एआई करियर परामर्शदाता',
      subtitle: 'पाठ्यक्रम, कॉलेज, परीक्षा, छात्रवृत्ति या सिलेबस के बारे में कुछ भी पूछें।',
      welcomeMessage: 'नमस्ते! मैं आपका NextGen Navigators करियर सहायक हूँ। गूगल जेमिनी द्वारा संचालित, आज मैं आपकी शैक्षिक योजना में क्या सहायता कर सकता हूँ?',
      verifiedBadge: 'सत्यापित सरकारी डेटा',
      onlineBadge: 'जेमिनी 3.8 एआई ऑनलाइन',
      clearChat: 'इतिहास साफ़ करें',
      chatCleared: 'चैट इतिहास हटा दिया गया।',
      copy: 'कॉपी करें',
      copied: 'कॉपी हो गया!',
      continuousHint: 'निरंतर संदर्भ सक्रिय',
      modelLabel: 'गूगल जेमिनी एआई द्वारा संचालित',
      inputPlaceholder: 'अपनी भाषा में करियर, पाठ्यक्रम, परीक्षाओं या फीस के बारे में पूछें...',
      send: 'भेजें',
      readAloud: 'बोलकर सुनाएं',
      stopSpeaking: 'आवाज़ बंद करें',
      quickChips: [
        '10वीं कक्षा के बाद क्या करें?',
        'एआई या साइबर सुरक्षा में करियर कैसे बनाएं?',
        'किफायती एवं शून्य-ऋण कॉलेज मार्ग',
        'मेरी प्रोफ़ाइल के अनुसार छात्रवृत्तियां',
        'KCET, JEE और NEET की तैयारी रणनीति'
      ]
    },
    footer: {
      aboutTitle: 'NextGen Navigators के बारे में',
      aboutText: 'सत्यापित मार्गों, पारदर्शी आंकड़ों और व्यावहारिक रोडमैप के साथ भारतीय विद्यार्थियों को सशक्त बनाने वाला एक स्वतंत्र, खुला शैक्षिक मार्गदर्शन मंच।',
      quickLinksTitle: 'मार्गदर्शन मॉड्यूल',
      legalTitle: 'अनुपालन एवं नैतिकता',
      legalText: 'हम सख्त प्राइवेसी-बाय-डिज़ाइन सिद्धांतों के तहत काम करते हैं। हम कभी भी आधार या पैन, जाति या धर्म एकत्र नहीं करते हैं। डेटा NCS, AICTE, KEA और NTA जैसे आधिकारिक पोर्टलों से लिया गया है।',
      contactTitle: 'परिसर कार्यालय एवं संपर्क',
      copyright: 'NextGen Navigators. शैक्षिक एवं करियर मार्गदर्शन मंच। सर्वाधिकार सुरक्षित।'
    },
    contact: {
      title: 'हमसे संपर्क करें',
      subtitle: 'परिसर संपर्क एवं मार्गदर्शन सहायता',
      name: 'अजहर अहमद शरीफ',
      field: 'डेवलपर एवं समन्वयक',
      purpose: 'करियर रोडमैप, कॉलेज फीस तुलना या मेंटरशिप के बारे में प्रश्न हैं? हम आपकी सहायता के लिए उपस्थित हैं।',
      email: 'ईमेल संपर्क',
      phone: 'फोन संपर्क',
      location: 'परिसर स्थान',
      institutionalIdentity: 'संस्थागत पहचान एवं उद्देश्य',
      aboutPlatformTitle: 'NextGen Navigators के बारे में',
      aboutPlatformDesc: 'NextGen Navigators भारतीय करियर मार्गों को पारदर्शी और सुलभ बनाने के लिए विकसित एक स्वतंत्र, गैर-व्यावसायिक शैक्षिक मार्गदर्शन मंच है। हम स्कूली शिक्षा और विश्वविद्यालय या व्यावसायिक अवसरों के बीच जानकारी की खाई को पाटते हैं।',
      commitmentTitle: 'छात्रों के प्रति हमारी प्रतिबद्धता',
      commitmentDesc: 'हमारा मानना है कि प्रत्येक भारतीय विद्यार्थी कॉलेज प्रवेश, प्रवेश परीक्षाओं और करियर कमाई से जुड़े पारदर्शी, निष्पक्ष और सत्यापित डेटा का हकदार है—जो व्यावसायिक कोचिंग के विज्ञापनों से मुक्त हो।',
      coDeveloped: 'छात्र समुदाय के लाभ के लिए RNSIT बैंगलोर में सह-विकसित।',
      exploreCareersBtn: '35+ सत्यापित करियर एक्सप्लोर करें'
    },
    dayInLife: {
      badge: '3-मिनट करियर सैंडबॉक्स (माइक्रो-अनुभव)',
      subheading: 'किसी रास्ते को चुनने से पहले एक यथार्थवादी कार्यस्थल चुनौती का अनुभव करें।',
      actionProtocol: 'आपकी प्राथमिक कार्य योजना क्या होगी?',
      explanationTitle: 'व्यावसायिक विश्लेषण एवं परिणाम:',
      nextScenario: 'अगली कार्यस्थल स्थिति',
      finishSimulation: 'सिमुलेशन समाप्त करें',
      feedbackQuestion: 'यह व्यावहारिक कार्यस्थल अनुभव आपको कैसा लगा?',
      lovedIt: 'पसंद आया! यह मेरी सोच के अनुकूल है',
      neutral: 'सामान्य / स्वीकार्य',
      disliked: 'पसंद नहीं आया',
      close: 'सिमुलेशन बंद करें'
    },
    dossier: {
      headerTitle: 'NextGen Navigators करियर अन्वेषण डॉसियर',
      headerSubtitle: 'शैक्षणिक योजना के लिए आधिकारिक छात्र प्रोफ़ाइल और मार्गदर्शन रिकॉर्ड।',
      printBtn: 'प्रिंट करें / पीडीएफ सहेजें',
      letterheadTitle: 'व्यापक विद्यार्थी करियर एवं तत्परता डॉसियर',
      generatedDate: 'तैयार करने की तिथि',
      verifiedBadge: 'सत्यापित विद्यार्थी डॉसियर',
      privacyNote: 'सख्त गोपनीयता गारंटी (कोई सरकारी पहचान पत्र / जाति नहीं ली गई)',
      studentSnapshot: 'विद्यार्थी प्रोफ़ाइल सारांश',
      nameLabel: 'विद्यार्थी का नाम',
      classLabel: 'शैक्षणिक स्तर',
      cityLabel: 'शहर / ज़िला',
      budgetLabel: 'बजट स्तर',
      riasecRadarTitle: 'वैज्ञानिक RIASEC योग्यता रूपरेखा',
      topMatchesTitle: 'शीर्ष अनुशंसित करियर तालिका',
      primaryPathwayTitle: 'प्राथमिक शैक्षणिक मार्ग एवं माइलस्टोन्स',
      officialNotice: 'आधिकारिक मार्गदर्शन अस्वीकरण: यह दस्तावेज़ व्यक्तिगत मूल्यांकन पर आधारित शैक्षणिक मार्गदर्शन प्रदान करता है। आधिकारिक प्रवेश नियमों के लिए संस्थागत प्रॉस्पेक्टस देखें।'
    },
    compare: {
      decisionSynthesisTitle: 'व्यावहारिक निर्णय संश्लेषण एवं उपयुक्तता निष्कर्ष',
      optimalMatch: '✓ सर्वोत्तम समग्र मेल',
      highestEarning: '★ उच्चतम शुरुआती आय',
      advisorRec: '💡 सलाहकार सिफारिश',
      optimalMatchDesc: 'आपकी RIASEC रूपरेखा और बजट स्तर से उच्च अनुकूलता रखता है।',
      highestEarningDesc: 'उच्च वेतन प्रदान करता है, लेकिन अध्ययन निवेश की पुष्टि आवश्यक है।',
      advisorSameDesc: 'शीर्ष कमाई क्षमता और व्यक्तिगत योग्यता दोनों का सर्वश्रेष्ठ संतुलन प्रदान करता है।',
      advisorDiffDesc: 'आपकी प्राथमिकताओं के आधार पर बेहतर दीर्घकालिक स्थिरता और शैक्षणिक तालमेल प्रदान करता है।',
      pt1Aptitude: '1. योग्यता एवं RIASEC अनुकूलता',
      pt2Salary: '2. सत्यापित वेतन क्षमता',
      pt3Eligibility: '3. मुख्य शैक्षणिक पात्रता',
      pt4Duration: '4. अध्ययन अवधि',
      pt5Cost: '5. शिक्षण लागत विश्लेषण',
      pt6Roi: '6. लागत वसूली अवधि (ROI)',
      pt7Exams: '7. प्रवेश परीक्षा आवश्यकताएं',
      pt8Pathways: '8. कम लागत वाला विकल्प',
      pt9Skills: '9. मुख्य तकनीकी दक्षताएं',
      pt10Growth: '10. बाजार मांग का रुझान',
      compatibility: 'अनुकूलता',
      entryLevel: 'शुरुआती',
      required: 'आवश्यक',
      remove: 'तुलना से हटाएं'
    },
    detail: {
      tabOverview: 'अवलोकन एवं जिम्मेदारियां',
      tabPathways: 'शैक्षणिक एवं कम लागत वाले मार्ग',
      tabExams: 'प्रवेश परीक्षाएं एवं लागत',
      tabFuture: 'भविष्य के कौशल एवं सरकारी लिंक',
      descTitle: 'करियर का विवरण',
      responsibilitiesTitle: 'दैनिक जिम्मेदारियां',
      techSkillsTitle: 'मुख्य तकनीकी दक्षताएं',
      softSkillsTitle: 'व्यक्तिगत एवं पारस्परिक कौशल',
      highlightsTitle: 'करियर की मुख्य विशेषताएं',
      academicRoutesTitle: 'उच्च शिक्षा डिग्रियां',
      entranceExamsTitle: 'प्रमुख प्रवेश परीक्षाएं',
      lowCostRouteTitle: 'किफायती / शून्य-ऋण वैकल्पिक मार्ग',
      futureSkillsTitle: 'उभरते कौशल रुझान',
      govtPortalsTitle: 'आधिकारिक सरकारी सूचना पोर्टल'
    },
    disclaimers: {
      assessmentNotice: 'यह योग्यता मूल्यांकन व्यक्तिगत रुचि और समस्या-समाधान शैलियों पर आधारित शैक्षणिक मार्गदर्शन प्रदान करता है। यह प्रमाणित पेशेवर परामर्श का विकल्प नहीं है।',
      salaryNotice: 'वेतन अनुमान राष्ट्रीय करियर सेवा (NCS, श्रम एवं रोजगार मंत्रालय) 2026 आंकड़ों से संकलित हैं।',
      roiNotice: 'शुल्क अनुमान और लागत वसूली अवधि राज्य कोटा और संस्थागत औसत पर आधारित हैं।',
      emptyDirectoryNotice: 'सत्यापित रिकॉर्ड केवल: हम असत्यापित जानकारी प्रदर्शित नहीं करते हैं। केवल मान्य पेशेवरों और योजनाओं को सूचीबद्ध किया गया है।'
    },
    admin: {
      portalTitle: 'NextGen प्रशासनिक नियंत्रण केंद्र',
      loginPrompt: 'करियर विवरण, छात्रवृत्ति सत्यापन और उपयोगकर्ता रिकॉर्ड प्रबंधित करने के लिए अधिकृत व्यवस्थापक क्रेडेंशियल्स आवश्यक हैं।',
      manageCareers: 'करियर कैटलॉग प्रबंधन',
      manageScholarships: 'छात्रवृत्ति सत्यापन',
      manageMentors: 'मेंटर निर्देशिका',
      manageExams: 'परीक्षा रडार प्रबंधन',
      auditLog: 'सुरक्षा ऑडिट लॉग्स',
      userDirectory: 'पंजीकृत उपयोगकर्ता',
      tabCatalog: 'करियर कैटलॉग',
      tabScholarships: 'छात्रवृत्तियां',
      tabMentors: 'मेंटर निर्देशिका',
      tabExams: 'प्रवेश परीक्षाएं',
      tabTranslations: 'अनुवाद प्रबंधन',
      tabUsers: 'पंजीकृत उपयोगकर्ता',
      tabAudit: 'ऑडिट लॉग्स',
      tabAnalytics: 'मंच एनालिटिक्स',
      tabTests: 'स्वचालित परीक्षण सूट',
      transManagerTitle: 'केंद्रीय बहुभाषी अनुवाद प्रबंधक',
      transManagerDesc: 'अंग्रेजी, हिंदी और कन्नड़ में पूरे मंच के सभी शब्दों का लाइव निरीक्षण, संपादन और ओवरराइड।',
      selectLangToEdit: 'संपादन हेतु भाषा चुनें',
      selectSectionToEdit: 'अनुभाग चुनें',
      searchKeys: 'कंजियां या मान खोजें',
      keyHeader: 'अनुवाद कुंजी (Key)',
      englishOriginal: 'अंग्रेजी संदर्भ',
      localizedValue: 'सक्रिय अनुवादित मान',
      saveChanges: 'परिवर्तन सहेजें',
      resetDefaults: 'डिफ़ॉल्ट पर रीसेट करें',
      overridesSaved: 'कस्टम अनुवाद सफलतापूर्वक सहेजे गए और वेबसाइट पर लागू हुए!'
    }
  },

  kn: {
    appName: 'NextGen Navigators',
    tagline: 'ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ ಅರಿಯಿರಿ. ನಿಮ್ಮ ಭವಿಷ್ಯ ರೂಪಿಸಿ.',
    subTagline: 'ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿ ಮಾರ್ಗಗಳು, ವೈಜ್ಞಾನಿಕ ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಸ್ಪಷ್ಟ ಶೈಕ್ಷಣಿಕ ರೋಡ್‌ಮ್ಯಾಪ್‌ಗಳೊಂದಿಗೆ ಭಾರತದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಶಕ್ತ ಮಾರ್ಗದರ್ಶನ.',
    nav: {
      home: 'ಮುಖಪುಟ',
      assessment: 'ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆ',
      recommendations: 'ವೃತ್ತಿ ಶಿಫಾರಸುಗಳು',
      explorer: 'ವೃತ್ತಿ ಅನ್ವೇಷಕ',
      simulator: 'ವಿಷಯ ಸಿಮ್ಯುಲೇಟರ್',
      roadmap: 'ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್',
      roi: 'ROI ಮತ್ತು ಶುಲ್ಕಗಳು',
      scholarships: 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
      mentorship: 'ಮಾರ್ಗದರ್ಶನ / ಮೆಂಟರ್ಸ್',
      exams: 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು',
      resume: 'ರೆಸ್ಯೂಮೆ ಬಿಲ್ಡರ್',
      dashboard: 'ವಿದ್ಯಾರ್ಥಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      admin: 'ಆಡ್ಮಿನ್ ಪೋರ್ಟಲ್',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      login: 'ಲಾಗಿನ್',
      register: 'ನೋಂದಣಿ',
      logout: 'ಸೈನ್ ಔಟ್',
      adminLogin: 'ಆಡ್ಮಿನ್ ಲಾಗಿನ್',
      quickSearch: 'ತ್ವರಿತ ಹುಡುಕಾಟ (Ctrl + K)',
      allTools: 'ಎಲ್ಲಾ ಸಂಚರಣಾ ಪರಿಕರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      studentAccount: 'ವಿದ್ಯಾರ್ಥಿ ಖಾತೆ',
      mainNav: 'ಮುಖ್ಯ ಸಂಚರಣೆ',
      additionalTools: 'ಹೆಚ್ಚುವರಿ ಪರಿಕರಗಳು',
      account: 'ಖಾತೆ',
      selectLanguage: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ'
    },
    actions: {
      startAssessment: 'ಉಚಿತ ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ',
      exploreCareers: '35+ ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      saveCareer: 'ವೃತ್ತಿ ಉಳಿಸಿ',
      saved: 'ಉಳಿಸಲಾಗಿದೆ',
      compare: 'ಹೋಲಿಕೆ ಮಾಡಿ',
      viewRoadmap: 'ರೋಡ್‌ಮ್ಯಾಪ್ ವೀಕ್ಷಿಸಿ',
      downloadResume: 'ರೆಸ್ಯೂಮೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
      submit: 'ಸಲ್ಲಿಸಿ',
      cancel: 'ರದ್ದುಮಾಡಿ',
      filter: 'ಫಿಲ್ಟರ್',
      search: 'ಹುಡುಕಿ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      viewDetails: 'ವೃತ್ತಿ ವಿವರ ವೀಕ್ಷಿಸಿ',
      readMore: 'ಹೆಚ್ಚು ಓದಿ',
      reset: 'ಮರುಹೊಂದಿಸಿ',
      applyNow: 'ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
      downloadPdf: 'ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್',
      bookSession: '1-ಆನ್-1 ಮಾರ್ಗದರ್ಶನ ಕಾಯ್ದಿರಿಸಿ',
      close: 'ಮುಚ್ಚಿ',
      saveNotes: 'ಟಿಪ್ಪಣಿ ಉಳಿಸಿ',
      retake: 'ಮರುಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ',
      confirm: 'ಖಚಿತಪಡಿಸಿ'
    },
    common: {
      loading: 'ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
      error: 'ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      success: 'ಕಾರ್ಯ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.',
      verified: 'ಪರಿಶೀಲಿಸಿದ ಅಧಿಕೃತ ಮಾಹಿತಿ',
      official: 'ಸರ್ಕಾರಿ ಅಧಿಕೃತ ಪ್ರಕಟಣೆ',
      disclaimer: 'ಮಾರ್ಗದರ್ಶನ ಮುನ್ನೆಚ್ಚರಿಕೆ',
      optional: 'ಐಚ್ಛಿಕ',
      required: 'ಕಡ್ಡಾಯ',
      yes: 'ಹೌದು',
      no: 'ಇಲ್ಲ',
      all: 'ಎಲ್ಲವೂ',
      completed: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
      inProgress: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ',
      pending: 'ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ',
      confirmed: 'ದೃಢಪಟ್ಟಿದೆ',
      notStarted: 'ಪ್ರಾರಂಭವಾಗಿಲ್ಲ',
      status: 'ಸ್ಥಿತಿ',
      action: 'ಕ್ರಮ',
      date: 'ದಿನಾಂಕ',
      amount: 'ಮೊತ್ತ',
      role: 'ಪಾತ್ರ',
      sortBy: 'ವಿಂಗಡಿಸಿ',
      searchPlaceholder: 'ವೃತ್ತಿಗಳು, ಪರೀಕ್ಷೆಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನ ಹುಡುಕಿ...',
      noResults: 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಫಿಲ್ಟರ್ ಬದಲಾಯಿಸಿ.',
      viewAll: 'ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ',
      back: 'ಹಿಂದೆ',
      next: 'ಮುಂದೆ',
      previous: 'ಹಿಂದಿನದು',
      finish: 'ಪರೀಕ್ಷೆ ಮುಕ್ತಾಯಗೊಳಿಸಿ',
      select: 'ಆಯ್ಕೆಮಾಡಿ',
      years: 'ವರ್ಷಗಳು',
      months: 'ತಿಂಗಳುಗಳು',
      lakhsPerAnnum: 'ಲಕ್ಷ ರೂ. ಪ್ರತಿ ವರ್ಷಕ್ಕೆ (LPA)'
    },
    landing: {
      badge: 'ಸ್ವತಂತ್ರ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆ',
      heroTitle1: 'ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ ಅರಿಯಿರಿ.',
      heroTitle2: 'ನಿಮ್ಮ ಭವಿಷ್ಯ ರೂಪಿಸಿ.',
      heroSubtitle: 'ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿ ಮಾರ್ಗಗಳು, ವಸ್ತುನಿಷ್ಠ RIASEC ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆ, ಕಾಲೇಜು ಶುಲ್ಕ ಹೋಲಿಕೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗಳೊಂದಿಗೆ ಭಾರತೀಯ ಕಲಿಯುವವರ ಸಶಕ್ತೀಕರಣ.',
      ctaAssessment: 'ಉಚಿತ ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆ ನೀಡಿ',
      ctaExplorer: 'ವೃತ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      trustZeroFake: 'ಶೂನ್ಯ ಪ್ರಾಯೋಜಿತ ಪಕ್ಷಪಾತ',
      trustOfficialData: 'ಪರಿಶೀಲಿಸಿದ ಸರ್ಕಾರಿ ಮಾಹಿತಿ (NCS / AICTE / KEA)',
      trustNepAligned: 'NEP 2020 ಬಹುಶಿಸ್ತೀಯ ಹೊಂದಾಣಿಕೆ',
      trustFree: '100% ಉಚಿತ ಮತ್ತು ಮುಕ್ತ ಪ್ರವೇಶ',
      statCareers: '35+ ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿಗಳು',
      statScholarships: '₹10Cr+ ಸಾರ್ವಜನಿಕ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
      statExams: '15+ ಪ್ರವೇಶ ಪರೀಕ್ಷಾ ರೇಡಾರ್',
      statSalaries: 'NCS 2026 ವೇತನ ಮಾನದಂಡಗಳು',
      featureHeading: 'ವೇದಿಕೆಯ ಪ್ರಮುಖ ಆಧಾರಸ್ತಂಭಗಳು',
      featureSubheading: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಾಲ-ಮುಕ್ತ, ತಿಳುವಳಿಕೆಯುಳ್ಳ ಶೈಕ್ಷಣಿಕ ನಿರ್ಧಾರಗಳನ್ನು ಸಾಧ್ಯವಾಗಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',
      f1Title: 'ವೈಜ್ಞಾನಿಕ RIASEC ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆ',
      f1Desc: 'ವಾಸ್ತವಿಕ, ತನಿಖಾತ್ಮಕ, ಕಲಾತ್ಮಕ, ಸಾಮಾಜಿಕ, ಉದ್ಯಮಶೀಲ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಸಾಮರ್ಥ್ಯಗಳ ಬಹು ಆಯಾಮದ ವಿಶ್ಲೇಷಣೆ.',
      f2Title: 'ಪಾರದರ್ಶಕ ಆರ್ಥಿಕ ROI ಮತ್ತು ಶುಲ್ಕಗಳು',
      f2Desc: 'ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು, ಖಾಸಗಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾಗಳ ವೆಚ್ಚ ಮತ್ತು ಮರುಪಾವತಿ ಅವಧಿಯ ಹೋಲಿಕೆ.',
      f3Title: 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ರೇಡಾರ್ ಮತ್ತು ದಿನಾಂಕಗಳು',
      f3Desc: 'KCET, COMEDK, JEE, NEET, CUET ಮತ್ತು CLAT ಪರೀಕ್ಷೆಗಳಿಗೆ ಪರಿಶೀಲಿಸಿದ ನೋಂದಣಿ ದಿನಾಂಕಗಳು ಮತ್ತು ಪಠ್ಯಕ್ರಮ.',
      f4Title: 'ಶೂನ್ಯ-ಸಾಲ ವಿದ್ಯಾರ್ಥಿವೇತನ ಡೈರೆಕ್ಟರಿ',
      f4Desc: 'ಕರ್ನಾಟಕ SSP, ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP) ಮತ್ತು AICTE ಪ್ರಗತಿ ಯೋಜನೆಗಳ ನೇರ ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳು.',
      bannerTitle: 'ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಪಯಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
      bannerSubtitle: '5-ನಿಮಿಷದ ವೈಜ್ಞಾನಿಕ ಪರೀಕ್ಷೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಮತ್ತು ಸೂಕ್ತ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ.',
      bannerBtn: 'ಈಗಲೇ ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ'
    },
    auth: {
      studentLoginTitle: 'ವಿದ್ಯಾರ್ಥಿ ಲಾಗಿನ್',
      studentLoginSubtitle: 'ನಿಮ್ಮ ಉಳಿಸಿದ ವೃತ್ತಿ ಮಾರ್ಗಗಳು, RIASEC ಫಲಿತಾಂಶಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಕಲಿಕಾ ಗುರಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.',
      studentRegisterTitle: 'ಹೊಸ ವಿದ್ಯಾರ್ಥಿ ಖಾತೆ ರಚಿಸಿ',
      studentRegisterSubtitle: 'ವೃತ್ತಿ ಶಾರ್ಟ್‌ಲಿಸ್ಟ್, ಅಧ್ಯಯನ ಪ್ರಗತಿ ಮತ್ತು ಪರೀಕ್ಷಾ ರೇಡಾರ್ ಅನ್ನು ಉಳಿಸಲು NextGen Navigators ಗೆ ಸೇರಿ.',
      adminLoginTitle: 'ನಿರ್ವಾಹಕರ ಲಾಗಿನ್',
      adminLoginSubtitle: 'ವೃತ್ತಿ ಮಾಹಿತಿ ಪರಿಶೀಲನೆ, ವಿದ್ಯಾರ್ಥಿವೇತನ ದೃಢೀಕರಣ ಮತ್ತು ಭದ್ರತಾ ಲೆಕ್ಕಪರಿಶೋಧನೆಗಾಗಿ ಅಧಿಕೃತ ಪೋರ್ಟಲ್.',
      fullNameLabel: 'ಪೂರ್ಣ ಹೆಸರು',
      fullNamePlaceholder: 'ಉದಾ. ಪ್ರಿಯಾ ಶರ್ಮಾ',
      emailLabel: 'ಇಮೇಲ್ ವಿಳಾಸ',
      emailPlaceholder: 'student@example.com',
      passwordLabel: 'ಪಾಸ್‌ವರ್ಡ್',
      passwordPlaceholder: 'ಸುರಕ್ಷಿತ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ',
      confirmPasswordLabel: 'ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ',
      confirmPasswordPlaceholder: 'ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಮತ್ತೆ ನಮೂದಿಸಿ',
      usernameLabel: 'ನಿರ್ವಾಹಕರ ಬಳಕೆದಾರ ಹೆಸರು / ಇಮೇಲ್',
      usernamePlaceholder: 'admin@nextgennavigators.in',
      signInBtn: 'ಸೈನ್ ಇನ್',
      registerBtn: 'ಖಾತೆ ರಚಿಸಿ',
      adminSignInBtn: 'ಆಡ್ಮಿನ್ ಪೋರ್ಟಲ್‌ಗೆ ಸೈನ್ ಇನ್',
      noAccount: 'ಖಾತೆ ಹೊಂದಿಲ್ಲವೇ?',
      haveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?',
      createOne: 'ಹೊಸ ಖಾತೆ ತೆರೆಯಿರಿ',
      loginHere: 'ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ',
      adminNotice: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ PBKDF2 ಹ್ಯಾಶಿಂಗ್ ಮೂಲಕ ಭದ್ರಪಡಿಸಲಾಗಿದೆ. ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ.',
      loginSuccess: 'ಯಶಸ್ವಿಯಾಗಿ ಸೈನ್ ಇನ್ ಆಗಿದೆ! ಸುಸ್ವಾಗತ.',
      registerSuccess: 'ಖಾತೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ! NextGen Navigators ಗೆ ಸುಸ್ವಾಗತ.',
      adminSuccess: 'ಆಡ್ಮಿನ್ ಅಧಿವೇಶನ ದೃಢೀಕರಿಸಲ್ಪಟ್ಟಿದೆ.',
      logoutSuccess: 'ನೀವು ಸುರಕ್ಷಿತವಾಗಿ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.',
      invalidCreds: 'ತಪ್ಪಾದ ಮಾಹಿತಿ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಪರಿಶೀಲಿಸಿ.',
      fillAllFields: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕಡ್ಡಾಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
      passwordMismatch: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಪರಿಶೀಲಿಸಿ.',
      passwordTooShort: 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು.'
    },
    onboarding: {
      stepOf: 'ಹಂತ',
      skipToAssessment: 'ನೇರವಾಗಿ ಪರೀಕ್ಷೆಗೆ ಹೋಗಿ',
      step1Title: 'ಹಂತ 1 • ಗೌಪ್ಯತೆ ಭರವಸೆ',
      step1Desc: 'ಗೌಪ್ಯತೆ-ಮೂಲಕ-ವಿನ್ಯಾಸ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಒಪ್ಪಿಗೆ',
      privacyGuaranteeTitle: 'ನಮ್ಮ ಕಟ್ಟುನಿಟ್ಟಾದ ವಿದ್ಯಾರ್ಥಿ ಗೌಪ್ಯತೆ ಭರವಸೆ',
      privacyPoint1: 'ನಾವು ಸೂಕ್ಷ್ಮ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿಗಳನ್ನು (ಆಧಾರ್, ಪ್ಯಾನ್, ಪಾಸ್‌ಪೋರ್ಟ್) ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.',
      privacyPoint2: 'ನಾವು ಜಾತಿ, ಧರ್ಮ ಅಥವಾ ಸೂಕ್ಷ್ಮ ಜನಸಂಖ್ಯಾ ವಿವರಗಳನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.',
      privacyPoint3: 'ನಿಮ್ಮ ಉತ್ತರಗಳನ್ನು ಶೈಕ್ಷಣಿಕ ಹೊಂದಾಣಿಕೆ ಅಂಕಗಳನ್ನು ಲೆಕ್ಕಹಾಕಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.',
      privacyPoint4: 'ಎಲ್ಲಾ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಸಂಪಾದಿಸಬಹುದು ಅಥವಾ ಅಳಿಸಬಹುದು.',
      fullNameLabel: 'ಪೂರ್ಣ ಹೆಸರು / ಇಷ್ಟವಾದ ಹೆಸರು *',
      fullNamePlaceholder: 'ಉದಾ. ಪ್ರಿಯಾ ಶರ್ಮಾ',
      ageLabel: 'ವಯಸ್ಸು *',
      agePlaceholder: 'ಉದಾ. 16',
      cityLabel: 'ನಗರ / ಜಿಲ್ಲೆ *',
      cityPlaceholder: 'ಉದಾ. ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ',
      schoolLabel: 'ಶಾಲೆ / ಕಾಲೇಜು ಹೆಸರು (ಐಚ್ಛಿಕ)',
      schoolPlaceholder: 'ಉದಾ. ಸರ್ಕಾರಿ ಮಾದರಿ ಪದವಿಪೂರ್ವ ಕಾಲೇಜು',
      consentText: 'ನಾನು ನನಗಾಗಿ ಅಥವಾ ನನ್ನ ಮಗುವಿಗೆ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯುತ್ತಿದ್ದೇನೆ ಮತ್ತು ನನ್ನ ಆದ್ಯತೆಗಳನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಸಲು ಸಮ್ಮತಿಸುತ್ತೇನೆ.',
      consentWarning: 'ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಪೋಷಕರ ಒಪ್ಪಿಗೆ ಮತ್ತು ಗೌಪ್ಯತಾ ನಿಯಮಗಳನ್ನು ದೃಢೀಕರಿಸಿ.',
      step2Title: 'ಹಂತ 2 • ಶೈಕ್ಷಣಿಕ ಹಂತ',
      step2Desc: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಶೈಕ್ಷಣಿಕ ಸ್ಥಿತಿ ಯಾವುದು ಎಂದು ತಿಳಿಸಿ.',
      academicStageLabel: 'ಪ್ರಸ್ತುತ ಶೈಕ್ಷಣಿಕ ಹಂತ *',
      schoolStreamLabel: 'ಪ್ರಸ್ತುತ / ಯೋಜಿತ ವಿಭಾಗ *',
      step3Title: 'ಹಂತ 3 • ವಿಷಯಗಳು ಮತ್ತು ಸಾಮರ್ಥ್ಯಗಳು',
      step3Desc: 'ನಿಮಗೆ ಇಷ್ಟವಾದ ವಿಷಯಗಳು ಮತ್ತು ನೈಸರ್ಗಿಕ ಬೌದ್ಧಿಕ ಶಕ್ತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
      preferredSubjectsLabel: 'ನೀವು ಇಷ್ಟಪಡುವ / ಬಲವಾಗಿರುವ ವಿಷಯಗಳು',
      challengingSubjectsLabel: 'ಕಠಿಣವೆನಿಸುವ ವಿಷಯಗಳು',
      strengthsLabel: 'ನಿಮ್ಮ ಪ್ರಮುಖ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಆಸಕ್ತಿಗಳು',
      step4Title: 'ಹಂತ 4 • ಬಜೆಟ್ ಮತ್ತು ಸಾಧ್ಯತೆ',
      step4Desc: 'ಕಡಿಮೆ ವೆಚ್ಚದ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡಿ.',
      budgetHeading: 'ಕುಟುಂಬದ ಶಿಕ್ಷಣ ಬಜೆಟ್ ಅನುಕೂಲತೆ',
      careerPreferencesHeading: 'ವಿಶೇಷ ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರಗಳು (ಅನ್ವಯವಾಗುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ)',
      profileUpdatedToast: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಲಾಗಿದೆ! RIASEC ವೃತ್ತಿ ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ.',
      finishAndAssessBtn: 'ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ ಮತ್ತು ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ',
      nextStepBtn: 'ಮುಂದಿನ ಹಂತ',
      prevStepBtn: 'ಹಿಂದಿನ ಹಂತ'
    },
    dashboard: {
      title: 'ವಿದ್ಯಾರ್ಥಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      subtitle: 'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಶೈಕ್ಷಣಿಕ ಅವಲೋಕನ, RIASEC ರೇಡಾರ್, ಉಳಿಸಿದ ವೃತ್ತಿಗಳು ಮತ್ತು ಮೈಲಿಗಲ್ಲುಗಳ ಟ್ರ್ಯಾಕರ್.',
      welcomeUser: 'ಸುಸ್ವಾಗತ',
      welcomeNewUser: 'NextGen Navigators ವೃತ್ತಿ ನಿಯಂತ್ರಣ ಕೇಂದ್ರಕ್ಕೆ ಸುಸ್ವಾಗತ!',
      completeProfilePrompt: 'ವೈಯಕ್ತಿಕ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್‌ಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಲು ನಿಮ್ಮ 5-ನಿಮಿಷದ RIASEC ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
      mySavedCareers: 'ಉಳಿಸಿದ ವೃತ್ತಿಗಳ ಪಟ್ಟಿ',
      assessmentResults: 'RIASEC ಸಾಮರ್ಥ್ಯ ಪ್ರೊಫೈಲ್',
      myRoadmap: 'ಮೈಲಿಗಲ್ಲು ಪ್ರಗತಿ ಟ್ರ್ಯಾಕರ್',
      mySkills: 'ಕೌಶಲ್ಯ ಮತ್ತು ಅನುಭವ ಕೋಶ',
      noSavedCareers: 'ನೀವು ಇನ್ನೂ ಯಾವುದೇ ವೃತ್ತಿಗಳನ್ನು ಉಳಿಸಿಲ್ಲ. ಉತ್ತಮ ವೃತ್ತಿಗಳನ್ನು ಗುರುತಿಸಲು ವೃತ್ತಿ ಅನ್ವೇಷಕವನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ!',
      noAssessmentsYet: 'ವೈಜ್ಞಾನಿಕ RIASEC ರೇಡಾರ್ ಚಾರ್ಟ್ ನೋಡಲು ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
      activeProfile: 'ಸಕ್ರಿಯ ವಿದ್ಯಾರ್ಥಿ ಪ್ರೊಫೈಲ್',
      profileLevel: 'ಶೈಕ್ಷಣಿಕ ಹಂತ',
      profileBudget: 'ಬಜೆಟ್ ಹಂತ',
      assessmentTab: 'ಸಾಮರ್ಥ್ಯ ಅಂಕಗಳು',
      savedCareersTab: 'ಉಳಿಸಿದ ಪಟ್ಟಿ',
      roadmapTab: 'ರೋಡ್‌ಮ್ಯಾಪ್ ಟ್ರ್ಯಾಕರ್',
      sessionsTab: 'ಮಾರ್ಗದರ್ಶನ ಅವಧಿಗಳು',
      takeTestBtn: 'ಉಚಿತ ಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ',
      browseCareersBtn: 'ವೃತ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      riasecScoresTitle: 'ವೈಜ್ಞಾನಿಕ RIASEC ರೇಡಾರ್',
      topMatch: 'ಅತ್ಯುತ್ತಮ ವೃತ್ತಿ ಹೊಂದಾಣಿಕೆ',
      retakeAssessment: 'ಮರುಪರೀಕ್ಷೆ ನೀಡಿ',
      milestonesCompleted: 'ಪೂರ್ಣಗೊಂಡ ಮೈಲಿಗಲ್ಲುಗಳು'
    },
    explorer: {
      title: 'ವೃತ್ತಿ ಅನ್ವೇಷಕ',
      subtitle: 'ಪರಿಶೀಲಿಸಿದ ವೇತನ ಶ್ರೇಣಿ, ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗಗಳು ಮತ್ತು ಪ್ರವೇಶ ಪರೀಕ್ಷಾ ವಿವರಗಳೊಂದಿಗೆ 35+ ಭಾರತೀಯ ವೃತ್ತಿ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
      searchPlaceholder: 'ವೃತ್ತಿಯ ಹೆಸರು, ಕೌಶಲ್ಯ ಅಥವಾ ಉದ್ಯಮದ ಮೂಲಕ ಹುಡುಕಿ (ಉದಾ. AI, ಸೈಬರ್, ವೈದ್ಯ)...',
      filterSector: 'ಕ್ಷೇತ್ರ / ಉದ್ಯಮ',
      filterRiasec: 'RIASEC ಆಸಕ್ತಿ',
      filterBudget: 'ಕೈಗೆಟುಕುವ ಬಜೆಟ್ ಮಟ್ಟ',
      sortBy: 'ವಿಂಗಡಿಸಿ',
      sortAlphabetical: 'ವರ್ಣಮಾಲೆಯಂತೆ (A - Z)',
      sortSalaryHigh: 'ಗರಿಷ್ಠ ಆರಂಭಿಕ ವೇತನ',
      sortDurationLow: 'ಕಡಿಮೆ ಅಧ್ಯಯನ ಅವಧಿ',
      showingResults: 'ತೋರಿಸಲಾಗುತ್ತಿದೆ',
      ofCareers: 'ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿಗಳು',
      noResultsTitle: 'ಹೊಂದಾಣಿಕೆಯಾಗುವ ವೃತ್ತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
      noResultsDesc: 'ಎಲ್ಲಾ ಲಭ್ಯವಿರುವ ವೃತ್ತಿಗಳನ್ನು ನೋಡಲು ಹುಡುಕಾಟ ಪದಗಳನ್ನು ಬದಲಿಸಿ ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ.',
      resetFilters: 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ',
      entrySalary: 'ಆರಂಭಿಕ ವೇತನ (0-2 ವರ್ಷಗಳು)',
      studyDuration: 'ಅಧ್ಯಯನ ಅವಧಿ',
      recommendedStream: 'ಶಿಫಾರಸು ಮಾಡಿದ 11-12ನೇ ವಿಭಾಗ',
      alternativeLowCost: 'ಕಡಿಮೆ ವೆಚ್ಚದ / ಶೂನ್ಯ-ಸಾಲದ ಮಾರ್ಗ'
    },
    recommendations: {
      title: 'ವೈಯಕ್ತಿಕ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳು',
      subtitle: 'ನಿಮ್ಮ RIASEC ಅಂಕಗಳು, ಆಸಕ್ತಿಯ ವಿಷಯಗಳು ಮತ್ತು ಬಜೆಟ್ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಾಣಿಕೆಯಾದ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳು.',
      matchScore: 'ಹೊಂದಾಣಿಕೆ ಅಂಕ',
      primaryReasons: 'ಇದು ನಿಮಗೆ ಏಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ',
      overlapSubjects: 'ವಿಷಯ ಹೊಂದಾಣಿಕೆ',
      riasecAlignment: 'RIASEC ಸಾಮೀಪ್ಯ',
      viewRoadmapBtn: 'ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್ ವೀಕ್ಷಿಸಿ',
      viewDossierBtn: 'ಸಂಪೂರ್ಣ ವೃತ್ತಿ ಮಾಹಿತಿ ವೀಕ್ಷಿಸಿ',
      compareBtn: 'ವೃತ್ತಿಗಳನ್ನು ಹೋಲಿಕೆ ಮಾಡಿ',
      addToCompare: 'ಹೋಲಿಕೆಗೆ ಸೇರಿಸಿ',
      removeFromCompare: 'ಹೋಲಿಕೆಯಿಂದ ತೆಗೆಯಿರಿ',
      compareTrayText: 'ವೃತ್ತಿಗಳು ಹೋಲಿಕೆಗೆ ಆಯ್ಕೆಯಾಗಿವೆ',
      openCompareModal: 'ಪೂರ್ಣ ಹೋಲಿಕೆಯನ್ನು ತೆರೆಯಿರಿ',
      clearCompare: 'ಹೋಲಿಕೆ ಟ್ರೇ ತೆರವುಗೊಳಿಸಿ',
      saveToDashboard: 'ವೃತ್ತಿ ಉಳಿಸಿ',
      savedInDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ',
      retakePrompt: 'ಹೊಸ ಶಿಫಾರಸುಗಳು ಬೇಕೇ? ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಮರುಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ.',
      retakeBtn: 'ಮರುಪರೀಕ್ಷೆ ನೀಡಿ',
      noMatchesYet: 'ವೈಯಕ್ತಿಕ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು RIASEC ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ!'
    },
    assessment: {
      title: 'ಆಪ್ಟಿಟ್ಯೂಡ್ ಪರೀಕ್ಷೆ',
      subtitle: 'ಪರೀಕ್ಷಾ ಒತ್ತಡವಿಲ್ಲದೆ ನಿಮ್ಮ ನೈಜ ಆಲೋಚನೆ ಮತ್ತು ಸಮಸ್ಯೆ-ಪರಿಹರಿಸುವ ಶೈಲಿಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡಿ.',
      questionCount: 'ಪ್ರಶ್ನೆಗಳು',
      questionOf: 'ಪ್ರಶ್ನೆ',
      completed: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
      dimension: 'ಮೌಲ್ಯಮಾಪನ ಆಯಾಮ',
      nextBtn: 'ಮುಂದಿನ ಪ್ರಶ್ನೆ',
      prevBtn: 'ಹಿಂದಿನ ಪ್ರಶ್ನೆ',
      finishBtn: 'ಪೂರ್ಣಗೊಳಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶ ನೋಡಿ',
      ethicalNotice: 'ನೈತಿಕ ಪರೀಕ್ಷಾ ಭರವಸೆ: ನಾವು ಸಮಯದ ಒತ್ತಡವಿಲ್ಲದೆ ನಿಮ್ಮ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವ ಶೈಲಿಯನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತೇವೆ. ನಿಮ್ಮ ಉತ್ತರಗಳನ್ನು ಜಾಹೀರಾತುದಾರರಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.',
      liveScores: 'ಲೈವ್ RIASEC ವೆಕ್ಟರ್ ವಿಶ್ಲೇಷಣೆ',
      realisticLabel: 'ಪ್ರಾಯೋಗಿಕ, ಯಾಂತ್ರಿಕ, ಪರಿಕರಗಳು ಮತ್ತು ಯಂತ್ರೋಪಕರಣ',
      investigativeLabel: 'ವೈಜ್ಞಾನಿಕ ವಿಚಾರಣೆ, ಸಂಶೋಧನೆ ಮತ್ತು ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಚಿಂತನೆ',
      artisticLabel: 'ಸೃಜನಶೀಲ, ಅಭಿವ್ಯಕ್ತಿಶೀಲ, ದೃಶ್ಯ ಮತ್ತು ವಿನ್ಯಾಸ ಕಾರ್ಯಗಳು',
      socialLabel: 'ಜನರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು, ಬೋಧನೆ, ಸಮಾಲೋಚನೆ ಮತ್ತು ಆರೈಕೆ',
      enterprisingLabel: 'ನಾಯಕತ್ವ, ವ್ಯಾಪಾರ ನಿರ್ವಹಣೆ, ಪ್ರಭಾವ ಮತ್ತು ಸಂವಹನ',
      conventionalLabel: 'ವ್ಯವಸ್ಥಿತ ಡೇಟಾ, ನಿಯಮಗಳು, ಹಣಕಾಸಿನ ಆಡಿಟ್ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗಳು'
    },
    roadmap: {
      title: 'ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್ ಟ್ರ್ಯಾಕರ್',
      subtitle: 'ಶಾಲಾ ವಿಷಯಗಳು, ಆರಂಭಿಕ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಕಾಲೇಜು ಪ್ರವೇಶದವರೆಗೆ ಹಂತ-ಹಂತವಾಗಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ 6-ಹಂತದ ಮೈಲಿಗಲ್ಲು ಟ್ರ್ಯಾಕರ್.',
      switchCareer: 'ವೃತ್ತಿ ರೋಡ್‌ಮ್ಯಾಪ್ ಆಯ್ಕೆಮಾಡಿ:',
      overallProgress: 'ಮೈಲಿಗಲ್ಲು ಪೂರ್ಣತೆಯ ಪ್ರಗತಿ',
      completedMilestones: 'ಪೂರ್ಣಗೊಂಡ ಮೈಲಿಗಲ್ಲುಗಳು',
      remainingMilestones: 'ಬಾಕಿ ಇರುವ ಮೈಲಿಗಲ್ಲುಗಳು',
      markComplete: 'ಪೂರ್ಣ ಎಂದು ಗುರುತಿಸಿ',
      markIncomplete: 'ಅಪೂರ್ಣ ಎಂದು ಗುರುತಿಸಿ',
      customNotes: 'ವೈಯಕ್ತಿಕ ಅಧ್ಯಯನ ಟಿಪ್ಪಣಿಗಳು',
      notesPlaceholder: 'ನಿಮ್ಮ ವೇಳಾಪಟ್ಟಿ, ಕಾಲೇಜು ಗುರಿಗಳು ಅಥವಾ ನೆನಪಿನ ಟಿಪ್ಪಣಿಗಳನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
      saveNotes: 'ಟಿಪ್ಪಣಿಗಳನ್ನು ಉಳಿಸಿ',
      notesSaved: 'ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
      downloadRoadmap: 'ರೋಡ್‌ಮ್ಯಾಪ್ ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
      keyResources: 'ಪ್ರಮುಖ ಕಲಿಕಾ ಪೋರ್ಟಲ್‌ಗಳು'
    },
    roi: {
      title: 'ಆರ್ಥಿಕ ROI ಮತ್ತು ಶುಲ್ಕಗಳ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      subtitle: 'ಸರ್ಕಾರಿ, ಖಾಸಗಿ ಮತ್ತು ಪಾಲಿಟೆಕ್ನಿಕ್ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಟ್ಟು ಪದವಿ ವೆಚ್ಚ ಹಾಗೂ ಆರಂಭಿಕ ವೇತನದ ನೈಜ ಹೋಲಿಕೆ.',
      selectCareer: 'ವಿಶ್ಲೇಷಿಸಲು ವೃತ್ತಿ ಆಯ್ಕೆಮಾಡಿ',
      benchmarkSalary: 'ಪರಿಶೀಲಿಸಿದ ಆರಂಭಿಕ ವೇತನ',
      tuitionEstimates: 'ಬೋಧನಾ ಶುಲ್ಕ ಮತ್ತು ವಸತಿ ವೆಚ್ಚ',
      govtCollege: 'ಸರ್ಕಾರಿ ಕಾಲೇಜು / ವಿಶ್ವವಿದ್ಯಾಲಯ',
      privateCollege: 'ಖಾಸಗಿ ಸಂಸ್ಥೆ (ಶ್ರೇಣಿ 1/2)',
      deemedCollege: 'ವಾಣಿಜ್ಯ ಡೀಮ್ಡ್ ವಿಶ್ವವಿದ್ಯಾಲಯ',
      annualFees: 'ವಾರ್ಷಿಕ ಬೋಧನಾ ಶುಲ್ಕ',
      totalDegreeCost: 'ಒಟ್ಟು ಹೂಡಿಕೆ (ಪದವಿ + ವಸತಿ)',
      breakEvenYears: 'ವೆಚ್ಚ ಮರುಪಾವತಿ ಅವಧಿ (ROI)',
      salarySource: 'ರಾಷ್ಟ್ರೀಯ ಉದ್ಯೋಗ ಸೇವೆ (NCS) 2026 ವರದಿ',
      disclaimer: 'ವೇತನ ಶ್ರೇಣಿಗಳು ಪರಿಶೀಲಿಸಿದ ಉದ್ಯಮದ ಸರಾಸರಿಗಳಾಗಿವೆ. ವೈಯಕ್ತಿಕ ಗಳಿಕೆಯು ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಗುಣಮಟ್ಟವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.',
      scholarshipTip: 'ಸಲಹೆ: ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು ಮತ್ತು ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು (ಉದಾ. ಕರ್ನಾಟಕ SSP) ಶುಲ್ಕವನ್ನು ಶೂನ್ಯಕ್ಕೆ ಇಳಿಸುತ್ತವೆ.'
    },
    exams: {
      title: 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ರೇಡಾರ್',
      subtitle: 'ಭಾರತದ ಪ್ರಮುಖ ಸ್ಪರ್ಧಾತ್ಮಕ ಹಾಗೂ ಕಾಲೇಜು ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ವೇಳಾಪಟ್ಟಿ, ಪಠ್ಯಕ್ರಮ ಮತ್ತು ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳು.',
      searchExams: 'ಪರೀಕ್ಷೆ ಅಥವಾ ಸಂಸ್ಥೆಯನ್ನು ಹುಡುಕಿ (ಉದಾ. KCET, JEE, NEET, CUET)...',
      filterStream: 'ವಿಭಾಗವಾರು ಫಿಲ್ಟರ್',
      registrationWindow: 'ನೋಂದಣಿ ಅವಧಿ',
      examWindow: 'ಪರೀಕ್ಷೆ ನಡೆಯುವ ತಿಂಗಳು',
      conductedBy: 'ನಡೆಸುವ ಸಂಸ್ಥೆ',
      eligibilityCriteria: 'ಅರ್ಹತಾ ಮಾನದಂಡಗಳು',
      examPattern: 'ಪರೀಕ್ಷಾ ಮಾದರಿ ಮತ್ತು ಪಠ್ಯಕ್ರಮ',
      officialPortal: 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಭೇಟಿ ನೀಡಿ',
      freeResources: 'ಉಚಿತ ತಯಾರಿ ಸಂಪನ್ಮೂಲಗಳು',
      pinExam: 'ರೇಡಾರ್‌ಗೆ ಪಿನ್ ಮಾಡಿ',
      unpinExam: 'ಪಿನ್ ತೆಗೆದುಹಾಕಿ',
      pinnedExams: 'ನನ್ನ ಪಿನ್ ಮಾಡಿದ ಪರೀಕ್ಷೆಗಳು'
    },
    scholarships: {
      title: 'ಪರಿಶೀಲಿಸಿದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಡೈರೆಕ್ಟರಿ',
      subtitle: 'ಸಾಲ-ಮುಕ್ತ ಉನ್ನತ ಶಿಕ್ಷಣವನ್ನು ಸಾಧಿಸಲು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆಗಳು ಮತ್ತು ಬಡ್ಡಿ ಸಹಾಯಧನಗಳು.',
      searchScholarships: 'ಹೆಸರು, ರಾಜ್ಯ ಅಥವಾ ವರ್ಗದ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹುಡುಕಿ...',
      categoryFilter: 'ವರ್ಗ ಫಿಲ್ಟರ್',
      benefitAmount: 'ವಾರ್ಷಿಕ ನೆರವು',
      eligibility: 'ಪ್ರಮುಖ ಅರ್ಹತಾ ಷರತ್ತುಗಳು',
      deadline: 'ಅರ್ಜಿ ಸಲ್ಲಿಕೆ ಅವಧಿ',
      officialLink: 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
      applyOnline: 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಲಭ್ಯವಿದೆ',
      requiredDocuments: 'ಕಡ್ಡಾಯ ದಾಖಲೆಗಳು',
      cautionMiddlemen: 'ಎಚ್ಚರಿಕೆ: ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳಿಗೆ ಎಂದಿಗೂ ಅರ್ಜಿ ಶುಲ್ಕವಿರುವುದಿಲ್ಲ. ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಮೂಲಕವೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
    },
    mentorship: {
      title: 'ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗದರ್ಶಕರ ಡೈರೆಕ್ಟರಿ',
      subtitle: 'IIT, IISc, ಪ್ರಮುಖ ರಾಜ್ಯ ಕಾಲೇಜುಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಕಂಪನಿಗಳ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ವೃತ್ತಿಪರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.',
      searchMentors: 'ಕ್ಷೇತ್ರ, ಪಾತ್ರ ಅಥವಾ ಹಿನ್ನೆಲೆಯ ಮೂಲಕ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಹುಡುಕಿ...',
      requestSessionBtn: 'ಉಚಿತ ಮಾರ್ಗದರ್ಶನ ಅವಧಿ ವಿನಂತಿಸಿ',
      expertise: 'ಕಾರ್ಯಕ್ಷೇತ್ರ',
      education: 'ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ',
      experience: 'ಉದ್ಯಮ ಅನುಭವ',
      yearsExp: 'ವರ್ಷಗಳ ಅನುಭವ',
      modalTitle: '1-ಆನ್-1 ಮಾರ್ಗದರ್ಶನ ಅವಧಿಯನ್ನು ನಿಗದಿಪಡಿಸಿ',
      mentorName: 'ಆಯ್ಕೆಮಾಡಿದ ಮಾರ್ಗದರ್ಶಕರು',
      selectDate: 'ಆದ್ಯತೆಯ ದಿನಾಂಕ',
      selectTime: 'ಆದ್ಯತೆಯ ಸಮಯ',
      sessionPurpose: 'ಸಮಾಲೋಚನಾ ವಿಷಯ',
      purposePlaceholder: 'ಕಾಲೇಜು ಪ್ರವೇಶ, ಪರೀಕ್ಷಾ ತಯಾರಿ ಅಥವಾ ಕೌಶಲ್ಯಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
      confirmBooking: 'ಖಚಿತಪಡಿಸಿ ಮತ್ತು ವಿನಂತಿ ಕಳುಹಿಸಿ',
      bookingSuccess: 'ಮಾರ್ಗದರ್ಶನ ವಿನಂತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ! ಮಾರ್ಗದರ್ಶಕರು ಇಮೇಲ್ ಮೂಲಕ ದೃಢೀಕರಿಸುತ್ತಾರೆ.',
      mySessions: 'ನನ್ನ ನಿಗದಿತ ಅವಧಿಗಳು',
      noSessions: 'ಯಾವುದೇ ಸಕ್ರಿಯ ಮಾರ್ಗದರ್ಶನ ಅವಧಿಗಳು ನಿಗದಿಯಾಗಿಲ್ಲ.'
    },
    resume: {
      title: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಮತ್ತು ರೆಸ್ಯೂಮೆ ಬಿಲ್ಡರ್',
      subtitle: 'ಕಾಲೇಜು ಪ್ರವೇಶ ಮತ್ತು ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳಿಗಾಗಿ ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳು, ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಸಾಧನೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ಶುದ್ಧ ATS-ಅನುಕೂಲಕರ ಸಿವಿ ರಚಿಸಿ.',
      personalInfo: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ',
      academicSummary: 'ಶೈಕ್ಷಣಿಕ ವಿವರ',
      skillsSection: 'ಕೌಶಲ್ಯ ಭಂಡಾರ',
      projectsSection: 'ಶೈಕ್ಷಣಿಕ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಕಾರ್ಯ-ರುಜುವಾತು',
      certificationsSection: 'ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಕೋರ್ಸ್‌ಗಳು',
      experienceSection: 'ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ನಾಯಕತ್ವ',
      languagesSection: 'ತಿಳಿದಿರುವ ಭಾಷೆಗಳು',
      exportPdf: 'ಪಿಡಿಎಫ್ ಆಗಿ ಮುದ್ರಿಸಿ / ಉಳಿಸಿ',
      printPreview: 'ದಸ್ತಾವೇಜು ವೀಕ್ಷಿಸಿ',
      addSkill: 'ಕೌಶಲ್ಯ ಸೇರಿಸಿ',
      addProject: 'ಪ್ರಾಜೆಕ್ಟ್ ಸೇರಿಸಿ',
      editorTab: 'ರೆಸ್ಯೂಮೆ ಸಂಪಾದಕ',
      previewTab: 'ಲೈವ್ ಫಾರ್ಮ್ಯಾಟ್ ಮುನ್ನೋಟ',
      techSkillsTitle: 'ತಾಂತ್ರಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಕೌಶಲ್ಯಗಳು',
      softSkillsTitle: 'ವೈಯಕ್ತಿಕ ಮತ್ತು ನಾಯಕತ್ವ ಸಾಮರ್ಥ್ಯಗಳು',
      languagesTitle: 'ತಿಳಿದಿರುವ ಭಾಷೆಗಳು',
      educationTitle: 'ಶಿಕ್ಷಣ ಇತಿಹಾಸ',
      addTechSkillBtn: 'ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯ ಸೇರಿಸಿ',
      addSoftSkillBtn: 'ಸಾಫ್ಟ್ ಸ್ಕಿಲ್ ಸೇರಿಸಿ',
      addLanguageBtn: 'ಭಾಷೆ ಸೇರಿಸಿ',
      addEducationBtn: 'ಶೈಕ್ಷಣಿಕ ದಾಖಲೆ ಸೇರಿಸಿ',
      addCertificationBtn: 'ಪ್ರಮಾಣಪತ್ರ ಸೇರಿಸಿ',
      schoolNamePlaceholder: 'ಶಾಲೆ / ಕಾಲೇಜಿನ ಹೆಸರು (ಉದಾ. RNSIT ಬೆಂಗಳೂರು)',
      degreePlaceholder: 'ಪದವಿ / ತರಗತಿ (ಉದಾ. 12ನೇ ತರಗತಿ ವಿಜ್ಞಾನ PCM)',
      yearPlaceholder: 'ತೇರ್ಗಡೆಯಾದ ವರ್ಷ (ಉದಾ. 2026)',
      scorePlaceholder: 'ಅಂಕಗಳು / ಶೇಕಡಾವಾರು (ಉದಾ. 88%)',
      projectTitlePlaceholder: 'ಪ್ರಾಜೆಕ್ಟ್ ಶೀರ್ಷಿಕೆ (ಉದಾ. ಸ್ಮಾರ್ಟ್ IoT ಹವಾಮಾನ ಮಾನಿಟರ್)',
      projectDescPlaceholder: 'ನೀವು ಏನು ನಿರ್ಮಿಸಿದ್ದೀರಿ, ಪರಿಹರಿಸಿದ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ವಿವರಿಸಿ...',
      projectSkillsPlaceholder: 'ಬಳಸಿದ ತಂತ್ರಜ್ಞಾನಗಳು (ಉದಾ. Python, Arduino)',
      certNamePlaceholder: 'ಪ್ರಮಾಣಪತ್ರದ ಹೆಸರು (ಉದಾ. NPTEL ಪೈಥಾನ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್)',
      certIssuerPlaceholder: 'ನೀಡಿದ ಸಂಸ್ಥೆ (ಉದಾ. IIT ಮದ್ರಾಸ್ / SWAYAM)',
      atsNotice: 'ಕಾಲೇಜು ಪ್ರವೇಶ ಮತ್ತು ಇಂಟರ್ನ್‌ಶಿಪ್ ಆಯ್ಕೆಗಾಗಿ ಅತ್ಯುತ್ತಮವಾದ ಏಕ-ಕಾಲಮ್ ವಿನ್ಯಾಸ.',
      emptySkills: 'ಯಾವುದೇ ಕೌಶಲ್ಯಗಳನ್ನು ಇನ್ನೂ ಸೇರಿಸಲಾಗಿಲ್ಲ. ಮೇಲೆ ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಸೇರಿಸಿ.',
      emptyProjects: 'ಯಾವುದೇ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳನ್ನು ಇನ್ನೂ ಸೇರಿಸಲಾಗಿಲ್ಲ. ನಿಮ್ಮ ಪ್ರಾಯೋಗಿಕ ಕೆಲಸಗಳನ್ನು ಪ್ರದರ್ಶಿಸಿ.',
      emptyEducation: 'ಯಾವುದೇ ಶಿಕ್ಷಣ ದಾಖಲೆಗಳನ್ನು ಇನ್ನೂ ಸೇರಿಸಲಾಗಿಲ್ಲ.'
    },
    simulator: {
      title: 'ವಿಷಯ ಸಿಮ್ಯುಲೇಟರ್',
      subtitle: 'NEP-2020 ಶಾಲಾ ವಿಷಯ ಸಂಯೋಜನೆಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಮತ್ತು 35+ ವೃತ್ತಿಗಳಲ್ಲಿ ನಿಮ್ಮ ನೈಜ-ಸಮಯದ ಅರ್ಹತೆಯ ಪರಿಣಾಮವನ್ನು ನೋಡಿ.',
      step1: '1. ನಿಮ್ಮ ಶಾಲಾ ವಿಷಯ ಸಂಯೋಜನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      step2: '2. ವಿಷಯ ಕೈಬಿಡುವ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಬ್ರಿಡ್ಜ್ ಕೋರ್ಸ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
      step3: '3. ವೃತ್ತಿ ಅರ್ಹತೆಯ ಮೇಲೆ ನೇರ ಪರಿಣಾಮ',
      compatibilityRating: 'NEP 2020 ಬಹುಶಿಸ್ತೀಯ ಸಂಯೋಜನೆ',
      lowCostAlternative: 'ಕಡಿಮೆ ವೆಚ್ಚದ ಪರ್ಯಾಯ:',
      estimatedSavings: 'ಖಾಸಗಿ ಪದವಿಗೆ ಹೋಲಿಸಿದರೆ ಅಂದಾಜು ಉಳಿತಾಯ:',
      realtimeImpact: 'ವೃತ್ತಿ ಅರ್ಹತೆಯ ಮೇಲೆ ನೈಜ-ಸಮಯದ ಪರಿಣಾಮ',
      fullyEligible: '100% ಸಂಪೂರ್ಣ ಅರ್ಹ',
      fullyEligibleDesc: 'ನಿಮ್ಮ ಆಯ್ಕೆಯ ಸಂಯೋಜನೆಯು ಎಲ್ಲಾ ಕಡ್ಡಾಯ ಶಾಸನಬದ್ಧ ಷರತ್ತುಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ.',
      partialMatch: 'ಭಾಗಶಃ ಹೊಂದಾಣಿಕೆ (ಬ್ರಿಡ್ಜ್ ಕೋರ್ಸ್ ಅಗತ್ಯವಿದೆ)',
      partialMatchDesc: 'ಐಚ್ಛಿಕ ವಿಷಯ ಬದಲಾವಣೆ, ಡಿಪ್ಲೊಮಾ ಲ್ಯಾಟರಲ್ ಪ್ರವೇಶ ಅಥವಾ NIOS ಪರೀಕ್ಷೆಯ ಮೂಲಕ ಪ್ರವೇಶಿಸಬಹುದು.',
      lockedOut: 'ಅರ್ಹತೆಯಿಂದ ಹೊರಗಿದೆ',
      lockedOutDesc: 'ಕಡ್ಡಾಯ ವಿಷಯಗಳು ಲಭ್ಯವಿಲ್ಲ. ಪರ್ಯಾಯ ಮಾರ್ಗಗಳನ್ನು ನೀಡಲಾಗಿದೆ.',
      unlockedBadge: 'ಅನ್‌ಲಾಕ್ ಆಗಿದೆ',
      bridgeBadge: 'ಬ್ರಿಡ್ಜ್ ಅಗತ್ಯವಿದೆ',
      lockedBadge: 'ಲಾಕ್ ಆಗಿದೆ',
      missingPrereq: 'ಅಗತ್ಯವಿರುವ ವಿಷಯ:',
      mathWarningTitle: 'ಗಣಿತ ಕೈಬಿಟ್ಟಿರುವ ಎಚ್ಚರಿಕೆ:',
      mathWarningDesc: 'ಗಣಿತವನ್ನು ಕೈಬಿಡುವುದರಿಂದ ಬಿ.ಟೆಕ್ ಎಂಜಿನಿಯರಿಂಗ್, ಆಕ್ಚುರಿಯಲ್ ಸೈನ್ಸ್ ಮತ್ತು ಡೇಟಾ ಸೈನ್ಸ್ ಪದವಿಗಳು ನಿರ್ಬಂಧಿಸಲ್ಪಡುತ್ತವೆ.',
      mathAlternative: 'ನೀವು ಅನ್ವಯಿಕ ಗಣಿತವನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು ಅಥವಾ NIOS ಮೂಲಕ ಪರೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.',
      bioWarningTitle: 'ಜೀವಶಾಸ್ತ್ರ ಕೈಬಿಟ್ಟಿರುವ ಎಚ್ಚರಿಕೆ:',
      bioWarningDesc: 'ಜೀವಶಾಸ್ತ್ರವನ್ನು ಕೈಬಿಡುವುದರಿಂದ NEET-UG ವೈದ್ಯಕೀಯ ಪ್ರವೇಶ ನಿರ್ಬಂಧಿಸಲ್ಪಡುತ್ತದೆ. ಇತರ ಆರೋಗ್ಯ ರಕ್ಷಣಾ ವೃತ್ತಿಗಳು ಲಭ್ಯವಿರುತ್ತವೆ.'
    },
    chatbot: {
      title: 'NextGen ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ವೃತ್ತಿ ಸಮಾಲೋಚಕ',
      subtitle: 'ಕೋರ್ಸ್‌ಗಳು, ಕಾಲೇಜುಗಳು, ಪರೀಕ್ಷೆಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನ ಅಥವಾ ಪಠ್ಯಕ್ರಮದ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ.',
      welcomeMessage: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ NextGen Navigators ವೃತ್ತಿ ಸಹಾಯಕ. ಗೂಗಲ್ ಜೆಮಿನಿ ಬೆಂಬಲದೊಂದಿಗೆ, ಇಂದು ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗೆ ನಾನು ಹೇಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲಿ?',
      verifiedBadge: 'ಪರಿಶೀಲಿಸಿದ ಸರ್ಕಾರಿ ಮಾಹಿತಿ',
      onlineBadge: 'ಜೆಮಿನಿ 3.8 AI ಆನ್‌ಲೈನ್',
      clearChat: 'ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ',
      chatCleared: 'ಸಂಭಾಷಣಾ ಇತಿಹಾಸ ತೆರವುಗೊಂಡಿದೆ.',
      copy: 'ನಕಲಿಸಿ',
      copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
      continuousHint: 'ನಿರಂತರ ಸಂಭಾಷಣೆ ಸಕ್ರಿಯವಾಗಿದೆ',
      modelLabel: 'ಗೂಗಲ್ ಜೆಮಿನಿ AI ಬೆಂಬಲಿತ',
      inputPlaceholder: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ ವೃತ್ತಿ, ಕೋರ್ಸ್‌ಗಳು, ಪರೀಕ್ಷೆಗಳು ಅಥವಾ ಶುಲ್ಕದ ಬಗ್ಗೆ ಕೇಳಿ...',
      send: 'ಕಳುಹಿಸಿ',
      readAloud: 'ಓದಿ ಕೇಳಿಸಿ',
      stopSpeaking: 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
      quickChips: [
        '10ನೇ ತರಗತಿಯ ನಂತರ ಏನು ಮಾಡಬೇಕು?',
        'AI ಅಥವಾ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ಪ್ರವೇಶಿಸುವುದು ಹೇಗೆ?',
        'ಕೈಗೆಟುಕುವ ಮತ್ತು ಶೂನ್ಯ-ಸಾಲ ಕಾಲೇಜು ಮಾರ್ಗಗಳು',
        'ನನ್ನ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೂಕ್ತವಾದ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
        'KCET, JEE ಮತ್ತು NEET ತಯಾರಿ ತಂತ್ರ'
      ]
    },
    footer: {
      aboutTitle: 'NextGen Navigators ಬಗ್ಗೆ',
      aboutText: 'ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗಗಳು, ಪಾರದರ್ಶಕ ಮಾಹಿತಿ ಮತ್ತು ಸ್ಪಷ್ಟ ರೋಡ್‌ಮ್ಯಾಪ್‌ಗಳೊಂದಿಗೆ ಭಾರತದ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸಶಕ್ತಗೊಳಿಸುವ ಮುಕ್ತ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆ.',
      quickLinksTitle: 'ಮಾರ್ಗದರ್ಶನ ಪರಿಕರಗಳು',
      legalTitle: 'ಶಾಸನಬದ್ಧತೆ ಮತ್ತು ನೈತಿಕತೆ',
      legalText: 'ನಾವು ಕಟ್ಟುನಿಟ್ಟಾದ ಗೌಪ್ಯತೆ-ಮೂಲಕ-ವಿನ್ಯಾಸ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತೇವೆ. ನಾವು ಎಂದಿಗೂ ಆಧಾರ್/ಪ್ಯಾನ್, ಜಾತಿ ಅಥವಾ ಧರ್ಮವನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ. ಡೇಟಾವನ್ನು NCS, AICTE, KEA ಮತ್ತು NTA ಯಂತಹ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳಿಂದ ಪಡೆಯಲಾಗಿದೆ.',
      contactTitle: 'ಕ್ಯಾಂಪಸ್ ಕಚೇರಿ ಮತ್ತು ಸಂಪರ್ಕ',
      copyright: 'NextGen Navigators. ಶೈಕ್ಷಣಿಕ ಮತ್ತು ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    },
    contact: {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      subtitle: 'ಕ್ಯಾಂಪಸ್ ಸಂಪರ್ಕ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ಬೆಂಬಲ',
      name: 'ಅಜಹರ್ ಅಹ್ಮದ್ ಷರೀಫ್',
      field: 'ಡೆವಲಪರ್ ಮತ್ತು ಸಂಯೋಜಕರು',
      purpose: 'ವೃತ್ತಿ ಮಾರ್ಗಸೂಚಿಗಳು, ಕಾಲೇಜು ಶುಲ್ಕ ಹೋಲಿಕೆ ಅಥವಾ ಮಾರ್ಗದರ್ಶನದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ.',
      email: 'ಇಮೇಲ್ ಸಂಪರ್ಕ',
      phone: 'ದೂರವಾಣಿ ಸಂಪರ್ಕ',
      location: 'ಕ್ಯಾಂಪಸ್ ವಿಳಾಸ',
      institutionalIdentity: 'ಸಾಂಸ್ಥಿಕ ಗುರುತು ಮತ್ತು ಉದ್ದೇಶ',
      aboutPlatformTitle: 'NextGen Navigators ಬಗ್ಗೆ',
      aboutPlatformDesc: 'NextGen Navigators ಭಾರತೀಯ ವೃತ್ತಿ ಮಾರ್ಗಗಳನ್ನು ಸರಳಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸ್ವತಂತ್ರ, ವಾಣಿಜ್ಯೇತರ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆಯಾಗಿದೆ. ನಾವು ಶಾಲಾ ಶಿಕ್ಷಣ ಮತ್ತು ವಿಶ್ವವಿದ್ಯಾಲಯ ಅಥವಾ ವೃತ್ತಿಪರ ಅವಕಾಶಗಳ ನಡುವಿನ ಮಾಹಿತಿಯ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತೇವೆ.',
      commitmentTitle: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನಮ್ಮ ಬದ್ಧತೆ',
      commitmentDesc: 'ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯ ಕಲಿಯುವವನೂ ಕಾಲೇಜು ಪ್ರವೇಶ, ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ನೈಜ ವೃತ್ತಿ ಗಳಿಕೆಯ ಬಗ್ಗೆ ಪಾರದರ್ಶಕ, ಪರಿಶೀಲಿಸಿದ ಡೇಟಾವನ್ನು ಪಡೆಯಲು ಅರ್ಹರು—ಇದು ವಾಣಿಜ್ಯ ಕೋಚಿಂಗ್ ಜಾಹೀರಾತುಗಳಿಂದ ಮುಕ್ತವಾಗಿದೆ.',
      coDeveloped: 'ವಿದ್ಯಾರ್ಥಿ ಸಮುದಾಯದ ಒಳಿತಿಗಾಗಿ RNSIT ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಹ-ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.',
      exploreCareersBtn: '35+ ಪರಿಶೀಲಿಸಿದ ವೃತ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ'
    },
    dayInLife: {
      badge: '3-ನಿಮಿಷದ ವೃತ್ತಿ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ (ಕಿರು-ಅನುಭವ)',
      subheading: 'ಯಾವುದೇ ವೃತ್ತಿ ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ನೈಜ ಕಾರ್ಯಸ್ಥಳದ ಸವಾಲನ್ನು ಅನುಭವಿಸಿ.',
      actionProtocol: 'ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಕಾರ್ಯ ಯೋಜನೆ ಏನು?',
      explanationTitle: 'ವೃತ್ತಿಪರ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ:',
      nextScenario: 'ಮುಂದಿನ ಕಾರ್ಯಸ್ಥಳದ ಸನ್ನಿವೇಶ',
      finishSimulation: 'ಸಿಮ್ಯುಲೇಶನ್ ಮುಕ್ತಾಯಗೊಳಿಸಿ',
      feedbackQuestion: 'ಈ ನೈಜ ಕಾರ್ಯಸ್ಥಳದ ಸನ್ನಿವೇಶ ನಿಮಗೆ ಹೇಗೆ ಅನಿಸಿತು?',
      lovedIt: 'ತುಂಬಾ ಇಷ್ಟವಾಯಿತು! ನನ್ನ ಯೋಚನೆಗೆ ಸೂಕ್ತವಾಗಿದೆ',
      neutral: 'ಸಾಧಾರಣ / ಸರಿಹೊಂದುತ್ತದೆ',
      disliked: 'ಇಷ್ಟವಾಗಲಿಲ್ಲ',
      close: 'ಸಿಮ್ಯುಲೇಶನ್ ಮುಚ್ಚಿ'
    },
    dossier: {
      headerTitle: 'NextGen Navigators ವೃತ್ತಿ ಅನ್ವೇಷಣಾ ದಸ್ತಾವೇಜು',
      headerSubtitle: 'ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗಾಗಿ ಅಧಿಕೃತ ವಿದ್ಯಾರ್ಥಿ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ದಾಖಲೆ.',
      printBtn: 'ಮುದ್ರಿಸಿ / ಪಿಡಿಎಫ್ ಉಳಿಸಿ',
      letterheadTitle: 'ಸಮಗ್ರ ವಿದ್ಯಾರ್ಥಿ ವೃತ್ತಿ ಮತ್ತು ಸನ್ನದ್ಧತೆಯ ದಸ್ತಾವೇಜು',
      generatedDate: 'ತಯಾರಾದ ದಿನಾಂಕ',
      verifiedBadge: 'ಪರಿಶೀಲಿಸಿದ ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆ',
      privacyNote: 'ಕಟ್ಟುನಿಟ್ಟಾದ ಗೌಪ್ಯತೆ ಭರವಸೆ (ಯಾವುದೇ ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ / ಜಾತಿ ವಿವರಗಳನ್ನು ಪಡೆದಿಲ್ಲ)',
      studentSnapshot: 'ವಿದ್ಯಾರ್ಥಿ ಪ್ರೊಫೈಲ್ ಸಾರಾಂಶ',
      nameLabel: 'ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು',
      classLabel: 'ಶೈಕ್ಷಣಿಕ ಹಂತ',
      cityLabel: 'ನಗರ / ಜಿಲ್ಲೆ',
      budgetLabel: 'ಬಜೆಟ್ ಅನುಕೂಲತೆ',
      riasecRadarTitle: 'ವೈಜ್ಞಾನಿಕ RIASEC ಸಾಮರ್ಥ್ಯ ಪ್ರೊಫೈಲ್',
      topMatchesTitle: 'ಉನ್ನತ ವೃತ್ತಿ ಶಿಫಾರಸುಗಳ ಕೋಷ್ಟಕ',
      primaryPathwayTitle: 'ಪ್ರಾಥಮಿಕ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗ ಮತ್ತು ಮೈಲಿಗಲ್ಲುಗಳು',
      officialNotice: 'ಅಧಿಕೃತ ಮಾರ್ಗದರ್ಶನ ಮುನ್ನೆಚ್ಚರಿಕೆ: ಈ ದಸ್ತಾವೇಜು ವಿದ್ಯಾರ್ಥಿಯ ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಕಾಲೇಜು ಪ್ರವೇಶಕ್ಕಾಗಿ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪ್ರಕಟಣೆಗಳನ್ನೇ ಸಂಪರ್ಕಿಸಿ.'
    },
    compare: {
      decisionSynthesisTitle: 'ಪ್ರಾಮಾಣಿಕ ನಿರ್ಧಾರ ಸಂಶ್ಲೇಷಣೆ ಮತ್ತು ಸೂಕ್ತತೆಯ ತೀರ್ಪು',
      optimalMatch: '✓ ಅತ್ಯುತ್ತಮ ಸಮಗ್ರ ಹೊಂದಾಣಿಕೆ',
      highestEarning: '★ ಗರಿಷ್ಠ ಆರಂಭಿಕ ಗಳಿಕೆ',
      advisorRec: '💡 ಸಲಹೆಗಾರರ ಶಿಫಾರಸು',
      optimalMatchDesc: 'ನಿಮ್ಮ RIASEC ಪ್ರೊಫೈಲ್ ಮತ್ತು ಬಜೆಟ್ ಮಟ್ಟಕ್ಕೆ ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.',
      highestEarningDesc: 'ಹೆಚ್ಚಿನ ಆರಂಭಿಕ ವೇತನ ನೀಡುತ್ತದೆ, ಆದರೆ ಶಿಕ್ಷಣ ಹೂಡಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸುವುದು ಅಗತ್ಯ.',
      advisorSameDesc: 'ಗರಿಷ್ಠ ಗಳಿಕೆಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಾಮರ್ಥ್ಯ ಎರಡರಲ್ಲೂ ಅತ್ಯುತ್ತಮ ಸಮತೋಲನ ಹೊಂದಿದೆ.',
      advisorDiffDesc: 'ನಿಮ್ಮ ಆದ್ಯತೆಗಳ ಆಧಾರದ ಮೇಲೆ ಉತ್ತಮ ದೀರ್ಘಕಾಲೀನ ಸ್ಥಿರತೆ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಹೊಂದಾಣಿಕೆಯನ್ನು ನೀಡುತ್ತದೆ.',
      pt1Aptitude: '1. ಸಾಮರ್ಥ್ಯ ಮತ್ತು RIASEC ಹೊಂದಾಣಿಕೆ',
      pt2Salary: '2. ಪರಿಶೀಲಿಸಿದ ವೇತನ ಸಾಮರ್ಥ್ಯ',
      pt3Eligibility: '3. ಪ್ರಮುಖ ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ',
      pt4Duration: '4. ಅಧ್ಯಯನ ಅವಧಿ',
      pt5Cost: '5. ಬೋಧನಾ ವೆಚ್ಚದ ವಿಶ್ಲೇಷಣೆ',
      pt6Roi: '6. ವೆಚ್ಚ ಮರುಪಾವತಿ ಅವಧಿ (ROI)',
      pt7Exams: '7. ಪ್ರವೇಶ ಪರೀಕ್ಷಾ ಅಗತ್ಯತೆಗಳು',
      pt8Pathways: '8. ಕಡಿಮೆ ವೆಚ್ಚದ ಪರ್ಯಾಯ',
      pt9Skills: '9. ಪ್ರಮುಖ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳು',
      pt10Growth: '10. ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆಯ ಪ್ರವೃತ್ತಿ',
      compatibility: 'ಹೊಂದಾಣಿಕೆ',
      entryLevel: 'ಆರಂಭಿಕ',
      required: 'ಅಗತ್ಯವಿದೆ',
      remove: 'ಹೋಲಿಕೆಯಿಂದ ತೆಗೆಯಿರಿ'
    },
    detail: {
      tabOverview: 'ಅವಲೋಕನ ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳು',
      tabPathways: 'ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಕಡಿಮೆ ವೆಚ್ಚದ ಮಾರ್ಗಗಳು',
      tabExams: 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ವೆಚ್ಚ',
      tabFuture: 'ಭವಿಷ್ಯದ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಲಿಂಕ್‌ಗಳು',
      descTitle: 'ವೃತ್ತಿಯ ವಿವರಣೆ',
      responsibilitiesTitle: 'ದೈನಂದಿನ ಜವಾಬ್ದಾರಿಗಳು',
      techSkillsTitle: 'ಪ್ರಮುಖ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳು',
      softSkillsTitle: 'ವೈಯಕ್ತಿಕ ಮತ್ತು ನಾಯಕತ್ವ ಸಾಮರ್ಥ್ಯಗಳು',
      highlightsTitle: 'ವೃತ್ತಿಯ ಮುಖ್ಯಾಂಶಗಳು',
      academicRoutesTitle: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಪದವಿಗಳು',
      entranceExamsTitle: 'ಪ್ರಮುಖ ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು',
      lowCostRouteTitle: 'ಕೈಗೆಟುಕುವ / ಶೂನ್ಯ-ಸಾಲ ಪರ್ಯಾಯ ಮಾರ್ಗ',
      futureSkillsTitle: 'ಉದಯೋನ್ಮುಖ ಕೌಶಲ್ಯ ಪ್ರವೃತ್ತಿಗಳು',
      govtPortalsTitle: 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮಾಹಿತಿ ಪೋರ್ಟಲ್‌ಗಳು'
    },
    disclaimers: {
      assessmentNotice: 'ಈ ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆಯು ವಿದ್ಯಾರ್ಥಿಯ ಆಸಕ್ತಿ ಮತ್ತು ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವ ಶೈಲಿಯ ಆಧಾರದ ಮೇಲೆ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಇದು ಪ್ರಮಾಣೀಕೃತ ವೃತ್ತಿಪರ ಆಪ್ತಸಮಾಲೋಚನೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.',
      salaryNotice: 'ವೇತನದ ಅಂದಾಜುಗಳು ರಾಷ್ಟ್ರೀಯ ಉದ್ಯೋಗ ಸೇವೆ (NCS, ಕಾರ್ಮಿಕ ಮತ್ತು ಉದ್ಯೋಗ ಸಚಿವಾಲಯ) 2026 ರ ವರದಿಯಿಂದ ಪಡೆಯಲಾಗಿದೆ.',
      roiNotice: 'ಶುಲ್ಕದ ಅಂದಾಜುಗಳು ಮತ್ತು ಮರುಪಾವತಿ ಅವಧಿಗಳು ರಾಜ್ಯ ಕೋಟಾ ಮತ್ತು ಸರಾಸರಿಗಳ ಮೇಲೆ ಆಧಾರಿತವಾಗಿವೆ.',
      emptyDirectoryNotice: 'ಪರಿಶೀಲಿಸಿದ ದಾಖಲೆಗಳು ಮಾತ್ರ: ನಾವು ಪರಿಶೀಲಿಸದ ಮಾಹಿತಿಯನ್ನು ಪ್ರದರ್ಶಿಸುವುದಿಲ್ಲ. ಮಾನ್ಯತೆ ಪಡೆದ ತಜ್ಞರು ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಮಾತ್ರ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ.'
    },
    admin: {
      portalTitle: 'NextGen ಆಡಳಿತ ನಿಯಂತ್ರಣ ಕೇಂದ್ರ',
      loginPrompt: 'ವೃತ್ತಿ ಮಾಹಿತಿ, ವಿದ್ಯಾರ್ಥಿವೇತನ ಪರಿಶೀಲನೆ ಮತ್ತು ಬಳಕೆದಾರರ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಅಧಿಕೃತ ನಿರ್ವಾಹಕರ ರುಜುವಾತುಗಳು ಅಗತ್ಯವಿದೆ.',
      manageCareers: 'ವೃತ್ತಿ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ',
      manageScholarships: 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಪರಿಶೀಲನೆ',
      manageMentors: 'ಮಾರ್ಗದರ್ಶಕರ ಡೈರೆಕ್ಟರಿ',
      manageExams: 'ಪರೀಕ್ಷಾ ರೇಡಾರ್ ನಿರ್ವಹಣೆ',
      auditLog: 'ಭದ್ರತಾ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು',
      userDirectory: 'ನೋಂದಾಯಿತ ಬಳಕೆದಾರರು',
      tabCatalog: 'ವೃತ್ತಿ ಕ್ಯಾಟಲಾಗ್',
      tabScholarships: 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
      tabMentors: 'ಮಾರ್ಗದರ್ಶಕರು',
      tabExams: 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು',
      tabTranslations: 'ಅನುವಾದ ನಿರ್ವಹಣೆ',
      tabUsers: 'ನೋಂದಾಯಿತ ಬಳಕೆದಾರರು',
      tabAudit: 'ಆಡಿಟ್ ಲಾಗ್‌ಗಳು',
      tabAnalytics: 'ವೇದಿಕೆ ವಿಶ್ಲೇಷಣೆ',
      tabTests: 'ಸ್ವಯಂಚಾಲಿತ ಪರೀಕ್ಷಾ ಸೂಟ್',
      transManagerTitle: 'ಕೇಂದ್ರೀಯ ಬಹುಭಾಷಾ ಅನುವಾದ ವ್ಯವಸ್ಥಾಪಕ',
      transManagerDesc: 'ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನ ಎಲ್ಲಾ ವಿಷಯಗಳ ನೇರ ಪರಿಶೀಲನೆ, ಸಂಪಾದನೆ ಮತ್ತು ಬದಲಾವಣೆ.',
      selectLangToEdit: 'ಸಂಪಾದಿಸಲು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      selectSectionToEdit: 'ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      searchKeys: 'ಕೀಗಳು ಅಥವಾ ವಿಷಯವನ್ನು ಹುಡುಕಿ',
      keyHeader: 'ಅನುವಾದ ಕೀ (Key)',
      englishOriginal: 'ಇಂಗ್ಲಿಷ್ ಉಲ್ಲೇಖ',
      localizedValue: 'ಅನುವಾದಿಸಿದ ವಿಷಯ',
      saveChanges: 'ಅನುವಾದ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
      resetDefaults: 'ಡೀಫಾಲ್ಟ್‌ಗೆ ಮರುಹೊಂದಿಸಿ',
      overridesSaved: 'ಕಸ್ಟಮ್ ಅನುವಾದಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ ಮತ್ತು ಸೈಟ್‌ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ!'
    }
  }
};

export const translations = TRANSLATIONS;

// --- DYNAMIC DATA TRANSLATION HELPERS ---

const CATEGORY_MAP: Record<string, { hi: string; kn: string }> = {
  'Technology': { hi: 'प्रौद्योगिकी (Technology)', kn: 'ತಂತ್ರಜ್ಞಾನ (Technology)' },
  'Engineering': { hi: 'इंजीनियरिंग (Engineering)', kn: 'ಎಂಜಿನಿಯರಿಂಗ್ (Engineering)' },
  'Healthcare': { hi: 'स्वास्थ्य सेवा (Healthcare)', kn: 'ಆರೋಗ್ಯ ಸೇವೆ (Healthcare)' },
  'Science': { hi: 'विज्ञान एवं अनुसंधान (Science)', kn: 'ವಿಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನೆ (Science)' },
  'Commerce': { hi: 'वाणिज्य (Commerce)', kn: 'ವಾಣಿಜ್ಯ (Commerce)' },
  'Finance': { hi: 'वित्त एवं बैंकिंग (Finance)', kn: 'ಹಣಕಾಸು ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ (Finance)' },
  'Law': { hi: 'विधि एवं न्याय (Law)', kn: 'ಕಾನೂನು ಮತ್ತು ನ್ಯಾಯ (Law)' },
  'Design': { hi: 'डिज़ाइन एवं यूएक्स (Design)', kn: 'ವಿನ್ಯಾಸ (Design)' },
  'Arts': { hi: 'कला एवं मानविकी (Arts)', kn: 'ಕಲೆ ಮತ್ತು ಮಾನವಿಕ (Arts)' },
  'Agriculture': { hi: 'कृषि एवं कृषि तकनीक (Agriculture)', kn: 'ಕೃಷಿ ಮತ್ತು ಅಗ್ರಿಟೆಕ್ (Agriculture)' },
  'Education': { hi: 'शिक्षा एवं शिक्षण (Education)', kn: 'ಶಿಕ್ಷಣ ಮತ್ತು ಬೋಧನೆ (Education)' },
  'Public Service': { hi: 'लोक सेवा एवं प्रशासन (Public Service)', kn: 'ಸಾರ್ವಜನಿಕ ಸೇವೆ (Public Service)' },
  'Entrepreneurship': { hi: 'उद्यमिता एवं स्टार्टअप (Entrepreneurship)', kn: 'ಉದ್ಯಮಶೀಲತೆ (Entrepreneurship)' },
  'Vocational': { hi: 'व्यावसायिक एवं कौशल (Vocational)', kn: 'ವೃತ್ತಿಪರ ಕೌಶಲ್ಯಗಳು (Vocational)' }
};

export function translateCategory(cat: string, lang: Language): string {
  if (lang === 'en' || !cat) return cat;
  return CATEGORY_MAP[cat]?.[lang] || cat;
}

export function translateSector(sector: string, lang: Language): string {
  if (lang === 'en' || !sector) return sector;
  return CATEGORY_MAP[sector]?.[lang] || sector;
}

const RIASEC_MAP: Record<string, { hi: { name: string; desc: string }; kn: { name: string; desc: string } }> = {
  'R': {
    hi: { name: 'यथार्थवादी (Realistic)', desc: 'व्यावहारिक, उपकरण एवं प्रणालियों के साथ कार्य' },
    kn: { name: 'ವಾಸ್ತವಿಕ (Realistic)', desc: 'ಪ್ರಾಯೋಗಿಕ, ಯಂತ್ರೋಪಕರಣ ಹಾಗೂ ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯ' }
  },
  'I': {
    hi: { name: 'खोजी (Investigative)', desc: 'वैज्ञानिक शोध, तर्क विश्लेषणात्मक सोच कार्य' },
    kn: { name: 'ತನಿಖಾತ್ಮಕ (Investigative)', desc: 'ವೈಜ್ಞಾನಿಕ ಚಿಂತನೆ, ದತ್ತಾಂಶ ಸಂಶೋಧನೆ ಹಾಗೂ ಪರಿಹಾರ' }
  },
  'A': {
    hi: { name: 'कलात्मक (Artistic)', desc: 'रचनात्मकता, दृश्य एवं डिज़ाइन अभिव्यक्ति' },
    kn: { name: 'ಕಲಾತ್ಮಕ (Artistic)', desc: 'ಸೃಜನಶೀಲ, ಅಭಿವ್ಯಕ್ತಿ ಹಾಗೂ ವಿನ್ಯಾಸ ಕೌಶಲ್ಯಗಳು' }
  },
  'S': {
    hi: { name: 'सामाजिक (Social)', desc: 'लोगों की सहायता, शिक्षण एवं परामर्श कार्य' },
    kn: { name: 'ಸಾಮಾಜಿಕ (Social)', desc: 'ಜನರಿಗೆ ಸೇವೆ, ಬೋಧನೆ ಹಾಗೂ ಸಮಾಲೋಚನೆ ಕಾರ್ಯ' }
  },
  'E': {
    hi: { name: 'उद्यमी (Enterprising)', desc: 'नेतृत्व, व्यापार प्रबंधन एवं संचार कार्य' },
    kn: { name: 'ಉದ್ಯಮಶೀಲ (Enterprising)', desc: 'ನಾಯಕತ್ವ, ವ್ಯಾಪಾರ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂವಹನ' }
  },
  'C': {
    hi: { name: 'पारंपरिक (Conventional)', desc: 'व्यवस्थित डेटा, नियम, वित्तीय ऑडिट' },
    kn: { name: 'ಸಾಂಪ್ರದಾಯಿಕ (Conventional)', desc: 'ವ್ಯವಸ್ಥಿತ ಡೇಟಾ, ನಿಯಮಗಳು, ಆಡಿಟಿಂಗ್' }
  }
};

export function translateRiasec(dim: string, lang: Language): { name: string; desc: string } {
  if (lang === 'en' || !dim) {
    const enDefaults: Record<string, { name: string; desc: string }> = {
      'R': { name: 'Realistic', desc: 'Practical, hands-on, tools and machinery' },
      'I': { name: 'Investigative', desc: 'Scientific inquiry, research and analytical thinking' },
      'A': { name: 'Artistic', desc: 'Creative, expressive, visual and design work' },
      'S': { name: 'Social', desc: 'Helping people, healthcare, teaching and counselling' },
      'E': { name: 'Enterprising', desc: 'Leadership, persuasion, business and entrepreneurship' },
      'C': { name: 'Conventional', desc: 'Structured data, rules, accounting and procedures' }
    };
    const key = dim.charAt(0).toUpperCase();
    return enDefaults[key] || { name: dim, desc: dim };
  }
  const key = dim.charAt(0).toUpperCase();
  return RIASEC_MAP[key]?.[lang] || { name: dim, desc: dim };
}

const STREAM_MAP: Record<string, { hi: string; kn: string }> = {
  'Science': { hi: 'विज्ञान (Science)', kn: 'ವಿಜ್ಞಾನ (Science)' },
  'Science (PCM)': { hi: 'विज्ञान (भौतिकी, रसायन, गणित)', kn: 'ವಿಜ್ಞಾನ (PCM - ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ, ಗಣಿತ)' },
  'Science (PCB)': { hi: 'विज्ञान (भौतिकी, रसायन, जीव विज्ञान)', kn: 'ವಿಜ್ಞಾನ (PCB - ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ, ಜೀವಶಾಸ್ತ್ರ)' },
  'Commerce': { hi: 'वाणिज्य (Commerce)', kn: 'ವಾಣಿಜ್ಯ (Commerce)' },
  'Arts': { hi: 'कला एवं मानविकी (Arts / Humanities)', kn: 'ಕಲೆ ಮತ್ತು ಮಾನವಿಕ (Arts / Humanities)' },
  'Humanities': { hi: 'मानविकी (Humanities)', kn: 'ಮಾನವಿಕ (Humanities)' },
  'Vocational': { hi: 'व्यावसायिक एवं कौशल (Vocational)', kn: 'ವೃತ್ತಿಪರ ಮತ್ತು ಕೌಶಲ್ಯ (Vocational)' }
};

export function translateStream(stream: string, lang: Language): string {
  if (lang === 'en' || !stream) return stream;
  return STREAM_MAP[stream]?.[lang] || stream;
}

export function translateStreamPool(pool: string, lang: Language): string {
  if (lang === 'en' || !pool) return pool;
  const poolMap: Record<string, { hi: string; kn: string }> = {
    'Science': { hi: 'विज्ञान पूल', kn: 'ವಿಜ್ಞಾನ ವಿಭಾಗ' },
    'Commerce': { hi: 'वाणिज्य पूल', kn: 'ವಾಣಿಜ್ಯ ವಿಭಾಗ' },
    'Humanities': { hi: 'मानविकी पूल', kn: 'ಮಾನವಿಕ ವಿಭಾಗ' },
    'Vocational': { hi: 'व्यावसायिक पूल', kn: 'ವೃತ್ತಿಪರ ವಿಭಾಗ' }
  };
  return poolMap[pool]?.[lang] || pool;
}

const BUDGET_MAP: Record<string, { hi: string; kn: string }> = {
  'low': { hi: 'कम लागत / सरकारी फीस', kn: 'ಕಡಿಮೆ ವೆಚ್ಚ / ಸರ್ಕಾರಿ ಶುಲ್ಕ' },
  'medium': { hi: 'मध्यम बजट (₹1L - ₹4L/वर्ष)', kn: 'ಮಧ್ಯಮ ಬಜೆಟ್ (₹1L - ₹4L/ವರ್ಷ)' },
  'high': { hi: 'उच्च बजट (निजी विश्वविद्यालय)', kn: 'ಉನ್ನತ ಬಜೆಟ್ (ಖಾಸಗಿ ಕಾಲೇಜುಗಳು)' },
  'scholarship_needed': { hi: 'छात्रवृत्ति आवश्यक (100% शुल्क छूट)', kn: 'ವಿದ್ಯಾರ್ಥಿವೇತನ ಅಗತ್ಯವಿದೆ (100% ಶುಲ್ಕ ವಿನಾಯಿತಿ)' }
};

export function translateBudgetTier(tier: string, lang: Language): string {
  if (lang === 'en' || !tier) return tier;
  return BUDGET_MAP[tier.toLowerCase()]?.[lang] || tier;
}

const SCHOLARSHIP_CAT_MAP: Record<string, { hi: string; kn: string }> = {
  'State Govt': { hi: 'राज्य सरकार की योजनाएं', kn: 'ರಾಜ್ಯ ಸರ್ಕಾರದ ಯೋಜನೆಗಳು' },
  'Central Govt': { hi: 'केंद्र सरकार की योजनाएं', kn: 'ಕೇಂದ್ರ ಸರ್ಕಾರದ ಯೋಜನೆಗಳು' },
  'AICTE / Technical': { hi: 'AICTE / तकनीकी शिक्षा', kn: 'AICTE / ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ' },
  'Girl Child': { hi: 'बालिका शिक्षा प्रोत्साहन', kn: 'ಹೆಣ್ಣು ಮಕ್ಕಳ ಶಿಕ್ಷಣ ಪ್ರೋತ್ಸಾಹ' },
  'Merit-cum-Means': { hi: 'मेधावी एवं आर्थिक सहायता', kn: 'ಮೆರಿಟ್ ಹಾಗೂ ಆರ್ಥಿಕ ನೆರವು' }
};

export function translateScholarshipCategory(cat: string, lang: Language): string {
  if (lang === 'en' || !cat) return cat;
  return SCHOLARSHIP_CAT_MAP[cat]?.[lang] || cat;
}

const SUBJECT_MAP: Record<string, { hi: string; kn: string }> = {
  'Mathematics': { hi: 'गणित (Mathematics)', kn: 'ಗಣಿತ (Mathematics)' },
  'Physics': { hi: 'भौतिक विज्ञान (Physics)', kn: 'ಭೌತಶಾಸ್ತ್ರ (Physics)' },
  'Chemistry': { hi: 'रसायन विज्ञान (Chemistry)', kn: 'ರಸಾಯನಶಾಸ್ತ್ರ (Chemistry)' },
  'Biology': { hi: 'जीव विज्ञान (Biology)', kn: 'ಜೀವಶಾಸ್ತ್ರ (Biology)' },
  'Computer Science': { hi: 'कंप्यूटर विज्ञान (Computer Science)', kn: 'ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ (Computer Science)' },
  'Accountancy': { hi: 'लेखाशास्त्र (Accountancy)', kn: 'ಅಕೌಂಟೆನ್ಸಿ (Accountancy)' },
  'Economics': { hi: 'अर्थशास्त्र (Economics)', kn: 'ಅರ್ಥಶಾಸ್ತ್ರ (Economics)' },
  'Business Studies': { hi: 'व्यावसायिक अध्ययन (Business Studies)', kn: 'ವ್ಯವಹಾರ ಅಧ್ಯಯನ (Business Studies)' },
  'Psychology': { hi: 'मनोविज्ञान (Psychology)', kn: 'ಮನೋವಿಜ್ಞಾನ (Psychology)' },
  'Fine Arts': { hi: 'ललित कला (Fine Arts)', kn: 'ಲಲಿತಕಲೆ (Fine Arts)' },
  'Political Science': { hi: 'राजनीति विज्ञान (Political Science)', kn: 'ರಾಜ್ಯಶಾಸ್ತ್ರ (Political Science)' },
  'History': { hi: 'इतिहास (History)', kn: 'ಇತಿಹಾಸ (History)' },
  'English': { hi: 'अंग्रेज़ी (English)', kn: 'ಇಂಗ್ಲಿಷ್ (English)' },
  'Vocational Electronics': { hi: 'व्यावसायिक इलेक्ट्रॉनिक्स (Electronics)', kn: 'ವೃತ್ತಿಪರ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ (Electronics)' },
  'Smart Agriculture': { hi: 'स्मार्ट कृषि (Smart Agriculture)', kn: 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ (Smart Agriculture)' },
  'Applied Mathematics': { hi: 'अनुप्रयुक्त गणित (Applied Math)', kn: 'ಅನ್ವಯಿಕ ಗಣಿತ (Applied Math)' }
};

export function translateSubject(subject: string, lang: Language): string {
  if (lang === 'en' || !subject) return subject;
  return SUBJECT_MAP[subject]?.[lang] || subject;
}

const STRENGTH_MAP: Record<string, { hi: string; kn: string }> = {
  'Logical & Mathematical Reasoning': { hi: 'तार्किक एवं गणितीय तर्क', kn: 'ತಾರ್ಕಿಕ ಮತ್ತು ಗಣಿತದ ತಾರ್ಕಿಕತೆ' },
  'Visual Creativity & Design': { hi: 'दृश्य रचनात्मकता एवं डिज़ाइन', kn: 'ದೃಶ್ಯ ಸೃಜನಶೀಲತೆ ಮತ್ತು ವಿನ್ಯಾಸ' },
  'Hands-on Mechanical Tinkering': { hi: 'व्यावहारिक यांत्रिक कौशल', kn: 'ಪ್ರಾಯೋಗಿಕ ಯಾಂತ್ರಿಕ ಕೌಶಲ್ಯ' },
  'Empathetic Active Listening': { hi: 'सहानुभूतिपूर्ण सक्रिय श्रवण', kn: 'ಸಹಾನುಭೂತಿಯ ಸಕ್ರಿಯ ಆಲಿಸುವಿಕೆ' },
  'Public Speaking & Leadership': { hi: 'सार्वजनिक वक्तृत्व एवं नेतृत्व', kn: 'ಸಾರ್ವಜನಿಕ ಭಾಷಣ ಮತ್ತು ನಾಯಕತ್ವ' },
  'Data & Clerical Organization': { hi: 'डेटा एवं संगठनात्मक प्रबंधन', kn: 'ದತ್ತಾಂಶ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ಸಂಘಟನೆ' },
  'Scientific Curiosity': { hi: 'वैज्ञानिक जिज्ञासा', kn: 'ವೈಜ್ಞಾನಿಕ ಕುತೂಹಲ' },
  'Field Stamina & Physical Endurance': { hi: 'फील्ड सहनशक्ति एवं शारीरिक क्षमता', kn: 'ಕ್ಷೇತ್ರ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ದೈಹಿಕ ತ್ರಾಣ' }
};

export function translateStrength(strength: string, lang: Language): string {
  if (lang === 'en' || !strength) return strength;
  return STRENGTH_MAP[strength]?.[lang] || strength;
}

const EDUCATION_LEVEL_MAP: Record<string, { hi: string; kn: string }> = {
  'Class 8-9': { hi: 'कक्षा 8-9', kn: '8-9ನೇ ತರಗತಿ' },
  'Class 10 (SSLC/CBSE)': { hi: '10वीं कक्षा (SSLC/CBSE)', kn: '10ನೇ ತರಗತಿ (SSLC/CBSE)' },
  'Class 11-12 (PUC/HSC)': { hi: '11-12वीं कक्षा (उच्च माध्यमिक / PUC)', kn: '11-12ನೇ ತರಗತಿ (ಪಿಯುಸಿ / HSC)' },
  'Polytechnic Diploma': { hi: 'पॉलिटेक्निक डिप्लोमा (3-वर्षीय)', kn: 'ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ (3-ವರ್ಷ)' },
  'ITI': { hi: 'आईटीआई शिल्पकार प्रशिक्षण', kn: 'ಐಟಿಐ ವೃತ್ತಿಪರ ತರಬೇತಿ' },
  'Undergraduate': { hi: 'स्नातक / डिग्री (UG)', kn: 'ಪದವಿಪೂರ್ವ ಕಾಲೇಜು (UG)' }
};

export function translateEducationLevel(level: string, lang: Language): string {
  if (lang === 'en' || !level) return level;
  return EDUCATION_LEVEL_MAP[level]?.[lang] || level;
}

// Fallback guidance helper
export function getLocalizedCareerGuidance(
  query: string,
  lang: Language,
  studentProfile: any,
  allCareers: any[],
  topRecommendations: any[]
): string {
  const q = (query || '').toLowerCase();
  const name = studentProfile?.fullName || (lang === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ' : lang === 'hi' ? 'विद्यार्थी' : 'Student');
  const primaryCareer = topRecommendations[0]?.career || allCareers[0];
  const careerTitle = primaryCareer?.title || 'Engineering & Technology';

  if (lang === 'kn') {
    if (q.includes('after class 10') || q.includes('10th') || q.includes('sslc') || q.includes('ನಂತರ')) {
      return \`ನಮಸ್ಕಾರ \${name}! 10ನೇ ತರಗತಿಯ ನಂತರ ಕರ್ನಾಟಕದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 3 ಪ್ರಮುಖ ಮಾರ್ಗಗಳಿವೆ:\\n\\n\` +
        \`1. ಪಿಯುಸಿ (ವಿಜ್ಞಾನ, ವಾಣಿಜ್ಯ, ಕಲೆ): 2-ವರ್ಷದ ಕೋರ್ಸ್, ಪದವಿ ಪ್ರವೇಶಕ್ಕೆ ನೇರ ದಾರಿ.\\n\` +
        \`2. 3-ವರ್ಷದ ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ: ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಶುಲ್ಕ, ಬಿ.ಟೆಕ್ 2ನೇ ವರ್ಷಕ್ಕೆ (Lateral Entry) ನೇರ ಪ್ರವೇಶ.\\n\` +
        \`3. ITI ವೃತ್ತಿ ಕೌಶಲ್ಯ: 1-2 ವರ್ಷಗಳ ತರಬೇತಿಯೊಂದಿಗೆ ತ್ವರಿತ ಉದ್ಯೋಗಾವಕಾಶ.\\n\\n\` +
        \`ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ 'ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್' ಟ್ಯಾಬ್ ಪರಿಶೀಲಿಸಿ.\`;
    }
    if (q.includes('scholarship') || q.includes('ವಿದ್ಯಾರ್ಥಿವೇತನ') || q.includes('fee') || q.includes('ಶುಲ್ಕ')) {
      return \`ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರಮುಖ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು:\\n\\n\` +
        \`1. ಕರ್ನಾಟಕ SSP ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್: ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಬೋಧನಾ ಶುಲ್ಕ ಮರುಪಾವತಿ.\\n\` +
        \`2. ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆ (NSP): 12ನೇ ತರಗತಿಯಲ್ಲಿ ಉನ್ನತ ಅಂಕ ಪಡೆದವರಿಗೆ ₹12,000/ವರ್ಷ.\\n\` +
        \`3. AICTE ಪ್ರಗತಿ ಯೋಜನೆ: ತಾಂತ್ರಿಕ ಕಾಲೇಜುಗಳ ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ ₹50,000/ವರ್ಷ.\\n\\n\` +
        \`ನಮ್ಮ 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು' ಪುಟದಲ್ಲಿ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಲಿಂಕ್‌ಗಳನ್ನು ನೋಡಿ.\`;
    }
    return \`ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ:\\n\\n\` +
      \`• \${careerTitle} ಕುರಿತ ಸಂಪೂರ್ಣ ಮಾಹಿತಿಯನ್ನು 'ವೃತ್ತಿ ಅನ್ವೇಷಕ'ದಲ್ಲಿ ವೀಕ್ಷಿಸಿ.\\n\` +
      \`• KCET, JEE, NEET ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ದಿನಾಂಕಗಳಿಗಾಗಿ 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು' ನೋಡಿ.\\n\` +
      \`• ಸರ್ಕಾರಿ ಮತ್ತು ಖಾಸಗಿ ಕಾಲೇಜು ಶುಲ್ಕವನ್ನು ನಮ್ಮ 'ROI ಕ್ಯಾಲ್ಕುಲೇಟರ್' ಮೂಲಕ ಹೋಲಿಕೆ ಮಾಡಿ.\`;
  }

  if (lang === 'hi') {
    if (q.includes('after class 10') || q.includes('10th') || q.includes('दसवीं')) {
      return \`नमस्ते \${name}! 10वीं कक्षा के बाद भारतीय विद्यार्थियों के लिए 3 स्पष्ट प्राथमिक मार्ग उपलब्ध हैं:\\n\\n\` +
        \`1. उच्च माध्यमिक (11वीं-12वीं): विज्ञान, वाणिज्य या कला वर्ग चुनें।\\n\` +
        \`2. 3-वर्षीय पॉलिटेक्निक डिप्लोमा: कम सरकारी फीस और बी.टेक के द्वितीय वर्ष में सीधे प्रवेश।\\n\` +
        \`3. ITI शिल्पकार प्रशिक्षण: 1-2 वर्ष में तत्काल अप्रेंटिसशिप और स्वरोजगार।\\n\\n\` +
        \`व्यक्तिगत अध्ययन योजना के लिए 'रोडमैप' विकल्प देखें।\`;
    }
    if (q.includes('scholarship') || q.includes('छात्रवृत्ति') || q.includes('fee') || q.includes('फीस')) {
      return \`प्रमुख छात्रवृत्तियां एवं शून्य-ऋण विकल्प:\\n\\n\` +
        \`1. नेशनल स्कॉलरशिप पोर्टल (NSP): केंद्रीय क्षेत्र की छात्रवृत्तियां।\\n\` +
        \`2. कर्नाटक SSP: पात्र छात्रों के लिए 100% शुल्क प्रतिपूर्ति।\\n\` +
        \`3. AICTE प्रगति योजना: तकनीकी शिक्षा में छात्राओं के लिए ₹50,000 प्रति वर्ष।\\n\\n\` +
        \`अधिक जानकारी के लिए शीर्ष मेनू में 'छात्रवृत्तियां' टैब देखें।\`;
    }
    return \`आपकी शैक्षिक योजना के संबंध में:\\n\\n\` +
      \`• \${careerTitle} के बारे में पूरी जानकारी 'करियर एक्सप्लोरर' में देखें।\\n\` +
      \`• आवश्यक प्रवेश परीक्षाओं (KCET, JEE, NEET) के लिए 'प्रवेश परीक्षाएं' देखें।\\n\` +
      \`• कॉलेज फीस और संभावित वेतन की तुलना के लिए ROI कैलकुलेटर का उपयोग करें।\`;
  }

  // English
  if (q.includes('after class 10') || q.includes('class 10')) {
    return \`Hello \${name}! After Class 10 in India, you have 3 distinct primary pathways:\\n\\n\` +
      \`1. Senior Secondary (Class 11 & 12): Science (PCM/PCB), Commerce, or Humanities with flexible electives.\\n\` +
      \`2. 3-Year Polytechnic Diploma: Low-cost government entry into technical engineering with direct lateral entry into 2nd year B.Tech.\\n\` +
      \`3. ITI Craftsmen Training: 1-2 year technical certifications with immediate apprenticeship stipends and zero debt.\\n\\n\` +
      \`Explore the 'Roadmap Tracker' tab for a step-by-step milestone plan.\`;
  }
  if (q.includes('scholarship') || q.includes('fee')) {
    return \`Verified Scholarships for Indian Students:\\n\\n\` +
      \`1. Karnataka SSP (Post-Matric Scheme): Full tuition fee reimbursement for eligible resident students.\\n\` +
      \`2. Central Sector Scheme (NSP): ₹12,000/yr for top 20th percentile in Class 12.\\n\` +
      \`3. AICTE Pragati: ₹50,000/yr for girls in technical diplomas and engineering degrees.\\n\` +
      \`4. Vidyalakshmi CSIS: 100% interest subsidy on education loans during moratorium.\\n\\n\` +
      \`Browse the 'Scholarships' page in the top menu for direct official portal links!\`;
  }

  return \`Regarding \${careerTitle}:\\n\\n\` +
    \`• Academic Route: Standard undergraduate degree via verified entrance examinations.\\n\` +
    \`• Alternative Entry: Government Polytechnic Diploma or state quota pathway.\\n\` +
    \`• Indicative Salary: Entry ₹\${primaryCareer.salary?.entryLevel || '4.5 - 8.0 LPA'} (0-2 Yrs exp).\\n\` +
    \`• Entrance Examinations: KCET, JEE, NEET or merit admission.\\n\\n\` +
    \`*Always verify admission notifications with official institutional prospectuses.*\`;
}

// Admin translation override loader
export function getMergedTranslations(lang: Language, overrides?: Record<string, any>): TranslationDictionary {
  const base = TRANSLATIONS[lang] || TRANSLATIONS.en;
  if (!overrides || !overrides[lang]) return base;

  const langOverrides = overrides[lang];
  const merged: any = { ...base };

  for (const section of Object.keys(langOverrides)) {
    if (typeof langOverrides[section] === 'object' && !Array.isArray(langOverrides[section])) {
      merged[section] = { ...(base as any)[section], ...langOverrides[section] };
    } else {
      merged[section] = langOverrides[section];
    }
  }

  return merged as TranslationDictionary;
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully wrote comprehensive translations.ts!');

