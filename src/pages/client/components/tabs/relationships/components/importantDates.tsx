import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import {
  removeImportantDates,
  updateImportantDates,
} from "../store/relationShipSlice";
import { RemoveIcon } from "../../common/removeIconContainer";

export const ImportantDates = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.relationshipInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`importantDates-${index}`)}
    >
      <Input
        labelOutlined
        label={`Event ${index + 1}`}
        value={state.importantDate[index].eventName}
        onChange={(e) => {
          dispatch(
            updateImportantDates({
              index,
              eventName: e.target.value,
            })
          );
        }}
      />
      <Calendar
        onDateChange={(date) => {
          dispatch(
            updateImportantDates({
              index,
              date: date ? date.toISOString().split("T")[0] : "",
            })
          );
        }}
        selectedDate={
          state.importantDate[index].date
            ? new Date(state.importantDate[index].date)
            : null
        }
      />
      <RemoveIcon onClick={() => dispatch(removeImportantDates({ index }))} />
    </div>
  );
};
