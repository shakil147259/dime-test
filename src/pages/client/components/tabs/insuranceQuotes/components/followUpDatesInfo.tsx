import { IconCalendarMonth, IconMinus } from "@tabler/icons-react";
import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";

export const FollowUpDatesInfo = ({
  index = 1,
  itemKey,
}: RemovableInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`followUpDates-${index}`)}
    >
      <Calendar
        inputUI={
          <Input
            label={`Date ${index}`}
            value=""
            rightIcon={
              <IconCalendarMonth size={15} className="text-gray-500" />
            }
          />
        }
      />
      <Input labelOutlined label={`Reason`} className="uppercase" />
      <span className="w-8 cursor-pointer">
        <IconMinus size={15} />
      </span>
    </div>
  );
};
