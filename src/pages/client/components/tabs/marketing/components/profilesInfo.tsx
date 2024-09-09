import { Input, Select } from "../../../../../../shared/components";
import { enumToOptions, uniqueKey } from "../../../../../../utils";
import { RemovableInfoProps } from "../../common/interface";
import { RootState } from "../../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Social_Media } from "../store/types";
import {
  removeMediaProfile,
  updateMediaProfile,
} from "../store/marketingInfoSlice";
import RemoveIcon from "../../common/removeIconContainer";

export const ProfilesInfo = ({ index = 0, itemKey }: RemovableInfoProps) => {
  const state = useSelector((state: RootState) => state.marketingInfo);
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row items-center gap-3"
      key={itemKey ?? uniqueKey(`profiles-${index}`)}
    >
      <Select
        options={enumToOptions(Social_Media)}
        label={`Platform ${index + 1}`}
        value={state.mediaProfiles[index].platform}
        onChange={(v) => {
          dispatch(
            updateMediaProfile({
              index,
              platform: v as string,
            })
          );
        }}
      />
      <Input
        labelOutlined
        label={`Profile URL`}
        value={state.mediaProfiles[index].profileUrl}
        onChange={(e) => {
          const { value } = e.target;
          dispatch(
            updateMediaProfile({
              index,
              profileUrl: value,
            })
          );
        }}
      />
      <RemoveIcon
        onClick={() => {
          dispatch(removeMediaProfile({ index }));
        }}
      />
    </div>
  );
};
