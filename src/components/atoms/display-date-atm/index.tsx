// @styles
import './index.css';

interface DisplayDateProps {
    date?: string | number;
    label: string;
}

const DisplayDateAtm = ({ date, label }: DisplayDateProps) => {
  return (
    <div className="date__wrapper">
      <span 
        className="date__number-date"
        data-date={!!date}
      >
        {date || '--'}
      </span>
      <h2 className="date__label">{label}</h2>
    </div>
  )
}

export default DisplayDateAtm