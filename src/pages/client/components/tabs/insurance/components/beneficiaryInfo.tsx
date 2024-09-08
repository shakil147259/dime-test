import { IconMinus } from "@tabler/icons-react";
import { Input, Select } from "../../../../../../shared/components";
import { enumToOptions, uniqueKey } from "../../../../../../utils";
import { RootState } from "../../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { removeBeneficiary, updateBeneficiary } from "../store/insuranceSlice";
import { RELATIONSHIP } from "../store/types";

export interface BeneficiaryInfoProps {
  index: number;
  itemKey?: string | number;
}

export const BeneficiaryInfo = ({
  index = 1,
  itemKey,
}: BeneficiaryInfoProps) => {
  const state = useSelector((state: RootState) => state.insuranceInfo);

  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`beneficiaries-${index}`)}
    >
      <Input
        labelOutlined
        label={`Beneficiary ${index + 1} Name`}
        value={state.beneFiciaries[index].name}
        type="text"
        onChange={(e) => {
          dispatch(
            updateBeneficiary({
              index,
              name: e.target.value,
              percentage: "",
              relationship: "",
            })
          );
        }}
      />
      <Select
        label="Relationship"
        options={enumToOptions(RELATIONSHIP)}
        value={state.beneFiciaries[index].relationship}
        onChange={(v) => {
          dispatch(
            updateBeneficiary({
              index,
              relationship: v as string,
            })
          );
        }}
      />
      <Input
        labelOutlined
        label="Percentage"
        value={state.beneFiciaries[index].percentage}
        type="number"
        onChange={(e) => {
          dispatch(
            updateBeneficiary({
              index,
              percentage: e.target.value,
            })
          );
        }}
      />
      <span className="w-8 cursor-pointer hover:bg-slate-100 hover:rounded-full p-1">
        <IconMinus
          size={15}
          onClick={() => {
            dispatch(removeBeneficiary({ index }));
          }}
        />
      </span>
    </div>
  );
};
