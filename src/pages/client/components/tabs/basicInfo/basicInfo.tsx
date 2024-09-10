import { useDispatch, useSelector } from "react-redux";
import {
  Calendar,
  Divider,
  Input,
  Label,
  Select,
} from "../../../../../shared/components";
import { IconCalendarMonth } from "@tabler/icons-react";
import { RootState } from "../../../../../app/store";
import { basicInfoUpdate } from "./store/basicInfoSlice";
import {
  GenderEnum,
  OccupationsEnum,
  PreferredContactMethodsEnum,
  ReferralSourcesEnum,
  ServicePreferenceEnum,
} from "./store/types";
import { enumToOptions } from "../../../../../utils";
import { useFormContext } from "react-hook-form";

export const BasicInfo = () => {
  const state = useSelector((state: RootState) => state.basicInfo);
  const dispatch = useDispatch();

  const { register, formState } = useFormContext();

  const personalInfoSection = (
    <div className="info my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input
          {...register("firstName")}
          label="First Name"
          labelOutlined
          value={state.firstName}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "firstName", value }));
          }}
          error={formState.errors.firstName?.message?.toString()}
        />
        <Input
          label="Last Name"
          labelOutlined
          value={state.lastName}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "lastName", value }));
          }}
        />
        <Select
          label="Gender"
          value={state.gender}
          options={enumToOptions(GenderEnum)}
          onChange={(v) => {
            dispatch(basicInfoUpdate({ key: "gender", value: v as string }));
          }}
        />
        <Calendar
          inputUI={
            <Input
              label="Date Of Birth"
              value={state.dob}
              onChange={(e) => {
                const { value } = e.target;
                dispatch(basicInfoUpdate({ key: "gender", value }));
              }}
              rightIcon={
                <IconCalendarMonth size={15} className="text-gray-500" />
              }
            />
          }
        />

        <Input
          label="Social Security Number"
          labelOutlined
          value={state.socialSecurityNumber}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "socialSecurityNumber", value }));
          }}
        />
      </div>

      <div className="flex flex-row gap-2">
        <Select
          label="Service Preference"
          options={enumToOptions(ServicePreferenceEnum)}
          value={state.servicePreference}
          onChange={(v) => {
            dispatch(
              basicInfoUpdate({ key: "servicePreference", value: v as string })
            );
          }}
        />
        <Select
          label="Preferred Contact Method"
          options={enumToOptions(PreferredContactMethodsEnum)}
          value={state.preferredContactMethod}
          onChange={(v) => {
            dispatch(
              basicInfoUpdate({
                key: "preferredContactMethod",
                value: v as string,
              })
            );
          }}
        />

        <Input
          {...register("emailAddress")}
          label="Email Address"
          labelOutlined
          value={state.emailAddress}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "emailAddress", value }));
          }}
          error={formState.errors.emailAddress?.message?.toString()}
        />
        <Input
          label="Phone Number"
          labelOutlined
          value={state.phoneNumber}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "phoneNumber", value }));
          }}
        />
        <Select
          label="Referral Source"
          options={enumToOptions(ReferralSourcesEnum)}
          value={state.referralSource}
          onChange={(v) => {
            dispatch(
              basicInfoUpdate({ key: "referralSource", value: v as string })
            );
          }}
        />
      </div>

      <div className="flex flex-row gap-2">
        <Select
          label="Occupation"
          options={enumToOptions(OccupationsEnum)}
          value={state.occupation}
          onChange={(v) => {
            dispatch(
              basicInfoUpdate({ key: "occupation", value: v as string })
            );
          }}
        />

        <Input
          label="Employer"
          value={state.employer}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "employer", value }));
          }}
        />
      </div>
    </div>
  );

  const addressSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <div className="flex flex-row gap-3">
        <Input
          labelOutlined
          label="Street Address"
          value={state.streetAddress}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "streetAddress", value }));
          }}
        />
        <Input
          labelOutlined
          label="Apartment/Floor"
          value={state.apartment}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "apartment", value }));
          }}
        />
        <Input
          labelOutlined
          label="City"
          value={state.city}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "city", value }));
          }}
        />
      </div>
      <div className="flex flex-row gap-3">
        <Input
          labelOutlined
          label="State"
          value={state.state}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "state", value }));
          }}
        />
        <Input
          label="Zip Code"
          labelOutlined
          value={state.zipCode}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "zipCode", value }));
          }}
        />
        <Input
          label="Country"
          labelOutlined
          value={state.country}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(basicInfoUpdate({ key: "country", value }));
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      <Label as="h2">Personal Information</Label>
      <Divider />
      {personalInfoSection}

      <Label as="h2">Address</Label>
      <Divider />
      {addressSection}
    </>
  );
};

export default BasicInfo;
