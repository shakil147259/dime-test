export interface MarketingInfoShape {
  marketinCampaigns: MarketinCampaignType[];
  responseToCampaigns: ResponseToCampaignsType[];
  interestsAndPreference: string;
  mediaProfiles: MediaProfilesType[];
}

export interface MarketinCampaignType {
  index: number;
  campaignName: string;
  dateSent: string;
}

export interface ResponseToCampaignsType {
  index: number;
  campaignName: string;
  response: string;
}
export interface MediaProfilesType {
  index: number;
  platform: string;
  profileUrl: string;
}

export type MarketingInfoUpdatePayload<K extends keyof MarketingInfoShape> = {
  key: K;
  value: MarketingInfoShape[K];
};

export enum Social_Media {
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  LINKEDIN = "linkedin",
  YOUTUBE = "youtube",
  OTHER = "other",
}
