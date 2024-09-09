import { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";
import { isSameDay } from "../../../utils";
import { getStyles } from "./utils/style";
import Input from "../Input/Input";
import { IconCalendarMonth } from "@tabler/icons-react";

interface CalendarProps {
  inputUI?: ReactElement;
  onDateChange?: (date: Date | null) => void;
  selectedDate?: Date | null;
}

export const Calendar = ({
  inputUI,
  onDateChange,
  selectedDate,
}: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const styles = getStyles();

  const handleDateChange = (date: Date | null) => {
    if (date) setStartDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  const defaultInputUI = (
    <Input
      label="Date"
      value=""
      rightIcon={
        <IconCalendarMonth
          size={15}
          className="text-gray-500 rounded-full hover:bg-gray-200"
        />
      }
    />
  );

  return (
    <DatePicker
      wrapperClassName="w-full relative"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      customInput={inputUI || defaultInputUI}
      selected={selectedDate || startDate}
      onChange={handleDateChange}
      dayClassName={(date: Date) => {
        return twMerge(
          styles.cell,
          isSameDay(date, new Date()) ? "bg-primary text-white" : ""
        );
      }}
    />
  );
};

export default Calendar;
