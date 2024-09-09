export type TabItemsShape = {
  id: number;
  label: string;
  icon: React.ReactNode;
  content?: React.ReactElement;
};

export type TabProps = {
  items: TabItemsShape[];
  activeTabId: number;
  setActiveTabId: (id: number) => void;
};

export type StyleProps = {
  variant?: "default" | "primary" | "secondary";
};
