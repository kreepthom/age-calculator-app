// @packages
import * as Yup from 'yup';

// @scripts
import TEXT from '@lang/text';

// @constants
const MINIMUM_YEAR = 1800;

const ValidateDay: Yup.TestFunction = (value, { parent }) => {
  const { year, month } = parent;

  const dayFormatted = Number(value);
  const monthFormatted = Number(month);
  const yearFormatted = Number(year);

  if (!dayFormatted && !monthFormatted) return true;

  const validDay = new Date(yearFormatted || MINIMUM_YEAR, monthFormatted, 0).getDate();

  return dayFormatted <= validDay;
};

const validateYear = (value: string | number): boolean => {
  if (!value) return true;

  return Number(value) >= MINIMUM_YEAR;
};

export const ageFormValidationSchema = Yup.object().shape({
  day: Yup.string()
    .required(TEXT.RequiredErrorMessage)
    .test('days-number-must-be-into-months-days', TEXT.ValidDayErrorMessage, ValidateDay),
  month: Yup.string().required(TEXT.RequiredErrorMessage),
  year: Yup.string()
    .required(TEXT.RequiredErrorMessage)
    .test('enter-valid-year', TEXT.ValidYearErrorMessage, validateYear),
});