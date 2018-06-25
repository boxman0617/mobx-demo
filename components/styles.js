import styled from 'styled-components';

export const StyledClock = styled.div`
  padding: 15px;
  color: #00cdbe;
  text-align: center;
  font: 60px menlo, monaco, monospace;
  background-color: ${({ light }) => (light ? '#202020' : '#ff0c0c')};
`;

export const LeftPanel = styled.div`
  width: 500px;
`;

export const FloatingPanel = styled.div`
  position: fixed;
`;

export const StyledTimeValue = styled.span``;

export const Bars = styled.div`
  color: #fff;
`;

export const StyledProgressBarBox = styled.div`
  width: 500px;
  height: 25px;
  border: 1px solid #2b5c63;
  background-color: #303030;
`;
export const StyledProgressBar = styled.div.attrs({
  style: ({ width }) => ({ width }),
})`
  height: 100%;
  background-color: #00cdbe;
`;

export const PageHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 16px;
`;
export const HeaderTitle = styled.h1`
  margin: 0 32px 0 0;
  padding: 0;
`;
export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const StyledLink = styled.a`
  margin-right: 15px;
  text-decoration: underline;
  cursor: pointer;
`;
export const LinkBox = styled.div``;
