import { StyleProps } from "./types";

export const getStyles = ({ as }: StyleProps) => {
  const label = [as == "a" ? "underline" : "", "text-slate-600"];
  return { label };
};
