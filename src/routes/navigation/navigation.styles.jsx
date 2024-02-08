import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  margin: auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  font-family: "Bitter", serif;
  background-color: white;
  z-index: 5;
  opacity: 0.8;
`;

export const Logo = styled(Link)`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: black;


  strong {
    color: #d08a08;
  }
`;

export const NavLinks = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: 16px;
`;
