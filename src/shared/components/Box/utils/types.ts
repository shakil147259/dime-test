import { HTMLAttributes } from "react";

export type Props = React.PropsWithChildren<HTMLAttributes<HTMLDivElement>> &
  BoxProps;
export type BoxProps = {
  width?: number;
  height?: number;
};
