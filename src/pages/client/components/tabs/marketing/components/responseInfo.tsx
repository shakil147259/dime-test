import { Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import RemoveIcon from "../../common/removeIconContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../app/store";
import {
  removeResponseToCampaign,
  updateResponseToCampaign,
} from "../store/marketingInfoSlice";

export const ResponseInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.marketingInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`Response-${index}`)}
    >
      <Input
        labelOutlined
        label={`Marketing Campaign ${index + 1}`}
        value={state.responseToCampaigns[index].campaignName}
        onChange={(e) => {
          dispatch(
            updateResponseToCampaign({
              index,
              campaignName: e.target.value,
            })
          );
        }}
      />
      <Input
        labelOutlined
        label={`Response`}
        value={state.responseToCampaigns[index].response}
        onChange={(e) => {
          dispatch(
            updateResponseToCampaign({
              index,
              response: e.target.value,
            })
          );
        }}
      />

      <RemoveIcon
        onClick={() => {
          dispatch(removeResponseToCampaign({ index }));
        }}
      />
    </div>
  );
};
