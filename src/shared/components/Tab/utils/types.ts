import yup from "yup";

export type TabItemsShape = {
  id: number;
  label: string;
  icon: React.ReactNode;
  content?: React.ReactElement;
  schema?: yup.ObjectSchema<object>;
};

export type TabProps = {
  items: TabItemsShape[];
  activeTabId?: number;
  setActiveTabId?: (id: number) => void;
  accessibleTabId?: number[];
};

export type StyleProps = {
  variant?: "default" | "primary" | "secondary";
};
