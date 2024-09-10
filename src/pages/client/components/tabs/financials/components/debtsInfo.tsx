import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { removeDebts, updateDebts } from "../store/financialInfoSlice";
import RemoveIcon from "../../common/removeIconContainer";

export const DebtsInfo = ({ index = 1, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.financialInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`debts-${index}`)}
    >
      <Input
        labelOutlined
        label={`Debt ${index + 1}`}
        value={state.debts[index].debt}
        onChange={(e) => {
          dispatch(
            updateDebts({
              index,
              debt: e.target.value,
            })
          );
        }}
      />
      <Input labelOutlined label="Value" />
      <RemoveIcon
        onClick={() => {
          dispatch(removeDebts({ index }));
        }}
      />
    </div>
  );
};
