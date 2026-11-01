export type CollegeTier = 'govt' | 'private_tier2' | 'private_tier1' | 'open_vocational';

export interface ROICalculatorInput {
  collegeTier: CollegeTier;
  durationYears: number; // e.g. 2, 3, 4, 5
  familyAnnualBudget: number; // e.g. ₹50,000
  annualTuitionEstimate: number; // base tuition
  annualHostelLivingCost: number; // living expenses
  loanAmount: number; // student loan taken
  loanInterestRatePercent: number; // e.g. 9.0%
  loanTenureYears: number; // e.g. 7 years
  scholarshipDeductionPerYear: number; // e.g. ₹50,000
  indicativeEntrySalaryAnnual: number; // e.g. ₹6,00,000
  isZeroDebtPathway: boolean;
}

export interface ROICalculatorResult {
  totalEstimatedCost: number;
  totalScholarshipSavings: number;
  netFamilyOutOfPocket: number;
  monthlyEMI: number;
  totalLoanRepayment: number;
  estimatedPaybackPeriodYears: number;
  zeroDebtFeasible: boolean;
  zeroDebtInstitutesAdvice: string;
}

/**
 * Standard Reducing Balance EMI Formula:
 * E = P * r * (1 + r)^n / ((1 + r)^n - 1)
 */
export function calculateMonthlyEMI(principal: number, annualInterestRate: number, tenureYears: number): number {
  if (principal <= 0 || tenureYears <= 0) return 0;
  
  const monthlyRate = annualInterestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  if (monthlyRate === 0) return Math.round(principal / totalMonths);

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
              (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return Math.round(emi);
}

export function computeCareerROI(input: ROICalculatorInput): ROICalculatorResult {
  let annualTuition = input.annualTuitionEstimate;
  let annualLiving = input.annualHostelLivingCost;
  let scholarshipPerYear = input.scholarshipDeductionPerYear;

  // Zero-Debt Pathway adjustments
  if (input.isZeroDebtPathway) {
    if (input.collegeTier === 'open_vocational' || input.collegeTier === 'govt') {
      annualTuition = Math.min(15000, annualTuition * 0.2); // ITI / Govt polytechnic / IGNOU subsidized fee
      annualLiving = Math.min(25000, annualLiving * 0.4); // home stay or rural hostel
      scholarshipPerYear = Math.max(12000, scholarshipPerYear);
    } else {
      // Shift toward public or subsidized degree
      annualTuition = 40000;
      annualLiving = 45000;
      scholarshipPerYear = 20000;
    }
  }

  const grossTotalStudyCost = (annualTuition + annualLiving) * input.durationYears;
  const totalScholarshipSavings = Math.min(grossTotalStudyCost, scholarshipPerYear * input.durationYears);
  const netStudyCost = Math.max(0, grossTotalStudyCost - totalScholarshipSavings);

  const familyTotalContribution = input.familyAnnualBudget * input.durationYears;
  
  // Effective loan needed
  const calculatedLoanPrincipal = input.isZeroDebtPathway 
    ? 0 
    : Math.max(0, input.loanAmount > 0 ? input.loanAmount : Math.max(0, netStudyCost - familyTotalContribution));

  const monthlyEMI = input.isZeroDebtPathway ? 0 : calculateMonthlyEMI(calculatedLoanPrincipal, input.loanInterestRatePercent, input.loanTenureYears);
  const totalLoanRepayment = monthlyEMI * (input.loanTenureYears * 12);
  const netFamilyOutOfPocket = Math.max(0, netStudyCost - calculatedLoanPrincipal);

  // Payback period = (Total loan repaid + net out of pocket) / (estimated annual post-tax entry savings)
  // Assume a graduate can allocate ~35% of their entry salary toward family repayment / loan closure
  const annualRepaymentCapacity = Math.max(60000, input.indicativeEntrySalaryAnnual * 0.35);
  const totalCostToRecover = calculatedLoanPrincipal > 0 ? totalLoanRepayment + netFamilyOutOfPocket : netFamilyOutOfPocket;
  
  const estimatedPaybackPeriodYears = Math.max(0.4, Number((totalCostToRecover / annualRepaymentCapacity).toFixed(1)));

  let zeroDebtAdvice = '';
  if (input.isZeroDebtPathway) {
    zeroDebtAdvice = 'Zero-Debt Pathway Active: Leveraging Government Polytechnic / ITI / Central University fee waivers and NPTEL credits. Zero commercial bank loans required.';
  } else if (estimatedPaybackPeriodYears > 4.5) {
    zeroDebtAdvice = 'Notice: High loan burden relative to entry salary. Consider applying for AICTE Pragati/Saksham scholarships or opting for government polytechnic/central university entrance.';
  } else {
    zeroDebtAdvice = 'Healthy Financial Profile: Estimated payback period is under 3 years with manageable Vidyalakshmi public-sector EMI rates.';
  }

  return {
    totalEstimatedCost: grossTotalStudyCost,
    totalScholarshipSavings,
    netFamilyOutOfPocket,
    monthlyEMI,
    totalLoanRepayment,
    estimatedPaybackPeriodYears,
    zeroDebtFeasible: input.familyAnnualBudget >= annualTuition,
    zeroDebtInstitutesAdvice: zeroDebtAdvice
  };
}

