import { Button, Input, Label, Select, Tab } from "../../../shared/components";
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconNotes,
} from "@tabler/icons-react";
import Divider from "../../../shared/components/Divider/Divider";
import { useState } from "react";
import { tabItems } from "./tabs/tabs";

export const AddClient = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="page-container w-full flex flex-col p-2">
      <div className="header inline-flex justify-between w-full">
        <Label as="h1">New Client</Label>

        <div className="buttonGroup flex gap-2">
          <Button variant="outlined">
            <IconChevronLeft size={15} color="gray" />
          </Button>
          <Button variant="outlined" leftIcon={<IconNotes size={15} />}>
            Notes
          </Button>
          <Button rightIcon={<IconChevronRight size={15} />}>Next Step</Button>
        </div>
      </div>
      <Divider />
      <div className="searchOptions mt-5 flex flex-row  justify-between gap-5">
        <Input
          label="Added By"
          value="David LoveJoy"
          rightIcon={<IconCalendar className="text-gray-500" />}
        />
        <Input label="Agent Assigned" value="David LoveJoy" />
        <Select
          label="Status"
          options={options}
          value={selectedOption}
          onChange={(value) => {
            setSelectedOption(value as string);
          }}
        />
      </div>
      <div className="mt-5">
        <Tab items={tabItems} />
      </div>
    </div>
  );
};

export default AddClient;
