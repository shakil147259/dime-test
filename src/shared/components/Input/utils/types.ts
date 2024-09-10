export type Props = React.InputHTMLAttributes<HTMLInputElement> & InputProps;
export type InputProps = {
  label?: string;
  value?: string | number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  labelOutlined?: boolean;
  error?: string;
};

export type StyleProps = Pick<InputProps, "labelOutlined" | "error">;
