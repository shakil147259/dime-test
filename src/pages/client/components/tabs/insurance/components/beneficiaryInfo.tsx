import { IconMinus } from "@tabler/icons-react";
import { Input, Select } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RootState } from "../../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  insuranceUpdate,
  removeBeneficiary,
  updateBeneficiary,
} from "../store/insuranceSlice";
import { useState } from "react";

export interface BeneficiaryInfoProps {
  index: number;
  remove: (index: number) => void;
  itemKey?: string | number;
}

export const BeneficiaryInfo = ({
  index = 1,
  remove,
  itemKey,
}: BeneficiaryInfoProps) => {
  //const state = useSelector((state: RootState) => state.insuranceInfo.beneFiciaries);
  // const beneficiary = useSelector(
  //   (state: RootState) => state.insuranceInfo.beneFiciaries
  // );
  //const dispatch = useDispatch();
  const [namex, setNamex] = useState("second");
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`beneficiaries-${index}`)}
    >
      <Input
        labelOutlined
        label={`Beneficiary ${index} Name`}
        value={namex}
        type="text"
        //onBlur={handleBlur}
        onChange={(e) => {
          setNamex(e.target.value);
          // dispatch(
          //   updateBeneficiary({
          //     index: 1,
          //     name: e.target.value,
          //     percentage: "10",
          //     relationship: "ho",
          //   })
          // );
        }}
      />
      <Select
        label="Relationship"
        options={[
          { label: "Male", value: "m" },
          { label: "Female", value: "f" },
        ]}
      />
      <Input labelOutlined label="Percentage" />
      <span className="w-8 cursor-pointer">
        <IconMinus
          size={15}
          onClick={() => {
            remove(index - 1);
            // dispatch(removeBeneficiary({ index: index - 1 }));
          }}
        />
      </span>
    </div>
  );
};
