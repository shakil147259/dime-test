import { RefObject, useEffect } from "react";

interface DropDownAccessibilityProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  ref?: RefObject<HTMLUListElement>;
  openerRef?: RefObject<HTMLDivElement>;
}
export const useAccessibility = ({
  isOpen,
  setIsOpen,
  ref,
  openerRef,
}: DropDownAccessibilityProps) => {
  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
      case "Tab":
        event.preventDefault();
        setIsOpen(false);
        if (openerRef && openerRef.current) openerRef.current.focus();
        break;

      default:
        break;
    }
  };

  const handleClickOutside = (event: Event) => {
    const clickedOnOpener =
      openerRef &&
      openerRef.current &&
      openerRef.current.contains(event.target as Node);
    const clickedOutsideUL =
      ref && ref.current && !ref.current.contains(event.target as Node);

    if (!clickedOnOpener && clickedOutsideUL) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeydown);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("keydown", handleKeydown);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);
};
