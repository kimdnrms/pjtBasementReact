import React from 'react';
import InputTextWrapperStyled from './InputTextStyled'

const InputText = props => (
  <InputTextWrapperStyled
    type='text'
    {...props}
  />
);

export default InputText;
