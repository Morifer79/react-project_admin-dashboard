import { Button } from "./StyledButton.styled";
import PropTypes from 'prop-types';
import sprite from '../../assets/sprite.svg';

export const StyledButton = ({ onClick, $variant, prop, icon }) => {
  return (
    <Button onClick={onClick} $variant={$variant} type="submit">
      {prop}
      {icon && (
        <svg width="14" height="14">
          <use href={`${sprite}#icon-filter`} />
        </svg>
      )}
    </Button>
  );
};

StyledButton.propTypes = {
  onClick: PropTypes.func,
  prop: PropTypes.any,
  $variant: PropTypes.string,
  icon: PropTypes.any,
};