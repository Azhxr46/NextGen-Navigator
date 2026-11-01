// server/geminiHandler.js
// NextGen Navigators - Official Google Gemini API Backend Handler using @google/genai SDK

import { GoogleGenAI } from '@google/genai';

// Initialize Gemini client lazily to ensure environment variables are loaded
let geminiClient = null;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim().length === 0) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey: apiKey.trim() });
  }
  return geminiClient;
}

export async function handleGeminiChatRequest(body) {
  const {
    prompt,
    history = [],
    studentContext = {},
    careerContext = {},
    language = 'en'
  } = body || {};

  const cleanPrompt = (prompt || '').trim();
  if (!cleanPrompt) {
    return {
      status: 400,
      data: { error: 'Prompt is required' }
    };
  }

  const selectedLang = language === 'kn' ? 'kn' : language === 'hi' ? 'hi' : 'en';
  const apiKey = process.env.GEMINI_API_KEY;

  // Language Instruction
  let langInstruction = '';
  if (selectedLang === 'kn') {
    langInstruction = `\n\nCRITICAL LANGUAGE MANDATE:
- Formulate your ENTIRE response in polite, authentic, and grammatically correct Kannada (ಕನ್ನಡ).
- Keep entrance exam acronyms (KCET, COMEDK, JEE Main, NEET-UG, CUET, CLAT, GATE) and course codes (B.Tech, MBBS, BCA) recognizable.
- Use structured bullet points and encouraging tone.`;
  } else if (selectedLang === 'hi') {
    langInstruction = `\n\nCRITICAL LANGUAGE MANDATE:
- Formulate your ENTIRE response in polite, clear, and authentic Hindi Devanagari script (हिन्दी).
- Keep entrance exam acronyms (KCET, JEE Main, NEET, CUET, CLAT, GATE) and course codes (B.Tech, MBBS, BCA) recognizable.
- Use structured bullet points and encouraging tone.`;
  } else {
    langInstruction = `\n\nLANGUAGE: Respond in clear, professional, student-friendly English with structured bullet points and bold section headers.`;
  }

  // System Instruction tailored for Indian students
  const systemInstruction = `You are the official NextGen Navigators AI Career Counsellor—an empathetic, highly knowledgeable, and ethical career guide for Indian students (Classes 8 to 12, PUC, 3-Year Polytechnic Diploma, ITI, and Undergraduates) as well as parents and teachers.

CORE MISSION & ETHICS:
1. Provide accurate, practical, and structured educational guidance tailored to the Indian academic landscape (CBSE, ICSE, Karnataka State Board / SSLC / PUC, Maharashtra HSC, and other state boards).
2. Cover diverse pathways:
   - Senior Secondary Streams: Science (PCM / PCB / PCMB), Commerce (with / without Math), Arts & Humanities, and Vocational subjects.
   - Low-Cost & Practical Alternatives: 3-Year Polytechnic Diplomas (with lateral entry into 2nd year B.Tech), ITI certified trades, and open universities (IGNOU).
   - Higher Education: B.Tech / B.E, BCA, B.Sc, MBBS, BDS, BAMS, BHMS, B.Pharm, B.Des, Integrated Law (BA LLB / BBA LLB), CA, CS, CMA.
   - Major Entrance Exams: KCET (Karnataka), COMEDK, JEE Main & Advanced, NEET-UG, CUET-UG, CLAT, NATA, NDA, UCEED, NIFT, GATE.
   - Top Institutions: IITs, NITs, IIITs, BITS Pilani, IISc, premier state colleges (e.g. RVCE, BMSCE, MSRIT, PES, UVCE in Karnataka), AIIMS, NLUs.
   - Verified Scholarships & Affordability: Karnataka SSP (Post-Matric full fee reimbursement), National Scholarship Portal (NSP Central Sector Scheme), AICTE Pragati (₹50,000/yr for girls in technical education), and Vidyalakshmi CSIS (100% interest subsidy on collateral-free education loans).
3. Salary Guidance: Cite realistic, verified starting and mid-career benchmarks in INR (LPA) referencing the National Career Service (NCS 2026 aggregates). Emphasize that salaries depend on verified skills and portfolio, not just degrees.
4. Continuous Conversation: You maintain the flow of conversation. Reference prior context when the student asks follow-up questions (e.g., "Tell me more about the second option", "What is the syllabus for that?").
5. Guardrails: If asked non-educational or non-career questions (e.g. video games, pop gossip, unrelated coding tasks), politely steer the conversation back to career, education, and skill development.

STUDENT PROFILE CONTEXT:
- Name: ${studentContext.fullName || 'Student'}
- Class / Academic Stage: ${studentContext.classLevel || 'Class 10 / 11 / 12'}
- Preferred Subjects: ${Array.isArray(studentContext.preferredSubjects) ? studentContext.preferredSubjects.join(', ') : 'Not specified'}
- Strengths: ${Array.isArray(studentContext.strengths) ? studentContext.strengths.join(', ') : 'Analytical / Creative'}
- Budget Tier: ${studentContext.budgetTier || 'Affordable / Low Budget'}

ACTIVE CAREER CATALOG CONTEXT:
- Top Match: ${careerContext.topMatch || 'General Guidance'}
- Catalog Size: ${careerContext.catalogCount || 100}+ verified careers
${langInstruction}`;

  // If Gemini API Key is configured, attempt real Gemini call using @google/genai SDK
  if (apiKey && apiKey.trim().length > 5) {
    try {
      const client = getGeminiClient();
      if (client) {
        // Format conversation history for Gemini multi-turn chat
        const contents = [];

        // Add previous conversation turns (up to last 10 messages for context)
        const recentHistory = Array.isArray(history) ? history.slice(-10) : [];
        for (const msg of recentHistory) {
          if (!msg || !msg.text) continue;
          const role = (msg.sender === 'user' || msg.role === 'user') ? 'user' : 'model';
          contents.push({
            role,
            parts: [{ text: msg.text }]
          });
        }

        // Add the active prompt as the latest user turn
        contents.push({
          role: 'user',
          parts: [{ text: cleanPrompt }]
        });

        // Preferred model list with fallback sequence
        const modelsToTry = [
          process.env.GEMINI_MODEL || 'gemini-3.8-flash',
          'gemini-flash-latest',
          'gemini-2.5-flash'
        ];

        let lastError = null;
        for (const modelName of modelsToTry) {
          try {
            const response = await client.models.generateContent({
              model: modelName,
              contents,
              config: {
                systemInstruction,
                temperature: 0.6,
                maxOutputTokens: 1000
              }
            });

            const replyText = response?.text;
            if (replyText && replyText.trim().length > 0) {
              return {
                status: 200,
                data: {
                  text: replyText.trim(),
                  model: modelName,
                  isGeminiLive: true,
                  isFactNotice: true
                }
              };
            }
          } catch (modelErr) {
            lastError = modelErr;
            const errStr = (modelErr?.message || '').toLowerCase();
            // If it's a 404 (model not found), proceed to try next candidate model
            if (errStr.includes('not found') || errStr.includes('404')) {
              continue;
            }
            // If it's permission/billing or other fatal error, break to fallback handling
            break;
          }
        }

        // Handle specific Google Cloud API issues (e.g. billing not enabled on project)
        if (lastError) {
          const errMsg = lastError.message || String(lastError);
          console.warn('[Gemini API Warning]', errMsg);

          if (errMsg.includes('free tier is not available') || errMsg.includes('set up billing') || errMsg.includes('403')) {
            const billingNotice = selectedLang === 'kn'
              ? '\n\n*(ಗಮನಿಸಿ: ನಿಮ್ಮ Google Cloud ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ ಬಿಲ್ಲಿಂಗ್ ಸಕ್ರಿಯಗೊಳಿಸಲು https://aistudio.google.com/billing ಗೆ ಭೇಟಿ ನೀಡಿ. ಕೆಳಗೆ ನಮ್ಮ ಪರಿಶೀಲಿತ ಆಂತರಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡಲಾಗಿದೆ.)*'
              : selectedLang === 'hi'
              ? '\n\n*(सूचना: अपने Google Cloud प्रोजेक्ट पर बिलिंग सक्रिय करने के लिए https://aistudio.google.com/billing पर जाएं। नीचे हमारा सत्यापित आंतरिक मार्गदर्शन प्रस्तुत है।)*'
              : '\n\n*(Notice: To enable unlimited real-time Gemini streaming, set up billing at https://aistudio.google.com/billing on your Google Cloud project. Verified NextGen intelligence is displayed below.)*';

            const fallbackGuidance = generateStructuredFallback(cleanPrompt, studentContext, selectedLang);
            return {
              status: 200,
              data: {
                text: fallbackGuidance + billingNotice,
                model: 'gemini-3.8-flash',
                isGeminiLive: false,
                isFallback: true,
                isFactNotice: true,
                billingRequired: true
              }
            };
          }
        }
      }
    } catch (sdkError) {
      console.error('[Gemini SDK Exception]', sdkError);
    }
  }

  // Graceful fallback response in selected language
  const fallbackText = generateStructuredFallback(cleanPrompt, studentContext, selectedLang);
  return {
    status: 200,
    data: {
      text: fallbackText,
      model: 'nextgen-intelligence',
      isGeminiLive: false,
      isFallback: true,
      isFactNotice: true
    }
  };
}

function generateStructuredFallback(query, studentContext, lang) {
  const q = (query || '').toLowerCase();
  const name = studentContext?.fullName || 'Student';

  if (lang === 'kn') {
    if (q.includes('class 10') || q.includes('10th') || q.includes('sslc') || q.includes('ನಂತರ')) {
      return `ನಮಸ್ಕಾರ ${name}! 10ನೇ ತರಗತಿಯ (SSLC) ನಂತರ ಭಾರತದಲ್ಲಿ 3 ಅತ್ಯುತ್ತಮ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗಗಳಿವೆ:\n\n` +
        `1. ಪಿಯುಸಿ / Class 11-12:\n` +
        `   • ವಿಜ್ಞಾನ (PCMB/PCMC): ಎಂಜಿನಿಯರಿಂಗ್, ವೈದ್ಯಕೀಯ, ಆರ್ಟಿಫಿಷಿಯಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಮತ್ತು ಸಂಶೋಧನೆಗೆ ಸೂಕ್ತ.\n` +
        `   • ವಾಣಿಜ್ಯ (Commerce + Math/Stats): CA, CS, ಬ್ಯಾಂಕಿಂಗ್, ಹಣಕಾಸು ವಿಶ್ಲೇಷಣೆ.\n` +
        `   • ಕಲೆ ಮತ್ತು ಮಾನವಿಕ: ನಾಗರಿಕ ಸೇವೆಗಳು (UPSC/KPSC), ಕಾನೂನು (CLAT), ವಿನ್ಯಾಸ, ಮನಶ್ಶಾಸ್ತ್ರ.\n\n` +
        `2. 3-ವರ್ಷದ ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ:\n` +
        `   • ಸರ್ಕಾರಿ ಪಾಲಿಟೆಕ್ನಿಕ್‌ಗಳಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಶುಲ್ಕ.\n` +
        `   • ಡಿಪ್ಲೊಮಾ ಪೂರ್ಣಗೊಂಡ ನಂತರ DCET ಮೂಲಕ ನೇರವಾಗಿ B.Tech/B.E 2ನೇ ವರ್ಷಕ್ಕೆ (Lateral Entry) ಪ್ರವೇಶ ಪಡೆಯಬಹುದು.\n\n` +
        `3. ITI ಕೌಶಲ್ಯ ಪ್ರಮಾಣಪತ್ರಗಳು:\n` +
        `   • 1-2 ವರ್ಷಗಳ ತರಬೇತಿ, ಉಚಿತ/ಕಡಿಮೆ ವೆಚ್ಚ ಹಾಗೂ ನೇರ ಶಿಶುಕ್ಷು ಉದ್ಯೋಗಾವಕಾಶ.\n\n` +
        `💡 ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆಯನ್ನು ಯೋಜಿಸಲು ನಮ್ಮ 'ಕಲಿಕಾ ರೋಡ್‌ಮ್ಯಾಪ್' ಟೂಲ್ ಬಳಸಿ.`;
    }
    if (q.includes('ai') || q.includes('tech') || q.includes('cyber') || q.includes('ಸಾಫ್ಟ್‌ವೇರ್')) {
      return `AI, ಮೆಷಿನ್ ಲರ್ನಿಂಗ್ ಹಾಗೂ ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಕ್ಷೇತ್ರಕ್ಕೆ ಪ್ರವೇಶಿಸುವ ಸಮಗ್ರ ಮಾರ್ಗ:\n\n` +
        `• 11-12ನೇ ತರಗತಿ: ಗಣಿತ, ಭೌತಶಾಸ್ತ್ರ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಕಡ್ಡಾಯ.\n` +
        `• ಪದವಿ ಆಯ್ಕೆಗಳು: B.Tech (CSE / AI & ML), BCA, ಅಥವಾ IIT ಮದ್ರಾಸ್ BS Data Science (ಆನ್‌ಲೈನ್).\n` +
        `• ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು: KCET (ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ಕಾಲೇಜು ಕೋಟಾ), JEE Main, COMEDK.\n` +
        `• ಉಚಿತ ಕಲಿಕಾ ಪೋರ್ಟಲ್‌ಗಳು: SWAYAM/NPTEL, CS50, GitHub ಪ್ರಾಜೆಕ್ಟ್ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ.\n` +
        `• ಆರಂಭಿಕ ವೇತನ: ₹5.5L - ₹9.5L LPA (NCS 2026 ವರದಿ).`;
    }
    if (q.includes('scholarship') || q.includes('fee') || q.includes('ವಿದ್ಯಾರ್ಥಿವೇತನ') || q.includes('ಶುಲ್ಕ')) {
      return `ಭಾರತದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರಮುಖ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು ಹಾಗೂ ಕಡಿಮೆ ಶುಲ್ಕದ ಮಾರ್ಗಗಳು:\n\n` +
        `1. ಕರ್ನಾಟಕ SSP (State Scholarship Portal): ಪಿಯುಸಿ, ಡಿಪ್ಲೊಮಾ, ಪದವಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಪೂರ್ಣ ಬೋಧನಾ ಶುಲ್ಕ ಮರುಪಾವತಿ.\n` +
        `2. ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆ (NSP): 12ನೇ ತರಗತಿಯಲ್ಲಿ ಶ್ರೇಷ್ಠ ಅಂಕ ಗಳಿಸಿದವರಿಗೆ ₹12,000/ವರ್ಷ.\n` +
        `3. AICTE ಪ್ರಗತಿ ಯೋಜನೆ: ತಾಂತ್ರಿಕ ಕಾಲೇಜುಗಳಲ್ಲಿ ಓದುವ ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ ₹50,000/ವರ್ಷ.\n` +
        `4. ವಿದ್ಯಾಲಕ್ಷ್ಮಿ CSIS: ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹4.5 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ ಶಿಕ್ಷಣ ಸಾಲದ ಮೇಲೆ 100% ಬಡ್ಡಿ ಸಹಾಯಧನ.\n\n` +
        `ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ಮೇಲಿನ ಮೆನುವಿನಲ್ಲಿರುವ 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು' ಪುಟವನ್ನು ಪರಿಶೀಲಿಸಿ.`;
    }
    return `ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ:\n\n` +
      `• ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳಿಗೆ ತಕ್ಕ ವೃತ್ತಿ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು 'ವೃತ್ತಿ ಅನ್ವೇಷಕ' (Career Explorer) ನೋಡಿ.\n` +
      `• KCET, JEE, NEET ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ವೇಳಾಪಟ್ಟಿಗಾಗಿ 'ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳ ರೇಡಾರ್' ಬಳಸಿ.\n` +
      `• ಸರ್ಕಾರಿ ಕಾಲೇಜು ಮತ್ತು ಖಾಸಗಿ ಕಾಲೇಜುಗಳ ಶುಲ್ಕವನ್ನು ನಮ್ಮ 'ROI ಕ್ಯಾಲ್ಕುಲೇಟರ್' ಮೂಲಕ ಹೋಲಿಕೆ ಮಾಡಿ.\n\n` +
      `*ಅಂತಿಮ ಪ್ರವೇಶ ನಿಯಮಗಳಿಗಾಗಿ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳನ್ನು (KEA, NTA, AICTE) ಸಂಪರ್ಕಿಸಿ.*`;
  }

  if (lang === 'hi') {
    if (q.includes('class 10') || q.includes('10th') || q.includes('दसवीं')) {
      return `नमस्ते ${name}! 10वीं कक्षा के बाद भारतीय छात्रों के लिए 3 प्रमुख एवं प्रमाणित शैक्षणिक मार्ग हैं:\n\n` +
        `1. उच्च माध्यमिक (11वीं एवं 12वीं):\n` +
        `   • विज्ञान (PCM/PCB): इंजीनियरिंग, मेडिकल, डेटा साइंस और अनुसंधान।\n` +
        `   • वाणिज्य (Commerce with/without Maths): चार्टर्ड अकाउंटेंसी (CA), वित्त, बैंकिंग, प्रबंधन।\n` +
        `   • कला एवं मानविकी: सिविल सेवा (UPSC), कानून (CLAT), पत्रकारिता, डिजाइन।\n\n` +
        `2. 3-वर्षीय पॉलिटेक्निक डिप्लोमा:\n` +
        `   • कम सरकारी फीस और व्यावहारिक इंजीनियरिंग कौशल।\n` +
        `   • डिप्लोमा के बाद सीधे बी.टेक के द्वितीय वर्ष (Lateral Entry) में प्रवेश।\n\n` +
        `3. ITI तकनीकी प्रमाणपत्र:\n` +
        `   • 1-2 वर्ष में सीधे अप्रेंटिसशिप और स्वरोजगार के अवसर।\n\n` +
        `सलाह: व्यक्तिगत करियर पथ के लिए हमारे 'रोडमैप' विकल्प को देखें।`;
    }
    if (q.includes('ai') || q.includes('tech') || q.includes('सॉफ्टवेयर') || q.includes('कंप्यूटर')) {
      return `भारत में AI, डेटा साइंस या सॉफ्टवेयर इंजीनियरिंग का स्पष्ट मार्ग:\n\n` +
        `• 11वीं-12वीं: गणित, भौतिकी और कंप्यूटर विज्ञान पर मजबूत पकड़ बनाएं।\n` +
        `• डिग्रियां: B.Tech (CSE / AI / Data Science), BCA, या IIT मद्रास BS डेटा साइंस।\n` +
        `• प्रमुख प्रवेश परीक्षाएं: JEE Main, राज्य CET (जैसे KCET), CUET-UG।\n` +
        `• निःशुल्क सीखने के स्रोत: SWAYAM/NPTEL, ओपन-सोर्स कोडिंग और GitHub।\n` +
        `• शुरुआती वेतनमान: ₹5.0L - ₹9.0L LPA (राष्ट्रीय करियर सेवा NCS 2026)।`;
    }
    if (q.includes('scholarship') || q.includes('fee') || q.includes('छात्रवृत्ति') || q.includes('फीस')) {
      return `किफायती एवं शून्य-ऋण शिक्षा के प्रमुख विकल्प:\n\n` +
        `1. नेशनल स्कॉलरशिप पोर्टल (NSP): उच्च माध्यमिक के मेधावी छात्रों के लिए केंद्रीय योजनाएं।\n` +
        `2. कर्नाटक SSP (पोस्ट-मैट्रिक): पात्र विद्यार्थियों के लिए 100% शिक्षण शुल्क प्रतिपूर्ति।\n` +
        `3. AICTE प्रगति योजना: तकनीकी शिक्षा में छात्राओं के लिए ₹50,000 प्रति वर्ष।\n` +
        `4. विद्यालक्ष्मी CSIS: पढ़ाई के दौरान शिक्षा ऋण पर 100% ब्याज सब्सिडी।\n\n` +
        `अधिक जानकारी के लिए शीर्ष मेनू में 'छात्रवृत्तियां' टैब देखें।`;
    }
    return `आपकी शैक्षिक योजना के संबंध में:\n\n` +
      `• अपनी क्षमताओं के अनुसार विकल्पों की खोज के लिए 'करियर एक्सप्लोरर' देखें।\n` +
      `• आवश्यक प्रवेश परीक्षाओं (KCET, JEE, NEET, CUET) की तारीखों की जांच करें।\n` +
      `• कॉलेज फीस और शुरुआती वेतन की तुलना के लिए ROI कैलकुलेटर का उपयोग करें।\n\n` +
      `*प्रवेश नियमों की पुष्टि हमेशा संबंधित आधिकारिक वेबसाइट (NTA, KEA, AICTE) से करें।*`;
  }

  // English
  if (q.includes('class 10') || q.includes('10th') || q.includes('after 10')) {
    return `Hello ${name}! After Class 10 in India, you have 3 distinct primary pathways:\n\n` +
      `1. Senior Secondary (Class 11 & 12):\n` +
      `   • Science (PCM/PCB/PCMB): For Engineering, Medicine, Pure Sciences, and AI.\n` +
      `   • Commerce: For CA, CS, Corporate Finance, Investment Banking, and FinTech.\n` +
      `   • Humanities & Arts: For Civil Services (UPSC), Law (CLAT), UX Design, and Psychology.\n\n` +
      `2. 3-Year Government Polytechnic Diploma:\n` +
      `   • Extremely affordable fees (~₹5,000 - ₹15,000/year in government polytechnics).\n` +
      `   • Enables direct Lateral Entry into the 2nd Year of B.Tech/B.E without losing a single year.\n\n` +
      `3. ITI Craftsman Training:\n` +
      `   • 1 to 2-year industry-ready technical trades with immediate paid apprenticeships.\n\n` +
      `Recommendation: Explore our 'Learning Roadmaps' tab for a step-by-step milestone plan.`;
  }

  if (q.includes('ai') || q.includes('cyber') || q.includes('software') || q.includes('tech')) {
    return `To build a career in AI, Machine Learning, or Software Engineering in India:\n\n` +
      `• School Subjects: Focus on Mathematics, Physics, and Computer Science in Class 11-12.\n` +
      `• Degree Options: B.Tech in CSE / AI / Data Science, BCA, or the IIT Madras BS in Data Science.\n` +
      `• Key Entrance Exams: JEE Main, State CETs (e.g. KCET in Karnataka), and COMEDK.\n` +
      `• Practical Portfolio: Build GitHub projects and take free SWAYAM/NPTEL certified courses.\n` +
      `• Indicative Starting Salary: Entry ₹5.5L - ₹9.0L LPA; Mid-level ₹14L - ₹28L LPA (Source: National Career Service 2026 aggregates).`;
  }

  if (q.includes('scholarship') || q.includes('fee') || q.includes('afford') || q.includes('budget')) {
    return `Verified Scholarships & Zero-Debt Education Pathways for Indian Students:\n\n` +
      `1. Karnataka SSP (Post-Matric Scheme): Full tuition fee reimbursement for eligible resident students across PUC, Polytechnic, and Degrees.\n` +
      `2. Central Sector Scheme (NSP): ₹12,000/yr for students in the top 20th percentile in Class 12 board exams.\n` +
      `3. AICTE Pragati Scheme: ₹50,000/year for girls pursuing technical degree or diploma courses.\n` +
      `4. Vidyalakshmi CSIS: 100% interest subsidy on collateral-free education loans during the study period for family income < ₹4.5L/year.\n\n` +
      `Browse the 'Scholarships' directory on the top menu for direct government application links!`;
  }

  return `Regarding your educational planning:\n\n` +
    `• Review your top RIASEC aptitude matches in the Career Explorer to discover compatible courses.\n` +
    `• Check required entrance examinations (KCET, JEE Main, NEET, CUET) and registration deadlines in the Entrance Exam Radar.\n` +
    `• Compare government vs private college fees against starting salaries using our Financial ROI Calculator.\n\n` +
    `*Always confirm admission criteria and cutoffs on official institutional portals (KEA, NTA, AICTE).*`;
}

