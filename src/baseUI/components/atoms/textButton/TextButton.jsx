import React from 'react';
import PropTypes from 'prop-types';
import RippleEffect from '../rippleEffect/RippleEffect';
import TextButtonWrapperStyled from './TextButtonStyled';

const TextButton = ({
  textData,
  className,
  onClick,
  disabled,
  disableEffect,
  point,
  ...rest
}) => (
  <TextButtonWrapperStyled
    className={className}
    point={point}
    disabled={disabled}
    {...rest}
  >
    <RippleEffect
      disabled={disabled || disableEffect}
      data={textData}
    />
  </TextButtonWrapperStyled>
);

TextButton.defaultProps = {
  textData: null,
  className: null,
  onClick: () => {},
  disabled: false,
  disableEffect: false,
  point: false,
};

TextButton.propTypes = {
  textData: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  disableEffect: PropTypes.bool,
  point: PropTypes.bool,
};

export default TextButton;
