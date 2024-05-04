import PropTypes from 'prop-types';
import { Status } from './StyledStatus.styled';

export const StyledStatus = ({ $variant, prop }) => {
  return (
    <Status $variant={$variant}>
      {prop}
    </Status>
  );
};

StyledStatus.propTypes = {
  prop: PropTypes.any,
  $variant: PropTypes.string,
};
