import dayjs from "dayjs";

export const parseDate = (date: Date) => {
  return dayjs(date).format("DD/MM/YYYY HH:mm:ss");
};
