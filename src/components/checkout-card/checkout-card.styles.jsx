import styled from "styled-components";

export const CheckoutCardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #333333;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const CheckoutCardImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const CheckoutCardBody = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #f5f5f5;
  padding: 1rem;
  padding-top: 0;

  h3 {
    text-transform: uppercase;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }

  span {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const QuantityActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    background-color: transparent;
    color: #333333;
    font-size: 20px;
    border: 2px solid #333333;
    padding: 2px 15px;
    border-radius: 20px;
  }
`;

export const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  color: #333333;

  &:hover {
  opacity: 85%}
`;
