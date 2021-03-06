import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #e1f1dd;
  height: 75px;
  font-size: 2rem;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #00adb5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled(Link)`
  padding: 1rem 0.7rem;
  cursor: pointer;
  /* text-align: center; */
  text-decoration: none;
  color: #02475e;
  transition: all 0.2s ease-in;
  font-size: 1.7rem;
  font-family: 'Girassol', sans-serif;
  font-weight: bold;
  &:hover {
    color: purple;
  }
  &:focus {
    color: purple;
  }
  @media (max-width: 768px) {
    background-color: #e1f1dd;
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 100%;
    text-align: center;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: purple;
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
 
  span {
    font-weight: 400;
    font-size: 2rem;
    color: #02475e;
  }
`;