import { 
  calculateRiasecCosineSimilarity, 
  calculateSubjectOverlap, 
  calculateCategoryAptitudeFit,
  generateCareerRecommendations 
} from '../utils/recommendationEngine';
import { computeCareerROI } from '../utils/roiCalculator';
import { CAREERS_DATA } from '../data/careersData';
import { StudentProfile } from '../types';

export function runAutomatedValidationTests(): { 
  total: number; 
  passed: number; 
  results: { test: string; status: 'PASS' | 'FAIL'; message: string }[] 
} {
  const results: { test: string; status: 'PASS' | 'FAIL'; message: string }[] = [];

  // TEST 1: RIASEC Cosine Similarity Exact Math
  try {
    const identicalScore = calculateRiasecCosineSimilarity(
      { R: 80, I: 90, A: 40, S: 20, E: 50, C: 60 },
      { R: 80, I: 90, A: 40, S: 20, E: 50, C: 60 }
    );
    if (identicalScore === 100) {
      results.push({ test: 'RIASEC Identical Vector Similarity', status: 'PASS', message: 'Identical profile vectors yield exactly 100% match.' });
    } else {
      results.push({ test: 'RIASEC Identical Vector Similarity', status: 'FAIL', message: `Expected 100%, got ${identicalScore}%` });
    }

    const orthogonalScore = calculateRiasecCosineSimilarity(
      { R: 100, I: 0, A: 0, S: 0, E: 0, C: 0 },
      { R: 0, I: 100, A: 0, S: 0, E: 0, C: 0 }
    );
    if (orthogonalScore === 0) {
      results.push({ test: 'RIASEC Orthogonal Divergence Test', status: 'PASS', message: 'Completely divergent vectors yield 0% cosine similarity.' });
    } else {
      results.push({ test: 'RIASEC Orthogonal Divergence Test', status: 'FAIL', message: `Expected 0%, got ${orthogonalScore}%` });
    }
  } catch (err) {
    results.push({ test: 'RIASEC Scoring Suite', status: 'FAIL', message: String(err) });
  }

  // TEST 2: Multi-Category Differentiated Recommendations
  try {
    const baseProfile: StudentProfile = {
      id: 'test-student',
      fullName: 'Test Candidate',
      age: 17,
      classLevel: 'Class 11-12',
      guardianConsent: true,
      preferredLanguage: 'English',
      preferredSubjects: ['Physics', 'Mathematics'],
      challengingSubjects: [],
      academicScoreRange: '75% - 90%',
      interests: ['Coding', 'Algorithms'],
      hobbies: [],
      selfReportedStrengths: ['Logical Analysis'],
      preferredWorkActivities: ['Software building'],
      learningStyle: 'Practical/Hands-on',
      budgetTier: 'medium',
      maxFamilyAnnualContribution: 75000,
      studyLocationPreference: 'All India',
      willingnessToRelocate: true,
      longTermAspirations: '',
      riasecScores: { R: 60, I: 90, A: 30, S: 20, E: 40, C: 50 },
      assessmentCompleted: true,
      savedCareers: [],
      completedRoadmapTasks: {},
      customRoadmapNotes: {},
      pinnedExams: [],
      scenarioFeedback: {},
      skillsInventory: [],
      projectsLogged: [],
      activeAssessmentCategory: 'logical'
    };

    const logicalRecs = generateCareerRecommendations(CAREERS_DATA, { ...baseProfile, activeAssessmentCategory: 'logical' });
    const creativeRecs = generateCareerRecommendations(CAREERS_DATA, { ...baseProfile, activeAssessmentCategory: 'creative' });
    const socialRecs = generateCareerRecommendations(CAREERS_DATA, { ...baseProfile, activeAssessmentCategory: 'social' });

    const topLogical = logicalRecs[0].career.category;
    const topCreative = creativeRecs[0].career.category;
    const topSocial = socialRecs[0].career.category;

    if (topLogical !== topCreative && (topCreative === 'Design' || topCreative === 'Arts')) {
      results.push({
        test: 'Category Assessment Differentiation',
        status: 'PASS',
        message: `Different test tracks produce measurably different top careers (Logical: ${logicalRecs[0].career.title}, Creative: ${creativeRecs[0].career.title}, Social: ${socialRecs[0].career.title}).`
      });
    } else {
      results.push({
        test: 'Category Assessment Differentiation',
        status: 'FAIL',
        message: `Expected distinct rankings across categories. Top Logical: ${topLogical}, Creative: ${topCreative}, Social: ${topSocial}`
      });
    }
  } catch (err) {
    results.push({ test: 'Category Differentiation Test', status: 'FAIL', message: String(err) });
  }

  // TEST 3: Subject Overlap Math
  try {
    const subjectOverlap = calculateSubjectOverlap(['Physics', 'Mathematics', 'Computer Science'], ['Physics', 'Mathematics']);
    if (subjectOverlap >= 85) {
      results.push({ test: 'Subject Overlap Mapping', status: 'PASS', message: `Overlap score is high (${subjectOverlap}%) when mandatory subjects match.` });
    } else {
      results.push({ test: 'Subject Overlap Mapping', status: 'FAIL', message: `Expected >= 85%, got ${subjectOverlap}%` });
    }
  } catch (err) {
    results.push({ test: 'Subject Overlap Test', status: 'FAIL', message: String(err) });
  }

  // TEST 4: Ethical Budget Safeguard (Low marks/tight budget never disqualifies career)
  try {
    const lowIncomeProfile: StudentProfile = {
      id: 'test-budget-safeguard',
      fullName: 'Rural Student',
      age: 16,
      classLevel: 'Class 8-10',
      guardianConsent: true,
      preferredLanguage: 'English',
      preferredSubjects: ['Science'],
      challengingSubjects: [],
      academicScoreRange: 'Passing to 60%',
      interests: ['Solar Energy', 'Electronics'],
      hobbies: [],
      selfReportedStrengths: ['Hands-on'],
      preferredWorkActivities: [],
      learningStyle: 'Practical/Hands-on',
      budgetTier: 'scholarship_needed',
      maxFamilyAnnualContribution: 20000,
      studyLocationPreference: 'Home State',
      willingnessToRelocate: true,
      longTermAspirations: 'Solar technician',
      riasecScores: { R: 85, I: 60, A: 30, S: 40, E: 45, C: 70 },
      assessmentCompleted: true,
      savedCareers: [],
      completedRoadmapTasks: {},
      customRoadmapNotes: {},
      pinnedExams: [],
      scenarioFeedback: {},
      skillsInventory: [],
      projectsLogged: []
    };

    const recs = generateCareerRecommendations(CAREERS_DATA, lowIncomeProfile);
    const topRec = recs[0];

    if (topRec && topRec.overallScore >= 70 && topRec.lowCostAlternativeAdvice.length > 0) {
      results.push({
        test: 'Ethical Budget Safeguard (No Disqualification)',
        status: 'PASS',
        message: 'Career remains highly ranked and automatically surfaces low-cost government/scholarship pathways.'
      });
    } else {
      results.push({
        test: 'Ethical Budget Safeguard (No Disqualification)',
        status: 'FAIL',
        message: `Expected high score with low-cost advice, got score ${topRec?.overallScore}`
      });
    }
  } catch (err) {
    results.push({ test: 'Budget Safeguard Test', status: 'FAIL', message: String(err) });
  }

  // TEST 5: Incomplete Profile Handling (Graceful degradation)
  try {
    const incompleteProfile: StudentProfile = {
      id: 'incomplete-test-user',
      fullName: 'Anonymous Student',
      age: 15,
      classLevel: 'Class 8-10',
      guardianConsent: true,
      preferredLanguage: 'English',
      preferredSubjects: [],
      challengingSubjects: [],
      academicScoreRange: 'Not Disclosed',
      interests: [],
      hobbies: [],
      selfReportedStrengths: [],
      preferredWorkActivities: [],
      learningStyle: 'Mixed',
      budgetTier: 'medium',
      maxFamilyAnnualContribution: 50000,
      studyLocationPreference: 'Anywhere',
      willingnessToRelocate: true,
      longTermAspirations: '',
      riasecScores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
      assessmentCompleted: false,
      savedCareers: [],
      completedRoadmapTasks: {},
      customRoadmapNotes: {},
      pinnedExams: [],
      scenarioFeedback: {},
      skillsInventory: [],
      projectsLogged: []
    };

    const recs = generateCareerRecommendations(CAREERS_DATA, incompleteProfile);
    if (recs && recs.length === CAREERS_DATA.length && recs[0].overallScore >= 35) {
      results.push({
        test: 'Incomplete / Zero Profile Robustness',
        status: 'PASS',
        message: 'Algorithm returns complete catalog sorted gracefully without crashing or throwing NaN.'
      });
    } else {
      results.push({
        test: 'Incomplete / Zero Profile Robustness',
        status: 'FAIL',
        message: 'Failed to handle incomplete profile gracefully.'
      });
    }
  } catch (err) {
    results.push({ test: 'Incomplete Profile Test', status: 'FAIL', message: String(err) });
  }

  // TEST 6: Education ROI and Zero-Debt Formula
  try {
    const roiCalc = computeCareerROI({
      collegeTier: 'govt',
      durationYears: 4,
      familyAnnualBudget: 40000,
      annualTuitionEstimate: 30000,
      annualHostelLivingCost: 35000,
      loanAmount: 100000,
      loanInterestRatePercent: 9.0,
      loanTenureYears: 7,
      scholarshipDeductionPerYear: 12000,
      indicativeEntrySalaryAnnual: 600000,
      isZeroDebtPathway: true
    });

    if (roiCalc.monthlyEMI === 0 && roiCalc.zeroDebtFeasible) {
      results.push({
        test: 'Zero-Debt Pathway Simulator Logic',
        status: 'PASS',
        message: 'Zero-debt pathway correctly cancels commercial debt, zeroes EMI, and routes via public scholarships.'
      });
    } else {
      results.push({
        test: 'Zero-Debt Pathway Simulator Logic',
        status: 'FAIL',
        message: `Expected monthly EMI 0 for Zero-Debt, got ${roiCalc.monthlyEMI}`
      });
    }
  } catch (err) {
    results.push({ test: 'ROI Zero-Debt Logic Test', status: 'FAIL', message: String(err) });
  }

  const passed = results.filter(r => r.status === 'PASS').length;
  return { total: results.length, passed, results };
}
