import { EntranceExamTimeline } from '../types';

export const ENTRANCE_EXAMS_DATA: EntranceExamTimeline[] = [
  {
    id: 'exam-kcet-kea',
    name: 'KCET (Karnataka CET)',
    fullName: 'Karnataka Common Entrance Test',
    purpose: 'Admission to undergraduate Engineering (B.E./B.Tech), Agriculture, Forestry, Veterinary, and Pharmacy courses across Karnataka government and private colleges.',
    eligibleLevel: 'Class 12 / 2nd PUC',
    conductedBy: 'Karnataka Examinations Authority (KEA), Govt of Karnataka',
    applicableCareers: ['ai-ml-engineer', 'robotics-mechatronics-engineer', 'civil-smart-infrastructure', 'agritech-precision-specialist', 'biotech-researcher'],
    typicalRegistrationWindow: 'January to February annually',
    examMonth: 'April (Officially announced on KEA portal)',
    isAnnounced: true,
    eligibility: 'Pass in 2nd PUC / Class 12 with Physics and Mathematics along with Chemistry / Biotechnology / Biology / Computer Science / Electronics with minimum 45% aggregate (40% for reserved categories). Karnataka domicile criteria apply.',
    examPattern: 'Pen-and-paper OMR test covering Physics (60 marks, 80 mins), Chemistry (60 marks, 80 mins), and Mathematics/Biology (60 marks, 80 mins). No negative marking.',
    officialLink: 'https://cetonline.karnataka.gov.in/kea/',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'Karnataka DPUC NCERT Exemplar & Blueprint Papers', url: 'https://pue.karnataka.gov.in', type: 'Open Source' },
      { title: 'KEA Previous 10 Years Question Bank with Answer Keys', url: 'https://cetonline.karnataka.gov.in/kea/', type: 'Open Source' },
      { title: 'DIKSHA Karnataka State Science Question Modules', url: 'https://diksha.gov.in', type: 'DIKSHA' }
    ],
    keyMilestones: [
      { label: 'Verify Karnataka Domicile & SATS/Student Number with school/college', targetMonth: 'December', done: false },
      { label: 'Submit KEA online application form and pay fees', targetMonth: 'February', done: false },
      { label: 'Download KEA Admission Ticket (Hall Ticket)', targetMonth: 'April', done: false },
      { label: 'Attend document verification and option entry counseling', targetMonth: 'June', done: false }
    ]
  },
  {
    id: 'exam-jee-main',
    name: 'JEE Main & Advanced',
    fullName: 'Joint Entrance Examination (Main & Advanced)',
    purpose: 'Premier national gateway for admission to B.Tech/B.E. programs at NITs, IIITs, CFTIs (via Main) and IITs (via Advanced).',
    eligibleLevel: 'Class 12 / Equivalent',
    conductedBy: 'National Testing Agency (NTA) & Joint Admission Board (IITs)',
    applicableCareers: ['ai-ml-engineer', 'robotics-mechatronics-engineer', 'civil-smart-infrastructure', 'renewable-energy-engineer', 'cybersecurity-analyst'],
    typicalRegistrationWindow: 'Session 1: November - December | Session 2: February - March',
    examMonth: 'Session 1: Late January | Session 2: Early April | Advanced: May',
    isAnnounced: true,
    eligibility: 'Class 12 passed or appearing with Physics, Mathematics, and Chemistry/Computer Science. Minimum 75% marks in Class 12 board (65% for SC/ST/PwD) or top 20 percentile.',
    examPattern: 'Computer-Based Test (CBT). 90 questions (75 to be answered) across Physics, Chemistry, and Mathematics. +4 for correct, -1 for incorrect.',
    officialLink: 'https://jeemain.nta.nic.in',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'NCERT Exemplar Problems (Official Free PDFs)', url: 'https://ncert.nic.in/exemplar-problems.php', type: 'NCERT Exemplar' },
      { title: 'National Test Abhyas (Free NTA Mock Test App)', url: 'https://www.nta.ac.in/Abhyas', type: 'NTA Abhyas' },
      { title: 'SWAYAM Prabha Channel 22 (IIT-PAL Physics/Chemistry/Math)', url: 'https://swayamprabha.gov.in', type: 'SWAYAM Prabha' }
    ],
    keyMilestones: [
      { label: 'Complete Class 11 and 12 NCERT conceptual theory and numericals', targetMonth: 'July', done: false },
      { label: 'Solve past 5 years JEE Main chapter-wise papers', targetMonth: 'October', done: false },
      { label: 'Submit Session 1 Registration form on NTA portal', targetMonth: 'December', done: false },
      { label: 'Take full-length computer-based timed mocks on NTA Abhyas', targetMonth: 'January', done: false }
    ]
  },
  {
    id: 'exam-neet-ug',
    name: 'NEET-UG',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    purpose: 'Single national entrance examination for admission to MBBS, BDS, BAMS, BHMS, and related medical sciences across all government and private medical colleges in India.',
    eligibleLevel: 'Class 12 / Pre-University',
    conductedBy: 'National Testing Agency (NTA)',
    applicableCareers: ['medical-doctor', 'biomedical-equipment-technician', 'biotech-researcher'],
    typicalRegistrationWindow: 'February to March annually',
    examMonth: 'First Sunday of May',
    isAnnounced: true,
    eligibility: 'Class 12 passed or appearing with Physics, Chemistry, Biology/Biotechnology, and English. Minimum age 17 years at time of admission.',
    examPattern: 'Pen-and-paper OMR exam with 200 questions (180 to answer) in Physics (45), Chemistry (45), and Biology (Botany 45 + Zoology 45). Duration: 3 hours 20 minutes.',
    officialLink: 'https://neet.nta.nic.in',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'NCERT Biology Class 11 & 12 Audiobooks & Diagrams', url: 'https://diksha.gov.in', type: 'DIKSHA' },
      { title: 'NTA National Test Abhyas NEET Question Bank', url: 'https://www.nta.ac.in/Abhyas', type: 'NTA Abhyas' },
      { title: 'SWAYAM Prabha Medical Sciences Foundation Channels', url: 'https://swayamprabha.gov.in', type: 'SWAYAM Prabha' }
    ],
    keyMilestones: [
      { label: 'Memorize and create visual flashcards for NCERT Biology anatomical diagrams', targetMonth: 'August', done: false },
      { label: 'Master NCERT Chemistry named organic reactions and physical formulas', targetMonth: 'November', done: false },
      { label: 'Complete NEET online registration on NTA portal', targetMonth: 'March', done: false },
      { label: 'Simulate timed mock tests using real physical OMR sheets', targetMonth: 'April', done: false }
    ]
  },
  {
    id: 'exam-cuet-ug',
    name: 'CUET-UG',
    fullName: 'Common University Entrance Test (Undergraduate)',
    purpose: 'Standardized national admission test for undergraduate degree programs across Central Universities (DU, BHU, JNU, etc.) and participating state/private universities.',
    eligibleLevel: 'Class 12 in any stream',
    conductedBy: 'National Testing Agency (NTA)',
    applicableCareers: ['data-scientist', 'clinical-psychologist', 'digital-content-producer', 'environmental-scientist', 'fintech-investment-analyst', 'cyber-corporate-lawyer'],
    typicalRegistrationWindow: 'February to March annually',
    examMonth: 'May to June annually',
    isAnnounced: true,
    eligibility: 'Class 12 passed or appearing from any recognized central or state board in any stream. No strict upper age limit.',
    examPattern: 'Hybrid (CBT and Pen-paper). Section 1A/1B (Languages), Section 2 (Domain Subjects mapped to Class 12 NCERT), Section 3 (General Test).',
    officialLink: 'https://exams.nta.ac.in/CUET-UG',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'NCERT Class 12 Exemplar & Textbook Sets (Strict Syllabus Alignment)', url: 'https://ncert.nic.in', type: 'NCERT Exemplar' },
      { title: 'CUET Official Previous Year Papers and Mock Interface', url: 'https://cuetug.ntaonline.in', type: 'NTA Abhyas' }
    ],
    keyMilestones: [
      { label: 'Map university-specific domain requirements for chosen degree courses', targetMonth: 'January', done: false },
      { label: 'Submit CUET online application with domain subject codes', targetMonth: 'March', done: false },
      { label: 'Practice Section 3 General Test logic and quantitative puzzles', targetMonth: 'April', done: false }
    ]
  },
  {
    id: 'exam-clat',
    name: 'CLAT (Common Law Admission Test)',
    fullName: 'Common Law Admission Test',
    purpose: 'National entrance examination for 5-year integrated undergraduate law programs (B.A. LL.B, B.B.A. LL.B) at 24 National Law Universities (NLUs) in India.',
    eligibleLevel: 'Class 12 in any stream',
    conductedBy: 'Consortium of National Law Universities',
    applicableCareers: ['cyber-corporate-lawyer'],
    typicalRegistrationWindow: 'July to November annually',
    examMonth: 'First Sunday of December',
    isAnnounced: true,
    eligibility: 'Class 12 passed or appearing with minimum 45% marks (40% for SC/ST categories). Candidates of any stream are eligible.',
    examPattern: 'Offline pen-and-paper test of 120 objective questions based on comprehension passages covering English, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.',
    officialLink: 'https://consortiumofnlus.ac.in',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'The Hindu & Indian Express Editorial Analysis for Critical Reasoning', url: 'https://swayam.gov.in', type: 'Open Source' },
      { title: 'Consortium of NLUs Sample Question Papers and Practice Sets', url: 'https://consortiumofnlus.ac.in', type: 'Open Source' }
    ],
    keyMilestones: [
      { label: 'Develop daily newspaper editorial reading habit to build 350-word/min speed', targetMonth: 'June', done: false },
      { label: 'Submit CLAT application and select NLU preference order', targetMonth: 'October', done: false },
      { label: 'Take full-length timed mocks focusing on legal passage elimination techniques', targetMonth: 'November', done: false }
    ]
  },
  {
    id: 'exam-upsc-nda',
    name: 'UPSC NDA & NA',
    fullName: 'National Defence Academy and Naval Academy Examination',
    purpose: 'Selection gateway for admission to Army, Navy, and Air Force wings of National Defence Academy (Khadakwasla, Pune) as commissioned officers.',
    eligibleLevel: 'Class 12 (Appearing or Passed)',
    conductedBy: 'Union Public Service Commission (UPSC)',
    applicableCareers: ['defense-civil-officer'],
    typicalRegistrationWindow: 'NDA I: December - January | NDA II: May - June',
    examMonth: 'NDA I: April | NDA II: September',
    isAnnounced: true,
    eligibility: 'Unmarried male and female candidates aged 16.5 to 19.5 years. For Army Wing: Class 12 in any stream. For Air Force and Navy: Class 12 with Physics and Mathematics.',
    examPattern: 'Mathematics (300 marks) + General Ability Test (600 marks), followed by 5-day Services Selection Board (SSB) interview and medical board.',
    officialLink: 'https://upsc.gov.in',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'NCERT Class 11-12 Mathematics and Science Textbooks', url: 'https://ncert.nic.in', type: 'NCERT Exemplar' },
      { title: 'UPSC Official Previous 10 Years Question Papers with Solution Keys', url: 'https://upsc.gov.in', type: 'Open Source' }
    ],
    keyMilestones: [
      { label: 'Begin daily cardiovascular running and calisthenics training', targetMonth: 'January', done: false },
      { label: 'Complete NCERT trigonometry, matrices, calculus, and vector algebra sets', targetMonth: 'March', done: false },
      { label: 'Prepare for Stage-II SSB psychological tests and ground obstacle tasks', targetMonth: 'July', done: false }
    ]
  },
  {
    id: 'exam-cat-mgmt',
    name: 'CAT (Common Admission Test)',
    fullName: 'Common Admission Test for Management',
    purpose: 'National entrance gateway for postgraduate Master of Business Administration (MBA / PGDM) at 21 Indian Institutes of Management (IIMs) and premier b-schools.',
    eligibleLevel: 'Graduation (Final year or Completed)',
    conductedBy: 'IIMs on rotational basis',
    applicableCareers: ['chartered-accountant-auditor', 'fintech-investment-analyst', 'agritech-precision-specialist'],
    typicalRegistrationWindow: 'August to September annually',
    examMonth: 'Last Sunday of November',
    isAnnounced: true,
    eligibility: 'Bachelor Degree in any discipline with minimum 50% marks (45% for SC/ST/PwD). Final-year undergraduate students are eligible to apply.',
    examPattern: 'Computer-Based Test of 120 minutes with 3 sections: VARC (Verbal Ability & Reading Comprehension), DILR (Data Interpretation & Logical Reasoning), and QA (Quantitative Ability).',
    officialLink: 'https://iimcat.ac.in',
    lastVerifiedDate: 'October 2026',
    freePrepResources: [
      { title: 'IIM CAT Official Mock Test Interface', url: 'https://iimcat.ac.in', type: 'Open Source' },
      { title: 'Free Open Quantitative Prep & Logic Modules on NPTEL', url: 'https://nptel.ac.in', type: 'Open Source' }
    ],
    keyMilestones: [
      { label: 'Review arithmetic, algebra, and geometry fundamentals', targetMonth: 'June', done: false },
      { label: 'Submit CAT online application and select IIM interview preferences', targetMonth: 'September', done: false },
      { label: 'Take full-length adaptive sectional tests under exam conditions', targetMonth: 'November', done: false }
    ]
  }
];
