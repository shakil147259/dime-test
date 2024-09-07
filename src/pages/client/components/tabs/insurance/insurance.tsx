import { ReactNode, useState } from "react";
import {
  Box,
  Button,
  Calendar,
  Divider,
  Input,
  Label,
  Select,
} from "../../../../../shared/components";
import { IconCalendarMonth, IconPlus, IconX } from "@tabler/icons-react";
import { BeneficiaryInfo } from "./components/beneficiaryInfo";
import { uniqueKey } from "../../../../../utils";

export const Insurance = () => {
  const [beneficiaries, setBeneficiaries] = useState<ReactNode[]>([]);

  const removeBeneficiary = (indexToRemove: number) => {
    setBeneficiaries((prevBeneficiaries) =>
      prevBeneficiaries.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <Label as="h2">Policy Details</Label>
      <Divider />

      <div className="policy my-10 flex flex-col gap-8">
        <div className="flex flex-row gap-2">
          <Input label="Policy Number" labelOutlined className="uppercase" />

          <Select
            label="Policy Type"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />
          <Calendar
            inputUI={
              <Input
                label="Policy Start Date"
                rightIcon={
                  <IconCalendarMonth size={15} className="text-gray-500" />
                }
              />
            }
          />

          <Calendar
            inputUI={
              <Input
                label="Policy End Date"
                rightIcon={
                  <IconCalendarMonth size={15} className="text-gray-500" />
                }
              />
            }
          />
        </div>
        <div className="flex flex-row gap-2">
          <Input label="Coverage Amount" labelOutlined className="uppercase" />
          <Input label="Premium Amount" labelOutlined className="uppercase" />
          <Select
            label="Payment Frequency"
            options={[
              { label: "Male", value: "m" },
              { label: "Female", value: "f" },
            ]}
          />
        </div>
      </div>

      <Label as="h2">Beneficiaries</Label>
      <Divider />

      <div className="address my-10 flex flex-col  gap-8">
        <Button
          size="lg"
          variant="outlined"
          className="border-primary focus:ring-primary text-primary"
          onClick={() => {
            setBeneficiaries((prev) => {
              const index = beneficiaries.length + 1;
              return [
                ...prev,
                <BeneficiaryInfo
                  index={index}
                  remove={removeBeneficiary}
                  key={uniqueKey(`beneficiaries-${index}`)}
                />,
              ];
            });
          }}
        >
          <IconPlus />
          Add Beneficiaries
        </Button>
        {beneficiaries.map((item) => {
          return item;
        })}

        <Box height={50} className="bg-red-900 w-full text-white text-lg">
          <span>Total</span>
          <span className="inline-flex items-center gap-2">
            <IconX size={15} /> 105%
          </span>
        </Box>
      </div>
    </>
  );
};

export default Insurance;
