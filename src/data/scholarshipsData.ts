import { Scholarship } from '../types';

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: 'karnataka-ssp-postmatric',
    name: 'Karnataka State Scholarship Portal (SSP) Post-Matric Scheme',
    hindiName: 'कर्नाटक राज्य छात्रवृत्ति पोर्टल (एसएसपी) पोस्ट-मैट्रिक योजना',
    kannadaName: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (SSP) ಮೆಟ್ರಿಕ್-ನಂತರದ ಯೋಜನೆ',
    provider: 'Government of Karnataka (Social Welfare, Tribal Welfare, BCWD, & Minorities Dept)',
    educationLevel: 'Post-Class 10, Diploma, ITI, Undergraduate, Engineering & Medical',
    targetGroup: 'Meritorious and economically disadvantaged students residing in Karnataka enrolled in recognized higher education institutions.',
    benefits: '100% Academic Tuition Fee reimbursement directly credited to institution + maintenance allowance credited via DBT.',
    amountDetails: 'Full tuition fee reimbursement + annual maintenance allowance (₹4,000 to ₹10,000/year depending on day scholar vs hostel).',
    eligibilityCriteria: [
      'Must be a permanent resident of Karnataka state with valid SATS/Kutumba ID',
      'Enrolled in recognized Post-Matric course (PUC, Diploma, B.E., B.Tech, B.Sc, MBBS, etc.)',
      'Annual family income ceiling: SC/ST up to ₹2.5 Lakhs; Cat-1 up to ₹2.5 Lakhs; 2A/2B/3A/3B up to ₹1.0 Lakh'
    ],
    applicationWindow: 'September to December annually',
    requiredDocuments: [
      'Kutumba ID / Family Ration Card',
      'Income & Caste Certificate with RD Number',
      'Bonafide Student College Registration Number',
      'Aadhaar-seeded Bank Account details',
      'Previous year academic marksheet'
    ],
    officialPortal: 'https://ssp.postmatric.karnataka.gov.in',
    category: 'State Govt',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'nsp-central-sector',
    name: 'Central Sector Scheme of Scholarships for College and University Students',
    hindiName: 'कॉलेज और विश्वविद्यालय के छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति',
    kannadaName: 'ಕಾಲೇಜು ಮತ್ತು ವಿಶ್ವವಿದ್ಯಾಲಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕೇಂದ್ರ ವಲಯ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    provider: 'Department of Higher Education, Ministry of Education, Govt of India',
    educationLevel: 'Undergraduate (General and Professional Degrees)',
    targetGroup: 'Meritorious students from families with annual income < ₹4.5 Lakhs (top 20th percentile in Class 12 board exams).',
    benefits: 'Direct Cash Transfer: ₹12,000 per year for first 3 years of UG; ₹20,000 per year at PG level.',
    amountDetails: '₹12,000/year for first 3 years of UG, and ₹20,000/year at PG level (Direct Benefit Transfer to bank account)',
    eligibilityCriteria: [
      'Above 80th percentile in respective Class 12 state/central board examinations',
      'Pursuing regular (non-correspondence) degree courses in recognized colleges/universities',
      'Total annual family income from all sources must not exceed ₹4,50,000'
    ],
    applicationWindow: 'July to November annually (via National Scholarship Portal)',
    requiredDocuments: [
      'Class 12 Board Examination Marksheet',
      'Parental Income Certificate (issued by competent revenue authority)',
      'Bonafide Student Certificate issued by College Head',
      'Aadhaar-seeded Active Bank Account Passbook'
    ],
    officialPortal: 'https://scholarships.gov.in',
    category: 'Central Govt',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'aicte-pragati',
    name: 'AICTE Pragati Scholarship Scheme for Girl Students',
    hindiName: 'छात्राओं के लिए एआईसीटीई प्रगति छात्रवृत्ति योजना',
    kannadaName: 'ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ AICTE ಪ್ರಗತಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆ',
    provider: 'All India Council for Technical Education (AICTE), Ministry of Education',
    educationLevel: 'Technical Degree (1st Year B.E./B.Tech) or Technical Diploma',
    targetGroup: 'Girl students admitted to 1st year degree/diploma technical courses in AICTE-approved institutions.',
    benefits: '₹50,000 per annum credited directly to student for tuition, computer, books, and educational software.',
    amountDetails: '₹50,000 per annum for every year of study towards tuition fee, computer purchase, books, and equipment',
    eligibilityCriteria: [
      'Girl child admitted to AICTE approved technical degree or diploma course',
      'Maximum two girl children per family eligible',
      'Family income should be less than ₹8,00,000 per annum'
    ],
    applicationWindow: 'August to December annually (via NSP / AICTE Portal)',
    requiredDocuments: [
      'AICTE College Admission Allotment Letter',
      'Family Income Certificate (< ₹8 Lakhs)',
      'Class 10 and Class 12 Passing Certificates',
      'Parent Affidavit confirming eligibility for maximum two daughters'
    ],
    officialPortal: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
    category: 'Girl Child',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'aicte-saksham',
    name: 'AICTE Saksham Scholarship Scheme for Specially-Abled Students',
    hindiName: 'दिव्यांग छात्रों के लिए एआईसीटीई सक्षम छात्रवृत्ति',
    kannadaName: 'ವಿಶೇಷ ಚೇತನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ AICTE ಸಕ್ಷಮ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    provider: 'All India Council for Technical Education (AICTE)',
    educationLevel: 'Technical Degree or Diploma in AICTE-approved institutions',
    targetGroup: 'Specially-abled students (disability >= 40%) pursuing technical degrees/diplomas.',
    benefits: '₹50,000 per annum for tuition, assistive equipment, books, and specialized learning aids.',
    amountDetails: '₹50,000 per annum for tuition, equipment, books, and assistive software tools',
    eligibilityCriteria: [
      'Disability of not less than 40% certified by authorized medical board',
      'Admitted to 1st year degree or diploma in AICTE approved college',
      'Family annual income less than ₹8 Lakhs'
    ],
    applicationWindow: 'August to December annually',
    requiredDocuments: [
      'Authorized Medical Board Disability Certificate (UDID Card)',
      'AICTE Admission Allotment Letter & Fee Receipt',
      'Income Certificate issued by Revenue Authority',
      'Bank Passbook Details'
    ],
    officialPortal: 'https://www.aicte-india.org/schemes/students-development-schemes/Saksham',
    category: 'AICTE / Technical',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'vidyalakshmi-portal',
    name: 'Vidyalakshmi National Education Loan Portal & CSIS Scheme',
    hindiName: 'विद्यालक्ष्मी राष्ट्रीय शिक्षा ऋण पोर्टल एवं ब्याज सब्सिडी',
    kannadaName: 'ವಿದ್ಯಾಲಕ್ಷ್ಮಿ ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಸಾಲ ಪೋರ್ಟಲ್ ಮತ್ತು ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ',
    provider: 'Department of Higher Education, Ministry of Education, Govt of India',
    educationLevel: 'All Recognized Higher Education & Technical Degree Courses',
    targetGroup: 'Students seeking educational loans from 40+ Public Sector Banks with 100% Interest Subsidy during moratorium.',
    benefits: 'Collateral-free loans up to ₹7.5 Lakhs under CGFSEL; Central Sector Interest Subsidy (CSIS) covers 100% interest during study moratorium.',
    amountDetails: 'Collateral-free loans up to ₹7.5 Lakhs under Credit Guarantee Fund Scheme for Education Loans (CGFSEL); Central Sector Interest Subsidy (CSIS) covers 100% interest during study moratorium',
    eligibilityCriteria: [
      'Admitted to recognized professional/technical courses in India through merit/entrance test',
      'Annual parental income from all sources up to ₹4.5 Lakhs for full interest subsidy (CSIS)',
      'Single unified application accepted across SBI, PNB, Bank of Baroda, Canara Bank, and all nationalized banks'
    ],
    applicationWindow: 'Open throughout the academic year',
    requiredDocuments: [
      'College Admission Letter with detailed fee structure breakdown',
      'Parental Income Certificate (Tahsildar / Form 16)',
      'KYC Documents (Aadhaar, PAN of student and parent co-borrower)',
      'Class 10, 12, and Entrance Exam Marksheet'
    ],
    officialPortal: 'https://www.vidyalakshmi.co.in',
    category: 'Central Govt',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'post-matric-sc-st-obc',
    name: 'Post-Matric Scholarship Scheme for SC / ST / OBC / EBC Students',
    hindiName: 'अनुसूचित जाति/जनजाति/अन्य पिछड़ा वर्ग हेतु पोस्ट-मैट्रिक छात्रवृत्ति',
    kannadaName: 'SC / ST / OBC ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೆಟ್ರಿಕ್-ನಂತರದ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    provider: 'Ministry of Social Justice and Empowerment & Ministry of Tribal Affairs',
    educationLevel: 'Post-Class 10, ITI, Polytechnic, UG, PG, Professional Courses',
    targetGroup: 'Students belonging to SC, ST, OBC, and Economically Backward Classes enrolled in Post-Class 10 courses.',
    benefits: '100% non-refundable compulsory academic tuition fee waiver + monthly maintenance allowance.',
    amountDetails: '100% non-refundable compulsory academic tuition fee waiver + monthly maintenance allowance (₹550 to ₹1,200/month)',
    eligibilityCriteria: [
      'Belonging to notified SC/ST/OBC categories of the respective state',
      'Enrolled in recognized Higher Secondary, ITI, Polytechnic, UG, PG, or Professional courses',
      'Parental annual income ceiling: ₹2.5 Lakhs for SC/ST, and ₹1.5 - ₹2.5 Lakhs for OBC/EBC'
    ],
    applicationWindow: 'July to January annually (State scholarship portals / NSP)',
    requiredDocuments: [
      'Caste & Community Certificate with Verification Barcode',
      'Income Certificate issued within valid validity period',
      'College Fee Receipt & Bonafide Certificate',
      'Aadhaar-linked Bank Account Passbook'
    ],
    officialPortal: 'https://scholarships.gov.in',
    category: 'Merit-cum-Means',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  },
  {
    id: 'nmmss-merit-means',
    name: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
    hindiName: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना (कक्षा 9 से 12)',
    kannadaName: 'ರಾಷ್ಟ್ರೀಯ ಸಾಧನ-ಸಹ-ಯೋಗ್ಯತಾ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆ (ತರಗತಿ 9-12)',
    provider: 'Department of School Education and Literacy, Ministry of Education',
    educationLevel: 'Class 9 to Class 12 Secondary Schooling',
    targetGroup: 'Meritorious economically disadvantaged students in Government, Local body, and Govt-aided schools.',
    benefits: '₹12,000 per annum (₹1,000/month) from Class 9 through Class 12 directly to bank account.',
    amountDetails: '₹12,000 per annum (₹1,000/month) from Class 9 to Class 12 to prevent secondary school dropouts',
    eligibilityCriteria: [
      'Students selected through State-level Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT) in Class 8',
      'Minimum 55% marks in Class 7 exam (50% for SC/ST)',
      'Parental annual income from all sources not exceeding ₹3,50,000'
    ],
    applicationWindow: 'August to November annually via NSP',
    requiredDocuments: [
      'Class 8 NMMSS State Selection Merit Rank Card',
      'Class 7 Final Examination Marksheet',
      'Income Certificate verified by Revenue Official',
      'School Headmaster Bonafide Verification'
    ],
    officialPortal: 'https://scholarships.gov.in',
    category: 'Central Govt',
    lastVerifiedDate: 'October 2026',
    isVerified: true
  }
];

export const LOW_COST_OPEN_LEARNING_RESOURCES = [
  {
    name: 'SWAYAM & NPTEL (Govt of India)',
    description: 'Free online university video courses taught by professors from IITs, IISc, and IIMs. Academic credit transfers recognized across UGC universities.',
    cost: '100% Free learning; optional ₹1,000 exam fee for verified government certificate.',
    url: 'https://swayam.gov.in'
  },
  {
    name: 'IGNOU (Indira Gandhi National Open University)',
    description: 'Premier central open university offering highly affordable, UGC/DEB recognized B.A., B.Com., B.Sc., B.C.A., and Diploma degrees with study centers nationwide.',
    cost: '₹3,000 - ₹6,000 per year (Fee exemptions available for SC/ST students).',
    url: 'http://www.ignou.ac.in'
  },
  {
    name: 'NIOS (National Institute of Open Schooling)',
    description: 'Autonomous institution under Ministry of Education offering open secondary (Class 10) and senior secondary (Class 12) education with on-demand examinations.',
    cost: 'Extremely nominal registration fees with fee concessions for female and rural candidates.',
    url: 'https://www.nios.ac.in'
  },
  {
    name: 'Skill India Digital Hub',
    description: 'Unified platform with thousands of free vocational modules, micro-credentials, and NSDC certifications across 30+ industry sectors.',
    cost: '100% Free government learning resource.',
    url: 'https://www.skillindiadigital.gov.in'
  }
];
