import {
  IconCheck,
  IconCircle,
  IconCircle1,
  IconDotsCircleHorizontal,
} from "@tabler/icons-react";
import { TabItemsShape } from "../../../../shared/components/Tab/utils/types";
import { BasicInfo, Financials, Insurance, Relationships } from ".";

export const tabItems: TabItemsShape[] = [
  { id: 1, label: "Basic Info", icon: <IconCheck />, content: <BasicInfo /> },
  {
    id: 2,
    label: "Insurance",
    icon: <IconDotsCircleHorizontal />,
    content: <Insurance />,
  },
  { id: 3, label: "Financials", icon: <IconCircle />, content: <Financials /> },
  {
    id: 4,
    label: "Relationship Management",
    icon: <IconCircle1 />,
    content: <Relationships />,
  },
  { id: 5, label: "Insurance Quotes", icon: <IconCircle /> },
  { id: 6, label: "Marketing", icon: <IconCircle /> },
  { id: 7, label: "Legal and Compliance", icon: <IconCircle /> },
];
