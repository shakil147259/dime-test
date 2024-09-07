import { IconMinus } from "@tabler/icons-react";
import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";

interface IncomeSourceInfoProps {
  index: number;
  remove: (index: number) => void;
  itemKey?: string | number;
}

export const IncomeSourceInfo = ({
  index = 1,
  remove,
  itemKey,
}: IncomeSourceInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`beneficiaries-${index}`)}
    >
      <Input
        labelOutlined
        label={`Income Source ${index}`}
        className="uppercase"
      />
      <Input labelOutlined label="Annual Income" className="uppercase" />
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
