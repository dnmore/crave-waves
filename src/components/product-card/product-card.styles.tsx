import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductCardContainer = styled(motion.div)`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const ProductImage = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffc107;
  padding: 1rem 2rem;
  color: #333333;

  h3 {
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
