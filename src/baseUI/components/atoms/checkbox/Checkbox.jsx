import React from 'react';
import PropTypes from 'prop-types';
import CheckboxWrapperStyled from './CheckboxStyled'

const Checkbox = ({
  // id,
  onClick,
  onChange,
  checked,
  disabled,
  children,
  ...rest
}) => (
  <CheckboxWrapperStyled
    type='checkbox'
    // id={id}
    checked={checked}
    onClick={disabled ? () => {} : onClick}
    onChange={disabled ? () => {} : onChange}
    disabled={disabled}
    {...children}
  />
);

export default TextButton;
