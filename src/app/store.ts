import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../pages/client/components/tabs/basicInfo/store/basicInfoSlice";
import insuranceReducer from "../pages/client/components/tabs/insurance/store/insuranceSlice";
import financialInfoReducer from "../pages/client/components/tabs/financials/store/financialInfoSlice";
import relationshipReducer from "../pages/client/components/tabs/relationships/store/relationShipSlice";
import marketingInfoReducer from "../pages/client/components/tabs/marketing/store/marketingInfoSlice";
import complianceInfoReducer from "../pages/client/components/tabs/compliance/store/complianceSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    insuranceInfo: insuranceReducer,
    financialInfo: financialInfoReducer,
    relationshipInfo: relationshipReducer,
    marketingInfo: marketingInfoReducer,
    complianceInfo: complianceInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
