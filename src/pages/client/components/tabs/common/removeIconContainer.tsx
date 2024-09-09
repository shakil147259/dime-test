import { IconMinus } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export const RemoveIcon = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <span className="w-8 cursor-pointer hover:bg-slate-100 hover:rounded-full p-1">
      <IconMinus
        size={15}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      />
      {children}
    </span>
  );
};

export default RemoveIcon;
