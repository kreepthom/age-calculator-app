import TEXT from '@lang/text';
import DisplayDateAtm from '@atoms/display-date-atm';

import { IFormData } from '@types';

import './index.css';

interface ISectionDates {
  dateCalculated: IFormData;
}

const SectionDatesMol = ({ dateCalculated }: ISectionDates) => {
  return (
    <section className="calculator__display-date">
      <DisplayDateAtm 
        label={TEXT.YEARS}
        date={dateCalculated.year}
      />
      <DisplayDateAtm 
        label={TEXT.MONTHS}
        date={dateCalculated.month}
      />
      <DisplayDateAtm 
        label={TEXT.DAYS}
        date={dateCalculated.day}
      />
    </section>
  );
};

export default SectionDatesMol