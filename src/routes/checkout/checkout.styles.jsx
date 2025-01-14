import styled from "styled-components";
import { motion } from "framer-motion";

export const CheckoutContainer = styled.div`
  margin: 8rem 0 2rem 0;
  display: grid;
  place-items: center;

  .total {
    font-size: 30px;
    font-weight: bold;
  }
`;
export const CheckoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 2rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CheckoutDetails = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  gap: 20px;

  span {
    color: #e94a8a;
    display: block;
    margin: -10px 0 10px 0;
    font-size: 13px;
  }
`;

export const CheckoutAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem 0;
  text-transform: capitalize;
  font-size: 14px;

  h4 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const CheckoutPayment = styled(motion.div)`
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  gap: 20px;

  span {
    font-weight: bold;
    font-size: 16px;
  }
`;
