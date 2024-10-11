import styled from "styled-components";

export const SignupContainer = styled.div`
  padding: 6rem 0 2rem 0;
  text-align: center;

  color: #333333;

  h3 {
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-size: 20px;
  }

  p {
    font-size: 13px;
  }

  form {
    padding: 0 2rem;
    display: grid;
    place-items: center;
    margin-bottom: 1rem;
    
  }

  @media screen and (min-width: 768px) {
    padding: 8rem 5rem;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
 

  p {
    color: #e94a8a;
    margin-top: -15px;
    

  }
`;
