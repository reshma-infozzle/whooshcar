import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface Address {
  building_no?: string;
  building_name?: string;
  street: string;
  town: string;
  postcode: string;
}

export interface AddressHistoryEntry extends Address {
  residential_status: 'owner' | 'tenant' | 'living_with_parents' | 'other';
  address_duration_months: number;
}

export interface Employment {
  employment_status: 'employed' | 'self_employed' | 'benefits' | 'retired' | 'armed_forces' | 'homemaker' | 'carer' | 'education' | 'other';
  employer_name?: string;
  job_title?: string;
  employment_duration_months?: number;
  income_monthly?: number;
  benefit_types?: string[];
  benefit_income_monthly?: number;
  pension_income_monthly?: number;
}

export interface ApplicationFlags {
  low_income: boolean;
  non_uk_licence: boolean;
  address_history_insufficient: boolean;
  employment_history_short: boolean;
}

export interface ApplicationState {
  // Step 1: Start & Amount
  product_type: 'car' | 'van' | 'motorbike' | '';
  loan_amount: number;

  // Step 2: Basic Eligibility
  age_check: boolean;
  licence_type: 'full_uk' | 'provisional_uk' | 'eu_eea' | 'international' | 'none' | '';
  uk_resident: boolean;
  monthly_net_income: number;

  // Step 3: Personal Details
  title: string;
  first_name: string;
  last_name: string;
  dob: string; // DD/MM/YYYY
  marital_status: 'single' | 'married' | 'civil_partnership' | 'divorced' | 'widowed' | '';
  dependants_count: number;
  email: string;
  mobile: string;
  otp_verified: boolean;

  // Step 4: Address & History
  current_address: Address;
  residential_status: 'owner' | 'tenant' | 'living_with_parents' | 'other' | '';
  address_duration_months: number;
  previous_addresses: AddressHistoryEntry[];

  // Step 5: Employment & Income
  employment_status: 'employed' | 'self_employed' | 'benefits' | 'retired' | 'armed_forces' | 'homemaker' | 'carer' | 'education' | 'other' | '';
  employments: Employment[];
  benefit_types: string[];
  benefit_income_monthly: number;
  pension_income_monthly: number;
  total_net_income_monthly: number;

  // Step 6: Vehicle & Budget
  deposit_amount: number;
  budget_monthly_band: '100-200' | '200-300' | '300-400' | '400-500' | '500+' | '';
  part_exchange: boolean;
  px_reg?: string;
  px_estimated_value?: number;
  annual_mileage: number;

  // Step 7: Consents & Marketing
  consent_terms_privacy: boolean;
  consent_credit_search_soft: boolean;
  consent_open_banking_pre: boolean;
  marketing_email: boolean;
  marketing_sms: boolean;
  marketing_whatsapp: boolean;

  // Flags
  flags: ApplicationFlags;

  // Metadata
  application_id?: string;
  created_at?: string;
  updated_at?: string;
}

interface ApplicationStore extends ApplicationState {
  // Actions
  updateField: <K extends keyof ApplicationState>(field: K, value: ApplicationState[K]) => void;
  updateFields: (fields: Partial<ApplicationState>) => void;
  addEmployment: (employment: Employment) => void;
  removeEmployment: (index: number) => void;
  addPreviousAddress: (address: AddressHistoryEntry) => void;
  removePreviousAddress: (index: number) => void;
  
  // Computed helpers
  sumAddressMonths: () => number;
  sumEmploymentMonths: () => number;
  updateFlags: () => void;
  
  // Reset
  resetApplication: () => void;
  clearDraft: () => void;
}

// Initial state
const initialState: ApplicationState = {
  product_type: '',
  loan_amount: 5000,
  
  age_check: false,
  licence_type: '',
  uk_resident: false,
  monthly_net_income: 0,
  
  title: '',
  first_name: '',
  last_name: '',
  dob: '',
  marital_status: '',
  dependants_count: 0,
  email: '',
  mobile: '',
  otp_verified: false,
  
  current_address: {
    street: '',
    town: '',
    postcode: '',
  },
  residential_status: '',
  address_duration_months: 0,
  previous_addresses: [],
  
  employment_status: '',
  employments: [],
  benefit_types: [],
  benefit_income_monthly: 0,
  pension_income_monthly: 0,
  total_net_income_monthly: 0,
  
  deposit_amount: 0,
  budget_monthly_band: '',
  part_exchange: false,
  annual_mileage: 10000,
  
  consent_terms_privacy: false,
  consent_credit_search_soft: false,
  consent_open_banking_pre: false,
  marketing_email: false,
  marketing_sms: false,
  marketing_whatsapp: false,
  
  flags: {
    low_income: false,
    non_uk_licence: false,
    address_history_insufficient: false,
    employment_history_short: false,
  },
};

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      updateField: (field, value) => {
        set({ [field]: value, updated_at: new Date().toISOString() });
        get().updateFlags();
      },

      updateFields: (fields) => {
        set({ ...fields, updated_at: new Date().toISOString() });
        get().updateFlags();
      },

      addEmployment: (employment) => {
        set((state) => ({
          employments: [...state.employments, employment],
          updated_at: new Date().toISOString(),
        }));
        get().updateFlags();
      },

      removeEmployment: (index) => {
        set((state) => ({
          employments: state.employments.filter((_, i) => i !== index),
          updated_at: new Date().toISOString(),
        }));
        get().updateFlags();
      },

      addPreviousAddress: (address) => {
        set((state) => ({
          previous_addresses: [...state.previous_addresses, address],
          updated_at: new Date().toISOString(),
        }));
        get().updateFlags();
      },

      removePreviousAddress: (index) => {
        set((state) => ({
          previous_addresses: state.previous_addresses.filter((_, i) => i !== index),
          updated_at: new Date().toISOString(),
        }));
        get().updateFlags();
      },

      sumAddressMonths: () => {
        const state = get();
        const currentMonths = state.address_duration_months || 0;
        const previousMonths = state.previous_addresses.reduce(
          (sum, addr) => sum + (addr.address_duration_months || 0),
          0
        );
        return currentMonths + previousMonths;
      },

      sumEmploymentMonths: () => {
        const state = get();
        return state.employments.reduce(
          (sum, emp) => sum + (emp.employment_duration_months || 0),
          0
        );
      },

      updateFlags: () => {
        const state = get();
        const totalIncome = state.total_net_income_monthly || state.monthly_net_income;
        
        set({
          flags: {
            low_income: totalIncome < 1200,
            non_uk_licence: state.licence_type !== 'full_uk' && state.licence_type !== '',
            address_history_insufficient: state.sumAddressMonths() < 36,
            employment_history_short: state.sumEmploymentMonths() < 12,
          },
        });
      },

      resetApplication: () => {
        set({
          ...initialState,
          application_id: undefined,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      },

      clearDraft: () => {
        localStorage.removeItem('whoosh-application-storage');
        set(initialState);
      },
    }),
    {
      name: 'whoosh-application-storage',
      partialize: (state) => ({
        // Don't persist sensitive data or flags (recalculated on load)
        product_type: state.product_type,
        loan_amount: state.loan_amount,
        age_check: state.age_check,
        licence_type: state.licence_type,
        uk_resident: state.uk_resident,
        monthly_net_income: state.monthly_net_income,
        title: state.title,
        first_name: state.first_name,
        last_name: state.last_name,
        dob: state.dob,
        marital_status: state.marital_status,
        dependants_count: state.dependants_count,
        email: state.email,
        mobile: state.mobile,
        current_address: state.current_address,
        residential_status: state.residential_status,
        address_duration_months: state.address_duration_months,
        previous_addresses: state.previous_addresses,
        employment_status: state.employment_status,
        employments: state.employments,
        benefit_types: state.benefit_types,
        benefit_income_monthly: state.benefit_income_monthly,
        pension_income_monthly: state.pension_income_monthly,
        total_net_income_monthly: state.total_net_income_monthly,
        deposit_amount: state.deposit_amount,
        budget_monthly_band: state.budget_monthly_band,
        part_exchange: state.part_exchange,
        px_reg: state.px_reg,
        px_estimated_value: state.px_estimated_value,
        annual_mileage: state.annual_mileage,
        consent_terms_privacy: state.consent_terms_privacy,
        consent_credit_search_soft: state.consent_credit_search_soft,
        consent_open_banking_pre: state.consent_open_banking_pre,
        marketing_email: state.marketing_email,
        marketing_sms: state.marketing_sms,
        marketing_whatsapp: state.marketing_whatsapp,
        updated_at: state.updated_at,
      }),
    }
  )
);
