import styled from "styled-components";

export const MenuContainer = styled.div`
  max-width: 800px;
  margin: 8rem auto 2rem auto;
  text-align: center;
  color: #333333;
`;

export const MenuTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  padding: 4rem 0;
  margin: 10px 0;
  background-color: #d32f2f;
  color: #faf3e0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 2px rgba(51, 51, 51, 0.44);
`;

export const MenuSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
