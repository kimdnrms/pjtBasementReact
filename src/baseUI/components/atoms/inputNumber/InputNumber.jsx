import React from 'react';
import InputNumberWrapperStyled from './InputNumberStyled'

const InputNumber = props => (
  <InputNumberWrapperStyled
    type='number'
    {...props}
  />
);

export default InputNumber;
