import styled from "styled-components";
import { motion } from "framer-motion";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
`;
export const Input = styled(motion.input)`
  font: inherit;
  padding: 8px 5px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
 

  &:focus {
    outline: none;
  }
`;
