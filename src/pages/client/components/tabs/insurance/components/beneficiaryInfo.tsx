import { IconMinus } from "@tabler/icons-react";
import { Input, Select } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";

interface BeneficiaryInfoProps {
  index: number;
  remove: (index: number) => void;
  itemKey?: string | number;
}

export const BeneficiaryInfo = ({
  index = 1,
  remove,
  itemKey,
}: BeneficiaryInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`beneficiaries-${index}`)}
    >
      <Input
        labelOutlined
        label={`Beneficiary ${index} Name`}
        className="uppercase"
      />
      <Select
        label="Relationship"
        options={[
          { label: "Male", value: "m" },
          { label: "Female", value: "f" },
        ]}
      />
      <Input labelOutlined label="Percentage" className="uppercase" />
      <span className="w-8 cursor-pointer">
        <IconMinus
          size={15}
          onClick={() => {
            remove(index - 1);
          }}
        />
      </span>
    </div>
  );
};
