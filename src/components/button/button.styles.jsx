import styled from "styled-components";
import { motion } from "framer-motion";

export const PrimaryButton = styled(motion.button)`
  width: 250px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #f5f5f5;
  color: #4caf50;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  border: 2px solid #4caf50;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #4caf50;
    color: #f5f5f5;
  }

  
`;

export const GoogleSignInButton = styled(PrimaryButton)`
  background-color: #f5f5f5;
  border: 2px solid #4285f4;
  color: #4285f4;

  &:hover {
    background-color: #4285f4;
    color: #f5f5f5;
  }
`;

export const AccentButton = styled(PrimaryButton)`
  background-color: #f5f5f5;
  border: 2px solid #ff7043;
  color: #ff7043;
  width: auto;

  &:hover {
    background-color: #ff7043;
    color: #f5f5f5;
  }
`;
