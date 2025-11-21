import { z } from "zod";

// Validation schemas for each step
export const applyFormSchema = z.object({
  // Step 1
  loanAmount: z.string().min(1, "Please select a loan amount"),
  
  // Step 2 (conditional - only for Under £5,000)
  loanAmountSpecific: z.string().optional(),
  
  // Step 3
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  
  // Step 4
  employmentStatus: z.string().min(1, "Please select your employment status"),
  
  // Step 5 (conditional - for employed)
  employerName: z.string().optional(),
  employerPhone: z.string().optional(),
  jobTitle: z.string().optional(),
  // Step 5 (conditional - for others)
  yearsInEmploymentStatus: z.string().optional(),
  
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
        return age - 1 >= 18;
      }
      return age >= 18;
    }, "You must be at least 18 years old to apply"),
  
  // Step 9
  ukResident: z.string().min(1, "Please confirm your UK residency status"),
  
  // Step 10
  licenceType: z.string().min(1, "Please select your licence type"),
  
  // Step 11
  title: z.string().min(1, "Please select your title"),
  firstName: z.string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens and apostrophes"),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens and apostrophes"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^(?:(?:\+44\s?|0)(?:\d\s?){10})$/, "Please enter a valid UK phone number"),
  
  // Step 12
  maritalStatus: z.string().min(1, "Please select your marital status"),
  
  // Step 13 - Combined Address History
  addressHistory: z.array(z.object({
    postcode: z.string()
      .min(1, "Postcode is required")
      .regex(/^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i, "Please enter a valid UK postcode"),
    address: z.string()
      .min(1, "Address is required")
      .min(10, "Please enter your full address")
      .max(200, "Address must be less than 200 characters"),
    yearsAtAddress: z.string().min(1, "Please select years at address"),
  })).min(1, "At least one address is required"),
  
  // Step 14 - Consents
  creditCheckConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to a soft search to proceed"
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy"
  }),
  marketingConsent: z.boolean().optional(),
}).superRefine((data, ctx) => {
  // Calculate total years from address history
  const totalYears = data.addressHistory.reduce((sum, addr) => {
    const years = parseInt(addr.yearsAtAddress || "0");
    return sum + years;
  }, 0);
  
  if (totalYears < 3) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "You must provide at least 3 years of address history",
      path: ["addressHistory"],
    });
  }
  
  // If full-time or part-time employed, employer details are required
  if (data.employmentStatus === "Full-time Employed" || 
      data.employmentStatus === "Part-time Employed") {
    if (!data.employerName || data.employerName.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Employer name is required (minimum 2 characters)",
        path: ["employerName"],
      });
    }
    if (!data.jobTitle || data.jobTitle.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Job title is required (minimum 2 characters)",
        path: ["jobTitle"],
      });
    }
  }
  
  // If self-employed, benefits, unemployed, retired, student, armed forces, homemaker, or carer, years in status is required
  if (data.employmentStatus === "Self-employed" || 
      data.employmentStatus === "Benefits" ||
      data.employmentStatus === "Unemployed" || 
      data.employmentStatus === "Retired" ||
      data.employmentStatus === "Student" ||
      data.employmentStatus === "Armed Forces" ||
      data.employmentStatus === "Homemaker" ||
      data.employmentStatus === "Carer") {
    if (!data.yearsInEmploymentStatus || data.yearsInEmploymentStatus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select how long you've been in this employment status",
        path: ["yearsInEmploymentStatus"],
      });
    }
  }
});

export type ApplyFormData = z.infer<typeof applyFormSchema>;
