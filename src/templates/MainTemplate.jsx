import { ThemeProvider, styled } from 'styled-components';
import { theme } from 'src/styles/theme';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import Navigation from 'src/components/Navigation/Navigation';
import Footer from 'src/components/Footer/Footer';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 100px 1fr 140px;
  max-width: 1200px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FlexWrapper>
        <Wrapper>
          <Navigation />
          <div>{children}</div>
          <Footer />
        </Wrapper>
      </FlexWrapper>
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
