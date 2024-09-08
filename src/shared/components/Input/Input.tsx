import { twMerge } from "tailwind-merge";
import "./utils/styles.css";
import { getStyles } from "./utils/styles";
import { forwardRef } from "react";
import { Props } from "./utils/types";

export const Input = forwardRef(function Input(
  { labelOutlined = false, label, onChange, rightIcon, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  const styles = getStyles({ labelOutlined });

  return (
    <div className={styles.container}>
      <input
        {...rest}
        ref={ref}
        id="outline"
        className={twMerge(styles.input, rest.className)}
        placeholder=""
        value={rest.value}
        autoComplete="off"
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
      {rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null}
      <label htmlFor="outline" className={twMerge(styles.label)}>
        {label}
      </label>
    </div>
  );
});

export default Input;
