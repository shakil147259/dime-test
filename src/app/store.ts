import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "../pages/client/components/tabs/basicInfo/store/basicInfoSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
