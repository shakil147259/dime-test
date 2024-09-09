import { Calendar, Input } from "../../../../../../shared/components";
import { uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { RootState } from "../../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { removeCampaign, updateCampaign } from "../store/marketingInfoSlice";
import RemoveIcon from "../../common/removeIconContainer";

export const CampaignsInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.marketingInfo);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`campaign-${index}`)}
    >
      <Input
        labelOutlined
        label={`Marketing Campaign ${index + 1}`}
        value={state.marketinCampaigns[index].campaignName}
        onChange={(e) => {
          dispatch(
            updateCampaign({
              index,
              campaignName: e.target.value,
            })
          );
        }}
      />
      <Calendar
        onDateChange={(date) => {
          dispatch(
            updateCampaign({
              index,
              dateSent: date ? date.toISOString().split("T")[0] : "",
            })
          );
        }}
        selectedDate={
          state.marketinCampaigns[index].dateSent
            ? new Date(state.marketinCampaigns[index].dateSent)
            : null
        }
      />
      <RemoveIcon
        onClick={() => {
          dispatch(removeCampaign({ index }));
        }}
      />
    </div>
  );
};
