import { StyleProps } from "./types";

export const getStyles = ({ labelOutlined }: StyleProps) => {
  const container = "w-full relative";
  const input = [
    "w-full rounded-md px-3.5 py-2",
    "border bg-white text-md outline-none",
    "focus:ring-blue-400 focus:ring-2 focus:ring-offset-0 focus:ring-offset-white focus:border-transparent",
    "transition-all",
    "peer",
  ];
  const label = [
    "absolute px-1 left-2.5 -top-2.5",
    "bg-white rounded",
    "text-xs text-zinc-500",
    "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:text-blue-400",
    labelOutlined
      ? ""
      : "cursor-text peer-placeholder-shown:text-md float-labels peer-placeholder-shown:top-3",
    "truncate max-w-[calc(100%-18px)]",
  ];

  const rightIcon = "absolute right-4 top-1/2 transform -translate-y-1/2";
  return { container, input, label, rightIcon };
};
