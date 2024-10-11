import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 8rem 0 2rem 0;
  text-align: center;
  color: #333333;

  @media screen and (min-width: 768px) {
    padding: 8rem;
  }
`;

export const MenuTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  padding: 4rem 0;
  margin: 10px 0;
  background-color: #D32F2F;
  color: #faf3e0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 2px rgba(51, 51, 51, 0.44);
`;

export const MenuSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
