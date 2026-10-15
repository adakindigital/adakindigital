const WEEKS_PER_MONTH = 4.33;

// Midpoints of the Starter ranges on the pricing page, used for an indicative payback only.
export const STARTER_SETUP = 45000;
export const STARTER_MONTHLY = 5000;
const RENT_TO_OWN_MONTHS = 36;
const FINANCING_PREMIUM = 0.12;

export function calculateCost(inputs) {
  const people = Math.max(0, Number(inputs.people) || 0);
  const hoursPerWeek = Math.max(0, Number(inputs.hoursPerWeek) || 0);
  const hourlyCost = Math.max(0, Number(inputs.hourlyCost) || 0);
  const errorsPerMonth = Math.max(0, Number(inputs.errorsPerMonth) || 0);
  const errorCost = Math.max(0, Number(inputs.errorCost) || 0);
  const recoveredShare = Math.min(1, Math.max(0, Number(inputs.recoveredShare) || 0));

  const adminHoursPerMonth = people * hoursPerWeek * WEEKS_PER_MONTH;
  const labourCostPerMonth = adminHoursPerMonth * hourlyCost;
  const errorCostPerMonth = errorsPerMonth * errorCost;
  const monthlyCost = labourCostPerMonth + errorCostPerMonth;

  const monthlySaving = monthlyCost * recoveredShare;
  const rentToOwnMonthly =
    (STARTER_SETUP * (1 + FINANCING_PREMIUM)) / RENT_TO_OWN_MONTHS + STARTER_MONTHLY;
  const netMonthlyBenefit = monthlySaving - STARTER_MONTHLY;
  const paybackMonths = netMonthlyBenefit > 0 ? STARTER_SETUP / netMonthlyBenefit : null;

  return {
    adminHoursPerMonth,
    adminHoursPerYear: adminHoursPerMonth * 12,
    labourCostPerMonth,
    errorCostPerMonth,
    monthlyCost,
    annualCost: monthlyCost * 12,
    annualSaving: monthlySaving * 12,
    rentToOwnMonthly,
    paybackMonths,
    coversRentToOwn: monthlySaving >= rentToOwnMonthly,
  };
}

const randFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  maximumFractionDigits: 0,
});

export const formatRand = (value) => randFormatter.format(Math.round(value));
export const formatNumber = (value) => new Intl.NumberFormat('en-ZA').format(Math.round(value));
