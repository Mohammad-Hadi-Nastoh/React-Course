
import { propTypes } from 'react-bootstrap/esm/Image';

export function Button({label, onClick, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  );
}

Button.prototypes = {
  label : PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PopTypes.bool,
};


