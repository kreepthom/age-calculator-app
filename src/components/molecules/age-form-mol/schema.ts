import * as Yup from 'yup';

import TEXT from '@lang/text';
import { ValidateDay, validateYear } from '@utilities/formTestFunction';

export const ageFormSchema = Yup.object().shape({
  day: Yup.string()
    .required(TEXT.RequiredErrorMessage)
    .test('days-number-must-be-into-months-days', TEXT.ValidDayErrorMessage, ValidateDay),
  month: Yup.string().required(TEXT.RequiredErrorMessage),
  year: Yup.string()
    .required(TEXT.RequiredErrorMessage)
    .test('enter-valid-year', TEXT.ValidYearErrorMessage, validateYear),
});