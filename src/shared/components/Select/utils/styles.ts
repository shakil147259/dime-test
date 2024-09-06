import { StyleProps } from "./types";

export const getStyles = ({ disabled }: StyleProps) => {
  const container = "relative w-full";
  const inputBox = [
    "flex justify-between items-center px-3.5 py-2",
    "border border-gray-300 rounded-md shadow-sm cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
    disabled && "opacity-50 cursor-not-allowed",
    "peer",
  ];
  const label = [
    "absolute px-1 left-2.5 -top-2.5",
    "bg-white",
    "text-xs text-zinc-400",
    "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:text-blue-400",
    "cursor-text peer-placeholder-shown:text-md float-labels peer-placeholder-shown:top-3",
    "truncate max-w-[calc(100%-18px)]",
  ];
  const openIndicator = ["w-5 h-5 transform transition-transform duration-200"];

  const optionsContainer =
    "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg";
  const optionsUL =
    "max-h-60 overflow-auto py-1 text-base leading-6 shadow-xs focus:outline-none sm:text-sm sm:leading-5";
  const options =
    "cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-100 text-gray-900";
  const selectedOptions = ["bg-indigo-500 text-white hover:bg-indigo-500"];
  const checker = "absolute inset-y-0 right-0 flex items-center pr-4";

  return {
    container,
    inputBox,
    label,
    openIndicator,
    optionsContainer,
    optionsUL,
    options,
    selectedOptions,
    checker,
  };
};
