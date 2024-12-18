import styled from "styled-components";

export const Loader = styled.div`
  background-color: #E0E0E0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 100000;
`;

export const LoaderElement = styled.span`
  border-radius: 100%;
  border: 5px solid #4CAF50;
  background-color: #4CAF50;
  margin: calc(5px * 2);

  &:nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  &:nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }
  &:nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;
