export type Props = React.InputHTMLAttributes<HTMLInputElement> & InputProps;
export type InputProps = {
  label: string;
  value: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelOutlined?: boolean;
};

export type StyleProps = Pick<InputProps, "labelOutlined">;
