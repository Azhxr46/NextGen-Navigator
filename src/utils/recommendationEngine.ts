import { Career, StudentProfile, CareerRecommendationMatch, RIASECScore, RIASECType, AssessmentCategory } from '../types';

/**
 * Calculates Euclidean / Cosine similarity between student's RIASEC scores and career's target weights
 */
export function calculateRiasecCosineSimilarity(studentScore: RIASECScore, targetWeights: RIASECScore): number {
  const dimensions: RIASECType[] = ['R', 'I', 'A', 'S', 'E', 'C'];

  let dotProduct = 0;
  let studentMagSq = 0;
  let targetMagSq = 0;

  for (const dim of dimensions) {
    const s = studentScore[dim] || 0;
    const t = targetWeights[dim] || 0;
    dotProduct += s * t;
    studentMagSq += s * s;
    targetMagSq += t * t;
  }

  if (studentMagSq === 0 || targetMagSq === 0) return 50; // default baseline

  const similarity = dotProduct / (Math.sqrt(studentMagSq) * Math.sqrt(targetMagSq));
  return Math.min(100, Math.max(0, Math.round(similarity * 100)));
}

/**
 * Calculates Subject Overlap Score (0 - 100%)
 */
export function calculateSubjectOverlap(preferredSubjects: string[] = [], requiredSchoolSubjects: string[] = []): number {
  if (!requiredSchoolSubjects || requiredSchoolSubjects.length === 0) return 85;
  if (!preferredSubjects || preferredSubjects.length === 0) return 60;

  const normalizedPreferred = preferredSubjects.map(s => s.toLowerCase());
  let matches = 0;

  for (const req of requiredSchoolSubjects) {
    const reqLower = req.toLowerCase();
    const isMatched = normalizedPreferred.some(p =>
      p.includes(reqLower) || reqLower.includes(p) ||
      (reqLower.includes('math') && p.includes('math')) ||
      (reqLower.includes('bio') && p.includes('bio')) ||
      (reqLower.includes('comput') && p.includes('comput')) ||
      (reqLower.includes('art') && p.includes('art')) ||
      (reqLower.includes('account') && p.includes('account'))
    );
    if (isMatched) matches++;
  }

  const ratio = matches / requiredSchoolSubjects.length;
  return Math.min(100, Math.round(40 + ratio * 60));
}

/**
 * Calculates Skill and Work-Activity Fit (0 - 100%)
 */
export function calculateSkillActivityFit(
  profileInterests: string[] = [],
  profileStrengths: string[] = [],
  preferredActivities: string[] = [],
  careerSkills: string[] = [],
  dailyTasks: string[] = []
): number {
  const userTokens = [
    ...profileInterests,
    ...profileStrengths,
    ...preferredActivities
  ].map(t => t.toLowerCase());

  if (userTokens.length === 0) return 65;

  let score = 55;
  const targetTokens = [...careerSkills, ...dailyTasks].map(t => t.toLowerCase());

  let matchesCount = 0;
  for (const userToken of userTokens) {
    for (const targetToken of targetTokens) {
      if (targetToken.includes(userToken) || userToken.includes(targetToken)) {
        matchesCount++;
        break;
      }
    }
  }

  score += Math.min(45, matchesCount * 8);
  return Math.min(100, score);
}

/**
 * Category-Specific Aptitude Multiplier
 * Ensures that different assessment tests produce distinctly different recommendations!
 */
export function calculateCategoryAptitudeFit(career: Career, category: AssessmentCategory = 'comprehensive'): number {
  switch (category) {
    case 'logical':
      // Heavily weights Investigative and analytical sectors
      if (career.category === 'Technology' || career.category === 'Science') return 95;
      if (career.primaryRiasec.includes('I')) return 90;
      if (career.category === 'Law' || career.category === 'Engineering') return 80;
      return 50;

    case 'technical':
      // Heavily weights Realistic, Engineering & Vocational trades
      if (career.category === 'Engineering' || career.category === 'Vocational') return 95;
      if (career.primaryRiasec.includes('R')) return 92;
      if (career.category === 'Technology' && career.primaryRiasec.includes('R')) return 88;
      return 45;

    case 'creative':
      // Heavily weights Artistic, Design & Media
      if (career.category === 'Design' || career.category === 'Arts') return 96;
      if (career.primaryRiasec.includes('A')) return 92;
      return 40;

    case 'social':
      // Heavily weights Social, Public Service, Healthcare & Education
      if (career.category === 'Public Service' || career.category === 'Education' || career.category === 'Healthcare') return 95;
      if (career.primaryRiasec.includes('S')) return 90;
      return 45;

    case 'numerical':
      // Heavily weights Commerce, Finance & Conventional
      if (career.category === 'Finance' || career.category === 'Commerce') return 96;
      if (career.primaryRiasec.includes('C')) return 90;
      return 45;

    case 'comprehensive':
    default:
      return 75;
  }
}

/**
 * Generate Top Career Recommendations with transparent scoring explanations
 */
export function generateCareerRecommendations(
  careers: Career[],
  profile: StudentProfile
): CareerRecommendationMatch[] {
  const activeCategory = profile.activeAssessmentCategory || 'comprehensive';

  const matches: CareerRecommendationMatch[] = careers.map(career => {
    // 1. RIASEC Alignment
    const riasecMatch = calculateRiasecCosineSimilarity(profile.riasecScores, career.riasecWeights);

    // 2. Category Aptitude Fit
    const categoryFit = calculateCategoryAptitudeFit(career, activeCategory);

    // 3. Subject Overlap
    const subjectMatch = calculateSubjectOverlap(profile.preferredSubjects, career.requiredSchoolSubjects);

    // 4. Skill & Work Activity Fit
    const skillFit = calculateSkillActivityFit(
      profile.interests,
      profile.selfReportedStrengths,
      profile.preferredWorkActivities,
      career.coreSkills,
      career.dailyResponsibilities
    );

    // 5. Budget & Pathway Readiness (Never disqualify low budget!)
    let pathwayFit = 80;
    if (profile.budgetTier === 'low' || profile.budgetTier === 'scholarship_needed') {
      if (career.vocationalLowCostPathway.available || career.diplomaPathway.available) {
        pathwayFit = 95;
      }
    }

    // Weighted Overall Score:
    // When specific aptitude test is chosen: 40% Category Aptitude, 30% RIASEC, 15% Subjects, 15% Skill/Pathway
    // Comprehensive: 45% RIASEC, 25% Subject, 15% Skill, 15% Pathway
    let overallScore: number;
    let scoringMethodExplained: string;

    if (activeCategory !== 'comprehensive') {
      overallScore = Math.round(
        categoryFit * 0.40 +
        riasecMatch * 0.30 +
        subjectMatch * 0.15 +
        pathwayFit * 0.15
      );
      scoringMethodExplained = `Weighted Formula (${activeCategory.toUpperCase()} Mode): 40% Specific Aptitude Fit, 30% RIASEC Alignment, 15% Subject Overlap, 15% Pathway Readiness.`;
    } else {
      overallScore = Math.round(
        riasecMatch * 0.45 +
        subjectMatch * 0.25 +
        skillFit * 0.15 +
        pathwayFit * 0.15
      );
      scoringMethodExplained = `Weighted Formula (Comprehensive Mode): 45% RIASEC Interest Match, 25% Subject Overlap, 15% Skill Inventory Fit, 15% Pathway Feasibility.`;
    }

    // Dynamic match reasons
    const matchReasons: string[] = [];
    if (categoryFit >= 85) {
      matchReasons.push(`Strong alignment with your ${activeCategory.toUpperCase()} assessment strengths.`);
    }
    if (riasecMatch >= 75) {
      matchReasons.push(`High compatibility with your dominant ${career.primaryRiasec.join('-')} personality traits.`);
    }
    if (subjectMatch >= 70) {
      matchReasons.push(`Strong synergy with your preferred school subjects (${career.requiredSchoolSubjects.slice(0, 2).join(', ')}).`);
    }
    if (career.vocationalLowCostPathway.available) {
      matchReasons.push(`Offers low-cost, zero-debt government entry routes (${career.vocationalLowCostPathway.name}).`);
    }

    const potentialChallenges: string[] = [
      `Requires rigorous consistency in ${career.requiredSchoolSubjects.slice(0, 2).join(' & ')}.`,
      `Competitive entrance exam requirement (${career.entranceExams[0]?.name || 'Standard Admission'}).`
    ];

    const lowCostAlternativeAdvice = career.vocationalLowCostPathway.available
      ? `Government Alternative: ${career.vocationalLowCostPathway.name} at ${career.vocationalLowCostPathway.institutes} (${career.vocationalLowCostPathway.costPerYear}).`
      : `Explore Central/State Government universities or polytechnics with subsidized fee structures.`;

    const scholarshipOpportunities: string[] = [
      'National Scholarship Portal (NSP) Central Sector Scheme',
      'State Post-Matric & Merit-cum-Means Scholarships',
      'Vidyalakshmi Education Loan Scheme with Central Interest Subsidy (CSIS)'
    ];

    return {
      career,
      overallScore: Math.min(99, Math.max(30, overallScore)),
      breakdown: {
        assessmentMatch: activeCategory !== 'comprehensive' ? categoryFit : riasecMatch,
        subjectMatch,
        skillFit,
        pathwayFit
      },
      scoringMethodExplained,
      matchReasons,
      requiredEducation: career.ugPathway.degrees[0] || 'Bachelor Degree or Equivalent Diploma',
      requiredSkills: career.coreSkills,
      relevantSubjects: career.requiredSchoolSubjects,
      possibleDegrees: career.ugPathway.degrees,
      entranceExams: career.entranceExams.map(e => e.name),
      alternativePathways: [
        career.diplomaPathway.available ? career.diplomaPathway.name : 'State Polytechnic Diploma',
        career.vocationalLowCostPathway.available ? career.vocationalLowCostPathway.name : 'Open Learning (IGNOU/SWAYAM)'
      ],
      futureOpportunities: career.futureSkillTrends.join(', '),
      potentialChallenges,
      lowCostAlternativeAdvice,
      scholarshipOpportunities
    };
  });

  // Sort descending by overallScore
  return matches.sort((a, b) => b.overallScore - a.overallScore);
}
