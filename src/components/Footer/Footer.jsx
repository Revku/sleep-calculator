import revkuLogo from 'src/assets/revkuLogo.svg';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  padding: 30px;

  @media (min-width: 700px) {
    font-size: 15px;
    flex-direction: row;
  }
  span {
    margin: 0 10px;
  }

  @media (max-width: 700px) {
    span {
      display: none;
    }
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: center;

  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

const Logo = styled.img`
  margin-left: 8px;
  width: 80px;
  transform: translateY(2.5px);
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Sleep Lab &copy; 2023 </p>
      <span>&bull;</span>{' '}
      <Author>
        Stworzone przez
        <a href="https://revku.dev/" target="_blank" rel="noreferrer">
          <Logo src={revkuLogo} alt="Revku logo" />
        </a>
      </Author>
    </Wrapper>
  );
};

export default Footer;
