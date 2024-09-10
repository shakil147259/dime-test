import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
} from "../../../../../shared/components";

import { CampaignsInfo } from "./components/campaignsInfo";
import { ResponseInfo } from "./components/responseInfo";
import { ProfilesInfo } from "./components/profilesInfo";
import { RootState } from "../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addCampaign,
  addMediaProfile,
  addResponseToCampaign,
  updateMarketingInfo,
} from "./store/marketingInfoSlice";
import { uniqueKey } from "../../../../../utils";

export const Marketing = () => {
  const state = useSelector((state: RootState) => state.marketingInfo);
  const dispatch = useDispatch();
  const marketinCampaignsSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addCampaign({ index: state.marketinCampaigns.length }));
        }}
      >
        <IconPlus />
        Add Marketing Campaign
      </Button>
      {state.marketinCampaigns.map((_, i) => {
        return <CampaignsInfo index={i} itemKey={`campaign-${1}`} />;
      })}
    </div>
  );

  const responseSection = (
    <div className="policy my-10 flex flex-col gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(
            addResponseToCampaign({ index: state.responseToCampaigns.length })
          );
        }}
      >
        <IconPlus />
        Add Response to Campaigns
      </Button>
      {state.responseToCampaigns.map((_, i) => {
        return (
          <ResponseInfo
            index={i}
            itemKey={uniqueKey(`marketing_response_${i}`)}
          />
        );
      })}
    </div>
  );

  const interestsSection = (
    <div className="interests my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input
          label="Interest and Preferences"
          labelOutlined
          value={state.interestsAndPreference}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(
              updateMarketingInfo({
                key: "interestsAndPreference",
                value,
              })
            );
          }}
        />
      </div>
    </div>
  );

  const profilesSection = (
    <div className="profiles my-10 flex flex-col gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addMediaProfile({ index: state.mediaProfiles.length }));
        }}
      >
        <IconPlus />
        Add Asset
      </Button>
      {state.mediaProfiles.map((_, i) => {
        return <ProfilesInfo index={i} itemKey={`media_profile_${i}`} />;
      })}
    </div>
  );

  return (
    <>
      <Label as="h2">Marketing Campaigns</Label>
      <Divider />

      {marketinCampaignsSection}

      <Label as="h2">Responses to Campaigns</Label>
      <Divider />

      {responseSection}

      <Label as="h2">Interests and Preferances</Label>
      <Divider />

      {interestsSection}

      <Label as="h2">Social Media Profiles</Label>
      <Divider />

      {profilesSection}
    </>
  );
};

export default Marketing;
