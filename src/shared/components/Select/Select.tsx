import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import React, { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Props } from "./utils/types";
import { getStyles } from "./utils/styles";

export const Select = forwardRef(
  (
    { label, options, onChange, value, disabled }: Props,
    ref: React.Ref<HTMLUListElement>
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = getStyles({ disabled });
    const handleOptionClick = (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
    };

    return (
      <div className={twMerge(styles.container)}>
        <div
          className={twMerge(styles.inputBox)}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span className="py-[2px] text-zinc-500">
            {options.find((option) => option.value === value)?.label ||
              "Select option"}
          </span>
          <IconChevronDown
            className={twMerge([
              styles.openIndicator,
              isOpen ? "rotate-180" : "",
            ])}
          />
        </div>
        <label htmlFor="outline" className={twMerge(styles.label)}>
          {label}
        </label>

        {isOpen && (
          <div className={styles.optionsContainer}>
            <ul ref={ref} className={styles.optionsUL}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={twMerge(
                    styles.options,
                    value === option.value ? styles.selectedOptions : ""
                  )}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <span
                    className={twMerge(
                      "block truncate",
                      value === option.value ? "font-semibold" : "font-normal"
                    )}
                  >
                    {option.label}
                  </span>

                  {value === option.value && (
                    <span className={styles.checker}>
                      <IconCheck size={18} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default Select;
