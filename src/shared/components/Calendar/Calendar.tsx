import { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";
import { isSameDay } from "../../../utils";
import { getStyles } from "./utils/style";

interface CalendarProps {
  inputUI?: ReactElement;
}

export const Calendar = ({ inputUI }: CalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const styles = getStyles();
  return (
    <DatePicker
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      customInput={inputUI}
      selected={startDate}
      onChange={(date) => date && setStartDate(date)}
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
