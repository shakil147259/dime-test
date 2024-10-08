import { IconCalendarMonth, IconMinus } from "@tabler/icons-react";
import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";

export const ServiceRequestsInfo = ({
  index = 1,
  itemKey,
}: RemovableInfoProps) => {
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`serviceRequests-${index}`)}
    >
      <Input labelOutlined label={`Request ${index}`} className="uppercase" />
      <Calendar
        inputUI={
          <Input
            label="Date"
            value=""
            rightIcon={
              <IconCalendarMonth size={15} className="text-gray-500" />
            }
          />
        }
      />

      <span className="w-8 cursor-pointer">
        <IconMinus size={15} />
      </span>
    </div>
  );
};
