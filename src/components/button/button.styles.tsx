import styled from "styled-components";
import { motion } from "framer-motion";

export const PrimaryButton = styled(motion.button)`
  width: 250px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #333333;
  color: #f5f5f5;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  border: 2px solid #333333;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const GoogleSignInButton = styled(PrimaryButton)`
  background-color: #0247b6;
  border: 2px solid #0247b6;
  color: #f5f5f5;

  &:hover {
    opacity: 0.8;
  }
`;

export const AccentButton = styled(PrimaryButton)`
  background-color: #9c2602;
  border: 2px solid #9c2602;
  color: #f5f5f5;
  width: auto;

  &:hover {
    opacity: 0.8;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  margin-top: 5px;
  width: 35px;
  height: 35px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
