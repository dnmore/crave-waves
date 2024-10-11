import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationDesktopContainer = styled.div`
  visibility: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 500;

  @media screen and (min-width: 768px) {
    visibility: visible;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.1em;
  font-weight: 800;
  color: #333333;
  z-index: 50;

  &:hover {
    color: #d32f2f;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  text-transform: uppercase;
  
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #333333;
  z-index: 50;

  &:hover {
    color: #d32f2f;
  }
`;
