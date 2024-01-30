// @packages
import { ChangeEvent, FormEvent, useState } from "react"

// @scripts
import AgeForm from '@molecules/age-form-mol';
import SectionDates from "@molecules/section-date-mol";
import useValidationForm from '@hooks/useValidationForm';
import { ageFormValidationSchema } from '@validations/ageFormValidation';
import { calculateDateDiff } from "@utilities/dates";

// @types
import { AgeFormData } from "@typesDef/ageFormTypes";

// @styles
import './App.css';

function App() {
const DEFAULT_DATA = { day: '', month: '', year: '' };

const [formState, setFormState] = useState<AgeFormData>(DEFAULT_DATA);
const [dateCalculated, setDateCalculated] = useState<AgeFormData>(DEFAULT_DATA);
const [error, triggerValidation] = useValidationForm(ageFormValidationSchema, formState);

const handleOnChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
  setFormState({ 
    ...formState,
    [e.target.name as keyof AgeFormData]: e.target.value,
  })
}

const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const isValid = await triggerValidation();

  if (!isValid) return;

  const diff = calculateDateDiff(+formState.day, +formState.month, +formState.year);
  setDateCalculated(diff);
}

  return (
    <main className="calculator__container">
      <AgeForm 
        errors={error}
        formState={formState}
        handleOnChangeForm={handleOnChangeForm}
        handleSubmitForm={handleSubmitForm}
      />
      <SectionDates 
        dateCalculated={dateCalculated}
      />
    </main>
  )
}

export default App
