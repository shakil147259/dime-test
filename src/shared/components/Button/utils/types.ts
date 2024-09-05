export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
export type ButtonProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "filled" | "outlined";
};

export type ButtonType = (props: Props) => React.ReactNode;

export type StyleProps = Pick<ButtonProps, "size" | "disabled" | "variant">;
