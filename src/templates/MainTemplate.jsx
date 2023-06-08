import { ThemeProvider, styled } from 'styled-components';
import { theme } from 'src/styles/theme';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'src/styles/GlobalStyle';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
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
