import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { Divider, Label, Select } from "../../../../../shared/components";
import { enumToOptions } from "../../../../../utils";
import {
  CONSENT_FOR_DATA_STORAGE,
  GDPR_COMPLIANCE_STATUS,
} from "./store/types";
import { complianceInfoUpdate } from "./store/complianceSlice";

export const Compliance = () => {
  const state = useSelector((state: RootState) => state.complianceInfo);
  const dispatch = useDispatch();
  const consentSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <div className="flex flex-row gap-3">
        <Select
          label="Consent for Data Storage"
          className="uppercase"
          options={enumToOptions(CONSENT_FOR_DATA_STORAGE)}
          value={state.consentForDataStorages}
          onChange={(v) => {
            dispatch(
              complianceInfoUpdate({
                key: "consentForDataStorages",
                value: v as string,
              })
            );
          }}
        />
        <Select
          label="GDPR Compliance Status"
          className="uppercase"
          options={enumToOptions(GDPR_COMPLIANCE_STATUS)}
          value={state.GDPRStatus}
          onChange={(v) => {
            dispatch(
              complianceInfoUpdate({ key: "GDPRStatus", value: v as string })
            );
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      <Label as="h2">Consent and Compliance</Label>
      <Divider />
      {consentSection}
    </>
  );
};

export default Compliance;
