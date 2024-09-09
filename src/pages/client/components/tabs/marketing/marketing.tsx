import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
} from "../../../../../shared/components";
import { ReactNode, useState } from "react";
import { uniqueKey } from "../../../../../utils";

import { CampaignsInfo } from "./components/campaignsInfo";
import { ResponseInfo } from "./components/responseInfo";
import { ProfilesInfo } from "./components/profilesInfo";

export const Marketing = () => {
  const [marketingCampaigns, setMarketingCampaigns] = useState<ReactNode[]>([]);
  const [response, setResponse] = useState<ReactNode[]>([]);
  const [profiles, setProfiles] = useState<ReactNode[]>([]);

  const removeMarketingCampaigns = (indexToRemove: number) => {
    setMarketingCampaigns((prevCampaigns) =>
      prevCampaigns.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeResponse = (indexToRemove: number) => {
    setResponse((prevResponse) =>
      prevResponse.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeProfiles = (indexToRemove: number) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const marketinCampaignsSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setMarketingCampaigns((prev) => {
            const index = marketingCampaigns.length + 1;
            return [
              ...prev,
              <CampaignsInfo
                index={index}
                remove={removeMarketingCampaigns}
                key={uniqueKey(`beneficiaries-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Marketing Campaign
      </Button>
      {marketingCampaigns.map((item) => {
        return item;
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
          setResponse((prev) => {
            const index = response.length + 1;
            return [
              ...prev,
              <ResponseInfo
                index={index}
                remove={removeResponse}
                key={uniqueKey(`response-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Response to Campaigns
      </Button>
      {response.map((item) => {
        return item;
      })}
    </div>
  );

  const interestsSection = (
    <div className="interests my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input
          label="Interest and Preferences"
          labelOutlined
          className="uppercase"
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
          setProfiles((prev) => {
            const index = profiles.length + 1;
            return [
              ...prev,
              <ProfilesInfo
                index={index}
                remove={removeProfiles}
                key={uniqueKey(`profiles-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Asset
      </Button>
      {profiles.map((item) => {
        return item;
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
