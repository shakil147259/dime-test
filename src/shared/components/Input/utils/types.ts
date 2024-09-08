export type Props = React.InputHTMLAttributes<HTMLInputElement> & InputProps;
export type InputProps = {
  label: string;
  value?: string | number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  labelOutlined?: boolean;
};

export type StyleProps = Pick<InputProps, "labelOutlined">;
