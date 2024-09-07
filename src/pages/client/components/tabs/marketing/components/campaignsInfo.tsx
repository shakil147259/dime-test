import { IconCalendarMonth, IconMinus } from "@tabler/icons-react";
import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";

export const CampaignsInfo = ({
  index = 1,
  remove,
  itemKey,
}: RemovableInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`campaign-${index}`)}
    >
      <Input
        labelOutlined
        label={`Marketing Campaign ${index}`}
        className="uppercase"
      />
      <Calendar
        inputUI={
          <Input
            label="Date Sent"
            value=""
            rightIcon={
              <IconCalendarMonth size={15} className="text-gray-500" />
            }
          />
        }
      />
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
