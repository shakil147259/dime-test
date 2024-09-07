import { Box } from "../../../../../../shared/components";
import { IconCurrencyDollar } from "@tabler/icons-react";

interface InfoBoxProps {
  label: string;
  value: string;
}
export const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <Box height={50} className="bg-tealGray w-full text-white text-lg">
      <span className="capitalize">{label}</span>
      <span className="inline-flex items-center">
        <IconCurrencyDollar size={20} /> {value}
      </span>
    </Box>
  );
};

export default InfoBox;
