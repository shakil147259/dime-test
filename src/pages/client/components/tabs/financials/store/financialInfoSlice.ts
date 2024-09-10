import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AssetsType,
  DebtsType,
  FinancialInfoShape,
  FinancialInfoUpdatePayload,
  IncomeSourcesType,
} from "./types";

const initialState: FinancialInfoShape = {
  assets: [],
  debts: [],
  incomeSources: [],
  creditScore: "",
  taxBracket: "",
};

const financialInfoSlice = createSlice({
  name: "financialInfo",
  initialState,
  reducers: {
    financialInfoUpdate<K extends keyof FinancialInfoShape>(
      state: FinancialInfoShape,
      action: PayloadAction<FinancialInfoUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetFinancialInfo() {
      return initialState;
    },
    addIncome(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.incomeSources.push({
        index,
        incomeSource: "",
        annualIncome: "",
      });
    },
    updateIncome(
      state: FinancialInfoShape,
      action: PayloadAction<Partial<IncomeSourcesType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.incomeSources[index] = {
        ...state.incomeSources[index],
        ...updates,
      };
    },
    removeIncome(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.incomeSources = state.incomeSources.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },

    addAssets(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.assets.push({
        index,
        asset: "",
        value: "",
      });
    },
    updateAssets(
      state: FinancialInfoShape,
      action: PayloadAction<Partial<AssetsType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.assets[index] = {
        ...state.assets[index],
        ...updates,
      };
    },
    removeAssets(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.assets = state.assets.filter((_, itemIndex) => itemIndex !== index);
    },

    addDebts(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.debts.push({
        index,
        debt: "",
        value: "",
      });
    },
    updateDebts(
      state: FinancialInfoShape,
      action: PayloadAction<Partial<DebtsType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.debts[index] = {
        ...state.debts[index],
        ...updates,
      };
    },
    removeDebts(
      state: FinancialInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.debts = state.debts.filter((_, itemIndex) => itemIndex !== index);
    },
  },
});
export const {
  financialInfoUpdate,
  resetFinancialInfo,

  addIncome,
  updateIncome,
  removeIncome,

  addAssets,
  updateAssets,
  removeAssets,

  addDebts,
  updateDebts,
} = financialInfoSlice.actions;
export default financialInfoSlice.reducer;
