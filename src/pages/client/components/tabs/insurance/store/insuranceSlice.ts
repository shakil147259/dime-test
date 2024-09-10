import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BeneficiariesType,
  InsuranceShape,
  InsuranceUpdatePayload,
} from "./types";

const initialState: InsuranceShape = {
  policyNumber: "",
  policyType: "",
  policyStartDate: "",
  policyEndDate: "",
  coverageAmount: "",
  premiumAmount: "",
  paymentFrequency: "",
  beneFiciaries: [],
};

const insuranceSlice = createSlice({
  name: "insuranceInfo",
  initialState,
  reducers: {
    insuranceUpdate<K extends keyof InsuranceShape>(
      state: InsuranceShape,
      action: PayloadAction<InsuranceUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },

    resetInsurance() {
      return initialState;
    },

    addBeneficiary(
      state: InsuranceShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.beneFiciaries.push({
        index,
        name: "",
        percentage: "",
        relationship: "",
      });
    },

    updateBeneficiary(
      state: InsuranceShape,
      action: PayloadAction<Partial<BeneficiariesType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.beneFiciaries[index] = {
        ...state.beneFiciaries[index],
        ...updates,
      };
    },

    removeBeneficiary(
      state: InsuranceShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.beneFiciaries = state.beneFiciaries.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },
  },
});
export const {
  insuranceUpdate,
  resetInsurance,

  addBeneficiary,
  updateBeneficiary,
  removeBeneficiary,
} = insuranceSlice.actions;
export default insuranceSlice.reducer;
