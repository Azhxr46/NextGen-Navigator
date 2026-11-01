import { Career } from '../types';

export const CAREERS_DATA: Career[] = [
  // 1. TECHNOLOGY
  {
    id: 'ai-ml-engineer',
    title: 'AI & Machine Learning Engineer',
    hindiTitle: 'एआई एवं मशीन लर्निंग इंजीनियर',
    category: 'Technology',
    sector: 'Information Technology & Software',
    tagline: 'Design autonomous algorithms, generative models, and intelligent computational systems.',
    description: 'AI & Machine Learning Engineers research, build, and deploy machine learning pipelines, deep neural networks, and generative AI models that power natural language systems, computer vision, and autonomous decision-making.',
    dailyResponsibilities: [
      'Preprocess large multimodal datasets and formulate feature engineering pipelines',
      'Train, fine-tune, and optimize transformer and deep learning models using PyTorch/TensorFlow',
      'Deploy low-latency inference microservices on containerized cloud infrastructure',
      'Evaluate model fairness, explainability, safety benchmarks, and test against hallucination'
    ],
    riasecWeights: { R: 40, I: 95, A: 50, S: 25, E: 60, C: 80 },
    primaryRiasec: ['I', 'C', 'R'],
    requiredSchoolSubjects: ['Mathematics', 'Physics', 'Computer Science'],
    recommended11_12Streams: ['Science (PCM) with Computer Science / AI elective'],
    coreSkills: ['Python', 'PyTorch / TensorFlow', 'Mathematics & Linear Algebra', 'MLOps & Docker', 'Data Structures & Algorithms'],
    softSkills: ['Analytical Rigor', 'Curiosity', 'Problem Solving', 'Scientific Communication'],
    ugPathway: {
      degrees: ['B.Tech / B.E. in Computer Science, AI & Data Engineering, or Mathematics & Computing'],
      durationYears: '4 Years',
      steps: ['Complete Class 12 (PCM)', 'Appear for JEE Main / Advanced or State CETs', '4-year B.Tech with AI/ML capstones and internships']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Computer Engineering / AI & ML',
      duration: '3 Years (Lateral entry into 2nd year B.Tech possible)',
      details: 'Available after Class 10 via State Polytechnic Entrance Examinations. Affordable route into software engineering.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India / NPTEL / SWAYAM Micro-credential Route',
      institutes: 'Government ITI (COPA) + NPTEL AI Certifications + FreeCodeCamp / Kaggle projects',
      costPerYear: '₹2,000 - ₹15,000 / year',
      details: 'Start with basic computer operations and python certifications, build an open-source GitHub portfolio, and land junior data analyst / ML annotation roles.'
    },
    entranceExams: [
      { name: 'JEE Main & Advanced', body: 'NTA / IITs', eligibility: 'Class 12 with PCM', officialWebsite: 'https://jeemain.nta.nic.in', timeline: 'Session 1: Jan, Session 2: Apr' },
      { name: 'State CETs (MHT-CET, KCET, WBJEE)', body: 'State Examination Boards', eligibility: 'Class 12 with PCM', officialWebsite: 'https://cetcell.mahacet.org', timeline: 'April - May' }
    ],
    studyDuration: '4 Years (UG) or 3 Years (Diploma) + 3 Years (B.Tech Lateral)',
    estimatedCost: {
      govtColleges: '₹1.5L - ₹4L total (IITs/NITs/State Govt Engg)',
      privateTier2: '₹5L - ₹9L total',
      privateTier1: '₹12L - ₹24L total',
      openLearningGovt: 'Under ₹40,000 (IGNOU BCA + NPTEL)'
    },
    indicativeSalary: {
      entry: '₹6.0 - ₹14.0 LPA',
      midLevel: '₹18.0 - ₹35.0 LPA',
      experienced: '₹40.0+ LPA',
      sourceNote: 'NASSCOM India Tech Talent Salary Report & Glassdoor India aggregates (Estimates only)'
    },
    salary: {
      entryLevel: '₹6.0 - ₹14.0 LPA (0-2 Yrs)',
      midLevel: '₹18.0 - ₹35.0 LPA (3-7 Yrs)',
      experienced: '₹40.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Agentic AI Workflows', 'Model Quantization (Edge AI)', 'RLHF & Alignment', 'Multimodal LLM Fine-tuning'],
    officialPortalLinks: [
      { name: 'AICTE Future Skills Prime', url: 'https://futureskillsprime.in', type: 'AICTE' },
      { name: 'SWAYAM AI Portal', url: 'https://swayam.gov.in', type: 'SWAYAM' },
      { name: 'National Career Service', url: 'https://www.ncs.gov.in', type: 'NCS' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'aiml-1',
        title: 'Tackling Model Overfitting in Production',
        context: 'A customer credit-scoring model is showing 99% accuracy on training data but mispredicting on fresh applicant batches.',
        challenge: 'What is your immediate engineering response?',
        options: [
          { label: 'Add 10 more deep neural layers to increase capacity', explanation: 'Adding more layers to an already overfitted model increases parameters and makes overfitting worse.', isOptimal: false },
          { label: 'Apply L2 regularization, dropout, and evaluate on stratified out-of-fold cross validation', explanation: 'Correct. Regularization prevents reliance on spurious weights and cross-validation validates generalizability.', isOptimal: true },
          { label: 'Delete data rows that are causing errors', explanation: 'Discarding problematic real-world data hides distribution shifts and creates severe algorithmic bias.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Focuses on early technology literacy, practical portfolios, and flexible credit transfers across universities.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity & Defense Analyst',
    hindiTitle: 'साइबर सुरक्षा विशेषज्ञ',
    category: 'Technology',
    sector: 'Information Security & Defense',
    tagline: 'Safeguard critical national digital infrastructure, networks, and data ecosystems.',
    description: 'Cybersecurity Analysts protect networks, cloud systems, and personal databases against malicious breaches, ransomware, and espionage. They monitor threat vectors, run vulnerability assessments, and orchestrate incident responses.',
    dailyResponsibilities: [
      'Monitor Security Information and Event Management (SIEM) systems for intrusions',
      'Conduct penetration testing and red-teaming simulations across enterprise web applications',
      'Formulate disaster recovery and breach mitigation playbooks in compliance with CERT-In directives',
      'Audit access control policies and enforce zero-trust cryptographic architectures'
    ],
    riasecWeights: { R: 60, I: 90, A: 30, S: 30, E: 55, C: 90 },
    primaryRiasec: ['I', 'C', 'R'],
    requiredSchoolSubjects: ['Computer Science', 'Mathematics', 'Physics'],
    recommended11_12Streams: ['Science or Commerce with Computer Science / Informatics Practices'],
    coreSkills: ['Network Security', 'Ethical Hacking & Kali Linux', 'Cryptography Basics', 'SIEM & Threat Hunting', 'Python / Bash Scripting'],
    softSkills: ['Discretion', 'Attention to Detail', 'Crisis Calmness', 'Ethical Integrity'],
    ugPathway: {
      degrees: ['B.Tech in Cyber Security / CSE, or B.Sc in Information Security / Forensics'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with Math/CS', 'UG Degree in Cyber Security or IT', 'CompTIA Security+ / CEH / OSCP certification']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Information Technology / Cyber Security',
      duration: '3 Years',
      details: 'Offered by State Technical Boards. Direct entry into junior network admin and SOC tier-1 analyst positions.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India / C-DAC / CERT-In Cybersecurity Badging',
      institutes: 'Skill India Digital Hub, C-DAC, and ISEA (Ministry of Electronics and IT)',
      costPerYear: 'Free to ₹10,000 / year',
      details: 'Govt sponsored ISEA modules allow self-learners to achieve verified cyber hygiene and blue-team certs.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'JEE Main', body: 'NTA', eligibility: 'Class 12 with PCM', officialWebsite: 'https://jeemain.nta.nic.in', timeline: 'Jan / Apr' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹80,000 - ₹3.5L total',
      privateTier2: '₹4.5L - ₹8L total',
      privateTier1: '₹10L - ₹20L total',
      openLearningGovt: 'Under ₹35,000 (IGNOU BCA + ISEA certs)'
    },
    indicativeSalary: {
      entry: '₹5.0 - ₹9.0 LPA',
      midLevel: '₹14.0 - ₹28.0 LPA',
      experienced: '₹35.0+ LPA',
      sourceNote: 'CERT-In & Industry Security Survey (Indicative)'
    },
    salary: {
      entryLevel: '₹5.0 - ₹9.0 LPA (0-2 Yrs)',
      midLevel: '₹14.0 - ₹28.0 LPA (3-7 Yrs)',
      experienced: '₹35.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Cloud Native Security (Kubernetes)', 'Zero Trust Architecture', 'AI-Driven Threat Detection', 'IoT Security'],
    officialPortalLinks: [
      { name: 'CERT-In India', url: 'https://www.cert-in.org.in', type: 'Govt Portal' },
      { name: 'ISEA Govt Cyber Awareness', url: 'https://www.infosecawareness.in', type: 'Govt Portal' },
      { name: 'Skill India Digital', url: 'https://www.skillindiadigital.gov.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'cyber-1',
        title: 'Suspected Zero-Day Exploit on Payment Gateway',
        context: 'At 11:30 PM, the automated SIEM fires 400 anomaly alerts showing unusual outbound encrypted traffic to an unknown IP.',
        challenge: 'What is your first priority protocol?',
        options: [
          { label: 'Wait until morning standup to notify the senior engineering manager', explanation: 'Security breaches escalate rapidly; immediate isolation is mandatory.', isOptimal: false },
          { label: 'Isolate the affected network subnet immediately, preserve RAM dumps, and initiate forensics triage', explanation: 'Correct. Containment stops data exfiltration while preserving evidence for audit and patch development.', isOptimal: true },
          { label: 'Reboot the database server immediately to reset connection states', explanation: 'Rebooting wipes volatile RAM and ephemeral log artifacts vital for threat attribution.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes cybersecurity integration into all UG curricula to build national digital resilience.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Web & Mobile App Developer',
    hindiTitle: 'वेब एवं मोबाइल ऐप्लिकेशन डेवलपर',
    category: 'Technology',
    sector: 'Software Products & Web Engineering',
    tagline: 'Engineer scalable, user-centric web platforms and native mobile apps.',
    description: 'Full-Stack Developers architect, build, and maintain end-to-end digital applications—from user interfaces to APIs, business logic, microservices, and databases.',
    dailyResponsibilities: [
      'Build responsive, accessible frontend interfaces with React, Next.js, and TypeScript',
      'Design RESTful and GraphQL backend microservices using Node.js, Go, or Python',
      'Optimize relational (PostgreSQL) and NoSQL database schemas for sub-second query performance',
      'Write automated unit and integration tests with continuous integration pipelines'
    ],
    riasecWeights: { R: 45, I: 85, A: 65, S: 30, E: 50, C: 75 },
    primaryRiasec: ['I', 'A', 'C'],
    requiredSchoolSubjects: ['Computer Science or Mathematics', 'English'],
    recommended11_12Streams: ['Science, Commerce with Math, or Arts with Computer Applications'],
    coreSkills: ['TypeScript / JavaScript', 'React / React Native', 'Node.js / Express', 'SQL & Database Design', 'Git & CI/CD'],
    softSkills: ['Creative Problem Solving', 'Fast Self-Learning', 'Collaboration', 'Documentation'],
    ugPathway: {
      degrees: ['BCA, B.Tech CSE / IT, or B.Sc Computer Science'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 pass', 'BCA or B.Tech or B.Sc', 'Build 3 full-stack capstone apps on GitHub', 'Internships']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Computer Science / IT',
      duration: '3 Years',
      details: 'Available after Class 10. Focuses on practical programming, databases, and web technologies.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India Web Development / FreeCodeCamp / Open Source',
      institutes: 'Skill India Centers, NIELIT, SWAYAM',
      costPerYear: '₹3,000 - ₹20,000 total',
      details: 'High industry meritocracy allows driven self-taught developers with strong GitHub repositories to secure direct job offers.'
    },
    entranceExams: [
      { name: 'CUET UG (for BCA / B.Sc)', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'State Polytechnic CET', body: 'State Boards', eligibility: 'Class 10 pass', officialWebsite: 'https://dte.assam.gov.in', timeline: 'May - June' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹50,000 - ₹2L total',
      privateTier2: '₹3L - ₹6L total',
      privateTier1: '₹8L - ₹16L total',
      openLearningGovt: 'Under ₹30,000 (IGNOU BCA)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹8.5 LPA',
      midLevel: '₹12.0 - ₹25.0 LPA',
      experienced: '₹30.0+ LPA',
      sourceNote: 'NASSCOM Talent Benchmarks'
    },
    salary: {
      entryLevel: '₹4.0 - ₹8.5 LPA (0-2 Yrs)',
      midLevel: '₹12.0 - ₹25.0 LPA (3-7 Yrs)',
      experienced: '₹30.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Serverless Architecture', 'WebAssembly', 'AI-Assisted Development', 'Edge Cloud Computations'],
    officialPortalLinks: [
      { name: 'NIELIT Web Technologies', url: 'https://www.nielit.gov.in', type: 'Govt Portal' },
      { name: 'Skill India Digital Hub', url: 'https://www.skillindiadigital.gov.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'fullstack-1',
        title: 'Diagnosing High API Latency on App Launch',
        context: 'Users in rural districts report that the mobile home screen takes over 8 seconds to load over 3G cellular connections.',
        challenge: 'What optimization delivers the greatest impact?',
        options: [
          { label: 'Demand all users upgrade to 5G smartphones', explanation: 'Impractical and inaccessible for mass Indian demographics.', isOptimal: false },
          { label: 'Implement API response pagination, gzip compression, and client-side offline caching (IndexedDB/Service Workers)', explanation: 'Correct. Reducing payload size and introducing offline caching guarantees smooth usage on low-bandwidth networks.', isOptimal: true },
          { label: 'Add high-resolution splash screen animation to hide the wait', explanation: 'Animations on slow connections make the app heavier and increase CPU drain.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes multidisciplinary skills—humanities and commerce students can combine coding with domain knowledge.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 2. ENGINEERING
  {
    id: 'renewable-energy-engineer',
    title: 'Renewable Energy & Solar Engineer',
    hindiTitle: 'नवीकरणीय ऊर्जा एवं सोलर इंजीनियर',
    category: 'Engineering',
    sector: 'CleanTech, Solar & Green Energy',
    tagline: 'Lead India\'s clean energy transition through solar, wind, and smart micro-grid engineering.',
    description: 'Renewable Energy Engineers plan, design, install, and optimize green power systems including utility-scale solar photovoltaic parks, wind turbines, hydrogen cells, and decentralized rural micro-grids.',
    dailyResponsibilities: [
      'Design photovoltaic arrays and calculate solar irradiance yields using CAD and simulation software',
      'Optimize grid interconnectivity, transformer loads, and battery energy storage systems (BESS)',
      'Conduct site feasibility surveys, environmental impact assessments, and government tariff filings',
      'Oversee on-site engineering commissioning, inverter calibrations, and safety audits'
    ],
    riasecWeights: { R: 90, I: 85, A: 35, S: 45, E: 65, C: 70 },
    primaryRiasec: ['R', 'I', 'E'],
    requiredSchoolSubjects: ['Physics', 'Mathematics', 'Chemistry'],
    recommended11_12Streams: ['Science (PCM)'],
    coreSkills: ['Solar PV System Design', 'Electrical CAD / PVSyst', 'Power Electronics', 'Battery Storage Systems', 'Project Management'],
    softSkills: ['Field Leadership', 'Environmental Stewardship', 'Safety Consciousness', 'Analytical Thinking'],
    ugPathway: {
      degrees: ['B.Tech in Electrical / Energy / Mechanical / Renewable Energy Engineering'],
      durationYears: '4 Years',
      steps: ['Class 12 (PCM)', 'JEE Main or State Engg CET', '4-year engineering program with green energy electives']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Renewable Energy / Electrical Engineering',
      duration: '3 Years',
      details: 'Eligible after Class 10. Direct placement in solar plant maintenance and rooftop installation companies.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'PM Surya Ghar / Suryamitra Skill Development Program',
      institutes: 'National Institute of Solar Energy (NISE) & Skill India ITI centers',
      costPerYear: 'Free / Heavily Subsidized by Govt of India',
      details: 'Suryamitra scheme trains Class 10/12/ITI students into certified solar technicians with immediate industry hiring.'
    },
    entranceExams: [
      { name: 'JEE Main', body: 'NTA', eligibility: 'Class 12 with PCM', officialWebsite: 'https://jeemain.nta.nic.in', timeline: 'Jan / Apr' },
      { name: 'State Polytechnic Joint Entrance Examination', body: 'State Technical Boards', eligibility: 'Class 10 pass', officialWebsite: 'https://jeecup.admissions.nic.in', timeline: 'May' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹1.2L - ₹3.5L total',
      privateTier2: '₹4.5L - ₹8.5L total',
      privateTier1: '₹10L - ₹18L total',
      openLearningGovt: 'Under ₹20,000 (ITI Suryamitra + SWAYAM)'
    },
    indicativeSalary: {
      entry: '₹4.5 - ₹8.0 LPA',
      midLevel: '₹10.0 - ₹22.0 LPA',
      experienced: '₹25.0+ LPA',
      sourceNote: 'MNRE (Ministry of New and Renewable Energy) workforce data & Glassdoor'
    },
    salary: {
      entryLevel: '₹4.5 - ₹8.0 LPA (0-2 Yrs)',
      midLevel: '₹10.0 - ₹22.0 LPA (3-7 Yrs)',
      experienced: '₹25.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Green Hydrogen Electrolyzers', 'Grid-Scale Battery Storage', 'Floating Solar Farms', 'Carbon Credit Auditing'],
    officialPortalLinks: [
      { name: 'Ministry of New and Renewable Energy (MNRE)', url: 'https://mnre.gov.in', type: 'Govt Portal' },
      { name: 'NISE Suryamitra Portal', url: 'https://suryamitra.nise.res.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'solar-1',
        title: 'Voltage Drop in Remote Village Microgrid',
        context: 'A 50 kW solar microgrid powering a cluster of 40 rural farmer homes experiences a 25% voltage drop during evening peak loads.',
        challenge: 'What is the root-cause mitigation?',
        options: [
          { label: 'Disconnect half the homes from the power grid', explanation: 'Violates basic public utility and service mandates.', isOptimal: false },
          { label: 'Check battery state-of-health, rebalance phase distribution loads, and evaluate conductor resistance losses', explanation: 'Correct. Unbalanced single-phase loads and undersized distribution wires are the chief cause of rural voltage sags.', isOptimal: true },
          { label: 'Wait for monsoon rains to wash the solar panels', explanation: 'Panel cleaning affects daytime solar generation, not evening battery discharge sags.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Aligns with national sustainable development goals (SDGs) and promotes green vocational education in schools.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'robotics-mechatronics-engineer',
    title: 'Robotics & Automation Engineer',
    hindiTitle: 'रोबोटिक्स एवं ऑटोमेशन इंजीनियर',
    category: 'Engineering',
    sector: 'Industrial Automation & DeepTech',
    tagline: 'Engineer intelligent physical machines, robotic arms, and automated industrial workflows.',
    description: 'Robotics Engineers combine mechanical design, electronics, sensors, and firmware to build automated systems for manufacturing, healthcare surgery, warehouse fulfillment, and defense applications.',
    dailyResponsibilities: [
      'Design mechanical linkages, chassis, and gear trains using SolidWorks or Autodesk Inventor',
      'Program microcontrollers, PLC ladder logic, and Robot Operating System (ROS)',
      'Interface lidar, cameras, ultrasonic sensors, and actuators with real-time feedback loops',
      'Perform kinematic analysis and safety validation on industrial robot cells'
    ],
    riasecWeights: { R: 95, I: 90, A: 45, S: 25, E: 55, C: 65 },
    primaryRiasec: ['R', 'I', 'C'],
    requiredSchoolSubjects: ['Physics', 'Mathematics', 'Chemistry or Computer Science'],
    recommended11_12Streams: ['Science (PCM)'],
    coreSkills: ['Robot Operating System (ROS)', 'Embedded C / C++', 'CAD & 3D Prototyping', 'PLC / SCADA', 'Computer Vision Basics'],
    softSkills: ['Hands-on Problem Solving', 'Precision', 'Iterative Prototyping', 'Interdisciplinary Teamwork'],
    ugPathway: {
      degrees: ['B.Tech in Mechatronics, Mechanical, Robotics, or Electrical & Electronics'],
      durationYears: '4 Years',
      steps: ['Class 12 (PCM)', 'JEE Main / State CETs', '4-year B.Tech with robotics lab capstone']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Mechatronics / Mechanical Automation',
      duration: '3 Years',
      details: 'Offered across major polytechnics; strong demand from automotive hubs (Pune, Chennai, Manesar).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Technician Mechatronics / Advanced Automation (NSTI)',
      institutes: 'National Skill Training Institutes (NSTI) under DGT & Skill India',
      costPerYear: '₹2,500 - ₹12,000 / year',
      details: 'Dual System of Training (DST) with industrial apprenticeships at leading automotive manufacturing plants.'
    },
    entranceExams: [
      { name: 'JEE Main & Advanced', body: 'NTA', eligibility: 'Class 12 with PCM', officialWebsite: 'https://jeemain.nta.nic.in', timeline: 'Jan / Apr' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹1.5L - ₹4L total',
      privateTier2: '₹5L - ₹9L total',
      privateTier1: '₹12L - ₹22L total',
      openLearningGovt: 'Under ₹25,000 (ITI NSTI pathway)'
    },
    indicativeSalary: {
      entry: '₹5.0 - ₹9.5 LPA',
      midLevel: '₹12.0 - ₹26.0 LPA',
      experienced: '₹32.0+ LPA',
      sourceNote: 'Automotive & Industrial Automation Industry Data'
    },
    salary: {
      entryLevel: '₹5.0 - ₹9.5 LPA (0-2 Yrs)',
      midLevel: '₹12.0 - ₹26.0 LPA (3-7 Yrs)',
      experienced: '₹32.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Collaborative Robots (Cobots)', 'Reinforcement Learning in Robotics', 'Surgical Robotics', 'Drone Autonomy'],
    officialPortalLinks: [
      { name: 'AICTE Approved Institutions', url: 'https://www.aicte-india.org', type: 'AICTE' },
      { name: 'Skill India Mechatronics', url: 'https://www.skillindiadigital.gov.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'robot-1',
        title: 'Calibrating a Precision Pick-and-Place Robotic Arm',
        context: 'An assembly line robotic arm is missing its target bin by 2.4 mm every 50 cycles due to mechanical thermal expansion.',
        challenge: 'How do you engineer a robust fix?',
        options: [
          { label: 'Slow down the conveyor belt by 80%', explanation: 'Reduces plant output drastically and fails to solve the positioning deviation.', isOptimal: false },
          { label: 'Integrate an optical closed-loop vision sensor to calibrate real-time end-effector coordinates dynamically', explanation: 'Correct. Closed-loop visual feedback compensates for thermal drift and kinematic tolerances.', isOptimal: true },
          { label: 'Tape a softer rubber gripper to the end-effector', explanation: 'Temporary physical damping does not resolve encoder calibration drift.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes practical tinkering labs (Atal Tinkering Labs - ATL) in secondary schools to build robotics foundations early.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'civil-smart-infrastructure',
    title: 'Smart Infrastructure & Civil Engineer',
    hindiTitle: 'स्मार्ट इंफ्रास्ट्रक्चर एवं सिविल इंजीनियर',
    category: 'Engineering',
    sector: 'Urban Planning, Infrastructure & Transport',
    tagline: 'Design resilient smart cities, high-speed rail, metro corridors, and earthquake-safe bridges.',
    description: 'Smart Infrastructure Engineers use Building Information Modeling (BIM), sustainable materials, and structural analytics to plan, construct, and manage public works, transportation corridors, and green buildings.',
    dailyResponsibilities: [
      'Model 3D structural frameworks and load distributions using AutoCAD, STAAD.Pro, and Revit BIM',
      'Conduct soil geotechnical surveys, foundation calculations, and seismic resilience checks',
      'Supervise on-site construction quality, concrete curing benchmarks, and safety protocols',
      'Manage government tender contracts, material bill of quantities (BOQ), and environmental compliance'
    ],
    riasecWeights: { R: 90, I: 80, A: 40, S: 45, E: 65, C: 75 },
    primaryRiasec: ['R', 'I', 'E'],
    requiredSchoolSubjects: ['Physics', 'Mathematics', 'Chemistry'],
    recommended11_12Streams: ['Science (PCM)'],
    coreSkills: ['AutoCAD & Revit BIM', 'STAAD.Pro / ETABS', 'Structural Engineering', 'Project Costing & Estimations', 'Surveying (Total Station / GIS)'],
    softSkills: ['Site Leadership', 'Vendor Management', 'Public Safety Ethics', 'Spatial Acumen'],
    ugPathway: {
      degrees: ['B.Tech / B.E. in Civil Engineering / Infrastructure Engineering'],
      durationYears: '4 Years',
      steps: ['Class 12 with PCM', 'JEE Main / State CETs', '4-year B.Tech + GATE exam for PSU roles like NHAI, DMRC, NTPC']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Civil Engineering',
      duration: '3 Years',
      details: 'Highly respected in government Junior Engineer (JE) exams across CPWD, State PWDs, and Railways (RRB JE).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Draughtsman (Civil) / Surveyor Trade',
      institutes: 'Government ITIs across all districts',
      costPerYear: '₹1,500 - ₹8,000 / year',
      details: 'Learn CAD drafting and digital surveying. Immediate entry into builder firms or municipal surveyor roles.'
    },
    entranceExams: [
      { name: 'JEE Main', body: 'NTA', eligibility: 'Class 12 with PCM', officialWebsite: 'https://jeemain.nta.nic.in', timeline: 'Jan / Apr' },
      { name: 'SSC JE (Post Diploma / Degree)', body: 'Staff Selection Commission', eligibility: 'Diploma or Degree in Civil', officialWebsite: 'https://ssc.gov.in', timeline: 'Annual Notification' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹1.0L - ₹3.5L total',
      privateTier2: '₹4.0L - ₹7.5L total',
      privateTier1: '₹9L - ₹18L total',
      openLearningGovt: 'Under ₹20,000 (ITI Civil pathway)'
    },
    indicativeSalary: {
      entry: '₹3.8 - ₹7.0 LPA (Govt JE: ~₹5.5 LPA + perks)',
      midLevel: '₹9.0 - ₹20.0 LPA',
      experienced: '₹22.0+ LPA',
      sourceNote: '7th Pay Commission & Construction Industry Federation data'
    },
    salary: {
      entryLevel: '₹3.8 - ₹7.0 LPA (Govt JE: ~₹5.5 LPA + perks) (0-2 Yrs)',
      midLevel: '₹9.0 - ₹20.0 LPA (3-7 Yrs)',
      experienced: '₹22.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Green Building Rating (GRIHA / LEED)', 'Pre-cast Modular Construction', 'GIS & Drone Surveying', '3D Concrete Printing'],
    officialPortalLinks: [
      { name: 'CPWD Ministry of Housing', url: 'https://cpwd.gov.in', type: 'Govt Portal' },
      { name: 'NHAI National Highways', url: 'https://nhai.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'civil-1',
        title: 'Concrete Slump Test Failure at Bridge Pier Site',
        context: 'A batch of ready-mix concrete delivered to a critical elevated flyover foundation fails the standardized workability slump test.',
        challenge: 'What is the standard engineering protocol?',
        options: [
          { label: 'Add extra water into the truck drum on-site to make it workable', explanation: 'Adding unauthorized water ruins the water-cement ratio and fatally weakens structural load capacity.', isOptimal: false },
          { label: 'Reject the batch, document non-conformance, and verify mix design batching ticket with the plant engineer', explanation: 'Correct. Structural integrity of public transit infrastructure requires zero compromise on quality standards.', isOptimal: true },
          { label: 'Pour it inside inner cores where nobody can see it', explanation: 'Unethical, illegal, and causes catastrophic building collapses.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Encourages local community field internships and hands-on site apprenticeships during college years.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },

  // 3. HEALTHCARE
  {
    id: 'medical-doctor',
    title: 'Medical Doctor (MBBS / Clinical Medicine)',
    hindiTitle: 'चिकित्सक (एमबीबीएस / डॉक्टर)',
    category: 'Healthcare',
    sector: 'Clinical Medicine & Healthcare Services',
    tagline: 'Diagnose illnesses, perform life-saving therapies, and safeguard public human health.',
    description: 'Medical Doctors evaluate patients, interpret clinical diagnostic reports, prescribe evidence-based medical and surgical treatments, and promote community disease prevention.',
    dailyResponsibilities: [
      'Examine patients, conduct systematic physical checks, and record clinical histories',
      'Interpret hematology reports, ECGs, X-rays, CT/MRI scans, and microbiological cultures',
      'Administer acute medical treatments, stabilize critical trauma emergencies, and perform procedures',
      'Counsel patients and families on chronic disease management, diet, and medication compliance'
    ],
    riasecWeights: { R: 60, I: 95, A: 35, S: 95, E: 55, C: 70 },
    primaryRiasec: ['I', 'S', 'R'],
    requiredSchoolSubjects: ['Biology / Biotechnology', 'Physics', 'Chemistry'],
    recommended11_12Streams: ['Science (PCB)'],
    coreSkills: ['Clinical Diagnostics', 'Human Anatomy & Physiology', 'Pharmacology', 'Emergency First Response', 'Patient Empathy'],
    softSkills: ['Compassion', 'Emotional Resilience', 'Critical Decision-Making', 'Ethical Standards'],
    ugPathway: {
      degrees: ['MBBS (Bachelor of Medicine and Bachelor of Surgery)'],
      durationYears: '5.5 Years (including 1 year rotatory internship)',
      steps: ['Class 12 with PCB', 'Clear NEET-UG with top national rank', '4.5 years college + 1 year paid hospital internship', 'NExT licensing exam']
    },
    diplomaPathway: {
      available: true,
      name: 'Allied Paramedical Diplomas (DMLT, Dialysis, Emergency Care)',
      duration: '2 Years',
      details: 'Alternative rapid healthcare route for students who want immediate patient care roles without NEET-UG.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'General Nursing & Midwifery (GNM) / Community Health Worker',
      institutes: 'State Nursing Councils, Govt Medical Colleges & ANM Training Schools',
      costPerYear: 'Nominal / Subsidized with monthly stipends in many states',
      details: 'Direct path to registered healthcare nursing and rural health officer roles under the National Health Mission.'
    },
    entranceExams: [
      { name: 'NEET-UG', body: 'NTA', eligibility: 'Class 12 with PCB (minimum 50% for Gen, 40% for Reserved)', officialWebsite: 'https://neet.nta.nic.in', timeline: 'May' }
    ],
    studyDuration: '5.5 Years (UG) + 3 Years (MD/MS Specialty)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹2.5L total (AIIMS / State Govt Medical Colleges)',
      privateTier2: '₹40L - ₹75L total (Management Quota)',
      privateTier1: '₹80L - ₹1.2 Cr total',
      openLearningGovt: 'N/A for MBBS (Strictly in-person regulatory mandate by NMC)'
    },
    indicativeSalary: {
      entry: '₹7.2 - ₹13.0 LPA (Junior Resident Doctor in Govt / Hospital)',
      midLevel: '₹18.0 - ₹35.0 LPA (Post-MD/MS)',
      experienced: '₹45.0+ LPA',
      sourceNote: 'National Medical Commission & State Health Services Pay Matrix'
    },
    salary: {
      entryLevel: '₹7.2 - ₹13.0 LPA (Junior Resident Doctor in Govt / Hospital) (0-2 Yrs)',
      midLevel: '₹18.0 - ₹35.0 LPA (Post-MD/MS) (3-7 Yrs)',
      experienced: '₹45.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Telemedicine Consultations', 'AI-Assisted Radiology Triage', 'Robotic Surgery Assistance', 'Genomic Precision Medicine'],
    officialPortalLinks: [
      { name: 'National Medical Commission (NMC)', url: 'https://www.nmc.org.in', type: 'Govt Portal' },
      { name: 'NEET NTA Portal', url: 'https://neet.nta.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'doc-1',
        title: 'Emergency Room Triage with Conflicting Symptoms',
        context: 'A 52-year-old patient arrives sweating profusely with radiating left arm pain and epigastric discomfort, but insists it is just indigestion.',
        challenge: 'What is your immediate diagnostic step?',
        options: [
          { label: 'Prescribe antacid tablets and send them home to rest', explanation: 'Fatal mistake. Atypical acute myocardial infarction frequently presents as apparent indigestion.', isOptimal: false },
          { label: 'Stat 12-lead ECG and Troponin-T cardiac biomarker blood panel immediately', explanation: 'Correct. Ruling out acute coronary syndrome saves life within the critical golden hour.', isOptimal: true },
          { label: 'Schedule an ultrasound appointment for next week', explanation: 'Emergency cardiac conditions require sub-minute clinical action.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes bilingual medical learning, integrative health systems (Ayush + Allopathy), and community-rooted primary clinics.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'biomedical-equipment-technician',
    title: 'Biomedical Equipment Specialist & Paramedic',
    hindiTitle: 'बायोमेडिकल उपकरण तकनीशियन एवं पैरामेडिक',
    category: 'Healthcare',
    sector: 'Allied Health Sciences & MedTech',
    tagline: 'Maintain life-support ventilators, dialysis units, and high-tech diagnostic machinery.',
    description: 'Biomedical Equipment Specialists install, calibrate, repair, and certify diagnostic and therapeutic equipment in hospitals, intensive care units, and diagnostic laboratories.',
    dailyResponsibilities: [
      'Perform preventive maintenance and electrical safety checks on ventilators, monitors, and defibs',
      'Calibrate computerized tomography (CT), MRI, and dialysis fluid flow sensors',
      'Diagnose firmware errors and PCB hardware faults under strict infection-control guidelines',
      'Train clinical nurses and medical staff on safe equipment handling protocols'
    ],
    riasecWeights: { R: 90, I: 85, A: 25, S: 60, E: 45, C: 80 },
    primaryRiasec: ['R', 'I', 'C'],
    requiredSchoolSubjects: ['Physics', 'Chemistry', 'Biology or Mathematics'],
    recommended11_12Streams: ['Science (PCB or PCM)'],
    coreSkills: ['Medical Electronics', 'Sensor Calibration', 'Biomedical Instrumentation', 'Safety Standards (IEC 60601)', 'Troubleshooting'],
    softSkills: ['High Accountability', 'Careful Hands', 'Team Coordination', 'Patience'],
    ugPathway: {
      degrees: ['B.Sc in Biomedical Science / B.Tech in Biomedical Engineering / B.Voc in Healthcare Technology'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with Science', 'Enroll in B.Voc / B.Sc Biomedical Tech or B.Tech', 'Hospital internships']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Biomedical Engineering / Medical Electronics',
      duration: '3 Years',
      details: 'Offered by State Technical Education Boards after Class 10. Direct recruitment into hospitals and medical device companies.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Technician Medical Electronics / Skill India Healthcare SSC',
      institutes: 'Government ITIs & Healthcare Sector Skill Council (HSSC)',
      costPerYear: '₹2,000 - ₹12,000 / year',
      details: 'Short-term and 1-2 year subsidized courses with guaranteed demand across tier-2/3 district civil hospitals.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'State Paramedical Board Entrance Exam', body: 'State Paramedical Councils', eligibility: 'Class 12 with Science', officialWebsite: 'https://upsmfac.org', timeline: 'July' }
    ],
    studyDuration: '2 - 4 Years',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.5L total',
      privateTier2: '₹2.5L - ₹5L total',
      privateTier1: '₹6L - ₹12L total',
      openLearningGovt: 'Under ₹20,000 (ITI / State Council route)'
    },
    indicativeSalary: {
      entry: '₹3.6 - ₹6.5 LPA',
      midLevel: '₹8.0 - ₹16.0 LPA',
      experienced: '₹20.0+ LPA',
      sourceNote: 'Healthcare Sector Skill Council & MedTech OEM benchmarks'
    },
    salary: {
      entryLevel: '₹3.6 - ₹6.5 LPA (0-2 Yrs)',
      midLevel: '₹8.0 - ₹16.0 LPA (3-7 Yrs)',
      experienced: '₹20.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Point-of-Care Handheld Diagnostics', 'Wireless IoT Patient Telemetry', 'AI Diagnostic Imaging Maintenance'],
    officialPortalLinks: [
      { name: 'Healthcare Sector Skill Council (HSSC)', url: 'https://www.healthcare-ssc.in', type: 'Skill India' },
      { name: 'National Health Authority (ABDM)', url: 'https://abdm.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'biomed-1',
        title: 'ICU Ventilator Alarm Pressure Sensor Drift',
        context: 'An ICU nurse notices that a mechanical ventilator is triggering false low-tidal volume alarms on a recovering patient.',
        challenge: 'What is your action as the hospital biomedical specialist?',
        options: [
          { label: 'Mute the audio alarm speaker so patients are not disturbed', explanation: 'Disastrous clinical safety violation that can lead to patient asphyxiation.', isOptimal: false },
          { label: 'Switch patient to backup standby unit, run diagnostic pressure transducer calibration, and test leak integrity with artificial test lung', explanation: 'Correct. Patient safety is first; immediate replacement and formal calibration ensure zero risk.', isOptimal: true },
          { label: 'Hit the side of the machine to loosen stuck valves', explanation: 'Physical impact damages sensitive pressure micro-sensors.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes B.Voc (Bachelor of Vocational Studies) degrees with seamless vertical mobility into professional careers.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 4. SCIENCE
  {
    id: 'data-scientist',
    title: 'Data Scientist & Statistical Analyst',
    hindiTitle: 'डेटा वैज्ञानिक एवं सांख्यिकी विश्लेषक',
    category: 'Science',
    sector: 'Analytics, Research & Decision Sciences',
    tagline: 'Translate complex mathematical data into predictive foresight and strategic breakthroughs.',
    description: 'Data Scientists blend probability, mathematical modeling, programming, and domain insights to unearth hidden patterns, build predictive forecasts, and drive automated decision-making across industries.',
    dailyResponsibilities: [
      'Extract, clean, and synthesize raw data from enterprise data warehouses and APIs',
      'Build statistical regression, clustering, and Bayesian inference models',
      'Conduct randomized A/B hypothesis testing and evaluate statistical significance',
      'Create executive data dashboards and translate analytical findings into business actions'
    ],
    riasecWeights: { R: 35, I: 95, A: 50, S: 30, E: 65, C: 85 },
    primaryRiasec: ['I', 'C', 'E'],
    requiredSchoolSubjects: ['Mathematics / Statistics', 'Computer Science / Economics'],
    recommended11_12Streams: ['Science (with Math) or Commerce (with Math)'],
    coreSkills: ['Python / R', 'SQL', 'Statistical Modeling & Probability', 'Machine Learning', 'Data Visualization (PowerBI / Tableau)'],
    softSkills: ['Storytelling with Data', 'Skeptical Inquisitiveness', 'Business Acumen', 'Clarity'],
    ugPathway: {
      degrees: ['B.Stat / B.Math (ISI Kolkata), B.Sc Statistics / Data Science, or B.Tech'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with Math', 'Crack ISI Admission Test or CUET UG or JEE Main', 'UG degree in Statistics / Math / CS', 'Master\'s or Industry portfolio']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Data Analytics / Business Analytics',
      duration: '1 - 2 Years',
      details: 'Offered by premier institutions like IIT Madras (Online BS in Data Science) which accepts students with flexible entry/exit.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'IIT Madras BS Degree in Data Science + NPTEL Open Learning',
      institutes: 'IIT Madras (Online BS with Govt Scholarships for low-income families)',
      costPerYear: '₹10,000 - ₹35,000 / year (heavily subsidized for income < ₹5L)',
      details: 'Revolutionary online degree with multiple exits (Foundational Certificate, Diploma, B.Sc, BS Degree).'
    },
    entranceExams: [
      { name: 'ISI Admission Test (Indian Statistical Institute)', body: 'ISI', eligibility: 'Class 12 with Mathematics', officialWebsite: 'https://www.isical.ac.in', timeline: 'May' },
      { name: 'IIT Madras Data Science Qualifier', body: 'IIT Madras', eligibility: 'Class 10 Math + Class 12 pass', officialWebsite: 'https://study.iitm.ac.in/ds', timeline: 'Term qualifiers 3 times/year' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹50,000 - ₹2.5L total (ISI is free with monthly stipend!)',
      privateTier2: '₹4L - ₹8L total',
      privateTier1: '₹10L - ₹20L total',
      openLearningGovt: '₹35,000 - ₹1.5L (IIT Madras BS online with fee waiver)'
    },
    indicativeSalary: {
      entry: '₹6.5 - ₹13.0 LPA',
      midLevel: '₹16.0 - ₹32.0 LPA',
      experienced: '₹42.0+ LPA',
      sourceNote: 'Analytics India Magazine (AIM) Salary Survey'
    },
    salary: {
      entryLevel: '₹6.5 - ₹13.0 LPA (0-2 Yrs)',
      midLevel: '₹16.0 - ₹32.0 LPA (3-7 Yrs)',
      experienced: '₹42.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Causal Inference & Do-Calculus', 'LLM Agentic Analytics', 'Real-Time Streaming Analytics', 'Responsible AI Governance'],
    officialPortalLinks: [
      { name: 'Indian Statistical Institute', url: 'https://www.isical.ac.in', type: 'Govt Portal' },
      { name: 'IIT Madras BS in Data Science', url: 'https://study.iitm.ac.in/ds', type: 'Govt Portal' },
      { name: 'SWAYAM Data Science Courses', url: 'https://swayam.gov.in', type: 'SWAYAM' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'ds-1',
        title: 'Detecting Simpson\'s Paradox in Health Data',
        context: 'An aggregate study suggests Drug B outperforms Drug A overall, but when segmented by patient age groups, Drug A is superior in every single age cohort.',
        challenge: 'How do you counsel the medical research committee?',
        options: [
          { label: 'Advise using Drug B because the aggregate total sample is larger', explanation: 'Misleading. Aggregate statistics confounded by unequal group distribution produce dangerous illusions.', isOptimal: false },
          { label: 'Explain Simpson\'s Paradox, identify age as a confounding variable, and recommend stratified analysis', explanation: 'Correct. Confounding variables distort naive correlations; stratification uncovers the true causal mechanism.', isOptimal: true },
          { label: 'Discard both drugs and ask for fresh clinical data', explanation: 'Unnecessary when the statistical paradox is clearly resolvable through proper causal stratification.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Supports modular higher education exit pathways with recognised academic certificates at each milestone.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'environmental-scientist',
    title: 'Environmental Scientist & Sustainability Officer',
    hindiTitle: 'पर्यावरण वैज्ञानिक एवं सस्टेनेबिलिटी अधिकारी',
    category: 'Science',
    sector: 'Climate Action, ESG & Environmental Protection',
    tagline: 'Combat climate change, restore biodiversity, and ensure corporate green compliance.',
    description: 'Environmental Scientists evaluate ecological hazards, monitor water, air, and soil pollution, formulate climate adaptation plans, and help industries comply with environmental clearances and ESG standards.',
    dailyResponsibilities: [
      'Collect and analyze environmental field samples for chemical, particulate, and microbial contaminants',
      'Conduct Environmental Impact Assessments (EIA) for industrial, highway, and mining projects',
      'Audit greenhouse gas emissions (Scope 1, 2, and 3) and draft ESG sustainability reports',
      'Liaise with Central Pollution Control Board (CPCB) and State Pollution Control Boards'
    ],
    riasecWeights: { R: 75, I: 90, A: 35, S: 65, E: 55, C: 70 },
    primaryRiasec: ['I', 'R', 'S'],
    requiredSchoolSubjects: ['Chemistry', 'Biology / Physics', 'Environmental Studies / Geography'],
    recommended11_12Streams: ['Science (PCB / PCM) or Humanities with Geography & Science'],
    coreSkills: ['EIA Frameworks', 'GIS & Remote Sensing', 'Water & Air Quality Testing', 'Carbon Accounting & ESG', 'Environmental Law'],
    softSkills: ['Field Endurance', 'Ethics & Neutrality', 'Public Advocacy', 'Scientific Writing'],
    ugPathway: {
      degrees: ['B.Sc in Environmental Science, Earth Sciences, or Chemistry / Ecology'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with Science', 'CUET UG or University Entrance', 'B.Sc + M.Sc in Environmental Science / Forestry', 'CPCB / Corporate ESG roles']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Environmental Engineering / Pollution Control',
      duration: '3 Years',
      details: 'Offered by State Technical Boards. Provides entry-level environmental laboratory and effluent treatment plant (ETP) technician roles.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India Green Jobs Council / Forest Dept Certifications',
      institutes: 'Skill Council for Green Jobs (SCGJ), Wildlife Institute of India (WII)',
      costPerYear: 'Free / ₹3,000 - ₹15,000 / year',
      details: 'Wastewater treatment operator, solar water pump technician, and biodiversity surveyor credentials.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'ICAR AIEEA (for Agriculture & Forestry)', body: 'NTA / ICAR', eligibility: 'Class 12 with Science', officialWebsite: 'https://icar.org.in', timeline: 'May' }
    ],
    studyDuration: '3 - 4 Years (UG) + 2 Years (PG recommended)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.5L total',
      privateTier2: '₹2.5L - ₹6L total',
      privateTier1: '₹7L - ₹14L total',
      openLearningGovt: 'Under ₹25,000 (IGNOU B.Sc with Environmental Studies)'
    },
    indicativeSalary: {
      entry: '₹3.5 - ₹6.5 LPA',
      midLevel: '₹8.0 - ₹18.0 LPA',
      experienced: '₹22.0+ LPA',
      sourceNote: 'Green Jobs Council & CPCB pay scales'
    },
    salary: {
      entryLevel: '₹3.5 - ₹6.5 LPA (0-2 Yrs)',
      midLevel: '₹8.0 - ₹18.0 LPA (3-7 Yrs)',
      experienced: '₹22.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Carbon Sequestration Modeling', 'Biodiversity Credits Trading', 'Satellite Remote Sensing for Deforestation', 'Circular Economy Waste Audits'],
    officialPortalLinks: [
      { name: 'Ministry of Environment, Forest & Climate Change (MoEFCC)', url: 'https://moef.gov.in', type: 'Govt Portal' },
      { name: 'Skill Council for Green Jobs', url: 'https://sscgj.in', type: 'Skill India' },
      { name: 'Central Pollution Control Board', url: 'https://cpcb.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'env-1',
        title: 'Industrial Effluent Spill in River Basin',
        context: 'An industrial manufacturing estate registers a sudden spike in chemical oxygen demand (COD) in the adjoining agricultural drainage canal.',
        challenge: 'What is your action as the environmental compliance officer?',
        options: [
          { label: 'Advise the factory manager to pump freshwater into the canal to dilute the readings', explanation: 'Illegal dilution does not eliminate toxic pollutants and incurs severe criminal liability under the Water Act.', isOptimal: false },
          { label: 'Collect upstream/downstream grab samples, issue an immediate emergency containment shut-down order, and trace the discharge pipe origin', explanation: 'Correct. Swift containment and chain-of-custody evidence gathering protect downstream drinking supplies and enforce statutory law.', isOptimal: true },
          { label: 'Wait for next month\'s scheduled water audit', explanation: 'Toxic chemical plumes destroy river ecosystems within hours.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Integrates environmental education and climate action into all university curricula as mandatory foundational learning.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 5. COMMERCE
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (ICAI CA)',
    hindiTitle: 'चार्टर्ड अकाउंटेंट (सीए)',
    category: 'Commerce',
    sector: 'Accounting, Taxation & Financial Auditing',
    tagline: 'Audit corporate integrity, navigate complex taxation, and advise financial solvency.',
    description: 'Chartered Accountants are statutory guardians of financial transparency, corporate governance, statutory audits, tax planning, and strategic financial advisory under the Institute of Chartered Accountants of India (ICAI).',
    dailyResponsibilities: [
      'Conduct statutory, internal, and forensic audits in accordance with Indian Accounting Standards (Ind AS)',
      'Prepare and file corporate income tax, GST returns, and represent clients before tax appellate tribunals',
      'Evaluate mergers, corporate debt restructuring, financial due diligence, and capital allocations',
      'Ensure strict compliance with Companies Act 2013 and SEBI statutory regulations'
    ],
    riasecWeights: { R: 25, I: 85, A: 20, S: 35, E: 75, C: 100 },
    primaryRiasec: ['C', 'I', 'E'],
    requiredSchoolSubjects: ['Accountancy', 'Mathematics or Business Studies', 'Economics'],
    recommended11_12Streams: ['Commerce with Math / Informatics Practices, or any stream with analytical rigor'],
    coreSkills: ['Statutory Auditing & Ind AS', 'GST & Direct Taxation', 'Financial Modeling', 'Corporate Law Compliance', 'Forensic Accounting'],
    softSkills: ['High Professional Integrity', 'Numerical Precision', 'Discipline', 'Client Advisory'],
    ugPathway: {
      degrees: ['B.Com (Hons) simultaneously with ICAI CA Program'],
      durationYears: '4 - 5 Years (including mandatory 2-year practical articleship)',
      steps: ['Register for CA Foundation after Class 10/12', 'Clear CA Foundation -> CA Intermediate', 'Complete 2-year mandatory articleship with an authorized CA firm', 'Clear CA Final']
    },
    diplomaPathway: {
      available: true,
      name: 'ICAI Accounting Technician Scheme (ATS)',
      duration: '1 Year after clearing CA Intermediate Group 1',
      details: 'Provides a recognized exit credential for students who wish to begin working in accounting immediately.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Self-Study ICAI Professional Course + Govt Library / Free ICAI BOS E-Learning',
      institutes: 'Institute of Chartered Accountants of India (Statutory body under Act of Parliament)',
      costPerYear: '₹15,000 - ₹35,000 / year (One of India\'s most affordable prestigious professions!)',
      details: 'CA is completely meritocratic—requires zero private college capitation fee, and students earn a paid monthly stipend during articleship.'
    },
    entranceExams: [
      { name: 'CA Foundation', body: 'ICAI', eligibility: 'Class 12 appeared/passed', officialWebsite: 'https://www.icai.org', timeline: 'May / Nov' },
      { name: 'CA Intermediate', body: 'ICAI', eligibility: 'Clear Foundation or Direct Entry for Commerce Graduates (>55%)', officialWebsite: 'https://www.icai.org', timeline: 'May / Nov' }
    ],
    studyDuration: '4 - 5 Years',
    estimatedCost: {
      govtColleges: '₹40,000 - ₹90,000 total (Total ICAI official registration & exam fees)',
      privateTier2: '₹1L - ₹2.5L total (including optional private coaching classes)',
      privateTier1: '₹3L - ₹5L total',
      openLearningGovt: 'Under ₹50,000 (IGNOU B.Com for CA students + ICAI)'
    },
    indicativeSalary: {
      entry: '₹7.5 - ₹15.0 LPA (Campus Placement average: ~₹11 LPA)',
      midLevel: '₹18.0 - ₹35.0 LPA',
      experienced: '₹40.0+ LPA (or thriving independent practice)',
      sourceNote: 'ICAI Committee for Members in Industry and Business (CMI&B) Campus Placement Data'
    },
    salary: {
      entryLevel: '₹7.5 - ₹15.0 LPA (Campus Placement average: ~₹11 LPA) (0-2 Yrs)',
      midLevel: '₹18.0 - ₹35.0 LPA (3-7 Yrs)',
      experienced: '₹40.0+ LPA (or thriving independent practice) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['AI-Powered Continuous Auditing', 'Crypto & Digital Asset Taxation', 'ESG & Sustainability Reporting', 'Automated GST Reconciliation'],
    officialPortalLinks: [
      { name: 'Institute of Chartered Accountants of India (ICAI)', url: 'https://www.icai.org', type: 'Govt Portal' },
      { name: 'Ministry of Corporate Affairs', url: 'https://www.mca.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'ca-1',
        title: 'Unreconciled Related-Party Transactions Before Audit Sign-off',
        context: 'During year-end audit, you uncover ₹4.5 Crore in unapproved loans routed to the promoter\'s personal sister firm without board disclosure.',
        challenge: 'What is your statutory responsibility as the certifying auditor?',
        options: [
          { label: 'Ignore it if the promoter promises to return the money next quarter', explanation: 'Severe professional misconduct and criminal negligence under Companies Act Section 143.', isOptimal: false },
          { label: 'Insist on immediate board disclosure, quantify the audit qualification, and report in accordance with CARO 2020 guidelines', explanation: 'Correct. Statutory auditors are fiduciaries of shareholder and public trust; non-disclosure is illegal.', isOptimal: true },
          { label: 'Backdate an approval invoice to clean the balance sheet', explanation: 'Document fraud leading to permanent cancellation of CA license and imprisonment.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'ICAI maintains academic collaboration agreements for credit recognition and dual-degree pathways with central universities.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'supply-chain-manager',
    title: 'Supply Chain & E-Commerce Logistics Manager',
    hindiTitle: 'सप्लाई चेन एवं ई-कॉमर्स लॉजिस्टिक्स प्रबंधक',
    category: 'Commerce',
    sector: 'Logistics, E-Commerce & Retail Operations',
    tagline: 'Orchestrate seamless global warehousing, freight routes, and last-mile deliveries.',
    description: 'Supply Chain Managers design and coordinate goods transportation networks, automated fulfillment centers, inventory forecasting, and multimodal logistics across India\'s rapidly expanding digital retail economy.',
    dailyResponsibilities: [
      'Optimize inventory replenishment levels using predictive demand forecasting algorithms',
      'Coordinate freight contracts, 3PL logistics partnerships, and cold-chain cold-storage routes',
      'Monitor warehouse automation metrics, picking efficiency, and last-mile delivery SLAs',
      'Manage customs documentation, GST E-Way bill compliance, and reverse-logistics returns'
    ],
    riasecWeights: { R: 60, I: 75, A: 25, S: 45, E: 85, C: 90 },
    primaryRiasec: ['E', 'C', 'R'],
    requiredSchoolSubjects: ['Commerce / Business Studies', 'Mathematics or Economics'],
    recommended11_12Streams: ['Commerce, Science, or Vocational Logistics'],
    coreSkills: ['Logistics ERP (SAP/Oracle)', 'Inventory Optimization', 'Vendor Negotiation', 'Data Analytics', 'Fleet Management'],
    softSkills: ['Operational Decisiveness', 'Crisis Management', 'Negotiation', 'Coordination'],
    ugPathway: {
      degrees: ['B.Com / BBA in Logistics & Supply Chain, or B.Tech with MBA in Operations'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'BBA Logistics / B.Com or B.Voc in Supply Chain', 'Internship with 3PL or E-Commerce fulfillment hub']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Logistics & Supply Chain Management',
      duration: '1 - 2 Years',
      details: 'Offered by logistics sector councils and polytechnics for fast-track entry into warehouse management.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Logistics Sector Skill Council (LSC) Apprenticeship',
      institutes: 'Logistics Sector Skill Council under National Apprenticeship Promotion Scheme (NAPS)',
      costPerYear: 'Free / Paid monthly stipend during apprenticeship',
      details: 'Dual apprenticeship model where students earn while training on live warehouse floors.'
    },
    entranceExams: [
      { name: 'CUET UG (for BBA / B.Com)', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'CAT / XAT / CMAT (for PG MBA)', body: 'IIMs / AICTE', eligibility: 'Graduation in any discipline', officialWebsite: 'https://iimcat.ac.in', timeline: 'Nov' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹40,000 - ₹2L total',
      privateTier2: '₹3.5L - ₹7L total',
      privateTier1: '₹9L - ₹18L total',
      openLearningGovt: 'Under ₹30,000 (IGNOU B.Com + Logistics certificates)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹7.5 LPA',
      midLevel: '₹10.0 - ₹22.0 LPA',
      experienced: '₹28.0+ LPA',
      sourceNote: 'Logistics Sector Skill Council (LSC) industry survey'
    },
    salary: {
      entryLevel: '₹4.0 - ₹7.5 LPA (0-2 Yrs)',
      midLevel: '₹10.0 - ₹22.0 LPA (3-7 Yrs)',
      experienced: '₹28.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Drone Deliveries & Autonomous Fleet Routing', 'RFID & IoT Cold-Chain Sensors', 'Green Logistics & EV Fleet Transition'],
    officialPortalLinks: [
      { name: 'Logistics Sector Skill Council', url: 'https://lsc-india.com', type: 'Skill India' },
      { name: 'PM Gati Shakti National Master Plan', url: 'https://dpiit.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'log-1',
        title: 'Festival Season Warehouse Congestion',
        context: 'During Diwali flash sales, incoming truck queues at the regional distribution center cause a 48-hour backlog in order dispatch.',
        challenge: 'What is your operational intervention?',
        options: [
          { label: 'Cancel 30% of incoming customer orders to reduce queue pressure', explanation: 'Destroys brand reputation and results in catastrophic customer loss.', isOptimal: false },
          { label: 'Deploy cross-docking staging areas, implement slot-based truck appointment scheduling, and reroute non-express freight to secondary hubs', explanation: 'Correct. Dynamic slotting and cross-docking bypass bottleneck storage zones and restore fluid throughput.', isOptimal: true },
          { label: 'Lock warehouse gates until workers catch up manually', explanation: 'Halting freight intake compounds highway gridlock and accrues heavy carrier demurrage fees.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes apprenticeship-embedded degree programs with PM Gati Shakti logistics infrastructure alignment.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 6. FINANCE
  {
    id: 'fintech-investment-analyst',
    title: 'FinTech Specialist & Investment Analyst',
    hindiTitle: 'फिनटेक विशेषज्ञ एवं निवेश विश्लेषक',
    category: 'Finance',
    sector: 'Banking, WealthTech & Financial Markets',
    tagline: 'Combine algorithmic technology with financial valuation to engineer modern wealth systems.',
    description: 'FinTech Specialists analyze equity markets, value companies, develop algorithmic trading workflows, and build digital banking, UPI, and wealth management architectures.',
    dailyResponsibilities: [
      'Build discounted cash flow (DCF), comparable multiples, and financial projection models',
      'Analyze balance sheets, cash flow statements, and quarterly corporate earnings calls',
      'Design digital payment workflows and UPI / account aggregator infrastructure',
      'Conduct macroeconomic risk assessments and investment portfolio rebalancings'
    ],
    riasecWeights: { R: 25, I: 90, A: 30, S: 35, E: 90, C: 90 },
    primaryRiasec: ['E', 'C', 'I'],
    requiredSchoolSubjects: ['Mathematics / Statistics', 'Economics', 'Accountancy'],
    recommended11_12Streams: ['Commerce with Math, or Science (PCM)'],
    coreSkills: ['Financial Modeling & Valuation', 'Python / SQL for Finance', 'Equity Research', 'Digital Payment APIs', 'CFA Curriculum Concepts'],
    softSkills: ['Analytical Skepticism', 'Persuasive Pitching', 'High Risk Awareness', 'Mental Agility'],
    ugPathway: {
      degrees: ['B.Com (Hons), B.A. Economics (Hons), B.Sc Finance, or B.Tech followed by CFA / MBA'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with Math', 'Premier UG program (SRCC, St. Stephen\'s, IITs, IIM IPM)', 'CFA Level 1 & 2 preparation', 'Investment banking / FinTech internships']
    },
    diplomaPathway: {
      available: true,
      name: 'NISM (National Institute of Securities Markets) Certified Series',
      duration: '3 - 6 Months modular certifications',
      details: 'Established by SEBI. Mandatory credentials to work as certified research analysts, mutual fund advisors, and investment dealers.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'NISM Certifications + Free SEBI Investor Education Modules',
      institutes: 'National Institute of Securities Markets (SEBI)',
      costPerYear: '₹1,500 - ₹5,000 per module',
      details: 'High ROI for self-driven students; SEBI-recognized certifications open doors to financial advisory and broking firms.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'IPMAT (IIM Indore / Rohtak 5-Year Integrated Program)', body: 'IIMs', eligibility: 'Class 12 pass', officialWebsite: 'https://www.iimidr.ac.in', timeline: 'May' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹40,000 - ₹2.5L total (DU / Central Universities)',
      privateTier2: '₹4L - ₹8.5L total',
      privateTier1: '₹12L - ₹24L total',
      openLearningGovt: 'Under ₹35,000 (IGNOU + NISM series)'
    },
    indicativeSalary: {
      entry: '₹6.0 - ₹14.0 LPA',
      midLevel: '₹16.0 - ₹35.0 LPA',
      experienced: '₹45.0+ LPA',
      sourceNote: 'CFA Society India & BFSI Sector Skill Council'
    },
    salary: {
      entryLevel: '₹6.0 - ₹14.0 LPA (0-2 Yrs)',
      midLevel: '₹16.0 - ₹35.0 LPA (3-7 Yrs)',
      experienced: '₹45.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Account Aggregator Framework', 'CBDC (Central Bank Digital Rupee)', 'Algorithmic Risk Quanting', 'DeFi & Smart Contracts'],
    officialPortalLinks: [
      { name: 'National Institute of Securities Markets (NISM)', url: 'https://www.nism.ac.in', type: 'Govt Portal' },
      { name: 'SEBI (Securities & Exchange Board of India)', url: 'https://www.sebi.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'fin-1',
        title: 'Evaluating High Valuation in Pre-Revenue FinTech Startup',
        context: 'A startup seeking investment claims a 50x forward revenue multiple based solely on monthly app download counts.',
        challenge: 'What is your rigorous investment analysis response?',
        options: [
          { label: 'Accept the valuation immediately because app downloads look high on social media', explanation: 'Vanity metrics do not equal sustainable unit economics or recurring cash flow.', isOptimal: false },
          { label: 'Analyze Customer Acquisition Cost (CAC), Net Churn, Monthly Active Users (MAU), and Customer Lifetime Value (LTV)', explanation: 'Correct. Rigorous cohort analysis and unit economics determine whether user growth converts into profitable enterprise value.', isOptimal: true },
          { label: 'Advise the fund to invest their entire portfolio in this single asset', explanation: 'Violates basic risk diversification and fiduciary responsibility.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes early financial literacy and encourages interdisciplinary combinations of Mathematics, Economics, and Computer Science.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'microfinance-rural-banking',
    title: 'Rural Banking & Microfinance Officer',
    hindiTitle: 'ग्रामीण बैंकिंग एवं सूक्ष्म-वित्त अधिकारी',
    category: 'Finance',
    sector: 'Development Banking & Financial Inclusion',
    tagline: 'Empower rural entrepreneurs, self-help groups (SHGs), and agricultural cooperatives with credit.',
    description: 'Rural Banking Officers manage credit distribution, Kisan Credit Cards (KCC), self-help group loans, and micro-enterprises across India\'s regional rural banks (RRBs), NABARD schemes, and public sector banks.',
    dailyResponsibilities: [
      'Appraise agricultural and micro-enterprise loan applications for crop and machinery credit',
      'Mobilize and audit Women Self-Help Groups (SHGs) under the NRLM financial inclusion mission',
      'Conduct village field inspections, verify crop acreage yields, and assess borrower repayment cycles',
      'Deliver financial literacy camps on Jan Dhan accounts, micro-insurance, and digital banking'
    ],
    riasecWeights: { R: 45, I: 70, A: 20, S: 85, E: 80, C: 85 },
    primaryRiasec: ['S', 'E', 'C'],
    requiredSchoolSubjects: ['Economics / Commerce / Agriculture', 'English / Regional Language'],
    recommended11_12Streams: ['Any stream (Commerce, Arts, or Science)'],
    coreSkills: ['Agricultural Credit Appraisal', 'Rural Sociology & SHG Dynamics', 'Banking Regulations (RBI / NABARD)', 'Digital POS & Micro-ATMs', 'Regional Dialect Fluency'],
    softSkills: ['Empathy with Rural Farmers', 'Patience', 'Trust Building', 'Integrity'],
    ugPathway: {
      degrees: ['B.A. / B.Com / B.Sc in Agriculture / Rural Development or any Bachelor\'s degree'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any discipline', 'UG Degree', 'Clear IBPS RRB Officer Scale-1 / NABARD Grade A or State Cooperative Bank exam']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Rural Development / Microfinance Operations',
      duration: '1 Year',
      details: 'Offered by institutions like NIRDPR (National Institute of Rural Development) and IGNOU.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Business Correspondent (BC) / Bank Mitra Certification',
      institutes: 'Indian Institute of Banking and Finance (IIBF) under PMJDY',
      costPerYear: '₹1,500 - ₹3,000 total exam fee',
      details: 'IIBF Bank Mitra certificate empowers youth to operate digital rural micro-banking kiosks with immediate commission income.'
    },
    entranceExams: [
      { name: 'IBPS RRB Officer Scale-I (Regional Rural Banks)', body: 'IBPS', eligibility: 'Graduation in any discipline (proficiency in local language)', officialWebsite: 'https://www.ibps.in', timeline: 'Aug - Sept' },
      { name: 'NABARD Grade A Assistant Manager', body: 'NABARD', eligibility: 'Bachelor\'s Degree with 60% marks', officialWebsite: 'https://www.nabard.org', timeline: 'July' }
    ],
    studyDuration: '3 Years (Graduation) + 6-12 Months (Banking Exam Prep)',
    estimatedCost: {
      govtColleges: '₹15,000 - ₹60,000 total (for complete 3-year UG in Govt College)',
      privateTier2: '₹1.5L - ₹3.5L total',
      privateTier1: 'N/A for public sector banking exams',
      openLearningGovt: 'Under ₹20,000 (IGNOU B.A./B.Com)'
    },
    indicativeSalary: {
      entry: '₹4.5 - ₹8.0 LPA (Bank PO / RRB Scale-1: ~₹55,000/month + housing perks)',
      midLevel: '₹10.0 - ₹18.0 LPA',
      experienced: '₹22.0+ LPA (General Manager in Banking)',
      sourceNote: 'Indian Banks\' Association (IBA) Bipartite Settlement Pay Scales'
    },
    salary: {
      entryLevel: '₹4.5 - ₹8.0 LPA (Bank PO / RRB Scale-1: ~₹55,000/month + housing perks) (0-2 Yrs)',
      midLevel: '₹10.0 - ₹18.0 LPA (3-7 Yrs)',
      experienced: '₹22.0+ LPA (General Manager in Banking) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Satellite Image Crop Yield Verification', 'UPI 123Pay for Feature Phones', 'Climate Resilient Farm Credit Scoring'],
    officialPortalLinks: [
      { name: 'NABARD Rural Development Bank', url: 'https://www.nabard.org', type: 'Govt Portal' },
      { name: 'Indian Institute of Banking & Finance (IIBF)', url: 'https://www.iibf.org.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'rural-1',
        title: 'Evaluating Drought Impact on Crop Loan Repayments',
        context: 'A localized monsoon failure in a sub-district threatens 120 smallholder farmers with loan defaults on their active Kisan Credit Cards.',
        challenge: 'What is the correct development banking response?',
        options: [
          { label: 'Send aggressive loan recovery agents to seize farming cattle immediately', explanation: 'Inhumane, illegal, and causes rural distress; strictly prohibited under RBI fair practice codes.', isOptimal: false },
          { label: 'Initiate formal crop loss survey, restructure loans as per RBI natural disaster relief directives, and facilitate PMFBY insurance claims', explanation: 'Correct. Converting short-term loans to medium-term and unlocking crop insurance maintains farmer dignity and financial continuity.', isOptimal: true },
          { label: 'Write off the loans secretly without government notification', explanation: 'Unauthorized write-offs constitute banking fraud.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Encourages experiential rural immersion projects and community service credits in undergraduate courses.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },

  // 7. LAW
  {
    id: 'cyber-corporate-lawyer',
    title: 'Cyber & Corporate Technology Lawyer',
    hindiTitle: 'साइबर एवं कॉर्पोरेट विधि विशेषज्ञ (अधिवक्ता)',
    category: 'Law',
    sector: 'Legal Services, Data Protection & Corporate Governance',
    tagline: 'Navigate complex data privacy statutes, cyber jurisprudence, and technology contracts.',
    description: 'Cyber & Corporate Lawyers advise technology companies, governments, and startups on the Digital Personal Data Protection (DPDP) Act, intellectual property, cloud compliance, and cross-border commercial transactions.',
    dailyResponsibilities: [
      'Draft and negotiate SaaS agreements, cross-border technology transfers, and vendor SLAs',
      'Audit organizational data processing workflows under India\'s DPDP Act and international GDPR',
      'Represent clients in commercial dispute arbitration and data breach litigations before courts',
      'Advise venture capital financings, shareholder agreements (SHA), and intellectual property licensing'
    ],
    riasecWeights: { R: 20, I: 90, A: 45, S: 60, E: 95, C: 85 },
    primaryRiasec: ['E', 'I', 'C'],
    requiredSchoolSubjects: ['Legal Studies / Political Science', 'English', 'Economics or History'],
    recommended11_12Streams: ['Humanities, Commerce, or Science (All streams eligible for CLAT)'],
    coreSkills: ['Contract Drafting', 'DPDP Act & Privacy Law', 'Statutory Interpretation', 'Oral Advocacy & Mooting', 'IP Protection'],
    softSkills: ['Persuasive Rhetoric', 'Ethical Courage', 'Negotiation Temperament', 'Logical Analysis'],
    ugPathway: {
      degrees: ['5-Year Integrated B.A. LL.B. / B.B.A. LL.B. / B.Sc. LL.B. from National Law Universities (NLUs)'],
      durationYears: '5 Years (Integrated) or 3 Years (after any Graduation)',
      steps: ['Class 12 in any stream', 'Appear for CLAT (Common Law Admission Test) / AILET', '5-year integrated law degree', 'Pass All India Bar Examination (AIBE) for court enrollment']
    },
    diplomaPathway: {
      available: true,
      name: 'Post-Graduate Diploma in Cyber Law & Information Security',
      duration: '1 Year',
      details: 'Offered by Indian Law Institute (ILI) and NLSIU Bangalore for tech graduates and working professionals.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Govt Law Colleges (e.g., GLC Mumbai, ILS Pune, Campus Law Centre Delhi Univ)',
      institutes: 'State Government and Central University Law Faculties',
      costPerYear: '₹6,000 - ₹30,000 / year (Extremely low-cost premier legal education!)',
      details: 'India\'s oldest and most prestigious law colleges operate at fraction of private tuition while producing Chief Justices and top corporate counsels.'
    },
    entranceExams: [
      { name: 'CLAT (Common Law Admission Test)', body: 'Consortium of NLUs', eligibility: 'Class 12 with min 45% marks', officialWebsite: 'https://consortiumofnlus.ac.in', timeline: 'December' },
      { name: 'AILET (NLU Delhi)', body: 'NLU Delhi', eligibility: 'Class 12 pass', officialWebsite: 'https://nludelhi.ac.in', timeline: 'December' },
      { name: 'CUET UG (for Central University Law Faculties)', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' }
    ],
    studyDuration: '5 Years (Integrated) or 3 Years (Post-Graduation)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.8L total (Govt Law Colleges like GLC / DU CLC)',
      privateTier2: '₹5L - ₹10L total',
      privateTier1: '₹12L - ₹22L total (Top NLUs)',
      openLearningGovt: 'Law degrees cannot be pursued through distance learning (Bar Council of India rule)'
    },
    indicativeSalary: {
      entry: '₹5.5 - ₹16.0 LPA (Tier-1 Corporate Law firms offer ₹14-18 LPA)',
      midLevel: '₹18.0 - ₹40.0 LPA',
      experienced: '₹50.0+ LPA (Partner level: ₹1 Cr+)',
      sourceNote: 'Bar Council & Legal 500 India Survey'
    },
    salary: {
      entryLevel: '₹5.5 - ₹16.0 LPA (Tier-1 Corporate Law firms offer ₹14-18 LPA) (0-2 Yrs)',
      midLevel: '₹18.0 - ₹40.0 LPA (3-7 Yrs)',
      experienced: '₹50.0+ LPA (Partner level: ₹1 Cr+) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['AI-Assisted Contract Auditing', 'Deepfake & Synthetic Media Forensics Law', 'Cross-Border Cloud Jurisdiction', 'FinTech Regulatory Sandboxes'],
    officialPortalLinks: [
      { name: 'Bar Council of India', url: 'http://www.barcouncilofindia.org', type: 'Govt Portal' },
      { name: 'Consortium of National Law Universities', url: 'https://consortiumofnlus.ac.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'law-1',
        title: 'App Inadvertently Scraping Contact Lists Under DPDP Act',
        context: 'A client\'s mobile gaming application is found to be reading user contact address books without affirmative specific user consent.',
        challenge: 'What is your legal counsel under India\'s Digital Personal Data Protection Act?',
        options: [
          { label: 'Advise them to bury the consent clause deep inside a 40-page terms of service document', explanation: 'Violates the DPDP requirement for clear, unbundled, itemized notice in plain language.', isOptimal: false },
          { label: 'Halt data collection immediately, delete non-consented records, implement explicit notice-and-opt-in workflows, and report to Data Protection Board if required', explanation: 'Correct. Non-compliance under DPDP can trigger penalties up to ₹250 Crores.', isOptimal: true },
          { label: 'Pretend the company is registered in an offshore island to ignore Indian laws', explanation: 'Extraterritorial provisions apply directly to anyone processing data of Indian citizens.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes bilingual legal training and multidisciplinary study combining law with technology, sociology, and economics.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 8. DESIGN
  {
    id: 'ui-ux-designer',
    title: 'UI/UX & Product Experience Designer',
    hindiTitle: 'यूआई/यूएक्स एवं उत्पाद अनुभव डिज़ाइनर',
    category: 'Design',
    sector: 'Digital Products, Human-Computer Interaction & Design',
    tagline: 'Craft intuitive, accessible digital interactions and delight millions of mobile users.',
    description: 'UI/UX Designers conduct user research, map user journeys, design wireframes and interactive prototypes, and create inclusive design systems tailored for diverse Indian linguistic and digital literacy demographics.',
    dailyResponsibilities: [
      'Conduct user interviews, usability audits, and ethnographic observations across tier-2/3 user cohorts',
      'Architect user flows, low-fidelity wireframes, and high-fidelity interactive prototypes in Figma',
      'Build scalable design systems with comprehensive typography, color tokens, and accessibility standards',
      'Collaborate closely with frontend engineers to ensure pixel-perfect responsive execution'
    ],
    riasecWeights: { R: 30, I: 70, A: 100, S: 60, E: 55, C: 65 },
    primaryRiasec: ['A', 'I', 'S'],
    requiredSchoolSubjects: ['Any subjects (Design admits all streams)'],
    recommended11_12Streams: ['Arts, Science, or Commerce with interest in visual arts / computing'],
    coreSkills: ['Figma / Prototyping', 'User Research & Journey Mapping', 'Visual Hierarchy & Typography', 'Design Systems', 'Micro-interactions'],
    softSkills: ['Deep Empathy', 'Active Listening', 'Visual Communication', 'Constructive Receptiveness'],
    ugPathway: {
      degrees: ['B.Des (Bachelor of Design) in Interaction Design / New Media, or B.Voc in Digital Media'],
      durationYears: '4 Years',
      steps: ['Class 12 in any stream', 'Crack NID DAT / UCEED / SEED', '4-year B.Des program with live client portfolio']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Web & Multimedia Design / Graphic Design',
      duration: '3 Years',
      details: 'Offered by State Technical Education Boards after Class 10. Focus on software tools and graphic fundamentals.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India Media & Entertainment SSC / Self-Taught Figma Portfolio',
      institutes: 'MESC Centers, Google UX Design Certificate on Coursera (Financial Aid available)',
      costPerYear: '₹2,000 - ₹10,000 / year',
      details: 'Design values demonstrated proof-of-work (Behance / Dribbble / case studies) far more than degrees.'
    },
    entranceExams: [
      { name: 'UCEED (Undergraduate Common Entrance Exam for Design)', body: 'IIT Bombay', eligibility: 'Class 12 in any stream', officialWebsite: 'https://uceed.iitb.ac.in', timeline: 'January' },
      { name: 'NID DAT (Design Aptitude Test)', body: 'National Institute of Design', eligibility: 'Class 12 in any stream', officialWebsite: 'https://admissions.nid.edu', timeline: 'December - January' }
    ],
    studyDuration: '4 Years (UG) or 1-2 Years (Portfolio Pathway)',
    estimatedCost: {
      govtColleges: '₹3L - ₹9L total (NIDs, IIT UCEED institutes)',
      privateTier2: '₹6L - ₹12L total',
      privateTier1: '₹14L - ₹24L total',
      openLearningGovt: 'Under ₹20,000 (Self-taught / Skill India portfolio route)'
    },
    indicativeSalary: {
      entry: '₹5.0 - ₹11.0 LPA',
      midLevel: '₹14.0 - ₹28.0 LPA',
      experienced: '₹35.0+ LPA (Principal Designer)',
      sourceNote: 'DesignUp India State of Design Report'
    },
    salary: {
      entryLevel: '₹5.0 - ₹11.0 LPA (0-2 Yrs)',
      midLevel: '₹14.0 - ₹28.0 LPA (3-7 Yrs)',
      experienced: '₹35.0+ LPA (Principal Designer) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Voice User Interfaces (VUI) for Indian Vernaculars', 'Spatial Computing / AR Prototyping', 'Design Systems Automation with Tokens', 'AI-Assisted Micro-copy'],
    officialPortalLinks: [
      { name: 'National Institute of Design (NID)', url: 'https://www.nid.edu', type: 'Govt Portal' },
      { name: 'UCEED IIT Bombay', url: 'https://uceed.iitb.ac.in', type: 'Govt Portal' },
      { name: 'Media & Entertainment Skills Council (MESC)', url: 'https://mescindia.org', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'ui-1',
        title: 'High Checkout Drop-Off on Mobile eCommerce App',
        context: 'Analytics reveal that 62% of first-time digital shoppers from semi-urban districts abandon cart on the payment selection page.',
        challenge: 'What is your UX design solution?',
        options: [
          { label: 'Add 5 pop-up countdown timers warning users their cart will expire', explanation: 'Dark patterns cause user anxiety and increase abandonment.', isOptimal: false },
          { label: 'Simplify to 1-click UPI intent links, introduce vernacular audio prompts, and clearly display COD/free delivery guarantees', explanation: 'Correct. Reducing cognitive friction and leveraging familiar UPI patterns maximizes conversion for first-time shoppers.', isOptimal: true },
          { label: 'Make the checkout button smaller so users read more text', explanation: 'Decreases accessibility and violates Fitts\'s Law.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Encourages creative arts integration across all STEM disciplines (STEAM framework).',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'product-industrial-designer',
    title: 'Product & Industrial Designer',
    hindiTitle: 'उत्पाद एवं औद्योगिक डिज़ाइनर',
    category: 'Design',
    sector: 'Physical Products, Consumer Goods & Hardware',
    tagline: 'Sculpt ergonomic consumer electronics, appliances, and electric vehicle hardware.',
    description: 'Product Designers envision the physical form, usability, material selection, ergonomics, and manufacturing specifications for tangible goods—from eco-friendly consumer products to medical devices and electric scooters.',
    dailyResponsibilities: [
      'Sketch conceptual design form factors and render photo-realistic CAD models in Rhino / Alias',
      'Fabricate rapid physical prototypes using 3D printers, CNC milling, and clay modeling',
      'Test human ergonomics, grip points, tactile switches, and weight distribution balances',
      'Collaborate with tooling and mechanical manufacturing engineers on injection molding tolerances'
    ],
    riasecWeights: { R: 85, I: 75, A: 95, S: 35, E: 50, C: 60 },
    primaryRiasec: ['A', 'R', 'I'],
    requiredSchoolSubjects: ['Any stream (Physics/Math helpful for ergonomics)'],
    recommended11_12Streams: ['Science or Arts with Design elective'],
    coreSkills: ['CAD (Rhino, SolidWorks, KeyShot)', 'Physical Rapid Prototyping', 'Design for Manufacturing (DFM)', 'Ergonomics & Materials', 'Sketching'],
    softSkills: ['Spatial Aesthetics', 'Tactile Curiosity', 'Attention to Form', 'Iterative Resilience'],
    ugPathway: {
      degrees: ['B.Des in Industrial Design / Product Design, or B.Tech followed by M.Des'],
      durationYears: '4 Years',
      steps: ['Class 12 in any stream', 'Clear NID DAT or UCEED', '4-year B.Des with studio workshop model']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Tool & Die Making / Industrial Design',
      duration: '3 - 4 Years',
      details: 'Offered by Central Tool Room & Training Centres (MSME Technology Centres across India).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'MSME Technology Centre Diploma in Tool & Die / CAD Design',
      institutes: 'MSME Technology Centres (Government of India)',
      costPerYear: '₹15,000 - ₹40,000 / year',
      details: 'Extremely high placement record with automotive and consumer hardware manufacturers.'
    },
    entranceExams: [
      { name: 'UCEED', body: 'IIT Bombay', eligibility: 'Class 12 pass', officialWebsite: 'https://uceed.iitb.ac.in', timeline: 'January' },
      { name: 'NID DAT', body: 'NID', eligibility: 'Class 12 pass', officialWebsite: 'https://admissions.nid.edu', timeline: 'January' }
    ],
    studyDuration: '4 Years',
    estimatedCost: {
      govtColleges: '₹3L - ₹9L total',
      privateTier2: '₹6L - ₹12L total',
      privateTier1: '₹14L - ₹25L total',
      openLearningGovt: 'Under ₹50,000 (MSME Tool Room pathway)'
    },
    indicativeSalary: {
      entry: '₹4.5 - ₹9.0 LPA',
      midLevel: '₹12.0 - ₹24.0 LPA',
      experienced: '₹32.0+ LPA',
      sourceNote: 'CII National Design Council Survey'
    },
    salary: {
      entryLevel: '₹4.5 - ₹9.0 LPA (0-2 Yrs)',
      midLevel: '₹12.0 - ₹24.0 LPA (3-7 Yrs)',
      experienced: '₹32.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Circular Biodegradable Materials', 'Generative CAD Structural Design', 'EV Battery Pack Ergonomics'],
    officialPortalLinks: [
      { name: 'MSME Technology Centres', url: 'https://dcmsme.gov.in', type: 'Govt Portal' },
      { name: 'National Institute of Design', url: 'https://www.nid.edu', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'prod-1',
        title: 'Injection Molding Warpage on Appliance Enclosure',
        context: 'A prototype plastic shell for a portable water purifier warps by 3mm upon cooling, preventing the water filter cartridge from locking.',
        challenge: 'What is your design iteration?',
        options: [
          { label: 'Force the pieces together using industrial superglue', explanation: 'Prevents customer filter replacements and violates manufacturing standards.', isOptimal: false },
          { label: 'Modify wall thickness uniformity, add structural ribs, and optimize gate locations to ensure uniform cooling shrinkage', explanation: 'Correct. Uniform wall thickness and strategic coring prevent localized shrinkage stress during cooling.', isOptimal: true },
          { label: 'Switch material to uncertified recycled scrap plastic', explanation: 'Uncertified scrap causes hazardous chemical leaching in drinking water appliances.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes vocational craft traditions and modern industrial prototyping in higher education.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 9. ARTS & MEDIA
  {
    id: 'animation-game-designer',
    title: 'Animation & Game Designer',
    hindiTitle: 'एनीमेशन एवं गेम डिज़ाइनर',
    category: 'Arts',
    sector: 'Gaming, VFX, Animation & Digital Entertainment',
    tagline: 'Bring virtual worlds, game physics, and cinematic stories to life.',
    description: 'Animation & Game Designers create 3D character models, rigging, environment art, gameplay mechanics, and visual effects for AAA games, mobile interactive titles, and cinema.',
    dailyResponsibilities: [
      'Sculpt, texture, and rig 3D assets in Blender, Maya, and Substance Painter',
      'Program game logic, physics triggers, and player state machines in Unreal Engine or Unity',
      'Design level pacing, camera trajectories, and real-time lighting ambiances',
      'Optimize polygon counts and draw-calls for 60 FPS performance on mobile hardware'
    ],
    riasecWeights: { R: 50, I: 60, A: 100, S: 30, E: 55, C: 60 },
    primaryRiasec: ['A', 'R', 'I'],
    requiredSchoolSubjects: ['Any stream (Fine Arts or Computer Science helpful)'],
    recommended11_12Streams: ['Any stream (Arts, Science, or Commerce)'],
    coreSkills: ['Blender / Maya', 'Unreal Engine / Unity', '3D Rigging & Texturing', 'Game Mechanics Design', 'C# / C++ for Games'],
    softSkills: ['Storytelling Imagination', 'Patience', 'Visual Rhythm', 'Player Empathy'],
    ugPathway: {
      degrees: ['B.Des in Animation / B.Sc in Gaming & VFX / B.Voc in Multimedia'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'NID DAT / FTII or private creative portfolio', '3-4 year degree with playable demo reel']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Animation & VFX / Game Art',
      duration: '1 - 2 Years',
      details: 'Widely available across vocational institutes; focuses entirely on practical tool mastery and showreel production.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Skill India MESC Animation Centers / Blender Open-Source Community',
      institutes: 'Media & Entertainment Skills Council (MESC)',
      costPerYear: 'Free / ₹5,000 - ₹20,000 / year',
      details: 'Blender is 100% free; open-source communities and YouTube allow self-taught artists to win global freelance gigs.'
    },
    entranceExams: [
      { name: 'NID DAT Animation', body: 'NID', eligibility: 'Class 12 in any stream', officialWebsite: 'https://admissions.nid.edu', timeline: 'January' },
      { name: 'FTII Entrance Exam (JET)', body: 'Film and Television Institute of India', eligibility: 'Class 12 / Bachelor\'s depending on course', officialWebsite: 'https://ftii.ac.in', timeline: 'February' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹1.5L - ₹6L total (NID / FTII / State Film Institutes)',
      privateTier2: '₹4L - ₹8.5L total',
      privateTier1: '₹10L - ₹20L total',
      openLearningGovt: 'Under ₹25,000 (Skill India + Open-Source Blender path)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹8.0 LPA',
      midLevel: '₹10.0 - ₹22.0 LPA',
      experienced: '₹28.0+ LPA',
      sourceNote: 'FICCI-EY Media and Entertainment Industry Report'
    },
    salary: {
      entryLevel: '₹4.0 - ₹8.0 LPA (0-2 Yrs)',
      midLevel: '₹10.0 - ₹22.0 LPA (3-7 Yrs)',
      experienced: '₹28.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Virtual Production (LED Volume stages)', 'Generative AI Texture Synthesis', 'WebXR & Spatial Gaming', 'Ray-Tracing Optimization'],
    officialPortalLinks: [
      { name: 'Media & Entertainment Skills Council', url: 'https://mescindia.org', type: 'Skill India' },
      { name: 'FTII Pune', url: 'https://ftii.ac.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'game-1',
        title: 'Severe Frame Drop During Multiplayer Battle Scene',
        context: 'A mobile action game experiences severe stuttering dropping from 60 FPS to 18 FPS whenever 10 players gather in a courtyard.',
        challenge: 'What is your technical game art optimization?',
        options: [
          { label: 'Delete player weapons completely', explanation: 'Ruins game mechanics and player enjoyment.', isOptimal: false },
          { label: 'Implement Level of Detail (LOD) mesh transitions, occlude hidden geometry, and combine particle texture atlases into single draw-calls', explanation: 'Correct. LODs and draw-call batching drastically cut mobile GPU rendering overhead.', isOptimal: true },
          { label: 'Ask all players to restart their smartphones', explanation: 'Fails to resolve the underlying rendering bottleneck.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes Indian AVGC (Animation, Visual Effects, Gaming, and Comics) task force initiatives in school curricula.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'digital-content-producer',
    title: 'Digital Content Creator & Media Producer',
    hindiTitle: 'डिजिटल कंटेंट क्रिएटर एवं मीडिया प्रोड्यूसर',
    category: 'Arts',
    sector: 'Digital Journalism, Podcasting & Media Production',
    tagline: 'Inform, entertain, and educate millions across modern digital broadcast platforms.',
    description: 'Digital Content Creators and Media Producers research authentic stories, script engaging videos and podcasts, conduct journalistic interviews, and build community channels around culture, science, and public interest topics.',
    dailyResponsibilities: [
      'Research, fact-check, and script high-retention video essays and educational explainers',
      'Operate multi-camera mirrorless setups, directional audio microphones, and three-point lighting',
      'Edit dynamic timelines in Premiere Pro / DaVinci Resolve with pacing, sound design, and color grading',
      'Analyze audience retention drop-offs, thumbnail CTRs, and community comment engagement'
    ],
    riasecWeights: { R: 40, I: 75, A: 95, S: 70, E: 85, C: 45 },
    primaryRiasec: ['A', 'E', 'S'],
    requiredSchoolSubjects: ['Languages (English / Hindi / Regional)', 'History / Social Sciences'],
    recommended11_12Streams: ['Any stream (Arts, Commerce, or Science)'],
    coreSkills: ['Video Editing (DaVinci / Premiere)', 'Audio Podcasting', 'Scriptwriting & Storytelling', 'Media Analytics', 'Journalistic Fact-Checking'],
    softSkills: ['Charisma & Authenticity', 'Curiosity', 'Resilience to Feedback', 'Ethical Responsibility'],
    ugPathway: {
      degrees: ['B.A. in Journalism & Mass Communication (BJMC) / B.Sc in Digital Media'],
      durationYears: '3 Years',
      steps: ['Class 12 in any stream', 'CUET UG or IIMC Entrance Exam', '3-year BJMC with live digital portfolio']
    },
    diplomaPathway: {
      available: true,
      name: 'PG Diploma in Journalism / New Media',
      duration: '1 Year',
      details: 'Offered by Indian Institute of Mass Communication (IIMC) across multiple regional languages.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Smartphone Content Creation + Community YouTube / Podcast Channel',
      institutes: 'Self-produced portfolio with free DaVinci Resolve & Audacity',
      costPerYear: 'Nominal (Smartphone + Internet connection)',
      details: 'Direct audience monetization; many successful independent Indian digital journalists began with smartphone cameras.'
    },
    entranceExams: [
      { name: 'IIMC Entrance Exam', body: 'Indian Institute of Mass Communication', eligibility: 'Graduation in any discipline', officialWebsite: 'https://iimc.gov.in', timeline: 'May' },
      { name: 'CUET UG (for BJMC in Central Universities)', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' }
    ],
    studyDuration: '3 Years (UG) or 1 Year (PG Diploma)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.2L total (IIMC / Central Universities)',
      privateTier2: '₹3.5L - ₹7L total',
      privateTier1: '₹8L - ₹16L total',
      openLearningGovt: 'Under ₹20,000 (IGNOU BA in Journalism & Digital Media)'
    },
    indicativeSalary: {
      entry: '₹3.5 - ₹7.0 LPA',
      midLevel: '₹8.0 - ₹20.0 LPA',
      experienced: '₹25.0+ LPA (or independent creator earnings)',
      sourceNote: 'Media & Entertainment Skills Council (MESC)'
    },
    salary: {
      entryLevel: '₹3.5 - ₹7.0 LPA (0-2 Yrs)',
      midLevel: '₹8.0 - ₹20.0 LPA (3-7 Yrs)',
      experienced: '₹25.0+ LPA (or independent creator earnings) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['AI-Assisted Video Localization into 12 Indian Languages', 'Short-Form Micro-Documentaries', 'Interactive Community Live-Streaming'],
    officialPortalLinks: [
      { name: 'Indian Institute of Mass Communication (IIMC)', url: 'https://iimc.gov.in', type: 'Govt Portal' },
      { name: 'Press Council of India', url: 'https://presscouncil.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'media-1',
        title: 'Fact-Checking Breaking Viral Rumor Before Publishing',
        context: 'A dramatic video alleging a bridge collapse in your city goes viral on social media; your news desk wants to publish instantly to get clicks.',
        challenge: 'What is your journalistic decision?',
        options: [
          { label: 'Publish immediately with sensational exclamation marks to beat rival news channels', explanation: 'Spreading unverified rumors causes public panic and destroys journalistic credibility.', isOptimal: false },
          { label: 'Verify geolocation coordinates, cross-check with local traffic police and municipal control room, and hold until factual authenticity is established', explanation: 'Correct. Fact-checking is non-negotiable in responsible ethical public journalism.', isOptimal: true },
          { label: 'Delete your own news channel account', explanation: 'Absurd extreme that solves nothing.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes Indian language promotion and digital storytelling to celebrate rich cultural diversity.',
    demandTrend: 'Rapidly Evolving',
    isVerifiedByAdmin: true
  },

  // 10. AGRICULTURE
  {
    id: 'precision-agriculture-specialist',
    title: 'Smart Agriculture & Agritech Specialist',
    hindiTitle: 'स्मार्ट कृषि एवं कृषि-तकनीक विशेषज्ञ',
    category: 'Agriculture',
    sector: 'Agritech, Precision Farming & Crop Sciences',
    tagline: 'Revolutionize Indian farming with drones, IoT soil sensors, and sustainable yields.',
    description: 'Precision Agriculture Specialists deploy multispectral drones, automated drip-irrigation networks, satellite soil monitoring, and organic agronomy to maximize crop yields, conserve water, and boost farmer profitability.',
    dailyResponsibilities: [
      'Analyze drone multispectral NDVI imagery to identify crop stress, fungal blight, and nitrogen deficits',
      'Calibrate IoT soil moisture, pH, and electrical conductivity sensors for automated fertigation',
      'Formulate organic bio-fertilizer and climate-resilient seed cropping calendars',
      'Advise Farmer Producer Organizations (FPOs) on e-NAM digital market trading and cold storage'
    ],
    riasecWeights: { R: 95, I: 85, A: 30, S: 60, E: 70, C: 70 },
    primaryRiasec: ['R', 'I', 'E'],
    requiredSchoolSubjects: ['Biology or Agriculture', 'Chemistry', 'Physics or Mathematics'],
    recommended11_12Streams: ['Science (PCB / PCM) or Agriculture stream'],
    coreSkills: ['Agricultural Drone Operations', 'Soil Science & Fertigation', 'GIS & Remote Sensing', 'Crop Disease Diagnostics', 'FPO Management'],
    softSkills: ['Deep Respect for Farmers', 'Field Stamina', 'Empathetic Communication', 'Scientific Pragmatism'],
    ugPathway: {
      degrees: ['B.Sc (Hons) in Agriculture / B.Tech in Agricultural Engineering'],
      durationYears: '4 Years',
      steps: ['Class 12 with PCB/PCM/Agriculture', 'ICAR AIEEA or State Agricultural CETs', '4-year ICAR accredited degree + Rural Agricultural Work Experience (RAWE)']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Agricultural Engineering / Organic Farming',
      duration: '2 - 3 Years',
      details: 'Offered by State Agricultural Universities (SAUs) for direct recruitment as block agriculture assistants and farm supervisors.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Kisan Drone Pilot Certification (DGCA / Agriculture Skill Council of India)',
      institutes: 'Agriculture Skill Council of India (ASCI) & Krishi Vigyan Kendras (KVKs)',
      costPerYear: 'Subsidized under Sub-Mission on Agricultural Mechanization (SMAM)',
      details: 'Certified agricultural drone pilots earn high hourly income spraying micronutrients across seasonal harvest periods.'
    },
    entranceExams: [
      { name: 'CUET UG / ICAR AIEEA', body: 'NTA', eligibility: 'Class 12 with Science/Agriculture', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'State Agriculture CETs (e.g., MHT-CET Agri, KEAM Agri)', body: 'State Agri Boards', eligibility: 'Class 12 with PCB/PCM', officialWebsite: 'https://mcaer.org', timeline: 'May' }
    ],
    studyDuration: '4 Years',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.2L total (State Agricultural Universities)',
      privateTier2: '₹3L - ₹6.5L total',
      privateTier1: '₹7L - ₹12L total',
      openLearningGovt: 'Under ₹20,000 (IGNOU Diploma in Watershed Management / Organic Farming)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹7.5 LPA (Govt Agricultural Officer: ~₹6.5 LPA + perks)',
      midLevel: '₹9.0 - ₹20.0 LPA',
      experienced: '₹24.0+ LPA',
      sourceNote: 'ICAR & Agritech Venture Capital hiring trends'
    },
    salary: {
      entryLevel: '₹4.0 - ₹7.5 LPA (Govt Agricultural Officer: ~₹6.5 LPA + perks) (0-2 Yrs)',
      midLevel: '₹9.0 - ₹20.0 LPA (3-7 Yrs)',
      experienced: '₹24.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Satellite Hyper-local Weather Indexing', 'Hydroponic & Vertical Indoor Farming', 'Carbon Farming & Soil Carbon Credits'],
    officialPortalLinks: [
      { name: 'Indian Council of Agricultural Research (ICAR)', url: 'https://icar.org.in', type: 'Govt Portal' },
      { name: 'Agriculture Skill Council of India (ASCI)', url: 'https://asci-india.com', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'agri-1',
        title: 'Sudden Yellowing of Cotton Leaves Across 50 Acres',
        context: 'A cluster of farmers reports widespread leaf yellowing and curling during the vegetative flowering stage.',
        challenge: 'How do you diagnose and formulate action as the agritech specialist?',
        options: [
          { label: 'Advise spraying 5 times the regular dosage of chemical pesticide immediately', explanation: 'Indiscriminate chemical overdosing burns crops, kills beneficial pollinators, and triggers pest resistance.', isOptimal: false },
          { label: 'Check leaf undersides for sucking pests (whiteflies/jassids), inspect soil moisture/nitrogen levels, and deploy targeted bio-pesticide with sticky traps', explanation: 'Correct. Integrated Pest Management (IPM) tackles the root vector safely while saving farmers thousands in input costs.', isOptimal: true },
          { label: 'Advise burning the entire crop down', explanation: 'Destroys farmer livelihoods based on a treatable pest infestation.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes agricultural education revival with emphasis on organic ecology and local Krishi Vigyan Kendra internships.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'food-processing-dairy-tech',
    title: 'Food Processing & Dairy Technologist',
    hindiTitle: 'खाद्य प्रसंस्करण एवं डेयरी प्रौद्योगिकीविद',
    category: 'Agriculture',
    sector: 'Food Processing, Quality Assurance & Dairy Industry',
    tagline: 'Transform raw farm produce into nutritious, hygienic, and long-shelf-life foods.',
    description: 'Food Technologists formulate healthy food recipes, design industrial pasteurization and preservation processes, and enforce strict hygiene and safety standards under FSSAI regulations.',
    dailyResponsibilities: [
      'Conduct microbiological and chemical quality audits on raw milk, grains, and packaged foods',
      'Optimize thermal processing, vacuum packaging, and cold-chain shelf-life formulations',
      'Ensure factory production hygiene in compliance with FSSAI, HACCP, and ISO 22000 mandates',
      'Develop innovative fortified food products addressing nutritional deficiencies'
    ],
    riasecWeights: { R: 80, I: 85, A: 25, S: 45, E: 55, C: 85 },
    primaryRiasec: ['R', 'I', 'C'],
    requiredSchoolSubjects: ['Chemistry', 'Biology or Mathematics', 'Physics'],
    recommended11_12Streams: ['Science (PCB / PCM)'],
    coreSkills: ['Food Chemistry & Microbiology', 'FSSAI Regulations', 'HACCP & Quality Auditing', 'Thermal Processing Equipment', 'Nutrition Formulation'],
    softSkills: ['Meticulous Hygiene Standards', 'Sensory Acuity', 'Safety Ethics', 'Analytical Accuracy'],
    ugPathway: {
      degrees: ['B.Tech in Food Technology / Dairy Technology, or B.Sc in Food Science'],
      durationYears: '4 Years',
      steps: ['Class 12 with Science', 'Clear ICAR / State CETs / NIFTEM Entrance', '4-year B.Tech with food processing plant internships']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Food Technology / Dairy Engineering',
      duration: '3 Years',
      details: 'Provides direct entry into dairy cooperative plants (Amul, Mother Dairy, Nandini) and FMCG factories.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Food Industry Capacity & Skill Initiative (FICSI) / ITI Food Production',
      institutes: 'Government ITIs & Food Processing Sector Skill Council',
      costPerYear: '₹2,500 - ₹12,000 / year',
      details: 'Subsidized programs with high placement in bakeries, fruit pulping plants, and dairy chilling hubs.'
    },
    entranceExams: [
      { name: 'NIFTEM Entrance Exam', body: 'National Institute of Food Technology (NIFTEM)', eligibility: 'Class 12 with PCM', officialWebsite: 'https://niftem.ac.in', timeline: 'May' },
      { name: 'ICAR AIEEA Dairy Technology', body: 'NTA / ICAR', eligibility: 'Class 12 with PCM', officialWebsite: 'https://icar.org.in', timeline: 'May' }
    ],
    studyDuration: '4 Years',
    estimatedCost: {
      govtColleges: '₹40,000 - ₹1.8L total',
      privateTier2: '₹3.5L - ₹7L total',
      privateTier1: '₹8L - ₹15L total',
      openLearningGovt: 'Under ₹25,000 (IGNOU Diploma in Dairy Technology)'
    },
    indicativeSalary: {
      entry: '₹3.8 - ₹7.0 LPA',
      midLevel: '₹8.5 - ₹18.0 LPA',
      experienced: '₹22.0+ LPA',
      sourceNote: 'Food Industry Capacity & Skill Initiative (FICSI) data'
    },
    salary: {
      entryLevel: '₹3.8 - ₹7.0 LPA (0-2 Yrs)',
      midLevel: '₹8.5 - ₹18.0 LPA (3-7 Yrs)',
      experienced: '₹22.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Plant-Based Protein Formulation', 'Smart Biodegradable Packaging Sensors', 'Clean-Label Natural Preservation'],
    officialPortalLinks: [
      { name: 'FSSAI (Food Safety and Standards Authority of India)', url: 'https://www.fssai.gov.in', type: 'Govt Portal' },
      { name: 'NIFTEM Kundli', url: 'https://niftem.ac.in', type: 'Govt Portal' },
      { name: 'FICSI Food Skills Council', url: 'https://www.ficsi.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'food-1',
        title: 'Microbial Contamination in Bottled Fruit Juice Batch',
        context: 'A routine laboratory incubation test reveals yeast colonies in a 5,000-liter batch of packaged apple juice ready for distribution.',
        challenge: 'What is your action as Quality Assurance Lead?',
        options: [
          { label: 'Ship the batch quickly so it sells before yeast expands', explanation: 'Criminal food safety breach that causes severe consumer food poisoning.', isOptimal: false },
          { label: 'Halt dispatch, place batch on strict quarantine, swab pasteurizer heat exchangers for biofilm, and recall affected line samples', explanation: 'Correct. Food safety standards mandate zero tolerance on microbiological pathogens in the public supply.', isOptimal: true },
          { label: 'Add synthetic perfume to mask the fermenting smell', explanation: 'Illegal chemical adulteration punishable by imprisonment.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Supports PM Formalization of Micro Food Processing Enterprises (PMFME) scheme to empower rural food entrepreneurs.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },

  // 11. EDUCATION
  {
    id: 'nep-curriculum-designer',
    title: 'EdTech Curriculum Designer & STEM Educator',
    hindiTitle: 'पाठ्यचर्या डिज़ाइनर एवं स्टेम शिक्षक',
    category: 'Education',
    sector: 'K-12 Education, EdTech & Educational Psychology',
    tagline: 'Transform education from rote memorization into experiential, joyful learning.',
    description: 'NEP Curriculum Designers design interactive learning materials, gamified STEM experiments, and personalized pedagogical toolkits aligned with NEP 2020\'s National Curriculum Framework (NCF).',
    dailyResponsibilities: [
      'Design modular, competency-based lesson plans that integrate art, sports, and vocational skills',
      'Develop interactive digital simulations, quizzes, and formative assessment rubrics',
      'Train school teachers on child psychology, inclusive classrooms, and bilingual pedagogical delivery',
      'Conduct educational impact evaluations to measure foundational literacy and numeracy (FLN) gains'
    ],
    riasecWeights: { R: 30, I: 80, A: 75, S: 100, E: 60, C: 70 },
    primaryRiasec: ['S', 'A', 'I'],
    requiredSchoolSubjects: ['Subject of choice (Science / Humanities / Commerce)'],
    recommended11_12Streams: ['Any stream'],
    coreSkills: ['Pedagogy & Child Development', 'NCF Curriculum Frameworks', 'EdTech Authoring Tools', 'Formative Assessment Design', 'Instructional Storytelling'],
    softSkills: ['Deep Empathy for Children', 'Inspirational Communication', 'Patience', 'Creativity'],
    ugPathway: {
      degrees: ['4-Year Integrated ITEP (B.Sc. B.Ed / B.A. B.Ed) approved by NCTE and Ministry of Education'],
      durationYears: '4 Years',
      steps: ['Class 12 in any stream', 'Appear for National Common Entrance Test (NCET) conducted by NTA', '4-year Integrated Teacher Education Programme (ITEP)', 'Qualify CTET / State TET']
    },
    diplomaPathway: {
      available: true,
      name: 'D.El.Ed (Diploma in Elementary Education)',
      duration: '2 Years',
      details: 'Available after Class 12 for teaching foundational and preparatory stages (Classes 1-5).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Govt DIET (District Institute of Education & Training) + DIKSHA Courses',
      institutes: 'DIETs in every district & NCERT / DIKSHA portal',
      costPerYear: '₹3,000 - ₹12,000 / year (Heavily subsidized by State Governments)',
      details: 'Premier government institutes providing affordable teacher education with assured recruitment paths.'
    },
    entranceExams: [
      { name: 'NCET (National Common Entrance Test for ITEP)', body: 'NTA', eligibility: 'Class 12 in any stream', officialWebsite: 'https://ncet.samarth.ac.in', timeline: 'May - June' },
      { name: 'CTET (Central Teacher Eligibility Test)', body: 'CBSE', eligibility: 'D.El.Ed or B.Ed / ITEP appeared/passed', officialWebsite: 'https://ctet.nic.in', timeline: 'July / Dec' }
    ],
    studyDuration: '4 Years (ITEP) or 2 Years (D.El.Ed)',
    estimatedCost: {
      govtColleges: '₹20,000 - ₹80,000 total (Govt DIETs and Central Universities)',
      privateTier2: '₹1.5L - ₹3.5L total',
      privateTier1: '₹4L - ₹8L total',
      openLearningGovt: 'Under ₹20,000 (IGNOU B.Ed for inservice teachers)'
    },
    indicativeSalary: {
      entry: '₹3.8 - ₹7.0 LPA (Govt Teacher: ~₹5.5 - 7.5 LPA + DA & pension benefits)',
      midLevel: '₹8.0 - ₹18.0 LPA (EdTech Curriculum Lead)',
      experienced: '₹22.0+ LPA',
      sourceNote: 'NCERT / Kendriya Vidyalaya Sangathan (KVS) 7th Pay Commission data'
    },
    salary: {
      entryLevel: '₹3.8 - ₹7.0 LPA (Govt Teacher: ~₹5.5 - 7.5 LPA + DA & pension benefits) (0-2 Yrs)',
      midLevel: '₹8.0 - ₹18.0 LPA (EdTech Curriculum Lead) (3-7 Yrs)',
      experienced: '₹22.0+ LPA (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['AI Personalized Tutoring Systems', 'Vernacular Voice Pedagogies', 'Competency-Based Holistic Progress Cards (HPC)'],
    officialPortalLinks: [
      { name: 'NCERT Portal', url: 'https://ncert.nic.in', type: 'NCERT' },
      { name: 'DIKSHA National Education Platform', url: 'https://diksha.gov.in', type: 'Govt Portal' },
      { name: 'NCTE (National Council for Teacher Education)', url: 'https://ncte.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'edu-1',
        title: 'Classroom Disengagement in Middle School Math Class',
        context: 'A Class 7 teacher finds that 80% of students struggle with fractions and tune out during textbook definitions.',
        challenge: 'What pedagogical redesign do you propose as curriculum specialist?',
        options: [
          { label: 'Double the homework worksheets and test them every morning', explanation: 'Amplifies student math anxiety without addressing cognitive conceptual blocks.', isOptimal: false },
          { label: 'Introduce hands-on fraction kits using colored paper folding, clay, and kitchen cooking measurements before introducing symbolic formulas', explanation: 'Correct. Concrete-Representational-Abstract (CRA) pedagogy is the gold-standard aligned with progressive experiential learning methods.', isOptimal: true },
          { label: 'Advise failing all students who don\'t understand immediately', explanation: 'Unethical and violates the Right to Education (RTE) mandate.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Directly anchors NEP 2020\'s transformation of teacher education through the 4-year multidisciplinary ITEP program.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 12. PUBLIC SERVICE & DEFENSE
  {
    id: 'civil-services-officer',
    title: 'Civil Services Administrator (IAS / IPS / IFS)',
    hindiTitle: 'सिविल सेवा अधिकारी (आईएएस / आईपीएस / आईएफएस)',
    category: 'Public Service',
    sector: 'Governance, Public Policy & District Administration',
    tagline: 'Lead district governance, enforce constitutional law, and drive socioeconomic policy.',
    description: 'Civil Services Administrators manage public policy execution, district revenue, developmental schemes, disaster response, and maintenance of public order across India\'s administrative machinery.',
    dailyResponsibilities: [
      'Coordinate district welfare schemes (health, education, roads, sanitation, food distribution)',
      'Manage revenue administration, land records modernization, and public grievance redressal',
      'Command emergency disaster management and civil defense during floods, cyclones, and crises',
      'Draft policy recommendations and implement legislative directives with bureaucratic neutrality'
    ],
    riasecWeights: { R: 40, I: 85, A: 40, S: 90, E: 100, C: 85 },
    primaryRiasec: ['E', 'S', 'C'],
    requiredSchoolSubjects: ['Any stream / subjects (UPSC requires graduation in any discipline)'],
    recommended11_12Streams: ['Humanities, Science, or Commerce (All streams are equal in UPSC)'],
    coreSkills: ['Public Administration & Policy', 'Constitutional Law', 'Crisis Leadership', 'District Revenue Systems', 'Analytical Essay Writing'],
    softSkills: ['Unflinching Constitutional Ethics', 'Leadership Under Pressure', 'Deep Empathy for the Underprivileged', 'Impartiality'],
    ugPathway: {
      degrees: ['Bachelor\'s Degree in any discipline (B.A., B.Sc., B.Com., B.Tech., MBBS, Law, etc.)'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'Complete any recognized Bachelor\'s degree', 'Appear for UPSC Civil Services Examination (Prelims -> Mains -> Interview)']
    },
    diplomaPathway: {
      available: false,
      name: 'N/A for UPSC CSE (Graduation is a mandatory statutory requirement)',
      duration: 'N/A',
      details: 'Students with 3-year polytechnic diplomas must complete a lateral-entry degree or IGNOU degree to be eligible.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Govt College Degree + Free Self-Study (NCERTs & Govt Portals)',
      institutes: 'State Govt Universities + NCERT textbooks (available free online)',
      costPerYear: '₹5,000 - ₹20,000 / year total education cost',
      details: 'Thousands of officers from humble rural backgrounds clear UPSC purely through NCERT books and public libraries without expensive coaching.'
    },
    entranceExams: [
      { name: 'UPSC Civil Services Examination (CSE)', body: 'Union Public Service Commission', eligibility: 'Graduation in any discipline, Age 21-32 (Relaxations apply)', officialWebsite: 'https://upsc.gov.in', timeline: 'Prelims: May/June, Mains: Sept' },
      { name: 'State Public Service Commission Exams (UPPSC, BPSC, MPSC, etc.)', body: 'State PSCs', eligibility: 'Graduation in any discipline', officialWebsite: 'https://mpsc.gov.in', timeline: 'Annual Notifications' }
    ],
    studyDuration: '3 - 4 Years (UG) + 1-2 Years (Rigorous Preparation)',
    estimatedCost: {
      govtColleges: '₹15,000 - ₹60,000 total (Graduation in Govt College)',
      privateTier2: '₹1.5L - ₹3.5L total',
      privateTier1: '₹5L - ₹12L total',
      openLearningGovt: 'Under ₹20,000 (IGNOU Bachelor\'s degree)'
    },
    indicativeSalary: {
      entry: '₹6.7 - ₹10.5 LPA (Sub-Divisional Magistrate: Level 10 Pay Matrix: ₹56,100 basic + DA, official bungalow, vehicle, security)',
      midLevel: '₹15.0 - ₹24.0 LPA (District Magistrate)',
      experienced: '₹27.0+ LPA (Chief Secretary / Cabinet Secretary: Level 17 Pay Matrix: ₹2,25,000 basic)',
      sourceNote: '7th Central Pay Commission Pay Matrix for All India Services'
    },
    salary: {
      entryLevel: '₹6.7 - ₹10.5 LPA (Sub-Divisional Magistrate: Level 10 Pay Matrix: ₹56,100 basic + DA, official bungalow, vehicle, security) (0-2 Yrs)',
      midLevel: '₹15.0 - ₹24.0 LPA (District Magistrate) (3-7 Yrs)',
      experienced: '₹27.0+ LPA (Chief Secretary / Cabinet Secretary: Level 17 Pay Matrix: ₹2,25,000 basic) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['E-Governance & AI Citizen Portals', 'Direct Benefit Transfer (DBT) Analytics', 'Disaster Early Warning GIS Systems'],
    officialPortalLinks: [
      { name: 'UPSC Official Portal', url: 'https://upsc.gov.in', type: 'Govt Portal' },
      { name: 'Department of Personnel and Training (DoPT)', url: 'https://dopt.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'civil-serv-1',
        title: 'Flash Flood Alert in Low-Lying Riverine District',
        context: 'At 2:00 AM, the central water commission alerts that an upstream dam release will flood 18 villages within 6 hours.',
        challenge: 'What is your immediate executive command as the District Magistrate / SDM?',
        options: [
          { label: 'Go back to sleep and inspect the villages tomorrow afternoon', explanation: 'Catastrophic dereliction of duty resulting in loss of innocent human lives.', isOptimal: false },
          { label: 'Activate Incident Response System, mobilize NDRF/SDRF boats, sound emergency sirens, and supervise evacuation to elevated shelters', explanation: 'Correct. Standard disaster protocol mandates immediate proactive evacuation and relief center activation.', isOptimal: true },
          { label: 'Issue a tender requesting private contractors to bid for rescue life-jackets next month', explanation: 'Bureaucratic paralysis during an active emergency is fatal.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes ethical leadership and constitutional values in general education to prepare empathetic future public servants.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },
  {
    id: 'defense-forces-officer',
    title: 'Defense Services Officer (Army / Navy / Air Force)',
    hindiTitle: 'रक्षा सेवा अधिकारी (थल सेना / नौसेना / वायु सेना)',
    category: 'Public Service',
    sector: 'Armed Forces & National Defense',
    tagline: 'Defend sovereign borders, command troops, and embody valor and national service.',
    description: 'Defense Services Officers command infantry, armored regiments, naval warships, and combat fighter squadrons. They maintain combat readiness, strategic deterrence, and execute domestic humanitarian disaster relief.',
    dailyResponsibilities: [
      'Lead tactical combat troop exercises, weapon proficiencies, and high-altitude deployments',
      'Operate advanced military hardware, surveillance radars, and encrypted tactical communications',
      'Maintain peak physical stamina, mental resilience, and esprit de corps among subordinates',
      'Coordinate search, rescue, and humanitarian assistance during national crises'
    ],
    riasecWeights: { R: 100, I: 70, A: 25, S: 75, E: 95, C: 85 },
    primaryRiasec: ['R', 'E', 'C'],
    requiredSchoolSubjects: ['PCM for Air Force / Navy; Any stream for Army'],
    recommended11_12Streams: ['Science (PCM) preferred for all wings; Any stream for Army wing'],
    coreSkills: ['Tactical Combat Command', 'Military Leadership', 'Physical Endurance & Marksmanship', 'Navigation & Orienteering', 'Crisis Decision-Making'],
    softSkills: ['Supreme Courage', 'Integrity', 'Camaraderie', 'Unconditional Duty'],
    ugPathway: {
      degrees: ['B.A. / B.Sc. / B.Tech from National Defence Academy (NDA) / INA'],
      durationYears: '3 Years (NDA) + 1 Year (IMA / AFA / INA)',
      steps: ['Class 12 in appropriate stream (Age 16.5 to 19.5)', 'Clear NDA & NA Written Exam by UPSC', 'Crack 5-day Services Selection Board (SSB) interview & Medicals', '3 years at NDA Khadakwasla (Fully paid by Govt with degree from JNU)']
    },
    diplomaPathway: {
      available: false,
      name: 'N/A for NDA Commissioned Officers (Direct entry requires Class 12)',
      duration: 'N/A',
      details: 'Diploma holders can enter technical soldier/airman trades or complete B.Tech for CDS/TGC entry.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Agniveer Recruitment Scheme (Soldier / Sailor / Airman)',
      institutes: 'Direct recruitment rallies across all districts under Ministry of Defence',
      costPerYear: 'Zero Cost (All training, food, uniforms, and allowances paid by Government)',
      details: 'Open after Class 10/12; includes 4-year service with ₹30k-40k/month salary, skill certification, and Seva Nidhi fund.'
    },
    entranceExams: [
      { name: 'NDA & NA Examination', body: 'UPSC', eligibility: 'Class 12 (Age 16.5 to 19.5)', officialWebsite: 'https://upsc.gov.in', timeline: 'NDA I: April, NDA II: September' },
      { name: 'CDS (Combined Defence Services)', body: 'UPSC', eligibility: 'Graduation in any discipline', officialWebsite: 'https://upsc.gov.in', timeline: 'Feb / Sept' }
    ],
    studyDuration: '3 - 4 Years (100% sponsored by Govt of India)',
    estimatedCost: {
      govtColleges: '₹0 (NDA cadet training is 100% free with monthly cadet stipend and allowances)',
      privateTier2: 'N/A',
      privateTier1: 'N/A',
      openLearningGovt: 'N/A'
    },
    indicativeSalary: {
      entry: '₹8.0 - ₹14.0 LPA (Lieutenant: Level 10 Pay Matrix: ₹56,100 basic + Military Service Pay ₹15,500 + DA + high altitude allowances)',
      midLevel: '₹16.0 - ₹26.0 LPA (Major / Lt Colonel)',
      experienced: '₹30.0+ LPA (Brigadier / Major General)',
      sourceNote: '7th Central Pay Commission Defense Services Pay Rules'
    },
    salary: {
      entryLevel: '₹8.0 - ₹14.0 LPA (Lieutenant: Level 10 Pay Matrix: ₹56,100 basic + Military Service Pay ₹15,500 + DA + high altitude allowances) (0-2 Yrs)',
      midLevel: '₹16.0 - ₹26.0 LPA (Major / Lt Colonel) (3-7 Yrs)',
      experienced: '₹30.0+ LPA (Brigadier / Major General) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Drone Swarm Counter-Measures', 'Electronic & Cyber Warfare Tactics', 'Night Vision & Sensor Fusion Ops'],
    officialPortalLinks: [
      { name: 'Join Indian Army', url: 'https://joinindianarmy.nic.in', type: 'Govt Portal' },
      { name: 'Join Indian Air Force', url: 'https://afcat.cdac.in', type: 'Govt Portal' },
      { name: 'Join Indian Navy', url: 'https://www.joinindiannavy.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'def-1',
        title: 'High-Altitude Patrol Caught in Sudden Blizzard',
        context: 'A 10-soldier border reconnaissance patrol at 15,000 feet encounters a whiteout blizzard with temperatures plummeting to -25°C.',
        challenge: 'What is your command decision as the patrol commander?',
        options: [
          { label: 'Scatter and run in random directions hoping someone finds the base', explanation: 'Scattering in a blizzard guarantees disorientation, hypothermia, and death.', isOptimal: false },
          { label: 'Establish buddy-pairs, anchor safety line, dig emergency snow cave shelter, and establish radio sit-rep with base control', explanation: 'Correct. Maintaining tactical formation and building immediate thermal shelter ensures 100% troop survival.', isOptimal: true },
          { label: 'Discard all winter sleeping bags to move lighter', explanation: 'Fatal mistake leading to fatal hypothermia within an hour.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes NCC (National Cadet Corps) integration as credit-earning elective courses in schools and colleges.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },

  // 13. ENTREPRENEURSHIP
  {
    id: 'agritech-rural-entrepreneur',
    title: 'Agritech & Rural Enterprise Founder',
    hindiTitle: 'एग्रीटेक एवं ग्रामीण उद्यमी',
    category: 'Entrepreneurship',
    sector: 'Startups, Rural Innovation & Social Enterprises',
    tagline: 'Build ventures that create sustainable jobs, farmer wealth, and rural self-reliance.',
    description: 'Rural Entrepreneurs identify local agricultural and handicraft market gaps, launch scalable startups, build supply chains, and leverage government funding (PMEGP, Startup India, Mudra) to transform rural economies.',
    dailyResponsibilities: [
      'Validate product-market fit through direct farmer and rural merchant interviews',
      'Design lean unit-economic models and pitch to angel investors and government incubation grants',
      'Build localized distribution channels and negotiate fair-trade farmer procurement contracts',
      'Manage team hiring, regulatory GST/FSSAI filings, and customer feedback iterations'
    ],
    riasecWeights: { R: 60, I: 75, A: 65, S: 80, E: 100, C: 70 },
    primaryRiasec: ['E', 'I', 'S'],
    requiredSchoolSubjects: ['Any stream / subjects'],
    recommended11_12Streams: ['Any stream with interest in business, economics, or agriculture'],
    coreSkills: ['Lean Startup Methodology', 'Unit Economics & Budgeting', 'Pitching & Storytelling', 'Farmer Relationship Building', 'Digital Marketing'],
    softSkills: ['Unyielding Grit', 'Risk Appetite', 'Visionary Optimism', 'Adaptability'],
    ugPathway: {
      degrees: ['BBA, B.Com, B.Tech, or B.Voc in Rural Entrepreneurship'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'Undergraduate degree with incubation center support', 'Apply for Startup India seed funds and incubators (e.g., T-Hub, IIM Ahmedabad CIIE)']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Entrepreneurship Development & Small Business',
      duration: '1 Year',
      details: 'Offered by Entrepreneurship Development Institute of India (EDII Ahmedabad).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Pradhan Mantri Mudra Yojana (PMMY) + KVIC PMEGP Scheme',
      institutes: 'Khadi and Village Industries Commission (KVIC) & MSME Incubators',
      costPerYear: 'Free training + 15-35% capital subsidy on government startup loans',
      details: 'PMEGP provides up to ₹50 Lakh loan with up to 35% government subsidy for rural manufacturing enterprises.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.5L total',
      privateTier2: '₹3.5L - ₹7L total',
      privateTier1: '₹8L - ₹18L total',
      openLearningGovt: 'Under ₹20,000 (IGNOU B.Com / B.A.)'
    },
    indicativeSalary: {
      entry: '₹3.0 - ₹8.0 LPA (Early venture reinvestment phase)',
      midLevel: '₹15.0 - ₹35.0 LPA (Profitable venture growth)',
      experienced: '₹50.0+ LPA (Scalable enterprise equity valuation)',
      sourceNote: 'Startup India & Impact Investors Council reports'
    },
    salary: {
      entryLevel: '₹3.0 - ₹8.0 LPA (Early venture reinvestment phase) (0-2 Yrs)',
      midLevel: '₹15.0 - ₹35.0 LPA (Profitable venture growth) (3-7 Yrs)',
      experienced: '₹50.0+ LPA (Scalable enterprise equity valuation) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Direct-to-Consumer (D2C) Cold Chain Delivery', 'Carbon Credit Aggregation for Smallholders', 'AI Vernacular Voice Commerce'],
    officialPortalLinks: [
      { name: 'Startup India Portal', url: 'https://www.startupindia.gov.in', type: 'Govt Portal' },
      { name: 'PMEGP KVIC Scheme', url: 'https://www.kviconline.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'ent-1',
        title: 'Zero Working Capital 3 Weeks Before Peak Harvest Procurement',
        context: 'Your mushroom processing startup has received orders for ₹12 Lakhs from retail chains, but you lack ₹3 Lakhs upfront cash to buy raw mushrooms.',
        challenge: 'How do you navigate this cashflow bottleneck?',
        options: [
          { label: 'Cancel all client orders and close the enterprise down', explanation: 'Giving up at the first cashflow hurdle prevents startup success.', isOptimal: false },
          { label: 'Negotiate 30% advance deposit from corporate buyers, seek invoice factoring, or utilize emergency SIDBI/Mudra micro-credit', explanation: 'Correct. Working capital optimization and customer advances solve cash crunches without giving away equity.', isOptimal: true },
          { label: 'Borrow money from illegal local loan sharks at 60% interest', explanation: 'Cripples enterprise margins and destroys the founder with predatory debt.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes institution-level incubation centers, student startup intellectual property rights, and commercialization grants.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'green-startup-entrepreneur',
    title: 'CleanTech & Circular Economy Founder',
    hindiTitle: 'क्लीनटेक एवं सर्कुलर इकोनॉमी उद्यमी',
    category: 'Entrepreneurship',
    sector: 'Waste Management, EV Infrastructure & Sustainability',
    tagline: 'Turn environmental problems into thriving, sustainable, and profitable ventures.',
    description: 'CleanTech Founders build enterprises around plastic upcycling, electronic waste recovery, electric vehicle battery swapping, and biodegradable packaging to create economic value while protecting planetary health.',
    dailyResponsibilities: [
      'Architect circular waste collection supply chains and informal waste-picker integration',
      'Design clean recycling and chemical recovery prototypes in pilot workshops',
      'Pitch to climate tech impact venture funds and secure extended producer responsibility (EPR) contracts',
      'Monitor lifecycle carbon offsets and verify statutory green regulatory compliance'
    ],
    riasecWeights: { R: 75, I: 80, A: 60, S: 75, E: 100, C: 65 },
    primaryRiasec: ['E', 'I', 'R'],
    requiredSchoolSubjects: ['Science, Commerce, or Humanities'],
    recommended11_12Streams: ['Any stream with environmental passion'],
    coreSkills: ['Circular Economy Frameworks', 'EPR Regulations', 'B2B Business Development', 'Pitch Deck Storytelling', 'Supply Chain Mapping'],
    softSkills: ['Environmental Passion', 'Tenacity', 'Integrity', 'Resourcefulness'],
    ugPathway: {
      degrees: ['B.Tech, B.Sc. Environmental Science, or BBA with Climate Innovation focus'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'Undergraduate degree', 'Incubate startup through BIRAC, NSRCEL, or Atal Incubation Centres']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Plastic Moulding Technology / Environmental Tech (CIPET)',
      duration: '3 Years',
      details: 'Offered by Central Institute of Petrochemicals Engineering & Technology (CIPET).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Atal Incubation Centres (AIC) & Skill Council for Green Jobs Incubators',
      institutes: 'Atal Innovation Mission (NITI Aayog)',
      costPerYear: 'Free incubation support + up to ₹10-25 Lakhs seed grants',
      details: 'Government funds up to 100% of seed grants for promising clean-tech student innovators.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' }
    ],
    studyDuration: '3 - 4 Years',
    estimatedCost: {
      govtColleges: '₹40,000 - ₹2L total',
      privateTier2: '₹4L - ₹8L total',
      privateTier1: '₹10L - ₹20L total',
      openLearningGovt: 'Under ₹25,000 (IGNOU + AIC incubators)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹9.0 LPA',
      midLevel: '₹18.0 - ₹35.0 LPA',
      experienced: '₹45.0+ LPA (Equity Value)',
      sourceNote: 'Climate Collective & NITI Aayog Startup reports'
    },
    salary: {
      entryLevel: '₹4.0 - ₹9.0 LPA (0-2 Yrs)',
      midLevel: '₹18.0 - ₹35.0 LPA (3-7 Yrs)',
      experienced: '₹45.0+ LPA (Equity Value) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Lithium-Ion Battery Black Mass Recycling', 'Mycelium Biodegradable Packaging', 'Industrial Waste Heat Recovery Systems'],
    officialPortalLinks: [
      { name: 'Atal Innovation Mission (AIM NITI Aayog)', url: 'https://aim.gov.in', type: 'Govt Portal' },
      { name: 'CIPET Petrochemical & Plastics Institute', url: 'https://www.cipet.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'clean-1',
        title: 'Contaminated E-Waste Plastic Feedstock in Recycling Extruder',
        context: 'A batch of 5 tons of collected electronic scrap plastic has hazardous brominated flame retardants that exceed permissible BIS safety limits.',
        challenge: 'What is your operational startup decision?',
        options: [
          { label: 'Melt it anyway and sell it into children\'s toy manufacturing', explanation: 'Horrific toxic violation causing cancer risks and immediate criminal prosecution.', isOptimal: false },
          { label: 'Reject contaminated stream from the consumer line, segregate via density float-sink tanks, and route to specialized licensed industrial incinerator facilities', explanation: 'Correct. High-integrity green brands never compromise on consumer safety and environmental standards.', isOptimal: true },
          { label: 'Dump it into an open municipal dumpster at night', explanation: 'Illegal environmental dumping resulting in permanent factory closure.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes green skills and multidisciplinary environmental entrepreneurship across all higher educational institutions.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },

  // 14. VOCATIONAL & ITI/POLYTECHNIC TRADES
  {
    id: 'ev-diagnostic-technician',
    title: 'Electric Vehicle (EV) Diagnostic Technician',
    hindiTitle: 'इलेक्ट्रिक वाहन (ईवी) डायग्नोस्टिक तकनीशियन',
    category: 'Vocational',
    sector: 'Automotive, Electric Mobility & Clean Transportation',
    tagline: 'Diagnose high-voltage lithium battery packs, motor controllers, and electric drive trains.',
    description: 'EV Diagnostic Technicians service electric two-wheelers, cars, and commercial buses. They diagnose battery management systems (BMS), calibrate regenerative braking, repair charging stations, and handle high-voltage electrical safety.',
    dailyResponsibilities: [
      'Connect OBD-II and CAN-bus scanners to diagnose motor controller fault codes and thermal anomalies',
      'Test individual lithium battery cell voltage balance and internal impedance resistance',
      'Safely de-energize high-voltage DC contactors following strict lock-out tag-out (LOTO) protocols',
      'Inspect onboard AC/DC fast chargers, DC-DC step-down converters, and regenerative brake calipers'
    ],
    riasecWeights: { R: 100, I: 80, A: 20, S: 25, E: 45, C: 80 },
    primaryRiasec: ['R', 'I', 'C'],
    requiredSchoolSubjects: ['Science / Physics', 'Mathematics', 'Basic Electronics / Automobile'],
    recommended11_12Streams: ['Science (PCM), Vocational Automobile, or Class 10 ITI Trade'],
    coreSkills: ['CAN-Bus Diagnostics', 'High-Voltage Battery Safety (NFPA 70E)', 'BMS Troubleshooting', 'Motor Controller Tuning', 'Digital Multimeter Operations'],
    softSkills: ['High Safety Discipline', 'Analytical Rigor', 'Physical Dexterity', 'Customer Communication'],
    ugPathway: {
      degrees: ['B.Voc in Electric Vehicle Technology / B.Tech in Automobile Engineering'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 or 3-year Diploma', 'Enroll in B.Voc EV Technology', 'Apprenticeship with EV OEMs (Tata Motors, Ather, Ola Electric)']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Automobile / Electrical & EV Engineering',
      duration: '3 Years',
      details: 'Offered by State Technical Education Boards after Class 10. Immediate recruitment into EV service hubs and battery plants.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Mechanic Electric Vehicle Trade / Automotive Skills Council of India (ASDC)',
      institutes: 'Government ITIs (DGT introduced 2-year dedicated EV trade)',
      costPerYear: '₹1,500 - ₹8,000 / year (Almost free in government ITIs!)',
      details: 'High-speed employment route with massive industry demand from India\'s fast-growing electric vehicle sector.'
    },
    entranceExams: [
      { name: 'State ITI Admission Test / Merit List', body: 'State Directorate of Employment & Training', eligibility: 'Class 10 with Math & Science', officialWebsite: 'https://dgt.gov.in', timeline: 'June - July' },
      { name: 'State Polytechnic CET', body: 'State Technical Boards', eligibility: 'Class 10 pass', officialWebsite: 'https://jeecup.admissions.nic.in', timeline: 'May' }
    ],
    studyDuration: '1 - 2 Years (ITI) or 3 Years (Diploma)',
    estimatedCost: {
      govtColleges: '₹3,000 - ₹25,000 total (Govt ITI / Govt Polytechnic)',
      privateTier2: '₹1.2L - ₹3L total',
      privateTier1: 'N/A for vocational trades',
      openLearningGovt: 'Under ₹15,000 (Skill India Digital + ITI trade)'
    },
    indicativeSalary: {
      entry: '₹3.2 - ₹5.5 LPA',
      midLevel: '₹7.0 - ₹14.0 LPA (Master EV Service Technician)',
      experienced: '₹18.0+ LPA (EV Fleet Service Manager)',
      sourceNote: 'Automotive Skills Development Council (ASDC) data'
    },
    salary: {
      entryLevel: '₹3.2 - ₹5.5 LPA (0-2 Yrs)',
      midLevel: '₹7.0 - ₹14.0 LPA (Master EV Service Technician) (3-7 Yrs)',
      experienced: '₹18.0+ LPA (EV Fleet Service Manager) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Solid-State Battery Pack Servicing', 'Wireless Inductive Charging Maintenance', 'Bi-directional Vehicle-to-Grid (V2G) Systems'],
    officialPortalLinks: [
      { name: 'Directorate General of Training (DGT ITI)', url: 'https://dgt.gov.in', type: 'Govt Portal' },
      { name: 'Automotive Skills Development Council (ASDC)', url: 'https://www.asdc.org.in', type: 'Skill India' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'ev-1',
        title: 'BMS High-Voltage Isolation Fault Warning on EV Scooter',
        context: 'An electric delivery scooter flashes a high-voltage chassis isolation fault warning after being ridden through waterlogged monsoon streets.',
        challenge: 'What is your primary safety protocol?',
        options: [
          { label: 'Touch bare wiring with your hand to feel if current is leaking', explanation: 'Fatal high-voltage DC electrocution hazard.', isOptimal: false },
          { label: 'Wear certified Class-0 1000V insulated gloves, disengage the emergency manual service disconnect plug, and perform mega-ohm insulation resistance test on wiring harness', explanation: 'Correct. Standard safety isolation protects technician life while pinpointing moisture ingress points.', isOptimal: true },
          { label: 'Spray water directly onto the battery pack to rinse the mud', explanation: 'Drives water deeper into sealed electrical connectors, risking thermal runaway.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes complete parity of vocational education with academic streams through the National Higher Education Qualifications Framework (NHEQF).',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'cnc-machine-tooling-specialist',
    title: 'CNC Machine & Precision Tooling Specialist',
    hindiTitle: 'सीएनसी मशीन एवं प्रिसिजन टूलिंग विशेषज्ञ',
    category: 'Vocational',
    sector: 'Advanced Manufacturing, Aerospace & Precision Machining',
    tagline: 'Carve aerospace alloys, medical implants, and defense components down to the micron.',
    description: 'CNC (Computer Numerical Control) Specialists write G-code and M-code programs, set up multi-axis milling and turning centers, and machine high-precision metal parts for aerospace satellites, automotive engines, and medical orthopedic implants.',
    dailyResponsibilities: [
      'Interpret engineering 2D blueprints and 3D CAD models with geometric dimensioning & tolerancing (GD&T)',
      'Generate toolpaths using CAM software (Mastercam, Siemens NX) and write optimized G-code',
      'Set up carbide cutting tools, calibrate zero-work offsets, and align work-holding hydraulic chucks',
      'Measure manufactured parts using vernier calipers, micrometers, and Coordinate Measuring Machines (CMM)'
    ],
    riasecWeights: { R: 100, I: 75, A: 25, S: 15, E: 40, C: 90 },
    primaryRiasec: ['R', 'C', 'I'],
    requiredSchoolSubjects: ['Mathematics', 'Science / Physics'],
    recommended11_12Streams: ['Class 10 pass into ITI Machinist / Turner, or Science (PCM)'],
    coreSkills: ['CNC G-Code / M-Code Programming', 'CAM Software (Mastercam)', 'GD&T Blueprints Reading', 'Micrometer & CMM Inspection', 'Cutting Tool Selection'],
    softSkills: ['Micron-Level Precision', 'Methodical Patience', 'Safety Vigilance', 'Mechanical Dexterity'],
    ugPathway: {
      degrees: ['B.Voc in Manufacturing Technology / B.Tech in Mechanical Engineering'],
      durationYears: '3 - 4 Years',
      steps: ['Class 10 or 12', 'ITI Machinist -> Advanced Diploma / B.Voc', 'Machining engineer in aerospace / defense supply chain']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Mechanical / Production Engineering',
      duration: '3 Years',
      details: 'Available after Class 10. Direct hiring by leading machine tool builders and aerospace vendors.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Machinist / Turner / Tool & Die Maker Trade',
      institutes: 'Government ITIs and MSME Tool Rooms across India',
      costPerYear: '₹1,500 - ₹10,000 / year (Nominal government fees)',
      details: 'One of India\'s most employable blue-collar trades with immediate job placement in industrial manufacturing belts.'
    },
    entranceExams: [
      { name: 'State ITI Admission', body: 'State DGT', eligibility: 'Class 10 with Math & Science', officialWebsite: 'https://dgt.gov.in', timeline: 'June' },
      { name: 'MSME Tool Room Entrance Exam', body: 'MSME Development Institutes', eligibility: 'Class 10 pass', officialWebsite: 'https://dcmsme.gov.in', timeline: 'May' }
    ],
    studyDuration: '2 Years (ITI) or 3 Years (Diploma)',
    estimatedCost: {
      govtColleges: '₹3,000 - ₹25,000 total',
      privateTier2: '₹1.0L - ₹2.5L total',
      privateTier1: 'N/A for vocational trades',
      openLearningGovt: 'Under ₹15,000 (Govt ITI pathway)'
    },
    indicativeSalary: {
      entry: '₹3.0 - ₹5.0 LPA',
      midLevel: '₹6.5 - ₹12.0 LPA (Senior CNC Programmer / Tooling Lead)',
      experienced: '₹16.0+ LPA (Toolroom Production Manager)',
      sourceNote: 'Capital Goods Skill Council (CGSC) industry reports'
    },
    salary: {
      entryLevel: '₹3.0 - ₹5.0 LPA (0-2 Yrs)',
      midLevel: '₹6.5 - ₹12.0 LPA (Senior CNC Programmer / Tooling Lead) (3-7 Yrs)',
      experienced: '₹16.0+ LPA (Toolroom Production Manager) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['5-Axis Simultaneous Machining', 'Hybrid Additive 3D Metal Printing', 'Digital Twin Machine Simulation'],
    officialPortalLinks: [
      { name: 'Capital Goods Skill Council (CGSC)', url: 'https://cgsc.in', type: 'Skill India' },
      { name: 'MSME Central Tool Room', url: 'https://dcmsme.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'cnc-1',
        title: 'Chatter Vibration on Titanium Aerospace Part Milling',
        context: 'A 5-axis CNC mill produces high-pitched chatter noise while machining a titanium turbine flange, leaving rough surface ripples.',
        challenge: 'What is your immediate tooling adjustment?',
        options: [
          { label: 'Double the spindle RPM to force it through quickly', explanation: 'Catastrophic tool break, destroys expensive titanium stock, and risks operator injury.', isOptimal: false },
          { label: 'Reduce overhang tool length, adjust feed-rate per tooth, and optimize harmonic spindle speed damping', explanation: 'Correct. Shortening tool overhang and tuning harmonic speed dampens chatter frequencies and produces mirror finishes.', isOptimal: true },
          { label: 'Ignore the noise and put on earplugs', explanation: 'Unacceptable negligence that ruins aerospace certification tolerances.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Enables ITI and vocational students to earn college credits and transition into engineering degrees via the Academic Bank of Credits.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  },
  {
    id: 'cad-draughtsperson-bim',
    title: 'Architectural Draughtsperson & BIM Technician',
    hindiTitle: 'वास्तुशिल्प ड्राफ्ट्सपर्सन एवं बीआईएम तकनीशियन',
    category: 'Vocational',
    sector: 'Architecture, Construction & Smart Infrastructure',
    tagline: 'Translate architectural dreams into digital 3D blueprints and parametric building models.',
    description: 'BIM Technicians and Draughtspersons transform conceptual sketches by architects and structural engineers into working construction drawings, electrical conduits, plumbing maps, and parametric 3D models.',
    dailyResponsibilities: [
      'Draft detailed 2D architectural elevations, floor plans, and sectional views in AutoCAD',
      'Build 3D Building Information Models (BIM) in Autodesk Revit with coordinated clash-detection',
      'Extract structural Bill of Quantities (BOQ), material specifications, and steel bar bending schedules',
      'Coordinate revisions between structural, HVAC, and plumbing engineering sub-teams'
    ],
    riasecWeights: { R: 85, I: 65, A: 80, S: 25, E: 35, C: 95 },
    primaryRiasec: ['C', 'R', 'A'],
    requiredSchoolSubjects: ['Mathematics', 'Drawing / Science'],
    recommended11_12Streams: ['Class 10 pass into ITI Draughtsman Civil, or Arts/Science with Drawing'],
    coreSkills: ['AutoCAD (2D/3D)', 'Autodesk Revit BIM', 'Architectural Drafting Standards', 'Clash Detection (Navisworks)', 'BOQ Estimations'],
    softSkills: ['Dimensional Accuracy', 'Visual Spatial Thinking', 'Detail Discipline', 'Patience'],
    ugPathway: {
      degrees: ['B.Voc in Interior Design / B.Arch / B.Sc in Interior & Architectural Design'],
      durationYears: '3 - 5 Years',
      steps: ['Class 10 or 12', 'ITI Draughtsman Civil -> Diploma -> B.Voc / B.Arch']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Civil / Architectural Assistantship',
      duration: '3 Years',
      details: 'Offered widely across State Technical Boards after Class 10. High employment rate with builder firms and architectural studios.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Draughtsman (Civil) Trade',
      institutes: 'Government ITIs across all Indian districts',
      costPerYear: '₹1,500 - ₹8,000 / year total cost',
      details: '2-year vocational program teaching technical drafting, computer-aided design, and site survey techniques.'
    },
    entranceExams: [
      { name: 'State ITI Admission Test / Merit', body: 'State DGT', eligibility: 'Class 10 pass', officialWebsite: 'https://dgt.gov.in', timeline: 'June - July' },
      { name: 'State Polytechnic Joint Entrance', body: 'State Boards', eligibility: 'Class 10 pass', officialWebsite: 'https://jeecup.admissions.nic.in', timeline: 'May' }
    ],
    studyDuration: '2 Years (ITI) or 3 Years (Diploma)',
    estimatedCost: {
      govtColleges: '₹3,000 - ₹20,000 total',
      privateTier2: '₹1.0L - ₹2.5L total',
      privateTier1: 'N/A for vocational trades',
      openLearningGovt: 'Under ₹15,000 (Govt ITI pathway)'
    },
    indicativeSalary: {
      entry: '₹3.0 - ₹5.0 LPA',
      midLevel: '₹6.0 - ₹12.0 LPA (BIM Coordinator)',
      experienced: '₹15.0+ LPA (BIM Manager / Architectural Project Lead)',
      sourceNote: 'Construction Skill Development Council of India (CSDCI)'
    },
    salary: {
      entryLevel: '₹3.0 - ₹5.0 LPA (0-2 Yrs)',
      midLevel: '₹6.0 - ₹12.0 LPA (BIM Coordinator) (3-7 Yrs)',
      experienced: '₹15.0+ LPA (BIM Manager / Architectural Project Lead) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['4D/5D BIM Construction Scheduling', 'Point Cloud 3D Laser Scanning into BIM', 'Green Building Energy Modeling'],
    officialPortalLinks: [
      { name: 'Construction Skill Development Council', url: 'https://csdcindia.org', type: 'Skill India' },
      { name: 'Council of Architecture India', url: 'https://www.coa.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'cad-1',
        title: 'BIM Clash Detection Between Air Ducts and Structural Beams',
        context: 'Navisworks 3D coordination reveals 24 physical clashes where HVAC metal ventilation ducts penetrate concrete structural load-bearing beams.',
        challenge: 'What is your action as BIM Draughtsperson?',
        options: [
          { label: 'Advise on-site laborers to drill through the concrete beams anyway', explanation: 'Disastrous structural violation that causes building ceiling collapse.', isOptimal: false },
          { label: 'Flag clashes in coordination report, adjust HVAC duct elevation under the beam soffit, and issue updated coordinated section drawings to the MEP team', explanation: 'Correct. Clash resolution in digital BIM models before pouring concrete saves lakhs of rupees in on-site demolition.', isOptimal: true },
          { label: 'Delete the HVAC ducts from the model so clashes disappear from the computer screen', explanation: 'Falsifying drawings leaves site workers with zero routing path during construction.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes practical vocational skills from Class 6 onwards (10 bagless days) to inspire students toward technical professions.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'solar-pv-technician',
    title: 'Solar PV Installation & Maintenance Technician',
    hindiTitle: 'सोलर पीवी इंस्टॉलेशन एवं रखरखाव तकनीशियन',
    category: 'Vocational',
    sector: 'CleanTech & Solar Power',
    tagline: 'Assemble rooftop solar panels, wiring inverters, and battery storage banks.',
    description: 'Solar PV Technicians install, wire, inspect, and maintain rooftop and agricultural solar pump systems. They test string open-circuit voltage, crimp MC4 connectors, and ensure grounding lightning arrestors protect domestic and commercial installations.',
    dailyResponsibilities: [
      'Mount solar panel aluminum racking structures and secure photovoltaic modules to roof rafters',
      'Wire solar string arrays, DC isolator switches, and grid-tied / hybrid solar inverters',
      'Measure circuit continuity, insulation resistance, and grid synchronization parameters',
      'Clean dust and bird droppings from panels, replace faulty bypass diodes, and optimize power yields'
    ],
    riasecWeights: { R: 100, I: 60, A: 15, S: 25, E: 45, C: 85 },
    primaryRiasec: ['R', 'C', 'I'],
    requiredSchoolSubjects: ['Science', 'Basic Mathematics'],
    recommended11_12Streams: ['Class 10 ITI Electrician / Wireman, or Science (PCM)'],
    coreSkills: ['Solar Inverter Wiring', 'DC Circuit Testing', 'Rooftop Structural Safety', 'MC4 Crimping & Earthing', 'Battery Storage Basics'],
    softSkills: ['Heights Safety Awareness', 'Physical Fitness', 'Customer Friendliness', 'Work Ethic'],
    ugPathway: {
      degrees: ['B.Voc in Renewable Energy Technology'],
      durationYears: '3 Years',
      steps: ['Class 10/12 pass', 'ITI Electrician or B.Voc Solar', 'Suryamitra Certification', 'Solar rooftop entrepreneur or EPC company technician']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Electrical Engineering / Renewable Energy',
      duration: '3 Years',
      details: 'Offered by State Technical Boards. High demand across PM Surya Ghar Muft Bijli Yojana installation vendors.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'PM Surya Ghar / Suryamitra Skill Training (Govt of India)',
      institutes: 'National Institute of Solar Energy (NISE) & Skill India ITIs',
      costPerYear: 'Free / 100% Govt Funded with free boarding in many centers',
      details: 'Govt plans 1 Crore rooftop solar homes; Suryamitra technicians have direct local entrepreneurship and employment guarantees.'
    },
    entranceExams: [
      { name: 'State ITI Electrician Admission', body: 'State DGT', eligibility: 'Class 10 pass', officialWebsite: 'https://dgt.gov.in', timeline: 'June' }
    ],
    studyDuration: '3 Months (Suryamitra) to 2 Years (ITI Electrician)',
    estimatedCost: {
      govtColleges: '₹2,000 - ₹15,000 total',
      privateTier2: '₹50,000 - ₹1.2L total',
      privateTier1: 'N/A for vocational trades',
      openLearningGovt: 'Free (Suryamitra portal)'
    },
    indicativeSalary: {
      entry: '₹2.8 - ₹4.8 LPA',
      midLevel: '₹6.0 - ₹10.0 LPA',
      experienced: '₹14.0+ LPA (Independent Solar EPC Contractor)',
      sourceNote: 'MNRE Suryamitra Portal Data'
    },
    salary: {
      entryLevel: '₹2.8 - ₹4.8 LPA (0-2 Yrs)',
      midLevel: '₹6.0 - ₹10.0 LPA (3-7 Yrs)',
      experienced: '₹14.0+ LPA (Independent Solar EPC Contractor) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Micro-Inverter Optimization', 'Battery Energy Storage Systems (BESS)', 'Smart Bi-Directional Net-Meters'],
    officialPortalLinks: [
      { name: 'PM Surya Ghar Muft Bijli Yojana', url: 'https://pmsuryaghar.gov.in', type: 'Govt Portal' },
      { name: 'National Institute of Solar Energy', url: 'https://nise.res.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'solar-tech-1',
        title: 'Zero Power Inverter Infeed During Bright Midday Sun',
        context: 'A newly installed 5kW rooftop solar plant generates 0 Watts of electricity at 1:00 PM despite clear blue skies.',
        challenge: 'What is your diagnostic procedure as the solar technician?',
        options: [
          { label: 'Advise customer that solar panels only work at night', explanation: 'Completely contrary to the fundamental science of photovoltaic energy.', isOptimal: false },
          { label: 'Check DC disconnect switch, test string open-circuit voltage (Voc) with multimeter, and check inverter error codes for grid frequency anti-islanding lockouts', explanation: 'Correct. Systematically isolating DC string voltage vs AC grid parameter locks pinpoints the root cause immediately.', isOptimal: true },
          { label: 'Smash the inverter display screen with a hammer', explanation: 'Destroys equipment and voids manufacturer warranty.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Integrates solar vocational trades into secondary school skill hubs to support India\'s 500 GW renewable energy target.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'clinical-psychologist',
    title: 'Clinical Psychologist & Mental Health Counsellor',
    hindiTitle: 'नैदानिक मनोवैज्ञानिक एवं मानसिक स्वास्थ्य परामर्शदाता',
    category: 'Healthcare',
    sector: 'Mental Health, Psychotherapy & Wellness',
    tagline: 'Heal emotional trauma, assess cognitive behavioral wellness, and restore mental balance.',
    description: 'Clinical Psychologists conduct psychometric assessments, provide evidence-based psychotherapy (CBT, DBT, mindfulness), and counsel children, adolescents, and adults dealing with anxiety, depression, neurodevelopmental conditions, and stress.',
    dailyResponsibilities: [
      'Conduct clinical psychological diagnostic interviews and structured psychometric assessments',
      'Formulate personalized Cognitive Behavioral Therapy (CBT) and supportive counseling interventions',
      'Provide crisis psychological support and assist school students with academic and adolescent stress',
      'Collaborate with psychiatrists, neurologists, and special educators under the Mental Healthcare Act'
    ],
    riasecWeights: { R: 20, I: 90, A: 55, S: 100, E: 45, C: 65 },
    primaryRiasec: ['S', 'I', 'A'],
    requiredSchoolSubjects: ['Psychology / Biology / Any stream'],
    recommended11_12Streams: ['Humanities, Science, or Commerce with Psychology elective'],
    coreSkills: ['Cognitive Behavioral Therapy (CBT)', 'Psychometric Testing (WAIS, Rorschach)', 'Empathetic Active Listening', 'Crisis Intervention', 'Mental Healthcare Act Compliance'],
    softSkills: ['Deep Compassion', 'Unconditional Positive Regard', 'Confidentiality Ethics', 'Emotional Balance'],
    ugPathway: {
      degrees: ['B.A. / B.Sc. (Hons) in Psychology followed by M.A. / M.Sc. Psychology and M.Phil / Psy.D.'],
      durationYears: '3 - 4 Years (UG) + 2 Years (PG) + 2 Years (RCI License)',
      steps: ['Class 12 in any stream', 'CUET UG for B.A./B.Sc. Psychology in Central Universities', 'Master\'s in Clinical Psychology', 'RCI-recognized M.Phil or Psy.D. to practice as Licensed Clinical Psychologist']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Guidance and Counselling (NCERT)',
      duration: '1 Year',
      details: 'Conducted by NCERT for teachers and graduates to qualify as certified school counsellors.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Govt Universities (DU, BHU, Jamia, NIMHANS) + Tele-MANAS Training',
      institutes: 'Central Universities & Ministry of Health Tele-MANAS initiative',
      costPerYear: '₹5,000 - ₹25,000 / year total cost in premier Govt universities',
      details: 'India has an immense shortage of licensed mental health professionals, ensuring high career demand.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'NIMHANS Entrance Exam (Post-Graduation / M.Phil)', body: 'NIMHANS Bengaluru', eligibility: 'Master\'s in Psychology', officialWebsite: 'https://nimhans.ac.in', timeline: 'May' }
    ],
    studyDuration: '4 Years (UG) + 2 Years (PG) + 2 Years (RCI Licensing)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.2L total (DU / Central Universities / NIMHANS)',
      privateTier2: '₹3.5L - ₹7.5L total',
      privateTier1: '₹8L - ₹16L total',
      openLearningGovt: 'Under ₹25,000 (IGNOU M.A. Psychology for counseling roles)'
    },
    indicativeSalary: {
      entry: '₹4.0 - ₹7.5 LPA',
      midLevel: '₹10.0 - ₹22.0 LPA (Hospital / Private Practice)',
      experienced: '₹28.0+ LPA (Renowned Consultant / Clinical Director)',
      sourceNote: 'Rehabilitation Council of India & Indian Association of Clinical Psychologists'
    },
    salary: {
      entryLevel: '₹4.0 - ₹7.5 LPA (0-2 Yrs)',
      midLevel: '₹10.0 - ₹22.0 LPA (Hospital / Private Practice) (3-7 Yrs)',
      experienced: '₹28.0+ LPA (Renowned Consultant / Clinical Director) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Digital Tele-Psychology & Tele-MANAS Integration', 'Neuropsychological Cognitive Rehabilitation', 'AI-Assisted Mood Tracking Companion Ethics'],
    officialPortalLinks: [
      { name: 'Rehabilitation Council of India (RCI)', url: 'https://rehabcouncil.nic.in', type: 'Govt Portal' },
      { name: 'Tele-MANAS National Mental Health Programme', url: 'https://telemanas.mohfw.gov.in', type: 'Govt Portal' },
      { name: 'NIMHANS Bengaluru', url: 'https://nimhans.ac.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'psych-1',
        title: 'Severe Exam Panic Attack in High School Senior',
        context: 'A Class 12 board student experiences hyperventilation, trembling, and blacking out 2 weeks before national board examinations.',
        challenge: 'What is your therapeutic intervention as the clinical counsellor?',
        options: [
          { label: 'Scold the student for not studying hard enough earlier', explanation: 'Damaging, insensitive, and sharply exacerbates acute panic episodes.', isOptimal: false },
          { label: 'Guide grounding 5-4-3-2-1 sensory exercises, introduce progressive muscle relaxation, challenge catastrophizing cognitive distortions, and counsel parents against grade pressure', explanation: 'Correct. Grounding immediately stabilizes autonomic arousal, while cognitive restructuring dispels paralyzing exam phobia.', isOptimal: true },
          { label: 'Tell the student to skip school permanently', explanation: 'Extreme avoidance reinforces long-term anxiety disorders.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Mandates full-time trained psychological counsellors in every school cluster to safeguard student emotional and mental wellbeing.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'biotech-researcher',
    title: 'Biotechnology & Genomic Researcher',
    hindiTitle: 'जैव प्रौद्योगिकी एवं जीनोमिक शोधकर्ता',
    category: 'Science',
    sector: 'Life Sciences, Genetics & Biopharmaceuticals',
    tagline: 'Engineer recombinant vaccines, CRISPR gene therapies, and biosimilar medicines.',
    description: 'Biotechnology Researchers work in advanced laboratories developing bio-therapeutics, monoclonal antibodies, mRNA vaccines, high-yield genetically resilient crops, and microbial enzymes for industrial sustainability.',
    dailyResponsibilities: [
      'Perform recombinant DNA cloning, PCR amplification, gel electrophoresis, and gene sequencing',
      'Culture mammalian and microbial cell lines inside sterile biosafety cabinet class-II workstations',
      'Purify proteins using fast protein liquid chromatography (FPLC) and mass spectrometry',
      'Analyze genomic variant datasets using bioinformatics pipelines (BLAST, Biopython)'
    ],
    riasecWeights: { R: 65, I: 100, A: 35, S: 35, E: 45, C: 85 },
    primaryRiasec: ['I', 'R', 'C'],
    requiredSchoolSubjects: ['Biology', 'Chemistry', 'Physics or Mathematics'],
    recommended11_12Streams: ['Science (PCB / PCMB)'],
    coreSkills: ['Recombinant DNA Technology', 'Cell Culture Techniques', 'Bioinformatics & Sequence Analysis', 'Chromatography & Spectroscopy', 'GLP / GMP Standards'],
    softSkills: ['Scientific Rigor', 'Obsessive Hygiene & Precision', 'Patience with Long Experiments', 'Inquisitiveness'],
    ugPathway: {
      degrees: ['B.Tech in Biotechnology / B.Sc (Hons) in Biotechnology, Biochemistry, or Genetics'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with PCB/PCMB', 'CUET UG or JEE Main (for Biotech B.Tech)', 'UG degree with wet-lab dissertation', 'DBT-JRF / CSIR NET for PhD research']
    },
    diplomaPathway: {
      available: true,
      name: 'Diploma in Medical Laboratory Technology (DMLT) / Biotechnology',
      duration: '2 - 3 Years',
      details: 'Offered by State Paramedical and Technical Boards for rapid laboratory entry.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Department of Biotechnology (DBT) Fellowships & Skill Vigyan Programme',
      institutes: 'DBT National Institutes (NII, RCB, CCMB, IISERs)',
      costPerYear: 'Subsidized with monthly DBT Junior Research Fellowships (₹37,000/month + HRA for PhD)',
      details: 'Govt heavily sponsors biotechnology research scholars with generous monthly stipends.'
    },
    entranceExams: [
      { name: 'CUET UG (for Central University B.Sc Biotech)', body: 'NTA', eligibility: 'Class 12 with Science', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'GAT-B (Graduate Aptitude Test - Biotechnology)', body: 'Regional Centre for Biotechnology / DBT', eligibility: 'Bachelor\'s in Science/Engineering', officialWebsite: 'https://rcb.res.in', timeline: 'April' }
    ],
    studyDuration: '4 Years (UG) + 2 Years (PG) + PhD for lead scientist roles',
    estimatedCost: {
      govtColleges: '₹35,000 - ₹1.8L total (Central Universities / IITs / IISERs)',
      privateTier2: '₹4L - ₹8.5L total',
      privateTier1: '₹10L - ₹20L total',
      openLearningGovt: 'N/A for laboratory-intensive degrees'
    },
    indicativeSalary: {
      entry: '₹4.5 - ₹8.0 LPA',
      midLevel: '₹12.0 - ₹24.0 LPA (Senior Scientist / Bioprocess Lead)',
      experienced: '₹35.0+ LPA (Director of R&D in Biopharma)',
      sourceNote: 'Department of Biotechnology & ABLE India Biopharma Survey'
    },
    salary: {
      entryLevel: '₹4.5 - ₹8.0 LPA (0-2 Yrs)',
      midLevel: '₹12.0 - ₹24.0 LPA (Senior Scientist / Bioprocess Lead) (3-7 Yrs)',
      experienced: '₹35.0+ LPA (Director of R&D in Biopharma) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['CRISPR-Cas9 Gene Editing', 'Single-Cell RNA Sequencing', 'Synthetic Biology Bio-Foundries', 'AI Protein Structure Prediction (AlphaFold)'],
    officialPortalLinks: [
      { name: 'Department of Biotechnology (DBT)', url: 'https://dbtindia.gov.in', type: 'Govt Portal' },
      { name: 'Biotechnology Industry Research Assistance Council (BIRAC)', url: 'https://birac.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'biotech-1',
        title: 'Bacterial Endotoxin Contamination in Injectable Protein Batch',
        context: 'A purified batch of therapeutic human insulin tests positive for bacterial endotoxins during limulus amebocyte lysate (LAL) testing.',
        challenge: 'What is your laboratory protocol?',
        options: [
          { label: 'Dilute the insulin with saline and hope endotoxins drop below threshold', explanation: 'Dangerous violation that induces fatal endotoxic septic shock in patients.', isOptimal: false },
          { label: 'Reject the batch, audit water-for-injection (WFI) loop for pyrogens, re-sanitize chromatographic resins with 1M NaOH, and trace source contamination', explanation: 'Correct. Injectable biologics require strict pyrogen-free compliance under Indian Pharmacopoeia standards.', isOptimal: true },
          { label: 'Ship the batch labeled as oral medicine', explanation: 'Unapproved drug repurposing constitutes criminal pharmaceutical fraud.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes National Research Foundation (NRF) funding to support cutting-edge multidisciplinary life sciences in universities.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'fashion-sustainable-designer',
    title: 'Sustainable Fashion & Textile Designer',
    hindiTitle: 'सस्टेनेबल फैशन एवं टेक्सटाइल डिज़ाइनर',
    category: 'Design',
    sector: 'Apparel, Handlooms, Eco-Textiles & Fashion Tech',
    tagline: 'Weave India\'s rich handloom heritage with zero-waste, eco-friendly apparel innovation.',
    description: 'Sustainable Fashion Designers combine organic fibers (khadi, bamboo, hemp, ahimsa silk), natural non-toxic vegetable dyes, and zero-waste pattern-making to create ethical, global fashion collections that empower local artisan weaver clusters.',
    dailyResponsibilities: [
      'Develop mood boards, color forecasting palettes, and conceptual fashion sketches',
      'Create 2D/3D garment pattern prototypes using CLO 3D and Optitex software',
      'Source certified organic fibers and collaborate with rural weaver cooperatives across India',
      'Oversee garment fitting sessions, stitching tolerances, and international export eco-certifications (GOTS)'
    ],
    riasecWeights: { R: 50, I: 50, A: 100, S: 60, E: 75, C: 50 },
    primaryRiasec: ['A', 'E', 'S'],
    requiredSchoolSubjects: ['Any stream / subjects'],
    recommended11_12Streams: ['Arts, Commerce, or Science (All streams eligible for NIFT)'],
    coreSkills: ['CLO 3D Garment Prototyping', 'Pattern Making & Draping', 'Handloom & Textile Knowledge', 'Zero-Waste Cutting', 'Trend Forecasting'],
    softSkills: ['Creative Expression', 'Respect for Indian Handlooms', 'Visual Eye for Silhouette & Color', 'Commercial Acumen'],
    ugPathway: {
      degrees: ['B.Des (Bachelor of Design) in Fashion Design / Textile Design from NIFT'],
      durationYears: '4 Years',
      steps: ['Class 12 in any stream', 'Appear for NIFT Entrance Exam (Creative Ability Test + General Ability Test)', '4-year B.Des at NIFT with craft cluster immersion and graduation showcase']
    },
    diplomaPathway: {
      available: true,
      name: 'Polytechnic Diploma in Garment Technology / Textile Design',
      duration: '3 Years',
      details: 'Offered by State Technical Boards. Provides technical mastery in apparel manufacturing and merchandising.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'ITI Sewing Technology / Fashion Design & Technology Trade',
      institutes: 'Government ITIs & Apparel Training & Design Centre (ATDC)',
      costPerYear: '₹1,500 - ₹12,000 / year (Nominal government fees)',
      details: 'ATDC and ITI programs have direct industry tie-ups with apparel export houses in Tirupur, Noida, and Ludhiana.'
    },
    entranceExams: [
      { name: 'NIFT Entrance Examination', body: 'National Institute of Fashion Technology / NTA', eligibility: 'Class 12 in any stream', officialWebsite: 'https://nift.ac.in', timeline: 'February' }
    ],
    studyDuration: '4 Years (NIFT) or 1-2 Years (Vocational / ATDC)',
    estimatedCost: {
      govtColleges: '₹6L - ₹11L total (NIFT premier government institute)',
      privateTier2: '₹5L - ₹10L total',
      privateTier1: '₹14L - ₹24L total',
      openLearningGovt: 'Under ₹20,000 (Govt ITI / ATDC route)'
    },
    indicativeSalary: {
      entry: '₹3.8 - ₹7.0 LPA',
      midLevel: '₹10.0 - ₹22.0 LPA (Design Head / Export Merchandiser)',
      experienced: '₹30.0+ LPA (or successful independent label)',
      sourceNote: 'Apparel Made-Ups & Home Furnishing Sector Skill Council'
    },
    salary: {
      entryLevel: '₹3.8 - ₹7.0 LPA (0-2 Yrs)',
      midLevel: '₹10.0 - ₹22.0 LPA (Design Head / Export Merchandiser) (3-7 Yrs)',
      experienced: '₹30.0+ LPA (or successful independent label) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['3D Virtual Garment Sampling (Zero-Fabric Waste)', 'Smart E-Textiles with Bio-Sensors', 'Circular Garment Recycled Fiber Blends'],
    officialPortalLinks: [
      { name: 'National Institute of Fashion Technology (NIFT)', url: 'https://nift.ac.in', type: 'Govt Portal' },
      { name: 'Development Commissioner for Handlooms (Ministry of Textiles)', url: 'https://handlooms.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'fashion-1',
        title: 'Color Bleeding in Natural Indigo Dye Export Consignment',
        context: 'A 2,000-piece organic cotton shirt order for an eco-conscious European retailer fails laboratory color-fastness wash testing.',
        challenge: 'What is your sustainable design iteration?',
        options: [
          { label: 'Dip the shirts into toxic chemical formaldehyde fixer without notifying the buyer', explanation: 'Violates GOTS international organic certification and incurs heavy customs export fines.', isOptimal: false },
          { label: 'Reformulate natural mordanting using alum and myrobalan bio-fixers, optimize pH bath wash cycles, and retest ISO 105-C06 wash fastness', explanation: 'Correct. Scientific mordanting locks natural bio-dyes securely to natural fibers without hazardous heavy metals.', isOptimal: true },
          { label: 'Advise customer to never wash the shirt with water', explanation: 'Impractical and unacceptable garment performance standard.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes preservation of Indian traditional arts, local craft cluster immersions, and integration of vocational fashion trades.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'actuarial-scientist',
    title: 'Actuarial Scientist & Quantitative Risk Modeller',
    hindiTitle: 'एक्चुअरियल वैज्ञानिक एवं सांख्यिकीय जोखिम विश्लेषक',
    category: 'Finance',
    sector: 'Insurance, Pension Funds, Risk Management & Reinsurance',
    tagline: 'Quantify financial uncertainty, calculate catastrophic risk odds, and design life insurance.',
    description: 'Actuaries apply advanced mathematics, stochastic calculus, probability, and financial statistics to model the financial impact of risk and uncertainty for life insurance policies, pension schemes, disaster reinsurance, and health portfolios.',
    dailyResponsibilities: [
      'Model life mortality tables, disease morbidity curves, and motor accident frequency probabilities',
      'Calculate insurance policy premium pricing, statutory financial reserves, and solvency margins',
      'Conduct dynamic financial stress testing against macroeconomic recessions and natural disasters',
      'Certify statutory actuarial valuation filings in compliance with Insurance Regulatory and Development Authority (IRDAI)'
    ],
    riasecWeights: { R: 25, I: 100, A: 20, S: 30, E: 70, C: 100 },
    primaryRiasec: ['I', 'C', 'E'],
    requiredSchoolSubjects: ['Mathematics / Statistics', 'Economics or Accountancy'],
    recommended11_12Streams: ['Science (with Math) or Commerce (with Math)'],
    coreSkills: ['Stochastic Calculus & Probability', 'Actuarial Mathematics (CS1, CM1)', 'R / Python / SAS', 'Financial Reserve Modeling', 'Solvency II / Ind AS 117'],
    softSkills: ['Mathematical Perfectionism', 'Ethical Independence', 'Long-term Discipline', 'Clear Executive Communication'],
    ugPathway: {
      degrees: ['B.Sc in Actuarial Science / Statistics / Mathematics, or B.Stat from ISI Kolkata'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 with high Math proficiency', 'Appear for ACET (Actuarial Common Entrance Test) by IAI', 'Pursue degree while clearing Core Actuarial Papers (CM, CS, CB series)', 'Attain Associate (AIAI) and Fellow (FIAI) credential']
    },
    diplomaPathway: {
      available: false,
      name: 'N/A for Qualified Actuary (IAI examinations are mandatory)',
      duration: 'N/A',
      details: 'Actuarial qualification is governed directly by Institute of Actuaries of India (IAI) through 13 professional examinations.'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'Direct IAI Professional Examination Series + Self Study',
      institutes: 'Institute of Actuaries of India (Statutory body under Act of Parliament)',
      costPerYear: '₹15,000 - ₹35,000 / year (Direct examination fees)',
      details: 'Students often earn full-time entry salaries as Actuarial Analysts while clearing higher specialist papers sponsored by their employers.'
    },
    entranceExams: [
      { name: 'ACET (Actuarial Common Entrance Test)', body: 'Institute of Actuaries of India (IAI)', eligibility: 'Class 12 with Mathematics or enrolled in UG', officialWebsite: 'https://actuariesindia.org', timeline: 'June / Dec' },
      { name: 'ISI Admission Test', body: 'Indian Statistical Institute', eligibility: 'Class 12 with Math', officialWebsite: 'https://www.isical.ac.in', timeline: 'May' }
    ],
    studyDuration: '3 - 5 Years (to clear initial 6-8 core papers)',
    estimatedCost: {
      govtColleges: '₹30,000 - ₹1.5L total (Graduation) + ₹80,000 - ₹1.5L (IAI exam fees)',
      privateTier2: '₹3L - ₹6L total',
      privateTier1: '₹8L - ₹15L total',
      openLearningGovt: 'Under ₹40,000 (IGNOU B.Sc Math + IAI papers)'
    },
    indicativeSalary: {
      entry: '₹7.0 - ₹14.0 LPA (with 3-5 papers cleared)',
      midLevel: '₹18.0 - ₹38.0 LPA (Associate Actuary)',
      experienced: '₹50.0+ LPA (Fully qualified Fellow Actuary / Chief Actuary: ₹1 Cr+)',
      sourceNote: 'Institute of Actuaries of India (IAI) Placement Reports'
    },
    salary: {
      entryLevel: '₹7.0 - ₹14.0 LPA (with 3-5 papers cleared) (0-2 Yrs)',
      midLevel: '₹18.0 - ₹38.0 LPA (Associate Actuary) (3-7 Yrs)',
      experienced: '₹50.0+ LPA (Fully qualified Fellow Actuary / Chief Actuary: ₹1 Cr+) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Climate Disaster Catastrophe (Cat) Modeling', 'Predictive Telematics Driving Risk Pricing', 'Cyber Insurance Underwriting Algorithms'],
    officialPortalLinks: [
      { name: 'Institute of Actuaries of India (IAI)', url: 'https://actuariesindia.org', type: 'Govt Portal' },
      { name: 'IRDAI Insurance Regulatory Authority', url: 'https://irdai.gov.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'act-1',
        title: 'Underpricing Risk in New Electric Vehicle Battery Insurance',
        context: 'A sales marketing team wants to price EV comprehensive coverage 40% cheaper than petrol cars to win market share, ignoring high battery replacement costs.',
        challenge: 'What is your statutory actuarial recommendation?',
        options: [
          { label: 'Approve the low price because selling more policies sounds like good business', explanation: 'Violates actuarial solvency principles and risks driving the insurance company into bankruptcy when claims occur.', isOptimal: false },
          { label: 'Present stochastic claims distribution models showing battery pack replacement frequency costs and insist on risk-adequate premium reserves', explanation: 'Correct. Actuaries are statutory gatekeepers of policyholder solvency; prices must reflect true empirical hazard probabilities.', isOptimal: true },
          { label: 'Resign and tell nobody', explanation: 'Fails professional duty to voice actuarial findings to the board and IRDAI.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Encourages early quantitative and statistical modeling pathways combining higher mathematics with economics.',
    demandTrend: 'High Growth',
    isVerifiedByAdmin: true
  },
  {
    id: 'heritage-conservator-archaeologist',
    title: 'Heritage Conservator & Scientific Archaeologist',
    hindiTitle: 'विरासत संरक्षक एवं पुरातत्व वैज्ञानिक',
    category: 'Arts',
    sector: 'Archaeology, Museology, Cultural Preservation & Tourism',
    tagline: 'Unearth ancient civilizations, restore priceless temple frescoes, and preserve national history.',
    description: 'Heritage Conservators and Archaeologists use stratigraphy, LiDAR laser mapping, radiocarbon dating, and material chemistry to excavate ancient historical sites, restore deteriorating temple murals, and preserve cultural relics under the Archaeological Survey of India (ASI).',
    dailyResponsibilities: [
      'Conduct systematic grid excavations, stratigraphy logging, and artifact recovery at historical digs',
      'Analyze ancient ceramic shards, metallurgical coins, and petroglyphs using non-destructive XRF spectroscopy',
      'Conserve ancient stone monuments, fresco murals, and palm-leaf manuscripts using reversible chemical treatments',
      'Curate museum exhibits, 3D photogrammetric historical reconstructions, and public educational displays'
    ],
    riasecWeights: { R: 75, I: 95, A: 80, S: 50, E: 40, C: 75 },
    primaryRiasec: ['I', 'A', 'R'],
    requiredSchoolSubjects: ['History / Social Sciences / Chemistry / Any stream'],
    recommended11_12Streams: ['Humanities with History, or Science (for Archaeological Chemistry)'],
    coreSkills: ['Archaeological Stratigraphy & Excavation', 'Monument Conservation Chemistry', 'Epigraphy & Paleography Basics', 'LiDAR & GIS Mapping', 'Material Analysis (XRF/SEM)'],
    softSkills: ['Historical Curiosity', 'Field Patience', 'Deep Cultural Reverence', 'Meticulous Care'],
    ugPathway: {
      degrees: ['B.A. in History / Archaeology / Ancient Indian History, Culture and Archaeology (AIHC)'],
      durationYears: '3 - 4 Years',
      steps: ['Class 12 in any stream', 'CUET UG for Central Universities (e.g., BHU, Deccan College Pune, Delhi University)', 'M.A. in Archaeology / Conservation', 'Clear UGC-NET for ASI / museum research positions']
    },
    diplomaPathway: {
      available: true,
      name: 'Post-Graduate Diploma in Archaeology (PGDA) from Institute of Archaeology',
      duration: '2 Years',
      details: 'Conducted by the Archaeological Survey of India (ASI) at Pandit Deendayal Upadhyaya Institute of Archaeology (Greater Noida).'
    },
    vocationalLowCostPathway: {
      available: true,
      name: 'National Museum Institute & ASI Apprenticeship Schemes',
      institutes: 'National Museum Institute (Deemed to be University, New Delhi) & ASI',
      costPerYear: '₹6,000 - ₹20,000 / year total (Subsidized with stipends in ASI programs)',
      details: 'Direct government pathway with access to India\'s premier monument restoration laboratories.'
    },
    entranceExams: [
      { name: 'CUET UG', body: 'NTA', eligibility: 'Class 12 pass', officialWebsite: 'https://exams.nta.ac.in/CUET-UG', timeline: 'May' },
      { name: 'ASI Institute of Archaeology Entrance Exam', body: 'ASI', eligibility: 'Master\'s in History/Archaeology/Sanskrit/Persian', officialWebsite: 'https://asi.nic.in', timeline: 'July' }
    ],
    studyDuration: '3 - 4 Years (UG) + 2 Years (PG)',
    estimatedCost: {
      govtColleges: '₹20,000 - ₹80,000 total (Central Universities / Deccan College)',
      privateTier2: '₹1.5L - ₹4L total',
      privateTier1: 'N/A for archeological field studies',
      openLearningGovt: 'Under ₹20,000 (IGNOU M.A. History)'
    },
    indicativeSalary: {
      entry: '₹3.6 - ₹6.5 LPA (ASI Assistant Archaeologist: ~₹5.2 LPA + govt benefits)',
      midLevel: '₹8.0 - ₹16.0 LPA (Superintending Archaeologist)',
      experienced: '₹20.0+ LPA (Director in ASI / National Museum)',
      sourceNote: 'Archaeological Survey of India & 7th Pay Commission pay scales'
    },
    salary: {
      entryLevel: '₹3.6 - ₹6.5 LPA (ASI Assistant Archaeologist: ~₹5.2 LPA + govt benefits) (0-2 Yrs)',
      midLevel: '₹8.0 - ₹16.0 LPA (Superintending Archaeologist) (3-7 Yrs)',
      experienced: '₹20.0+ LPA (Director in ASI / National Museum) (8+ Yrs)',
      source: 'National Career Service (NCS) & AmbitionBox Benchmark 2026',
      lastUpdated: 'October 2026',
      factorsAffectingPay: ['City Tier (Metro vs Non-Metro)', 'Specialized Certifications', 'Employer Scale & Industry Domain'],
      isOfficialData: true
    },
    futureSkillTrends: ['Underwater Marine Archaeology (Dwarka explorations)', 'LiDAR Drone Jungle Penetration Scans', 'Virtual Reality (VR) Immersive Museum Walkthroughs'],
    officialPortalLinks: [
      { name: 'Archaeological Survey of India (ASI)', url: 'https://asi.nic.in', type: 'Govt Portal' },
      { name: 'National Mission on Monuments and Antiquities', url: 'https://nmma.nic.in', type: 'Govt Portal' }
    ],
    dayInTheLifeScenarios: [
      {
        id: 'arch-1',
        title: 'Discovery of Fragile Wet Palm-Leaf Manuscript in Excavation Trench',
        context: 'While excavating an early medieval monastery foundation, a waterlogged terracotta jar containing decayed palm-leaf manuscripts is uncovered.',
        challenge: 'What is your immediate conservator response?',
        options: [
          { label: 'Expose the wet leaves directly to direct hot sun so they dry in 10 minutes', explanation: 'Fatal mistake. Rapid desiccation causes ancient fragile organic fibers to curl, crack, and crumble into dust.', isOptimal: false },
          { label: 'Keep leaves in controlled high-humidity container, stabilize pH with thymol anti-fungal vapor, and transport to conservation lab for slow freeze-drying', explanation: 'Correct. Controlled slow stabilization prevents irreversible fiber shrinkage and fungal outbreaks, preserving ancient script for decipherment.', isOptimal: true },
          { label: 'Scrape the mud off with a metal wire brush', explanation: 'Completely scratches and destroys the delicate inscribed lettering.', isOptimal: false }
        ]
      }
    ],
    futureOpportunities: 'Promotes Indian Knowledge Systems (IKS), preservation of ancient manuscripts, and pride in indigenous heritage.',
    demandTrend: 'Stable',
    isVerifiedByAdmin: true
  }
];

