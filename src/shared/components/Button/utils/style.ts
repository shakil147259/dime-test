import { StyleProps } from "./types";

const sizeMapper: Record<NonNullable<StyleProps["size"]>, string> = {
  lg: "h-12 px-[15px]",
  md: "h-10 px-[10px]",
  sm: "h-8 px-[8px]",
};

export const getStyles = ({
  size = "sm",
  variant = "filled",
  disabled,
}: StyleProps) => {
  const button = [
    "inline-flex",
    "gap-[4px]",
    "justify-between",
    "items-center",
    "hover:opacity-80",
    "rounded-[3px]",
    "focus:ring-2 ring-offset-1 focus:outline-none",
    variant == "outlined"
      ? "border-2 border-gray-300 bg-white text-gray-700 focus:ring-gray-400"
      : "bg-primary text-white focus:ring-primary",
    disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : "",
    size ? sizeMapper[size] : "",
  ];

  return {
    button,
  };
};
