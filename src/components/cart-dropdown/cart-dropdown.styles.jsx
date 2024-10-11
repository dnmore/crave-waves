import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  max-width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #e0e0e0;
  background-color: #ffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  top: 75px;
  right: 20px;
  z-index: 50;
  
`;

export const CartItems = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 20px;
`;
