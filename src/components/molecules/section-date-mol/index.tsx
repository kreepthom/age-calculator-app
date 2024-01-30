// @scripts
import TEXT from '@lang/text';
import DisplayDateAtm from '@atoms/display-date-atm';

// @types
import { AgeFormData } from '@typesDef/ageFormTypes';

// @styles
import './index.css';

interface SectionDatesProps {
  dateCalculated: AgeFormData;
}

const SectionDatesMol = ({ dateCalculated }: SectionDatesProps) => {
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