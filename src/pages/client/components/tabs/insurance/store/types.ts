export interface InsuranceShape {
  policyNumber: string;
  policyType: string;
  policyStartDate: string;
  policyEndDate: string;
  coverageAmount: number | string;
  premiumAmount: number | string;
  paymentFrequency: string;
  beneFiciaries: BeneficiariesType[];
}

export interface BeneficiariesType {
  index: number;
  name: string;
  relationship: string;
  percentage: number | string;
}

export type InsuranceUpdatePayload<K extends keyof InsuranceShape> = {
  key: K;
  value: InsuranceShape[K];
};

export enum POLICY_TYPE {
  TERM_LIFE = "term_life",
  HOME = "Home",
  AUTO = "Auto",
}

export enum PAYMENT_FREQUENCY {
  MONTHLY = "monthly",
  QUARTERLY = "quarterly",
  SEMI_ANNUAL = "semi_annual",
  ANNUAL = "annual",
}

export enum RELATIONSHIP {
  SELF = "Self",
  SPOUSE = "Spouse",
  CHILDREN = "Children",
  OTHER = "Other",
}
