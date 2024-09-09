import { IconMinus } from "@tabler/icons-react";
import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { updateDebts } from "../store/financialInfoSlice";

export const DebtsInfo = ({ index = 1, itemKey }: RemovableInfoProps) => {
  console.log("❎ ~ itemKey:", itemKey);
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
      <span className="w-8 cursor-pointer">
        <IconMinus size={15} />
      </span>
    </div>
  );
};
