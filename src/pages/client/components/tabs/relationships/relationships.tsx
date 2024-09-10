import { IconPlus } from "@tabler/icons-react";
import {
  Button,
  Divider,
  Input,
  Label,
  Select,
} from "../../../../../shared/components";
import { enumToOptions, uniqueKey } from "../../../../../utils";
import { ChildInfo } from "./components/childInfo";
import { ImportantDates } from "./components/importantDates";
import { Marital_Status } from "./store/types";
import { RootState } from "../../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addChildren,
  addImportantDates,
  updateRelationshipInfo,
} from "./store/relationShipSlice";

export const Relationships = () => {
  const state = useSelector((state: RootState) => state.relationshipInfo);
  const dispatch = useDispatch();
  const spouseSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <div className="flex flex-row gap-3">
        <Select
          label="Marital Status"
          options={enumToOptions(Marital_Status)}
          value={state.meritalStatus}
          onChange={(v) => {
            dispatch(
              updateRelationshipInfo({
                key: "meritalStatus",
                value: v as string,
              })
            );
          }}
        />
        <Input
          labelOutlined
          label="Name of Spouse/Partner"
          value={state.nameOfSpouse}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(updateRelationshipInfo({ key: "nameOfSpouse", value }));
          }}
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
          dispatch(addChildren({ index: state.children.length }));
        }}
      >
        <IconPlus />
        Add Children
      </Button>
      {state.children.map((_, i) => {
        return (
          <ChildInfo
            index={i}
            key={uniqueKey(`children-${i}`)}
            itemKey={uniqueKey(`children-${i}`)}
          />
        );
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
          dispatch(addImportantDates({ index: state.importantDate.length }));
        }}
      >
        <IconPlus />
        Add Date
      </Button>
      {state.importantDate.map((_, i) => {
        return <ImportantDates index={i} itemKey={`important-dates-${i}`} />;
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
