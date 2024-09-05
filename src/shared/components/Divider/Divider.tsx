import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { getStyles } from "./utils/styles";
import { Props } from "./utils/types";

export const Divider = forwardRef(function Divider(
  { thickness, ...rest }: Props,
  ref: React.Ref<HTMLHRElement>
) {
  const styles = getStyles({ thickness });
  return (
    <hr
      {...rest}
      ref={ref}
      className={twMerge(styles.divider, rest.className)}
    />
  );
});

export default Divider;
