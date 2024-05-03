import PropTypes from 'prop-types';

import { Label } from "./StyledLabel.styled";

export const StyledLabel = ({ $variant, prop }) => {
  return (
    <Label $variant={$variant}>
      {prop}
    </Label>
  );
};

StyledLabel.propTypes = {
  prop: PropTypes.any,
  $variant: PropTypes.string,
};
