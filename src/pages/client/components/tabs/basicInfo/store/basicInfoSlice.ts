import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicInfoShape, BasicInfoUpdatePayload } from "./types";

const initialState: BasicInfoShape = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  socialSecurityNumber: "",
  emailAddress: "",
  phoneNumber: "",
  referralSource: "",
  occupation: "",
  preferredContactMethod: "",
  servicePreference: "",
  employer: "",
  streetAddress: "",
  apartment: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
};

const basicInfoSlice = createSlice({
  name: "clientBasicInfo",
  initialState,
  reducers: {
    basicInfoUpdate<K extends keyof BasicInfoShape>(
      state: BasicInfoShape,
      action: PayloadAction<BasicInfoUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    basicInfoReset() {
      return initialState;
    },
  },
});
export const { basicInfoUpdate, basicInfoReset } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
