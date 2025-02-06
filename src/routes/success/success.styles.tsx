import styled from "styled-components";
import { motion } from "framer-motion";

export const SuccessContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #4caf50;
  color: #f5f5f5;
  text-align: center;

  h2 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
  }
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
