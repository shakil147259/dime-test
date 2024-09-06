export type Props = React.HTMLAttributes<HTMLUListElement> & SelectProps;
export type SelectProps = {
  label?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
};

export type StyleProps = Pick<SelectProps, "disabled">;
