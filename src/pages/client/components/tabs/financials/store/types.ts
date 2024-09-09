export interface FinancialInfoShape {
  incomeSources: IncomeSourcesType[];
  assets: AssetsType[];
  debts: DebtsType[];
  creditScore: number | string;
  taxBracket: number | string;
}

export interface IncomeSourcesType {
  index: number;
  incomeSource: string;
  annualIncome: string;
}

export interface AssetsType {
  index: number;
  asset: string;
  value: number | string;
}

export interface DebtsType {
  index: number;
  debt: string;
  value: number | string;
}

export type FinancialInfoUpdatePayload<K extends keyof FinancialInfoShape> = {
  key: K;
  value: FinancialInfoShape[K];
};
