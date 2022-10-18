import React from 'react';
import PropTypes from 'prop-types';
import { SpanWrapperStyled } from './SpanStyled';

const Span = props => {
  const {
    children,
  } = props;

  return (
    <SpanWrapperStyled {...props}>
      {children}
    </SpanWrapperStyled>
  );
};

Span.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Span;
