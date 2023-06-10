import { ThemeProvider, styled } from 'styled-components';
import { theme } from 'src/styles/theme';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import Navigation from 'src/components/Navigation/Navigation';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navigation />
        <div>{children}</div>
        <div></div>
      </Wrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
