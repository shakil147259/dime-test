import { IconMinus } from "@tabler/icons-react";
import { Input, Select } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { SelectProps } from "../../../../../../shared/components/Select/utils/types";

export const ProfilesInfo = ({
  index = 1,
  remove,
  itemKey,
}: RemovableInfoProps) => {
  const mediaOptions: SelectProps["options"] = [
    { label: "facebook", value: "fb" },
    { label: "Instagram", value: "insta" },
  ];
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`profiles-${index}`)}
    >
      <Select
        options={mediaOptions}
        label={`Platform ${index}`}
        className="uppercase"
      />
      <Input labelOutlined label={`Profile URL`} className="uppercase" />
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
