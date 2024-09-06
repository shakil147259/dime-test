import { twMerge } from "tailwind-merge";
import "./utils/styles.css";
import { getStyles } from "./utils/styles";
import { forwardRef } from "react";
import { InputProps } from "./utils/types";

export const Input = forwardRef(function Input(
  { labelOutlined = true, label, rightIcon }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const styles = getStyles({ labelOutlined });
  return (
    <div className={styles.container}>
      <input
        ref={ref}
        id="outline"
        type="text"
        className={twMerge(styles.input)}
        placeholder=""
      />
      {rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null}
      <label htmlFor="outline" className={twMerge(styles.label)}>
        {label}
      </label>
    </div>
  );
});

export default Input;
