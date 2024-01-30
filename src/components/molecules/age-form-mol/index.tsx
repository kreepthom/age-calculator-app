// @packages
import { ChangeEvent, FormEvent } from 'react';

// @scripts
import DateFieldAtm from '@atoms/date-field-atm'
import IconButtonAtm from '@atoms/icon-button-atm'
import ArrowIcon from '@icons/ArrowIcon'
import TEXT from '@lang/text'

// @types
import { AgeFormData } from '@typesDef/ageFormTypes';

// @styles
import './index.css';

interface AgeFormProps {
  formState: AgeFormData;
  handleOnChangeForm: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  errors?: Record<keyof AgeFormData, string> | null;
}

const AgeForm = ({ handleSubmitForm, formState, handleOnChangeForm, errors }: AgeFormProps) => {
  return (
    <form 
    className="calculator__form"
    onSubmit={handleSubmitForm}
  >
    <DateFieldAtm 
      autoFocus
      label={TEXT.DAY}
      name="day"
      maxValue={31}
      onChange={handleOnChangeForm}
      placeholder={TEXT.DD}
      value={formState.day}
      error={errors?.day}
    />
    <DateFieldAtm 
      label={TEXT.MONTH}
      maxValue={12}
      name="month"
      onChange={handleOnChangeForm}
      placeholder={TEXT.MM}
      value={formState.month}
      error={errors?.month}
    />
    <DateFieldAtm 
      label={TEXT.YEAR}
      maxValue={new Date().getFullYear()}
      name="year"
      onChange={handleOnChangeForm}
      placeholder={TEXT.YYYY}
      value={formState.year}
      error={errors?.year}
    />
    <div className="calculator__form-icon">
      <IconButtonAtm  icon={<ArrowIcon className='icon'/>}/>  
    </div>
  </form>
  )
}

export default AgeForm