import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

const RippleEffect = ({
  data,
  disabled,
}) => (
  disabled ? (
    <>
      {data}
    </>
  ) : (
    <Ripples
      disabled={disabled}
    >
      {data}
    </Ripples>
  )
);

RippleEffect.defaultProps = {
  data: null,
  disabled: true,
};

RippleEffect.propTypes = {
  data: PropTypes.any,
  disabled: PropTypes.bool,
};

export default RippleEffect;
