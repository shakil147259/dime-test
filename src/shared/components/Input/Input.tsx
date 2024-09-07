import { twMerge } from "tailwind-merge";
import "./utils/styles.css";
import { getStyles } from "./utils/styles";
import { forwardRef } from "react";
import { InputProps } from "./utils/types";

export const Input = forwardRef(function Input(
  { labelOutlined = false, label, onChange, rightIcon, ...rest }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const styles = getStyles({ labelOutlined });

  return (
    <div className={styles.container}>
      <input
        {...rest}
        ref={ref}
        id="outline"
        type="text"
        className={twMerge(styles.input, rest.className)}
        placeholder=""
        value={rest.value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
      {rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null}
      <label
        htmlFor="outline"
        className={twMerge(styles.label, rest.className)}
      >
        {label}
      </label>
    </div>
  );
});

export default Input;
