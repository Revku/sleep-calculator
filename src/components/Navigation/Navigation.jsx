import { NavLink } from 'react-router-dom';
import logo from 'src/assets/logo.svg';
import { styled } from 'styled-components';

import menuIcon from 'src/assets/menu.svg';
import closeIcon from 'src/assets/close.svg';
import { useState } from 'react';

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  z-index: 100;
`;

const LogoImage = styled.img`
  width: 40px;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  margin: 10px 0;
  padding: 10px 15px;

  @media (min-width: 700px) {
    margin: 0;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Content = styled.div`
  .active {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 700px) {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    max-width: 350px;
    background-color: #010b12;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(350px);
    transition: transform 0.5s;
    ${({ isOpen }) => (isOpen ? 'transform: translateX(0)' : null)};
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

const LogoText = styled.p`
  display: none;

  @media (min-width: 700px) {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Navigation = () => {
  const [open, setOpen] = useState();

  return (
    <Wrapper>
      <Logo to="/">
        <LogoImage src={logo} alt="Logo" />
        <LogoText>KALKULATOR SNU</LogoText>
      </Logo>

      <MenuIcon src={menuIcon} alt="Open Menu" onClick={() => setOpen(!open)} />
      <Content isOpen={open}>
        <CloseIcon
          src={closeIcon}
          alt="Close menu"
          onClick={() => setOpen(!open)}
        />
        <Link activeClassName="active" to="/">
          Strona Główna
        </Link>
        <Link activeClassName="active" to="/cykle-snu">
          Cykle snu
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Navigation;
