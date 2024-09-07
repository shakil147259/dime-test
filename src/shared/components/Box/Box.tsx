import { forwardRef, Ref } from "react";
import { Props } from "./utils/types";
import { twMerge } from "tailwind-merge";
import { getStyles } from "./utils/styles";

export const Box = forwardRef(
  ({ width, height, children, ...rest }: Props, ref: Ref<HTMLDivElement>) => {
    const styles = getStyles();
    return (
      <div
        {...rest}
        className={twMerge(styles.box, rest.className)}
        style={{ width, height }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
