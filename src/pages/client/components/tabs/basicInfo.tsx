import {
  Calendar,
  Divider,
  Input,
  Label,
  Select,
} from "../../../../shared/components";
import { IconCalendarMonth } from "@tabler/icons-react";

export const BasicInfo = () => {
  return (
    <>
      <Label as="h2">Personal Information</Label>
      <Divider />
      <div className="info my-10 flex flex-col gap-8">
        <div className="flex flex-row gap-2">
          <Input
            label="First Name"
            labelOutlined
            value=""
            className="uppercase"
          />
          <Input
            label="Last Name"
            labelOutlined
            value=""
            className="uppercase"
          />
          <Select
            label="Gender"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />
          <Calendar
            inputUI={
              <Input
                label="Date Of Birth"
                value=""
                rightIcon={
                  <IconCalendarMonth size={15} className="text-gray-500" />
                }
              />
            }
          />

          <Input
            label="Social Security Number"
            labelOutlined
            value=""
            className="uppercase"
          />
        </div>

        <div className="flex flex-row gap-2">
          <Select
            label="Service Preference"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />
          <Select
            label="Preferred Contact Method"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />

          <Input
            label="Email Address"
            labelOutlined
            value=""
            className="uppercase"
          />
          <Input
            label="Phone Number"
            labelOutlined
            value=""
            className="uppercase"
          />
          <Select
            label="Referral Source"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />
        </div>

        <div className="flex flex-row gap-2">
          <Select
            label="Occupation"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />

          <Input label="Employer" value="" className="uppercase" />
        </div>
      </div>

      <Label as="h2">Address</Label>
      <Divider />
      <div className="address my-10 flex flex-col  gap-8">
        <div className="flex flex-row gap-3">
          <Input
            labelOutlined
            label="Street Address"
            value=""
            className="uppercase"
          />
          <Input
            labelOutlined
            label="Apartment/Floor"
            value=""
            className="uppercase"
          />
          <Input labelOutlined label="City" value="" className="uppercase" />
        </div>
        <div className="flex flex-row gap-3">
          <Input labelOutlined label="State" value="" className="uppercase" />
          <Input
            label="Zip Code"
            labelOutlined
            value=""
            className="uppercase"
          />
          <Input label="Country" labelOutlined value="" className="uppercase" />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
