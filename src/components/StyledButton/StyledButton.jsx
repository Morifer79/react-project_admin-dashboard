import { Button } from "./StyledButton.styled";
import PropTypes from 'prop-types';

export const StyledButton = ({ onClick, $variant, prop }) => {
  return (
    <Button onClick={onClick} $variant={$variant} type="submit">
      {prop}
    </Button>
  );
};

StyledButton.propTypes = {
  onClick: PropTypes.func,
  prop: PropTypes.any,
  $variant: PropTypes.string,
};