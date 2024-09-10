import React, { forwardRef } from "react";
import { getStyles } from "./utils/style";
import { twMerge } from "tailwind-merge";
import { ButtonType, Props } from "./utils/types";

export const Button: ButtonType = forwardRef<HTMLButtonElement, Props>(
  function Button(
    {
      leftIcon,
      rightIcon,
      disabled,
      size,
      variant,
      children,
      onClick,
      ...rest
    }: Props,
    ref
  ) {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (disabled) {
        event.preventDefault();
      } else {
        if (onClick) onClick(event);
      }
    };

    const styles = getStyles({ size, variant, disabled });

    return (
      <button
        {...rest}
        ref={ref}
        onClick={handleClick}
        className={twMerge(styles.button, rest.className)}
        type={rest.type || "button"}
      >
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </button>
    );
  }
);

export default Button;
