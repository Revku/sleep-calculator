import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  padding: 10px 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const Button = ({ onClick, children }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
