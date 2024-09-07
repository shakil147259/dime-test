import { IconMinus } from "@tabler/icons-react";
import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";

interface DebtsInfoProps {
  index: number;
  remove: (index: number) => void;
  itemKey?: string | number;
}

export const DebtsInfo = ({ index = 1, remove, itemKey }: DebtsInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`beneficiaries-${index}`)}
    >
      <Input labelOutlined label={`Debt ${index}`} className="uppercase" />
      <Input labelOutlined label="Value" className="uppercase" />
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
