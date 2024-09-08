import { useDispatch, useSelector } from "react-redux";
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
import { enumToOptions } from "../../../../../utils";
import { RootState } from "../../../../../app/store";
import { insuranceUpdate, addBeneficiary } from "./store/insuranceSlice";
import { PAYMENT_FREQUENCY, POLICY_TYPE } from "./store/types";

export const Insurance = () => {
  const state = useSelector((state: RootState) => state.insuranceInfo);
  const dispatch = useDispatch();

  const addBeneficiaries = () => {
    const index = state.beneFiciaries.length;
    dispatch(addBeneficiary({ index }));
  };

  const policySection = (
    <div className="policy my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input
          label="Policy Number"
          labelOutlined
          value={state.policyNumber}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(insuranceUpdate({ key: "policyNumber", value }));
          }}
        />

        <Select
          label="Policy Type"
          options={enumToOptions(POLICY_TYPE)}
          value={state.policyType}
          onChange={(v) => {
            dispatch(
              insuranceUpdate({ key: "policyType", value: v as string })
            );
          }}
        />
        <Calendar
          onDateChange={(date) => {
            dispatch(
              insuranceUpdate({
                key: "policyStartDate",
                value: date ? date.toISOString().split("T")[0] : "",
              })
            );
          }}
          selectedDate={
            state.policyStartDate ? new Date(state.policyStartDate) : null
          }
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
          onDateChange={(date) => {
            dispatch(
              insuranceUpdate({
                key: "policyEndDate",
                value: date ? date.toISOString().split("T")[0] : "",
              })
            );
          }}
          selectedDate={
            state.policyEndDate ? new Date(state.policyEndDate) : null
          }
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
        <Input
          label="Coverage Amount"
          labelOutlined
          value={state.coverageAmount}
          type="number"
          onChange={(e) => {
            const { value } = e.target;
            dispatch(insuranceUpdate({ key: "coverageAmount", value }));
          }}
        />
        <Input
          label="Premium Amount"
          labelOutlined
          value={state.premiumAmount}
          type="number"
          onChange={(e) => {
            const { value } = e.target;
            dispatch(insuranceUpdate({ key: "premiumAmount", value }));
          }}
        />
        <Select
          label="Payment Frequency"
          options={enumToOptions(PAYMENT_FREQUENCY)}
          value={state.paymentFrequency}
          onChange={(v) => {
            dispatch(
              insuranceUpdate({ key: "paymentFrequency", value: v as string })
            );
          }}
        />
      </div>
    </div>
  );

  const beneficiariesSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => addBeneficiaries()}
      >
        <IconPlus />
        Add Beneficiaries
      </Button>
      {state.beneFiciaries.map((_, index) => {
        return <BeneficiaryInfo index={index} itemKey={index} />;
      })}

      <Box height={50} className="bg-red-900 w-full text-white text-lg">
        <span>Total</span>
        <span className="inline-flex items-center gap-2">
          <IconX size={15} /> 105%
        </span>
      </Box>
    </div>
  );

  return (
    <>
      <Label as="h2">Policy Details</Label>
      <Divider />
      {policySection}

      <Label as="h2">Beneficiaries</Label>
      <Divider />
      {beneficiariesSection}
    </>
  );
};

export default Insurance;
