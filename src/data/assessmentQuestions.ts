import { AssessmentQuestion, AssessmentCategory } from '../types';

export const ASSESSMENT_CATEGORIES: {
  id: AssessmentCategory;
  title: string;
  hindiTitle: string;
  kannadaTitle: string;
  targetRole: string;
  description: string;
  questionCount: number;
  mappedCareerFocus: string;
}[] = [
  {
    id: 'comprehensive',
    title: 'Comprehensive RIASEC Assessment',
    hindiTitle: 'समग्र RIASEC योग्यता मूल्यांकन',
    kannadaTitle: 'ಸಮಗ್ರ RIASEC ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಮಾಪನ',
    targetRole: 'All Streams (Classes 8-12 & Beyond)',
    description: 'A 24-question holistic evaluation across Realistic, Investigative, Artistic, Social, Enterprising, and Conventional strengths.',
    questionCount: 24,
    mappedCareerFocus: 'Cross-Disciplinary Pathways'
  },
  {
    id: 'logical',
    title: 'Logical Reasoning & Analytical Aptitude',
    hindiTitle: 'तार्किक चिंतन एवं विश्लेषणात्मक योग्यता',
    kannadaTitle: 'ತಾರ್ಕಿಕ ತಾರ್ಕಿಕತೆ ಮತ್ತು ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಸಾಮರ್ಥ್ಯ',
    targetRole: 'Scientific Research, AI, Biotechnology & Problem Solving',
    description: 'Evaluates systematic inquiry, deductive problem-solving, and scientific curiosity.',
    questionCount: 8,
    mappedCareerFocus: 'AI/ML Engineering, Data Science, Biotech Research, Cybersecurity'
  },
  {
    id: 'technical',
    title: 'Technical & Systems Aptitude',
    hindiTitle: 'तकनीकी एवं सिस्टम योग्यता',
    kannadaTitle: 'ತಾಂತ್ರಿಕ ಮತ್ತು ಸಿಸ್ಟಮ್ಸ್ ಸಾಮರ್ಥ್ಯ',
    targetRole: 'Engineering, Hardware, Infrastructure & Vocational Trades',
    description: 'Evaluates hands-on mechanical intuition, spatial reasoning, and practical systems tinkering.',
    questionCount: 8,
    mappedCareerFocus: 'Robotics Mechatronics, Solar PV Tech, Civil Smart Infra, Cloud Architecture'
  },
  {
    id: 'creative',
    title: 'Creative & Visual Aptitude',
    hindiTitle: 'रचनात्मक एवं दृश्य कला योग्यता',
    kannadaTitle: 'ಸೃಜನಶೀಲ ಮತ್ತು ದೃಶ್ಯ ಸಾಮರ್ಥ್ಯ',
    targetRole: 'Design, Media, UX & Creative Communications',
    description: 'Evaluates aesthetic judgment, user empathy, creative storytelling, and visual composition.',
    questionCount: 8,
    mappedCareerFocus: 'UI/UX Design, 3D Game Animation, Sustainable Fashion, Digital Media'
  },
  {
    id: 'social',
    title: 'Social & Communication Aptitude',
    hindiTitle: 'सामाजिक एवं संचार योग्यता',
    kannadaTitle: 'ಸಾಮಾಜಿಕ ಮತ್ತು ಸಂವಹನ ಸಾಮರ್ಥ್ಯ',
    targetRole: 'Psychology, Education, Public Governance & Healthcare',
    description: 'Evaluates interpersonal warmth, verbal instruction, empathy, and community leadership.',
    questionCount: 8,
    mappedCareerFocus: 'Clinical Psychology, Civil Services (IAS/IPS), Public Healthcare, STEM Teaching'
  },
  {
    id: 'numerical',
    title: 'Numerical & Financial Aptitude',
    hindiTitle: 'संख्यात्मक एवं वित्तीय योग्यता',
    kannadaTitle: 'ಸಾಂಖ್ಯಿಕ ಮತ್ತು ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯ',
    targetRole: 'Commerce, Accounting, FinTech & Risk Management',
    description: 'Evaluates quantitative comfort, budgeting logic, trend detection, and financial structure.',
    questionCount: 8,
    mappedCareerFocus: 'Chartered Accountancy, FinTech Analysis, Actuarial Science, Financial Risk'
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // --- COMPREHENSIVE SET (CORE 24 QUESTIONS) ---
  {
    id: 1,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'R',
    question: 'How much do you enjoy working with physical tools, assembling electronics, or fixing broken items?',
    hindiQuestion: 'आपको औजारों से काम करना, इलेक्ट्रॉनिक चीजें असेंबल करना या टूटी वस्तुएं ठीक करना कितना पसंद है?',
    kannadaQuestion: 'ಭೌತಿಕ ಉಪಕರಣಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಜೋಡಿಸಲು ಅಥವಾ ಮುರಿದ ವಸ್ತುಗಳನ್ನು ಸರಿಪಡಿಸಲು ನೀವು ಎಷ್ಟು ಇಷ್ಟಪಡುತ್ತೀರಿ?',
    options: [
      { text: 'I actively seek out fixing or building physical things with my hands.', hindiText: 'मुझे अपने हाथों से चीजें बनाना और ठीक करना बहुत पसंद है।', kannadaText: 'ನನ್ನ ಕೈಗಳಿಂದ ವಸ್ತುಗಳನ್ನು ಸರಿಪಡಿಸುವುದು ಅಥವಾ ನಿರ್ಮಿಸುವುದು ನನಗೆ ತುಂಬಾ ಇಷ್ಟ.', score: 5 },
      { text: 'I enjoy it when a practical task comes up.', hindiText: 'व्यवहारिक काम आने पर मुझे अच्छा लगता है।', kannadaText: 'ಪ್ರಾಯೋಗಿಕ ಕೆಲಸ ಬಂದಾಗ ನಾನು ಅದನ್ನು ಆನಂದಿಸುತ್ತೇನೆ.', score: 4 },
      { text: 'Neutral; I can do it if needed.', hindiText: 'सामान्य; जरूरत पड़ने पर कर सकता हूँ।', kannadaText: 'ಸಾಮಾನ್ಯ; ಅಗತ್ಯವಿದ್ದಾಗ ನಾನು ಮಾಡಬಲ್ಲೆ.', score: 3 },
      { text: 'I prefer screen work over physical tinkering.', hindiText: 'मुझे हाथ से काम करने की तुलना में स्क्रीन पर काम पसंद है।', kannadaText: 'ಭೌತಿಕ ಕೆಲಸಕ್ಕಿಂತ ಕಂಪ್ಯೂಟರ್ ಸ್ಕ್ರೀನ್ ಕೆಲಸ ನನಗೆ ಇಷ್ಟ.', score: 2 },
      { text: 'I avoid mechanical or tool-based tasks completely.', hindiText: 'मैं मशीनी कामों से पूरी तरह दूर रहता हूँ।', kannadaText: 'ಯಾಂತ್ರಿಕ ಕೆಲಸಗಳಿಂದ ನಾನು ಸಂಪೂರ್ಣವಾಗಿ ದೂರವಿರುತ್ತೇನೆ.', score: 1 }
    ]
  },
  {
    id: 2,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'I',
    question: 'When you encounter a puzzling scientific question or computer glitch, how do you respond?',
    hindiQuestion: 'जब आपके सामने कोई वैज्ञानिक पहेली या कंप्यूटर समस्या आती है, तो आप क्या करते हैं?',
    kannadaQuestion: 'ಗೊಂದಲಮಯ ವೈಜ್ಞಾನಿಕ ಪ್ರಶ್ನೆ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ದೋಷ ಎದುರಾದಾಗ ನೀವು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೀರಿ?',
    options: [
      { text: 'I investigate the root cause until I understand why it happens.', hindiText: 'कारण समझने तक मैं लगातार खोज और शोध करता हूँ।', kannadaText: 'ಕಾರಣ ತಿಳಿಯುವವರೆಗೂ ನಾನು ಆಳವಾಗಿ ಸಂಶೋಧನೆ ಮಾಡುತ್ತೇನೆ.', score: 5 },
      { text: 'I like analyzing it systematically with facts and logic.', hindiText: 'तथ्यों और तर्क से व्यवस्थित रूप से विश्लेषण करता हूँ।', kannadaText: 'ತರ್ಕ ಮತ್ತು ಸತ್ಯಾಂಶಗಳೊಂದಿಗೆ ವ್ಯವಸ್ಥಿತವಾಗಿ ವಿಶ್ಲೇಷಿಸುತ್ತೇನೆ.', score: 4 },
      { text: 'I investigate if someone gives me hints.', hindiText: 'अगर कोई मार्गदर्शन दे तो मैं जांच कर लेता हूँ।', kannadaText: 'ಯಾರಾದರೂ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದರೆ ಪರಿಶೀಲಿಸುತ್ತೇನೆ.', score: 3 },
      { text: 'I lose patience if it takes too long to solve.', hindiText: 'ज्यादा समय लगने पर मेरा धैर्य खत्म हो जाता है।', kannadaText: 'ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಂಡರೆ ತಾಳ್ಮೆ ಕಳೆದುಕೊಳ್ಳುತ್ತೇನೆ.', score: 2 },
      { text: 'I prefer quick answers without deep analysis.', hindiText: 'मुझे बिना गहराई में जाए सीधे उत्तर पसंद हैं।', kannadaText: 'ಆಳವಾದ ವಿಶ್ಲೇಷಣೆಯಿಲ್ಲದೆ ತ್ವರಿತ ಉತ್ತರಗಳನ್ನು ಬಯಸುತ್ತೇನೆ.', score: 1 }
    ]
  },
  {
    id: 3,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'A',
    question: 'How drawn are you to creative sketching, graphic design, writing stories, or musical expression?',
    hindiQuestion: 'स्केचिंग, ग्राफिक डिजाइन, कहानी लेखन या रचनात्मक कला में आपकी कितनी रुचि है?',
    kannadaQuestion: 'ಚಿತ್ರಕಲೆ, ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ, ಕಥೆ ಬರೆಯುವುದು ಅಥವಾ ಸಂಗೀತದಲ್ಲಿ ನಿಮ್ಮ ಆಸಕ್ತಿ ಎಷ್ಟು?',
    options: [
      { text: 'It is a major passion; I create new designs or writings regularly.', hindiText: 'यह मेरा स्वाभाविक शौक है; मैं नियमित रूप से नई रचनाएं करता हूँ।', kannadaText: 'ಇದು ನನ್ನ ಮುಖ್ಯ ಆಸಕ್ತಿ; ನಾನು ನಿಯಮಿತವಾಗಿ ಹೊಸ ವಿನ್ಯಾಸಗಳನ್ನು ಮಾಡುತ್ತೇನೆ.', score: 5 },
      { text: 'I enjoy creative assignments and making things look attractive.', hindiText: 'रचनात्मक प्रोजेक्ट और चीजों को सुंदर बनाना पसंद है।', kannadaText: 'ವಿಷಯಗಳನ್ನು ಆಕರ್ಷಕವಾಗಿ ಕಾಣುವಂತೆ ಮಾಡುವುದು ನನಗೆ ಇಷ್ಟ.', score: 4 },
      { text: 'I appreciate art, but rarely create it myself.', hindiText: 'कला की सराहना करता हूँ, पर खुद कम ही बनाता हूँ।', kannadaText: 'ಕಲೆಯನ್ನು ಪ್ರಶಂಸಿಸುತ್ತೇನೆ, ಆದರೆ ನಾನೇ ರಚಿಸುವುದು ಅಪರೂಪ.', score: 3 },
      { text: 'I prefer following preset templates over making new art.', hindiText: 'नए डिजाइन की जगह बने-बनाए टेम्पलेट्स पसंद हैं।', kannadaText: 'ಹೊಸ ಕಲೆಗಿಂತ ಸಿದ್ಧ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನು ಅನುಸರಿಸಲು ಇಷ್ಟಪಡುತ್ತೇನೆ.', score: 2 },
      { text: 'I have no interest in arts or design.', hindiText: 'कला या डिजाइन में मेरी कोई रुचि नहीं है।', kannadaText: 'ಕಲೆ ಅಥವಾ ವಿನ್ಯಾಸದಲ್ಲಿ ನನಗೆ ಯಾವುದೇ ಆಸಕ್ತಿಯಿಲ್ಲ.', score: 1 }
    ]
  },
  {
    id: 4,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'S',
    question: 'How do you feel when helping a classmate understand a difficult topic or guiding someone in need?',
    hindiQuestion: 'सहपाठी को कठिन पाठ समझाने या किसी जरूरतमंद की मदद करने में आपको कैसा लगता है?',
    kannadaQuestion: 'ಕಷ್ಟಕರವಾದ ವಿಷಯವನ್ನು ಸಹಪಾಠಿಗೆ ವಿವರಿಸುವಾಗ ಅಥವಾ ಯಾರಿಗಾದರೂ ಸಹಾಯ ಮಾಡುವಾಗ ನಿಮಗೆ ಹೇಗೆ ಅನಿಸುತ್ತದೆ?',
    options: [
      { text: 'Deeply fulfilling; teaching and helping others is my greatest joy.', hindiText: 'अत्यंत संतोषजनक; दूसरों को सिखाना और मदद करना मुझे सबसे अधिक पसंद है।', kannadaText: 'ತುಂಬಾ ತೃಪ್ತಿಕರ; ಇತರರಿಗೆ ಕಲಿಸುವುದು ಮತ್ತು ಸಹಾಯ ಮಾಡುವುದು ನನ್ನ ಖುಷಿ.', score: 5 },
      { text: 'I enjoy group study and collaborative problem-solving.', hindiText: 'ग्रुप स्टडी और साथ मिलकर समाधान खोजना अच्छा लगता है।', kannadaText: 'ಗುಂಪು ಅಧ್ಯಯನ ಮತ್ತು ಒಟ್ಟಾಗಿ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವುದು ಇಷ್ಟ.', score: 4 },
      { text: 'I help if asked, but prefer quiet individual work.', hindiText: 'पूछने पर मदद करता हूँ, पर अकेले काम करना अधिक सुगम है।', kannadaText: 'ಕೇಳಿದರೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ, ಆದರೆ ಏಕಾಂತ ಕೆಲಸವೇ ಇಷ್ಟ.', score: 3 },
      { text: 'Handling other people’s doubts frequently drains my energy.', hindiText: 'दूसरों के संशय लगातार सुलझाना मुझे थका देता है।', kannadaText: 'ಇತರರ ಅನುಮಾನಗಳನ್ನು ಪದೇ ಪದೇ ಪರಿಹರಿಸುವುದು ದಣಿಸುತ್ತದೆ.', score: 2 },
      { text: 'I strongly prefer working solo with zero human interaction.', hindiText: 'मैं केवल अकेले रहकर काम करना चाहता हूँ।', kannadaText: 'ನಾನು ಜನರೊಂದಿಗೆ ಬೆರೆಯದೆ ಸಂಪೂರ್ಣ ಒಂಟಿಯಾಗಿ ಕೆಲಸ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.', score: 1 }
    ]
  },
  {
    id: 5,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'E',
    question: 'How comfortable are you leading a school project team, presenting ideas, or convincing peers?',
    hindiQuestion: 'प्रोजेक्ट टीम का नेतृत्व करने, विचार प्रस्तुत करने या साथियों को सहमत करने में आप कितने सहज हैं?',
    kannadaQuestion: 'ಶಾಲಾ ಯೋಜನಾ ತಂಡವನ್ನು ಮುನ್ನಡೆಸಲು, ಆಲೋಚನೆಗಳನ್ನು ಪ್ರಸ್ತುತಪಡಿಸಲು ನೀವು ಎಷ್ಟು ಸಿದ್ಧರಿದ್ದೀರಿ?',
    options: [
      { text: 'I naturally take charge, pitch ideas boldly, and motivate the group.', hindiText: 'मैं स्वाभाविक रूप से नेतृत्व संभालता हूँ और टीम को प्रेरित करता हूँ।', kannadaText: 'ನಾನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಮುನ್ನಡೆಸುತ್ತೇನೆ ಮತ್ತು ತಂಡವನ್ನು ಪ್ರೇರೇಪಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I enjoy speaking up and organizing team responsibilities.', hindiText: 'जिम्मेदारियां बांटना और विचार रखना पसंद है।', kannadaText: 'ಜವಾಬ್ದಾರಿಗಳನ್ನು ಹಂಚುವುದು ಮತ್ತು ಮಾತನಾಡುವುದು ನನಗೆ ಇಷ್ಟ.', score: 4 },
      { text: 'I can lead if nobody else volunteers.', hindiText: 'अगर कोई आगे न आए तो मैं जिम्मेदारी ले लेता हूँ।', kannadaText: 'ಯಾರೂ ಮುಂದೆ ಬರದಿದ್ದರೆ ನಾನು ಮುನ್ನಡೆಸಬಲ್ಲೆ.', score: 3 },
      { text: 'I prefer executing assigned tasks rather than directing people.', hindiText: 'नेतृत्व करने के बजाय सौंपा गया काम पूरा करना पसंद है।', kannadaText: 'ಆದೇಶ ನೀಡುವುದಕ್ಕಿಂತ ಕೊಟ್ಟ ಕೆಲಸ ಮಾಡುವುದು ಸರಿ.', score: 2 },
      { text: 'Public speaking and leading teams causes me anxiety.', hindiText: 'सार्वजनिक भाषण और नेतृत्व से मुझे असहजता होती है।', kannadaText: 'ಸಾರ್ವಜನಿಕವಾಗಿ ಮಾತನಾಡುವುದು ಮತ್ತು ತಂಡ ಮುನ್ನಡೆಸುವುದು ನನಗೆ ಆತಂಕ ತರುತ್ತದೆ.', score: 1 }
    ]
  },
  {
    id: 6,
    category: 'comprehensive',
    dimension: 'Interests',
    riasecTarget: 'C',
    question: 'How satisfying do you find organizing notebooks, managing budgets, or checking data for errors?',
    hindiQuestion: 'रिकॉर्ड व्यवस्थित करना, बजट का हिसाब रखना या गलतियां पकड़ना आपको कितना संतोषजनक लगता है?',
    kannadaQuestion: 'ಪುಸ್ತಕಗಳನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿಡುವುದು, ಹಣಕಾಸಿನ ಲೆಕ್ಕ ನಿರ್ವಹಿಸುವುದು ಅಥವಾ ದೋಷ ಹುಡುಕುವುದು ನಿಮಗೆ ಎಷ್ಟು ಇಷ್ಟ?',
    options: [
      { text: 'Extremely satisfying; I love neat organization, schedules, and accuracy.', hindiText: 'बहुत संतोषजनक; मुझे स्वच्छता, समय-सारणी और सटीकता बेहद पसंद है।', kannadaText: 'ತುಂಬಾ ತೃಪ್ತಿಕರ; ನಿಖರತೆ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ನಿಯಮಗಳು ನನಗೆ ಇಷ್ಟ.', score: 5 },
      { text: 'I like keeping my files and daily plans well-structured.', hindiText: 'अपनी योजनाएं और फाइलें व्यवस्थित रखना पसंद है।', kannadaText: 'ನನ್ನ ಯೋಜನೆಗಳು ಮತ್ತು ಕಡತಗಳನ್ನು ಅಚ್ಚುಕಟ್ಟಾಗಿಡುತ್ತೇನೆ.', score: 4 },
      { text: 'Average; I stay organized enough to avoid mistakes.', hindiText: 'सामान्य; जरूरी काम समय पर हो जाता है।', kannadaText: 'ಸಾಮಾನ್ಯ; ತಪ್ಪುಗಳಾಗದಂತೆ ಗಮನಿಸುತ್ತೇನೆ.', score: 3 },
      { text: 'I find repetitive bookkeeping and detailed checks boring.', hindiText: 'बारीक जांच और बार-बार हिसाब रखना उबाऊ लगता है।', kannadaText: 'ಪುನರಾವರ್ತಿತ ಲೆಕ್ಕಪತ್ರ ಕೆಲಸಗಳು ನನಗೆ ಬೇಸರ ತರಿಸುತ್ತವೆ.', score: 2 },
      { text: 'I strongly dislike strict rules, forms, or numerical record keeping.', hindiText: 'मुझे सख्त नियमों और कागजी हिसाब-किताब से चिढ़ है।', kannadaText: 'ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮಗಳು ಮತ್ತು ಲೆಕ್ಕಪತ್ರ ಕೆಲಸ ನನಗೆ ಇಷ್ಟವಿಲ್ಲ.', score: 1 }
    ]
  },

  // --- LOGICAL REASONING SPECIFIC QUESTIONS ---
  {
    id: 101,
    category: 'logical',
    dimension: 'Aptitude',
    riasecTarget: 'I',
    question: 'Given a series of confusing clues in a science experiment, what is your first reaction?',
    hindiQuestion: 'विज्ञान के प्रयोग में उलझे हुए तथ्य मिलने पर आपकी पहली प्रतिक्रिया क्या होती है?',
    kannadaQuestion: 'ವಿಜ್ಞಾನ ಪ್ರಯೋಗದಲ್ಲಿ ಗೊಂದಲಮಯ ಸುಳಿವುಗಳು ಸಿಕ್ಕಾಗ ನಿಮ್ಮ ಮೊದಲ ಪ್ರತಿಕ್ರಿಯೆ ಏನು?',
    options: [
      { text: 'I isolate variables one by one to determine the exact relationship.', hindiText: 'सटीक संबंध जानने के लिए एक-एक करके कारणों का परीक्षण करता हूँ।', kannadaText: 'ಸರಿಯಾದ ಕಾರಣ ತಿಳಿಯಲು ಪ್ರತಿಯೊಂದು ಅಂಶವನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ ಪರೀಕ್ಷಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I search for similar published case studies and compare the patterns.', hindiText: 'समान अध्ययनों को ढूंढकर पैटर्न की तुलना करता हूँ।', kannadaText: 'ಇದೇ ರೀತಿಯ ಪ್ರಕರಣಗಳನ್ನು ಹುಡುಕಿ ಹೋಲಿಸುತ್ತೇನೆ.', score: 4 },
      { text: 'I consult a teacher or expert to point out where my logic failed.', hindiText: 'शिक्षक से मार्गदर्शन लेता हूँ कि गलती कहाँ हुई।', kannadaText: 'ನನ್ನ ತರ್ಕ ಎಲ್ಲಿ ತಪ್ಪಿದೆ ಎಂದು ಶಿಕ್ಷಕರನ್ನು ಕೇಳುತ್ತೇನೆ.', score: 3 },
      { text: 'I guess an explanation and hope it works out.', hindiText: 'अंदाजा लगाकर आगे बढ़ जाता हूँ।', kannadaText: 'ಊಹಿಸಿ ಮುಂದುವರಿಯುತ್ತೇನೆ.', score: 2 },
      { text: 'I give up on complex multi-step reasoning problems.', hindiText: 'जटिल तार्किक समस्याओं को छोड़ देता हूँ।', kannadaText: 'ಜಟಿಲ ತಾರ್ಕಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಬಿಟ್ಟುಬಿಡುತ್ತೇನೆ.', score: 1 }
    ]
  },
  {
    id: 102,
    category: 'logical',
    dimension: 'Aptitude',
    riasecTarget: 'I',
    question: 'How easily do you spot flaws or biases in an argument or statistical claim?',
    hindiQuestion: 'किसी बहस या आंकड़ों के दावे में खामियां या पक्षपात आप कितनी आसानी से पकड़ते हैं?',
    kannadaQuestion: 'ಒಂದು ವಾದ ಅಥವಾ ಅಂಕಿಅಂಶಗಳ ಹೇಳಿಕೆಯಲ್ಲಿನ ದೋಷಗಳನ್ನು ನೀವು ಎಷ್ಟು ಸುಲಭವಾಗಿ ಗುರುತಿಸುತ್ತೀರಿ?',
    options: [
      { text: 'Instantly; I check the sample size, assumptions, and counter-evidence.', hindiText: 'तुरंत; मैं तथ्यों, मान्यताओं और साक्ष्यों की बारीकी से जांच करता हूँ।', kannadaText: 'ತಕ್ಷಣವೇ; ನಾನು ಮಾದರಿ ಗಾತ್ರ, ಊಹೆಗಳು ಮತ್ತು ಪುರಾವೆಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I usually notice when conclusions do not follow the presented data.', hindiText: 'जब निष्कर्ष डेटा से मेल नहीं खाते तो मेरा ध्यान चला जाता है।', kannadaText: 'ತೀರ್ಮಾನಗಳು ದತ್ತಾಂಶಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗದಿದ್ದಾಗ ನಾನು ಗಮನಿಸುತ್ತೇನೆ.', score: 4 },
      { text: 'I notice if someone explains the flaw to me.', hindiText: 'समझाने पर मुझे गलती समझ आ जाती है।', kannadaText: 'ಯಾರಾದರೂ ವಿವರಿಸಿದಾಗ ನನಗೆ ದೋಷ ಅರ್ಥವಾಗುತ್ತದೆ.', score: 3 },
      { text: 'I accept claims readily without verifying methodology.', hindiText: 'प्रक्रिया जांचे बिना दावों पर विश्वास कर लेता हूँ।', kannadaText: 'ಪರಿಶೀಲಿಸದೆ ಎಲ್ಲ ಹೇಳಿಕೆಗಳನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ.', score: 2 },
      { text: 'I find evaluating logical validity exhausting.', hindiText: 'तर्क की जांच करना मुझे व्यर्थ लगता है।', kannadaText: 'ತಾರ್ಕಿಕ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದು ನನಗೆ ಕಷ್ಟಕರ.', score: 1 }
    ]
  },

  // --- TECHNICAL & SYSTEMS SPECIFIC QUESTIONS ---
  {
    id: 201,
    category: 'technical',
    dimension: 'Aptitude',
    riasecTarget: 'R',
    question: 'When an appliance or computer software stops functioning, what do you do?',
    hindiQuestion: 'जब कोई उपकरण या कंप्यूटर सॉफ्टवेयर काम करना बंद कर दे, तो आप क्या करते हैं?',
    kannadaQuestion: 'ಯಾವುದಾದರೂ ಉಪಕರಣ ಅಥವಾ ಸಾಫ್ಟ್‌ವೇರ್ ಕೆಲಸ ಮಾಡುವುದನ್ನು ನಿಲ್ಲಿಸಿದರೆ ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?',
    options: [
      { text: 'I run diagnostics, inspect connections or code, and fix it myself.', hindiText: 'मैं कोड या कनेक्शन जांचता हूँ और खुद ठीक करने का प्रयास करता हूँ।', kannadaText: 'ನಾನೇ ಸಂಪರ್ಕಗಳು ಅಥವಾ ಕೋಡ್ ಪರಿಶೀಲಿಸಿ ಸ್ವತಃ ಸರಿಪಡಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I search online forums for step-by-step troubleshooting instructions.', hindiText: 'ऑनलाइन समाधान ढूंढकर निर्देश अनुसार ठीक करता हूँ।', kannadaText: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂತ-ಹಂತದ ಪರಿಹಾರಗಳನ್ನು ಹುಡುಕಿ ಸರಿಪಡಿಸುತ್ತೇನೆ.', score: 4 },
      { text: 'I ask a technically skilled friend to help me.', hindiText: 'किसी तकनीकी जानकार मित्र से मदद लेता हूँ।', kannadaText: 'ತಾಂತ್ರಿಕ ಪರಿಣಿತಿ ಇರುವ ಸ್ನೇಹಿತನ ಸಹಾಯ ಪಡೆಯುತ್ತೇನೆ.', score: 3 },
      { text: 'I restart it once, and if it still fails, I walk away.', hindiText: 'एक बार रीस्टार्ट करके छोड़ देता हूँ।', kannadaText: 'ಒಮ್ಮೆ ರೀಸ್ಟಾರ್ಟ್ ಮಾಡಿ, ಆಗದಿದ್ದರೆ ಬಿಟ್ಟುಬಿಡುತ್ತೇನೆ.', score: 2 },
      { text: 'I avoid touching technical components completely.', hindiText: 'तकनीकी चीजों को छूने से बचता हूँ।', kannadaText: 'ತಾಂತ್ರಿಕ ವಸ್ತುಗಳನ್ನು ಮುಟ್ಟುವುದೇ ಇಲ್ಲ.', score: 1 }
    ]
  },
  {
    id: 202,
    category: 'technical',
    dimension: 'Aptitude',
    riasecTarget: 'R',
    question: 'How comfortable are you reading diagrams, blueprints, or network circuit layouts?',
    hindiQuestion: 'ब्लूप्रिंट, सर्किट डायग्राम या नेटवर्क लेआउट समझने में आप कितने सहज हैं?',
    kannadaQuestion: 'ಬ್ಲೂಪ್ರಿಂಟ್‌ಗಳು, ಸರ್ಕ್ಯೂಟ್ ರೇಖಾಚಿತ್ರಗಳು ಅಥವಾ ನೆಟ್‌ವರ್ಕ್ ವಿನ್ಯಾಸಗಳನ್ನು ಓದಲು ನಿಮಗೆ ಎಷ್ಟು ಸುಲಭ?',
    options: [
      { text: 'Very comfortable; I can mentally visualize the 3D flow of power or signals.', hindiText: 'बहुत सहज; मैं सिग्नल या बिजली के प्रवाह की मानसिक कल्पना कर सकता हूँ।', kannadaText: 'ತುಂಬಾ ಸುಲಭ; ಸಿಗ್ನಲ್ ಅಥವಾ ಶಕ್ತಿಯ ಹರಿವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಕಲ್ಪಿಸಿಕೊಳ್ಳಬಲ್ಲೆ.', score: 5 },
      { text: 'Good; I can follow technical schematics with a legend.', hindiText: 'अच्छा; संकेतों की मदद से तकनीकी आरेख समझ लेता हूँ।', kannadaText: 'ಉತ್ತಮ; ಸಂಕೇತಗಳ ನೆರವಿನೊಂದಿಗೆ ನಕ್ಷೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇನೆ.', score: 4 },
      { text: 'Basic; I understand simple wiring or flowcharts only.', hindiText: 'सामान्य; केवल आसान फ्लोचार्ट समझ पाता हूँ।', kannadaText: 'ಸಾಧಾರಣ; ಸರಳ ಫ್ಲೋಚಾರ್ಟ್‌ಗಳು ಮಾತ್ರ ಅರ್ಥವಾಗುತ್ತವೆ.', score: 3 },
      { text: 'I find technical symbols confusing.', hindiText: 'तकनीकी प्रतीक मुझे भ्रमित करते हैं।', kannadaText: 'ತಾಂತ್ರಿಕ ಚಿಹ್ನೆಗಳು ನನಗೆ ಗೊಂದಲ ಉಂಟುಮಾಡುತ್ತವೆ.', score: 2 },
      { text: 'I cannot interpret technical diagrams at all.', hindiText: 'तकनीकी आरेख मुझे बिल्कुल समझ नहीं आते।', kannadaText: 'ತಾಂತ್ರಿಕ ರೇಖಾಚಿತ್ರಗಳು ನನಗೆ ಅರ್ಥವಾಗುವುದೇ ಇಲ್ಲ.', score: 1 }
    ]
  },

  // --- CREATIVE & VISUAL SPECIFIC QUESTIONS ---
  {
    id: 301,
    category: 'creative',
    dimension: 'Aptitude',
    riasecTarget: 'A',
    question: 'When using an app or visiting a website, how quickly do you notice poor layout or confusing colors?',
    hindiQuestion: 'ऐप या वेबसाइट इस्तेमाल करते समय खराब डिजाइन या रंग-संयोजन आपको कितनी जल्दी खटकता है?',
    kannadaQuestion: 'ಆ್ಯಪ್ ಅಥವಾ ವೆಬ್‌ಸೈಟ್ ಬಳಸುವಾಗ ಕೆಟ್ಟ ವಿನ್ಯಾಸ ಅಥವಾ ಬಣ್ಣಗಳನ್ನು ನೀವು ಎಷ್ಟು ಬೇಗನೆ ಗಮನಿಸುತ್ತೀರಿ?',
    options: [
      { text: 'Immediately; I constantly envision better typography, spacing, and visuals.', hindiText: 'तुरंत; मैं तुरंत बेहतर लेआउट और आकर्षक रंगों की कल्पना करने लगता हूँ।', kannadaText: 'ತಕ್ಷಣವೇ; ಉತ್ತಮ ಅಕ್ಷರ ಶೈಲಿ ಮತ್ತು ವಿನ್ಯಾಸವನ್ನು ನಾನು ಕಲ್ಪಿಸಿಕೊಳ್ಳುತ್ತೇನೆ.', score: 5 },
      { text: 'Quickly; visual aesthetics and intuitive navigation matter a lot to me.', hindiText: 'जल्दी; सुंदर डिजाइन और आसान नेविगेशन मेरे लिए बहुत मायने रखता है।', kannadaText: 'ಬೇಗನೆ; ಸುಂದರ ನೋಟ ಮತ್ತು ಸರಳ ಬಳಕೆ ನನಗೆ ಮುಖ್ಯ.', score: 4 },
      { text: 'Only if the app is so messy that I cannot find a button.', hindiText: 'तभी जब ऐप इतना खराब हो कि बटन ही न मिले।', kannadaText: 'ಬಟನ್ ಸಿಗದಷ್ಟು ಗೊಂದಲಮಯವಾಗಿದ್ದರೆ ಮಾತ್ರ ಗಮನಿಸುತ್ತೇನೆ.', score: 3 },
      { text: 'I rarely pay attention to visual design if it functions.', hindiText: 'अगर काम चल रहा हो तो डिजाइन पर ध्यान नहीं देता।', kannadaText: 'ಕೆಲಸವಾದರೆ ಸಾಕು, ವಿನ್ಯಾಸದ ಬಗ್ಗೆ ತಲೆಕೆಡಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ.', score: 2 },
      { text: 'Visual aesthetics do not matter to me at all.', hindiText: 'सुंदरता और डिजाइन से मुझे कोई फर्क नहीं पड़ता।', kannadaText: 'ವಿನ್ಯಾಸದ ಬಗ್ಗೆ ನನಗೆ ಕಿಂಚಿತ್ತೂ ಆಸಕ್ತಿಯಿಲ್ಲ.', score: 1 }
    ]
  },

  // --- SOCIAL & COMMUNICATION SPECIFIC QUESTIONS ---
  {
    id: 401,
    category: 'social',
    dimension: 'Aptitude',
    riasecTarget: 'S',
    question: 'When a friend is distressed or upset, what is your natural reaction?',
    hindiQuestion: 'जब कोई मित्र परेशान या दुखी हो, तो आपकी स्वाभाविक प्रतिक्रिया क्या होती है?',
    kannadaQuestion: 'ಸ್ನೇಹಿತನೊಬ್ಬ ಸಂಕಷ್ಟದಲ್ಲಿದ್ದಾಗ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಪ್ರತಿಕ್ರಿಯೆ ಏನು?',
    options: [
      { text: 'I actively listen with full empathy and help them process their emotions.', hindiText: 'पूरी सहानुभूति से सुनता हूँ और उन्हें मानसिक संबल देता हूँ।', kannadaText: 'ಸಂಪೂರ್ಣ ಕಾಳಜಿಯಿಂದ ಕೇಳಿಸಿಕೊಂಡು, ಸಮಾಧಾನಪಡಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I offer practical advice and stay by their side.', hindiText: 'सहानुभूति के साथ उपयोगी सुझाव देता हूँ।', kannadaText: 'ಪ್ರಾಯೋಗಿಕ ಸಲಹೆ ನೀಡಿ ಅವರ ಬೆಂಬಲಕ್ಕೆ ನಿಲ್ಲುತ್ತೇನೆ.', score: 4 },
      { text: 'I listen politely, but feel awkward with deep emotions.', hindiText: 'सुन लेता हूँ, पर ज्यादा भावुक बातों में झिझक होती है।', kannadaText: 'ಕೇಳುತ್ತೇನೆ, ಆದರೆ ಅತಿಯಾದ ಭಾವನೆಗಳನ್ನು ನಿಭಾಯಿಸಲು ಹಿಂಜರಿಯುತ್ತೇನೆ.', score: 3 },
      { text: 'I change the topic or try to cheer them up superficially.', hindiText: 'बात बदलकर ध्यान भटकाने की कोशिश करता हूँ।', kannadaText: 'ವಿಷಯ ಬದಲಾಯಿಸಿ ಹಗುರವಾಗಿಸಲು ನೋಡುತ್ತೇನೆ.', score: 2 },
      { text: 'I distance myself from personal emotional situations.', hindiText: 'भावुक स्थितियों से मैं दूर ही रहता हूँ।', kannadaText: 'ಭಾವನಾತ್ಮಕ ಸನ್ನಿವೇಶಗಳಿಂದ ದೂರವಿರುತ್ತೇನೆ.', score: 1 }
    ]
  },

  // --- NUMERICAL & FINANCIAL SPECIFIC QUESTIONS ---
  {
    id: 501,
    category: 'numerical',
    dimension: 'Aptitude',
    riasecTarget: 'C',
    question: 'How do you approach managing pocket money, school event budgets, or savings?',
    hindiQuestion: 'पॉकेट मनी, स्कूल इवेंट के बजट या बचत का हिसाब आप कैसे रखते हैं?',
    kannadaQuestion: 'ಪಾಕೆಟ್ ಮನಿ, ಶಾಲಾ ಕಾರ್ಯಕ್ರಮದ ಬಜೆಟ್ ಅಥವಾ ಉಳಿತಾಯವನ್ನು ನೀವು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತೀರಿ?',
    options: [
      { text: 'I meticulously track every rupee, plan forecasts, and seek the highest value.', hindiText: 'एक-एक रुपये का हिसाब रखता हूँ और बचत की योजना बनाता हूँ।', kannadaText: 'ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯ ಲೆಕ್ಕವಿಟ್ಟು, ಭವಿಷ್ಯದ ಉಳಿತಾಯ ಯೋಜಿಸುತ್ತೇನೆ.', score: 5 },
      { text: 'I keep a mental or written budget and rarely overspend.', hindiText: 'बजट का ध्यान रखता हूँ और फिजूलखर्ची से बचता हूँ।', kannadaText: 'ಬಜೆಟ್ ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಅನಗತ್ಯ ವೆಚ್ಚ ಮಾಡುವುದಿಲ್ಲ.', score: 4 },
      { text: 'I check my balance occasionally when funds run low.', hindiText: 'पैसे कम होने पर ही कभी-कभार जांच करता हूँ।', kannadaText: 'ಹಣ ಮುಗಿಯುತ್ತಾ ಬಂದಾಗ ಮಾತ್ರ ಪರಿಶೀಲಿಸುತ್ತೇನೆ.', score: 3 },
      { text: 'I find tracking expenditures tedious and avoid it.', hindiText: 'खर्च का हिसाब रखना झंझट भरा लगता है।', kannadaText: 'ಖರ್ಚುಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಬೇಸರ ತರಿಸುತ್ತದೆ.', score: 2 },
      { text: 'I have no interest in financial numbers or budgeting.', hindiText: 'वित्तीय हिसाब-किताब में मेरी कोई रुचि नहीं है।', kannadaText: 'ಹಣಕಾಸಿನ ಲೆಕ್ಕಪತ್ರಗಳಲ್ಲಿ ನನಗೆ ಯಾವುದೇ ಆಸಕ್ತಿಯಿಲ್ಲ.', score: 1 }
    ]
  }
];
