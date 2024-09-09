import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MarketinCampaignType,
  MarketingInfoShape,
  MarketingInfoUpdatePayload,
  MediaProfilesType,
  ResponseToCampaignsType,
} from "./types";

const initialState: MarketingInfoShape = {
  marketinCampaigns: [],
  responseToCampaigns: [],
  interestsAndPreference: "",
  mediaProfiles: [],
};

const marketingInfoSlice = createSlice({
  name: "marketingInfo",
  initialState,
  reducers: {
    updateMarketingInfo<K extends keyof MarketingInfoShape>(
      state: MarketingInfoShape,
      action: PayloadAction<MarketingInfoUpdatePayload<K>>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetMarketingInfo() {
      return initialState;
    },

    addCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.marketinCampaigns.push({
        index,
        campaignName: "",
        dateSent: "",
      });
    },
    updateCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<Partial<MarketinCampaignType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.marketinCampaigns[index] = {
        ...state.marketinCampaigns[index],
        ...updates,
      };
    },
    removeCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.marketinCampaigns = state.marketinCampaigns.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },

    addResponseToCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.responseToCampaigns.push({
        index,
        campaignName: "",
        response: "",
      });
    },
    updateResponseToCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<
        Partial<ResponseToCampaignsType> & { index: number }
      >
    ) {
      const { index, ...updates } = action.payload;
      state.responseToCampaigns[index] = {
        ...state.responseToCampaigns[index],
        ...updates,
      };
    },
    removeResponseToCampaign(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.responseToCampaigns = state.responseToCampaigns.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },

    addMediaProfile(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.mediaProfiles.push({
        index,
        platform: "",
        profileUrl: "",
      });
    },
    updateMediaProfile(
      state: MarketingInfoShape,
      action: PayloadAction<Partial<MediaProfilesType> & { index: number }>
    ) {
      const { index, ...updates } = action.payload;
      state.mediaProfiles[index] = {
        ...state.mediaProfiles[index],
        ...updates,
      };
    },
    removeMediaProfile(
      state: MarketingInfoShape,
      action: PayloadAction<{ index: number }>
    ) {
      const { index } = action.payload;
      state.mediaProfiles = state.mediaProfiles.filter(
        (_, itemIndex) => itemIndex !== index
      );
    },
  },
});

export const {
  updateMarketingInfo,
  resetMarketingInfo,

  addCampaign,
  updateCampaign,
  removeCampaign,

  addMediaProfile,
  updateMediaProfile,
  removeMediaProfile,

  addResponseToCampaign,
  updateResponseToCampaign,
  removeResponseToCampaign,
} = marketingInfoSlice.actions;

export default marketingInfoSlice.reducer;
