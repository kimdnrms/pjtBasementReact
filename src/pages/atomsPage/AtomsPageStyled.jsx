import styled, { withTheme } from 'styled-components';

import Span from '../../baseUI/components/atoms/span/Span';
import TextButton from '../../baseUI/components/atoms/textButton/TextButton';

export const AtomWrapper = styled.div`
  margin: auto;
  width: 80%;
  background-color: skyblue;
`;

export const AtomItemWrapper = styled.div`
  margin: 10px; 
`;

export const SpanStyled = withTheme(styled(Span)`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`);

export const TextButtonStyled = withTheme(styled(TextButton)`
`);
