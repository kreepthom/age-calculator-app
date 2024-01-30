import { ChangeEvent, FormEvent } from 'react';

import DateFieldAtm from '@atoms/date-field-atm'
import IconButtonAtm from '@atoms/icon-button-atm'
import ArrowIcon from '@icons/ArrowIcon'
import TEXT from '@lang/text'

import { IAgeFormData } from '@types';

import './index.css';

interface IAgeForm {
  formState: IAgeFormData;
  handleOnChangeForm: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  errors?: Record<keyof IAgeFormData, string> | null;
}

const AgeForm = ({ handleSubmitForm, formState, handleOnChangeForm, errors }: IAgeForm) => {
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