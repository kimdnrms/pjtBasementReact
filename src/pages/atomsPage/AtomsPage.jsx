import React from 'react';
import { withContainer } from 'baseUI/util/hoc';
import { AtomsPageContainer } from 'containers/pages/atomsPageContainer';
import {
  AtomWrapper,
  AtomItemWrapper,
  SpanStyled,
  TextButtonStyled,
} from './AtomsPageStyled';

const AtomsPage = () => (
  <AtomWrapper>
    <AtomItemWrapper>
      <SpanStyled> Span Example</SpanStyled>
    </AtomItemWrapper>
    <AtomItemWrapper>
      <TextButtonStyled
        textData="Effect Button"
      />
      <TextButtonStyled
        textData="Normal Button"
        disableEffect
      />      
      <TextButtonStyled
        textData="Big Size Button"
        disableEffect
      />

    </AtomItemWrapper>
  </AtomWrapper>
);

export default withContainer(AtomsPageContainer, AtomsPage);
