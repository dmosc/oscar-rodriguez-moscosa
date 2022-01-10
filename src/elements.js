import styled, {keyframes} from 'styled-components';
import {Card, Tabs} from 'antd';
import {maxDesktopWidth} from './constants';

const appearKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  animation: 1s ${appearKeyFrame};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 3% auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const CardContainer = styled(Card)`
  width: ${(props) => props.width < maxDesktopWidth ? '100vw' : '50vw'};

  > * {
    margin-bottom: 10px;
  }
`;

const TabContainer = styled(Tabs.TabPane)`
  height: 55vh;
  overflow: scroll;
`;

export {MainContainer, ContentContainer, HeaderContainer, CardContainer, TabContainer};
