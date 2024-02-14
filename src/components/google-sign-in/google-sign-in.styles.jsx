import styled from "styled-components";

export const SignInGoogleContainer = styled.div`
  width: 30%;
  margin: auto;

  @media screen and (max-width: 768px){
    width: 80%;
    margin: auto;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;
  border: transparent;
  background-color: #16059a;
  color: white;
  font: inherit;
  transition: all 0.8s ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: #5743ea;
  }
`;
