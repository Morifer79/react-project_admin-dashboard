import dayjs from "dayjs";

export const changeDate = data => {
  const date = dayjs(data);
  const formattedDate = date.format('MMMM D, YYYY');
  return formattedDate;
};
