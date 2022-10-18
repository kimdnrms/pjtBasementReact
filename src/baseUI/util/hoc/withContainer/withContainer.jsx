/// HOC를 해주는 파일
import React from 'react';

const withContainer = (WrapperContainer, CustomComponent) => (
  hocProps => (
    <WrapperContainer
      {...hocProps}
      render={
        props => {
          const tempProps = props;
          delete tempProps.render;
          delete tempProps.props;
          delete tempProps.state;
          delete tempProps.updater;
          delete tempProps._reactInternalFiber;
          delete tempProps._reactInternalInstatnce;

          return (
            <CustomComponent {...tempProps} />
          );
        }
      }
    />
  )
);

export default withContainer;