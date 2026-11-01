export interface SubjectOption {
  id: string;
  name: string;
  hindiName: string;
  streamPool: 'Science' | 'Commerce' | 'Humanities' | 'Vocational';
  description: string;
  criticalForCareers: string[]; // career IDs
}

export const SUBJECT_BASKET: SubjectOption[] = [
  // SCIENCE POOL
  {
    id: 'subj-physics',
    name: 'Physics',
    hindiName: 'भौतिक विज्ञान',
    streamPool: 'Science',
    description: 'Mechanics, electromagnetism, optics, and thermodynamics.',
    criticalForCareers: ['ai-ml-engineer', 'renewable-energy-engineer', 'robotics-mechatronics-engineer', 'civil-smart-infrastructure', 'medical-doctor', 'defense-forces-officer']
  },
  {
    id: 'subj-math',
    name: 'Mathematics',
    hindiName: 'गणित',
    streamPool: 'Science',
    description: 'Calculus, linear algebra, coordinate geometry, and statistics.',
    criticalForCareers: ['ai-ml-engineer', 'data-scientist', 'actuarial-scientist', 'robotics-mechatronics-engineer', 'fintech-investment-analyst', 'civil-smart-infrastructure', 'cnc-machine-tooling-specialist']
  },
  {
    id: 'subj-chemistry',
    name: 'Chemistry',
    hindiName: 'रसायन विज्ञान',
    streamPool: 'Science',
    description: 'Organic synthesis, physical thermodynamics, and environmental chemistry.',
    criticalForCareers: ['medical-doctor', 'biotech-researcher', 'environmental-scientist', 'food-processing-dairy-tech', 'biomedical-equipment-technician']
  },
  {
    id: 'subj-biology',
    name: 'Biology',
    hindiName: 'जीव विज्ञान',
    streamPool: 'Science',
    description: 'Human physiology, genetics, ecology, and cellular biology.',
    criticalForCareers: ['medical-doctor', 'biotech-researcher', 'precision-agriculture-specialist', 'biomedical-equipment-technician', 'clinical-psychologist']
  },
  {
    id: 'subj-cs',
    name: 'Computer Science & AI',
    hindiName: 'कंप्यूटर साइंस एवं एआई',
    streamPool: 'Science',
    description: 'Python programming, data structures, and algorithmic principles.',
    criticalForCareers: ['ai-ml-engineer', 'cybersecurity-analyst', 'fullstack-developer', 'data-scientist']
  },

  // COMMERCE POOL
  {
    id: 'subj-accountancy',
    name: 'Accountancy',
    hindiName: 'लेखाशास्त्र (अकाउंटेंसी)',
    streamPool: 'Commerce',
    description: 'Double-entry bookkeeping, financial statements, and partnership accounting.',
    criticalForCareers: ['chartered-accountant', 'fintech-investment-analyst', 'supply-chain-manager']
  },
  {
    id: 'subj-economics',
    name: 'Economics',
    hindiName: 'अर्थशास्त्र',
    streamPool: 'Commerce',
    description: 'Microeconomics, macroeconomic policy, inflation, and development metrics.',
    criticalForCareers: ['fintech-investment-analyst', 'chartered-accountant', 'microfinance-rural-banking', 'data-scientist', 'actuarial-scientist']
  },
  {
    id: 'subj-business',
    name: 'Business Studies',
    hindiName: 'व्यवसाय अध्ययन',
    streamPool: 'Commerce',
    description: 'Principles of management, marketing, financial planning, and organizational structures.',
    criticalForCareers: ['supply-chain-manager', 'agritech-rural-entrepreneur', 'green-startup-entrepreneur']
  },
  {
    id: 'subj-applied-math',
    name: 'Applied Mathematics',
    hindiName: 'व्यावहारिक गणित',
    streamPool: 'Commerce',
    description: 'Financial math, calculus for economics, time series, and probability.',
    criticalForCareers: ['actuarial-scientist', 'fintech-investment-analyst', 'data-scientist', 'chartered-accountant']
  },

  // HUMANITIES POOL
  {
    id: 'subj-psychology',
    name: 'Psychology',
    hindiName: 'मनोविज्ञान',
    streamPool: 'Humanities',
    description: 'Human cognition, adolescent development, emotional well-being, and social dynamics.',
    criticalForCareers: ['clinical-psychologist', 'ui-ux-designer', 'nep-curriculum-designer']
  },
  {
    id: 'subj-polscience',
    name: 'Political Science & Legal Studies',
    hindiName: 'राजनीति विज्ञान एवं विधिक अध्ययन',
    streamPool: 'Humanities',
    description: 'Indian Constitution, jurisprudence, international relations, and governance.',
    criticalForCareers: ['civil-services-officer', 'cyber-corporate-lawyer', 'heritage-conservator-archaeologist']
  },
  {
    id: 'subj-history',
    name: 'History & Heritage Studies',
    hindiName: 'इतिहास एवं विरासत अध्ययन',
    streamPool: 'Humanities',
    description: 'Indian Knowledge Systems, ancient civilization archaeology, and modern geopolitics.',
    criticalForCareers: ['heritage-conservator-archaeologist', 'civil-services-officer', 'digital-content-producer']
  },
  {
    id: 'subj-fine-arts',
    name: 'Fine Arts & Visual Design',
    hindiName: 'ललित कला एवं दृश्य डिज़ाइन',
    streamPool: 'Humanities',
    description: 'Drawing, 2D/3D composition, typography, and visual aesthetics.',
    criticalForCareers: ['ui-ux-designer', 'product-industrial-designer', 'animation-game-designer', 'fashion-sustainable-designer']
  },
  {
    id: 'subj-sociology',
    name: 'Sociology & Social Work',
    hindiName: 'समाजशास्त्र एवं सामाजिक कार्य',
    streamPool: 'Humanities',
    description: 'Social stratification, rural development, community welfare, and ethics.',
    criticalForCareers: ['microfinance-rural-banking', 'civil-services-officer', 'clinical-psychologist']
  },

  // VOCATIONAL POOL
  {
    id: 'subj-voc-ai',
    name: 'Vocational: Artificial Intelligence & Coding',
    hindiName: 'व्यावसायिक: एआई एवं कोडिंग',
    streamPool: 'Vocational',
    description: 'CBSE Skill Subject 843: Python, machine learning workflows, and data ethics.',
    criticalForCareers: ['ai-ml-engineer', 'fullstack-developer', 'data-scientist']
  },
  {
    id: 'subj-voc-electronics',
    name: 'Vocational: Electronics & Solar Tech',
    hindiName: 'व्यावसायिक: इलेक्ट्रॉनिक्स एवं सोलर तकनीक',
    streamPool: 'Vocational',
    description: 'Basic circuit soldering, solar panel wiring, and hardware diagnostics.',
    criticalForCareers: ['solar-pv-technician', 'ev-diagnostic-technician', 'biomedical-equipment-technician']
  },
  {
    id: 'subj-voc-agri',
    name: 'Vocational: Smart Agriculture & Organic Farming',
    hindiName: 'व्यावसायिक: जैविक कृषि एवं कृषि-तकनीक',
    streamPool: 'Vocational',
    description: 'Soil testing, organic fertilizers, drone spraying, and post-harvest storage.',
    criticalForCareers: ['precision-agriculture-specialist', 'agritech-rural-entrepreneur', 'food-processing-dairy-tech']
  },
  {
    id: 'subj-voc-logistics',
    name: 'Vocational: Retail & Logistics Management',
    hindiName: 'व्यावसायिक: रिटेल एवं लॉजिस्टिक्स प्रबंधन',
    streamPool: 'Vocational',
    description: 'Supply chain principles, warehousing inventory, and digital retail POS.',
    criticalForCareers: ['supply-chain-manager', 'agritech-rural-entrepreneur']
  }
];

