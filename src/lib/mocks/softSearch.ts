import { ApplicationFlags } from '@/store/applicationStore';

export interface SoftSearchPayload {
  loan_amount: number;
  monthly_net_income: number;
  total_net_income_monthly?: number;
  employment_status: string;
  licence_type: string;
  uk_resident: boolean;
  age_check: boolean;
  flags: ApplicationFlags;
  dob?: string;
}

export interface SoftSearchResult {
  status: 'approved' | 'referred' | 'declined';
  maxLend?: number;
  message?: string;
  reference?: string;
  nextSteps?: string[];
}

/**
 * Mock soft credit search logic
 * Uses application flags and basic criteria to determine outcome
 */
export const softSearch = async (payload: SoftSearchPayload): Promise<SoftSearchResult> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

  const {
    loan_amount,
    monthly_net_income,
    total_net_income_monthly,
    employment_status,
    licence_type,
    uk_resident,
    age_check,
    flags,
  } = payload;

  const effectiveIncome = total_net_income_monthly || monthly_net_income;
  const reference = `WCF${Date.now().toString().slice(-8)}`;

  // DECLINED scenarios
  if (!uk_resident) {
    return {
      status: 'declined',
      message: 'Unfortunately, we can only offer finance to UK residents.',
      reference,
    };
  }

  if (!age_check) {
    return {
      status: 'declined',
      message: 'You must be 18 or over to apply.',
      reference,
    };
  }

  if (effectiveIncome < 800) {
    return {
      status: 'declined',
      message: 'Your income does not meet our minimum lending criteria at this time.',
      reference,
    };
  }

  if (licence_type === 'none' || licence_type === '') {
    return {
      status: 'declined',
      message: 'A valid driving licence is required for vehicle finance.',
      reference,
    };
  }

  // REFERRED scenarios - require manual review
  const referralReasons: string[] = [];

  if (flags.low_income && effectiveIncome >= 800) {
    referralReasons.push('Income verification required');
  }

  if (flags.non_uk_licence) {
    referralReasons.push('Non-UK licence verification needed');
  }

  if (flags.address_history_insufficient) {
    referralReasons.push('Additional address history required');
  }

  if (flags.employment_history_short) {
    referralReasons.push('Employment history verification needed');
  }

  if (employment_status === 'self_employed' && loan_amount > 15000) {
    referralReasons.push('Self-employed high-value application');
  }

  if (employment_status === 'benefits' || employment_status === 'carer' || employment_status === 'homemaker') {
    referralReasons.push('Income type requires manual review');
  }

  // Calculate affordability-based max lend
  // Rule of thumb: max monthly payment ~25% of net income, over 48 months at ~9% APR
  const maxMonthlyPayment = effectiveIncome * 0.25;
  const estimatedMaxLend = Math.floor((maxMonthlyPayment * 48) / 1.15); // rough discount for interest

  if (loan_amount > estimatedMaxLend * 1.2) {
    referralReasons.push('Loan amount exceeds affordability estimate');
  }

  // REFERRED if any flags
  if (referralReasons.length > 0) {
    return {
      status: 'referred',
      message: 'Your application requires manual review by our underwriting team.',
      maxLend: Math.min(estimatedMaxLend, 50000),
      reference,
      nextSteps: [
        'Our team will review your application within 2 hours',
        'We may request additional documents',
        'You will be contacted via email and SMS',
      ],
    };
  }

  // APPROVED - clean application with good affordability
  const calculatedMaxLend = Math.min(estimatedMaxLend, 50000);

  if (loan_amount > calculatedMaxLend) {
    return {
      status: 'approved',
      maxLend: calculatedMaxLend,
      message: `Great news! You're approved for up to £${calculatedMaxLend.toLocaleString()}.`,
      reference,
      nextSteps: [
        'Choose your vehicle',
        'Complete a full credit check',
        'Sign your agreement',
      ],
    };
  }

  return {
    status: 'approved',
    maxLend: calculatedMaxLend,
    message: `Congratulations! You're approved for up to £${calculatedMaxLend.toLocaleString()}.`,
    reference,
    nextSteps: [
      'Choose your vehicle',
      'Complete a full credit check',
      'Sign your agreement',
    ],
  };
};
