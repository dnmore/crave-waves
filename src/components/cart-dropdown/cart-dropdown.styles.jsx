import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 85px;
  right: 20px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #d08a08;
  background-color: #d08a08;
  color: white;
  font: inherit;
  transition: all 0.8s ease-in-out;
  border-radius: 4px;

  &:hover {
    opacity: 0.75;
  }
`;
