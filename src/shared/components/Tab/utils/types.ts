export type TabItemsShape = {
  id: number;
  label: string;
  icon: React.ReactNode;
  content?: React.ReactElement;
};

export type TabProps = {
  items: TabItemsShape[];
};

export type StyleProps = {
  variant?: "default" | "primary" | "secondary";
};
