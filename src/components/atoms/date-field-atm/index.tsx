import { ChangeEvent, InputHTMLAttributes } from "react";

import regex from "@utilities/regex";

import './index.css';

interface IDateField extends InputHTMLAttributes<HTMLInputElement > {
    error?: string;
    label: string;
    maxValue?: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: 'text',
    value: string;
}

const DateFieldAtm = (props: IDateField) => {
  const { 
    value,
    onChange = () => {},
    label,
    maxValue = 100,
    required,
    error,
    ...restProps
  } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => { 
    e.target.value = e.target.value
      .replace(regex.fromAToZ, '')
      .replace(regex.specialCharacters, '');

    if (Number(e.target.value) > maxValue) { 
      e.target.value = String(maxValue);
    }

    onChange(e);
  };

  return (
    <div className="date-field__wrapper">
        <label
          data-has-error={!!error}
          className="date-field__label"
          htmlFor="input"
        >
          {label}
        </label>
        <input 
          data-has-error={!!error}
          id="input"
          placeholder={label}
          autoComplete="off"
          {...restProps}
          className={`date-field__input ${props.className}`}
          type="text"
          required={required}
          onChange={handleOnChange}
          value={value}
        />
        <div className="date-field__label-error">{error}</div>
    </div>
  )
}

export default DateFieldAtm;