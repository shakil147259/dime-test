import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../pages/client/components/tabs/basicInfo/store/basicInfoSlice";
import insuranceReducer from "../pages/client/components/tabs/insurance/store/insuranceSlice";
import financialInfoReducer from "../pages/client/components/tabs/financials/store/financialInfoSlice";
import relationshipReducer from "../pages/client/components/tabs/relationships/store/relationShipSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    insuranceInfo: insuranceReducer,
    financialInfo: financialInfoReducer,
    relationshipInfo: relationshipReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
