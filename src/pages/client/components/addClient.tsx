import { Button, Input, Label, Select, Tab } from "../../../shared/components";
import {
  IconChevronLeft,
  IconChevronRight,
  IconNotes,
  IconUser,
} from "@tabler/icons-react";
import Divider from "../../../shared/components/Divider/Divider";
import { useState } from "react";
import { tabItems } from "./tabs/tabs";
import { enumToOptions } from "../../../utils";

enum ADD_CLIENT_STATUS {
  NEW = "new",
  CONTACTED = "contacted",
  POTENTIAL_CLIENT = "potential-client",
  LOST_CLIENT = "lost-client",
  DISPOSITIONED_CLIENT = "disposed-client",
}

export const AddClient = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [activeTabId, setActiveTabId] = useState(1);

  const goToNextTab = () => {
    if (activeTabId < tabItems.length) setActiveTabId((prev) => prev + 1);
  };
  const goToPrevTab = () => {
    if (activeTabId > 1) setActiveTabId((prev) => prev - 1);
  };

  return (
    <div className="page-container w-full flex flex-col p-2 h-screen overflow-scroll">
      <div className="header inline-flex justify-between w-full">
        <Label as="h1">New Client</Label>

        <div className="buttonGroup flex gap-2">
          <Button variant="outlined" onClick={goToPrevTab}>
            <IconChevronLeft size={15} color="gray" />
          </Button>
          <Button variant="outlined" leftIcon={<IconNotes size={15} />}>
            Notes
          </Button>
          <Button
            rightIcon={<IconChevronRight size={15} />}
            onClick={goToNextTab}
          >
            Next Step
          </Button>
        </div>
      </div>
      <Divider />
      <div className="searchOptions mt-5 flex flex-row  justify-between gap-5">
        <Input
          label="Added By"
          value="David LoveJoy"
          rightIcon={<IconUser className="text-gray-500" size={15} />}
        />
        <Input label="Agent Assigned" value="David LoveJoy" />
        <Select
          label="Status"
          options={enumToOptions(ADD_CLIENT_STATUS)}
          value={selectedOption}
          onChange={(value) => {
            setSelectedOption(value as string);
          }}
        />
      </div>
      <div className="mt-5">
        <Tab
          items={tabItems}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      </div>
    </div>
  );
};

export default AddClient;
