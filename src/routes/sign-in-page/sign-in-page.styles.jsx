import styled from "styled-components";

export const SignInContainer = styled.div`
  padding: 8rem 0 2rem 0;
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
  max-width: 25rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  place-items:center;
}

  span {
   color: #e94a8a;
   font-size: 13px;
    margin-top: -15px;
    margin-bottom: 10px;
    }
      

  // @media screen and (min-width: 768px) {
  //   padding: 8rem 5rem;
  // }
`;

export const ActionsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 13px;
  }
`;
