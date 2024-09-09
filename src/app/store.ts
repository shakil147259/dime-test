import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../pages/client/components/tabs/basicInfo/store/basicInfoSlice";
import insuranceReducer from "../pages/client/components/tabs/insurance/store/insuranceSlice";
import financialInfoReducer from "../pages/client/components/tabs/financials/store/financialInfoSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    insuranceInfo: insuranceReducer,
    financialInfo: financialInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
