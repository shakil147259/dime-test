import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import RemoveIcon from "../../common/removeIconContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { removeNote, updateNote } from "../store/quotesSlice";

export const NotesInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.qtotesInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`notes-${index}`)}
    >
      <Input
        labelOutlined
        label={`Note ${index + 1}`}
        value={state.notes[index].note}
        onChange={(e) => {
          dispatch(
            updateNote({
              index,
              note: e.target.value,
            })
          );
        }}
      />
      <Calendar
        onDateChange={(date) => {
          dispatch(
            updateNote({
              index,
              date: date ? date.toISOString().split("T")[0] : "",
            })
          );
        }}
        selectedDate={
          state.notes[index].date ? new Date(state.notes[index].date) : null
        }
      />
      <RemoveIcon
        onClick={() => {
          dispatch(removeNote({ index }));
        }}
      />
    </div>
  );
};
