import { z } from "zod";

export const applyFormSchema = z.object({
  // Step 1
  loanAmount: z.number({
    required_error: "Please enter a loan amount",
    invalid_type_error: "Loan amount must be a number",
  }).min(4000, "Minimum loan amount is £4,000"),


  // Step 2
  loanAmountSpecific: z.string().optional(),

  // Step 3
  vehicleType: z.string().min(1, "Please select a vehicle type"),

  // Step 4
  employmentStatus: z.string().min(1, "Please select your employment status"),

  // ✅ FIXED: REMOVE root jobTitle/employerName
  employerPhone: z
  .string()
  .min(10, "Contact number is required")
  .regex(/^[0-9+\s()-]+$/, "Enter a valid phone number"),
  yearsInEmploymentStatus: z.string().optional(),

  // ✅ ADD THIS (MAIN FIX)
  employmentHistory: z.array(
    z.object({
      employerName: z.string().min(1, "Employer name is required"),
      jobTitle: z.string().min(2, "Job title is required (minimum 2 characters)"),
      yearsAtEmployment: z.string().min(1, "Please select years"),
      monthsAtEmployment: z.string().optional(),
    })
  ).optional(),

  // Step 6
  annualIncome: z.string().min(1, "Please select your monthly income")
    .refine((value) => {
      const income = parseFloat(value);
      return income >= 1200;
    }, {
      message: "Minimum monthly income of £1,200 is required for finance applications"
    }),

  // Step 7
  housingStatus: z.string().min(1, "Please select your housing status"),

  // Step 8
  dateOfBirth: z.string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 21;
      }
      return age >= 21;
    }, "You must be at least 21 years old to apply"),

  // Step 9
  ukResident: z.string().min(1, "Please confirm your UK residency status"),

  // Step 10
  licenceType: z.string().min(1, "Please select your licence type"),

  // Step 11
  title: z.string().min(1, "Please select your title"),
  firstName: z.string()
    .min(2, "First name must be at least 2 characters"),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters"),

  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  // Step 12
  maritalStatus: z.string().min(1, "Please select your marital status"),

  // Step 13
  addressHistory: z.array(
    z.object({
      postcode: z.string().min(1, "Postcode is required"),
      address: z.string().min(10, "Please enter your full address"),
      yearsAtAddress: z.string().min(1, "Please select years at address"),
      monthsAtAddress: z.string().optional(),
    })
  ).min(1, "At least one address is required"),

  // Step 14
  partnerConsent: z.literal(true, {
    errorMap: () => ({ message: "Required" }),
  }),
  creditConsent: z.literal(true, {
    errorMap: () => ({ message: "Required" }),
  }),
  termsConsent: z.literal(true, {
    errorMap: () => ({ message: "Required" }),
  }),

}).superRefine((data, ctx) => {

  /* ADDRESS VALIDATION */
  const totalYears = data.addressHistory.reduce((sum, addr) => {
    const years = parseInt(addr.yearsAtAddress || "0");

    const months =
      addr.yearsAtAddress === "0"
        ? parseInt(addr.monthsAtAddress || "0")
        : 0;

    return sum + years + months / 12;
  }, 0);

  const totalYearsRounded = Math.round(totalYears * 100) / 100;

  if (totalYearsRounded < 3) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "You must provide at least 3 years of address history",
      path: ["addressHistory"],
    });
  }

  

  /* EMPLOYMENT VALIDATION */
  if (
    data.employmentStatus === "Full-time Employed" ||
    data.employmentStatus === "Part-time Employed"
  ) {
    data.employmentHistory?.forEach((job, index) => {
      if (job.yearsAtEmployment === "0" && !job.monthsAtEmployment) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select months",
          path: ["employmentHistory", index, "monthsAtEmployment"],
        });
      }
    });
  }

  /* NON-EMPLOYED VALIDATION */
  if (
    [
      "Self-employed",
      "Benefits",
      "Unemployed",
      "Retired",
      "Student",
      "Armed Forces",
      "Homemaker",
      "Carer"
    ].includes(data.employmentStatus)
  ) {
    if (!data.yearsInEmploymentStatus) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select how long you've been in this employment status",
        path: ["yearsInEmploymentStatus"],
      });
    }
  }
});

export type ApplyFormData = z.infer<typeof applyFormSchema>;