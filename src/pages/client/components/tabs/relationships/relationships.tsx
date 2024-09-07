import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
  Select,
} from "../../../../../shared/components";
import { uniqueKey } from "../../../../../utils";
import { ReactNode, useState } from "react";
import { ChildInfo } from "./components/childInfo";
import { ImportantDates } from "./components/importantDates";

export const Relationships = () => {
  const [child, setChild] = useState<ReactNode[]>([]);
  const [importantDate, setImportantDate] = useState<ReactNode[]>([]);

  const removeChild = (indexToRemove: number) => {
    setChild((prevChild) =>
      prevChild.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeImportantDate = (indexToRemove: number) => {
    setImportantDate((prevDate) =>
      prevDate.filter((_, index) => index !== indexToRemove)
    );
  };
  const spouseSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <div className="flex flex-row gap-3">
        <Select
          label="Marital Status"
          options={[
            { label: "Married", value: "m" },
            { label: "Unmarried", value: "u" },
          ]}
        />
        <Input
          labelOutlined
          label="Name of Spouse/Partner"
          value=""
          className="uppercase"
        />
      </div>
    </div>
  );

  const childrenSection = (
    <div className="children my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setChild((prev) => {
            const index = child.length + 1;
            return [
              ...prev,
              <ChildInfo
                index={index}
                remove={removeChild}
                key={uniqueKey(`beneficiaries-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Children
      </Button>
      {child.map((item) => {
        return item;
      })}
    </div>
  );

  const importantDatesSection = (
    <div className="children my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setImportantDate((prev) => {
            const index = child.length + 1;
            return [
              ...prev,
              <ImportantDates
                index={index}
                remove={removeImportantDate}
                key={uniqueKey(`immportantDates-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Date
      </Button>
      {importantDate.map((item) => {
        return item;
      })}
    </div>
  );
  return (
    <>
      <Label as="h2">Spouse/Partner</Label>
      <Divider />
      {spouseSection}

      <Label as="h2">Children</Label>
      <Divider />
      {childrenSection}

      <Label as="h2">Important Dates</Label>
      <Divider />
      {importantDatesSection}
    </>
  );
};

export default Relationships;
