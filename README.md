# CareerSaathi AI 🎓🇮🇳
> **"Discover Your Strengths. Explore Your Future."**  
> *A Competition-Ready National Career Discovery & Learning Roadmap Platform for the Smart India Hackathon (SIH), aligned with India's National Education Policy (NEP) 2020.*

---

## 🌟 Executive Overview
**CareerSaathi AI** is an intelligent, ethical, multidisciplinary web application engineered for Indian students (Classes 8–12, Polytechnic, ITI, Undergraduate, and Vocational), parents, school counsellors, and institutional administrators.

Unlike traditional static portals that push every student towards saturated exams, CareerSaathi AI operationalizes the core vision of **NEP 2020**:
1. **Dismantling Rigid Streams:** Multidisciplinary combinations across Science, Commerce, Arts, and Vocational skills.
2. **Vocational & Technical Parity:** Equating ITI and Polytechnic technical trades with traditional university degrees.
3. **Zero-Debt Guarantee:** Prioritizing low-cost public institutions, national scholarships, and government interest subsidies so financial constraints never block dreams.
4. **Privacy-by-Design:** Zero collection of sensitive government IDs (Aadhaar/PAN), caste, or religion.

---

## 🏛️ System Architecture & Tech Stack

```
                               ┌────────────────────────────────────────────────────────┐
                               │                    CareerSaathi AI                     │
                               │                (React + TypeScript + Vite)             │
                               └──────────────────────────┬─────────────────────────────┘
                                                          │
          ┌───────────────────────────────────────────────┼───────────────────────────────────────────────┐
          │                                               │                                               │
┌─────────▼──────────┐                         ┌──────────▼──────────┐                         ┌──────────▼──────────┐
│  Presentation UI   │                         │  Core State & Logic │                         │   Domain Engines    │
├────────────────────┤                         ├─────────────────────┤                         ├─────────────────────┤
│ • Tailwind CSS     │                         │ • React Context     │                         │ • RIASEC Calculator │
│ • Lucide Icons     │                         │ • LocalStorage Sync │                         │ • Recommendation    │
│ • Recharts Radar & │                         │ • 3 Demo Personas   │                         │ • Vidyalakshmi ROI  │
│   Bar Visualizers  │                         │ • Role Switcher     │                         │ • Subject Simulator │
│ • Canvas Confetti  │                         │ • Audio TTS Web API │                         │ • Local Context AI  │
└────────────────────┘                         └─────────────────────┘                         └─────────────────────┘
```

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 3.4, Lucide Icons, Recharts (Radar, Bar, Pie charts).
- **Persistence & Offline Guarantee:** Rock-solid LocalStorage state architecture with pre-loaded realistic Indian datasets. Runs 100% smoothly offline in Demo Mode without external paid API keys or external database setup.
- **Role-Based Access (3 Roles):** Quick switcher in top navbar for live hackathon judging:
  - **Student View:** Self-discovery, RIASEC test, learning roadmaps, sandbox simulations, printable dossier.
  - **Counsellor Desk:** Review consented student psychometrics, log official guidance notes, confirm mentorship sessions.
  - **Admin Console:** Manage 35+ career profiles, inspect dataset quality, monitor anonymized analytics, and trigger automated test proofs.

---

## 📐 Exact Mathematical Recommendation Formula

Career compatibility is computed deterministically using weighted multi-dimensional vector matching:

$$\text{Compatibility Score} = \min\left(99, \max\left(35, \text{round}\left(0.45 \cdot S_{\text{RIASEC}} + 0.25 \cdot S_{\text{Subject}} + 0.15 \cdot S_{\text{Skill}} + 0.15 \cdot S_{\text{Budget}} + \Delta_{\text{Sandbox}}\right)\right)\right)$$

### Component Formulations:
1. **RIASEC Cosine Similarity ($S_{\text{RIASEC}}$ - 45% Weight):**
   Calculates the normalized cosine angle between the student's 6-dimensional score vector $\vec{u} = \langle R, I, A, S, E, C \rangle$ and the career's benchmark target vector $\vec{w}$:
   $$S_{\text{RIASEC}} = \frac{\vec{u} \cdot \vec{w}}{\|\vec{u}\| \|\vec{w}\|} \times 100\%$$

2. **Subject Overlap Fit ($S_{\text{Subject}}$ - 25% Weight):**
   $$S_{\text{Subject}} = 40 + \left(\frac{|P_{\text{student}} \cap R_{\text{career}}|}{|R_{\text{career}}|} \times 60\right)$$
   *Baseline of 40 ensures younger students (Class 8-10) are not harshly penalized before choosing senior secondary electives.*

3. **Skill & Work-Activity Fit ($S_{\text{Skill}}$ - 15% Weight):**
   Tokenized matching between user-reported strengths/interests and career technical competencies.

4. **Pathway & Budget Readiness ($S_{\text{Budget}}$ - 15% Weight):**
   *Critical Ethical Rule:* If a student comes from a low-income family ($<\text{₹}50\text{k/yr}$), available government polytechnics, ITIs, and central scholarships **boost** the match score (awarding 90%), preventing financial disqualification.

5. **Sandbox Real-Time Tuning ($\Delta_{\text{Sandbox}}$):**
   When a student tries the interactive 3-minute workplace micro-experience, their feedback dynamically refines compatibility ($+4\%$ if loved, $-4\%$ if disliked).

---

## 🚀 Key Modules Built

1. **Product Identity & Design System:** Deep Navy Blue (`#0F172A`), Soft Slate (`#F8FAFC`), Violet/Indigo accents (`#4F46E5`), accessible contrast.
2. **Public Landing Page:** Interactive 4-step workflow, 14 categories grid, demo testimonials, interactive FAQ.
3. **Privacy-by-Design Student Onboarding:** 4-step wizard with guardian consent, academic baseline, and 3 distinct 1-click test personas (Priya, Aarav, Ananya).
4. **Interactive RIASEC Assessment Engine:** 24 balanced questions evaluating 6 dimensions with live dynamic Recharts Radar Chart preview.
5. **35+ Indian Career Dataset:** Covering all 14 sectors (Technology, Engineering, Healthcare, Science, Commerce, Finance, Law, Design, Arts, Agriculture, Education, Public Service, Entrepreneurship, Vocational).
6. **NEP 2020 Multidisciplinary Subject Simulator:** Interactive "What-If" selector across Science, Commerce, Humanities, and Vocational pools with live door Unlocked/Locked status.
7. **Education ROI & Financial Affordability Simulator:** Sliders for budget, tuition tier, Vidyalakshmi PSB loan EMI, payback period, and Zero-Debt toggle.
8. **Interactive "Day in the Life" Career Sandbox:** 3-minute workplace micro-experience with real-time feedback tuning.
9. **One-Click NEP 2020 Career Dossier PDF / Print:** Official multi-page readiness summary for Parent-Teacher Meetings (PTMs).
10. **Parent & Guardian "Myth-Buster" Mode:** Evidence-backed cards in 5 languages (English, Hindi, Marathi, Bengali, Tamil) with plain-language briefs.
11. **Entrance Exam & Admission Timeline Radar:** JEE, NEET, CUET, CLAT, NID, NDA, Polytechnic CETs, ITIs with NCERT overlap and free prep links.
12. **Skill-to-Portfolio & Beginner Resume Builder:** Converts projects, Olympiads, and certifications into a downloadable 1-page student resume.
13. **AI Career Counsellor Chatbot:** Floating & full-page assistant with quick-chips, ethical guardrails, and context-aware local response engine fallback.
14. **Role Dashboards:** Student Dashboard, Counsellor Guidance Desk, and Admin Platform Console.
15. **Accessibility & Command Palette:** Global `Ctrl+K` command bar, Lite / Rural 2G Mode toggle, and Text-to-Speech (Read Aloud) audio playback.

---

## 🛠️ Quickstart & Setup Instructions

### Prerequisites
- Node.js v18+ or v20+ or v22+
- npm v9+

### 1. Installation
```bash
# Clone or navigate to the repository
cd nextgen

# Install dependencies
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Run Automated Validation & Unit Tests
```bash
npm test
```
*Executes unit test proofs for RIASEC scoring vectors, budget safeguards, zero-debt formulas, and incomplete profile handling.*

### 4. Build for Production
```bash
npm run build
```

---

## 🛡️ Ethical AI & Pedagogical Guardrails
- **Educational Guidance Notice:** CareerSaathi AI is an educational exploration system aligned with NEP 2020, not a clinical psychiatric diagnostic test.
- **Zero Admission/Job Guarantees:** Salary figures, college costs, and exam cutoffs are clearly marked as empirical indicative estimates.
- **Human Counsellor In The Loop:** Students are consistently advised to consult teachers, counsellors, and parents for binding decisions.
- **Privacy By Design:** No Aadhaar, PAN, caste, religion, or sensitive demographic IDs are ever requested.

---

## 🏆 Smart India Hackathon (SIH) Evaluation Guide
1. **Live Demo Persona Switching:** Use the top navigation bar dropdown to switch between **Priya** (Class 10 Rural/Solar), **Aarav** (Class 12 Science/AI), and **Ananya** (Class 11 Arts/UX).
2. **Instant Role Switching:** Toggle between **Student**, **Counsellor**, and **Admin** views with 1 click.
3. **Command Palette:** Press `Ctrl + K` (or `Cmd + K`) anywhere to jump instantly to any career or view.
4. **Rural / Lite Mode:** Click the "Lite Mode" toggle in the top bar to verify animation-free low-bandwidth accessibility for rural schools.
5. **Printable Dossier:** On the Student Dashboard, click "Download Official NEP Dossier" to preview the formatted multi-page print layout.

