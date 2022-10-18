/// HOC를 해주는 파일
import withContainer from './withContainer';

const withContainers = (WrapperContainers, CustomComponent) => {
  let currentComponent = CustomComponent;

  WrapperContainers.map(WrapperContainer => {
    currentComponent = withContainer(WrapperContainer, currentComponent);

    return null;
  });

  return currentComponent;
};

export default withContainers;