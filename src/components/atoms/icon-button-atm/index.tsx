import './index.css';

interface IconButton {
    src?: string;
    alt?: string;
    icon?: JSX.Element;
    onClick?: () => void;
}

const IconButtonAtm = ({ src, alt = 'icon', icon, onClick = () => {} }: IconButton) => {
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