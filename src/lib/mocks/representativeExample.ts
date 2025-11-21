export interface RepresentativeExample {
  apr: number;
  rate: number;
  term: number;
  amountBorrowed: number;
  totalPayable: number;
  monthlyPayment: number;
  totalInterest: number;
}

/**
 * Get representative example for a given loan amount
 * Representative APR: 14.9% (fixed for example)
 */
export const getRepresentativeExample = (loanAmount: number = 10000): RepresentativeExample => {
  const apr = 14.9;
  const rate = apr / 100;
  const term = 48; // 4 years in months

  // Monthly interest rate
  const monthlyRate = rate / 12;

  // Calculate monthly payment using amortization formula
  // M = P * [i(1 + i)^n] / [(1 + i)^n - 1]
  const monthlyPayment = Math.round(
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term))) /
      (Math.pow(1 + monthlyRate, term) - 1)
  );

  const totalPayable = monthlyPayment * term;
  const totalInterest = totalPayable - loanAmount;

  return {
    apr,
    rate,
    term,
    amountBorrowed: loanAmount,
    totalPayable,
    monthlyPayment,
    totalInterest,
  };
};

/**
 * Format representative example as disclosure text
 */
export const formatRepresentativeDisclosure = (example?: RepresentativeExample): string => {
  const ex = example || getRepresentativeExample();
  
  return `Representative Example: Borrowing £${ex.amountBorrowed.toLocaleString()} over ${ex.term} months at a representative APR of ${ex.apr}% (fixed). Monthly payment £${ex.monthlyPayment.toLocaleString()}. Total amount payable £${ex.totalPayable.toLocaleString()} including interest of £${ex.totalInterest.toLocaleString()}.`;
};
