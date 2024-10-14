import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 8rem 0 2rem 0;

  @media screen and (min-width: 768px) {
    padding: 8rem 5rem;
  }
`;
export const CheckoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CheckoutPayment = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
  font-weight: bold;
  font-size: 16px;
  }
`;
