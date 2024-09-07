import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
} from "../../../../../shared/components";
import { ReactNode, useState } from "react";
import { IncomeSourceInfo } from "./components/incomeSourceInfo";
import { uniqueKey } from "../../../../../utils";
import InfoBox from "./components/infoBox";
import { AssetsInfo } from "./components/assetsInfo";
import { DebtsInfo } from "./components/debtsInfo";

export const Financials = () => {
  const [incomeSources, setIncomeSources] = useState<ReactNode[]>([]);
  const [assets, setAssets] = useState<ReactNode[]>([]);
  const [debts, setDebts] = useState<ReactNode[]>([]);

  const removeIncomeSources = (indexToRemove: number) => {
    setIncomeSources((prevIncomeSources) =>
      prevIncomeSources.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeAssets = (indexToRemove: number) => {
    setAssets((prevAssets) =>
      prevAssets.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeDebts = (indexToRemove: number) => {
    setDebts((prevDebts) =>
      prevDebts.filter((_, index) => index !== indexToRemove)
    );
  };

  const incomeSection = (
    <div className="address my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setIncomeSources((prev) => {
            const index = incomeSources.length + 1;
            return [
              ...prev,
              <IncomeSourceInfo
                index={index}
                remove={removeIncomeSources}
                key={uniqueKey(`beneficiaries-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Income Source
      </Button>
      {incomeSources.map((item) => {
        return item;
      })}
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
          setAssets((prev) => {
            const index = assets.length + 1;
            return [
              ...prev,
              <AssetsInfo
                index={index}
                remove={removeAssets}
                key={uniqueKey(`assets-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Asset
      </Button>
      {assets.map((item) => {
        return item;
      })}
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
          setDebts((prev) => {
            const index = debts.length + 1;
            return [
              ...prev,
              <DebtsInfo
                index={index}
                remove={removeDebts}
                key={uniqueKey(`debts-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Asset
      </Button>
      {debts.map((item) => {
        return item;
      })}
      <InfoBox label="Total Debt" value="370,000" />
    </div>
  );

  const otherSection = (
    <div className="debts my-10 flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <Input label="Credit Score" labelOutlined className="uppercase" />
        <Input label="Tax Bracket" labelOutlined className="uppercase" />
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
