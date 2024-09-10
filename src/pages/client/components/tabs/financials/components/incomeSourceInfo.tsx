import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { RootState } from "../../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { removeIncome, updateIncome } from "../store/financialInfoSlice";
import RemoveIcon from "../../common/removeIconContainer";

export const IncomeSourceInfo = ({
  index = 1,
  itemKey,
}: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.financialInfo);
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`income-${index}`)}
    >
      <Input
        labelOutlined
        label={`Income Source ${index + 1}`}
        value={state.incomeSources[index].incomeSource}
        onChange={(e) => {
          const incomeSource = e.target.value;
          dispatch(updateIncome({ index, incomeSource }));
        }}
      />
      <Input
        labelOutlined
        label="Annual Income"
        value={state.incomeSources[index].annualIncome}
        onChange={(e) => {
          const annualIncome = e.target.value;
          dispatch(updateIncome({ index, annualIncome }));
        }}
      />
      <RemoveIcon
        onClick={() => {
          dispatch(removeIncome({ index }));
        }}
      />
    </div>
  );
};
