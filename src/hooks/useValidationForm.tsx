import * as Yup from 'yup';
import { useState } from 'react';

type TUseValidationForm = <S extends Yup.AnyObjectSchema, D>(Schema: S, data: D)
  => [Record<keyof D, string> | null, () => Promise<boolean>]

const useValidationForm: TUseValidationForm  = (Schema, data) => {
  const [error, setError] = useState<Record<keyof typeof data, string> | null>(null);

  const triggerErrors = async () => {
    try {
      await Schema.validate(data, { abortEarly: false })
      setError(null);
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const fieldsWithErrors = {} as Record<keyof typeof data, string>;
  
        err.inner.forEach(({ path, message }) => fieldsWithErrors[path as keyof typeof data] = message)
  
        setError(fieldsWithErrors)
      }
    }

    return false;
  }

  return [error, triggerErrors]
}

export default useValidationForm;