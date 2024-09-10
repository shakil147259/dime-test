import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../pages/client/components/tabs/basicInfo/store/basicInfoSlice";
import insuranceReducer from "../pages/client/components/tabs/insurance/store/insuranceSlice";
import financialInfoReducer from "../pages/client/components/tabs/financials/store/financialInfoSlice";
import relationshipReducer from "../pages/client/components/tabs/relationships/store/relationShipSlice";
import marketingInfoReducer from "../pages/client/components/tabs/marketing/store/marketingInfoSlice";
import complianceInfoReducer from "../pages/client/components/tabs/compliance/store/complianceSlice";
import quotesInfoReducer from "../pages/client/components/tabs/insuranceQuotes/store/quotesSlice";

const appReducer = combineReducers({
  basicInfo: basicInfoReducer,
  insuranceInfo: insuranceReducer,
  financialInfo: financialInfoReducer,
  relationshipInfo: relationshipReducer,
  marketingInfo: marketingInfoReducer,
  complianceInfo: complianceInfoReducer,
  qtotesInfo: quotesInfoReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
