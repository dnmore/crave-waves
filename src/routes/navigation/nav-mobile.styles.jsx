import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 500;

  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const NavLinksDropdown = styled.div`
  z-index: 50;
  padding: 20px;
  padding-top: 0;
  
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
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  gap: 10px;
  
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
