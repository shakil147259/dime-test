import { IconCircle } from "@tabler/icons-react";
import { TabItemsShape } from "../../../../shared/components/Tab/utils/types";
import {
  BasicInfo,
  Compliance,
  Financials,
  Insurance,
  InsuranceQuotes,
  Marketing,
  Relationships,
} from ".";
import { basicInfoSchema } from "./basicInfo/store/schema";
import { insuranceInfoSchema } from "./insurance/store/schema";

export const tabItems: TabItemsShape[] = [
  {
    id: 1,
    label: "Basic Info",
    icon: <IconCircle />,
    content: <BasicInfo />,
    schema: basicInfoSchema,
  },
  {
    id: 2,
    label: "Insurance",
    icon: <IconCircle />,
    content: <Insurance />,
    schema: insuranceInfoSchema,
  },
  { id: 3, label: "Financials", icon: <IconCircle />, content: <Financials /> },
  {
    id: 4,
    label: "Relationship Management",
    icon: <IconCircle />,
    content: <Relationships />,
  },
  {
    id: 5,
    label: "Insurance Quotes",
    icon: <IconCircle />,
    content: <InsuranceQuotes />,
  },
  { id: 6, label: "Marketing", icon: <IconCircle />, content: <Marketing /> },
  {
    id: 7,
    label: "Legal and Compliance",
    icon: <IconCircle />,
    content: <Compliance />,
  },
];
