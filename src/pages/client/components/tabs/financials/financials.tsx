import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
} from "../../../../../shared/components";
import { IncomeSourceInfo } from "./components/incomeSourceInfo";
import InfoBox from "../common/infoBox";
import { AssetsInfo } from "./components/assetsInfo";
import { DebtsInfo } from "./components/debtsInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import {
  addAssets,
  addDebts,
  addIncome,
  financialInfoUpdate,
} from "./store/financialInfoSlice";

export const Financials = () => {
  const state = useSelector((state: RootState) => state.financialInfo);
  const dispatch = useDispatch();

  const incomeSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addIncome({ index: state.assets.length }));
        }}
      >
        <IconPlus />
        Add Income Source
      </Button>
      {state.incomeSources.map((_, i) => (
        <IncomeSourceInfo
          index={i}
          key={`income-${i}`}
          itemKey={`income-${i}`}
        />
      ))}
      <InfoBox label="Total Annual Income" value="150,000" />
    </div>
  );

  const assetsSection = (
    <div className="policy my-10 flex flex-col gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addAssets({ index: state.assets.length }));
        }}
      >
        <IconPlus />
        Add Asset
      </Button>
      {state.assets.map((_, i) => (
        <AssetsInfo index={i} key={`asset-${i}`} itemKey={`asset-${i}`} />
      ))}
      <InfoBox label="Total Asset Value" value="370,000" />
    </div>
  );

  const debtsSection = (
    <div className="debts my-10 flex flex-col gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addDebts({ index: state.debts.length }));
        }}
      >
        <IconPlus />
        Add Debts
      </Button>
      {state.debts.map((_, i) => (
        <DebtsInfo index={i} key={`debt-${i}`} itemKey={`debt-${i}`} />
      ))}
      <InfoBox label="Total Debt" value="370,000" />
    </div>
  );

  const otherSection = (
    <div className="debts my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input
          label="Credit Score"
          labelOutlined
          value={state.creditScore}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(financialInfoUpdate({ key: "creditScore", value }));
          }}
        />
        <Input
          label="Tax Bracket"
          labelOutlined
          value={state.taxBracket}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(financialInfoUpdate({ key: "taxBracket", value }));
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      <Label as="h2">Income</Label>
      <Divider />

      {incomeSection}

      <Label as="h2">Assets</Label>
      <Divider />

      {assetsSection}

      <Label as="h2">Debts</Label>
      <Divider />

      {debtsSection}

      <Label as="h2">Other Information</Label>
      <Divider />

      {otherSection}
    </>
  );
};

export default Financials;
