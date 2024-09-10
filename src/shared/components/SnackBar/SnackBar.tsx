import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface SnackbarProps {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = "info",
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div
      className={twMerge(
        "fixed bottom-5 right-5 px-4 py-2 rounded-md text-white shadow-lg",
        getBackgroundColor()
      )}
    >
      <span>{message}</span>
      <button className="ml-4 text-white font-bold" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
