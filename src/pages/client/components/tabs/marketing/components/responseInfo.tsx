import { IconMinus } from "@tabler/icons-react";
import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";

export const ResponseInfo = ({
  index = 1,
  remove,
  itemKey,
}: RemovableInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`Response-${index}`)}
    >
      <Input
        labelOutlined
        label={`Marketing Campaign ${index}`}
        className="uppercase"
      />
      <Input labelOutlined label={`Response`} className="uppercase" />

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
