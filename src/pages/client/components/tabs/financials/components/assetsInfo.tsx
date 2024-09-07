import { IconMinus } from "@tabler/icons-react";
import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";

interface AssetsInfoProps {
  index: number;
  remove: (index: number) => void;
  itemKey?: string | number;
}

export const AssetsInfo = ({ index = 1, remove, itemKey }: AssetsInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`assets-${index}`)}
    >
      <Input labelOutlined label={`Asset ${index}`} className="uppercase" />
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
