import React from 'react';
import InputPasswordWrapperStyled from './InputPasswordStyled'

const InputPassword = props => (
  <InputPasswordWrapperStyled
    type='password'
    {...props}
  />
);

export default InputPassword;
