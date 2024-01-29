import { ChangeEvent, FormEvent, useState } from "react"

import AgeForm from '@molecules/age-form-mol';
import SectionDates from "@molecules/section-date-mol";
import useValidationForm from '@hooks/useValidationForm';
import { ageFormSchema } from '@molecules/age-form-mol/schema';
import { calculateDiff } from "@utilities/utils";

import { IFormData } from "@types";

import './App.css';

function App() {
const DEFAULT_DATA = { day: '', month: '', year: '' };

const [formState, setFormState] = useState<IFormData>(DEFAULT_DATA);
const [dateCalculated, setDateCalculated] = useState<IFormData>(DEFAULT_DATA);
const [error, triggerValidation] = useValidationForm(ageFormSchema, formState);

const handleOnChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
  setFormState({ 
    ...formState,
    [e.target.name as keyof IFormData]: e.target.value,
  })
}

const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const isValid = await triggerValidation();

  if (!isValid) return;

  const diff = calculateDiff(+formState.day, +formState.month, +formState.year);
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
