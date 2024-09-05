import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLElement> & DividerProps;
export interface DividerProps {
  thickness?: "sm" | "md" | "lg";
}

export type StyleProps = Pick<DividerProps, "thickness">;
