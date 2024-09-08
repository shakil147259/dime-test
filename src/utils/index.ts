import { v4 as uuidv4 } from "uuid";
export const isSameDay = (dateA: Date, dateB: Date) => {
  const sameYear = dateA.getFullYear() === dateB.getFullYear();
  const sameMonth = dateA.getMonth() === dateB.getMonth();
  const sameDay = dateA.getDate() === dateB.getDate();
  if (sameYear && sameMonth && sameDay) {
    return true;
  }
  return false;
};

export const uniqueKey = (prefix: string): string => {
  return `${prefix}-${uuidv4()}`;
};

export const enumToOptions = <T extends string>(enumObj: Record<string, T>) => {
  return Object.keys(enumObj).map((key) => ({
    label: key.split("_").join(" "),
    value: enumObj[key as keyof typeof enumObj],
  }));
};
