import { StyleProps } from "./types";

const ThicknessMapper: Record<NonNullable<StyleProps["thickness"]>, string> = {
  lg: "h-[4px]",
  md: "h-[2px]",
  sm: "h-[1px]",
};

export const getStyles = ({ thickness = "sm" }: StyleProps) => {
  const divider = [
    ThicknessMapper[thickness],
    "bg-gray-300",
    "w-full",
    "my-2",
    "",
  ];
  return { divider };
};
