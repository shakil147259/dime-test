import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplianceInfoUpdatePayload, ComplianceShape } from "./types";

const initialState: ComplianceShape = {
  consentForDataStorages: "",
  GDPRStatus: "",
};

const complianceInfoSlice = createSlice({
  name: "complianceInfo",
  initialState,
  reducers: {
    complianceInfoUpdate<K extends keyof ComplianceShape>(
      state: ComplianceShape,
      action: PayloadAction<ComplianceInfoUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { complianceInfoUpdate } = complianceInfoSlice.actions;
export default complianceInfoSlice.reducer;
