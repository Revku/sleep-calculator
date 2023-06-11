import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import MainTemplate from 'src/templates/MainTemplate';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    margin-top: 10px;
    margin-bottom: 30px;
    max-width: 450px;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainTemplate>
      <Helmet>
        <title>Nie znaleziono strony - Kalkulator Snu</title>
      </Helmet>
      <Wrapper>
        <h1>Nie znaleziono strony</h1>
        <p>
          Strona, której szukasz nie została znaleziona. Przepraszam za
          utrudnienia.
        </p>
        <Button onClick={() => navigate('/')}>Powrót do strony głównej</Button>
      </Wrapper>
    </MainTemplate>
  );
};

export default NotFound;
