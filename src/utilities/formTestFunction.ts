import * as Yup from 'yup';

const MINIMUM_YEAR = 1800;

export const ValidateDay: Yup.TestFunction = (value, { parent }) => {
  const { year, month } = parent;

  const dayFormatted = Number(value);
  const monthFormatted = Number(month);
  const yearFormatted = Number(year);

  if (!dayFormatted && !monthFormatted) return true;

  const validDay = new Date(yearFormatted || MINIMUM_YEAR, monthFormatted, 0).getDate();

  return dayFormatted <= validDay;
};

export const validateYear = (value: string | number): boolean => {
  if (!value) return true;

  return Number(value) >= MINIMUM_YEAR;
};