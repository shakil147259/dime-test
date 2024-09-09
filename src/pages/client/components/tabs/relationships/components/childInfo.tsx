import { IconCalendarMonth, IconMinus } from "@tabler/icons-react";
import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { removeChildren, updateChildren } from "../store/relationShipSlice";

export const ChildInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.relationshipInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`child-${index}`)}
    >
      <Input
        labelOutlined
        label={`Child ${index + 1}`}
        value={state.children[index].childrenName}
        onChange={(e) => {
          dispatch(
            updateChildren({
              index,
              childrenName: e.target.value,
            })
          );
        }}
      />
      <Calendar
        onDateChange={(date) => {
          dispatch(
            updateChildren({
              index,
              dob: date ? date.toISOString().split("T")[0] : "",
            })
          );
        }}
        selectedDate={
          state.children[index].dob ? new Date(state.children[index].dob) : null
        }
        inputUI={
          <Input
            label="Date Of Birth"
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
            dispatch(removeChildren({ index }));
          }}
        />
      </span>
    </div>
  );
};
