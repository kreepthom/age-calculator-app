// @styles
import './index.css';

interface IconButtonProps {
    src?: string;
    alt?: string;
    icon?: JSX.Element;
    onClick?: () => void;
}

const IconButtonAtm = ({ src, alt = 'icon', icon, onClick = () => {} }: IconButtonProps) => {
  return (
    <button 
      className="button"
      onClick={onClick}>
      {icon 
        ? icon
        : (<img 
          className="icon"
          src={src}
          alt={alt}
        />
      )}
    </button>
  )
}

export default IconButtonAtm;