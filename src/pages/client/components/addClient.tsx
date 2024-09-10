import {
  IconChevronLeft,
  IconChevronRight,
  IconNotes,
  IconUser,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Label,
  Select,
  Snackbar,
  Tab,
} from "../../../shared/components";
import Divider from "../../../shared/components/Divider/Divider";
import { enumToOptions } from "../../../utils";
import { tabItems } from "./tabs/tabs";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useAddClient } from "../../../api/hooks/useClientData";

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
  const [visitedTabs, setVisitedTabs] = useState<number[]>([]);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);

  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const showSnackbar = () => {
    setSnackbarVisible(true);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 5000);
  };

  const defaultSchema = yup.object().shape({});
  const methods = useForm({
    shouldUnregister: false,
    resolver: yupResolver(tabItems[activeTabId - 1]?.schema || defaultSchema),
    mode: "onChange",
  });
  const { handleSubmit, trigger } = methods;

  const goToNextTab = async () => {
    const isStepValid = await trigger();
    if (isStepValid && activeTabId < tabItems.length)
      setActiveTabId((prev) => prev + 1);
  };

  const goToPrevTab = () => {
    if (activeTabId > 1) setActiveTabId((prev) => prev - 1);
  };

  const { mutate: addClient, isLoading: isAddingClient } = useAddClient();

  const onSubmit = async () => {
    addClient(state);
    dispatch({ type: "RESET_STORE" });
    setVisitedTabs([]);
    setActiveTabId(1);
    showSnackbar();
  };

  useEffect(() => {
    console.log("isAddingClient:", isAddingClient);
  }, [isAddingClient]);

  useEffect(() => {
    setVisitedTabs((prev) => [...new Set([...prev, activeTabId])]);
  }, [activeTabId]);

  return (
    <FormProvider {...methods}>
      <form
        className="w-screen"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
      >
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
                onClick={() => {
                  if (activeTabId == tabItems.length) {
                    onSubmit();
                  } else {
                    goToNextTab();
                  }
                }}
              >
                {activeTabId == tabItems.length ? "Complete" : "Next Step"}
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
              accessibleTabId={visitedTabs}
              setActiveTabId={setActiveTabId}
            />
          </div>
        </div>
        <Snackbar
          message="Information Saved Successfully"
          type="success"
          isVisible={isSnackbarVisible}
          onClose={() => setSnackbarVisible(false)}
        />
      </form>
    </FormProvider>
  );
};

export default AddClient;
