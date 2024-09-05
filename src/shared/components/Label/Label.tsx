import React from "react";
import { getStyles } from "./utils/styles";
import { LabelProps } from "./utils/types";
import { twMerge } from "tailwind-merge";

type TextComponent = <C extends React.ElementType = "span">(
  props: LabelProps<C>
) => React.ReactNode | null;

export const Label: TextComponent = React.forwardRef(function Label<
  C extends React.ElementType = "span"
>({ as, children, ...rest }: LabelProps<C>, ref: React.Ref<C>) {
  const Component = as || "span";

  const classes = getStyles({ as: as as string });

  return (
    <Component
      {...rest}
      ref={ref}
      className={twMerge(classes.label, rest.className)}
    >
      {children}
    </Component>
  );
});

export default Label;
