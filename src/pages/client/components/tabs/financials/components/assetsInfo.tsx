import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import { removeAssets, updateAssets } from "../store/financialInfoSlice";
import RemoveIcon from "../../common/removeIconContainer";

export const AssetsInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.financialInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`assets-${index + 1}`)}
    >
      <Input
        labelOutlined
        label={`Asset ${index + 1}`}
        value={state.assets[index].asset}
        onChange={(e) => {
          dispatch(updateAssets({ index, asset: e.target.value }));
        }}
      />
      <Input
        labelOutlined
        label="Value"
        value={state.assets[index].value}
        onChange={(e) => {
          dispatch(updateAssets({ index, value: e.target.value }));
        }}
      />
      <RemoveIcon
        onClick={() => {
          dispatch(removeAssets({ index }));
        }}
      />
    </div>
  );
};
